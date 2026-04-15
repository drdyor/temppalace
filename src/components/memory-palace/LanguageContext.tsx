import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { kitchenLevels, allPalaces, getLevelById, getPalaceRoot } from './data';
import { allFrenchPalacesExtended, getFrenchExtendedLevelById, getFrenchExtendedPalaceRoot } from './data-fr-extended';
import type { SpatialLevel } from './SimpleViewer';

export type Language = 'it' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getLevels: () => SpatialLevel[];
  getLevelById: (id: string) => SpatialLevel | undefined;
  getPalaceRoot: (palaceId: string) => SpatialLevel | undefined;
  getAllPalaces: () => Record<string, SpatialLevel[]>;
}

const translations = {
  it: {
    'nav.kitchen': 'La Cucina',
    'nav.bedroom': 'La Camera',
    'nav.living': 'Il Soggiorno',
    'nav.progress': 'Progresso',
    'nav.mastered': 'Parole Imparate',
    'action.back': 'Torna',
    'action.listen': 'Ascolta',
    'action.master': 'Segna come Imparata',
    'action.mastered': 'Imparata ✓',
    'label.masculine': 'maschile',
    'label.feminine': 'femminile',
    'label.verbs': 'Verbi associati',
    'label.related': 'Parole correlate',
    'label.tenses': 'Tempi verbali',
    'tense.past': 'Passato',
    'tense.present': 'Presente',
    'tense.future': 'Futuro',
  },
  fr: {
    'nav.kitchen': 'La Cuisine',
    'nav.bedroom': 'La Chambre',
    'nav.living': 'Le Salon',
    'nav.progress': 'Progrès',
    'nav.mastered': 'Mots Appris',
    'action.back': 'Retour',
    'action.listen': 'Écouter',
    'action.master': 'Marquer comme Appris',
    'action.mastered': 'Appris ✓',
    'label.masculine': 'masculin',
    'label.feminine': 'féminin',
    'label.verbs': 'Verbes associés',
    'label.related': 'Mots liés',
    'label.tenses': 'Temps verbaux',
    'tense.past': 'Passé',
    'tense.present': 'Présent',
    'tense.future': 'Futur',
  },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Load from localStorage or default to Italian
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('memory-palace-language') as Language) || 'it';
    }
    return 'it';
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('memory-palace-language', lang);
    }
  }, []);

  const t = useCallback((key: string): string => {
    return translations[language][key as keyof typeof translations['it']] || key;
  }, [language]);

  const getLevels = useCallback((): SpatialLevel[] => {
    return language === 'fr' ? Object.values(allFrenchPalacesExtended).flat() : kitchenLevels;
  }, [language]);

  const getLevelByIdWrapped = useCallback((id: string): SpatialLevel | undefined => {
    return language === 'fr' ? getFrenchExtendedLevelById(id) : getLevelById(id);
  }, [language]);

  const getPalaceRootWrapped = useCallback((palaceId: string): SpatialLevel | undefined => {
    return language === 'fr' ? getFrenchExtendedPalaceRoot(palaceId) : getPalaceRoot(palaceId);
  }, [language]);

  const getAllPalacesWrapped = useCallback((): Record<string, SpatialLevel[]> => {
    return language === 'fr' ? allFrenchPalacesExtended : allPalaces;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        getLevels,
        getLevelById: getLevelByIdWrapped,
        getPalaceRoot: getPalaceRootWrapped,
        getAllPalaces: getAllPalacesWrapped,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
