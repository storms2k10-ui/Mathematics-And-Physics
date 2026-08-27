import { CHAPTERS_DATA, ADVANCED_MATH_11_CHAPTERS, CLASS_INFO_DATA, QUESTIONS_DATA } from '../data/mockData';
import { Chapter, ClassInfo, ClassLevel, FilterState, Question, DifficultyLevel, PracticeDifficulty, LeaderboardEntry, TestAttemptRecord } from '../types';
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
 * Supports Classes 9, 10, 11, and 12 Mathematics & Physics
 */
export class MathService {
  /**
   * Retrieves summary info for active classes (9, 10, 11, 12)
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
   * Retrieves chapters for a specific class or all tracks
   */
  static async getChapters(classLevel?: ClassLevel, track: string = 'Elementary Mathematics'): Promise<Chapter[]> {
    await new Promise((resolve) => setTimeout(resolve, 20));
    if (track === 'Elementary Physics') {
      return CHAPTERS_DATA.filter((ch) => ch.track === 'Elementary Physics' && (!classLevel || ch.class === classLevel));
    }
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
   * Retrieves available questions matching class/chapter, track, and difficulty tier ('Normal' | 'Advanced')
   */
  static getAvailableQuestions(
    chapterId?: string,
    classLevel?: ClassLevel,
    difficultyTier: PracticeDifficulty = 'Normal',
    track: string = 'Elementary Mathematics'
  ): Question[] {
    const isPhysics = track.toLowerCase().includes('physics');
    let pool: Question[] = [];

    if (chapterId) {
      pool = QUESTIONS_DATA.filter((q) => q.chapter_id === chapterId);
    } else if (classLevel) {
      pool = QUESTIONS_DATA.filter((q) => {
        if (q.class !== classLevel) return false;
        if (isPhysics) {
          return q.subject === 'Physics' || q.chapter_id.startsWith('el-phy');
        }
        return q.subject !== 'Physics';
      });
    } else {
      pool = isPhysics 
        ? QUESTIONS_DATA.filter((q) => q.subject === 'Physics' || q.chapter_id.startsWith('el-phy'))
        : QUESTIONS_DATA.filter((q) => q.subject !== 'Physics');
    }

    if (difficultyTier === 'Advanced') {
      return pool.filter((q) => q.difficulty_tier === 'Advanced');
    }
    // Normal difficulty includes all standard curriculum questions linked to Normal or without explicit tier
    return pool.filter((q) => !q.difficulty_tier || q.difficulty_tier === 'Normal');
  }

  /**
   * Helper to get count of questions available for a given difficulty tier
   */
  static getQuestionCountByDifficulty(
    classLevel: ClassLevel,
    chapterId?: string,
    difficultyTier: PracticeDifficulty = 'Normal',
    track: string = 'Elementary Mathematics'
  ): number {
    return this.getAvailableQuestions(chapterId, classLevel, difficultyTier, track).length;
  }

  /**
   * Retrieves questions for a specific chapter
   */
  static async getQuestionsByChapter(
    chapterId: string, 
    difficultyFilter?: DifficultyLevel | 'all',
    track: string = 'Elementary Mathematics',
    difficultyTier: PracticeDifficulty = 'Normal'
  ): Promise<Question[]> {
    await new Promise((resolve) => setTimeout(resolve, 20));
    let fullSet = this.getAvailableQuestions(chapterId, undefined, difficultyTier, track);
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
    track: string = 'Elementary Mathematics',
    difficultyTier: PracticeDifficulty = 'Normal'
  ): Promise<Question[]> {
    await new Promise((resolve) => setTimeout(resolve, 20));
    return this.getAvailableQuestions(undefined, classLevel, difficultyTier, track);
  }

  /**
   * Helpers for tracking attempted question history to prevent repeats
   */
  static getAttemptHistoryKey(
    userIdentifier?: string, 
    classLevel?: ClassLevel, 
    chapterId?: string, 
    track?: string,
    difficultyTier: PracticeDifficulty = 'Normal'
  ): string {
    const user = userIdentifier ? userIdentifier.trim().toLowerCase() : 'guest';
    const tr = track || 'Elementary Mathematics';
    const cl = classLevel !== undefined ? classLevel : 'all';
    const ch = chapterId || 'all';
    return `attempted_q_${user}_${tr}_cls${cl}_ch${ch}_${difficultyTier}`;
  }

  static getAttemptedQuestionIds(scopeKey: string): string[] {
    try {
      const raw = localStorage.getItem(scopeKey);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  static recordAttemptedQuestionIds(scopeKey: string, questionIds: string[]): void {
    try {
      const current = MathService.getAttemptedQuestionIds(scopeKey);
      const combined = Array.from(new Set([...current, ...questionIds]));
      localStorage.setItem(scopeKey, JSON.stringify(combined));
    } catch (e) {
      console.warn('Failed to save attempted questions history', e);
    }
  }

  /**
   * Prepares randomized questions for a test/quiz session.
   * Tracks question history to exclude attempted questions until the pool is exhausted.
   */
  static async prepareQuizQuestions(
    chapterId?: string,
    classLevel?: ClassLevel,
    requestedCount?: number,
    difficultyFilter?: DifficultyLevel | 'all',
    userIdentifier?: string,
    track: string = 'Elementary Mathematics',
    difficultyTier: PracticeDifficulty = 'Normal'
  ): Promise<Question[]> {
    let pool = this.getAvailableQuestions(chapterId, classLevel, difficultyTier, track);

    if (difficultyFilter && difficultyFilter !== 'all') {
      const filtered = pool.filter((q) => q.difficulty === difficultyFilter);
      if (filtered.length > 0) {
        pool = filtered;
      }
    }

    if (pool.length === 0) return [];

    const scopeKey = MathService.getAttemptHistoryKey(userIdentifier, classLevel, chapterId, track, difficultyTier);
    const attemptedIds = new Set(MathService.getAttemptedQuestionIds(scopeKey));

    // Split into unattempted and already attempted
    const unattempted = pool.filter((q) => !attemptedIds.has(q.id));
    const targetCount = requestedCount && requestedCount > 0 ? Math.min(requestedCount, pool.length) : pool.length;

    let selected: Question[] = [];

    if (unattempted.length >= targetCount) {
      // Plenty of fresh questions available
      const shuffledUnattempted = shuffleArray(unattempted);
      selected = shuffledUnattempted.slice(0, targetCount);
      MathService.recordAttemptedQuestionIds(scopeKey, selected.map((q) => q.id));
    } else if (unattempted.length > 0) {
      // Take all remaining unattempted questions, reset pool history, and fill remainder
      const shuffledUnattempted = shuffleArray(unattempted);
      const remainderCount = targetCount - shuffledUnattempted.length;
      
      // Reset history for this scope
      try {
        localStorage.removeItem(scopeKey);
      } catch {}

      const remainingPool = pool.filter((q) => !shuffledUnattempted.some((u) => u.id === q.id));
      const shuffledRemainder = shuffleArray(remainingPool).slice(0, remainderCount);
      
      selected = [...shuffledUnattempted, ...shuffledRemainder];
      MathService.recordAttemptedQuestionIds(scopeKey, selected.map((q) => q.id));
    } else {
      // Pool completely exhausted: Reset history and pick freshly shuffled set
      try {
        localStorage.removeItem(scopeKey);
      } catch {}

      const shuffledPool = shuffleArray(pool);
      selected = shuffledPool.slice(0, targetCount);
      MathService.recordAttemptedQuestionIds(scopeKey, selected.map((q) => q.id));
    }

    return selected;
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
