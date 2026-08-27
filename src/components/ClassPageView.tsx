import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Play, 
  Eye, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  Lock,
  AlertCircle
} from 'lucide-react';
import { Chapter, ClassInfo, ClassLevel, PracticeDifficulty } from '../types';
import { ChapterArtwork } from './ChapterArtwork';
import { MathText } from './MathText';
import { MathService } from '../services/mathService';

interface ClassPageViewProps {
  currentClass: ClassLevel;
  classInfo: ClassInfo;
  chapters: Chapter[];
  track?: string;
  onSelectChapter: (chapter: Chapter, difficulty?: PracticeDifficulty) => void;
  onOpenChapterDetails: (chapter: Chapter, difficulty?: PracticeDifficulty) => void;
  onClassChange: (lvl: ClassLevel) => void;
  onStartFullClassMock?: (lvl: ClassLevel, difficulty?: PracticeDifficulty) => void;
  onBackToHome: () => void;
}

export const ClassPageView: React.FC<ClassPageViewProps> = ({
  currentClass,
  chapters,
  track = 'Elementary Mathematics',
  onSelectChapter,
  onOpenChapterDetails,
  onBackToHome,
}) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<PracticeDifficulty>('Normal');
  const displayTrack = track === 'Elementary Mathematics' ? 'Mathematics' : track === 'Elementary Physics' ? 'Physics' : track;

  // Question counts for current class and difficulty
  const normalQuestionsCount = MathService.getQuestionCountByDifficulty(currentClass, undefined, 'Normal', track);
  const advancedQuestionsCount = MathService.getQuestionCountByDifficulty(currentClass, undefined, 'Advanced', track);

  const isClass11or12 = currentClass === 11 || currentClass === 12;

  return (
    <div id="class-page-view" className="py-6 sm:py-8 bg-slate-50 dark:bg-slate-950 min-h-[calc(100vh-100px)] animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors w-fit cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-slate-900 dark:text-white">
              {displayTrack} — Class {currentClass}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
              {chapters.length} Chapters
            </span>
          </div>
        </div>

        {/* Difficulty Level Selector Bar (Strictly for Class 11 and Class 12 across all subjects) */}
        {isClass11or12 && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-xs flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-black text-slate-900 dark:text-white">
                    Difficulty Level
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    Class {currentClass} {displayTrack}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                    Dual Tier
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {selectedDifficulty === 'Normal'
                    ? `Normal difficulty is active with all standard questions (${normalQuestionsCount} MCQs linked).`
                    : `Advanced difficulty is currently locked. Practice will open once Advanced questions are added.`}
                </p>
              </div>
            </div>

            {/* Normal and Advanced Switcher Buttons */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800/90 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 shrink-0">
              {/* Normal Difficulty Button */}
              <button
                type="button"
                id="class-difficulty-normal-btn"
                onClick={() => setSelectedDifficulty('Normal')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  selectedDifficulty === 'Normal'
                    ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs ring-1 ring-slate-200 dark:ring-slate-700'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <CheckCircle2 className={`w-3.5 h-3.5 ${selectedDifficulty === 'Normal' ? 'text-emerald-500' : 'text-slate-400'}`} />
                <span>Normal</span>
                <span className="px-1.5 py-0.2 text-[9px] font-extrabold rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                  Ready
                </span>
              </button>

              {/* Advanced Difficulty Button */}
              <button
                type="button"
                id="class-difficulty-advanced-btn"
                onClick={() => setSelectedDifficulty('Advanced')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  selectedDifficulty === 'Advanced'
                    ? 'bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-xs ring-1 ring-slate-200 dark:ring-slate-700'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Lock className={`w-3.5 h-3.5 ${selectedDifficulty === 'Advanced' ? 'text-amber-500' : 'text-slate-400'}`} />
                <span>Advanced</span>
                <span className="px-1.5 py-0.2 text-[9px] font-extrabold rounded-md bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
                  Locked
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Warning Notification when Advanced is Selected */}
        {isClass11or12 && selectedDifficulty === 'Advanced' && (
          <div className="p-4 rounded-2xl bg-amber-500/10 dark:bg-amber-950/40 border border-amber-500/30 dark:border-amber-700/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-amber-800 dark:text-amber-300 animate-fade-in">
            <div className="flex items-center gap-2.5">
              <AlertCircle className="w-5 h-5 shrink-0 text-amber-600 dark:text-amber-400" />
              <span>
                <strong>Advanced difficulty</strong> questions for Class {currentClass} {displayTrack} are currently in development. You can review chapter outlines or switch back to <strong>Normal</strong> difficulty to begin practice immediately.
              </span>
            </div>
            <button
              type="button"
              onClick={() => setSelectedDifficulty('Normal')}
              className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shrink-0 cursor-pointer shadow-xs transition-colors"
            >
              Switch to Normal
            </button>
          </div>
        )}

        {/* Chapters Cards Grid or Empty State */}
        {chapters.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-12 text-center max-w-xl mx-auto space-y-4 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 mx-auto flex items-center justify-center">
              <BookOpen className="w-8 h-8" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                {displayTrack} — Class {currentClass}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                This section is currently empty. Questions and chapters will be added later. Practice sessions and scores will automatically connect to the <strong>{displayTrack}</strong> Academic Ranking.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter, idx) => (
              <div
                key={chapter.id}
                className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/60 dark:hover:border-indigo-500/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Background Artwork Banner */}
                <div 
                  onClick={() => onOpenChapterDetails(chapter, selectedDifficulty)}
                  className="cursor-pointer relative group-hover:scale-[1.01] transition-transform duration-300"
                >
                  <ChapterArtwork
                    theme={chapter.artTheme}
                    title={chapter.name}
                    category={chapter.category}
                    size="card"
                    className="rounded-b-none border-x-0 border-t-0"
                  />

                  <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5">
                    <span className="w-6 h-6 rounded-full bg-black/50 backdrop-blur-md text-white font-mono font-bold text-[11px] flex items-center justify-center border border-white/20">
                      {idx + 1}
                    </span>
                    {isClass11or12 && (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold backdrop-blur-md border ${
                        selectedDifficulty === 'Normal'
                          ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                          : 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                      }`}>
                        {selectedDifficulty}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  
                  <div className="space-y-2.5">
                    <div className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      <MathText text={chapter.description} />
                    </div>

                    {/* Key Topics Tag Clouds */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {chapter.keyTopics.slice(0, 3).map((topic, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-medium"
                        >
                          <MathText text={topic} />
                        </span>
                      ))}
                      {chapter.keyTopics.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-400 text-[10px] font-medium">
                          +{chapter.keyTopics.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2">
                    <button
                      onClick={() => onOpenChapterDetails(chapter, isClass11or12 ? selectedDifficulty : 'Normal')}
                      className="flex-1 py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Overview</span>
                    </button>

                    <button
                      onClick={() => onSelectChapter(chapter, isClass11or12 ? selectedDifficulty : 'Normal')}
                      className={`flex-2 py-2 px-3 rounded-xl font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        isClass11or12 && selectedDifficulty === 'Advanced'
                          ? 'bg-purple-700 hover:bg-purple-800 text-white shadow-purple-700/20'
                          : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/20'
                      }`}
                    >
                      {isClass11or12 && selectedDifficulty === 'Advanced' ? (
                        <>
                          <Lock className="w-3.5 h-3.5 text-amber-300" />
                          <span>Advanced Practice</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>Start Practice</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
