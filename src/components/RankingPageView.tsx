import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { 
  X, 
  Trophy, 
  Clock, 
  Atom, 
  Sigma, 
  Calculator, 
  FlaskConical, 
  CheckCircle2, 
  Award, 
  Share2, 
  Check, 
  ChevronRight, 
  BookOpen,
  ArrowLeft
} from 'lucide-react';
import { LeaderboardEntry, ClassLevel, CandidateRankingProfile } from '../types';
import { MathService } from '../services/mathService';
import { FirestoreLeaderboardService } from '../services/firestoreLeaderboard';
import { useAuth } from '../context/AuthContext';
import { normalizeTrackAndClass } from '../utils/trackUtils';
import { getCurrentMonthKey, getMonthKey } from '../utils/monthUtils';

export type LeaderboardTrack = 
  | 'Elementary Mathematics' 
  | 'Chemistry' 
  | 'Elementary Physics' 
  | 'Pre Calculas';

interface RankingPageViewProps {
  initialClass?: ClassLevel | 'all';
  initialTrack?: LeaderboardTrack;
  onBack: () => void;
}

export const RankingPageView: React.FC<RankingPageViewProps> = ({
  initialClass = 'all',
  initialTrack = 'Elementary Mathematics',
  onBack,
}) => {
  const { currentUser, userProfile } = useAuth();
  const [allEntries, setAllEntries] = useState<LeaderboardEntry[]>([]);
  const [selectedClass, setSelectedClass] = useState<ClassLevel>(() => {
    return initialClass && initialClass !== 'all' ? initialClass : 9;
  });
  const [selectedTrack, setSelectedTrack] = useState<LeaderboardTrack>(initialTrack);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'Normal' | 'Advanced'>('Normal');
  const [selectedCandidate, setSelectedCandidate] = useState<CandidateRankingProfile | null>(null);
  const [candidateAttemptsList, setCandidateAttemptsList] = useState<LeaderboardEntry[]>([]);
  const [copiedShare, setCopiedShare] = useState<boolean>(false);
  const [now, setNow] = useState<number>(() => Date.now());

  // Current month partition key - view ranking strictly shows current month records
  const currentMonthKey = getCurrentMonthKey();

  // In-memory cache map to ensure once candidate attempts are fetched, they never re-load or flash spinners
  const candidateAttemptsCacheRef = useRef<Map<string, LeaderboardEntry[]>>(new Map());

  // Real-time live timestamp ticker
  useEffect(() => {
    const ticker = setInterval(() => {
      setNow(Date.now());
    }, 5000);
    return () => clearInterval(ticker);
  }, []);

  const formatLiveTime = useCallback((timestamp?: number) => {
    if (!timestamp) return 'Recent';
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
  }, [now]);

  useEffect(() => {
    if (initialTrack) {
      setSelectedTrack(initialTrack);
    }
    if (initialClass && initialClass !== 'all') {
      setSelectedClass(initialClass);
    } else if (initialTrack === 'Pre Calculas' || initialTrack === 'Chemistry') {
      setSelectedClass(11);
    } else {
      setSelectedClass(9);
    }
    setSelectedCandidate(null);
  }, [initialTrack, initialClass]);

  const loadLeaderboardData = useCallback(async () => {
    try {
      // 1. Try Firebase Firestore Cloud Database first with current month filter
      const firestoreData = await FirestoreLeaderboardService.fetchRanked('all', 'practice', selectedTrack, currentMonthKey);
      if (Array.isArray(firestoreData) && firestoreData.length > 0) {
        setAllEntries(firestoreData);
        return;
      }

      // 2. Fallback to Node.js Server API with current month filter
      const serverEntries = await MathService.fetchServerLeaderboard('all', 'practice', selectedTrack, currentMonthKey);
      if (Array.isArray(serverEntries) && serverEntries.length > 0) {
        setAllEntries(serverEntries);
      } else {
        const local = await MathService.getRankedLeaderboard('all', 'practice', selectedTrack, currentMonthKey);
        setAllEntries(Array.isArray(local) ? local : []);
      }
    } catch {
      try {
        const local = await MathService.getRankedLeaderboard('all', 'practice', selectedTrack, currentMonthKey);
        setAllEntries(Array.isArray(local) ? local : []);
      } catch {
        setAllEntries([]);
      }
    }
  }, [selectedTrack, currentMonthKey]);

  // Initial load and Real-time Firestore Cloud listener
  useEffect(() => {
    loadLeaderboardData();

    let unsubscribe: (() => void) | undefined;
    try {
      unsubscribe = FirestoreLeaderboardService.subscribeToLeaderboard('all', (cloudEntries) => {
        if (Array.isArray(cloudEntries)) {
          setAllEntries(cloudEntries);
        }
      }, selectedTrack, currentMonthKey);
    } catch (e) {
      console.warn('Firestore subscription fallback:', e);
    }

    const interval = setInterval(() => {
      loadLeaderboardData();
    }, 8000);

    return () => {
      if (unsubscribe) unsubscribe();
      clearInterval(interval);
    };
  }, [selectedTrack, currentMonthKey, loadLeaderboardData]);

  // Safe entries array helper - merges live cloud leaderboard with active user profile test history
  // Strictly normalizes tracks and excludes previous month data to display only current month records
  const safeEntries = useMemo(() => {
    const map = new Map<string, LeaderboardEntry>();

    // 1. Add all cloud / server leaderboard entries with strict normalization AND current month filtering
    if (Array.isArray(allEntries)) {
      for (const entry of allEntries) {
        if (entry && entry.id) {
          const entryMonth = entry.monthKey || getMonthKey(entry.timestamp);
          if (entryMonth !== currentMonthKey) {
            continue; // Exclude non-current month entries
          }
          const norm = normalizeTrackAndClass(entry);
          map.set(entry.id, {
            ...entry,
            track: norm.track,
            classLevel: norm.classLevel,
            monthKey: entryMonth,
          });
        }
      }
    }

    // 2. Merge logged-in user's local / cloud profile test history with strict normalization AND current month filtering
    if (userProfile && Array.isArray(userProfile.history)) {
      for (const h of userProfile.history) {
        if (h && h.id) {
          const hMonth = h.monthKey || getMonthKey(h.timestamp);
          if (hMonth !== currentMonthKey) {
            continue; // Exclude non-current month entries
          }
          const norm = normalizeTrackAndClass(h);
          const entryRecord: LeaderboardEntry = {
            id: h.id,
            uid: userProfile.uid,
            email: userProfile.email,
            studentName: userProfile.displayName || currentUser?.displayName || 'Student Candidate',
            classLevel: norm.classLevel,
            track: norm.track,
            chapterId: h.chapterId,
            chapterName: h.chapterName,
            difficultyTier: h.difficultyTier || (h.chapterName && h.chapterName.toLowerCase().includes('advanced') ? 'Advanced' : 'Normal'),
            mode: 'practice',
            correctCount: Number(h.correctCount) || 0,
            totalQuestions: Number(h.totalQuestions) || 0,
            skippedCount: Number(h.skippedCount) || 0,
            scorePercentage: Number(h.scorePercentage) || 0,
            timeSpentSeconds: Number(h.timeSpentSeconds) || 0,
            formattedTime: h.formattedTime || '0m 00s',
            timestamp: Number(h.timestamp) || Date.now(),
            formattedDate: h.formattedDate || 'Recent',
            monthKey: hMonth,
          };
          map.set(h.id, entryRecord);
        }
      }
    }

    return Array.from(map.values());
  }, [allEntries, userProfile, currentUser, currentMonthKey]);

  // Candidate attempts synchronization with zero-flicker caching
  useEffect(() => {
    if (!selectedCandidate) {
      setCandidateAttemptsList([]);
      return;
    }

    const candidateKey = `${selectedCandidate.studentName}_c${selectedCandidate.classLevel}_${selectedCandidate.track}`.toLowerCase();

    // 1. Filter initial attempts strictly for selected subject & class
    const initialAttempts = (selectedCandidate.chapterAttempts || []).filter((a) => {
      const norm = normalizeTrackAndClass(a);
      return norm.track === selectedCandidate.track && Number(norm.classLevel) === Number(selectedCandidate.classLevel);
    });

    // 2. If cached, use it immediately
    if (candidateAttemptsCacheRef.current.has(candidateKey)) {
      setCandidateAttemptsList(candidateAttemptsCacheRef.current.get(candidateKey)!);
      return;
    }

    setCandidateAttemptsList(initialAttempts);

    let isMounted = true;
    const syncAttempts = async () => {
      try {
        const cloudAttempts = await FirestoreLeaderboardService.fetchCandidateTestHistory(
          selectedCandidate.studentName,
          selectedCandidate.uid,
          selectedCandidate.email,
          selectedCandidate.classLevel,
          selectedCandidate.track
        );

        if (!isMounted) return;

        if (Array.isArray(cloudAttempts) && cloudAttempts.length > 0) {
          // Strictly normalize and filter only for current candidate's subject and class
          const verified = cloudAttempts.filter((a) => {
            const norm = normalizeTrackAndClass(a);
            return norm.track === selectedCandidate.track && Number(norm.classLevel) === Number(selectedCandidate.classLevel);
          });

          // Cache verified attempts
          candidateAttemptsCacheRef.current.set(candidateKey, verified);
          setCandidateAttemptsList(verified);
        } else if (initialAttempts.length > 0) {
          candidateAttemptsCacheRef.current.set(candidateKey, initialAttempts);
        }
      } catch (err) {
        console.warn('Candidate attempts background fetch error:', err);
      }
    };

    syncAttempts();

    return () => {
      isMounted = false;
    };
  }, [selectedCandidate]);

  // Aggregate candidate performance into unified CandidateRankingProfile
  // Overall Accuracy Formula: (Total Correct Across All Attempts / Total Questions Across All Attempts) * 100
  // Ranked by: 1) Overall Accuracy (descending), 2) Total Correct Questions (descending), 3) Total Tests (descending)
  const rankedCandidateProfiles: CandidateRankingProfile[] = useMemo(() => {
    const filteredEntries = safeEntries.filter((e) => {
      if (!e) return false;
      const norm = normalizeTrackAndClass(e);
      const trackMatches = norm.track === selectedTrack;
      const classMatches = Number(norm.classLevel) === Number(selectedClass);

      // Strict difficulty matching:
      const entryDiff = e.difficultyTier || (e.chapterName && e.chapterName.toLowerCase().includes('advanced') ? 'Advanced' : 'Normal');
      const difficultyMatches = entryDiff === selectedDifficulty;

      return trackMatches && classMatches && difficultyMatches;
    });

    // Group entries by candidate unique identity: prefer uid, fallback to studentName
    const candidateMap = new Map<string, {
      uid?: string;
      email?: string;
      studentName: string;
      classLevel: ClassLevel;
      track: LeaderboardTrack;
      attempts: LeaderboardEntry[];
      totalCorrect: number;
      totalQuestions: number;
      totalTimeSpent: number;
      latestTimestamp: number;
    }>();

    for (const entry of filteredEntries) {
      const candidateKey = entry.uid 
        ? `uid_${entry.uid}`
        : `name_${entry.studentName.trim().toLowerCase()}`;

      const existing = candidateMap.get(candidateKey);
      const entryCorrect = Number(entry.correctCount) || 0;
      const entryTotalQ = Number(entry.totalQuestions) || 0;
      const entryTime = Number(entry.timeSpentSeconds) || 0;
      const entryTimestamp = Number(entry.timestamp) || Date.now();

      if (!existing) {
        candidateMap.set(candidateKey, {
          uid: entry.uid,
          email: entry.email,
          studentName: entry.studentName,
          classLevel: selectedClass,
          track: selectedTrack,
          attempts: [entry],
          totalCorrect: entryCorrect,
          totalQuestions: entryTotalQ,
          totalTimeSpent: entryTime,
          latestTimestamp: entryTimestamp,
        });
      } else {
        existing.attempts.push(entry);
        existing.totalCorrect += entryCorrect;
        existing.totalQuestions += entryTotalQ;
        existing.totalTimeSpent += entryTime;
        if (entryTimestamp > existing.latestTimestamp) {
          existing.latestTimestamp = entryTimestamp;
          existing.studentName = entry.studentName;
        }
      }
    }

    // Convert to CandidateRankingProfile array with calculated Overall Correct Accuracy
    const candidateProfiles: CandidateRankingProfile[] = [];

    for (const [candidateId, data] of candidateMap.entries()) {
      const overallAccuracy = data.totalQuestions > 0
        ? Math.round((data.totalCorrect / data.totalQuestions) * 100)
        : 0;

      const avgTime = data.attempts.length > 0
        ? Math.round(data.totalTimeSpent / data.attempts.length)
        : 0;

      candidateProfiles.push({
        candidateId,
        uid: data.uid,
        email: data.email,
        studentName: data.studentName,
        classLevel: data.classLevel,
        track: data.track,
        overallAccuracy,
        totalCorrect: data.totalCorrect,
        totalQuestions: data.totalQuestions,
        totalWrong: Math.max(0, data.totalQuestions - data.totalCorrect),
        testsAttempted: data.attempts.length,
        totalTestsAttempted: data.attempts.length,
        totalTimeSpentSeconds: data.totalTimeSpent,
        latestAttemptTimestamp: data.latestTimestamp,
        chapterAttempts: data.attempts,
      });
    }

    // Rank candidates by Overall Accuracy (descending), then Total Correct (descending), then Total Tests (descending)
    candidateProfiles.sort((a, b) => {
      if (b.overallAccuracy !== a.overallAccuracy) {
        return b.overallAccuracy - a.overallAccuracy;
      }
      if (b.totalCorrect !== a.totalCorrect) {
        return b.totalCorrect - a.totalCorrect;
      }
      return b.testsAttempted - a.testsAttempted;
    });

    return candidateProfiles;
  }, [safeEntries, selectedTrack, selectedClass, selectedDifficulty]);

  // Helper to determine if a candidate represents the active authenticated user
  const checkIsCurrentUser = useCallback((candidate: CandidateRankingProfile) => {
    if (currentUser?.uid && candidate.uid === currentUser.uid) {
      return true;
    }
    if (userProfile?.uid && candidate.uid === userProfile.uid) {
      return true;
    }
    if (userProfile?.email && candidate.email && userProfile.email.toLowerCase() === candidate.email.toLowerCase()) {
      return true;
    }
    const currentName = userProfile?.displayName || currentUser?.displayName;
    if (currentName && candidate.studentName.trim().toLowerCase() === currentName.trim().toLowerCase()) {
      return true;
    }
    return false;
  }, [currentUser, userProfile]);

  const getRankBadge = (rank: number, isCurrentUser?: boolean) => {
    if (rank === 1) {
      return (
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 text-white flex items-center justify-center font-black text-sm shadow-md shadow-amber-500/30 border border-amber-300 ring-2 ring-amber-400/40 shrink-0">
          🥇
        </div>
      );
    }
    if (rank === 2) {
      return (
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 text-white flex items-center justify-center font-black text-sm shadow-md shadow-slate-400/30 border border-slate-200 ring-2 ring-slate-300/40 shrink-0">
          🥈
        </div>
      );
    }
    if (rank === 3) {
      return (
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 text-white flex items-center justify-center font-black text-sm shadow-md shadow-amber-700/30 border border-amber-500 ring-2 ring-amber-600/40 shrink-0">
          🥉
        </div>
      );
    }
    return (
      <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-black text-xs sm:text-sm shrink-0 transition-all ${
        isCurrentUser 
          ? 'bg-gradient-to-br from-sky-500 to-blue-600 text-white border border-sky-300 shadow-md shadow-sky-500/25 ring-2 ring-sky-400/40' 
          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
      }`}>
        #{rank}
      </div>
    );
  };

  const handleShareCandidateProgress = async (candidate: CandidateRankingProfile, rankIndex: number) => {
    const text = `🏆 Academic Ranking Track Record\n👤 Candidate: ${candidate.studentName}\n🏅 Academic Rank: #${rankIndex + 1} (${selectedTrack})\n🎯 Overall Accuracy: ${candidate.overallAccuracy}%\n📚 Class: Class ${candidate.classLevel}\n✅ Correct Questions: ${candidate.totalCorrect}/${candidate.totalQuestions}\n📝 Chapters Mastered: ${candidate.testsAttempted} Chapters\n🔗 View Live Rankings: ${window.location.origin}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 3000);
    } catch {
      // ignore
    }
  };

  return (
    <div id="ranking-page-view" className="py-6 sm:py-8 bg-slate-50 dark:bg-slate-950 min-h-[calc(100vh-100px)] animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors w-fit cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
        </div>

        {/* Academic Ranking Page Container with Increased Height for More Entries */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col min-h-[750px] lg:min-h-[850px]">
          
          {/* Academic Ranking Header — Light Green Dynamic View */}
          <div className="bg-gradient-to-r from-emerald-500 via-teal-600 to-green-600 p-3.5 sm:p-4.5 text-white relative flex items-center justify-between shadow-md shadow-emerald-900/20">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/25 backdrop-blur-xs flex items-center justify-center text-white border border-white/40 shadow-inner shrink-0 ring-2 ring-emerald-300/40">
                <Trophy className="w-5 h-5 text-amber-200 fill-amber-300 stroke-[2]" />
              </div>
              <div>
                <span className="text-base sm:text-lg font-black uppercase tracking-wider bg-gradient-to-r from-white via-emerald-100 to-lime-200 bg-clip-text text-transparent flex items-center gap-2 drop-shadow-sm transition-all">
                  <span className="w-2 h-2 rounded-full bg-lime-300 animate-ping shrink-0 inline-block" />
                  <span>ACADEMIC RANKING</span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onBack}
                className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                aria-label="Back"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            </div>
          </div>

          {/* Controls Bar: Track Selector + Class Switcher with dynamic compact text-fitted buttons */}
          <div className="p-2 sm:p-2.5 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800 space-y-1.5">
            
            {/* 4 Track Options — Content-Fitted Dynamic Width (Compact) */}
            <div className="flex flex-wrap items-center gap-1 p-0.5 bg-slate-200/60 dark:bg-slate-800/60 rounded-lg">
              {([
                { id: 'Elementary Mathematics', label: 'Mathematics', icon: Sigma },
                { id: 'Chemistry', label: 'Chemistry', icon: FlaskConical },
                { id: 'Elementary Physics', label: 'Physics', icon: Atom },
                { id: 'Pre Calculas', label: 'Pre Calculas', icon: Calculator },
              ] as { id: LeaderboardTrack; label: string; icon: any }[]).map((tr) => {
                const Icon = tr.icon;
                return (
                  <button
                    key={tr.id}
                    onClick={() => {
                      setSelectedTrack(tr.id);
                      if (tr.id === 'Pre Calculas' || tr.id === 'Chemistry') {
                        setSelectedClass(11);
                      }
                      setSelectedCandidate(null);
                    }}
                    className={`w-auto px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md text-[9px] sm:text-[10.5px] font-bold transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                      selectedTrack === tr.id
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
                    }`}
                  >
                    <Icon className="w-2 h-2 sm:w-2.5 sm:h-2.5 shrink-0" />
                    <span>{tr.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Class Switcher Tabs & Difficulty Switcher — Content-Fitted Dynamic Width (Compact) */}
            <div className="flex flex-wrap items-center justify-between gap-1.5">
              <div className="flex flex-wrap items-center p-0.5 rounded-lg bg-slate-200/60 dark:bg-slate-800/60 gap-1">
                {([9, 10, 11, 12] as ClassLevel[]).map((lvl) => {
                  const count = safeEntries.filter(e => {
                    if (!e) return false;
                    const norm = normalizeTrackAndClass(e);
                    const entryDiff = e.difficultyTier || (e.chapterName && e.chapterName.toLowerCase().includes('advanced') ? 'Advanced' : 'Normal');
                    return norm.track === selectedTrack && Number(norm.classLevel) === Number(lvl) && entryDiff === selectedDifficulty;
                  }).length;

                  return (
                    <button
                      key={lvl}
                      onClick={() => {
                        setSelectedClass(lvl);
                        setSelectedCandidate(null);
                      }}
                      className={`w-auto px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md text-[9px] sm:text-[10.5px] font-bold transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                        selectedClass === lvl
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
                      }`}
                    >
                      <span>Class {lvl}</span>
                      <span className={`px-1 py-0.2 rounded-full text-[8px] font-black ${
                        selectedClass === lvl
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Difficulty Switcher (Normal / Advanced) */}
              <div className="flex items-center p-0.5 rounded-lg bg-slate-200/60 dark:bg-slate-800/60 gap-1">
                {([
                  { id: 'Normal', label: 'Normal' },
                  { id: 'Advanced', label: 'Advanced' }
                ] as { id: 'Normal' | 'Advanced'; label: string }[]).map((dif) => (
                  <button
                    key={dif.id}
                    onClick={() => {
                      setSelectedDifficulty(dif.id);
                      setSelectedCandidate(null);
                    }}
                    className={`w-auto px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md text-[9px] sm:text-[10.5px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                      selectedDifficulty === dif.id
                        ? dif.id === 'Advanced'
                          ? 'bg-purple-600 text-white shadow-xs'
                          : 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
                    }`}
                  >
                    <span>{dif.label}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Main Content: Candidate Overall Accuracy Ranking List with Increased Height */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 min-h-[580px] lg:min-h-[680px]">
            {rankedCandidateProfiles.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
                  <Trophy className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
                  No Academic Rankings for {selectedTrack} (Class {selectedClass}{selectedDifficulty !== 'all' ? ` • ${selectedDifficulty}` : ''})
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  Complete practice tests across chapters to establish overall accuracy and get ranked in the Academic Hall of Fame.
                </p>
              </div>
            ) : (
              <div>
                <div className="space-y-2.5">
                  {rankedCandidateProfiles.map((candidate, index) => {
                    const isCurrentUser = checkIsCurrentUser(candidate);
                    const hasAdvanced = (candidate.chapterAttempts || []).some(a => a.difficultyTier === 'Advanced' || (a.chapterName && a.chapterName.toLowerCase().includes('advanced')));
                    const hasNormal = (candidate.chapterAttempts || []).some(a => a.difficultyTier === 'Normal' || (a.chapterName && !a.chapterName.toLowerCase().includes('advanced')));

                    return (
                      <div
                        key={candidate.candidateId || index}
                        id={isCurrentUser ? 'current-user-ranking-row' : undefined}
                        onClick={() => setSelectedCandidate(candidate)}
                        className={`relative p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 hover:scale-[1.002] ${
                          isCurrentUser
                            ? 'bg-gradient-to-r from-sky-50 via-sky-100/50 to-blue-50/70 dark:from-sky-950/70 dark:via-sky-900/30 dark:to-slate-900 border-2 border-sky-400 dark:border-sky-500 shadow-md shadow-sky-500/15 ring-2 ring-sky-400/40 dark:ring-sky-500/30 hover:border-sky-500 dark:hover:border-sky-400'
                            : index === 0
                              ? 'bg-amber-50/60 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800/80 shadow-sm ring-1 ring-amber-400/30'
                              : 'bg-white dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 shadow-2xs'
                        }`}
                      >
                        {/* Dynamic Skyblue Accent Indicator Bar on Left for Current User */}
                        {isCurrentUser && (
                          <div className="absolute left-0 top-2.5 bottom-2.5 w-1.5 rounded-r-full bg-gradient-to-b from-sky-400 to-blue-600 shadow-xs" />
                        )}

                        <div className="flex items-center gap-3 min-w-0">
                          {getRankBadge(index + 1, isCurrentUser)}

                          <div className="min-w-0 space-y-1">
                            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                              <h4 className={`text-xs sm:text-sm font-black truncate ${
                                isCurrentUser ? 'text-sky-950 dark:text-sky-100' : 'text-slate-900 dark:text-white'
                              }`}>
                                {candidate.studentName}
                              </h4>

                              {/* Distinct Current User Highlight Badge */}
                              {isCurrentUser && (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-xs flex items-center gap-1.5 shrink-0">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                                  <span>You</span>
                                </span>
                              )}

                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-black shrink-0 ${
                                isCurrentUser
                                  ? 'bg-sky-200/70 dark:bg-sky-900/80 text-sky-800 dark:text-sky-200 border border-sky-300 dark:border-sky-700'
                                  : 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                              }`}>
                                Class {candidate.classLevel}
                              </span>

                              {/* Difficulty Tier Badges */}
                              {hasAdvanced && (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 shrink-0 flex items-center gap-0.5">
                                  Advanced
                                </span>
                              )}
                              {hasNormal && (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shrink-0 flex items-center gap-0.5">
                                  Normal
                                </span>
                              )}
                            </div>

                            <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                              <span className={`font-medium flex items-center gap-1 ${
                                isCurrentUser ? 'text-sky-600 dark:text-sky-400' : 'text-indigo-600 dark:text-indigo-400'
                              }`}>
                                <Clock className="w-3 h-3" />
                                <span>{formatLiveTime(candidate.latestAttemptTimestamp)}</span>
                              </span>
                              {isCurrentUser && (
                                <>
                                  <span>•</span>
                                  <span className="font-bold text-sky-600 dark:text-sky-400">
                                    Your Current Ranking
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Right Side: Overall Accuracy & Chevron */}
                        <div className="flex items-center gap-3 shrink-0">
                          {/* Overall Accuracy Block */}
                          <div className="text-right">
                            <div className={`text-base sm:text-lg font-black ${
                              isCurrentUser
                                ? 'text-sky-600 dark:text-sky-300'
                                : candidate.overallAccuracy >= 80
                                  ? 'text-emerald-600 dark:text-emerald-400'
                                  : candidate.overallAccuracy >= 50
                                    ? 'text-amber-600 dark:text-amber-400'
                                    : 'text-rose-600 dark:text-rose-400'
                            }`}>
                              {candidate.overallAccuracy}%
                            </div>
                            <div className={`text-[10px] font-semibold uppercase tracking-wider ${
                              isCurrentUser ? 'text-sky-600/80 dark:text-sky-400/80' : 'text-slate-400'
                            }`}>
                              Overall Accuracy
                            </div>
                          </div>

                          <ChevronRight className={`w-4 h-4 hidden sm:block ${
                            isCurrentUser ? 'text-sky-500 dark:text-sky-400' : 'text-slate-400'
                          }`} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Selected Candidate Track Record & Progress Detail Drawer */}
          {selectedCandidate && (
            <div className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
                
                {/* Drawer Header */}
                <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-900 p-6 text-white relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center font-black text-xl border border-white/30">
                        {selectedCandidate.studentName.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-violet-400/30 text-violet-200 border border-violet-300/30">
                            Class {selectedCandidate.classLevel} Student
                          </span>
                          {checkIsCurrentUser(selectedCandidate) && (
                            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-400/30 text-sky-200 border border-sky-300/40">
                              Your Profile
                            </span>
                          )}
                          <span className="text-xs text-white/80">
                            {selectedCandidate.track}
                          </span>
                        </div>
                        <h3 className="text-xl font-black text-white">
                          {selectedCandidate.studentName}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleShareCandidateProgress(selectedCandidate, 0)}
                        className="px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold shadow-xs"
                        title="Share Track Record"
                      >
                        {copiedShare ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-300" />
                            <span className="text-emerald-200">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Share2 className="w-3.5 h-3.5" />
                            <span>Share Track Record</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => setSelectedCandidate(null)}
                        className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/20 cursor-pointer"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Overall Accuracy Bar for this exact subject and class */}
                  {(() => {
                    const drawerAttempts = candidateAttemptsList.length > 0 ? candidateAttemptsList : (selectedCandidate.chapterAttempts || []);
                    const drawerTotalQ = drawerAttempts.reduce((sum, item) => sum + (Number(item.totalQuestions) || 0), 0);
                    const drawerTotalC = drawerAttempts.reduce((sum, item) => sum + (Number(item.correctCount) || 0), 0);
                    const drawerAccuracy = drawerTotalQ > 0 ? Math.round((drawerTotalC / drawerTotalQ) * 100) : selectedCandidate.overallAccuracy;

                    return (
                      <div className="grid grid-cols-3 gap-2 mt-4 p-3 rounded-2xl bg-black/25 backdrop-blur-md border border-white/10 text-center text-white">
                        <div>
                          <span className="text-[10px] uppercase text-white/70 block">Overall Correct Accuracy</span>
                          <span className="text-lg font-black text-emerald-300">{drawerAccuracy}%</span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase text-white/70 block">Questions Solved</span>
                          <span className="text-lg font-black text-amber-300">{drawerTotalC} / {drawerTotalQ}</span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase text-white/70 block">Tests Attempted</span>
                          <span className="text-lg font-black text-sky-300">{drawerAttempts.length} Tests</span>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* Candidate Tests List Body */}
                <div className="p-4 sm:p-6 overflow-y-auto space-y-4 max-h-[55vh]">
                  {(() => {
                    const attemptsToDisplay = candidateAttemptsList.length > 0 ? candidateAttemptsList : (selectedCandidate.chapterAttempts || []);

                    return (
                      <>
                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider flex items-center justify-between">
                          <span>Chapter Tests Completed ({attemptsToDisplay.length})</span>
                          <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400">Class {selectedCandidate.classLevel} • {selectedCandidate.track}</span>
                        </h4>

                        {attemptsToDisplay.length === 0 ? (
                          <p className="text-xs text-slate-500 text-center py-6">
                            No chapter tests on record for this specific class and track.
                          </p>
                        ) : (
                          <div className="space-y-2">
                            {attemptsToDisplay.map((ch, idx) => {
                              const isAdv = ch.difficultyTier === 'Advanced' || (ch.chapterName && ch.chapterName.toLowerCase().includes('advanced'));

                              return (
                                <div 
                                  key={ch.id || idx}
                                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between gap-3 text-xs"
                                >
                                  <div className="min-w-0 space-y-0.5">
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                      <span className="font-bold text-slate-900 dark:text-white truncate">
                                        {ch.chapterName}
                                      </span>
                                      <span className={`px-1.5 py-0.2 rounded text-[9px] font-black ${
                                        isAdv 
                                          ? 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300' 
                                          : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                                      }`}>
                                        {isAdv ? 'Advanced' : 'Normal'}
                                      </span>
                                    </div>
                                    <div className="text-[10px] text-slate-400 flex items-center gap-2">
                                      <span>{formatLiveTime(ch.timestamp)}</span>
                                      <span>•</span>
                                      <span>{ch.formattedTime || '0m 00s'}</span>
                                    </div>
                                  </div>

                                  <div className="text-right shrink-0">
                                    <div className={`font-black text-sm ${
                                      ch.scorePercentage >= 80 ? 'text-emerald-600 dark:text-emerald-400' :
                                      ch.scorePercentage >= 50 ? 'text-amber-600 dark:text-amber-400' : 'text-rose-600 dark:text-rose-400'
                                    }`}>
                                      {ch.scorePercentage}%
                                    </div>
                                    <div className="text-[10px] text-slate-400">
                                      <span>{ch.correctCount}/{ch.totalQuestions} Correct</span>
                                      {(ch.skippedCount ?? 0) > 0 && (
                                        <span className="ml-1 text-slate-500 font-semibold">• {ch.skippedCount} Skipped</span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </>
                    );
                  })()}

                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => setSelectedCandidate(null)}
                      className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all cursor-pointer"
                    >
                      Close Track Record
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
