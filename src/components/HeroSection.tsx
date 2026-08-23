import React from 'react';
import { ArrowRight, CheckCircle, Calculator, GraduationCap } from 'lucide-react';
import { ClassLevel } from '../types';
import { MathText } from './MathText';

interface HeroSectionProps {
  onSelectClass: (classLevel: ClassLevel) => void;
  onStartPracticing: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectClass,
  onStartPracticing,
}) => {
  return (
    <div className="space-y-6">
      
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
                <span>MATHEMATICS &amp; PHYSICS</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                  MATHEMATICS &amp; PHYSICS
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

    </div>
  );
};
