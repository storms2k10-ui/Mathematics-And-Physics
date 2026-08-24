import React, { useState, useMemo, useEffect } from 'react';
import { 
  X, 
  User, 
  Mail, 
  GraduationCap, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  LogOut, 
  Sparkles, 
  BookOpen,
  Award,
  Flame,
  Zap,
  Target,
  Share2,
  Check,
  Calculator,
  Compass,
  Sigma,
  Layers,
  ChevronRight,
  AlertTriangle,
  BarChart3,
  TrendingDown,
  TrendingUp
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
  ReferenceLine,
} from 'recharts';
import { useAuth } from '../context/AuthContext';
import { ClassLevel, Chapter } from '../types';
import { MathText } from './MathText';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectClass?: (lvl: ClassLevel) => void;
  onSelectChapter?: (chapter: Chapter) => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
  onSelectClass,
  onSelectChapter,
}) => {
  const { userProfile: authProfile, signOut, syncWithServer } = useAuth();
  const [copiedShare, setCopiedShare] = useState(false);
  const [now, setNow] = useState<number>(() => Date.now());

  // Real-time ticker for live timestamps
  useEffect(() => {
    if (!isOpen) return;
    const ticker = setInterval(() => {
      setNow(Date.now());
    }, 5000);
    return () => clearInterval(ticker);
  }, [isOpen]);

  // Trigger live sync with server upon opening modal to guarantee latest history
  useEffect(() => {
    if (isOpen) {
      syncWithServer().catch(() => {});
    }
  }, [isOpen]);

  // Format live relative time
  const formatLiveTime = (timestamp?: number) => {
    if (!timestamp) return 'Just now';
    const diffSec = Math.max(0, Math.floor((now - timestamp) / 1000));
    if (diffSec < 10) return 'Just now';
    if (diffSec < 60) return `${diffSec}s ago`;
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) return `${diffMin}m ago`;
    const diffHours = Math.floor(diffMin / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays}d ago`;
    return new Date(timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Format exact date and time
  const formatExactDateTime = (timestamp?: number, fallbackFormatted?: string) => {
    if (timestamp) {
      const d = new Date(timestamp);
      return `${d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} at ${d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`;
    }
    return fallbackFormatted || 'Recent Session';
  };

  // Use authenticated profile or fallback to local cache
  const userProfile = authProfile || (() => {
    try {
      const cached = localStorage.getItem('maths_user_profile_cache');
      if (cached) return JSON.parse(cached);
    } catch {
      // ignore
    }
    const savedName = localStorage.getItem('maths_student_name') || 'Student Candidate';
    return {
      uid: 'guest_student',
      displayName: savedName,
      email: 'Local Candidate Session',
      classLevel: 9 as ClassLevel,
      createdAt: Date.now(),
      testsAttempted: 0,
      totalQuestionsAnswered: 0,
      totalCorrect: 0,
      totalWrong: 0,
      accuracy: 0,
      history: [],
    };
  })();

  const totalQuestions = userProfile.totalQuestionsAnswered || 0;
  const totalCorrect = userProfile.totalCorrect || 0;
  const totalWrong = userProfile.totalWrong || 0;
  const correctPct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  const wrongPct = totalQuestions > 0 ? Math.round((totalWrong / totalQuestions) * 100) : 0;
  const testsAttempted = userProfile.testsAttempted || 0;
  const historyList = userProfile.history || [];
  const latestTimestamp = historyList.length > 0 ? Math.max(...historyList.map(h => h.timestamp || 0)) : userProfile.createdAt;

  // Aggregate performance data by chapter using Recharts
  const chapterPerformanceData = useMemo(() => {
    if (!historyList || historyList.length === 0) {
      return [];
    }

    const map = new Map<string, {
      chapterName: string;
      classLevel: number;
      totalCorrect: number;
      totalQuestions: number;
      attempts: number;
      bestScore: number;
      latestTimestamp: number;
    }>();

    historyList.forEach((item) => {
      const name = (item.chapterName || 'Unknown Chapter').trim();
      const existing = map.get(name);
      if (!existing) {
        map.set(name, {
          chapterName: name,
          classLevel: Number(item.classLevel) || 9,
          totalCorrect: item.correctCount || 0,
          totalQuestions: item.totalQuestions || 0,
          attempts: 1,
          bestScore: item.scorePercentage || 0,
          latestTimestamp: item.timestamp || 0,
        });
      } else {
        existing.totalCorrect += item.correctCount || 0;
        existing.totalQuestions += item.totalQuestions || 0;
        existing.attempts += 1;
        existing.bestScore = Math.max(existing.bestScore, item.scorePercentage || 0);
        if ((item.timestamp || 0) > existing.latestTimestamp) {
          existing.latestTimestamp = item.timestamp || 0;
        }
      }
    });

    return Array.from(map.values()).map((ch) => {
      const avgAccuracy = ch.totalQuestions > 0 ? Math.round((ch.totalCorrect / ch.totalQuestions) * 100) : 0;
      const missed = Math.max(0, ch.totalQuestions - ch.totalCorrect);
      return {
        name: ch.chapterName,
        shortName: ch.chapterName.length > 18 ? ch.chapterName.slice(0, 16) + '…' : ch.chapterName,
        classLevel: ch.classLevel,
        accuracy: avgAccuracy,
        bestScore: ch.bestScore,
        attempts: ch.attempts,
        totalCorrect: ch.totalCorrect,
        totalQuestions: ch.totalQuestions,
        missedQuestions: missed,
        status: avgAccuracy < 50 ? 'critical' : avgAccuracy < 70 ? 'warning' : 'mastered',
      };
    }).sort((a, b) => a.accuracy - b.accuracy); // Ascending order: Lowest scoring (most struggled) chapters first!
  }, [historyList]);

  // Identify struggling chapters (accuracy < 70%)
  const strugglingChapters = useMemo(() => {
    return chapterPerformanceData.filter((c) => c.accuracy < 70);
  }, [chapterPerformanceData]);

  // Dynamic Profile Theme Colors based on Overall Accuracy & Mastery
  const getDynamicTheme = () => {
    if (correctPct >= 85) {
      return {
        levelName: 'Grandmaster Mathematician',
        headerGradient: 'from-amber-600 via-yellow-500 to-emerald-600',
        badgeBg: 'bg-amber-400/30 text-amber-100 border-amber-300/40',
        badgeText: '🏆 Distinction / Gold Tier',
        cardGlow: 'shadow-amber-500/15 border-amber-500/30',
        avatarBg: 'bg-gradient-to-br from-amber-400 to-yellow-600 border-amber-200 text-slate-950 font-black',
        accentRing: 'ring-amber-400/50',
        quote: '$$\\nabla \\times \\mathbf{B} = \\mu_0\\mathbf{J} + \\mu_0\\epsilon_0\\frac{\\partial \\mathbf{E}}{\\partial t} \\quad \\text{and} \\quad e^{i\\pi} + 1 = 0$$',
        quoteTitle: 'Maxwell & Euler Classical Identities',
      };
    }
    if (correctPct >= 70) {
      return {
        levelName: 'Master Problem Solver',
        headerGradient: 'from-emerald-600 via-teal-600 to-indigo-700',
        badgeBg: 'bg-emerald-400/30 text-emerald-100 border-emerald-300/40',
        badgeText: '💎 Master Scholar / Grade A+',
        cardGlow: 'shadow-emerald-500/15 border-emerald-500/30',
        avatarBg: 'bg-gradient-to-br from-emerald-400 to-teal-700 border-emerald-200 text-white font-black',
        accentRing: 'ring-emerald-400/50',
        quote: '$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi} \\quad \\text{and} \\quad x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$',
        quoteTitle: 'Gaussian Integral & Quadratic Principle',
      };
    }
    if (correctPct >= 50) {
      return {
        levelName: 'Active Mathematical Scholar',
        headerGradient: 'from-indigo-600 via-indigo-700 to-purple-700',
        badgeBg: 'bg-indigo-400/30 text-indigo-100 border-indigo-300/40',
        badgeText: '⚡ Active Scholar / Grade A',
        cardGlow: 'shadow-indigo-500/15 border-indigo-500/30',
        avatarBg: 'bg-gradient-to-br from-indigo-500 to-purple-700 border-indigo-200 text-white font-black',
        accentRing: 'ring-indigo-400/50',
        quote: '$$a^2 + b^2 = c^2 \\quad \\text{and} \\quad \\sum_{k=1}^n k = \\frac{n(n+1)}{2}$$',
        quoteTitle: 'Pythagorean & Arithmetic Series Theorems',
      };
    }
    return {
      levelName: 'Developing Candidate',
      headerGradient: 'from-slate-800 via-indigo-900 to-rose-800',
      badgeBg: 'bg-rose-400/30 text-rose-100 border-rose-300/40',
      badgeText: '🌱 Developing Scholar / Grade B',
      cardGlow: 'shadow-purple-500/15 border-purple-500/30',
      avatarBg: 'bg-gradient-to-br from-rose-500 to-purple-800 border-rose-200 text-white font-black',
      accentRing: 'ring-rose-400/50',
      quote: '$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1 \\quad \\text{and} \\quad (a+b)^2 = a^2 + 2ab + b^2$$',
      quoteTitle: 'Fundamental Limits & Algebraic Expansion',
    };
  };

  const theme = getDynamicTheme();

  // Share track record / progress handler
  const handleShareTrackRecord = async () => {
    const shareText = `🎓 Academic Ranking Profile: ${userProfile.displayName}\n📚 Class: Class ${userProfile.classLevel} Mathematics & Physics\n🎯 Overall Accuracy: ${correctPct}%\n✅ Correct Answers: ${totalCorrect}/${totalQuestions} Questions\n📝 Practice Tests Completed: ${testsAttempted}\n⭐ Academic Rating: ${theme.levelName} (${theme.badgeText})\n🔗 View Academic Rankings: ${window.location.origin}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${userProfile.displayName}'s Academic Track Record`,
          text: shareText,
          url: window.location.href,
        });
        setCopiedShare(true);
        setTimeout(() => setCopiedShare(false), 3000);
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(shareText);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 3000);
    } catch {
      // ignore
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className={`bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col max-h-[92vh] ${theme.cardGlow}`}>
        
        {/* Dynamic Profile Header with Mathematical Script & Formula Atmosphere */}
        <div className={`bg-gradient-to-r ${theme.headerGradient} p-5 sm:p-6 text-white relative overflow-hidden flex flex-col justify-between gap-4 shadow-lg`}>
          
          {/* Top Actions: Sign Out + Close */}
          <div className="flex items-center justify-end relative z-10 gap-2">
            <button
              onClick={() => {
                signOut();
                onClose();
              }}
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-white/15 hover:bg-rose-600 text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold shadow-xs"
              title="Sign Out"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Candidate Profile Details & Avatar */}
          <div className="flex items-center gap-4 relative z-10">
            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${theme.avatarBg} flex items-center justify-center border-2 shadow-lg text-2xl sm:text-3xl shrink-0`}>
              {userProfile.displayName?.charAt(0).toUpperCase() || 'S'}
            </div>
            
            <div className="min-w-0">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white truncate">
                {userProfile.displayName}
              </h2>
              <p className="text-xs text-white/80 flex items-center gap-1.5 mt-0.5 font-medium truncate">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{userProfile.email}</span>
              </p>
              <div className="text-[11px] font-bold text-amber-200 mt-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>{theme.levelName}</span>
              </div>
            </div>
          </div>

          {/* Dynamic Mathematical Script Display Box with KaTeX */}
          <div className="p-3 rounded-2xl bg-black/25 backdrop-blur-md border border-white/20 relative z-10 space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-amber-200/90">
              <span>Mathematical Script &amp; Guiding Principle</span>
              <span className="text-white/70">{theme.quoteTitle}</span>
            </div>
            <div className="text-xs sm:text-sm text-white overflow-x-auto py-1 font-serif">
              <MathText text={theme.quote} displayMode={true} />
            </div>
          </div>

        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 overflow-y-auto">

          {/* Real-time Live Submissions Count & Time & Date Sync Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 px-4 py-3 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200/70 dark:border-indigo-800/60 shadow-xs">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <div className="text-xs font-bold text-indigo-950 dark:text-indigo-200">
                <span>{historyList.length} Live Submissions Synced</span>
                <span className="text-slate-400 font-normal ml-1.5 hidden sm:inline">
                  • Real-time cloud sync active
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              <Clock className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
              <span>
                Synced <strong className="text-indigo-600 dark:text-indigo-400">{formatLiveTime(latestTimestamp)}</strong>
                <span className="hidden md:inline text-slate-400 ml-1">({formatExactDateTime(latestTimestamp)})</span>
              </span>
            </div>
          </div>
          
          {/* Accuracy & Error Rates Section: Correct Accuracy & Wrong Accuracy Centered */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Overall Accuracy &amp; Performance Analytics
              </h4>
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                {testsAttempted} Tests Logged
              </span>
            </div>
            
            {/* Center Aligned Twin Circles: Correct Accuracy & Wrong Accuracy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Light Green Circle: Correct Accuracy - Aligned in Centre */}
              <div className="p-5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border-2 border-emerald-300 dark:border-emerald-700/80 flex flex-col items-center justify-center text-center gap-3 shadow-xs">
                <div className="w-24 h-24 rounded-full border-4 border-emerald-500 dark:border-emerald-400 bg-white dark:bg-emerald-900/50 flex flex-col items-center justify-center shadow-inner">
                  <span className="text-2xl font-black text-emerald-600 dark:text-emerald-300">
                    {correctPct}%
                  </span>
                  <span className="text-[10px] font-black uppercase text-emerald-700 dark:text-emerald-400 tracking-wider">
                    Overall Accuracy
                  </span>
                </div>

                <div className="space-y-1 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Total Correct Questions</span>
                  </div>
                  <p className="text-2xl font-black text-emerald-900 dark:text-emerald-100">
                    {totalCorrect}{' '}
                    <span className="text-xs font-normal text-emerald-700/80 dark:text-emerald-400">
                      / {totalQuestions} answered
                    </span>
                  </p>
                  <p className="text-[11px] text-emerald-700 dark:text-emerald-400">
                    Validated step-by-step mathematical answers
                  </p>
                </div>
              </div>

              {/* Dynamic Light Blue Circle: Error Rate / Missed Questions - Aligned in Centre */}
              <div className="p-5 rounded-2xl bg-sky-50/80 dark:bg-sky-950/40 border-2 border-sky-300 dark:border-sky-700/80 flex flex-col items-center justify-center text-center gap-3 shadow-xs">
                <div className="w-24 h-24 rounded-full border-4 border-sky-500 dark:border-sky-400 bg-white dark:bg-sky-900/50 flex flex-col items-center justify-center shadow-inner">
                  <span className="text-2xl font-black text-sky-600 dark:text-sky-300">
                    {wrongPct}%
                  </span>
                  <span className="text-[10px] font-black uppercase text-sky-700 dark:text-sky-400 tracking-wider">
                    Error Rate
                  </span>
                </div>

                <div className="space-y-1 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-sky-800 dark:text-sky-300 text-xs font-bold">
                    <XCircle className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                    <span>Missed Questions</span>
                  </div>
                  <p className="text-2xl font-black text-sky-900 dark:text-sky-100">
                    {totalWrong}{' '}
                    <span className="text-xs font-normal text-sky-700/80 dark:text-sky-400">
                      errors to review
                    </span>
                  </p>
                  <p className="text-[11px] text-sky-700 dark:text-sky-400">
                    Targeted review recommended for missed questions
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* 📊 RECHARTS VISUAL REPRESENTATION OF CHAPTER PERFORMANCE & STRUGGLE IDENTIFICATION */}
          <div className="space-y-4 pt-1">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4 text-indigo-500" />
                <span>Chapter-by-Chapter Performance &amp; Struggle Identification</span>
              </h4>
              <span className="text-[11px] text-slate-400 font-medium">
                {chapterPerformanceData.length} Chapters Analyzed
              </span>
            </div>

            {chapterPerformanceData.length === 0 ? (
              <div className="p-6 text-center rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
                <BarChart3 className="w-8 h-8 text-slate-400 mx-auto" />
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  No chapter performance data yet
                </p>
                <p className="text-[11px] text-slate-500 max-w-md mx-auto">
                  Take chapter practice tests to visualize your accuracy chart and identify topics that require targeted revision.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                
                {/* Visual Struggle Identification Alert Box */}
                {strugglingChapters.length > 0 ? (
                  <div className="p-4 rounded-2xl bg-rose-50/80 dark:bg-rose-950/30 border-2 border-rose-200 dark:border-rose-800/60 flex flex-col sm:flex-row items-start gap-3.5 shadow-xs">
                    <div className="w-9 h-9 rounded-xl bg-rose-100 dark:bg-rose-900/60 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h5 className="text-xs font-bold text-rose-900 dark:text-rose-200 flex items-center gap-1.5">
                          <span>Focus Needed on {strugglingChapters.length} Chapter{strugglingChapters.length > 1 ? 's' : ''}</span>
                        </h5>
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-rose-200/80 dark:bg-rose-900 text-rose-800 dark:text-rose-200">
                          Lowest Accuracy
                        </span>
                      </div>
                      <p className="text-[11px] text-rose-700 dark:text-rose-300 leading-relaxed">
                        Students encounter the most difficulty with:
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {strugglingChapters.map((ch, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 shadow-2xs"
                          >
                            <TrendingDown className="w-3 h-3 text-rose-500" />
                            <span>{ch.name}</span>
                            <span className="text-[10px] text-rose-500 font-extrabold ml-1">({ch.accuracy}%)</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border-2 border-emerald-200 dark:border-emerald-800/60 flex items-center gap-3 shadow-xs">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <h5 className="text-xs font-bold text-emerald-900 dark:text-emerald-200">
                        High Mastery Maintained across Tested Chapters
                      </h5>
                      <p className="text-[11px] text-emerald-700 dark:text-emerald-300">
                        All attempted chapters currently exceed the 70% proficiency benchmark. Keep practicing to maintain excellence!
                      </p>
                    </div>
                  </div>
                )}

                {/* Recharts Bar Chart Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="font-bold text-slate-700 dark:text-slate-300">
                      Accuracy by Chapter (Lowest to Highest)
                    </span>
                    <div className="flex items-center gap-3 text-[10px] font-semibold">
                      <span className="flex items-center gap-1 text-rose-600 dark:text-rose-400">
                        <span className="w-2.5 h-2.5 rounded-xs bg-rose-500 inline-block"></span>
                        <span>&lt; 50% Struggle</span>
                      </span>
                      <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                        <span className="w-2.5 h-2.5 rounded-xs bg-amber-500 inline-block"></span>
                        <span>50-69% Review</span>
                      </span>
                      <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                        <span className="w-2.5 h-2.5 rounded-xs bg-emerald-500 inline-block"></span>
                        <span>≥ 70% Mastered</span>
                      </span>
                    </div>
                  </div>

                  <div className="h-64 w-full pt-2">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={chapterPerformanceData}
                        margin={{ top: 10, right: 10, left: -20, bottom: 40 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} opacity={0.5} />
                        <XAxis 
                          dataKey="shortName" 
                          tick={{ fontSize: 10, fill: '#64748b' }}
                          interval={0}
                          angle={-25}
                          textAnchor="end"
                          height={50}
                        />
                        <YAxis 
                          domain={[0, 100]}
                          ticks={[0, 25, 50, 75, 100]}
                          tick={{ fontSize: 10, fill: '#64748b' }}
                          unit="%"
                        />
                        <Tooltip
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              const data = payload[0].payload;
                              return (
                                <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl text-xs space-y-1 z-50">
                                  <div className="font-bold text-slate-900 dark:text-white">
                                    {data.name}
                                  </div>
                                  <div className="text-[11px] text-slate-500">
                                    Class {data.classLevel} • {data.attempts} Attempt{data.attempts > 1 ? 's' : ''}
                                  </div>
                                  <div className="pt-1 flex items-center justify-between gap-4 font-bold">
                                    <span className="text-slate-600 dark:text-slate-300">Accuracy:</span>
                                    <span className={data.accuracy >= 70 ? 'text-emerald-600' : data.accuracy >= 50 ? 'text-amber-600' : 'text-rose-600'}>
                                      {data.accuracy}% ({data.totalCorrect}/{data.totalQuestions})
                                    </span>
                                  </div>
                                  <div className="text-[10px] text-slate-400">
                                    Missed {data.missedQuestions} questions across attempts
                                  </div>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <ReferenceLine y={70} stroke="#10b981" strokeDasharray="4 4" label={{ value: '70% Target', position: 'insideTopRight', fill: '#10b981', fontSize: 10 }} />
                        <Bar 
                          dataKey="accuracy" 
                          radius={[6, 6, 0, 0]}
                          animationDuration={800}
                        >
                          {chapterPerformanceData.map((entry, index) => {
                            const color = entry.accuracy >= 70 ? '#10b981' : entry.accuracy >= 50 ? '#f59e0b' : '#f43f5e';
                            return <Cell key={`cell-${index}`} fill={color} />;
                          })}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Test Attempt Practice History */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-indigo-500" />
                <span>Saved Practice History &amp; Test Results</span>
              </h4>
              <span className="text-xs text-slate-400 font-medium">
                {historyList.length} attempts saved
              </span>
            </div>

            {historyList.length === 0 ? (
              <div className="p-8 text-center rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
                <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  No practice test attempts recorded yet.
                </p>
                <p className="text-[11px] text-slate-500">
                  Start an Elementary Mathematics or Physics session to build your academic track record.
                </p>
              </div>
            ) : (
              <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                {historyList.map((item, idx) => (
                  <div
                    key={item.id || idx}
                    className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 dark:text-white truncate">
                          {item.chapterName}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 shrink-0">
                          Class {item.classLevel}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2.5 text-[11px] text-slate-500">
                        <span>{item.track || 'Elementary Mathematics'}</span>
                        <span>•</span>
                        <span>{item.formattedTime || `${item.timeSpentSeconds}s`}</span>
                        <span>•</span>
                        <span className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{formatLiveTime(item.timestamp)}</span>
                        </span>
                        <span className="text-slate-400 text-[10px] hidden sm:inline">
                          ({formatExactDateTime(item.timestamp, item.formattedDate)})
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className={`text-sm font-black ${
                        item.scorePercentage >= 80 ? 'text-emerald-600 dark:text-emerald-400' :
                        item.scorePercentage >= 50 ? 'text-indigo-600 dark:text-indigo-400' : 'text-rose-600 dark:text-rose-400'
                      }`}>
                        {item.scorePercentage}%
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium">
                        {item.correctCount}/{item.totalQuestions} Correct
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

