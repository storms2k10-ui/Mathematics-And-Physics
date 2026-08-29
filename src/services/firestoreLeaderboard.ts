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
  Unsubscribe,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { LeaderboardEntry, ClassLevel, UserTestHistory } from '../types';
import { normalizeTrackAndClass } from '../utils/trackUtils';

const LEADERBOARD_COLLECTION = 'leaderboard';
const TEST_RESULTS_COLLECTION = 'test_results';

export class FirestoreLeaderboardService {
  /**
   * Saves a practice or exam score directly to Firestore cloud database.
   * Every test submission is saved as an authoritative record to accumulate candidate's total correct answers and overall accuracy.
   */
  static async saveEntry(entry: LeaderboardEntry, uid?: string): Promise<void> {
    try {
      const entryId = entry.id || `lead_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
      const docRef = doc(db, LEADERBOARD_COLLECTION, entryId);
      
      const normalized = normalizeTrackAndClass(entry);
      const cleanStudentName = (entry.studentName || 'Student Candidate').trim();

      // Save every submission to leaderboard collection with unique ID and strictly verified track/class
      await setDoc(docRef, {
        ...entry,
        id: entryId,
        uid: uid || entry.uid || null,
        email: entry.email || null,
        studentName: cleanStudentName,
        classLevel: normalized.classLevel,
        track: normalized.track,
        timestamp: entry.timestamp || Date.now(),
        updatedAt: serverTimestamp(),
      }, { merge: true });

      // Also save in test_results collection
      await this.saveTestResultRecord({
        ...entry,
        id: entryId,
        track: normalized.track,
        classLevel: normalized.classLevel,
      }, uid);
    } catch (error) {
      console.error('Firestore saveEntry error:', error);
      throw error;
    }
  }

  /**
   * Saves a dedicated test attempt record in Firestore 'test_results' collection
   */
  static async saveTestResultRecord(entry: LeaderboardEntry, uid?: string): Promise<void> {
    try {
      const resultDocId = entry.id || `result_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
      const resultDocRef = doc(db, TEST_RESULTS_COLLECTION, resultDocId);
      const normalized = normalizeTrackAndClass(entry);
      
      await setDoc(resultDocRef, {
        id: resultDocId,
        uid: uid || entry.uid || null,
        email: entry.email || null,
        studentName: entry.studentName,
        classLevel: normalized.classLevel,
        track: normalized.track,
        difficultyTier: entry.difficultyTier || 'Normal',
        chapterId: entry.chapterId || 'general_quiz',
        chapterName: entry.chapterName,
        mode: entry.mode || 'practice',
        correctCount: entry.correctCount,
        totalQuestions: entry.totalQuestions,
        skippedCount: entry.skippedCount || 0,
        scorePercentage: entry.scorePercentage,
        timeSpentSeconds: entry.timeSpentSeconds,
        formattedTime: entry.formattedTime,
        timestamp: entry.timestamp || Date.now(),
        formattedDate: entry.formattedDate || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        completedAt: serverTimestamp(),
        createdAt: serverTimestamp(),
      }, { merge: true });
    } catch (err) {
      console.error('Firestore saveTestResultRecord error:', err);
    }
  }

  /**
   * Fetches user's full test history directly from Cloud Firestore 'test_results' collection
   */
  static async fetchUserTestHistory(uid: string): Promise<UserTestHistory[]> {
    if (!uid) return [];
    try {
      const colRef = collection(db, TEST_RESULTS_COLLECTION);
      const q = query(colRef, where('uid', '==', uid));
      const snap = await getDocs(q);
      const results: UserTestHistory[] = [];

      snap.forEach((docSnap) => {
        const data = docSnap.data();
        const normalized = normalizeTrackAndClass({
          chapterId: data.chapterId,
          chapterName: data.chapterName,
          track: data.track,
          classLevel: data.classLevel,
        });

        results.push({
          id: data.id || docSnap.id,
          chapterId: data.chapterId,
          chapterName: data.chapterName,
          classLevel: normalized.classLevel,
          track: normalized.track,
          difficultyTier: data.difficultyTier || (data.chapterName && data.chapterName.toLowerCase().includes('advanced') ? 'Advanced' : 'Normal'),
          scorePercentage: Number(data.scorePercentage) || 0,
          correctCount: Number(data.correctCount) || 0,
          totalQuestions: Number(data.totalQuestions) || 0,
          skippedCount: Number(data.skippedCount) || 0,
          timeSpentSeconds: Number(data.timeSpentSeconds) || 0,
          formattedTime: data.formattedTime || '0m 00s',
          timestamp: Number(data.timestamp) || Date.now(),
          formattedDate: data.formattedDate || 'Recent',
        });
      });

      // Sort by newest first
      results.sort((a, b) => b.timestamp - a.timestamp);
      return results;
    } catch (err) {
      console.error('Firestore fetchUserTestHistory error:', err);
      return [];
    }
  }

  /**
   * Fetches all test attempts for a specific candidate across Firestore 'leaderboard' and 'test_results' collections
   * with strict class and subject track isolation.
   */
  static async fetchCandidateTestHistory(
    studentName: string,
    uid?: string,
    email?: string,
    classLevel?: ClassLevel,
    track?: string
  ): Promise<LeaderboardEntry[]> {
    const attemptsMap = new Map<string, LeaderboardEntry>();

    try {
      // 1. If UID exists, query test_results by UID
      if (uid) {
        try {
          const trRef = collection(db, TEST_RESULTS_COLLECTION);
          const qUid = query(trRef, where('uid', '==', uid));
          const snapUid = await getDocs(qUid);
          snapUid.forEach((docSnap) => {
            const data = docSnap.data() as LeaderboardEntry;
            if (data && (data.id || docSnap.id)) {
              attemptsMap.set(data.id || docSnap.id, {
                ...data,
                id: data.id || docSnap.id,
              });
            }
          });
        } catch (e) {
          console.warn('Query test_results by uid notice:', e);
        }
      }

      // 2. Query leaderboard collection by studentName
      if (studentName) {
        try {
          const lbRef = collection(db, LEADERBOARD_COLLECTION);
          const qName = query(lbRef, where('studentName', '==', studentName.trim()));
          const snapName = await getDocs(qName);
          snapName.forEach((docSnap) => {
            const data = docSnap.data() as LeaderboardEntry;
            if (data && (data.id || docSnap.id)) {
              attemptsMap.set(data.id || docSnap.id, {
                ...data,
                id: data.id || docSnap.id,
              });
            }
          });
        } catch (e) {
          console.warn('Query leaderboard by name notice:', e);
        }
      }

      // 3. If email exists, query leaderboard by email
      if (email) {
        try {
          const lbRef = collection(db, LEADERBOARD_COLLECTION);
          const qEmail = query(lbRef, where('email', '==', email.trim().toLowerCase()));
          const snapEmail = await getDocs(qEmail);
          snapEmail.forEach((docSnap) => {
            const data = docSnap.data() as LeaderboardEntry;
            if (data && (data.id || docSnap.id)) {
              attemptsMap.set(data.id || docSnap.id, {
                ...data,
                id: data.id || docSnap.id,
              });
            }
          });
        } catch (e) {
          console.warn('Query leaderboard by email notice:', e);
        }
      }
    } catch (err) {
      console.warn('fetchCandidateTestHistory error:', err);
    }

    const allAttempts = Array.from(attemptsMap.values());
    return allAttempts
      .map((item) => {
        const normalized = normalizeTrackAndClass(item);
        return {
          ...item,
          track: normalized.track,
          classLevel: normalized.classLevel,
        };
      })
      .filter((item) => {
        if (!item) return false;
        // Strict Class Isolation
        if (classLevel && Number(item.classLevel) !== Number(classLevel)) return false;
        // Strict Subject Track Isolation
        if (track && item.track !== track) return false;
        return true;
      })
      .sort((a, b) => (Number(b.timestamp) || 0) - (Number(a.timestamp) || 0));
  }

  /**
   * Fetches the ranked leaderboard from Firestore cloud database with strict class and track separation.
   */
  static async fetchRanked(
    classLevel?: ClassLevel | 'all',
    mode: 'all' | 'practice' | 'exam' = 'practice',
    track?: string | 'all'
  ): Promise<LeaderboardEntry[]> {
    try {
      const colRef = collection(db, LEADERBOARD_COLLECTION);
      const snap = await getDocs(colRef);
      const entries: LeaderboardEntry[] = [];
      
      snap.forEach((d) => {
        const rawData = d.data() as LeaderboardEntry;
        const normalized = normalizeTrackAndClass(rawData);
        const data: LeaderboardEntry = {
          ...rawData,
          track: normalized.track,
          classLevel: normalized.classLevel,
        };

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
        // Strict Subject Track isolation check
        if (track && track !== 'all' && data.track !== track) {
          return;
        }
        entries.push(data);
      });

      // Sort by accuracy (desc) -> correct count (desc) -> fastest time (asc) -> newest (desc)
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
        return (Number(b.timestamp) || 0) - (Number(a.timestamp) || 0);
      });

      return entries;
    } catch (error) {
      console.error('Firestore fetchRanked error:', error);
      return [];
    }
  }

  /**
   * Listens to real-time updates from Firestore cloud leaderboard with strict class separation
   */
  static subscribeToLeaderboard(
    classLevel: ClassLevel | 'all',
    onUpdate: (entries: LeaderboardEntry[]) => void,
    track?: string | 'all'
  ): Unsubscribe {
    const colRef = collection(db, LEADERBOARD_COLLECTION);
    const q = query(colRef, limit(1000));

    return onSnapshot(q, (snap) => {
      const entries: LeaderboardEntry[] = [];
      snap.forEach((d) => {
        const rawData = d.data() as LeaderboardEntry;
        const normalized = normalizeTrackAndClass(rawData);
        const data: LeaderboardEntry = {
          ...rawData,
          track: normalized.track,
          classLevel: normalized.classLevel,
        };

        if (classLevel && classLevel !== 'all' && Number(data.classLevel) !== Number(classLevel)) {
          return;
        }
        if (track && track !== 'all' && data.track !== track) {
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
        return (Number(b.timestamp) || 0) - (Number(a.timestamp) || 0);
      });

      onUpdate(entries);
    }, (error) => {
      console.error('Firestore realtime subscription error:', error);
    });
  }

  /**
   * Refreshes ranking records from Firebase server and website, ensuring only ranking history is refreshed
   * while all candidate user profiles and private history remain preserved.
   */
  static async refreshRankingHistory(track?: string | 'all'): Promise<LeaderboardEntry[]> {
    try {
      await fetch('/api/leaderboard/refresh', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      }).catch(() => {});

      const freshCloudEntries = await this.fetchRanked('all', 'practice', track);
      return freshCloudEntries;
    } catch (err) {
      console.error('Failed to refresh ranking history from cloud:', err);
      return [];
    }
  }
}
