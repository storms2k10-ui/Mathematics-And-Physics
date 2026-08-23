import React, { useState, useMemo } from 'react';
import { 
  Search, 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  ChevronRight, 
  Bookmark, 
  CheckCircle2, 
  Sparkles, 
  Filter,
  Maximize2,
  Minimize2,
  FolderOpen
} from 'lucide-react';
import { ALL_DEFINITIONS } from '../data/definitionsData';
import { ClassLevel, MathDefinition } from '../types';
import { MathText } from './MathText';
import { DefinitionDiagram } from './DefinitionDiagram';

interface DefinitionsDictionaryViewProps {
  onSelectClass: (classLevel: ClassLevel) => void;
  onStartChapterQuiz?: (chapterId: string, chapterTitle: string, classLevel: ClassLevel) => void;
}

export const DefinitionsDictionaryView: React.FC<DefinitionsDictionaryViewProps> = ({
  onSelectClass,
  onStartChapterQuiz,
}) => {
  const [selectedClass, setSelectedClass] = useState<ClassLevel | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [selectedLetter, setSelectedLetter] = useState<string>('all');
  
  // Set of opened/expanded definition IDs
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

  // Extract unique categories and chapters
  const categories = useMemo(() => {
    const set = new Set<string>();
    ALL_DEFINITIONS.forEach((d) => set.add(d.category));
    return ['all', ...Array.from(set)];
  }, []);

  const chapters = useMemo(() => {
    const list: { id: string; name: string; class: ClassLevel }[] = [];
    const seen = new Set<string>();
    ALL_DEFINITIONS.forEach((d) => {
      if (!seen.has(d.chapterId)) {
        seen.add(d.chapterId);
        list.push({ id: d.chapterId, name: d.chapterName, class: d.class });
      }
    });
    return list;
  }, []);

  // Filtered & Alphabetically Sorted definitions
  const filteredDefinitions = useMemo(() => {
    const filtered = ALL_DEFINITIONS.filter((item) => {
      // Class filter
      if (selectedClass !== 'all' && item.class !== selectedClass) return false;
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
      // Chapter filter
      if (selectedChapter !== 'all' && item.chapterId !== selectedChapter) return false;
      // Letter filter (A-Z)
      if (selectedLetter !== 'all') {
        const firstChar = item.term.trim().replace(/^[^a-zA-Z0-9]+/, '').charAt(0).toUpperCase();
        if (firstChar !== selectedLetter) return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTerm = item.term.toLowerCase().includes(q);
        const matchesDef = item.definition.toLowerCase().includes(q);
        const matchesChapter = item.chapterName.toLowerCase().includes(q);
        const matchesCategory = item.category.toLowerCase().includes(q);
        const matchesFormula = item.formula ? item.formula.toLowerCase().includes(q) : false;
        return matchesTerm || matchesDef || matchesChapter || matchesCategory || matchesFormula;
      }
      return true;
    });

    // Sort in strict alphabetical order by term (A-Z)
    return filtered.sort((a, b) => a.term.localeCompare(b.term, undefined, { sensitivity: 'base' }));
  }, [selectedClass, selectedCategory, selectedChapter, selectedLetter, searchQuery]);

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

  const handleExpandAll = () => {
    const allIds = new Set(filteredDefinitions.map((d) => d.id));
    setExpandedIds(allIds);
  };

  const handleCollapseAll = () => {
    setExpandedIds(new Set());
  };

  return (
    <div id="definitions-dictionary-view" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6 animate-fade-in">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden border border-slate-800 shadow-xl">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-xs font-black uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Mathematical Reference Dictionary</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-sans">
            Mathematics Definitions &amp; Formulas
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            Browse concise, one-line mathematical terms. Click any definition to expand its rigorous formulation, LaTeX identities, key properties, and geometric illustrations.
          </p>

          {/* Quick Class Selector Tabs */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <button
              onClick={() => { setSelectedClass('all'); setSelectedChapter('all'); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedClass === 'all'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-white/10 hover:bg-white/20 text-slate-200'
              }`}
            >
              All Classes ({ALL_DEFINITIONS.length})
            </button>
            <button
              onClick={() => { setSelectedClass(9); setSelectedChapter('all'); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedClass === 9
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-white/10 hover:bg-white/20 text-slate-200'
              }`}
            >
              Class 9 ({ALL_DEFINITIONS.filter(d => d.class === 9).length})
            </button>
            <button
              onClick={() => { setSelectedClass(10); setSelectedChapter('all'); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedClass === 10
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'bg-white/10 hover:bg-white/20 text-slate-200'
              }`}
            >
              Class 10 ({ALL_DEFINITIONS.filter(d => d.class === 10).length})
            </button>
            <button
              onClick={() => { setSelectedClass(11); setSelectedChapter('all'); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedClass === 11
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-white/10 hover:bg-white/20 text-slate-200'
              }`}
            >
              Class 11 ({ALL_DEFINITIONS.filter(d => d.class === 11).length})
            </button>
            <button
              onClick={() => { setSelectedClass(12); setSelectedChapter('all'); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedClass === 12
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'bg-white/10 hover:bg-white/20 text-slate-200'
              }`}
            >
              Class 12 ({ALL_DEFINITIONS.filter(d => d.class === 12).length})
            </button>
          </div>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search definitions by name, formula, or keyword (e.g., Matrix, Modulus, Radicand)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-sans"
            />
          </div>

          {/* Chapter Filter */}
          <select
            value={selectedChapter}
            onChange={(e) => setSelectedChapter(e.target.value)}
            className="w-full sm:w-60 px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-sans"
          >
            <option value="all">All Chapters</option>
            {chapters
              .filter(c => selectedClass === 'all' || c.class === selectedClass)
              .map((c) => (
                <option key={c.id} value={c.id}>
                  Class {c.class} — {c.name}
                </option>
              ))}
          </select>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full sm:w-48 px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-sans"
          >
            <option value="all">All Categories</option>
            {categories.filter(c => c !== 'all').map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Alphabetical A-Z Filter Bar */}
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

        {/* Status Count & Expand / Collapse Controls */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <span>
              Showing <strong>{filteredDefinitions.length}</strong> definitions (Sorted A–Z)
            </span>
            {(searchQuery || selectedChapter !== 'all' || selectedCategory !== 'all' || selectedClass !== 'all' || selectedLetter !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedChapter('all');
                  setSelectedCategory('all');
                  setSelectedClass('all');
                  setSelectedLetter('all');
                }}
                className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExpandAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold cursor-pointer transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Expand All</span>
            </button>
            <button
              onClick={handleCollapseAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold cursor-pointer transition-colors"
            >
              <Minimize2 className="w-3.5 h-3.5" />
              <span>Collapse All</span>
            </button>
          </div>
        </div>
      </div>

      {/* One-Line Definition List (Accordion Style) */}
      {filteredDefinitions.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 space-y-3">
          <BookOpen className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
            No definitions matched your search
          </h3>
          <p className="text-xs text-slate-500">
            Try searching for another term like &quot;Complex Number&quot;, &quot;Determinant&quot;, &quot;Logarithm&quot;, or &quot;Rational Number&quot;.
          </p>
        </div>
      ) : (
        <div className="space-y-2.5">
          {filteredDefinitions.map((item, index) => {
            const isExpanded = expandedIds.has(item.id);
            return (
              <div
                key={item.id}
                id={`def-accordion-item-${item.id}`}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs overflow-hidden transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-700"
              >
                {/* One-Line Definition Header (Click to Open) */}
                <button
                  type="button"
                  onClick={() => toggleExpand(item.id)}
                  aria-expanded={isExpanded}
                  className="w-full text-left px-4 sm:px-5 py-3.5 flex items-center justify-between gap-3 cursor-pointer group hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    {/* Index Number */}
                    <span className="text-[11px] font-mono font-semibold text-slate-400 shrink-0 w-6 text-right">
                      {index + 1}.
                    </span>

                    {/* Single Line Definition Name */}
                    <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {item.term}
                    </span>
                  </div>

                  {/* Badges and Toggle Indicator */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${getClassBadgeStyle(item.class)}`}>
                      Class {item.class}
                    </span>

                    <span className="hidden md:inline-block text-[10px] font-medium text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
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

                {/* Expanded Detailed Definition View */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-4 animate-in fade-in duration-150">
                    
                    {/* Mobile Badges (visible on smaller screens) */}
                    <div className="flex sm:hidden flex-wrap items-center gap-2 pt-1">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${getClassBadgeStyle(item.class)}`}>
                        Class {item.class}
                      </span>
                      <span className="text-[10px] font-medium text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                    </div>

                    {/* Definition Body Text */}
                    <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                      <MathText text={item.definition} />
                    </div>

                    {/* Formula Highlight Box */}
                    {item.formula && (
                      <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-slate-800/80 border border-indigo-200/80 dark:border-indigo-900/50 space-y-1">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 block">
                          Mathematical Expression / Identity:
                        </span>
                        <div className="text-sm sm:text-base font-serif text-slate-900 dark:text-indigo-100 overflow-x-auto py-1">
                          <MathText text={item.formula.startsWith('$') ? item.formula : `$${item.formula}$`} />
                        </div>
                      </div>
                    )}

                    {/* Visual Diagram / Graph Figure (White Background) */}
                    {item.diagramType && (
                      <div className="pt-1">
                        <DefinitionDiagram type={item.diagramType} title={item.term} />
                      </div>
                    )}

                    {/* Key Properties / Axioms List */}
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

                    {/* Action link */}
                    <div className="pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                      <button
                        onClick={() => onSelectClass(item.class)}
                        className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 flex items-center gap-1 cursor-pointer"
                      >
                        <FolderOpen className="w-3.5 h-3.5" />
                        <span>Go to Class {item.class} Chapters</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
