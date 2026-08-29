import { 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  collection, 
  query, 
  orderBy, 
  serverTimestamp,
  updateDoc
} from 'firebase/firestore';
import { db, auth } from '../lib/firebase';
import { 
  Question, 
  ClassLevel, 
  DifficultyLevel, 
  PracticeDifficulty, 
  TestAttempt, 
  AttemptQuestion, 
  UserAnswer,
  StudentProfile 
} from '../types';
import { MathService, shuffleArray } from './mathService';

const TEST_ATTEMPTS_COLLECTION = 'testAttempts';
const ACTIVE_ATTEMPT_KEY = 'active_math_test_attempt_id';
const LOCAL_ATTEMPT_PREFIX = 'attempt_cache_';

export interface CreateAttemptParams {
  chapterId?: string;
  chapterName: string;
  classLevel: ClassLevel;
  track?: string;
  mode?: 'practice' | 'exam';
  difficultyTier?: PracticeDifficulty;
  questionCount?: number;
  student?: StudentProfile;
  userId?: string | null;
  userEmail?: string | null;
  seedQuestions?: Question[];
}

/**
 * Shuffles the 4 options of a question and recalculates the new correct answer key ('A'|'B'|'C'|'D').
 * Ensures:
 * 1. Options are freshly randomized for every new attempt.
 * 2. The mathematically correct answer is 100% preserved.
 */
export function shuffleQuestionOptions(q: Question): {
  options: { A: string; B: string; C: string; D: string };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
} {
  const optA = q.options?.A || q.option_a || '';
  const optB = q.options?.B || q.option_b || '';
  const optC = q.options?.C || q.option_c || '';
  const optD = q.options?.D || q.option_d || '';

  const originalCorrectKey = (q.correct_answer || 'A').toUpperCase() as 'A' | 'B' | 'C' | 'D';
  
  // Track which text was the original correct answer
  const rawList = [
    { text: optA, isCorrect: originalCorrectKey === 'A' },
    { text: optB, isCorrect: originalCorrectKey === 'B' },
    { text: optC, isCorrect: originalCorrectKey === 'C' },
    { text: optD, isCorrect: originalCorrectKey === 'D' },
  ];

  // Shuffle the 4 options
  const shuffled = shuffleArray(rawList);

  const newOptions = {
    A: shuffled[0].text,
    B: shuffled[1].text,
    C: shuffled[2].text,
    D: shuffled[3].text,
  };

  const correctIndex = shuffled.findIndex((item) => item.isCorrect);
  const keys: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
  const newCorrectAnswer = keys[correctIndex !== -1 ? correctIndex : 0];

  return {
    options: newOptions,
    correctAnswer: newCorrectAnswer,
  };
}

/**
 * Selects questions preserving difficulty distribution (Easy, Medium, Hard)
 * and randomizes the order once per attempt.
 */
export function selectBalancedRandomQuestions(
  pool: Question[],
  targetCount: number
): Question[] {
  if (pool.length === 0) return [];
  if (pool.length <= targetCount) {
    return shuffleArray(pool);
  }

  // Partition pool by difficulty
  const easy = pool.filter((q) => q.difficulty === 'Easy');
  const medium = pool.filter((q) => q.difficulty === 'Medium' || !q.difficulty);
  const hard = pool.filter((q) => q.difficulty === 'Hard');

  // If pool has multiple difficulties, sample proportionally
  const total = pool.length;
  const easyTarget = Math.round((easy.length / total) * targetCount);
  const hardTarget = Math.round((hard.length / total) * targetCount);
  const mediumTarget = targetCount - easyTarget - hardTarget;

  const shuffledEasy = shuffleArray(easy).slice(0, Math.min(easyTarget, easy.length));
  const shuffledMedium = shuffleArray(medium).slice(0, Math.min(mediumTarget, medium.length));
  const shuffledHard = shuffleArray(hard).slice(0, Math.min(hardTarget, hard.length));

  let combined = [...shuffledEasy, ...shuffledMedium, ...shuffledHard];

  // If combined didn't reach targetCount due to rounding or small subpools, fill with remaining
  if (combined.length < targetCount) {
    const selectedIds = new Set(combined.map((q) => q.id));
    const remaining = shuffleArray(pool.filter((q) => !selectedIds.has(q.id)));
    combined = [...combined, ...remaining.slice(0, targetCount - combined.length)];
  }

  // Final shuffle of the selected questions
  return shuffleArray(combined).slice(0, targetCount);
}

/**
 * Test Attempt Service
 * Manages test lifecycle in Firestore with local resilience.
 */
export class TestAttemptService {
  /**
   * Generates a new Test Attempt, randomizes questions and options once,
   * and persists the attempt document and subcollections in Firestore.
   */
  static async createAttempt(params: CreateAttemptParams): Promise<{
    attempt: TestAttempt;
    questionsForQuiz: Question[];
  }> {
    const track = params.track || 'Elementary Mathematics';
    const difficultyTier = params.difficultyTier || 'Normal';
    const mode = params.mode || 'practice';
    const count = params.questionCount || 15;

    // 1. Get pool of available questions
    let rawPool: Question[] = [];
    if (params.seedQuestions && params.seedQuestions.length > 0) {
      rawPool = params.seedQuestions;
    } else {
      rawPool = MathService.getAvailableQuestions(
        params.chapterId,
        params.classLevel,
        difficultyTier,
        track
      );
    }

    // 2. Select balanced randomized questions
    const selectedQuestions = selectBalancedRandomQuestions(rawPool, count);

    // 3. Shuffle options for each question and prepare AttemptQuestions
    const attemptId = `att_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const now = Date.now();

    const attemptQuestions: AttemptQuestion[] = selectedQuestions.map((q, idx) => {
      const { options, correctAnswer } = shuffleQuestionOptions(q);
      return {
        id: `aq_${attemptId}_${idx + 1}`,
        orderIndex: idx,
        originalQuestionId: q.id,
        class: q.class || params.classLevel,
        chapterId: q.chapter_id || params.chapterId || 'general_quiz',
        chapterName: q.chapter || params.chapterName,
        subject: q.subject || (track.includes('Physics') ? 'Physics' : track.includes('Chemistry') ? 'Chemistry' : 'Mathematics'),
        question: q.question,
        options,
        correctAnswer,
        explanation: q.explanation,
        difficulty: q.difficulty,
        difficultyTier: q.difficulty_tier || difficultyTier,
        formula: q.formula,
        userAnswer: null,
      };
    });

    const studentName = params.student?.name || params.userEmail?.split('@')[0] || 'Student Candidate';

    const testAttempt: TestAttempt = {
      id: attemptId,
      userId: params.userId || auth.currentUser?.uid || null,
      userEmail: params.userEmail || auth.currentUser?.email || null,
      studentName,
      classLevel: params.classLevel,
      chapterId: params.chapterId || null,
      chapterName: params.chapterName,
      track,
      mode,
      difficultyTier,
      status: 'in_progress',
      totalQuestions: attemptQuestions.length,
      currentQuestionIndex: 0,
      questions: attemptQuestions,
      userAnswers: {},
      correctCount: 0,
      skippedCount: 0,
      scorePercentage: 0,
      timeSpentSeconds: 0,
      createdAt: now,
      updatedAt: now,
    };

    // 4. Save to Local Session for instant resume on refresh
    this.setActiveAttemptId(attemptId);
    this.cacheAttemptLocally(testAttempt);

    // 5. Persist to Firestore cloud database in background
    this.persistAttemptToFirestore(testAttempt).catch((err) => {
      console.warn('Firestore attempt persistence notice:', err);
    });

    // 6. Convert to standard Question[] format for UI components
    const questionsForQuiz = this.convertToStandardQuestions(attemptQuestions);

    return {
      attempt: testAttempt,
      questionsForQuiz,
    };
  }

  /**
   * Persists attempt and its question subcollection to Firestore
   */
  private static async persistAttemptToFirestore(attempt: TestAttempt): Promise<void> {
    try {
      const attemptDocRef = doc(db, TEST_ATTEMPTS_COLLECTION, attempt.id);
      
      // Save root attempt document (excluding bulky question arrays in root doc for fast reads, but store lightweight metadata)
      await setDoc(attemptDocRef, {
        id: attempt.id,
        userId: attempt.userId || null,
        userEmail: attempt.userEmail || null,
        studentName: attempt.studentName,
        classLevel: attempt.classLevel,
        chapterId: attempt.chapterId || null,
        chapterName: attempt.chapterName,
        track: attempt.track,
        mode: attempt.mode,
        difficultyTier: attempt.difficultyTier,
        status: attempt.status,
        totalQuestions: attempt.totalQuestions,
        currentQuestionIndex: attempt.currentQuestionIndex,
        userAnswers: attempt.userAnswers,
        correctCount: attempt.correctCount,
        skippedCount: attempt.skippedCount,
        scorePercentage: attempt.scorePercentage,
        timeSpentSeconds: attempt.timeSpentSeconds,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        // Also save embedded questions for fast one-trip loading
        questions: attempt.questions,
      }, { merge: true });

      // Save subcollection questions: testAttempts/{attemptId}/questions/{aqId}
      const questionsColRef = collection(db, TEST_ATTEMPTS_COLLECTION, attempt.id, 'questions');
      const savePromises = attempt.questions.map((q) => {
        const qDocRef = doc(questionsColRef, q.id);
        return setDoc(qDocRef, {
          ...q,
          updatedAt: serverTimestamp(),
        }, { merge: true });
      });

      await Promise.all(savePromises);
    } catch (error) {
      console.warn('Failed to write attempt to Firestore:', error);
    }
  }

  /**
   * Retrieves an active or saved test attempt from Firestore or local cache
   */
  static async getAttempt(attemptId: string): Promise<TestAttempt | null> {
    if (!attemptId) return null;

    // 1. Try local cache first for instant synchronous response
    const cached = this.getCachedAttempt(attemptId);

    // 2. Query Firestore doc
    try {
      const docRef = doc(db, TEST_ATTEMPTS_COLLECTION, attemptId);
      const snap = await getDoc(docRef);

      if (snap.exists()) {
        const data = snap.data() as TestAttempt;
        let questions = data.questions;

        // If root doc didn't have embedded questions, fetch from subcollection
        if (!questions || questions.length === 0) {
          const qColRef = collection(db, TEST_ATTEMPTS_COLLECTION, attemptId, 'questions');
          const qQuery = query(qColRef, orderBy('orderIndex', 'asc'));
          const qSnap = await getDocs(qQuery);
          questions = [];
          qSnap.forEach((d) => questions.push(d.data() as AttemptQuestion));
        }

        const mergedAttempt: TestAttempt = {
          ...data,
          id: attemptId,
          questions: questions || cached?.questions || [],
        };

        this.cacheAttemptLocally(mergedAttempt);
        return mergedAttempt;
      }
    } catch (e) {
      console.warn('Failed to load attempt from Firestore, using cached attempt:', e);
    }

    return cached;
  }

  /**
   * Saves an individual question answer in real-time
   */
  static async recordQuestionAnswer(
    attemptId: string,
    questionIndex: number,
    answer: UserAnswer,
    totalTimeSpent: number
  ): Promise<void> {
    const cached = this.getCachedAttempt(attemptId);
    if (cached) {
      cached.userAnswers[questionIndex] = answer;
      cached.currentQuestionIndex = questionIndex + 1;
      cached.timeSpentSeconds = totalTimeSpent;
      cached.updatedAt = Date.now();
      
      if (cached.questions[questionIndex]) {
        cached.questions[questionIndex].userAnswer = answer;
      }
      this.cacheAttemptLocally(cached);
    }

    try {
      const docRef = doc(db, TEST_ATTEMPTS_COLLECTION, attemptId);
      await updateDoc(docRef, {
        [`userAnswers.${questionIndex}`]: answer,
        currentQuestionIndex: questionIndex + 1,
        timeSpentSeconds: totalTimeSpent,
        updatedAt: serverTimestamp(),
      });

      // Also update subcollection doc if it exists
      if (cached?.questions[questionIndex]?.id) {
        const qDocRef = doc(db, TEST_ATTEMPTS_COLLECTION, attemptId, 'questions', cached.questions[questionIndex].id);
        await updateDoc(qDocRef, {
          userAnswer: answer,
          updatedAt: serverTimestamp(),
        }).catch(() => {});
      }
    } catch (err) {
      console.warn('Real-time question answer write error:', err);
    }
  }

  /**
   * Completes a test attempt and marks status as completed
   */
  static async completeAttempt(
    attemptId: string,
    finalAnswers: Record<number, UserAnswer>,
    totalTimeSpent: number
  ): Promise<TestAttempt | null> {
    const cached = this.getCachedAttempt(attemptId);
    const questions = cached?.questions || [];
    const totalQ = questions.length;

    const correctCount = Object.values(finalAnswers).filter((a) => a?.isCorrect).length;
    const skippedCount = Object.values(finalAnswers).filter((a) => a?.isSkipped).length;
    const scorePercentage = totalQ > 0 ? Math.round((correctCount / totalQ) * 100) : 0;
    const now = Date.now();

    const updatedAttempt: TestAttempt = {
      ...(cached || {
        id: attemptId,
        studentName: 'Student Candidate',
        classLevel: 9,
        chapterName: 'Mathematics',
        track: 'Elementary Mathematics',
        mode: 'practice',
        difficultyTier: 'Normal',
        questions: [],
        currentQuestionIndex: 0,
        createdAt: now,
      }),
      status: 'completed',
      totalQuestions: totalQ,
      userAnswers: finalAnswers,
      correctCount,
      skippedCount,
      scorePercentage,
      timeSpentSeconds: totalTimeSpent,
      completedAt: now,
      updatedAt: now,
    };

    this.cacheAttemptLocally(updatedAttempt);
    this.clearActiveAttemptId();

    try {
      const docRef = doc(db, TEST_ATTEMPTS_COLLECTION, attemptId);
      await updateDoc(docRef, {
        status: 'completed',
        userAnswers: finalAnswers,
        correctCount,
        skippedCount,
        scorePercentage,
        timeSpentSeconds: totalTimeSpent,
        completedAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    } catch (e) {
      console.warn('Failed to mark attempt completed in Firestore:', e);
    }

    return updatedAttempt;
  }

  /**
   * Abandons current active attempt when user exits early
   */
  static async abandonAttempt(attemptId: string): Promise<void> {
    this.clearActiveAttemptId();
    try {
      const docRef = doc(db, TEST_ATTEMPTS_COLLECTION, attemptId);
      await updateDoc(docRef, {
        status: 'abandoned',
        updatedAt: serverTimestamp(),
      });
    } catch {}
  }

  /**
   * Helper to convert AttemptQuestion[] to standard Question[] for React views
   */
  static convertToStandardQuestions(attemptQuestions: AttemptQuestion[]): Question[] {
    return attemptQuestions.map((aq) => ({
      id: aq.originalQuestionId || aq.id,
      class: aq.class,
      subject: aq.subject,
      chapter_id: aq.chapterId,
      chapter: aq.chapterName,
      question: aq.question,
      options: aq.options,
      option_a: aq.options.A,
      option_b: aq.options.B,
      option_c: aq.options.C,
      option_d: aq.options.D,
      correct_answer: aq.correctAnswer,
      explanation: aq.explanation,
      difficulty: aq.difficulty,
      difficulty_tier: aq.difficultyTier,
      formula: aq.formula,
    }));
  }

  // ================= Local Storage Session Helpers =================

  static getActiveAttemptId(): string | null {
    try {
      return sessionStorage.getItem(ACTIVE_ATTEMPT_KEY) || localStorage.getItem(ACTIVE_ATTEMPT_KEY);
    } catch {
      return null;
    }
  }

  static setActiveAttemptId(id: string): void {
    try {
      sessionStorage.setItem(ACTIVE_ATTEMPT_KEY, id);
      localStorage.setItem(ACTIVE_ATTEMPT_KEY, id);
    } catch {}
  }

  static clearActiveAttemptId(): void {
    try {
      sessionStorage.removeItem(ACTIVE_ATTEMPT_KEY);
      localStorage.removeItem(ACTIVE_ATTEMPT_KEY);
    } catch {}
  }

  static getCachedAttempt(id: string): TestAttempt | null {
    try {
      const raw = localStorage.getItem(`${LOCAL_ATTEMPT_PREFIX}${id}`);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  static cacheAttemptLocally(attempt: TestAttempt): void {
    try {
      localStorage.setItem(`${LOCAL_ATTEMPT_PREFIX}${attempt.id}`, JSON.stringify(attempt));
    } catch {}
  }
}
