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
    vocabularyIds: ["madre", "padre", "fratello", "sorella", "nonno", "nonna", "zio", "zia", "figlio", "figlia", "cugino", "cappotto", "giacca", "impermeabile", "sciarpa", "cappello", "guanto", "cravatta", "cintura", "borsa", "maglione", "bello", "brutto", "giovane", "vecchio", "alto", "basso", "magro", "grasso", "forte", "debole", "secondo", "minuto", "ora", "giorno", "notte", "mattina", "sera", "mezzogiorno", "mezzanotte", "tempo", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "dieci", "undici", "dodici", "ciao", "buongiorno", "buonasera", "buonanotte", "grazie", "prego", "scusa", "arrivederci", "permesso", "forse"],
    zones: [
      { id: 'family-portrait', name: 'Family Portrait', nameNative: "Ritratto di Famiglia", description: 'Family members on the wall', icon: '👨‍👩‍👧‍👦', x: 30, y: 40, width: 20, height: 25, interiorImage: '/rooms/entrance-portrait.jpg', interiorVocab: [{ wordId: 'madre', x: 13, y: 17 }, { wordId: 'padre', x: 38, y: 17 }, { wordId: 'fratello', x: 63, y: 17 }, { wordId: 'sorella', x: 88, y: 17 }, { wordId: 'nonno', x: 13, y: 50 }, { wordId: 'nonna', x: 38, y: 50 }, { wordId: 'zio', x: 63, y: 50 }, { wordId: 'zia', x: 88, y: 50 }, { wordId: 'figlio', x: 13, y: 83 }, { wordId: 'figlia', x: 38, y: 83 }, { wordId: 'cugino', x: 63, y: 83 }] },
      { id: 'coat-rack', name: 'Coat Rack', nameNative: "Appendiabiti", description: 'Clothes and accessories', icon: '🧥', x: 75, y: 45, width: 15, height: 30, interiorImage: '/rooms/entrance-coat.jpg', interiorVocab: [{ wordId: 'cappotto', x: 13, y: 17 }, { wordId: 'giacca', x: 38, y: 17 }, { wordId: 'impermeabile', x: 63, y: 17 }, { wordId: 'sciarpa', x: 88, y: 17 }, { wordId: 'cappello', x: 13, y: 50 }, { wordId: 'guanto', x: 38, y: 50 }, { wordId: 'cravatta', x: 63, y: 50 }, { wordId: 'cintura', x: 88, y: 50 }, { wordId: 'borsa', x: 13, y: 83 }, { wordId: 'maglione', x: 38, y: 83 }] },
      { id: 'mirror', name: 'The Mirror', nameNative: "Lo Specchio", description: 'Body parts and descriptions', icon: '🪞', x: 50, y: 35, width: 15, height: 20, interiorImage: '/rooms/entrance-mirror.jpg', interiorVocab: [{ wordId: 'bello', x: 13, y: 17 }, { wordId: 'brutto', x: 38, y: 17 }, { wordId: 'giovane', x: 63, y: 17 }, { wordId: 'vecchio', x: 88, y: 17 }, { wordId: 'alto', x: 13, y: 50 }, { wordId: 'basso', x: 38, y: 50 }, { wordId: 'magro', x: 63, y: 50 }, { wordId: 'grasso', x: 88, y: 50 }, { wordId: 'forte', x: 13, y: 83 }, { wordId: 'debole', x: 38, y: 83 }] },
      { id: 'clock', name: 'The Clock', nameNative: "L'Orologio", description: 'Days, months, and time', icon: '🕰️', x: 15, y: 25, width: 12, height: 12, interiorImage: '/rooms/entrance-clock.jpg', interiorVocab: [{ wordId: 'secondo', x: 13, y: 17 }, { wordId: 'minuto', x: 38, y: 17 }, { wordId: 'ora', x: 63, y: 17 }, { wordId: 'giorno', x: 88, y: 17 }, { wordId: 'notte', x: 13, y: 50 }, { wordId: 'mattina', x: 38, y: 50 }, { wordId: 'sera', x: 63, y: 50 }, { wordId: 'mezzogiorno', x: 88, y: 50 }, { wordId: 'mezzanotte', x: 13, y: 83 }, { wordId: 'tempo', x: 38, y: 83 }] },
      { id: 'number-plate', name: 'House Number', nameNative: "Il Numero Civico", description: 'Numbers and quantities', icon: '🔢', x: 85, y: 25, width: 10, height: 10, interiorImage: '/rooms/entrance-number.jpg', interiorVocab: [{ wordId: 'uno', x: 13, y: 17 }, { wordId: 'due', x: 38, y: 17 }, { wordId: 'tre', x: 63, y: 17 }, { wordId: 'quattro', x: 88, y: 17 }, { wordId: 'cinque', x: 13, y: 50 }, { wordId: 'sei', x: 38, y: 50 }, { wordId: 'sette', x: 63, y: 50 }, { wordId: 'otto', x: 88, y: 50 }, { wordId: 'nove', x: 13, y: 83 }, { wordId: 'dieci', x: 38, y: 83 }, { wordId: 'undici', x: 63, y: 83 }, { wordId: 'dodici', x: 88, y: 83 }] },
      { id: 'welcome-mat', name: 'Welcome Mat', nameNative: "Zerbino", description: 'Common words and questions', icon: '🚪', x: 45, y: 80, width: 25, height: 12, interiorImage: '/rooms/entrance-welcome.jpg', interiorVocab: [{ wordId: 'ciao', x: 13, y: 17 }, { wordId: 'buongiorno', x: 38, y: 17 }, { wordId: 'buonasera', x: 63, y: 17 }, { wordId: 'buonanotte', x: 88, y: 17 }, { wordId: 'grazie', x: 13, y: 50 }, { wordId: 'prego', x: 38, y: 50 }, { wordId: 'scusa', x: 63, y: 50 }, { wordId: 'arrivederci', x: 88, y: 50 }, { wordId: 'permesso', x: 13, y: 83 }, { wordId: 'forse', x: 38, y: 83 }] },
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
    vocabularyIds: ["acqua", "latte", "uova", "burro", "formaggio", "carne", "pesce", "pollo", "yogurt", "panna", "marmellata", "pasta", "riso", "pane", "farina", "zucchero", "caffe", "olio", "sale", "pepe", "coltello", "forchetta", "cucchiaio", "mestolo", "spatola", "grattugia", "padella", "pentola", "tagliere", "forno", "fornello", "colino", "bollitore", "piatto", "bicchiere", "tazza", "tovagliolo", "vino", "birra", "succo", "torta", "gelato", "cornetto", "cioccolata", "miele", "biscotto"],
    zones: [
      // FRIDGE - Cold items (water, milk, eggs, cheese, meat, fish, chicken, vegetables, fruits)
      { id: 'fridge', name: 'The Fridge', nameNative: "Il Frigorifero", description: 'Cold food and drinks - dairy, meat, vegetables, fruits', icon: '❄️', x: 75, y: 45, width: 15, height: 25, interiorImage: '/rooms/kitchen-fridge.jpg', interiorVocab: [{ wordId: 'acqua', x: 13, y: 17 }, { wordId: 'latte', x: 38, y: 17 }, { wordId: 'uova', x: 63, y: 17 }, { wordId: 'burro', x: 88, y: 17 }, { wordId: 'formaggio', x: 13, y: 50 }, { wordId: 'carne', x: 38, y: 50 }, { wordId: 'pesce', x: 63, y: 50 }, { wordId: 'pollo', x: 88, y: 50 }, { wordId: 'yogurt', x: 13, y: 83 }, { wordId: 'panna', x: 38, y: 83 }, { wordId: 'marmellata', x: 63, y: 83 }] },
      // PANTRY - Dry goods (pasta, rice, bread, flour, sugar, coffee, oil, preserves)
      { id: 'pantry', name: 'The Pantry', nameNative: "La Dispensa", description: 'Dry goods and staples - pasta, rice, canned goods', icon: '🥫', x: 88, y: 40, width: 10, height: 30, interiorImage: '/rooms/kitchen-pantry.jpg', interiorVocab: [{ wordId: 'pasta', x: 17, y: 17 }, { wordId: 'riso', x: 50, y: 17 }, { wordId: 'pane', x: 83, y: 17 }, { wordId: 'farina', x: 17, y: 50 }, { wordId: 'zucchero', x: 50, y: 50 }, { wordId: 'caffe', x: 83, y: 50 }, { wordId: 'olio', x: 17, y: 83 }, { wordId: 'sale', x: 50, y: 83 }, { wordId: 'pepe', x: 83, y: 83 }] },
      // UTENSIL DRAWER - Kitchen tools (knives, forks, spoons, grater, scissors)
      { id: 'utensil-drawer', name: 'Utensil Drawer', nameNative: "Il Cassetto delle Posate", description: 'Knives, forks, spoons and kitchen tools', icon: '🍴', x: 50, y: 70, width: 15, height: 12, interiorImage: '/rooms/kitchen-drawer.jpg', interiorVocab: [{ wordId: 'coltello', x: 17, y: 25 }, { wordId: 'forchetta', x: 50, y: 25 }, { wordId: 'cucchiaio', x: 83, y: 25 }, { wordId: 'mestolo', x: 17, y: 75 }, { wordId: 'spatola', x: 50, y: 75 }, { wordId: 'grattugia', x: 83, y: 75 }] },
      // STOVE - Cooking area (pan, pot, cutting board, oven, stove)
      { id: 'stove', name: 'The Stove', nameNative: "I Fornelli", description: 'Cooking and preparation - pots, pans, oven', icon: '🔥', x: 60, y: 55, width: 15, height: 15, interiorImage: '/rooms/kitchen-stove.jpg', interiorVocab: [{ wordId: 'padella', x: 17, y: 25 }, { wordId: 'pentola', x: 50, y: 25 }, { wordId: 'tagliere', x: 83, y: 25 }, { wordId: 'forno', x: 17, y: 75 }, { wordId: 'fornello', x: 50, y: 75 }, { wordId: 'colino', x: 83, y: 75 }, { wordId: 'bollitore', x: 17, y: 90 }] },
      // TABLE - Dining (plates, glasses, cups, napkins, wine, beer, juice)
      { id: 'table', name: 'The Table', nameNative: "Il Tavolo", description: 'Dining and eating - plates, glasses, meals', icon: '🍽️', x: 25, y: 65, width: 20, height: 15, interiorImage: '/rooms/kitchen-table.jpg', interiorVocab: [{ wordId: 'piatto', x: 17, y: 17 }, { wordId: 'bicchiere', x: 50, y: 17 }, { wordId: 'tazza', x: 83, y: 17 }, { wordId: 'tovagliolo', x: 17, y: 50 }, { wordId: 'vino', x: 50, y: 50 }, { wordId: 'birra', x: 83, y: 50 }, { wordId: 'succo', x: 17, y: 83 }] },
      // DESSERT - Sweets (cake, gelato, croissant, chocolate, honey, cookies)
      { id: 'dessert', name: 'Dessert Station', nameNative: "I Dolci", description: 'Cakes, gelato, and sweet treats', icon: '🍰', x: 15, y: 50, width: 12, height: 15, interiorImage: '/rooms/kitchen-dessert.jpg', interiorVocab: [{ wordId: 'torta', x: 17, y: 25 }, { wordId: 'gelato', x: 50, y: 25 }, { wordId: 'cornetto', x: 83, y: 25 }, { wordId: 'cioccolata', x: 17, y: 75 }, { wordId: 'miele', x: 50, y: 75 }, { wordId: 'biscotto', x: 83, y: 75 }] },
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
    vocabularyIds: ["libro", "romanzo", "poesia", "dizionario", "rivista", "giornale", "manuale", "racconto", "biografia", "biblioteca", "quaderno", "penna", "matita", "gomma", "righello", "calendario", "carta", "scrivania", "lezione", "pagina", "colla", "schermo", "tastiera", "mouse", "stampante", "password", "file", "computer", "studente", "studentessa", "scienza", "cuffie", "caricabatterie"],
    zones: [
      { id: 'bookshelf', name: 'The Bookshelf', nameNative: "Lo Scaffale", description: 'School and books', icon: '📚', x: 30, y: 35, width: 25, height: 30, interiorImage: '/rooms/library-bookshelf.jpg', interiorVocab: [{ wordId: 'libro', x: 13, y: 17 }, { wordId: 'romanzo', x: 38, y: 17 }, { wordId: 'poesia', x: 63, y: 17 }, { wordId: 'dizionario', x: 88, y: 17 }, { wordId: 'rivista', x: 13, y: 50 }, { wordId: 'giornale', x: 38, y: 50 }, { wordId: 'manuale', x: 63, y: 50 }, { wordId: 'racconto', x: 88, y: 50 }, { wordId: 'biografia', x: 13, y: 83 }, { wordId: 'biblioteca', x: 38, y: 83 }] },
      { id: 'desk', name: 'Study Desk', nameNative: "La Scrivania", description: 'Study and work', icon: '📝', x: 60, y: 60, width: 20, height: 20, interiorImage: '/rooms/library-desk.jpg', interiorVocab: [{ wordId: 'quaderno', x: 13, y: 17 }, { wordId: 'penna', x: 38, y: 17 }, { wordId: 'matita', x: 63, y: 17 }, { wordId: 'gomma', x: 88, y: 17 }, { wordId: 'righello', x: 13, y: 50 }, { wordId: 'calendario', x: 38, y: 50 }, { wordId: 'carta', x: 63, y: 50 }, { wordId: 'scrivania', x: 88, y: 50 }, { wordId: 'lezione', x: 13, y: 83 }, { wordId: 'pagina', x: 38, y: 83 }, { wordId: 'colla', x: 63, y: 83 }] },
      { id: 'computer', name: 'Computer Station', nameNative: "Il Computer", description: 'Technology and time', icon: '💻', x: 85, y: 45, width: 12, height: 15, interiorImage: '/rooms/library-computer.jpg', interiorVocab: [{ wordId: 'schermo', x: 13, y: 17 }, { wordId: 'tastiera', x: 38, y: 17 }, { wordId: 'mouse', x: 63, y: 17 }, { wordId: 'stampante', x: 88, y: 17 }, { wordId: 'password', x: 13, y: 50 }, { wordId: 'file', x: 38, y: 50 }, { wordId: 'computer', x: 63, y: 50 }, { wordId: 'studente', x: 88, y: 50 }, { wordId: 'studentessa', x: 13, y: 83 }, { wordId: 'scienza', x: 38, y: 83 }, { wordId: 'cuffie', x: 63, y: 83 }, { wordId: 'caricabatterie', x: 88, y: 83 }] },
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
    vocabularyIds: ["camicia", "maglietta", "giacca", "vestito", "gonna", "pantaloni", "jeans", "pigiama", "maglione", "cappotto", "calze", "orologio", "occhiali", "cintura", "cravatta", "sciarpa", "guanto", "borsa", "portafoglio", "collana", "anello", "bracciale", "orecchini", "scarpa", "stivale", "sandali", "pantofole", "scarpette", "letto", "cuscino", "coperta", "lenzuolo", "materasso", "sveglia", "lampada", "libro"],
    zones: [
      // WARDROBE - Hanging clothes (shirts, blouses, sweaters, jackets, coats, dresses, skirts, pants, jeans, pajamas)
      { id: 'wardrobe', name: 'The Wardrobe', nameNative: "L\'Armadio", description: 'Clothes hanging - shirts, pants, dresses, coats', icon: '👔', x: 70, y: 40, width: 15, height: 30, interiorImage: '/rooms/bedroom-wardrobe.jpg', interiorVocab: [{ wordId: 'camicia', x: 13, y: 17 }, { wordId: 'maglietta', x: 38, y: 17 }, { wordId: 'giacca', x: 63, y: 17 }, { wordId: 'vestito', x: 88, y: 17 }, { wordId: 'gonna', x: 13, y: 50 }, { wordId: 'pantaloni', x: 38, y: 50 }, { wordId: 'jeans', x: 63, y: 50 }, { wordId: 'pigiama', x: 88, y: 50 }, { wordId: 'maglione', x: 13, y: 83 }, { wordId: 'cappotto', x: 38, y: 83 }] },
      // DRAWER - Accessories (socks, ties, belts, scarves, gloves, beanies)
      { id: 'drawer', name: 'Accessory Drawer', nameNative: "Il Cassetto", description: 'Socks, ties, belts, scarves, gloves', icon: '🧦', x: 85, y: 60, width: 12, height: 15, interiorImage: '/rooms/bedroom-drawer.jpg', interiorVocab: [{ wordId: 'calze', x: 17, y: 17 }, { wordId: 'orologio', x: 50, y: 17 }, { wordId: 'occhiali', x: 83, y: 17 }, { wordId: 'cintura', x: 17, y: 50 }, { wordId: 'cravatta', x: 50, y: 50 }, { wordId: 'sciarpa', x: 83, y: 50 }, { wordId: 'guanto', x: 17, y: 83 }, { wordId: 'borsa', x: 50, y: 83 }, { wordId: 'portafoglio', x: 83, y: 83 }] },
      // JEWELRY - Jewelry box (rings, necklaces, earrings, watches)
      { id: 'jewelry', name: 'Jewelry Box', nameNative: "Il Portagioie", description: 'Rings, necklaces, earrings, watches', icon: '💍', x: 20, y: 55, width: 12, height: 12, interiorImage: '/rooms/bedroom-jewelry.jpg', interiorVocab: [{ wordId: 'orologio', x: 17, y: 25 }, { wordId: 'collana', x: 50, y: 25 }, { wordId: 'anello', x: 83, y: 25 }, { wordId: 'bracciale', x: 17, y: 75 }, { wordId: 'orecchini', x: 50, y: 75 }] },
      // SHOES - Shoe rack (shoes, boots, slippers)
      { id: 'shoes', name: 'Shoe Rack', nameNative: "La Scarpiera", description: 'Shoes, boots, slippers', icon: '👟', x: 15, y: 75, width: 20, height: 12, interiorImage: '/rooms/bedroom-shoes.jpg', interiorVocab: [{ wordId: 'scarpa', x: 17, y: 25 }, { wordId: 'stivale', x: 50, y: 25 }, { wordId: 'sandali', x: 83, y: 25 }, { wordId: 'pantofole', x: 17, y: 75 }, { wordId: 'scarpette', x: 50, y: 75 }] },
      // BED - Bedding (pillows, blankets, sheets)
      { id: 'bed', name: 'The Bed', nameNative: "Il Letto", description: 'Pillows, blankets, sheets', icon: '🛏️', x: 40, y: 55, width: 25, height: 20, interiorImage: '/rooms/bedroom-bed.jpg', interiorVocab: [{ wordId: 'letto', x: 17, y: 25 }, { wordId: 'cuscino', x: 50, y: 25 }, { wordId: 'coperta', x: 83, y: 25 }, { wordId: 'lenzuolo', x: 17, y: 75 }, { wordId: 'materasso', x: 50, y: 75 }] },
      // NIGHTSTAND - Bedside items (lamp, alarm clock, book, glasses)
      { id: 'nightstand', name: 'Nightstand', nameNative: "Il Comodino", description: 'Lamp, alarm clock, book, glasses', icon: '🌙', x: 70, y: 70, width: 10, height: 12, interiorImage: '/rooms/bedroom-nightstand.jpg', interiorVocab: [{ wordId: 'sveglia', x: 17, y: 25 }, { wordId: 'lampada', x: 50, y: 25 }, { wordId: 'libro', x: 83, y: 25 }, { wordId: 'orologio', x: 17, y: 75 }, { wordId: 'occhiali', x: 50, y: 75 }] },
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
    vocabularyIds: ["sapone", "dentifricio", "spazzolino", "asciugamano", "specchio", "rubinetto", "rasoio", "doccia", "shampoo", "bagnoschiuma", "acqua", "medicina", "cerotto", "termometro", "aspirina", "pomata", "cotone"],
    zones: [
      // SINK - Face washing (face, eyes, nose, mouth, teeth, towel, soap, toothpaste)
      { id: 'sink', name: 'The Sink', nameNative: "Il Lavandino", description: 'Face, teeth, hands - washing area', icon: '🚰', x: 25, y: 45, width: 20, height: 25, interiorImage: '/rooms/bathroom-sink.jpg', interiorVocab: [{ wordId: 'sapone', x: 17, y: 25 }, { wordId: 'dentifricio', x: 50, y: 25 }, { wordId: 'spazzolino', x: 83, y: 25 }, { wordId: 'asciugamano', x: 17, y: 75 }, { wordId: 'specchio', x: 50, y: 75 }, { wordId: 'rubinetto', x: 83, y: 75 }, { wordId: 'rasoio', x: 17, y: 90 }] },
      // SHOWER - Body washing (body, head, hair, arms, hands, legs, shower, shampoo)
      { id: 'shower', name: 'The Shower', nameNative: "La Doccia", description: 'Body, hair - shower area', icon: '🚿', x: 60, y: 35, width: 25, height: 35, interiorImage: '/rooms/bathroom-shower.jpg', interiorVocab: [{ wordId: 'doccia', x: 17, y: 25 }, { wordId: 'shampoo', x: 50, y: 25 }, { wordId: 'bagnoschiuma', x: 83, y: 25 }, { wordId: 'asciugamano', x: 17, y: 75 }, { wordId: 'acqua', x: 50, y: 75 }] },
      // MEDICINE - Health items (medicine, band-aid, thermometer)
      { id: 'cabinet', name: 'Medicine Cabinet', nameNative: "L\'Armadietto", description: 'Medicine, first aid, health items', icon: '💊', x: 85, y: 30, width: 12, height: 20, interiorImage: '/rooms/bathroom-medicine.jpg', interiorVocab: [{ wordId: 'medicina', x: 17, y: 25 }, { wordId: 'cerotto', x: 50, y: 25 }, { wordId: 'termometro', x: 83, y: 25 }, { wordId: 'aspirina', x: 17, y: 75 }, { wordId: 'pomata', x: 50, y: 75 }, { wordId: 'cotone', x: 83, y: 75 }] },
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
    vocabularyIds: ["fiore", "rosa", "erba", "albero", "foglia", "ramo", "radice", "prato", "seme", "sentiero", "ponte", "cancello", "pietra", "terra", "cielo", "sole", "luna", "stella", "nuvola"],
    zones: [
      { id: 'flowers', name: 'The Flowers', nameNative: "I Fiori", description: 'Nature and plants', icon: '🌸', x: 65, y: 60, width: 20, height: 20, interiorImage: '/rooms/garden-flowers.jpg', interiorVocab: [{ wordId: 'fiore', x: 17, y: 17 }, { wordId: 'rosa', x: 50, y: 17 }, { wordId: 'erba', x: 83, y: 17 }, { wordId: 'albero', x: 17, y: 50 }, { wordId: 'foglia', x: 50, y: 50 }, { wordId: 'ramo', x: 83, y: 50 }, { wordId: 'radice', x: 17, y: 83 }, { wordId: 'prato', x: 50, y: 83 }, { wordId: 'seme', x: 83, y: 83 }] },
      { id: 'path', name: 'The Path', nameNative: "Il Vialetto", description: 'Places and directions', icon: '🛤️', x: 30, y: 75, width: 25, height: 15, interiorImage: '/rooms/garden-path.jpg', interiorVocab: [{ wordId: 'sentiero', x: 17, y: 25 }, { wordId: 'ponte', x: 50, y: 25 }, { wordId: 'cancello', x: 83, y: 25 }, { wordId: 'pietra', x: 17, y: 75 }, { wordId: 'terra', x: 50, y: 75 }] },
      { id: 'sky', name: 'The Sky', nameNative: "Il Cielo", description: 'Weather and seasons', icon: '☀️', x: 50, y: 15, width: 30, height: 15, interiorImage: '/rooms/garden-sky.jpg', interiorVocab: [{ wordId: 'cielo', x: 17, y: 25 }, { wordId: 'sole', x: 50, y: 25 }, { wordId: 'luna', x: 83, y: 25 }, { wordId: 'stella', x: 17, y: 75 }, { wordId: 'nuvola', x: 50, y: 75 }] },
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
    vocabularyIds: ["biglietto", "orario", "valigia", "zaino", "abbonamento", "partenza", "arrivo", "treno", "binario", "ritardo", "vagone", "uscita", "entrata", "semaforo", "incrocio", "direzione", "cartello", "strada"],
    zones: [
      { id: 'ticket-office', name: 'Ticket Office', nameNative: "La Biglietteria", description: 'Buying tickets', icon: '🎫', x: 20, y: 45, width: 22, height: 25, interiorImage: '/rooms/transport-ticket.jpg', interiorVocab: [{ wordId: 'biglietto', x: 17, y: 17 }, { wordId: 'orario', x: 50, y: 17 }, { wordId: 'valigia', x: 83, y: 17 }, { wordId: 'zaino', x: 17, y: 50 }, { wordId: 'abbonamento', x: 50, y: 50 }, { wordId: 'partenza', x: 83, y: 50 }, { wordId: 'arrivo', x: 17, y: 83 }] },
      { id: 'platform', name: 'Platform', nameNative: "Il Binario", description: 'Trains and departure', icon: '🚂', x: 50, y: 40, width: 25, height: 30, interiorImage: '/rooms/transport-platform.jpg', interiorVocab: [{ wordId: 'treno', x: 17, y: 25 }, { wordId: 'binario', x: 50, y: 25 }, { wordId: 'partenza', x: 83, y: 25 }, { wordId: 'arrivo', x: 17, y: 75 }, { wordId: 'ritardo', x: 50, y: 75 }, { wordId: 'vagone', x: 83, y: 75 }] },
      { id: 'street', name: 'Street Exit', nameNative: "L\'Uscita", description: 'Directions and navigation', icon: '🚶', x: 80, y: 50, width: 18, height: 25, interiorImage: '/rooms/transport-street.jpg', interiorVocab: [{ wordId: 'uscita', x: 17, y: 17 }, { wordId: 'entrata', x: 50, y: 17 }, { wordId: 'semaforo', x: 83, y: 17 }, { wordId: 'incrocio', x: 17, y: 50 }, { wordId: 'direzione', x: 50, y: 50 }, { wordId: 'cartello', x: 83, y: 50 }, { wordId: 'strada', x: 17, y: 83 }] },
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
    vocabularyIds: ["divano", "poltrona", "tavolino", "cuscino", "coperta", "televisione", "telecomando", "film", "musica", "schermo", "volume", "tavolo", "sedia", "lampada", "quadro", "tappeto", "tenda", "specchio", "libreria"],
    zones: [
      { id: 'sofa', name: 'The Sofa', nameNative: "Il Divano", description: 'Relaxation and free time', icon: '🛋️', x: 40, y: 60, width: 25, height: 20, interiorImage: '/rooms/livingroom-sofa.jpg', interiorVocab: [{ wordId: 'divano', x: 17, y: 25 }, { wordId: 'poltrona', x: 50, y: 25 }, { wordId: 'tavolino', x: 83, y: 25 }, { wordId: 'cuscino', x: 17, y: 75 }, { wordId: 'coperta', x: 50, y: 75 }] },
      { id: 'tv', name: 'The TV', nameNative: "La TV", description: 'Entertainment and media', icon: '📺', x: 70, y: 45, width: 15, height: 15, interiorImage: '/rooms/livingroom-tv.jpg', interiorVocab: [{ wordId: 'televisione', x: 17, y: 25 }, { wordId: 'telecomando', x: 50, y: 25 }, { wordId: 'film', x: 83, y: 25 }, { wordId: 'musica', x: 17, y: 75 }, { wordId: 'schermo', x: 50, y: 75 }, { wordId: 'volume', x: 83, y: 75 }] },
      { id: 'furniture', name: 'Furniture', nameNative: "I Mobili", description: 'Home items', icon: '🏠', x: 20, y: 45, width: 15, height: 20, interiorImage: '/rooms/livingroom-furniture.jpg', interiorVocab: [{ wordId: 'tavolo', x: 17, y: 17 }, { wordId: 'sedia', x: 50, y: 17 }, { wordId: 'lampada', x: 83, y: 17 }, { wordId: 'quadro', x: 17, y: 50 }, { wordId: 'tappeto', x: 50, y: 50 }, { wordId: 'tenda', x: 83, y: 50 }, { wordId: 'specchio', x: 17, y: 83 }, { wordId: 'libreria', x: 50, y: 83 }] },
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
    vocabularyIds: ["mela", "pera", "arancia", "banana", "carota", "lattuga", "pomodoro", "uva", "fragola", "pesca", "latte", "formaggio", "yogurt", "burro", "panna", "uova", "cassa", "carrello", "scontrino", "contanti", "carta", "prezzo", "euro"],
    zones: [
      { id: 'produce', name: 'Fresh Produce', nameNative: "Frutta e Verdura", description: 'Fruits and vegetables', icon: '🍎', x: 20, y: 50, width: 25, height: 30, interiorImage: '/rooms/supermarket-produce.jpg', interiorVocab: [{ wordId: 'mela', x: 13, y: 17 }, { wordId: 'pera', x: 38, y: 17 }, { wordId: 'arancia', x: 63, y: 17 }, { wordId: 'banana', x: 88, y: 17 }, { wordId: 'carota', x: 13, y: 50 }, { wordId: 'lattuga', x: 38, y: 50 }, { wordId: 'pomodoro', x: 63, y: 50 }, { wordId: 'uva', x: 88, y: 50 }, { wordId: 'fragola', x: 13, y: 83 }, { wordId: 'pesca', x: 38, y: 83 }, { wordId: 'cipolla', x: 63, y: 83 }, { wordId: 'patata', x: 88, y: 83 }] },
      { id: 'dairy', name: 'Dairy Section', nameNative: "Latticini", description: 'Milk and cheese', icon: '🧀', x: 50, y: 45, width: 20, height: 25, interiorImage: '/rooms/supermarket-dairy.jpg' },
      { id: 'checkout', name: 'Checkout', nameNative: "La Cassa", description: 'Paying and prices', icon: '💰', x: 80, y: 55, width: 18, height: 20, interiorImage: '/rooms/supermarket-checkout.jpg', interiorVocab: [{ wordId: 'cassa', x: 17, y: 17 }, { wordId: 'carrello', x: 50, y: 17 }, { wordId: 'scontrino', x: 83, y: 17 }, { wordId: 'contanti', x: 17, y: 50 }, { wordId: 'carta', x: 50, y: 50 }, { wordId: 'prezzo', x: 83, y: 50 }, { wordId: 'euro', x: 17, y: 83 }] },
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
    vocabularyIds: ["caffe", "cornetto", "tazza", "menu", "barista", "tavolo", "sedia", "conto", "bicchiere", "piatto", "tovagliolo"],
    zones: [
      { id: 'counter', name: 'The Counter', nameNative: "Il Bancone", description: 'Ordering coffee', icon: '☕', x: 35, y: 40, width: 30, height: 20, interiorImage: '/rooms/cafe-counter.jpg', interiorVocab: [{ wordId: 'caffe', x: 17, y: 25 }, { wordId: 'cornetto', x: 50, y: 25 }, { wordId: 'tazza', x: 83, y: 25 }, { wordId: 'menu', x: 17, y: 75 }, { wordId: 'barista', x: 50, y: 75 }] },
      { id: 'table-cafe', name: 'Table', nameNative: "Il Tavolo", description: 'Sitting and socializing', icon: '🪑', x: 70, y: 60, width: 25, height: 20, interiorImage: '/rooms/cafe-table.jpg', interiorVocab: [{ wordId: 'tavolo', x: 17, y: 17 }, { wordId: 'sedia', x: 50, y: 17 }, { wordId: 'menu', x: 83, y: 17 }, { wordId: 'conto', x: 17, y: 50 }, { wordId: 'bicchiere', x: 50, y: 50 }, { wordId: 'piatto', x: 83, y: 50 }, { wordId: 'tovagliolo', x: 17, y: 83 }] },
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
    vocabularyIds: ["quadro", "scultura", "colore", "luce", "artista", "mostra", "pennello", "regalo", "cartolina", "maglietta", "libro", "souvenir"],
    zones: [
      { id: 'paintings', name: 'The Paintings', nameNative: "I Quadri", description: 'Emotions and feelings', icon: '🎨', x: 40, y: 35, width: 25, height: 20, interiorImage: '/rooms/gallery-paintings.jpg', interiorVocab: [{ wordId: 'quadro', x: 17, y: 17 }, { wordId: 'scultura', x: 50, y: 17 }, { wordId: 'colore', x: 83, y: 17 }, { wordId: 'luce', x: 17, y: 50 }, { wordId: 'artista', x: 50, y: 50 }, { wordId: 'mostra', x: 83, y: 50 }, { wordId: 'pennello', x: 17, y: 83 }] },
      { id: 'shopping', name: 'Gift Shop', nameNative: "Il Negozio", description: 'Shopping and commerce', icon: '🛍️', x: 20, y: 60, width: 15, height: 15, interiorImage: '/rooms/gallery-shop.jpg', interiorVocab: [{ wordId: 'regalo', x: 17, y: 25 }, { wordId: 'cartolina', x: 50, y: 25 }, { wordId: 'maglietta', x: 83, y: 25 }, { wordId: 'libro', x: 17, y: 75 }, { wordId: 'souvenir', x: 50, y: 75 }] },
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
    vocabularyIds: ["serpente", "lucertola", "tartaruga", "coccodrillo", "cane", "gatto", "cavallo", "mucca", "maiale", "pecora", "capra", "coniglio"],
    zones: [
      { id: 'reptiles', name: 'Reptile House', nameNative: "Rettili", description: 'Snakes, lizards, iguanas', icon: '🦎', x: 25, y: 40, width: 20, height: 25, interiorImage: '/rooms/animals-reptiles.jpg' },
      { id: 'mammals', name: 'Mammal Zone', nameNative: "Mammiferi", description: 'Wolves, bears, and more', icon: '🐿️', x: 55, y: 35, width: 25, height: 30, interiorVocab: [{ wordId: 'cane', x: 17, y: 17 }, { wordId: 'gatto', x: 50, y: 17 }, { wordId: 'cavallo', x: 83, y: 17 }, { wordId: 'mucca', x: 17, y: 50 }, { wordId: 'maiale', x: 50, y: 50 }, { wordId: 'pecora', x: 83, y: 50 }, { wordId: 'capra', x: 17, y: 83 }, { wordId: 'coniglio', x: 50, y: 83 }] },
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
    vocabularyIds: ["temporale", "tuono", "fulmine", "nebbia", "grandine", "pioggia", "sole", "nuvola", "vento", "arcobaleno"],
    zones: [
      { id: 'storms', name: 'Storm Center', nameNative: "Temporali", description: 'Thunder, lightning, hail', icon: '⛈️', x: 25, y: 35, width: 25, height: 25, interiorImage: '/rooms/weather-storms.jpg', interiorVocab: [{ wordId: 'temporale', x: 17, y: 25 }, { wordId: 'tuono', x: 50, y: 25 }, { wordId: 'fulmine', x: 83, y: 25 }, { wordId: 'nebbia', x: 17, y: 75 }, { wordId: 'grandine', x: 50, y: 75 }, { wordId: 'pioggia', x: 83, y: 75 }] },
      { id: 'sky-weather', name: 'Sky View', nameNative: "Il Cielo", description: 'Clouds, sun, fog', icon: '🌤️', x: 55, y: 30, width: 30, height: 20, interiorImage: '/rooms/weather-sky.jpg', interiorVocab: [{ wordId: 'sole', x: 17, y: 25 }, { wordId: 'nuvola', x: 50, y: 25 }, { wordId: 'vento', x: 83, y: 25 }, { wordId: 'arcobaleno', x: 17, y: 75 }, { wordId: 'fulmine', x: 50, y: 75 }, { wordId: 'pioggia', x: 83, y: 75 }] },
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
    vocabularyIds: ["martello", "cacciavite", "pinza", "sega", "trapano", "metro", "vite", "chiodo", "banco", "morsa", "lima"],
    zones: [
      { id: 'hand-tools', name: 'Hand Tools', nameNative: "Attrezzi Manuali", description: 'Hammer, saw, screwdriver', icon: '🔨', x: 25, y: 40, width: 25, height: 25, interiorVocab: [{ wordId: 'martello', x: 17, y: 17 }, { wordId: 'cacciavite', x: 50, y: 17 }, { wordId: 'pinza', x: 83, y: 17 }, { wordId: 'sega', x: 17, y: 50 }, { wordId: 'trapano', x: 50, y: 50 }, { wordId: 'metro', x: 83, y: 50 }, { wordId: 'vite', x: 17, y: 83 }, { wordId: 'chiodo', x: 50, y: 83 }] },
      { id: 'workbench', name: 'Workbench', nameNative: "Banco da Lavoro", description: 'File, drill, sharpen', icon: '🛠️', x: 55, y: 35, width: 25, height: 30, interiorVocab: [{ wordId: 'banco', x: 25, y: 25 }, { wordId: 'morsa', x: 75, y: 25 }, { wordId: 'lima', x: 25, y: 75 }] },
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
    vocabularyIds: ["correre", "saltare", "camminare", "nuotare", "volare", "cadere", "spingere", "tirare", "girare", "svegliarsi", "lavarsi", "vestirsi", "pettinarsi", "addormentarsi", "alzarsi", "aprire", "chiudere"],
    zones: [
      { id: 'movement', name: 'Movement Zone', nameNative: "Movimento", description: 'Kick, jump, climb, dance', icon: '🏃', x: 25, y: 35, width: 25, height: 25, interiorVocab: [{ wordId: 'correre', x: 17, y: 17 }, { wordId: 'saltare', x: 50, y: 17 }, { wordId: 'camminare', x: 83, y: 17 }, { wordId: 'nuotare', x: 17, y: 50 }, { wordId: 'volare', x: 50, y: 50 }, { wordId: 'cadere', x: 83, y: 50 }, { wordId: 'spingere', x: 17, y: 83 }, { wordId: 'tirare', x: 50, y: 83 }, { wordId: 'girare', x: 83, y: 83 }] },
      { id: 'daily-actions', name: 'Daily Actions', nameNative: "Azioni Quotidiane", description: 'Wake up, shave, comb', icon: '🌅', x: 55, y: 30, width: 25, height: 25, interiorVocab: [{ wordId: 'svegliarsi', x: 17, y: 17 }, { wordId: 'lavarsi', x: 50, y: 17 }, { wordId: 'vestirsi', x: 83, y: 17 }, { wordId: 'pettinarsi', x: 17, y: 50 }, { wordId: 'addormentarsi', x: 50, y: 50 }, { wordId: 'alzarsi', x: 83, y: 50 }, { wordId: 'aprire', x: 17, y: 83 }, { wordId: 'chiudere', x: 50, y: 83 }] },
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
    vocabularyIds: ["gioia", "tristezza", "rabbia", "paura", "amore", "odio", "fiducia", "sorpresa", "ansia", "orgoglio", "vergogna"],
    zones: [
      { id: 'feelings', name: 'Feelings', nameNative: "Sentimenti", description: 'Happy, sad, angry, afraid', icon: '😊', x: 30, y: 35, width: 25, height: 25, interiorVocab: [{ wordId: 'gioia', x: 17, y: 25 }, { wordId: 'tristezza', x: 50, y: 25 }, { wordId: 'rabbia', x: 83, y: 25 }, { wordId: 'paura', x: 17, y: 75 }, { wordId: 'amore', x: 50, y: 75 }, { wordId: 'odio', x: 83, y: 75 }] },
      { id: 'states', name: 'Mental States', nameNative: "Stati Mentali", description: 'Confused, nervous, anxious', icon: '🧠', x: 60, y: 30, width: 25, height: 25, interiorVocab: [{ wordId: 'fiducia', x: 17, y: 25 }, { wordId: 'sorpresa', x: 50, y: 25 }, { wordId: 'ansia', x: 83, y: 25 }, { wordId: 'orgoglio', x: 17, y: 75 }, { wordId: 'vergogna', x: 50, y: 75 }] },
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
    vocabularyIds: ["pomodoro", "carota", "lattuga", "cipolla", "aglio", "peperone", "patata", "mela", "pera", "pesca", "ciliegia", "limone", "arancia", "fragola", "uva"],
    zones: [
      { id: 'vegetables', name: 'Vegetable Garden', nameNative: "Orto", description: 'Asparagus, broccoli, eggplant', icon: '🥬', x: 25, y: 40, width: 25, height: 25, interiorImage: '/rooms/farm-vegetables.jpg' },
      { id: 'fruits', name: 'Fruit Orchard', nameNative: "Frutteto", description: 'Avocado, cherries, figs', icon: '🍎', x: 55, y: 35, width: 25, height: 30, interiorVocab: [{ wordId: 'mela', x: 17, y: 17 }, { wordId: 'pera', x: 50, y: 17 }, { wordId: 'pesca', x: 83, y: 17 }, { wordId: 'ciliegia', x: 17, y: 50 }, { wordId: 'limone', x: 50, y: 50 }, { wordId: 'arancia', x: 83, y: 50 }, { wordId: 'fragola', x: 17, y: 83 }, { wordId: 'uva', x: 50, y: 83 }] },
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
    vocabularyIds: ["drago", "elfo", "fata", "strega", "nano", "mago", "fantasma", "zombie", "vampiro"],
    zones: [
      { id: 'creatures', name: 'Mythical Creatures', nameNative: "Creature Mitiche", description: 'Dragon, unicorn, fairy', icon: '🐉', x: 30, y: 35, width: 25, height: 25, interiorVocab: [{ wordId: 'drago', x: 17, y: 25 }, { wordId: 'elfo', x: 50, y: 25 }, { wordId: 'fata', x: 83, y: 25 }, { wordId: 'strega', x: 17, y: 75 }, { wordId: 'nano', x: 50, y: 75 }, { wordId: 'mago', x: 83, y: 75 }] },
      { id: 'supernatural', name: 'Supernatural', nameNative: "Soprannaturale", description: 'Ghost, spirit, soul', icon: '👻', x: 60, y: 30, width: 25, height: 25, interiorVocab: [{ wordId: 'fantasma', x: 25, y: 25 }, { wordId: 'strega', x: 75, y: 25 }, { wordId: 'zombie', x: 25, y: 75 }, { wordId: 'vampiro', x: 75, y: 75 }] },
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
