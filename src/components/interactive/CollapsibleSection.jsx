import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Check, Bookmark, BookmarkCheck } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';

export const CollapsibleSection = ({
  title,
  children,
  moduleId,
  sectionId,
  icon: Icon,
  defaultOpen = false
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const { progress, markSectionComplete, toggleBookmark } = useProgress();

  const isCompleted = progress.completedSections[`${moduleId}-${sectionId}`];
  const isBookmarked = progress.bookmarks.includes(`${moduleId}-${sectionId}`);

  const handleComplete = (e) => {
    e.stopPropagation();
    markSectionComplete(moduleId, sectionId);
  };

  const handleBookmark = (e) => {
    e.stopPropagation();
    toggleBookmark(moduleId, sectionId);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all group"
      >
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              <Icon size={20} />
            </div>
          )}
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 text-left">
            {title}
          </h3>
          {isCompleted && (
            <div className="px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">
              <Check size={14} className="text-green-600 dark:text-green-400" />
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleBookmark}
            className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {isBookmarked ? (
              <BookmarkCheck size={18} className="text-yellow-600 dark:text-yellow-400" />
            ) : (
              <Bookmark size={18} className="text-slate-400" />
            )}
          </motion.button>

          {!isCompleted && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleComplete}
              className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Mark Complete
            </motion.button>
          )}

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={20} className="text-slate-500" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-5 text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-700">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
