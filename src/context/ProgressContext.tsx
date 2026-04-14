import React, { createContext, useContext, useState, useEffect } from 'react';
import type { WordProgress, RoomProgress } from '../types';

interface ProgressContextType {
  progress: Record<string, RoomProgress>;
  markWordLearned: (roomId: string, wordId: string) => void;
  updateWordAttempt: (roomId: string, wordId: string, correct: boolean) => void;
  getWordProgress: (roomId: string, wordId: string) => WordProgress | undefined;
  getRoomMastery: (roomId: string) => number;
  getTotalStats: () => { learned: number; total: number; mastery: number };
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const STORAGE_KEY = 'memory-palace-progress';

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<Record<string, RoomProgress>>({});

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch {
        console.error('Failed to load progress');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const getOrCreateRoomProgress = (roomId: string): RoomProgress => {
    if (!progress[roomId]) {
      return {
        roomId,
        words: {},
        mastery: 0,
      };
    }
    return progress[roomId];
  };

  const markWordLearned = (roomId: string, wordId: string) => {
    setProgress(prev => {
      const roomProgress = getOrCreateRoomProgress(roomId);
      const wordProgress = roomProgress.words[wordId] || {
        wordId,
        learned: false,
        level: 0,
        attempts: 0,
        correct: 0,
      };
      
      roomProgress.words[wordId] = {
        ...wordProgress,
        learned: true,
        level: Math.max(wordProgress.level, 1),
      };
      
      // Recalculate mastery
      const words = Object.values(roomProgress.words);
      roomProgress.mastery = words.filter(w => w.learned).length / Math.max(words.length, 1) * 100;
      
      return { ...prev, [roomId]: roomProgress };
    });
  };

  const updateWordAttempt = (roomId: string, wordId: string, correct: boolean) => {
    setProgress(prev => {
      const roomProgress = getOrCreateRoomProgress(roomId);
      const wordProgress = roomProgress.words[wordId] || {
        wordId,
        learned: false,
        level: 0,
        attempts: 0,
        correct: 0,
      };
      
      const intervals = [1, 3, 7, 14, 30]; // SRS intervals in days
      const newLevel = correct 
        ? Math.min(wordProgress.level + 1, 4)
        : Math.max(wordProgress.level - 1, 0);
      
      const nextReview = new Date();
      nextReview.setDate(nextReview.getDate() + intervals[newLevel]);
      
      roomProgress.words[wordId] = {
        ...wordProgress,
        learned: correct || wordProgress.learned,
        level: newLevel,
        nextReview: nextReview.toISOString(),
        attempts: wordProgress.attempts + 1,
        correct: wordProgress.correct + (correct ? 1 : 0),
      };
      
      const words = Object.values(roomProgress.words);
      roomProgress.mastery = words.filter(w => w.learned).length / Math.max(words.length, 1) * 100;
      
      return { ...prev, [roomId]: roomProgress };
    });
  };

  const getWordProgress = (roomId: string, wordId: string): WordProgress | undefined => {
    return progress[roomId]?.words[wordId];
  };

  const getRoomMastery = (roomId: string): number => {
    return progress[roomId]?.mastery || 0;
  };

  const getTotalStats = () => {
    const allRooms = Object.values(progress);
    const allWords = allRooms.flatMap(r => Object.values(r.words));
    const learned = allWords.filter(w => w.learned).length;
    const total = allWords.length;
    const mastery = total > 0 ? learned / total * 100 : 0;
    return { learned, total, mastery };
  };

  return (
    <ProgressContext.Provider value={{
      progress,
      markWordLearned,
      updateWordAttempt,
      getWordProgress,
      getRoomMastery,
      getTotalStats,
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider');
  }
  return context;
}
