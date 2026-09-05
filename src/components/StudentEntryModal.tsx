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
  chapterId?: string;
  chapterTitle?: string;
  defaultTrack?: 'Elementary Mathematics' | 'Chemistry' | 'Elementary Physics' | 'Pre Calculas';
  defaultDifficulty?: PracticeDifficulty;
  onStartTest: (config: TestSessionConfig & { track?: string }) => void;
  onOpenAuth?: () => void;
}

export const StudentEntryModal: React.FC<StudentEntryModalProps> = ({
  isOpen,
  onClose,
  defaultClass,
  chapterId,
  chapterTitle,
  defaultTrack = 'Elementary Mathematics',
  defaultDifficulty = 'Normal',
  onStartTest,
  onOpenAuth,
}) => {
  const { currentUser, userProfile } = useAuth();
  const [name, setName] = useState('');
  const [selectedClass, setSelectedClass] = useState<ClassLevel>(defaultClass);
  const [selectedTrack, setSelectedTrack] = useState<'Elementary Mathematics' | 'Chemistry' | 'Elementary Physics' | 'Pre Calculas'>(defaultTrack);
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

  // Check how many questions exist dynamically for Normal and Advanced
  const normalQuestionsCount = MathService.getQuestionCountByDifficulty(
    defaultClass, 
    chapterId, 
    'Normal', 
    selectedTrack
  );
  const advancedQuestionsCount = MathService.getQuestionCountByDifficulty(
    defaultClass, 
    chapterId, 
    'Advanced', 
    selectedTrack
  );

  const isNormalUnlocked = normalQuestionsCount > 0;
  const isAdvancedUnlocked = advancedQuestionsCount > 0;
  const isCurrentTierUnlocked = effectiveDifficultyTier === 'Advanced' ? isAdvancedUnlocked : isNormalUnlocked;
  const currentTierCount = effectiveDifficultyTier === 'Advanced' ? advancedQuestionsCount : normalQuestionsCount;
  const isTierLocked = !isCurrentTierUnlocked;

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

    if (isTierLocked) {
      setError(`Questions for ${effectiveDifficultyTier} difficulty are not available yet. Please select ${effectiveDifficultyTier === 'Advanced' ? 'Normal' : 'available'} difficulty to start practice.`);
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
      questionCount: Math.min(questionCount, currentTierCount),
      track: selectedTrack,
      difficultyTier: effectiveDifficultyTier,
    });
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl w-full max-w-md overflow-hidden flex flex-col max-h-[92vh] cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 px-5 py-4 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
            aria-label="Close"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur-xs flex items-center justify-center text-white border border-white/20 shadow-inner">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <span className="inline-block px-2 py-0.2 rounded-full text-[9px] font-black tracking-wider uppercase bg-white/20 text-indigo-100">
                {selectedTrack}
              </span>
              <h2 className="text-base sm:text-lg font-bold tracking-tight text-white leading-tight">
                Start Practice
              </h2>
            </div>
          </div>
        </div>

        {/* Auth prompt banner if not logged in */}
        {!isUserSignedIn && (
          <div className="py-2 bg-amber-50 dark:bg-amber-950/50 border-b border-amber-200 dark:border-amber-800/60 px-4 sm:px-5 flex items-center justify-between text-[11px] text-amber-800 dark:text-amber-300">
            <span className="font-medium">Sign in to track progress &amp; sync scores.</span>
            {onOpenAuth && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenAuth();
                }}
                className="px-2.5 py-0.5 rounded-md bg-amber-600 hover:bg-amber-700 text-white font-bold cursor-pointer text-[10px]"
              >
                Sign In
              </button>
            )}
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-5 space-y-3 overflow-y-auto">
          {error && (
            <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-semibold text-center">
              {error}
            </div>
          )}

          {/* Candidate Name (Centered alignment & hidden lock badge) */}
          <div className="space-y-1 text-center">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 text-center">
              Candidate Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative max-w-xs mx-auto">
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
                className={`w-full px-3 py-2 rounded-xl border text-xs font-bold text-center outline-hidden transition-all shadow-2xs ${
                  isNameFixed
                    ? 'border-indigo-300 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30 text-slate-900 dark:text-white cursor-default'
                    : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500'
                }`}
              />
            </div>
          </div>

          {/* Class Level Display: Fixed according to selected Chapter/Class with center-aligned text */}
          <div className="space-y-1 text-center">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Class Level
            </label>

            <div className="p-2.5 rounded-xl bg-indigo-50/70 dark:bg-slate-800 border border-indigo-200 dark:border-indigo-800/80 flex flex-col items-center justify-center text-center shadow-2xs">
              <span className="font-extrabold text-sm text-slate-900 dark:text-white block leading-snug">
                Class {defaultClass} {selectedTrack.includes('Physics') ? 'Physics' : selectedTrack.includes('Chemistry') ? 'Chemistry' : 'Mathematics'}
              </span>
              <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium block mt-0.5">
                {chapterTitle ? chapterTitle : `Class ${defaultClass} Curriculum`}
              </span>
            </div>
          </div>

          {/* Track Display: Rectangular Shape in Middle */}
          <div className="space-y-1 text-center">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Academic Track
            </label>
            <div className="p-2 rounded-xl bg-indigo-50/90 dark:bg-indigo-950/70 border border-indigo-300/80 dark:border-indigo-700/80 text-center shadow-2xs">
              <span className="block font-black text-xs text-indigo-700 dark:text-indigo-300">
                {selectedTrack === 'Elementary Mathematics' ? 'Mathematics' : selectedTrack === 'Elementary Physics' ? 'Physics' : selectedTrack}
              </span>
              <span className="block text-[10px] font-medium text-indigo-600/80 dark:text-indigo-400/80 mt-0.5">
                {selectedTrack === 'Elementary Mathematics' && 'Standard School Curriculum & Conceptual Foundation'}
                {selectedTrack === 'Chemistry' && 'Physical, Organic & Inorganic Chemistry Curriculum'}
                {selectedTrack === 'Elementary Physics' && 'Foundational Physics, Mechanics & Laboratory Concepts'}
                {selectedTrack === 'Pre Calculas' && 'Pre-calculus Foundations, Trigonometry & Analytic Geometry'}
              </span>
            </div>
          </div>

          {/* Difficulty Level Selector: Normal and Advanced (Strictly for Class 11 and Class 12) */}
          {isClass11or12 && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Difficulty Level
                </label>
                <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400">
                  {difficultyTier === 'Normal' ? 'Standard Curriculum' : 'Advanced Difficulty'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {/* Normal Difficulty Button */}
                <button
                  type="button"
                  id="difficulty-normal-btn"
                  onClick={() => {
                    setDifficultyTier('Normal');
                    if (error) setError(null);
                  }}
                  className={`group relative overflow-hidden p-2.5 rounded-xl border transition-all duration-300 text-left cursor-pointer flex flex-col justify-between hover:scale-[1.02] active:scale-[0.98] ${
                    difficultyTier === 'Normal'
                      ? 'bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-700 border-indigo-500 text-white shadow-md shadow-indigo-500/20 ring-2 ring-indigo-400/90'
                      : 'bg-slate-50 dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-extrabold text-xs tracking-tight flex items-center gap-1.5">
                      {isNormalUnlocked ? (
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:scale-110 ${difficultyTier === 'Normal' ? 'text-emerald-300 animate-pulse' : 'text-slate-400'}`} />
                      ) : (
                        <Lock className={`w-3.5 h-3.5 shrink-0 ${difficultyTier === 'Normal' ? 'text-amber-300' : 'text-slate-400'}`} />
                      )}
                      Normal
                    </span>
                    {difficultyTier === 'Normal' && (
                      <span className="flex h-2 w-2 relative">
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                      </span>
                    )}
                  </div>
                  <p className={`text-[10px] font-medium leading-tight transition-colors duration-200 ${
                    difficultyTier === 'Normal'
                      ? 'text-indigo-100 font-semibold'
                      : 'text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300'
                  }`}>
                    Academic &amp; Foundation
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
                  className={`group relative overflow-hidden p-2.5 rounded-xl border transition-all duration-300 text-left cursor-pointer flex flex-col justify-between hover:scale-[1.02] active:scale-[0.98] ${
                    difficultyTier === 'Advanced'
                      ? 'bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-950 border-purple-500 text-white shadow-md shadow-purple-500/20 ring-2 ring-purple-400/90'
                      : 'bg-slate-50 dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-purple-400 dark:hover:border-purple-500 hover:bg-purple-50/50 dark:hover:bg-purple-950/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-extrabold text-xs tracking-tight flex items-center gap-1.5">
                      {isAdvancedUnlocked ? (
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:scale-110 ${difficultyTier === 'Advanced' ? 'text-purple-300 animate-pulse' : 'text-slate-400'}`} />
                      ) : (
                        <Lock className={`w-3.5 h-3.5 shrink-0 ${difficultyTier === 'Advanced' ? 'text-amber-300' : 'text-slate-400'}`} />
                      )}
                      Advanced
                    </span>
                    {difficultyTier === 'Advanced' && (
                      <span className="flex h-2 w-2 relative">
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-300"></span>
                      </span>
                    )}
                  </div>
                  <p className={`text-[10px] font-medium leading-tight transition-colors duration-200 ${
                    difficultyTier === 'Advanced'
                      ? 'text-purple-200 font-semibold'
                      : 'text-slate-500 dark:text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-300'
                  }`}>
                    Competitive &amp; Entry Test Preparation
                  </p>
                </button>
              </div>
            </div>
          )}

          {/* Difficulty Locked Notice (When active tier has 0 questions) */}
          {isClass11or12 && isTierLocked && (
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-1.5 text-center animate-fade-in">
              <div className="flex items-center justify-center gap-1.5 text-amber-800 dark:text-amber-300 font-bold text-xs">
                <Lock className="w-3.5 h-3.5 shrink-0" />
                <span>{effectiveDifficultyTier} Difficulty Questions Coming Soon</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                Questions for <strong>{effectiveDifficultyTier} difficulty</strong> {chapterTitle ? `in "${chapterTitle}"` : `in Class ${defaultClass}`} are not added yet. Practice will automatically unlock as soon as questions are added.
              </p>
              {effectiveDifficultyTier === 'Advanced' && isNormalUnlocked && (
                <button
                  type="button"
                  onClick={() => setDifficultyTier('Normal')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[11px] transition-colors shadow-2xs cursor-pointer"
                >
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Select Normal Difficulty</span>
                </button>
              )}
            </div>
          )}

          {/* Dynamic Question Count Selector: 15, 20, and 25 MCQs (Only active when questions exist) */}
          {!isTierLocked && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Number of MCQs
                </label>
                <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400">
                  Select duration
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                {availableQuestionCounts.map((count) => {
                  const isSelected = questionCount === count;

                  return (
                    <button
                      type="button"
                      key={count}
                      onClick={() => setQuestionCount(count)}
                      className={`relative p-2 rounded-xl border transition-all text-left cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 border-indigo-500 text-white shadow-xs ring-1.5 ring-indigo-400/80'
                          : 'bg-slate-50 dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-50/40 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-0.5">
                        <div className="flex items-center gap-1">
                          {count === 15 ? (
                            <Zap className={`w-3 h-3 ${isSelected ? 'text-amber-300 fill-amber-300' : 'text-indigo-500 dark:text-indigo-400'}`} />
                          ) : count === 20 ? (
                            <Sparkles className={`w-3 h-3 ${isSelected ? 'text-yellow-300 fill-yellow-300' : 'text-amber-500 dark:text-amber-400'}`} />
                          ) : (
                            <Target className={`w-3 h-3 ${isSelected ? 'text-cyan-300' : 'text-purple-500 dark:text-purple-400'}`} />
                          )}
                          <span className="font-extrabold text-xs tracking-tight whitespace-nowrap">
                            {count} MCQs
                          </span>
                        </div>
                        <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-amber-300' : 'bg-slate-300 dark:bg-slate-600'}`} />
                      </div>

                      <p className={`text-[9px] leading-tight ${isSelected ? 'text-indigo-100' : 'text-slate-500 dark:text-slate-400'}`}>
                        {count === 15 ? '15 Mins' : count === 20 ? '20 Mins' : '25 Mins'}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Action Button */}
          <div className="pt-1.5">
            <button
              type="submit"
              disabled={isTierLocked}
              className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
                isTierLocked
                  ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed border border-slate-300 dark:border-slate-700'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/25 cursor-pointer hover:scale-[1.01] active:scale-[0.99]'
              }`}
            >
              {isTierLocked ? (
                <>
                  <Lock className="w-3.5 h-3.5" />
                  <span>Practice Unavailable ({effectiveDifficultyTier})</span>
                </>
              ) : (
                <>
                  <span>Start Practice</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
