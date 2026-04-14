import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language, LanguageData, VocabularyItem, NarrativeParagraph } from '../types';
import { italianData } from '../data/italian';

interface LanguageContextType {
  currentLanguage: Language;
  languageData: LanguageData;
  setLanguage: (lang: Language) => void;
  getWord: (wordId: string) => VocabularyItem | undefined;
  getNarratives: (roomId: string) => NarrativeParagraph[];
  availableLanguages: LanguageData[];
}

const availableLanguages = [italianData];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('italian');
  const [languageData, setLanguageData] = useState<LanguageData>(italianData);

  useEffect(() => {
    const saved = localStorage.getItem('memory-palace-language') as Language;
    if (saved && availableLanguages.some(l => l.code === saved)) {
      setCurrentLanguage(saved);
      setLanguageData(availableLanguages.find(l => l.code === saved) || italianData);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    const data = availableLanguages.find(l => l.code === lang);
    if (data) {
      setCurrentLanguage(lang);
      setLanguageData(data);
      localStorage.setItem('memory-palace-language', lang);
    }
  };

  const getWord = (wordId: string): VocabularyItem | undefined => {
    return languageData.vocabulary[wordId];
  };

  const getNarratives = (roomId: string): NarrativeParagraph[] => {
    return languageData.narratives[roomId] || [];
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      languageData,
      setLanguage,
      getWord,
      getNarratives,
      availableLanguages,
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
