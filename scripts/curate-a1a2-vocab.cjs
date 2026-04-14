const fs = require('fs');
const { italianVocabulary } = require('../src/data/italian-generated.ts');

const words = Object.values(italianVocabulary);

// BLOCKLIST: words that are too abstract, formal, political, legal, economic, or bureaucratic for A1-A2 visual learning
const blocklist = new Set([
  'abbonamento', 'ambiente', 'ambulanza', 'ansia', 'articolo', 'aspetto', 'autore',
  'avvocata', 'avvocato', 'banca', 'banconota', 'bugie', 'calcolatrice', 'cassetto',
  'commissione', 'compagno', 'concerto', 'conoscere', 'corridoio', 'decreto', 'dentista',
  'documento', 'economico', 'era', 'errore', 'esempio', 'fascia', 'ferro', 'fiducia',
  'finale', 'finanziario', 'fiscale', 'giornalista', 'governo', 'impero', 'impossibile',
  'incredibile', 'intelligente', 'legge', 'libertà', 'materia', 'mercante', 'messaggi',
  'messaggio', 'microfono', 'milione', 'milioni', 'mondo', 'norma', 'operaio', 'politica',
  'posto', 'potente', 'presidente', 'prodotti', 'prodotto', 'professore', 'professoressa',
  'programma', 'proposta', 'ragione', 'realta', 'regione', 'relazione', 'richiesta',
  'rifiuto', 'rumore', 'schiavo', 'sede', 'senso', 'sistema', 'societa', 'soldi',
  'spazio', 'stato', 'storia', 'studio', 'successivo', 'tema', 'termine', 'titolo',
  'universita', 'valore', 'verita', 'voto'
]);

// Multi-word phrases (anything with a space)
function isPhrase(word) {
  return word.id.includes(' ');
}

// Room keyword map for assignment
const roomKeywords = {
  'kitchen': ['food', 'eat', 'drink', 'cook', 'meal', 'fork', 'knife', 'spoon', 'plate', 'glass', 'cup', 'bottle', 'fridge', 'stove', 'pan', 'pot', 'coffee', 'tea', 'wine', 'beer', 'water', 'milk', 'egg', 'butter', 'cheese', 'bread', 'pasta', 'rice', 'salt', 'sugar', 'oil', 'meat', 'fish', 'fruit', 'vegetable', 'ice', 'hot', 'cold', 'sweet', 'menu', 'recipe', 'soup', 'cake', 'chocolate', 'honey', 'flour', 'pepper', 'juice'],
  'bedroom': ['bed', 'sleep', 'wardrobe', 'closet', 'clothes', 'shirt', 'pants', 'dress', 'coat', 'shoe', 'boot', 'slipper', 'scarf', 'umbrella', 'bag', 'suitcase', 'backpack', 'key', 'glasses', 'earring', 'drawer'],
  'bathroom': ['bath', 'shower', 'sink', 'toilet', 'mirror', 'soap', 'towel', 'toothbrush', 'cream', 'shampoo', 'water', 'wash', 'clean', 'body', 'arm', 'leg', 'hand', 'foot', 'head', 'face', 'eye', 'nose', 'mouth', 'hair', 'knee', 'elbow', 'finger', 'thumb', 'wrist', 'ankle', 'lip', 'cheek', 'chin', 'throat', 'belly'],
  'living-room': ['sofa', 'chair', 'armchair', 'television', 'tv', 'radio', 'book', 'shelf', 'table', 'carpet', 'curtain', 'room', 'house', 'home', 'building', 'palace', 'film', 'game', 'sport', 'show', 'music', 'song', 'video'],
  'library': ['school', 'study', 'book', 'desk', 'computer', 'paper', 'pen', 'pencil', 'map', 'geography', 'subject', 'class', 'student', 'teacher', 'university'],
  'entrance-hall': ['hello', 'goodbye', 'good morning', 'good evening', 'good night', 'please', 'thank you', 'sorry', 'family', 'father', 'mother', 'parent', 'son', 'daughter', 'brother', 'sister', 'husband', 'wife', 'man', 'woman', 'boy', 'girl', 'child', 'baby', 'friend', 'person', 'people', 'day', 'time', 'year', 'month', 'week', 'hour', 'minute', 'number', 'color'],
  'transport': ['car', 'bus', 'train', 'plane', 'bicycle', 'motorcycle', 'ship', 'boat', 'taxi', 'metro', 'ticket', 'station', 'airport', 'street', 'road', 'bridge', 'traffic', 'stop', 'drive', 'travel', 'trip', 'journey', 'walk', 'gas', 'petrol', 'money', 'wallet'],
  'garden': ['flower', 'tree', 'grass', 'sun', 'rain', 'sky', 'cloud', 'wind', 'snow', 'garden', 'park', 'nature', 'plant', 'leaf', 'sport', 'swimming', 'pool', 'gym', 'football', 'walk'],
  'supermarket': ['shop', 'store', 'buy', 'pay', 'price', 'money', 'euro', 'product', 'fruit', 'vegetable', 'meat', 'fish', 'bread', 'milk', 'egg', 'cheese', 'water', 'wine', 'beer', 'coffee', 'tea', 'sugar', 'salt', 'oil', 'flour', 'bottle', 'box', 'bag'],
  'cafe': ['coffee', 'tea', 'milk', 'sugar', 'cake', 'break', 'sandwich', 'bread', 'butter', 'jam', 'glass', 'cup', 'table', 'waiter', 'menu', 'bill'],
  'gallery': ['art', 'painting', 'picture', 'photo', 'museum', 'sculpture', 'wall', 'color', 'beautiful', 'ugly', 'old', 'new', 'big', 'small', 'light', 'shadow'],
  'farm': ['farmer', 'fruit', 'vegetable', 'strawberry', 'cherry', 'pear', 'peach', 'grape', 'watermelon', 'field', 'animal', 'chicken', 'cow', 'pig', 'horse'],
  'animals': ['animal', 'dog', 'cat', 'horse', 'bird', 'chicken', 'wolf', 'fish', 'cow', 'pig', 'rabbit'],
  'weather': ['weather', 'climate', 'sun', 'rain', 'snow', 'wind', 'cloud', 'storm', 'thunder', 'lightning', 'fog', 'cold', 'hot', 'warm', 'degree', 'season'],
  'tools': ['tool', 'hammer', 'screw', 'scissors', 'glue', 'battery', 'wood', 'iron', 'engineer', 'build', 'clean', 'blackboard'],
  'emotions': ['love', 'happy', 'sad', 'angry', 'afraid', 'surprised', 'tired', 'bored', 'excited', 'nervous', 'calm', 'proud', 'jealous', 'hope', 'joy', 'anxiety', 'fear', 'shame', 'disappointed', 'embarrassed'],
  'actions': ['go', 'come', 'eat', 'drink', 'sleep', 'wake', 'walk', 'run', 'swim', 'fly', 'jump', 'sing', 'dance', 'play', 'work', 'study', 'read', 'write', 'speak', 'listen', 'look', 'see', 'watch', 'open', 'close', 'begin', 'finish', 'enter', 'exit', 'buy', 'sell', 'pay', 'take', 'give', 'put', 'get', 'make', 'do', 'have', 'be', 'can', 'must', 'want', 'like', 'prefer', 'try', 'remember', 'forget', 'help', 'call', 'ask', 'answer', 'say', 'tell', 'think', 'believe', 'know', 'understand', 'learn', 'teach', 'cook', 'clean', 'wash', 'dress', 'wait', 'turn', 'return', 'pass', 'lose', 'find', 'win', 'break', 'cut', 'carry', 'bring', 'send', 'receive', 'show', 'meet', 'leave', 'stay', 'live', 'die', 'born', 'grow'],
  'fantasy': ['dragon', 'monster', 'ghost', 'magic', 'wizard', 'princess', 'king', 'queen', 'castle', 'treasure', 'sword'],
};

// Categorize each word
const keep = [];
const reject = [];
const dialogueOnly = [];

for (const w of words) {
  const eng = w.english.toLowerCase();
  const id = w.id.toLowerCase();
  
  if (isPhrase(w)) {
    reject.push({ ...w, reason: 'phrase' });
    continue;
  }
  
  if (blocklist.has(id)) {
    reject.push({ ...w, reason: 'abstract/formal' });
    continue;
  }
  
  // Function words are dialogue-only (not visual dots)
  if (['e', 'ma', 'o', 'per', 'con', 'da', 'in', 'di', 'tra', 'fra', 'su', 'sotto', 'sopra', 'davanti', 'dietro', 'dentro', 'fuori', 'che', 'chi', 'come', 'dove', 'quando', 'perché', 'perche', 'quale', 'quanto', 'qualcuno', 'qualcosa', 'nessuno', 'tutto', 'nulla', 'io', 'tu', 'lui', 'lei', 'noi', 'voi', 'loro', 'mi', 'ti', 'ci', 'vi', 'gli', 'le', 'me', 'te', 'se', 'lo', 'la', 'li', 'le', 'ne'].includes(id)) {
    dialogueOnly.push({ ...w, reason: 'function_word' });
    continue;
  }
  
  keep.push(w);
}

console.log(`KEEP: ${keep.length}`);
console.log(`DIALOGUE_ONLY: ${dialogueOnly.length}`);
console.log(`REJECT: ${reject.length}`);

// Assign rooms to kept words
const roomAssignments = {};
for (const room of Object.keys(roomKeywords)) {
  roomAssignments[room] = [];
}
roomAssignments['uncategorized'] = [];

for (const w of keep) {
  const eng = w.english.toLowerCase();
  const id = w.id.toLowerCase();
  let assigned = false;
  
  for (const [room, keywords] of Object.entries(roomKeywords)) {
    for (const kw of keywords) {
      if (eng.includes(kw) || id === kw) {
        roomAssignments[room].push(w);
        assigned = true;
        break;
      }
    }
    if (assigned) break;
  }
  
  if (!assigned) {
    roomAssignments['uncategorized'].push(w);
  }
}

console.log('\n=== Room Distribution ===');
for (const [room, words] of Object.entries(roomAssignments)) {
  console.log(`${room}: ${words.length}`);
}

console.log('\n=== Uncategorized sample (first 40) ===');
for (const w of roomAssignments.uncategorized.slice(0, 40)) {
  console.log(`  ${w.id} = ${w.english}`);
}

// Write curated output
const output = {
  vocabulary: {},
  dialogueWords: {},
  roomMap: {}
};

for (const w of keep) {
  output.vocabulary[w.id] = w;
}
for (const w of dialogueOnly) {
  output.dialogueWords[w.id] = w;
}
for (const [room, words] of Object.entries(roomAssignments)) {
  if (room !== 'uncategorized') {
    output.roomMap[room] = words.map(w => w.id);
  }
}
output.uncategorized = roomAssignments.uncategorized.map(w => w.id);

fs.writeFileSync('curated-vocab.json', JSON.stringify(output, null, 2), 'utf8');
console.log('\nWrote curated-vocab.json');
