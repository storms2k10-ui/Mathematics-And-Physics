import React, { useState, useMemo } from 'react';
import { 
  Search, 
  BookOpen, 
  ChevronDown, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  Maximize2, 
  Minimize2,
  FolderOpen,
  FileText,
  Layers,
  HelpCircle,
  GraduationCap,
  Calculator,
  Compass,
  Zap,
  ArrowRight,
  Atom,
  Sigma
} from 'lucide-react';
import { ALL_DEFINITIONS } from '../data/definitionsData';
import { ALL_THEOREMS } from '../data/theoremsData';
import { ALL_PROPERTIES } from '../data/propertiesData';
import { ALL_FORMULAS } from '../data/formulasData';
import { ClassLevel, MathDefinition, MathTheorem, MathProperty, MathFormulaItem } from '../types';
import { MathText } from './MathText';
import { DefinitionDiagram } from './DefinitionDiagram';
import { FractalShowcase } from './FractalShowcase';

export type ContentSection = 'definitions' | 'theorems' | 'properties' | 'formulas' | 'fractals';
export type ContentSubject = 'mathematics' | 'physics';

interface ContentViewProps {
  initialSection?: ContentSection;
  initialSubject?: ContentSubject;
  onSelectClass?: (classLevel: ClassLevel) => void;
  onStartChapterQuiz?: (chapterId: string, chapterTitle: string, classLevel: ClassLevel) => void;
}

export const ContentView: React.FC<ContentViewProps> = ({
  initialSection = 'definitions',
  initialSubject = 'mathematics',
  onSelectClass,
  onStartChapterQuiz,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<ContentSubject>(initialSubject);
  const [activeSection, setActiveSection] = useState<ContentSection>(initialSection);
  const [selectedClass, setSelectedClass] = useState<ClassLevel | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLetter, setSelectedLetter] = useState<string>('all');
  
  // Expanded IDs for accordion items in definitions, theorems, properties
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const alphabetList = useMemo(() => {
    return ['all', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];
  }, []);

  const getClassBadgeStyle = (cls: ClassLevel) => {
    switch (cls) {
      case 9:
        return 'bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300 border-blue-200/60 dark:border-blue-800';
      case 10:
        return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-800';
      case 11:
        return 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300 border-indigo-200/60 dark:border-indigo-800';
      case 12:
        return 'bg-purple-50 text-purple-700 dark:bg-purple-950/70 dark:text-purple-300 border-purple-200/60 dark:border-purple-800';
      default:
        return 'bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  // Extract unique categories for definitions
  const defCategories = useMemo(() => {
    const set = new Set<string>();
    ALL_DEFINITIONS.forEach((d) => set.add(d.category));
    return ['all', ...Array.from(set)];
  }, []);

  // Filtered & Alphabetically Sorted definitions (Note: Chapter references strictly removed as requested)
  const filteredDefinitions = useMemo(() => {
    const filtered = ALL_DEFINITIONS.filter((item) => {
      if (selectedClass !== 'all' && item.class !== selectedClass) return false;
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
      if (selectedLetter !== 'all') {
        const firstChar = item.term.trim().replace(/^[^a-zA-Z0-9]+/, '').charAt(0).toUpperCase();
        if (firstChar !== selectedLetter) return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTerm = item.term.toLowerCase().includes(q);
        const matchesDef = item.definition.toLowerCase().includes(q);
        const matchesCategory = item.category.toLowerCase().includes(q);
        const matchesFormula = item.formula ? item.formula.toLowerCase().includes(q) : false;
        return matchesTerm || matchesDef || matchesCategory || matchesFormula;
      }
      return true;
    });

    return filtered.sort((a, b) => a.term.localeCompare(b.term, undefined, { sensitivity: 'base' }));
  }, [selectedClass, selectedCategory, selectedLetter, searchQuery]);

  // Filtered Theorems
  const filteredTheorems = useMemo(() => {
    return ALL_THEOREMS.filter((thm) => {
      if (selectedClass !== 'all' && thm.class !== selectedClass) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          thm.title.toLowerCase().includes(q) ||
          thm.statement.toLowerCase().includes(q) ||
          thm.category.toLowerCase().includes(q) ||
          thm.formula.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedClass, searchQuery]);

  // Filtered Properties
  const filteredProperties = useMemo(() => {
    return ALL_PROPERTIES.filter((prop) => {
      if (selectedClass !== 'all' && prop.class !== selectedClass) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          prop.title.toLowerCase().includes(q) ||
          prop.description.toLowerCase().includes(q) ||
          prop.category.toLowerCase().includes(q) ||
          prop.rules.some((r) => r.label.toLowerCase().includes(q) || r.formula.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [selectedClass, searchQuery]);

  // Filtered Formulas
  const filteredFormulas = useMemo(() => {
    return ALL_FORMULAS.filter((f) => {
      if (selectedClass !== 'all' && f.class !== selectedClass) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          f.name.toLowerCase().includes(q) ||
          f.topic.toLowerCase().includes(q) ||
          f.category.toLowerCase().includes(q) ||
          f.formula.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedClass, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div id="mathematics-content-view" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 animate-fade-in">
      
      {/* 🌟 SUBJECT SWITCHER AT THE VERY TOP: MATHEMATICS, PHYSICS */}
      <div className="flex justify-center">
        <div className="p-1.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center gap-1.5 shadow-md max-w-md w-full">
          <button
            id="subject-btn-mathematics"
            onClick={() => setSelectedSubject('mathematics')}
            className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
              selectedSubject === 'mathematics'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800'
            }`}
          >
            <Sigma className="w-4 h-4" />
            <span>Mathematics</span>
          </button>

          <button
            id="subject-btn-physics"
            onClick={() => setSelectedSubject('physics')}
            className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
              selectedSubject === 'physics'
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800'
            }`}
          >
            <Atom className="w-4 h-4" />
            <span>Physics</span>
          </button>
        </div>
      </div>

      {/* NON-MATHEMATICS SUBJECT PLACEHOLDER (PHYSICS) */}
      {selectedSubject !== 'mathematics' && (
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-4 shadow-xl">
          <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
            <Atom className="w-8 h-8 text-cyan-500" />
          </div>
          <h2 className="text-xl sm:text-2xl font-black capitalize text-slate-900 dark:text-white">
            {selectedSubject} Content Section
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            The {selectedSubject} curriculum formulas, definitions, and theorems repository is currently under preparation. No content has been added to this section yet.
          </p>
          <button
            onClick={() => setSelectedSubject('mathematics')}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-md shadow-indigo-600/20 hover:bg-indigo-700 transition-all cursor-pointer"
          >
            Explore Mathematics Section
          </button>
        </div>
      )}

      {/* MATHEMATICS CONTENT SECTIONS (DEFINITIONS, THEOREMS, PROPERTIES, FORMULAS) */}
      {selectedSubject === 'mathematics' && (
        <>
          {/* Top Header Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden border border-slate-800 shadow-xl">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-xs font-black uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Mathematics Curriculum &amp; Reference Hub</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
                Mathematics Content
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Access comprehensive mathematical resources categorized into <strong className="text-indigo-200">Definitions</strong>, <strong className="text-indigo-200">Theorems</strong>, <strong className="text-indigo-200">Properties</strong>, and <strong className="text-indigo-200">Formulas</strong> with rigorous KaTeX equations and geometric diagrams.
              </p>

              {/* Top Main Section Switcher Buttons */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                <button
                  id="content-tab-definitions"
                  onClick={() => setActiveSection('definitions')}
                  className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    activeSection === 'definitions'
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'bg-white/10 hover:bg-white/20 text-slate-200'
                  }`}
                >
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  <span>Definitions ({ALL_DEFINITIONS.length})</span>
                </button>

                <button
                  id="content-tab-theorems"
                  onClick={() => setActiveSection('theorems')}
                  className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    activeSection === 'theorems'
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'bg-white/10 hover:bg-white/20 text-slate-200'
                  }`}
                >
                  <Compass className="w-4 h-4 text-indigo-400" />
                  <span>Theorems ({ALL_THEOREMS.length})</span>
                </button>

                <button
                  id="content-tab-properties"
                  onClick={() => setActiveSection('properties')}
                  className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    activeSection === 'properties'
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'bg-white/10 hover:bg-white/20 text-slate-200'
                  }`}
                >
                  <Layers className="w-4 h-4 text-purple-400" />
                  <span>Properties ({ALL_PROPERTIES.length})</span>
                </button>

                <button
                  id="content-tab-formulas"
                  onClick={() => setActiveSection('formulas')}
                  className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    activeSection === 'formulas'
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'bg-white/10 hover:bg-white/20 text-slate-200'
                  }`}
                >
                  <Calculator className="w-4 h-4 text-amber-400" />
                  <span>Formulas ({ALL_FORMULAS.length})</span>
                </button>

                <button
                  id="content-tab-fractals"
                  onClick={() => setActiveSection('fractals')}
                  className={`col-span-2 sm:col-span-1 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    activeSection === 'fractals'
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'bg-white/10 hover:bg-white/20 text-slate-200'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-rose-400" />
                  <span>Fractal Showcase</span>
                </button>
              </div>
            </div>
          </div>

      {/* SECTION: FRACTALS SHOWCASE */}
      {activeSection === 'fractals' && (
        <FractalShowcase />
      )}

      {/* SEARCH AND CLASS FILTER CONTROLS FOR DEFINITIONS, THEOREMS, PROPERTIES, FORMULAS */}
      {activeSection !== 'fractals' && (
      <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="content-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${activeSection}... (e.g. Subset, Super Set, Derivative, Integral, Matrix)`}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white placeholder:text-slate-400"
              />
            </div>

            {/* Class Filter Dropdown */}
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value === 'all' ? 'all' : (Number(e.target.value) as ClassLevel))}
              className="px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Classes (9, 10, 11, 12)</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
            </select>
          </div>

          {/* Definitions specific Alphabet A-Z bar */}
          {activeSection === 'definitions' && (
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-thin">
                <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider pr-1 shrink-0">
                  Alphabet:
                </span>
                {alphabetList.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => setSelectedLetter(letter)}
                    className={`px-2 py-1 rounded-lg text-xs font-bold shrink-0 transition-colors cursor-pointer ${
                      selectedLetter === letter
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {letter === 'all' ? 'All (A–Z)' : letter}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action header with Expand / Collapse */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <span>
                Showing{' '}
                <strong>
                  {activeSection === 'definitions' && filteredDefinitions.length}
                  {activeSection === 'theorems' && filteredTheorems.length}
                  {activeSection === 'properties' && filteredProperties.length}
                  {activeSection === 'formulas' && filteredFormulas.length}
                </strong>{' '}
                items
              </span>
              {(searchQuery || selectedClass !== 'all' || selectedLetter !== 'all') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedClass('all');
                    setSelectedLetter('all');
                    setSelectedCategory('all');
                  }}
                  className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline cursor-pointer"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: DEFINITIONS (All definitions with chapter references removed as requested) */}
      {activeSection === 'definitions' && (
        <div className="space-y-3">
          {filteredDefinitions.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 space-y-3">
              <BookOpen className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
                No definitions matched your search
              </h3>
              <p className="text-xs text-slate-500">
                Try searching for terms like &quot;Subset&quot;, &quot;Super Set&quot;, &quot;Power Set&quot;, &quot;Cartesian Product&quot;, or &quot;Cells&quot;.
              </p>
            </div>
          ) : (
            filteredDefinitions.map((item, index) => {
              const isExpanded = expandedIds.has(item.id);
              return (
                <div
                  key={item.id}
                  id={`def-accordion-item-${item.id}`}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs overflow-hidden transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-700"
                >
                  {/* Single Line Definition Header (Click to Open) */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(item.id)}
                    aria-expanded={isExpanded}
                    className="w-full text-left px-4 sm:px-5 py-3.5 flex items-center justify-between gap-3 cursor-pointer group hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <span className="text-[11px] font-mono font-semibold text-slate-400 shrink-0 w-6 text-right">
                        {index + 1}.
                      </span>
                      <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {item.term}
                      </span>
                    </div>

                    {/* Badges: Class & Category only (Chapter reference removed!) */}
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${getClassBadgeStyle(item.class)}`}>
                        Class {item.class}
                      </span>

                      <span className="hidden sm:inline-block text-[10px] font-medium text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                        {item.category}
                      </span>

                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-transform duration-200 ${
                        isExpanded 
                          ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300 rotate-180' 
                          : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </button>

                  {/* Expanded Detailed Definition */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-4 animate-in fade-in duration-150">
                      
                      {/* Definition Statement */}
                      <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                        <MathText text={item.definition} />
                      </div>

                      {/* Formula / Notation Box */}
                      {item.formula && (
                        <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-slate-800/80 border border-indigo-200/80 dark:border-indigo-900/50 space-y-1">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 block">
                            Mathematical Formulation:
                          </span>
                          <div className="text-sm sm:text-base font-serif text-slate-900 dark:text-indigo-100 overflow-x-auto py-1">
                            <MathText text={item.formula.startsWith('$') ? item.formula : `$${item.formula}$`} />
                          </div>
                        </div>
                      )}

                      {/* Geometric / Visual Diagram Tool */}
                      {item.diagramType && (
                        <div className="pt-1">
                          <DefinitionDiagram type={item.diagramType} title={item.term} />
                        </div>
                      )}

                      {/* Key Points & Properties */}
                      {item.keyPoints && item.keyPoints.length > 0 && (
                        <div className="space-y-1.5 pt-1">
                          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                            Key Axioms &amp; Properties:
                          </span>
                          <ul className="space-y-1.5">
                            {item.keyPoints.map((pt, idx) => (
                              <li key={idx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                <span className="font-sans">
                                  <MathText text={pt} />
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Example */}
                      {item.example && (
                        <div className="text-xs bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200/60 dark:border-slate-800 text-slate-600 dark:text-slate-300">
                          <strong className="text-slate-800 dark:text-slate-200">Example: </strong>
                          <MathText text={item.example} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}

      {/* SECTION 3: THEOREMS */}
      {activeSection === 'theorems' && (
        <div className="space-y-4">
          {filteredTheorems.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
              <Compass className="w-10 h-10 text-slate-400 mx-auto mb-2" />
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">No theorems matched</h3>
            </div>
          ) : (
            filteredTheorems.map((thm, index) => {
              const isExpanded = expandedIds.has(thm.id);
              return (
                <div 
                  key={thm.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleExpand(thm.id)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 cursor-pointer group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {index + 1}.
                      </span>
                      <span className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        {thm.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold border ${getClassBadgeStyle(thm.class)}`}>
                        Class {thm.class}
                      </span>
                      <span className="hidden sm:inline-block text-[10px] font-medium text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                        {thm.category}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-indigo-600' : ''}`} />
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800 space-y-4 animate-in fade-in">
                      {/* Statement */}
                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-slate-200">
                        <strong className="block text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Theorem Statement:</strong>
                        <MathText text={thm.statement} />
                      </div>

                      {/* Formula & Condition */}
                      <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-slate-800/80 border border-indigo-200/80 dark:border-indigo-900/50 space-y-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 block">
                          Mathematical Expression &amp; Conditions:
                        </span>
                        <div className="text-sm sm:text-base font-serif text-slate-900 dark:text-indigo-100 py-0.5">
                          <MathText text={`$${thm.formula}$`} />
                        </div>
                        {thm.condition && (
                          <div className="text-xs text-slate-600 dark:text-slate-400 pt-1 border-t border-indigo-200/50 dark:border-slate-700">
                            <strong>Conditions: </strong>
                            <MathText text={thm.condition} />
                          </div>
                        )}
                      </div>

                      {/* Visual Diagram if available */}
                      {thm.diagramType && (
                        <div className="pt-1">
                          <DefinitionDiagram type={thm.diagramType} title={thm.title} />
                        </div>
                      )}

                      {/* Proof Outline */}
                      {thm.proofOutline && thm.proofOutline.length > 0 && (
                        <div className="space-y-1.5">
                          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                            Logical Proof Steps:
                          </span>
                          <ol className="space-y-1.5 list-decimal list-inside text-xs text-slate-600 dark:text-slate-300">
                            {thm.proofOutline.map((step, idx) => (
                              <li key={idx} className="leading-relaxed">
                                <MathText text={step} />
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {/* Importance */}
                      {thm.importance && (
                        <div className="text-xs bg-amber-50/70 dark:bg-amber-950/30 p-3 rounded-xl border border-amber-200 dark:border-amber-900/50 text-amber-900 dark:text-amber-200">
                          <strong>Significance &amp; Applications: </strong>
                          <MathText text={thm.importance} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}

      {/* SECTION 4: PROPERTIES */}
      {activeSection === 'properties' && (
        <div className="space-y-4">
          {filteredProperties.map((prop) => {
            const isExpanded = expandedIds.has(prop.id);
            return (
              <div 
                key={prop.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleExpand(prop.id)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 cursor-pointer group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {prop.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">{prop.description}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold border ${getClassBadgeStyle(prop.class)}`}>
                      Class {prop.class}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-indigo-600' : ''}`} />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800 space-y-4 animate-in fade-in">
                    {/* Rules Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                            <th className="py-2.5 px-3 font-bold text-slate-700 dark:text-slate-300">Property Law</th>
                            <th className="py-2.5 px-3 font-bold text-slate-700 dark:text-slate-300">Formula / Identity</th>
                            <th className="py-2.5 px-3 font-bold text-slate-700 dark:text-slate-300">Meaning &amp; Note</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                          {prop.rules.map((rule, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                              <td className="py-2.5 px-3 font-bold text-indigo-600 dark:text-indigo-400">{rule.label}</td>
                              <td className="py-2.5 px-3 font-serif"><MathText text={`$${rule.formula}$`} /></td>
                              <td className="py-2.5 px-3 text-slate-600 dark:text-slate-400">{rule.note}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {prop.example && (
                      <div className="text-xs bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200/60 dark:border-slate-800 text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-800 dark:text-slate-200">Demonstration: </strong>
                        <MathText text={prop.example} />
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* SECTION 5: FORMULAS */}
      {activeSection === 'formulas' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredFormulas.map((form) => (
            <div 
              key={form.id}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 dark:text-white">
                  {form.name}
                </span>
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${getClassBadgeStyle(form.class)}`}>
                  Class {form.class}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-indigo-50/70 dark:bg-slate-800/80 border border-indigo-200/80 dark:border-indigo-900/50 font-serif text-sm sm:text-base text-indigo-950 dark:text-indigo-100 overflow-x-auto">
                <MathText text={`$${form.formula}$`} />
              </div>

              {form.variablesExplanation && (
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  <MathText text={form.variablesExplanation} />
                </p>
              )}

              {form.notes && (
                <div className="text-[11px] bg-slate-50 dark:bg-slate-800 p-2.5 rounded-lg text-slate-500 dark:text-slate-400">
                  <MathText text={form.notes} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
        </>
      )}

    </div>
  );
};
