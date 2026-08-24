import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  RotateCcw, 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Award, 
  ChevronDown, 
  ChevronUp, 
  User, 
  GraduationCap, 
  Calculator,
  Lightbulb,
  Sparkles,
  Flame,
  Zap,
  Trophy,
  Edit3,
  Check,
  X,
  Home,
  Sun,
  Moon
} from 'lucide-react';
import { Question, ClassLevel, StudentProfile } from '../types';
import { MathService } from '../services/mathService';
import { MathText } from './MathText';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { UserTestHistory } from '../types';

interface ScoreViewProps {
  classLevel: ClassLevel;
  chapterTitle: string;
  questions: Question[];
  userAnswers: Record<number, {
    questionId: string;
    selectedOption: 'A' | 'B' | 'C' | 'D' | null;
    isCorrect: boolean;
    timeSpentSeconds: number;
    timedOut?: boolean;
  }>;
  totalTimeSeconds: number;
  studentProfile?: StudentProfile;
  mode?: 'practice' | 'exam';
  track?: string;
  leaderboardEntryId?: string;
  onRestartQuiz: () => void;
  onSelectAnotherChapter: () => void;
  onBackToClass: (classLevel: ClassLevel) => void;
  onBackToHome?: () => void;
  onOpenLeaderboard?: (track?: any) => void;
}

export const ScoreView: React.FC<ScoreViewProps> = ({
  classLevel,
  chapterTitle,
  questions,
  userAnswers,
  totalTimeSeconds,
  studentProfile,
  mode = 'practice',
  track = 'Elementary Mathematics',
  leaderboardEntryId,
  onRestartQuiz,
  onSelectAnotherChapter,
  onBackToClass,
  onBackToHome,
  onOpenLeaderboard,
}) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { recordTestAttempt } = useAuth();
  const [filterType, setFilterType] = useState<'all' | 'correct' | 'incorrect'>('all');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Maintain consistent entry ID for server updates
  const [attemptEntryId] = useState<string>(() => {
    return leaderboardEntryId || `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  });

  // Student name adjustment & live server sync state
  const [studentName, setStudentName] = useState<string>(() => {
    return studentProfile?.name || 'Student Candidate';
  });
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(studentName);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState<string>('Saved & Synced to Academic Ranking');

  const totalQuestions = questions.length;
  const correctCount = Object.keys(userAnswers).reduce((acc, key) => {
    const ans = userAnswers[Number(key)];
    return ans && ans.isCorrect ? acc + 1 : acc;
  }, 0);
  const incorrectCount = totalQuestions - correctCount;
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const isPerfectScore = percentage === 100;

  // Auto-sync score to Firestore cloud and server on mount
  useEffect(() => {
    const syncCurrentAttempt = async () => {
      try {
        const mins = Math.floor(totalTimeSeconds / 60);
        const secs = totalTimeSeconds % 60;
        const formattedTime = `${mins}m ${secs.toString().padStart(2, '0')}s`;

        await MathService.saveLeaderboardEntry({
          id: attemptEntryId,
          studentName: studentName,
          classLevel: classLevel,
          section: studentProfile?.section || 'Standard',
          chapterId: questions[0]?.chapter_id || 'general_quiz',
          chapterName: chapterTitle,
          mode: mode === 'exam' ? 'exam' : 'practice',
          track: track || 'Elementary Mathematics',
          correctCount,
          totalQuestions,
          scorePercentage: percentage,
          timeSpentSeconds: totalTimeSeconds,
          formattedTime,
          timestamp: Date.now(),
          formattedDate: 'Just now',
        });
      } catch (err) {
        console.warn('Auto-sync score attempt note:', err);
      }
    };
    syncCurrentAttempt();
  }, [attemptEntryId, studentName, classLevel, studentProfile, chapterTitle, questions, mode, correctCount, totalQuestions, percentage, totalTimeSeconds]);

  // Handle name change and instant sync to server leaderboard
  const handleSaveStudentName = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!tempName.trim()) return;
    const newName = tempName.trim();
    setStudentName(newName);
    setIsEditingName(false);
    setIsSyncing(true);
    setSyncStatus('Syncing to Cloud Database...');

    try {
      const mins = Math.floor(totalTimeSeconds / 60);
      const secs = totalTimeSeconds % 60;
      const formattedTime = `${mins}m ${secs.toString().padStart(2, '0')}s`;

      await MathService.saveLeaderboardEntry({
        id: attemptEntryId,
        studentName: newName,
        classLevel: classLevel,
        section: studentProfile?.section || 'Standard',
        chapterId: questions[0]?.chapter_id || 'general_quiz',
        chapterName: chapterTitle,
        mode: mode === 'exam' ? 'exam' : 'practice',
        track: track || 'Elementary Mathematics',
        correctCount,
        totalQuestions,
        scorePercentage: percentage,
        timeSpentSeconds: totalTimeSeconds,
        formattedTime,
        timestamp: Date.now(),
        formattedDate: 'Just now',
      });

      await recordTestAttempt({
        id: attemptEntryId,
        chapterId: questions[0]?.chapter_id || 'general_quiz',
        chapterName: chapterTitle,
        classLevel: classLevel,
        track: track || 'Elementary Mathematics',
        correctCount,
        totalQuestions,
        scorePercentage: percentage,
        timeSpentSeconds: totalTimeSeconds,
        formattedTime,
        timestamp: Date.now(),
        formattedDate: 'Just now',
      });
      setSyncStatus(`Live Synced as "${newName}"`);
    } catch {
      setSyncStatus('Cached locally');
    } finally {
      setIsSyncing(false);
    }
  };

  // Multi-stage firework celebration launcher
  const launchFireworks = () => {
    const duration = 3.5 * 1000;
    const end = Date.now() + duration;

    // Stage 1: Left & Right fireworks cannons
    const interval: any = setInterval(() => {
      if (Date.now() > end) {
        return clearInterval(interval);
      }

      // Fireworks from left corner
      confetti({
        startVelocity: 45,
        spread: 360,
        ticks: 90,
        origin: { x: Math.random() * 0.3, y: Math.random() - 0.2 },
        colors: ['#f59e0b', '#ec4899', '#6366f1', '#10b981', '#38bdf8', '#fbbf24'],
        shapes: ['circle', 'square'],
        scalar: 1.2,
      });

      // Fireworks from right corner
      confetti({
        startVelocity: 45,
        spread: 360,
        ticks: 90,
        origin: { x: 0.7 + Math.random() * 0.3, y: Math.random() - 0.2 },
        colors: ['#e11d48', '#8b5cf6', '#14b8a6', '#facc15', '#f43f5e', '#a855f7'],
        shapes: ['circle', 'square'],
        scalar: 1.2,
      });

      // High altitude center starburst
      confetti({
        particleCount: 50,
        startVelocity: 35,
        spread: 120,
        origin: { x: 0.5, y: 0.4 },
        colors: ['#ffd700', '#ffae00', '#ffffff', '#ff4500'],
      });
    }, 350);
  };

  useEffect(() => {
    if (isPerfectScore) {
      launchFireworks();
    } else if (percentage >= 80) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#10b981', '#f59e0b', '#ec4899'],
      });
    } else if (percentage >= 50) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#6366f1', '#10b981', '#38bdf8', '#fbbf24'],
        scalar: 0.9,
      });
    } else {
      // Subtle encouraging sparkle animation on completion
      confetti({
        particleCount: 30,
        spread: 45,
        origin: { y: 0.7 },
        colors: ['#818cf8', '#a78bfa', '#cbd5e1'],
        scalar: 0.8,
        ticks: 60,
      });
    }
  }, [percentage, isPerfectScore]);

  // Performance Assessment with Dynamic Theme Colors
  const getPerformanceFeedback = () => {
    if (percentage === 100) {
      return {
        title: '100% Flawless Mathematical Accuracy!',
        subtitle: 'Incredible achievement! Every single mathematical question was solved with 100% precision and flawless mastery.',
        badge: '🏆 Perfect 100% Score / Gold Distinction',
        badgeColor: 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black shadow-lg shadow-amber-500/30',
        cardBg: 'bg-gradient-to-br from-amber-500/15 via-yellow-500/10 to-emerald-500/15 dark:from-amber-950/50 dark:via-slate-900 dark:to-emerald-950/40 border-amber-400 dark:border-amber-500 shadow-amber-500/20',
        borderGlow: 'border-amber-400 dark:border-amber-500 animate-firework-glow',
        accentGradient: 'from-amber-500 to-yellow-400',
      };
    }
    if (percentage >= 80) {
      return {
        title: 'Outstanding Mathematical Mastery!',
        subtitle: 'You demonstrated an exceptional command of concepts, formulae, and problem-solving techniques.',
        badge: 'Distinction / Grade A+',
        badgeColor: 'bg-emerald-500 text-white',
        cardBg: 'bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-indigo-500/15 dark:from-emerald-950/50 dark:via-slate-900 dark:to-teal-950/40 border-emerald-400/80 dark:border-emerald-500 shadow-emerald-500/20',
        borderGlow: 'border-emerald-500/70',
        accentGradient: 'from-emerald-500 to-teal-400',
      };
    }
    if (percentage >= 60) {
      return {
        title: 'Great Problem Solving!',
        subtitle: 'Solid conceptual understanding. Review the step-by-step mathematical explanations below to refine minor errors.',
        badge: 'Proficient / Grade A',
        badgeColor: 'bg-indigo-600 text-white',
        cardBg: 'bg-gradient-to-br from-indigo-500/15 via-blue-500/10 to-cyan-500/15 dark:from-indigo-950/50 dark:via-slate-900 dark:to-indigo-950/40 border-indigo-400/80 dark:border-indigo-500 shadow-indigo-500/20',
        borderGlow: 'border-indigo-500/70',
        accentGradient: 'from-indigo-500 to-blue-400',
      };
    }
    if (percentage >= 40) {
      return {
        title: 'Good Attempt!',
        subtitle: 'You have a fair foundation, but further review of fundamental formulae and identities is advised.',
        badge: 'Developing / Grade B',
        badgeColor: 'bg-amber-500 text-white',
        cardBg: 'bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-yellow-500/15 dark:from-amber-950/50 dark:via-slate-900 dark:to-orange-950/40 border-amber-400/80 dark:border-amber-500 shadow-amber-500/20',
        borderGlow: 'border-amber-500/70',
        accentGradient: 'from-amber-500 to-yellow-400',
      };
    }
    return {
      title: 'Practice Needed',
      subtitle: 'Review the step-by-step mathematical explanations below and attempt this chapter again.',
      badge: 'Review Required / Grade C',
      badgeColor: 'bg-rose-500 text-white',
      cardBg: 'bg-gradient-to-br from-rose-500/15 via-pink-500/10 to-purple-500/15 dark:from-rose-950/50 dark:via-slate-900 dark:to-pink-950/40 border-rose-400/80 dark:border-rose-500 shadow-rose-500/20',
      borderGlow: 'border-rose-500/70',
      accentGradient: 'from-rose-500 to-pink-400',
    };
  };

  const feedback = getPerformanceFeedback();

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}m ${s}s`;
  };

  const filteredQuestions = questions.map((q, idx) => ({ q, idx })).filter(({ idx }) => {
    const ans = userAnswers[idx];
    if (filterType === 'correct') return ans?.isCorrect;
    if (filterType === 'incorrect') return !ans?.isCorrect;
    return true;
  });

  return (
    <div id="score-summary-view" className="py-6 sm:py-8 bg-slate-50 dark:bg-slate-950 min-h-screen animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Distraction-free Scorecard Top Navigation Bar */}
        <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2.5">
            {onBackToHome && (
              <button
                id="score-return-home-btn"
                onClick={onBackToHome}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-700 hover:via-indigo-800 hover:to-purple-700 text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-md shadow-indigo-600/25 hover:scale-105 active:scale-95 border border-indigo-400/30"
              >
                <Home className="w-3.5 h-3.5 text-indigo-100" />
                <span>Return to Home</span>
              </button>
            )}
            <button
              id="score-other-chapters-btn"
              onClick={onSelectAnotherChapter}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-md shadow-emerald-600/25 hover:scale-105 active:scale-95 border border-emerald-400/30"
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-100" />
              <span>Other Chapters</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden md:inline text-xs font-semibold text-slate-500 dark:text-slate-400">
              Class {classLevel} Performance Scorecard
            </span>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
              title="Toggle Day/Night theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
            </button>
          </div>
        </div>

        {/* 100% Perfect Score Fireworks Celebration Hero Banner */}
        {isPerfectScore && (
          <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 text-white shadow-2xl space-y-4 animate-slide-fade relative overflow-hidden">
            <div className="absolute inset-0 bg-radial from-white/20 to-transparent pointer-events-none" />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 shadow-lg text-3xl">
                  🎆
                </div>
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-black uppercase tracking-wider text-amber-200">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Flawless 100% Accuracy Masterclass</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white drop-shadow-md">
                    Fireworks Celebration Unlocked!
                  </h2>
                  <p className="text-xs sm:text-sm text-white/90 font-medium">
                    You answered all {totalQuestions} questions with 100% mathematical precision!
                  </p>
                </div>
              </div>

              <button
                onClick={launchFireworks}
                className="px-5 py-3 rounded-2xl bg-white text-slate-900 hover:bg-amber-100 font-extrabold text-xs sm:text-sm shadow-xl transition-all flex items-center gap-2 cursor-pointer shrink-0 hover:scale-105 active:scale-95"
              >
                <span>🎆 Launch Fireworks Again</span>
              </button>
            </div>
          </div>
        )}

        {/* Main Scorecard Header with Dynamic Theme Colors & Centered Metrics */}
        <div className={`rounded-3xl p-6 sm:p-8 border ${feedback.borderGlow} ${feedback.cardBg} shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-sm`}>
          
          <div className="flex flex-col items-center justify-between gap-6 text-center">
            
            {/* Top: Candidate & Chapter Info */}
            <div className="space-y-3 text-center max-w-2xl mx-auto">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className={`px-3.5 py-1 rounded-full text-xs font-black ${feedback.badgeColor} shadow-sm`}>
                  {feedback.badge}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/70 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700">
                  Class {classLevel} • {chapterTitle}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                {feedback.title}
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
                {feedback.subtitle}
              </p>

              {/* Candidate Info with Name Adjustment & Server Leaderboard Auto-Sync */}
              <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-2 max-w-lg mx-auto shadow-xs">
                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 flex items-center justify-center">
                      <User className="w-4 h-4" />
                    </div>
                    {isEditingName ? (
                      <form onSubmit={handleSaveStudentName} className="flex items-center gap-1.5">
                        <input
                          type="text"
                          value={tempName}
                          onChange={(e) => setTempName(e.target.value)}
                          placeholder="Enter your name"
                          autoFocus
                          className="px-2.5 py-1 text-xs rounded-lg border border-indigo-300 dark:border-indigo-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <button
                          type="submit"
                          disabled={isSyncing}
                          className="p-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer"
                          title="Save and sync name to leaderboard"
                        >
                          <Check className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setTempName(studentName);
                            setIsEditingName(false);
                          }}
                          className="p-1 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 cursor-pointer"
                          title="Cancel"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </form>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-600 dark:text-slate-300">
                          Candidate: <strong className="text-slate-900 dark:text-white text-sm font-black">{studentName}</strong>
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            setTempName(studentName);
                            setIsEditingName(true);
                          }}
                          className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                          title="Adjust Candidate Name"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Leaderboard Auto-Sync Status Badge */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-[11px] font-bold text-emerald-800 dark:text-emerald-300">
                    <span className={`w-2 h-2 rounded-full ${isSyncing ? 'bg-amber-500 animate-ping' : 'bg-emerald-500 animate-pulse'}`} />
                    <span>{isSyncing ? 'Syncing...' : syncStatus}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Aligned Twin Circles: Correct Accuracy & Wrong Accuracy in the Center */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-5 my-2">
              {/* Dynamic Light Green Circle: Correct Accuracy - Aligned in Centre */}
              <div className="w-full sm:w-56 flex flex-col items-center justify-center p-4 rounded-2xl bg-emerald-50/90 dark:bg-emerald-950/50 border-2 border-emerald-300 dark:border-emerald-700 shadow-md shadow-emerald-500/10 text-center">
                <div className="w-28 h-28 rounded-full border-4 border-emerald-500 dark:border-emerald-400 flex flex-col items-center justify-center bg-white dark:bg-emerald-950 shadow-inner">
                  <span className="text-3xl font-black text-emerald-600 dark:text-emerald-300 tracking-tight">
                    {percentage}%
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mt-0.5">
                    Correct Accuracy
                  </span>
                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs font-black text-emerald-800 dark:text-emerald-200 block">
                    {correctCount} / {totalQuestions} Correct Questions
                  </span>
                  <span className="text-[11px] text-emerald-700/80 dark:text-emerald-400 font-medium">
                    Validated Answers
                  </span>
                </div>
              </div>

              {/* Dynamic Light Blue Circle: Percentage of Wrong Questions / Error Rate - Aligned in Centre */}
              <div className="w-full sm:w-56 flex flex-col items-center justify-center p-4 rounded-2xl bg-sky-50/90 dark:bg-sky-950/50 border-2 border-sky-300 dark:border-sky-700 shadow-md shadow-sky-500/10 text-center">
                <div className="w-28 h-28 rounded-full border-4 border-sky-500 dark:border-sky-400 flex flex-col items-center justify-center bg-white dark:bg-sky-950 shadow-inner">
                  <span className="text-3xl font-black text-sky-600 dark:text-sky-300 tracking-tight">
                    {totalQuestions > 0 ? Math.round((incorrectCount / totalQuestions) * 100) : 0}%
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-sky-700 dark:text-sky-400 mt-0.5">
                    Error Rate
                  </span>
                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs font-black text-sky-800 dark:text-sky-200 block">
                    {incorrectCount} / {totalQuestions} Wrong Questions
                  </span>
                  <span className="text-[11px] text-sky-700/80 dark:text-sky-400 font-medium">
                    Mistakes to Review
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Primary Action Buttons - Center Aligned in Middle */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-center gap-4 max-w-lg mx-auto w-full">
            <button
              id="score-practice-again-btn"
              onClick={onRestartQuiz}
              className="flex-1 min-w-[160px] py-3.5 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95 border border-indigo-400/20"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Practice Again</span>
            </button>

            {onOpenLeaderboard && (
              <button
                id="score-academic-ranking-btn"
                onClick={() => onOpenLeaderboard(track)}
                className="flex-1 min-w-[160px] py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs shadow-lg shadow-amber-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95 border border-amber-300/30"
              >
                <Trophy className="w-4 h-4 text-amber-100" />
                <span>Academic Ranking</span>
              </button>
            )}
          </div>

        </div>

        {/* Detailed Solutions & Step-by-Step Explanations Section with KaTeX */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Detailed Solutions &amp; Question Review
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Step-by-step mathematical derivations and KaTeX proofs for each question.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
              <button
                onClick={() => setFilterType('all')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  filterType === 'all'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All ({totalQuestions})
              </button>
              <button
                onClick={() => setFilterType('correct')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  filterType === 'correct'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Correct ({correctCount})
              </button>
              <button
                onClick={() => setFilterType('incorrect')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  filterType === 'incorrect'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Incorrect ({incorrectCount})
              </button>
            </div>
          </div>

          {/* Question Review List */}
          <div className="space-y-4">
            {filteredQuestions.map(({ q, idx }) => {
              const ans = userAnswers[idx];
              const isCorrect = ans?.isCorrect;
              const isExpanded = expandedIndex === idx;

              return (
                <div
                  key={q.id}
                  className={`rounded-2xl border transition-all ${
                    isCorrect
                      ? 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/20 dark:bg-emerald-950/10'
                      : 'border-sky-200 dark:border-sky-900/60 bg-sky-50/20 dark:bg-sky-950/10'
                  }`}
                >
                  <div
                    onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                    className="p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0">
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        ) : (
                          <XCircle className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                        )}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                            Question {idx + 1}
                          </span>
                          {ans?.timedOut && (
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                              ⏱️ 1-Min Timed Out (Marked Wrong)
                            </span>
                          )}
                          {!ans?.selectedOption && !ans?.timedOut && !isCorrect && (
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                              Unattempted (Marked Wrong)
                            </span>
                          )}
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
                          <MathText text={q.question} />
                        </div>
                      </div>
                    </div>

                    <button className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 shrink-0 cursor-pointer">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Expanded Solution View */}
                  {isExpanded && (
                    <div className="p-4 sm:p-5 pt-0 border-t border-slate-200/50 dark:border-slate-800 space-y-4">
                      
                      {/* Options Review Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {(['A', 'B', 'C', 'D'] as const).map((opt) => {
                          const isUserChoice = ans?.selectedOption === opt;
                          const isAnswer = q.correct_answer === opt;
                          const optText = q.options?.[opt] || q[`option_${opt.toLowerCase() as 'a' | 'b' | 'c' | 'd'}`] || '';

                          let itemStyle = 'bg-slate-50/80 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300';
                          let badgeStyle = 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300';

                          if (isAnswer) {
                            itemStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 dark:border-emerald-500 text-emerald-950 dark:text-emerald-200 font-semibold ring-1 ring-emerald-400/50';
                            badgeStyle = 'bg-emerald-600 text-white font-bold';
                          } else if (isUserChoice && !isAnswer) {
                            itemStyle = 'bg-sky-50 dark:bg-sky-950/60 border-sky-400 dark:border-sky-500 text-sky-950 dark:text-sky-200 font-semibold ring-1 ring-sky-400/50';
                            badgeStyle = 'bg-sky-600 text-white font-bold';
                          }

                          return (
                            <div
                              key={opt}
                              className={`p-3 rounded-xl border text-xs flex items-center gap-2.5 transition-all ${itemStyle}`}
                            >
                              <span className={`w-6 h-6 rounded-lg font-bold flex items-center justify-center shrink-0 text-[11px] ${badgeStyle}`}>
                                {opt}
                              </span>
                              <div className="flex-1">
                                <MathText text={optText} />
                              </div>
                              {isAnswer && (
                                <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 shrink-0">
                                  <CheckCircle2 className="w-4 h-4" />
                                  <span className="hidden sm:inline">Correct</span>
                                </span>
                              )}
                              {isUserChoice && !isAnswer && (
                                <span className="flex items-center gap-1 text-[11px] font-bold text-rose-600 dark:text-rose-400 shrink-0">
                                  <XCircle className="w-4 h-4" />
                                  <span className="hidden sm:inline">Your Pick</span>
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation box with KaTeX */}
                      <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 border border-indigo-500/30 space-y-2">
                        <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                          <Lightbulb className="w-3.5 h-3.5" />
                          Complete Step-by-Step Mathematical Derivation:
                        </span>
                        <div className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                          <MathText text={q.explanation} />
                        </div>
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
};
