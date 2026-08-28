import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  X, 
  Trophy, 
  Sparkles,
  Clock, 
  Atom,
  Sigma,
  Zap,
  Calculator,
  FlaskConical,
  Star,
  CheckCircle2,
  XCircle,
  Award,
  Share2,
  Check,
  User,
  ChevronRight,
  BookOpen,
  Calendar,
  Layers,
  GraduationCap
} from 'lucide-react';
import { LeaderboardEntry, ClassLevel, CandidateRankingProfile } from '../types';
import { MathService } from '../services/mathService';
import { FirestoreLeaderboardService } from '../services/firestoreLeaderboard';
import { MathText } from './MathText';

export type LeaderboardTrack = 
  | 'Elementary Mathematics' 
  | 'Chemistry' 
  | 'Elementary Physics' 
  | 'Pre Calculas';

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialClass?: ClassLevel | 'all';
  initialTrack?: LeaderboardTrack;
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({
  isOpen,
  onClose,
  initialClass = 'all',
  initialTrack = 'Elementary Mathematics',
}) => {
  const [allEntries, setAllEntries] = useState<LeaderboardEntry[]>([]);
  const [selectedClass, setSelectedClass] = useState<ClassLevel>(() => {
    return initialClass && initialClass !== 'all' ? initialClass : 9;
  });
  const [selectedTrack, setSelectedTrack] = useState<LeaderboardTrack>(initialTrack);
  const [selectedCandidate, setSelectedCandidate] = useState<CandidateRankingProfile | null>(null);
  const [copiedShare, setCopiedShare] = useState<boolean>(false);
  const [now, setNow] = useState<number>(() => Date.now());

  // Real-time live timestamp ticker to sync submission relative time
  useEffect(() => {
    if (!isOpen) return;
    const ticker = setInterval(() => {
      setNow(Date.now());
    }, 5000);
    return () => clearInterval(ticker);
  }, [isOpen]);

  const formatLiveTime = useCallback((timestamp?: number) => {
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
  }, [now]);

  useEffect(() => {
    if (isOpen && initialTrack) {
      setSelectedTrack(initialTrack);
    }
  }, [isOpen, initialTrack]);

  useEffect(() => {
    if (isOpen) {
      setSelectedClass(9);
    }
  }, [isOpen]);

  const loadLeaderboardData = useCallback(async () => {
    try {
      // 1. Try Firebase Firestore Cloud Database first
      const firestoreData = await FirestoreLeaderboardService.fetchRanked('all', 'practice', selectedTrack);
      if (Array.isArray(firestoreData) && firestoreData.length > 0) {
        setAllEntries(firestoreData);
        return;
      }

      // 2. Fallback to Node.js Server API
      const serverEntries = await MathService.fetchServerLeaderboard('all', 'practice', selectedTrack);
      if (Array.isArray(serverEntries) && serverEntries.length > 0) {
        setAllEntries(serverEntries);
      } else {
        const local = await MathService.getRankedLeaderboard('all', 'practice', selectedTrack);
        setAllEntries(Array.isArray(local) ? local : []);
      }
    } catch {
      try {
        const local = await MathService.getRankedLeaderboard('all', 'practice', selectedTrack);
        setAllEntries(Array.isArray(local) ? local : []);
      } catch {
        setAllEntries([]);
      }
    }
  }, [selectedTrack]);

  // Initial load and Real-time Firestore Cloud listener
  useEffect(() => {
    if (!isOpen) return;

    loadLeaderboardData();

    let unsubscribe: (() => void) | undefined;
    try {
      unsubscribe = FirestoreLeaderboardService.subscribeToLeaderboard('all', (cloudEntries) => {
        if (Array.isArray(cloudEntries)) {
          setAllEntries(cloudEntries);
        }
      }, selectedTrack);
    } catch (e) {
      console.warn('Firestore subscription fallback:', e);
    }

    const interval = setInterval(() => {
      loadLeaderboardData();
    }, 5000);

    return () => {
      if (unsubscribe) unsubscribe();
      clearInterval(interval);
    };
  }, [isOpen, selectedTrack, loadLeaderboardData]);

  // Safe entries array helper
  const safeEntries = useMemo(() => Array.isArray(allEntries) ? allEntries : [], [allEntries]);

  // Filter live submissions for track and active class
  const classLiveSubmissions = useMemo(() => {
    return safeEntries.filter((e) => {
      if (!e) return false;
      const entryTrack = e.track || 'Elementary Mathematics';
      return entryTrack === selectedTrack && Number(e.classLevel) === Number(selectedClass) && (!e.id || !e.id.startsWith('lead-seed-'));
    }).length;
  }, [safeEntries, selectedTrack, selectedClass]);

  const trackLiveSubmissions = useMemo(() => {
    return safeEntries.filter((e) => {
      if (!e) return false;
      const entryTrack = e.track || 'Elementary Mathematics';
      return entryTrack === selectedTrack && (!e.id || !e.id.startsWith('lead-seed-'));
    }).length;
  }, [safeEntries, selectedTrack]);

  // Aggregate and Rank Candidate Profiles by Overall Correct Accuracy across ALL submissions
  const rankedCandidateProfiles: CandidateRankingProfile[] = useMemo(() => {
    const candidateMap = new Map<string, {
      studentName: string;
      classLevel: ClassLevel;
      track: string;
      allSubmissions: LeaderboardEntry[]; // Store all submissions made by student
      latestTimestamp: number;
    }>();

    for (const entry of safeEntries) {
      if (!entry) continue;
      if (entry.mode === 'exam' || (entry.chapterName && entry.chapterName.toLowerCase().includes('mock'))) continue;
      if (entry.id && entry.id.startsWith('lead-seed-')) continue;

      const entryTrack = entry.track || 'Elementary Mathematics';
      if (entryTrack !== selectedTrack) continue;

      if (Number(entry.classLevel) !== Number(selectedClass)) continue;

      const cleanName = (entry.studentName || 'Anonymous Student').trim();
      const candidateKey = `${cleanName}_c${entry.classLevel}_${entryTrack}`;

      if (!candidateMap.has(candidateKey)) {
        candidateMap.set(candidateKey, {
          studentName: cleanName,
          classLevel: entry.classLevel,
          track: entryTrack,
          allSubmissions: [],
          latestTimestamp: entry.timestamp || Date.now(),
        });
      }

      const cand = candidateMap.get(candidateKey)!;
      cand.allSubmissions.push(entry);

      if (entry.timestamp && entry.timestamp > cand.latestTimestamp) {
        cand.latestTimestamp = entry.timestamp;
      }
    }

    // Convert to CandidateRankingProfile array with calculated Overall Correct Accuracy
    const candidateProfiles: CandidateRankingProfile[] = [];

    for (const [_, cand] of candidateMap.entries()) {
      const submissions = cand.allSubmissions;
      const totalQuestions = submissions.reduce((sum, item) => sum + (item.totalQuestions || 0), 0);
      const totalCorrect = submissions.reduce((sum, item) => sum + (item.correctCount || 0), 0);
      const totalSkipped = submissions.reduce((sum, item) => sum + (item.skippedCount || 0), 0);
      const totalWrong = Math.max(0, totalQuestions - totalCorrect - totalSkipped);
      const totalTimeSpentSeconds = submissions.reduce((sum, item) => sum + (item.timeSpentSeconds || 0), 0);
      
      // Calculate overall correct accuracy across ALL submitted questions
      const overallAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

      candidateProfiles.push({
        candidateId: `cand_${cand.studentName}_${cand.classLevel}_${cand.track}`,
        studentName: cand.studentName,
        classLevel: cand.classLevel,
        track: cand.track,
        overallAccuracy,
        totalCorrect,
        totalQuestions,
        totalWrong,
        totalSkipped,
        testsAttempted: submissions.length,
        totalTestsAttempted: submissions.length,
        totalTimeSpentSeconds,
        latestAttemptTimestamp: cand.latestTimestamp,
        chapterAttempts: [...submissions].sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0)),
      });
    }

    // Rank rule: Overall Correct Accuracy descending -> Total Correct descending -> Total Submissions descending -> Time spent ascending
    return candidateProfiles.sort((a, b) => {
      if (b.overallAccuracy !== a.overallAccuracy) {
        return b.overallAccuracy - a.overallAccuracy;
      }
      if (b.totalCorrect !== a.totalCorrect) {
        return b.totalCorrect - a.totalCorrect;
      }
      if ((b.testsAttempted || 0) !== (a.testsAttempted || 0)) {
        return (b.testsAttempted || 0) - (a.testsAttempted || 0);
      }
      if (a.totalTimeSpentSeconds !== b.totalTimeSpentSeconds) {
        return a.totalTimeSpentSeconds - b.totalTimeSpentSeconds;
      }
      return (b.latestAttemptTimestamp || 0) - (a.latestAttemptTimestamp || 0);
    });
  }, [safeEntries, selectedClass, selectedTrack]);

  if (!isOpen) return null;

  const calculateRating = (profile: CandidateRankingProfile) => {
    const accuracy = profile.overallAccuracy || 0;
    const correct = profile.totalCorrect || 0;
    const ratingScore = Math.round((accuracy * 20) + (correct * 12));

    if (ratingScore >= 2200 || accuracy >= 90) {
      return { score: ratingScore, title: 'Grandmaster', stars: 5, color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700' };
    }
    if (ratingScore >= 1800 || accuracy >= 75) {
      return { score: ratingScore, title: 'Master Problem Solver', stars: 4, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700' };
    }
    if (ratingScore >= 1400 || accuracy >= 60) {
      return { score: ratingScore, title: 'Expert Analyst', stars: 3, color: 'text-violet-600 bg-violet-50 dark:bg-violet-950/60 border-violet-300 dark:border-violet-700' };
    }
    if (ratingScore >= 1000 || accuracy >= 45) {
      return { score: ratingScore, title: 'Active Student', stars: 2, color: 'text-violet-600 bg-violet-50 dark:bg-violet-950/60 border-violet-300 dark:border-violet-700' };
    }
    return { score: ratingScore, title: 'Apprentice', stars: 1, color: 'text-slate-600 bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700' };
  };

  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return (
          <div className="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-300 font-black text-base flex items-center justify-center border-2 border-amber-300 dark:border-amber-700 shadow-md shrink-0">
            🥇
          </div>
        );
      case 2:
        return (
          <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-black text-base flex items-center justify-center border-2 border-slate-300 dark:border-slate-600 shadow-md shrink-0">
            🥈
          </div>
        );
      case 3:
        return (
          <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 font-black text-base flex items-center justify-center border-2 border-amber-300/60 dark:border-amber-800 shadow-md shrink-0">
            🥉
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 rounded-2xl bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 font-black text-xs flex items-center justify-center border border-slate-200 dark:border-slate-700 shrink-0">
            #{rank}
          </div>
        );
    }
  };

  // Share specific candidate's track record and progress
  const handleShareCandidateProgress = async (candidate: CandidateRankingProfile, rankIndex: number) => {
    const rating = calculateRating(candidate);
    const text = `🏆 Academic Ranking Track Record\n👤 Candidate: ${candidate.studentName}\n🏅 Academic Rank: #${rankIndex + 1} (${selectedTrack})\n🎯 Overall Accuracy: ${candidate.overallAccuracy}%\n📚 Class: Class ${candidate.classLevel}\n✅ Correct Questions: ${candidate.totalCorrect}/${candidate.totalQuestions}\n📝 Chapters Mastered: ${candidate.testsAttempted} Chapters\n⭐ Academic Title: ${rating.title} (${rating.score} pts)\n🔗 View Live Rankings: ${window.location.origin}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${candidate.studentName}'s Academic Track Record`,
          text,
          url: window.location.href,
        });
        setCopiedShare(true);
        setTimeout(() => setCopiedShare(false), 3000);
        return;
      } catch {
        // clipboard fallback
      }
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 3000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Academic Ranking Modal Header — Light Green Dynamic View */}
        <div className="bg-gradient-to-r from-emerald-500 via-teal-600 to-green-600 p-4.5 sm:p-5.5 text-white relative flex items-center justify-between shadow-lg shadow-emerald-900/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/25 backdrop-blur-xs flex items-center justify-center text-white border border-white/40 shadow-inner shrink-0 ring-2 ring-emerald-300/40">
              <Trophy className="w-5.5 h-5.5 text-amber-200 fill-amber-300 stroke-[2]" />
            </div>
            <div>
              <span className="text-base sm:text-xl font-black uppercase tracking-wider bg-gradient-to-r from-white via-emerald-100 to-lime-200 bg-clip-text text-transparent flex items-center gap-2 drop-shadow-sm transition-all">
                <span className="w-2 h-2 rounded-full bg-lime-300 animate-ping shrink-0 inline-block" />
                <span>ACADEMIC RANKING</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-full text-white/85 hover:text-white hover:bg-white/20 transition-all active:scale-95 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
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
                    if (tr.id === 'Pre Calculas') {
                      setSelectedClass(11);
                    }
                    setSelectedCandidate(null);
                  }}
                  className={`w-auto px-2 py-1 rounded-md text-[10.5px] font-bold transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                    selectedTrack === tr.id
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
                  }`}
                >
                  <Icon className="w-2.5 h-2.5 shrink-0" />
                  <span>{tr.label}</span>
                </button>
              );
            })}
          </div>

          {/* Class Switcher Tabs — Content-Fitted Dynamic Width (Compact) */}
          <div className="flex flex-wrap items-center p-0.5 rounded-lg bg-slate-200/60 dark:bg-slate-800/60 gap-1">
            {([9, 10, 11, 12] as ClassLevel[]).map((lvl) => {
              const count = safeEntries.filter(e => {
                if (!e) return false;
                const entryTrack = e.track || 'Elementary Mathematics';
                return entryTrack === selectedTrack && Number(e.classLevel) === lvl && (!e.id || !e.id.startsWith('lead-seed-'));
              }).length;
              return (
                <button
                  key={lvl}
                  onClick={() => {
                    setSelectedClass(lvl);
                    setSelectedCandidate(null);
                  }}
                  className={`w-auto px-2 py-1 rounded-md text-[10.5px] font-bold transition-all cursor-pointer flex items-center gap-1 whitespace-nowrap ${
                    selectedClass === lvl
                      ? 'bg-teal-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
                  }`}
                >
                  <span>Class {lvl}</span>
                  <span className={`text-[9px] px-1 py-0.2 rounded font-semibold ${selectedClass === lvl ? 'bg-teal-700 text-white' : 'bg-slate-300/80 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Main Content: Candidate Overall Accuracy Ranking List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {rankedCandidateProfiles.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
                <Trophy className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
                No Academic Rankings for {selectedTrack} (Class {selectedClass})
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                Complete practice tests across chapters to establish overall accuracy and get ranked in the Academic Hall of Fame.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {rankedCandidateProfiles.map((candidate, index) => {
                const rating = calculateRating(candidate);

                return (
                  <div
                    key={candidate.candidateId || index}
                    onClick={() => setSelectedCandidate(candidate)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:scale-[1.005] ${
                      index === 0
                        ? 'bg-amber-50/60 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800/80 shadow-md ring-1 ring-amber-400/30'
                        : 'bg-white dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      {getRankBadge(index + 1)}

                      <div className="min-w-0 space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-sm sm:text-base font-black text-slate-900 dark:text-white truncate">
                            {candidate.studentName}
                          </h4>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 shrink-0">
                            Class {candidate.classLevel}
                          </span>

                          {/* Skill Rating Badge */}
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border flex items-center gap-1 ${rating.color}`}>
                            <Award className="w-3 h-3" />
                            <span>{rating.title} ({rating.score})</span>
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                          <span className="font-semibold text-slate-700 dark:text-slate-300">
                            {candidate.testsAttempted} {candidate.testsAttempted === 1 ? 'Submission' : 'Submissions'}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                            <span>{candidate.totalCorrect}/{candidate.totalQuestions} Correct</span>
                          </span>
                          <span>•</span>
                          <span>Total Time: {Math.floor(candidate.totalTimeSpentSeconds / 60)}m {candidate.totalTimeSpentSeconds % 60}s</span>
                          <span>•</span>
                          <span className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>Synced {formatLiveTime(candidate.latestAttemptTimestamp)}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Side: Overall Accuracy & View Details Button */}
                    <div className="flex items-center gap-4 self-end sm:self-center shrink-0">
                      
                      {/* Overall Accuracy Block */}
                      <div className="text-right pr-2">
                        <div className={`text-xl sm:text-2xl font-black ${
                          candidate.overallAccuracy >= 85 ? 'text-emerald-600 dark:text-emerald-400' :
                          candidate.overallAccuracy >= 65 ? 'text-indigo-600 dark:text-indigo-400' : 'text-rose-600 dark:text-rose-400'
                        }`}>
                          {candidate.overallAccuracy}%
                        </div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                          Overall Accuracy
                        </div>
                      </div>

                      {/* Share Progress Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShareCandidateProgress(candidate, index);
                        }}
                        className="p-2.5 rounded-xl bg-slate-100 hover:bg-indigo-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-all cursor-pointer flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-2xs"
                        title="Share Track Record & Progress"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>

                      <ChevronRight className="w-5 h-5 text-slate-400 hidden sm:block" />

                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Selected Candidate Track Record & Progress Detail Drawer / Modal */}
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
                      className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/20"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Overall Accuracy Bar */}
                <div className="grid grid-cols-3 gap-2 mt-4 p-3 rounded-2xl bg-black/25 backdrop-blur-md border border-white/10 text-center text-white">
                  <div>
                    <span className="text-[10px] uppercase text-white/70 block">Overall Correct Accuracy</span>
                    <span className="text-lg font-black text-emerald-300">{selectedCandidate.overallAccuracy}%</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-white/70 block">Questions Solved</span>
                    <span className="text-lg font-black text-white">{selectedCandidate.totalCorrect}/{selectedCandidate.totalQuestions}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-white/70 block">Total Submissions</span>
                    <span className="text-lg font-black text-amber-300">{selectedCandidate.testsAttempted}</span>
                  </div>
                </div>
              </div>

              {/* Drawer Body: All Submissions Practice History */}
              <div className="p-6 space-y-4 overflow-y-auto">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>Saved Practice History &amp; All Submissions</span>
                  <span>{(selectedCandidate.chapterAttempts || []).length} Submissions</span>
                </h4>

                <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                  {(selectedCandidate.chapterAttempts || []).map((ch, idx) => (
                    <div
                      key={ch.id || idx}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="font-bold text-slate-900 dark:text-white truncate">
                          {ch.chapterName}
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-slate-500">
                          <span>{ch.formattedTime || `${ch.timeSpentSeconds}s`}</span>
                          <span>•</span>
                          <span>{ch.timestamp ? formatLiveTime(ch.timestamp) : (ch.formattedDate || 'Recent')}</span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className={`text-base font-black ${
                          ch.scorePercentage >= 80 ? 'text-emerald-600 dark:text-emerald-400' :
                          ch.scorePercentage >= 50 ? 'text-indigo-600 dark:text-indigo-400' : 'text-rose-600 dark:text-rose-400'
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
                  ))}
                </div>

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
  );
};
