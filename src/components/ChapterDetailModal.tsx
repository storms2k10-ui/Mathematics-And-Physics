import React, { useState } from 'react';
import { 
  X, 
  Play, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  Calculator,
  BookOpen,
  History,
  Globe,
  Award
} from 'lucide-react';
import { Chapter } from '../types';
import { ChapterArtwork } from './ChapterArtwork';
import { MathText } from './MathText';

interface ChapterDetailModalProps {
  chapter: Chapter | null;
  isOpen: boolean;
  onClose: () => void;
  onStartTest: (chapter: Chapter) => void;
}

type OverviewTab = 'overview' | 'formulas' | 'outcomes' | 'applications';

export const ChapterDetailModal: React.FC<ChapterDetailModalProps> = ({
  chapter,
  isOpen,
  onClose,
  onStartTest,
}) => {
  const [activeTab, setActiveTab] = useState<OverviewTab>('overview');

  if (!isOpen || !chapter) return null;

  const hasOverview = Boolean(chapter.overview);
  const isMcqAvailable = (chapter.questionCount || 0) > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Attractive Background Picture & Artwork Banner */}
        <div className="relative">
          <ChapterArtwork
            theme={chapter.artTheme}
            title={chapter.name}
            category={chapter.category}
            size="modal"
            className="rounded-b-none border-x-0 border-t-0"
          />

          {/* Track & Class Badge */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-black bg-slate-900/80 backdrop-blur-md text-white border border-white/20 shadow-md">
              {chapter.track || 'Mathematics'} • Class {chapter.class}
            </span>
            {chapter.track === 'Advanced Mathematics' && (
              <span className="px-2.5 py-1 rounded-full text-xs font-black bg-indigo-600/90 text-white shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Dynamic Syllabus
              </span>
            )}
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md transition-colors cursor-pointer border border-white/20"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Navigation Tabs (if rich overview exists) */}
        {hasOverview && (
          <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 px-4 pt-2 gap-1 sm:gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3.5 py-2 text-xs font-bold rounded-t-xl transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap border-b-2 ${
                activeTab === 'overview'
                  ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-900 shadow-2xs'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Dynamic Overview</span>
            </button>

            <button
              onClick={() => setActiveTab('formulas')}
              className={`px-3.5 py-2 text-xs font-bold rounded-t-xl transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap border-b-2 ${
                activeTab === 'formulas'
                  ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-900 shadow-2xs'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Core Formulas</span>
            </button>

            <button
              onClick={() => setActiveTab('outcomes')}
              className={`px-3.5 py-2 text-xs font-bold rounded-t-xl transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap border-b-2 ${
                activeTab === 'outcomes'
                  ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-900 shadow-2xs'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Learning Outcomes</span>
            </button>

            <button
              onClick={() => setActiveTab('applications')}
              className={`px-3.5 py-2 text-xs font-bold rounded-t-xl transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap border-b-2 ${
                activeTab === 'applications'
                  ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-900 shadow-2xs'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Applications</span>
            </button>
          </div>
        )}

        {/* Modal Body Content */}
        <div className="p-6 space-y-6 overflow-y-auto">
          
          {/* TAB 1: DYNAMIC OVERVIEW & CONCEPTS */}
          {(!hasOverview || activeTab === 'overview') && (
            <div className="space-y-5 animate-fade-in">
              {/* Formula Highlight Banner */}
              {chapter.formulaHighlight && (
                <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/80 shadow-2xs">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Master Formula &amp; Identity</span>
                  </div>
                  <div className="text-sm font-mono text-indigo-950 dark:text-indigo-100 overflow-x-auto py-1">
                    <MathText text={`$$${chapter.formulaHighlight}$$`} />
                  </div>
                </div>
              )}

              {/* Dynamic Summary */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Comprehensive Chapter Summary</span>
                </h4>
                <div className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <MathText text={chapter.overview?.summary || chapter.description} />
                </div>
              </div>

              {/* Historical Context if available */}
              {chapter.overview?.historicalContext && (
                <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 space-y-1.5">
                  <h5 className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                    <History className="w-3.5 h-3.5 text-amber-500" />
                    <span>Historical Evolution &amp; Origin</span>
                  </h5>
                  <p className="text-xs text-amber-900/80 dark:text-amber-200/90 leading-relaxed">
                    {chapter.overview.historicalContext}
                  </p>
                </div>
              )}

              {/* Key Topics List */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Core Syllabus Topics:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {chapter.keyTopics.map((topic, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <MathText text={topic} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Theorems */}
              {chapter.overview?.keyTheorems && chapter.overview.keyTheorems.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Key Mathematical Theorems</span>
                  </h4>
                  {chapter.overview.keyTheorems.map((thm, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/50 space-y-1"
                    >
                      <div className="text-xs font-bold text-indigo-700 dark:text-indigo-300">
                        {thm.title}
                      </div>
                      <div className="text-xs text-slate-700 dark:text-slate-300 italic">
                        <MathText text={thm.statement} />
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 pt-0.5">
                        <span className="font-semibold text-indigo-600 dark:text-indigo-400">Significance:</span> {thm.importance}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: CORE FORMULAS */}
          {hasOverview && activeTab === 'formulas' && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Calculator className="w-4 h-4 text-indigo-500" />
                  <span>Essential Formulas &amp; Equations</span>
                </h4>
                <span className="text-[11px] font-semibold text-slate-400">
                  {chapter.overview?.coreFormulas.length} Core Equations
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {chapter.overview?.coreFormulas.map((f, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        {f.label}
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                        Eq. {i + 1}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-x-auto text-indigo-950 dark:text-indigo-200">
                      <MathText text={`$$${f.formula}$$`} />
                    </div>

                    {f.explanation && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {f.explanation}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: LEARNING OUTCOMES */}
          {hasOverview && activeTab === 'outcomes' && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-500" />
                <span>Chapter Mastery Objectives</span>
              </h4>

              <div className="space-y-2.5">
                {chapter.overview?.learningOutcomes.map((outcome, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 text-xs text-slate-700 dark:text-slate-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div className="leading-relaxed">
                      <MathText text={outcome} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: REAL-WORLD APPLICATIONS */}
          {hasOverview && activeTab === 'applications' && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-cyan-500" />
                <span>Engineering &amp; Scientific Applications</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {chapter.overview?.realWorldApplications.map((app, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-1.5"
                  >
                    <div className="w-6 h-6 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </div>
                    <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      <MathText text={app} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-xs transition-colors cursor-pointer"
            >
              Close
            </button>

            {isMcqAvailable ? (
              <button
                onClick={() => {
                  onClose();
                  onStartTest(chapter);
                }}
                className="flex-2 py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Attempt Chapter MCQs</span>
              </button>
            ) : (
              <button
                onClick={onClose}
                className="flex-2 py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-indigo-200" />
                <span>Dynamic Overview Explored</span>
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
