import React from 'react';
import { 
  ArrowLeft, 
  Play, 
  Eye,
  BookOpen
} from 'lucide-react';
import { Chapter, ClassInfo, ClassLevel } from '../types';
import { ChapterArtwork } from './ChapterArtwork';
import { MathText } from './MathText';

interface ClassPageViewProps {
  currentClass: ClassLevel;
  classInfo: ClassInfo;
  chapters: Chapter[];
  track?: string;
  onSelectChapter: (chapter: Chapter) => void;
  onOpenChapterDetails: (chapter: Chapter) => void;
  onClassChange: (lvl: ClassLevel) => void;
  onStartFullClassMock?: (lvl: ClassLevel) => void;
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
              {track} — Class {currentClass}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
              {chapters.length} Chapters
            </span>
          </div>
        </div>

        {/* Chapters Cards Grid or Empty State */}
        {chapters.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-12 text-center max-w-xl mx-auto space-y-4 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 mx-auto flex items-center justify-center">
              <BookOpen className="w-8 h-8" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                {track} — Class {currentClass}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                This section is currently empty. Questions and chapters will be added later. Practice sessions and scores will automatically connect to the <strong>{track}</strong> Leaderboard.
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
                  onClick={() => onOpenChapterDetails(chapter)}
                  className="cursor-pointer relative group-hover:scale-[1.01] transition-transform duration-300"
                >
                  <ChapterArtwork
                    theme={chapter.artTheme}
                    title={chapter.name}
                    category={chapter.category}
                    size="card"
                    className="rounded-b-none border-x-0 border-t-0"
                  />

                  <div className="absolute top-3 left-3 z-20">
                    <span className="w-6 h-6 rounded-full bg-black/50 backdrop-blur-md text-white font-mono font-bold text-[11px] flex items-center justify-center border border-white/20">
                      {idx + 1}
                    </span>
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
                      onClick={() => onOpenChapterDetails(chapter)}
                      className="flex-1 py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Overview</span>
                    </button>

                    {(chapter.questionCount || 0) > 0 ? (
                      <button
                        onClick={() => onSelectChapter(chapter)}
                        className="flex-2 py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm shadow-indigo-600/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Practice Chapter</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => onOpenChapterDetails(chapter)}
                        className="flex-2 py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm shadow-indigo-600/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Practice Chapter</span>
                      </button>
                    )}
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
