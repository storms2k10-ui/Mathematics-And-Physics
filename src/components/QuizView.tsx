import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ArrowLeft, 
  Clock, 
  Award, 
  AlertCircle,
  Lightbulb,
  X,
  Send,
  Sparkles,
  HelpCircle,
  Pause,
  Play,
  Zap,
  Sun,
  Moon
} from 'lucide-react';
import { Question, ClassLevel, StudentProfile } from '../types';
import { MathText } from './MathText';
import { useTheme } from '../context/ThemeContext';

interface QuizViewProps {
  classLevel: ClassLevel;
  chapterTitle: string;
  questions: Question[];
  studentProfile?: StudentProfile;
  mode?: 'practice' | 'exam';
  onCompleteQuiz: (results: {
    questions: Question[];
    userAnswers: Record<number, {
      questionId: string;
      selectedOption: 'A' | 'B' | 'C' | 'D';
      isCorrect: boolean;
      timeSpentSeconds: number;
    }>;
    totalTimeSeconds: number;
    studentProfile?: StudentProfile;
    mode?: 'practice' | 'exam';
  }) => void;
  onExitQuiz: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  classLevel,
  chapterTitle,
  questions,
  studentProfile,
  mode = 'practice',
  onCompleteQuiz,
  onExitQuiz,
}) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, {
    questionId: string;
    selectedOption: 'A' | 'B' | 'C' | 'D';
    isCorrect: boolean;
    timeSpentSeconds: number;
  }>>({});
  
  const QUESTION_TIMEOUT = 60; // 1 minute per question exact
  const [questionTimeLeft, setQuestionTimeLeft] = useState(QUESTION_TIMEOUT);
  const [questionTimer, setQuestionTimer] = useState(0);
  const [totalTimer, setTotalTimer] = useState(0);
  
  // Auto-advance after MCQ answer selection
  const [autoAdvanceSecondsLeft, setAutoAdvanceSecondsLeft] = useState<number | null>(null);
  const [isAutoAdvancePaused, setIsAutoAdvancePaused] = useState(false);
  
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // If questions are empty
  if (!questions || questions.length === 0) {
    return (
      <div className="py-16 px-4 max-w-xl mx-auto text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 mx-auto flex items-center justify-center">
          <HelpCircle className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            Question Bank Ready
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            No questions are currently loaded for <strong>{chapterTitle}</strong>. Questions will appear as soon as they are added to the syllabus.
          </p>
        </div>
        <button
          onClick={onExitQuiz}
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
        >
          Return to Chapters
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex] || questions[0];
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const progressPercent = Math.round(((answeredCount) / totalQuestions) * 100);

  // Overall timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalTimer((t) => t + 1);
      setQuestionTimer((q) => q + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Per-question EXACT 1-Minute (60s) countdown timer
  useEffect(() => {
    // If auto-advancing after MCQ click, the auto-advance timer handles transition
    if (autoAdvanceSecondsLeft !== null) return;

    const countdownInterval = setInterval(() => {
      setQuestionTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          // 1 Minute Expired: Automatically advance question!
          handleAutoAdvanceOnTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [currentIndex, isSubmitted, mode, autoAdvanceSecondsLeft, isAutoAdvancePaused]);

  // Handle 1-minute timeout automatic advance: marks question as WRONG
  const handleAutoAdvanceOnTimeout = () => {
    // If not answered yet, record as WRONG
    setUserAnswers((prev) => {
      if (prev[currentIndex]) return prev;
      return {
        ...prev,
        [currentIndex]: {
          questionId: currentQuestion.id,
          selectedOption: selectedOption || null,
          isCorrect: false, // Marked WRONG on timeout
          timeSpentSeconds: 60,
          timedOut: true,
        },
      };
    });

    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowSubmitModal(true);
    }
  };

  // Auto-advance countdown effect (runs 2s after clicking an MCQ option)
  useEffect(() => {
    if (autoAdvanceSecondsLeft === null || isAutoAdvancePaused) return;

    if (autoAdvanceSecondsLeft <= 0) {
      setAutoAdvanceSecondsLeft(null);
      if (currentIndex < totalQuestions - 1) {
        setCurrentIndex((i) => i + 1);
      } else {
        setShowSubmitModal(true);
      }
      return;
    }

    const timer = setTimeout(() => {
      setAutoAdvanceSecondsLeft((prev) => (prev !== null ? prev - 1 : null));
    }, 1000);

    return () => clearTimeout(timer);
  }, [autoAdvanceSecondsLeft, isAutoAdvancePaused, currentIndex, totalQuestions]);

  // When changing questions, reset timer and restore answered option if exists
  useEffect(() => {
    const existing = userAnswers[currentIndex];
    if (existing) {
      setSelectedOption(existing.selectedOption);
      setIsSubmitted(mode === 'practice');
    } else {
      setSelectedOption(null);
      setIsSubmitted(false);
    }
    setQuestionTimer(0);
    setQuestionTimeLeft(QUESTION_TIMEOUT);
    setAutoAdvanceSecondsLeft(null);
    setIsAutoAdvancePaused(false);
  }, [currentIndex, userAnswers, mode]);

  // Handle option selection: Automatically reveals answer and automatically changes question!
  const handleSelectOption = (opt: 'A' | 'B' | 'C' | 'D') => {
    if (isSubmitted && userAnswers[currentIndex]) return;
    
    setSelectedOption(opt);
    const isCorrect = opt === currentQuestion.correct_answer;
    
    // Save to user answers
    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: {
        questionId: currentQuestion.id,
        selectedOption: opt,
        isCorrect,
        timeSpentSeconds: (prev[currentIndex]?.timeSpentSeconds || 0) + questionTimer,
      },
    }));

    setIsSubmitted(true);

    // Automatically change question seamlessly after 450ms feedback
    setTimeout(() => {
      if (currentIndex < totalQuestions - 1) {
        setCurrentIndex((i) => i + 1);
      } else {
        setShowSubmitModal(true);
      }
    }, 450);
  };

  const handleNext = () => {
    // Clear auto-advance timer
    setAutoAdvanceSecondsLeft(null);

    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setShowSubmitModal(true);
    }
  };

  const handlePrevious = () => {
    setAutoAdvanceSecondsLeft(null);
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  };

  const handleJumpToQuestion = (idx: number) => {
    setAutoAdvanceSecondsLeft(null);
    setCurrentIndex(idx);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  const isCurrentCorrect = userAnswers[currentIndex]?.isCorrect;

  return (
    <div id="quiz-view-container" className="py-6 sm:py-10 bg-slate-50 dark:bg-slate-950 min-h-[calc(100vh-120px)] animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Header Card: Title, Time & Candidate Info */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                  Class {classLevel} Mathematics
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {chapterTitle}
                </span>
              </div>
              
              {studentProfile?.name && (
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  Candidate: <strong className="text-slate-900 dark:text-white">{studentProfile.name}</strong>
                </div>
              )}
            </div>

            {/* Test Timer, Theme Toggle & Exit Action */}
            <div className="flex items-center gap-2.5 self-end sm:self-center">
              {/* Day / Night Mode Toggle */}
              <button
                id="quiz-theme-toggle"
                onClick={toggleTheme}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors cursor-pointer flex items-center justify-center shadow-xs"
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                aria-label="Toggle Theme"
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-mono font-bold">
                <Clock className="w-4 h-4 text-indigo-500" />
                <span>{formatTime(totalTimer)}</span>
              </div>

              <button
                onClick={() => setShowExitConfirm(true)}
                className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
                title="Exit Test"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Progress Bar & Question Counters */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-500 dark:text-slate-400">
                Question <strong className="text-slate-900 dark:text-white">{currentIndex + 1}</strong> of {totalQuestions}
              </span>
              <span className="text-indigo-600 dark:text-indigo-400 font-mono">
                {progressPercent}% Answered
              </span>
            </div>
            
            <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Main Question Card with Smooth Transition Animation (key on currentIndex) */}
        <div 
          key={currentIndex} 
          className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl shadow-indigo-950/5 dark:shadow-indigo-950/30 space-y-6 relative overflow-hidden animate-slide-fade"
        >
          {/* Question Header with 1-Minute Countdown Timer and Mode */}
          <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                Question {currentIndex + 1} of {totalQuestions}
              </span>
              {currentQuestion.difficulty && (
                <span className={`px-2.5 py-1 rounded-xl text-[11px] font-bold ${
                  currentQuestion.difficulty === 'Easy' 
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                    : currentQuestion.difficulty === 'Hard'
                    ? 'bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-200 dark:border-purple-800'
                    : 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                }`}>
                  {currentQuestion.difficulty}
                </span>
              )}
            </div>

            {/* 1 Minute Question Countdown Indicator */}
            <div className="flex items-center gap-2">
              <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all shadow-xs ${
                questionTimeLeft > 20 
                  ? 'bg-indigo-50 dark:bg-indigo-950/70 border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300'
                  : questionTimeLeft > 8
                  ? 'bg-amber-50 dark:bg-amber-950/70 border-amber-400 dark:border-amber-600 text-amber-700 dark:text-amber-300 animate-pulse'
                  : 'bg-rose-50 dark:bg-rose-950/70 border-rose-500 dark:border-rose-600 text-rose-700 dark:text-rose-300 animate-bounce'
              }`}>
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>
                  {questionTimeLeft > 0 ? `${questionTimeLeft}s auto-advance (1m)` : "Advancing (1m)..."}
                </span>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black bg-indigo-600 text-white shadow-sm shadow-indigo-600/30 tracking-wider uppercase">
                <Sparkles className="w-3 h-3" />
                Practice
              </span>
            </div>
          </div>

          {/* Auto-advance notification bar when MCQ is selected (5-second countdown) */}
          {autoAdvanceSecondsLeft !== null && (
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 text-white shadow-lg shadow-emerald-950/20 flex items-center justify-between gap-3 text-xs animate-slide-fade relative z-20">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-emerald-200 fill-emerald-200 animate-bounce" />
                </div>
                <span className="font-semibold truncate">
                  Answer revealed! Advancing to next question in <strong className="font-mono text-emerald-200 text-sm font-black underline decoration-emerald-300">{autoAdvanceSecondsLeft}s</strong>...
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setIsAutoAdvancePaused(!isAutoAdvancePaused)}
                  className="px-2.5 py-1 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                  title="Pause auto advance"
                >
                  {isAutoAdvancePaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
                  <span>{isAutoAdvancePaused ? 'Resume' : 'Pause'}</span>
                </button>
                <button
                  onClick={handleNext}
                  className="px-3 py-1 rounded-lg bg-white text-emerald-900 hover:bg-emerald-50 font-black text-xs transition-all shadow-xs cursor-pointer hover:scale-105 active:scale-95"
                >
                  Next Now ➔
                </button>
              </div>
            </div>
          )}

          {/* Highlighted Question Box with KaTeX and Smooth Transition Key */}
          <div 
            key={`question-box-${currentIndex}`}
            className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-indigo-50/90 via-white to-indigo-50/50 dark:from-slate-800/95 dark:via-indigo-950/50 dark:to-slate-800/90 border-2 border-indigo-300/80 dark:border-indigo-600/60 shadow-md shadow-indigo-500/5 relative overflow-hidden z-10 animate-slide-fade"
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-ping" />
                <span className="text-xs font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                  Question Statement
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                Class {classLevel} • {chapterTitle}
              </span>
            </div>

            <h2 className="text-base sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white leading-relaxed font-sans">
              <MathText text={currentQuestion.question} />
            </h2>
          </div>

          {/* Options Grid (A, B, C, D) with Staggered Transition Animation & Animated Light Green Selection */}
          <div 
            key={`options-grid-${currentIndex}`}
            className="grid grid-cols-1 gap-3 pt-2 relative z-10"
          >
            {(['A', 'B', 'C', 'D'] as const).map((opt, idx) => {
              const optionText = currentQuestion.options?.[opt] || currentQuestion[`option_${opt.toLowerCase() as 'a' | 'b' | 'c' | 'd'}`] || '';
              const isSelected = selectedOption === opt;
              const isCorrectAnswer = opt === currentQuestion.correct_answer;

              // Clean, unhighlighted options with crisp white text in dark mode
              let optionClasses = 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white hover:border-indigo-400 dark:hover:border-indigo-500 group';
              let badgeClasses = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700';

              if (mode === 'practice' && isSubmitted) {
                if (isCorrectAnswer) {
                  // Correct answer: Clean emerald border & subtle background, crisp white text in dark mode
                  optionClasses = 'border-emerald-500 dark:border-emerald-500 bg-emerald-50/30 dark:bg-slate-900 text-slate-900 dark:text-white ring-1 ring-emerald-500/50';
                  badgeClasses = 'bg-emerald-600 dark:bg-emerald-600 text-white font-bold';
                } else if (isSelected && !isCorrectAnswer) {
                  // User chose incorrect: Clean rose border & subtle background, crisp white text in dark mode
                  optionClasses = 'border-rose-500 dark:border-rose-500 bg-rose-50/30 dark:bg-slate-900 text-slate-900 dark:text-white ring-1 ring-rose-500/50';
                  badgeClasses = 'bg-rose-600 dark:bg-rose-600 text-white font-bold';
                } else {
                  // Unselected options: Clean subdued
                  optionClasses = 'opacity-50 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-white';
                  badgeClasses = 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300';
                }
              } else if (isSelected) {
                // Clicked / Selected Option: Subtle border without aggressive highlight
                optionClasses = 'border-indigo-500 dark:border-indigo-400 bg-indigo-50/20 dark:bg-slate-900 text-slate-900 dark:text-white ring-1 ring-indigo-500/50';
                badgeClasses = 'bg-indigo-600 dark:bg-indigo-600 text-white font-bold';
              }

              const staggerClass = `animate-option-stagger-${idx}`;

              return (
                <button
                  key={`${currentIndex}-${opt}`}
                  onClick={() => handleSelectOption(opt)}
                  disabled={mode === 'practice' && isSubmitted}
                  className={`p-4 rounded-2xl border text-left flex items-center gap-3.5 transition-all duration-200 ${staggerClass} ${optionClasses} ${
                    mode === 'practice' && isSubmitted ? 'cursor-default' : 'cursor-pointer hover:shadow-xs active:scale-[0.99]'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-xl font-bold text-xs flex items-center justify-center shrink-0 transition-all ${badgeClasses}`}>
                    {opt}
                  </span>
                  <div className="text-sm sm:text-base font-medium flex-1 leading-snug">
                    <MathText text={optionText} />
                  </div>
                  {mode === 'practice' && isSubmitted && isCorrectAnswer && (
                    <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-300 text-xs font-extrabold shrink-0 bg-emerald-100/80 dark:bg-emerald-900/60 px-2.5 py-1 rounded-lg border border-emerald-300 dark:border-emerald-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="hidden sm:inline">Correct Answer</span>
                    </div>
                  )}
                  {mode === 'practice' && isSubmitted && isSelected && !isCorrectAnswer && (
                    <div className="flex items-center gap-1.5 text-rose-600 dark:text-rose-300 text-xs font-extrabold shrink-0 bg-rose-100/80 dark:bg-rose-900/60 px-2.5 py-1 rounded-lg border border-rose-300 dark:border-rose-700">
                      <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                      <span className="hidden sm:inline">Your Selection</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>


          {/* Step-by-Step KaTeX Explanation (Practice Mode) */}
          {mode === 'practice' && isSubmitted && (
            <div className={`p-5 rounded-2xl border space-y-3.5 animate-slide-fade relative z-10 ${
              isCurrentCorrect 
                ? 'bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800' 
                : 'bg-rose-50/60 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {isCurrentCorrect ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      <span className="font-bold text-xs sm:text-sm text-emerald-900 dark:text-emerald-200">
                        Correct Answer (Option {currentQuestion.correct_answer})
                      </span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                      <span className="font-bold text-xs sm:text-sm text-rose-900 dark:text-rose-200">
                        Incorrect. Correct is Option {currentQuestion.correct_answer}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Explanation */}
              <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 space-y-2">
                <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  Step-by-Step Mathematical Solution:
                </span>
                <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                  <MathText text={currentQuestion.explanation} />
                </div>
              </div>
            </div>
          )}

          {/* Action Control Buttons */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`px-4 py-2.5 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed border-slate-200 dark:border-slate-800 text-slate-400'
                  : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/25 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{currentIndex === totalQuestions - 1 ? 'Finish & Review' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Quick Question Navigation Palette */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
            <span>Question Palette ({totalQuestions} MCQs)</span>
            <span className="text-slate-400 font-normal">Click any number to jump</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {questions.map((q, idx) => {
              const isAnswered = !!userAnswers[idx];
              const isCurrent = idx === currentIndex;
              const isCorrect = userAnswers[idx]?.isCorrect;

              let btnClass = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200';

              if (isCurrent) {
                btnClass = 'bg-indigo-600 text-white ring-2 ring-indigo-400 font-bold';
              } else if (mode === 'practice' && isAnswered) {
                btnClass = isCorrect 
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold' 
                  : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 font-bold';
              } else if (isAnswered) {
                btnClass = 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 font-bold';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => handleJumpToQuestion(idx)}
                  className={`w-8 h-8 rounded-xl text-xs font-medium flex items-center justify-center transition-all cursor-pointer ${btnClass}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Exit Confirmation Modal */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xl max-w-sm w-full space-y-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 dark:bg-rose-950 dark:text-rose-400 mx-auto flex items-center justify-center">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Exit Mathematics Test?
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Your test progress and current answers will not be saved if you exit now.
            </p>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                Continue Test
              </button>
              <button
                onClick={onExitQuiz}
                className="py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md shadow-rose-600/30 cursor-pointer"
              >
                Exit Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Final Submit Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xl max-w-md w-full space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Ready to Complete Test?
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {answeredCount} of {totalQuestions} questions attempted.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Total Questions:</span>
                <span className="font-bold">{totalQuestions}</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Questions Answered:</span>
                <span className="font-bold text-indigo-600 dark:text-indigo-400">{answeredCount}</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Total Time Spent:</span>
                <span className="font-bold font-mono">{formatTime(totalTimer)}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                Review Answers
              </button>
              <button
                onClick={() => {
                  setShowSubmitModal(false);
                  const finalAnswers = { ...userAnswers };
                  questions.forEach((q, idx) => {
                    if (!finalAnswers[idx]) {
                      finalAnswers[idx] = {
                        questionId: q.id,
                        selectedOption: null,
                        isCorrect: false,
                        timeSpentSeconds: 0,
                        timedOut: false,
                      };
                    }
                  });
                  onCompleteQuiz({
                    questions,
                    userAnswers: finalAnswers,
                    totalTimeSeconds: totalTimer,
                    studentProfile,
                    mode,
                  });
                }}
                className="py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/30 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit &amp; View Score</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
