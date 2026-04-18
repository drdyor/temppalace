import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { Language, LanguageData, VocabularyItem, NarrativeParagraph, LearningDirection } from '../types';
import { italianData } from '../data/italian';
import { getLangConfig, getLabel } from '../lib/language-config';

interface LanguageContextType {
  currentLanguage: Language;
  languageData: LanguageData;
  learningDirection: LearningDirection;
  setLanguage: (lang: Language) => void;
  setLearningDirection: (dir: LearningDirection) => void;
  getWord: (wordId: string) => VocabularyItem | undefined;
  getNarratives: (roomId: string) => NarrativeParagraph[];
  availableLanguages: LanguageData[];
  sourceLabel: string;
  targetLabel: string;
  // Semantic helpers — returns the text that should be shown as "prompt" vs "answer"
  getTargetText: (item: { native: string; english: string }) => string;
  getSourceText: (item: { native: string; english: string }) => string;
}

const availableLanguages = [italianData];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('italian');
  const [languageData, setLanguageData] = useState<LanguageData>(italianData);
  const [learningDirection, setLearningDirectionState] = useState<LearningDirection>('target');

  useEffect(() => {
    const savedLang = localStorage.getItem('memory-palace-language') as Language;
    const savedDir = localStorage.getItem('memory-palace-learning-direction') as LearningDirection;
    if (savedLang && availableLanguages.some(l => l.code === savedLang)) {
      setCurrentLanguage(savedLang);
      setLanguageData(availableLanguages.find(l => l.code === savedLang) || italianData);
    }
    if (savedDir === 'target' || savedDir === 'inverse') {
      setLearningDirectionState(savedDir);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    const data = availableLanguages.find(l => l.code === lang);
    if (data) {
      setCurrentLanguage(lang);
      setLanguageData(data);
      localStorage.setItem('memory-palace-language', lang);
    }
  }, []);

  const setLearningDirection = useCallback((dir: LearningDirection) => {
    setLearningDirectionState(dir);
    localStorage.setItem('memory-palace-learning-direction', dir);
  }, []);

  const getWord = useCallback((wordId: string): VocabularyItem | undefined => {
    return languageData.vocabulary[wordId];
  }, [languageData]);

  const getNarratives = useCallback((roomId: string): NarrativeParagraph[] => {
    return languageData.narratives[roomId] || [];
  }, [languageData]);

  const getTargetText = useCallback(
    (item: { native: string; english: string }) =>
      learningDirection === 'inverse' ? item.english : item.native,
    [learningDirection]
  );

  const getSourceText = useCallback(
    (item: { native: string; english: string }) =>
      learningDirection === 'inverse' ? item.native : item.english,
    [learningDirection]
  );

  const labels = getLabel(currentLanguage, learningDirection);

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      languageData,
      learningDirection,
      setLanguage,
      setLearningDirection,
      getWord,
      getNarratives,
      availableLanguages,
      sourceLabel: labels.sourceLabel,
      targetLabel: labels.targetLabel,
      getTargetText,
      getSourceText,
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
