// School Palace — Lunch Hall
// English source layer (truth layer)
// A1 level, concrete objects only for image pins

import type { Room } from '../../types';

// ============================================================================
// ROOM DEFINITION
// ============================================================================

export const lunchHallRoom: Room = {
  id: 'lunch-hall',
  name: 'Lunch Hall',
  subtitle: 'Food & Friends',
  nameNative: 'Mensa',
  image: 'rooms/school/lunch-hall.jpg',
  description: 'Where you eat, drink, and chat with friends at lunchtime.',
  grammarFocus: 'food vocabulary & polite requests',
  vocabularyIds: [
    // Food & drink
    'food-sandwich', 'food-apple', 'food-banana', 'food-pizza', 'food-pasta',
    'food-salad', 'food-carrot', 'food-chicken', 'food-bread', 'food-cheese',
    'food-yoghurt', 'food-crisps', 'food-biscuit', 'food-cake', 'food-chocolate',
    // Table & tray
    'tray-tray', 'tray-plate', 'tray-bowl', 'tray-cup', 'tray-glass',
    'tray-fork', 'tray-knife', 'tray-spoon', 'tray-napkin', 'tray-bottle',
    'tray-lunchbox', 'tray-flask', 'tray-straw', 'tray-lid', 'tray-serviette',
    // At lunch
    'lunch-eat', 'lunch-drink', 'lunch-hungry', 'lunch-thirsty', 'lunch-cut',
    'lunch-peel', 'lunch-open', 'lunch-close', 'lunch-heat', 'lunch-share',
    'lunch-pass', 'lunch-wash', 'lunch-queue', 'lunch-sit', 'lunch-enjoy',
  ],
  zones: [
    {
      id: 'food-drink',
      name: 'Food & Drink',
      nameNative: 'Cibo e Bevande',
      description: 'Everything on your plate',
      icon: '🍎',
      x: 30,
      y: 35,
      width: 30,
      height: 25,
      interiorImage: 'rooms/school/lunchhall-food.jpg',
      interiorVocab: [
        { wordId: 'food-sandwich', x: 20, y: 25 },
        { wordId: 'food-apple', x: 50, y: 20 },
        { wordId: 'food-banana', x: 80, y: 25 },
        { wordId: 'food-pizza', x: 25, y: 50 },
        { wordId: 'food-pasta', x: 55, y: 45 },
        { wordId: 'food-salad', x: 80, y: 50 },
        { wordId: 'food-carrot', x: 15, y: 70 },
        { wordId: 'food-chicken', x: 40, y: 70 },
        { wordId: 'food-bread', x: 65, y: 70 },
        { wordId: 'food-cheese', x: 85, y: 75 },
        { wordId: 'food-yoghurt', x: 20, y: 90 },
        { wordId: 'food-crisps', x: 45, y: 90 },
        { wordId: 'food-biscuit', x: 65, y: 90 },
        { wordId: 'food-cake', x: 80, y: 90 },
        { wordId: 'food-chocolate', x: 90, y: 60 },
      ],
    },
    {
      id: 'table-tray',
      name: 'Table & Tray',
      nameNative: 'Vassoio e Tavolo',
      description: 'What you eat with',
      icon: '🍽️',
      x: 65,
      y: 55,
      width: 25,
      height: 25,
      interiorImage: 'rooms/school/lunchhall-table.jpg',
      interiorVocab: [
        { wordId: 'tray-tray', x: 20, y: 20 },
        { wordId: 'tray-plate', x: 50, y: 20 },
        { wordId: 'tray-bowl', x: 80, y: 20 },
        { wordId: 'tray-cup', x: 20, y: 45 },
        { wordId: 'tray-glass', x: 50, y: 45 },
        { wordId: 'tray-fork', x: 80, y: 45 },
        { wordId: 'tray-knife', x: 20, y: 65 },
        { wordId: 'tray-spoon', x: 50, y: 65 },
        { wordId: 'tray-napkin', x: 80, y: 65 },
        { wordId: 'tray-bottle', x: 20, y: 85 },
        { wordId: 'tray-lunchbox', x: 45, y: 85 },
        { wordId: 'tray-flask', x: 65, y: 85 },
        { wordId: 'tray-straw', x: 80, y: 85 },
        { wordId: 'tray-lid', x: 35, y: 75 },
        { wordId: 'tray-serviette', x: 60, y: 75 },
      ],
    },
    {
      id: 'at-lunch',
      name: 'At Lunch',
      nameNative: 'A Pranzo',
      description: 'What you do at lunchtime',
      icon: '🍽️',
      x: 20,
      y: 65,
      width: 35,
      height: 25,
      interiorImage: 'rooms/school/lunchhall-lunch.jpg',
      interiorVocab: [
        { wordId: 'lunch-eat', x: 20, y: 20 },
        { wordId: 'lunch-drink', x: 50, y: 20 },
        { wordId: 'lunch-hungry', x: 80, y: 20 },
        { wordId: 'lunch-thirsty', x: 20, y: 45 },
        { wordId: 'lunch-cut', x: 50, y: 45 },
        { wordId: 'lunch-peel', x: 80, y: 45 },
        { wordId: 'lunch-open', x: 20, y: 65 },
        { wordId: 'lunch-close', x: 50, y: 65 },
        { wordId: 'lunch-heat', x: 80, y: 65 },
        { wordId: 'lunch-share', x: 20, y: 85 },
        { wordId: 'lunch-pass', x: 40, y: 85 },
        { wordId: 'lunch-wash', x: 60, y: 85 },
        { wordId: 'lunch-queue', x: 75, y: 85 },
        { wordId: 'lunch-sit', x: 30, y: 95 },
        { wordId: 'lunch-enjoy', x: 55, y: 95 },
      ],
    },
  ],
  grammarPoints: [
    {
      id: 'lunch-polite',
      title: 'Polite Requests',
      explanation: 'Asking for food politely',
      example: 'Can I have...? May I have...?',
      color: '#10B981',
    },
    {
      id: 'lunch-quantity',
      title: 'Quantities',
      explanation: 'Saying how much you want',
      example: 'A little, a lot, some, a piece of',
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

export const lunchHallVocabulary: SchoolConcept[] = [
  // === FOOD & DRINK ===
  { id: 'food-sandwich', emoji: '🥪', en: { word: 'sandwich', phrase: 'I have a sandwich.', context: 'Packed lunch' } },
  { id: 'food-apple', emoji: '🍎', en: { word: 'apple', phrase: 'An apple a day.', context: 'Healthy snack' } },
  { id: 'food-banana', emoji: '🍌', en: { word: 'banana', phrase: 'Peel the banana.', context: 'Fruit' } },
  { id: 'food-pizza', emoji: '🍕', en: { word: 'pizza', phrase: 'I love pizza.', context: 'Hot lunch' } },
  { id: 'food-pasta', emoji: '🍝', en: { word: 'pasta', phrase: 'Pasta for lunch.', context: 'Hot lunch' } },
  { id: 'food-salad', emoji: '🥗', en: { word: 'salad', phrase: 'A green salad.', context: 'Healthy option' } },
  { id: 'food-carrot', emoji: '🥕', en: { word: 'carrot', phrase: 'Carrots are orange.', context: 'Vegetable' } },
  { id: 'food-chicken', emoji: '🍗', en: { word: 'chicken', phrase: 'Chicken and rice.', context: 'Main dish' } },
  { id: 'food-bread', emoji: '🍞', en: { word: 'bread', phrase: 'A slice of bread.', context: 'Side' } },
  { id: 'food-cheese', emoji: '🧀', en: { word: 'cheese', phrase: 'Cheese sandwich.', context: 'Dairy' } },
  { id: 'food-yoghurt', emoji: '🥣', en: { word: 'yoghurt', phrase: 'A pot of yoghurt.', context: 'Dessert' } },
  { id: 'food-crisps', emoji: '🥔', en: { word: 'crisps', phrase: 'A bag of crisps.', context: 'Snack' } },
  { id: 'food-biscuit', emoji: '🍪', en: { word: 'biscuit', phrase: 'Have a biscuit.', context: 'Treat' } },
  { id: 'food-cake', emoji: '🍰', en: { word: 'cake', phrase: 'A piece of cake.', context: 'Birthday' } },
  { id: 'food-chocolate', emoji: '🍫', en: { word: 'chocolate', phrase: 'A bar of chocolate.', context: 'Treat' } },

  // === TABLE & TRAY ===
  { id: 'tray-tray', emoji: '🥡', en: { word: 'tray', phrase: 'Put it on the tray.', context: 'Carrying food' } },
  { id: 'tray-plate', emoji: '🍽️', en: { word: 'plate', phrase: 'A clean plate.', context: 'Eating' } },
  { id: 'tray-bowl', emoji: '🥣', en: { word: 'bowl', phrase: 'A bowl of soup.', context: 'Eating' } },
  { id: 'tray-cup', emoji: '☕', en: { word: 'cup', phrase: 'A cup of water.', context: 'Drinking' } },
  { id: 'tray-glass', emoji: '🥛', en: { word: 'glass', phrase: 'A glass of milk.', context: 'Drinking' } },
  { id: 'tray-fork', emoji: '🍴', en: { word: 'fork', phrase: 'Use your fork.', context: 'Cutlery' } },
  { id: 'tray-knife', emoji: '🔪', en: { word: 'knife', phrase: 'Be careful with the knife.', context: 'Cutlery' } },
  { id: 'tray-spoon', emoji: '🥄', en: { word: 'spoon', phrase: 'Use a spoon.', context: 'Cutlery' } },
  { id: 'tray-napkin', emoji: '🧻', en: { word: 'napkin', phrase: 'Wipe your mouth.', context: 'Cleaning' } },
  { id: 'tray-bottle', emoji: '🍼', en: { word: 'bottle', phrase: 'A bottle of water.', context: 'Drinking' } },
  { id: 'tray-lunchbox', emoji: '🍱', en: { word: 'lunchbox', phrase: 'Open your lunchbox.', context: 'Packed lunch' } },
  { id: 'tray-flask', emoji: '🫗', en: { word: 'flask', phrase: 'Water in my flask.', context: 'Drink container' } },
  { id: 'tray-straw', emoji: '🥤', en: { word: 'straw', phrase: 'Drink with a straw.', context: 'Drinking' } },
  { id: 'tray-lid', emoji: '⬜', en: { word: 'lid', phrase: 'Put the lid on.', context: 'Closing' } },
  { id: 'tray-serviette', emoji: '🧻', en: { word: 'serviette', phrase: 'A paper serviette.', context: 'Cleaning' } },

  // === AT LUNCH ===
  { id: 'lunch-eat', emoji: '😋', en: { word: 'eat', phrase: 'Eat your lunch.', context: 'Teacher instruction' } },
  { id: 'lunch-drink', emoji: '🥤', en: { word: 'drink', phrase: 'Drink your water.', context: 'Teacher instruction' } },
  { id: 'lunch-hungry', emoji: '😩', en: { word: 'hungry', phrase: 'I am hungry.', context: 'Feeling' } },
  { id: 'lunch-thirsty', emoji: '😮‍💨', en: { word: 'thirsty', phrase: 'I am thirsty.', context: 'Feeling' } },
  { id: 'lunch-cut', emoji: '✂️', en: { word: 'cut', phrase: 'Cut the apple.', context: 'Preparing food' } },
  { id: 'lunch-peel', emoji: '🍌', en: { word: 'peel', phrase: 'Peel the banana.', context: 'Preparing fruit' } },
  { id: 'lunch-open', emoji: '📦', en: { word: 'open', phrase: 'Open your lunchbox.', context: 'Getting food' } },
  { id: 'lunch-close', emoji: '🔒', en: { word: 'close', phrase: 'Close the lid.', context: 'Tidying' } },
  { id: 'lunch-heat', emoji: '🔥', en: { word: 'heat', phrase: 'Heat the food.', context: 'Cooking' } },
  { id: 'lunch-share', emoji: '🤝', en: { word: 'share', phrase: 'Can we share?', context: 'Social' } },
  { id: 'lunch-pass', emoji: '🤲', en: { word: 'pass', phrase: 'Pass the salt.', context: 'Table manners' } },
  { id: 'lunch-wash', emoji: '🧼', en: { word: 'wash', phrase: 'Wash your hands.', context: 'Hygiene' } },
  { id: 'lunch-queue', emoji: '🚶', en: { word: 'queue', phrase: 'Wait in the queue.', context: 'Line' } },
  { id: 'lunch-sit', emoji: '🪑', en: { word: 'sit', phrase: 'Sit at the table.', context: 'Manners' } },
  { id: 'lunch-enjoy', emoji: '😊', en: { word: 'enjoy', phrase: 'Enjoy your meal.', context: 'Politeness' } },
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

export const lunchHallDialogues: SchoolDialogue[] = [
  {
    id: 'lunch-what-do-you-have',
    scenario: 'Talking about lunch',
    turns: [
      { speaker: 'peer', en: 'What do you have for lunch?' },
      { speaker: 'student', en: 'I have a sandwich and an apple.' },
      { speaker: 'peer', en: 'Nice. I have pasta.' },
    ],
  },
  {
    id: 'lunch-can-i-sit',
    scenario: 'Asking to sit together',
    turns: [
      { speaker: 'student', en: 'Can I sit here?' },
      { speaker: 'peer', en: 'Yes, sit down.' },
      { speaker: 'student', en: 'Thank you.' },
    ],
  },
  {
    id: 'lunch-sharing-food',
    scenario: 'Sharing food',
    turns: [
      { speaker: 'peer', en: 'Do you want some crisps?' },
      { speaker: 'student', en: 'Yes, please.' },
      { speaker: 'peer', en: 'Here you are.' },
      { speaker: 'student', en: 'Thanks!' },
    ],
  },
  {
    id: 'lunch-hungry',
    scenario: 'Feeling hungry',
    turns: [
      { speaker: 'student', en: 'I am hungry.' },
      { speaker: 'teacher', en: 'Eat your lunch.' },
      { speaker: 'student', en: 'I do not like it.' },
      { speaker: 'teacher', en: 'Try a little bit.' },
    ],
  },
  {
    id: 'lunch-thirsty',
    scenario: 'Needing a drink',
    turns: [
      { speaker: 'student', en: 'I am thirsty.' },
      { speaker: 'teacher', en: 'Drink some water.' },
      { speaker: 'student', en: 'Can I have juice?' },
      { speaker: 'teacher', en: 'After you drink water.' },
    ],
  },
  {
    id: 'lunch-finished',
    scenario: 'Finished eating',
    turns: [
      { speaker: 'student', en: 'I am finished.' },
      { speaker: 'teacher', en: 'Did you enjoy it?' },
      { speaker: 'student', en: 'Yes, it was good.' },
      { speaker: 'teacher', en: 'Now wash your hands.' },
    ],
  },
  {
    id: 'lunch-queue',
    scenario: 'Waiting in line',
    turns: [
      { speaker: 'teacher', en: 'Wait in the queue.' },
      { speaker: 'student', en: 'I want pizza.' },
      { speaker: 'teacher', en: 'Wait your turn.' },
    ],
  },
  {
    id: 'lunch-allergies',
    scenario: 'Food allergy',
    turns: [
      { speaker: 'student', en: 'I cannot eat nuts.' },
      { speaker: 'teacher', en: 'Thank you for telling me.' },
      { speaker: 'teacher', en: 'Here is a safe sandwich.' },
      { speaker: 'student', en: 'Thank you.' },
    ],
  },
];

// ============================================================================
// IMAGE PROMPTS (for ComfyUI / Kimi generation)
// ============================================================================

export const lunchHallImagePrompts: Record<string, string> = {
  'food-drink': `A primary school lunch table from above showing various foods children bring.
Visible items: triangular sandwich on a plate, red apple, yellow banana, slice of pizza on a tray, bowl of pasta with tomato sauce, small bowl of green salad, orange carrot sticks, piece of roast chicken, slice of bread, cube of cheese, small pot of yoghurt, bag of crisps, round biscuit, slice of cake, bar of chocolate.
Style: warm children's book illustration, soft colours, friendly, clear outlines, appetising food, no text, no labels, no watermarks.`,

  'table-tray': `A school lunch tray and table setting in a primary school canteen.
Visible items: plastic lunch tray, white plate, small bowl, plastic cup, drinking glass, fork, child-safe knife, spoon, paper napkin, water bottle, colourful lunchbox, metal flask, drinking straw, plastic lid, paper serviette.
Style: warm children's book illustration, soft colours, friendly, clear outlines, clean school canteen setting, no text, no labels, no watermarks.`,

  'at-lunch': `Children having lunch together in a primary school canteen.
Visible items: children sitting at long tables eating and drinking, child looking hungry, child drinking water, hands cutting food, peeling a banana, opening a lunchbox, closing a lid, teacher helping heat food, children sharing snacks, passing a bottle, washing hands at a sink area, children waiting in a lunch queue, child sitting properly on a chair, child smiling and enjoying the meal.
Style: warm children's book illustration, soft colours, friendly, diverse children, European primary school canteen, no text, no labels.`,
};
