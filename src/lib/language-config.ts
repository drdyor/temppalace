// Language velcro — central registry for TTS, voice selection, and display metadata.
// Add a new language here and it flows through the entire app without touching components.

import type { Language } from '../types';

export type LearningDirection = 'target' | 'inverse';

export interface LanguageConfig {
  code: Language;
  name: string;        // e.g. "Italian"
  nativeName: string;  // e.g. "Italiano"
  flag: string;        // e.g. "🇮🇹"
  iso: string;         // e.g. "it"
  ttsCode: string;     // e.g. "it-IT"
  voiceSearch: string[]; // keywords to find the best voice
  articleMasculine?: string; // e.g. "il"
  articleFeminine?: string;  // e.g. "la"
}

export const LANGUAGE_REGISTRY: Record<Language, LanguageConfig> = {
  italian: {
    code: 'italian',
    name: 'Italian',
    nativeName: 'Italiano',
    flag: '🇮🇹',
    iso: 'it',
    ttsCode: 'it-IT',
    voiceSearch: ['it', 'italian', 'italiano'],
    articleMasculine: 'il',
    articleFeminine: 'la',
  },
  french: {
    code: 'french',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    iso: 'fr',
    ttsCode: 'fr-FR',
    voiceSearch: ['fr', 'french', 'français'],
    articleMasculine: 'le',
    articleFeminine: 'la',
  },
  spanish: {
    code: 'spanish',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    iso: 'es',
    ttsCode: 'es-ES',
    voiceSearch: ['es', 'spanish', 'español'],
    articleMasculine: 'el',
    articleFeminine: 'la',
  },
};

export function getLangConfig(lang: Language): LanguageConfig {
  return LANGUAGE_REGISTRY[lang] ?? LANGUAGE_REGISTRY.italian;
}

export function getTtsCode(lang: Language): string {
  return getLangConfig(lang).ttsCode;
}

export function getVoiceSearch(lang: Language): string[] {
  return getLangConfig(lang).voiceSearch;
}

export function getArticle(gender: 'masculine' | 'feminine' | 'none', lang: Language): string {
  const cfg = getLangConfig(lang);
  if (gender === 'masculine') return cfg.articleMasculine ?? '';
  if (gender === 'feminine') return cfg.articleFeminine ?? '';
  return '';
}

// Semantic helpers for learning direction
// In "target" mode you learn {native} from English.
// In "inverse" mode you learn English from {native}.
export function getLabel(
  lang: Language,
  direction: LearningDirection
): { sourceLabel: string; targetLabel: string } {
  const cfg = getLangConfig(lang);
  if (direction === 'inverse') {
    return { sourceLabel: cfg.nativeName, targetLabel: 'English' };
  }
  return { sourceLabel: 'English', targetLabel: cfg.nativeName };
}
