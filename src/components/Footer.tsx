import React from 'react';
import { Sigma, GraduationCap, Sparkles, MessageCircle, Mail } from 'lucide-react';
import { ClassLevel } from '../types';
import { NavTab } from './Navbar';

interface FooterProps {
  onNavigate: (tab: NavTab, classLevel?: ClassLevel) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="main-footer" className="hidden md:block bg-slate-900 text-slate-400 border-t border-slate-800 pt-12 pb-8 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/30">
                <Sigma className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-sm sm:text-base font-extrabold tracking-tight">
                𝙴𝙽𝙶𝙸𝙽𝙴𝙴𝚁𝙸𝙽𝙶 𝙲𝙾𝙻𝙻𝙴𝙶𝙴 𝙰𝙳𝙼𝙸𝚂𝚂𝙸𝙾𝙽 𝚃𝙴𝚂𝚃
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              A dedicated preparation and assessment platform for Engineering College Admission Tests with instant verification and step-by-step mathematical proofs.
            </p>

            {/* Direct WhatsApp & Email Contact in Footer */}
            <div className="pt-1 flex flex-wrap items-center gap-2 text-xs">
              <a
                href="https://wa.me/923013550699"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-bold hover:bg-emerald-900/60 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Contact Me On WhatsApp</span>
              </a>
              <a
                href="mailto:mahtabahmed456@gmail.com"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 font-bold hover:bg-indigo-900/60 transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Contact Me On Email</span>
              </a>
            </div>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Ramanujan Quote */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-purple-500/40 animate-purple-glow flex flex-col justify-between">
                <p className="font-serif italic text-xs text-purple-200 bg-gradient-to-r from-purple-300 via-fuchsia-200 to-purple-400 bg-clip-text text-transparent animate-gradient-shimmer leading-relaxed">
                  &ldquo;An Equation Has No Meaning To Me Unless It Expresses A Thought Of God&rdquo;
                </p>
                <span className="block font-sans not-italic text-purple-400 font-bold text-[11px] mt-1.5 tracking-wide">
                  — Srinivasa Ramanujan
                </span>
              </div>

              {/* David Hilbert Quote */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-indigo-500/40 shadow-md shadow-indigo-950/40 flex flex-col justify-between">
                <p className="font-serif italic text-xs text-indigo-200 bg-gradient-to-r from-indigo-300 via-sky-200 to-cyan-300 bg-clip-text text-transparent leading-relaxed">
                  &ldquo;We must know. We will know.&rdquo;
                </p>
                <span className="block font-sans not-italic text-indigo-400 font-bold text-[11px] mt-1.5 tracking-wide">
                  — David Hilbert
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Classes Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Syllabus
            </h4>
            <ul className="space-y-2">
              {([9, 10, 11, 12] as ClassLevel[]).map((lvl) => (
                <li key={lvl}>
                  <button
                    onClick={() => onNavigate('classes', lvl)}
                    className="hover:text-indigo-400 transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <span>Class {lvl} Mathematics</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('philosophy')}
                  className="hover:text-indigo-400 transition-colors cursor-pointer"
                >
                  Philosophy (Physicists &amp; Mathematicians)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('classes', 9)}
                  className="hover:text-indigo-400 transition-colors cursor-pointer"
                >
                  Chapter Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('dictionary')}
                  className="hover:text-indigo-400 transition-colors cursor-pointer"
                >
                  Content Hub &amp; Definitions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-indigo-400 transition-colors cursor-pointer"
                >
                  About Developer — Educational Background
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px]">
          <p>© {new Date().getFullYear()} 𝙴𝙽𝙶𝙸𝙽𝙴𝙴𝚁𝙸𝙽𝙶 𝙲𝙾𝙻𝙻𝙴𝙶𝙴 𝙰𝙳𝙼𝙸𝚂𝚂𝙸𝙾𝙽 𝚃𝙴𝚂𝚃 • CURATED BY MAHTAB. All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Classes 9, 10, 11 &amp; 12 • ECAT Preparation</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
