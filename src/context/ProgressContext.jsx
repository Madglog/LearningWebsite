import React, { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider');
  }
  return context;
};

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('learningProgress');
    return saved ? JSON.parse(saved) : {
      completedSections: {},
      quizScores: {},
      notes: {},
      bookmarks: [],
      flashcardProgress: {},
      studyTime: {},
      lastAccessed: {}
    };
  });

  useEffect(() => {
    localStorage.setItem('learningProgress', JSON.stringify(progress));
  }, [progress]);

  const markSectionComplete = (moduleId, sectionId) => {
    setProgress(prev => ({
      ...prev,
      completedSections: {
        ...prev.completedSections,
        [`${moduleId}-${sectionId}`]: true
      }
    }));
  };

  const saveQuizScore = (quizId, score, total) => {
    setProgress(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [quizId]: {
          score,
          total,
          date: new Date().toISOString(),
          percentage: Math.round((score / total) * 100)
        }
      }
    }));
  };

  const saveNote = (moduleId, sectionId, note) => {
    setProgress(prev => ({
      ...prev,
      notes: {
        ...prev.notes,
        [`${moduleId}-${sectionId}`]: note
      }
    }));
  };

  const toggleBookmark = (moduleId, sectionId) => {
    const bookmarkId = `${moduleId}-${sectionId}`;
    setProgress(prev => {
      const bookmarks = prev.bookmarks.includes(bookmarkId)
        ? prev.bookmarks.filter(b => b !== bookmarkId)
        : [...prev.bookmarks, bookmarkId];
      return { ...prev, bookmarks };
    });
  };

  const updateFlashcardProgress = (cardId, correct) => {
    setProgress(prev => ({
      ...prev,
      flashcardProgress: {
        ...prev.flashcardProgress,
        [cardId]: {
          ...prev.flashcardProgress[cardId],
          attempts: (prev.flashcardProgress[cardId]?.attempts || 0) + 1,
          correct: (prev.flashcardProgress[cardId]?.correct || 0) + (correct ? 1 : 0),
          lastReviewed: new Date().toISOString()
        }
      }
    }));
  };

  const trackStudyTime = (moduleId, seconds) => {
    setProgress(prev => ({
      ...prev,
      studyTime: {
        ...prev.studyTime,
        [moduleId]: (prev.studyTime[moduleId] || 0) + seconds
      }
    }));
  };

  const updateLastAccessed = (moduleId) => {
    setProgress(prev => ({
      ...prev,
      lastAccessed: {
        ...prev.lastAccessed,
        [moduleId]: new Date().toISOString()
      }
    }));
  };

  const getModuleProgress = (moduleId, totalSections) => {
    const completed = Object.keys(progress.completedSections).filter(key =>
      key.startsWith(moduleId)
    ).length;
    return Math.round((completed / totalSections) * 100);
  };

  const resetProgress = () => {
    if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      setProgress({
        completedSections: {},
        quizScores: {},
        notes: {},
        bookmarks: [],
        flashcardProgress: {},
        studyTime: {},
        lastAccessed: {}
      });
    }
  };

  return (
    <ProgressContext.Provider value={{
      progress,
      markSectionComplete,
      saveQuizScore,
      saveNote,
      toggleBookmark,
      updateFlashcardProgress,
      trackStudyTime,
      updateLastAccessed,
      getModuleProgress,
      resetProgress
    }}>
      {children}
    </ProgressContext.Provider>
  );
};
