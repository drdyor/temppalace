// Contextual sentences for vocabulary words
// Each word has 2-3 example sentences showing practical usage

export interface WordSentence {
  italian: string;
  english: string;
  context: string; // brief context like "shopping", "cooking", "daily routine"
}

export const wordSentences: Record<string, WordSentence[]> = {
  // KITCHEN - Fridge items
  'acqua': [
    { italian: "L'acqua è in frigo.", english: "The water is in the fridge.", context: "location" },
    { italian: "Bevo un bicchiere d'acqua.", english: "I drink a glass of water.", context: "drinking" },
    { italian: "L'acqua è fredda.", english: "The water is cold.", context: "temperature" },
  ],
  'latte': [
    { italian: "Il latte è scaduto.", english: "The milk is expired.", context: "shopping check" },
    { italian: "Prendo il latte dal frigo.", english: "I get the milk from the fridge.", context: "daily routine" },
    { italian: "Vorrei del latte senza lattosio.", english: "I would like lactose-free milk.", context: "dietary needs" },
  ],
  'uova': [
    { italian: "Ho bisogno di uova per la frittata.", english: "I need eggs for the omelette.", context: "cooking" },
    { italian: "Le uova sono nel frigo.", english: "The eggs are in the fridge.", context: "location" },
    { italian: "Quante uova ci sono?", english: "How many eggs are there?", context: "inventory" },
  ],
  'burro': [
    { italian: "Il burro è sul tavolo.", english: "The butter is on the table.", context: "location" },
    { italian: "Metto il burro sul pane.", english: "I put butter on the bread.", context: "eating" },
    { italian: "Il burro è morbido.", english: "The butter is soft.", context: "texture" },
  ],
  'formaggio': [
    { italian: "Il formaggio è buono.", english: "The cheese is good.", context: "taste" },
    { italian: "Vorrei del formaggio grattugiato.", english: "I would like grated cheese.", context: "cooking" },
    { italian: "Quanto costa il formaggio?", english: "How much does the cheese cost?", context: "shopping" },
  ],
  'carne': [
    { italian: "La carne è nel freezer.", english: "The meat is in the freezer.", context: "location" },
    { italian: "Mangio carne ogni giorno.", english: "I eat meat every day.", context: "diet" },
    { italian: "La carne è cruda.", english: "The meat is raw.", context: "cooking" },
  ],
  'pesce': [
    { italian: "Il pesce è fresco.", english: "The fish is fresh.", context: "quality" },
    { italian: "Mangio pesce il venerdì.", english: "I eat fish on Fridays.", context: "tradition" },
    { italian: "Il pesce è sul ghiaccio.", english: "The fish is on ice.", context: "storage" },
  ],
  'pollo': [
    { italian: "Il pollo è nel forno.", english: "The chicken is in the oven.", context: "cooking" },
    { italian: "Mangio pollo arrosto.", english: "I eat roasted chicken.", context: "meal" },
    { italian: "Il pollo è pronto.", english: "The chicken is ready.", context: "timing" },
  ],
  'pomodoro': [
    { italian: "I pomodori sono rossi.", english: "The tomatoes are red.", context: "description" },
    { italian: "Taglio i pomodori per l'insalata.", english: "I cut the tomatoes for the salad.", context: "preparation" },
    { italian: "I pomodori sono maturi.", english: "The tomatoes are ripe.", context: "quality" },
  ],
  'carota': [
    { italian: "Le carote sono arancioni.", english: "The carrots are orange.", context: "description" },
    { italian: "Mangio carote crude.", english: "I eat raw carrots.", context: "eating" },
    { italian: "Le carote sono buone per gli occhi.", english: "Carrots are good for the eyes.", context: "health" },
  ],
  'insalata': [
    { italian: "L'insalata è fresca.", english: "The lettuce is fresh.", context: "quality" },
    { italian: "Mangio insalata a pranzo.", english: "I eat salad for lunch.", context: "meal" },
    { italian: "L'insalata è nel frigo.", english: "The lettuce is in the fridge.", context: "location" },
  ],
  'mela': [
    { italian: "La mela è rossa.", english: "The apple is red.", context: "description" },
    { italian: "Mangio una mela al giorno.", english: "I eat an apple a day.", context: "habit" },
    { italian: "La mela è dolce.", english: "The apple is sweet.", context: "taste" },
  ],
  'arancia': [
    { italian: "L'arancia è succosa.", english: "The orange is juicy.", context: "description" },
    { italian: "Spremo le arance per il succo.", english: "We squeeze oranges for juice.", context: "preparation" },
    { italian: "L'arancia è arancione.", english: "The orange is orange.", context: "color" },
  ],
  'banana': [
    { italian: "La banana è gialla.", english: "The banana is yellow.", context: "description" },
    { italian: "Mangio una banana a colazione.", english: "I eat a banana for breakfast.", context: "meal" },
    { italian: "La banana è matura.", english: "The banana is ripe.", context: "quality" },
  ],
  
  // KITCHEN - Pantry items
  'pasta': [
    { italian: "La pasta è pronta.", english: "The pasta is ready.", context: "cooking" },
    { italian: "Mangio pasta al pomodoro.", english: "I eat pasta with tomato sauce.", context: "meal" },
    { italian: "La pasta è nel cassetto.", english: "The pasta is in the drawer.", context: "location" },
  ],
  'riso': [
    { italian: "Il riso è cotto.", english: "The rice is cooked.", context: "cooking" },
    { italian: "Mangio riso con il pollo.", english: "I eat rice with chicken.", context: "meal" },
    { italian: "Il riso è nella dispensa.", english: "The rice is in the pantry.", context: "location" },
  ],
  'pane': [
    { italian: "Il pane è fresco.", english: "The bread is fresh.", context: "quality" },
    { italian: "Mangio pane con il burro.", english: "I eat bread with butter.", context: "eating" },
    { italian: "Il pane è nel cestino.", english: "The bread is in the basket.", context: "location" },
  ],
  'zucchero': [
    { italian: "Lo zucchero è nel barattolo.", english: "The sugar is in the jar.", context: "location" },
    { italian: "Metto lo zucchero nel caffè.", english: "I put sugar in the coffee.", context: "preparation" },
    { italian: "Lo zucchero è dolce.", english: "Sugar is sweet.", context: "taste" },
  ],
  'sale': [
    { italian: "Il sale è sul tavolo.", english: "The salt is on the table.", context: "location" },
    { italian: "Metto il sale nella pasta.", english: "I put salt in the pasta.", context: "cooking" },
    { italian: "Il sale è salato.", english: "Salt is salty.", context: "taste" },
  ],
  'olio': [
    { italian: "L'olio è nella bottiglia.", english: "The oil is in the bottle.", context: "location" },
    { italian: "Metto l'olio nell'insalata.", english: "I put oil in the salad.", context: "cooking" },
    { italian: "L'olio è extravergine.", english: "The oil is extra virgin.", context: "quality" },
  ],
  'caffe': [
    { italian: "Il caffè è caldo.", english: "The coffee is hot.", context: "temperature" },
    { italian: "Bevo il caffè al mattino.", english: "I drink coffee in the morning.", context: "habit" },
    { italian: "Il caffè è nella lattina.", english: "The coffee is in the tin.", context: "location" },
  ],
  'cioccolata': [
    { italian: "La cioccolata è dolce.", english: "The chocolate is sweet.", context: "taste" },
    { italian: "Mangio cioccolata dopo cena.", english: "I eat chocolate after dinner.", context: "meal" },
    { italian: "La cioccolata è nella dispensa.", english: "The chocolate is in the pantry.", context: "location" },
  ],
  'miele': [
    { italian: "Il miele è dolce.", english: "The honey is sweet.", context: "taste" },
    { italian: "Metto il miele sul pane.", english: "I put honey on the bread.", context: "eating" },
    { italian: "Il miele è nel barattolo.", english: "The honey is in the jar.", context: "location" },
  ],
  'biscotto': [
    { italian: "Il biscotto è croccante.", english: "The cookie is crunchy.", context: "texture" },
    { italian: "Mangio un biscotto con il caffè.", english: "I eat a cookie with coffee.", context: "snack" },
    { italian: "I biscotti sono nella scatola.", english: "The cookies are in the tin.", context: "location" },
  ],
  
  // KITCHEN - Utensils
  'coltello': [
    { italian: "Il coltello è affilato.", english: "The knife is sharp.", context: "description" },
    { italian: "Taglio il pane con il coltello.", english: "I cut the bread with the knife.", context: "usage" },
    { italian: "Il coltello è nel cassetto.", english: "The knife is in the drawer.", context: "location" },
  ],
  'forchetta': [
    { italian: "La forchetta è pulita.", english: "The fork is clean.", context: "description" },
    { italian: "Mangio la pasta con la forchetta.", english: "I eat pasta with the fork.", context: "usage" },
    { italian: "La forchetta è sul tavolo.", english: "The fork is on the table.", context: "location" },
  ],
  'cucchiaio': [
    { italian: "Il cucchiaio è grande.", english: "The spoon is big.", context: "description" },
    { italian: "Mangio la zuppa con il cucchiaio.", english: "I eat soup with the spoon.", context: "usage" },
    { italian: "Il cucchiaio è nel cassetto.", english: "The spoon is in the drawer.", context: "location" },
  ],
  
  // KITCHEN - Cooking
  'padella': [
    { italian: "La padella è calda.", english: "The frying pan is hot.", context: "temperature" },
    { italian: "Cucino le uova nella padella.", english: "I cook eggs in the frying pan.", context: "cooking" },
    { italian: "La padella è sul fornello.", english: "The frying pan is on the stove.", context: "location" },
  ],
  'pentola': [
    { italian: "La pentola è piena.", english: "The pot is full.", context: "description" },
    { italian: "Cucino la pasta nella pentola.", english: "I cook pasta in the pot.", context: "cooking" },
    { italian: "La pentola è sul fornello.", english: "The pot is on the stove.", context: "location" },
  ],
  'forno': [
    { italian: "Il forno è caldo.", english: "The oven is hot.", context: "temperature" },
    { italian: "Metto la torta nel forno.", english: "I put the cake in the oven.", context: "cooking" },
    { italian: "Il forno è in cucina.", english: "The oven is in the kitchen.", context: "location" },
  ],
  
  // KITCHEN - Table
  'piatto': [
    { italian: "Il piatto è pulito.", english: "The plate is clean.", context: "description" },
    { italian: "Metto la pasta nel piatto.", english: "I put the pasta on the plate.", context: "serving" },
    { italian: "Il piatto è sul tavolo.", english: "The plate is on the table.", context: "location" },
  ],
  'bicchiere': [
    { italian: "Il bicchiere è pieno.", english: "The glass is full.", context: "description" },
    { italian: "Bevo l'acqua dal bicchiere.", english: "I drink water from the glass.", context: "usage" },
    { italian: "Il bicchiere è sul tavolo.", english: "The glass is on the table.", context: "location" },
  ],
  'tazza': [
    { italian: "La tazza è calda.", english: "The cup is hot.", context: "temperature" },
    { italian: "Bevo il caffè dalla tazza.", english: "I drink coffee from the cup.", context: "usage" },
    { italian: "La tazza è sul piattino.", english: "The cup is on the saucer.", context: "location" },
  ],
  'vino': [
    { italian: "Il vino è rosso.", english: "The wine is red.", context: "description" },
    { italian: "Bevo vino a cena.", english: "I drink wine at dinner.", context: "meal" },
    { italian: "Il vino è nella bottiglia.", english: "The wine is in the bottle.", context: "location" },
  ],
  'birra': [
    { italian: "La birra è fredda.", english: "The beer is cold.", context: "temperature" },
    { italian: "Bevo birra con gli amici.", english: "I drink beer with friends.", context: "social" },
    { italian: "La birra è nella bottiglia.", english: "The beer is in the bottle.", context: "location" },
  ],
  'succo': [
    { italian: "Il succo è dolce.", english: "The juice is sweet.", context: "taste" },
    { italian: "Bevo succo d'arancia a colazione.", english: "I drink orange juice for breakfast.", context: "meal" },
    { italian: "Il succo è nel frigo.", english: "The juice is in the fridge.", context: "location" },
  ],
  'colazione': [
    { italian: "La colazione è importante.", english: "Breakfast is important.", context: "opinion" },
    { italian: "Mangio la colazione alle otto.", english: "I eat breakfast at eight.", context: "time" },
    { italian: "A colazione mangio il cornetto.", english: "For breakfast I eat a croissant.", context: "food" },
  ],
  'pranzo': [
    { italian: "Il pranzo è alle dodici.", english: "Lunch is at twelve.", context: "time" },
    { italian: "Mangio il pranzo al ristorante.", english: "I eat lunch at the restaurant.", context: "location" },
    { italian: "Il pranzo è pronto.", english: "Lunch is ready.", context: "timing" },
  ],
  'cena': [
    { italian: "La cena è alle otto.", english: "Dinner is at eight.", context: "time" },
    { italian: "Mangio la cena a casa.", english: "I eat dinner at home.", context: "location" },
    { italian: "La cena è buona.", english: "Dinner is good.", context: "taste" },
  ],
  
  // KITCHEN - Desserts
  'torta': [
    { italian: "La torta è buona.", english: "The cake is good.", context: "taste" },
    { italian: "Mangio la torta dopo cena.", english: "I eat cake after dinner.", context: "meal" },
    { italian: "La torta è nel frigo.", english: "The cake is in the fridge.", context: "location" },
  ],
  'gelato': [
    { italian: "Il gelato è freddo.", english: "The ice cream is cold.", context: "temperature" },
    { italian: "Mangio il gelato d'estate.", english: "I eat ice cream in summer.", context: "season" },
    { italian: "Il gelato è al cioccolato.", english: "The ice cream is chocolate.", context: "flavor" },
  ],
  'cornetto': [
    { italian: "Il cornetto è caldo.", english: "The croissant is warm.", context: "temperature" },
    { italian: "Mangio il cornetto a colazione.", english: "I eat a croissant for breakfast.", context: "meal" },
    { italian: "Il cornetto è alla crema.", english: "The croissant is cream-filled.", context: "flavor" },
  ],
};

// Helper function to get sentences for a word
export const getWordSentences = (wordId: string): WordSentence[] => {
  return wordSentences[wordId] || [];
};

// Practical phrases for "Do you speak English" conversations
export const practicalPhrases = [
  {
    italian: "Parla inglese?",
    english: "Do you speak English?",
    situation: "Asking if someone speaks English",
  },
  {
    italian: "Non parlo italiano.",
    english: "I don't speak Italian.",
    situation: "Explaining you don't speak Italian",
  },
  {
    italian: "Parlo un po' di italiano.",
    english: "I speak a little Italian.",
    situation: "Explaining your level",
  },
  {
    italian: "Può ripetere, per favore?",
    english: "Can you repeat, please?",
    situation: "Asking for repetition",
  },
  {
    italian: "Può parlare più lentamente?",
    english: "Can you speak more slowly?",
    situation: "Asking to slow down",
  },
  {
    italian: "Non capisco.",
    english: "I don't understand.",
    situation: "Expressing confusion",
  },
  {
    italian: "Come si dice...?",
    english: "How do you say...?",
    situation: "Asking how to say something",
  },
  {
    italian: "Che cosa significa...?",
    english: "What does ... mean?",
    situation: "Asking for meaning",
  },
  {
    italian: "Può aiutarmi?",
    english: "Can you help me?",
    situation: "Asking for help",
  },
  {
    italian: "Grazie per l'aiuto.",
    english: "Thank you for the help.",
    situation: "Expressing gratitude",
  },
];
