// School Palace — Art Room
// English source layer (truth layer)
// A1 level, concrete objects only for image pins

import type { Room } from '../../types';

// ============================================================================
// ROOM DEFINITION
// ============================================================================

export const artRoomRoom: Room = {
  id: 'art-room',
  name: 'Art Room',
  subtitle: 'Create & Colour',
  nameNative: "Aula d'Arte",
  image: 'rooms/school/art-room.jpg',
  description: 'Where you paint, draw, cut, stick, and make beautiful things.',
  grammarFocus: 'colours, shapes & imperatives',
  vocabularyIds: [
    // Supplies
    'supply-paint', 'supply-brush', 'supply-pencil', 'supply-crayon', 'supply-marker',
    'supply-chalk', 'supply-palette', 'supply-canvas', 'supply-paper', 'supply-card',
    'supply-glue', 'supply-scissors', 'supply-tape', 'supply-stapler', 'supply-ruler',
    // Colours & Shapes
    'colour-red', 'colour-blue', 'colour-yellow', 'colour-green', 'colour-orange',
    'colour-purple', 'colour-pink', 'colour-brown', 'colour-black', 'colour-white',
    'shape-circle', 'shape-square', 'shape-triangle', 'shape-rectangle', 'shape-star',
    // Making Art
    'make-draw', 'make-paint', 'make-cut', 'make-stick', 'make-fold',
    'make-tear', 'make-mix', 'make-colour', 'make-trace', 'make-sketch',
    'make-sculpt', 'make-collage', 'make-decorate', 'make-design', 'make-create',
  ],
  zones: [
    {
      id: 'art-supplies',
      name: 'Supplies',
      nameNative: 'Materiale',
      description: 'What you make art with',
      icon: '🎨',
      x: 25,
      y: 30,
      width: 35,
      height: 25,
      interiorImage: 'rooms/school/art-supplies.jpg',
      interiorVocab: [
        { wordId: 'supply-paint', x: 20, y: 25 },
        { wordId: 'supply-brush', x: 50, y: 20 },
        { wordId: 'supply-pencil', x: 80, y: 25 },
        { wordId: 'supply-crayon', x: 25, y: 50 },
        { wordId: 'supply-marker', x: 55, y: 45 },
        { wordId: 'supply-chalk', x: 80, y: 50 },
        { wordId: 'supply-palette', x: 15, y: 70 },
        { wordId: 'supply-canvas', x: 40, y: 70 },
        { wordId: 'supply-paper', x: 65, y: 70 },
        { wordId: 'supply-card', x: 85, y: 75 },
        { wordId: 'supply-glue', x: 20, y: 90 },
        { wordId: 'supply-scissors', x: 45, y: 90 },
        { wordId: 'supply-tape', x: 65, y: 90 },
        { wordId: 'supply-stapler', x: 80, y: 90 },
        { wordId: 'supply-ruler', x: 90, y: 60 },
      ],
    },
    {
      id: 'colours-shapes',
      name: 'Colours & Shapes',
      nameNative: 'Colori e Forme',
      description: 'What you see and use',
      icon: '🔴',
      x: 60,
      y: 55,
      width: 30,
      height: 25,
      interiorImage: 'rooms/school/art-colours.jpg',
      interiorVocab: [
        { wordId: 'colour-red', x: 20, y: 20 },
        { wordId: 'colour-blue', x: 50, y: 20 },
        { wordId: 'colour-yellow', x: 80, y: 20 },
        { wordId: 'colour-green', x: 20, y: 45 },
        { wordId: 'colour-orange', x: 50, y: 45 },
        { wordId: 'colour-purple', x: 80, y: 45 },
        { wordId: 'colour-pink', x: 20, y: 65 },
        { wordId: 'colour-brown', x: 50, y: 65 },
        { wordId: 'colour-black', x: 80, y: 65 },
        { wordId: 'colour-white', x: 20, y: 85 },
        { wordId: 'shape-circle', x: 45, y: 85 },
        { wordId: 'shape-square', x: 65, y: 85 },
        { wordId: 'shape-triangle', x: 80, y: 85 },
        { wordId: 'shape-rectangle', x: 35, y: 95 },
        { wordId: 'shape-star', x: 60, y: 95 },
      ],
    },
    {
      id: 'making-art',
      name: 'Making Art',
      nameNative: 'Creare',
      description: 'What you do in art class',
      icon: '✂️',
      x: 20,
      y: 60,
      width: 35,
      height: 25,
      interiorImage: 'rooms/school/art-making.jpg',
      interiorVocab: [
        { wordId: 'make-draw', x: 20, y: 20 },
        { wordId: 'make-paint', x: 50, y: 20 },
        { wordId: 'make-cut', x: 80, y: 20 },
        { wordId: 'make-stick', x: 20, y: 45 },
        { wordId: 'make-fold', x: 50, y: 45 },
        { wordId: 'make-tear', x: 80, y: 45 },
        { wordId: 'make-mix', x: 20, y: 65 },
        { wordId: 'make-colour', x: 50, y: 65 },
        { wordId: 'make-trace', x: 80, y: 65 },
        { wordId: 'make-sketch', x: 20, y: 85 },
        { wordId: 'make-sculpt', x: 40, y: 85 },
        { wordId: 'make-collage', x: 60, y: 85 },
        { wordId: 'make-decorate', x: 75, y: 85 },
        { wordId: 'make-design', x: 30, y: 95 },
        { wordId: 'make-create', x: 55, y: 95 },
      ],
    },
  ],
  grammarPoints: [
    {
      id: 'art-colours',
      title: 'Colours',
      explanation: 'Naming colours and shapes',
      example: 'It is red. It is a circle.',
      color: '#10B981',
    },
    {
      id: 'art-imperatives',
      title: 'Imperatives',
      explanation: 'Giving art instructions',
      example: 'Cut the paper. Stick it here. Mix the colours.',
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

export const artRoomVocabulary: SchoolConcept[] = [
  // === SUPPLIES ===
  { id: 'supply-paint', emoji: '🎨', en: { word: 'paint', phrase: 'I use red paint.', context: 'Material' }, it: { word: 'pittura', phrase: 'Uso la pittura rossa.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'supply-brush', emoji: '🖌️', en: { word: 'brush', phrase: 'Wash the brush.', context: 'Tool' }, it: { word: 'pennello', phrase: 'Lava il pennello.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'supply-pencil', emoji: '✏️', en: { word: 'pencil', phrase: 'Draw with a pencil.', context: 'Tool' }, it: { word: 'matita', phrase: 'Disegna con la matita.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'supply-crayon', emoji: '🖍️', en: { word: 'crayon', phrase: 'Colour with a crayon.', context: 'Tool' }, it: { word: 'pastello', phrase: 'Colora con il pastello.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'supply-marker', emoji: '🖊️', en: { word: 'marker', phrase: 'Use a thick marker.', context: 'Tool' }, it: { word: 'pennarello', phrase: 'Usa un pennarello grosso.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'supply-chalk', emoji: '🖍️', en: { word: 'chalk', phrase: 'Write with chalk.', context: 'Tool' }, it: { word: 'gesso', phrase: 'Scrivi con il gesso.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'supply-palette', emoji: '🎨', en: { word: 'palette', phrase: 'Mix on the palette.', context: 'Tool' }, it: { word: 'tavolozza', phrase: 'Mescola sulla tavolozza.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'supply-canvas', emoji: '🖼️', en: { word: 'canvas', phrase: 'Paint on the canvas.', context: 'Surface' }, it: { word: 'tela', phrase: 'Dipingi sulla tela.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'supply-paper', emoji: '📄', en: { word: 'paper', phrase: 'Get a piece of paper.', context: 'Material' }, it: { word: 'carta', phrase: 'Prendi un foglio di carta.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'supply-card', emoji: '🟦', en: { word: 'card', phrase: 'Cut the card.', context: 'Material' }, it: { word: 'cartoncino', phrase: 'Taglia il cartoncino.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'supply-glue', emoji: '🧴', en: { word: 'glue', phrase: 'Put glue on the paper.', context: 'Adhesive' }, it: { word: 'colla', phrase: 'Metti la colla sulla carta.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'supply-scissors', emoji: '✂️', en: { word: 'scissors', phrase: 'Cut with scissors.', context: 'Tool' }, it: { word: 'forbici', phrase: 'Taglia con le forbici.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'supply-tape', emoji: '📎', en: { word: 'tape', phrase: 'Stick it with tape.', context: 'Adhesive' }, it: { word: 'nastro adesivo', phrase: 'Attaccalo con il nastro.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'supply-stapler', emoji: '📎', en: { word: 'stapler', phrase: 'Use the stapler.', context: 'Tool' }, it: { word: 'cucitrice', phrase: 'Usa la cucitrice.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'supply-ruler', emoji: '📏', en: { word: 'ruler', phrase: 'Draw a line with the ruler.', context: 'Tool' }, it: { word: 'righello', phrase: 'Disegna una linea con il righello.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },

  // === COLOURS & SHAPES ===
  { id: 'colour-red', emoji: '🔴', en: { word: 'red', phrase: 'The apple is red.', context: 'Colour' }, it: { word: 'rosso', phrase: 'La mela è rossa.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'colour-blue', emoji: '🔵', en: { word: 'blue', phrase: 'The sky is blue.', context: 'Colour' }, it: { word: 'blu', phrase: 'Il cielo è blu.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'colour-yellow', emoji: '🟡', en: { word: 'yellow', phrase: 'The sun is yellow.', context: 'Colour' }, it: { word: 'giallo', phrase: 'Il sole è giallo.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'colour-green', emoji: '🟢', en: { word: 'green', phrase: 'The grass is green.', context: 'Colour' }, it: { word: 'verde', phrase: 'L'erba è verde.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'colour-orange', emoji: '🟠', en: { word: 'orange', phrase: 'The orange is orange.', context: 'Colour' }, it: { word: 'arancione', phrase: 'L'arancia è arancione.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'colour-purple', emoji: '🟣', en: { word: 'purple', phrase: 'I like purple.', context: 'Colour' }, it: { word: 'viola', phrase: 'Mi piace il viola.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'colour-pink', emoji: '🩷', en: { word: 'pink', phrase: 'The flower is pink.', context: 'Colour' }, it: { word: 'rosa', phrase: 'Il fiore è rosa.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'colour-brown', emoji: '🟤', en: { word: 'brown', phrase: 'The bear is brown.', context: 'Colour' }, it: { word: 'marrone', phrase: 'L'orso è marrone.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'colour-black', emoji: '⚫', en: { word: 'black', phrase: 'The cat is black.', context: 'Colour' }, it: { word: 'nero', phrase: 'Il gatto è nero.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'colour-white', emoji: '⚪', en: { word: 'white', phrase: 'The snow is white.', context: 'Colour' }, it: { word: 'bianco', phrase: 'La neve è bianca.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'shape-circle', emoji: '⭕', en: { word: 'circle', phrase: 'Draw a circle.', context: 'Shape' }, it: { word: 'cerchio', phrase: 'Disegna un cerchio.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'shape-square', emoji: '⬜', en: { word: 'square', phrase: 'Cut a square.', context: 'Shape' }, it: { word: 'quadrato', phrase: 'Taglia un quadrato.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'shape-triangle', emoji: '🔺', en: { word: 'triangle', phrase: 'A triangle has three sides.', context: 'Shape' }, it: { word: 'triangolo', phrase: 'Il triangolo ha tre lati.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'shape-rectangle', emoji: '▭', en: { word: 'rectangle', phrase: 'The door is a rectangle.', context: 'Shape' }, it: { word: 'rettangolo', phrase: 'La porta è un rettangolo.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'shape-star', emoji: '⭐', en: { word: 'star', phrase: 'Draw a star.', context: 'Shape' }, it: { word: 'stella', phrase: 'Disegna una stella.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },

  // === MAKING ART ===
  { id: 'make-draw', emoji: '✏️', en: { word: 'draw', phrase: 'Draw a house.', context: 'Action' }, it: { word: 'disegnare', phrase: 'Disegna una casa.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'make-paint', emoji: '🎨', en: { word: 'paint', phrase: 'Paint the sky blue.', context: 'Action' }, it: { word: 'dipingere', phrase: 'Dipingi il cielo di blu.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'make-cut', emoji: '✂️', en: { word: 'cut', phrase: 'Cut the paper.', context: 'Action' }, it: { word: 'tagliare', phrase: 'Taglia la carta.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'make-stick', emoji: '🧴', en: { word: 'stick', phrase: 'Stick the pieces together.', context: 'Action' }, it: { word: 'incollare', phrase: 'Incolla i pezzi insieme.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'make-fold', emoji: '📃', en: { word: 'fold', phrase: 'Fold the paper in half.', context: 'Action' }, it: { word: 'piegare', phrase: 'Piega la carta a metà.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'make-tear', emoji: '📄', en: { word: 'tear', phrase: 'Tear the paper into strips.', context: 'Action' }, it: { word: 'strappare', phrase: 'Strappa la carta a strisce.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'make-mix', emoji: '🥣', en: { word: 'mix', phrase: 'Mix red and blue.', context: 'Action' }, it: { word: 'mescolare', phrase: 'Mescola il rosso e il blu.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'make-colour', emoji: '🖍️', en: { word: 'colour', phrase: 'Colour the picture.', context: 'Action' }, it: { word: 'colorare', phrase: 'Colora il disegno.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'make-trace', emoji: '📏', en: { word: 'trace', phrase: 'Trace around the shape.', context: 'Action' }, it: { word: 'tracciare', phrase: 'Traccia intorno alla forma.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'make-sketch', emoji: '✏️', en: { word: 'sketch', phrase: 'Sketch the tree.', context: 'Action' }, it: { word: 'schizzare', phrase: 'Fai uno schizzo dell'albero.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'make-sculpt', emoji: '🏺', en: { word: 'sculpt', phrase: 'Sculpt with clay.', context: 'Action' }, it: { word: 'scolpire', phrase: 'Scolpisci con l'argilla.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'make-collage', emoji: '🖼️', en: { word: 'collage', phrase: 'Make a collage.', context: 'Project' }, it: { word: 'collage', phrase: 'Fai un collage.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'make-decorate', emoji: '✨', en: { word: 'decorate', phrase: 'Decorate the card.', context: 'Action' }, it: { word: 'decorare', phrase: 'Decora il biglietto.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'make-design', emoji: '📐', en: { word: 'design', phrase: 'Design a poster.', context: 'Action' }, it: { word: 'progettare', phrase: 'Progetta un poster.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'make-create', emoji: '🌟', en: { word: 'create', phrase: 'Create something new.', context: 'Action' }, it: { word: 'creare', phrase: 'Crea qualcosa di nuovo.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
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

export const artRoomDialogues: SchoolDialogue[] = [
  {
    id: 'art-what-colour',
    scenario: 'Choosing colours',
    turns: [
      { speaker: 'teacher', en: 'What colour do you want?' },
      { speaker: 'student', en: 'I want blue and yellow.' },
      { speaker: 'teacher', en: 'Mix them. You get green.' },
      { speaker: 'student', en: 'It is magic!' },
    ],
    natural: [
      { speaker: 'teacher', en: 'What colour do you want?' },
      { speaker: 'student', en: 'I want blue and yellow.' },
      { speaker: 'teacher', en: 'Mix them together. You get green.' },
      { speaker: 'student', en: "It's magic!" },
    ]},
  
  {
    id: 'art-draw-shape',
    scenario: 'Drawing shapes',
    turns: [
      { speaker: 'teacher', en: 'Draw a circle and a square.' },
      { speaker: 'student', en: 'Can I draw a star too?' },
      { speaker: 'teacher', en: 'Yes. Use the ruler for the triangle.' },
      { speaker: 'student', en: 'I did it.' },
    ],
    natural: [
      { speaker: 'teacher', en: 'Draw a circle and a square.' },
      { speaker: 'student', en: 'Can I draw a star too?' },
      { speaker: 'teacher', en: 'Yeah. Use the ruler for the triangle.' },
      { speaker: 'student', en: 'I did it.' },
    ]},
  
  {
    id: 'art-cut-stick',
    scenario: 'Cutting and sticking',
    turns: [
      { speaker: 'peer', en: 'Can I borrow the scissors?' },
      { speaker: 'student', en: 'Yes. Here you are.' },
      { speaker: 'peer', en: 'Thank you. Pass the glue please.' },
      { speaker: 'student', en: 'Here. Be careful with the cap.' },
    ],
    natural: [
      { speaker: 'peer', en: 'Can I borrow the scissors?' },
      { speaker: 'student', en: "Yeah. Here you go." },
      { speaker: 'peer', en: 'Thanks. Pass the glue.' },
      { speaker: 'student', en: 'Here. Be careful with the cap.' },
    ]},
  
  {
    id: 'art-painting',
    scenario: 'Painting a picture',
    turns: [
      { speaker: 'teacher', en: 'Use the brush for the sky.' },
      { speaker: 'student', en: 'I want to paint a rainbow.' },
      { speaker: 'teacher', en: 'Use all the colours then.' },
      { speaker: 'student', en: 'It is beautiful.' },
    ],
    natural: [
      { speaker: 'teacher', en: 'Use the brush for the sky.' },
      { speaker: 'student', en: 'I wanna paint a rainbow.' },
      { speaker: 'teacher', en: 'Use all the colours then.' },
      { speaker: 'student', en: "It's beautiful." },
    ]},
  
  {
    id: 'art-collage',
    scenario: 'Making a collage',
    turns: [
      { speaker: 'peer', en: 'What are you making?' },
      { speaker: 'student', en: 'A collage with paper and card.' },
      { speaker: 'peer', en: 'Can I help?' },
      { speaker: 'student', en: 'Yes. Tear the paper into small pieces.' },
    ],
    natural: [
      { speaker: 'peer', en: 'What are you making?' },
      { speaker: 'student', en: 'A collage with paper and card.' },
      { speaker: 'peer', en: 'Can I help?' },
      { speaker: 'student', en: 'Yeah. Tear the paper into small pieces.' },
    ]},
  
  {
    id: 'art-clean-up',
    scenario: 'Cleaning up',
    turns: [
      { speaker: 'teacher', en: 'Wash your brush please.' },
      { speaker: 'student', en: 'Where do I put the paint?' },
      { speaker: 'teacher', en: 'On the shelf. Close the pots.' },
      { speaker: 'student', en: 'I clean my table too.' },
    ],
    natural: [
      { speaker: 'teacher', en: 'Wash your brush.' },
      { speaker: 'student', en: 'Where do I put the paint?' },
      { speaker: 'teacher', en: 'On the shelf. Put the lids on.' },
      { speaker: 'student', en: "I'll clean my table too." },
    ]},
  
  {
    id: 'art-show-work',
    scenario: 'Showing your work',
    turns: [
      { speaker: 'student', en: 'Look at my picture.' },
      { speaker: 'peer', en: 'It is very nice. I like the colours.' },
      { speaker: 'student', en: 'Thank you. I worked hard.' },
      { speaker: 'peer', en: 'You are a good artist.' },
    ],
    natural: [
      { speaker: 'student', en: 'Look at my picture.' },
      { speaker: 'peer', en: "It's very nice. I like the colours." },
      { speaker: 'student', en: 'Thanks. I worked hard on it.' },
      { speaker: 'peer', en: "You're a good artist." },
    ]},
  
  {
    id: 'art-missing-tool',
    scenario: 'Finding a tool',
    turns: [
      { speaker: 'student', en: 'I cannot find my pencil.' },
      { speaker: 'teacher', en: 'Look in the pencil box.' },
      { speaker: 'student', en: 'It is not there.' },
      { speaker: 'teacher', en: 'Take a new one from the table.' },
      { speaker: 'student', en: 'Thank you.' },
    ],
    natural: [
      { speaker: 'student', en: "I can't find my pencil." },
      { speaker: 'teacher', en: 'Check the pencil box.' },
      { speaker: 'student', en: "It's not there." },
      { speaker: 'teacher', en: 'Take a new one from the table.' },
      { speaker: 'student', en: 'Thanks.' },
    ]},
  
];

// ============================================================================
// IMAGE PROMPTS (for ComfyUI / Kimi generation)
// ============================================================================

export const artRoomImagePrompts: Record<string, string> = {
  'art-supplies': `A primary school art room table covered with art supplies ready for a lesson.
Visible items: pots of bright paint, paint brush with wooden handle, yellow pencil, wax crayon, thick marker pen, coloured chalk sticks, artist palette with paint blobs, blank canvas on easel, stack of white paper, coloured card sheets, bottle of white glue, child-safe scissors, roll of sticky tape, small stapler, plastic ruler.
Style: warm children's book illustration, soft colours, friendly, clear outlines, European primary school, no text, no labels, no watermarks.`,

  'colours-shapes': `A bright primary school art room wall showing colours and shapes for learning.
Visible items: red circle painted on paper, blue square, yellow sun shape, green leaf shape, orange fruit shape, purple flower, pink heart, brown tree trunk, black cat shape, white cloud, large circle poster, square poster, triangle poster, rectangle poster, star poster.
Style: warm children's book illustration, soft colours, friendly, clear outlines, European primary school, no text, no labels, no watermarks.`,

  'making-art': `Children making art together in a busy primary school art room.
Visible items: child drawing with pencil, child painting on paper, child cutting paper with scissors, child sticking paper with glue, child folding paper into shape, child tearing coloured paper, child mixing paint on palette, child colouring with crayon, child tracing around a shape, child sketching in notebook, child sculpting clay, child making collage from magazine pieces, child decorating a card with stickers, child designing a pattern, child creating a big picture.
Style: warm children's book illustration, soft colours, friendly, clear outlines, European primary school, no text, no labels, no watermarks.`,
};
