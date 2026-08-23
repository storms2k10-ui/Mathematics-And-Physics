import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle, ArrowRight, Sparkles, MessageCircle, Phone } from 'lucide-react';

interface AuthorSpotlightProps {
  onExploreClasses?: () => void;
  onStartPractice?: () => void;
}

export const AuthorSpotlight: React.FC<AuthorSpotlightProps> = ({
  onExploreClasses,
  onStartPractice,
}) => {
  return (
    <section id="author-spotlight-card" className="w-full relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border border-indigo-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-indigo-950/50">
      {/* Subtle background math decorations */}
      <div className="absolute -right-12 -top-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
        
        {/* Author Avatar */}
        <div className="flex-shrink-0 flex flex-col items-center text-center">
          <div className="relative">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 p-1 shadow-xl">
              <div className="w-full h-full rounded-[22px] bg-slate-900 flex flex-col items-center justify-center text-white border border-white/10">
                <span className="text-3xl sm:text-4xl font-black tracking-tighter bg-gradient-to-br from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                  MA
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-300">
                  MATHEMATICS
                </span>
              </div>
            </div>
            {/* Verified Educator Badge */}
            <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-slate-950 p-1.5 rounded-full ring-4 ring-slate-900 shadow-md">
              <CheckCircle className="w-4 h-4 text-white fill-emerald-600" />
            </div>
          </div>

          <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-black text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>MATHEMATICS SUBJECT SPECIALIST</span>
          </div>
        </div>

        {/* Author Bio and Details */}
        <div className="flex-1 text-center lg:text-left space-y-3.5">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-400/30">
            <GraduationCap className="w-4 h-4 text-indigo-400" />
            <span>Mathematics Specialist &amp; Curriculum Creator</span>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Mahtab Ahmed
            </h2>
            
            {/* Education Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2 text-xs">
              <div className="px-3 py-1 rounded-xl bg-slate-800/90 border border-indigo-400/30 text-indigo-200 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                <span><strong>Education:</strong> BS Mathematics (University Of Sindh)</span>
              </div>
              <div className="px-3 py-1 rounded-xl bg-slate-800/90 border border-cyan-400/30 text-cyan-200 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>MASTERING CALCULAS AND ALGEBRA (TU DELFT University Of Netherland)</span>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Welcome to the dedicated Mathematics assessment platform for <strong>Class 9 to Class 12 Mathematics</strong>. Every chapter is structured for deep conceptual clarity and precision problem-solving.
          </p>
        </div>

      </div>
    </section>
  );
};
