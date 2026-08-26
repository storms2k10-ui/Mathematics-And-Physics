/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HeaderQuote } from './components/HeaderQuote';
import { Navbar, NavTab } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ClassPageView } from './components/ClassPageView';
import { ContentView, ContentSection, ContentSubject } from './components/ContentView';
import { QuizView } from './components/QuizView';
import { ScoreView } from './components/ScoreView';
import { AboutView } from './components/AboutView';
import { Footer } from './components/Footer';
import { MathPhilosophySection } from './components/MathPhilosophySection';
import { StudentEntryModal } from './components/StudentEntryModal';
import { ChapterDetailModal } from './components/ChapterDetailModal';
import { LeaderboardModal } from './components/LeaderboardModal';
import { AuthModal } from './components/AuthModal';
import { UserProfileModal } from './components/UserProfileModal';
import { MathService, shuffleArray } from './services/mathService';
import { MobileAppView } from './components/MobileAppView';
import { Chapter, ClassInfo, ClassLevel, Question, StudentProfile, LeaderboardEntry, TestSessionConfig, UserTestHistory } from './types';
import { useAuth } from './context/AuthContext';
import { Atom, ArrowLeft, Smartphone, Monitor } from 'lucide-react';

export default function App() {
  const { recordTestAttempt, currentUser, userProfile, syncWithServer } = useAuth();
  // Navigation / View state
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [activeTrack, setActiveTrack] = useState<'Elementary Mathematics' | 'Advanced Mathematics' | 'Elementary Physics' | 'Advanced Physics'>('Elementary Mathematics');
  const [selectedClass, setSelectedClass] = useState<ClassLevel>(9);
  const [activeContentSection, setActiveContentSection] = useState<ContentSection>('definitions');
  const [activeContentSubject, setActiveContentSubject] = useState<ContentSubject>('mathematics');
  const [activePhilosopherType, setActivePhilosopherType] = useState<'mathematicians' | 'physicists'>('mathematicians');
  const [currentView, setCurrentView] = useState<'main' | 'class-page' | 'quiz' | 'results'>('main');

  // Loaded data
  const [classesInfo, setClassesInfo] = useState<ClassInfo[]>([]);
  const [currentChapters, setCurrentChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);

  // Modals state
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [isChapterModalOpen, setIsChapterModalOpen] = useState(false);
  const [isLeaderboardModalOpen, setIsLeaderboardModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalCustomTitle, setAuthModalCustomTitle] = useState<string | undefined>(undefined);
  const [authModalCustomSubtitle, setAuthModalCustomSubtitle] = useState<string | undefined>(undefined);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [targetChapter, setTargetChapter] = useState<Chapter | null>(null);
  const [pendingQuizQuestions, setPendingQuizQuestions] = useState<Question[] | null>(null);
  const [pendingQuizTitle, setPendingQuizTitle] = useState<string>('');
  const [pendingQuizClass, setPendingQuizClass] = useState<ClassLevel>(9);

  // Active Student & Quiz Session State
  const [activeStudent, setActiveStudent] = useState<StudentProfile | undefined>(undefined);
  const [activeTestMode, setActiveTestMode] = useState<'practice' | 'exam'>('practice');
  const [activeQuizQuestions, setActiveQuizQuestions] = useState<Question[]>([]);
  const [activeQuizTitle, setActiveQuizTitle] = useState<string>('');
  const [activeQuizClass, setActiveQuizClass] = useState<ClassLevel>(9);
  const [activeChapterId, setActiveChapterId] = useState<string | undefined>(undefined);
  const [forceMobileDemo, setForceMobileDemo] = useState(false);

  // Pending Quiz Results (held when not signed in yet)
  const [pendingCompletionResults, setPendingCompletionResults] = useState<{
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
  } | null>(null);

  // Quiz Results State
  const [quizResults, setQuizResults] = useState<{
    questions: Question[];
    userAnswers: Record<number, {
      questionId: string;
      selectedOption: 'A' | 'B' | 'C' | 'D' | null;
      isCorrect: boolean;
      timeSpentSeconds: number;
      timedOut?: boolean;
    }>;
    totalTimeSeconds: number;
    studentProfile?: StudentProfile;
    mode?: 'practice' | 'exam';
    leaderboardEntryId?: string;
  } | null>(null);

  // Check if current user is fully authenticated
  const isAuthenticated = Boolean(currentUser || (userProfile && userProfile.email && userProfile.email.includes('@')));

  // Load initial classes data & sync server/cloud leaderboard for all users
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const classes = await MathService.getClasses();
      setClassesInfo(classes);
      const chapters = await MathService.getChapters(selectedClass, activeTrack);
      setCurrentChapters(chapters);
      setLoading(false);

      // Preload global leaderboard from Firestore in background
      MathService.fetchServerLeaderboard('all', 'practice').catch(() => {});
    };
    loadData();
  }, []);

  // Update chapters when selectedClass or activeTrack changes
  useEffect(() => {
    const loadChapters = async () => {
      const chapters = await MathService.getChapters(selectedClass, activeTrack);
      setCurrentChapters(chapters);
    };
    loadChapters();
  }, [selectedClass, activeTrack]);

  // Handler to navigate between main tabs
  const handleNavigate = (
    tab: NavTab, 
    classLevel?: ClassLevel, 
    track?: 'Elementary Mathematics' | 'Advanced Mathematics' | 'Elementary Physics' | 'Advanced Physics'
  ) => {
    setActiveTab(tab);
    if (track) {
      setActiveTrack(track);
    }
    if (classLevel) {
      setSelectedClass(classLevel);
    }

    if (tab === 'classes') {
      setCurrentView('class-page');
    } else {
      setCurrentView('main');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler to navigate specifically to a content section
  const handleNavigateContentSection = (section: ContentSection, subject: ContentSubject = 'mathematics') => {
    setActiveContentSection(section);
    setActiveContentSubject(subject);
    setActiveTab('dictionary');
    setCurrentView('main');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler for philosopher type selection
  const handleSelectPhilosopherType = (type: 'mathematicians' | 'physicists') => {
    setActivePhilosopherType(type);
    setActiveTab('philosophy');
    setCurrentView('main');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler to select a class from subject dropdown or hero
  const handleSelectClass = (
    lvl: ClassLevel,
    track?: 'Elementary Mathematics' | 'Advanced Mathematics' | 'Elementary Physics' | 'Advanced Physics'
  ) => {
    setSelectedClass(lvl);
    if (track) {
      setActiveTrack(track);
    }
    setActiveTab('classes');
    setCurrentView('class-page');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open chapter details modal
  const handleOpenChapterDetails = (chapter: Chapter) => {
    setTargetChapter(chapter);
    setIsChapterModalOpen(true);
  };

  // Trigger test for a specific chapter
  const handlePrepareChapterTest = async (chapter: Chapter) => {
    setTargetChapter(chapter);
    setPendingQuizTitle(chapter.name);
    setPendingQuizClass(chapter.class);
    if (chapter.track) {
      setActiveTrack(chapter.track);
    }
    setPendingQuizQuestions(null);
    setIsStudentModalOpen(true);
  };

  // Trigger practice for a class
  const handlePrepareClassPractice = async (lvl: ClassLevel) => {
    setTargetChapter(null);
    const subjectName = activeTrack.includes('Physics') ? 'Physics' : 'Mathematics';
    setPendingQuizTitle(`Class ${lvl} ${subjectName} Practice`);
    setPendingQuizClass(lvl);
    setPendingQuizQuestions(null);
    setIsStudentModalOpen(true);
  };

  // Executes when student enters name, selects class, and clicks "Begin Test"
  const handleStartConfirmedTest = async (config: TestSessionConfig & { track?: string }) => {
    setIsStudentModalOpen(false);
    setIsChapterModalOpen(false);
    setLoading(true);

    let rawQuestions: Question[] = [];

    const userIdentifier = currentUser?.email || userProfile?.email || config.student.name;
    const trackToUse = config.track || activeTrack || 'Elementary Mathematics';

    if (pendingQuizQuestions && pendingQuizQuestions.length > 0) {
      rawQuestions = pendingQuizQuestions;
    } else if (targetChapter) {
      rawQuestions = await MathService.prepareQuizQuestions(
        targetChapter.id,
        targetChapter.class,
        config.questionCount || 15,
        'all',
        userIdentifier,
        trackToUse
      );
    } else {
      rawQuestions = await MathService.prepareQuizQuestions(
        undefined,
        config.student.classLevel,
        config.questionCount || 15,
        'all',
        userIdentifier,
        trackToUse
      );
    }

    const questionsToUse = rawQuestions;

    setActiveStudent(config.student);
    setActiveTestMode(config.mode);
    setActiveQuizQuestions(questionsToUse);
    setActiveQuizTitle(pendingQuizTitle || (targetChapter ? targetChapter.name : `Class ${config.student.classLevel} Mathematics Test`));
    setActiveQuizClass(config.student.classLevel);
    setActiveChapterId(targetChapter?.id);
    setCurrentView('quiz');
    setLoading(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Process confirmed test submission with immediate server live sync
  const processTestSubmission = async (results: {
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
  }) => {
    const student = results.studentProfile || activeStudent;
    const totalQ = results.questions.length;
    const correctCount = Object.values(results.userAnswers).filter(a => a?.isCorrect).length;
    const scorePct = totalQ > 0 ? Math.round((correctCount / totalQ) * 100) : 0;

    const studentName = userProfile?.displayName || currentUser?.displayName || student?.name || 'Student Candidate';
    const mins = Math.floor(results.totalTimeSeconds / 60);
    const secs = results.totalTimeSeconds % 60;
    const formattedTime = `${mins}m ${secs.toString().padStart(2, '0')}s`;
    const attemptId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

    const userEmail = currentUser?.email || userProfile?.email || undefined;
    const userUid = currentUser?.uid || userProfile?.uid || undefined;

    const leaderboardEntry: LeaderboardEntry = {
      id: attemptId,
      uid: userUid,
      email: userEmail,
      studentName,
      classLevel: student?.classLevel || activeQuizClass || 9,
      section: student?.section || 'Standard',
      chapterId: activeChapterId || 'general_quiz',
      chapterName: activeQuizTitle || `Class ${activeQuizClass} Mathematics`,
      mode: results.mode || activeTestMode || 'practice',
      track: activeTrack || 'Elementary Mathematics',
      correctCount,
      totalQuestions: totalQ,
      scorePercentage: scorePct,
      timeSpentSeconds: results.totalTimeSeconds,
      formattedTime,
      timestamp: Date.now(),
      formattedDate: 'Just now',
    };

    const historyItem: UserTestHistory = {
      id: attemptId,
      uid: userUid,
      email: userEmail,
      chapterId: activeChapterId || 'general_quiz',
      chapterName: activeQuizTitle || `Class ${activeQuizClass} Mathematics`,
      classLevel: student?.classLevel || activeQuizClass || 9,
      track: activeTrack || 'Elementary Mathematics',
      correctCount,
      totalQuestions: totalQ,
      scorePercentage: scorePct,
      timeSpentSeconds: results.totalTimeSeconds,
      formattedTime,
      timestamp: Date.now(),
      formattedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    };

    setQuizResults({
      ...results,
      leaderboardEntryId: attemptId,
    });

    // 1. Navigate directly to results view immediately with zero delay
    setCurrentView('results');
    window.scrollTo({ top: 0, behavior: 'instant' });

    // 2. Perform live sync to Firestore cloud database, user history & leaderboard in background
    Promise.all([
      recordTestAttempt(historyItem).catch((e) => console.warn('Record attempt async sync:', e)),
      MathService.saveLeaderboardEntry(leaderboardEntry, currentUser?.uid).catch((e) => console.warn('Leaderboard async sync:', e)),
    ]).catch(() => {});
  };

  // Handler when quiz is completed (restricts results until signed in)
  const handleCompleteQuiz = (results: {
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
  }) => {
    // RESTRICT ACCESS: If user is not authenticated, prompt sign in before showing results or syncing
    if (!isAuthenticated) {
      setPendingCompletionResults(results);
      setAuthModalCustomTitle('Sign In Required for Test Results');
      setAuthModalCustomSubtitle('Please sign in or create an account to view your test results, step-by-step solutions, and synchronize your history with the server.');
      setIsAuthModalOpen(true);
      return;
    }

    // If authenticated, immediately submit and live-sync with server
    processTestSubmission(results);
  };

  // Handle successful auth completion (from AuthModal)
  const handleAuthSuccess = async () => {
    if (pendingCompletionResults) {
      const pending = pendingCompletionResults;
      setPendingCompletionResults(null);
      await processTestSubmission(pending);
    } else {
      await syncWithServer();
    }
  };

  // Open profile with auth protection
  const handleOpenProfile = () => {
    if (!isAuthenticated) {
      setAuthModalCustomTitle('Sign In to Access Student Profile');
      setAuthModalCustomSubtitle('Sign in or register an account to track your academic performance, error analysis, and test history.');
      setIsAuthModalOpen(true);
    } else {
      setIsProfileModalOpen(true);
    }
  };

  // Handler to retry the current quiz
  const handleRestartQuiz = () => {
    setCurrentView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler to practice another chapter
  const handleSelectAnotherChapter = () => {
    setActiveTab('classes');
    setCurrentView('class-page');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler to return to home
  const handleBackToHome = () => {
    setActiveTab('home');
    setCurrentView('main');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Current class info object
  const currentClassInfo = classesInfo.find((c) => c.level === selectedClass) || {
    level: selectedClass,
    title: `Class ${selectedClass} Mathematics`,
    subtitle: 'Elementary & Advanced Mathematics Curriculum',
    description: 'Comprehensive practice for school and board examinations.',
    totalChapters: currentChapters.length,
    totalQuestions: currentChapters.reduce((acc, c) => acc + c.questionCount, 0),
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    accentColor: 'indigo',
    focusAreas: ['Core Concepts', 'Formulas', 'Theorems', 'Calculations'],
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
      {/* Top Header Banner: MATHEMATICS AND PHYSICS - Hidden in Quiz, Results, and Mobile App Home View */}
      {!['quiz', 'results'].includes(currentView) && !forceMobileDemo && (
        <div className="hidden md:block">
          <HeaderQuote />
        </div>
      )}

      {/* Main Navbar - Hidden in Quiz and Results/Score Views */}
      {!['quiz', 'results'].includes(currentView) && !forceMobileDemo && (
        <div className="hidden md:block">
          <Navbar
            activeTab={activeTab}
            selectedClass={selectedClass}
            activeTrack={activeTrack}
            activeContentSection={activeContentSection}
            activePhilosopherType={activePhilosopherType}
            onNavigate={handleNavigate}
            onNavigateContentSection={handleNavigateContentSection}
            onSelectPhilosopherType={handleSelectPhilosopherType}
            onOpenLeaderboard={() => {
              setSelectedClass(9);
              setIsLeaderboardModalOpen(true);
            }}
            onOpenAuth={() => {
              setAuthModalCustomTitle(undefined);
              setAuthModalCustomSubtitle(undefined);
              setIsAuthModalOpen(true);
            }}
            onOpenProfile={handleOpenProfile}
          />
        </div>
      )}

      {/* Mobile Navbar for Non-Home Mobile Pages */}
      {!['quiz', 'results'].includes(currentView) && activeTab !== 'home' && !forceMobileDemo && (
        <div className="block md:hidden">
          <Navbar
            activeTab={activeTab}
            selectedClass={selectedClass}
            activeTrack={activeTrack}
            activeContentSection={activeContentSection}
            activePhilosopherType={activePhilosopherType}
            onNavigate={handleNavigate}
            onNavigateContentSection={handleNavigateContentSection}
            onSelectPhilosopherType={handleSelectPhilosopherType}
            onOpenLeaderboard={() => {
              setSelectedClass(9);
              setIsLeaderboardModalOpen(true);
            }}
            onOpenAuth={() => {
              setAuthModalCustomTitle(undefined);
              setAuthModalCustomSubtitle(undefined);
              setIsAuthModalOpen(true);
            }}
            onOpenProfile={handleOpenProfile}
          />
        </div>
      )}

      {/* Main Content Body */}
      <main className="flex-1">
        {/* QUIZ VIEW */}
        {currentView === 'quiz' && (
          <QuizView
            classLevel={activeQuizClass}
            chapterTitle={activeQuizTitle}
            questions={activeQuizQuestions}
            studentProfile={activeStudent}
            mode={activeTestMode}
            onCompleteQuiz={handleCompleteQuiz}
            onExitQuiz={() => {
              if (activeTab === 'classes') {
                setCurrentView('class-page');
              } else {
                setCurrentView('main');
              }
            }}
          />
        )}

        {/* RESULTS / SCORECARD VIEW */}
        {currentView === 'results' && (
          isAuthenticated && quizResults ? (
            <ScoreView
              classLevel={activeQuizClass}
              chapterTitle={activeQuizTitle}
              questions={quizResults.questions}
              userAnswers={quizResults.userAnswers}
              totalTimeSeconds={quizResults.totalTimeSeconds}
              studentProfile={quizResults.studentProfile || activeStudent}
              mode={quizResults.mode || activeTestMode}
              leaderboardEntryId={quizResults.leaderboardEntryId}
              onRestartQuiz={handleRestartQuiz}
              onSelectAnotherChapter={handleSelectAnotherChapter}
              onBackToClass={(lvl) => {
                setSelectedClass(lvl);
                setActiveTab('classes');
                setCurrentView('class-page');
              }}
              onBackToHome={handleBackToHome}
              onOpenLeaderboard={() => setIsLeaderboardModalOpen(true)}
            />
          ) : (
            <div className="min-h-[70vh] flex items-center justify-center p-6 animate-fade-in">
              <div className="max-w-md w-full p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl text-center space-y-5">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto shadow-inner">
                  <Atom className="w-8 h-8 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Sign In Required for Test Results
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Test results, step-by-step solutions, and performance synchronization are restricted to verified accounts. Please sign in or register to view your scorecard.
                  </p>
                </div>
                <div className="space-y-2.5 pt-2">
                  <button
                    onClick={() => {
                      setAuthModalCustomTitle('Sign In Required for Test Results');
                      setAuthModalCustomSubtitle('Please sign in or create an account to view your test results, step-by-step solutions, and synchronize your history with the server.');
                      setIsAuthModalOpen(true);
                    }}
                    className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/25 transition-all cursor-pointer"
                  >
                    Sign In / Register Account
                  </button>
                  <button
                    onClick={handleBackToHome}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Return to Home
                  </button>
                </div>
              </div>
            </div>
          )
        )}

        {/* CLASS PAGE VIEW */}
        {currentView === 'class-page' && (
          <ClassPageView
            currentClass={selectedClass}
            classInfo={currentClassInfo}
            chapters={currentChapters}
            track={activeTrack}
            onSelectChapter={handlePrepareChapterTest}
            onOpenChapterDetails={handleOpenChapterDetails}
            onClassChange={(lvl) => setSelectedClass(lvl)}
            onStartFullClassMock={handlePrepareClassPractice}
            onBackToHome={handleBackToHome}
          />
        )}

        {/* MAIN TAB VIEWS */}
        {currentView === 'main' && (
          <>
            {/* HOME VIEW: Mobile Studio View on Mobile devices & Desktop Demo Mode, Standard Desktop layout otherwise */}
            {activeTab === 'home' && (
              <>
                {/* Mobile App View: Rendered for mobile viewports or when Demo Mode is enabled */}
                <div className={forceMobileDemo ? 'block max-w-md mx-auto my-6 rounded-[40px] shadow-2xl border-8 border-slate-900 overflow-hidden relative' : 'block md:hidden'}>
                  <MobileAppView
                    activeTrack={activeTrack}
                    selectedClass={selectedClass}
                    onSelectTrack={(track) => {
                      setActiveTrack(track);
                      if (track === 'Advanced Mathematics' && selectedClass < 11) {
                        setSelectedClass(11);
                      }
                    }}
                    onSelectClass={(lvl, track) => {
                      setSelectedClass(lvl);
                      if (track) setActiveTrack(track);
                    }}
                    onStartChapterPractice={handlePrepareChapterTest}
                    onStartClassPractice={handlePrepareClassPractice}
                    onOpenLeaderboard={() => setIsLeaderboardModalOpen(true)}
                    onOpenAuth={() => setIsAuthModalOpen(true)}
                    onOpenProfile={handleOpenProfile}
                    onOpenDictionary={() => {
                      setActiveTab('dictionary');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />
                </div>

                {/* Desktop Layout: Rendered on larger screens when not in forced demo mode */}
                <div className={forceMobileDemo ? 'hidden' : 'hidden md:block'}>
                  <HeroSection
                    onSelectClass={handleSelectClass}
                    onStartPracticing={() => handleSelectClass(9)}
                  />
                  <FeaturesSection />
                </div>
              </>
            )}

            {/* DEDICATED PHILOSOPHY VIEW (Standalone Thinkers & Pioneers) */}
            {activeTab === 'philosophy' && (
              <MathPhilosophySection 
                initialTab={activePhilosopherType}
                onBackToHome={handleBackToHome}
              />
            )}

            {/* PHYSICS PLACEHOLDER */}
            {activeTab === 'physics' && (
              <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6 animate-fade-in">
                <div className="w-20 h-20 rounded-3xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 mx-auto flex items-center justify-center shadow-xl shadow-cyan-500/10">
                  <Atom className="w-10 h-10 animate-spin-slow" />
                </div>
                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-950 text-cyan-300 border border-cyan-800 uppercase tracking-wider">
                    Physics Subject
                  </span>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                    Physics Curriculum &amp; Question Bank
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
                    The theoretical physics question bank and lecture modules are currently in preparation. No questions or chapters added yet.
                  </p>
                </div>
                <button
                  onClick={() => handleSelectClass(9)}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Go to Mathematics Classes</span>
                </button>
              </div>
            )}

            {/* CONTENT DICTIONARY VIEW */}
            {activeTab === 'dictionary' && (
              <ContentView
                initialSection={activeContentSection}
                initialSubject={activeContentSubject}
                onSelectClass={handleSelectClass}
              />
            )}

            {/* ABOUT VIEW */}
            {activeTab === 'about' && (
              <AboutView
                onSelectClass={handleSelectClass}
                onStartPracticing={() => handleSelectClass(9)}
              />
            )}
          </>
        )}
      </main>

      {/* Chapter Overview Modal */}
      <ChapterDetailModal
        chapter={targetChapter}
        isOpen={isChapterModalOpen}
        onClose={() => setIsChapterModalOpen(false)}
        onStartTest={(chapter) => {
          setIsChapterModalOpen(false);
          handlePrepareChapterTest(chapter);
        }}
      />

      {/* Student Candidate Identification Modal */}
      <StudentEntryModal
        isOpen={isStudentModalOpen}
        onClose={() => setIsStudentModalOpen(false)}
        defaultClass={pendingQuizClass}
        chapterTitle={pendingQuizTitle}
        defaultTrack={targetChapter?.track || activeTrack}
        onStartTest={handleStartConfirmedTest}
        onOpenAuth={() => setIsAuthModalOpen(true)}
      />

      {/* Class Leaderboard & Performance Ranking Modal */}
      <LeaderboardModal
        isOpen={isLeaderboardModalOpen}
        onClose={() => setIsLeaderboardModalOpen(false)}
        initialClass={9}
      />

      {/* User Authentication Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        customTitle={authModalCustomTitle}
        customSubtitle={authModalCustomSubtitle}
        onSuccess={handleAuthSuccess}
      />

      {/* User Profile & Accuracy Statistics Modal */}
      <UserProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        onSelectClass={(lvl) => {
          handleSelectClass(lvl);
        }}
        onSelectChapter={(chapter) => {
          setSelectedClass(chapter.class);
          setActiveTab('classes');
          setCurrentView('class-page');
          handlePrepareChapterTest(chapter);
        }}
      />

      {/* Footer - Hidden in Quiz, Results/Score, Class Page Views, and completely hidden on Mobile View */}
      {!['quiz', 'results', 'class-page'].includes(currentView) && activeTab !== 'classes' && !forceMobileDemo && (
        <div className="hidden md:block">
          <Footer onNavigate={handleNavigate} />
        </div>
      )}

      {/* Floating Demo Mode Switcher for Quick Mobile / Desktop Inspection */}
      {!['quiz', 'results'].includes(currentView) && (
        <aside aria-label="Mobile Demo Switcher" className="hidden md:block fixed bottom-4 right-4 z-50">
          <button
            onClick={() => setForceMobileDemo(!forceMobileDemo)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-950/90 text-white hover:bg-slate-900 border border-purple-500/50 shadow-2xl backdrop-blur-md text-xs font-black tracking-wide transition-all hover:scale-105 active:scale-95 cursor-pointer"
            title="Toggle Mobile Studio UI Demo"
          >
            {forceMobileDemo ? (
              <>
                <Monitor className="w-4 h-4 text-cyan-400" />
                <span>Switch to Desktop View</span>
              </>
            ) : (
              <>
                <Smartphone className="w-4 h-4 text-pink-400 animate-pulse" />
                <span>📱 Preview Mobile App UI</span>
              </>
            )}
          </button>
        </aside>
      )}

    </div>
  );
}
