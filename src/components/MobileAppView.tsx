import React, { useState, useMemo, useEffect } from 'react';
import { 
  Sigma, 
  Atom, 
  Sparkles, 
  Play, 
  Trophy, 
  User, 
  BookOpen, 
  Layers, 
  Brain, 
  ArrowRight, 
  RefreshCw, 
  Flame, 
  Crown, 
  Sun, 
  Moon, 
  Binary, 
  Split, 
  GraduationCap, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown,
  ChevronUp,
  Search, 
  Zap, 
  Calculator, 
  HelpCircle, 
  FolderOpen, 
  FileText, 
  Lightbulb, 
  Award, 
  Activity,
  Quote,
  X,
  Globe,
  Calendar,
  Menu,
  Settings,
  Info,
  Phone,
  Mail,
  Building2,
  CheckCircle
} from 'lucide-react';
import { ClassLevel, Chapter } from '../types';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useOffline } from '../context/OfflineContext';
import { ALL_CHAPTERS } from '../data/chaptersData';
import { ADVANCED_MATH_11_CHAPTERS } from '../data/mockData';
import { ALL_FORMULAS } from '../data/formulasData';
import { ALL_THEOREMS } from '../data/theoremsData';
import { ALL_DEFINITIONS } from '../data/definitionsData';
import { ALL_PROPERTIES } from '../data/propertiesData';
import { 
  ALL_PHYSICS_LAWS_DEFINITIONS, 
  ALL_PHYSICS_PRINCIPLES, 
  ALL_PHYSICS_FORMULAS, 
  ALL_PHYSICS_DERIVATIONS 
} from '../data/physicsStudyData';
import { MATHEMATICIANS, Mathematician } from '../data/mathematiciansData';
import { MathText } from './MathText';

export type MobileTab = 'philosophers' | 'studio' | 'modules' | 'rankings' | 'profile';

interface MobileAppViewProps {
  activeTrack: 'Elementary Mathematics' | 'Advanced Mathematics' | 'Elementary Physics' | 'Advanced Physics';
  selectedClass: ClassLevel;
  onSelectTrack: (track: 'Elementary Mathematics' | 'Advanced Mathematics' | 'Elementary Physics' | 'Advanced Physics') => void;
  onSelectClass: (lvl: ClassLevel, track?: 'Elementary Mathematics' | 'Advanced Mathematics' | 'Elementary Physics' | 'Advanced Physics') => void;
  onStartChapterPractice: (chapter: Chapter) => void;
  onStartClassPractice: (lvl: ClassLevel) => void;
  onOpenLeaderboard: () => void;
  onOpenAuth: () => void;
  onOpenProfile: () => void;
  onOpenDictionary: () => void;
}

export const MobileAppView: React.FC<MobileAppViewProps> = ({
  activeTrack,
  selectedClass,
  onSelectTrack,
  onSelectClass,
  onStartChapterPractice,
  onStartClassPractice,
  onOpenLeaderboard,
  onOpenAuth,
  onOpenProfile,
  onOpenDictionary,
}) => {
  const { userProfile, isAuthenticated } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  const { isOnline, isOffline, isConnectionStable, indicatorDotClass, statusLabel } = useOffline();
  const [mobileTab, setMobileTab] = useState<MobileTab>('studio');
  const [selectedStyleId, setSelectedStyleId] = useState<string>('elem-math');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);

  // Content of Mathematics & Physics state
  const [contentSubject, setContentSubject] = useState<'mathematics' | 'physics'>('mathematics');
  const [contentMathCategory, setContentMathCategory] = useState<'definitions' | 'theorems' | 'properties' | 'formulas'>('definitions');
  const [contentPhysicsCategory, setContentPhysicsCategory] = useState<'laws_definitions' | 'principles' | 'formulas' | 'derivations'>('laws_definitions');
  const [contentSearch, setContentSearch] = useState('');
  const [contentClassFilter, setContentClassFilter] = useState<ClassLevel | 'all'>('all');
  const [expandedContentId, setExpandedContentId] = useState<string | null>(null);

  // Philosophers, Mathematicians & Physicists state
  const [philosopherSection, setPhilosopherSection] = useState<'all' | 'philosophers' | 'mathematicians' | 'physicists'>('all');
  const [philosopherFieldFilter, setPhilosopherFieldFilter] = useState<string>('all');
  const [philosopherSearch, setPhilosopherSearch] = useState<string>('');
  const [activeThinkerModal, setActiveThinkerModal] = useState<Mathematician | null>(null);
  const [expandedThinkerId, setExpandedThinkerId] = useState<string | null>(null);

  // Sync content subject with activeTrack when switching
  useEffect(() => {
    if (activeTrack.includes('Physics')) {
      setContentSubject('physics');
    } else {
      setContentSubject('mathematics');
    }
  }, [activeTrack]);

  // Chapters for current selected class and track
  const chapters = useMemo(() => {
    if (activeTrack === 'Advanced Mathematics') {
      if (selectedClass === 11) {
        return ADVANCED_MATH_11_CHAPTERS;
      }
      return ALL_CHAPTERS.filter((ch) => ch.class === selectedClass && ch.track === 'Advanced Mathematics');
    }
    if (activeTrack === 'Elementary Physics') {
      return ALL_CHAPTERS.filter((ch) => ch.class === selectedClass && ch.track === 'Elementary Physics');
    }
    if (activeTrack === 'Advanced Physics') {
      return ALL_CHAPTERS.filter((ch) => ch.class === selectedClass && ch.track === 'Advanced Physics');
    }
    // Elementary Mathematics (Standard)
    return ALL_CHAPTERS.filter((ch) => {
      if (ch.class !== selectedClass) return false;
      return !ch.track || ch.track === 'Elementary Mathematics';
    });
  }, [selectedClass, activeTrack]);

  // ============================================================================
  // 📚 STUDY MODULE FILTERED DATA (MATHEMATICS & PHYSICS)
  // ============================================================================
  // Filtered Math Definitions
  const filteredMathDefinitions = useMemo(() => {
    return ALL_DEFINITIONS.filter((item) => {
      if (contentClassFilter !== 'all' && item.class !== contentClassFilter) return false;
      if (contentSearch.trim()) {
        const q = contentSearch.toLowerCase();
        return (
          item.term.toLowerCase().includes(q) ||
          item.definition.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          (item.formula && item.formula.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [contentClassFilter, contentSearch]);

  // Filtered Math Theorems
  const filteredMathTheorems = useMemo(() => {
    return ALL_THEOREMS.filter((item) => {
      if (contentClassFilter !== 'all' && item.class !== contentClassFilter) return false;
      if (contentSearch.trim()) {
        const q = contentSearch.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.statement.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.formula.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [contentClassFilter, contentSearch]);

  // Filtered Math Properties
  const filteredMathProperties = useMemo(() => {
    return ALL_PROPERTIES.filter((item) => {
      if (contentClassFilter !== 'all' && item.class !== contentClassFilter) return false;
      if (contentSearch.trim()) {
        const q = contentSearch.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.rules.some((r) => r.label.toLowerCase().includes(q) || r.formula.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [contentClassFilter, contentSearch]);

  // Filtered Math Formulas
  const filteredMathFormulas = useMemo(() => {
    return ALL_FORMULAS.filter((item) => {
      if (contentClassFilter !== 'all' && item.class !== contentClassFilter) return false;
      if (contentSearch.trim()) {
        const q = contentSearch.toLowerCase();
        return (
          item.name.toLowerCase().includes(q) ||
          item.topic.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.formula.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [contentClassFilter, contentSearch]);

  // Filtered Physics Laws & Definitions
  const filteredPhysicsLawsDefs = useMemo(() => {
    return ALL_PHYSICS_LAWS_DEFINITIONS.filter((item) => {
      if (contentClassFilter !== 'all' && item.class !== contentClassFilter) return false;
      if (contentSearch.trim()) {
        const q = contentSearch.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.statement.toLowerCase().includes(q) ||
          item.explanation.toLowerCase().includes(q) ||
          item.lawType.toLowerCase().includes(q) ||
          item.formula.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [contentClassFilter, contentSearch]);

  // Filtered Physics Principles
  const filteredPhysicsPrinciples = useMemo(() => {
    return ALL_PHYSICS_PRINCIPLES.filter((item) => {
      if (contentClassFilter !== 'all' && item.class !== contentClassFilter) return false;
      if (contentSearch.trim()) {
        const q = contentSearch.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.statement.toLowerCase().includes(q) ||
          item.mechanism.toLowerCase().includes(q) ||
          item.principleType.toLowerCase().includes(q) ||
          (item.formula && item.formula.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [contentClassFilter, contentSearch]);

  // Filtered Physics Formulas
  const filteredPhysicsFormulas = useMemo(() => {
    return ALL_PHYSICS_FORMULAS.filter((item) => {
      if (contentClassFilter !== 'all' && item.class !== contentClassFilter) return false;
      if (contentSearch.trim()) {
        const q = contentSearch.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.topic.toLowerCase().includes(q) ||
          item.variablesExplanation.toLowerCase().includes(q) ||
          item.formula.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [contentClassFilter, contentSearch]);

  // Filtered Physics Derivations
  const filteredPhysicsDerivations = useMemo(() => {
    return ALL_PHYSICS_DERIVATIONS.filter((item) => {
      if (contentClassFilter !== 'all' && item.class !== contentClassFilter) return false;
      if (contentSearch.trim()) {
        const q = contentSearch.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.targetResult.toLowerCase().includes(q) ||
          item.startingPrinciples.toLowerCase().includes(q) ||
          item.finalEquation.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [contentClassFilter, contentSearch]);

  // Filtered Thinkers (Philosophers, Mathematicians, Physicists)
  const filteredThinkersList = useMemo(() => {
    return MATHEMATICIANS.filter((thinker) => {
      // Category filter
      if (philosopherSection === 'mathematicians' && thinker.thinkerType !== 'mathematician') {
        return false;
      }
      if (philosopherSection === 'physicists' && thinker.thinkerType !== 'physicist') {
        return false;
      }
      if (philosopherSection === 'philosophers') {
        const isPhil = ['descartes', 'pythagoras', 'leibniz', 'pascal', 'euclid', 'turing', 'newton', 'einstein', 'galileo'].includes(thinker.id) || 
          thinker.field === 'Ancient Pioneers' || 
          (thinker.philosophicalContribution && thinker.philosophicalContribution.length > 0);
        if (!isPhil) return false;
      }

      // Search query
      if (philosopherSearch.trim()) {
        const q = philosopherSearch.toLowerCase();
        const matchName = thinker.name.toLowerCase().includes(q);
        const matchTitle = thinker.title.toLowerCase().includes(q);
        const matchField = thinker.field.toLowerCase().includes(q);
        const matchEra = thinker.era.toLowerCase().includes(q);
        const matchQuote = thinker.famousQuote.toLowerCase().includes(q);
        return matchName || matchTitle || matchField || matchEra || matchQuote;
      }

      return true;
    });
  }, [philosopherSection, philosopherSearch]);

  const thinkerCounts = useMemo(() => {
    const mathCount = MATHEMATICIANS.filter(m => m.thinkerType === 'mathematician').length;
    const physCount = MATHEMATICIANS.filter(m => m.thinkerType === 'physicist').length;
    const philCount = MATHEMATICIANS.filter(m => 
      ['descartes', 'pythagoras', 'leibniz', 'pascal', 'euclid', 'turing', 'newton', 'einstein', 'galileo'].includes(m.id) || 
      m.field === 'Ancient Pioneers' || 
      (m.philosophicalContribution && m.philosophicalContribution.length > 0)
    ).length;
    return { mathCount, physCount, philCount };
  }, []);

  const tracksConfig = [
    {
      id: 'elem-math',
      trackName: 'Elementary Mathematics' as const,
      label: 'Mathematics',
      badge: 'Core',
      icon: Sigma,
      bgGradient: 'from-pink-400/20 via-purple-400/20 to-indigo-400/20',
      activeRing: 'border-pink-500 shadow-pink-500/30',
      iconColor: 'text-pink-600 dark:text-pink-400',
      description: 'Standard Classes 9-12 Mathematics',
      sampleTopic: 'Algebra, Trigonometry & Matrices',
    },
    {
      id: 'adv-math',
      trackName: 'Advanced Mathematics' as const,
      label: 'Adv Math',
      badge: 'Higher',
      icon: Sparkles,
      bgGradient: 'from-purple-400/20 via-indigo-400/20 to-sky-400/20',
      activeRing: 'border-purple-500 shadow-purple-500/30',
      iconColor: 'text-purple-600 dark:text-purple-400',
      description: 'Classes 11 & 12 Pre-Engineering',
      sampleTopic: 'Calculus, Vectors & Analytic Geometry',
    },
    {
      id: 'elem-phys',
      trackName: 'Elementary Physics' as const,
      label: 'Physics',
      badge: 'Physics',
      icon: Atom,
      bgGradient: 'from-sky-400/20 via-cyan-400/20 to-teal-400/20',
      activeRing: 'border-cyan-500 shadow-cyan-500/30',
      iconColor: 'text-cyan-600 dark:text-cyan-400',
      description: 'Classes 9-12 Physics & Lab Foundations',
      sampleTopic: 'Mechanics, Heat, Optics & Electricity',
    },
    {
      id: 'adv-phys',
      trackName: 'Advanced Physics' as const,
      label: 'Adv Physics',
      badge: 'Pro',
      icon: Flame,
      bgGradient: 'from-amber-400/20 via-orange-400/20 to-rose-400/20',
      activeRing: 'border-amber-500 shadow-amber-500/30',
      iconColor: 'text-amber-600 dark:text-amber-400',
      description: 'Advanced Waves & Electromagnetism',
      sampleTopic: 'Fields, Waves & Modern Quantum Physics',
    },
  ];

  // 4 Core Academic Tracks
  const styleGridItems = [
    {
      id: 'elem-math',
      track: 'Elementary Mathematics' as const,
      title: 'Mathematics',
      subtitle: 'Core Foundation',
      icon: Sigma,
      gradient: 'from-rose-100 to-pink-200 dark:from-rose-950/40 dark:to-pink-900/40',
      action: () => onSelectTrack('Elementary Mathematics'),
    },
    {
      id: 'adv-math',
      track: 'Advanced Mathematics' as const,
      title: 'Adv Math',
      subtitle: 'Higher Calculus',
      icon: Sparkles,
      gradient: 'from-violet-100 to-purple-200 dark:from-violet-950/40 dark:to-purple-900/40',
      action: () => onSelectTrack('Advanced Mathematics'),
    },
    {
      id: 'elem-phys',
      track: 'Elementary Physics' as const,
      title: 'Physics',
      subtitle: 'Mechanics & Heat',
      icon: Atom,
      gradient: 'from-sky-100 to-cyan-200 dark:from-sky-950/40 dark:to-cyan-900/40',
      action: () => onSelectTrack('Elementary Physics'),
    },
    {
      id: 'adv-phys',
      track: 'Advanced Physics' as const,
      title: 'Adv Physics',
      subtitle: 'Waves & Quantum',
      icon: Flame,
      gradient: 'from-amber-100 to-orange-200 dark:from-amber-950/40 dark:to-orange-900/40',
      action: () => onSelectTrack('Advanced Physics'),
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-sky-100/70 via-pink-100/50 to-purple-100/70 dark:from-slate-950 dark:via-purple-950/30 dark:to-slate-950 text-slate-900 dark:text-slate-100 pb-28">
      
      {/* Top Ambient Glow / Aura */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-pink-300/30 via-purple-300/20 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-md mx-auto px-3.5 pt-1.5 pb-8 space-y-3.5">

        {/* TOP STATUS BAR & USER GREETING - POSITIONED NEAR TOP-LEFT */}
        <div className="flex items-center justify-between pt-1 pb-1 px-1">
          <div className="flex items-center gap-2.5">
            {/* User Avatar Circle with Dynamic Pulse & Glow */}
            <button 
              id="mobile-user-avatar-btn"
              onClick={isAuthenticated ? onOpenProfile : onOpenAuth}
              className="relative group cursor-pointer focus:outline-hidden transform active:scale-95 hover:scale-105 transition-all duration-300 shrink-0"
              title={isAuthenticated ? 'View Scholar Profile' : 'Sign In / Register'}
            >
              <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-pink-500 via-purple-500 to-amber-400 shadow-md group-hover:shadow-lg group-hover:shadow-pink-500/30 transition-all">
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden">
                  {isAuthenticated ? (
                    <span className="font-black text-sm text-purple-600 dark:text-purple-300 uppercase">
                      {userProfile?.displayName?.charAt(0) || userProfile?.email?.charAt(0) || 'S'}
                    </span>
                  ) : (
                    <User className="w-4.5 h-4.5 text-slate-600 dark:text-slate-300 group-hover:text-purple-600 transition-colors" />
                  )}
                </div>
              </div>
              <span 
                id="mobile-user-status-indicator"
                className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-slate-900 transition-colors duration-300 ${indicatorDotClass}`}
                title={`Connection: ${statusLabel}`}
              />
            </button>

            {/* Greeting & Subtitle (Positioned near top-left) */}
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold tracking-wide">
                  Hi{isAuthenticated && userProfile?.displayName ? `, ${userProfile.displayName.split(' ')[0]}` : ''}
                </span>
                {!isAuthenticated && (
                  <button
                    id="mobile-header-signin-btn"
                    onClick={onOpenAuth}
                    className="text-[10px] font-extrabold text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 hover:underline cursor-pointer ml-1"
                  >
                    (Sign In)
                  </button>
                )}
              </div>
              <h2 className="text-sm font-extrabold tracking-tight text-slate-900 dark:text-white mt-0.5">
                {isAuthenticated ? 'Welcome Back' : 'Welcome Back'}
              </h2>
            </div>
          </div>

          {/* Right Action Badges: View Ranking Crown Button & 3-Lines Settings Menu */}
          <div className="flex items-center gap-2">
            <button
              id="mobile-view-ranking-btn"
              onClick={() => onOpenLeaderboard(activeTrack)}
              className="h-8.5 px-3 rounded-full bg-gradient-to-tr from-purple-600 via-pink-600 to-rose-500 flex items-center justify-center gap-1.5 text-white shadow-md shadow-pink-500/25 hover:shadow-lg hover:shadow-pink-500/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group"
              title="View Ranking"
              aria-label="View Ranking"
            >
              <Crown className="w-3.5 h-3.5 fill-white group-hover:rotate-12 transition-transform duration-300 shrink-0" />
              <span className="text-[11px] font-black tracking-tight whitespace-nowrap">View Ranking</span>
            </button>

            {/* 3-Lines Settings & Preferences Menu Button */}
            <button
              id="mobile-settings-menu-btn"
              onClick={() => setIsSettingsOpen(true)}
              className="w-8.5 h-8.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/60 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200 shadow-xs hover:shadow-md hover:bg-purple-50 dark:hover:bg-slate-800 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
              title="Settings, Theme & About Me"
              aria-label="Open Settings"
            >
              <Menu className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* TAB 1: STUDIO VIEW (Center Screen in Mockup) */}
        {/* ========================================================= */}
        {mobileTab === 'studio' && (
          <div className="space-y-3.5 animate-fade-in">

            {/* 1. CLASS LEVEL SELECTION CARD */}
            <div className="p-4 rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white/80 dark:border-slate-800 shadow-xl shadow-purple-500/5 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Select Class Level
                </span>
                <span className="text-[11px] font-bold text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/50 px-2 py-0.5 rounded-full border border-pink-200/50 dark:border-pink-800/50">
                  Class {selectedClass} Selected
                </span>
              </div>

              {/* Class Chips with Dynamic Connected State */}
              <div className="grid grid-cols-4 gap-2">
                {([9, 10, 11, 12] as ClassLevel[]).map((lvl) => {
                  const isSelected = selectedClass === lvl;
                  return (
                    <button
                      key={lvl}
                      id={`mobile-class-select-${lvl}`}
                      onClick={() => onSelectClass(lvl, activeTrack)}
                      className={`py-2.5 px-1 rounded-2xl font-extrabold transition-all duration-300 flex flex-col items-center justify-center gap-0.5 cursor-pointer relative overflow-hidden group ${
                        isSelected
                          ? 'bg-gradient-to-tr from-purple-600 via-pink-600 to-rose-500 text-white shadow-lg shadow-pink-500/30 scale-102 border-2 border-white/80 ring-2 ring-pink-400/50'
                          : 'bg-slate-100/90 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-white hover:text-purple-600 hover:shadow-md hover:border-purple-300 dark:hover:border-purple-600 border border-slate-200/60 dark:border-slate-700/60 hover:scale-105 active:scale-95'
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-black group-hover:tracking-wider transition-all duration-300">Class {lvl}</span>
                      <span className={`text-[10px] font-medium transition-colors ${isSelected ? 'text-pink-100' : 'text-slate-500 dark:text-slate-400 group-hover:text-purple-500'}`}>
                        {lvl <= 10 ? 'Secondary' : 'Inter'}
                      </span>
                      {isSelected && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. CHOOSE TRACK & STUDY MODE 4-TRACK GRID */}
            <div className="p-4 rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white/80 dark:border-slate-800 shadow-xl shadow-purple-500/5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Choose Track &amp; Study Mode
                </span>
                <span className="text-[11px] text-pink-600 dark:text-pink-400 font-bold bg-pink-50 dark:bg-pink-950/60 px-2 py-0.5 rounded-full border border-pink-200/50 dark:border-pink-800/50">
                  {activeTrack === 'Elementary Mathematics' ? 'Mathematics' : activeTrack === 'Elementary Physics' ? 'Physics' : activeTrack}
                </span>
              </div>

              {/* 2x2 Grid of the 4 Main Academic Tracks connected to Chapter List */}
              <div className="grid grid-cols-2 gap-2.5">
                {styleGridItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTrack === item.track;

                  return (
                    <button
                      key={item.id}
                      id={`mobile-track-select-${item.id}`}
                      onClick={() => {
                        setSelectedStyleId(item.id);
                        item.action();
                      }}
                      className={`p-3 rounded-2xl transition-all duration-300 flex items-center gap-2.5 text-left cursor-pointer relative group ${
                        isActive
                          ? 'ring-2 ring-pink-500 ring-offset-2 dark:ring-offset-slate-900 shadow-lg shadow-pink-500/25 scale-[1.02] bg-pink-50/70 dark:bg-pink-950/30 border border-pink-300 dark:border-pink-800'
                          : 'bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 hover:scale-[1.02] active:scale-[0.98] hover:bg-white dark:hover:bg-slate-800 hover:shadow-md'
                      }`}
                    >
                      {/* Gradient Square Thumbnail */}
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} border border-white/60 dark:border-slate-700 flex items-center justify-center shrink-0 shadow-xs transition-all duration-300 group-hover:scale-110 ${isActive ? 'shadow-pink-500/30 ring-1 ring-pink-400' : ''}`}>
                        <Icon className={`w-5 h-5 text-slate-800 dark:text-slate-200 stroke-[2.2] transition-transform duration-300 group-hover:rotate-6 ${isActive ? 'text-pink-600 dark:text-pink-300 scale-110' : ''}`} />
                      </div>
                      
                      <div className="min-w-0">
                        <span className={`text-xs font-black block truncate transition-colors ${isActive ? 'text-pink-600 dark:text-pink-300' : 'text-slate-800 dark:text-slate-200 group-hover:text-purple-600'}`}>
                          {item.title}
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium block truncate">
                          {item.subtitle}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. DYNAMICALLY CONNECTED CHAPTERS OF THAT CLASS & TRACK */}
            <div className="p-4 rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white/80 dark:border-slate-800 shadow-xl shadow-purple-500/5 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
                    Class {selectedClass} Chapters
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {activeTrack === 'Elementary Mathematics' ? 'Mathematics' : activeTrack === 'Elementary Physics' ? 'Physics' : activeTrack} • {chapters.length} Modules
                  </span>
                </div>
                <span className="text-[11px] font-extrabold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-full border border-indigo-200/50 dark:border-indigo-800/50">
                  {chapters.length} Ready
                </span>
              </div>

              {/* Chapters list connected to Class Level & Track */}
              {chapters.length > 0 ? (
                <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                  {chapters.map((ch, idx) => (
                    <div
                      key={ch.id}
                      className="p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 flex items-center justify-between gap-3 hover:border-purple-300 dark:hover:border-purple-600 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-950/70 text-purple-600 dark:text-purple-400 font-black text-xs flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                          {idx + 1}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs font-extrabold text-slate-900 dark:text-white truncate group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {ch.name}
                          </h4>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">
                            {ch.category}
                          </span>
                        </div>
                      </div>

                      <button
                        id={`mobile-start-ch-${ch.id}`}
                        onClick={() => onStartChapterPractice(ch)}
                        className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-extrabold text-xs shadow-xs hover:shadow-md hover:scale-105 active:scale-95 flex items-center gap-1.5 shrink-0 cursor-pointer transition-all duration-200"
                        title={`Start ${ch.name}`}
                      >
                        <Play className="w-3 h-3 fill-white" />
                        <span>Start</span>
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-6 px-4 text-center space-y-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-dashed border-slate-300 dark:border-slate-700">
                  <BookOpen className="w-8 h-8 mx-auto text-slate-400" />
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    {activeTrack === 'Elementary Mathematics' ? 'Mathematics' : activeTrack === 'Elementary Physics' ? 'Physics' : activeTrack} is available in Intermediate Classes (11 & 12).
                  </p>
                  <button
                    onClick={() => onSelectClass(11, activeTrack)}
                    className="px-4 py-2 rounded-xl bg-purple-600 text-white font-bold text-xs hover:bg-purple-700 transition-colors cursor-pointer"
                  >
                    Switch to Class 11
                  </button>
                </div>
              )}
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 1: MATHEMATICIANS & PHYSICISTS SECTION */}
        {/* ========================================================= */}
        {mobileTab === 'philosophers' && (
          <div className="space-y-4 animate-fade-in pb-16">
            
            {/* HERO BANNER */}
            <div className="p-5 rounded-3xl bg-gradient-to-br from-purple-900/90 via-indigo-950/95 to-slate-900 border border-purple-500/30 shadow-2xl text-white space-y-3 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-purple-500/20 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-cyan-500/20 blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between relative z-10">
                <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-200 border border-purple-400/30 flex items-center gap-1.5">
                  <Brain className="w-3 h-3 text-purple-300" />
                  <span>Foundations of Science</span>
                </span>
                <span className="text-[11px] font-bold text-purple-200/70">
                  {filteredThinkersList.length} Thinkers
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-wider bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent flex items-center gap-2 transition-all drop-shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0 inline-block" />
                  <span>GREAT THINKERS</span>
                </h3>
                <p className="text-xs text-purple-200/80 mt-1 leading-relaxed">
                  Explore how history&apos;s most profound intellects formulated mathematical reality, physical universe laws, and spacetime geometry.
                </p>
              </div>

            </div>

            {/* 🔍 SEARCH & CATEGORY FILTER BAR */}
            <div className="space-y-2.5 p-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 backdrop-blur-md shadow-xs">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search thinkers, eras, breakthroughs..."
                  value={philosopherSearch}
                  onChange={(e) => setPhilosopherSearch(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
                {philosopherSearch && (
                  <button
                    onClick={() => setPhilosopherSearch('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* 2 Category Buttons: Mathematicians, Physicists */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  id="mobile-thinkers-filter-mathematicians"
                  onClick={() => setPhilosopherSection(philosopherSection === 'mathematicians' ? 'all' : 'mathematicians')}
                  className={`py-2 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-2xs ${
                    philosopherSection === 'mathematicians'
                      ? 'bg-purple-600 text-white shadow-purple-600/30 ring-1 ring-purple-400 scale-[1.02]'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <Sigma className="w-4 h-4 shrink-0 text-purple-500 dark:text-purple-300" />
                  <span>Mathematicians</span>
                </button>

                <button
                  id="mobile-thinkers-filter-physicists"
                  onClick={() => setPhilosopherSection(philosopherSection === 'physicists' ? 'all' : 'physicists')}
                  className={`py-2 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-2xs ${
                    philosopherSection === 'physicists'
                      ? 'bg-cyan-600 text-white shadow-cyan-600/30 ring-1 ring-cyan-400 scale-[1.02]'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-cyan-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <Atom className="w-4 h-4 shrink-0 text-cyan-500 dark:text-cyan-300" />
                  <span>Physicists</span>
                </button>
              </div>
            </div>

            {/* THINKER CARDS LIST (Collapsed by default, expands on click) */}
            <div className="space-y-3">
              {filteredThinkersList.length > 0 ? (
                filteredThinkersList.map((thinker) => {
                  const isPhysicist = thinker.thinkerType === 'physicist';
                  const isExpanded = expandedThinkerId === thinker.id;

                  return (
                    <div
                      key={thinker.id}
                      className={`p-4 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900/90 border transition-all duration-300 ${
                        isExpanded
                          ? 'border-purple-300 dark:border-purple-700 shadow-xl ring-1 ring-purple-400/20 dark:ring-purple-500/20 space-y-3'
                          : 'border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-purple-200 dark:hover:border-purple-900 cursor-pointer'
                      }`}
                    >
                      {/* HEADER ROW / CLICKABLE TRIGGER */}
                      <div 
                        onClick={() => setExpandedThinkerId(isExpanded ? null : thinker.id)}
                        className="flex items-center justify-between gap-3 cursor-pointer select-none"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br ${thinker.avatarColor} flex items-center justify-center font-black text-sm shadow-md shrink-0 border border-white/20 text-white`}>
                            {thinker.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-sm font-black text-slate-900 dark:text-white truncate">
                              {thinker.name}
                            </h4>
                            <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 truncate">
                              {thinker.title}
                            </p>
                            <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3 text-slate-400" />
                                {thinker.era}
                              </span>
                              <span>•</span>
                              <span className="truncate">{thinker.nationality}</span>
                            </div>
                          </div>
                        </div>

                        {/* SECTION TYPE BADGE & EXPAND ICON */}
                        <div className="flex items-center gap-2 shrink-0">
                          <span
                            className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${
                              isPhysicist
                                ? 'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/60'
                                : 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/60'
                            }`}
                          >
                            {isPhysicist ? '🔬 Physicist' : '📐 Mathematician'}
                          </span>

                          <div className={`p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-300' : ''}`}>
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {/* EXPANDED CONTENT: ONLY VISIBLE WHEN USER CLICKS */}
                      {isExpanded && (
                        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3 animate-fade-in">
                          {/* FAMOUS QUOTE */}
                          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 relative">
                            <Quote className="w-4 h-4 text-purple-400/60 absolute top-2.5 right-2.5" />
                            <p className="text-xs italic text-slate-700 dark:text-slate-300 pr-5 leading-relaxed">
                              "{thinker.famousQuote}"
                            </p>
                          </div>

                          {/* PHILOSOPHICAL WORLDVIEW */}
                          <div className="space-y-1">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                              Philosophical View:
                            </span>
                            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                              {thinker.philosophicalView}
                            </p>
                          </div>

                          {/* PRIMARY BREAKTHROUGH EQUATION */}
                          {thinker.majorBreakthroughs.length > 0 && (
                            <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 border border-purple-200/50 dark:border-purple-800/40 space-y-1.5">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] font-extrabold text-purple-700 dark:text-purple-300 uppercase">
                                  Core Breakthrough: {thinker.majorBreakthroughs[0].title}
                                </span>
                              </div>

                              {thinker.majorBreakthroughs[0].formula && (
                                <div className="p-2 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-purple-200/60 dark:border-purple-800/60 text-center font-mono text-xs overflow-x-auto text-purple-950 dark:text-purple-200 shadow-inner">
                                  <MathText text={`$${thinker.majorBreakthroughs[0].formula}$`} />
                                </div>
                              )}

                              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                                {thinker.majorBreakthroughs[0].description}
                              </p>
                            </div>
                          )}

                          {/* ADDITIONAL BREAKTHROUGHS */}
                          {thinker.majorBreakthroughs.slice(1).map((b, bi) => (
                            <div key={bi} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
                              <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                                {b.title}
                              </h5>
                              {b.formula && (
                                <div className="p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-mono text-xs text-center text-indigo-900 dark:text-indigo-200">
                                  <MathText text={`$${b.formula}$`} />
                                </div>
                              )}
                              <p className="text-[11px] text-slate-600 dark:text-slate-300">
                                {b.description}
                              </p>
                            </div>
                          ))}

                          {/* PHILOSOPHICAL CONTRIBUTION */}
                          <div className="p-3 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/50 dark:border-indigo-800/40 space-y-1">
                            <span className="text-[10px] font-extrabold uppercase text-indigo-700 dark:text-indigo-300">
                              Epistemological Contribution:
                            </span>
                            <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">
                              {thinker.philosophicalContribution}
                            </p>
                          </div>

                          {/* IMPACT ON MODERN CIVILIZATION */}
                          <div className="p-3 rounded-2xl bg-pink-50/70 dark:bg-pink-950/40 border border-pink-200/50 dark:border-pink-800/40 space-y-1">
                            <span className="text-[10px] font-extrabold uppercase text-pink-700 dark:text-pink-300">
                              Modern World Impact:
                            </span>
                            <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">
                              {thinker.impactOnModernWorld}
                            </p>
                          </div>

                          {/* COLLAPSE ACTION BUTTON */}
                          <button
                            onClick={() => setExpandedThinkerId(null)}
                            className="w-full py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer"
                          >
                            <ChevronUp className="w-3.5 h-3.5" />
                            <span>Hide Details</span>
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="p-8 text-center bg-white/60 dark:bg-slate-800/60 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
                  <Brain className="w-8 h-8 text-slate-400 mx-auto mb-2 opacity-60" />
                  <p className="text-xs font-bold text-slate-600 dark:text-slate-400">No thinkers matching your search or filter</p>
                </div>
              )}
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: MODULES - CONTENT OF MATHEMATICS AND PHYSICS */}
        {/* ========================================================= */}
        {mobileTab === 'modules' && (
          <div className="space-y-4 animate-fade-in pb-16">
            
            {/* MAIN HEADER: CONTENT OF MATHEMATICS & PHYSICS */}
            <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-950/40 dark:via-purple-950/40 dark:to-slate-900 border border-indigo-200/50 dark:border-indigo-800/40 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800">
                  Academic Knowledge Core
                </span>
                <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                  Class {selectedClass} Focus
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  Content of Mathematics &amp; Physics
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Comprehensive repository of fundamental laws, formulas, theorems, definitions &amp; scientific principles.
                </p>
              </div>

              {/* PRIMARY SUBJECT SELECTOR (MATHEMATICS vs PHYSICS) */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  id="mobile-subject-math-btn"
                  onClick={() => {
                    setContentSubject('mathematics');
                    setContentMathCategory('all');
                  }}
                  className={`py-3 px-3 rounded-2xl font-black text-xs flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-sm ${
                    contentSubject === 'mathematics'
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-purple-600/30 scale-[1.02] ring-2 ring-purple-400'
                      : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <Sigma className={`w-4 h-4 ${contentSubject === 'mathematics' ? 'text-white' : 'text-purple-500'}`} />
                  <span>Mathematics Section</span>
                </button>

                <button
                  id="mobile-subject-physics-btn"
                  onClick={() => {
                    setContentSubject('physics');
                    setContentPhysicsCategory('all');
                  }}
                  className={`py-3 px-3 rounded-2xl font-black text-xs flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-sm ${
                    contentSubject === 'physics'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-cyan-600/30 scale-[1.02] ring-2 ring-cyan-400'
                      : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <Atom className={`w-4 h-4 ${contentSubject === 'physics' ? 'text-white animate-spin-slow' : 'text-cyan-500'}`} />
                  <span>Physics Section</span>
                </button>
              </div>
            </div>

            {/* ========================================================= */}
            {/* 🔍 SEARCH & CLASS FILTER BAR (SHARED FOR ACTIVE SUBJECT) */}
            {/* ========================================================= */}
            <div className="space-y-2 p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 backdrop-blur-md shadow-xs">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder={`Search ${contentSubject === 'mathematics' ? 'formulas, theorems, definitions...' : 'laws, principles, derivations...'}`}
                  value={contentSearch}
                  onChange={(e) => setContentSearch(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
                {contentSearch && (
                  <button
                    onClick={() => setContentSearch('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Class Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
                <span className="text-[10px] font-bold text-slate-400 shrink-0">Class:</span>
                {([9, 10, 11, 12] as const).map((cls) => (
                  <button
                    key={cls}
                    onClick={() => setContentClassFilter(contentClassFilter === cls ? 'all' : cls)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-black shrink-0 transition-all cursor-pointer ${
                      contentClassFilter === cls
                        ? contentSubject === 'mathematics'
                          ? 'bg-purple-600 text-white shadow-xs'
                          : 'bg-cyan-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    Class {cls}
                  </button>
                ))}
              </div>
            </div>

            {/* ========================================================= */}
            {/* 📐 MATHEMATICS SECTION */}
            {/* ========================================================= */}
            {contentSubject === 'mathematics' && (
              <div className="space-y-3">
                {/* Math Category 4-Button Grid - Reduced Size & Mobile Optimized */}
                <div className="grid grid-cols-4 gap-1 sm:gap-1.5">
                  <button
                    id="mobile-math-btn-definitions"
                    onClick={() => setContentMathCategory('definitions')}
                    className={`py-2 px-1 rounded-xl text-[10px] sm:text-xs font-black text-center flex flex-col items-center justify-center leading-tight transition-all cursor-pointer shadow-2xs ${
                      contentMathCategory === 'definitions'
                        ? 'bg-pink-600 text-white shadow-pink-600/30 ring-1 ring-pink-400 scale-[1.02]'
                        : 'bg-white dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-pink-950/40 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <span>Definitions</span>
                    <span className="text-[9px] font-bold opacity-80 mt-0.5">({filteredMathDefinitions.length})</span>
                  </button>
                  <button
                    id="mobile-math-btn-theorems"
                    onClick={() => setContentMathCategory('theorems')}
                    className={`py-2 px-1 rounded-xl text-[10px] sm:text-xs font-black text-center flex flex-col items-center justify-center leading-tight transition-all cursor-pointer shadow-2xs ${
                      contentMathCategory === 'theorems'
                        ? 'bg-indigo-600 text-white shadow-indigo-600/30 ring-1 ring-indigo-400 scale-[1.02]'
                        : 'bg-white dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <span>Theorems</span>
                    <span className="text-[9px] font-bold opacity-80 mt-0.5">({filteredMathTheorems.length})</span>
                  </button>
                  <button
                    id="mobile-math-btn-properties"
                    onClick={() => setContentMathCategory('properties')}
                    className={`py-2 px-1 rounded-xl text-[10px] sm:text-xs font-black text-center flex flex-col items-center justify-center leading-tight transition-all cursor-pointer shadow-2xs ${
                      contentMathCategory === 'properties'
                        ? 'bg-amber-600 text-white shadow-amber-600/30 ring-1 ring-amber-400 scale-[1.02]'
                        : 'bg-white dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-amber-950/40 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <span>Properties</span>
                    <span className="text-[9px] font-bold opacity-80 mt-0.5">({filteredMathProperties.length})</span>
                  </button>
                  <button
                    id="mobile-math-btn-formulas"
                    onClick={() => setContentMathCategory('formulas')}
                    className={`py-2 px-1 rounded-xl text-[10px] sm:text-xs font-black text-center flex flex-col items-center justify-center leading-tight transition-all cursor-pointer shadow-2xs ${
                      contentMathCategory === 'formulas'
                        ? 'bg-purple-600 text-white shadow-purple-600/30 ring-1 ring-purple-400 scale-[1.02]'
                        : 'bg-white dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-950/40 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <span>Formulas</span>
                    <span className="text-[9px] font-bold opacity-80 mt-0.5">({filteredMathFormulas.length})</span>
                  </button>
                </div>

                {/* Math Items List */}
                <div className="space-y-2.5">
                  {/* DEFINITIONS */}
                  {contentMathCategory === 'definitions' &&
                    filteredMathDefinitions.map((item) => (
                      <div
                        key={`def-${item.id}`}
                        onClick={() => setExpandedContentId(expandedContentId === `def-${item.id}` ? null : `def-${item.id}`)}
                        className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-pink-100 dark:border-pink-900/40 shadow-xs hover:shadow-md transition-all cursor-pointer space-y-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-300 border border-pink-200 dark:border-pink-800/60 shrink-0">
                              Definition • Class {item.class}
                            </span>
                            <span className="text-[10px] font-semibold text-slate-400 truncate">
                              {item.chapterName || item.category}
                            </span>
                          </div>
                          <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${expandedContentId === `def-${item.id}` ? 'rotate-180 text-pink-600 dark:text-pink-400' : ''}`} />
                        </div>

                        <h4 className="text-xs font-black text-slate-900 dark:text-white">
                          {item.term}
                        </h4>

                        {expandedContentId === `def-${item.id}` && (
                          <div className="space-y-2 pt-1 border-t border-slate-100 dark:border-slate-700/60 animate-fade-in">
                            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                              <MathText text={item.definition} />
                            </p>

                            {item.formula && (
                              <div className="p-2 rounded-xl bg-pink-50/70 dark:bg-pink-950/40 border border-pink-200/50 dark:border-pink-800/40 text-center font-mono text-xs overflow-x-auto text-pink-950 dark:text-pink-200">
                                <MathText text={`$${item.formula}$`} />
                              </div>
                            )}

                            {item.example && (
                              <div className="text-[10px] p-2 rounded-lg bg-slate-50 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800">
                                <strong className="text-pink-600 dark:text-pink-400">Example: </strong>
                                <MathText text={item.example} />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}

                  {/* THEOREMS */}
                  {contentMathCategory === 'theorems' &&
                    filteredMathTheorems.map((item) => (
                      <div
                        key={`thm-${item.id}`}
                        onClick={() => setExpandedContentId(expandedContentId === `thm-${item.id}` ? null : `thm-${item.id}`)}
                        className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-indigo-100 dark:border-indigo-900/40 shadow-xs hover:shadow-md transition-all cursor-pointer space-y-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 shrink-0">
                              Theorem • Class {item.class}
                            </span>
                            <span className="text-[10px] font-semibold text-slate-400 truncate">
                              {item.category}
                            </span>
                          </div>
                          <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${expandedContentId === `thm-${item.id}` ? 'rotate-180 text-indigo-600 dark:text-indigo-400' : ''}`} />
                        </div>

                        <h4 className="text-xs font-black text-slate-900 dark:text-white">
                          {item.title}
                        </h4>

                        {expandedContentId === `thm-${item.id}` && (
                          <div className="space-y-2 pt-1 border-t border-slate-100 dark:border-slate-700/60 animate-fade-in">
                            <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">
                              <MathText text={item.statement} />
                            </p>

                            {item.formula && (
                              <div className="p-2 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/50 dark:border-indigo-800/40 text-center font-mono text-xs overflow-x-auto text-indigo-950 dark:text-indigo-200">
                                <MathText text={`$${item.formula}$`} />
                              </div>
                            )}

                            {item.proofOutline && item.proofOutline.length > 0 && (
                              <div className="text-[10px] p-2 rounded-lg bg-slate-50 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800 space-y-1">
                                <div className="font-bold text-indigo-600 dark:text-indigo-400">Proof Steps:</div>
                                <ul className="list-disc list-inside space-y-0.5 text-[11px] text-slate-600 dark:text-slate-300">
                                  {item.proofOutline.map((st, i) => (
                                    <li key={i}><MathText text={st} /></li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {item.condition && (
                              <div className="text-[10px] text-slate-500 dark:text-slate-400">
                                <strong className="text-indigo-600 dark:text-indigo-400">Condition: </strong>
                                <MathText text={item.condition} />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}

                  {/* PROPERTIES */}
                  {contentMathCategory === 'properties' &&
                    filteredMathProperties.map((item) => (
                      <div
                        key={`prop-${item.id}`}
                        onClick={() => setExpandedContentId(expandedContentId === `prop-${item.id}` ? null : `prop-${item.id}`)}
                        className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-amber-100 dark:border-amber-900/40 shadow-xs hover:shadow-md transition-all cursor-pointer space-y-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 shrink-0">
                              Property • Class {item.class}
                            </span>
                            <span className="text-[10px] font-semibold text-slate-400 truncate">
                              {item.category}
                            </span>
                          </div>
                          <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${expandedContentId === `prop-${item.id}` ? 'rotate-180 text-amber-600 dark:text-amber-400' : ''}`} />
                        </div>

                        <h4 className="text-xs font-black text-slate-900 dark:text-white">
                          {item.title}
                        </h4>

                        {expandedContentId === `prop-${item.id}` && (
                          <div className="space-y-2 pt-1 border-t border-slate-100 dark:border-slate-700/60 animate-fade-in">
                            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                              {item.description}
                            </p>

                            {item.formula && (
                              <div className="p-2 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/50 dark:border-amber-800/40 text-center font-mono text-xs overflow-x-auto text-amber-950 dark:text-amber-200">
                                <MathText text={`$${item.formula}$`} />
                              </div>
                            )}

                            {item.rules && item.rules.length > 0 && (
                              <div className="space-y-1 pt-1">
                                {item.rules.map((r, ri) => (
                                  <div key={ri} className="p-1.5 rounded-lg bg-amber-50/60 dark:bg-amber-950/30 text-[10px] border border-amber-200/40 dark:border-amber-900/40">
                                    <span className="font-bold text-amber-700 dark:text-amber-300">{r.label}: </span>
                                    <MathText text={`$${r.formula}$`} />
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}

                  {/* FORMULAS */}
                  {contentMathCategory === 'formulas' &&
                    filteredMathFormulas.map((item) => (
                      <div
                        key={`form-${item.id}`}
                        onClick={() => setExpandedContentId(expandedContentId === `form-${item.id}` ? null : `form-${item.id}`)}
                        className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-purple-100 dark:border-purple-900/40 shadow-xs hover:shadow-md transition-all cursor-pointer space-y-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 shrink-0">
                              Formula • Class {item.class}
                            </span>
                            <span className="text-[10px] font-semibold text-slate-400 truncate">
                              {item.topic}
                            </span>
                          </div>
                          <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${expandedContentId === `form-${item.id}` ? 'rotate-180 text-purple-600 dark:text-purple-400' : ''}`} />
                        </div>

                        <h4 className="text-xs font-black text-slate-900 dark:text-white">
                          {item.name}
                        </h4>

                        {expandedContentId === `form-${item.id}` && (
                          <div className="space-y-2 pt-1 border-t border-slate-100 dark:border-slate-700/60 animate-fade-in">
                            <div className="p-2.5 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200/50 dark:border-purple-800/40 text-center font-mono text-xs overflow-x-auto text-purple-950 dark:text-purple-200">
                              <MathText text={`$${item.formula}$`} />
                            </div>

                            {item.variablesExplanation && (
                              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                                {item.variablesExplanation}
                              </p>
                            )}

                            {item.notes && (
                              <div className="text-[10px] p-2 rounded-lg bg-slate-50 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800 space-y-0.5">
                                <strong className="text-purple-600 dark:text-purple-400 uppercase">Key Notes: </strong>
                                <MathText text={item.notes} />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}

                  {/* Empty state */}
                  {((contentMathCategory === 'definitions' && filteredMathDefinitions.length === 0) ||
                    (contentMathCategory === 'theorems' && filteredMathTheorems.length === 0) ||
                    (contentMathCategory === 'properties' && filteredMathProperties.length === 0) ||
                    (contentMathCategory === 'formulas' && filteredMathFormulas.length === 0)) && (
                      <div className="p-8 text-center bg-white/60 dark:bg-slate-800/60 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
                        <Sigma className="w-8 h-8 text-slate-400 mx-auto mb-2 opacity-60" />
                        <p className="text-xs font-bold text-slate-600 dark:text-slate-400">No math items matching your search or class filter</p>
                      </div>
                    )}
                </div>
              </div>
            )}

            {/* ========================================================= */}
            {/* ⚛️ PHYSICS SECTION */}
            {/* ========================================================= */}
            {contentSubject === 'physics' && (
              <div className="space-y-3">
                {/* Physics Category 4-Button Grid - Reduced Size & Mobile Optimized */}
                <div className="grid grid-cols-4 gap-1 sm:gap-1.5">
                  <button
                    id="mobile-physics-btn-laws"
                    onClick={() => setContentPhysicsCategory('laws_definitions')}
                    className={`py-2 px-1 rounded-xl text-[10px] sm:text-xs font-black text-center flex flex-col items-center justify-center leading-tight transition-all cursor-pointer shadow-2xs ${
                      contentPhysicsCategory === 'laws_definitions'
                        ? 'bg-sky-600 text-white shadow-sky-600/30 ring-1 ring-sky-400 scale-[1.02]'
                        : 'bg-white dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-sky-950/40 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <span>Laws &amp; Defs</span>
                    <span className="text-[9px] font-bold opacity-80 mt-0.5">({filteredPhysicsLawsDefs.length})</span>
                  </button>
                  <button
                    id="mobile-physics-btn-principles"
                    onClick={() => setContentPhysicsCategory('principles')}
                    className={`py-2 px-1 rounded-xl text-[10px] sm:text-xs font-black text-center flex flex-col items-center justify-center leading-tight transition-all cursor-pointer shadow-2xs ${
                      contentPhysicsCategory === 'principles'
                        ? 'bg-teal-600 text-white shadow-teal-600/30 ring-1 ring-teal-400 scale-[1.02]'
                        : 'bg-white dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <span>Principles</span>
                    <span className="text-[9px] font-bold opacity-80 mt-0.5">({filteredPhysicsPrinciples.length})</span>
                  </button>
                  <button
                    id="mobile-physics-btn-formulas"
                    onClick={() => setContentPhysicsCategory('formulas')}
                    className={`py-2 px-1 rounded-xl text-[10px] sm:text-xs font-black text-center flex flex-col items-center justify-center leading-tight transition-all cursor-pointer shadow-2xs ${
                      contentPhysicsCategory === 'formulas'
                        ? 'bg-blue-600 text-white shadow-blue-600/30 ring-1 ring-blue-400 scale-[1.02]'
                        : 'bg-white dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <span>Formulas</span>
                    <span className="text-[9px] font-bold opacity-80 mt-0.5">({filteredPhysicsFormulas.length})</span>
                  </button>
                  <button
                    id="mobile-physics-btn-derivations"
                    onClick={() => setContentPhysicsCategory('derivations')}
                    className={`py-2 px-1 rounded-xl text-[10px] sm:text-xs font-black text-center flex flex-col items-center justify-center leading-tight transition-all cursor-pointer shadow-2xs ${
                      contentPhysicsCategory === 'derivations'
                        ? 'bg-violet-600 text-white shadow-violet-600/30 ring-1 ring-violet-400 scale-[1.02]'
                        : 'bg-white dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:bg-violet-50 dark:hover:bg-violet-950/40 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <span>Derivations</span>
                    <span className="text-[9px] font-bold opacity-80 mt-0.5">({filteredPhysicsDerivations.length})</span>
                  </button>
                </div>

                {/* Physics Content Cards List */}
                <div className="space-y-2.5">
                  {/* LAWS & DEFINITIONS */}
                  {contentPhysicsCategory === 'laws_definitions' &&
                    filteredPhysicsLawsDefs.map((item) => (
                      <div
                        key={`law-${item.id}`}
                        onClick={() => setExpandedContentId(expandedContentId === `law-${item.id}` ? null : `law-${item.id}`)}
                        className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-sky-100 dark:border-sky-900/40 shadow-xs hover:shadow-md transition-all cursor-pointer space-y-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-300 border border-sky-200 dark:border-sky-800/60 shrink-0">
                              Law &amp; Def • Class {item.class}
                            </span>
                            <span className="text-[10px] font-semibold text-slate-400 truncate">
                              {item.lawType}
                            </span>
                          </div>
                          <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${expandedContentId === `law-${item.id}` ? 'rotate-180 text-sky-600 dark:text-sky-400' : ''}`} />
                        </div>

                        <h4 className="text-xs font-black text-slate-900 dark:text-white">
                          {item.title}
                        </h4>

                        {expandedContentId === `law-${item.id}` && (
                          <div className="space-y-2 pt-1 border-t border-slate-100 dark:border-slate-700/60 animate-fade-in">
                            <div className="p-2.5 rounded-xl bg-sky-50/70 dark:bg-sky-950/40 border border-sky-200/50 dark:border-sky-800/40 text-center font-mono text-xs overflow-x-auto text-sky-950 dark:text-sky-200">
                              <MathText text={`$${item.formula}$`} />
                            </div>

                            <div className="space-y-1">
                              <div className="text-[10px] font-bold text-sky-700 dark:text-sky-300 uppercase tracking-wide">Scientific Statement:</div>
                              <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                <MathText text={item.statement} />
                              </p>
                            </div>

                            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                              {item.explanation}
                            </p>

                            {item.keyPoints && item.keyPoints.length > 0 && (
                              <div className="text-[10px] p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800 space-y-1">
                                <div className="font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wide">Key Takeaways &amp; Physical Rules:</div>
                                <ul className="list-disc list-inside space-y-0.5 text-[11px]">
                                  {item.keyPoints.map((pt, i) => (
                                    <li key={i}><MathText text={pt} /></li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {item.applications && (
                              <div className="text-[10px] p-2 rounded-lg bg-sky-50/60 dark:bg-sky-950/30 text-sky-800 dark:text-sky-300 border border-sky-200/50 dark:border-sky-900/40">
                                <strong className="font-bold">Applications: </strong>
                                <span>{item.applications}</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}

                  {/* PRINCIPLES */}
                  {contentPhysicsCategory === 'principles' &&
                    filteredPhysicsPrinciples.map((item) => (
                      <div
                        key={`prin-${item.id}`}
                        onClick={() => setExpandedContentId(expandedContentId === `prin-${item.id}` ? null : `prin-${item.id}`)}
                        className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-teal-100 dark:border-teal-900/40 shadow-xs hover:shadow-md transition-all cursor-pointer space-y-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-300 border border-teal-200 dark:border-teal-800/60 shrink-0">
                              Principle • Class {item.class}
                            </span>
                            <span className="text-[10px] font-semibold text-slate-400 truncate">
                              {item.principleType}
                            </span>
                          </div>
                          <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${expandedContentId === `prin-${item.id}` ? 'rotate-180 text-teal-600 dark:text-teal-400' : ''}`} />
                        </div>

                        <h4 className="text-xs font-black text-slate-900 dark:text-white">
                          {item.title}
                        </h4>

                        {expandedContentId === `prin-${item.id}` && (
                          <div className="space-y-2 pt-1 border-t border-slate-100 dark:border-slate-700/60 animate-fade-in">
                            {item.formula && (
                              <div className="p-2.5 rounded-xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200/50 dark:border-teal-800/40 text-center font-mono text-xs overflow-x-auto text-teal-950 dark:text-teal-200">
                                <MathText text={`$${item.formula}$`} />
                              </div>
                            )}

                            <div className="space-y-1">
                              <div className="text-[10px] font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wide">Fundamental Statement:</div>
                              <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                <MathText text={item.statement} />
                              </p>
                            </div>

                            <div className="space-y-0.5">
                              <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Physical Mechanism:</div>
                              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                                <MathText text={item.mechanism} />
                              </p>
                            </div>

                            {item.keyPoints && item.keyPoints.length > 0 && (
                              <div className="text-[10px] p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800 space-y-1">
                                <div className="font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wide">Key Points:</div>
                                <ul className="list-disc list-inside space-y-0.5 text-[11px]">
                                  {item.keyPoints.map((pt, i) => (
                                    <li key={i}><MathText text={pt} /></li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {item.realWorldExample && (
                              <div className="text-[10px] p-2 rounded-lg bg-teal-50/60 dark:bg-teal-950/30 text-teal-800 dark:text-teal-300 border border-teal-200/50 dark:border-teal-900/40">
                                <strong className="font-bold">Real-World Engineering Example: </strong>
                                <span>{item.realWorldExample}</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}

                  {/* FORMULAS */}
                  {contentPhysicsCategory === 'formulas' &&
                    filteredPhysicsFormulas.map((item) => (
                      <div
                        key={`phys-form-${item.id}`}
                        onClick={() => setExpandedContentId(expandedContentId === `phys-form-${item.id}` ? null : `phys-form-${item.id}`)}
                        className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-blue-100 dark:border-blue-900/40 shadow-xs hover:shadow-md transition-all cursor-pointer space-y-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 shrink-0">
                              Formula • Class {item.class}
                            </span>
                            <span className="text-[10px] font-semibold text-slate-400 truncate">
                              {item.topic}
                            </span>
                          </div>
                          <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${expandedContentId === `phys-form-${item.id}` ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''}`} />
                        </div>

                        <h4 className="text-xs font-black text-slate-900 dark:text-white">
                          {item.title}
                        </h4>

                        {expandedContentId === `phys-form-${item.id}` && (
                          <div className="space-y-2 pt-1 border-t border-slate-100 dark:border-slate-700/60 animate-fade-in">
                            <div className="p-2.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/50 dark:border-blue-800/40 text-center font-mono text-xs overflow-x-auto text-blue-950 dark:text-blue-200">
                              <MathText text={`$${item.formula}$`} />
                            </div>

                            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                              <MathText text={item.variablesExplanation} />
                            </p>

                            {item.notes && (
                              <div className="text-[10px] p-2 rounded-lg bg-slate-50 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800 space-y-0.5">
                                <strong className="text-blue-600 dark:text-blue-400 uppercase">Key Notes: </strong>
                                <MathText text={item.notes} />
                              </div>
                            )}

                            {item.siUnits && (
                              <div className="text-[10px] px-2 py-1 rounded-md bg-blue-50/60 dark:bg-blue-950/30 text-blue-800 dark:text-blue-300 border border-blue-200/40 dark:border-blue-900/30">
                                <strong>SI Units: </strong>{item.siUnits}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}

                  {/* DERIVATIONS */}
                  {contentPhysicsCategory === 'derivations' &&
                    filteredPhysicsDerivations.map((item) => (
                      <div
                        key={`der-${item.id}`}
                        onClick={() => setExpandedContentId(expandedContentId === `der-${item.id}` ? null : `der-${item.id}`)}
                        className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-violet-100 dark:border-violet-900/40 shadow-xs hover:shadow-md transition-all cursor-pointer space-y-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60 shrink-0">
                              Derivation • Class {item.class}
                            </span>
                            <span className="text-[10px] font-semibold text-slate-400 truncate">
                              Calculus &amp; Proofs
                            </span>
                          </div>
                          <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${expandedContentId === `der-${item.id}` ? 'rotate-180 text-violet-600 dark:text-violet-400' : ''}`} />
                        </div>

                        <h4 className="text-xs font-black text-slate-900 dark:text-white">
                          {item.title}
                        </h4>

                        {expandedContentId === `der-${item.id}` && (
                          <div className="space-y-2.5 pt-1 border-t border-slate-100 dark:border-slate-700/60 animate-fade-in">
                            <div className="p-2.5 rounded-xl bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-950/40 dark:to-indigo-950/40 border border-violet-200/60 dark:border-violet-800/40 text-center font-mono text-xs overflow-x-auto text-violet-950 dark:text-violet-200">
                              <span className="text-[10px] uppercase font-bold text-violet-600 dark:text-violet-400 block mb-0.5">Target Proof:</span>
                              <MathText text={`$${item.targetResult}$`} />
                            </div>

                            <div className="text-[10px] p-2 rounded-lg bg-slate-50 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800">
                              <strong className="text-violet-600 dark:text-violet-400">Starting Principles: </strong>
                              <MathText text={item.startingPrinciples} />
                            </div>

                            {/* Step by Step Derivation Steps */}
                            <div className="space-y-1.5">
                              <div className="text-[10px] font-bold text-violet-700 dark:text-violet-300 uppercase tracking-wide">
                                Step-by-Step Derivation:
                              </div>
                              <div className="space-y-1.5">
                                {item.stepByStepDerivation.map((step, sIdx) => (
                                  <div
                                    key={sIdx}
                                    className="p-2 rounded-xl bg-violet-50/40 dark:bg-violet-950/20 border border-violet-100 dark:border-violet-900/30 text-[11px] text-slate-700 dark:text-slate-300 flex items-start gap-2"
                                  >
                                    <span className="w-4 h-4 rounded-full bg-violet-600 text-white font-bold text-[9px] flex items-center justify-center shrink-0 mt-0.5">
                                      {sIdx + 1}
                                    </span>
                                    <div className="flex-1 overflow-x-auto">
                                      <MathText text={step} />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Final Equation Highlight */}
                            <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-center text-xs font-mono text-emerald-900 dark:text-emerald-200 font-bold overflow-x-auto">
                              <span className="text-[9px] uppercase font-black text-emerald-600 dark:text-emerald-400 block mb-0.5">Q.E.D. Final Derived Equation:</span>
                              <MathText text={`$${item.finalEquation}$`} />
                            </div>

                            {item.keyAssumptions && (
                              <div className="text-[10px] text-slate-500 dark:text-slate-400 italic">
                                <strong className="font-semibold text-slate-600 dark:text-slate-300">Key Assumptions: </strong>
                                {item.keyAssumptions}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}

                  {/* Empty state */}
                  {((contentPhysicsCategory === 'laws_definitions' && filteredPhysicsLawsDefs.length === 0) ||
                    (contentPhysicsCategory === 'principles' && filteredPhysicsPrinciples.length === 0) ||
                    (contentPhysicsCategory === 'formulas' && filteredPhysicsFormulas.length === 0) ||
                    (contentPhysicsCategory === 'derivations' && filteredPhysicsDerivations.length === 0)) && (
                      <div className="p-8 text-center bg-white/60 dark:bg-slate-800/60 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
                        <Atom className="w-8 h-8 text-slate-400 mx-auto mb-2 opacity-60" />
                        <p className="text-xs font-bold text-slate-600 dark:text-slate-400">No physics items matching your search or class filter</p>
                      </div>
                    )}
                </div>
              </div>
            )}

          </div>
        )}

      </div>

      {/* ========================================================= */}
      {/* ⚙️ SETTINGS, THEME & ABOUT ME MODAL (Triggered by 3-Lines Menu) */}
      {/* ========================================================= */}
      {isSettingsOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
          onClick={() => setIsSettingsOpen(false)}
        >
          <div 
            className="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border-t sm:border border-slate-200 dark:border-slate-800 rounded-t-3xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 space-y-5 text-slate-900 dark:text-white animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-300 flex items-center justify-center">
                  <Settings className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black tracking-tight">App Settings &amp; Preferences</h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Customize appearance and learn about the author</p>
                </div>
              </div>

              <button
                onClick={() => setIsSettingsOpen(false)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Close Settings"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* SECTION 1: APPEARANCE & THEME SWITCHER */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-300 flex items-center justify-center">
                    {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Theme &amp; Visual Mode</h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">
                      Currently using <strong className="text-purple-600 dark:text-purple-400">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</strong>
                    </p>
                  </div>
                </div>

                {/* Interactive Toggle Switch Button */}
                <button
                  id="settings-theme-toggle-btn"
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs font-extrabold shadow-xs hover:border-purple-400 transition-all cursor-pointer"
                >
                  {isDarkMode ? (
                    <>
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5 text-slate-700" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* SECTION 2: 🎓 ABOUT ME COMPACT ROW */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-0.5 shadow-sm shrink-0">
                  <div className="w-full h-full rounded-[10px] bg-slate-900 flex items-center justify-center text-white font-black text-xs">
                    MA
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">About Me</h4>
                    <span className="px-1.5 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-[9px] font-black shrink-0">
                      Author
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Mahtab Ahmed • Specialist</p>
                </div>
              </div>

              <button
                id="settings-open-aboutme-btn"
                onClick={() => {
                  setIsSettingsOpen(false);
                  setIsAboutMeOpen(true);
                }}
                className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1 transition-all cursor-pointer shadow-xs shrink-0"
              >
                <span>View</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* SECTION 3: ACCOUNT & FAST ACTIONS */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400 font-medium truncate">
                {isAuthenticated ? `Signed in as ${userProfile?.name || 'Scholar'}` : 'Guest Student Mode'}
              </span>
              <button
                onClick={() => {
                  setIsSettingsOpen(false);
                  if (isAuthenticated) {
                    onOpenProfile();
                  } else {
                    onOpenAuth();
                  }
                }}
                className="font-bold text-purple-600 dark:text-purple-400 hover:underline shrink-0 ml-2"
              >
                {isAuthenticated ? 'View Full Profile' : 'Sign In / Register'}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 🎓 DEDICATED ABOUT ME MODAL (Mobile-Screen Optimized) */}
      {/* ========================================================= */}
      {isAboutMeOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in"
          onClick={() => setIsAboutMeOpen(false)}
        >
          <div 
            className="w-full max-w-sm sm:max-w-md max-h-[85vh] overflow-y-auto bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white border border-indigo-500/40 rounded-3xl shadow-2xl p-5 sm:p-6 space-y-4 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Close */}
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-0.5 shadow-md">
                    <div className="w-full h-full rounded-[14px] bg-slate-900 flex flex-col items-center justify-center text-white">
                      <span className="text-base font-black bg-gradient-to-br from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                        MA
                      </span>
                      <span className="text-[6px] font-bold text-indigo-300 tracking-wider">
                        MATH
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-slate-950 p-0.5 rounded-full ring-2 ring-slate-900">
                    <CheckCircle className="w-3 h-3 text-white fill-emerald-600" />
                  </div>
                </div>

                <div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 text-[9px] font-extrabold border border-amber-400/20 uppercase tracking-wide">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>Subject Specialist</span>
                  </div>
                  <h3 className="text-base font-black text-white">Mahtab Ahmed</h3>
                  <p className="text-[10px] text-indigo-200 font-medium">Mathematics &amp; Physics Creator</p>
                </div>
              </div>

              <button
                onClick={() => setIsAboutMeOpen(false)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close About Me"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Qualifications & Academic Degrees */}
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-300">
                Academic Background
              </span>
              
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h6 className="text-xs font-bold text-white">BS Mathematics</h6>
                  <p className="text-[10px] text-indigo-200">University Of Sindh</p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
                <Calculator className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h6 className="text-xs font-bold text-white">Mastering Calculus and Algebra</h6>
                  <p className="text-[10px] text-cyan-200">TU DELFT University Of Netherland</p>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-300">
                Pedagogical Vision
              </span>
              <p className="text-[11px] text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-white/5">
                &ldquo;Dedicated to transforming abstract mathematical definitions and theoretical physics into crystal-clear intuition, rigorous proofs, and real-world mastery.&rdquo;
              </p>
            </div>

            {/* Direct WhatsApp Contact Action */}
            <div className="pt-2">
              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Contact via WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* FLOATING GLASS ISLAND / DOCK BOTTOM NAVIGATION */}
      {/* ========================================================= */}
      <nav className="fixed bottom-3 inset-x-0 z-40 max-w-xs mx-auto px-3 py-2 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-white/60 dark:border-slate-700/60 shadow-2xl shadow-purple-900/20 flex items-center justify-between">
        
        {/* Tab 1: Philosophers / Thinkers */}
        <button
          id="mobile-nav-philosophers-btn"
          onClick={() => setMobileTab('philosophers')}
          className={`p-2.5 rounded-full transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95 ${
            mobileTab === 'philosophers'
              ? 'bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-300 shadow-sm'
              : 'text-slate-400 hover:text-slate-600'
          }`}
          title="Philosophers & Thinkers"
        >
          <Brain className="w-5 h-5" />
        </button>

        {/* Tab 2: Start Quiz (Class & Chapter Selection) */}
        <button
          onClick={() => setMobileTab('studio')}
          className={`p-2.5 rounded-full transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95 ${
            mobileTab === 'studio'
              ? 'bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-300 shadow-sm'
              : 'text-slate-400 hover:text-slate-600'
          }`}
          title="Start Quiz"
          aria-label="Start Quiz"
        >
          <Layers className="w-5 h-5" />
        </button>

        {/* Tab 3: Modules / Effect Preview */}
        <button
          onClick={() => setMobileTab('modules')}
          className={`p-2.5 rounded-full transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95 ${
            mobileTab === 'modules'
              ? 'bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-300 shadow-sm'
              : 'text-slate-400 hover:text-slate-600'
          }`}
          title="Study Modules"
        >
          <BookOpen className="w-5 h-5" />
        </button>

        {/* Tab 4: Scholar Profile */}
        <button
          id="mobile-bottom-profile-nav-btn"
          onClick={isAuthenticated ? onOpenProfile : onOpenAuth}
          className={`p-2.5 rounded-full transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95 relative ${
            isAuthenticated
              ? 'text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-950/60'
              : 'text-slate-400 hover:text-purple-600'
          }`}
          title={isAuthenticated ? `Scholar Profile (${statusLabel})` : `Sign In (${statusLabel})`}
        >
          <div className="relative">
            <User className="w-5 h-5" />
            <span
              className={`absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full ring-1.5 ring-white dark:ring-slate-900 transition-colors duration-300 ${indicatorDotClass}`}
            />
          </div>
        </button>

      </nav>

    </div>
  );
};
