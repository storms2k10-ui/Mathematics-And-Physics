import { CHAPTERS_DATA, ADVANCED_MATH_11_CHAPTERS, CLASS_INFO_DATA, QUESTIONS_DATA } from '../data/mockData';
import { Chapter, ClassInfo, ClassLevel, FilterState, Question, DifficultyLevel, LeaderboardEntry, TestAttemptRecord } from '../types';
import { FirestoreLeaderboardService } from './firestoreLeaderboard';
import { safeFetchJson } from '../lib/apiHelper';

const LEADERBOARD_STORAGE_KEY = 'mathematics_class_leaderboard_data';
const ATTEMPTS_STORAGE_KEY = 'mathematics_student_attempts_data';

// Default empty initial leaderboard
const DEFAULT_SEED_LEADERBOARD: LeaderboardEntry[] = [];

/**
 * Fisher-Yates robust shuffle algorithm
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Math Data Service Layer
 * Supports Classes 9 and 11 Mathematics
 */
export class MathService {
  /**
   * Retrieves summary info for active classes (9, 11)
   */
  static async getClasses(): Promise<ClassInfo[]> {
    await new Promise((resolve) => setTimeout(resolve, 20));
    return CLASS_INFO_DATA;
  }

  /**
   * Retrieves single class information
   */
  static async getClassInfo(level: ClassLevel): Promise<ClassInfo | undefined> {
    return CLASS_INFO_DATA.find((c) => c.level === level);
  }

  /**
   * Retrieves chapters for a specific class or all
   */
  static async getChapters(classLevel?: ClassLevel, track: string = 'Elementary Mathematics'): Promise<Chapter[]> {
    await new Promise((resolve) => setTimeout(resolve, 20));
    if (track === 'Advanced Mathematics') {
      if (classLevel === 11) {
        return ADVANCED_MATH_11_CHAPTERS;
      }
      return CHAPTERS_DATA.filter((ch) => ch.track === 'Advanced Mathematics' && (!classLevel || ch.class === classLevel));
    }
    if (track.startsWith('Advanced')) {
      return CHAPTERS_DATA.filter((ch) => ch.track === track && (!classLevel || ch.class === classLevel));
    }
    if (classLevel) {
      return CHAPTERS_DATA.filter((ch) => ch.class === classLevel && (!ch.track || ch.track === 'Elementary Mathematics'));
    }
    return CHAPTERS_DATA.filter((ch) => !ch.track || ch.track === 'Elementary Mathematics');
  }

  /**
   * Retrieves a single chapter by ID
   */
  static async getChapterById(chapterId: string): Promise<Chapter | undefined> {
    return CHAPTERS_DATA.find((ch) => ch.id === chapterId);
  }

  /**
   * Retrieves questions for a specific chapter
   */
  static async getQuestionsByChapter(
    chapterId: string, 
    difficultyFilter?: DifficultyLevel | 'all',
    track: string = 'Elementary Mathematics'
  ): Promise<Question[]> {
    await new Promise((resolve) => setTimeout(resolve, 20));
    if (track === 'Advanced Mathematics' || track.startsWith('Advanced')) {
      return [];
    }
    const fullSet = QUESTIONS_DATA.filter((q) => q.chapter_id === chapterId);
    if (difficultyFilter && difficultyFilter !== 'all') {
      return fullSet.filter((q) => q.difficulty === difficultyFilter);
    }
    return fullSet;
  }

  /**
   * Retrieves all questions for a given class level
   */
  static async getQuestionsByClass(
    classLevel: ClassLevel,
    track: string = 'Elementary Mathematics'
  ): Promise<Question[]> {
    await new Promise((resolve) => setTimeout(resolve, 20));
    if (track === 'Advanced Mathematics' || track.startsWith('Advanced')) {
      return [];
    }
    return QUESTIONS_DATA.filter((q) => q.class === classLevel);
  }

  /**
   * Prepares randomized questions for a test/quiz session.
   * Every attempt is shuffled freshly to guarantee unique test permutations.
   */
  static async prepareQuizQuestions(
    chapterId?: string,
    classLevel?: ClassLevel,
    requestedCount?: number,
    difficultyFilter?: DifficultyLevel | 'all'
  ): Promise<Question[]> {
    let pool: Question[] = [];

    if (chapterId) {
      pool = QUESTIONS_DATA.filter((q) => q.chapter_id === chapterId);
    } else if (classLevel) {
      pool = QUESTIONS_DATA.filter((q) => q.class === classLevel);
    } else {
      pool = [...QUESTIONS_DATA];
    }

    if (difficultyFilter && difficultyFilter !== 'all') {
      const filtered = pool.filter((q) => q.difficulty === difficultyFilter);
      if (filtered.length > 0) {
        pool = filtered;
      }
    }

    // Always shuffle the pool for non-deterministic quiz order
    const randomized = shuffleArray(pool);

    if (requestedCount && requestedCount > 0) {
      return randomized.slice(0, Math.min(requestedCount, randomized.length));
    }
    return randomized;
  }

  /**
   * Searches and filters questions based on criteria
   */
  static async searchAndFilterQuestions(filter: FilterState): Promise<Question[]> {
    await new Promise((resolve) => setTimeout(resolve, 20));
    let pool: Question[] = [];

    if (filter.chapterId) {
      pool = QUESTIONS_DATA.filter((q) => q.chapter_id === filter.chapterId);
    } else if (filter.classLevel !== 'all') {
      pool = QUESTIONS_DATA.filter((q) => q.class === filter.classLevel);
    } else {
      pool = [...QUESTIONS_DATA];
    }

    return pool.filter((q) => {
      if (filter.difficulty && filter.difficulty !== 'all' && q.difficulty !== filter.difficulty) {
        return false;
      }
      if (filter.searchQuery && filter.searchQuery.trim()) {
        const query = filter.searchQuery.toLowerCase();
        const inQ = q.question.toLowerCase().includes(query);
        const inCh = q.chapter.toLowerCase().includes(query);
        const inExp = q.explanation.toLowerCase().includes(query);
        const inOpts = [q.option_a, q.option_b, q.option_c, q.option_d].some((opt) =>
          opt.toLowerCase().includes(query)
        );
        return inQ || inCh || inExp || inOpts;
      }
      return true;
    });
  }

  /**
   * Generates a practice set with random questions
   */
  static async getQuickPracticeSet(classLevel?: ClassLevel, count: number = 10): Promise<Question[]> {
    let pool: Question[] = [];
    if (classLevel) {
      pool = QUESTIONS_DATA.filter((q) => q.class === classLevel);
    } else {
      pool = [...QUESTIONS_DATA];
    }

    const shuffled = shuffleArray(pool);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }

  // =========================================================================
  // 🏆 CLOUD ACADEMIC RANKING ENGINE (FIRESTORE CLOUD DATABASE)
  // =========================================================================

  /**
   * Saves a new Academic Ranking entry directly into Cloud Firestore:
   * Enforces chapter deduplication per student per class per track in Firestore.
   */
  static async saveLeaderboardEntry(entry: LeaderboardEntry, uid?: string): Promise<LeaderboardEntry> {
    // 1. Authoritative Cloud Firestore Save
    try {
      await FirestoreLeaderboardService.saveEntry(entry, uid);
    } catch (e) {
      console.error('Firestore cloud save error in saveLeaderboardEntry:', e);
    }

    // 2. Server API Sync (Cross-user server broadcast)
    try {
      const response = await safeFetchJson<{ entry?: LeaderboardEntry }>('/api/leaderboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entry),
      });

      if (response.ok && response.data?.entry) {
        return response.data.entry;
      }
    } catch (e) {
      console.warn('Server sync notice:', e);
    }

    return entry;
  }

  /**
   * Fetches latest global leaderboard entries from Firestore cloud database.
   */
  static async fetchServerLeaderboard(
    classLevel?: ClassLevel | 'all',
    mode?: 'all' | 'practice' | 'exam',
    track?: string | 'all'
  ): Promise<LeaderboardEntry[]> {
    try {
      return await FirestoreLeaderboardService.fetchRanked(classLevel, mode || 'practice', track);
    } catch (err) {
      console.error('Failed to fetch leaderboard from Firestore:', err);
      return [];
    }
  }

  /**
   * Retrieves raw leaderboard entries from Firestore
   */
  static async getLeaderboardEntries(): Promise<LeaderboardEntry[]> {
    return await FirestoreLeaderboardService.fetchRanked('all', 'practice');
  }

  /**
   * Gets ranked leaderboard for a given class (or all classes) from Cloud Firestore
   */
  static async getRankedLeaderboard(
    classLevel?: ClassLevel | 'all',
    modeFilter?: 'all' | 'practice' | 'exam',
    track?: string | 'all'
  ): Promise<LeaderboardEntry[]> {
    return await FirestoreLeaderboardService.fetchRanked(classLevel, modeFilter || 'practice', track);
  }

  /**
   * Clears the leaderboard on server
   */
  static async resetLeaderboard(): Promise<void> {
    try {
      await fetch('/api/leaderboard/reset', { method: 'POST' }).catch(() => {});
    } catch (e) {
      console.error('Failed to reset leaderboard', e);
    }
  }

  /**
   * Clears all custom entries
   */
  static clearLeaderboard(): void {
    // No-op for cloud data
  }
}
