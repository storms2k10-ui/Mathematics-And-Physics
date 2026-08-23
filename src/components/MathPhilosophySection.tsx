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
  Zap
} from 'lucide-react';
import { MATHEMATICIANS, Mathematician } from '../data/mathematiciansData';
import { MathText } from './MathText';

interface MathPhilosophySectionProps {
  onExploreMathematician?: (mathematician: Mathematician) => void;
  initialTab?: 'physicists' | 'mathematicians';
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
    badge: 'bg-cyan-950/90 text-cyan-300 border-cyan-500/40',
    glow: 'from-cyan-500/20 via-blue-500/10 to-indigo-500/20',
    borderHover: 'hover:border-cyan-400/80 hover:shadow-cyan-950/80',
    accent: 'text-cyan-400',
    lightGlow: 'shadow-[0_0_15px_rgba(6,182,212,0.35)]',
    btnGrad: 'from-cyan-600 to-blue-600',
    formulaBg: 'bg-cyan-950/70 border-cyan-800/60 text-cyan-200',
  },
  'Calculus & Analysis': {
    badge: 'bg-blue-950/90 text-blue-300 border-blue-500/40',
    glow: 'from-blue-500/20 via-indigo-500/10 to-cyan-500/20',
    borderHover: 'hover:border-blue-400/80 hover:shadow-blue-950/80',
    accent: 'text-blue-400',
    lightGlow: 'shadow-[0_0_15px_rgba(59,130,246,0.35)]',
    btnGrad: 'from-blue-600 to-indigo-600',
    formulaBg: 'bg-blue-950/70 border-blue-800/60 text-blue-200',
  },
  'Algebra & Number Theory': {
    badge: 'bg-amber-950/90 text-amber-300 border-amber-500/40',
    glow: 'from-amber-500/20 via-orange-500/10 to-yellow-500/20',
    borderHover: 'hover:border-amber-400/80 hover:shadow-amber-950/80',
    accent: 'text-amber-400',
    lightGlow: 'shadow-[0_0_15px_rgba(245,158,11,0.35)]',
    btnGrad: 'from-amber-600 to-orange-600',
    formulaBg: 'bg-amber-950/70 border-amber-800/60 text-amber-200',
  },
  'Geometry & Topology': {
    badge: 'bg-emerald-950/90 text-emerald-300 border-emerald-500/40',
    glow: 'from-emerald-500/20 via-teal-500/10 to-green-500/20',
    borderHover: 'hover:border-emerald-400/80 hover:shadow-emerald-950/80',
    accent: 'text-emerald-400',
    lightGlow: 'shadow-[0_0_15px_rgba(16,185,129,0.35)]',
    btnGrad: 'from-emerald-600 to-teal-600',
    formulaBg: 'bg-emerald-950/70 border-emerald-800/60 text-emerald-200',
  },
  'Pure Mathematics': {
    badge: 'bg-rose-950/90 text-rose-300 border-rose-500/40',
    glow: 'from-rose-500/20 via-pink-500/10 to-purple-500/20',
    borderHover: 'hover:border-rose-400/80 hover:shadow-rose-950/80',
    accent: 'text-rose-400',
    lightGlow: 'shadow-[0_0_15px_rgba(244,63,94,0.35)]',
    btnGrad: 'from-rose-600 to-pink-600',
    formulaBg: 'bg-rose-950/70 border-rose-800/60 text-rose-200',
  },
  'Ancient Pioneers': {
    badge: 'bg-yellow-950/90 text-yellow-300 border-yellow-500/40',
    glow: 'from-yellow-500/20 via-amber-500/10 to-orange-500/20',
    borderHover: 'hover:border-yellow-400/80 hover:shadow-yellow-950/80',
    accent: 'text-yellow-400',
    lightGlow: 'shadow-[0_0_15px_rgba(234,179,8,0.35)]',
    btnGrad: 'from-yellow-600 to-amber-600',
    formulaBg: 'bg-yellow-950/70 border-yellow-800/60 text-yellow-200',
  },
};

export const MathPhilosophySection: React.FC<MathPhilosophySectionProps> = ({ initialTab = 'mathematicians' }) => {
  const [selectedMathematician, setSelectedMathematician] = useState<Mathematician | null>(null);
  const [activeMainSection, setActiveMainSection] = useState<'mathematicians' | 'physicists'>(initialTab);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Keep synced with navbar dropdown
  useEffect(() => {
    if (initialTab) {
      setActiveMainSection(initialTab);
      setActiveCategory('all');
    }
  }, [initialTab]);

  const counts = useMemo(() => {
    const mathCount = MATHEMATICIANS.filter(m => m.thinkerType === 'mathematician').length;
    const physCount = MATHEMATICIANS.filter(m => m.thinkerType === 'physicist').length;
    return { mathCount, physCount };
  }, []);

  const categories = useMemo(() => {
    if (activeMainSection === 'physicists') {
      return [
        { id: 'all', label: 'All Physicists' },
        { id: 'Theoretical Physics', label: 'Theoretical Physics & Relativity' },
        { id: 'Ancient Pioneers', label: 'Observational & Classical' },
      ];
    }
    return [
      { id: 'all', label: 'All Mathematicians' },
      { id: 'Calculus & Analysis', label: 'Calculus & Analysis' },
      { id: 'Algebra & Number Theory', label: 'Algebra & Number Theory' },
      { id: 'Geometry & Topology', label: 'Geometry & Topology' },
      { id: 'Pure Mathematics', label: 'Pure Mathematics & Logic' },
      { id: 'Ancient Pioneers', label: 'Ancient Pioneers' },
    ];
  }, [activeMainSection]);

  const filteredThinkers = useMemo(() => {
    return MATHEMATICIANS.filter((m) => {
      // 1. Strict primary section filter
      if (m.thinkerType !== (activeMainSection === 'physicists' ? 'physicist' : 'mathematician')) {
        return false;
      }

      // 2. Subcategory filter
      const matchesCat = activeCategory === 'all' || m.field === activeCategory;
      return matchesCat;
    });
  }, [activeMainSection, activeCategory]);

  return (
    <section id="math-philosophy-section" className="py-12 md:py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden border-t border-b border-indigo-900/50 shadow-2xl">
      
      {/* Background Sacred Geometry & Deep Space Cosmic Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#6366f120_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-40" />
      <div className="absolute -top-48 left-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-48 right-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/90 border border-indigo-500/40 text-indigo-300 text-xs font-black uppercase tracking-widest shadow-lg shadow-indigo-500/10">
            <Brain className="w-4 h-4 text-indigo-400" />
            <span>Philosophy of Mathematics &amp; Theoretical Physics</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            The Great Thinkers &amp; Pioneers
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Discover the profound philosophical worldviews, mathematical formulations, and enduring breakthroughs of humanity&apos;s greatest minds.
          </p>
        </div>

        {/* 🌟 PROMINENT TWO-SECTION SWITCHER: PHYSICISTS vs MATHEMATICIANS */}
        <div className="flex justify-center">
          <div className="p-1.5 bg-slate-900/90 border border-slate-800 rounded-2xl flex items-center gap-2 shadow-2xl backdrop-blur-md max-w-md w-full">
            <button
              onClick={() => {
                setActiveMainSection('physicists');
                setActiveCategory('all');
              }}
              className={`flex-1 py-3 px-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeMainSection === 'physicists'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-600/30 scale-[1.02]'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Atom className={`w-4 h-4 ${activeMainSection === 'physicists' ? 'text-cyan-200 animate-spin-slow' : 'text-slate-400'}`} />
              <span>Physicists</span>
              <span className={`px-2 py-0.5 rounded-md text-xs font-bold ${
                activeMainSection === 'physicists' ? 'bg-cyan-900/60 text-cyan-200' : 'bg-slate-800 text-slate-400'
              }`}>
                {counts.physCount}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveMainSection('mathematicians');
                setActiveCategory('all');
              }}
              className={`flex-1 py-3 px-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeMainSection === 'mathematicians'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30 scale-[1.02]'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Sigma className="w-4 h-4" />
              <span>Mathematicians</span>
              <span className={`px-2 py-0.5 rounded-md text-xs font-bold ${
                activeMainSection === 'mathematicians' ? 'bg-indigo-900/60 text-indigo-200' : 'bg-slate-800 text-slate-400'
              }`}>
                {counts.mathCount}
              </span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills (Centered, No Search Bar) */}
        <div className="flex justify-center bg-slate-900/80 p-3 sm:p-4 rounded-3xl border border-slate-800 shadow-xl backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? activeMainSection === 'physicists'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-600/30 scale-105'
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/30 scale-105'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Thinkers Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredThinkers.map((thinker) => {
            const theme = FIELD_THEMES[thinker.field] || FIELD_THEMES['Calculus & Analysis'];

            return (
              <div
                key={thinker.id}
                id={`thinker-card-${thinker.id}`}
                onClick={() => setSelectedMathematician(thinker)}
                className={`group relative rounded-3xl p-6 transition-all duration-300 cursor-pointer border flex flex-col justify-between overflow-hidden hover:-translate-y-2 hover:shadow-2xl bg-slate-900/90 border-slate-800 ${theme.borderHover}`}
              >
                {/* Background Hover Aura */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="space-y-4 relative z-10">
                  {/* Top Metadata row */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${theme.badge}`}>
                      {thinker.field}
                    </span>
                    <span className="text-xs font-bold text-slate-400 font-mono">
                      {thinker.era}
                    </span>
                  </div>

                  {/* Thinker Name & Title */}
                  <div>
                    <h3 className="text-lg font-black text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                      <span>{thinker.name}</span>
                      <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-0.5 font-medium">
                      {thinker.title}
                    </p>
                  </div>

                  {/* Philosophical Quote Card */}
                  <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 relative text-xs text-slate-300 leading-relaxed font-serif italic group-hover:border-slate-700 transition-colors">
                    <Quote className="w-4 h-4 text-indigo-400/40 absolute top-2.5 right-2.5 pointer-events-none" />
                    <p className="line-clamp-3">&ldquo;{thinker.famousQuote}&rdquo;</p>
                  </div>

                  {/* Mathematical Symbol / Landmark Formula Preview */}
                  <div className={`p-2.5 rounded-xl border text-center font-mono text-xs overflow-x-auto ${theme.formulaBg}`}>
                    <MathText text={`$$${thinker.symbol}$$`} displayMode />
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs relative z-10">
                  <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-slate-500" />
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
          <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800 space-y-3">
            <Search className="w-10 h-10 text-slate-600 mx-auto" />
            <h4 className="text-base font-bold text-slate-300">No {activeMainSection === 'physicists' ? 'physicists' : 'mathematicians'} match your search</h4>
            <p className="text-xs text-slate-500">Try searching for a different keyword, quote, or clear filters.</p>
          </div>
        )}

      </div>

      {/* 📖 THINKER PHILOSOPHY DEEP-DIVE MODAL */}
      {selectedMathematician && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl animate-fade-in"
          onClick={() => setSelectedMathematician(null)}
        >
          <div 
            className="bg-slate-900 border border-slate-800 text-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-slate-900/95 backdrop-blur-md p-6 border-b border-slate-800 flex items-start justify-between z-20">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${selectedMathematician.avatarColor} flex items-center justify-center font-black text-lg shadow-lg`}>
                  {selectedMathematician.thinkerType === 'physicist' ? <Atom className="w-6 h-6" /> : <Sigma className="w-6 h-6" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-black text-white">{selectedMathematician.name}</h3>
                    {selectedMathematician.latinName && (
                      <span className="text-xs text-slate-400 italic">({selectedMathematician.latinName})</span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400">{selectedMathematician.title}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedMathematician(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              
              {/* Quick Info Badges */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-3 py-1 rounded-xl bg-indigo-950/90 text-indigo-300 border border-indigo-500/40 font-bold">
                  {selectedMathematician.field}
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                  {selectedMathematician.era}
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-slate-400" />
                  {selectedMathematician.nationality}
                </span>
              </div>

              {/* Famous Quote Banner */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/80 via-slate-900 to-purple-950/80 border border-indigo-500/30 relative">
                <Quote className="w-6 h-6 text-indigo-400/30 absolute top-3 right-3" />
                <p className="text-sm sm:text-base font-serif italic text-indigo-100 leading-relaxed">
                  &ldquo;{selectedMathematician.famousQuote}&rdquo;
                </p>
              </div>

              {/* Philosophical Epistemology */}
              <div className="space-y-2">
                <h4 className="text-sm font-black uppercase tracking-wider text-indigo-400 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  Philosophical View &amp; Epistemology
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                  {selectedMathematician.philosophicalView}
                </p>
              </div>

              {/* Major Mathematical Breakthroughs with LaTeX */}
              <div className="space-y-3">
                <h4 className="text-sm font-black uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Landmark Discoveries &amp; Mathematical Formulations
                </h4>
                <div className="space-y-3">
                  {selectedMathematician.majorBreakthroughs.map((b, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                      <h5 className="text-xs sm:text-sm font-bold text-white flex items-center justify-between">
                        <span>{b.title}</span>
                      </h5>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        <MathText text={b.description} />
                      </p>
                      {b.formula && (
                        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center font-mono text-xs overflow-x-auto text-emerald-300">
                          <MathText text={`$$${b.formula}$$`} displayMode />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact on Modern World */}
              <div className="space-y-2">
                <h4 className="text-sm font-black uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Impact on Modern Science &amp; Technology
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                  {selectedMathematician.impactOnModernWorld}
                </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-950/80 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedMathematician(null)}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-xs text-white transition-all cursor-pointer"
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
