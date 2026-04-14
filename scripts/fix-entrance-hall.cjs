const fs = require('fs');
const { italianVocabulary } = require('../src/data/italian-generated.ts');

// Read current rooms.ts
let roomsTs = fs.readFileSync('src/data/rooms.ts', 'utf8');

// Extract entrance-hall vocab
const ehMatch = roomsTs.match(/id:\s*'entrance-hall'[\s\S]*?vocabularyIds:\s*\[([\s\S]*?)\]/);
const ehWords = ehMatch[1].split(',').map(x => x.trim().replace(/['"]/g, '')).filter(Boolean);

console.log('Entrance-hall words:', ehWords.length);

// Define redistribution rules to other rooms
const redistributions = {
  gallery: [
    'bianco', 'giallo', 'nero', 'nera', 'rosso',
    'grande', 'grandi', 'piccola', 'piccolo', 'lungo', 'largo', 'larga', 'larghe'
  ],
  emotions: [
    'ansia', 'felicita', 'fiducia', 'gioia', 'innamorato', 'nostalgia', 
    'rabbia', 'morte', 'libertà', 'bugie', 'realtà', 'verità', 'vita', 'vivo'
  ],
  actions: [
    'guardare', 'conoscere', 'vedere', 'cominciato', 'passeggiata', 'squadra',
    'palestra', 'piscina'
  ],
  farm: [
    'paglia'
  ],
  kitchen: [
    'insalata', 'pizza', 'piattino', 'mensa'
  ],
  transport: [
    'dove', 'dritto', 'davanti', 'dietro', 'dentro', 'fuori', 'sopra', 'sotto', 
    'tra', 'verso', 'luogo', 'posto', 'paese', 'piazza', 'porta', 'scala',
    'albergo', 'ambulanza', 'ascensore', 'banca', 'città', 'destra', 'lontani', 'posta',
    'prenotazione', 'sinistra', 'sede'
  ],
  'living-room': [
    'schermo', 'cinema', 'concerto', 'microfono', 'telefono', 'teatro'
  ],
  bathroom: [
    'braccio', 'caviglia', 'dito', 'ginocchio', 'gola', 'gomito', 
    'pancia', 'pollice', 'polso', 'fascia'
  ],
  tools: [
    'ferro', 'legno', 'mattone', 'mattoni', 'sparo'
  ],
  weather: [
    'aria', 'energia', 'inquinamento', 'onda', 'ambiente'
  ],
  bedroom: [
    'camicetta', 'impermeabile', 'pantaloncini', 'pantofole', 'sciarpa', 
    'stivali', 'cassetto', 'orecchino'
  ],
  library: [
    'aula', 'geografia', 'materia', 'scrivania', 'università', 'calcolatrice',
    'classe', 'documento', 'legge', 'telescopio'
  ],
  supermarket: [
    'saldi', 'banconota', 'gratis', 'contanti'
  ],
  cafe: [
    'pausa'
  ],
  'living-room': [
    'schermo', 'cinema', 'concerto', 'microfono', 'telefono', 'teatro',
    'opera'
  ],
  'entrance-hall': [] // will be populated from remaining
};

const allRedistributed = new Set();
for (const [room, words] of Object.entries(redistributions)) {
  for (const w of words) allRedistributed.add(w);
}

const remaining = ehWords.filter(w => !allRedistributed.has(w));
console.log('Remaining in entrance-hall after redistribution:', remaining.length);

// Categorize remaining for subrooms
const timeWords = new Set([
  'adesso','agosto','anno','anni','aprile','dicembre','domani','domenica',
  'febbraio','gennaio','giovedi','giugno','ieri','luglio','lunedi','maggio',
  'martedi','marzo','mattina','mercoledi','mese','mezzanotte','mezzogiorno',
  'novembre','oggi','ottobre','ora','pomeriggio','sabato','sera','settembre',
  'settimana','stanotte','stasera','tardi','venerdi','giorno','notte','orario'
]);

const numberWords = new Set([
  'cinque','dieci','diciannove','diciassette','diciotto','dodici','due',
  'mille','milione','milioni','nove','otto','quattordici','quattro','quindici',
  'sei','sedici','sette','tre','tredici','trenta','undici','venti','zero',
  'primo','prima','secondo','terzo','quarto','quinto','abbastanza','meno',
  'molto','più','poco','troppo','tutto','quasi','uno'
]);

const familyWords = new Set([
  'uomo','donna','signore','signora','marito','moglie','zio','zia','quanti',
  'romantico','maestro','avvocata','avvocato','dentista','giornalista',
  'mercante','operaio','presidente','professore','professoressa','collega',
  'compagno','povero','ricco','potente','preoccupato','giovane','bravo',
  'francese','inglese','intelligente','gente','popolo','nome'
]);

const clothingWords = new Set([
  'borsa','borse','chiave','chiavi','ombrello','valigia','zaino','occhiali',
  'cuffie','cavo','cellulare'
]);

const mirrorAppearanceWords = new Set([
  'alto','alte','alti','basso','bene','difficile','facile','forte','duro',
  'enorme','grande','grandi','leggero','morbido','piccola','piccolo',
  'pesante','pericoloso','sporco','vuoto','nuova','sopracciglio','guancia',
  'mento','labbro','lingua'
]);

const commonWords = new Set([
  'anche','ancora','che','chi','ciao','come','con','dopo','e','ma','mai',
  'nessuno','niente','o','per','perche','perché','poi','qualcosa','qualcuno','quale',
  'quando','questo','quello','se','senza','simile','solo','sempre','forse',
  'finalmente','subito','cosa','corridoio','esempio','finestra',
  'pavimento','problema','prodotto','punto','ragione','rumore',
  'spazio','storie','studio','tema','titolo','ufficio','voce','volta',
  'voto','wifi','calcio','campeggio','partita','altra','altro','aspetto',
  'buonanotte','buonasera','era','errore','gomma','gratis','impero',
  'impossibile','incredibile','lavoro','mondo','oscuro','parte','permesso',
  'pieno','messaggi','messaggio','società','rifiuto','schiavo','sicuro','soffitto','tetto'
]);

const newSubrooms = {
  'family-portrait': remaining.filter(w => familyWords.has(w)),
  'coat-rack': remaining.filter(w => clothingWords.has(w)),
  'mirror': remaining.filter(w => mirrorAppearanceWords.has(w)),
  'clock': remaining.filter(w => timeWords.has(w)),
  'number-plate': remaining.filter(w => numberWords.has(w)),
  'welcome-mat': remaining.filter(w => commonWords.has(w))
};

// Check uncategorized
const categorized = new Set();
for (const words of Object.values(newSubrooms)) {
  for (const w of words) categorized.add(w);
}
const uncategorized = remaining.filter(w => !categorized.has(w));

console.log('\n=== Proposed Redistributions ===');
for (const [room, words] of Object.entries(redistributions)) {
  if (words.length > 0) {
    console.log(room + ': +' + words.length);
  }
}

console.log('\n=== New Entrance-Hall Subrooms ===');
for (const [subroom, words] of Object.entries(newSubrooms)) {
  console.log(subroom + ': ' + words.length);
}
console.log('Uncategorized:', uncategorized.length);
if (uncategorized.length > 0) {
  for (const w of uncategorized) {
    console.log(w, '|', italianVocabulary[w]?.english);
  }
}
console.log('Total accounted for:', remaining.length);

// NOW APPLY THE CHANGES
if (uncategorized.length === 0) {
  console.log('\nApplying changes...');
  
  // 1. Remove redistributed words from entrance-hall and update its vocab + subrooms
  const ehKeep = remaining;
  
  // 2. Add redistributed words to target rooms
  for (const [roomId, wordsToAdd] of Object.entries(redistributions)) {
    if (roomId === 'entrance-hall' || wordsToAdd.length === 0) continue;
    
    const roomRegex = new RegExp(`id:\\s*'${roomId}'[\\s\\S]*?vocabularyIds:\\s*\\[([\\s\\S]*?)\\]`);
    const match = roomsTs.match(roomRegex);
    if (match) {
      const existing = match[1].split(',').map(x => x.trim().replace(/['"]/g, '')).filter(Boolean);
      const combined = [...new Set([...existing, ...wordsToAdd])];
      const newVocab = combined.map(w => `"${w}"`).join(', ');
      roomsTs = roomsTs.replace(match[0], match[0].replace(match[1], newVocab.length > 100 ? '\n      ' + newVocab + '\n    ' : ' ' + newVocab + ' '));
    }
  }
  
  // 3. Rebuild entrance-hall
  const ehRegex = /id:\s*'entrance-hall'[\s\S]*?zones:\s*\[[\s\S]*?\n    \],/;
  const ehMatchFull = roomsTs.match(ehRegex);
  
  if (ehMatchFull) {
    const newEhBlock = `  {
    id: 'entrance-hall',
    name: 'Foyer',
    subtitle: 'Essere & Avere',
    nameNative: "Ingresso",
    image: '/rooms/entrance-hall.jpg',
    description: 'Step into the grand hall. Meet the people and learn the two most important verbs in Italian.',
    grammarFocus: 'essere & avere (to be & to have)',
    vocabularyIds: [${ehKeep.map(w => `"${w}"`).join(', ')}],
    zones: [
      { id: 'family-portrait', name: 'Family Portrait', nameNative: "Ritratto di Famiglia", description: 'Family members on the wall', icon: '👨‍👩‍👧‍👦', x: 30, y: 40, width: 20, height: 25, interiorImage: '/rooms/entrance-portrait.jpg', interiorVocab: [${newSubrooms['family-portrait'].slice(0,12).map((w, i) => `{ wordId: '${w}', x: ${12 + (i%4)*25}, y: ${12 + Math.floor(i/4)*25} }`).join(', ')}] },
      { id: 'coat-rack', name: 'Coat Rack', nameNative: "Appendiabiti", description: 'Clothes and accessories', icon: '🧥', x: 75, y: 45, width: 15, height: 30, interiorImage: '/rooms/entrance-coat.jpg', interiorVocab: [${newSubrooms['coat-rack'].slice(0,12).map((w, i) => `{ wordId: '${w}', x: ${12 + (i%4)*25}, y: ${12 + Math.floor(i/4)*25} }`).join(', ')}] },
      { id: 'mirror', name: 'The Mirror', nameNative: "Lo Specchio", description: 'Body parts and descriptions', icon: '🪞', x: 50, y: 35, width: 15, height: 20, interiorVocab: [${newSubrooms['mirror'].slice(0,12).map((w, i) => `{ wordId: '${w}', x: ${12 + (i%4)*25}, y: ${12 + Math.floor(i/4)*25} }`).join(', ')}] },
      { id: 'clock', name: 'The Clock', nameNative: "L'Orologio", description: 'Days, months, and time', icon: '🕰️', x: 15, y: 25, width: 12, height: 12, interiorVocab: [${newSubrooms['clock'].slice(0,12).map((w, i) => `{ wordId: '${w}', x: ${12 + (i%4)*25}, y: ${12 + Math.floor(i/4)*25} }`).join(', ')}] },
      { id: 'number-plate', name: 'House Number', nameNative: "Il Numero Civico", description: 'Numbers and quantities', icon: '🔢', x: 85, y: 25, width: 10, height: 10, interiorVocab: [${newSubrooms['number-plate'].slice(0,12).map((w, i) => `{ wordId: '${w}', x: ${12 + (i%4)*25}, y: ${12 + Math.floor(i/4)*25} }`).join(', ')}] },
      { id: 'welcome-mat', name: 'Welcome Mat', nameNative: "Zerbino", description: 'Common words and questions', icon: '🚪', x: 45, y: 80, width: 25, height: 12, interiorVocab: [${newSubrooms['welcome-mat'].slice(0,12).map((w, i) => `{ wordId: '${w}', x: ${12 + (i%4)*25}, y: ${12 + Math.floor(i/4)*25} }`).join(', ')}] },
    ],
    grammarPoints: [
      { id: 'essere', title: 'Essere - To Be', explanation: 'Used for identity, characteristics, and location', example: 'Io sono Italiano (I am Italian)', color: '#E7A04D' },
      { id: 'avere', title: 'Avere - To Have', explanation: 'Used for possession and age', example: 'Io ho una chiave (I have a key)', color: '#3B82F6' },
    ],
  },`;
    
    roomsTs = roomsTs.replace(ehMatchFull[0], newEhBlock);
    fs.writeFileSync('src/data/rooms.ts', roomsTs, 'utf8');
    console.log('Updated rooms.ts successfully!');
  } else {
    console.log('ERROR: Could not find entrance-hall block');
  }
} else {
  console.log('\nPlease fix uncategorized words before applying.');
}
