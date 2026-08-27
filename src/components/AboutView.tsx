import React from 'react';
import { 
  Quote, 
  BookOpen, 
  GraduationCap,
  Building2,
  ArrowRight,
  Calculator,
  Sparkles,
  MessageCircle,
  Mail
} from 'lucide-react';
import { ClassLevel } from '../types';
import { AuthorSpotlight } from './AuthorSpotlight';
import { ELEMENTARY_CHAPTERS } from '../data/chaptersData';

interface AboutViewProps {
  onSelectClass: (classLevel: ClassLevel) => void;
  onStartPracticing: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onSelectClass,
  onStartPracticing,
}) => {
  return (
    <div id="about-page-view" className="py-12 md:py-16 bg-slate-50 dark:bg-slate-950 min-h-[calc(100vh-120px)] animate-fade-in">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Spotlight Header on Mahtab Ahmed */}
        <AuthorSpotlight
          onExploreClasses={() => onSelectClass(9)}
          onStartPractice={onStartPracticing}
        />

        {/* ========================================================================= */}
        {/* 🎓 DEDICATED SECTION: EDUCATIONAL BACKGROUND */}
        {/* ========================================================================= */}
        <section id="education-background-section" className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Academic Profile &amp; Qualifications</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                Educational Background
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
                Academic qualifications, university specialization, and higher mathematical background.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
              <Building2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              <div>
                <span className="block text-xs font-black text-slate-900 dark:text-white">University Of Sindh</span>
                <span className="block text-[11px] text-slate-500">&amp; TU DELFT University Of Netherland</span>
              </div>
            </div>
          </div>

          {/* Core Education Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Degree Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 to-slate-50 dark:from-indigo-950/40 dark:to-slate-900 border border-indigo-100 dark:border-indigo-900/60 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    BS Mathematics
                  </h3>
                  <p className="text-xs text-indigo-700 dark:text-indigo-300 font-bold">
                    University Of Sindh
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Comprehensive foundation in pure and applied mathematics, proof techniques, axiomatic structures, and mathematical curriculum methods.
              </p>
            </div>

            {/* Specialization Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-50/70 to-slate-50 dark:from-cyan-950/40 dark:to-slate-900 border border-cyan-100 dark:border-cyan-900/60 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-600 text-white shadow-md shadow-cyan-600/20">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                    MASTERING CALCULAS AND ALGEBRA
                  </h3>
                  <p className="text-xs text-cyan-700 dark:text-cyan-300 font-bold">
                    TU DELFT University Of Netherland
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Specialization in differential and integral calculus, linear algebra, matrix theory, coordinate geometry, and advanced mathematical analysis.
              </p>
            </div>

          </div>

          {/* Contact / WhatsApp & Email Box */}
          <div className="p-6 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                Direct Communication &amp; Inquiries
              </span>
              <p className="text-base sm:text-lg font-black text-emerald-950 dark:text-white">
                Contact &amp; Inquiries
              </p>
              <div className="text-xs text-emerald-700 dark:text-emerald-300 space-y-0.5">
                <p>Reach out directly for mathematics inquiries, syllabus queries, question submissions, and assessment guidance.</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://wa.me/923013550699"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/25 transition-all flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact Me On WhatsApp</span>
              </a>
              <a
                href="mailto:mahtabahmed456@gmail.com"
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-600/25 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me On Email</span>
              </a>
            </div>
          </div>

          {/* Academic Pillars */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Key Focus Areas
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-black text-indigo-600 dark:text-indigo-400">01. Analysis</span>
                <h5 className="text-sm font-bold text-slate-900 dark:text-white">Calculus &amp; Limits</h5>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Differential equations, integral calculus, continuity, and series.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-black text-violet-600 dark:text-violet-400">02. Algebra</span>
                <h5 className="text-sm font-bold text-slate-900 dark:text-white">Matrices &amp; Vectors</h5>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Determinants, vector spaces, polynomials, and linear systems.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-black text-cyan-600 dark:text-cyan-400">03. Geometry</span>
                <h5 className="text-sm font-bold text-slate-900 dark:text-white">Trigonometry &amp; Coordinate</h5>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Trigonometric identities, conic sections, angles, and analytic geometry.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">04. Curriculum</span>
                <h5 className="text-sm font-bold text-slate-900 dark:text-white">Standardized Assessments</h5>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Structured assessment frameworks for Class 9 to Class 12 mathematics.
                </p>
              </div>

            </div>
          </div>

        </section>

        {/* Tribute to Srinivasa Ramanujan (Purple Animated) */}
        <div className="bg-gradient-to-br from-slate-900 via-purple-950/70 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden border border-purple-500/40 animate-purple-glow">
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase tracking-wider">
              <Quote className="w-4 h-4" />
              <span>Mathematical Philosophy</span>
            </div>

            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif italic tracking-wide bg-gradient-to-r from-purple-200 via-fuchsia-100 to-purple-300 bg-clip-text text-transparent leading-snug drop-shadow-sm animate-gradient-shimmer">
              &ldquo;An equation has no meaning to me unless it expresses a thought of God.&rdquo;
            </blockquote>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-300 border-t border-purple-800/60 gap-2">
              <span className="font-semibold text-purple-300">
                — Srinivasa Ramanujan (1887–1920)
              </span>
              <span className="text-slate-400">
                Legendary Mathematical Genius
              </span>
            </div>
          </div>
        </div>

        {/* Classes Navigator (Class 9 to 12) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Available Mathematics Classes
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {([9, 10, 11, 12] as ClassLevel[]).map((lvl) => {
              const count = ELEMENTARY_CHAPTERS.filter((c) => c.class === lvl && (!c.track || c.track === 'Elementary Mathematics')).length;
              return (
                <button
                  key={lvl}
                  onClick={() => onSelectClass(lvl)}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 transition-all text-left group cursor-pointer shadow-xs"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black text-sm flex items-center justify-center">
                      {lvl}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Class {lvl} Mathematics
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {count} Structured Chapters
                  </p>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
