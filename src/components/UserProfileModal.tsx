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
  TrendingUp,
  Trophy
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
import { useOffline } from '../context/OfflineContext';
import { ClassLevel, Chapter } from '../types';
import { MathText } from './MathText';
import { FirestoreLeaderboardService } from '../services/firestoreLeaderboard';

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
  const { currentUser, userProfile: authProfile, signOut, syncWithServer } = useAuth();
  const { isOnline, isOffline, isConnectionStable, indicatorDotClass, indicatorBadgeClass, statusLabel } = useOffline();
  const [copiedShare, setCopiedShare] = useState(false);
  const [now, setNow] = useState<number>(() => Date.now());
  const [classRank, setClassRank] = useState<{ rank: number; totalStudents: number } | null>(null);

  // Real-time ticker for live timestamps
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now());
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Compute live Academic Rank in user's class based on Overall Accuracy
  useEffect(() => {
    if (!isOpen) return;

    let isMounted = true;
    const fetchAndComputeRank = async () => {
      try {
        const classLvl = authProfile?.classLevel || 9;
        const entries = await FirestoreLeaderboardService.fetchRanked(classLvl, 'practice');
        if (!isMounted || !entries) return;

        // Group submissions by candidate and rank by Overall Accuracy -> Total Correct
        const candidateMap = new Map<string, {
          name: string;
          uid?: string;
          email?: string;
          totalCorrect: number;
          totalQuestions: number;
        }>();

        for (const e of entries) {
          if (!e || e.mode === 'exam') continue;
          const cleanName = (e.studentName || 'Student').trim();
          const key = e.uid || (e.email ? e.email.toLowerCase() : cleanName.toLowerCase());
          if (!candidateMap.has(key)) {
            candidateMap.set(key, {
              name: cleanName,
              uid: e.uid,
              email: e.email,
              totalCorrect: 0,
              totalQuestions: 0,
            });
          }
          const cand = candidateMap.get(key)!;
          cand.totalCorrect += (e.correctCount || 0);
          cand.totalQuestions += (e.totalQuestions || 0);
        }

        const rankedList = Array.from(candidateMap.values()).map((c) => ({
          ...c,
          overallAccuracy: c.totalQuestions > 0 ? Math.round((c.totalCorrect / c.totalQuestions) * 100) : 0,
        })).sort((a, b) => {
          if (b.overallAccuracy !== a.overallAccuracy) return b.overallAccuracy - a.overallAccuracy;
          return b.totalCorrect - a.totalCorrect;
        });

        const myUid = currentUser?.uid || authProfile?.uid;
        const myEmail = (currentUser?.email || authProfile?.email || '').toLowerCase();
        const myName = (authProfile?.displayName || '').toLowerCase();

        const myIndex = rankedList.findIndex((c) => 
          (myUid && c.uid === myUid) || 
          (myEmail && c.email && c.email.toLowerCase() === myEmail) || 
          (myName && c.name.toLowerCase() === myName)
        );

        if (myIndex !== -1 && isMounted) {
          setClassRank({
            rank: myIndex + 1,
            totalStudents: Math.max(rankedList.length, 1),
          });
        }
      } catch (err) {
        console.warn('Rank computation notice:', err);
      }
    };

    fetchAndComputeRank();
    return () => {
      isMounted = false;
    };
  }, [isOpen, authProfile?.classLevel, authProfile?.uid, authProfile?.email, authProfile?.displayName, currentUser]);

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

  // Use authenticated profile or default empty state
  const userProfile = authProfile || {
    uid: 'guest_student',
    displayName: 'Student Candidate',
    email: '',
    classLevel: 9 as ClassLevel,
    createdAt: Date.now(),
    testsAttempted: 0,
    totalQuestionsAnswered: 0,
    totalCorrect: 0,
    totalWrong: 0,
    accuracy: 0,
    history: [],
  };

  const totalQuestions = userProfile.totalQuestionsAnswered || 0;
  const totalCorrect = userProfile.totalCorrect || 0;
  const totalSkipped = userProfile.totalSkipped || 0;
  const totalWrong = userProfile.totalWrong || Math.max(0, totalQuestions - totalCorrect - totalSkipped);
  const attemptedQuestions = totalCorrect + totalWrong;
  const overallAccuracy = attemptedQuestions > 0 ? Math.round((totalCorrect / attemptedQuestions) * 100) : 0;
  const correctPct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  const wrongPct = totalQuestions > 0 ? Math.round((totalWrong / totalQuestions) * 100) : 0;
  const skippedPct = totalQuestions > 0 ? Math.round((totalSkipped / totalQuestions) * 100) : 0;
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
        badgeText: '💎 Master Level / Grade A+',
        cardGlow: 'shadow-emerald-500/15 border-emerald-500/30',
        avatarBg: 'bg-gradient-to-br from-emerald-400 to-teal-700 border-emerald-200 text-white font-black',
        accentRing: 'ring-emerald-400/50',
        quote: '$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi} \\quad \\text{and} \\quad x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$',
        quoteTitle: 'Gaussian Integral & Quadratic Principle',
      };
    }
    if (correctPct >= 50) {
      return {
        levelName: 'Active Problem Solver',
        headerGradient: 'from-violet-600 via-purple-700 to-indigo-800',
        badgeBg: 'bg-violet-400/30 text-violet-100 border-violet-300/40',
        badgeText: '⚡ Active Level / Grade A',
        cardGlow: 'shadow-violet-500/15 border-violet-500/30',
        avatarBg: 'bg-gradient-to-br from-violet-500 to-purple-700 border-violet-200 text-white font-black',
        accentRing: 'ring-violet-400/50',
        quote: '$$a^2 + b^2 = c^2 \\quad \\text{and} \\quad \\sum_{k=1}^n k = \\frac{n(n+1)}{2}$$',
        quoteTitle: 'Pythagorean & Arithmetic Series Theorems',
      };
    }
    return {
      levelName: 'Developing Candidate',
      headerGradient: 'from-slate-800 via-violet-950 to-slate-900',
      badgeBg: 'bg-slate-400/30 text-slate-100 border-slate-300/40',
      badgeText: '🌱 Developing Level / Grade B',
      cardGlow: 'shadow-purple-500/15 border-purple-500/30',
      avatarBg: 'bg-gradient-to-br from-slate-600 to-violet-800 border-violet-200 text-white font-black',
      accentRing: 'ring-violet-400/50',
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className={`bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl w-full max-w-lg sm:max-w-2xl overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[88vh] ${theme.cardGlow}`}>
        
        {/* Dynamic Profile Header with Mathematical Script & Formula Atmosphere */}
        <div className={`bg-gradient-to-r ${theme.headerGradient} p-3.5 sm:p-5 text-white relative overflow-hidden flex flex-col justify-between gap-2.5 sm:gap-3.5 shadow-lg shrink-0`}>
          
          {/* Top Actions: Sign Out + Close */}
          <div className="flex items-center justify-end relative z-10 gap-2">
            <button
              onClick={() => {
                signOut();
                onClose();
              }}
              className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg sm:rounded-xl bg-white/15 hover:bg-rose-600 text-white transition-colors cursor-pointer flex items-center gap-1.5 text-[11px] font-bold shadow-xs"
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
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Candidate Profile Details & Avatar with Status Indicator */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 relative z-10">
            <div className="relative shrink-0">
              <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${theme.avatarBg} flex items-center justify-center border-2 shadow-lg text-lg sm:text-2xl`}>
                {userProfile.displayName?.charAt(0).toUpperCase() || 'S'}
              </div>
              <span 
                id="profile-modal-status-indicator"
                className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-slate-900 transition-colors duration-300 ${indicatorDotClass}`}
                title={`Connection: ${statusLabel}`}
              />
            </div>
            
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-xl font-black tracking-tight text-white truncate">
                  {userProfile.displayName}
                </h2>
              </div>
              <p className="text-[10px] sm:text-xs text-white/80 flex items-center gap-1 mt-0.5 font-medium truncate">
                <Mail className="w-3 h-3 shrink-0" />
                <span className="truncate">{userProfile.email || 'Registered Student'}</span>
              </p>
              <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
                <div className="text-[9px] sm:text-[10px] font-bold text-violet-200 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-pink-300 shrink-0" />
                  <span className="truncate">{theme.levelName}</span>
                </div>
                {classRank && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black bg-amber-400 text-slate-950 shadow-xs">
                    <Trophy className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-950" />
                    <span>Class {userProfile.classLevel} Rank #{classRank.rank}</span>
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Dynamic Mathematical Script Display Box with KaTeX */}
          <div className="p-2 sm:p-2.5 rounded-xl bg-black/25 backdrop-blur-md border border-white/20 relative z-10 space-y-0.5 text-center sm:text-left">
            <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-wider text-pink-200/90">
              <span>Mathematical Identity</span>
              <span className="text-white/70 truncate ml-2">{theme.quoteTitle}</span>
            </div>
            <div className="text-[11px] sm:text-xs text-white overflow-x-auto py-0.5 font-serif no-scrollbar">
              <MathText text={theme.quote} displayMode={true} />
            </div>
          </div>

        </div>

        {/* Modal Body */}
        <div className="p-3 sm:p-5 space-y-3.5 sm:space-y-5 overflow-y-auto flex-1">

          {/* Real-time Live Submissions Count & Time & Date Sync Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl bg-violet-50/80 dark:bg-violet-950/40 border border-violet-200/70 dark:border-violet-800/60 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <div className="text-[11px] sm:text-xs font-bold text-violet-950 dark:text-violet-200">
                <span>{historyList.length} Live Submissions</span>
                <span className="text-slate-400 font-normal ml-1 hidden sm:inline">
                  • Synced
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              <Clock className="w-3 h-3 text-violet-500 shrink-0" />
              <span>
                Synced <strong className="text-violet-600 dark:text-violet-400">{formatLiveTime(latestTimestamp)}</strong>
              </span>
            </div>
          </div>
          
          {/* Accuracy & Error Rates Section: Correct Accuracy, Error Rate & Skipped Questions */}
          <div className="space-y-2 sm:space-y-2.5">
            <div className="flex items-center justify-between flex-wrap gap-1">
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Performance Analytics
              </h4>
              <span className="text-[10.5px] sm:text-xs font-bold text-violet-700 dark:text-violet-300 bg-violet-100/80 dark:bg-violet-950/80 px-2.5 py-0.5 rounded-full border border-violet-200 dark:border-violet-800">
                Answered Accuracy: {overallAccuracy}% • {testsAttempted} Tests
              </span>
            </div>
            
            {/* 3 Analytics Cards: Correct, Incorrect, and Skipped */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              
              {/* Light Green Card: Correct Accuracy */}
              <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700/80 flex flex-col items-center justify-center text-center gap-1.5 shadow-2xs">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 sm:border-3 border-emerald-500 dark:border-emerald-400 bg-white dark:bg-emerald-900/50 flex flex-col items-center justify-center shadow-inner">
                  <span className="text-sm sm:text-lg font-black text-emerald-600 dark:text-emerald-300">
                    {correctPct}%
                  </span>
                  <span className="text-[7px] sm:text-[8px] font-black uppercase text-emerald-700 dark:text-emerald-400 tracking-wider">
                    Correct
                  </span>
                </div>

                <div className="space-y-0.5 text-center">
                  <p className="text-xs sm:text-sm font-black text-emerald-900 dark:text-emerald-100">
                    {totalCorrect}{' '}
                    <span className="text-[9px] sm:text-[10px] font-normal text-emerald-700/80 dark:text-emerald-400">
                      / {totalQuestions}
                    </span>
                  </p>
                  <p className="text-[9px] text-emerald-700 dark:text-emerald-400 hidden sm:block">
                    Validated
                  </p>
                </div>
              </div>

              {/* Rose / Red Card: Error Rate / Missed Questions */}
              <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-rose-50/80 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-700/80 flex flex-col items-center justify-center text-center gap-1.5 shadow-2xs">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 sm:border-3 border-rose-500 dark:border-rose-400 bg-white dark:bg-rose-900/50 flex flex-col items-center justify-center shadow-inner">
                  <span className="text-sm sm:text-lg font-black text-rose-600 dark:text-rose-300">
                    {wrongPct}%
                  </span>
                  <span className="text-[7px] sm:text-[8px] font-black uppercase text-rose-700 dark:text-rose-400 tracking-wider">
                    Incorrect
                  </span>
                </div>

                <div className="space-y-0.5 text-center">
                  <p className="text-xs sm:text-sm font-black text-rose-900 dark:text-rose-100">
                    {totalWrong}{' '}
                    <span className="text-[9px] sm:text-[10px] font-normal text-rose-700/80 dark:text-rose-400">
                      / {totalQuestions}
                    </span>
                  </p>
                  <p className="text-[9px] text-rose-700 dark:text-rose-400 hidden sm:block">
                    Errors
                  </p>
                </div>
              </div>

              {/* Amber / Orange Card: Skipped Questions */}
              <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-700/80 flex flex-col items-center justify-center text-center gap-1.5 shadow-2xs">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 sm:border-3 border-amber-500 dark:border-amber-400 bg-white dark:bg-amber-900/50 flex flex-col items-center justify-center shadow-inner">
                  <span className="text-sm sm:text-lg font-black text-amber-600 dark:text-amber-300">
                    {skippedPct}%
                  </span>
                  <span className="text-[7px] sm:text-[8px] font-black uppercase text-amber-700 dark:text-amber-400 tracking-wider">
                    Skipped
                  </span>
                </div>

                <div className="space-y-0.5 text-center">
                  <p className="text-xs sm:text-sm font-black text-amber-900 dark:text-amber-100">
                    {totalSkipped}{' '}
                    <span className="text-[9px] sm:text-[10px] font-normal text-amber-700/80 dark:text-amber-400">
                      / {totalQuestions}
                    </span>
                  </p>
                  <p className="text-[9px] text-amber-700 dark:text-amber-400 hidden sm:block">
                    Unanswered
                  </p>
                </div>
              </div>

            </div>

            {/* Explanatory metric note to eliminate calculation confusion */}
            <p className="text-[10px] text-slate-500 dark:text-slate-400 text-center">
              * <strong>Answered Accuracy ({overallAccuracy}%)</strong> is based on attempted questions ({totalCorrect}/{attemptedQuestions}). Cards show distribution across all {totalQuestions} total questions.
            </p>
          </div>

          {/* 📊 RECHARTS VISUAL REPRESENTATION OF CHAPTER PERFORMANCE & STRUGGLE IDENTIFICATION */}
          <div className="space-y-3 pt-1">
            <div className="flex items-center justify-between">
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-violet-500" />
                <span>Chapter-by-Chapter Performance</span>
              </h4>
              <span className="text-[10px] text-slate-400 font-medium">
                {chapterPerformanceData.length} Chapters
              </span>
            </div>

            {chapterPerformanceData.length === 0 ? (
              <div className="p-5 text-center rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <BarChart3 className="w-7 h-7 text-slate-400 mx-auto" />
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  No chapter performance data yet
                </p>
                <p className="text-[10px] text-slate-500 max-w-sm mx-auto">
                  Take chapter practice quizzes to visualize your accuracy candles and identify topics requiring revision.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                
                {/* Visual Struggle Identification Alert Box */}
                {strugglingChapters.length > 0 ? (
                  <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/60 flex items-start gap-2.5 shadow-2xs">
                    <div className="w-7 h-7 rounded-lg bg-rose-100 dark:bg-rose-900/60 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-1.5">
                        <h5 className="text-[11px] sm:text-xs font-bold text-rose-900 dark:text-rose-200">
                          Focus Needed on {strugglingChapters.length} Chapter{strugglingChapters.length > 1 ? 's' : ''}
                        </h5>
                        <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-rose-200/80 dark:bg-rose-900 text-rose-800 dark:text-rose-200">
                          Review
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1 pt-0.5">
                        {strugglingChapters.map((ch, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 shadow-2xs"
                          >
                            <TrendingDown className="w-2.5 h-2.5 text-rose-500" />
                            <span>{ch.name}</span>
                            <span className="text-[9px] text-rose-500 font-black">({ch.accuracy}%)</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-2.5 shadow-2xs">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <h5 className="text-[11px] sm:text-xs font-bold text-emerald-900 dark:text-emerald-200">
                        High Mastery across Tested Chapters
                      </h5>
                      <p className="text-[10px] text-emerald-700 dark:text-emerald-300">
                        All attempted chapters exceed the 70% benchmark.
                      </p>
                    </div>
                  </div>
                )}

                {/* Recharts Bar Chart Card with Thin Candles */}
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-1.5 text-[11px]">
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-[10px] sm:text-xs">
                      Accuracy Candles by Chapter
                    </span>
                    <div className="flex items-center gap-2 text-[9px] font-semibold">
                      <span className="flex items-center gap-1 text-rose-600 dark:text-rose-400">
                        <span className="w-2 h-2 rounded-xs bg-rose-500 inline-block"></span>
                        <span>&lt;50%</span>
                      </span>
                      <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                        <span className="w-2 h-2 rounded-xs bg-amber-500 inline-block"></span>
                        <span>50-69%</span>
                      </span>
                      <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                        <span className="w-2 h-2 rounded-xs bg-emerald-500 inline-block"></span>
                        <span>≥70%</span>
                      </span>
                    </div>
                  </div>

                  <div className="h-48 sm:h-56 w-full pt-1">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={chapterPerformanceData}
                        margin={{ top: 10, right: 10, left: -24, bottom: 35 }}
                        barCategoryGap="15%"
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} opacity={0.4} />
                        <XAxis 
                          dataKey="shortName" 
                          tick={{ fontSize: 9, fill: '#64748b' }}
                          interval={0}
                          angle={-25}
                          textAnchor="end"
                          height={45}
                        />
                        <YAxis 
                          domain={[0, 100]}
                          ticks={[0, 25, 50, 75, 100]}
                          tick={{ fontSize: 9, fill: '#64748b' }}
                          unit="%"
                        />
                        <Tooltip
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              const data = payload[0].payload;
                              return (
                                <div className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl text-xs space-y-1 z-50">
                                  <div className="font-bold text-slate-900 dark:text-white text-[11px]">
                                    {data.name}
                                  </div>
                                  <div className="text-[10px] text-slate-500">
                                    Class {data.classLevel} • {data.attempts} Attempt{data.attempts > 1 ? 's' : ''}
                                  </div>
                                  <div className="pt-0.5 flex items-center justify-between gap-3 font-bold text-[11px]">
                                    <span className="text-slate-600 dark:text-slate-300">Accuracy:</span>
                                    <span className={data.accuracy >= 70 ? 'text-emerald-600' : data.accuracy >= 50 ? 'text-amber-600' : 'text-rose-600'}>
                                      {data.accuracy}% ({data.totalCorrect}/{data.totalQuestions})
                                    </span>
                                  </div>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <ReferenceLine y={70} stroke="#10b981" strokeDasharray="3 3" label={{ value: '70%', position: 'insideTopRight', fill: '#10b981', fontSize: 9 }} />
                        <Bar 
                          dataKey="accuracy" 
                          barSize={10}
                          maxBarSize={12}
                          radius={[3, 3, 0, 0]}
                          animationDuration={600}
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
            <div className="flex flex-wrap items-center justify-between gap-2">
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
                {historyList.map((item, idx) => {
                  const itemDifficulty = item.difficultyTier || (item.chapterName && item.chapterName.toLowerCase().includes('advanced') ? 'Advanced' : 'Normal');
                  return (
                    <div
                      key={item.id || idx}
                      className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="font-bold text-slate-900 dark:text-white truncate">
                            {item.chapterName}
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 shrink-0">
                            Class {item.classLevel}
                          </span>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold shrink-0 border ${
                            itemDifficulty === 'Advanced'
                              ? 'bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
                              : 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                          }`}>
                            {itemDifficulty === 'Advanced' ? '⚡ Advanced' : '✓ Normal'}
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
                          <span>{item.correctCount}/{item.totalQuestions} Correct</span>
                          {(item.skippedCount ?? 0) > 0 && (
                            <span className="ml-1 text-slate-500 font-semibold">• {item.skippedCount} Skipped</span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

