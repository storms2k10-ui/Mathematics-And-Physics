import React from 'react';
import { Quote, BookOpen } from 'lucide-react';
import { MathText } from './MathText';

interface HeaderQuoteProps {
  onOpenDictionary?: () => void;
}

export const HeaderQuote: React.FC<HeaderQuoteProps> = ({ onOpenDictionary }) => {
  return (
    <header id="top-quote-header" className="w-full bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-indigo-900/40 text-slate-200 py-1.5 sm:py-2 px-3 sm:px-4 shadow-sm relative overflow-hidden">
      {/* Subtle math symbols in background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-between text-xs font-serif px-8 text-indigo-300">
        <span><MathText text="\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}" displayMode={false} /></span>
        <span className="hidden sm:inline"><MathText text="e^{i\pi} + 1 = 0" displayMode={false} /></span>
        <span className="hidden md:inline"><MathText text="\sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}" displayMode={false} /></span>
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        {/* Upward Top Left: Dictionary (DIC) Component Button */}
        <div className="shrink-0">
          {onOpenDictionary ? (
            <button
              id="header-dic-btn"
              onClick={onOpenDictionary}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-950/80 hover:bg-indigo-900/90 text-cyan-300 hover:text-white border border-cyan-500/40 hover:border-cyan-400 shadow-sm text-[11px] sm:text-xs font-bold transition-all cursor-pointer group"
              title="Open Mathematical & Physics Reference Dictionary (DIC)"
              aria-label="Open Dictionary"
            >
              <BookOpen className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform shrink-0" />
              <span className="font-extrabold tracking-wide uppercase">DIC</span>
              <span className="hidden lg:inline text-[10px] text-cyan-200/80 font-normal border-l border-cyan-500/30 pl-1.5 ml-0.5">
                Dictionary
              </span>
            </button>
          ) : (
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-950/80 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold">
              <BookOpen className="w-3 h-3 text-cyan-400" />
              <span>DIC</span>
            </div>
          )}
        </div>

        {/* Srinivasa Ramanujan Quote in Center */}
        <div className="flex-1 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-center px-2">
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
