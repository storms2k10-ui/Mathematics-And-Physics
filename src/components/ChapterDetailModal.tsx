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
  Award,
  Lock
} from 'lucide-react';
import { Chapter, PracticeDifficulty } from '../types';
import { ChapterArtwork } from './ChapterArtwork';
import { MathText } from './MathText';
import { MathService } from '../services/mathService';

interface ChapterDetailModalProps {
  chapter: Chapter | null;
  isOpen: boolean;
  defaultDifficulty?: PracticeDifficulty;
  onClose: () => void;
  onStartTest: (chapter: Chapter, difficulty?: PracticeDifficulty) => void;
}

export const ChapterDetailModal: React.FC<ChapterDetailModalProps> = ({
  chapter,
  isOpen,
  defaultDifficulty = 'Normal',
  onClose,
  onStartTest,
}) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<PracticeDifficulty>(defaultDifficulty);

  if (!isOpen || !chapter) return null;

  const isClass11or12 = chapter.class === 11 || chapter.class === 12;
  const effectiveDifficulty = isClass11or12 ? selectedDifficulty : 'Normal';
  const subjectSuffix = chapter.track?.includes('Physics') 
    ? 'Physics' 
    : chapter.track?.includes('Chemistry') 
    ? 'Chemistry' 
    : 'Mathematics';

  const normalCount = MathService.getQuestionCountByDifficulty(chapter.class, chapter.id, 'Normal', chapter.track);
  const advancedCount = MathService.getQuestionCountByDifficulty(chapter.class, chapter.id, 'Advanced', chapter.track);
  const isNormalUnlocked = normalCount > 0;
  const isAdvancedUnlocked = advancedCount > 0;
  const isCurrentTierUnlocked = effectiveDifficulty === 'Advanced' ? isAdvancedUnlocked : isNormalUnlocked;
  const currentTierCount = effectiveDifficulty === 'Advanced' ? advancedCount : normalCount;

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
              {chapter.track || 'Elementary Physics'} • Class {chapter.class} {subjectSuffix}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-black bg-indigo-600/90 text-white shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Overview
            </span>
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

        {/* Modal Body Content - All merged in Single Comprehensive Overview Section */}
        <div className="p-6 space-y-6 overflow-y-auto">
          
          {/* Master Formula / Highlight Banner */}
          {chapter.formulaHighlight && (
            <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/80 shadow-2xs">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Master Formula &amp; Highlight</span>
              </div>
              <div className="text-sm font-mono text-indigo-950 dark:text-indigo-100 overflow-x-auto py-1">
                <MathText text={`$$${chapter.formulaHighlight}$$`} />
              </div>
            </div>
          )}

          {/* Comprehensive Chapter Summary */}
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
              <div className="text-xs text-amber-900/80 dark:text-amber-200/90 leading-relaxed">
                <MathText text={chapter.overview.historicalContext} />
              </div>
            </div>
          )}

          {/* Core Syllabus Topics */}
          {chapter.keyTopics && chapter.keyTopics.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-500" />
                <span>Core Syllabus Topics</span>
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
          )}

          {/* Key Theorems / Physical Laws */}
          {chapter.overview?.keyTheorems && chapter.overview.keyTheorems.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-indigo-500" />
                <span>Fundamental Principles &amp; Laws</span>
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
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
                    {thm.importance && (
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 pt-0.5">
                        <span className="font-semibold text-indigo-600 dark:text-indigo-400">Significance:</span> <MathText text={thm.importance} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Essential Formulas & Equations (Merged into Overview) */}
          {chapter.overview?.coreFormulas && chapter.overview.coreFormulas.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Calculator className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Essential Formulas &amp; Equations</span>
                </h4>
                <span className="text-[11px] font-semibold text-slate-400">
                  {chapter.overview.coreFormulas.length} Core Equations
                </span>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {chapter.overview.coreFormulas.map((f, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-1.5"
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
                      <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        <MathText text={f.explanation} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Chapter Mastery & Learning Outcomes (Merged into Overview) */}
          {chapter.overview?.learningOutcomes && chapter.overview.learningOutcomes.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-emerald-500" />
                <span>Learning Outcomes &amp; Mastery Objectives</span>
              </h4>

              <div className="space-y-2">
                {chapter.overview.learningOutcomes.map((outcome, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 text-xs text-slate-700 dark:text-slate-300"
                  >
                    <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-[9px] shrink-0 mt-0.5">
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

          {/* Engineering & Scientific Applications (Merged into Overview) */}
          {chapter.overview?.realWorldApplications && chapter.overview.realWorldApplications.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-cyan-500" />
                <span>Engineering &amp; Scientific Applications</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {chapter.overview.realWorldApplications.map((app, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-1"
                  >
                    <div className="w-5 h-5 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 flex items-center justify-center text-[10px] font-bold">
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

          {/* Difficulty Tier Selector (Normal / Advanced) - Strictly for Class 11 & 12 */}
          {isClass11or12 && (
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Difficulty Level
                </span>
                <span className="block text-[11px] text-slate-500 dark:text-slate-400">
                  {selectedDifficulty === 'Normal' 
                    ? 'Standard curriculum exercises'
                    : 'Higher level & competitive concepts'}
                </span>
              </div>

              <div className="flex items-center gap-1 bg-slate-200/70 dark:bg-slate-900/80 p-1 rounded-xl w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setSelectedDifficulty('Normal')}
                  className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    selectedDifficulty === 'Normal'
                      ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isNormalUnlocked ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Lock className="w-3.5 h-3.5 text-amber-500" />
                  )}
                  <span>Normal</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedDifficulty('Advanced')}
                  className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    selectedDifficulty === 'Advanced'
                      ? 'bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isAdvancedUnlocked ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-500" />
                  ) : (
                    <Lock className="w-3.5 h-3.5 text-amber-500" />
                  )}
                  <span>Advanced</span>
                </button>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2.5">
              <button
                onClick={onClose}
                className="flex-1 py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-xs transition-colors cursor-pointer"
              >
                Close
              </button>

              {isCurrentTierUnlocked ? (
                <button
                  onClick={() => {
                    onClose();
                    onStartTest(chapter, effectiveDifficulty);
                  }}
                  className="flex-2 py-2.5 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/25 transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Start Practice</span>
                </button>
              ) : (
                <button
                  disabled
                  className="flex-2 py-2.5 px-5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 font-bold text-xs border border-slate-300 dark:border-slate-700 cursor-not-allowed flex items-center justify-center gap-1.5"
                >
                  <Lock className="w-3.5 h-3.5 text-amber-500" />
                  <span>Locked ({effectiveDifficulty})</span>
                </button>
              )}
            </div>

            {!isCurrentTierUnlocked && (
              <p className="text-center text-[11px] text-amber-600 dark:text-amber-400">
                Questions for this chapter in {effectiveDifficulty} difficulty have not been added yet. This chapter will automatically unlock once questions are added.
              </p>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
