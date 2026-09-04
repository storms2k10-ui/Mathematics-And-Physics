import React, { useState, useEffect } from 'react';
import { 
  X, 
  Mail, 
  Clock, 
  LogOut, 
  BookOpen, 
  Trophy,
  Calendar,
  Archive,
  Pencil,
  Lock,
  Check,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useOffline } from '../context/OfflineContext';
import { ClassLevel, Chapter } from '../types';
import { FirestoreLeaderboardService } from '../services/firestoreLeaderboard';
import { getCurrentMonthKey, getPreviousMonthKey, formatMonthName, calculateMonthSummary } from '../utils/monthUtils';

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
  const { currentUser, userProfile: authProfile, signOut, syncWithServer, updateCandidateName } = useAuth();
  const { isOnline, isOffline, isConnectionStable, indicatorDotClass, indicatorBadgeClass, statusLabel } = useOffline();
  const [copiedShare, setCopiedShare] = useState(false);
  const [now, setNow] = useState<number>(() => Date.now());
  const [classRank, setClassRank] = useState<{ rank: number; totalStudents: number } | null>(null);

  // Candidate Name Edit state (1-time edit, then restricted forever)
  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [isSavingName, setIsSavingName] = useState(false);
  const [nameEditError, setNameEditError] = useState<string | null>(null);
  const [showNameConfirmModal, setShowNameConfirmModal] = useState(false);
  const [nameSuccessMessage, setNameSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    if (authProfile?.displayName) {
      setNameInput(authProfile.displayName);
    }
  }, [authProfile?.displayName]);

  const handleConfirmSaveName = async () => {
    const trimmed = nameInput.trim();
    if (!trimmed) {
      setNameEditError('Name cannot be empty.');
      return;
    }
    if (trimmed.length < 2 || trimmed.length > 50) {
      setNameEditError('Name must be between 2 and 50 characters.');
      return;
    }

    setIsSavingName(true);
    setNameEditError(null);

    try {
      const res = await updateCandidateName(trimmed);
      if (!res.success) {
        setNameEditError(res.error || 'Failed to update name.');
        setIsSavingName(false);
        return;
      }

      setShowNameConfirmModal(false);
      setIsEditingName(false);
      setNameSuccessMessage('Name updated successfully and permanently locked.');
      setTimeout(() => {
        setNameSuccessMessage(null);
      }, 4500);
    } catch (err: any) {
      setNameEditError(err?.message || 'Error updating name.');
    } finally {
      setIsSavingName(false);
    }
  };

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

  // Monthly progress live tracking: dynamically calculated in real-time from history whenever user attempts a test
  const currentMonthKey = getCurrentMonthKey();
  const previousMonthKey = getPreviousMonthKey();

  // Compute live current month progress directly from user's test history
  const liveCurrentMonthSummary = calculateMonthSummary(historyList, currentMonthKey);
  // Guarantee taking the most comprehensive count between live history and synced profile
  const currentMonthProgress = (userProfile.currentMonthProgress && userProfile.currentMonthProgress.testsAttempted > liveCurrentMonthSummary.testsAttempted)
    ? userProfile.currentMonthProgress
    : liveCurrentMonthSummary;

  const livePreviousMonthSummary = calculateMonthSummary(historyList, previousMonthKey);
  const previousMonthProgress = (userProfile.previousMonthProgress && userProfile.previousMonthProgress.testsAttempted > livePreviousMonthSummary.testsAttempted)
    ? userProfile.previousMonthProgress
    : livePreviousMonthSummary;

  // Dynamic Profile Theme Colors based on Overall Accuracy & Mastery
  const getDynamicTheme = () => {
    if (correctPct >= 85) {
      return {
        headerGradient: 'from-amber-600 via-yellow-500 to-emerald-600',
        badgeBg: 'bg-amber-400/30 text-amber-100 border-amber-300/40',
        badgeText: '🏆 Distinction / Gold Tier',
        cardGlow: 'shadow-amber-500/15 border-amber-500/30',
        avatarBg: 'bg-gradient-to-br from-amber-400 to-yellow-600 border-amber-200 text-slate-950 font-black',
        accentRing: 'ring-amber-400/50',
      };
    }
    if (correctPct >= 70) {
      return {
        headerGradient: 'from-emerald-600 via-teal-600 to-indigo-700',
        badgeBg: 'bg-emerald-400/30 text-emerald-100 border-emerald-300/40',
        badgeText: '💎 Grade A+',
        cardGlow: 'shadow-emerald-500/15 border-emerald-500/30',
        avatarBg: 'bg-gradient-to-br from-emerald-400 to-teal-700 border-emerald-200 text-white font-black',
        accentRing: 'ring-emerald-400/50',
      };
    }
    if (correctPct >= 50) {
      return {
        headerGradient: 'from-violet-600 via-purple-700 to-indigo-800',
        badgeBg: 'bg-violet-400/30 text-violet-100 border-violet-300/40',
        badgeText: '⚡ Grade A',
        cardGlow: 'shadow-violet-500/15 border-violet-500/30',
        avatarBg: 'bg-gradient-to-br from-violet-500 to-purple-700 border-violet-200 text-white font-black',
        accentRing: 'ring-violet-400/50',
      };
    }
    return {
      headerGradient: 'from-slate-800 via-violet-950 to-slate-900',
      badgeBg: 'bg-slate-400/30 text-slate-100 border-slate-300/40',
      badgeText: '🌱 Grade B',
      cardGlow: 'shadow-purple-500/15 border-purple-500/30',
      avatarBg: 'bg-gradient-to-br from-slate-600 to-violet-800 border-violet-200 text-white font-black',
      accentRing: 'ring-violet-400/50',
    };
  };

  const theme = getDynamicTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className={`bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl w-full max-w-md sm:max-w-xl md:max-w-2xl overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[88vh] ${theme.cardGlow}`}>
        
        {/* Dynamic Profile Header */}
        <div className={`bg-gradient-to-r ${theme.headerGradient} p-3 sm:p-4 text-white relative overflow-hidden flex flex-col justify-between gap-2 shadow-md shrink-0`}>
          
          {/* Top Actions: Sign Out + Close */}
          <div className="flex items-center justify-end relative z-10 gap-1.5">
            <button
              onClick={() => {
                signOut();
                onClose();
              }}
              className="px-2 py-1 rounded-lg bg-white/15 hover:bg-rose-600 text-white transition-colors cursor-pointer flex items-center gap-1 text-[10.5px] font-bold shadow-xs"
              title="Sign Out"
            >
              <LogOut className="w-3 h-3" />
              <span>Sign Out</span>
            </button>

            <button
              onClick={onClose}
              className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Candidate Profile Details & Avatar with Status Indicator */}
          <div className="flex items-start gap-3 relative z-10">
            <div className="relative shrink-0 mt-0.5">
              <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${theme.avatarBg} flex items-center justify-center border-2 shadow-md text-base sm:text-lg`}>
                {userProfile.displayName?.charAt(0).toUpperCase() || 'S'}
              </div>
              <span 
                id="profile-modal-status-indicator"
                className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-slate-900 transition-colors duration-300 ${indicatorDotClass}`}
                title={`Connection: ${statusLabel}`}
              />
            </div>
            
            <div className="min-w-0 flex-1">
              {!isEditingName ? (
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h2 className="text-sm sm:text-base font-black tracking-tight text-white truncate">
                      {userProfile.displayName}
                    </h2>

                    {userProfile.hasEditedName ? (
                      <span 
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-white/15 text-white/90 border border-white/20 shadow-2xs shrink-0 cursor-help"
                        title="Name has been updated once and is permanently locked."
                      >
                        <Lock className="w-2.5 h-2.5 text-amber-300" />
                        <span>Name Locked</span>
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setIsEditingName(true);
                          setNameInput(userProfile.displayName || '');
                          setNameEditError(null);
                        }}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9.5px] font-bold bg-white/20 hover:bg-white/30 text-white border border-white/30 transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
                        title="Edit Candidate Name (Allowed 1 time only)"
                      >
                        <Pencil className="w-2.5 h-2.5 text-amber-300" />
                        <span>Edit Name (1-Time)</span>
                      </button>
                    )}
                  </div>

                  <p className="text-[10px] sm:text-[11px] text-white/80 flex items-center gap-1 font-medium truncate">
                    <Mail className="w-3 h-3 shrink-0" />
                    <span className="truncate">{userProfile.email || 'Registered Student'}</span>
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
                    {classRank && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black bg-amber-400 text-slate-950 shadow-xs">
                        <Trophy className="w-2.5 h-2.5 text-amber-950" />
                        <span>Class {userProfile.classLevel} Rank #{classRank.rank}</span>
                      </span>
                    )}
                    {userProfile.hasEditedName && (
                      <span className="text-[9px] text-amber-200/90 font-medium">
                        • Verified Name (Permanent)
                      </span>
                    )}
                  </div>

                  {nameSuccessMessage && (
                    <div className="mt-1 p-1.5 rounded-lg bg-emerald-500/30 border border-emerald-400/50 text-[10px] text-emerald-100 font-bold flex items-center gap-1 animate-fade-in">
                      <Check className="w-3 h-3 text-emerald-300 shrink-0" />
                      <span>{nameSuccessMessage}</span>
                    </div>
                  )}
                </div>
              ) : (
                /* One-Time Name Edit Form */
                <div className="p-2.5 rounded-xl bg-black/45 backdrop-blur-md border border-amber-400/50 shadow-xl space-y-2 animate-fade-in w-full">
                  <div className="flex items-center justify-between gap-1">
                    <label className="text-[11px] font-bold text-white flex items-center gap-1">
                      <Pencil className="w-3 h-3 text-amber-300" />
                      <span>Edit Candidate Name</span>
                    </label>
                    <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 uppercase tracking-wide">
                      1-Time Only
                    </span>
                  </div>
                  
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => {
                      setNameInput(e.target.value);
                      setNameEditError(null);
                    }}
                    maxLength={50}
                    placeholder="Enter official candidate name..."
                    className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-white text-slate-900 placeholder-slate-400 font-bold focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner"
                    autoFocus
                  />

                  <div className="p-1.5 rounded-lg bg-amber-500/25 border border-amber-400/40 text-[9.5px] text-amber-100 flex items-start gap-1.5 leading-tight">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                    <span>
                      <strong>Permanent Restriction:</strong> You can only edit your name <u>once</u>. After saving, this name cannot be edited or reverted.
                    </span>
                  </div>

                  {nameEditError && (
                    <p className="text-[9.5px] text-rose-200 font-semibold bg-rose-950/70 px-2 py-1 rounded border border-rose-500/40">
                      {nameEditError}
                    </p>
                  )}

                  <div className="flex items-center justify-end gap-1.5 pt-0.5">
                    <button
                      type="button"
                      disabled={isSavingName}
                      onClick={() => {
                        setIsEditingName(false);
                        setNameEditError(null);
                      }}
                      className="px-2.5 py-1 text-[10.5px] font-bold rounded-lg bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      disabled={isSavingName || !nameInput.trim() || nameInput.trim() === userProfile.displayName}
                      onClick={() => setShowNameConfirmModal(true)}
                      className="px-3 py-1 text-[10.5px] font-black rounded-lg bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-950 transition-all cursor-pointer shadow-xs disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
                    >
                      <Check className="w-3 h-3 text-slate-950" />
                      <span>Save (1-Time)</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Modal Body */}
        <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 overflow-y-auto flex-1">
          
          {/* Monthly Academic Progress Section */}
          <div className="p-3 rounded-xl bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2.5">
            <div>
              <h4 className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                <span>Monthly Academic Progress</span>
              </h4>
              <p className="text-[9.5px] text-slate-500 dark:text-slate-400">
                Refreshed every new month • Previous months archived automatically
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {/* Card 1: Current Month Progress */}
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-800/80 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                    <span>Current Month</span>
                  </span>
                  <span className="text-[9px] font-black px-1.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    {currentMonthProgress.monthName || formatMonthName(currentMonthKey)}
                  </span>
                </div>

                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                      {currentMonthProgress.accuracy}%
                    </span>
                    <span className="text-[9.5px] text-slate-500 ml-1">Accuracy</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {currentMonthProgress.testsAttempted}
                    </span>
                    <span className="text-[9px] text-slate-400 ml-1">tests</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1 pt-1 border-t border-slate-100 dark:border-slate-800/80 text-center">
                  <div>
                    <div className="text-[10.5px] font-black text-emerald-600 dark:text-emerald-400">{currentMonthProgress.totalCorrect}</div>
                    <div className="text-[8.5px] text-slate-400 uppercase">Correct</div>
                  </div>
                  <div>
                    <div className="text-[10.5px] font-black text-rose-600 dark:text-rose-400">{currentMonthProgress.totalWrong}</div>
                    <div className="text-[8.5px] text-slate-400 uppercase">Incorrect</div>
                  </div>
                  <div>
                    <div className="text-[10.5px] font-black text-amber-600 dark:text-amber-400">{currentMonthProgress.totalSkipped}</div>
                    <div className="text-[8.5px] text-slate-400 uppercase">Skipped</div>
                  </div>
                </div>
              </div>

              {/* Card 2: Previous Month Progress (Server Archival) */}
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <Archive className="w-2.5 h-2.5 text-indigo-500" />
                    <span>Previous Month Progress</span>
                  </span>
                  <span className="text-[9px] font-black px-1.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                    {previousMonthProgress.monthName || formatMonthName(previousMonthKey)}
                  </span>
                </div>

                {previousMonthProgress.testsAttempted > 0 ? (
                  <>
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                          {previousMonthProgress.accuracy}%
                        </span>
                        <span className="text-[9.5px] text-slate-500 ml-1">Accuracy</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                          {previousMonthProgress.testsAttempted}
                        </span>
                        <span className="text-[9px] text-slate-400 ml-1">tests</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-1 pt-1 border-t border-slate-100 dark:border-slate-800/80 text-center">
                      <div>
                        <div className="text-[10.5px] font-black text-emerald-600 dark:text-emerald-400">{previousMonthProgress.totalCorrect}</div>
                        <div className="text-[8.5px] text-slate-400 uppercase">Correct</div>
                      </div>
                      <div>
                        <div className="text-[10.5px] font-black text-rose-600 dark:text-rose-400">{previousMonthProgress.totalWrong}</div>
                        <div className="text-[8.5px] text-slate-400 uppercase">Incorrect</div>
                      </div>
                      <div>
                        <div className="text-[10.5px] font-black text-amber-600 dark:text-amber-400">{previousMonthProgress.totalSkipped}</div>
                        <div className="text-[8.5px] text-slate-400 uppercase">Skipped</div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="py-2.5 text-center space-y-0.5">
                    <p className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                      No archived tests recorded
                    </p>
                    <p className="text-[9px] text-slate-400">
                      Progress will archive here automatically when a new month begins.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Test Attempt Practice History */}
          <div className="space-y-2.5 min-h-[220px]">
            <div className="flex flex-wrap items-center justify-between gap-1">
              <h4 className="text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-indigo-500" />
                <span>Saved Practice History &amp; Test Results</span>
              </h4>
              <span className="text-[9.5px] sm:text-[10px] text-slate-400 font-semibold">
                {historyList.length} attempts saved
              </span>
            </div>

            {historyList.length === 0 ? (
              <div className="p-6 text-center rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1.5 min-h-[160px] flex flex-col items-center justify-center">
                <BookOpen className="w-7 h-7 text-slate-400 mx-auto" />
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  No practice test attempts recorded yet.
                </p>
                <p className="text-[10px] text-slate-500 max-w-xs">
                  Start an Elementary Mathematics or Physics session to build your academic track record.
                </p>
              </div>
            ) : (
              <div className="space-y-2 min-h-[180px] max-h-72 sm:max-h-80 md:max-h-96 overflow-y-auto pr-1.5 scrollbar-thin">
                {historyList.map((item, idx) => {
                  const itemDifficulty = item.difficultyTier || (item.chapterName && item.chapterName.toLowerCase().includes('advanced') ? 'Advanced' : 'Normal');
                  return (
                    <div
                      key={item.id || idx}
                      className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2 text-xs"
                    >
                      <div className="space-y-0.5 min-w-0">
                        <div className="flex flex-wrap items-center gap-1">
                          <span className="font-bold text-slate-900 dark:text-white truncate text-[11px]">
                            {item.chapterName}
                          </span>
                          <span className="px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 shrink-0">
                            Class {item.classLevel}
                          </span>
                          <span className={`px-1.5 py-0.2 rounded-full text-[9px] font-extrabold shrink-0 border ${
                            itemDifficulty === 'Advanced'
                              ? 'bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
                              : 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                          }`}>
                            {itemDifficulty === 'Advanced' ? 'Advanced' : 'Normal'}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-slate-500">
                          <span>{item.track || 'Elementary Mathematics'}</span>
                          <span>•</span>
                          <span>{item.formattedTime || `${item.timeSpentSeconds}s`}</span>
                          <span>•</span>
                          <span className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-0.5">
                            <Clock className="w-2.5 h-2.5" />
                            <span>{formatLiveTime(item.timestamp)}</span>
                          </span>
                          <span className="text-slate-400 text-[9px] hidden sm:inline">
                            ({formatExactDateTime(item.timestamp, item.formattedDate)})
                          </span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className={`text-xs font-black ${
                          item.scorePercentage >= 80 ? 'text-emerald-600 dark:text-emerald-400' :
                          item.scorePercentage >= 50 ? 'text-indigo-600 dark:text-indigo-400' : 'text-rose-600 dark:text-rose-400'
                        }`}>
                          {item.scorePercentage}%
                        </div>
                        <div className="text-[9px] text-slate-400 font-medium">
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

        {/* Permanent Name Change Confirmation Dialog */}
        {showNameConfirmModal && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-3 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-white dark:bg-slate-900 border border-amber-400/60 rounded-2xl p-4 sm:p-5 max-w-sm w-full shadow-2xl space-y-3">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <h3 className="text-sm font-black tracking-tight">Confirm Permanent Name</h3>
              </div>
              
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                Are you sure you want to change your candidate name to:
              </p>

              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-center">
                <span className="text-sm font-black text-slate-900 dark:text-white">
                  "{nameInput.trim()}"
                </span>
              </div>

              <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/30 text-[10px] text-rose-700 dark:text-rose-300 leading-snug">
                ⚠️ <strong>Permanent Restriction Notice:</strong> You are allowed to edit your candidate name only <u>once</u>. After confirming, this name is permanently locked and cannot be changed again.
              </div>

              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  type="button"
                  disabled={isSavingName}
                  onClick={() => setShowNameConfirmModal(false)}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={isSavingName}
                  onClick={handleConfirmSaveName}
                  className="px-4 py-1.5 text-xs font-black rounded-lg bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-950 shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                >
                  {isSavingName ? (
                    <span>Saving...</span>
                  ) : (
                    <>
                      <Check className="w-3.5 h-3.5 text-slate-950" />
                      <span>Confirm &amp; Lock Forever</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

