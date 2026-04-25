// School Palace — Principal's Office
// English source layer (truth layer)
// A1 level, concrete objects only for image pins

import type { Room } from '../../types';

// ============================================================================
// ROOM DEFINITION
// ============================================================================

export const principalOfficeRoom: Room = {
  id: 'principal-office',
  name: "Principal's Office",
  subtitle: 'Rules & Respect',
  nameNative: "Ufficio del Preside",
  image: 'rooms/school/principal-office.jpg',
  description: 'Where the principal works and where you go to talk about important things.',
  grammarFocus: 'polite requests & behaviour words',
  vocabularyIds: [
    // The Office
    'office-desk', 'office-chair', 'office-computer', 'office-phone', 'office-paper',
    'office-pen', 'office-clock', 'office-calendar', 'office-trophy', 'office-photo',
    'office-plant', 'office-bookshelf', 'office-lamp', 'office-carpet', 'office-door',
    // Talking to the Principal
    'talk-talk', 'talk-listen', 'talk-explain', 'talk-sorry', 'talk-please',
    'talk-thank', 'talk-problem', 'talk-worry', 'talk-idea', 'talk-promise',
    'talk-truth', 'talk-lie', 'talk-respect', 'talk-trust', 'talk-understand',
    // Rules & Behaviour
    'rule-rule', 'rule-behaviour', 'rule-good', 'rule-bad', 'rule-kind',
    'rule-unkind', 'rule-polite', 'rule-rude', 'rule-fair', 'rule-unfair',
    'rule-share', 'rule-help', 'rule-include', 'rule-bully', 'rule-friend',
  ],
  zones: [
    {
      id: 'the-office',
      name: 'The Office',
      nameNative: "L'Ufficio",
      description: 'Where the principal works',
      icon: '🪑',
      x: 30,
      y: 35,
      width: 30,
      height: 25,
      interiorImage: 'rooms/school/principal-office-room.jpg',
      interiorVocab: [
        { wordId: 'office-desk', x: 20, y: 25 },
        { wordId: 'office-chair', x: 50, y: 20 },
        { wordId: 'office-computer', x: 80, y: 25 },
        { wordId: 'office-phone', x: 25, y: 50 },
        { wordId: 'office-paper', x: 55, y: 45 },
        { wordId: 'office-pen', x: 80, y: 50 },
        { wordId: 'office-clock', x: 15, y: 70 },
        { wordId: 'office-calendar', x: 40, y: 70 },
        { wordId: 'office-trophy', x: 65, y: 70 },
        { wordId: 'office-photo', x: 85, y: 75 },
        { wordId: 'office-plant', x: 20, y: 90 },
        { wordId: 'office-bookshelf', x: 45, y: 90 },
        { wordId: 'office-lamp', x: 65, y: 90 },
        { wordId: 'office-carpet', x: 80, y: 90 },
        { wordId: 'office-door', x: 90, y: 60 },
      ],
    },
    {
      id: 'talking-principal',
      name: 'Talking to the Principal',
      nameNative: 'Parlare con il Preside',
      description: 'What you say and feel',
      icon: '🗣️',
      x: 65,
      y: 55,
      width: 25,
      height: 25,
      interiorImage: 'rooms/school/principal-office-talk.jpg',
      interiorVocab: [
        { wordId: 'talk-talk', x: 20, y: 20 },
        { wordId: 'talk-listen', x: 50, y: 20 },
        { wordId: 'talk-explain', x: 80, y: 20 },
        { wordId: 'talk-sorry', x: 20, y: 45 },
        { wordId: 'talk-please', x: 50, y: 45 },
        { wordId: 'talk-thank', x: 80, y: 45 },
        { wordId: 'talk-problem', x: 20, y: 65 },
        { wordId: 'talk-worry', x: 50, y: 65 },
        { wordId: 'talk-idea', x: 80, y: 65 },
        { wordId: 'talk-promise', x: 20, y: 85 },
        { wordId: 'talk-truth', x: 40, y: 85 },
        { wordId: 'talk-lie', x: 60, y: 85 },
        { wordId: 'talk-respect', x: 75, y: 85 },
        { wordId: 'talk-trust', x: 30, y: 95 },
        { wordId: 'talk-understand', x: 55, y: 95 },
      ],
    },
    {
      id: 'rules-behaviour',
      name: 'Rules & Behaviour',
      nameNative: 'Regole e Comportamento',
      description: 'How to act at school',
      icon: '📏',
      x: 20,
      y: 65,
      width: 35,
      height: 25,
      interiorImage: 'rooms/school/principal-office-rules.jpg',
      interiorVocab: [
        { wordId: 'rule-rule', x: 20, y: 20 },
        { wordId: 'rule-behaviour', x: 50, y: 20 },
        { wordId: 'rule-good', x: 80, y: 20 },
        { wordId: 'rule-bad', x: 20, y: 45 },
        { wordId: 'rule-kind', x: 50, y: 45 },
        { wordId: 'rule-unkind', x: 80, y: 45 },
        { wordId: 'rule-polite', x: 20, y: 65 },
        { wordId: 'rule-rude', x: 50, y: 65 },
        { wordId: 'rule-fair', x: 80, y: 65 },
        { wordId: 'rule-unfair', x: 20, y: 85 },
        { wordId: 'rule-share', x: 40, y: 85 },
        { wordId: 'rule-help', x: 60, y: 85 },
        { wordId: 'rule-include', x: 75, y: 85 },
        { wordId: 'rule-bully', x: 30, y: 95 },
        { wordId: 'rule-friend', x: 55, y: 95 },
      ],
    },
  ],
  grammarPoints: [
    {
      id: 'principal-polite',
      title: 'Polite Requests',
      explanation: 'Asking for help in a polite way',
      example: 'Can I...? Could you...? May I...?',
      color: '#10B981',
    },
    {
      id: 'principal-behaviour',
      title: 'Behaviour Words',
      explanation: 'Describing how people act',
      example: 'Be kind. Do not be rude.',
      color: '#F59E0B',
    },
  ],
};

// ============================================================================
// VOCABULARY — CONCEPT-BASED WITH LANGUAGE LAYERS
// ============================================================================

export interface SchoolConcept {
  id: string;
  emoji?: string;
  en: {
    word: string;
    phrase?: string;
    context?: string;
  };
  it?: {
    word: string;
    phrase?: string;
    gender?: 'masculine' | 'feminine' | 'none';
    pronunciation?: string;
    audit?: {
      status: 'pending' | 'pass' | 'fix' | 'reject';
      auditor: string;
      notes?: string;
    };
  };
  fr?: {
    word: string;
    phrase?: string;
    gender?: 'masculine' | 'feminine' | 'none';
    pronunciation?: string;
    audit?: {
      status: 'pending' | 'pass' | 'fix' | 'reject';
      auditor: string;
      notes?: string;
    };
  };
  mt?: {
    word: string;
    phrase?: string;
    audit?: {
      status: 'pending' | 'pass' | 'fix' | 'reject';
      auditor: string;
      notes?: string;
    };
  };
}

export const principalOfficeVocabulary: SchoolConcept[] = [
  // === THE OFFICE ===
  { id: 'office-desk', emoji: '🪑', en: { word: 'desk', phrase: 'The principal sits at the desk.', context: 'Furniture' } },
  { id: 'office-chair', emoji: '🪑', en: { word: 'chair', phrase: 'A big chair.', context: 'Furniture' } },
  { id: 'office-computer', emoji: '💻', en: { word: 'computer', phrase: 'The computer is on.', context: 'Technology' } },
  { id: 'office-phone', emoji: '☎️', en: { word: 'phone', phrase: 'The phone rings.', context: 'Communication' } },
  { id: 'office-paper', emoji: '📄', en: { word: 'paper', phrase: 'Paper on the desk.', context: 'Stationery' } },
  { id: 'office-pen', emoji: '✒️', en: { word: 'pen', phrase: 'Write with a pen.', context: 'Stationery' } },
  { id: 'office-clock', emoji: '🕐', en: { word: 'clock', phrase: 'Look at the clock.', context: 'Time' } },
  { id: 'office-calendar', emoji: '📅', en: { word: 'calendar', phrase: 'Mark the date.', context: 'Time' } },
  { id: 'office-trophy', emoji: '🏆', en: { word: 'trophy', phrase: 'A gold trophy.', context: 'Award' } },
  { id: 'office-photo', emoji: '🖼️', en: { word: 'photo', phrase: 'A photo on the wall.', context: 'Decoration' } },
  { id: 'office-plant', emoji: '🪴', en: { word: 'plant', phrase: 'A green plant.', context: 'Decoration' } },
  { id: 'office-bookshelf', emoji: '📚', en: { word: 'bookshelf', phrase: 'Books on the shelf.', context: 'Furniture' } },
  { id: 'office-lamp', emoji: '💡', en: { word: 'lamp', phrase: 'Turn on the lamp.', context: 'Light' } },
  { id: 'office-carpet', emoji: '🟫', en: { word: 'carpet', phrase: 'A soft carpet.', context: 'Floor' } },
  { id: 'office-door', emoji: '🚪', en: { word: 'door', phrase: 'Knock on the door.', context: 'Entrance' } },

  // === TALKING TO THE PRINCIPAL ===
  { id: 'talk-talk', emoji: '🗣️', en: { word: 'talk', phrase: 'Can we talk?', context: 'Communication' } },
  { id: 'talk-listen', emoji: '👂', en: { word: 'listen', phrase: 'Listen carefully.', context: 'Attention' } },
  { id: 'talk-explain', emoji: '💬', en: { word: 'explain', phrase: 'Explain the problem.', context: 'Communication' } },
  { id: 'talk-sorry', emoji: '😔', en: { word: 'sorry', phrase: 'I am sorry.', context: 'Apology' } },
  { id: 'talk-please', emoji: '🙏', en: { word: 'please', phrase: 'Please help me.', context: 'Politeness' } },
  { id: 'talk-thank', emoji: '🙏', en: { word: 'thank you', phrase: 'Thank you very much.', context: 'Gratitude' } },
  { id: 'talk-problem', emoji: '⚠️', en: { word: 'problem', phrase: 'I have a problem.', context: 'Concern' } },
  { id: 'talk-worry', emoji: '😟', en: { word: 'worry', phrase: 'Do not worry.', context: 'Feeling' } },
  { id: 'talk-idea', emoji: '💡', en: { word: 'idea', phrase: 'I have an idea.', context: 'Thought' } },
  { id: 'talk-promise', emoji: '🤝', en: { word: 'promise', phrase: 'I promise.', context: 'Commitment' } },
  { id: 'talk-truth', emoji: '✅', en: { word: 'truth', phrase: 'Tell the truth.', context: 'Honesty' } },
  { id: 'talk-lie', emoji: '❌', en: { word: 'lie', phrase: 'Do not lie.', context: 'Honesty' } },
  { id: 'talk-respect', emoji: '🫡', en: { word: 'respect', phrase: 'Show respect.', context: 'Behaviour' } },
  { id: 'talk-trust', emoji: '🤝', en: { word: 'trust', phrase: 'I trust you.', context: 'Relationship' } },
  { id: 'talk-understand', emoji: '👍', en: { word: 'understand', phrase: 'Do you understand?', context: 'Comprehension' } },

  // === RULES & BEHAVIOUR ===
  { id: 'rule-rule', emoji: '📏', en: { word: 'rule', phrase: 'Follow the rule.', context: 'School' } },
  { id: 'rule-behaviour', emoji: '🎭', en: { word: 'behaviour', phrase: 'Good behaviour.', context: 'Conduct' } },
  { id: 'rule-good', emoji: '👍', en: { word: 'good', phrase: 'Be good.', context: 'Quality' } },
  { id: 'rule-bad', emoji: '👎', en: { word: 'bad', phrase: 'That is bad.', context: 'Quality' } },
  { id: 'rule-kind', emoji: '💖', en: { word: 'kind', phrase: 'Be kind.', context: 'Quality' } },
  { id: 'rule-unkind', emoji: '💔', en: { word: 'unkind', phrase: 'Do not be unkind.', context: 'Quality' } },
  { id: 'rule-polite', emoji: '🙇', en: { word: 'polite', phrase: 'Be polite.', context: 'Manners' } },
  { id: 'rule-rude', emoji: '🙅', en: { word: 'rude', phrase: 'Do not be rude.', context: 'Manners' } },
  { id: 'rule-fair', emoji: '⚖️', en: { word: 'fair', phrase: 'That is fair.', context: 'Justice' } },
  { id: 'rule-unfair', emoji: '⚖️', en: { word: 'unfair', phrase: 'That is unfair.', context: 'Justice' } },
  { id: 'rule-share', emoji: '🤲', en: { word: 'share', phrase: 'Share your toys.', context: 'Social' } },
  { id: 'rule-help', emoji: '🆘', en: { word: 'help', phrase: 'Help your friend.', context: 'Social' } },
  { id: 'rule-include', emoji: '👥', en: { word: 'include', phrase: 'Include everyone.', context: 'Social' } },
  { id: 'rule-bully', emoji: '🚫', en: { word: 'bully', phrase: 'Do not bully.', context: 'Anti-bullying' } },
  { id: 'rule-friend', emoji: '🙂', en: { word: 'friend', phrase: 'Be a good friend.', context: 'Relationship' } },
];

// ============================================================================
// DIALOGUES — SOCIAL / FUNCTIONAL / EMOTIONAL LANGUAGE
// ============================================================================

export interface SchoolDialogueTurn {
  speaker: 'teacher' | 'student' | 'peer';
  en: string;
  it?: string;
  fr?: string;
  mt?: string;
}

export interface SchoolDialogue {
  id: string;
  scenario: string;
  turns: SchoolDialogueTurn[];
}

export const principalOfficeDialogues: SchoolDialogue[] = [
  {
    id: 'principal-knock',
    scenario: 'Entering the office',
    turns: [
      { speaker: 'student', en: 'Can I come in?' },
      { speaker: 'teacher', en: 'Yes, come in. Sit down.' },
      { speaker: 'student', en: 'Thank you.' },
    ],
  },
  {
    id: 'principal-problem',
    scenario: 'Talking about a problem',
    turns: [
      { speaker: 'teacher', en: 'What is the problem?' },
      { speaker: 'student', en: 'A boy was unkind to me.' },
      { speaker: 'teacher', en: 'Tell me the truth.' },
      { speaker: 'student', en: 'He took my pen.' },
    ],
  },
  {
    id: 'principal-sorry',
    scenario: 'Saying sorry',
    turns: [
      { speaker: 'student', en: 'I am sorry.' },
      { speaker: 'teacher', en: 'Why are you sorry?' },
      { speaker: 'student', en: 'I was rude.' },
      { speaker: 'teacher', en: 'Thank you for telling me.' },
    ],
  },
  {
    id: 'principal-rules',
    scenario: 'Learning the rules',
    turns: [
      { speaker: 'teacher', en: 'What is the rule?' },
      { speaker: 'student', en: 'Be kind and polite.' },
      { speaker: 'teacher', en: 'Good. Include everyone.' },
      { speaker: 'student', en: 'I understand.' },
    ],
  },
  {
    id: 'principal-worry',
    scenario: 'Feeling worried',
    turns: [
      { speaker: 'student', en: 'I feel worried.' },
      { speaker: 'teacher', en: 'Do not worry. Explain to me.' },
      { speaker: 'student', en: 'I do not understand the work.' },
      { speaker: 'teacher', en: 'I will help you.' },
    ],
  },
  {
    id: 'principal-promise',
    scenario: 'Making a promise',
    turns: [
      { speaker: 'teacher', en: 'Can you be good?' },
      { speaker: 'student', en: 'Yes, I promise.' },
      { speaker: 'teacher', en: 'I trust you.' },
      { speaker: 'student', en: 'Thank you.' },
    ],
  },
  {
    id: 'principal-fair',
    scenario: 'Being fair',
    turns: [
      { speaker: 'student', en: 'That is unfair.' },
      { speaker: 'teacher', en: 'Why do you think that?' },
      { speaker: 'student', en: 'He did not share.' },
      { speaker: 'teacher', en: 'I will talk to him.' },
    ],
  },
  {
    id: 'principal-respect',
    scenario: 'Showing respect',
    turns: [
      { speaker: 'teacher', en: 'Show respect to everyone.' },
      { speaker: 'student', en: 'Yes, I will.' },
      { speaker: 'teacher', en: 'Respect helps us be friends.' },
    ],
  },
];

// ============================================================================
// IMAGE PROMPTS (for ComfyUI / Kimi generation)
// ============================================================================

export const principalOfficeImagePrompts: Record<string, string> = {
  'the-office': `A warm primary school principal's office with wooden furniture and soft light.
Visible items: large wooden desk, leather chair, computer monitor, black telephone, stack of paper, fountain pen, round wall clock, wall calendar, gold trophy, framed family photo, potted green plant, tall bookshelf with books, desk lamp, patterned carpet, closed wooden door.
Style: warm children's book illustration, soft colours, friendly, clear outlines, European primary school, no text, no labels, no watermarks.`,

  'talking-principal': `A child and a kind principal having a conversation in an office.
Visible items: child talking, adult listening carefully, child explaining with hands, child looking sorry, child saying please, child saying thank you, worried face, light bulb idea, hands shaking in promise, truth check mark, crossed-out lie symbol, child showing respect, hands in trust, child nodding in understanding, friendly principal.
Style: warm children's book illustration, soft colours, friendly, clear outlines, European primary school, no text, no labels, no watermarks.`,

  'rules-behaviour': `A bright primary school corridor poster board showing good behaviour examples.
Visible items: classroom rule list on the wall, good behaviour star badge, bad behaviour warning sign, kind children sharing, unkind child alone, polite child bowing, rude child shouting, fair scale with equal sides, unfair scale tipping, children sharing toys, child helping another up, group including a new child, no bullying symbol, children holding hands as friends.
Style: warm children's book illustration, soft colours, friendly, clear outlines, European primary school, no text, no labels, no watermarks.`,
};
