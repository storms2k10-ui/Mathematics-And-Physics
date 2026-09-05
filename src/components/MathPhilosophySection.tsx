import React, { useState, useMemo, useEffect } from 'react';
import { 
  Quote, 
  Sparkles, 
  Search, 
  ChevronRight, 
  BookOpen, 
  Lightbulb, 
  Compass, 
  X, 
  Award, 
  Globe, 
  ExternalLink,
  Flame,
  Atom,
  Brain,
  Layers,
  Sigma,
  Zap,
  Home,
  ArrowLeft,
  Filter
} from 'lucide-react';
import { MATHEMATICIANS, Mathematician } from '../data/mathematiciansData';
import { MathText } from './MathText';

interface MathPhilosophySectionProps {
  onExploreMathematician?: (mathematician: Mathematician) => void;
  initialTab?: 'physicists' | 'mathematicians';
  onBackToHome?: () => void;
}

const FIELD_THEMES: Record<string, {
  badge: string;
  glow: string;
  borderHover: string;
  accent: string;
  lightGlow: string;
  btnGrad: string;
  formulaBg: string;
}> = {
  'Theoretical Physics': {
    badge: 'bg-cyan-50 text-cyan-900 border-cyan-300 dark:bg-cyan-950/80 dark:text-cyan-300 dark:border-cyan-500/40',
    glow: 'from-cyan-500/10 via-blue-500/5 to-indigo-500/10 dark:from-cyan-500/20 dark:via-blue-500/10 dark:to-indigo-500/20',
    borderHover: 'hover:border-cyan-400 dark:hover:border-cyan-400/80 hover:shadow-cyan-500/10 dark:hover:shadow-cyan-950/80',
    accent: 'text-cyan-600 dark:text-cyan-400',
    lightGlow: 'shadow-[0_0_15px_rgba(6,182,212,0.35)]',
    btnGrad: 'from-cyan-600 to-blue-600',
    formulaBg: 'bg-cyan-50/90 border-cyan-200 text-cyan-950 dark:bg-cyan-950/50 dark:border-cyan-500/40 dark:text-cyan-200',
  },
  'Calculus & Analysis': {
    badge: 'bg-blue-50 text-blue-900 border-blue-300 dark:bg-blue-950/80 dark:text-blue-300 dark:border-blue-500/40',
    glow: 'from-blue-500/10 via-indigo-500/5 to-cyan-500/10 dark:from-blue-500/20 dark:via-indigo-500/10 dark:to-cyan-500/20',
    borderHover: 'hover:border-blue-400 dark:hover:border-blue-400/80 hover:shadow-blue-500/10 dark:hover:shadow-blue-950/80',
    accent: 'text-blue-600 dark:text-blue-400',
    lightGlow: 'shadow-[0_0_15px_rgba(59,130,246,0.35)]',
    btnGrad: 'from-blue-600 to-indigo-600',
    formulaBg: 'bg-blue-50/90 border-blue-200 text-blue-950 dark:bg-blue-950/50 dark:border-blue-500/40 dark:text-blue-200',
  },
  'Algebra & Number Theory': {
    badge: 'bg-amber-50 text-amber-900 border-amber-300 dark:bg-amber-950/80 dark:text-amber-300 dark:border-amber-500/40',
    glow: 'from-amber-500/10 via-orange-500/5 to-yellow-500/10 dark:from-amber-500/20 dark:via-orange-500/10 dark:to-yellow-500/20',
    borderHover: 'hover:border-amber-400 dark:hover:border-amber-400/80 hover:shadow-amber-500/10 dark:hover:shadow-amber-950/80',
    accent: 'text-amber-600 dark:text-amber-400',
    lightGlow: 'shadow-[0_0_15px_rgba(245,158,11,0.35)]',
    btnGrad: 'from-amber-600 to-orange-600',
    formulaBg: 'bg-amber-50/90 border-amber-200 text-amber-950 dark:bg-amber-950/50 dark:border-amber-500/40 dark:text-amber-200',
  },
  'Geometry & Topology': {
    badge: 'bg-emerald-50 text-emerald-900 border-emerald-300 dark:bg-emerald-950/80 dark:text-emerald-300 dark:border-emerald-500/40',
    glow: 'from-emerald-500/10 via-teal-500/5 to-green-500/10 dark:from-emerald-500/20 dark:via-teal-500/10 dark:to-green-500/20',
    borderHover: 'hover:border-emerald-400 dark:hover:border-emerald-400/80 hover:shadow-emerald-500/10 dark:hover:shadow-emerald-950/80',
    accent: 'text-emerald-600 dark:text-emerald-400',
    lightGlow: 'shadow-[0_0_15px_rgba(16,185,129,0.35)]',
    btnGrad: 'from-emerald-600 to-teal-600',
    formulaBg: 'bg-emerald-50/90 border-emerald-200 text-emerald-950 dark:bg-emerald-950/50 dark:border-emerald-500/40 dark:text-emerald-200',
  },
  'Pure Mathematics': {
    badge: 'bg-rose-50 text-rose-900 border-rose-300 dark:bg-rose-950/80 dark:text-rose-300 dark:border-rose-500/40',
    glow: 'from-rose-500/10 via-pink-500/5 to-purple-500/10 dark:from-rose-500/20 dark:via-pink-500/10 dark:to-purple-500/20',
    borderHover: 'hover:border-rose-400 dark:hover:border-rose-400/80 hover:shadow-rose-500/10 dark:hover:shadow-rose-950/80',
    accent: 'text-rose-600 dark:text-rose-400',
    lightGlow: 'shadow-[0_0_15px_rgba(244,63,94,0.35)]',
    btnGrad: 'from-rose-600 to-pink-600',
    formulaBg: 'bg-rose-50/90 border-rose-200 text-rose-950 dark:bg-rose-950/50 dark:border-rose-500/40 dark:text-rose-200',
  },
  'Ancient Pioneers': {
    badge: 'bg-yellow-50 text-yellow-900 border-yellow-300 dark:bg-yellow-950/80 dark:text-yellow-300 dark:border-yellow-500/40',
    glow: 'from-yellow-500/10 via-amber-500/5 to-orange-500/10 dark:from-yellow-500/20 dark:via-amber-500/10 dark:to-orange-500/20',
    borderHover: 'hover:border-yellow-400 dark:hover:border-yellow-400/80 hover:shadow-yellow-500/10 dark:hover:shadow-yellow-950/80',
    accent: 'text-yellow-600 dark:text-yellow-400',
    lightGlow: 'shadow-[0_0_15px_rgba(234,179,8,0.35)]',
    btnGrad: 'from-yellow-600 to-amber-600',
    formulaBg: 'bg-yellow-50/90 border-yellow-200 text-yellow-950 dark:bg-yellow-950/50 dark:border-yellow-500/40 dark:text-yellow-200',
  },
};

export const MathPhilosophySection: React.FC<MathPhilosophySectionProps> = ({ 
  initialTab = 'mathematicians',
  onBackToHome
}) => {
  const [selectedMathematician, setSelectedMathematician] = useState<Mathematician | null>(null);
  const [activeMainSection, setActiveMainSection] = useState<'mathematicians' | 'physicists'>(initialTab);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFieldFilter, setSelectedFieldFilter] = useState<string>('All');

  // Keep synced with navbar dropdown
  useEffect(() => {
    if (initialTab) {
      setActiveMainSection(initialTab);
      setSelectedFieldFilter('All');
      setSearchQuery('');
    }
  }, [initialTab]);

  const counts = useMemo(() => {
    const mathCount = MATHEMATICIANS.filter(m => m.thinkerType === 'mathematician').length;
    const physCount = MATHEMATICIANS.filter(m => m.thinkerType === 'physicist').length;
    return { mathCount, physCount };
  }, []);

  const availableFields = useMemo(() => {
    const fields = new Set<string>();
    MATHEMATICIANS.forEach(m => {
      if (m.thinkerType === (activeMainSection === 'physicists' ? 'physicist' : 'mathematician')) {
        fields.add(m.field);
      }
    });
    return ['All', ...Array.from(fields)];
  }, [activeMainSection]);

  const filteredThinkers = useMemo(() => {
    return MATHEMATICIANS.filter((m) => {
      const matchesType = m.thinkerType === (activeMainSection === 'physicists' ? 'physicist' : 'mathematician');
      if (!matchesType) return false;

      if (selectedFieldFilter !== 'All' && m.field !== selectedFieldFilter) {
        return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = m.name.toLowerCase().includes(q);
        const matchesTitle = m.title.toLowerCase().includes(q);
        const matchesQuote = m.famousQuote.toLowerCase().includes(q);
        const matchesField = m.field.toLowerCase().includes(q);
        const matchesNationality = m.nationality.toLowerCase().includes(q);
        const matchesBreakthroughs = m.majorBreakthroughs.some(b => 
          b.title.toLowerCase().includes(q) || b.description.toLowerCase().includes(q) || (b.formula && b.formula.toLowerCase().includes(q))
        );
        return matchesName || matchesTitle || matchesQuote || matchesField || matchesNationality || matchesBreakthroughs;
      }

      return true;
    });
  }, [activeMainSection, selectedFieldFilter, searchQuery]);

  return (
    <section 
      id="math-philosophy-section" 
      className="py-6 sm:py-12 md:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-white relative overflow-hidden border-t border-b border-slate-200 dark:border-indigo-900/50 shadow-2xl min-h-screen transition-colors duration-300"
    >
      
      {/* Background Sacred Geometry & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#6366f115_1px,transparent_1px)] dark:bg-[radial-gradient(#6366f120_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-60 dark:opacity-40" />
      <div className="absolute -top-48 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-48 right-1/4 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* TOP NAVIGATION & HOME BUTTON BAR (Mobile & Desktop) */}
      <div className="sticky top-0 z-30 bg-white/90 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800/80 px-4 sm:px-6 lg:px-8 py-3 mb-6 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {onBackToHome && (
            <button
              id="philosophy-back-to-home-btn"
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white font-bold text-xs shadow-xs hover:scale-105 active:scale-95 transition-all cursor-pointer group"
              title="Return to Home Screen"
            >
              <Home className="w-4 h-4 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
              <span>Back to Home</span>
            </button>
          )}

          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-semibold truncate">
            <span className="hidden sm:inline">Philosophy of Science</span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-600">•</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-extrabold truncate">The Great Thinkers &amp; Pioneers</span>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/90 border border-indigo-200 dark:border-indigo-500/40 text-indigo-700 dark:text-indigo-300 text-[11px] sm:text-xs font-black uppercase tracking-widest shadow-xs dark:shadow-lg dark:shadow-indigo-500/10">
            <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Philosophy of Mathematics &amp; Theoretical Physics</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            The Great Thinkers &amp; Pioneers
          </h2>

          <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto px-2">
            Discover the profound philosophical worldviews, mathematical formulations, and enduring breakthroughs of humanity&apos;s greatest minds.
          </p>
        </div>

        {/* 🌟 PROMINENT TWO-SECTION SWITCHER: PHYSICISTS vs MATHEMATICIANS */}
        <div className="flex justify-center">
          <div className="p-1 sm:p-1.5 bg-slate-200/80 dark:bg-slate-900/90 border border-slate-300/80 dark:border-slate-800 rounded-2xl flex items-center gap-1.5 sm:gap-2 shadow-sm dark:shadow-2xl backdrop-blur-md max-w-md w-full">
            <button
              id="philosophy-tab-physicists"
              onClick={() => {
                setActiveMainSection('physicists');
                setSelectedFieldFilter('All');
              }}
              className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 transition-all cursor-pointer ${
                activeMainSection === 'physicists'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-600/30 scale-[1.02]'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/80 dark:hover:bg-slate-800/60'
              }`}
            >
              <Atom className={`w-4 h-4 ${activeMainSection === 'physicists' ? 'text-cyan-200 animate-spin-slow' : 'text-slate-500 dark:text-slate-400'}`} />
              <span>Physicists</span>
              <span className={`px-1.5 sm:px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-bold ${
                activeMainSection === 'physicists' ? 'bg-cyan-900/60 text-cyan-200' : 'bg-slate-300 dark:bg-slate-800 text-slate-700 dark:text-slate-400'
              }`}>
                {counts.physCount}
              </span>
            </button>

            <button
              id="philosophy-tab-mathematicians"
              onClick={() => {
                setActiveMainSection('mathematicians');
                setSelectedFieldFilter('All');
              }}
              className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 transition-all cursor-pointer ${
                activeMainSection === 'mathematicians'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/30 scale-[1.02]'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/80 dark:hover:bg-slate-800/60'
              }`}
            >
              <Sigma className="w-4 h-4" />
              <span>Mathematicians</span>
              <span className={`px-1.5 sm:px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-bold ${
                activeMainSection === 'mathematicians' ? 'bg-indigo-900/60 text-indigo-200' : 'bg-slate-300 dark:bg-slate-800 text-slate-700 dark:text-slate-400'
              }`}>
                {counts.mathCount}
              </span>
            </button>
          </div>
        </div>

        {/* 🔍 OPTIMIZED SEARCH AND FIELD FILTERS */}
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${activeMainSection} by name, quote, landmark formula, or era...`}
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 shadow-xs transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Discipline Filter Pills */}
          {availableFields.length > 2 && (
            <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
              {availableFields.map((field) => (
                <button
                  key={field}
                  onClick={() => setSelectedFieldFilter(field)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedFieldFilter === field
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {field}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Thinkers Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredThinkers.map((thinker) => {
            const theme = FIELD_THEMES[thinker.field] || FIELD_THEMES['Calculus & Analysis'];

            return (
              <div
                key={thinker.id}
                id={`thinker-card-${thinker.id}`}
                onClick={() => setSelectedMathematician(thinker)}
                className={`group relative rounded-2xl sm:rounded-3xl p-4.5 sm:p-6 transition-all duration-300 cursor-pointer border flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 sm:hover:-translate-y-2 hover:shadow-xl bg-white dark:bg-slate-900/95 border-slate-200 dark:border-slate-800 shadow-xs dark:shadow-none ${theme.borderHover}`}
              >
                {/* Background Hover Aura */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="space-y-4 relative z-10">
                  {/* Top Metadata row */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${theme.badge}`}>
                      {thinker.field}
                    </span>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 font-mono">
                      {thinker.era}
                    </span>
                  </div>

                  {/* Thinker Name & Title */}
                  <div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                      <span>{thinker.name}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-1 mt-0.5 font-medium">
                      {thinker.title}
                    </p>
                  </div>

                  {/* Philosophical Quote Card */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800/80 relative text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-serif italic group-hover:border-slate-300 dark:group-hover:border-slate-700 transition-colors">
                    <Quote className="w-4 h-4 text-indigo-400/40 dark:text-indigo-400/30 absolute top-2.5 right-2.5 pointer-events-none" />
                    <p className="line-clamp-3">&ldquo;{thinker.famousQuote}&rdquo;</p>
                  </div>

                  {/* Mathematical Symbol / Landmark Formula Preview (Selected in Focus Mode) */}
                  <div 
                    id={`thinker-formula-${thinker.id}`}
                    className={`p-3 rounded-xl border text-center font-mono text-sm overflow-x-auto min-h-[58px] flex items-center justify-center transition-all shadow-2xs ${theme.formulaBg}`}
                    title="Landmark Mathematical Formula"
                  >
                    <MathText text={`$$${thinker.symbol}$$`} displayMode />
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs relative z-10">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    {thinker.nationality}
                  </span>
                  
                  <span className={`font-bold flex items-center gap-1 ${theme.accent} group-hover:underline text-[11px]`}>
                    <span>Philosophy &amp; Insights</span>
                    <Sparkles className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredThinkers.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
            <Search className="w-10 h-10 text-slate-400 dark:text-slate-600 mx-auto" />
            <h4 className="text-base font-bold text-slate-800 dark:text-slate-300">No {activeMainSection} match your search</h4>
            <p className="text-xs text-slate-500">Try searching for a different keyword, quote, or clear filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedFieldFilter('All');
              }}
              className="mt-2 px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs cursor-pointer transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* 📖 THINKER PHILOSOPHY DEEP-DIVE MODAL */}
      {selectedMathematician && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 dark:bg-slate-950/85 backdrop-blur-xl animate-fade-in"
          onClick={() => setSelectedMathematician(null)}
        >
          <div 
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-6 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between z-20">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${selectedMathematician.avatarColor} flex items-center justify-center font-black text-lg shadow-lg text-white`}>
                  {selectedMathematician.thinkerType === 'physicist' ? <Atom className="w-6 h-6" /> : <Sigma className="w-6 h-6" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white">{selectedMathematician.name}</h3>
                    {selectedMathematician.latinName && (
                      <span className="text-xs text-slate-500 dark:text-slate-400 italic">({selectedMathematician.latinName})</span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{selectedMathematician.title}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedMathematician(null)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                title="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              
              {/* Quick Info Badges */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-3 py-1 rounded-xl bg-indigo-50 dark:bg-indigo-950/90 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/40 font-bold">
                  {selectedMathematician.field}
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono">
                  {selectedMathematician.era}
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                  {selectedMathematician.nationality}
                </span>
              </div>

              {/* Famous Quote Banner */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-50 via-purple-50/50 to-indigo-50 dark:from-indigo-950/80 dark:via-slate-900 dark:to-purple-950/80 border border-indigo-200 dark:border-indigo-500/30 relative">
                <Quote className="w-6 h-6 text-indigo-400/40 dark:text-indigo-400/30 absolute top-3 right-3" />
                <p className="text-sm sm:text-base font-serif italic text-indigo-950 dark:text-indigo-100 leading-relaxed">
                  &ldquo;{selectedMathematician.famousQuote}&rdquo;
                </p>
              </div>

              {/* Philosophical Epistemology */}
              <div className="space-y-2">
                <h4 className="text-sm font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  Philosophical View &amp; Epistemology
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                  {selectedMathematician.philosophicalView}
                </p>
              </div>

              {/* Major Mathematical Breakthroughs with LaTeX */}
              <div className="space-y-3">
                <h4 className="text-sm font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Landmark Discoveries &amp; Mathematical Formulations
                </h4>
                <div className="space-y-3">
                  {selectedMathematician.majorBreakthroughs.map((b, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-2">
                      <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center justify-between">
                        <span>{b.title}</span>
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        <MathText text={b.description} />
                      </p>
                      {b.formula && (
                        <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center font-mono text-sm overflow-x-auto text-emerald-800 dark:text-emerald-300 shadow-2xs">
                          <MathText text={`$$${b.formula}$$`} displayMode />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact on Modern World */}
              <div className="space-y-2">
                <h4 className="text-sm font-black uppercase tracking-wider text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Impact on Modern Science &amp; Technology
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                  {selectedMathematician.impactOnModernWorld}
                </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedMathematician(null)}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-xs text-white transition-all cursor-pointer shadow-xs"
              >
                Close Thinker Profile
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

