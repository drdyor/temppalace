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
  { id: 'supply-paint', emoji: '🎨', en: { word: 'paint', phrase: 'I use red paint.', context: 'Material' } },
  { id: 'supply-brush', emoji: '🖌️', en: { word: 'brush', phrase: 'Wash the brush.', context: 'Tool' } },
  { id: 'supply-pencil', emoji: '✏️', en: { word: 'pencil', phrase: 'Draw with a pencil.', context: 'Tool' } },
  { id: 'supply-crayon', emoji: '🖍️', en: { word: 'crayon', phrase: 'Colour with a crayon.', context: 'Tool' } },
  { id: 'supply-marker', emoji: '🖊️', en: { word: 'marker', phrase: 'Use a thick marker.', context: 'Tool' } },
  { id: 'supply-chalk', emoji: '🖍️', en: { word: 'chalk', phrase: 'Write with chalk.', context: 'Tool' } },
  { id: 'supply-palette', emoji: '🎨', en: { word: 'palette', phrase: 'Mix on the palette.', context: 'Tool' } },
  { id: 'supply-canvas', emoji: '🖼️', en: { word: 'canvas', phrase: 'Paint on the canvas.', context: 'Surface' } },
  { id: 'supply-paper', emoji: '📄', en: { word: 'paper', phrase: 'Get a piece of paper.', context: 'Material' } },
  { id: 'supply-card', emoji: '🟦', en: { word: 'card', phrase: 'Cut the card.', context: 'Material' } },
  { id: 'supply-glue', emoji: '🧴', en: { word: 'glue', phrase: 'Put glue on the paper.', context: 'Adhesive' } },
  { id: 'supply-scissors', emoji: '✂️', en: { word: 'scissors', phrase: 'Cut with scissors.', context: 'Tool' } },
  { id: 'supply-tape', emoji: '📎', en: { word: 'tape', phrase: 'Stick it with tape.', context: 'Adhesive' } },
  { id: 'supply-stapler', emoji: '📎', en: { word: 'stapler', phrase: 'Use the stapler.', context: 'Tool' } },
  { id: 'supply-ruler', emoji: '📏', en: { word: 'ruler', phrase: 'Draw a line with the ruler.', context: 'Tool' } },

  // === COLOURS & SHAPES ===
  { id: 'colour-red', emoji: '🔴', en: { word: 'red', phrase: 'The apple is red.', context: 'Colour' } },
  { id: 'colour-blue', emoji: '🔵', en: { word: 'blue', phrase: 'The sky is blue.', context: 'Colour' } },
  { id: 'colour-yellow', emoji: '🟡', en: { word: 'yellow', phrase: 'The sun is yellow.', context: 'Colour' } },
  { id: 'colour-green', emoji: '🟢', en: { word: 'green', phrase: 'The grass is green.', context: 'Colour' } },
  { id: 'colour-orange', emoji: '🟠', en: { word: 'orange', phrase: 'The orange is orange.', context: 'Colour' } },
  { id: 'colour-purple', emoji: '🟣', en: { word: 'purple', phrase: 'I like purple.', context: 'Colour' } },
  { id: 'colour-pink', emoji: '🩷', en: { word: 'pink', phrase: 'The flower is pink.', context: 'Colour' } },
  { id: 'colour-brown', emoji: '🟤', en: { word: 'brown', phrase: 'The bear is brown.', context: 'Colour' } },
  { id: 'colour-black', emoji: '⚫', en: { word: 'black', phrase: 'The cat is black.', context: 'Colour' } },
  { id: 'colour-white', emoji: '⚪', en: { word: 'white', phrase: 'The snow is white.', context: 'Colour' } },
  { id: 'shape-circle', emoji: '⭕', en: { word: 'circle', phrase: 'Draw a circle.', context: 'Shape' } },
  { id: 'shape-square', emoji: '⬜', en: { word: 'square', phrase: 'Cut a square.', context: 'Shape' } },
  { id: 'shape-triangle', emoji: '🔺', en: { word: 'triangle', phrase: 'A triangle has three sides.', context: 'Shape' } },
  { id: 'shape-rectangle', emoji: '▭', en: { word: 'rectangle', phrase: 'The door is a rectangle.', context: 'Shape' } },
  { id: 'shape-star', emoji: '⭐', en: { word: 'star', phrase: 'Draw a star.', context: 'Shape' } },

  // === MAKING ART ===
  { id: 'make-draw', emoji: '✏️', en: { word: 'draw', phrase: 'Draw a house.', context: 'Action' } },
  { id: 'make-paint', emoji: '🎨', en: { word: 'paint', phrase: 'Paint the sky blue.', context: 'Action' } },
  { id: 'make-cut', emoji: '✂️', en: { word: 'cut', phrase: 'Cut the paper.', context: 'Action' } },
  { id: 'make-stick', emoji: '🧴', en: { word: 'stick', phrase: 'Stick the pieces together.', context: 'Action' } },
  { id: 'make-fold', emoji: '📃', en: { word: 'fold', phrase: 'Fold the paper in half.', context: 'Action' } },
  { id: 'make-tear', emoji: '📄', en: { word: 'tear', phrase: 'Tear the paper into strips.', context: 'Action' } },
  { id: 'make-mix', emoji: '🥣', en: { word: 'mix', phrase: 'Mix red and blue.', context: 'Action' } },
  { id: 'make-colour', emoji: '🖍️', en: { word: 'colour', phrase: 'Colour the picture.', context: 'Action' } },
  { id: 'make-trace', emoji: '📏', en: { word: 'trace', phrase: 'Trace around the shape.', context: 'Action' } },
  { id: 'make-sketch', emoji: '✏️', en: { word: 'sketch', phrase: 'Sketch the tree.', context: 'Action' } },
  { id: 'make-sculpt', emoji: '🏺', en: { word: 'sculpt', phrase: 'Sculpt with clay.', context: 'Action' } },
  { id: 'make-collage', emoji: '🖼️', en: { word: 'collage', phrase: 'Make a collage.', context: 'Project' } },
  { id: 'make-decorate', emoji: '✨', en: { word: 'decorate', phrase: 'Decorate the card.', context: 'Action' } },
  { id: 'make-design', emoji: '📐', en: { word: 'design', phrase: 'Design a poster.', context: 'Action' } },
  { id: 'make-create', emoji: '🌟', en: { word: 'create', phrase: 'Create something new.', context: 'Action' } },
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
  },
  {
    id: 'art-draw-shape',
    scenario: 'Drawing shapes',
    turns: [
      { speaker: 'teacher', en: 'Draw a circle and a square.' },
      { speaker: 'student', en: 'Can I draw a star too?' },
      { speaker: 'teacher', en: 'Yes. Use the ruler for the triangle.' },
      { speaker: 'student', en: 'I did it.' },
    ],
  },
  {
    id: 'art-cut-stick',
    scenario: 'Cutting and sticking',
    turns: [
      { speaker: 'peer', en: 'Can I borrow the scissors?' },
      { speaker: 'student', en: 'Yes. Here you are.' },
      { speaker: 'peer', en: 'Thank you. Pass the glue please.' },
      { speaker: 'student', en: 'Here. Be careful with the cap.' },
    ],
  },
  {
    id: 'art-painting',
    scenario: 'Painting a picture',
    turns: [
      { speaker: 'teacher', en: 'Use the brush for the sky.' },
      { speaker: 'student', en: 'I want to paint a rainbow.' },
      { speaker: 'teacher', en: 'Use all the colours then.' },
      { speaker: 'student', en: 'It is beautiful.' },
    ],
  },
  {
    id: 'art-collage',
    scenario: 'Making a collage',
    turns: [
      { speaker: 'peer', en: 'What are you making?' },
      { speaker: 'student', en: 'A collage with paper and card.' },
      { speaker: 'peer', en: 'Can I help?' },
      { speaker: 'student', en: 'Yes. Tear the paper into small pieces.' },
    ],
  },
  {
    id: 'art-clean-up',
    scenario: 'Cleaning up',
    turns: [
      { speaker: 'teacher', en: 'Wash your brush please.' },
      { speaker: 'student', en: 'Where do I put the paint?' },
      { speaker: 'teacher', en: 'On the shelf. Close the pots.' },
      { speaker: 'student', en: 'I clean my table too.' },
    ],
  },
  {
    id: 'art-show-work',
    scenario: 'Showing your work',
    turns: [
      { speaker: 'student', en: 'Look at my picture.' },
      { speaker: 'peer', en: 'It is very nice. I like the colours.' },
      { speaker: 'student', en: 'Thank you. I worked hard.' },
      { speaker: 'peer', en: 'You are a good artist.' },
    ],
  },
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
  },
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
