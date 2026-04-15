// Language-agnostic types for Memory Palace

export type Gender = 'masculine' | 'feminine' | 'none';
export type Language = 'italian' | 'french' | 'spanish';
export type DifficultyLevel = 'basic' | 'intermediate' | 'advanced';
export type TabType = 'explore' | 'learn' | 'practice' | 'test' | 'narratives' | 'culture' | 'dialogue' | 'stories';

export interface Example {
  native: string;
  english: string;
}

export interface VocabularyItem {
  id: string;
  native: string;
  english: string;
  gender: Gender;
  pronunciation: string;
  emoji?: string;
  mnemonic?: string;
  examples?: Example[];
  plural?: string;
  notes?: string;
  x: number;
  y: number;
}

export interface Zone {
  id: string;
  name: string;
  nameNative: string;
  description: string;
  icon: string;
  x: number;
  y: number;
  width: number;
  height: number;
  interiorImage?: string;
  interiorVocab?: Array<{
    wordId: string;
    x: number;
    y: number;
  }>;
}

export interface GrammarPoint {
  id: string;
  title: string;
  explanation: string;
  example: string;
  color: string;
}

export interface NarrativeParagraph {
  id: string;
  order: number;
  tense: 'past' | 'present' | 'future';
  native: string;
  english: string;
  highlightedWords: string[];
  grammarFocus: string;
  zonePath?: string[];
}

export interface Room {
  id: string;
  name: string;
  subtitle: string;
  nameNative: string;
  image: string;
  description: string;
  grammarFocus: string;
  zones: Zone[];
  vocabularyIds: string[];
  grammarPoints: GrammarPoint[];
  narrativeIds?: string[];
}

export interface LanguageData {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
  vocabulary: Record<string, VocabularyItem>;
  narratives: Record<string, NarrativeParagraph[]>;
}

export interface WordProgress {
  wordId: string;
  learned: boolean;
  level: number;
  nextReview?: string;
  attempts: number;
  correct: number;
}

export interface RoomProgress {
  roomId: string;
  words: Record<string, WordProgress>;
  mastery: number;
}

// Cultural Fluency Types
export interface CulturalRule {
  id: string;
  category: 'food' | 'coffee' | 'greetings' | 'timing' | 'shopping' | 'transport' | 'social';
  title: string;
  titleNative: string;
  rule: string;
  why: string;
  consequence: string;
  solution: string;
  phrases: { situation: string; italian: string; english: string }[];
}

export interface RoomCulture {
  roomId: string;
  specificRules: CulturalRule[];
  exampleDialogue: {
    context: string;
    lines: { speaker: string; italian: string; english: string; note?: string }[];
  };
}
