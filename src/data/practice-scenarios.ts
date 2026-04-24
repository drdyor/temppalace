import type { ThinkLikeLesson } from './think-like';
import {
  thinkLikeEnIt, thinkLikeEnFr, thinkLikeEnEs,
  thinkLikeItEn, thinkLikeFrEn, thinkLikeEsEn,
} from './think-like';

export interface PracticeScenario {
  id: string;
  zoneId: string;
  direction: string;       // e.g. 'en-it', 'it-en'
  sourceLang: string;      // User's native language code
  targetLang: string;      // Language being learned code
  level: 'a1' | 'a2' | 'b1';
  category: string;
  context: string;         // Scene description (1-2 sentences)
  question: string;        // What the user must choose
  wrongOption: {
    text: string;
    explanation: string;   // Why this is the typical mistake
    literalFromSource: string;
  };
  correctOption: {
    text: string;
    explanation: string;   // Why this is natural
  };
  grammarPattern: string;  // The general rule
  tip: string;
}

function lessonToScenario(lesson: ThinkLikeLesson, index: number): PracticeScenario {
  const [targetLang, sourceLang] = lesson.direction.split('-');
  return {
    id: `${lesson.direction}-${lesson.id}`,
    zoneId: `${lesson.category.toLowerCase().replace(/[^a-z]/g, '-')}-${index}`,
    direction: lesson.direction,
    sourceLang,
    targetLang,
    level: lesson.level,
    category: lesson.category,
    context: lesson.title,
    question: `How do you say this naturally in ${targetLang.toUpperCase()}?`,
    wrongOption: {
      text: lesson.youSay,
      explanation: `You think: "${lesson.youThink.split('→')[0].trim()}" — so you say...`,
      literalFromSource: lesson.youThink,
    },
    correctOption: {
      text: lesson.nativeSay,
      explanation: lesson.why,
    },
    grammarPattern: lesson.title,
    tip: lesson.tip,
  };
}

// Seed scenarios from all Think Like lessons
const seeded: PracticeScenario[] = [
  ...thinkLikeEnIt.map((l, i) => lessonToScenario(l, i)),
  ...thinkLikeEnFr.map((l, i) => lessonToScenario(l, i)),
  ...thinkLikeEnEs.map((l, i) => lessonToScenario(l, i)),
  ...thinkLikeItEn.map((l, i) => lessonToScenario(l, i)),
  ...thinkLikeFrEn.map((l, i) => lessonToScenario(l, i)),
  ...thinkLikeEsEn.map((l, i) => lessonToScenario(l, i)),
];

export const practiceScenarios: PracticeScenario[] = seeded;

export const practiceScenariosByDirection: Record<string, PracticeScenario[]> = {
  'en-it': practiceScenarios.filter(s => s.direction === 'en-it'),
  'en-fr': practiceScenarios.filter(s => s.direction === 'en-fr'),
  'en-es': practiceScenarios.filter(s => s.direction === 'en-es'),
  'it-en': practiceScenarios.filter(s => s.direction === 'it-en'),
  'fr-en': practiceScenarios.filter(s => s.direction === 'fr-en'),
  'es-en': practiceScenarios.filter(s => s.direction === 'es-en'),
};

export function getScenariosForUser(nativeLang: string, learningLang: string): PracticeScenario[] {
  const direction = `${learningLang}-${nativeLang}`;
  return practiceScenariosByDirection[direction] || [];
}

export function getScenarioById(id: string): PracticeScenario | undefined {
  return practiceScenarios.find(s => s.id === id);
}
