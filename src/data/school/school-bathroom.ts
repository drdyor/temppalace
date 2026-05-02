// School Palace — School Bathroom
// English source layer (truth layer)
// A1 level, concrete objects only for image pins

import type { Room } from '../../types';

// ============================================================================
// ROOM DEFINITION
// ============================================================================

export const schoolBathroomRoom: Room = {
  id: 'school-bathroom',
  name: 'Bathroom',
  subtitle: 'Wash & Go',
  nameNative: 'Bagno della Scuola',
  image: 'rooms/school/school-bathroom.jpg',
  description: 'Where you wash your hands, use the toilet, and stay clean.',
  grammarFocus: 'imperatives & hygiene routines',
  vocabularyIds: [
    // The bathroom
    'sb-toilet', 'sb-sink', 'sb-tap', 'sb-soap', 'sb-towel',
    'sb-mirror', 'sb-paper', 'sb-flush', 'sb-wash', 'sb-dry',
    'sb-brush', 'sb-teeth', 'sb-comb', 'sb-hair', 'sb-hands',
    // When you need it
    'need-bathroom', 'need-toilet', 'need-now', 'need-hurry', 'need-wait',
    'need-door', 'need-lock', 'need-knock', 'need-clean', 'need-dirty',
    'need-smell', 'need-water', 'need-paper', 'need-wash', 'need-hands',
  ],
  zones: [
    {
      id: 'bathroom-area',
      name: 'The Bathroom',
      nameNative: 'Il Bagno',
      description: 'Sink, toilet, and mirror',
      icon: '🚻',
      x: 30,
      y: 35,
      width: 35,
      height: 25,
      interiorImage: 'rooms/school/sb-bathroom.jpg',
      interiorVocab: [
        { wordId: 'sb-toilet', x: 20, y: 25 },
        { wordId: 'sb-sink', x: 50, y: 20 },
        { wordId: 'sb-tap', x: 55, y: 30 },
        { wordId: 'sb-soap', x: 45, y: 35 },
        { wordId: 'sb-towel', x: 75, y: 30 },
        { wordId: 'sb-mirror', x: 60, y: 15 },
        { wordId: 'sb-paper', x: 25, y: 45 },
        { wordId: 'sb-flush', x: 15, y: 35 },
        { wordId: 'sb-wash', x: 40, y: 50 },
        { wordId: 'sb-dry', x: 70, y: 45 },
        { wordId: 'sb-brush', x: 80, y: 50 },
        { wordId: 'sb-teeth', x: 85, y: 40 },
        { wordId: 'sb-comb', x: 75, y: 60 },
        { wordId: 'sb-hair', x: 65, y: 65 },
        { wordId: 'sb-hands', x: 50, y: 60 },
      ],
    },
    {
      id: 'when-you-need',
      name: 'When You Need It',
      nameNative: 'Quando Ne Hai Bisogno',
      description: 'Words for urgent moments',
      icon: '🚪',
      x: 70,
      y: 55,
      width: 25,
      height: 25,
      interiorImage: 'rooms/school/sb-need.jpg',
      interiorVocab: [
        { wordId: 'need-bathroom', x: 20, y: 20 },
        { wordId: 'need-toilet', x: 50, y: 20 },
        { wordId: 'need-now', x: 80, y: 20 },
        { wordId: 'need-hurry', x: 20, y: 45 },
        { wordId: 'need-wait', x: 50, y: 45 },
        { wordId: 'need-door', x: 80, y: 45 },
        { wordId: 'need-lock', x: 20, y: 65 },
        { wordId: 'need-knock', x: 45, y: 65 },
        { wordId: 'need-clean', x: 70, y: 65 },
        { wordId: 'need-dirty', x: 85, y: 65 },
        { wordId: 'need-smell', x: 20, y: 85 },
        { wordId: 'need-water', x: 45, y: 85 },
        { wordId: 'need-paper', x: 65, y: 85 },
        { wordId: 'need-wash', x: 80, y: 85 },
        { wordId: 'need-hands', x: 50, y: 95 },
      ],
    },
  ],
  grammarPoints: [
    {
      id: 'sb-imperatives',
      title: 'Bathroom Imperatives',
      explanation: 'Commands for hygiene',
      example: 'Wash your hands. Dry your hands.',
      color: '#10B981',
    },
    {
      id: 'sb-polite',
      title: 'Asking Politely',
      explanation: 'How to ask to use the bathroom',
      example: 'Can I go to the bathroom?',
      color: '#3B82F6',
    },
  ],
};

// ============================================================================
// VOCABULARY
// ============================================================================

export interface SchoolConcept {
  id: string;
  emoji?: string;
  en: { word: string; phrase?: string; context?: string };
  it?: { word: string; phrase?: string; gender?: 'masculine' | 'feminine' | 'none'; pronunciation?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
  fr?: { word: string; phrase?: string; gender?: 'masculine' | 'feminine' | 'none'; pronunciation?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
  mt?: { word: string; phrase?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
}

export const schoolBathroomVocabulary: SchoolConcept[] = [
  // === THE BATHROOM ===
  { id: 'sb-toilet', emoji: '🚽', en: { word: 'toilet', phrase: 'I need the toilet.', context: 'Request' } },
  { id: 'sb-sink', emoji: '🚰', en: { word: 'sink', phrase: 'Wash at the sink.', context: 'Hygiene' } },
  { id: 'sb-tap', emoji: '🚰', en: { word: 'tap', phrase: 'Turn on the tap.', context: 'Water' } },
  { id: 'sb-soap', emoji: '🧼', en: { word: 'soap', phrase: 'Use soap.', context: 'Hygiene' } },
  { id: 'sb-towel', emoji: '🧻', en: { word: 'towel', phrase: 'Dry with a towel.', context: 'Drying' } },
  { id: 'sb-mirror', emoji: '🪞', en: { word: 'mirror', phrase: 'Look in the mirror.', context: 'Checking' } },
  { id: 'sb-paper', emoji: '🧻', en: { word: 'paper', phrase: 'Toilet paper.', context: 'Toilet' } },
  { id: 'sb-flush', emoji: '🚽', en: { word: 'flush', phrase: 'Flush the toilet.', context: 'Toilet' } },
  { id: 'sb-wash', emoji: '🧼', en: { word: 'wash', phrase: 'Wash your hands.', context: 'Hygiene' } },
  { id: 'sb-dry', emoji: '🧻', en: { word: 'dry', phrase: 'Dry your hands.', context: 'Drying' } },
  { id: 'sb-brush', emoji: '🪥', en: { word: 'brush', phrase: 'Brush your teeth.', context: 'Teeth' } },
  { id: 'sb-teeth', emoji: '🦷', en: { word: 'teeth', phrase: 'Brush your teeth.', context: 'Teeth' } },
  { id: 'sb-comb', emoji: '🪮', en: { word: 'comb', phrase: 'Comb your hair.', context: 'Hair' } },
  { id: 'sb-hair', emoji: '💇', en: { word: 'hair', phrase: 'Comb your hair.', context: 'Hair' } },
  { id: 'sb-hands', emoji: '🙌', en: { word: 'hands', phrase: 'Wash your hands.', context: 'Hygiene' } },

  // === WHEN YOU NEED IT ===
  { id: 'need-bathroom', emoji: '🚻', en: { word: 'bathroom', phrase: 'Can I go to the bathroom?', context: 'Request' } },
  { id: 'need-toilet', emoji: '🚽', en: { word: 'toilet', phrase: 'I need the toilet.', context: 'Urgent' } },
  { id: 'need-now', emoji: '⏰', en: { word: 'now', phrase: 'I need it now.', context: 'Urgent' } },
  { id: 'need-hurry', emoji: '🏃', en: { word: 'hurry', phrase: 'I am in a hurry.', context: 'Urgent' } },
  { id: 'need-wait', emoji: '⏳', en: { word: 'wait', phrase: 'Wait outside.', context: 'Queue' } },
  { id: 'need-door', emoji: '🚪', en: { word: 'door', phrase: 'Close the door.', context: 'Privacy' } },
  { id: 'need-lock', emoji: '🔒', en: { word: 'lock', phrase: 'Lock the door.', context: 'Privacy' } },
  { id: 'need-knock', emoji: '✊', en: { word: 'knock', phrase: 'Knock on the door.', context: 'Politeness' } },
  { id: 'need-clean', emoji: '✨', en: { word: 'clean', phrase: 'Keep it clean.', context: 'Rule' } },
  { id: 'need-dirty', emoji: '😷', en: { word: 'dirty', phrase: 'It is dirty.', context: 'Complaint' } },
  { id: 'need-smell', emoji: '👃', en: { word: 'smell', phrase: 'It smells bad.', context: 'Complaint' } },
  { id: 'need-water', emoji: '💧', en: { word: 'water', phrase: 'The water is cold.', context: 'Tap' } },
  { id: 'need-paper', emoji: '🧻', en: { word: 'paper', phrase: 'There is no paper.', context: 'Problem' } },
  { id: 'need-wash', emoji: '🧼', en: { word: 'wash', phrase: 'Did you wash?', context: 'Teacher check' } },
  { id: 'need-hands', emoji: '🙌', en: { word: 'hands', phrase: 'Show me your hands.', context: 'Teacher check' } },
];

// ============================================================================
// DIALOGUES
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

export const schoolBathroomDialogues: SchoolDialogue[] = [
  {
    id: 'sb-can-i-go',
    scenario: 'Asking to use the bathroom',
    turns: [
      { speaker: 'student', en: 'Can I go to the bathroom?' },
      { speaker: 'teacher', en: 'Yes, but hurry back.' },
      { speaker: 'student', en: 'Thank you.' },
    ],
    natural: [
      { speaker: 'student', en: 'Can I go to the bathroom?' },
      { speaker: 'teacher', en: 'Yeah, but hurry back.' },
      { speaker: 'student', en: 'Thanks.' },
    ]},
  
  {
    id: 'sb-wash-hands',
    scenario: 'Teacher reminds to wash hands',
    turns: [
      { speaker: 'teacher', en: 'Wash your hands.' },
      { speaker: 'student', en: 'Okay.' },
      { speaker: 'teacher', en: 'Use soap.' },
    ],
    natural: [
      { speaker: 'teacher', en: 'Wash your hands.' },
      { speaker: 'student', en: 'Okay.' },
      { speaker: 'teacher', en: 'And use soap.' },
    ]},
  
  {
    id: 'sb-no-paper',
    scenario: 'No toilet paper',
    turns: [
      { speaker: 'student', en: 'There is no paper.' },
      { speaker: 'teacher', en: 'I will get some.' },
      { speaker: 'student', en: 'Thank you.' },
    ],
    natural: [
      { speaker: 'student', en: "There's no paper." },
      { speaker: 'teacher', en: "I'll get some." },
      { speaker: 'student', en: 'Thanks.' },
    ]},
  
  {
    id: 'sb-hurry',
    scenario: 'Hurrying back',
    turns: [
      { speaker: 'teacher', en: 'Hurry up, please.' },
      { speaker: 'student', en: 'I am coming.' },
    ],
    natural: [
      { speaker: 'teacher', en: 'Hurry up.' },
      { speaker: 'student', en: "I'm coming." },
    ]},
  
  {
    id: 'sb-queue',
    scenario: 'Waiting in line',
    turns: [
      { speaker: 'peer', en: 'Wait your turn.' },
      { speaker: 'student', en: 'Okay. Sorry.' },
    ],
    natural: [
      { speaker: 'peer', en: 'Wait your turn.' },
      { speaker: 'student', en: 'Okay. Sorry.' },
    ]},
  
  {
    id: 'sb-dry-hands',
    scenario: 'Drying hands',
    turns: [
      { speaker: 'student', en: 'My hands are wet.' },
      { speaker: 'peer', en: 'Use the towel.' },
      { speaker: 'student', en: 'Thank you.' },
    ],
    natural: [
      { speaker: 'student', en: 'My hands are wet.' },
      { speaker: 'peer', en: 'Use the towel.' },
      { speaker: 'student', en: 'Thanks.' },
    ]},
  
];

// ============================================================================
// IMAGE PROMPTS
// ============================================================================

export const schoolBathroomImagePrompts: Record<string, string> = {
  'bathroom-area': `A clean primary school bathroom with sinks and toilets.
Visible items: white toilet with flush handle, white sink with tap, bar of soap on a dish, hand towel on a rail, mirror above sink, roll of toilet paper, child washing hands at sink, hand dryer or paper towels, toothbrush in a cup, comb on a shelf, child drying hands, child brushing teeth, child combing hair.
Style: warm children's book illustration, soft colours, friendly, clean and bright, European primary school, no text, no labels, no watermarks.`,

  'when-you-need': `Children outside a primary school bathroom door showing different needs and situations.
Visible items: child asking teacher to go, child hurrying to the door, child waiting in a short queue, bathroom door with lock, child knocking on door, clean sparkling sink, dirty floor (subtle), child washing hands, child drying hands, water running from tap, toilet paper roll, soap bubbles, child saying sorry, child saying thank you.
Style: warm children's book illustration, soft colours, friendly, diverse children, European primary school, no text, no labels.`,
};
