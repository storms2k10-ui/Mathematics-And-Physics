import React, { useState, useMemo } from 'react';
import { 
  Sigma, 
  Menu, 
  X, 
  BookOpen, 
  Trophy, 
  Info, 
  ChevronDown, 
  ChevronRight,
  Library, 
  Sun, 
  Moon, 
  Compass, 
  Layers, 
  Calculator, 
  Atom, 
  Brain,
  User,
  LogIn,
  GraduationCap,
  Sparkles,
  Zap,
  FlaskConical,
  Settings
} from 'lucide-react';
import { ClassLevel } from '../types';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useOffline } from '../context/OfflineContext';
import { ContentSection, ContentSubject } from './ContentView';
import { ALL_CHAPTERS } from '../data/chaptersData';
import { EcatLogo } from './EcatLogo';

export type NavTab = 'home' | 'philosophy' | 'classes' | 'dictionary' | 'about' | 'physics';

interface NavbarProps {
  activeTab: NavTab;
  selectedClass: ClassLevel | null;
  activeContentSection?: ContentSection;
  activePhilosopherType?: 'mathematicians' | 'physicists';
  activeTrack?: 'Elementary Mathematics' | 'Chemistry' | 'Elementary Physics' | 'Pre Calculas';
  onNavigate: (tab: NavTab, classLevel?: ClassLevel, track?: 'Elementary Mathematics' | 'Chemistry' | 'Elementary Physics' | 'Pre Calculas') => void;
  onNavigateContentSection?: (section: ContentSection, subject?: ContentSubject) => void;
  onSelectPhilosopherType?: (type: 'mathematicians' | 'physicists') => void;
  onOpenLeaderboard?: (track?: 'Elementary Mathematics' | 'Chemistry' | 'Elementary Physics' | 'Pre Calculas') => void;
  onOpenAuth?: () => void;
  onOpenProfile?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  selectedClass,
  activeContentSection = 'definitions',
  activePhilosopherType = 'mathematicians',
  activeTrack = 'Elementary Mathematics',
  onNavigate,
  onNavigateContentSection,
  onSelectPhilosopherType,
  onOpenLeaderboard,
  onOpenAuth,
  onOpenProfile,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [philosophyDropdownOpen, setPhilosophyDropdownOpen] = useState(false);
  const [subjectDropdownOpen, setSubjectDropdownOpen] = useState(false);
  const [contentDropdownOpen, setContentDropdownOpen] = useState(false);
  const [settingsDropdownOpen, setSettingsDropdownOpen] = useState(false);

  // Strictly default to false - NEVER expand any section until clicked
  const [isMathExpandedInSubject, setIsMathExpandedInSubject] = useState(false);
  const [isChemistryExpandedInSubject, setIsChemistryExpandedInSubject] = useState(false);
  const [isPhysicsExpandedInSubject, setIsPhysicsExpandedInSubject] = useState(false);
  const [isPreCalculasExpandedInSubject, setIsPreCalculasExpandedInSubject] = useState(false);

  const [isMathExpandedInContent, setIsMathExpandedInContent] = useState(false);
  const [isPhysicsExpandedInContent, setIsPhysicsExpandedInContent] = useState(false);

  const { isDarkMode, toggleTheme } = useTheme();
  const { currentUser, userProfile } = useAuth();
  const { isOnline, isConnectionStable, indicatorDotClass, statusLabel } = useOffline();

  // Dynamic Chapter Auto-Counting per Class and Track
  const mathChapterCounts = useMemo(() => {
    return {
      9: ALL_CHAPTERS.filter((c) => c.class === 9 && (!c.track || c.track === 'Elementary Mathematics')).length,
      10: ALL_CHAPTERS.filter((c) => c.class === 10 && (!c.track || c.track === 'Elementary Mathematics')).length,
      11: ALL_CHAPTERS.filter((c) => c.class === 11 && (!c.track || c.track === 'Elementary Mathematics')).length,
      12: ALL_CHAPTERS.filter((c) => c.class === 12 && (!c.track || c.track === 'Elementary Mathematics')).length,
    };
  }, []);

  const chemistryChapterCounts = useMemo(() => {
    return {
      9: ALL_CHAPTERS.filter((c) => c.class === 9 && c.track === 'Chemistry').length,
      10: ALL_CHAPTERS.filter((c) => c.class === 10 && c.track === 'Chemistry').length,
      11: ALL_CHAPTERS.filter((c) => c.class === 11 && c.track === 'Chemistry').length,
      12: ALL_CHAPTERS.filter((c) => c.class === 12 && c.track === 'Chemistry').length,
    };
  }, []);

  const physicsChapterCounts = useMemo(() => {
    return {
      11: ALL_CHAPTERS.filter((c) => c.class === 11 && c.track === 'Elementary Physics').length,
      12: ALL_CHAPTERS.filter((c) => c.class === 12 && c.track === 'Elementary Physics').length,
    };
  }, []);

  const preCalculasChapterCounts = useMemo(() => {
    return {
      11: ALL_CHAPTERS.filter((c) => c.class === 11 && c.track === 'Pre Calculas').length,
    };
  }, []);

  const handleClassSelect = (lvl: ClassLevel, track: 'Elementary Mathematics' | 'Chemistry' = 'Elementary Mathematics') => {
    onNavigate('classes', lvl, track);
    setSubjectDropdownOpen(false);
    setContentDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleSubjectSelect = (_subject: 'physics' | 'precalculas', track: 'Elementary Physics' | 'Pre Calculas' = 'Elementary Physics', lvl?: ClassLevel) => {
    onNavigate('classes', lvl || 11, track);
    setSubjectDropdownOpen(false);
    setContentDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handlePhilosophySelect = (type: 'mathematicians' | 'physicists') => {
    if (onSelectPhilosopherType) {
      onSelectPhilosopherType(type);
    }
    onNavigate('philosophy');
    setPhilosophyDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleContentSectionSelect = (section: ContentSection, subject: ContentSubject = 'mathematics') => {
    if (onNavigateContentSection) {
      onNavigateContentSection(section, subject);
    } else {
      onNavigate('dictionary');
    }
    setContentDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <nav id="main-navbar" className="sticky top-0 z-40 bg-[#0B132B] border-b border-slate-800 text-white transition-colors shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Left Side: Brand Logo */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <button
              id="nav-logo-btn"
              onClick={() => onNavigate('home')}
              className="flex items-center group focus:outline-none cursor-pointer shrink-0 select-none py-1 transition-opacity hover:opacity-90 active:scale-95"
              title="ECAT — Engineering College Admission Test"
              aria-label="Home - ECAT"
            >
              <EcatLogo className="h-8 sm:h-9 md:h-10 w-auto" />
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
            
            {/* 🌟 PHILOSOPHY BUTTON DROPDOWN (Mathematicians & Physicists) */}
            <div 
              className="relative"
              onMouseEnter={() => setPhilosophyDropdownOpen(true)}
              onMouseLeave={() => setPhilosophyDropdownOpen(false)}
            >
              <button
                id="nav-link-philosophy"
                onClick={() => setPhilosophyDropdownOpen(!philosophyDropdownOpen)}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'philosophy'
                    ? 'text-white bg-white/15 shadow-xs'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
                aria-expanded={philosophyDropdownOpen}
              >
                <Brain className="w-4 h-4 text-slate-300" />
                <span>Philosophy</span>
                <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform ${philosophyDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {philosophyDropdownOpen && (
                <div className="absolute left-0 mt-1 w-64 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">
                    Philosophical Foundations
                  </div>

                  <div className="p-2 space-y-1">
                    {/* Option 1: Mathematicians */}
                    <button
                      onClick={() => handlePhilosophySelect('mathematicians')}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2.5 hover:bg-indigo-50 dark:hover:bg-slate-800 transition-colors cursor-pointer ${
                        activeTab === 'philosophy' && activePhilosopherType === 'mathematicians'
                          ? 'bg-indigo-50/90 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-bold'
                          : 'text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      <span className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-xs font-bold shrink-0">
                        <Sigma className="w-4 h-4" />
                      </span>
                      <div>
                        <span className="font-bold block">Mathematicians</span>
                        <span className="text-[10px] text-slate-400">Gauss, Euler, Ramanujan, Gödel...</span>
                      </div>
                    </button>

                    {/* Option 2: Physicists */}
                    <button
                      onClick={() => handlePhilosophySelect('physicists')}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2.5 hover:bg-cyan-50 dark:hover:bg-slate-800 transition-colors cursor-pointer ${
                        activeTab === 'philosophy' && activePhilosopherType === 'physicists'
                          ? 'bg-cyan-50/90 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 font-bold'
                          : 'text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      <span className="w-7 h-7 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 flex items-center justify-center text-xs font-bold shrink-0">
                        <Atom className="w-4 h-4" />
                      </span>
                      <div>
                        <span className="font-bold block">Physicists</span>
                        <span className="text-[10px] text-slate-400">Einstein, Newton, Feynman, Bohr...</span>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 🌟 SUBJECT DROPDOWN (Renamed from Select Subject to Subject) */}
            <div 
              className="relative"
              onMouseEnter={() => setSubjectDropdownOpen(true)}
              onMouseLeave={() => setSubjectDropdownOpen(false)}
            >
              <button
                id="nav-link-subject-dropdown"
                onClick={() => setSubjectDropdownOpen(!subjectDropdownOpen)}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'classes' || activeTab === 'physics'
                    ? 'text-white bg-white/15 shadow-xs'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <BookOpen className="w-4 h-4 text-slate-300" />
                <span>Subject</span>
                <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform ${subjectDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {subjectDropdownOpen && (
                <div
                  className="absolute left-0 mt-1 w-84 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 max-h-[85vh] overflow-y-auto"
                >
                  <div className="px-4 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span>Academic Tracks</span>
                    <span>𝙴𝙽𝙶𝙸𝙽𝙴𝙴𝚁𝙸𝙽𝙶 𝙲𝙾𝙻𝙻𝙴𝙶𝙴 𝙰𝙳𝙼𝙸𝚂𝚂𝙸𝙾𝙽 𝚃𝙴𝚂𝚃</span>
                  </div>
                  
                  <div className="p-2 space-y-1.5">
                    {/* 1. ELEMENTARY MATHEMATICS (Click to expand 4 classes) */}
                    <div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMathExpandedInSubject(!isMathExpandedInSubject);
                        }}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-between hover:bg-indigo-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-800 dark:text-slate-100"
                      >
                        <span className="flex items-center gap-2 font-bold text-indigo-700 dark:text-indigo-300">
                          <span className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-xs font-bold shrink-0">
                            <Sigma className="w-4 h-4" />
                          </span>
                          <span>Mathematics</span>
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                          <span className="text-[10px] font-bold">4 Classes</span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMathExpandedInSubject ? 'rotate-180' : ''}`} />
                        </div>
                      </button>

                      {isMathExpandedInSubject && (
                        <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-indigo-200 dark:border-indigo-800 ml-4 animate-in fade-in duration-150">
                          {([9, 10, 11, 12] as ClassLevel[]).map((lvl) => (
                            <button
                              key={lvl}
                              onClick={() => handleClassSelect(lvl, 'Elementary Mathematics')}
                              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between hover:bg-indigo-50 dark:hover:bg-slate-800 transition-colors cursor-pointer ${
                                activeTab === 'classes' && selectedClass === lvl && activeTrack === 'Elementary Mathematics'
                                  ? 'text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50/80 dark:bg-slate-800/80'
                                  : 'text-slate-700 dark:text-slate-300'
                              }`}
                            >
                              <span className="font-semibold">Class {lvl} Mathematics</span>
                              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 font-semibold">
                                {mathChapterCounts[lvl]} Ch
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* 2. CHEMISTRY (Click to expand Class 9, 10, 11 & 12) */}
                    <div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsChemistryExpandedInSubject(!isChemistryExpandedInSubject);
                        }}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-between hover:bg-emerald-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-800 dark:text-slate-100"
                      >
                        <span className="flex items-center gap-2 font-bold text-emerald-700 dark:text-emerald-300">
                          <span className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-xs font-bold shrink-0">
                            <FlaskConical className="w-4 h-4" />
                          </span>
                          <span>Chemistry</span>
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                          <span className="text-[10px] font-bold">4 Classes</span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isChemistryExpandedInSubject ? 'rotate-180' : ''}`} />
                        </div>
                      </button>

                      {isChemistryExpandedInSubject && (
                        <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-emerald-200 dark:border-emerald-800 ml-4 animate-in fade-in duration-150">
                          {([9, 10, 11, 12] as ClassLevel[]).map((lvl) => (
                            <button
                              key={lvl}
                              onClick={() => handleClassSelect(lvl, 'Chemistry')}
                              className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between hover:bg-emerald-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-700 dark:text-slate-300"
                            >
                              <span className="font-semibold">Class {lvl} Chemistry</span>
                              <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">
                                {chemistryChapterCounts[lvl]} Ch
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="border-t border-slate-100 dark:border-slate-800 my-1"></div>

                    {/* 3. PHYSICS (Click to expand Class 11 & 12) */}
                    <div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsPhysicsExpandedInSubject(!isPhysicsExpandedInSubject);
                        }}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-between hover:bg-cyan-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-800 dark:text-slate-100"
                      >
                        <span className="flex items-center gap-2 font-bold text-cyan-700 dark:text-cyan-300">
                          <span className="w-7 h-7 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 flex items-center justify-center text-xs font-bold shrink-0">
                            <Atom className="w-4 h-4" />
                          </span>
                          <span>Physics</span>
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                          <span className="text-[10px] font-bold">2 Classes</span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isPhysicsExpandedInSubject ? 'rotate-180' : ''}`} />
                        </div>
                      </button>

                      {isPhysicsExpandedInSubject && (
                        <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-cyan-200 dark:border-cyan-800 ml-4 animate-in fade-in duration-150">
                          {([11, 12] as ClassLevel[]).map((lvl) => (
                            <button
                              key={lvl}
                              onClick={() => handleSubjectSelect('physics', 'Elementary Physics', lvl)}
                              className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between hover:bg-cyan-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-700 dark:text-slate-300"
                            >
                              <span className="font-semibold">Class {lvl} Physics</span>
                              <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-cyan-50 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 font-bold">
                                {physicsChapterCounts[lvl]} Ch
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* 4. PRE CALCULAS (Click to expand Class 11) */}
                    <div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsPreCalculasExpandedInSubject(!isPreCalculasExpandedInSubject);
                        }}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-between hover:bg-violet-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-800 dark:text-slate-100"
                      >
                        <span className="flex items-center gap-2 font-bold text-violet-700 dark:text-violet-300">
                          <span className="w-7 h-7 rounded-lg bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 flex items-center justify-center text-xs font-bold shrink-0">
                            <Calculator className="w-4 h-4" />
                          </span>
                          <span>Pre Calculas</span>
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                          <span className="text-[10px] font-bold">1 Class</span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isPreCalculasExpandedInSubject ? 'rotate-180' : ''}`} />
                        </div>
                      </button>

                      {isPreCalculasExpandedInSubject && (
                        <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-violet-200 dark:border-violet-800 ml-4 animate-in fade-in duration-150">
                          <button
                            onClick={() => handleSubjectSelect('precalculas', 'Pre Calculas', 11)}
                            className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between hover:bg-violet-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-700 dark:text-slate-300"
                          >
                            <span className="font-semibold">Class 11 Pre Calculas</span>
                            <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 font-bold">
                              {preCalculasChapterCounts[11]} Ch
                            </span>
                          </button>
                        </div>
                      )}
                    </div>

                  </div>

                </div>
              )}
            </div>

            {/* Content Dropdown Menu (Click to expand Mathematics / Physics) */}
            <div 
              className="relative"
              onMouseEnter={() => setContentDropdownOpen(true)}
              onMouseLeave={() => setContentDropdownOpen(false)}
            >
              <button
                id="nav-link-content"
                onClick={() => setContentDropdownOpen(!contentDropdownOpen)}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'dictionary'
                    ? 'text-white bg-white/15 shadow-xs'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
                aria-expanded={contentDropdownOpen}
              >
                <Layers className="w-4 h-4 text-slate-300" />
                <span>Content</span>
                <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${contentDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {contentDropdownOpen && (
                <div 
                  id="nav-content-dropdown-menu"
                  className="absolute left-0 mt-1 w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 space-y-1.5 p-2"
                >
                  {/* MATHEMATICS SECTION (Click to expand) */}
                  <div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMathExpandedInContent(!isMathExpandedInContent);
                      }}
                      className="w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-between hover:bg-indigo-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-800 dark:text-slate-100"
                    >
                      <span className="flex items-center gap-2 font-bold text-indigo-700 dark:text-indigo-300">
                        <span className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-xs font-bold shrink-0">
                          <Sigma className="w-4 h-4" />
                        </span>
                        <span>Mathematics</span>
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <span className="text-[10px] font-bold">4 Sections</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMathExpandedInContent ? 'rotate-180' : ''}`} />
                      </div>
                    </button>

                    {isMathExpandedInContent && (
                      <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-indigo-200 dark:border-indigo-800 ml-4 animate-in fade-in duration-150">
                        <button
                          onClick={() => handleContentSectionSelect('definitions', 'mathematics')}
                          className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-700 dark:text-slate-200"
                        >
                          <span className="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-xs">
                            <BookOpen className="w-3 h-3" />
                          </span>
                          <div>
                            <span className="font-bold block">Definitions</span>
                            <span className="text-[9px] text-slate-400">A–Z Terms &amp; Concepts</span>
                          </div>
                        </button>

                        <button
                          onClick={() => handleContentSectionSelect('theorems', 'mathematics')}
                          className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-700 dark:text-slate-200"
                        >
                          <span className="w-5 h-5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-xs">
                            <Compass className="w-3 h-3" />
                          </span>
                          <div>
                            <span className="font-bold block">Theorems</span>
                            <span className="text-[9px] text-slate-400">Formal Proofs &amp; Statements</span>
                          </div>
                        </button>

                        <button
                          onClick={() => handleContentSectionSelect('properties', 'mathematics')}
                          className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-700 dark:text-slate-200"
                        >
                          <span className="w-5 h-5 rounded-md bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center text-xs">
                            <Layers className="w-3 h-3" />
                          </span>
                          <div>
                            <span className="font-bold block">Properties</span>
                            <span className="text-[9px] text-slate-400">Mathematical Laws &amp; Axioms</span>
                          </div>
                        </button>

                        <button
                          onClick={() => handleContentSectionSelect('formulas', 'mathematics')}
                          className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-700 dark:text-slate-200"
                        >
                          <span className="w-5 h-5 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs">
                            <Calculator className="w-3 h-3" />
                          </span>
                          <div>
                            <span className="font-bold block">Formulas</span>
                            <span className="text-[9px] text-slate-400">Identities &amp; Cheat Sheets</span>
                          </div>
                        </button>

                        <button
                          onClick={() => handleContentSectionSelect('fractals', 'mathematics')}
                          className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-700 dark:text-slate-200"
                        >
                          <span className="w-5 h-5 rounded-md bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 flex items-center justify-center text-xs">
                            <Sparkles className="w-3 h-3" />
                          </span>
                          <div>
                            <span className="font-bold block">Fractals</span>
                            <span className="text-[9px] text-slate-400">Sierpinski &amp; Mandelbrot Set</span>
                          </div>
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-slate-100 dark:border-slate-800 my-1"></div>

                  {/* PHYSICS SECTION (Click to expand) */}
                  <div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsPhysicsExpandedInContent(!isPhysicsExpandedInContent);
                      }}
                      className="w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-between hover:bg-cyan-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-800 dark:text-slate-100"
                    >
                      <span className="flex items-center gap-2 font-bold text-cyan-700 dark:text-cyan-300">
                        <span className="w-7 h-7 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 flex items-center justify-center text-xs font-bold shrink-0">
                          <Atom className="w-4 h-4" />
                        </span>
                        <span>Physics</span>
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <span className="text-[10px] font-bold">3 Sections</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isPhysicsExpandedInContent ? 'rotate-180' : ''}`} />
                      </div>
                    </button>

                    {isPhysicsExpandedInContent && (
                      <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-cyan-200 dark:border-cyan-800 ml-4 animate-in fade-in duration-150">
                        <button
                          onClick={() => handleContentSectionSelect('definitions', 'physics')}
                          className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-700 dark:text-slate-200"
                        >
                          <span className="w-5 h-5 rounded-md bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 flex items-center justify-center text-xs">
                            <BookOpen className="w-3 h-3" />
                          </span>
                          <div>
                            <span className="font-bold block">Definitions</span>
                            <span className="text-[9px] text-slate-400">Physics Constants &amp; Terms</span>
                          </div>
                        </button>
                        <button
                          onClick={() => handleContentSectionSelect('properties', 'physics')}
                          className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-700 dark:text-slate-200"
                        >
                          <span className="w-5 h-5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 flex items-center justify-center text-xs">
                            <Layers className="w-3 h-3" />
                          </span>
                          <div>
                            <span className="font-bold block">Laws &amp; Principles</span>
                            <span className="text-[9px] text-slate-400">Conservation Laws</span>
                          </div>
                        </button>
                        <button
                          onClick={() => handleContentSectionSelect('formulas', 'physics')}
                          className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-700 dark:text-slate-200"
                        >
                          <span className="w-5 h-5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-xs">
                            <Calculator className="w-3 h-3" />
                          </span>
                          <div>
                            <span className="font-bold block">Formulas</span>
                            <span className="text-[9px] text-slate-400">Mechanics &amp; Electromagnetism</span>
                          </div>
                        </button>
                      </div>
                    )}
                  </div>

                </div>
              )}
            </div>

            {/* View Ranking Button */}
            {onOpenLeaderboard && (
              <button
                id="nav-link-leaderboard"
                onClick={() => onOpenLeaderboard(activeTrack)}
                className="px-4 py-1.5 rounded-full text-sm font-semibold text-amber-400 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/80 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                title="View Ranking & Track Records"
              >
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>View Ranking</span>
              </button>
            )}
          </div>

          {/* Right Actions: Settings Menu, etc. */}
          <div className="flex items-center gap-2">

            {/* Settings 3-Line Menu Dropdown */}
            <div className="relative">
              <button
                id="nav-settings-btn"
                onClick={() => setSettingsDropdownOpen(!settingsDropdownOpen)}
                className="p-2.5 rounded-xl text-white hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center"
                title="Menu"
                aria-label="Menu"
                aria-expanded={settingsDropdownOpen}
              >
                {/* 3 Line Clean White Icon */}
                <div className="flex flex-col justify-center gap-1.5 w-6 h-4">
                  <span className="block h-[2px] w-full rounded-full bg-white transition-colors" />
                  <span className="block h-[2px] w-full rounded-full bg-white transition-colors" />
                  <span className="block h-[2px] w-full rounded-full bg-white transition-colors" />
                </div>
              </button>

              {settingsDropdownOpen && (
                <>
                  {/* Backdrop for easy dismissal on click outside */}
                  <div 
                    className="fixed inset-0 z-40"
                    onClick={() => setSettingsDropdownOpen(false)}
                  />

                  {/* Settings Dropdown Card */}
                  <div
                    id="settings-dropdown-menu"
                    className="absolute right-0 mt-2 w-72 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 divide-y divide-slate-100 dark:divide-slate-800"
                  >
                    <div className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                      <span>Quick Settings</span>
                      <Settings className="w-3.5 h-3.5 text-slate-400" />
                    </div>

                    <div className="p-2 space-y-1">
                      {/* 1. Profile / Auth Button with Green (Stable) / Yellow (Unstable or Offline) Status */}
                      {currentUser || userProfile ? (
                        <button
                          id="settings-profile-btn"
                          onClick={() => {
                            setSettingsDropdownOpen(false);
                            if (onOpenProfile) onOpenProfile();
                          }}
                          className="w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2.5 hover:bg-indigo-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-800 dark:text-slate-100 group"
                        >
                          <div className="relative shrink-0">
                            <span className="w-8 h-8 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-xs font-bold group-hover:scale-105 transition-transform">
                              <User className="w-4 h-4" />
                            </span>
                            <span 
                              className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full ring-2 ring-white dark:ring-slate-900 transition-colors duration-300 ${indicatorDotClass}`} 
                              title={`Connection: ${statusLabel}`}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="font-bold block truncate text-xs sm:text-sm text-indigo-950 dark:text-indigo-200">
                              {userProfile?.displayName || currentUser?.email?.split('@')[0] || 'Profile'}
                            </span>
                            <span className="text-[10px] text-slate-400 block truncate flex items-center gap-1">
                              <span>View Profile &amp; Stats</span>
                              <span>•</span>
                              <span className={isConnectionStable ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : 'text-yellow-600 dark:text-yellow-400 font-semibold'}>
                                {statusLabel}
                              </span>
                            </span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                        </button>
                      ) : (
                        <button
                          id="settings-auth-btn"
                          onClick={() => {
                            setSettingsDropdownOpen(false);
                            if (onOpenAuth) onOpenAuth();
                          }}
                          className="w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2.5 hover:bg-indigo-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-800 dark:text-slate-100 group"
                        >
                          <div className="relative shrink-0">
                            <span className="w-8 h-8 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-xs font-bold group-hover:scale-105 transition-transform">
                              <LogIn className="w-4 h-4" />
                            </span>
                            <span 
                              className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full ring-2 ring-white dark:ring-slate-900 transition-colors duration-300 ${indicatorDotClass}`} 
                              title={`Connection: ${statusLabel}`}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="font-bold block text-xs sm:text-sm text-indigo-950 dark:text-indigo-200">
                              Sign In / Register
                            </span>
                            <span className="text-[10px] text-slate-400 block truncate">
                              Sync scores &amp; progress ({statusLabel})
                            </span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                        </button>
                      )}

                      {/* 2. Night / Day Mode Toggle Button */}
                      <button
                        id="settings-theme-toggle-btn"
                        onClick={() => {
                          toggleTheme();
                        }}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-800 dark:text-slate-100 group"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 transition-transform group-hover:scale-105 ${
                            isDarkMode 
                              ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-500' 
                              : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-600'
                          }`}>
                            {isDarkMode ? (
                              <Sun className="w-4 h-4 fill-amber-400/30" />
                            ) : (
                              <Moon className="w-4 h-4 fill-indigo-600/20" />
                            )}
                          </span>
                          <div>
                            <span className="font-bold block text-xs sm:text-sm">
                              {isDarkMode ? 'Day Mode' : 'Night Mode'}
                            </span>
                            <span className="text-[10px] text-slate-400 block">
                              {isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
                            </span>
                          </div>
                        </div>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                          isDarkMode 
                            ? 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800' 
                            : 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                        }`}>
                          {isDarkMode ? 'Night' : 'Day'}
                        </span>
                      </button>

                      {/* 3. About Developer Button */}
                      <button
                        id="settings-about-btn"
                        onClick={() => {
                          setSettingsDropdownOpen(false);
                          onNavigate('about');
                        }}
                        className={`w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2.5 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer group ${
                          activeTab === 'about'
                            ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-bold'
                            : 'text-slate-800 dark:text-slate-100'
                        }`}
                      >
                        <span className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs font-bold shrink-0 group-hover:scale-105 transition-transform">
                          <Info className="w-4 h-4 text-indigo-500" />
                        </span>
                        <div className="flex-1 min-w-0">
                          <span className="font-bold block text-xs sm:text-sm">
                            About Developer
                          </span>
                          <span className="text-[10px] text-slate-400 block">
                            Author &amp; philosophy
                          </span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Mobile menu toggle */}
            <div className="flex md:hidden items-center">
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-menu-panel" className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-4 max-h-[85vh] overflow-y-auto">
          {/* Top Quick Actions Grid */}
          <div className="grid grid-cols-2 gap-2">
            <button
              id="mobile-nav-profile-btn"
              onClick={() => {
                if (currentUser || userProfile) {
                  if (onOpenProfile) onOpenProfile();
                } else {
                  if (onOpenAuth) onOpenAuth();
                }
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <div className="relative shrink-0">
                <User className="w-3.5 h-3.5" />
                <span className={`absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full ring-1.5 ring-white dark:ring-slate-900 transition-colors duration-300 ${indicatorDotClass}`} />
              </div>
              <span className="truncate">{userProfile?.displayName || (currentUser ? 'Profile' : 'Sign In')}</span>
            </button>
            <button
              onClick={() => {
                toggleTheme();
              }}
              className="p-2.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-600" />}
              <span>{isDarkMode ? 'Day Mode' : 'Night Mode'}</span>
            </button>

            <button
              onClick={() => {
                handleContentSectionSelect('definitions');
              }}
              className={`p-2.5 rounded-xl text-xs font-bold cursor-pointer transition-colors flex items-center justify-center gap-1.5 ${
                activeTab === 'dictionary'
                  ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>Content Hub</span>
            </button>

            <button
              onClick={() => handlePhilosophySelect('mathematicians')}
              className={`p-2.5 rounded-xl text-xs font-bold cursor-pointer transition-colors flex items-center justify-center gap-1.5 ${
                activeTab === 'philosophy' && activePhilosopherType === 'mathematicians'
                  ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100'
              }`}
            >
              <Atom className="w-3.5 h-3.5 text-purple-500" />
              <span>Thinkers</span>
            </button>

            <button
              onClick={() => handlePhilosophySelect('physicists')}
              className={`p-2.5 rounded-xl text-xs font-bold cursor-pointer transition-colors flex items-center justify-center gap-1.5 ${
                activeTab === 'philosophy' && activePhilosopherType === 'physicists'
                  ? 'bg-cyan-50 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400'
                  : 'text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100'
              }`}
            >
              <Atom className="w-3.5 h-3.5 text-cyan-500" />
              <span>Physicists</span>
            </button>

            <button
              onClick={() => {
                onNavigate('about');
                setMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-xl text-xs font-bold cursor-pointer transition-colors flex items-center justify-center gap-1.5 ${
                activeTab === 'about'
                  ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />
              <span>About Developer</span>
            </button>

            {onOpenLeaderboard && (
              <button
                onClick={() => {
                  onOpenLeaderboard(activeTrack);
                  setMobileMenuOpen(false);
                }}
                className="p-2.5 rounded-xl text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-50/70 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-900/50 flex items-center gap-1.5 col-span-2 justify-center border border-amber-200/60 dark:border-amber-800/50 cursor-pointer"
              >
                <Trophy className="w-3.5 h-3.5 text-amber-500" />
                <span>View Ranking</span>
              </button>
            )}
          </div>

          {/* Academic Subjects & Tracks Selection */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-500" />
                <span>Subject Curriculums &amp; Tracks:</span>
              </p>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
                4 Tracks
              </span>
            </div>

            {/* 1. Mathematics */}
            <div className="rounded-xl border border-indigo-200/80 dark:border-indigo-900/50 bg-indigo-50/40 dark:bg-indigo-950/20 p-2.5 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-xs">
                    <Sigma className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-bold text-indigo-950 dark:text-indigo-200">Mathematics</span>
                </div>
                <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">Classes 9-12</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {([9, 10, 11, 12] as ClassLevel[]).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => handleClassSelect(lvl, 'Elementary Mathematics')}
                    className={`py-1.5 px-1 rounded-lg text-xs font-bold transition-all cursor-pointer text-center ${
                      activeTab === 'classes' && selectedClass === lvl && activeTrack === 'Elementary Mathematics'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-indigo-50'
                    }`}
                  >
                    <div>Class {lvl}</div>
                    <div className="text-[8px] opacity-70 font-normal">{mathChapterCounts[lvl]} Ch</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Chemistry */}
            <div className="rounded-xl border border-emerald-200/80 dark:border-emerald-900/50 bg-emerald-50/40 dark:bg-emerald-950/20 p-2.5 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-xs">
                    <FlaskConical className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-bold text-emerald-950 dark:text-emerald-200">Chemistry</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Classes 9, 10, 11 &amp; 12</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {([9, 10, 11, 12] as ClassLevel[]).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => handleClassSelect(lvl, 'Chemistry')}
                    className={`py-2 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer text-center ${
                      activeTab === 'classes' && selectedClass === lvl && activeTrack === 'Chemistry'
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-emerald-50'
                    }`}
                  >
                    Class {lvl} Chemistry ({chemistryChapterCounts[lvl]} Ch)
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Physics */}
            <div className="rounded-xl border border-cyan-200/80 dark:border-cyan-900/50 bg-cyan-50/40 dark:bg-cyan-950/20 p-2.5 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 flex items-center justify-center text-xs">
                    <Atom className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-bold text-cyan-950 dark:text-cyan-200">Physics</span>
                </div>
                <span className="text-[10px] font-bold text-cyan-600 dark:text-cyan-400">Classes 11 &amp; 12</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {([11, 12] as ClassLevel[]).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => handleSubjectSelect('physics', 'Elementary Physics', lvl)}
                    className={`py-2 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer text-center ${
                      activeTab === 'classes' && selectedClass === lvl && activeTrack === 'Elementary Physics'
                        ? 'bg-cyan-600 text-white shadow-sm'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-cyan-50'
                    }`}
                  >
                    Class {lvl} Physics ({physicsChapterCounts[lvl]} Ch)
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Pre Calculas */}
            <div className="rounded-xl border border-violet-200/80 dark:border-violet-900/50 bg-violet-50/40 dark:bg-violet-950/20 p-2.5 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 flex items-center justify-center text-xs">
                    <Calculator className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-bold text-violet-950 dark:text-violet-200">Pre Calculas</span>
                </div>
                <span className="text-[10px] font-bold text-violet-600 dark:text-violet-400">Class 11</span>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <button
                  onClick={() => handleSubjectSelect('precalculas', 'Pre Calculas', 11)}
                  className={`py-2 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer text-center ${
                    activeTab === 'classes' && selectedClass === 11 && activeTrack === 'Pre Calculas'
                      ? 'bg-violet-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-violet-50'
                  }`}
                >
                  Class 11 Pre Calculas ({preCalculasChapterCounts[11]} Ch)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
