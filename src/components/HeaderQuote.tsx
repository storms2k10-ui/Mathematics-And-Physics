import React from 'react';
import { Sigma, Atom } from 'lucide-react';
import { MathText } from './MathText';

interface HeaderQuoteProps {
  onOpenDictionary?: () => void;
}

export const HeaderQuote: React.FC<HeaderQuoteProps> = () => {
  return (
    <header id="top-quote-header" className="w-full bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-indigo-900/50 text-slate-100 py-2.5 sm:py-3.5 px-4 shadow-lg relative overflow-hidden">
      {/* Dynamic Animated Radiant Aura & Particle Glow in Background */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-indigo-500/20 via-sky-400/25 to-emerald-400/20 rounded-full blur-2xl pointer-events-none animate-pulse" />
      
      {/* Subtle floating math symbols in background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-between text-xs font-serif px-6 sm:px-12 text-indigo-300">
        <span className="hidden sm:inline"><MathText text="\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}" displayMode={false} /></span>
        <span className="hidden md:inline"><MathText text="e^{i\pi} + 1 = 0" displayMode={false} /></span>
        <span className="hidden lg:inline"><MathText text="\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}" displayMode={false} /></span>
        <span className="hidden sm:inline"><MathText text="\sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}" displayMode={false} /></span>
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-center relative z-10">
        {/* Dynamic & Attractive High-Impact Mathematics and Physics Title */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-4 text-center group cursor-default select-none">
          
          {/* Glowing Sigma Icon Badge */}
          <div className="relative hidden xs:flex items-center justify-center">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-70 blur-xs group-hover:opacity-100 transition-opacity animate-pulse" />
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-950 border border-indigo-400/50 flex items-center justify-center text-indigo-300 shadow-md">
              <Sigma className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </div>
          </div>

          {/* Center Dynamic Gradient Typography */}
          <div className="flex items-center">
            <h1 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-black tracking-wide sm:tracking-wider text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-emerald-300 drop-shadow-[0_0_25px_rgba(99,102,241,0.65)] drop-shadow-[0_0_40px_rgba(56,189,248,0.4)] transition-all hover:brightness-110 uppercase">
              𝙴𝙽𝙶𝙸𝙽𝙴𝙴𝚁𝙸𝙽𝙶 𝙲𝙾𝙻𝙻𝙴𝙶𝙴 𝙰𝙳𝙼𝙸𝚂𝚂𝙸𝙾𝙽 𝚃𝙴𝚂𝚃
            </h1>
          </div>

          {/* Glowing Atom Icon Badge */}
          <div className="relative hidden xs:flex items-center justify-center">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-500 opacity-70 blur-xs group-hover:opacity-100 transition-opacity animate-pulse" />
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-950 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-md">
              <Atom className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
