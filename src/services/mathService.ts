import { CHAPTERS_DATA, ADVANCED_MATH_11_CHAPTERS, CLASS_INFO_DATA, QUESTIONS_DATA } from '../data/mockData';
import { Chapter, ClassInfo, ClassLevel, FilterState, Question, DifficultyLevel, LeaderboardEntry, TestAttemptRecord } from '../types';
import { FirestoreLeaderboardService } from './firestoreLeaderboard';

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
  // 🏆 ACADEMIC RANKING ENGINE (SERVER SYNC + CLIENT STORAGE + DEDUPLICATION)
  // =========================================================================

  /**
   * Saves a new Academic Ranking entry with chapter deduplication:
   * If a candidate re-attempts the same chapter, it only updates if accuracy improves.
   */
  static async saveLeaderboardEntry(entry: LeaderboardEntry): Promise<LeaderboardEntry> {
    // 1. Optimistic Local Save with Chapter Deduplication
    try {
      const existing = this.getLeaderboardEntries();
      const existingIdx = existing.findIndex(
        (e) =>
          e.studentName.toLowerCase() === entry.studentName.toLowerCase() &&
          e.chapterId === entry.chapterId &&
          Number(e.classLevel) === Number(entry.classLevel) &&
          (e.track || 'Elementary Mathematics') === (entry.track || 'Elementary Mathematics')
      );

      let updated = [...existing];
      if (existingIdx !== -1) {
        const prev = existing[existingIdx];
        if (
          entry.scorePercentage > prev.scorePercentage ||
          (entry.scorePercentage === prev.scorePercentage && entry.timeSpentSeconds < prev.timeSpentSeconds)
        ) {
          updated[existingIdx] = { ...entry, id: prev.id || entry.id };
        }
      } else {
        updated = [entry, ...existing.filter((e) => e.id !== entry.id)];
      }

      localStorage.setItem(LEADERBOARD_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }

    // 2. Persistent Firestore Cloud Save
    try {
      await FirestoreLeaderboardService.saveEntry(entry);
    } catch (e) {
      console.warn('Firestore cloud save notice:', e);
    }

    // 3. Server API Sync (Cross-user server broadcast)
    try {
      const response = await fetch('/api/leaderboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entry),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.entry) {
          // Trigger a background refresh of the full global rankings
          this.fetchServerLeaderboard('all').catch(() => {});
          return data.entry;
        }
      }
    } catch (e) {
      console.warn('Server sync failed or offline, kept in local cache:', e);
    }

    return entry;
  }

  /**
   * Fetches latest global leaderboard entries from server with local fallback.
   */
  static async fetchServerLeaderboard(
    classLevel?: ClassLevel | 'all',
    mode?: 'all' | 'practice' | 'exam',
    track?: string | 'all'
  ): Promise<LeaderboardEntry[]> {
    try {
      const params = new URLSearchParams();
      if (classLevel && classLevel !== 'all') params.append('classLevel', String(classLevel));
      if (mode && mode !== 'all') params.append('mode', mode);
      if (track && track !== 'all') params.append('track', track);

      const res = await fetch(`/api/leaderboard?${params.toString()}`);
      if (res.ok) {
        const json = await res.json();
        if (json.entries && Array.isArray(json.entries)) {
          // Intelligently merge into local cache
          try {
            if (!classLevel || classLevel === 'all') {
              localStorage.setItem(LEADERBOARD_STORAGE_KEY, JSON.stringify(json.entries));
            } else {
              const existing = this.getLeaderboardEntries();
              const otherClassEntries = existing.filter((e) => e.classLevel !== Number(classLevel));
              const merged = [...json.entries, ...otherClassEntries];
              localStorage.setItem(LEADERBOARD_STORAGE_KEY, JSON.stringify(merged));
            }
          } catch {
            // ignore
          }
          return json.entries;
        }
      }
    } catch (err) {
      console.warn('Failed to fetch leaderboard from server, using local fallback:', err);
    }
    return this.getRankedLeaderboard(classLevel, mode, track);
  }

  /**
   * Retrieves raw leaderboard entries, purging any legacy mock seeds.
   */
  static getLeaderboardEntries(): LeaderboardEntry[] {
    try {
      const data = localStorage.getItem(LEADERBOARD_STORAGE_KEY);
      if (!data) {
        return [];
      }
      const parsed = JSON.parse(data) as LeaderboardEntry[];
      if (Array.isArray(parsed)) {
        // Strip out any legacy sample seeds
        const clean = parsed.filter((e) => e && e.id && !e.id.startsWith('lead-seed-'));
        if (clean.length !== parsed.length) {
          localStorage.setItem(LEADERBOARD_STORAGE_KEY, JSON.stringify(clean));
        }
        return clean;
      }
      return [];
    } catch (e) {
      console.error('Failed to parse leaderboard entries', e);
      return [];
    }
  }

  /**
   * Gets ranked leaderboard for a given class (or all classes).
   * Primary sort: Score / Correct Answers (Descending)
   * Secondary sort (Tie-breaker): Time Spent in Seconds (Ascending - fastest is ranked higher)
   * Tertiary sort: Most recent timestamp
   */
  static getRankedLeaderboard(
    classLevel?: ClassLevel | 'all',
    _modeFilter?: 'all' | 'practice' | 'exam',
    track?: string | 'all'
  ): LeaderboardEntry[] {
    const raw = this.getLeaderboardEntries();
    
    // Filter to only practice mode entries
    let filtered = raw.filter((item) => item.mode === 'practice' || !item.mode);

    // Filter by class
    if (classLevel && classLevel !== 'all') {
      filtered = filtered.filter((item) => item.classLevel === Number(classLevel));
    }

    // Filter by track
    if (track && track !== 'all') {
      filtered = filtered.filter((item) => {
        const itemTrack = item.track || 'Elementary Mathematics';
        return itemTrack === track;
      });
    }

    // Sort strictly by:
    // 1. scorePercentage (highest first)
    // 2. correctCount (highest first)
    // 3. timeSpentSeconds (lowest first = faster)
    // 4. timestamp (newest first)
    return [...filtered].sort((a, b) => {
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
  }

  /**
   * Clears the leaderboard and restores default seeds on server and client
   */
  static async resetLeaderboard(): Promise<void> {
    try {
      localStorage.setItem(LEADERBOARD_STORAGE_KEY, JSON.stringify(DEFAULT_SEED_LEADERBOARD));
      await fetch('/api/leaderboard/reset', { method: 'POST' }).catch(() => {});
    } catch (e) {
      console.error('Failed to reset leaderboard', e);
    }
  }

  /**
   * Completely clears all custom & seed entries
   */
  static clearLeaderboard(): void {
    try {
      localStorage.setItem(LEADERBOARD_STORAGE_KEY, JSON.stringify([]));
    } catch (e) {
      console.error('Failed to clear leaderboard', e);
    }
  }
}
