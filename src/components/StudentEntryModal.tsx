import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  ArrowRight, 
  X, 
  BookOpen,
  Sparkles,
  Zap,
  Target,
  Lock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { ClassLevel, TestSessionConfig, PracticeDifficulty } from '../types';
import { useAuth } from '../context/AuthContext';
import { MathService } from '../services/mathService';

interface StudentEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultClass: ClassLevel;
  chapterTitle?: string;
  defaultTrack?: 'Elementary Mathematics' | 'Advanced Mathematics' | 'Elementary Physics' | 'Advanced Physics';
  defaultDifficulty?: PracticeDifficulty;
  onStartTest: (config: TestSessionConfig & { track?: string }) => void;
  onOpenAuth?: () => void;
}

export const StudentEntryModal: React.FC<StudentEntryModalProps> = ({
  isOpen,
  onClose,
  defaultClass,
  chapterTitle,
  defaultTrack = 'Elementary Mathematics',
  defaultDifficulty = 'Normal',
  onStartTest,
  onOpenAuth,
}) => {
  const { currentUser, userProfile } = useAuth();
  const [name, setName] = useState('');
  const [selectedClass, setSelectedClass] = useState<ClassLevel>(defaultClass);
  const [selectedTrack, setSelectedTrack] = useState<'Elementary Mathematics' | 'Advanced Mathematics' | 'Elementary Physics' | 'Advanced Physics'>(defaultTrack);
  const [difficultyTier, setDifficultyTier] = useState<PracticeDifficulty>(defaultDifficulty);
  const [questionCount, setQuestionCount] = useState<number>(15);
  const [error, setError] = useState<string | null>(null);

  const isNameFixed = Boolean(userProfile?.displayName || currentUser?.displayName);

  // Sync profile info
  useEffect(() => {
    if (userProfile?.displayName) {
      setName(userProfile.displayName);
    } else if (currentUser?.displayName) {
      setName(currentUser.displayName);
    }
  }, [userProfile, currentUser]);

  // Keep selectedClass locked to defaultClass when chapter/class practice is initiated
  useEffect(() => {
    setSelectedClass(defaultClass);
  }, [defaultClass]);

  useEffect(() => {
    if (defaultTrack) {
      setSelectedTrack(defaultTrack);
    }
  }, [defaultTrack]);

  useEffect(() => {
    if (defaultClass === 9 || defaultClass === 10) {
      setDifficultyTier('Normal');
    } else if (defaultDifficulty) {
      setDifficultyTier(defaultDifficulty);
    }
  }, [defaultClass, defaultDifficulty]);

  if (!isOpen) return null;

  const isClass11or12 = defaultClass === 11 || defaultClass === 12;
  const effectiveDifficultyTier = isClass11or12 ? difficultyTier : 'Normal';
  const availableQuestionCounts = [15, 20, 25];
  const isUserSignedIn = Boolean(currentUser || (userProfile && userProfile.email && userProfile.email.includes('@')));

  // Check how many questions exist for the chosen difficulty tier
  const availableQuestionsCount = MathService.getQuestionCountByDifficulty(
    defaultClass, 
    undefined, 
    effectiveDifficultyTier, 
    selectedTrack
  );
  const isAdvancedLocked = isClass11or12 && effectiveDifficultyTier === 'Advanced' && availableQuestionsCount === 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Require authentication
    if (!isUserSignedIn) {
      if (onOpenAuth) {
        onClose();
        onOpenAuth();
        return;
      }
    }

    if (isAdvancedLocked) {
      setError('Questions for Advanced difficulty are not available yet. Please select Normal difficulty to start practice.');
      return;
    }

    const finalName = name.trim() || userProfile?.displayName || 'Student Candidate';
    if (!finalName) {
      setError('Please enter your name to begin practice.');
      return;
    }

    onStartTest({
      student: {
        name: finalName,
        classLevel: defaultClass, // strictly fixed to the selected chapter's class
      },
      mode: 'practice',
      questionCount,
      track: selectedTrack,
      difficultyTier: effectiveDifficultyTier,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-indigo-100 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-xs flex items-center justify-center text-white border border-white/20 shadow-inner">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase bg-white/20 text-indigo-100">
                {selectedTrack}
              </span>
              <h2 className="text-xl font-bold tracking-tight text-white">
                Start Practice
              </h2>
            </div>
          </div>
        </div>

        {/* Auth prompt banner if not logged in */}
        {!isUserSignedIn && (
          <div className="p-3 bg-amber-50 dark:bg-amber-950/50 border-b border-amber-200 dark:border-amber-800/60 px-6 flex items-center justify-between text-xs text-amber-800 dark:text-amber-300">
            <span className="font-medium">Sign in is required to track accuracy &amp; sync scores.</span>
            {onOpenAuth && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenAuth();
                }}
                className="px-3 py-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold cursor-pointer"
              >
                Sign In / Sign Up
              </button>
            )}
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
          {error && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-semibold text-center">
              {error}
            </div>
          )}

          {/* Candidate Name (Centered alignment & hidden lock badge) */}
          <div className="space-y-1.5 text-center">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 text-center">
              Candidate Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative max-w-sm mx-auto">
              <input
                type="text"
                required
                readOnly={isNameFixed}
                value={name}
                onChange={(e) => {
                  if (!isNameFixed) {
                    setName(e.target.value);
                    if (error) setError(null);
                  }
                }}
                placeholder="Enter your full name"
                className={`w-full px-4 py-2.5 rounded-xl border text-xs font-bold text-center outline-hidden transition-all shadow-2xs ${
                  isNameFixed
                    ? 'border-indigo-300 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30 text-slate-900 dark:text-white cursor-default'
                    : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500'
                }`}
              />
            </div>
          </div>

          {/* Class Level Display: Fixed according to selected Chapter/Class with center-aligned text */}
          <div className="space-y-1.5 text-center">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Class Level
            </label>

            <div className="p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-slate-800 border-2 border-indigo-300/80 dark:border-indigo-700/60 flex flex-col items-center justify-center text-center shadow-xs">
              <span className="font-extrabold text-base text-slate-900 dark:text-white block">
                Class {defaultClass} {selectedTrack.includes('Physics') ? 'Physics' : 'Mathematics'}
              </span>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium block mt-0.5">
                {chapterTitle ? `Assigned Chapter: ${chapterTitle}` : `Class ${defaultClass} ${selectedTrack.includes('Physics') ? 'Physics' : 'Mathematics'} Curriculum`}
              </span>
            </div>
          </div>

          {/* Track Display: Rectangular Shape in Middle */}
          <div className="space-y-1 text-center">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Academic Track
            </label>
            <div className="p-3 rounded-2xl bg-indigo-50/90 dark:bg-indigo-950/70 border-2 border-indigo-500/80 text-center shadow-xs">
              <span className="block font-black text-sm text-indigo-700 dark:text-indigo-300">
                {selectedTrack === 'Elementary Mathematics' ? 'Mathematics' : selectedTrack === 'Elementary Physics' ? 'Physics' : selectedTrack}
              </span>
              <span className="block text-[11px] font-medium text-indigo-600/80 dark:text-indigo-400/80 mt-0.5">
                {selectedTrack === 'Elementary Mathematics' && 'Standard School Curriculum & Conceptual Foundation'}
                {selectedTrack === 'Advanced Mathematics' && 'Pre-Engineering & Advanced Mathematical Methods'}
                {selectedTrack === 'Elementary Physics' && 'Foundational Physics, Mechanics & Laboratory Concepts'}
                {selectedTrack === 'Advanced Physics' && 'Theoretical Physics, Electrodynamics & Quantum Systems'}
              </span>
            </div>
          </div>

          {/* Difficulty Level Selector: Normal and Advanced (Strictly for Class 11 and Class 12) */}
          {isClass11or12 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Difficulty Level
                </label>
                <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                  {difficultyTier === 'Normal' ? 'Standard Curriculum' : 'Advanced Difficulty'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Normal Difficulty Button */}
                <button
                  type="button"
                  id="difficulty-normal-btn"
                  onClick={() => {
                    setDifficultyTier('Normal');
                    if (error) setError(null);
                  }}
                  className={`p-3.5 rounded-2xl border transition-all text-left cursor-pointer flex flex-col justify-between ${
                    difficultyTier === 'Normal'
                      ? 'bg-gradient-to-br from-indigo-600 to-indigo-700 border-indigo-500 text-white shadow-md shadow-indigo-600/30 ring-2 ring-indigo-400/80 scale-[1.01]'
                      : 'bg-slate-50 dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-indigo-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-extrabold text-xs sm:text-sm tracking-tight flex items-center gap-1.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${difficultyTier === 'Normal' ? 'text-emerald-300' : 'text-slate-400'}`} />
                      Normal
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                      difficultyTier === 'Normal' ? 'bg-white/20 text-white' : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                    }`}>
                      Active
                    </span>
                  </div>
                  <p className={`text-[10px] sm:text-[11px] leading-tight ${difficultyTier === 'Normal' ? 'text-indigo-100' : 'text-slate-500 dark:text-slate-400'}`}>
                    Standard curriculum exercises &amp; MCQs
                  </p>
                </button>

                {/* Advanced Difficulty Button */}
                <button
                  type="button"
                  id="difficulty-advanced-btn"
                  onClick={() => {
                    setDifficultyTier('Advanced');
                    if (error) setError(null);
                  }}
                  className={`p-3.5 rounded-2xl border transition-all text-left cursor-pointer flex flex-col justify-between ${
                    difficultyTier === 'Advanced'
                      ? 'bg-gradient-to-br from-purple-700 to-indigo-900 border-purple-500 text-white shadow-md shadow-purple-600/30 ring-2 ring-purple-400/80 scale-[1.01]'
                      : 'bg-slate-50 dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-purple-300 dark:hover:border-purple-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-extrabold text-xs sm:text-sm tracking-tight flex items-center gap-1.5">
                      <Lock className={`w-4 h-4 shrink-0 ${difficultyTier === 'Advanced' ? 'text-amber-300' : 'text-slate-400'}`} />
                      Advanced
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                      difficultyTier === 'Advanced' ? 'bg-amber-400/30 text-amber-200 border border-amber-300/40' : 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                    }`}>
                      Locked
                    </span>
                  </div>
                  <p className={`text-[10px] sm:text-[11px] leading-tight ${difficultyTier === 'Advanced' ? 'text-purple-200' : 'text-slate-500 dark:text-slate-400'}`}>
                    Competitive &amp; higher level concepts
                  </p>
                </button>
              </div>
            </div>
          )}

          {/* Advanced Difficulty Locked Notice (Only for Class 11 and 12 when Advanced is active) */}
          {isClass11or12 && isAdvancedLocked && (
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-center animate-fade-in">
              <div className="flex items-center justify-center gap-1.5 text-amber-800 dark:text-amber-300 font-bold text-xs">
                <Lock className="w-4 h-4 shrink-0" />
                <span>Advanced Difficulty Questions Coming Soon</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Questions for <strong>Advanced difficulty</strong> in Class {defaultClass} {selectedTrack.includes('Physics') ? 'Physics' : 'Mathematics'} are currently being prepared. Start Practice is locked until Advanced questions are added.
              </p>
              <button
                type="button"
                onClick={() => setDifficultyTier('Normal')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-colors shadow-xs cursor-pointer"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Select Normal Difficulty to Start Practice</span>
              </button>
            </div>
          )}

          {/* Dynamic Question Count Selector: 15, 20, and 25 MCQs (Only active when questions exist) */}
          {!isAdvancedLocked && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Number of MCQs
                </label>
                <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                  Select test duration
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                {availableQuestionCounts.map((count) => {
                  const isSelected = questionCount === count;

                  return (
                    <button
                      type="button"
                      key={count}
                      onClick={() => setQuestionCount(count)}
                      className={`relative p-3 rounded-2xl border transition-all text-left cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 border-indigo-500 text-white shadow-lg shadow-indigo-600/30 scale-[1.02] ring-2 ring-indigo-400/80'
                          : 'bg-slate-50 dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-50/40 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1.5">
                          {count === 15 ? (
                            <Zap className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-300 fill-amber-300' : 'text-indigo-500 dark:text-indigo-400'}`} />
                          ) : count === 20 ? (
                            <Sparkles className={`w-3.5 h-3.5 ${isSelected ? 'text-yellow-300 fill-yellow-300' : 'text-amber-500 dark:text-amber-400'}`} />
                          ) : (
                            <Target className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-300' : 'text-purple-500 dark:text-purple-400'}`} />
                          )}
                          <span className="font-black text-xs sm:text-sm tracking-tight whitespace-nowrap">
                            {count} MCQs
                          </span>
                        </div>
                        <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-amber-300 animate-ping' : 'bg-slate-300 dark:bg-slate-600'}`} />
                      </div>

                      <p className={`text-[10px] leading-tight ${isSelected ? 'text-indigo-100' : 'text-slate-500 dark:text-slate-400'}`}>
                        {count === 15 ? 'Quick • 15 Mins' : count === 20 ? 'Standard • 20 Mins' : 'Full Set • 25 Mins'}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isAdvancedLocked}
              className={`w-full py-3 px-6 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                isAdvancedLocked
                  ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed border border-slate-300 dark:border-slate-700'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/30 cursor-pointer hover:scale-[1.01] active:scale-[0.99]'
              }`}
            >
              {isAdvancedLocked ? (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Start Practice Unavailable (Select Normal Difficulty)</span>
                </>
              ) : (
                <>
                  <span>Start Practice ({questionCount} MCQs)</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
