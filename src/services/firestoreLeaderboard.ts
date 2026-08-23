import { 
  collection, 
  doc, 
  getDoc,
  setDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  limit, 
  onSnapshot, 
  Unsubscribe 
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { LeaderboardEntry, ClassLevel } from '../types';

const LEADERBOARD_COLLECTION = 'leaderboard';

export class FirestoreLeaderboardService {
  /**
   * Saves a practice or exam score directly to Firestore cloud database.
   * Enforces chapter deduplication: if candidate retakes same chapter, only updates if accuracy improves.
   */
  static async saveEntry(entry: LeaderboardEntry): Promise<void> {
    try {
      const cleanTrack = (entry.track || 'Elementary Mathematics').toLowerCase().replace(/[^a-z0-9]/g, '_');
      const cleanStudent = (entry.studentName || 'student').toLowerCase().replace(/[^a-z0-9]/g, '_');
      const chapterDocId = `rank_${cleanStudent}_c${entry.classLevel}_${entry.chapterId || 'gen'}_${cleanTrack}`;
      
      const docRef = doc(db, LEADERBOARD_COLLECTION, chapterDocId);
      
      // Attempt to check if candidate already has a better attempt for this chapter
      try {
        const existingSnap = await getDoc(docRef);
        if (existingSnap.exists()) {
          const oldData = existingSnap.data() as LeaderboardEntry;
          // If previous accuracy is higher, do not overwrite with a worse score
          if (
            oldData.scorePercentage > entry.scorePercentage ||
            (oldData.scorePercentage === entry.scorePercentage && oldData.timeSpentSeconds <= entry.timeSpentSeconds)
          ) {
            return;
          }
        }
      } catch {
        // Continue if getDoc fails
      }

      await setDoc(docRef, {
        ...entry,
        id: chapterDocId,
        track: entry.track || 'Elementary Mathematics',
        savedAt: Date.now()
      }, { merge: true });
    } catch (error) {
      console.warn('Firestore saveEntry error (falling back):', error);
      throw error;
    }
  }

  /**
   * Fetches the ranked leaderboard from Firestore cloud database.
   */
  static async fetchRanked(
    classLevel?: ClassLevel | 'all',
    mode: 'all' | 'practice' | 'exam' = 'practice',
    track?: string | 'all'
  ): Promise<LeaderboardEntry[]> {
    try {
      const colRef = collection(db, LEADERBOARD_COLLECTION);
      let q = query(colRef);

      if (classLevel && classLevel !== 'all') {
        q = query(colRef, where('classLevel', '==', Number(classLevel)));
      }

      const snap = await getDocs(q);
      const entries: LeaderboardEntry[] = [];
      
      snap.forEach((d) => {
        const data = d.data() as LeaderboardEntry;
        // Strict class isolation check
        if (classLevel && classLevel !== 'all' && Number(data.classLevel) !== Number(classLevel)) {
          return;
        }
        // Exclude legacy mock test data if requested
        if (data.mode === 'exam' || (data.chapterName && data.chapterName.toLowerCase().includes('mock'))) {
          if (mode === 'practice') return;
        }
        if (mode !== 'all' && data.mode && data.mode !== mode) {
          return;
        }
        const entryTrack = data.track || 'Elementary Mathematics';
        if (track && track !== 'all' && entryTrack !== track) {
          return;
        }
        entries.push(data);
      });

      // Sort client-side by accuracy -> correct count -> fastest time -> newest
      entries.sort((a, b) => {
        if (b.scorePercentage !== a.scorePercentage) {
          return b.scorePercentage - a.scorePercentage;
        }
        if (b.correctCount !== a.correctCount) {
          return b.correctCount - a.correctCount;
        }
        if (a.timeSpentSeconds !== b.timeSpentSeconds) {
          return a.timeSpentSeconds - b.timeSpentSeconds;
        }
        return b.timestamp - a.timestamp;
      });

      return entries;
    } catch (error) {
      console.warn('Firestore fetchRanked error:', error);
      return [];
    }
  }

  /**
   * Listens to real-time updates from Firestore cloud leaderboard
   */
  static subscribeToLeaderboard(
    classLevel: ClassLevel | 'all',
    onUpdate: (entries: LeaderboardEntry[]) => void,
    track?: string | 'all'
  ): Unsubscribe {
    const colRef = collection(db, LEADERBOARD_COLLECTION);
    const q = classLevel && classLevel !== 'all'
      ? query(colRef, where('classLevel', '==', Number(classLevel)), limit(100))
      : query(colRef, limit(100));

    return onSnapshot(q, (snap) => {
      const entries: LeaderboardEntry[] = [];
      snap.forEach((d) => {
        const data = d.data() as LeaderboardEntry;
        if (classLevel && classLevel !== 'all' && Number(data.classLevel) !== Number(classLevel)) {
          return;
        }
        const entryTrack = data.track || 'Elementary Mathematics';
        if (track && track !== 'all' && entryTrack !== track) {
          return;
        }
        entries.push(data);
      });

      entries.sort((a, b) => {
        if (b.scorePercentage !== a.scorePercentage) {
          return b.scorePercentage - a.scorePercentage;
        }
        if (b.correctCount !== a.correctCount) {
          return b.correctCount - a.correctCount;
        }
        if (a.timeSpentSeconds !== b.timeSpentSeconds) {
          return a.timeSpentSeconds - b.timeSpentSeconds;
        }
        return b.timestamp - a.timestamp;
      });

      onUpdate(entries);
    }, (error) => {
      console.warn('Firestore realtime subscription error:', error);
    });
  }
}
