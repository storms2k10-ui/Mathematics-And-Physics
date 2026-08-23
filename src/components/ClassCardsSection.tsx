import React from 'react';
import { BookOpen, CheckCircle, ArrowRight, Layers, Award } from 'lucide-react';
import { ClassInfo, ClassLevel } from '../types';

interface ClassCardsSectionProps {
  classes: ClassInfo[];
  onSelectClass: (classLevel: ClassLevel) => void;
  onDirectPractice: (classLevel: ClassLevel) => void;
}

export const ClassCardsSection: React.FC<ClassCardsSectionProps> = ({
  classes,
  onSelectClass,
  onDirectPractice,
}) => {
  return (
    <section id="class-cards-section" className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 text-indigo-500" />
            <span>Academic Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Choose Your Class Level
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Select your class below to practice chapter-wise Mathematics MCQs, explore key theorems, and test your exam readiness.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((cls) => (
            <div
              key={cls.level}
              id={`class-card-${cls.level}`}
              className="group relative bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 hover:border-indigo-400 dark:hover:border-indigo-500 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-12 h-12 rounded-xl bg-indigo-600 dark:bg-indigo-500 text-white font-extrabold text-xl flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                    {cls.level}
                  </span>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${cls.badgeColor}`}>
                    Class {cls.level}th
                  </span>
                </div>

                {/* Title and Subtitle */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {cls.title}
                </h3>
                <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-3">
                  {cls.subtitle}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed line-clamp-3">
                  {cls.description}
                </p>

                {/* Key Focus Topics List */}
                <div className="mb-5">
                  <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                    Core Chapters &amp; Topics:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cls.focusAreas.slice(0, 4).map((topic, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-white dark:bg-slate-700/70 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300"
                      >
                        {topic}
                      </span>
                    ))}
                    {cls.focusAreas.length > 4 && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-semibold">
                        +{cls.focusAreas.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Stat Counters */}
                <div className="grid grid-cols-2 gap-2 py-3 px-3 mb-5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700/60 text-xs">
                  <div>
                    <span className="text-[11px] text-slate-500 block">Chapters</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{cls.totalChapters} Units</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block">Questions</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{cls.totalQuestions}+ MCQs</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                <button
                  id={`class-${cls.level}-practice-btn`}
                  onClick={() => onDirectPractice(cls.level)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 shadow-sm shadow-indigo-600/20 transition-all group-hover:shadow-indigo-600/40"
                >
                  <Award className="w-4 h-4" />
                  <span>Practice MCQs</span>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-70 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  id={`class-${cls.level}-view-chapters-btn`}
                  onClick={() => onSelectClass(cls.level)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-700 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>View Chapter Syllabus</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
