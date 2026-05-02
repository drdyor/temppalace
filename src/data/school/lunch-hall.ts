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
  { id: 'food-sandwich', emoji: '🥪', en: { word: 'sandwich', phrase: 'I have a sandwich.', context: 'Packed lunch' }, it: { word: 'panino', phrase: 'Ho un panino.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'food-apple', emoji: '🍎', en: { word: 'apple', phrase: 'An apple a day.', context: 'Healthy snack' }, it: { word: 'mela', phrase: 'Una mela al giorno.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'food-banana', emoji: '🍌', en: { word: 'banana', phrase: 'Peel the banana.', context: 'Fruit' }, it: { word: 'banana', phrase: 'Sbuccia la banana.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'food-pizza', emoji: '🍕', en: { word: 'pizza', phrase: 'I love pizza.', context: 'Hot lunch' }, it: { word: 'pizza', phrase: 'Amo la pizza.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'food-pasta', emoji: '🍝', en: { word: 'pasta', phrase: 'Pasta for lunch.', context: 'Hot lunch' }, it: { word: 'pasta', phrase: 'Pasta per pranzo.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'food-salad', emoji: '🥗', en: { word: 'salad', phrase: 'A green salad.', context: 'Healthy option' }, it: { word: 'insalata', phrase: 'Un'insalata verde.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'food-carrot', emoji: '🥕', en: { word: 'carrot', phrase: 'Carrots are orange.', context: 'Vegetable' }, it: { word: 'carota', phrase: 'Le carote sono arancioni.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'food-chicken', emoji: '🍗', en: { word: 'chicken', phrase: 'Chicken and rice.', context: 'Main dish' }, it: { word: 'pollo', phrase: 'Pollo e riso.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'food-bread', emoji: '🍞', en: { word: 'bread', phrase: 'A slice of bread.', context: 'Side' }, it: { word: 'pane', phrase: 'Una fetta di pane.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'food-cheese', emoji: '🧀', en: { word: 'cheese', phrase: 'Cheese sandwich.', context: 'Dairy' }, it: { word: 'formaggio', phrase: 'Panino al formaggio.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'food-yoghurt', emoji: '🥣', en: { word: 'yoghurt', phrase: 'A pot of yoghurt.', context: 'Dessert' }, it: { word: 'yogurt', phrase: 'Uno yogurt.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'food-crisps', emoji: '🥔', en: { word: 'crisps', phrase: 'A bag of crisps.', context: 'Snack' }, it: { word: 'patatine', phrase: 'Una busta di patatine.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'food-biscuit', emoji: '🍪', en: { word: 'biscuit', phrase: 'Have a biscuit.', context: 'Treat' }, it: { word: 'biscotto', phrase: 'Prendi un biscotto.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'food-cake', emoji: '🍰', en: { word: 'cake', phrase: 'A piece of cake.', context: 'Birthday' }, it: { word: 'torta', phrase: 'Un pezzo di torta.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'food-chocolate', emoji: '🍫', en: { word: 'chocolate', phrase: 'A bar of chocolate.', context: 'Treat' }, it: { word: 'cioccolato', phrase: 'Una tavoletta di cioccolato.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },

  // === TABLE & TRAY ===
  { id: 'tray-tray', emoji: '🥡', en: { word: 'tray', phrase: 'Put it on the tray.', context: 'Carrying food' }, it: { word: 'vassoio', phrase: 'Mettilo sul vassoio.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'tray-plate', emoji: '🍽️', en: { word: 'plate', phrase: 'A clean plate.', context: 'Eating' }, it: { word: 'piatto', phrase: 'Un piatto pulito.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'tray-bowl', emoji: '🥣', en: { word: 'bowl', phrase: 'A bowl of soup.', context: 'Eating' }, it: { word: 'ciotola', phrase: 'Una ciotola di zuppa.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'tray-cup', emoji: '☕', en: { word: 'cup', phrase: 'A cup of water.', context: 'Drinking' }, it: { word: 'tazza', phrase: 'Una tazza d'acqua.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'tray-glass', emoji: '🥛', en: { word: 'glass', phrase: 'A glass of milk.', context: 'Drinking' }, it: { word: 'bicchiere', phrase: 'Un bicchiere di latte.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'tray-fork', emoji: '🍴', en: { word: 'fork', phrase: 'Use your fork.', context: 'Cutlery' }, it: { word: 'forchetta', phrase: 'Usa la forchetta.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'tray-knife', emoji: '🔪', en: { word: 'knife', phrase: 'Be careful with the knife.', context: 'Cutlery' }, it: { word: 'coltello', phrase: 'Attento con il coltello.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'tray-spoon', emoji: '🥄', en: { word: 'spoon', phrase: 'Use a spoon.', context: 'Cutlery' }, it: { word: 'cucchiaio', phrase: 'Usa un cucchiaio.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'tray-napkin', emoji: '🧻', en: { word: 'napkin', phrase: 'Wipe your mouth.', context: 'Cleaning' }, it: { word: 'tovagliolo', phrase: 'Asciugati la bocca.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'tray-bottle', emoji: '🍼', en: { word: 'bottle', phrase: 'A bottle of water.', context: 'Drinking' }, it: { word: 'bottiglia', phrase: 'Una bottiglia d'acqua.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'tray-lunchbox', emoji: '🍱', en: { word: 'lunchbox', phrase: 'Open your lunchbox.', context: 'Packed lunch' }, it: { word: 'portapranzo', phrase: 'Apri il tuo portapranzo.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'tray-flask', emoji: '🫗', en: { word: 'flask', phrase: 'Water in my flask.', context: 'Drink container' }, it: { word: 'borraccia', phrase: 'Acqua nella mia borraccia.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'tray-straw', emoji: '🥤', en: { word: 'straw', phrase: 'Drink with a straw.', context: 'Drinking' }, it: { word: 'cannucia', phrase: 'Bevi con la cannucia.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'tray-lid', emoji: '⬜', en: { word: 'lid', phrase: 'Put the lid on.', context: 'Closing' }, it: { word: 'coperchio', phrase: 'Metti il coperchio.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'tray-serviette', emoji: '🧻', en: { word: 'serviette', phrase: 'A paper serviette.', context: 'Cleaning' }, it: { word: 'tovagliolo di carta', phrase: 'Un tovagliolo di carta.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },

  // === AT LUNCH ===
  { id: 'lunch-eat', emoji: '😋', en: { word: 'eat', phrase: 'Eat your lunch.', context: 'Teacher instruction' }, it: { word: 'mangiare', phrase: 'Mangia il tuo pranzo.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lunch-drink', emoji: '🥤', en: { word: 'drink', phrase: 'Drink your water.', context: 'Teacher instruction' }, it: { word: 'bere', phrase: 'Bevi la tua acqua.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lunch-hungry', emoji: '😩', en: { word: 'hungry', phrase: 'I am hungry.', context: 'Feeling' }, it: { word: 'fame', phrase: 'Ho fame.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lunch-thirsty', emoji: '😮‍💨', en: { word: 'thirsty', phrase: 'I am thirsty.', context: 'Feeling' }, it: { word: 'sete', phrase: 'Ho sete.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lunch-cut', emoji: '✂️', en: { word: 'cut', phrase: 'Cut the apple.', context: 'Preparing food' }, it: { word: 'tagliare', phrase: 'Taglia la mela.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lunch-peel', emoji: '🍌', en: { word: 'peel', phrase: 'Peel the banana.', context: 'Preparing fruit' }, it: { word: 'sbucciare', phrase: 'Sbuccia la banana.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lunch-open', emoji: '📦', en: { word: 'open', phrase: 'Open your lunchbox.', context: 'Getting food' }, it: { word: 'aprire', phrase: 'Apri il tuo portapranzo.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lunch-close', emoji: '🔒', en: { word: 'close', phrase: 'Close the lid.', context: 'Tidying' }, it: { word: 'chiudere', phrase: 'Chiudi il coperchio.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lunch-heat', emoji: '🔥', en: { word: 'heat', phrase: 'Heat the food.', context: 'Cooking' }, it: { word: 'scaldare', phrase: 'Scalda il cibo.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lunch-share', emoji: '🤝', en: { word: 'share', phrase: 'Can we share?', context: 'Social' }, it: { word: 'condividere', phrase: 'Possiamo condividere?', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lunch-pass', emoji: '🤲', en: { word: 'pass', phrase: 'Pass the salt.', context: 'Table manners' }, it: { word: 'passare', phrase: 'Passami il sale.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lunch-wash', emoji: '🧼', en: { word: 'wash', phrase: 'Wash your hands.', context: 'Hygiene' }, it: { word: 'lavare', phrase: 'Lavati le mani.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lunch-queue', emoji: '🚶', en: { word: 'queue', phrase: 'Wait in the queue.', context: 'Line' }, it: { word: 'fila', phrase: 'Aspetta in fila.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lunch-sit', emoji: '🪑', en: { word: 'sit', phrase: 'Sit at the table.', context: 'Manners' }, it: { word: 'sedersi', phrase: 'Siediti a tavola.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lunch-enjoy', emoji: '😊', en: { word: 'enjoy', phrase: 'Enjoy your meal.', context: 'Politeness' }, it: { word: 'buon appetito', phrase: 'Buon appetito.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
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
    natural: [
      { speaker: 'peer', en: 'What are you having for lunch?' },
      { speaker: 'student', en: 'I have a sandwich and an apple.' },
      { speaker: 'peer', en: 'Nice. I have pasta.' },
    ]},
  
  {
    id: 'lunch-can-i-sit',
    scenario: 'Asking to sit together',
    turns: [
      { speaker: 'student', en: 'Can I sit here?' },
      { speaker: 'peer', en: 'Yes, sit down.' },
      { speaker: 'student', en: 'Thank you.' },
    ],
    natural: [
      { speaker: 'student', en: 'Can I sit here?' },
      { speaker: 'peer', en: 'Yeah, sit down.' },
      { speaker: 'student', en: 'Thanks.' },
    ]},
  
  {
    id: 'lunch-sharing-food',
    scenario: 'Sharing food',
    turns: [
      { speaker: 'peer', en: 'Do you want some crisps?' },
      { speaker: 'student', en: 'Yes, please.' },
      { speaker: 'peer', en: 'Here you are.' },
      { speaker: 'student', en: 'Thanks!' },
    ],
    natural: [
      { speaker: 'peer', en: 'Want some crisps?' },
      { speaker: 'student', en: 'Yeah.' },
      { speaker: 'peer', en: "Here you go." },
      { speaker: 'student', en: 'Thanks!' },
    ]},
  
  {
    id: 'lunch-hungry',
    scenario: 'Feeling hungry',
    turns: [
      { speaker: 'student', en: 'I am hungry.' },
      { speaker: 'teacher', en: 'Eat your lunch.' },
      { speaker: 'student', en: 'I do not like it.' },
      { speaker: 'teacher', en: 'Try a little bit.' },
    ],
    natural: [
      { speaker: 'student', en: "I'm hungry." },
      { speaker: 'teacher', en: 'Eat your lunch.' },
      { speaker: 'student', en: "I don't like it." },
      { speaker: 'teacher', en: 'Try a little bit.' },
    ]},
  
  {
    id: 'lunch-thirsty',
    scenario: 'Needing a drink',
    turns: [
      { speaker: 'student', en: 'I am thirsty.' },
      { speaker: 'teacher', en: 'Drink some water.' },
      { speaker: 'student', en: 'Can I have juice?' },
      { speaker: 'teacher', en: 'After you drink water.' },
    ],
    natural: [
      { speaker: 'student', en: "I'm thirsty." },
      { speaker: 'teacher', en: 'Drink some water.' },
      { speaker: 'student', en: 'Can I have juice?' },
      { speaker: 'teacher', en: 'After you drink water.' },
    ]},
  
  {
    id: 'lunch-finished',
    scenario: 'Finished eating',
    turns: [
      { speaker: 'student', en: 'I am finished.' },
      { speaker: 'teacher', en: 'Did you enjoy it?' },
      { speaker: 'student', en: 'Yes, it was good.' },
      { speaker: 'teacher', en: 'Now wash your hands.' },
    ],
    natural: [
      { speaker: 'student', en: "I'm finished." },
      { speaker: 'teacher', en: 'Was it good?' },
      { speaker: 'student', en: 'Yeah, it was good.' },
      { speaker: 'teacher', en: 'Wash your hands.' },
    ]},
  
  {
    id: 'lunch-queue',
    scenario: 'Waiting in line',
    turns: [
      { speaker: 'teacher', en: 'Wait in the queue.' },
      { speaker: 'student', en: 'I want pizza.' },
      { speaker: 'teacher', en: 'Wait your turn.' },
    ],
    natural: [
      { speaker: 'teacher', en: 'Queue up.' },
      { speaker: 'student', en: 'I want pizza.' },
      { speaker: 'teacher', en: 'Wait your turn.' },
    ]},
  
  {
    id: 'lunch-allergies',
    scenario: 'Food allergy',
    turns: [
      { speaker: 'student', en: 'I cannot eat nuts.' },
      { speaker: 'teacher', en: 'Thank you for telling me.' },
      { speaker: 'teacher', en: 'Here is a safe sandwich.' },
      { speaker: 'student', en: 'Thank you.' },
    ],
    natural: [
      { speaker: 'student', en: "I can't eat nuts." },
      { speaker: 'teacher', en: 'Thanks for telling me.' },
      { speaker: 'teacher', en: "Here's a safe sandwich." },
      { speaker: 'student', en: 'Thanks.' },
    ]},
  
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
