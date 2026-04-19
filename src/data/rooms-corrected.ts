// CORRECTED Room structure - zones now logically organized with vocabulary matching images
// Each zone contains ONLY items that belong in that physical location

import type { Room } from '../types';

export const roomsCorrected: Room[] = [
  {
    id: 'kitchen',
    name: 'Kitchen',
    subtitle: 'Fare & -ARE Verbs',
    nameNative: "Cucina",
    image: 'rooms/kitchen.jpg',
    description: 'La cucina del palazzo — where every object tells a story and teaches the verb "fare".',
    grammarFocus: 'fare & regular -ARE verbs',
    // Full vocabulary list for the room
    vocabularyIds: [
      // Fridge items
      "acqua", "latte", "uova", "burro", "formaggio", "carne", "pesce", "pollo", 
      "verdura", "frutta", "mela", "arancia", "banana", "fragola", "pera", "pesca", 
      "limone", "anguria", "uva", "pomodoro", "carota", "peperone", "insalata", 
      "patata", "cipolla", "aglio", 
      // Pantry items
      "pasta", "riso", "pane", "farina", "zucchero", "sale", "olio", "aceto", 
      "caffe", "cioccolata", "miele", "biscotto", "conserva", 
      // Utensils
      "coltello", "forchetta", "cucchiaio", "mestolo", "spatola", "grattugia",
      // Cooking
      "padella", "pentola", "tagliere", "colino", "forno", "fornello", 
      // Table
      "piatto", "bicchiere", "tazza", "tovagliolo", "caraffa", "bottiglia", 
      "vino", "birra", "succo",
      // Meals
      "colazione", "pranzo", "cena", "menu",
      // Desserts
      "torta", "gelato", "crostatina", "cornetto",
      // Other
      "cucina", "cuoco", "cuoca", "ricetta", "pepe", "sale", "olio", "zucchero"
    ],
    zones: [
      // Zone 1: FRIDGE - Cold items
      {
        id: 'fridge',
        name: 'The Fridge',
        nameNative: "Il Frigorifero",
        description: 'Cold food and drinks - dairy, meat, vegetables, fruits',
        icon: '❄️',
        x: 75,
        y: 45,
        width: 15,
        height: 25,
        interiorImage: 'rooms/kitchen-fridge.jpg',
        interiorVocab: [
          { wordId: 'acqua', x: 15, y: 15 },      // water bottles
          { wordId: 'latte', x: 35, y: 15 },      // milk carton
          { wordId: 'uova', x: 55, y: 15 },       // eggs
          { wordId: 'burro', x: 75, y: 15 },      // butter
          { wordId: 'formaggio', x: 85, y: 15 },  // cheese
          { wordId: 'carne', x: 15, y: 40 },      // meat packages
          { wordId: 'pesce', x: 35, y: 40 },      // fish
          { wordId: 'pollo', x: 55, y: 40 },      // chicken
          { wordId: 'mela', x: 75, y: 40 },       // apples
          { wordId: 'arancia', x: 85, y: 40 },    // oranges
          { wordId: 'pomodoro', x: 15, y: 65 },   // tomatoes
          { wordId: 'carota', x: 35, y: 65 },     // carrots
          { wordId: 'insalata', x: 55, y: 65 },   // lettuce
          { wordId: 'latte', x: 75, y: 65 },      // more dairy
          { wordId: 'uova', x: 85, y: 65 },       // more eggs
        ]
      },
      // Zone 2: PANTRY - Dry goods
      {
        id: 'pantry',
        name: 'The Pantry',
        nameNative: "La Dispensa",
        description: 'Dry goods and staples - pasta, rice, canned goods',
        icon: '🥫',
        x: 88,
        y: 40,
        width: 10,
        height: 30,
        interiorImage: 'rooms/kitchen-pantry.jpg',
        interiorVocab: [
          { wordId: 'pasta', x: 15, y: 15 },      // pasta packages
          { wordId: 'riso', x: 35, y: 15 },       // rice
          { wordId: 'pane', x: 55, y: 15 },       // bread
          { wordId: 'farina', x: 75, y: 15 },     // flour
          { wordId: 'zucchero', x: 85, y: 15 },   // sugar
          { wordId: 'sale', x: 15, y: 40 },       // salt
          { wordId: 'olio', x: 35, y: 40 },       // olive oil
          { wordId: 'caffe', x: 55, y: 40 },      // coffee
          { wordId: 'cioccolata', x: 75, y: 40 }, // chocolate
          { wordId: 'miele', x: 85, y: 40 },      // honey
          { wordId: 'biscotto', x: 15, y: 65 },   // cookies
          { wordId: 'conserva', x: 35, y: 65 },   // preserves/jam
        ]
      },
      // Zone 3: UTENSIL DRAWER - Kitchen tools
      {
        id: 'utensil-drawer',
        name: 'Utensil Drawer',
        nameNative: "Il Cassetto delle Posate",
        description: 'Knives, forks, spoons and kitchen tools',
        icon: '🍴',
        x: 50,
        y: 70,
        width: 15,
        height: 12,
        interiorImage: 'rooms/kitchen-drawer.jpg',
        interiorVocab: [
          { wordId: 'coltello', x: 20, y: 25 },    // knives
          { wordId: 'forchetta', x: 40, y: 25 },   // forks
          { wordId: 'cucchiaio', x: 60, y: 25 },   // spoons
          { wordId: 'mestolo', x: 80, y: 25 },     // ladle
          { wordId: 'spatola', x: 20, y: 50 },     // spatula
          { wordId: 'grattugia', x: 40, y: 50 },   // grater
          { wordId: 'coltello', x: 60, y: 50 },    // more knives
          { wordId: 'cucchiaio', x: 80, y: 50 },   // more spoons
        ]
      },
      // Zone 4: STOVE - Cooking area
      {
        id: 'stove',
        name: 'The Stove',
        nameNative: "I Fornelli",
        description: 'Cooking and preparation - pots, pans, oven',
        icon: '🔥',
        x: 60,
        y: 55,
        width: 15,
        height: 15,
        interiorImage: 'rooms/kitchen-stove.jpg',
        interiorVocab: [
          { wordId: 'padella', x: 20, y: 25 },     // frying pan
          { wordId: 'pentola', x: 50, y: 25 },     // pot
          { wordId: 'tagliere', x: 80, y: 25 },    // cutting board
          { wordId: 'forno', x: 20, y: 55 },       // oven
          { wordId: 'fornello', x: 50, y: 55 },    // stove burner
          { wordId: 'colino', x: 80, y: 55 },      // colander
          { wordId: 'cuoco', x: 35, y: 80 },       // chef (if visible)
          { wordId: 'cuoca', x: 65, y: 80 },       // cook (if visible)
        ]
      },
      // Zone 5: TABLE - Dining
      {
        id: 'table',
        name: 'The Table',
        nameNative: "Il Tavolo",
        description: 'Dining and eating - plates, glasses, meals',
        icon: '🍽️',
        x: 25,
        y: 65,
        width: 20,
        height: 15,
        interiorImage: 'rooms/kitchen-table.jpg',
        interiorVocab: [
          { wordId: 'piatto', x: 15, y: 25 },      // plate
          { wordId: 'bicchiere', x: 35, y: 25 },   // glass
          { wordId: 'tazza', x: 55, y: 25 },       // cup
          { wordId: 'tovagliolo', x: 75, y: 25 },  // napkin
          { wordId: 'caraffa', x: 85, y: 25 },     // carafe
          { wordId: 'vino', x: 15, y: 55 },        // wine
          { wordId: 'birra', x: 35, y: 55 },       // beer
          { wordId: 'succo', x: 55, y: 55 },       // juice
          { wordId: 'colazione', x: 75, y: 55 },   // breakfast
          { wordId: 'pranzo', x: 85, y: 55 },      // lunch
          { wordId: 'cena', x: 50, y: 80 },        // dinner
        ]
      },
      // Zone 6: DESSERT - Sweets
      {
        id: 'dessert',
        name: 'Dessert Station',
        nameNative: "I Dolci",
        description: 'Cakes, gelato, and sweet treats',
        icon: '🍰',
        x: 15,
        y: 50,
        width: 12,
        height: 15,
        interiorImage: 'rooms/kitchen-dessert.jpg',
        interiorVocab: [
          { wordId: 'torta', x: 25, y: 30 },       // cake
          { wordId: 'gelato', x: 50, y: 30 },      // ice cream
          { wordId: 'cornetto', x: 75, y: 30 },    // croissant
          { wordId: 'cioccolata', x: 25, y: 60 },  // chocolate
          { wordId: 'miele', x: 50, y: 60 },       // honey
          { wordId: 'biscotto', x: 75, y: 60 },    // cookie
        ]
      },
    ],
    grammarPoints: [
      { id: 'fare', title: 'Fare - To Do/Make', explanation: 'Irregular verb used for actions and weather', example: 'Faccio la pasta (I make pasta)', color: '#E7A04D' },
      { id: 'are-verbs', title: 'Regular -ARE Verbs', explanation: 'Most common verb conjugation pattern', example: 'Parlare → Io parlo, Tu parli, Lui/lei parla', color: '#10B981' },
    ],
  },
  
  // BEDROOM - Corrected
  {
    id: 'bedroom',
    name: 'Bedroom',
    subtitle: 'Family & Descriptions',
    nameNative: "Camera da Letto",
    image: 'rooms/bedroom.jpg',
    description: 'Learn family members and master adjective agreement.',
    grammarFocus: 'possessive adjectives & adjective agreement',
    vocabularyIds: [
      // Wardrobe - Clothes
      "camicia", "camicetta", "maglietta", "maglione", "giacca", "cappotto", 
      "impermeabile", "vestito", "gonna", "pantaloni", "pantaloncini", "jeans", "pigiama",
      // Drawer - Accessories
      "calze", "cravatta", "cintura", "sciarpa", "guanti", "berretto",
      // Jewelry
      "anello", "collana", "orecchino", "orologio",
      // Shoes
      "scarpe", "stivali", "pantofole",
      // Bed
      "letto", "cuscino", "coperta", "lenzuolo",
      // Nightstand
      "comodino", "lampada", "sveglia", "caricabatterie", "libro", "occhiali",
      // Furniture
      "armadio", "specchio", "cassettiera", "tappeto", "tenda"
    ],
    zones: [
      // Zone 1: WARDROBE - Hanging clothes
      {
        id: 'wardrobe',
        name: 'The Wardrobe',
        nameNative: "L'Armadio",
        description: 'Clothes hanging - shirts, pants, dresses, coats',
        icon: '👔',
        x: 70,
        y: 40,
        width: 15,
        height: 30,
        interiorImage: 'rooms/bedroom-wardrobe.jpg',
        interiorVocab: [
          { wordId: 'camicia', x: 12, y: 15 },      // shirt
          { wordId: 'camicetta', x: 25, y: 15 },    // blouse
          { wordId: 'maglietta', x: 38, y: 15 },    // t-shirt
          { wordId: 'maglione', x: 51, y: 15 },     // sweater
          { wordId: 'giacca', x: 64, y: 15 },       // jacket
          { wordId: 'cappotto', x: 77, y: 15 },     // coat
          { wordId: 'impermeabile', x: 88, y: 15 }, // raincoat
          { wordId: 'vestito', x: 12, y: 45 },      // dress
          { wordId: 'gonna', x: 25, y: 45 },        // skirt
          { wordId: 'pantaloni', x: 38, y: 45 },    // pants
          { wordId: 'jeans', x: 51, y: 45 },        // jeans
          { wordId: 'pigiama', x: 64, y: 45 },      // pajamas
        ]
      },
      // Zone 2: DRAWER - Accessories
      {
        id: 'drawer',
        name: 'Accessory Drawer',
        nameNative: "Il Cassetto",
        description: 'Socks, ties, belts, scarves, gloves',
        icon: '🧦',
        x: 85,
        y: 60,
        width: 12,
        height: 15,
        interiorImage: 'rooms/bedroom-drawer.jpg',
        interiorVocab: [
          { wordId: 'calze', x: 20, y: 25 },        // socks
          { wordId: 'cravatta', x: 50, y: 25 },     // tie
          { wordId: 'cintura', x: 80, y: 25 },      // belt
          { wordId: 'sciarpa', x: 20, y: 55 },      // scarf
          { wordId: 'guanti', x: 50, y: 55 },       // gloves
          { wordId: 'berretto', x: 80, y: 55 },     // beanie
        ]
      },
      // Zone 3: JEWELRY - Jewelry box
      {
        id: 'jewelry',
        name: 'Jewelry Box',
        nameNative: "Il Portagioie",
        description: 'Rings, necklaces, earrings, watches',
        icon: '💍',
        x: 20,
        y: 55,
        width: 12,
        height: 12,
        interiorImage: 'rooms/bedroom-jewelry.jpg',
        interiorVocab: [
          { wordId: 'anello', x: 20, y: 25 },       // ring
          { wordId: 'collana', x: 50, y: 25 },      // necklace
          { wordId: 'orecchino', x: 80, y: 25 },    // earrings
          { wordId: 'orologio', x: 50, y: 60 },     // watch
        ]
      },
      // Zone 4: SHOES - Shoe rack
      {
        id: 'shoes',
        name: 'Shoe Rack',
        nameNative: "La Scarpiera",
        description: 'Shoes, boots, slippers',
        icon: '👟',
        x: 15,
        y: 75,
        width: 20,
        height: 12,
        interiorImage: 'rooms/bedroom-shoes.jpg',
        interiorVocab: [
          { wordId: 'scarpe', x: 15, y: 35 },       // shoes
          { wordId: 'stivali', x: 40, y: 35 },      // boots
          { wordId: 'pantofole', x: 65, y: 35 },    // slippers
          { wordId: 'scarpe', x: 85, y: 35 },       // more shoes
        ]
      },
      // Zone 5: BED - Bedding
      {
        id: 'bed',
        name: 'The Bed',
        nameNative: "Il Letto",
        description: 'Pillows, blankets, sheets',
        icon: '🛏️',
        x: 40,
        y: 55,
        width: 25,
        height: 20,
        interiorImage: 'rooms/bedroom-bed.jpg',
        interiorVocab: [
          { wordId: 'letto', x: 20, y: 30 },        // bed
          { wordId: 'cuscino', x: 50, y: 30 },      // pillow
          { wordId: 'coperta', x: 80, y: 30 },      // blanket
          { wordId: 'lenzuolo', x: 35, y: 60 },     // sheet
          { wordId: 'cuscino', x: 65, y: 60 },      // more pillows
        ]
      },
      // Zone 6: NIGHTSTAND - Bedside items
      {
        id: 'nightstand',
        name: 'Nightstand',
        nameNative: "Il Comodino",
        description: 'Lamp, alarm clock, book, glasses',
        icon: '🌙',
        x: 70,
        y: 70,
        width: 10,
        height: 12,
        interiorImage: 'rooms/bedroom-nightstand.jpg',
        interiorVocab: [
          { wordId: 'comodino', x: 20, y: 30 },     // nightstand
          { wordId: 'lampada', x: 50, y: 30 },      // lamp
          { wordId: 'sveglia', x: 80, y: 30 },      // alarm clock
          { wordId: 'libro', x: 35, y: 65 },        // book
          { wordId: 'occhiali', x: 65, y: 65 },     // glasses
        ]
      },
    ],
    grammarPoints: [
      { id: 'possessives', title: 'Possessive Adjectives', explanation: 'Show ownership: il mio, la tua, il suo', example: 'Il mio letto (My bed), La tua famiglia (Your family)', color: '#EC4899' },
      { id: 'agreement', title: 'Adjective Agreement', explanation: 'Adjectives match gender and number of nouns', example: 'Una famiglia grande (A big family)', color: '#8B5CF6' },
    ],
  },
  
  // BATHROOM - Corrected
  {
    id: 'bathroom',
    name: 'Bathroom',
    subtitle: 'Daily Routine & Reflexives',
    nameNative: "Bagno",
    image: 'rooms/bathroom.jpg',
    description: 'Il bagno — master daily routines and reflexive verbs.',
    grammarFocus: 'reflexive verbs (mi lavo, mi pettino) & daily routine',
    vocabularyIds: [
      // Face parts
      "faccia", "occhi", "naso", "bocca", "labbra", "denti", "lingua", 
      // Body parts
      "capelli", "collo", "braccio", "mano", "dito", "pancia", "schiena", 
      "gamba", "ginocchio", "piede", "corpo", "testa",
      // Bathroom items
      "asciugamano", "sapone", "dentifricio", "spazzolino", "shampoo", 
      "doccia", "bagno", "lavandino", "specchio",
      // Health
      "medicina", "cerotto", "termometro"
    ],
    zones: [
      // Zone 1: SINK - Face washing
      {
        id: 'sink',
        name: 'The Sink',
        nameNative: "Il Lavandino",
        description: 'Face, teeth, hands - washing area',
        icon: '🚰',
        x: 25,
        y: 45,
        width: 20,
        height: 25,
        interiorImage: 'rooms/bathroom-sink.jpg',
        interiorVocab: [
          { wordId: 'faccia', x: 30, y: 20 },       // face (in mirror)
          { wordId: 'occhi', x: 50, y: 20 },        // eyes
          { wordId: 'naso', x: 70, y: 20 },         // nose
          { wordId: 'bocca', x: 30, y: 45 },        // mouth
          { wordId: 'denti', x: 50, y: 45 },        // teeth
          { wordId: 'lavandino', x: 70, y: 45 },    // sink
          { wordId: 'sapone', x: 20, y: 70 },       // soap
          { wordId: 'dentifricio', x: 50, y: 70 },  // toothpaste
          { wordId: 'asciugamano', x: 80, y: 70 },  // towel
        ]
      },
      // Zone 2: SHOWER - Body washing
      {
        id: 'shower',
        name: 'The Shower',
        nameNative: "La Doccia",
        description: 'Body, hair - shower area',
        icon: '🚿',
        x: 60,
        y: 35,
        width: 25,
        height: 35,
        interiorImage: 'rooms/bathroom-shower.jpg',
        interiorVocab: [
          { wordId: 'corpo', x: 25, y: 25 },        // body
          { wordId: 'testa', x: 50, y: 25 },        // head
          { wordId: 'capelli', x: 75, y: 25 },      // hair
          { wordId: 'braccio', x: 25, y: 50 },      // arm
          { wordId: 'mano', x: 50, y: 50 },         // hand
          { wordId: 'gamba', x: 75, y: 50 },        // leg
          { wordId: 'doccia', x: 25, y: 75 },       // shower
          { wordId: 'shampoo', x: 50, y: 75 },      // shampoo
          { wordId: 'bagno', x: 75, y: 75 },        // bath
        ]
      },
      // Zone 3: MEDICINE - Health items
      {
        id: 'medicine',
        name: 'Medicine Cabinet',
        nameNative: "L'Armadietto",
        description: 'Medicine, first aid, health items',
        icon: '💊',
        x: 85,
        y: 30,
        width: 12,
        height: 20,
        interiorImage: 'rooms/bathroom-medicine.jpg',
        interiorVocab: [
          { wordId: 'medicina', x: 25, y: 25 },     // medicine
          { wordId: 'cerotto', x: 50, y: 25 },      // band-aid
          { wordId: 'termometro', x: 75, y: 25 },   // thermometer
          { wordId: 'medicina', x: 50, y: 60 },     // more medicine
        ]
      },
    ],
    grammarPoints: [
      { id: 'reflexives', title: 'Reflexive Verbs', explanation: 'Actions you do to yourself with mi/ti/si/ci/vi/si', example: 'Mi lavo (I wash myself), Ti pettini (You comb yourself)', color: '#10B981' },
    ],
  },
];

export default roomsCorrected;
