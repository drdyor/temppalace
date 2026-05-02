// School Palace — Science Lab
// English source layer (truth layer)
// A1 level, concrete objects only for image pins

import type { Room } from '../../types';

export const scienceLabRoom: Room = {
  id: 'science-lab',
  name: 'Science Lab',
  subtitle: 'Discover & Explore',
  nameNative: 'Laboratorio',
  image: 'rooms/school/science-lab.jpg',
  description: 'Where you look, test, mix, and find out how the world works.',
  grammarFocus: 'observation verbs & nature words',
  vocabularyIds: [
    'sci-microscope', 'sci-test-tube', 'sci-beaker', 'sci-flask', 'sci-magnifying-glass',
    'sci-pipette', 'sci-goggles', 'sci-apron', 'sci-gloves', 'sci-burner',
    'sci-tray', 'sci-scale', 'sci-ruler', 'sci-timer', 'sci-notebook',
    'sci-leaf', 'sci-flower', 'sci-seed', 'sci-rock', 'sci-soil',
    'sci-water', 'sci-air', 'sci-sun', 'sci-insect', 'sci-butterfly',
    'sci-ant', 'sci-spider', 'sci-worm', 'sci-snail', 'sci-frog',
    'sci-look', 'sci-see', 'sci-watch', 'sci-mix', 'sci-pour',
    'sci-stir', 'sci-measure', 'sci-weigh', 'sci-compare', 'sci-test',
    'sci-guess', 'sci-result', 'sci-change', 'sci-grow', 'sci-record',
  ],
  zones: [
    {
      id: 'lab-equipment',
      name: 'Lab Equipment',
      nameNative: 'Attrezzatura',
      description: 'Tools for experiments',
      icon: '🔬',
      x: 25, y: 30, width: 30, height: 25,
      interiorImage: 'rooms/school/science-equipment.jpg',
      interiorVocab: [
        { wordId: 'sci-microscope', x: 20, y: 25 }, { wordId: 'sci-test-tube', x: 50, y: 20 },
        { wordId: 'sci-beaker', x: 80, y: 25 }, { wordId: 'sci-flask', x: 25, y: 45 },
        { wordId: 'sci-magnifying-glass', x: 55, y: 40 }, { wordId: 'sci-pipette', x: 80, y: 45 },
        { wordId: 'sci-goggles', x: 15, y: 60 }, { wordId: 'sci-apron', x: 40, y: 60 },
        { wordId: 'sci-gloves', x: 65, y: 60 }, { wordId: 'sci-burner', x: 85, y: 60 },
        { wordId: 'sci-tray', x: 20, y: 80 }, { wordId: 'sci-scale', x: 45, y: 80 },
        { wordId: 'sci-ruler', x: 70, y: 80 }, { wordId: 'sci-timer', x: 30, y: 90 },
        { wordId: 'sci-notebook', x: 60, y: 90 },
      ],
    },
    {
      id: 'nature-animals',
      name: 'Nature & Animals',
      nameNative: 'Natura e Animali',
      description: 'Living things to study',
      icon: '🌿',
      x: 60, y: 30, width: 30, height: 25,
      interiorImage: 'rooms/school/science-nature.jpg',
      interiorVocab: [
        { wordId: 'sci-leaf', x: 20, y: 20 }, { wordId: 'sci-flower', x: 50, y: 20 },
        { wordId: 'sci-seed', x: 80, y: 20 }, { wordId: 'sci-rock', x: 20, y: 45 },
        { wordId: 'sci-soil', x: 50, y: 45 }, { wordId: 'sci-water', x: 80, y: 45 },
        { wordId: 'sci-air', x: 20, y: 65 }, { wordId: 'sci-sun', x: 45, y: 65 },
        { wordId: 'sci-insect', x: 70, y: 65 }, { wordId: 'sci-butterfly', x: 85, y: 65 },
        { wordId: 'sci-ant', x: 20, y: 85 }, { wordId: 'sci-spider', x: 40, y: 85 },
        { wordId: 'sci-worm', x: 60, y: 85 }, { wordId: 'sci-snail', x: 75, y: 85 },
        { wordId: 'sci-frog', x: 50, y: 95 },
      ],
    },
    {
      id: 'experiments',
      name: 'Experiments',
      nameNative: 'Esperimenti',
      description: 'What scientists do',
      icon: '⚗️',
      x: 40, y: 60, width: 35, height: 25,
      interiorImage: 'rooms/school/science-experiments.jpg',
      interiorVocab: [
        { wordId: 'sci-look', x: 20, y: 20 }, { wordId: 'sci-see', x: 50, y: 20 },
        { wordId: 'sci-watch', x: 80, y: 20 }, { wordId: 'sci-mix', x: 20, y: 45 },
        { wordId: 'sci-pour', x: 50, y: 45 }, { wordId: 'sci-stir', x: 80, y: 45 },
        { wordId: 'sci-measure', x: 20, y: 65 }, { wordId: 'sci-weigh', x: 45, y: 65 },
        { wordId: 'sci-compare', x: 70, y: 65 }, { wordId: 'sci-test', x: 85, y: 65 },
        { wordId: 'sci-guess', x: 20, y: 85 }, { wordId: 'sci-result', x: 45, y: 85 },
        { wordId: 'sci-change', x: 65, y: 85 }, { wordId: 'sci-grow', x: 80, y: 85 },
        { wordId: 'sci-record', x: 50, y: 95 },
      ],
    },
  ],
  grammarPoints: [
    { id: 'science-verbs', title: 'Science Verbs', explanation: 'What you do in experiments', example: 'Look. Mix. Pour. Measure.', color: '#10B981' },
    { id: 'science-description', title: 'Describing Changes', explanation: 'What happened to it?', example: 'It changed colour. It grew bigger.', color: '#F59E0B' },
  ],
};

export interface SchoolConcept {
  id: string; emoji?: string;
  en: { word: string; phrase?: string; context?: string };
  it?: { word: string; phrase?: string; gender?: 'masculine' | 'feminine' | 'none'; pronunciation?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
  fr?: { word: string; phrase?: string; gender?: 'masculine' | 'feminine' | 'none'; pronunciation?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
  mt?: { word: string; phrase?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
}

export const scienceLabVocabulary: SchoolConcept[] = [
  { id: 'sci-microscope', emoji: '🔬', en: { word: 'microscope', phrase: 'Look in the microscope.', context: 'Tool' }, it: { word: 'microscopio', phrase: 'Guarda nel microscopio.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-test-tube', emoji: '🧪', en: { word: 'test tube', phrase: 'Liquid in a test tube.', context: 'Container' }, it: { word: 'provetta', phrase: 'Liquido in una provetta.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-beaker', emoji: '🧪', en: { word: 'beaker', phrase: 'Pour into the beaker.', context: 'Container' }, it: { word: 'becher', phrase: 'Versa nel becher.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-flask', emoji: '⚗️', en: { word: 'flask', phrase: 'Mix in the flask.', context: 'Container' }, it: { word: 'pallone', phrase: 'Mescola nel pallone.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-magnifying-glass', emoji: '🔍', en: { word: 'magnifying glass', phrase: 'Look closer.', context: 'Tool' }, it: { word: 'lente', phrase: 'Guarda più da vicino.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-pipette', emoji: '💉', en: { word: 'pipette', phrase: 'Use the pipette.', context: 'Tool' }, it: { word: 'pipetta', phrase: 'Usa la pipetta.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-goggles', emoji: '🥽', en: { word: 'goggles', phrase: 'Wear your goggles.', context: 'Safety' }, it: { word: 'occhiali protettivi', phrase: 'Indossa gli occhiali protettivi.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-apron', emoji: '🥼', en: { word: 'apron', phrase: 'Put on the apron.', context: 'Safety' }, it: { word: 'grembiule', phrase: 'Metti il grembiule.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-gloves', emoji: '🧤', en: { word: 'gloves', phrase: 'Wear gloves.', context: 'Safety' }, it: { word: 'guanti', phrase: 'Indossa i guanti.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-burner', emoji: '🔥', en: { word: 'burner', phrase: 'Light the burner.', context: 'Heat' }, it: { word: 'bruciatore', phrase: 'Accendi il bruciatore.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-tray', emoji: '🥣', en: { word: 'tray', phrase: 'Put it on the tray.', context: 'Surface' }, it: { word: 'vassoio', phrase: 'Mettilo sul vassoio.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-scale', emoji: '⚖️', en: { word: 'scale', phrase: 'Weigh on the scale.', context: 'Measurement' }, it: { word: 'bilancia', phrase: 'Pesa sulla bilancia.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-ruler', emoji: '📏', en: { word: 'ruler', phrase: 'Measure with the ruler.', context: 'Measurement' }, it: { word: 'righello', phrase: 'Misura con il righello.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-timer', emoji: '⏱️', en: { word: 'timer', phrase: 'Set the timer.', context: 'Time' }, it: { word: 'timer', phrase: 'Imposta il timer.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-notebook', emoji: '📓', en: { word: 'notebook', phrase: 'Write in the notebook.', context: 'Record' }, it: { word: 'quaderno', phrase: 'Scrivi sul quaderno.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },

  { id: 'sci-leaf', emoji: '🍃', en: { word: 'leaf', phrase: 'A green leaf.', context: 'Plant' }, it: { word: 'foglia', phrase: 'Una foglia verde.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-flower', emoji: '🌸', en: { word: 'flower', phrase: 'A red flower.', context: 'Plant' }, it: { word: 'fiore', phrase: 'Un fiore rosso.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-seed', emoji: '🌱', en: { word: 'seed', phrase: 'Plant the seed.', context: 'Growth' }, it: { word: 'seme', phrase: 'Pianta il seme.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-rock', emoji: '🪨', en: { word: 'rock', phrase: 'A hard rock.', context: 'Mineral' }, it: { word: 'sasso', phrase: 'Un sasso duro.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-soil', emoji: '🟫', en: { word: 'soil', phrase: 'Dark soil.', context: 'Earth' }, it: { word: 'terra', phrase: 'Terra scura.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-water', emoji: '💧', en: { word: 'water', phrase: 'Add water.', context: 'Liquid' }, it: { word: 'acqua', phrase: 'Aggiungi acqua.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-air', emoji: '💨', en: { word: 'air', phrase: 'The air is clear.', context: 'Gas' }, it: { word: 'aria', phrase: 'L'aria è pulita.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-sun', emoji: '☀️', en: { word: 'sun', phrase: 'The sun is hot.', context: 'Light' }, it: { word: 'sole', phrase: 'Il sole è caldo.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-insect', emoji: '🐛', en: { word: 'insect', phrase: 'A small insect.', context: 'Bug' }, it: { word: 'insetto', phrase: 'Un piccolo insetto.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-butterfly', emoji: '🦋', en: { word: 'butterfly', phrase: 'A pretty butterfly.', context: 'Insect' }, it: { word: 'farfalla', phrase: 'Una bella farfalla.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-ant', emoji: '🐜', en: { word: 'ant', phrase: 'An ant is small.', context: 'Insect' }, it: { word: 'formica', phrase: 'La formica è piccola.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-spider', emoji: '🕷️', en: { word: 'spider', phrase: 'A spider has eight legs.', context: 'Arachnid' }, it: { word: 'ragno', phrase: 'Il ragno ha otto zampe.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-worm', emoji: '🪱', en: { word: 'worm', phrase: 'A worm in the soil.', context: 'Creature' }, it: { word: 'verme', phrase: 'Un verme nella terra.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-snail', emoji: '🐌', en: { word: 'snail', phrase: 'A slow snail.', context: 'Creature' }, it: { word: 'lumaca', phrase: 'Una lumaca lenta.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-frog', emoji: '🐸', en: { word: 'frog', phrase: 'A green frog.', context: 'Amphibian' }, it: { word: 'rana', phrase: 'Una rana verde.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },

  { id: 'sci-look', emoji: '👀', en: { word: 'look', phrase: 'Look at this.', context: 'Observation' }, it: { word: 'guarda', phrase: 'Guarda questo.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-see', emoji: '👁️', en: { word: 'see', phrase: 'What do you see?', context: 'Observation' }, it: { word: 'vedi', phrase: 'Cosa vedi?', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-watch', emoji: '👁️', en: { word: 'watch', phrase: 'Watch carefully.', context: 'Attention' }, it: { word: 'osserva', phrase: 'Osserva attentamente.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-mix', emoji: '🥄', en: { word: 'mix', phrase: 'Mix the colours.', context: 'Action' }, it: { word: 'mescola', phrase: 'Mescola i colori.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-pour', emoji: '💧', en: { word: 'pour', phrase: 'Pour the water.', context: 'Action' }, it: { word: 'versa', phrase: 'Versa l'acqua.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-stir', emoji: '🥄', en: { word: 'stir', phrase: 'Stir the liquid.', context: 'Action' }, it: { word: 'mescola', phrase: 'Mescola il liquido.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-measure', emoji: '📏', en: { word: 'measure', phrase: 'Measure the length.', context: 'Action' }, it: { word: 'misura', phrase: 'Misura la lunghezza.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-weigh', emoji: '⚖️', en: { word: 'weigh', phrase: 'Weigh the rock.', context: 'Action' }, it: { word: 'pesa', phrase: 'Pesa il sasso.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-compare', emoji: '⚖️', en: { word: 'compare', phrase: 'Compare the two.', context: 'Analysis' }, it: { word: 'confronta', phrase: 'Confronta i due.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-test', emoji: '🧪', en: { word: 'test', phrase: 'Test the water.', context: 'Experiment' }, it: { word: 'prova', phrase: 'Prova l'acqua.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-guess', emoji: '🤔', en: { word: 'guess', phrase: 'What do you guess?', context: 'Hypothesis' }, it: { word: 'indovina', phrase: 'Indovina cosa succederà.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-result', emoji: '✅', en: { word: 'result', phrase: 'The result is...', context: 'Outcome' }, it: { word: 'risultato', phrase: 'Il risultato è...', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-change', emoji: '🔄', en: { word: 'change', phrase: 'It changed colour.', context: 'Transformation' }, it: { word: 'cambia', phrase: 'Ha cambiato colore.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-grow', emoji: '🌱', en: { word: 'grow', phrase: 'The seed grew.', context: 'Development' }, it: { word: 'cresci', phrase: 'Il seme è cresciuto.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'sci-record', emoji: '📝', en: { word: 'record', phrase: 'Record the result.', context: 'Documentation' }, it: { word: 'registra', phrase: 'Registra il risultato.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
];

export interface SchoolDialogueTurn { speaker: 'teacher' | 'student' | 'peer'; en: string; it?: string; fr?: string; mt?: string; }
export interface SchoolDialogue { id: string; scenario: string; turns: SchoolDialogueTurn[]; }

export const scienceLabDialogues: SchoolDialogue[] = [
  { id: 'sci-microscope-look', scenario: 'Using the microscope', turns: [
    { speaker: 'teacher', en: 'Look in the microscope.' },
    { speaker: 'student', en: 'What am I looking at?' },
    { speaker: 'teacher', en: 'A tiny insect.' },
  ],
    natural: [
      { speaker: 'teacher', en: 'Look in the microscope.' },
      { speaker: 'student', en: 'What am I looking at?' },
      { speaker: 'teacher', en: 'A tiny insect.' },
    ]},
  
  { id: 'sci-mix-pour', scenario: 'Mixing experiment', turns: [
    { speaker: 'teacher', en: 'Pour the water into the beaker.' },
    { speaker: 'student', en: 'What now?' },
    { speaker: 'teacher', en: 'Mix and stir.' },
    { speaker: 'student', en: 'The colour changed.' },
  ],
    natural: [
      { speaker: 'teacher', en: 'Pour the water into the beaker.' },
      { speaker: 'student', en: 'What now?' },
      { speaker: 'teacher', en: 'Mix and stir.' },
      { speaker: 'student', en: 'The colour changed.' },
    ]},
  
  { id: 'sci-plant-seed', scenario: 'Growing a seed', turns: [
    { speaker: 'teacher', en: 'Plant the seed in the soil.' },
    { speaker: 'student', en: 'Will it grow?' },
    { speaker: 'teacher', en: 'Yes. Water it and watch.' },
  ],
    natural: [
      { speaker: 'teacher', en: 'Plant the seed in the soil.' },
      { speaker: 'student', en: 'Will it grow?' },
      { speaker: 'teacher', en: 'Yeah. Water it and watch.' },
    ]},
  
  { id: 'sci-measure-weigh', scenario: 'Measuring things', turns: [
    { speaker: 'student', en: 'Can I weigh the rock?' },
    { speaker: 'teacher', en: 'Use the scale.' },
    { speaker: 'student', en: 'Now I will measure it with the ruler.' },
  ],
    natural: [
      { speaker: 'student', en: 'Can I weigh the rock?' },
      { speaker: 'teacher', en: 'Use the scale.' },
      { speaker: 'student', en: "Now I'll measure it with the ruler." },
    ]},
  
  { id: 'sci-safety', scenario: 'Safety first', turns: [
    { speaker: 'teacher', en: 'Wear your goggles.' },
    { speaker: 'student', en: 'Do I need gloves?' },
    { speaker: 'teacher', en: 'Yes. And the apron too.' },
  ],
    natural: [
      { speaker: 'teacher', en: 'Wear your goggles.' },
      { speaker: 'student', en: 'Do I need gloves?' },
      { speaker: 'teacher', en: 'Yeah. And the apron too.' },
    ]},
  
  { id: 'sci-guess-result', scenario: 'Making a guess', turns: [
    { speaker: 'teacher', en: 'What do you guess will happen?' },
    { speaker: 'student', en: 'I guess it will change.' },
    { speaker: 'teacher', en: 'Let us test it and see the result.' },
  ],
    natural: [
      { speaker: 'teacher', en: 'What do you think will happen?' },
      { speaker: 'student', en: "I guess it'll change." },
      { speaker: 'teacher', en: "Let's test it and see the result." },
    ]},
  
];

export const scienceLabImagePrompts: Record<string, string> = {
  'lab-equipment': `A primary school science lab table with equipment for simple experiments.
Visible items: microscope, test tubes in a rack, glass beaker with liquid, round flask, magnifying glass, plastic pipette, safety goggles, white lab apron, protective gloves, small burner, metal tray, balance scale, ruler, egg timer, open notebook with pencil.
Style: warm children's book illustration, soft colours, friendly, clear outlines, European primary school, no text, no labels, no watermarks.`,

  'nature-animals': `A nature study corner in a primary school science lab with plants and small creatures.
Visible items: green leaf, red flower, small seed, grey rock, soil in a pot, water droplets, air movement lines, bright sun, small insect, colourful butterfly, black ant, spider with web, earthworm, snail with shell, green frog.
Style: warm children's book illustration, soft colours, friendly, clear outlines, European primary school, no text, no labels.`,

  'experiments': `Children doing simple science experiments in a primary school lab.
Visible items: child looking through microscope, child pouring liquid into beaker, child stirring mixture, child measuring length with ruler, child weighing object on scale, child comparing two rocks, child testing water with paper, child guessing outcome, child recording result in notebook, child watching seed grow, colour changing in liquid, plant growing taller.
Style: warm children's book illustration, soft colours, friendly, diverse children, European primary school, no text, no labels.`,
};
