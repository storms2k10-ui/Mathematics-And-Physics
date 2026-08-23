import React from 'react';
import { Zap, Award, Brain, BarChart3 } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Instant Answer Verification',
      description: 'Receive immediate visual feedback after choosing your option, highlighting correctness without wait times.',
      color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-900',
    },
    {
      icon: Brain,
      title: 'Step-by-Step Proofs',
      description: 'Understand every mathematical formula, theorem, and calculation step with clear KaTeX equations.',
      color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/50 border-indigo-200 dark:border-indigo-900',
    },
    {
      icon: Award,
      title: 'Class 9 to 12 Alignment',
      description: 'Carefully categorized questions covering algebra, trigonometry, geometry, matrices, calculus, and vectors.',
      color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-900',
    },
    {
      icon: BarChart3,
      title: 'Comprehensive Score Reports',
      description: 'Evaluate your performance with percentage accuracy, speed analytics, and question-by-question review.',
      color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-900',
    },
  ];

  return (
    <section id="features-section" className="py-16 md:py-20 bg-slate-50 dark:bg-slate-950 border-t border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-block relative">
            <span className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Interactive Mathematics Platform
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Designed for Conceptual Mathematical Excellence
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            Master problem-solving skills, theorems, and mathematical methods for Class 9 to Class 12.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 border ${feat.color}`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
