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
  Moon,
  SkipForward,
  FastForward
} from 'lucide-react';
import { Question, ClassLevel, StudentProfile } from '../types';
import { MathService } from '../services/mathService';
import { MathText } from './MathText';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useOffline } from '../context/OfflineContext';
import { UserTestHistory } from '../types';

interface ScoreViewProps {
  classLevel: ClassLevel;
  chapterTitle: string;
  questions: Question[];
  userAnswers: Record<number, {
    questionId: string;
    selectedOption: 'A' | 'B' | 'C' | 'D' | null;
    isCorrect: boolean;
    isSkipped?: boolean;
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
  const { currentUser, userProfile, recordTestAttempt } = useAuth();
  const { isOffline, pendingSyncCount } = useOffline();
  const [filterType, setFilterType] = useState<'all' | 'correct' | 'incorrect' | 'skipped'>('all');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Maintain consistent entry ID for server updates
  const [attemptEntryId] = useState<string>(() => {
    return leaderboardEntryId || `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  });

  // Student name is permanently fixed from candidate registration / user profile
  const studentName = userProfile?.displayName || currentUser?.displayName || studentProfile?.name || 'Student Candidate';

  const totalQuestions = questions.length;
  const correctCount = Object.keys(userAnswers).reduce((acc, key) => {
    const ans = userAnswers[Number(key)];
    return ans && ans.isCorrect ? acc + 1 : acc;
  }, 0);
  const skippedCount = Object.keys(userAnswers).reduce((acc, key) => {
    const ans = userAnswers[Number(key)];
    return ans && ans.isSkipped ? acc + 1 : acc;
  }, 0);
  const incorrectCount = Math.max(0, totalQuestions - correctCount - skippedCount);
  const attemptedCount = correctCount + incorrectCount;
  const overallAccuracy = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : (totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0);
  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const isPerfectScore = percentage === 100 && skippedCount === 0;

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

    return () => clearInterval(interval);
  };

  // Fireworks celebration automatically triggered ONCE only when 100% score is achieved
  useEffect(() => {
    let cleanupFireworks: (() => void) | undefined;
    
    // STRICT RULE: Only auto launch fireworks when user achieves 100% correct score
    if (isPerfectScore) {
      cleanupFireworks = launchFireworks();
    }

    return () => {
      if (cleanupFireworks) cleanupFireworks();
    };
  }, [isPerfectScore]);

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
    if (filterType === 'correct') return Boolean(ans?.isCorrect);
    if (filterType === 'incorrect') return Boolean(!ans?.isCorrect && !ans?.isSkipped);
    if (filterType === 'skipped') return Boolean(ans?.isSkipped);
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
            {isOffline ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-[11px] font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-700/60 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>Offline Saved</span>
              </span>
            ) : (
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/50">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Cloud Synced</span>
              </span>
            )}
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

        {/* Main Scorecard Header with Light Background & Centered Metrics (Compact & Clean) */}
        <div className="max-w-2xl mx-auto rounded-3xl p-4 sm:p-5 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl space-y-3.5 sm:space-y-4 relative overflow-hidden">
          
          <div className="flex flex-col items-center justify-between gap-3 text-center">
            
            {/* Top: Chapter Info & Feedback Title */}
            <div className="space-y-1.5 text-center max-w-xl mx-auto">
              <div className="flex flex-wrap items-center justify-center gap-1.5">
                <span className={`px-3 py-0.5 rounded-full text-[11px] font-black ${feedback.badgeColor} shadow-xs`}>
                  {feedback.badge}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                  Class {classLevel} • {chapterTitle}
                </span>
              </div>

              <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                {feedback.title}
              </h1>

              <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                {feedback.subtitle}
              </p>
            </div>

            {/* Center Aligned Circles: Correct Accuracy, Error Rate & Skipped Questions with Color-Matched Typography & Modern Aesthetic */}
            <div className="w-full flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 my-1">
              
              {/* 1. Correct Card (#059669) */}
              <div
                id="score-metric-correct-card"
                className="flex-1 min-w-[110px] max-w-[155px] sm:min-w-[125px] sm:max-w-[165px] flex flex-col items-center justify-center p-3 rounded-2xl bg-[#059669] text-[#FFFFFF] shadow-lg shadow-[#059669]/25 border border-[rgba(255,255,255,0.20)] text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#059669]/35 group cursor-default"
              >
                {/* Circular Badge with border rgba(255,255,255,0.30) */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[rgba(255,255,255,0.30)] flex flex-col items-center justify-center bg-white/10 backdrop-blur-xs shadow-inner ring-2 ring-white/10 transition-transform duration-300 group-hover:scale-105 p-1">
                  <span className="text-base sm:text-lg font-black text-[#FFFFFF] tracking-tight leading-none drop-shadow-xs">
                    {percentage}%
                  </span>
                  <div className="flex items-center justify-center gap-0.5 mt-1 text-white/85 leading-none">
                    <CheckCircle2 className="w-2.5 h-2.5 shrink-0" />
                    <span className="text-[8px] sm:text-[8.5px] font-black uppercase tracking-wider">
                      Correct
                    </span>
                  </div>
                </div>
                {/* Primary & Secondary Typography */}
                <div className="mt-2 text-center space-y-0.5">
                  <span className="text-[11px] sm:text-xs font-black text-[#FFFFFF] block leading-tight">
                    {correctCount} / {totalQuestions} Correct
                  </span>
                  <span className="text-[9px] sm:text-[9.5px] text-[#D1FAE5] font-medium block leading-tight">
                    Validated Answers
                  </span>
                </div>
              </div>

              {/* 2. Incorrect Card (#DC2626) */}
              <div
                id="score-metric-incorrect-card"
                className="flex-1 min-w-[110px] max-w-[155px] sm:min-w-[125px] sm:max-w-[165px] flex flex-col items-center justify-center p-3 rounded-2xl bg-[#DC2626] text-[#FFFFFF] shadow-lg shadow-[#DC2626]/25 border border-[rgba(255,255,255,0.20)] text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#DC2626]/35 group cursor-default"
              >
                {/* Circular Badge with border rgba(255,255,255,0.30) */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[rgba(255,255,255,0.30)] flex flex-col items-center justify-center bg-white/10 backdrop-blur-xs shadow-inner ring-2 ring-white/10 transition-transform duration-300 group-hover:scale-105 p-1">
                  <span className="text-base sm:text-lg font-black text-[#FFFFFF] tracking-tight leading-none drop-shadow-xs">
                    {totalQuestions > 0 ? Math.round((incorrectCount / totalQuestions) * 100) : 0}%
                  </span>
                  <div className="flex items-center justify-center gap-0.5 mt-1 text-white/85 leading-none">
                    <XCircle className="w-2.5 h-2.5 shrink-0" />
                    <span className="text-[8px] sm:text-[8.5px] font-black uppercase tracking-wider">
                      Incorrect
                    </span>
                  </div>
                </div>
                {/* Primary & Secondary Typography */}
                <div className="mt-2 text-center space-y-0.5">
                  <span className="text-[11px] sm:text-xs font-black text-[#FFFFFF] block leading-tight">
                    {incorrectCount} / {totalQuestions} Wrong
                  </span>
                  <span className="text-[9px] sm:text-[9.5px] text-[#FEE2E2] font-medium block leading-tight">
                    Mistakes to Review
                  </span>
                </div>
              </div>

              {/* 3. Skipped Card (#263A5B) */}
              <div
                id="score-metric-skipped-card"
                className="flex-1 min-w-[110px] max-w-[155px] sm:min-w-[125px] sm:max-w-[165px] flex flex-col items-center justify-center p-3 rounded-2xl bg-[#263A5B] text-[#FFFFFF] shadow-lg shadow-[#263A5B]/25 border border-[rgba(255,255,255,0.20)] text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#263A5B]/35 group cursor-default"
              >
                {/* Circular Badge with border rgba(255,255,255,0.30) */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[rgba(255,255,255,0.30)] flex flex-col items-center justify-center bg-white/10 backdrop-blur-xs shadow-inner ring-2 ring-white/10 transition-transform duration-300 group-hover:scale-105 p-1">
                  <span className="text-base sm:text-lg font-black text-[#FFFFFF] tracking-tight leading-none drop-shadow-xs">
                    {totalQuestions > 0 ? Math.round((skippedCount / totalQuestions) * 100) : 0}%
                  </span>
                  <div className="flex items-center justify-center gap-0.5 mt-1 text-white/85 leading-none">
                    <SkipForward className="w-2.5 h-2.5 shrink-0" />
                    <span className="text-[8px] sm:text-[8.5px] font-black uppercase tracking-wider">
                      Skipped
                    </span>
                  </div>
                </div>
                {/* Primary & Secondary Typography */}
                <div className="mt-2 text-center space-y-0.5">
                  <span className="text-[11px] sm:text-xs font-black text-[#FFFFFF] block leading-tight">
                    {skippedCount} / {totalQuestions} Skipped
                  </span>
                  <span className="text-[9px] sm:text-[9.5px] text-[#DCE6F5] font-medium block leading-tight">
                    Unattempted
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Primary Action Buttons - Center Aligned in Middle (Compact) */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-center gap-3 max-w-md mx-auto w-full">
            <button
              id="score-practice-again-btn"
              onClick={onRestartQuiz}
              className="flex-1 min-w-[140px] py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold text-xs shadow-md shadow-indigo-600/25 transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 border border-indigo-400/20"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Practice Again</span>
            </button>

            {onOpenLeaderboard && (
              <button
                id="score-academic-ranking-btn"
                onClick={() => onOpenLeaderboard(track)}
                className="flex-1 min-w-[140px] py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs shadow-md shadow-amber-500/25 transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 border border-amber-300/30"
              >
                <Trophy className="w-3.5 h-3.5 text-amber-100" />
                <span>View Ranking</span>
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

            {/* Filter Pills with Subtle Light Black / Dark Gray for Skipped */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
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
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Incorrect ({incorrectCount})
              </button>
              <button
                onClick={() => setFilterType('skipped')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  filterType === 'skipped'
                    ? 'bg-black text-white dark:bg-black dark:text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Skipped ({skippedCount})
              </button>
            </div>
          </div>

          {/* Question Review List */}
          <div className="space-y-4">
            {filteredQuestions.map(({ q, idx }) => {
              const ans = userAnswers[idx];
              const isCorrect = Boolean(ans?.isCorrect);
              const isSkipped = Boolean(ans?.isSkipped);
              const isExpanded = expandedIndex === idx;

              return (
                <div
                  key={q.id}
                  className={`rounded-2xl border transition-all ${
                    isSkipped
                      ? 'border-slate-300 dark:border-slate-700 bg-slate-100/80 dark:bg-slate-900/80'
                      : isCorrect
                      ? 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/20 dark:bg-emerald-950/10'
                      : 'border-rose-200 dark:border-rose-900/60 bg-rose-50/20 dark:bg-rose-950/10'
                  }`}
                >
                  <div
                    onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                    className="p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0">
                        {isSkipped ? (
                          <SkipForward className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                        ) : isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        ) : (
                          <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                        )}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                            Question {idx + 1}
                          </span>
                          {isSkipped && (
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-black text-white dark:bg-black dark:text-white border border-slate-700">
                              ⏭️ Skipped Question
                            </span>
                          )}
                          {ans?.timedOut && !isSkipped && (
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                              ⏱️ 1-Min Timed Out (Marked Wrong)
                            </span>
                          )}
                          {!ans?.selectedOption && !ans?.timedOut && !isCorrect && !isSkipped && (
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
                            itemStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-400 dark:border-rose-500 text-rose-950 dark:text-rose-200 font-semibold ring-1 ring-rose-400/50';
                            badgeStyle = 'bg-rose-600 text-white font-bold';
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
                                  <span className="hidden sm:inline">Correct Answer</span>
                                </span>
                              )}
                              {isUserChoice && !isAnswer && (
                                <span className="flex items-center gap-1 text-[11px] font-bold text-rose-600 dark:text-rose-400 shrink-0">
                                  <XCircle className="w-4 h-4" />
                                  <span className="hidden sm:inline">Your Selection</span>
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
