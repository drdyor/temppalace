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
    vocabularyIds: ["abbastanza", "adesso", "agosto", "alte", "alti", "alto", "altra", "altro", "anche", "ancora", "anni", "anno", "aprile", "aspetto", "avvocata", "avvocato", "basso", "bene", "borsa", "borse", "bravo", "buonanotte", "buonasera", "calcio", "campeggio", "cavo", "cellulare", "che", "chi", "chiave", "chiavi", "ciao", "cinque", "collega", "come", "compagno", "con", "corridoio", "cosa", "cuffie", "dentista", "dicembre", "diciannove", "diciassette", "diciotto", "dieci", "difficile", "dodici", "domani", "domenica", "donna", "dopo", "due", "duro", "e", "enorme", "era", "errore", "esempio", "facile", "febbraio", "finalmente", "finestra", "forse", "forte", "francese", "gennaio", "gente", "giornalista", "giorno", "giovane", "giovedi", "giugno", "gomma", "guancia", "ieri", "impero", "impossibile", "incredibile", "inglese", "intelligente", "labbro", "lavoro", "leggero", "lingua", "luglio", "lunedi", "ma", "maestro", "maggio", "mai", "marito", "martedi", "marzo", "mattina", "meno", "mento", "mercante", "mercoledi", "mese", "messaggi", "messaggio", "mezzanotte", "mezzogiorno", "milione", "milioni", "mille", "moglie", "molto", "mondo", "morbido", "nessuno", "niente", "nome", "notte", "nove", "novembre", "nuova", "o", "occhiali", "oggi", "ombrello", "operaio", "ora", "orario", "oscuro", "otto", "ottobre", "parte", "partita", "pavimento", "per", "perche", "pericoloso", "permesso", "pesante", "pieno", "più", "poco", "poi", "pomeriggio", "popolo", "potente", "povero", "preoccupato", "presidente", "prima", "primo", "problema", "prodotto", "professore", "professoressa", "punto", "qualcosa", "qualcuno", "quale", "quando", "quanti", "quarto", "quasi", "quattordici", "quattro", "quello", "questo", "quindici", "quinto", "ragione", "ricco", "rifiuto", "romantico", "rumore", "sabato", "schiavo", "se", "secondo", "sedici", "sei", "sempre", "senza", "sera", "sette", "settembre", "settimana", "sicuro", "signora", "signore", "simile", "società", "soffitto", "sopracciglio", "sporco", "stanotte", "stasera", "storie", "studio", "subito", "tardi", "tema", "terzo", "tetto", "titolo", "tre", "tredici", "trenta", "troppo", "tutto", "ufficio", "undici", "uno", "uomo", "valigia", "venerdi", "venti", "voce", "volta", "voto", "vuoto", "wifi", "zaino", "zero", "zia", "zio"],
    zones: [
      { id: 'family-portrait', name: 'Family Portrait', nameNative: "Ritratto di Famiglia", description: 'Family members on the wall', icon: '👨‍👩‍👧‍👦', x: 30, y: 40, width: 20, height: 25, interiorImage: '/rooms/entrance-portrait.jpg', interiorVocab: [{ wordId: 'avvocata', x: 12, y: 12 }, { wordId: 'avvocato', x: 37, y: 12 }, { wordId: 'bravo', x: 62, y: 12 }, { wordId: 'collega', x: 87, y: 12 }, { wordId: 'compagno', x: 12, y: 37 }, { wordId: 'dentista', x: 37, y: 37 }, { wordId: 'donna', x: 62, y: 37 }, { wordId: 'francese', x: 87, y: 37 }, { wordId: 'gente', x: 12, y: 62 }, { wordId: 'giornalista', x: 37, y: 62 }, { wordId: 'giovane', x: 62, y: 62 }, { wordId: 'inglese', x: 87, y: 62 }] },
      { id: 'coat-rack', name: 'Coat Rack', nameNative: "Appendiabiti", description: 'Clothes and accessories', icon: '🧥', x: 75, y: 45, width: 15, height: 30, interiorImage: '/rooms/entrance-coat.jpg', interiorVocab: [{ wordId: 'borsa', x: 12, y: 12 }, { wordId: 'borse', x: 37, y: 12 }, { wordId: 'cavo', x: 62, y: 12 }, { wordId: 'cellulare', x: 87, y: 12 }, { wordId: 'chiave', x: 12, y: 37 }, { wordId: 'chiavi', x: 37, y: 37 }, { wordId: 'cuffie', x: 62, y: 37 }, { wordId: 'occhiali', x: 87, y: 37 }, { wordId: 'ombrello', x: 12, y: 62 }, { wordId: 'valigia', x: 37, y: 62 }, { wordId: 'zaino', x: 62, y: 62 }] },
      { id: 'mirror', name: 'The Mirror', nameNative: "Lo Specchio", description: 'Body parts and descriptions', icon: '🪞', x: 50, y: 35, width: 15, height: 20, interiorVocab: [{ wordId: 'alte', x: 12, y: 12 }, { wordId: 'alti', x: 37, y: 12 }, { wordId: 'alto', x: 62, y: 12 }, { wordId: 'basso', x: 87, y: 12 }, { wordId: 'bene', x: 12, y: 37 }, { wordId: 'difficile', x: 37, y: 37 }, { wordId: 'duro', x: 62, y: 37 }, { wordId: 'enorme', x: 87, y: 37 }, { wordId: 'facile', x: 12, y: 62 }, { wordId: 'forte', x: 37, y: 62 }, { wordId: 'guancia', x: 62, y: 62 }, { wordId: 'labbro', x: 87, y: 62 }] },
      { id: 'clock', name: 'The Clock', nameNative: "L'Orologio", description: 'Days, months, and time', icon: '🕰️', x: 15, y: 25, width: 12, height: 12, interiorVocab: [{ wordId: 'adesso', x: 12, y: 12 }, { wordId: 'agosto', x: 37, y: 12 }, { wordId: 'anni', x: 62, y: 12 }, { wordId: 'anno', x: 87, y: 12 }, { wordId: 'aprile', x: 12, y: 37 }, { wordId: 'dicembre', x: 37, y: 37 }, { wordId: 'domani', x: 62, y: 37 }, { wordId: 'domenica', x: 87, y: 37 }, { wordId: 'febbraio', x: 12, y: 62 }, { wordId: 'gennaio', x: 37, y: 62 }, { wordId: 'giorno', x: 62, y: 62 }, { wordId: 'giovedi', x: 87, y: 62 }] },
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
    vocabularyIds: [
      "acqua", "bere", "bicchiere", "birra", "bottiglia", "burro", "caffe", "caldo", "carne", "cena", "cibo", "cioccolata", "colazione", "coltello", "cucchiaio", "cucina", "cucinare", "cuoca", "cuoco", "dolce", "fiamma", "forchetta", "formaggio", "forno", "freddo", "frigorifero", "frutta", "fuoco", "gelato", "ghiaccio", "latte", "mangiare", "menu", "miele", "olio", "padella", "pane", "panino", "pasta", "pentola", "pepe", "pesce", "piatto", "pranzo", "ricetta", "riso", "sale", "succo", "tavolo", "tazza", "te", "torta", "tovagliolo", "uova", "uovo", "verdura", "vino", "zucchero", "zuppa", "insalata", "pizza", "piattino", "mensa"
    ],
    zones: [
      { id: 'fridge', name: 'The Fridge', nameNative: "Il Frigorifero", description: 'Cold food and drinks', icon: '❄️', x: 75, y: 45, width: 15, height: 25, interiorImage: '/rooms/kitchen-fridge.jpg', interiorVocab: [{ wordId: 'latte', x: 12, y: 12 }, { wordId: 'burro', x: 37, y: 12 }, { wordId: 'uova', x: 63, y: 12 }, { wordId: 'uovo', x: 88, y: 12 }, { wordId: 'formaggio', x: 12, y: 37 }, { wordId: 'ghiaccio', x: 37, y: 37 }, { wordId: 'frigorifero', x: 63, y: 37 }, { wordId: 'frutta', x: 88, y: 37 }, { wordId: 'verdura', x: 12, y: 63 }, { wordId: 'carne', x: 37, y: 63 }, { wordId: 'pesce', x: 63, y: 63 }, { wordId: 'freddo', x: 88, y: 63 }, { wordId: 'gelato', x: 12, y: 88 }] },
      { id: 'pantry', name: 'The Pantry', nameNative: "La Dispensa", description: 'Dry goods and staples', icon: '🥫', x: 88, y: 40, width: 10, height: 30, interiorImage: '/rooms/kitchen-pantry.jpg', interiorVocab: [{ wordId: 'pasta', x: 12, y: 12 }, { wordId: 'riso', x: 37, y: 12 }, { wordId: 'sale', x: 63, y: 12 }, { wordId: 'zucchero', x: 88, y: 12 }, { wordId: 'olio', x: 12, y: 31 }, { wordId: 'pane', x: 37, y: 31 }, { wordId: 'miele', x: 63, y: 31 }, { wordId: 'bottiglia', x: 88, y: 31 }, { wordId: 'te', x: 12, y: 50 }, { wordId: 'caffe', x: 37, y: 50 }, { wordId: 'cioccolata', x: 63, y: 50 }] },
      { id: 'stove', name: 'The Stove', nameNative: "I Fornelli", description: 'Cooking and preparation', icon: '🔥', x: 60, y: 55, width: 15, height: 15, interiorVocab: [{ wordId: 'forno', x: 12, y: 12 }, { wordId: 'pentola', x: 37, y: 12 }, { wordId: 'padella', x: 63, y: 12 }, { wordId: 'fuoco', x: 88, y: 12 }, { wordId: 'cucinare', x: 12, y: 37 }, { wordId: 'cuoco', x: 37, y: 37 }, { wordId: 'cuoca', x: 63, y: 37 }, { wordId: 'pepe', x: 88, y: 37 }, { wordId: 'zuppa', x: 12, y: 63 }, { wordId: 'fiamma', x: 37, y: 63 }] },
      { id: 'table', name: 'The Table', nameNative: "Il Tavolo", description: 'Dining and eating', icon: '🍽️', x: 25, y: 65, width: 20, height: 15, interiorVocab: [{ wordId: 'tavolo', x: 12, y: 12 }, { wordId: 'piatto', x: 37, y: 12 }, { wordId: 'bicchiere', x: 63, y: 12 }, { wordId: 'tazza', x: 88, y: 12 }, { wordId: 'forchetta', x: 12, y: 27 }, { wordId: 'coltello', x: 37, y: 27 }, { wordId: 'cucchiaio', x: 63, y: 27 }, { wordId: 'cena', x: 88, y: 27 }, { wordId: 'pranzo', x: 12, y: 42 }, { wordId: 'colazione', x: 37, y: 42 }, { wordId: 'dolce', x: 63, y: 42 }, { wordId: 'torta', x: 88, y: 42 }, { wordId: 'mangiare', x: 12, y: 58 }, { wordId: 'bere', x: 37, y: 58 }, { wordId: 'cibo', x: 63, y: 58 }, { wordId: 'panino', x: 88, y: 58 }, { wordId: 'vino', x: 12, y: 73 }, { wordId: 'birra', x: 37, y: 73 }, { wordId: 'succo', x: 63, y: 73 }, { wordId: 'acqua', x: 88, y: 73 }, { wordId: 'menu', x: 12, y: 88 }, { wordId: 'tovagliolo', x: 37, y: 88 }, { wordId: 'caldo', x: 63, y: 88 }] },
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
    vocabularyIds: [
      "applicazione", "biblioteca", "capire", "compito", "computer", "disegno", "dizionario", "domanda", "email", "esame", "idea", "imparare", "informatica", "insegnante", "internet", "leggere", "lettera", "lezione", "libro", "matematica", "matita", "mouse", "musica", "numero", "orologio", "paesi", "pagina", "parola", "password", "penna", "pensare", "programma", "quaderno", "raccontare", "rete", "righello", "risposta", "sapere", "scienza", "scrivere", "scuola", "sito", "software", "stampante", "storia", "studente", "studentessa", "studiare", "tablet", "tastiera", "testo", "video", "aula", "geografia", "materia", "scrivania", "università", "calcolatrice", "classe", "documento", "legge", "telescopio"
    ],
    zones: [
      { id: 'bookshelf', name: 'The Bookshelf', nameNative: "Lo Scaffale", description: 'School and books', icon: '📚', x: 30, y: 35, width: 25, height: 30, interiorVocab: [{ wordId: 'libro', x: 12, y: 12 }, { wordId: 'dizionario', x: 37, y: 12 }, { wordId: 'storia', x: 63, y: 12 }, { wordId: 'lettera', x: 88, y: 12 }, { wordId: 'pagina', x: 12, y: 50 }, { wordId: 'parola', x: 37, y: 50 }, { wordId: 'testo', x: 63, y: 50 }, { wordId: 'biblioteca', x: 88, y: 50 }, { wordId: 'raccontare', x: 12, y: 88 }, { wordId: 'leggere', x: 37, y: 88 }] },
      { id: 'desk', name: 'Study Desk', nameNative: "La Scrivania", description: 'Study and work', icon: '📝', x: 60, y: 60, width: 20, height: 20, interiorVocab: [{ wordId: 'quaderno', x: 12, y: 12 }, { wordId: 'penna', x: 37, y: 12 }, { wordId: 'matita', x: 63, y: 12 }, { wordId: 'compito', x: 88, y: 12 }, { wordId: 'esame', x: 12, y: 37 }, { wordId: 'lezione', x: 37, y: 37 }, { wordId: 'scuola', x: 63, y: 37 }, { wordId: 'studente', x: 88, y: 37 }, { wordId: 'studentessa', x: 12, y: 63 }, { wordId: 'insegnante', x: 37, y: 63 }, { wordId: 'studiare', x: 63, y: 63 }, { wordId: 'imparare', x: 88, y: 63 }, { wordId: 'scrivere', x: 12, y: 88 }, { wordId: 'disegno', x: 37, y: 88 }, { wordId: 'righello', x: 63, y: 88 }] },
      { id: 'computer', name: 'Computer Station', nameNative: "Il Computer", description: 'Technology and time', icon: '💻', x: 85, y: 45, width: 12, height: 15, interiorVocab: [{ wordId: 'computer', x: 12, y: 12 }, { wordId: 'internet', x: 37, y: 12 }, { wordId: 'email', x: 63, y: 12 }, { wordId: 'programma', x: 88, y: 12 }, { wordId: 'software', x: 12, y: 31 }, { wordId: 'sito', x: 37, y: 31 }, { wordId: 'rete', x: 63, y: 31 }, { wordId: 'tastiera', x: 88, y: 31 }, { wordId: 'mouse', x: 12, y: 50 }, { wordId: 'stampante', x: 37, y: 50 }, { wordId: 'tablet', x: 63, y: 50 }, { wordId: 'orologio', x: 88, y: 50 }, { wordId: 'matematica', x: 12, y: 69 }, { wordId: 'scienza', x: 37, y: 69 }, { wordId: 'musica', x: 63, y: 69 }, { wordId: 'applicazione', x: 88, y: 69 }, { wordId: 'password', x: 12, y: 88 }, { wordId: 'video', x: 37, y: 88 }, { wordId: 'informatica', x: 63, y: 88 }] },
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
    vocabularyIds: [
      "addormentarsi", "armadio", "bambina", "bambino", "berretto", "calze", "cambiare", "camera", "camicia", "cappello", "cappotto", "cintura", "comodino", "coperta", "coppia", "cravatta", "cuscino", "dormire", "famiglia", "figlia", "figlio", "foto", "fratello", "genitore", "giacca", "gonna", "guanti", "immagine", "jeans", "lampada", "letto", "madre", "maglietta", "maglione", "nonna", "nonno", "padre", "pantaloni", "parrucchiere", "persona", "persone", "pigiama", "presto", "ragazza", "ragazzo", "scarpe", "sorella", "stanca", "stanco", "sveglia", "svegliarsi", "taglia", "vestirsi", "vestito", "camicetta", "impermeabile", "pantaloncini", "pantofole", "sciarpa", "stivali", "cassetto", "orecchino"
    ],
    zones: [
      { id: 'wardrobe', name: 'The Wardrobe', nameNative: "L\'Armadio", description: 'Clothes and fashion', icon: '👔', x: 70, y: 40, width: 15, height: 30, interiorImage: '/rooms/bedroom-wardrobe.jpg', interiorVocab: [{ wordId: 'camicia', x: 12, y: 12 }, { wordId: 'pantaloni', x: 37, y: 12 }, { wordId: 'gonna', x: 63, y: 12 }, { wordId: 'vestito', x: 88, y: 12 }, { wordId: 'giacca', x: 12, y: 31 }, { wordId: 'maglietta', x: 37, y: 31 }, { wordId: 'maglione', x: 63, y: 31 }, { wordId: 'scarpe', x: 88, y: 31 }, { wordId: 'calze', x: 12, y: 50 }, { wordId: 'pigiama', x: 37, y: 50 }, { wordId: 'vestirsi', x: 63, y: 50 }, { wordId: 'cambiare', x: 88, y: 50 }, { wordId: 'berretto', x: 12, y: 69 }, { wordId: 'cappotto', x: 37, y: 69 }, { wordId: 'cappello', x: 63, y: 69 }, { wordId: 'cintura', x: 88, y: 69 }, { wordId: 'cravatta', x: 12, y: 88 }, { wordId: 'guanti', x: 37, y: 88 }, { wordId: 'jeans', x: 63, y: 88 }, { wordId: 'parrucchiere', x: 88, y: 88 }] },
      { id: 'bed', name: 'The Bed', nameNative: "Il Letto", description: 'Rest and daily routine', icon: '🛏️', x: 40, y: 55, width: 25, height: 20, interiorVocab: [{ wordId: 'letto', x: 12, y: 12 }, { wordId: 'cuscino', x: 37, y: 12 }, { wordId: 'coperta', x: 63, y: 12 }, { wordId: 'dormire', x: 88, y: 12 }, { wordId: 'sveglia', x: 12, y: 37 }, { wordId: 'svegliarsi', x: 37, y: 37 }, { wordId: 'addormentarsi', x: 63, y: 37 }, { wordId: 'stanco', x: 88, y: 37 }, { wordId: 'stanca', x: 12, y: 63 }, { wordId: 'presto', x: 37, y: 63 }, { wordId: 'comodino', x: 63, y: 63 }, { wordId: 'lampada', x: 88, y: 63 }] },
      { id: 'photos', name: 'Family Photos', nameNative: "Le Foto", description: 'Family and relationships', icon: '📷', x: 25, y: 30, width: 20, height: 15, interiorVocab: [{ wordId: 'madre', x: 12, y: 12 }, { wordId: 'padre', x: 37, y: 12 }, { wordId: 'figlia', x: 63, y: 12 }, { wordId: 'figlio', x: 88, y: 12 }, { wordId: 'fratello', x: 12, y: 31 }, { wordId: 'sorella', x: 37, y: 31 }, { wordId: 'nonna', x: 63, y: 31 }, { wordId: 'nonno', x: 88, y: 31 }, { wordId: 'bambino', x: 12, y: 50 }, { wordId: 'bambina', x: 37, y: 50 }, { wordId: 'famiglia', x: 63, y: 50 }, { wordId: 'persona', x: 88, y: 50 }, { wordId: 'persone', x: 12, y: 69 }, { wordId: 'genitore', x: 37, y: 69 }, { wordId: 'ragazzo', x: 63, y: 69 }, { wordId: 'ragazza', x: 88, y: 69 }, { wordId: 'coppia', x: 12, y: 88 }, { wordId: 'foto', x: 37, y: 88 }, { wordId: 'immagine', x: 63, y: 88 }] },
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
    vocabularyIds: [
      "asciugacapelli", "asciugamano", "bagno", "bocca", "capelli", "cerotto", "collo", "corpo", "cuore", "dente", "denti", "dentifricio", "doccia", "dolore", "dottore", "dottoressa", "faccia", "farmaco", "febbre", "ferita", "fronte", "gamba", "infermiera", "infermiere", "influenza", "lavare", "lavarsi", "malata", "malato", "mani", "mano", "medicina", "medico", "naso", "occhi", "occhio", "orecchio", "ospedale", "pettinarsi", "piede", "piedi", "pittore", "pulito", "raffreddore", "salute", "sangue", "sapone", "schiena", "spalla", "specchio", "stomaco", "testa", "tosse", "braccio", "caviglia", "dito", "ginocchio", "gola", "gomito", "pancia", "pollice", "polso", "fascia"
    ],
    zones: [
      { id: 'sink', name: 'The Sink', nameNative: "Il Lavandino", description: 'Washing and face', icon: '🚰', x: 25, y: 45, width: 20, height: 25, interiorVocab: [{ wordId: 'lavarsi', x: 12, y: 12 }, { wordId: 'lavare', x: 37, y: 12 }, { wordId: 'faccia', x: 63, y: 12 }, { wordId: 'mani', x: 88, y: 12 }, { wordId: 'mano', x: 12, y: 37 }, { wordId: 'denti', x: 37, y: 37 }, { wordId: 'dente', x: 63, y: 37 }, { wordId: 'dentifricio', x: 88, y: 37 }, { wordId: 'sapone', x: 12, y: 63 }, { wordId: 'asciugamano', x: 37, y: 63 }, { wordId: 'specchio', x: 63, y: 63 }, { wordId: 'pettinarsi', x: 88, y: 63 }, { wordId: 'asciugacapelli', x: 12, y: 88 }] },
      { id: 'shower', name: 'The Shower', nameNative: "La Doccia", description: 'Bathing and body', icon: '🚿', x: 60, y: 35, width: 25, height: 35, interiorVocab: [{ wordId: 'doccia', x: 12, y: 12 }, { wordId: 'capelli', x: 37, y: 12 }, { wordId: 'corpo', x: 63, y: 12 }, { wordId: 'gamba', x: 88, y: 12 }, { wordId: 'piede', x: 12, y: 31 }, { wordId: 'piedi', x: 37, y: 31 }, { wordId: 'schiena', x: 63, y: 31 }, { wordId: 'spalla', x: 88, y: 31 }, { wordId: 'collo', x: 12, y: 50 }, { wordId: 'bocca', x: 37, y: 50 }, { wordId: 'fronte', x: 63, y: 50 }, { wordId: 'naso', x: 88, y: 50 }, { wordId: 'occhi', x: 12, y: 69 }, { wordId: 'occhio', x: 37, y: 69 }, { wordId: 'orecchio', x: 63, y: 69 }, { wordId: 'testa', x: 88, y: 69 }, { wordId: 'bagno', x: 12, y: 88 }, { wordId: 'pulito', x: 37, y: 88 }] },
      { id: 'cabinet', name: 'Medicine Cabinet', nameNative: "L\'Armadietto", description: 'Health and care', icon: '💊', x: 85, y: 30, width: 12, height: 20, interiorVocab: [{ wordId: 'medicina', x: 12, y: 12 }, { wordId: 'farmaco', x: 37, y: 12 }, { wordId: 'febbre', x: 63, y: 12 }, { wordId: 'influenza', x: 88, y: 12 }, { wordId: 'raffreddore', x: 12, y: 27 }, { wordId: 'malato', x: 37, y: 27 }, { wordId: 'malata', x: 63, y: 27 }, { wordId: 'dolore', x: 88, y: 27 }, { wordId: 'sangue', x: 12, y: 42 }, { wordId: 'cuore', x: 37, y: 42 }, { wordId: 'stomaco', x: 63, y: 42 }, { wordId: 'ospedale', x: 88, y: 42 }, { wordId: 'dottore', x: 12, y: 58 }, { wordId: 'dottoressa', x: 37, y: 58 }, { wordId: 'medico', x: 63, y: 58 }, { wordId: 'infermiera', x: 88, y: 58 }, { wordId: 'infermiere', x: 12, y: 73 }, { wordId: 'cerotto', x: 37, y: 73 }, { wordId: 'ferita', x: 63, y: 73 }, { wordId: 'salute', x: 88, y: 73 }, { wordId: 'tosse', x: 12, y: 88 }, { wordId: 'pittore', x: 37, y: 88 }] },
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
    vocabularyIds: ["albero", "arcobaleno", "autunno", "bosco", "campo", "cielo", "collina", "erba", "estate", "fiore", "fiume", "foglia", "foresta", "giardino", "inverno", "lago", "mare", "montagna", "montagne", "natura", "neve", "nuvola", "pietra", "pietre", "pioggia", "primavera", "radice", "ramo", "sabbia", "sole", "spiaggia", "temperatura", "tempo", "terra", "vento", "verde"],
    zones: [
      { id: 'flowers', name: 'The Flowers', nameNative: "I Fiori", description: 'Nature and plants', icon: '🌸', x: 65, y: 60, width: 20, height: 20, interiorVocab: [{ wordId: 'fiore', x: 12, y: 12 }, { wordId: 'albero', x: 37, y: 12 }, { wordId: 'erba', x: 63, y: 12 }, { wordId: 'foglia', x: 88, y: 12 }, { wordId: 'radice', x: 12, y: 50 }, { wordId: 'ramo', x: 37, y: 50 }, { wordId: 'bosco', x: 63, y: 50 }, { wordId: 'foresta', x: 88, y: 50 }, { wordId: 'giardino', x: 12, y: 88 }] },
      { id: 'path', name: 'The Path', nameNative: "Il Vialetto", description: 'Places and directions', icon: '🛤️', x: 30, y: 75, width: 25, height: 15, interiorVocab: [{ wordId: 'campo', x: 12, y: 12 }, { wordId: 'pietra', x: 37, y: 12 }, { wordId: 'pietre', x: 63, y: 12 }, { wordId: 'terra', x: 88, y: 12 }, { wordId: 'collina', x: 12, y: 50 }, { wordId: 'montagna', x: 37, y: 50 }, { wordId: 'montagne', x: 63, y: 50 }] },
      { id: 'sky', name: 'The Sky', nameNative: "Il Cielo", description: 'Weather and seasons', icon: '☀️', x: 50, y: 15, width: 30, height: 15, interiorVocab: [{ wordId: 'cielo', x: 12, y: 12 }, { wordId: 'sole', x: 37, y: 12 }, { wordId: 'nuvola', x: 63, y: 12 }, { wordId: 'vento', x: 88, y: 12 }, { wordId: 'pioggia', x: 12, y: 31 }, { wordId: 'neve', x: 37, y: 31 }, { wordId: 'tempo', x: 63, y: 31 }, { wordId: 'estate', x: 88, y: 31 }, { wordId: 'inverno', x: 12, y: 50 }, { wordId: 'primavera', x: 37, y: 50 }, { wordId: 'autunno', x: 63, y: 50 }, { wordId: 'verde', x: 88, y: 50 }, { wordId: 'arcobaleno', x: 12, y: 69 }, { wordId: 'temperatura', x: 37, y: 69 }] },
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
    vocabularyIds: [
      "abbonamento", "aereo", "aeroporto", "arrivare", "autista", "auto", "autobus", "bancomat", "barca", "benzina", "bicicletta", "biglietto", "caricabatterie", "carriera", "carta", "cartella", "comprare", "euro", "fermata", "guidare", "lento", "lontano", "macchina", "mappa", "metro", "moneta", "moto", "nave", "pagare", "parcheggio", "partire", "passaporto", "patente", "ponte", "portafoglio", "porto", "prezzo", "pullman", "semaforo", "soldi", "stazione", "strada", "strade", "taxi", "termometro", "tram", "treno", "veloce", "via", "viaggio", "vicino", "dove", "dritto", "davanti", "dietro", "dentro", "fuori", "sopra", "sotto", "tra", "verso", "luogo", "posto", "paese", "piazza", "porta", "scala", "albergo", "ambulanza", "ascensore", "banca", "città", "destra", "lontani", "posta", "prenotazione", "sinistra", "sede"
    ],
    zones: [
      { id: 'ticket-office', name: 'Ticket Office', nameNative: "La Biglietteria", description: 'Buying tickets', icon: '🎫', x: 20, y: 45, width: 22, height: 25, interiorVocab: [{ wordId: 'biglietto', x: 12, y: 12 }, { wordId: 'abbonamento', x: 37, y: 12 }, { wordId: 'carta', x: 63, y: 12 }, { wordId: 'passaporto', x: 88, y: 12 }, { wordId: 'soldi', x: 12, y: 50 }, { wordId: 'euro', x: 37, y: 50 }, { wordId: 'moneta', x: 63, y: 50 }, { wordId: 'pagare', x: 88, y: 50 }, { wordId: 'comprare', x: 12, y: 88 }, { wordId: 'prezzo', x: 37, y: 88 }, { wordId: 'bancomat', x: 63, y: 88 }, { wordId: 'portafoglio', x: 88, y: 88 }] },
      { id: 'platform', name: 'Platform', nameNative: "Il Binario", description: 'Trains and departure', icon: '🚂', x: 50, y: 40, width: 25, height: 30, interiorVocab: [{ wordId: 'treno', x: 12, y: 12 }, { wordId: 'autobus', x: 37, y: 12 }, { wordId: 'metro', x: 63, y: 12 }, { wordId: 'tram', x: 88, y: 12 }, { wordId: 'taxi', x: 12, y: 31 }, { wordId: 'aereo', x: 37, y: 31 }, { wordId: 'nave', x: 63, y: 31 }, { wordId: 'barca', x: 88, y: 31 }, { wordId: 'porto', x: 12, y: 50 }, { wordId: 'stazione', x: 37, y: 50 }, { wordId: 'fermata', x: 63, y: 50 }, { wordId: 'viaggio', x: 88, y: 50 }, { wordId: 'partire', x: 12, y: 69 }, { wordId: 'arrivare', x: 37, y: 69 }, { wordId: 'aeroporto', x: 63, y: 69 }, { wordId: 'pullman', x: 88, y: 69 }, { wordId: 'termometro', x: 12, y: 88 }] },
      { id: 'street', name: 'Street Exit', nameNative: "L\'Uscita", description: 'Directions and navigation', icon: '🚶', x: 80, y: 50, width: 18, height: 25, interiorVocab: [{ wordId: 'macchina', x: 12, y: 12 }, { wordId: 'auto', x: 37, y: 12 }, { wordId: 'bicicletta', x: 63, y: 12 }, { wordId: 'moto', x: 88, y: 12 }, { wordId: 'strada', x: 12, y: 27 }, { wordId: 'strade', x: 37, y: 27 }, { wordId: 'via', x: 63, y: 27 }, { wordId: 'guidare', x: 88, y: 27 }, { wordId: 'mappa', x: 12, y: 42 }, { wordId: 'lontano', x: 37, y: 42 }, { wordId: 'vicino', x: 63, y: 42 }, { wordId: 'veloce', x: 88, y: 42 }, { wordId: 'lento', x: 12, y: 58 }, { wordId: 'benzina', x: 37, y: 58 }, { wordId: 'patente', x: 63, y: 58 }, { wordId: 'parcheggio', x: 88, y: 58 }, { wordId: 'semaforo', x: 12, y: 73 }, { wordId: 'ponte', x: 37, y: 73 }, { wordId: 'autista', x: 63, y: 73 }, { wordId: 'carriera', x: 88, y: 73 }, { wordId: 'caricabatterie', x: 12, y: 88 }, { wordId: 'cartella', x: 37, y: 88 }] },
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
    vocabularyIds: [
      "ascoltare", "canzone", "casa", "divano", "edificio", "film", "gioco", "libreria", "palazzi", "palazzo", "poltrona", "quadro", "radio", "sala", "soggiorno", "spettacolo", "sport", "stanza", "stare", "streaming", "tappeto", "tavolino", "telecomando", "televisione", "tenda", "tv", "videogame", "vivere", "schermo", "cinema", "concerto", "microfono", "telefono", "teatro", "opera"
    ],
    zones: [
      { id: 'sofa', name: 'The Sofa', nameNative: "Il Divano", description: 'Relaxation and free time', icon: '🛋️', x: 40, y: 60, width: 25, height: 20, interiorVocab: [{ wordId: 'divano', x: 12, y: 12 }, { wordId: 'poltrona', x: 37, y: 12 }, { wordId: 'stare', x: 63, y: 12 }, { wordId: 'soggiorno', x: 88, y: 12 }, { wordId: 'casa', x: 12, y: 50 }, { wordId: 'sala', x: 37, y: 50 }] },
      { id: 'tv', name: 'The TV', nameNative: "La TV", description: 'Entertainment and media', icon: '📺', x: 70, y: 45, width: 15, height: 15, interiorVocab: [{ wordId: 'televisione', x: 12, y: 12 }, { wordId: 'tv', x: 37, y: 12 }, { wordId: 'telecomando', x: 63, y: 12 }, { wordId: 'film', x: 88, y: 12 }, { wordId: 'sport', x: 12, y: 37 }, { wordId: 'gioco', x: 37, y: 37 }, { wordId: 'videogame', x: 63, y: 37 }, { wordId: 'streaming', x: 88, y: 37 }, { wordId: 'canzone', x: 12, y: 63 }, { wordId: 'ascoltare', x: 37, y: 63 }, { wordId: 'spettacolo', x: 63, y: 63 }, { wordId: 'radio', x: 88, y: 63 }] },
      { id: 'furniture', name: 'Furniture', nameNative: "I Mobili", description: 'Home items', icon: '🏠', x: 20, y: 45, width: 15, height: 20, interiorVocab: [{ wordId: 'libreria', x: 12, y: 12 }, { wordId: 'quadro', x: 37, y: 12 }, { wordId: 'tappeto', x: 63, y: 12 }, { wordId: 'tenda', x: 88, y: 12 }, { wordId: 'tavolino', x: 12, y: 37 }, { wordId: 'stanza', x: 37, y: 37 }, { wordId: 'edificio', x: 63, y: 37 }, { wordId: 'palazzo', x: 88, y: 37 }, { wordId: 'palazzi', x: 12, y: 63 }] },
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
    vocabularyIds: [
      "aglio", "arancia", "banana", "caro", "carota", "carrello", "cassa", "cento", "cetriolo", "cipolla", "cliente", "commessa", "commesso", "economico", "lattuga", "limone", "mela", "negoziante", "offerta", "patata", "peperone", "pomodoro", "quanto", "resto", "scontato", "sconto", "scontrino", "supermercato", "saldi", "banconota", "gratis", "contanti"
    ],
    zones: [
      { id: 'produce', name: 'Fresh Produce', nameNative: "Frutta e Verdura", description: 'Fruits and vegetables', icon: '🍎', x: 20, y: 50, width: 25, height: 30, interiorVocab: [{ wordId: 'mela', x: 12, y: 12 }, { wordId: 'arancia', x: 37, y: 12 }, { wordId: 'banana', x: 63, y: 12 }, { wordId: 'limone', x: 88, y: 12 }, { wordId: 'pomodoro', x: 12, y: 31 }, { wordId: 'patata', x: 37, y: 31 }, { wordId: 'aglio', x: 63, y: 31 }, { wordId: 'cipolla', x: 88, y: 31 }, { wordId: 'cetriolo', x: 12, y: 50 }, { wordId: 'peperone', x: 37, y: 50 }, { wordId: 'carota', x: 63, y: 50 }, { wordId: 'lattuga', x: 88, y: 50 }] },
      { id: 'dairy', name: 'Dairy Section', nameNative: "Latticini", description: 'Milk and cheese', icon: '🧀', x: 50, y: 45, width: 20, height: 25 },
      { id: 'checkout', name: 'Checkout', nameNative: "La Cassa", description: 'Paying and prices', icon: '💰', x: 80, y: 55, width: 18, height: 20, interiorVocab: [{ wordId: 'carrello', x: 12, y: 12 }, { wordId: 'cassa', x: 37, y: 12 }, { wordId: 'scontrino', x: 63, y: 12 }, { wordId: 'resto', x: 88, y: 12 }, { wordId: 'caro', x: 12, y: 27 }, { wordId: 'economico', x: 37, y: 27 }, { wordId: 'cliente', x: 63, y: 27 }, { wordId: 'commessa', x: 88, y: 27 }, { wordId: 'commesso', x: 12, y: 42 }, { wordId: 'negoziante', x: 37, y: 42 }, { wordId: 'quanto', x: 63, y: 42 }, { wordId: 'cento', x: 88, y: 42 }, { wordId: 'sconto', x: 12, y: 58 }, { wordId: 'scontato', x: 37, y: 58 }, { wordId: 'offerta', x: 63, y: 58 }] },
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
    vocabularyIds: [
      "altoparlante", "amica", "amico", "antipasto", "arrivederci", "buongiorno", "cameriera", "cameriere", "conto", "grazie", "mancia", "ordinare", "parlare", "prego", "ristorante", "sedia", "stipendio", "pausa"
    ],
    zones: [
      { id: 'counter', name: 'The Counter', nameNative: "Il Bancone", description: 'Ordering coffee', icon: '☕', x: 35, y: 40, width: 30, height: 20, interiorVocab: [{ wordId: 'ordinare', x: 12, y: 12 }, { wordId: 'cameriere', x: 37, y: 12 }, { wordId: 'cameriera', x: 63, y: 12 }, { wordId: 'conto', x: 88, y: 12 }, { wordId: 'mancia', x: 12, y: 27 }, { wordId: 'grazie', x: 37, y: 27 }, { wordId: 'buongiorno', x: 63, y: 27 }, { wordId: 'arrivederci', x: 88, y: 27 }, { wordId: 'prego', x: 12, y: 42 }] },
      { id: 'table-cafe', name: 'Table', nameNative: "Il Tavolo", description: 'Sitting and socializing', icon: '🪑', x: 70, y: 60, width: 25, height: 20, interiorVocab: [{ wordId: 'amico', x: 12, y: 12 }, { wordId: 'amica', x: 37, y: 12 }, { wordId: 'parlare', x: 63, y: 12 }, { wordId: 'sedia', x: 88, y: 12 }, { wordId: 'altoparlante', x: 12, y: 37 }, { wordId: 'antipasto', x: 37, y: 37 }, { wordId: 'stipendio', x: 63, y: 37 }] },
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
    vocabularyIds: [
      "area", "articolo", "bello", "brutto", "capolavoro", "centro", "famoso", "farmacia", "guida", "livello", "luce", "mercato", "muro", "museo", "negozio", "nuovo", "ombra", "ombre", "pittura", "quartiere", "scultura", "spazio", "vecchio", "zona", "bianco", "giallo", "nero", "nera", "rosso", "grande", "grandi", "piccola", "piccolo", "lungo", "largo", "larga", "larghe"
    ],
    zones: [
      { id: 'paintings', name: 'The Paintings', nameNative: "I Quadri", description: 'Emotions and feelings', icon: '🎨', x: 40, y: 35, width: 25, height: 20, interiorVocab: [{ wordId: 'pittura', x: 12, y: 12 }, { wordId: 'scultura', x: 37, y: 12 }, { wordId: 'museo', x: 63, y: 12 }, { wordId: 'bello', x: 88, y: 12 }, { wordId: 'brutto', x: 12, y: 31 }, { wordId: 'vecchio', x: 37, y: 31 }, { wordId: 'nuovo', x: 63, y: 31 }, { wordId: 'famoso', x: 88, y: 31 }, { wordId: 'ombra', x: 12, y: 50 }, { wordId: 'ombre', x: 37, y: 50 }, { wordId: 'luce', x: 63, y: 50 }, { wordId: 'capolavoro', x: 88, y: 50 }] },
      { id: 'pharmacy', name: 'Medicine Cabinet', nameNative: "Armadietto Medicinale", description: 'Health and body', icon: '💊', x: 75, y: 50, width: 15, height: 20, interiorVocab: [{ wordId: 'farmacia', x: 12, y: 12 }] },
      { id: 'shopping', name: 'Gift Shop', nameNative: "Il Negozio", description: 'Shopping and commerce', icon: '🛍️', x: 20, y: 60, width: 15, height: 15, interiorVocab: [{ wordId: 'negozio', x: 12, y: 12 }, { wordId: 'mercato', x: 37, y: 12 }, { wordId: 'articolo', x: 63, y: 12 }, { wordId: 'guida', x: 88, y: 12 }, { wordId: 'quartiere', x: 12, y: 37 }, { wordId: 'centro', x: 37, y: 37 }, { wordId: 'zona', x: 63, y: 37 }, { wordId: 'area', x: 88, y: 37 }, { wordId: 'spazio', x: 12, y: 63 }, { wordId: 'livello', x: 37, y: 63 }] },
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
    vocabularyIds: ["animale", "cane", "cavallo", "gatto", "lupo", "pollo", "uccello"],
    zones: [
      { id: 'reptiles', name: 'Reptile House', nameNative: "Rettili", description: 'Snakes, lizards, iguanas', icon: '🦎', x: 25, y: 40, width: 20, height: 25 },
      { id: 'mammals', name: 'Mammal Zone', nameNative: "Mammiferi", description: 'Wolves, bears, and more', icon: '🐿️', x: 55, y: 35, width: 25, height: 30, interiorVocab: [{ wordId: 'cane', x: 12, y: 12 }, { wordId: 'gatto', x: 37, y: 12 }, { wordId: 'cavallo', x: 63, y: 12 }, { wordId: 'lupo', x: 88, y: 12 }, { wordId: 'pollo', x: 12, y: 37 }, { wordId: 'uccello', x: 37, y: 37 }, { wordId: 'animale', x: 63, y: 37 }] },
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
    vocabularyIds: [
      "Nevica", "Piove", "clima", "fulmine", "grado", "nebbia", "temporale", "tuono", "aria", "energia", "inquinamento", "onda", "ambiente"
    ],
    zones: [
      { id: 'storms', name: 'Storm Center', nameNative: "Temporali", description: 'Thunder, lightning, hail', icon: '⛈️', x: 25, y: 35, width: 25, height: 25, interiorVocab: [{ wordId: 'tuono', x: 12, y: 12 }, { wordId: 'fulmine', x: 37, y: 12 }, { wordId: 'temporale', x: 63, y: 12 }, { wordId: 'Piove', x: 88, y: 12 }] },
      { id: 'sky-weather', name: 'Sky View', nameNative: "Il Cielo", description: 'Clouds, sun, fog', icon: '🌤️', x: 55, y: 30, width: 30, height: 20, interiorVocab: [{ wordId: 'nebbia', x: 12, y: 12 }, { wordId: 'clima', x: 37, y: 12 }, { wordId: 'Nevica', x: 63, y: 12 }] },
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
    vocabularyIds: [
      "bastoncini", "batteria", "colla", "costruire", "file", "forbici", "ingegnere", "lavagna", "minuto", "pulire", "ferro", "legno", "mattone", "mattoni", "sparo"
    ],
    zones: [
      { id: 'hand-tools', name: 'Hand Tools', nameNative: "Attrezzi Manuali", description: 'Hammer, saw, screwdriver', icon: '🔨', x: 25, y: 40, width: 25, height: 25, interiorVocab: [{ wordId: 'forbici', x: 12, y: 12 }] },
      { id: 'workbench', name: 'Workbench', nameNative: "Banco da Lavoro", description: 'File, drill, sharpen', icon: '🛠️', x: 55, y: 35, width: 25, height: 30, interiorVocab: [{ wordId: 'costruire', x: 12, y: 12 }, { wordId: 'pulire', x: 37, y: 12 }, { wordId: 'colla', x: 63, y: 12 }, { wordId: 'batteria', x: 88, y: 12 }, { wordId: 'file', x: 12, y: 50 }, { wordId: 'ingegnere', x: 37, y: 50 }, { wordId: 'lavagna', x: 63, y: 50 }, { wordId: 'minuto', x: 88, y: 50 }, { wordId: 'bastoncini', x: 12, y: 88 }] },
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
    vocabularyIds: [
      "alzarsi", "andare", "aprire", "aspettare", "attraversare", "avere", "cadere", "camminare", "cantare", "cenere", "cercare", "chiamare", "chiedere", "chiudere", "cominciare", "correre", "credere", "dare", "dipingere", "dire", "diventare", "dovere", "entrare", "essere", "fare", "finire", "giocare", "girare", "governare", "iniziare", "insegnare", "lavorare", "legare", "mettere", "morire", "movimento", "nascere", "nascondere", "nuotare", "passare", "perdere", "polvere", "portare", "potere", "preferire", "prendere", "preparare", "provare", "restare", "ricordare", "ridere", "rispondere", "ritornare", "rompere", "saltare", "sbagliare", "scappare", "scoprire", "sembrare", "sentire", "tenere", "tornare", "trovare", "uscire", "vendere", "venire", "vincere", "volare", "volere", "guardare", "conoscere", "vedere", "cominciato", "passeggiata", "squadra", "palestra", "piscina"
    ],
    zones: [
      { id: 'movement', name: 'Movement Zone', nameNative: "Movimento", description: 'Kick, jump, climb, dance', icon: '🏃', x: 25, y: 35, width: 25, height: 25, interiorVocab: [{ wordId: 'andare', x: 12, y: 12 }, { wordId: 'venire', x: 37, y: 12 }, { wordId: 'correre', x: 63, y: 12 }, { wordId: 'camminare', x: 88, y: 12 }, { wordId: 'saltare', x: 12, y: 31 }, { wordId: 'nuotare', x: 37, y: 31 }, { wordId: 'volare', x: 63, y: 31 }, { wordId: 'cadere', x: 88, y: 31 }, { wordId: 'alzarsi', x: 12, y: 50 }, { wordId: 'girare', x: 37, y: 50 }, { wordId: 'attraversare', x: 63, y: 50 }, { wordId: 'scappare', x: 88, y: 50 }, { wordId: 'diventare', x: 12, y: 88 }] },
      { id: 'daily-actions', name: 'Daily Actions', nameNative: "Azioni Quotidiane", description: 'Wake up, shave, comb', icon: '🌅', x: 55, y: 30, width: 25, height: 25, interiorVocab: [{ wordId: 'sentire', x: 12, y: 12 }, { wordId: 'aprire', x: 37, y: 12 }, { wordId: 'chiudere', x: 63, y: 12 }, { wordId: 'tornare', x: 88, y: 12 }, { wordId: 'entrare', x: 12, y: 17 }, { wordId: 'uscire', x: 37, y: 17 }, { wordId: 'iniziare', x: 63, y: 17 }, { wordId: 'cominciare', x: 88, y: 17 }, { wordId: 'finire', x: 12, y: 23 }, { wordId: 'provare', x: 37, y: 23 }, { wordId: 'prendere', x: 63, y: 23 }, { wordId: 'dare', x: 88, y: 23 }, { wordId: 'portare', x: 12, y: 28 }, { wordId: 'tenere', x: 37, y: 28 }, { wordId: 'mettere', x: 63, y: 28 }, { wordId: 'chiamare', x: 88, y: 28 }, { wordId: 'chiedere', x: 12, y: 34 }, { wordId: 'rispondere', x: 37, y: 34 }, { wordId: 'dire', x: 63, y: 34 }, { wordId: 'cercare', x: 88, y: 34 }, { wordId: 'trovare', x: 12, y: 39 }, { wordId: 'perdere', x: 37, y: 39 }, { wordId: 'lavorare', x: 63, y: 39 }, { wordId: 'insegnare', x: 88, y: 39 }, { wordId: 'giocare', x: 12, y: 45 }, { wordId: 'aspettare', x: 37, y: 45 }, { wordId: 'preparare', x: 63, y: 45 }, { wordId: 'vendere', x: 88, y: 45 }, { wordId: 'cenere', x: 12, y: 88 }, { wordId: 'ritornare', x: 37, y: 88 }, { wordId: 'sbagliare', x: 63, y: 88 }, { wordId: 'sembrare', x: 88, y: 88 }] },
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
    vocabularyIds: [
      "amore", "arrabbiato", "bella", "buono", "cattivo", "contento", "deluso", "eccitato", "felice", "gelosia", "geloso", "imbarazzato", "insieme", "male", "nervoso", "noia", "orgoglioso", "paura", "piacere", "solitario", "sollievo", "solo", "sorpresa", "speranza", "tranquillo", "triste", "tristezza", "vergogna", "ansia", "felicita", "fiducia", "gioia", "innamorato", "nostalgia", "rabbia", "morte", "libertà", "bugie", "realtà", "verità", "vita", "vivo"
    ],
    zones: [
      { id: 'feelings', name: 'Feelings', nameNative: "Sentimenti", description: 'Happy, sad, angry, afraid', icon: '😊', x: 30, y: 35, width: 25, height: 25, interiorVocab: [{ wordId: 'felice', x: 12, y: 12 }, { wordId: 'contento', x: 37, y: 12 }, { wordId: 'triste', x: 63, y: 12 }, { wordId: 'arrabbiato', x: 88, y: 12 }, { wordId: 'paura', x: 12, y: 50 }, { wordId: 'sorpresa', x: 37, y: 50 }, { wordId: 'amore', x: 63, y: 50 }, { wordId: 'piacere', x: 88, y: 50 }, { wordId: 'geloso', x: 12, y: 88 }, { wordId: 'gelosia', x: 37, y: 88 }] },
      { id: 'states', name: 'Mental States', nameNative: "Stati Mentali", description: 'Confused, nervous, anxious', icon: '🧠', x: 60, y: 30, width: 25, height: 25, interiorVocab: [{ wordId: 'nervoso', x: 12, y: 12 }, { wordId: 'tranquillo', x: 37, y: 12 }, { wordId: 'eccitato', x: 63, y: 12 }, { wordId: 'deluso', x: 88, y: 12 }, { wordId: 'imbarazzato', x: 12, y: 27 }, { wordId: 'orgoglioso', x: 37, y: 27 }, { wordId: 'solo', x: 63, y: 27 }, { wordId: 'solitario', x: 88, y: 27 }, { wordId: 'insieme', x: 12, y: 42 }, { wordId: 'buono', x: 37, y: 42 }, { wordId: 'cattivo', x: 63, y: 42 }, { wordId: 'male', x: 88, y: 42 }, { wordId: 'noia', x: 12, y: 58 }, { wordId: 'tristezza', x: 37, y: 58 }, { wordId: 'sollievo', x: 63, y: 58 }, { wordId: 'speranza', x: 88, y: 58 }, { wordId: 'vergogna', x: 12, y: 73 }] },
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
    vocabularyIds: [ "anguria", "ciliegia", "contadino", "fragola", "pera", "pesca", "uva", "paglia" ],
    zones: [
      { id: 'vegetables', name: 'Vegetable Garden', nameNative: "Orto", description: 'Asparagus, broccoli, eggplant', icon: '🥬', x: 25, y: 40, width: 25, height: 25 },
      { id: 'fruits', name: 'Fruit Orchard', nameNative: "Frutteto", description: 'Avocado, cherries, figs', icon: '🍎', x: 55, y: 35, width: 25, height: 30, interiorVocab: [{ wordId: 'pesca', x: 12, y: 12 }, { wordId: 'pera', x: 37, y: 12 }, { wordId: 'ciliegia', x: 63, y: 12 }, { wordId: 'anguria', x: 88, y: 12 }, { wordId: 'uva', x: 12, y: 50 }, { wordId: 'fragola', x: 37, y: 50 }] },
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
    vocabularyIds: ["anello", "bugia", "caverna", "chiesa", "collana", "compleanno", "deserto", "destino", "fata", "festa", "grotta", "guerra", "isola", "luna", "natale", "oro", "pasqua", "poliziotto", "prigione", "principe", "re", "regina", "segreto", "spada", "stella", "stelle", "vacanza", "vulcano"],
    zones: [
      { id: 'creatures', name: 'Mythical Creatures', nameNative: "Creature Mitiche", description: 'Dragon, unicorn, fairy', icon: '🐉', x: 30, y: 35, width: 25, height: 25, interiorVocab: [{ wordId: 'fata', x: 12, y: 12 }, { wordId: 'principe', x: 37, y: 12 }, { wordId: 'regina', x: 63, y: 12 }, { wordId: 're', x: 88, y: 12 }] },
      { id: 'supernatural', name: 'Supernatural', nameNative: "Soprannaturale", description: 'Ghost, spirit, soul', icon: '👻', x: 60, y: 30, width: 25, height: 25, interiorVocab: [{ wordId: 'oro', x: 12, y: 12 }, { wordId: 'anello', x: 37, y: 12 }, { wordId: 'collana', x: 63, y: 12 }, { wordId: 'spada', x: 88, y: 12 }] },
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
