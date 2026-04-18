// Language-agnostic types for Memory Palace
// NOTE: VocabularyItem uses 'native' (= target language) and 'english' (= source language).
//       When learningDirection === 'inverse', the UI swaps which is shown as prompt/answer.

export type Gender = 'masculine' | 'feminine' | 'none';
export type Language = 'italian' | 'french' | 'spanish';
export type LearningDirection = 'target' | 'inverse';
export type DifficultyLevel = 'basic' | 'intermediate' | 'advanced';
export type TabType = 'explore' | 'learn' | 'practice' | 'test' | 'narratives' | 'culture' | 'dialogue' | 'stories';

export interface Example {
  native: string;   // target language text
  english: string;  // source language text (English)
}

export interface VocabularyItem {
  id: string;
  native: string;   // target language word
  english: string;  // English translation
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
  native: string;   // target language text
  english: string;  // source language text
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

// ========================
// Dialogue & Template Types (language-agnostic)
// ========================

// TODO(LANG-VELCRO): The following types use 'italian'/'english' because their data files
// (dialogues.ts, dialogues-social.ts, dialogues-strategy.ts) are legacy Italian-only content.
// They are kept as-is to avoid breaking the data layer. These files are flagged in the audit.

export interface DialogueLine {
  speaker: 'A' | 'B' | string;
  italian: string;
  english: string;
  pattern?: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  tip?: string;
  strategicLayer?: {
    hiddenAgenda: string;
    powerDynamic: 'superior' | 'inferior' | 'equal' | 'shifting' | string;
    emotionalState: string;
    lawOfPower?: string;
  };
}

export interface ConversationPattern {
  id: string;
  name: string;
  nameNative: string;
  formula: string;
  examples: { italian: string; english: string }[];
  variations: string[];
  whenToUse: string;
}

export interface RolePlayScenario {
  id: string;
  roomId: string;
  title: string;
  titleNative: string;
  context: string;
  yourRole: string;
  partnerRole: string;
  goal: string;
  dialogue: DialogueLine[];
  patterns: string[];
  alternatives: { situation: string; responses: string[] }[];
}

// Branching scenario types
export interface ScenarioChoice {
  text: string;
  textTarget?: string;
  nextNodeId: string;
  feedback?: string;
  feedbackTarget?: string;
  effect?: {
    culturalNote?: string;
    reputationChange?: number;
  };
}

export interface ScenarioNode {
  id: string;
  speaker: 'narrator' | 'npc' | 'player';
  text: string;          // source language (English) description
  textTarget?: string;   // target language text
  backgroundEffect?: 'happy' | 'angry' | 'neutral' | 'surprised';
  choices: ScenarioChoice[];
}

export interface BranchingScenario {
  id: string;
  roomId: string;
  title: string;
  titleNative: string;
  timeContext: string;
  startNodeId: string;
  culturalLesson: string;
  phrasesLearned: { target: string; source: string; situation: string }[];
  catCharacter: {
    id: string;
    name: string;
    emoji: string;
    color: string;
  };
  nodes: Record<string, ScenarioNode>;
}

// Cultural Fluency Types
// TODO(LANG-VELCRO): cultural-fluency.ts is Italian-only content. Keeping original field names.

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
