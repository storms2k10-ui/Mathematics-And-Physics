import React from 'react';
import { Quote } from 'lucide-react';
import { MathText } from './MathText';

export const HeaderQuote: React.FC = () => {
  return (
    <header id="top-quote-header" className="w-full bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-indigo-900/40 text-slate-200 py-2 px-4 shadow-sm relative overflow-hidden">
      {/* Subtle math symbols in background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-between text-xs font-serif px-8 text-indigo-300">
        <span><MathText text="\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}" displayMode={false} /></span>
        <span className="hidden sm:inline"><MathText text="e^{i\pi} + 1 = 0" displayMode={false} /></span>
        <span className="hidden md:inline"><MathText text="\sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}" displayMode={false} /></span>
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-center text-center text-xs relative z-10">
        {/* Srinivasa Ramanujan Quote in Center */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-center">
          <span className="inline-flex items-center justify-center p-1 rounded-md bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-700 text-white shadow-md shadow-purple-500/30 shrink-0">
            <Quote className="w-3 h-3 fill-white stroke-[2.5]" />
          </span>
          <span className="px-2 py-0.5 rounded-md bg-purple-500/20 border border-purple-400/50 text-purple-300 font-sans font-extrabold text-[11px] uppercase tracking-wider not-italic shadow-xs">
            SRINIVASA RAMANUJAN
          </span>
          <span className="text-purple-300/60 not-italic hidden sm:inline">•</span>
          <p className="italic text-xs sm:text-sm font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-sky-400 to-cyan-300 uppercase drop-shadow-[0_0_10px_rgba(56,189,248,0.6)] animate-pulse transition-all">
            &ldquo;AN EQUATION HAS NO MEANING TO ME UNLESS IT EXPRESSES A THOUGHT OF GOD.&rdquo;
          </p>
          <span className="text-purple-300/60 not-italic hidden md:inline">•</span>
          
          {/* Square Shaped Light Green Glowing Animated MATHEMATICS & PHYSICS Badge */}
          <span className="relative inline-flex items-center group">
            {/* Animated Backlit Light Green Glow Aura */}
            <span className="absolute -inset-1 rounded-md bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 opacity-75 blur-xs group-hover:opacity-100 transition-opacity animate-pulse pointer-events-none" />
            <span className="relative px-3 py-1 rounded-md bg-slate-950 border-2 border-emerald-400 text-emerald-300 text-[11px] sm:text-xs font-black tracking-widest uppercase shadow-[0_0_15px_rgba(52,211,153,0.7)] hover:text-white hover:border-emerald-300 transition-all">
              MATHEMATICS &amp; PHYSICS
            </span>
          </span>
        </div>
      </div>
    </header>
  );
};
