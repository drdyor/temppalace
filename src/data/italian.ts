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

  // ── Essential Verbs ─────────────────────────────────────────────────────
  essere: {
    notes: 'Most important Italian verb. Irregular.',
    examples: [
      { native: "Io sono italiano.", english: "I am Italian." },
      { native: "Lei è studentessa.", english: "She is a student." },
    ],
  },
  avere: {
    notes: 'Second most important verb. Used for possession and age.',
    examples: [
      { native: "Ho una casa grande.", english: "I have a big house." },
      { native: "Quanti anni hai?", english: "How old are you?" },
    ],
  },
  fare: {
    notes: 'Means to do or to make. Very irregular: faccio, fai, fa...',
    examples: [
      { native: "Faccio la spesa.", english: "I do the shopping." },
      { native: "Che cosa fai?", english: "What are you doing?" },
    ],
  },
  stare: {
    notes: 'Used for health/state and with gerund (stare + -ando/-endo).',
    examples: [
      { native: "Come stai?", english: "How are you?" },
      { native: "Sto bene, grazie.", english: "I'm fine, thanks." },
    ],
  },
  dare: {
    notes: 'Irregular: do, dai, dà, diamo, date, danno.',
    examples: [
      { native: "Dammi la chiave.", english: "Give me the key." },
      { native: "Ti do il numero.", english: "I'll give you the number." },
    ],
  },
  andare: {
    notes: 'Movement verb — takes essere in passato prossimo.',
    examples: [
      { native: "Vado a scuola.", english: "I go to school." },
      { native: "Dove vai?", english: "Where are you going?" },
    ],
  },
  venire: {
    notes: 'Takes essere in passato prossimo. Irregular: vengo, vieni...',
    examples: [
      { native: "Vengo da Milano.", english: "I come from Milan." },
      { native: "Vieni con noi?", english: "Are you coming with us?" },
    ],
  },
  partire: {
    notes: 'Takes essere in passato prossimo.',
    examples: [
      { native: "Il treno parte alle dieci.", english: "The train leaves at ten." },
      { native: "Quando parti?", english: "When are you leaving?" },
    ],
  },
  arrivare: {
    notes: 'Takes essere in passato prossimo.',
    examples: [
      { native: "Arrivo tra cinque minuti.", english: "I'll arrive in five minutes." },
      { native: "A che ora arriviamo?", english: "What time do we arrive?" },
    ],
  },
  uscire: {
    notes: 'Takes essere. Irregular: esco, esci, esce...',
    examples: [
      { native: "Esco alle otto.", english: "I leave at eight." },
      { native: "Usciamo stasera?", english: "Shall we go out tonight?" },
    ],
  },
  tornare: {
    notes: 'Takes essere in passato prossimo.',
    examples: [
      { native: "Torno a casa.", english: "I'm going back home." },
      { native: "A che ora torni?", english: "What time are you coming back?" },
    ],
  },
  volere: {
    notes: 'Modal verb + infinitive. Irregular: voglio, vuoi, vuole...',
    examples: [
      { native: "Voglio un caffè.", english: "I want a coffee." },
      { native: "Vuoi venire?", english: "Do you want to come?" },
    ],
  },
  potere: {
    notes: 'Modal verb meaning can/to be able. Posso, puoi, può...',
    examples: [
      { native: "Posso aiutarti.", english: "I can help you." },
      { native: "Non posso venire.", english: "I can't come." },
    ],
  },
  dovere: {
    notes: 'Modal verb meaning must/to have to. Devo, devi, deve...',
    examples: [
      { native: "Devo studiare.", english: "I have to study." },
      { native: "Dobbiamo partire.", english: "We have to leave." },
    ],
  },
  prendere: {
    notes: 'Used for ordering drinks/food and taking transport.',
    examples: [
      { native: "Prendo un caffè.", english: "I'll have a coffee." },
      { native: "Prendi l'autobus?", english: "Are you taking the bus?" },
    ],
  },
  mettere: {
    notes: 'To put / to place. Also used for putting on clothes.',
    examples: [
      { native: "Metto il cappotto.", english: "I put on the coat." },
      { native: "Dove metti le chiavi?", english: "Where do you put the keys?" },
    ],
  },
  dire: {
    notes: 'Highly irregular: dico, dici, dice, diciamo, dite, dicono.',
    examples: [
      { native: "Cosa dici?", english: "What are you saying?" },
      { native: "Dico la verità.", english: "I tell the truth." },
    ],
  },
  parlare: {
    notes: 'Regular -ARE verb. The model for all regular Italian verbs.',
    examples: [
      { native: "Parli italiano?", english: "Do you speak Italian?" },
      { native: "Parliamo piano.", english: "Let's speak slowly." },
    ],
  },
  vedere: {
    notes: 'To see. Ci vediamo! = See you! (very common)',
    examples: [
      { native: "Vedo il mare.", english: "I see the sea." },
      { native: "Ci vediamo domani!", english: "See you tomorrow!" },
    ],
  },
  sapere: {
    notes: 'To know a fact. (Conoscere = to know a person/place)',
    examples: [
      { native: "Non so.", english: "I don't know." },
      { native: "Sai cucinare?", english: "Do you know how to cook?" },
    ],
  },
  capire: {
    notes: 'Regular -IRE verb (isc type): capisco, capisci, capisce...',
    examples: [
      { native: "Non capisco.", english: "I don't understand." },
      { native: "Capisci l'italiano?", english: "Do you understand Italian?" },
    ],
  },

  // ── Days of the Week ────────────────────────────────────────────────────
  lunedi: {
    notes: 'Days are lowercase in Italian. Use "il lunedì" for every Monday.',
    examples: [
      { native: "Lunedì vado al lavoro.", english: "On Monday I go to work." },
    ],
  },
  martedi: {
    examples: [{ native: "Martedì ho lezione di italiano.", english: "On Tuesday I have Italian class." }],
  },
  mercoledi: {
    examples: [{ native: "Mercoledì andiamo al cinema.", english: "On Wednesday we go to the cinema." }],
  },
  giovedi: {
    examples: [{ native: "Giovedì faccio la spesa.", english: "On Thursday I do the shopping." }],
  },
  venerdi: {
    notes: 'Il venerdì sera = Friday evening (very social in Italy)',
    examples: [{ native: "Venerdì sera usciamo.", english: "On Friday evening we go out." }],
  },
  sabato: {
    notes: 'No accent — sabato is the only day without one.',
    examples: [{ native: "Sabato dormo fino a tardi.", english: "On Saturday I sleep in." }],
  },
  domenica: {
    notes: 'Feminine unlike the other days. La domenica.',
    examples: [{ native: "La domenica andiamo in chiesa.", english: "On Sunday we go to church." }],
  },

  // ── Months ──────────────────────────────────────────────────────────────
  gennaio: {
    examples: [{ native: "In gennaio fa molto freddo.", english: "In January it's very cold." }],
  },
  febbraio: {
    examples: [{ native: "A febbraio c'è il Carnevale.", english: "In February there's Carnival." }],
  },
  marzo: {
    examples: [{ native: "In marzo arriva la primavera.", english: "In March spring arrives." }],
  },
  aprile: {
    examples: [{ native: "Ad aprile piove spesso.", english: "In April it often rains." }],
  },
  maggio: {
    examples: [{ native: "In maggio i fiori sono bellissimi.", english: "In May the flowers are beautiful." }],
  },
  giugno: {
    examples: [{ native: "In giugno fa già caldo.", english: "In June it's already hot." }],
  },
  luglio: {
    examples: [{ native: "In luglio andiamo al mare.", english: "In July we go to the sea." }],
  },
  agosto: {
    notes: 'Ferragosto (Aug 15) is the biggest Italian holiday.',
    examples: [{ native: "In agosto molti italiani vanno in vacanza.", english: "In August many Italians go on holiday." }],
  },
  settembre: {
    examples: [{ native: "A settembre ricomincia la scuola.", english: "In September school starts again." }],
  },
  ottobre: {
    examples: [{ native: "In ottobre le foglie cadono.", english: "In October the leaves fall." }],
  },
  novembre: {
    examples: [{ native: "A novembre fa già freddo.", english: "In November it's already cold." }],
  },
  dicembre: {
    notes: 'Natale (Christmas) is December 25.',
    examples: [{ native: "In dicembre festeggiamo il Natale.", english: "In December we celebrate Christmas." }],
  },

  // ── Seasons ─────────────────────────────────────────────────────────────
  primavera: {
    examples: [{ native: "In primavera fa bello.", english: "In spring the weather is nice." }],
  },
  estate: {
    examples: [{ native: "D'estate fa molto caldo.", english: "In summer it's very hot." }],
  },
  autunno: {
    examples: [{ native: "In autunno le foglie sono rosse.", english: "In autumn the leaves are red." }],
  },
  inverno: {
    examples: [{ native: "In inverno nevica.", english: "In winter it snows." }],
  },

  // ── Time Adverbs ────────────────────────────────────────────────────────
  oggi: {
    examples: [{ native: "Oggi non lavoro.", english: "Today I don't work." }],
  },
  ieri: {
    examples: [{ native: "Ieri ho mangiato la pizza.", english: "Yesterday I ate pizza." }],
  },
  domani: {
    examples: [{ native: "Domani vado al mare.", english: "Tomorrow I'm going to the beach." }],
  },
  dopo: {
    examples: [{ native: "Ci vediamo dopo.", english: "See you later." }],
  },
  prima: {
    examples: [{ native: "Prima mangio, poi esco.", english: "First I eat, then I go out." }],
  },
  sempre: {
    examples: [{ native: "Bevo sempre il caffè al mattino.", english: "I always drink coffee in the morning." }],
  },
  mai: {
    notes: '"Non...mai" = never. Non means "not", mai means "ever/never".',
    examples: [{ native: "Non mangio mai carne.", english: "I never eat meat." }],
  },
  ancora: {
    examples: [{ native: "Non ho ancora mangiato.", english: "I haven't eaten yet." }],
  },
  tardi: {
    examples: [{ native: "Sono arrivato tardi.", english: "I arrived late." }],
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
