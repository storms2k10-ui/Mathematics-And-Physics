import React from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Calculator, 
  GraduationCap, 
  Sigma, 
  Sparkles, 
  Atom, 
  Zap,
  FlaskConical,
  BookOpen,
  Layers
} from 'lucide-react';
import { ClassLevel } from '../types';
import { MathText } from './MathText';

export type SubjectTrack = 
  | 'Elementary Mathematics' 
  | 'Chemistry' 
  | 'Elementary Physics' 
  | 'Pre Calculas';

interface HeroSectionProps {
  onSelectClass: (classLevel: ClassLevel, track?: SubjectTrack) => void;
  onStartPracticing: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectClass,
}) => {
  const tracks: {
    id: SubjectTrack;
    title: string;
    subtitle: string;
    description: string;
    classes: ClassLevel[];
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    buttonBg: string;
    features: string[];
  }[] = [
    {
      id: 'Elementary Mathematics',
      title: 'Mathematics',
      subtitle: 'Classes 9, 10, 11, 12',
      description: 'Standard school curriculum covering Algebra, Coordinate Geometry, Matrices, Trigonometry, and introductory Calculus with interactive KaTeX solutions.',
      classes: [9, 10, 11, 12],
      icon: Sigma,
      accentColor: 'indigo',
      badgeBg: 'bg-indigo-50 dark:bg-indigo-950/70',
      badgeText: 'text-indigo-700 dark:text-indigo-300',
      badgeBorder: 'border-indigo-200 dark:border-indigo-800',
      buttonBg: 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/25',
      features: ['Real & Complex Numbers', 'Algebra & Polynomials', 'Trigonometry & Graphs', 'Differential Calculus'],
    },
    {
      id: 'Chemistry',
      title: 'Chemistry',
      subtitle: 'Classes 9, 10, 11, 12',
      description: 'Comprehensive Chemistry curriculum covering Physical, Organic, and Inorganic Chemistry across Classes 9, 10, 11, and 12.',
      classes: [9, 10, 11, 12],
      icon: FlaskConical,
      accentColor: 'emerald',
      badgeBg: 'bg-emerald-50 dark:bg-emerald-950/70',
      badgeText: 'text-emerald-700 dark:text-emerald-300',
      badgeBorder: 'border-emerald-200 dark:border-emerald-800',
      buttonBg: 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/25',
      features: ['Atomic Structure & Bonding', 'Chemical Reactions & Stoichiometry', 'Organic Chemistry & Hydrocarbons', 'Thermodynamics & Equilibrium'],
    },
    {
      id: 'Elementary Physics',
      title: 'Physics',
      subtitle: 'Classes 11 & 12',
      description: 'Foundational physics principles: kinematics, Newtonian mechanics, work & energy, gravitation, wave theory, electrostatics, optics, and thermodynamics.',
      classes: [11, 12],
      icon: Atom,
      accentColor: 'cyan',
      badgeBg: 'bg-cyan-50 dark:bg-cyan-950/70',
      badgeText: 'text-cyan-700 dark:text-cyan-300',
      badgeBorder: 'border-cyan-200 dark:border-cyan-800',
      buttonBg: 'bg-cyan-600 hover:bg-cyan-700 shadow-cyan-600/25',
      features: ['Kinematics & Dynamics', 'Work, Energy & Power', 'Electrostatics & Optics', 'Thermodynamics & Waves'],
    },
    {
      id: 'Pre Calculas',
      title: 'Pre Calculas',
      subtitle: 'Class 11',
      description: 'Pre-calculus foundations: polynomial & rational functions, trigonometry, analytic geometry, sequences, series, and introductory analysis.',
      classes: [11],
      icon: Calculator,
      accentColor: 'violet',
      badgeBg: 'bg-violet-50 dark:bg-violet-950/70',
      badgeText: 'text-violet-700 dark:text-violet-300',
      badgeBorder: 'border-violet-200 dark:border-violet-800',
      buttonBg: 'bg-violet-600 hover:bg-violet-700 shadow-violet-600/25',
      features: ['Functions & Relations', 'Trigonometric Identities', 'Analytic Geometry', 'Mathematical Induction'],
    },
  ];

  return (
    <div className="space-y-10">
      
      {/* Top Hero Banner */}
      <section id="hero-section" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-8 md:py-12 border-b border-slate-200/80 dark:border-slate-800">
        {/* Subtle math watermark grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/70 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold tracking-wide shadow-xs">
                <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>𝙴𝙽𝙶𝙸𝙽𝙴𝙴𝚁𝙸𝙽𝙶 𝙲𝙾𝙻𝙻𝙴𝙶𝙴 𝙰𝙳𝙼𝙸𝚂𝚂𝙸𝙾𝙽 𝚃𝙴𝚂𝚃</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                  𝙴𝙽𝙶𝙸𝙽𝙴𝙴𝚁𝙸𝙽𝙶 𝙲𝙾𝙻𝙻𝙴𝙶𝙴 𝙰𝙳𝙼𝙸𝚂𝚂𝙸𝙾𝙽 𝚃𝙴𝚂𝚃
                </h1>
                <p className="text-sm sm:text-base font-bold text-indigo-600 dark:text-indigo-400">
                  Comprehensive Concept Practice &amp; Step-by-Step Solutions
                </p>
              </div>

              {/* Feature Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Interactive KaTeX Mathematical Rendering</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Instant Answer Feedback &amp; Step-by-Step Proofs</span>
                </div>
              </div>
            </div>

            {/* Right Column: Sample Mathematical Preview Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200/90 dark:border-slate-800 space-y-4">
                
                {/* Header badge */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      <Calculator className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 dark:text-white">Sample Mathematical MCQ</h3>
                      <p className="text-[11px] text-slate-500">Mathematical Notation Preview</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 text-[10px] font-bold bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 rounded-full border border-indigo-200 dark:border-indigo-800">
                    Active
                  </span>
                </div>

                {/* Sample Question Box */}
                <div className="space-y-2">
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                    <MathText text="For the quadratic equation $ax^2 + bx + c = 0$, if the discriminant $\Delta = b^2 - 4ac < 0$, the roots are:" />
                  </p>
                </div>

                {/* Sample Options */}
                <div className="space-y-2 text-xs font-medium">
                  <div className="p-2.5 rounded-xl border border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-emerald-600 text-white font-bold flex items-center justify-center text-[10px]">A</span>
                      <span><MathText text="Complex conjugate roots $\alpha \pm i\beta$" /></span>
                    </div>
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  </div>

                  <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 text-slate-600 dark:text-slate-300 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold flex items-center justify-center text-[10px]">B</span>
                    <span><MathText text="Real and distinct roots" /></span>
                  </div>

                  <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 text-slate-600 dark:text-slate-300 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold flex items-center justify-center text-[10px]">C</span>
                    <span><MathText text="Real and equal roots" /></span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Academic Tracks & Subject Cards Section - Fully responsive on Mobile & Desktop */}
      <section id="academic-tracks-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-2">
                <Layers className="w-3.5 h-3.5 text-indigo-500" />
                <span>Academic Curriculums &amp; Tracks</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                Explore Subjects &amp; Specializations
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
              Choose your field of study below to practice chapter MCQs, explore formulas, and view syllabi.
            </p>
          </div>

          {/* 4 Track Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {tracks.map((track) => {
              const IconComp = track.icon;
              return (
                <div
                  key={track.id}
                  id={`track-card-${track.id.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl ${track.badgeBg} ${track.badgeText} flex items-center justify-center font-black shadow-xs`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${track.badgeBg} ${track.badgeText} ${track.badgeBorder}`}>
                        {track.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-base font-black text-slate-900 dark:text-white">
                        {track.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed line-clamp-3">
                        {track.description}
                      </p>
                    </div>

                    {/* Key Topics List */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                        Focus Areas:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {track.features.map((feat, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Class Selection Buttons */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Select Class:
                    </span>
                    <div className={`grid ${track.classes.length === 4 ? 'grid-cols-4' : 'grid-cols-2'} gap-1.5`}>
                      {track.classes.map((lvl) => (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => onSelectClass(lvl, track.id)}
                          className="py-1.5 px-2 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white text-slate-700 dark:text-slate-200 transition-colors text-center cursor-pointer border border-slate-200/60 dark:border-slate-700/60"
                        >
                          Class {lvl}
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectClass(track.classes[0], track.id)}
                      className={`w-full py-2 px-3 rounded-xl text-xs font-bold text-white ${track.buttonBg} transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm`}
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Open {track.title.split(' ')[0]}</span>
                      <ArrowRight className="w-3 h-3 ml-auto opacity-75" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

