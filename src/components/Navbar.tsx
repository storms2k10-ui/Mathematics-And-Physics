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
  Settings
} from 'lucide-react';
import { ClassLevel } from '../types';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { ContentSection, ContentSubject } from './ContentView';
import { ALL_CHAPTERS } from '../data/chaptersData';

export type NavTab = 'home' | 'philosophy' | 'classes' | 'dictionary' | 'about' | 'physics';

interface NavbarProps {
  activeTab: NavTab;
  selectedClass: ClassLevel | null;
  activeContentSection?: ContentSection;
  activePhilosopherType?: 'mathematicians' | 'physicists';
  activeTrack?: 'Elementary Mathematics' | 'Advanced Mathematics' | 'Elementary Physics' | 'Advanced Physics';
  onNavigate: (tab: NavTab, classLevel?: ClassLevel, track?: 'Elementary Mathematics' | 'Advanced Mathematics' | 'Elementary Physics' | 'Advanced Physics') => void;
  onNavigateContentSection?: (section: ContentSection, subject?: ContentSubject) => void;
  onSelectPhilosopherType?: (type: 'mathematicians' | 'physicists') => void;
  onOpenLeaderboard?: (track?: 'Elementary Mathematics' | 'Advanced Mathematics' | 'Elementary Physics' | 'Advanced Physics') => void;
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
  const [isAdvMathExpandedInSubject, setIsAdvMathExpandedInSubject] = useState(false);
  const [isPhysicsExpandedInSubject, setIsPhysicsExpandedInSubject] = useState(false);
  const [isAdvPhysicsExpandedInSubject, setIsAdvPhysicsExpandedInSubject] = useState(false);

  const [isMathExpandedInContent, setIsMathExpandedInContent] = useState(false);
  const [isPhysicsExpandedInContent, setIsPhysicsExpandedInContent] = useState(false);

  const { isDarkMode, toggleTheme } = useTheme();
  const { currentUser, userProfile } = useAuth();

  // Dynamic Chapter Auto-Counting per Class
  const chapterCounts = useMemo(() => {
    return {
      9: ALL_CHAPTERS.filter((c) => c.class === 9).length,
      10: ALL_CHAPTERS.filter((c) => c.class === 10).length,
      11: ALL_CHAPTERS.filter((c) => c.class === 11).length,
      12: ALL_CHAPTERS.filter((c) => c.class === 12).length,
    };
  }, []);

  const handleClassSelect = (lvl: ClassLevel, track: 'Elementary Mathematics' | 'Advanced Mathematics' = 'Elementary Mathematics') => {
    onNavigate('classes', lvl, track);
    setSubjectDropdownOpen(false);
    setContentDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleSubjectSelect = (subject: 'physics', track: 'Elementary Physics' | 'Advanced Physics' = 'Elementary Physics', lvl?: ClassLevel) => {
    onNavigate(subject, lvl, track);
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
    <nav id="main-navbar" className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Left Side: Brand Logo */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Brand Logo */}
            <button
              id="nav-logo-btn"
              onClick={() => onNavigate('home')}
              className="flex items-center group focus:outline-none cursor-pointer shrink-0"
              title="MATHEMATICS & PHYSICS"
              aria-label="Home - Mathematics & Physics"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white flex items-center justify-center shadow-md shadow-indigo-600/30 group-hover:scale-105 group-hover:shadow-indigo-600/40 transition-all border border-indigo-400/30">
                <Sigma className="w-5 h-5 stroke-[2.5]" />
              </div>
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
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                aria-expanded={philosophyDropdownOpen}
              >
                <Brain className="w-4 h-4 text-indigo-500" />
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
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Subject</span>
                <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform ${subjectDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {subjectDropdownOpen && (
                <div
                  className="absolute left-0 mt-1 w-84 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 max-h-[85vh] overflow-y-auto"
                >
                  <div className="px-4 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span>Academic Tracks</span>
                    <span>Mathematics &amp; Physics</span>
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
                          <span>Elementary Mathematics</span>
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
                                {chapterCounts[lvl]} Ch
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* 2. ADVANCED MATHEMATICS (Click to expand Class 11 & Class 12) */}
                    <div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsAdvMathExpandedInSubject(!isAdvMathExpandedInSubject);
                        }}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-between hover:bg-purple-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-800 dark:text-slate-100"
                      >
                        <span className="flex items-center gap-2 font-bold text-purple-700 dark:text-purple-300">
                          <span className="w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center text-xs font-bold shrink-0">
                            <Sparkles className="w-4 h-4" />
                          </span>
                          <span>Advanced Mathematics</span>
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                          <span className="text-[10px] font-bold">2 Classes</span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isAdvMathExpandedInSubject ? 'rotate-180' : ''}`} />
                        </div>
                      </button>

                      {isAdvMathExpandedInSubject && (
                        <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-purple-200 dark:border-purple-800 ml-4 animate-in fade-in duration-150">
                          <button
                            onClick={() => handleClassSelect(11, 'Advanced Mathematics')}
                            className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between hover:bg-purple-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-700 dark:text-slate-300"
                          >
                            <span className="font-semibold">Class 11 Advanced Mathematics</span>
                            <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-bold">
                              Advanced
                            </span>
                          </button>
                          <button
                            onClick={() => handleClassSelect(12, 'Advanced Mathematics')}
                            className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between hover:bg-purple-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-700 dark:text-slate-300"
                          >
                            <span className="font-semibold">Class 12 Advanced Mathematics</span>
                            <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-bold">
                              Advanced
                            </span>
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="border-t border-slate-100 dark:border-slate-800 my-1"></div>

                    {/* 3. ELEMENTARY PHYSICS (Click to expand 4 classes) */}
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
                          <span>Elementary Physics</span>
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                          <span className="text-[10px] font-bold">4 Classes</span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isPhysicsExpandedInSubject ? 'rotate-180' : ''}`} />
                        </div>
                      </button>

                      {isPhysicsExpandedInSubject && (
                        <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-cyan-200 dark:border-cyan-800 ml-4 animate-in fade-in duration-150">
                          {([9, 10, 11, 12] as ClassLevel[]).map((lvl) => (
                            <button
                              key={lvl}
                              onClick={() => handleSubjectSelect('physics', 'Elementary Physics', lvl)}
                              className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between hover:bg-cyan-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-700 dark:text-slate-300"
                            >
                              <span className="font-semibold">Class {lvl} Physics</span>
                              <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-cyan-50 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 font-bold">
                                Physics
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* 4. ADVANCED PHYSICS (Click to expand Class 11 & 12) */}
                    <div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsAdvPhysicsExpandedInSubject(!isAdvPhysicsExpandedInSubject);
                        }}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-between hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-800 dark:text-slate-100"
                      >
                        <span className="flex items-center gap-2 font-bold text-blue-700 dark:text-blue-300">
                          <span className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 flex items-center justify-center text-xs font-bold shrink-0">
                            <Zap className="w-4 h-4" />
                          </span>
                          <span>Advanced Physics</span>
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                          <span className="text-[10px] font-bold">2 Classes</span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isAdvPhysicsExpandedInSubject ? 'rotate-180' : ''}`} />
                        </div>
                      </button>

                      {isAdvPhysicsExpandedInSubject && (
                        <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-blue-200 dark:border-blue-800 ml-4 animate-in fade-in duration-150">
                          <button
                            onClick={() => handleSubjectSelect('physics', 'Advanced Physics', 11)}
                            className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-700 dark:text-slate-300"
                          >
                            <span className="font-semibold">Class 11 Advanced Physics</span>
                            <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">
                              Advanced
                            </span>
                          </button>
                          <button
                            onClick={() => handleSubjectSelect('physics', 'Advanced Physics', 12)}
                            className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-700 dark:text-slate-300"
                          >
                            <span className="font-semibold">Class 12 Advanced Physics</span>
                            <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">
                              Advanced
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
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                aria-expanded={contentDropdownOpen}
              >
                <Library className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Content</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${contentDropdownOpen ? 'rotate-180 text-indigo-600' : ''}`} />
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

            {/* Academic Ranking Button */}
            {onOpenLeaderboard && (
              <button
                id="nav-link-leaderboard"
                onClick={() => onOpenLeaderboard(activeTrack)}
                className="px-3 py-2 rounded-xl text-xs font-bold text-amber-700 dark:text-amber-300 hover:text-amber-800 dark:hover:text-amber-200 bg-amber-50/80 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-all flex items-center gap-1.5 border border-amber-200/80 dark:border-amber-700/50 shadow-2xs cursor-pointer"
                title="View Academic Rankings & Track Records"
              >
                <Trophy className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />
                <span>Academic Ranking</span>
              </button>
            )}
          </div>

          {/* Right Actions: Settings 3-Line Button with Profile, Night/Day, and About Me */}
          <div className="flex items-center gap-2">
            
            {/* Settings 3-Line Menu Dropdown */}
            <div className="relative">
              <button
                id="nav-settings-btn"
                onClick={() => setSettingsDropdownOpen(!settingsDropdownOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer shadow-xs ${
                  settingsDropdownOpen
                    ? 'bg-indigo-600 text-white border-indigo-600 dark:bg-indigo-600 dark:border-indigo-500 shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
                title="Settings: Profile, Theme, About"
                aria-label="Settings Menu"
                aria-expanded={settingsDropdownOpen}
              >
                {/* 3 Line Icon */}
                <div className="flex flex-col justify-center gap-[3px] w-4 h-3.5">
                  <span className={`block h-[2px] w-full rounded-full transition-colors ${settingsDropdownOpen ? 'bg-white' : 'bg-current'}`} />
                  <span className={`block h-[2px] w-full rounded-full transition-colors ${settingsDropdownOpen ? 'bg-white' : 'bg-current'}`} />
                  <span className={`block h-[2px] w-full rounded-full transition-colors ${settingsDropdownOpen ? 'bg-white' : 'bg-current'}`} />
                </div>
                <span className="hidden sm:inline">Settings</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${settingsDropdownOpen ? 'rotate-180' : ''}`} />
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
                    className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 divide-y divide-slate-100 dark:divide-slate-800"
                  >
                    <div className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                      <span>Quick Settings</span>
                      <Settings className="w-3.5 h-3.5 text-slate-400" />
                    </div>

                    <div className="p-2 space-y-1">
                      {/* 1. Profile / Auth Button */}
                      {currentUser || userProfile ? (
                        <button
                          id="settings-profile-btn"
                          onClick={() => {
                            setSettingsDropdownOpen(false);
                            if (onOpenProfile) onOpenProfile();
                          }}
                          className="w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2.5 hover:bg-indigo-50 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-800 dark:text-slate-100 group"
                        >
                          <span className="w-8 h-8 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-xs font-bold shrink-0 group-hover:scale-105 transition-transform">
                            <User className="w-4 h-4" />
                          </span>
                          <div className="flex-1 min-w-0">
                            <span className="font-bold block truncate text-xs sm:text-sm text-indigo-950 dark:text-indigo-200">
                              {userProfile?.displayName || currentUser?.email?.split('@')[0] || 'Profile'}
                            </span>
                            <span className="text-[10px] text-slate-400 block truncate">
                              View Profile &amp; Stats
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
                          <span className="w-8 h-8 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-xs font-bold shrink-0 group-hover:scale-105 transition-transform">
                            <LogIn className="w-4 h-4" />
                          </span>
                          <div className="flex-1 min-w-0">
                            <span className="font-bold block text-xs sm:text-sm text-indigo-950 dark:text-indigo-200">
                              Sign In / Register
                            </span>
                            <span className="text-[10px] text-slate-400 block">
                              Sync scores &amp; progress
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

                      {/* 3. About Me Button */}
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
                            About Me
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
        <div id="mobile-menu-panel" className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-5 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                if (currentUser || userProfile) {
                  if (onOpenProfile) onOpenProfile();
                } else {
                  if (onOpenAuth) onOpenAuth();
                }
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 flex items-center justify-center gap-1.5"
            >
              <User className="w-3.5 h-3.5" />
              <span className="truncate">{userProfile?.displayName || (currentUser ? 'Profile' : 'Sign In')}</span>
            </button>
            <button
              onClick={() => {
                toggleTheme();
              }}
              className="p-2.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center gap-1.5"
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-600" />}
              <span>{isDarkMode ? 'Day Mode' : 'Night Mode'}</span>
            </button>
            <button
              onClick={() => handlePhilosophySelect('mathematicians')}
              className={`p-2.5 rounded-xl text-xs font-bold ${
                activeTab === 'philosophy' && activePhilosopherType === 'mathematicians'
                  ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Mathematicians
            </button>
            <button
              onClick={() => handlePhilosophySelect('physicists')}
              className={`p-2.5 rounded-xl text-xs font-bold ${
                activeTab === 'philosophy' && activePhilosopherType === 'physicists'
                  ? 'bg-cyan-50 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Physicists
            </button>
            <button
              onClick={() => {
                handleContentSectionSelect('definitions');
              }}
              className={`p-2.5 rounded-xl text-xs font-bold ${
                activeTab === 'dictionary'
                  ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Content Hub
            </button>
            <button
              onClick={() => {
                onNavigate('about');
                setMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-xl text-xs font-bold ${
                activeTab === 'about'
                  ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              About Me
            </button>
            {onOpenLeaderboard && (
              <button
                onClick={() => {
                  onOpenLeaderboard(activeTrack);
                  setMobileMenuOpen(false);
                }}
                className="p-2.5 rounded-xl text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-50/60 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-900/50 flex items-center gap-1.5 col-span-2 justify-center"
              >
                <Trophy className="w-3.5 h-3.5 text-amber-500" />
                <span>Academic Ranking</span>
              </button>
            )}
          </div>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Select Mathematics Class:
            </p>
            <div className="grid grid-cols-4 gap-2">
              {([9, 10, 11, 12] as ClassLevel[]).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => handleClassSelect(lvl)}
                  className={`p-2 rounded-xl text-xs font-bold text-center border transition-all cursor-pointer ${
                    activeTab === 'classes' && selectedClass === lvl
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300'
                      : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <div>Class {lvl}</div>
                  <div className="text-[9px] text-slate-400 font-normal mt-0.5">{chapterCounts[lvl]} Ch.</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
