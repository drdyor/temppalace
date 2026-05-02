// School Palace — Lost Property
// English source layer (truth layer)
// A1 level, concrete objects only for image pins

import type { Room } from '../../types';

export const lostPropertyRoom: Room = {
  id: 'lost-property',
  name: 'Lost Property',
  subtitle: 'Find & Describe',
  nameNative: 'Oggetti Smarriti',
  image: 'rooms/school/lost-property.jpg',
  description: 'Where lost things wait for their owners to find them.',
  grammarFocus: 'describing objects & possessives',
  vocabularyIds: [
    'lost-jacket', 'lost-jumper', 'lost-trouser', 'lost-skirt', 'lost-dress',
    'lost-shoe', 'lost-sock', 'lost-hat', 'lost-glove', 'lost-scarf',
    'lost-bag', 'lost-lunchbox', 'lost-bottle', 'lost-pencil-case', 'lost-key',
    'lost-colour', 'lost-size', 'lost-big', 'lost-small', 'lost-long',
    'lost-short', 'lost-new', 'lost-old', 'lost-pattern', 'lost-spot',
    'lost-stripe', 'lost-plain', 'lost-logo', 'lost-name', 'lost-label',
    'los-lose', 'los-find', 'los-look', 'los-search', 'los-check',
    'los-ask', 'los-claim', 'los-match', 'los-belong', 'los-mine',
    'los-yours', 'los-his', 'los-hers', 'los-ours', 'los-theirs',
  ],
  zones: [
    {
      id: 'lost-items',
      name: 'Lost Items',
      nameNative: 'Oggetti Persi',
      description: 'Things people have lost',
      icon: '👕',
      x: 25, y: 30, width: 30, height: 25,
      interiorImage: 'rooms/school/lost-items.jpg',
      interiorVocab: [
        { wordId: 'lost-jacket', x: 20, y: 25 }, { wordId: 'lost-jumper', x: 50, y: 20 },
        { wordId: 'lost-trouser', x: 80, y: 25 }, { wordId: 'lost-skirt', x: 25, y: 45 },
        { wordId: 'lost-dress', x: 55, y: 40 }, { wordId: 'lost-shoe', x: 80, y: 45 },
        { wordId: 'lost-sock', x: 15, y: 60 }, { wordId: 'lost-hat', x: 40, y: 60 },
        { wordId: 'lost-glove', x: 65, y: 60 }, { wordId: 'lost-scarf', x: 85, y: 60 },
        { wordId: 'lost-bag', x: 20, y: 80 }, { wordId: 'lost-lunchbox', x: 45, y: 80 },
        { wordId: 'lost-bottle', x: 70, y: 80 }, { wordId: 'lost-pencil-case', x: 30, y: 90 },
        { wordId: 'lost-key', x: 60, y: 90 },
      ],
    },
    {
      id: 'describing-things',
      name: 'Describing Things',
      nameNative: 'Descrivere le Cose',
      description: 'How to tell what it looks like',
      icon: '🎨',
      x: 60, y: 30, width: 30, height: 25,
      interiorImage: 'rooms/school/lost-describe.jpg',
      interiorVocab: [
        { wordId: 'lost-colour', x: 20, y: 20 }, { wordId: 'lost-size', x: 50, y: 20 },
        { wordId: 'lost-big', x: 80, y: 20 }, { wordId: 'lost-small', x: 20, y: 45 },
        { wordId: 'lost-long', x: 50, y: 45 }, { wordId: 'lost-short', x: 80, y: 45 },
        { wordId: 'lost-new', x: 20, y: 65 }, { wordId: 'lost-old', x: 45, y: 65 },
        { wordId: 'lost-pattern', x: 70, y: 65 }, { wordId: 'lost-spot', x: 85, y: 65 },
        { wordId: 'lost-stripe', x: 20, y: 85 }, { wordId: 'lost-plain', x: 45, y: 85 },
        { wordId: 'lost-logo', x: 65, y: 85 }, { wordId: 'lost-name', x: 35, y: 95 },
        { wordId: 'lost-label', x: 60, y: 95 },
      ],
    },
    {
      id: 'finding-stuff',
      name: 'Finding Your Stuff',
      nameNative: 'Trovare le Cose',
      description: 'Getting your things back',
      icon: '🔍',
      x: 40, y: 60, width: 35, height: 25,
      interiorImage: 'rooms/school/lost-finding.jpg',
      interiorVocab: [
        { wordId: 'los-lose', x: 20, y: 20 }, { wordId: 'los-find', x: 50, y: 20 },
        { wordId: 'los-look', x: 80, y: 20 }, { wordId: 'los-search', x: 20, y: 45 },
        { wordId: 'los-check', x: 50, y: 45 }, { wordId: 'los-ask', x: 80, y: 45 },
        { wordId: 'los-claim', x: 20, y: 65 }, { wordId: 'los-match', x: 45, y: 65 },
        { wordId: 'los-belong', x: 70, y: 65 }, { wordId: 'los-mine', x: 85, y: 65 },
        { wordId: 'los-yours', x: 20, y: 85 }, { wordId: 'los-his', x: 40, y: 85 },
        { wordId: 'los-hers', x: 60, y: 85 }, { wordId: 'los-ours', x: 75, y: 85 },
        { wordId: 'los-theirs', x: 50, y: 95 },
      ],
    },
  ],
  grammarPoints: [
    { id: 'lost-possessives', title: 'Mine, Yours, His, Hers', explanation: 'Who does it belong to?', example: 'It is mine. Is it yours?', color: '#8B5CF6' },
    { id: 'lost-description', title: 'Describing Objects', explanation: 'Colour, size, pattern', example: 'It is red. It is big. It has stripes.', color: '#F59E0B' },
  ],
};

export interface SchoolConcept {
  id: string; emoji?: string;
  en: { word: string; phrase?: string; context?: string };
  it?: { word: string; phrase?: string; gender?: 'masculine' | 'feminine' | 'none'; pronunciation?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
  fr?: { word: string; phrase?: string; gender?: 'masculine' | 'feminine' | 'none'; pronunciation?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
  mt?: { word: string; phrase?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
}

export const lostPropertyVocabulary: SchoolConcept[] = [
  { id: 'lost-jacket', emoji: '🧥', en: { word: 'jacket', phrase: 'My jacket is blue.', context: 'Clothing' }, it: { word: 'giacca', phrase: 'La mia giacca è blu.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-jumper', emoji: '🧶', en: { word: 'jumper', phrase: 'A wool jumper.', context: 'Clothing' }, it: { word: 'maglione', phrase: 'Un maglione di lana.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-trouser', emoji: '👖', en: { word: 'trousers', phrase: 'My trousers are grey.', context: 'Clothing' }, it: { word: 'pantaloni', phrase: 'I miei pantaloni sono grigi.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-skirt', emoji: '👗', en: { word: 'skirt', phrase: 'A red skirt.', context: 'Clothing' }, it: { word: 'gonna', phrase: 'Una gonna rossa.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-dress', emoji: '👗', en: { word: 'dress', phrase: 'A pretty dress.', context: 'Clothing' }, it: { word: 'vestito', phrase: 'Un vestito carino.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-shoe', emoji: '👟', en: { word: 'shoe', phrase: 'I lost my shoe.', context: 'Footwear' }, it: { word: 'scarpa', phrase: 'Ho perso la mia scarpa.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-sock', emoji: '🧦', en: { word: 'sock', phrase: 'One sock is missing.', context: 'Footwear' }, it: { word: 'calzino', phrase: 'Manca un calzino.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-hat', emoji: '🧢', en: { word: 'hat', phrase: 'A warm hat.', context: 'Accessory' }, it: { word: 'cappello', phrase: 'Un cappello caldo.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-glove', emoji: '🧤', en: { word: 'glove', phrase: 'I lost a glove.', context: 'Accessory' }, it: { word: 'guanto', phrase: 'Ho perso un guanto.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-scarf', emoji: '🧣', en: { word: 'scarf', phrase: 'A long scarf.', context: 'Accessory' }, it: { word: 'sciarpa', phrase: 'Una sciarpa lunga.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-bag', emoji: '🎒', en: { word: 'bag', phrase: 'My school bag.', context: 'Item' }, it: { word: 'zaino', phrase: 'Il mio zaino.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-lunchbox', emoji: '🍱', en: { word: 'lunchbox', phrase: 'A blue lunchbox.', context: 'Item' }, it: { word: 'portapranzo', phrase: 'Un portapranzo blu.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-bottle', emoji: '💧', en: { word: 'bottle', phrase: 'A water bottle.', context: 'Item' }, it: { word: 'bottiglia', phrase: 'Una bottiglia d'acqua.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-pencil-case', emoji: '✏️', en: { word: 'pencil case', phrase: 'My pencil case.', context: 'Item' }, it: { word: 'astuccio', phrase: 'Il mio astuccio.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-key', emoji: '🔑', en: { word: 'key', phrase: 'A locker key.', context: 'Item' }, it: { word: 'chiave', phrase: 'Una chiave dell'armadietto.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },

  { id: 'lost-colour', emoji: '🎨', en: { word: 'colour', phrase: 'What colour is it?', context: 'Description' }, it: { word: 'colore', phrase: 'Di che colore è?', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-size', emoji: '📏', en: { word: 'size', phrase: 'What size is it?', context: 'Description' }, it: { word: 'taglia', phrase: 'Che taglia è?', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-big', emoji: '⬆️', en: { word: 'big', phrase: 'It is big.', context: 'Size' }, it: { word: 'grande', phrase: 'È grande.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-small', emoji: '⬇️', en: { word: 'small', phrase: 'It is small.', context: 'Size' }, it: { word: 'piccolo', phrase: 'È piccolo.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-long', emoji: '📏', en: { word: 'long', phrase: 'It is long.', context: 'Length' }, it: { word: 'lungo', phrase: 'È lungo.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-short', emoji: '📏', en: { word: 'short', phrase: 'It is short.', context: 'Length' }, it: { word: 'corto', phrase: 'È corto.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-new', emoji: '✨', en: { word: 'new', phrase: 'It looks new.', context: 'Condition' }, it: { word: 'nuovo', phrase: 'Sembra nuovo.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-old', emoji: '👴', en: { word: 'old', phrase: 'It looks old.', context: 'Condition' }, it: { word: 'vecchio', phrase: 'Sembra vecchio.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-pattern', emoji: '🔲', en: { word: 'pattern', phrase: 'It has a pattern.', context: 'Design' }, it: { word: 'disegno', phrase: 'Ha un disegno.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-spot', emoji: '🔴', en: { word: 'spot', phrase: 'It has spots.', context: 'Design' }, it: { word: 'pois', phrase: 'Ha i pois.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-stripe', emoji: '➖', en: { word: 'stripe', phrase: 'It has stripes.', context: 'Design' }, it: { word: 'riga', phrase: 'Ha le righe.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-plain', emoji: '⬜', en: { word: 'plain', phrase: 'It is plain.', context: 'Design' }, it: { word: 'tinta unita', phrase: 'È a tinta unita.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-logo', emoji: '🏷️', en: { word: 'logo', phrase: 'It has a logo.', context: 'Mark' }, it: { word: 'logo', phrase: 'Ha un logo.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-name', emoji: '🏷️', en: { word: 'name', phrase: 'My name is on it.', context: 'Label' }, it: { word: 'nome', phrase: 'C'è il mio nome sopra.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'lost-label', emoji: '🏷️', en: { word: 'label', phrase: 'Read the label.', context: 'Tag' }, it: { word: 'etichetta', phrase: 'Leggi l'etichetta.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },

  { id: 'los-lose', emoji: '❌', en: { word: 'lose', phrase: 'I lost my bag.', context: 'Action' }, it: { word: 'perdere', phrase: 'Ho perso il mio zaino.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'los-find', emoji: '✅', en: { word: 'find', phrase: 'Did you find it?', context: 'Action' }, it: { word: 'trovare', phrase: 'L'hai trovato?', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'los-look', emoji: '👀', en: { word: 'look', phrase: 'Look in the box.', context: 'Action' }, it: { word: 'guardare', phrase: 'Guarda nella scatola.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'los-search', emoji: '🔍', en: { word: 'search', phrase: 'Search everywhere.', context: 'Action' }, it: { word: 'cercare', phrase: 'Cerca dappertutto.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'los-check', emoji: '☑️', en: { word: 'check', phrase: 'Check the lost property.', context: 'Action' }, it: { word: 'controllare', phrase: 'Controlla gli oggetti smarriti.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'los-ask', emoji: '🙋', en: { word: 'ask', phrase: 'Ask the teacher.', context: 'Action' }, it: { word: 'chiedere', phrase: 'Chiedi all'insegnante.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'los-claim', emoji: '🙌', en: { word: 'claim', phrase: 'Claim your item.', context: 'Action' }, it: { word: 'ritirare', phrase: 'Ritira il tuo oggetto.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'los-match', emoji: '🔗', en: { word: 'match', phrase: 'Does it match?', context: 'Compare' }, it: { word: 'corrispondere', phrase: 'Corrisponde?', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'los-belong', emoji: '🏠', en: { word: 'belong', phrase: 'Who does it belong to?', context: 'Ownership' }, it: { word: 'appartenere', phrase: 'A chi appartiene?', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'los-mine', emoji: '👆', en: { word: 'mine', phrase: 'It is mine.', context: 'Possessive' }, it: { word: 'mio', phrase: 'È mio.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'los-yours', x: 0, y: 0, emoji: '👉', en: { word: 'yours', phrase: 'Is it yours?', context: 'Possessive' }, it: { word: 'tuo', phrase: 'È tuo?', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'los-his', emoji: '👦', en: { word: 'his', phrase: 'It is his.', context: 'Possessive' }, it: { word: 'suo', phrase: 'È suo.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'los-hers', emoji: '👧', en: { word: 'hers', phrase: 'It is hers.', context: 'Possessive' }, it: { word: 'suo', phrase: 'È suo.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'los-ours', emoji: '👥', en: { word: 'ours', phrase: 'It is ours.', context: 'Possessive' }, it: { word: 'nostro', phrase: 'È nostro.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'los-theirs', emoji: '👥', en: { word: 'theirs', phrase: 'It is theirs.', context: 'Possessive' }, it: { word: 'loro', phrase: 'È loro.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
];

export interface SchoolDialogueTurn { speaker: 'teacher' | 'student' | 'peer'; en: string; it?: string; fr?: string; mt?: string; }
export interface SchoolDialogue { id: string; scenario: string; turns: SchoolDialogueTurn[]; }

export const lostPropertyDialogues: SchoolDialogue[] = [
  { id: 'los-lost-bag', scenario: 'Lost bag', turns: [
    { speaker: 'student', en: 'I lost my bag.' },
    { speaker: 'teacher', en: 'Check the lost property box.' },
    { speaker: 'student', en: 'It is not there.' },
    { speaker: 'teacher', en: 'What colour is it?' },
  ],
    natural: [
      { speaker: 'student', en: 'I lost my bag.' },
      { speaker: 'teacher', en: 'Check the lost property box.' },
      { speaker: 'student', en: "It's not there." },
      { speaker: 'teacher', en: 'What colour is it?' },
    ]},
  
  { id: 'los-claim-jacket', scenario: 'Claiming a jacket', turns: [
    { speaker: 'student', en: 'Is this jacket yours?' },
    { speaker: 'peer', en: 'No. Mine is bigger.' },
    { speaker: 'student', en: 'Does it belong to him?' },
    { speaker: 'peer', en: 'Yes. It has his name.' },
  ],
    natural: [
      { speaker: 'student', en: 'Is this your jacket?' },
      { speaker: 'peer', en: "No. Mine's bigger." },
      { speaker: 'student', en: 'Is it his?' },
      { speaker: 'peer', en: 'Yeah. It has his name.' },
    ]},
  
  { id: 'los-describe', scenario: 'Describing a lost item', turns: [
    { speaker: 'teacher', en: 'Describe your shoe.' },
    { speaker: 'student', en: 'It is small and blue.' },
    { speaker: 'teacher', en: 'Does it have stripes?' },
    { speaker: 'student', en: 'No. It is plain.' },
  ],
    natural: [
      { speaker: 'teacher', en: 'Describe your shoe.' },
      { speaker: 'student', en: "It's small and blue." },
      { speaker: 'teacher', en: 'Does it have stripes?' },
      { speaker: 'student', en: "No. It's plain." },
    ]},
  
  { id: 'los-label', scenario: 'Name labels', turns: [
    { speaker: 'teacher', en: 'Put your name on the label.' },
    { speaker: 'student', en: 'Then I will not lose it.' },
    { speaker: 'teacher', en: 'If you lose it, we can find it.' },
  ],
    natural: [
      { speaker: 'teacher', en: 'Put your name on the label.' },
      { speaker: 'student', en: "Then I won't lose it." },
      { speaker: 'teacher', en: 'If you lose it, we can find it.' },
    ]},
  
  { id: 'los-search', scenario: 'Searching together', turns: [
    { speaker: 'peer', en: 'I will help you look.' },
    { speaker: 'student', en: 'Let us search the classroom.' },
    { speaker: 'peer', en: 'Check your locker too.' },
  ],
    natural: [
      { speaker: 'peer', en: "I'll help you look." },
      { speaker: 'student', en: "Let's search the classroom." },
      { speaker: 'peer', en: 'Check your locker too.' },
    ]},
  
  { id: 'los-found', scenario: 'Something found', turns: [
    { speaker: 'peer', en: 'I found a key.' },
    { speaker: 'student', en: 'Is it yours?' },
    { speaker: 'peer', en: 'No. It is not mine.' },
    { speaker: 'student', en: 'Let us ask whose it is.' },
  ],
    natural: [
      { speaker: 'peer', en: 'I found a key.' },
      { speaker: 'student', en: 'Is it yours?' },
      { speaker: 'peer', en: "No. It's not mine." },
      { speaker: 'student', en: "Let's ask whose it is." },
    ]},
  
];

export const lostPropertyImagePrompts: Record<string, string> = {
  'lost-items': `A lost property box in a primary school with various children's items.
Visible items: blue jacket, wool jumper, grey trousers, red skirt, pretty dress, single shoe, striped sock, winter hat, lost glove, long scarf, school bag, colourful lunchbox, water bottle, pencil case with pens, small key.
Style: warm children's book illustration, soft colours, friendly, clear outlines, European primary school, no text, no labels, no watermarks.`,

  'describing-things': `A child describing a lost item to a teacher using size, colour, and pattern.
Visible items: big coat next to small coat, long scarf next to short scarf, new shiny shoes next to old worn shoes, spotted umbrella, striped jumper, plain grey bag, bag with school logo, name label on jacket, tag on clothing, colour chart, measuring ruler.
Style: warm children's book illustration, soft colours, friendly, diverse characters, European primary school, no text, no labels.`,

  'finding-stuff': `Children finding and claiming lost items in a primary school lost property area.
Visible items: child looking in lost property box, child searching under desk, child checking locker, child asking teacher, child claiming bag saying it is mine, child asking if it is yours, child pointing saying it is his, child saying it is hers, children saying it is ours, teacher matching item to owner, happy child finding lost thing.
Style: warm children's book illustration, soft colours, friendly, diverse children, European primary school, no text, no labels.`,
};
