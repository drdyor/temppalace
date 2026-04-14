// Room structure - language agnostic
// All 18 rooms from the original camera-cafe-learner

import type { Room } from '../types';

export const rooms: Room[] = [
  {
    id: 'entrance-hall',
    name: 'Foyer',
    subtitle: 'Essere & Avere',
    nameNative: "Ingresso",
    image: '/rooms/entrance-hall.jpg',
    description: 'Step into the grand hall. Meet the people and learn the two most important verbs in Italian.',
    grammarFocus: 'essere & avere (to be & to have)',
    vocabularyIds: ["alto", "amica", "amico", "autunno", "bambina", "bambino", "cattivo", "compleanno", "domenica", "donna", "estate", "famiglia", "figlia", "figlio", "fratello", "genitore", "gente", "giorno", "giovedi", "inverno", "largo", "lento", "lunedi", "lungo", "madre", "marito", "martedi", "mattina", "mercoledi", "mese", "minuto", "moglie", "neve", "nonna", "nonno", "notte", "numero", "ora", "padre", "persona", "persone", "pomeriggio", "popolo", "povero", "prigione", "ragazza", "ragazzo", "ricco", "romantico", "sabato", "sera", "settimana", "signore", "sorella", "uomo", "vacanza", "venerdi", "volta", "mezzogiorno", "mezzanotte", "alte", "alti", "altra", "altro", "collega", "coppia", "cosa", "famoso", "francese", "inglese", "idea", "luogo", "male", "mondo", "nome", "paesi", "pericoloso", "primo", "problema", "secondo", "società", "stipendio", "zia", "zio", "natale", "conoscere", "sapere", "piacere", "adesso", "agosto", "aprile", "dicembre", "domani", "febbraio", "forte", "gennaio", "giovane", "giugno", "ieri", "luglio", "maggio", "marzo", "novembre", "oggi", "ottobre", "quanti", "settembre", "stanotte", "stasera", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "dieci", "undici", "dodici", "tredici", "quattordici", "quindici", "sedici", "diciassette", "diciotto", "diciannove", "venti", "trenta", "cento", "forse", "grazie", "permesso", "buongiorno", "buonasera", "buonanotte", "arrivederci", "ciao", "facile", "difficile", "veloce", "sporco", "pieno", "vuoto", "pesante", "basso", "Nevica", "anche", "dopo", "enorme", "finalmente", "gratis", "mai", "questo", "sempre", "simile", "subito", "tardi", "terzo", "quarto", "quinto", "zero", "molto", "poco", "troppo", "abbastanza", "quasi", "più", "meno", "poi", "senza", "sicuro"],
    zones: [
      { id: 'family-portrait', name: 'Family Portrait', nameNative: "Ritratto di Famiglia", description: 'Family members on the wall', icon: '👨‍👩‍👧‍👦', x: 30, y: 40, width: 20, height: 25, interiorImage: '/rooms/entrance-portrait.jpg', interiorVocab: [{ wordId: 'alto', x: 12, y: 12 }, { wordId: 'amica', x: 37, y: 12 }, { wordId: 'amico', x: 62, y: 12 }, { wordId: 'autunno', x: 87, y: 12 }, { wordId: 'bambina', x: 12, y: 37 }, { wordId: 'bambino', x: 37, y: 37 }, { wordId: 'cattivo', x: 62, y: 37 }, { wordId: 'compleanno', x: 87, y: 37 }, { wordId: 'domenica', x: 12, y: 62 }, { wordId: 'donna', x: 37, y: 62 }] },
      { id: 'coat-rack', name: 'Coat Rack', nameNative: "Appendiabiti", description: 'Clothes and accessories', icon: '🧥', x: 75, y: 45, width: 15, height: 30, interiorImage: '/rooms/entrance-coat.jpg', interiorVocab: [{ wordId: 'estate', x: 12, y: 12 }, { wordId: 'famiglia', x: 37, y: 12 }, { wordId: 'figlia', x: 62, y: 12 }, { wordId: 'figlio', x: 87, y: 12 }, { wordId: 'fratello', x: 12, y: 37 }, { wordId: 'genitore', x: 37, y: 37 }, { wordId: 'gente', x: 62, y: 37 }, { wordId: 'giorno', x: 87, y: 37 }, { wordId: 'giovedi', x: 12, y: 62 }, { wordId: 'inverno', x: 37, y: 62 }] },
      { id: 'mirror', name: 'The Mirror', nameNative: "Lo Specchio", description: 'Body parts and descriptions', icon: '🪞', x: 50, y: 35, width: 15, height: 20, interiorVocab: [{ wordId: 'largo', x: 12, y: 12 }, { wordId: 'lento', x: 37, y: 12 }, { wordId: 'lunedi', x: 62, y: 12 }, { wordId: 'lungo', x: 87, y: 12 }, { wordId: 'madre', x: 12, y: 37 }, { wordId: 'marito', x: 37, y: 37 }, { wordId: 'martedi', x: 62, y: 37 }, { wordId: 'mattina', x: 87, y: 37 }, { wordId: 'mercoledi', x: 12, y: 62 }, { wordId: 'mese', x: 37, y: 62 }] },
      { id: 'clock', name: 'The Clock', nameNative: "L'Orologio", description: 'Days, months, and time', icon: '🕰️', x: 15, y: 25, width: 12, height: 12, interiorVocab: [{ wordId: 'minuto', x: 12, y: 12 }, { wordId: 'moglie', x: 37, y: 12 }, { wordId: 'neve', x: 62, y: 12 }, { wordId: 'nonna', x: 87, y: 12 }, { wordId: 'nonno', x: 12, y: 37 }, { wordId: 'notte', x: 37, y: 37 }, { wordId: 'numero', x: 62, y: 37 }, { wordId: 'ora', x: 87, y: 37 }, { wordId: 'padre', x: 12, y: 62 }, { wordId: 'persona', x: 37, y: 62 }] },
      { id: 'number-plate', name: 'House Number', nameNative: "Il Numero Civico", description: 'Numbers and quantities', icon: '🔢', x: 85, y: 25, width: 10, height: 10, interiorVocab: [{ wordId: 'abbastanza', x: 12, y: 12 }, { wordId: 'cinque', x: 37, y: 12 }, { wordId: 'diciannove', x: 62, y: 12 }, { wordId: 'diciassette', x: 87, y: 12 }, { wordId: 'diciotto', x: 12, y: 37 }, { wordId: 'dieci', x: 37, y: 37 }, { wordId: 'dodici', x: 62, y: 37 }, { wordId: 'due', x: 87, y: 37 }, { wordId: 'meno', x: 12, y: 62 }, { wordId: 'milione', x: 37, y: 62 }, { wordId: 'milioni', x: 62, y: 62 }, { wordId: 'mille', x: 87, y: 62 }] },
      { id: 'welcome-mat', name: 'Welcome Mat', nameNative: "Zerbino", description: 'Common words and questions', icon: '🚪', x: 45, y: 80, width: 25, height: 12, interiorVocab: [{ wordId: 'altra', x: 12, y: 12 }, { wordId: 'altro', x: 37, y: 12 }, { wordId: 'anche', x: 62, y: 12 }, { wordId: 'ancora', x: 87, y: 12 }, { wordId: 'aspetto', x: 12, y: 37 }, { wordId: 'buonanotte', x: 37, y: 37 }, { wordId: 'buonasera', x: 62, y: 37 }, { wordId: 'calcio', x: 87, y: 37 }, { wordId: 'campeggio', x: 12, y: 62 }, { wordId: 'che', x: 37, y: 62 }, { wordId: 'chi', x: 62, y: 62 }, { wordId: 'ciao', x: 87, y: 62 }] },
    ],
    grammarPoints: [
      { id: 'essere', title: 'Essere - To Be', explanation: 'Used for identity, characteristics, and location', example: 'Io sono Italiano (I am Italian)', color: '#E7A04D' },
      { id: 'avere', title: 'Avere - To Have', explanation: 'Used for possession and age', example: 'Io ho una chiave (I have a key)', color: '#3B82F6' },
    ],
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    subtitle: 'Fare & -ARE Verbs',
    nameNative: "Cucina",
    image: '/rooms/kitchen.jpg',
    description: 'La cucina del palazzo — where every object tells a story and teaches the verb "fare".',
    grammarFocus: 'fare & regular -ARE verbs',
    vocabularyIds: ["acqua", "aglio", "albergo", "arancia", "banana", "bicchiere", "birra", "bottiglia", "burro", "caffe", "caldo", "carne", "cena", "cibo", "cioccolata", "cipolla", "colazione", "coltello", "cucchiaio", "cucina", "cuoca", "cuoco", "forchetta", "formaggio", "forno", "foto", "fragola", "freddo", "frigorifero", "frutta", "gelato", "ghiaccio", "insalata", "insegnante", "latte", "maestro", "mela", "menu", "morte", "occhiali", "olio", "padella", "pane", "pasta", "patata", "patente", "pentola", "pepe", "pesce", "piatto", "pizza", "poliziotto", "pollo", "pomodoro", "posta", "posto", "pranzo", "prezzo", "raffreddore", "ricetta", "riso", "sale", "sparo", "squadra", "succo", "tavolino", "teatro", "tempo", "torta", "tovagliolo", "ufficio", "uova", "uovo", "verdura", "vergogna", "vino", "voce", "zucchero", "zuppa", "maglione", "carota", "peperone", "uva", "pera", "pesca", "ciliegia", "limone", "anguria", "miele", "tazza", "bastoncini", "fiamma", "fuoco", "piattino", "bere", "insegnare", "mangiare", "cucinare", "preparare", "dolce", "grande"],
    zones: [
      { id: 'fridge', name: 'The Fridge', nameNative: "Il Frigorifero", description: 'Cold food and drinks', icon: '❄️', x: 75, y: 45, width: 15, height: 25, interiorImage: '/rooms/kitchen-fridge.jpg', interiorVocab: [{ wordId: 'acqua', x: 12, y: 12 }, { wordId: 'aglio', x: 37, y: 12 }, { wordId: 'albergo', x: 62, y: 12 }, { wordId: 'arancia', x: 87, y: 12 }, { wordId: 'banana', x: 12, y: 37 }, { wordId: 'bicchiere', x: 37, y: 37 }, { wordId: 'birra', x: 62, y: 37 }, { wordId: 'bottiglia', x: 87, y: 37 }, { wordId: 'burro', x: 12, y: 62 }, { wordId: 'caffe', x: 37, y: 62 }] },
      { id: 'pantry', name: 'The Pantry', nameNative: "La Dispensa", description: 'Dry goods and staples', icon: '🥫', x: 88, y: 40, width: 10, height: 30, interiorImage: '/rooms/kitchen-pantry.jpg', interiorVocab: [{ wordId: 'caldo', x: 12, y: 12 }, { wordId: 'carne', x: 37, y: 12 }, { wordId: 'cena', x: 62, y: 12 }, { wordId: 'cibo', x: 87, y: 12 }, { wordId: 'cioccolata', x: 12, y: 37 }, { wordId: 'cipolla', x: 37, y: 37 }, { wordId: 'colazione', x: 62, y: 37 }, { wordId: 'coltello', x: 87, y: 37 }, { wordId: 'cucchiaio', x: 12, y: 62 }, { wordId: 'cucina', x: 37, y: 62 }] },
      { id: 'stove', name: 'The Stove', nameNative: "I Fornelli", description: 'Cooking and preparation', icon: '🔥', x: 60, y: 55, width: 15, height: 15, interiorVocab: [{ wordId: 'cuoca', x: 12, y: 12 }, { wordId: 'cuoco', x: 37, y: 12 }, { wordId: 'forchetta', x: 62, y: 12 }, { wordId: 'formaggio', x: 87, y: 12 }, { wordId: 'forno', x: 12, y: 37 }, { wordId: 'foto', x: 37, y: 37 }, { wordId: 'fragola', x: 62, y: 37 }, { wordId: 'freddo', x: 87, y: 37 }, { wordId: 'frigorifero', x: 12, y: 62 }, { wordId: 'frutta', x: 37, y: 62 }] },
      { id: 'table', name: 'The Table', nameNative: "Il Tavolo", description: 'Dining and eating', icon: '🍽️', x: 25, y: 65, width: 20, height: 15, interiorVocab: [{ wordId: 'gelato', x: 12, y: 12 }, { wordId: 'ghiaccio', x: 37, y: 12 }, { wordId: 'insalata', x: 62, y: 12 }, { wordId: 'insegnante', x: 87, y: 12 }, { wordId: 'latte', x: 12, y: 37 }, { wordId: 'maestro', x: 37, y: 37 }, { wordId: 'mela', x: 62, y: 37 }, { wordId: 'menu', x: 87, y: 37 }, { wordId: 'morte', x: 12, y: 62 }, { wordId: 'occhiali', x: 37, y: 62 }] },
    ],
    grammarPoints: [
      { id: 'fare', title: 'Fare - To Do/Make', explanation: 'Irregular verb used for actions and weather', example: 'Faccio la pasta (I make pasta)', color: '#E7A04D' },
      { id: 'are-verbs', title: 'Regular -ARE Verbs', explanation: 'Most common verb conjugation pattern', example: 'Parlare → Io parlo, Tu parli, Lui/lei parla', color: '#10B981' },
    ],
  },
  {
    id: 'library',
    name: 'Knowledge Hub',
    subtitle: 'Learning, Work & Technology',
    nameNative: "Biblioteca",
    image: '/rooms/library.jpg',
    description: 'La biblioteca e lo studio — master learning, work, and technology vocabulary.',
    grammarFocus: 'questions, negation, and verb patterns',
    vocabularyIds: ["antipasto", "biblioteca", "caro", "carta", "classe", "computer", "disegno", "domanda", "esame", "festa", "geografia", "lettera", "lezione", "mappa", "matematica", "matita", "mouse", "pagina", "parola", "parte", "password", "penna", "risposta", "scienza", "scuola", "spada", "studente", "studentessa", "università", "scrivania", "dizionario", "carrello", "file", "righello", "stampante", "telescopio", "testo", "aprire", "partire", "rispondere", "studiare", "iniziare"],
    zones: [
      { id: 'bookshelf', name: 'The Bookshelf', nameNative: "Lo Scaffale", description: 'School and books', icon: '📚', x: 30, y: 35, width: 25, height: 30, interiorVocab: [{ wordId: 'antipasto', x: 12, y: 12 }, { wordId: 'biblioteca', x: 37, y: 12 }, { wordId: 'caro', x: 62, y: 12 }, { wordId: 'carta', x: 87, y: 12 }, { wordId: 'classe', x: 12, y: 37 }, { wordId: 'computer', x: 37, y: 37 }, { wordId: 'disegno', x: 62, y: 37 }, { wordId: 'domanda', x: 87, y: 37 }, { wordId: 'esame', x: 12, y: 62 }, { wordId: 'festa', x: 37, y: 62 }] },
      { id: 'desk', name: 'Study Desk', nameNative: "La Scrivania", description: 'Study and work', icon: '📝', x: 60, y: 60, width: 20, height: 20, interiorVocab: [{ wordId: 'geografia', x: 12, y: 12 }, { wordId: 'lettera', x: 37, y: 12 }, { wordId: 'lezione', x: 62, y: 12 }, { wordId: 'mappa', x: 87, y: 12 }, { wordId: 'matematica', x: 12, y: 37 }, { wordId: 'matita', x: 37, y: 37 }, { wordId: 'mouse', x: 62, y: 37 }, { wordId: 'pagina', x: 87, y: 37 }, { wordId: 'parola', x: 12, y: 62 }, { wordId: 'parte', x: 37, y: 62 }] },
      { id: 'computer', name: 'Computer Station', nameNative: "Il Computer", description: 'Technology and time', icon: '💻', x: 85, y: 45, width: 12, height: 15, interiorVocab: [{ wordId: 'password', x: 12, y: 12 }, { wordId: 'penna', x: 37, y: 12 }, { wordId: 'risposta', x: 62, y: 12 }, { wordId: 'scienza', x: 87, y: 12 }, { wordId: 'scuola', x: 12, y: 37 }, { wordId: 'spada', x: 37, y: 37 }, { wordId: 'studente', x: 62, y: 37 }, { wordId: 'studentessa', x: 87, y: 37 }, { wordId: 'università', x: 12, y: 62 }, { wordId: 'scrivania', x: 37, y: 62 }] },
    ],
    grammarPoints: [
      { id: 'questions', title: 'Forming Questions', explanation: 'Raise intonation or use question words', example: 'Tu parli italiano? → Parli tu italiano?', color: '#8B5CF6' },
      { id: 'negation', title: 'Negation', explanation: 'Wrap the verb with non...', example: 'Non parlo italiano (I don\'t speak Italian)', color: '#EC4899' },
    ],
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    subtitle: 'Family & Descriptions',
    nameNative: "L\'Camera da Letto",
    image: '/rooms/bedroom.jpg',
    description: 'Learn family members and master adjective agreement.',
    grammarFocus: 'possessive adjectives & adjective agreement',
    vocabularyIds: ["anello", "armadio", "berretto", "borsa", "borse", "calze", "camicetta", "camicia", "cappello", "cappotto", "cassetto", "chiave", "chiavi", "cintura", "collana", "comodino", "coperta", "cravatta", "cuscino", "giacca", "gonna", "guanti", "impermeabile", "letto", "maglietta", "ombrello", "orecchino", "orologio", "pantofole", "parrucchiere", "primavera", "scarpe", "sciarpa", "specchio", "stivali", "sveglia", "tastiera", "valigia", "vestito", "zaino", "pigiama", "caricabatterie", "jeans", "pantaloni", "pantaloncini", "taglia", "dormire", "guardare", "legare", "portare", "scappare", "vestirsi", "pettinarsi", "addormentarsi", "quello"],
    zones: [
      { id: 'wardrobe', name: 'The Wardrobe', nameNative: "L\'Armadio", description: 'Clothes and fashion', icon: '👔', x: 70, y: 40, width: 15, height: 30, interiorImage: '/rooms/bedroom-wardrobe.jpg', interiorVocab: [{ wordId: 'anello', x: 12, y: 12 }, { wordId: 'armadio', x: 37, y: 12 }, { wordId: 'berretto', x: 62, y: 12 }, { wordId: 'borsa', x: 87, y: 12 }, { wordId: 'borse', x: 12, y: 37 }, { wordId: 'calze', x: 37, y: 37 }, { wordId: 'camicetta', x: 62, y: 37 }, { wordId: 'camicia', x: 87, y: 37 }, { wordId: 'cappello', x: 12, y: 62 }, { wordId: 'cappotto', x: 37, y: 62 }] },
      { id: 'bed', name: 'The Bed', nameNative: "Il Letto", description: 'Rest and daily routine', icon: '🛏️', x: 40, y: 55, width: 25, height: 20, interiorVocab: [{ wordId: 'cassetto', x: 12, y: 12 }, { wordId: 'chiave', x: 37, y: 12 }, { wordId: 'chiavi', x: 62, y: 12 }, { wordId: 'cintura', x: 87, y: 12 }, { wordId: 'collana', x: 12, y: 37 }, { wordId: 'comodino', x: 37, y: 37 }, { wordId: 'coperta', x: 62, y: 37 }, { wordId: 'cravatta', x: 87, y: 37 }, { wordId: 'cuscino', x: 12, y: 62 }, { wordId: 'giacca', x: 37, y: 62 }] },
      { id: 'photos', name: 'Family Photos', nameNative: "Le Foto", description: 'Family and relationships', icon: '📷', x: 25, y: 30, width: 20, height: 15, interiorVocab: [{ wordId: 'gonna', x: 12, y: 12 }, { wordId: 'guanti', x: 37, y: 12 }, { wordId: 'impermeabile', x: 62, y: 12 }, { wordId: 'letto', x: 87, y: 12 }, { wordId: 'maglietta', x: 12, y: 37 }, { wordId: 'ombrello', x: 37, y: 37 }, { wordId: 'orecchino', x: 62, y: 37 }, { wordId: 'orologio', x: 87, y: 37 }, { wordId: 'pantofole', x: 12, y: 62 }, { wordId: 'parrucchiere', x: 37, y: 62 }] },
    ],
    grammarPoints: [
      { id: 'possessives', title: 'Possessive Adjectives', explanation: 'Show ownership: il mio, la tua, il suo', example: 'Il mio letto (My bed), La tua famiglia (Your family)', color: '#EC4899' },
      { id: 'agreement', title: 'Adjective Agreement', explanation: 'Adjectives match gender and number of nouns', example: 'Una famiglia grande (A big family)', color: '#8B5CF6' },
    ],
  },
  {
    id: 'bathroom',
    name: 'Bathroom',
    subtitle: 'Daily Routine & Reflexives',
    nameNative: "Bagno",
    image: '/rooms/bathroom.jpg',
    description: 'Il bagno — master daily routines and reflexive verbs.',
    grammarFocus: 'reflexive verbs (mi lavo, mi pettino) & daily routine',
    vocabularyIds: ["anni", "anno", "asciugamano", "bagno", "bocca", "braccio", "calcio", "capelli", "cerotto", "collina", "collo", "contadino", "conto", "corpo", "cuffie", "cuore", "dente", "dito", "doccia", "dolore", "dottore", "dottoressa", "faccia", "farmacia", "fascia", "febbre", "gamba", "ginocchio", "gomito", "infermiera", "infermiere", "lingua", "malata", "malato", "mani", "mano", "medicina", "medico", "naso", "occhi", "occhio", "orecchio", "ospedale", "paese", "pancia", "paura", "piede", "pittore", "pittura", "poltrona", "quadro", "salute", "sangue", "sapone", "schiena", "sedia", "stomaco", "termometro", "terra", "testa", "vicino", "labbro", "guancia", "mento", "fronte", "sopracciglio", "caviglia", "polso", "pollice", "gola", "dentifricio", "asciugacapelli", "denti", "ferita", "influenza", "tosse", "polvere", "piedi", "cercare", "imparare", "sentire", "stare", "lavare", "pulire", "lavarsi", "dipingere", "ancora", "presto", "pulito", "dritto"],
    zones: [
      { id: 'sink', name: 'The Sink', nameNative: "Il Lavandino", description: 'Washing and face', icon: '🚰', x: 25, y: 45, width: 20, height: 25, interiorVocab: [{ wordId: 'anni', x: 12, y: 12 }, { wordId: 'anno', x: 37, y: 12 }, { wordId: 'asciugamano', x: 62, y: 12 }, { wordId: 'bagno', x: 87, y: 12 }, { wordId: 'bocca', x: 12, y: 37 }, { wordId: 'braccio', x: 37, y: 37 }, { wordId: 'calcio', x: 62, y: 37 }, { wordId: 'capelli', x: 87, y: 37 }, { wordId: 'cerotto', x: 12, y: 62 }, { wordId: 'collina', x: 37, y: 62 }] },
      { id: 'shower', name: 'The Shower', nameNative: "La Doccia", description: 'Bathing and body', icon: '🚿', x: 60, y: 35, width: 25, height: 35, interiorVocab: [{ wordId: 'collo', x: 12, y: 12 }, { wordId: 'contadino', x: 37, y: 12 }, { wordId: 'conto', x: 62, y: 12 }, { wordId: 'corpo', x: 87, y: 12 }, { wordId: 'cuffie', x: 12, y: 37 }, { wordId: 'cuore', x: 37, y: 37 }, { wordId: 'dente', x: 62, y: 37 }, { wordId: 'dito', x: 87, y: 37 }, { wordId: 'doccia', x: 12, y: 62 }, { wordId: 'dolore', x: 37, y: 62 }] },
      { id: 'cabinet', name: 'Medicine Cabinet', nameNative: "L\'Armadietto", description: 'Health and care', icon: '💊', x: 85, y: 30, width: 12, height: 20, interiorVocab: [{ wordId: 'dottore', x: 12, y: 12 }, { wordId: 'dottoressa', x: 37, y: 12 }, { wordId: 'faccia', x: 62, y: 12 }, { wordId: 'farmacia', x: 87, y: 12 }, { wordId: 'fascia', x: 12, y: 37 }, { wordId: 'febbre', x: 37, y: 37 }, { wordId: 'gamba', x: 62, y: 37 }, { wordId: 'ginocchio', x: 87, y: 37 }, { wordId: 'gomito', x: 12, y: 62 }, { wordId: 'infermiera', x: 37, y: 62 }] },
    ],
    grammarPoints: [
      { id: 'reflexives', title: 'Reflexive Verbs', explanation: 'Actions you do to yourself with mi/ti/si/ci/vi/si', example: 'Mi lavo (I wash myself), Ti pettini (You comb yourself)', color: '#10B981' },
    ],
  },
  {
    id: 'garden',
    name: 'Garden',
    subtitle: 'Andare & Places',
    nameNative: "Giardino",
    image: '/rooms/garden.jpg',
    description: 'Il giardino del palazzo — learn the verb "andare" as you walk through the garden.',
    grammarFocus: 'andare & preposizioni articolate',
    vocabularyIds: ["bosco", "campeggio", "cielo", "erba", "fiore", "fiume", "foresta", "giardino", "lago", "legno", "mare", "montagna", "montagne", "natura", "nuvola", "palestra", "panino", "pietra", "pietre", "pioggia", "piscina", "sole", "spiaggia", "vento", "albero", "foglia", "arcobaleno", "sabbia", "ramo", "radice", "correre", "mille", "Piove"],
    zones: [
      { id: 'flowers', name: 'The Flowers', nameNative: "I Fiori", description: 'Nature and plants', icon: '🌸', x: 65, y: 60, width: 20, height: 20, interiorVocab: [{ wordId: 'bosco', x: 12, y: 12 }, { wordId: 'campeggio', x: 37, y: 12 }, { wordId: 'cielo', x: 62, y: 12 }, { wordId: 'erba', x: 87, y: 12 }, { wordId: 'fiore', x: 12, y: 37 }, { wordId: 'fiume', x: 37, y: 37 }, { wordId: 'foresta', x: 62, y: 37 }, { wordId: 'giardino', x: 87, y: 37 }, { wordId: 'lago', x: 12, y: 62 }, { wordId: 'legno', x: 37, y: 62 }] },
      { id: 'path', name: 'The Path', nameNative: "Il Vialetto", description: 'Places and directions', icon: '🛤️', x: 30, y: 75, width: 25, height: 15, interiorVocab: [{ wordId: 'mare', x: 12, y: 12 }, { wordId: 'montagna', x: 37, y: 12 }, { wordId: 'montagne', x: 62, y: 12 }, { wordId: 'natura', x: 87, y: 12 }, { wordId: 'nuvola', x: 12, y: 37 }, { wordId: 'palestra', x: 37, y: 37 }, { wordId: 'panino', x: 62, y: 37 }, { wordId: 'pietra', x: 87, y: 37 }, { wordId: 'pietre', x: 12, y: 62 }, { wordId: 'pioggia', x: 37, y: 62 }] },
      { id: 'sky', name: 'The Sky', nameNative: "Il Cielo", description: 'Weather and seasons', icon: '☀️', x: 50, y: 15, width: 30, height: 15, interiorVocab: [{ wordId: 'piscina', x: 12, y: 12 }, { wordId: 'sole', x: 37, y: 12 }, { wordId: 'spiaggia', x: 62, y: 12 }, { wordId: 'vento', x: 87, y: 12 }, { wordId: 'albero', x: 12, y: 37 }, { wordId: 'foglia', x: 37, y: 37 }, { wordId: 'arcobaleno', x: 62, y: 37 }, { wordId: 'sabbia', x: 87, y: 37 }, { wordId: 'ramo', x: 12, y: 62 }, { wordId: 'radice', x: 37, y: 62 }] },
    ],
    grammarPoints: [
      { id: 'andare', title: 'Andare - To Go', explanation: 'Irregular verb for movement', example: 'Vado a Roma (I go to Rome)', color: '#E7A04D' },
      { id: 'prepositions', title: 'Preposizioni Articolate', explanation: 'Combined preposition + article', example: 'a + il = al, in + la = nella', color: '#3B82F6' },
    ],
  },
  {
    id: 'transport',
    name: 'Transport Hub',
    subtitle: 'Movement & Directions',
    nameNative: "Stazione",
    image: '/rooms/transport.jpg',
    description: 'La stazione — learn to navigate, buy tickets, and ask directions.',
    grammarFocus: 'andare + dove, direzione, prepositions of place',
    vocabularyIds: ["aereo", "aeroporto", "ascensore", "autista", "auto", "autobus", "bancomat", "barca", "benzina", "bicicletta", "biglietto", "carriera", "fermata", "ingegnere", "macchina", "metro", "moneta", "moto", "nave", "pasqua", "passeggiata", "ponte", "pullman", "resto", "soldi", "stanca", "stanco", "stazione", "strada", "strade", "taxi", "treno", "via", "viaggio", "parcheggio", "semaforo", "sinistra", "destra", "città", "guida", "lontano", "piazza", "porto", "prenotazione", "tram", "camminare", "ritornare", "tornare", "guidare", "girare", "arrivare"],
    zones: [
      { id: 'ticket-office', name: 'Ticket Office', nameNative: "La Biglietteria", description: 'Buying tickets', icon: '🎫', x: 20, y: 45, width: 22, height: 25, interiorVocab: [{ wordId: 'aereo', x: 12, y: 12 }, { wordId: 'aeroporto', x: 37, y: 12 }, { wordId: 'ascensore', x: 62, y: 12 }, { wordId: 'autista', x: 87, y: 12 }, { wordId: 'auto', x: 12, y: 37 }, { wordId: 'autobus', x: 37, y: 37 }, { wordId: 'bancomat', x: 62, y: 37 }, { wordId: 'barca', x: 87, y: 37 }, { wordId: 'benzina', x: 12, y: 62 }, { wordId: 'bicicletta', x: 37, y: 62 }] },
      { id: 'platform', name: 'Platform', nameNative: "Il Binario", description: 'Trains and departure', icon: '🚂', x: 50, y: 40, width: 25, height: 30, interiorVocab: [{ wordId: 'biglietto', x: 12, y: 12 }, { wordId: 'carriera', x: 37, y: 12 }, { wordId: 'fermata', x: 62, y: 12 }, { wordId: 'ingegnere', x: 87, y: 12 }, { wordId: 'macchina', x: 12, y: 37 }, { wordId: 'metro', x: 37, y: 37 }, { wordId: 'moneta', x: 62, y: 37 }, { wordId: 'moto', x: 87, y: 37 }, { wordId: 'nave', x: 12, y: 62 }, { wordId: 'pasqua', x: 37, y: 62 }] },
      { id: 'street', name: 'Street Exit', nameNative: "L\'Uscita", description: 'Directions and navigation', icon: '🚶', x: 80, y: 50, width: 18, height: 25, interiorVocab: [{ wordId: 'passeggiata', x: 12, y: 12 }, { wordId: 'ponte', x: 37, y: 12 }, { wordId: 'pullman', x: 62, y: 12 }, { wordId: 'resto', x: 87, y: 12 }, { wordId: 'soldi', x: 12, y: 37 }, { wordId: 'stanca', x: 37, y: 37 }, { wordId: 'stanco', x: 62, y: 37 }, { wordId: 'stazione', x: 87, y: 37 }, { wordId: 'strada', x: 12, y: 62 }, { wordId: 'strade', x: 37, y: 62 }] },
    ],
    grammarPoints: [
      { id: 'directions', title: 'Asking for Directions', explanation: 'Dove è...? Come si va...?', example: 'Dov\'è la stazione? (Where is the station?)', color: '#10B981' },
    ],
  },
  {
    id: 'living-room',
    name: 'Living Room',
    subtitle: 'Modal Verbs',
    nameNative: "Soggiorno",
    image: '/rooms/living-room.jpg',
    description: 'Express ability, desire, and obligation with modal verbs.',
    grammarFocus: 'modal verbs: potere, volere, dovere',
    vocabularyIds: ["aula", "canzone", "casa", "cellulare", "compito", "divano", "edificio", "farmaco", "film", "finestra", "gioco", "lampada", "libreria", "libro", "muro", "musica", "orario", "palazzi", "palazzo", "partita", "passaporto", "porta", "portafoglio", "quaderno", "radio", "sala", "scala", "soggiorno", "spettacolo", "sport", "stanza", "tablet", "tappeto", "tavolo", "telefono", "televisione", "tenda", "tetto", "tv", "video", "videogame", "soffitto", "pavimento", "telecomando", "email", "internet", "schermo", "streaming", "wifi"],
    zones: [
      { id: 'sofa', name: 'The Sofa', nameNative: "Il Divano", description: 'Relaxation and free time', icon: '🛋️', x: 40, y: 60, width: 25, height: 20, interiorVocab: [{ wordId: 'aula', x: 12, y: 12 }, { wordId: 'canzone', x: 37, y: 12 }, { wordId: 'casa', x: 62, y: 12 }, { wordId: 'cellulare', x: 87, y: 12 }, { wordId: 'compito', x: 12, y: 37 }, { wordId: 'divano', x: 37, y: 37 }, { wordId: 'edificio', x: 62, y: 37 }, { wordId: 'farmaco', x: 87, y: 37 }, { wordId: 'film', x: 12, y: 62 }, { wordId: 'finestra', x: 37, y: 62 }] },
      { id: 'tv', name: 'The TV', nameNative: "La TV", description: 'Entertainment and media', icon: '📺', x: 70, y: 45, width: 15, height: 15, interiorVocab: [{ wordId: 'gioco', x: 12, y: 12 }, { wordId: 'lampada', x: 37, y: 12 }, { wordId: 'libreria', x: 62, y: 12 }, { wordId: 'libro', x: 87, y: 12 }, { wordId: 'muro', x: 12, y: 37 }, { wordId: 'musica', x: 37, y: 37 }, { wordId: 'orario', x: 62, y: 37 }, { wordId: 'palazzi', x: 87, y: 37 }, { wordId: 'palazzo', x: 12, y: 62 }, { wordId: 'partita', x: 37, y: 62 }] },
      { id: 'furniture', name: 'Furniture', nameNative: "I Mobili", description: 'Home items', icon: '🏠', x: 20, y: 45, width: 15, height: 20, interiorVocab: [{ wordId: 'passaporto', x: 12, y: 12 }, { wordId: 'porta', x: 37, y: 12 }, { wordId: 'portafoglio', x: 62, y: 12 }, { wordId: 'quaderno', x: 87, y: 12 }, { wordId: 'radio', x: 12, y: 37 }, { wordId: 'sala', x: 37, y: 37 }, { wordId: 'scala', x: 62, y: 37 }, { wordId: 'soggiorno', x: 87, y: 37 }, { wordId: 'spettacolo', x: 12, y: 62 }, { wordId: 'sport', x: 37, y: 62 }] },
    ],
    grammarPoints: [
      { id: 'potere', title: 'Potere - Can/To Be Able', explanation: 'Express ability or possibility', example: 'Posso aiutarti? (Can I help you?)', color: '#3B82F6' },
      { id: 'volere', title: 'Volere - To Want', explanation: 'Express desire', example: 'Voglio un caffè (I want a coffee)', color: '#EC4899' },
      { id: 'dovere', title: 'Dovere - Must/To Have To', explanation: 'Express obligation', example: 'Devo studiare (I must study)', color: '#E7A04D' },
    ],
  },
  {
    id: 'supermarket',
    name: 'Supermarket',
    subtitle: 'Shopping & Numbers',
    nameNative: "Supermercato",
    image: '/rooms/supermarket.jpg',
    description: 'Il supermercato — learn to shop, count, and pay.',
    grammarFocus: 'numbers, prices & shopping expressions',
    vocabularyIds: ["cassa", "cliente", "commessa", "commesso", "contanti", "destino", "euro", "informatica", "mensa", "negoziante", "negozio", "saldi", "scontato", "sconto", "scontrino", "vulcano", "mercato", "offerta", "supermercato", "comprare", "pagare"],
    zones: [
      { id: 'produce', name: 'Fresh Produce', nameNative: "Frutta e Verdura", description: 'Fruits and vegetables', icon: '🍎', x: 20, y: 50, width: 25, height: 30, interiorVocab: [{ wordId: 'cassa', x: 12, y: 12 }, { wordId: 'cliente', x: 37, y: 12 }, { wordId: 'commessa', x: 62, y: 12 }, { wordId: 'commesso', x: 87, y: 12 }, { wordId: 'contanti', x: 12, y: 37 }, { wordId: 'destino', x: 37, y: 37 }, { wordId: 'euro', x: 62, y: 37 }, { wordId: 'informatica', x: 87, y: 37 }, { wordId: 'mensa', x: 12, y: 62 }, { wordId: 'negoziante', x: 37, y: 62 }] },
      { id: 'dairy', name: 'Dairy Section', nameNative: "Latticini", description: 'Milk and cheese', icon: '🧀', x: 50, y: 45, width: 20, height: 25 },
      { id: 'checkout', name: 'Checkout', nameNative: "La Cassa", description: 'Paying and prices', icon: '💰', x: 80, y: 55, width: 18, height: 20, interiorVocab: [{ wordId: 'pagare', x: 12, y: 12 }] },
    ],
    grammarPoints: [
      { id: 'numbers', title: 'Numbers 1-100', explanation: 'Essential for shopping and prices', example: 'Quanto costa? (How much does it cost?)', color: '#10B981' },
      { id: 'quantities', title: 'Quantities', explanation: 'un chilo di, un litro di, un po\' di', example: 'Un chilo di mele (A kilo of apples)', color: '#8B5CF6' },
    ],
  },
  {
    id: 'cafe',
    name: 'Café',
    subtitle: 'Ordering & Social',
    nameNative: "Caffè",
    image: '/rooms/cafe.jpg',
    description: 'Il caffè — master ordering, social interaction, and café culture.',
    grammarFocus: 'vorrei, posso, conditional politeness',
    vocabularyIds: ["cameriera", "cameriere", "imbarazzato", "pausa", "ristorante", "mancia", "rompere", "ordinare"],
    zones: [
      { id: 'counter', name: 'The Counter', nameNative: "Il Bancone", description: 'Ordering coffee', icon: '☕', x: 35, y: 40, width: 30, height: 20, interiorVocab: [{ wordId: 'cameriera', x: 12, y: 12 }, { wordId: 'cameriere', x: 37, y: 12 }, { wordId: 'imbarazzato', x: 62, y: 12 }, { wordId: 'pausa', x: 87, y: 12 }, { wordId: 'ristorante', x: 12, y: 37 }, { wordId: 'mancia', x: 37, y: 37 }, { wordId: 'rompere', x: 62, y: 37 }, { wordId: 'ordinare', x: 87, y: 37 }] },
      { id: 'table-cafe', name: 'Table', nameNative: "Il Tavolo", description: 'Sitting and socializing', icon: '🪑', x: 70, y: 60, width: 25, height: 20, interiorVocab: [] },
    ],
    grammarPoints: [
      { id: 'vorrei', title: 'Vorrei - I would like', explanation: 'Polite way to order', example: 'Vorrei un caffè, per favore', color: '#E7A04D' },
      { id: 'politeness', title: 'Polite Requests', explanation: 'Using conditional for politeness', example: 'Potrebbe portarmi...? (Could you bring me...?)', color: '#3B82F6' },
    ],
  },
  {
    id: 'gallery',
    name: 'Gallery',
    subtitle: 'Passato Prossimo',
    nameNative: "Galleria",
    image: '/rooms/gallery.jpg',
    description: 'Learn the passato prossimo to talk about completed actions.',
    grammarFocus: 'passato prossimo: avere/essere + participio passato',
    vocabularyIds: ["bella", "bello", "bianco", "brutto", "camera", "cartella", "cinema", "giallo", "luce", "museo", "nero", "nuova", "nuovo", "ombra", "ombre", "operaio", "oro", "oscuro", "piccola", "piccolo", "rosso", "vecchio", "fulmine", "scultura", "area", "capolavoro", "immagine", "livello", "nera", "punto", "storie", "zona", "tenere", "grandi", "verde", "leggero"],
    zones: [
      { id: 'paintings', name: 'The Paintings', nameNative: "I Quadri", description: 'Emotions and feelings', icon: '🎨', x: 40, y: 35, width: 25, height: 20, interiorVocab: [{ wordId: 'bella', x: 12, y: 12 }, { wordId: 'bello', x: 37, y: 12 }, { wordId: 'bianco', x: 62, y: 12 }, { wordId: 'brutto', x: 87, y: 12 }, { wordId: 'camera', x: 12, y: 37 }, { wordId: 'cartella', x: 37, y: 37 }, { wordId: 'cinema', x: 62, y: 37 }, { wordId: 'giallo', x: 87, y: 37 }, { wordId: 'luce', x: 12, y: 62 }, { wordId: 'museo', x: 37, y: 62 }] },
      { id: 'pharmacy', name: 'Medicine Cabinet', nameNative: "Armadietto Medicinale", description: 'Health and body', icon: '💊', x: 75, y: 50, width: 15, height: 20, interiorVocab: [{ wordId: 'nero', x: 12, y: 12 }, { wordId: 'nuova', x: 37, y: 12 }, { wordId: 'nuovo', x: 62, y: 12 }, { wordId: 'ombra', x: 87, y: 12 }, { wordId: 'ombre', x: 12, y: 37 }, { wordId: 'operaio', x: 37, y: 37 }, { wordId: 'oro', x: 62, y: 37 }, { wordId: 'oscuro', x: 87, y: 37 }, { wordId: 'piccola', x: 12, y: 62 }, { wordId: 'piccolo', x: 37, y: 62 }] },
      { id: 'shopping', name: 'Gift Shop', nameNative: "Il Negozio", description: 'Shopping and commerce', icon: '🛍️', x: 20, y: 60, width: 15, height: 15, interiorVocab: [{ wordId: 'rosso', x: 12, y: 12 }, { wordId: 'vecchio', x: 37, y: 12 }, { wordId: 'fulmine', x: 62, y: 12 }, { wordId: 'scultura', x: 87, y: 12 }, { wordId: 'area', x: 12, y: 37 }, { wordId: 'capolavoro', x: 37, y: 37 }, { wordId: 'immagine', x: 62, y: 37 }, { wordId: 'livello', x: 87, y: 37 }, { wordId: 'nera', x: 12, y: 62 }, { wordId: 'punto', x: 37, y: 62 }] },
    ],
    grammarPoints: [
      { id: 'passato-prossimo', title: 'Passato Prossimo', explanation: 'Past tense with avere/essere + past participle', example: 'Ho mangiato (I ate), Sono andato (I went)', color: '#E7A04D' },
      { id: 'auxiliary', title: 'Avere vs Essere', explanation: 'Most verbs use avere; movement/change uses essere', example: 'Ho parlato vs Sono arrivato', color: '#EC4899' },
    ],
  },
  {
    id: 'animals',
    name: 'Animal Sanctuary',
    subtitle: 'Creatures & Nature',
    nameNative: "Santuario Animali",
    image: '/rooms/animals.jpg',
    description: 'Discover creatures from around the world.',
    grammarFocus: 'animal names, habitats, and descriptive adjectives',
    vocabularyIds: ["applicazione", "cane", "gatto", "lontani", "lupo", "uccello", "volare", "volere"],
    zones: [
      { id: 'reptiles', name: 'Reptile House', nameNative: "Rettili", description: 'Snakes, lizards, iguanas', icon: '🦎', x: 25, y: 40, width: 20, height: 25 },
      { id: 'mammals', name: 'Mammal Zone', nameNative: "Mammiferi", description: 'Wolves, bears, and more', icon: '🐿️', x: 55, y: 35, width: 25, height: 30, interiorVocab: [] },
    ],
    grammarPoints: [
      { id: 'animal-descriptions', title: 'Describing Animals', explanation: 'Using adjectives with animals', example: 'Un grande orso (A big bear)', color: '#10B981' },
    ],
  },
  {
    id: 'weather',
    name: 'Weather Station',
    subtitle: 'Sky & Natural Phenomena',
    nameNative: "Meteo",
    image: '/rooms/weather.jpg',
    description: 'Thunder, hail, fog, lightning, drizzle and all weather vocabulary.',
    grammarFocus: 'weather expressions with fare (fa caldo/freddo) & c\'è',
    vocabularyIds: ["clima", "grado", "nebbia", "temporale", "tuono", "aria", "cenere", "energia", "inquinamento", "onda", "sbagliare"],
    zones: [
      { id: 'storms', name: 'Storm Center', nameNative: "Temporali", description: 'Thunder, lightning, hail', icon: '⛈️', x: 25, y: 35, width: 25, height: 25, interiorVocab: [{ wordId: 'clima', x: 12, y: 12 }, { wordId: 'grado', x: 37, y: 12 }, { wordId: 'nebbia', x: 62, y: 12 }, { wordId: 'temporale', x: 87, y: 12 }, { wordId: 'tuono', x: 12, y: 37 }, { wordId: 'aria', x: 37, y: 37 }, { wordId: 'cenere', x: 62, y: 37 }, { wordId: 'energia', x: 87, y: 37 }, { wordId: 'inquinamento', x: 12, y: 62 }, { wordId: 'onda', x: 37, y: 62 }] },
      { id: 'sky-weather', name: 'Sky View', nameNative: "Il Cielo", description: 'Clouds, sun, fog', icon: '🌤️', x: 55, y: 30, width: 30, height: 20, interiorVocab: [{ wordId: 'sbagliare', x: 12, y: 12 }] },
    ],
    grammarPoints: [
      { id: 'weather-expressions', title: 'Weather Expressions', explanation: 'Using fare for weather', example: 'Fa caldo (It\'s hot), Fa freddo (It\'s cold)', color: '#3B82F6' },
    ],
  },
  {
    id: 'tools',
    name: 'Workshop',
    subtitle: 'Tools & Objects',
    nameNative: "Officina",
    image: '/rooms/tools.jpg',
    description: 'Hammer, saw, funnel, screwdriver and workshop vocabulary.',
    grammarFocus: 'tool names & verb-noun collocations',
    vocabularyIds: ["batteria", "felicita", "lavagna", "cavo", "forbici", "colla", "mattone", "mattoni", "costruire"],
    zones: [
      { id: 'hand-tools', name: 'Hand Tools', nameNative: "Attrezzi Manuali", description: 'Hammer, saw, screwdriver', icon: '🔨', x: 25, y: 40, width: 25, height: 25, interiorVocab: [{ wordId: 'batteria', x: 12, y: 12 }, { wordId: 'felicita', x: 37, y: 12 }, { wordId: 'lavagna', x: 62, y: 12 }, { wordId: 'cavo', x: 87, y: 12 }, { wordId: 'forbici', x: 12, y: 37 }, { wordId: 'colla', x: 37, y: 37 }, { wordId: 'mattone', x: 62, y: 37 }, { wordId: 'mattoni', x: 87, y: 37 }, { wordId: 'costruire', x: 12, y: 62 }] },
      { id: 'workbench', name: 'Workbench', nameNative: "Banco da Lavoro", description: 'File, drill, sharpen', icon: '🛠️', x: 55, y: 35, width: 25, height: 30, interiorVocab: [] },
    ],
    grammarPoints: [
      { id: 'tool-verbs', title: 'Tool Verbs', explanation: 'Using tools as verbs', example: 'Martellare (to hammer), Segare (to saw)', color: '#E7A04D' },
    ],
  },
  {
    id: 'actions',
    name: 'Action Arena',
    subtitle: 'Verbs & Movement',
    nameNative: "Arena Azione",
    image: '/rooms/actions.jpg',
    description: 'Kick, choke, float, surrender, wrap, wake up. Verbs need scenes, not just objects.',
    grammarFocus: 'imperative mood & verb conjugations',
    vocabularyIds: ["bravo", "bugia", "bugie", "buono", "centro", "gomma", "lavoro", "libertà", "opera", "rete", "sito", "sorpresa", "spalla", "vivo", "altoparlante", "sollievo", "movimento", "andare", "ascoltare", "aspettare", "attraversare", "avere", "cadere", "cantare", "capire", "chiamare", "chiudere", "cominciare", "credere", "dare", "dire", "diventare", "entrare", "essere", "fare", "finire", "giocare", "governare", "lavorare", "leggere", "mettere", "morire", "nascere", "parlare", "passare", "pensare", "perdere", "potere", "prendere", "provare", "raccontare", "restare", "ricordare", "saltare", "scoprire", "scrivere", "trovare", "uscire", "vedere", "vendere", "venire", "vincere", "vivere", "nuotare", "sembrare", "preferire", "chiedere", "svegliarsi", "alzarsi", "cambiare", "nascondere", "ridere", "bene", "cominciato", "insieme", "intelligente", "prima", "prego", "dovere"],
    zones: [
      { id: 'movement', name: 'Movement Zone', nameNative: "Movimento", description: 'Kick, jump, climb, dance', icon: '🏃', x: 25, y: 35, width: 25, height: 25, interiorVocab: [{ wordId: 'bravo', x: 12, y: 12 }, { wordId: 'bugia', x: 37, y: 12 }, { wordId: 'bugie', x: 62, y: 12 }, { wordId: 'buono', x: 87, y: 12 }, { wordId: 'centro', x: 12, y: 37 }, { wordId: 'gomma', x: 37, y: 37 }, { wordId: 'lavoro', x: 62, y: 37 }, { wordId: 'libertà', x: 87, y: 37 }, { wordId: 'opera', x: 12, y: 62 }, { wordId: 'rete', x: 37, y: 62 }] },
      { id: 'daily-actions', name: 'Daily Actions', nameNative: "Azioni Quotidiane", description: 'Wake up, shave, comb', icon: '🌅', x: 55, y: 30, width: 25, height: 25, interiorVocab: [{ wordId: 'sito', x: 12, y: 12 }, { wordId: 'sorpresa', x: 37, y: 12 }, { wordId: 'spalla', x: 62, y: 12 }, { wordId: 'vivo', x: 87, y: 12 }, { wordId: 'altoparlante', x: 12, y: 37 }, { wordId: 'sollievo', x: 37, y: 37 }, { wordId: 'movimento', x: 62, y: 37 }, { wordId: 'andare', x: 87, y: 37 }, { wordId: 'ascoltare', x: 12, y: 62 }, { wordId: 'aspettare', x: 37, y: 62 }] },
    ],
    grammarPoints: [
      { id: 'imperative', title: 'Imperative Mood', explanation: 'Giving commands and instructions', example: 'Vieni qui! (Come here!), Aspetta! (Wait!)', color: '#EC4899' },
    ],
  },
  {
    id: 'emotions',
    name: 'Emotion Chamber',
    subtitle: 'Feelings & Abstract Concepts',
    nameNative: "Camera Emozioni",
    image: '/rooms/emotions.jpg',
    description: 'Angry, ashamed, betray, fear, happiness, and the abstract vocabulary.',
    grammarFocus: 'verbs of emotion & subjunctive mood',
    vocabularyIds: ["amore", "arrabbiato", "contento", "deluso", "eccitato", "gelosia", "geloso", "gioia", "innamorato", "nervoso", "noia", "orgoglioso", "signora", "software", "solitario", "speranza", "tranquillo", "tristezza", "ansia", "nostalgia", "preoccupato", "rabbia", "realtà", "segreto", "verità", "vita", "felice", "solo", "triste", "duro", "morbido"],
    zones: [
      { id: 'feelings', name: 'Feelings', nameNative: "Sentimenti", description: 'Happy, sad, angry, afraid', icon: '😊', x: 30, y: 35, width: 25, height: 25, interiorVocab: [{ wordId: 'amore', x: 12, y: 12 }, { wordId: 'arrabbiato', x: 37, y: 12 }, { wordId: 'contento', x: 62, y: 12 }, { wordId: 'deluso', x: 87, y: 12 }, { wordId: 'eccitato', x: 12, y: 37 }, { wordId: 'gelosia', x: 37, y: 37 }, { wordId: 'geloso', x: 62, y: 37 }, { wordId: 'gioia', x: 87, y: 37 }, { wordId: 'innamorato', x: 12, y: 62 }, { wordId: 'nervoso', x: 37, y: 62 }] },
      { id: 'states', name: 'Mental States', nameNative: "Stati Mentali", description: 'Confused, nervous, anxious', icon: '🧠', x: 60, y: 30, width: 25, height: 25, interiorVocab: [{ wordId: 'noia', x: 12, y: 12 }, { wordId: 'orgoglioso', x: 37, y: 12 }, { wordId: 'signora', x: 62, y: 12 }, { wordId: 'software', x: 87, y: 12 }, { wordId: 'solitario', x: 12, y: 37 }, { wordId: 'speranza', x: 37, y: 37 }, { wordId: 'tranquillo', x: 62, y: 37 }, { wordId: 'tristezza', x: 87, y: 37 }, { wordId: 'ansia', x: 12, y: 62 }, { wordId: 'nostalgia', x: 37, y: 62 }] },
    ],
    grammarPoints: [
      { id: 'emotion-verbs', title: 'Verbs of Emotion', explanation: 'Expressing feelings with essere', example: 'Sono felice (I\'m happy), Sono triste (I\'m sad)', color: '#8B5CF6' },
    ],
  },
  {
    id: 'farm',
    name: 'Farm & Agriculture',
    subtitle: 'Food & Farming',
    nameNative: "Fattoria",
    image: '/rooms/farm.jpg',
    description: 'Pumpkin, avocado, barley, rice, wheat and agricultural vocabulary.',
    grammarFocus: 'agricultural terms & food preparation verbs',
    vocabularyIds: ["animale", "campo", "cavallo", "temperatura", "lattuga", "cetriolo", "paglia"],
    zones: [
      { id: 'vegetables', name: 'Vegetable Garden', nameNative: "Orto", description: 'Asparagus, broccoli, eggplant', icon: '🥬', x: 25, y: 40, width: 25, height: 25 },
      { id: 'fruits', name: 'Fruit Orchard', nameNative: "Frutteto", description: 'Avocado, cherries, figs', icon: '🍎', x: 55, y: 35, width: 25, height: 30, interiorVocab: [] },
    ],
    grammarPoints: [
      { id: 'farm-verbs', title: 'Farming Verbs', explanation: 'Agricultural activities', example: 'Arare (to plow), Raccogliere (to harvest)', color: '#10B981' },
    ],
  },
  {
    id: 'fantasy',
    name: 'Fantasy Realm',
    subtitle: 'Myth & Imagination',
    nameNative: "Regno Fantasy",
    image: '/rooms/fantasy.jpg',
    description: 'Dragon, elf, demon, shaman, ghost and mythological vocabulary.',
    grammarFocus: 'narrative past & descriptive language',
    vocabularyIds: ["fata", "guerra", "principe", "re", "regina", "stella", "stelle", "verso", "luna", "caverna", "chiesa", "deserto", "grotta", "isola"],
    zones: [
      { id: 'creatures', name: 'Mythical Creatures', nameNative: "Creature Mitiche", description: 'Dragon, unicorn, fairy', icon: '🐉', x: 30, y: 35, width: 25, height: 25, interiorVocab: [{ wordId: 'fata', x: 12, y: 12 }, { wordId: 'guerra', x: 37, y: 12 }, { wordId: 'principe', x: 62, y: 12 }, { wordId: 're', x: 87, y: 12 }, { wordId: 'regina', x: 12, y: 37 }, { wordId: 'stella', x: 37, y: 37 }, { wordId: 'stelle', x: 62, y: 37 }, { wordId: 'verso', x: 87, y: 37 }, { wordId: 'luna', x: 12, y: 62 }, { wordId: 'caverna', x: 37, y: 62 }] },
      { id: 'supernatural', name: 'Supernatural', nameNative: "Soprannaturale", description: 'Ghost, spirit, soul', icon: '👻', x: 60, y: 30, width: 25, height: 25, interiorVocab: [{ wordId: 'chiesa', x: 12, y: 12 }, { wordId: 'deserto', x: 37, y: 12 }, { wordId: 'grotta', x: 62, y: 12 }, { wordId: 'isola', x: 87, y: 12 }] },
    ],
    grammarPoints: [
      { id: 'storytelling', title: 'Storytelling Language', explanation: 'Narrative techniques', example: 'C\'era una volta... (Once upon a time...)', color: '#8B5CF6' },
    ],
  },
];

export const getRoomById = (id: string): Room | undefined => {
  return rooms.find((room) => room.id === id);
};

export const getAllRooms = (): Room[] => rooms;

export const getAdjacentRooms = (id: string): Room[] => {
  const adjacencyMap: Record<string, string[]> = {
    'entrance-hall': ['kitchen', 'library', 'living-room'],
    'kitchen': ['entrance-hall', 'garden', 'cafe', 'farm'],
    'library': ['entrance-hall', 'bedroom'],
    'bedroom': ['library', 'living-room', 'bathroom'],
    'bathroom': ['bedroom'],
    'garden': ['kitchen', 'gallery', 'supermarket', 'weather', 'animals'],
    'transport': ['supermarket', 'cafe'],
    'supermarket': ['garden', 'cafe', 'transport'],
    'cafe': ['kitchen', 'supermarket', 'transport'],
    'living-room': ['entrance-hall', 'bedroom', 'gallery'],
    'gallery': ['living-room', 'garden', 'fantasy'],
    'animals': ['garden', 'weather', 'farm'],
    'weather': ['garden', 'animals', 'farm'],
    'tools': ['kitchen', 'farm', 'actions'],
    'actions': ['tools', 'emotions'],
    'emotions': ['actions', 'fantasy', 'gallery'],
    'farm': ['kitchen', 'animals', 'weather', 'tools'],
    'fantasy': ['gallery', 'emotions'],
  };
  const adjacentIds = adjacencyMap[id] || [];
  return adjacentIds
    .map((adjId) => getRoomById(adjId))
    .filter((r): r is Room => r !== undefined);
};
