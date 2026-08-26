import React, { useState, useEffect } from 'react';
import { 
  User, 
  GraduationCap, 
  ArrowRight, 
  X, 
  BookOpen,
  Sparkles,
  Lock
} from 'lucide-react';
import { ClassLevel, TestSessionConfig } from '../types';
import { useAuth } from '../context/AuthContext';

interface StudentEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultClass: ClassLevel;
  chapterTitle?: string;
  defaultTrack?: 'Elementary Mathematics' | 'Advanced Mathematics' | 'Elementary Physics' | 'Advanced Physics';
  onStartTest: (config: TestSessionConfig & { track?: string }) => void;
  onOpenAuth?: () => void;
}

export const StudentEntryModal: React.FC<StudentEntryModalProps> = ({
  isOpen,
  onClose,
  defaultClass,
  chapterTitle,
  defaultTrack = 'Elementary Mathematics',
  onStartTest,
  onOpenAuth,
}) => {
  const { currentUser, userProfile } = useAuth();
  const [name, setName] = useState('');
  const [selectedClass, setSelectedClass] = useState<ClassLevel>(defaultClass);
  const [selectedTrack, setSelectedTrack] = useState<'Elementary Mathematics' | 'Advanced Mathematics' | 'Elementary Physics' | 'Advanced Physics'>(defaultTrack);
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

  if (!isOpen) return null;

  const availableQuestionCounts = [15, 25, 35, 50];

  const isUserSignedIn = Boolean(currentUser || (userProfile && userProfile.email && userProfile.email.includes('@')));

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

          {chapterTitle && (
            <div className="mt-3 pt-3 border-t border-white/15 flex items-center gap-2 text-xs text-indigo-100">
              <BookOpen className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Chapter: <strong className="text-white">{chapterTitle}</strong> (Class {defaultClass} {selectedTrack.includes('Physics') ? 'Physics' : 'Mathematics'})</span>
            </div>
          )}
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
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-semibold">
              {error}
            </div>
          )}

          {/* Candidate Name (Fixed when signed up) */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Candidate Name <span className="text-rose-500">*</span>
              </label>
              {isNameFixed && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/80 px-2 py-0.5 rounded-md border border-indigo-200 dark:border-indigo-800">
                  <Lock className="w-3 h-3" />
                  <span>Fixed Account Name</span>
                </span>
              )}
            </div>
            <div className="relative">
              {isNameFixed ? (
                <Lock className="w-4 h-4 text-indigo-500 dark:text-indigo-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              ) : (
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              )}
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
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs font-semibold outline-hidden transition-all ${
                  isNameFixed
                    ? 'border-indigo-300 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30 text-slate-900 dark:text-white cursor-not-allowed'
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
                {selectedTrack}
              </span>
              <span className="block text-[11px] font-medium text-indigo-600/80 dark:text-indigo-400/80 mt-0.5">
                {selectedTrack === 'Elementary Mathematics' && 'Standard School Curriculum & Conceptual Foundation'}
                {selectedTrack === 'Advanced Mathematics' && 'Pre-Engineering & Advanced Mathematical Methods'}
                {selectedTrack === 'Elementary Physics' && 'Foundational Physics, Mechanics & Laboratory Concepts'}
                {selectedTrack === 'Advanced Physics' && 'Theoretical Physics, Electrodynamics & Quantum Systems'}
              </span>
            </div>
          </div>

          {/* Question Count Selector: 15, 25, 35, 50 */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Number of MCQs
              </label>
              <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                Choose question set size
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {availableQuestionCounts.map((count) => (
                <button
                  type="button"
                  key={count}
                  onClick={() => setQuestionCount(count)}
                  className={`py-2 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                    questionCount === count
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-xs scale-[1.02]'
                      : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-300'
                  }`}
                >
                  {count} MCQs
                </button>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>Start Practice ({questionCount} MCQs)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
