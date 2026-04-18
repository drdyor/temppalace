// TODO(LANG-VELCRO): Italian-only content. Create parallel files for French/Spanish.
import type { LanguageData, NarrativeParagraph } from '../types';
import { italianVocabulary } from './italian-generated';

// Rich content additions (examples, mnemonics, etc.) for key words
export const italianRichContent: Record<string, { 
  pronunciation?: string;
  mnemonic?: string;
  examples?: { native: string; english: string }[];
  plural?: string;
  notes?: string;
}> = {
  // Entrance Hall
  porta: {
    pronunciation: 'POR-tah',
    mnemonic: 'The PORTA opens to your new world',
    examples: [
      { native: "La porta è aperta.", english: "The door is open." },
      { native: "Chiudi la porta, per favore.", english: "Close the door, please." },
    ],
  },
  chiave: {
    pronunciation: 'KYAH-veh',
    mnemonic: 'The KEY to learning is CHIAVE in your hand',
    examples: [
      { native: "Ho perso la chiave.", english: "I lost the key." },
      { native: "Dov'è la chiave?", english: "Where is the key?" },
    ],
  },
  specchio: {
    pronunciation: 'SPEH-kyoh',
    mnemonic: 'The SPECCHIO reflects your progress',
    examples: [
      { native: "Mi guardo nello specchio.", english: "I look in the mirror." },
    ],
  },
  cappotto: {
    pronunciation: 'kah-POT-toh',
    mnemonic: 'A CAPPUCCINO and a CAPPOTTO for cold mornings',
    examples: [
      { native: "Metto il cappotto.", english: "I put on the coat." },
    ],
  },
  uomo: {
    pronunciation: 'WOH-moh',
    plural: 'uomini',
    notes: 'Irregular plural: uomo → uomini',
    examples: [
      { native: "L'uomo mangia la pizza.", english: "The man eats pizza." },
      { native: "Gli uomini lavorano qui.", english: "The men work here." },
    ],
  },
  donna: {
    pronunciation: 'DON-nah',
    examples: [
      { native: "La donna beve il caffè.", english: "The woman drinks coffee." },
    ],
  },
  // Kitchen
  latte: {
    pronunciation: 'LAHT-teh',
    examples: [
      { native: "Il latte è fresco.", english: "The milk is fresh." },
    ],
  },
  formaggio: {
    pronunciation: 'for-MAH-joh',
    examples: [
      { native: "Il formaggio è buono.", english: "The cheese is good." },
    ],
  },
  pasta: {
    pronunciation: 'PAH-stah',
    examples: [
      { native: "La pasta è pronta.", english: "The pasta is ready." },
    ],
  },
  caffe: {
    pronunciation: 'kahf-FEH',
    notes: 'Invariable plural',
    examples: [
      { native: "Prendo un caffè.", english: "I have a coffee." },
    ],
  },
  pane: {
    pronunciation: 'PAH-neh',
    examples: [
      { native: "Mangio il pane.", english: "I eat the bread." },
    ],
  },
  // Bedroom
  letto: {
    pronunciation: 'LET-toh',
    examples: [
      { native: "Il letto è comodo.", english: "The bed is comfortable." },
    ],
  },
  madre: {
    pronunciation: 'MAH-dreh',
    examples: [
      { native: "Mia madre è gentile.", english: "My mother is kind." },
    ],
  },
  padre: {
    pronunciation: 'PAH-dreh',
    examples: [
      { native: "Mio padre lavora.", english: "My father works." },
    ],
  },
};

// Merge rich content into vocabulary
for (const [wordId, richContent] of Object.entries(italianRichContent)) {
  if (italianVocabulary[wordId]) {
    italianVocabulary[wordId] = {
      ...italianVocabulary[wordId],
      ...richContent,
    };
  }
}

// Narratives for the 9-paragraph temporal story system
export const italianNarratives: Record<string, NarrativeParagraph[]> = {
  kitchen: [
    // Past - The Disaster Morning
    {
      id: 'kitchen-past-1',
      order: 1,
      tense: 'past',
      native: "Ieri mattina ho aperto il **frigo** e non c'era niente. Niente **latte**, niente **uova**, niente **burro**. Mamma non era a casa.",
      english: "Yesterday morning I opened the fridge and there was nothing. No milk, no eggs, no butter. Mom wasn't home.",
      highlightedWords: ['frigo', 'latte', 'uova', 'burro'],
      grammarFocus: 'Passato prossimo with avere',
      zonePath: ['fridge'],
    },
    {
      id: 'kitchen-past-2',
      order: 2,
      tense: 'past',
      native: "Ho provato a fare le **uova** sul **fuoco**, ma era troppo alto. Il **fumo** era ovunque! Ho bruciato la **padella**.",
      english: "I tried to make eggs on the stove, but it was too high. The smoke was everywhere! I burned the pan.",
      highlightedWords: ['uova', 'fuoco', 'fumo', 'padella'],
      grammarFocus: 'Passato prossimo irregulars',
      zonePath: ['stove'],
    },
    {
      id: 'kitchen-past-3',
      order: 3,
      tense: 'past',
      native: "Sono uscito dalla **cucina** senza **colazione**. Il **pavimento** era bagnato. Una mattina disastrosa!",
      english: "I left the kitchen without breakfast. The floor was wet. A disastrous morning!",
      highlightedWords: ['cucina', 'colazione', 'pavimento'],
      grammarFocus: 'Essere vs avere in passato prossimo',
      zonePath: ['table', 'exit'],
    },
    // Present - The Perfect Morning
    {
      id: 'kitchen-present-1',
      order: 1,
      tense: 'present',
      native: "Oggi il **frigo** è pieno! C'è **latte** fresco, **uova** biologiche, e **burro** francese. Mamma è tornata!",
      english: "Today the fridge is full! There's fresh milk, organic eggs, and French butter. Mom is back!",
      highlightedWords: ['frigo', 'latte', 'uova', 'burro'],
      grammarFocus: 'Essere (descriptions)',
      zonePath: ['fridge'],
    },
    {
      id: 'kitchen-present-2',
      order: 2,
      tense: 'present',
      native: "Mamma sta cucinando le **uova** nella **padella**. \"Mescola con il **cucchiaio**!\" dice. Il profumo è incredibile.",
      english: "Mom is cooking eggs in the pan. 'Stir with the spoon!' she says. The smell is incredible.",
      highlightedWords: ['uova', 'padella', 'cucchiaio'],
      grammarFocus: 'Stare + gerundio (present continuous)',
      zonePath: ['stove'],
    },
    {
      id: 'kitchen-present-3',
      order: 3,
      tense: 'present',
      native: "Mangiamo al **tavolo**: **pane** tostato, **caffè** caldo, e le uova perfette. Sono felice!",
      english: "We eat at the table: toasted bread, hot coffee, and perfect eggs. I'm happy!",
      highlightedWords: ['tavolo', 'pane', 'caffe'],
      grammarFocus: 'Agreement with adjectives',
      zonePath: ['table'],
    },
    // Future - The Ideal Morning
    {
      id: 'kitchen-future-1',
      order: 1,
      tense: 'future',
      native: "Domani il **frigo** sarà sempre pieno. Avrò **latte**, **formaggio**, **frutta** fresca. Farò colazione ogni giorno!",
      english: "Tomorrow the fridge will always be full. I'll have milk, cheese, fresh fruit. I'll have breakfast every day!",
      highlightedWords: ['frigo', 'latte', 'formaggio', 'frutta'],
      grammarFocus: 'Futuro semplice',
      zonePath: ['fridge'],
    },
    {
      id: 'kitchen-future-2',
      order: 2,
      tense: 'future',
      native: "Imparerò a cucinare da solo. Userò la **pentola**, la **padella**, e il **forno**. Sarò uno chef!",
      english: "I'll learn to cook by myself. I'll use the pot, the pan, and the oven. I'll be a chef!",
      highlightedWords: ['pentola', 'padella', 'forno'],
      grammarFocus: 'Futuro semplice regular verbs',
      zonePath: ['stove'],
    },
    {
      id: 'kitchen-future-3',
      order: 3,
      tense: 'future',
      native: "La mia **famiglia** sarà sempre al **tavolo**. Mangeremo **pasta** fatta in casa. Sarà perfetto!",
      english: "My family will always be at the table. We'll eat homemade pasta. It will be perfect!",
      highlightedWords: ['famiglia', 'tavolo', 'pasta'],
      grammarFocus: 'Futuro with essere',
      zonePath: ['table'],
    },
  ],
};

// Export as LanguageData object
export const italianData: LanguageData = {
  code: 'italian',
  name: 'Italian',
  nativeName: 'Italiano',
  flag: '🇮🇹',
  vocabulary: italianVocabulary,
  narratives: italianNarratives,
};

export const italianVocabCount = Object.keys(italianVocabulary).length;
