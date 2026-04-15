// Room definitions — each room pulls vocab from the italian-dictionary.json by category
// Zones within rooms sub-filter for drill-down navigation

export interface RoomZone {
  id: string;
  name: string;
  nameIt: string;
  description: string;
  icon: string;
  categories: string[]; // dictionary categories to pull from
  x: number; // position on room image (%)
  y: number;
  width: number;
  height: number;
  interiorImage?: string; // optional close-up image for this zone
  interiorVocab?: { word: string; x: number; y: number }[]; // specific words positioned in interior image
}

export interface Room {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  description: string;
  categories: string[]; // main dictionary categories for this room
  zones: RoomZone[]; // clickable sub-areas
  grammarFocus: string; // what grammar this room teaches
}

export const rooms: Room[] = [
  {
    id: 'entrance-hall',
    name: 'Entrance Hall',
    subtitle: 'Essere & Avere',
    image: '/palace/rooms/entrance-hall.jpg',
    description: 'Step into the grand hall. Meet the people and learn to describe them with essere and avere.',
    categories: ['people'],
    grammarFocus: 'essere & avere (to be & to have)',
    zones: [
      { id: 'family-portrait', name: 'Family Portrait', nameIt: 'Ritratto di Famiglia', description: 'Family members on the wall', icon: '👨‍👩‍👧‍👦', categories: ['people'], x: 30, y: 40, width: 20, height: 25, interiorImage: '/palace/rooms/entrance-portrait.jpg', interiorVocab: [{ word: 'uomo', x: 25, y: 35 }, { word: 'donna', x: 55, y: 30 }, { word: 'famiglia', x: 40, y: 55 }, { word: 'signore', x: 70, y: 45 }, { word: 'signora', x: 30, y: 75 }] },
      { id: 'coat-rack', name: 'Coat Rack', nameIt: 'Appendiabiti', description: 'Clothes and accessories', icon: '🧥', categories: ['clothing'], x: 75, y: 45, width: 15, height: 30, interiorImage: '/palace/rooms/entrance-coat.jpg', interiorVocab: [{ word: 'cappotto', x: 25, y: 30 }, { word: 'giacca', x: 55, y: 25 }, { word: 'ombrello', x: 40, y: 50 }, { word: 'sciarpa', x: 70, y: 45 }, { word: 'guanti', x: 35, y: 70 }] },
      { id: 'mirror', name: 'The Mirror', nameIt: 'Lo Specchio', description: 'Body parts and descriptions', icon: '🪞', categories: ['body'], x: 50, y: 35, width: 15, height: 20, interiorImage: '/palace/rooms/entrance-mirror.jpg', interiorVocab: [{ word: 'nome', x: 30, y: 40 }, { word: 'lettera', x: 60, y: 35 }, { word: 'chiave', x: 45, y: 60 }, { word: 'zaino', x: 75, y: 55 }] },
    ],
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    subtitle: 'Fare & -ARE Verbs',
    image: '/palace/rooms/kitchen.jpg',
    description: 'La cucina del palazzo — where every object tells a story and teaches the verb "fare".',
    categories: ['kitchen'],
    grammarFocus: 'fare & regular -ARE verbs',
    zones: [
      { 
        id: 'fridge', 
        name: 'The Fridge', 
        nameIt: 'Il Frigorifero', 
        description: 'Cold food and drinks', 
        icon: '❄️', 
        categories: ['kitchen'], 
        x: 75, y: 45, width: 15, height: 25,
        interiorImage: '/palace/rooms/kitchen-fridge.jpg',
        interiorVocab: [
          { word: 'latte', x: 20, y: 30 }, { word: 'uova', x: 50, y: 25 },
          { word: 'burro', x: 30, y: 50 }, { word: 'formaggio', x: 70, y: 40 },
          { word: 'acqua', x: 40, y: 70 }, { word: 'frutta', x: 80, y: 60 },
        ]
      },
      { 
        id: 'pantry', 
        name: 'The Pantry', 
        nameIt: 'La Dispensa', 
        description: 'Dry goods and staples', 
        icon: '🥫', 
        categories: ['kitchen'], 
        x: 88, y: 40, width: 10, height: 30,
        interiorImage: '/palace/rooms/kitchen-pantry.jpg',
        interiorVocab: [
          { word: 'pasta', x: 25, y: 35 }, { word: 'riso', x: 55, y: 30 },
          { word: 'olio', x: 35, y: 55 }, { word: 'sale', x: 65, y: 50 },
          { word: 'zucchero', x: 45, y: 75 }, { word: 'pane', x: 75, y: 70 },
          { word: 'cucinare', x: 30, y: 85 },
        ]
      },
      { 
        id: 'stove', 
        name: 'The Stove', 
        nameIt: 'I Fornelli', 
        description: 'Cooking and preparation', 
        icon: '🔥', 
        categories: ['kitchen'], 
        x: 60, y: 55, width: 15, height: 15,
        interiorImage: '/palace/rooms/kitchen-stove.jpg',
        interiorVocab: [
          { word: 'pentola', x: 30, y: 40 }, { word: 'padella', x: 60, y: 35 },
          { word: 'coltello', x: 25, y: 65 }, { word: 'forchetta', x: 50, y: 60 },
          { word: 'cucchiaio', x: 75, y: 55 }, { word: 'tagliare', x: 40, y: 85 },
        ]
      },
      { 
        id: 'table', 
        name: 'The Table', 
        nameIt: 'Il Tavolo', 
        description: 'Dining and eating', 
        icon: '🍽️', 
        categories: ['restaurant'], 
        x: 25, y: 65, width: 20, height: 15,
        interiorImage: '/palace/rooms/kitchen-table.jpg',
        interiorVocab: [
          { word: 'piatto', x: 30, y: 45 }, { word: 'bicchiere', x: 60, y: 40 },
          { word: 'tovagliolo', x: 45, y: 65 }, { word: 'caffè', x: 75, y: 55 },
          { word: 'mangiare', x: 35, y: 80 },
        ]
      },
    ],
  },
  {
    id: 'library',
    name: 'Knowledge Hub',
    subtitle: 'Learning, Work & Technology',
    image: '/palace/rooms/library.jpg',
    description: 'La biblioteca e lo studio — master learning, work, and technology vocabulary.',
    categories: ['school', 'work', 'technology'],
    grammarFocus: 'questions, negation, and verb patterns',
    zones: [
      { id: 'bookshelf', name: 'The Bookshelf', nameIt: 'Lo Scaffale', description: 'School and books', icon: '📚', categories: ['school'], x: 30, y: 35, width: 25, height: 30, interiorImage: '/palace/rooms/library-books.jpg', interiorVocab: [{ word: 'leggere', x: 25, y: 35 }, { word: 'libro', x: 50, y: 30 }, { word: 'studiare', x: 40, y: 55 }, { word: 'imparare', x: 70, y: 45 }] },
      { id: 'desk-library', name: 'Study Desk', nameIt: 'La Scrivania', description: 'Study and work', icon: '📝', categories: ['work'], x: 60, y: 60, width: 20, height: 20, interiorImage: '/palace/rooms/library-desk.jpg', interiorVocab: [{ word: 'scrivere', x: 30, y: 40 }, { word: 'penna', x: 55, y: 35 }, { word: 'quaderno', x: 45, y: 60 }, { word: 'lavorare', x: 75, y: 50 }] },
      { id: 'computer-hub', name: 'Computer Station', nameIt: 'Il Computer', description: 'Technology and time', icon: '💻', categories: ['technology'], x: 85, y: 45, width: 12, height: 15, interiorImage: '/palace/rooms/library-computer.jpg', interiorVocab: [{ word: 'computer', x: 35, y: 35 }, { word: 'internet', x: 60, y: 40 }, { word: 'email', x: 50, y: 60 }] },
      { id: 'clock-wall', name: 'Clock', nameIt: "L'Orologio", description: 'Time and scheduling', icon: '🕐', categories: ['time'], x: 15, y: 25, width: 10, height: 15 },
    ],
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    subtitle: 'Family & Descriptions',
    image: '/palace/rooms/bedroom.jpg',
    description: 'Learn family members and master adjective agreement.',
    categories: ['bedroom', 'clothing'],
    grammarFocus: 'possessive adjectives & adjective agreement',
    zones: [
      { id: 'wardrobe', name: 'The Wardrobe', nameIt: "L'Armadio", description: 'Clothes and fashion', icon: '👔', categories: ['clothing'], x: 70, y: 40, width: 15, height: 30, interiorImage: '/palace/rooms/bedroom-wardrobe.jpg', interiorVocab: [{ word: 'camicia', x: 20, y: 30 }, { word: 'pantaloni', x: 50, y: 25 }, { word: 'gonna', x: 35, y: 50 }, { word: 'vestito', x: 65, y: 45 }, { word: 'cappotto', x: 40, y: 75 }, { word: 'cappello', x: 75, y: 70 }] },
      { id: 'bed', name: 'The Bed', nameIt: 'Il Letto', description: 'Rest and daily routine', icon: '🛏️', categories: ['bedroom'], x: 40, y: 55, width: 25, height: 20, interiorImage: '/palace/rooms/bedroom-bed.jpg', interiorVocab: [{ word: 'letto', x: 30, y: 40 }, { word: 'cuscino', x: 55, y: 35 }, { word: 'coperta', x: 40, y: 60 }, { word: 'lenzuolo', x: 70, y: 50 }, { word: 'lampada', x: 45, y: 80 }] },
      { id: 'photos', name: 'Family Photos', nameIt: 'Le Foto', description: 'Family and relationships', icon: '📷', categories: ['people'], x: 25, y: 30, width: 20, height: 15, interiorImage: '/palace/rooms/bedroom-photos.jpg', interiorVocab: [{ word: 'famiglia', x: 25, y: 35 }, { word: 'ragazzo', x: 55, y: 30 }, { word: 'ragazza', x: 40, y: 55 }, { word: 'bambino', x: 70, y: 45 }, { word: 'bambina', x: 35, y: 75 }] },
    ],
  },
  {
    id: 'bathroom',
    name: 'Bathroom',
    subtitle: 'Daily Routine & Reflexives',
    image: '/palace/rooms/bathroom.jpg',
    description: 'Il bagno — master daily routines and reflexive verbs.',
    categories: ['body', 'health'],
    grammarFocus: 'reflexive verbs (mi lavo, mi pettino) & daily routine',
    zones: [
      { id: 'sink', name: 'The Sink', nameIt: 'Il Lavandino', description: 'Washing and face', icon: '🚰', categories: ['body'], x: 25, y: 45, width: 20, height: 25, interiorImage: '/palace/rooms/bathroom-sink.jpg', interiorVocab: [{ word: 'lavarsi', x: 30, y: 40 }, { word: 'faccia', x: 50, y: 35 }, { word: 'mano', x: 70, y: 45 }, { word: 'denti', x: 40, y: 65 }, { word: 'collo', x: 60, y: 60 }, { word: 'spalla', x: 35, y: 80 }] },
      { id: 'shower', name: 'The Shower', nameIt: 'La Doccia', description: 'Bathing and body', icon: '🚿', categories: ['body'], x: 60, y: 35, width: 25, height: 35, interiorImage: '/palace/rooms/bathroom-shower.jpg', interiorVocab: [{ word: 'doccia', x: 40, y: 30 }, { word: 'asciugamano', x: 70, y: 50 }, { word: 'capelli', x: 55, y: 40 }, { word: 'schiena', x: 30, y: 60 }, { word: 'braccio', x: 65, y: 70 }, { word: 'gamba', x: 45, y: 80 }] },
      { id: 'cabinet', name: 'Medicine Cabinet', nameIt: 'L\'Armadietto', description: 'Health and care', icon: '💊', categories: ['health'], x: 85, y: 30, width: 12, height: 20, interiorImage: '/palace/rooms/bathroom-cabinet.jpg', interiorVocab: [{ word: 'medicina', x: 35, y: 35 }, { word: 'cerotto', x: 65, y: 45 }, { word: 'termometro', x: 45, y: 65 }, { word: 'dottore', x: 75, y: 60 }, { word: 'infermiere', x: 40, y: 85 }] },
    ],
  },
  {
    id: 'garden',
    name: 'Garden',
    subtitle: 'Andare & Places',
    image: '/palace/rooms/garden.jpg',
    description: 'Il giardino del palazzo — learn the verb "andare" as you walk through the garden.',
    categories: ['outdoors'],
    grammarFocus: 'andare & preposizioni articolate',
    zones: [
      { id: 'flowers', name: 'The Flowers', nameIt: 'I Fiori', description: 'Nature and plants', icon: '🌸', categories: ['outdoors'], x: 65, y: 60, width: 20, height: 20, interiorImage: '/palace/rooms/garden-flowers.jpg', interiorVocab: [{ word: 'fiore', x: 25, y: 35 }, { word: 'albero', x: 55, y: 30 }, { word: 'pianta', x: 40, y: 55 }, { word: 'erba', x: 70, y: 45 }, { word: 'giardino', x: 35, y: 75 }] },
      { id: 'path', name: 'The Path', nameIt: 'Il Vialetto', description: 'Places and directions', icon: '🛤️', categories: ['buildings'], x: 30, y: 75, width: 25, height: 15, interiorImage: '/palace/rooms/garden-path.jpg', interiorVocab: [{ word: 'via', x: 30, y: 40 }, { word: 'strada', x: 60, y: 35 }, { word: 'zona', x: 45, y: 60 }, { word: 'campo', x: 75, y: 50 }] },
      { id: 'sky', name: 'The Sky', nameIt: 'Il Cielo', description: 'Weather and seasons', icon: '☀️', categories: ['weather'], x: 50, y: 15, width: 30, height: 15, interiorImage: '/palace/rooms/garden-sky.jpg', interiorVocab: [{ word: 'cielo', x: 25, y: 30 }, { word: 'sole', x: 55, y: 25 }, { word: 'nuvola', x: 40, y: 50 }, { word: 'vento', x: 70, y: 45 }] },
    ],
  },
  {
    id: 'transport',
    name: 'Transport Hub',
    subtitle: 'Movement & Directions',
    image: '/palace/rooms/transport.jpg',
    description: 'La stazione — learn to navigate, buy tickets, and ask directions.',
    categories: ['transport'],
    grammarFocus: 'andare + dove, direzione, prepositions of place',
    zones: [
      { id: 'ticket-office', name: 'Ticket Office', nameIt: 'La Biglietteria', description: 'Buying tickets', icon: '🎫', categories: ['transport'], x: 20, y: 45, width: 22, height: 25, interiorImage: '/palace/rooms/transport-ticket.jpg', interiorVocab: [{ word: 'biglietto', x: 25, y: 35 }, { word: 'abbonamento', x: 55, y: 30 }, { word: 'soldi', x: 40, y: 55 }, { word: 'euro', x: 70, y: 45 }, { word: 'carta', x: 35, y: 75 }] },
      { id: 'platform', name: 'Platform', nameIt: 'Il Binario', description: 'Trains and departure', icon: '🚂', categories: ['transport'], x: 50, y: 40, width: 25, height: 30, interiorImage: '/palace/rooms/transport-platform.jpg', interiorVocab: [{ word: 'treno', x: 25, y: 30 }, { word: 'macchina', x: 55, y: 25 }, { word: 'taxi', x: 40, y: 50 }, { word: 'metro', x: 70, y: 40 }, { word: 'fermata', x: 35, y: 70 }] },
      { id: 'street', name: 'Street Exit', nameIt: 'L\'Uscita', description: 'Directions and navigation', icon: '🚶', categories: ['buildings'], x: 80, y: 50, width: 18, height: 25, interiorImage: '/palace/rooms/transport-street.jpg', interiorVocab: [{ word: 'autobus', x: 25, y: 35 }, { word: 'bicicletta', x: 55, y: 30 }, { word: 'moto', x: 40, y: 55 }, { word: 'tram', x: 70, y: 45 }, { word: 'strada', x: 35, y: 75 }] },
    ],
  },
  {
    id: 'living-room',
    name: 'Living Room',
    subtitle: 'Modal Verbs',
    image: '/palace/rooms/living-room.jpg',
    description: 'Express ability, desire, and obligation with modal verbs.',
    categories: ['home', 'freetime'],
    grammarFocus: 'modal verbs: potere, volere, dovere',
    zones: [
      { id: 'sofa', name: 'The Sofa', nameIt: 'Il Divano', description: 'Relaxation and free time', icon: '🛋️', categories: ['freetime'], x: 40, y: 60, width: 25, height: 20, interiorImage: '/palace/rooms/living-room-sofa.jpg', interiorVocab: [{ word: 'divano', x: 25, y: 35 }, { word: 'poltrona', x: 55, y: 30 }, { word: 'tappeto', x: 40, y: 55 }, { word: 'tavolino', x: 70, y: 45 }] },
      { id: 'tv', name: 'The TV', nameIt: 'La TV', description: 'Entertainment and media', icon: '📺', categories: ['technology', 'freetime'], x: 70, y: 45, width: 15, height: 15, interiorImage: '/palace/rooms/living-room-tv.jpg', interiorVocab: [{ word: 'televisione', x: 25, y: 35 }, { word: 'tv', x: 55, y: 30 }, { word: 'radio', x: 40, y: 55 }, { word: 'schermo', x: 70, y: 45 }] },
      { id: 'furniture', name: 'Furniture', nameIt: 'I Mobili', description: 'Home items', icon: '🏠', categories: ['home'], x: 20, y: 45, width: 15, height: 20, interiorImage: '/palace/rooms/living-room-furniture.jpg', interiorVocab: [{ word: 'libreria', x: 25, y: 35 }, { word: 'quadro', x: 55, y: 30 }, { word: 'tenda', x: 40, y: 55 }, { word: 'lampada', x: 70, y: 45 }] },
    ],
  },
  {
    id: 'supermarket',
    name: 'Supermarket',
    subtitle: 'Shopping & Numbers',
    image: '/palace/rooms/supermarket.jpg',
    description: 'Il supermercato — learn to shop, count, and pay.',
    categories: ['shop', 'kitchen'],
    grammarFocus: 'numbers, prices & shopping expressions',
    zones: [
      { id: 'produce', name: 'Fresh Produce', nameIt: 'Frutta e Verdura', description: 'Fruits and vegetables', icon: '🍎', categories: ['kitchen'], x: 20, y: 50, width: 25, height: 30, interiorImage: '/palace/rooms/supermarket-produce.jpg', interiorVocab: [{ word: 'mela', x: 25, y: 35 }, { word: 'arancia', x: 50, y: 40 }, { word: 'pomodoro', x: 35, y: 55 }, { word: 'comprare', x: 70, y: 60 }] },
      { id: 'dairy', name: 'Dairy Section', nameIt: 'Latticini', description: 'Milk and cheese', icon: '🧀', categories: ['kitchen'], x: 50, y: 45, width: 20, height: 25, interiorImage: '/palace/rooms/supermarket-dairy.jpg', interiorVocab: [{ word: 'latte', x: 30, y: 40 }, { word: 'formaggio', x: 60, y: 35 }, { word: 'uova', x: 45, y: 60 }] },
      { id: 'checkout', name: 'Checkout', nameIt: 'La Cassa', description: 'Paying and prices', icon: '💰', categories: ['shop'], x: 80, y: 55, width: 18, height: 20, interiorImage: '/palace/rooms/supermarket-checkout.jpg', interiorVocab: [{ word: 'pagare', x: 35, y: 45 }, { word: 'prezzo', x: 65, y: 40 }, { word: 'soldi', x: 50, y: 65 }, { word: 'scontrino', x: 75, y: 55 }] },
    ],
  },
  {
    id: 'cafe',
    name: 'Café',
    subtitle: 'Ordering & Social',
    image: '/palace/rooms/cafe.jpg',
    description: 'Il caffè — master ordering, social interaction, and café culture.',
    categories: ['restaurant', 'people'],
    grammarFocus: 'vorrei, posso, conditional politeness',
    zones: [
      { id: 'counter', name: 'The Counter', nameIt: 'Il Bancone', description: 'Ordering coffee', icon: '☕', categories: ['restaurant'], x: 35, y: 40, width: 30, height: 20, interiorImage: '/palace/rooms/cafe-counter.jpg', interiorVocab: [{ word: 'caffè', x: 30, y: 35 }, { word: 'vorrei', x: 55, y: 30 }, { word: 'cornetto', x: 45, y: 55 }, { word: 'posso', x: 70, y: 45 }] },
      { id: 'table-cafe', name: 'Table', nameIt: 'Il Tavolo', description: 'Sitting and socializing', icon: '🪑', categories: ['restaurant'], x: 70, y: 60, width: 25, height: 20, interiorImage: '/palace/rooms/cafe-table.jpg', interiorVocab: [{ word: 'mangiare', x: 35, y: 40 }, { word: 'bere', x: 60, y: 35 }, { word: 'amico', x: 45, y: 60 }, { word: 'parlare', x: 75, y: 50 }] },
    ],
  },
  {
    id: 'gallery',
    name: 'Gallery',
    subtitle: 'Passato Prossimo',
    image: '/palace/rooms/gallery.jpg',
    description: 'Learn the passato prossimo to talk about completed actions.',
    categories: ['emotions', 'health'],
    grammarFocus: 'passato prossimo: avere/essere + participio passato',
    zones: [
      { id: 'paintings', name: 'The Paintings', nameIt: 'I Quadri', description: 'Emotions and feelings', icon: '🎨', categories: ['emotions'], x: 40, y: 35, width: 25, height: 20, interiorImage: '/palace/rooms/gallery-city.jpg', interiorVocab: [{ word: 'città', x: 25, y: 35 }, { word: 'via', x: 55, y: 30 }, { word: 'strada', x: 40, y: 55 }, { word: 'area', x: 70, y: 45 }, { word: 'spazio', x: 35, y: 75 }] },
      { id: 'pharmacy', name: 'Medicine Cabinet', nameIt: 'Armadietto Medicinale', description: 'Health and body', icon: '💊', categories: ['health'], x: 75, y: 50, width: 15, height: 20, interiorImage: '/palace/rooms/gallery-buildings.jpg', interiorVocab: [{ word: 'centro', x: 25, y: 35 }, { word: 'livello', x: 55, y: 30 }, { word: 'zona', x: 40, y: 55 }, { word: 'ospedale', x: 70, y: 45 }, { word: 'farmacia', x: 35, y: 75 }] },
      { id: 'shopping', name: 'Gift Shop', nameIt: 'Il Negozio', description: 'Shopping and commerce', icon: '🛍️', categories: ['shop'], x: 20, y: 60, width: 15, height: 15, interiorImage: '/palace/rooms/gallery-shop.jpg', interiorVocab: [{ word: 'negozio', x: 30, y: 40 }, { word: 'prezzo', x: 60, y: 35 }, { word: 'mercato', x: 45, y: 60 }] },
    ],
  },
];

export const getRoomById = (id: string): Room | undefined => {
  return rooms.find((room) => room.id === id);
};

export const getAllRooms = (): Room[] => {
  return rooms;
};

export const getAdjacentRooms = (id: string): Room[] => {
  const adjacencyMap: Record<string, string[]> = {
    'entrance-hall': ['kitchen', 'library', 'living-room'],
    'kitchen': ['entrance-hall', 'garden', 'cafe'],
    'library': ['entrance-hall', 'bedroom'],
    'bedroom': ['library', 'living-room', 'bathroom'],
    'bathroom': ['bedroom'],
    'garden': ['kitchen', 'gallery', 'supermarket'],
    'transport': ['supermarket', 'cafe'],
    'supermarket': ['garden', 'cafe', 'transport'],
    'cafe': ['kitchen', 'supermarket', 'transport'],
    'living-room': ['entrance-hall', 'bedroom', 'gallery'],
    'gallery': ['living-room', 'garden'],
  };
  const adjacentIds = adjacencyMap[id] || [];
  return adjacentIds
    .map((adjId) => getRoomById(adjId))
    .filter((r): r is Room => r !== undefined);
};

// Get all rooms up to and including the current room (for cumulative vocabulary)
export const getRoomsUpTo = (id: string): Room[] => {
  const currentIndex = rooms.findIndex((r) => r.id === id);
  if (currentIndex === -1) return [];
  return rooms.slice(0, currentIndex + 1);
};

// Get all categories from rooms up to the current room
export const getCumulativeCategories = (id: string): string[] => {
  const roomsUpTo = getRoomsUpTo(id);
  const allCategories = roomsUpTo.flatMap((r) => [
    ...r.categories,
    ...r.zones.flatMap((z) => z.categories),
  ]);
  return Array.from(new Set(allCategories));
};
