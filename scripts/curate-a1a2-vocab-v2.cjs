const fs = require('fs');
const { italianVocabulary } = require('../src/data/italian-generated.ts');

const words = Object.values(italianVocabulary);

// Expanded blocklist for abstract/formal/political/economic/bureaucratic words
const blocklist = new Set([
  'abbonamento', 'ambiente', 'ambulanza', 'articolo', 'aspetto', 'autore',
  'avvocata', 'avvocato', 'banca', 'banconota', 'calcolatrice', 'commissione',
  'compagno', 'concerto', 'corridoio', 'decreto', 'dentista', 'documento',
  'economico', 'era', 'errore', 'esempio', 'ferro', 'fiducia', 'finale',
  'finanziario', 'fiscale', 'giornalista', 'governo', 'impero', 'impossibile',
  'incredibile', 'legge', 'materia', 'mercante', 'messaggi', 'messaggio',
  'microfono', 'milione', 'milioni', 'norma', 'politica', 'potente',
  'presidente', 'prodotto', 'professore', 'professoressa', 'programma',
  'proposta', 'ragione', 'realta', 'regione', 'relazione', 'richiesta',
  'rifiuto', 'rumore', 'schiavo', 'sede', 'senso', 'sistema', 'spazio',
  'stato', 'storia', 'studio', 'successivo', 'tema', 'termine', 'titolo',
  'valore', 'voto'
]);

// Allowlist for words we definitely want even if they look abstract
const allowlist = new Set([
  'nome', 'parola', 'numero', 'anno', 'giorno', 'mese', 'settimana', 'ora',
  'minuto', 'momento', 'volta', 'parte', 'posto', 'punto', 'modo', 'caso',
  'fatto', 'testa', 'occhio', 'mano', 'piede', 'fronte', 'retro', 'inizio',
  'fine', 'mezzo', 'pezzo', 'lato', 'fondo', 'cima', 'mezzo', 'meta'
]);

function isPhrase(word) {
  return word.id.includes(' ');
}

// Massively expanded room keyword map
const roomKeywords = {
  'kitchen': ['food', 'eat', 'drink', 'cook', 'meal', 'fork', 'knife', 'spoon', 'plate', 'glass', 'cup', 'bottle', 'fridge', 'stove', 'pan', 'pot', 'coffee', 'tea', 'wine', 'beer', 'water', 'milk', 'egg', 'butter', 'cheese', 'bread', 'pasta', 'rice', 'salt', 'sugar', 'oil', 'meat', 'fish', 'fruit', 'vegetable', 'ice', 'hot', 'cold', 'sweet', 'menu', 'recipe', 'soup', 'cake', 'chocolate', 'honey', 'flour', 'pepper', 'juice', 'garlic', 'onion', 'banana', 'apple', 'orange', 'lemon', 'strawberry', 'cherry', 'pear', 'peach', 'grape', 'watermelon', 'tomato', 'potato', 'carrot', 'salad', 'pizza', 'ham', 'sausage', 'chicken', 'beef', 'dinner', 'lunch', 'breakfast', 'snack', 'dessert', 'ice cream', 'hungry', 'thirsty', 'cook', 'chef', 'kitchen', 'dish', 'napkin', 'bowl', 'mug', 'corkscrew', 'oven', 'microwave', 'freezer', 'sink', 'tap'],
  'bedroom': ['bed', 'sleep', 'wardrobe', 'closet', 'clothes', 'shirt', 'pants', 'dress', 'coat', 'shoe', 'boot', 'slipper', 'scarf', 'umbrella', 'bag', 'suitcase', 'backpack', 'key', 'glasses', 'earring', 'drawer', 'sock', 'hat', 'cap', 'blouse', 'skirt', 'jacket', 'sweater', 'tie', 'belt', 'glove', 'pajama', 'sheet', 'pillow', 'blanket', 'mattress', 'duvet', 'quilt', 'alarm', 'ring', 'jewelry', 'necklace', 'bracelet', 'watch', 'mirror', 'comb', 'brush'],
  'bathroom': ['bath', 'shower', 'sink', 'toilet', 'soap', 'towel', 'toothbrush', 'cream', 'shampoo', 'wash', 'clean', 'body', 'arm', 'leg', 'hand', 'foot', 'head', 'face', 'eye', 'nose', 'mouth', 'hair', 'knee', 'elbow', 'finger', 'thumb', 'wrist', 'ankle', 'lip', 'cheek', 'chin', 'throat', 'belly', 'stomach', 'back', 'neck', 'ear', 'tooth', 'tongue', 'beard', 'mustache', 'nail', 'skin', 'bone', 'blood', 'heart', 'brain', 'shave', 'toilet paper', 'plaster', 'bandage', 'medicine', 'pill', 'thermometer', 'fever', 'pain', 'sick', 'ill', 'health', 'hospital', 'doctor', 'nurse'],
  'living-room': ['sofa', 'chair', 'armchair', 'television', 'tv', 'radio', 'book', 'shelf', 'table', 'carpet', 'rug', 'curtain', 'room', 'house', 'home', 'building', 'palace', 'film', 'game', 'sport', 'show', 'music', 'song', 'video', 'phone', 'mobile', 'cell', 'remote', 'lamp', 'clock', 'picture', 'photo', 'plant', 'vase', 'cushion', 'fireplace', 'stairs', 'door', 'window', 'wall', 'ceiling', 'floor', 'roof', 'garage', 'balcony', 'basement', 'attic'],
  'library': ['school', 'study', 'book', 'desk', 'computer', 'paper', 'pen', 'pencil', 'map', 'geography', 'subject', 'class', 'student', 'teacher', 'university', 'library', 'notebook', 'dictionary', 'page', 'letter', 'word', 'sentence', 'question', 'answer', 'exam', 'test', 'homework', 'lesson', 'course', 'science', 'math', 'history', 'art', 'music', 'literature', 'language'],
  'entrance-hall': ['hello', 'goodbye', 'good morning', 'good evening', 'good night', 'please', 'thank you', 'sorry', 'family', 'father', 'mother', 'parent', 'son', 'daughter', 'brother', 'sister', 'husband', 'wife', 'man', 'woman', 'boy', 'girl', 'child', 'baby', 'friend', 'person', 'people', 'day', 'time', 'year', 'month', 'week', 'hour', 'minute', 'number', 'color', 'today', 'tomorrow', 'yesterday', 'now', 'morning', 'afternoon', 'evening', 'night', 'midnight', 'noon', 'date', 'calendar', 'birthday', 'holiday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december', 'spring', 'summer', 'autumn', 'winter'],
  'transport': ['car', 'bus', 'train', 'plane', 'bicycle', 'motorcycle', 'ship', 'boat', 'taxi', 'metro', 'subway', 'ticket', 'station', 'airport', 'street', 'road', 'bridge', 'traffic', 'stop', 'drive', 'travel', 'trip', 'journey', 'walk', 'gas', 'petrol', 'money', 'wallet', 'license', 'passport', 'driver', 'passenger', 'seat', 'belt', 'wheel', 'tire', 'engine', 'horn', 'garage', 'parking', 'direction', 'map', 'north', 'south', 'east', 'west', 'left', 'right', 'straight', 'turn', 'corner', 'crosswalk', 'traffic light', 'elevator', 'escalator'],
  'garden': ['flower', 'tree', 'grass', 'sun', 'rain', 'sky', 'cloud', 'wind', 'snow', 'garden', 'park', 'nature', 'plant', 'leaf', 'sport', 'swimming', 'pool', 'gym', 'football', 'soccer', 'tennis', 'basketball', 'volleyball', 'walk', 'run', 'jog', 'picnic', 'barbecue', 'campsite', 'tent', 'campfire', 'mountain', 'hill', 'river', 'lake', 'sea', 'beach', 'sand', 'stone', 'rock', 'wood', 'forest', 'path', 'trail', 'fence', 'gate'],
  'supermarket': ['shop', 'store', 'buy', 'pay', 'price', 'money', 'euro', 'product', 'fruit', 'vegetable', 'meat', 'fish', 'bread', 'milk', 'egg', 'cheese', 'water', 'wine', 'beer', 'coffee', 'tea', 'sugar', 'salt', 'oil', 'flour', 'bottle', 'box', 'bag', 'can', 'tin', 'jar', 'packet', 'cart', 'basket', 'cash', 'card', 'receipt', 'discount', 'sale', 'customer', 'cashier', 'shelf', 'aisle', 'scale'],
  'cafe': ['coffee', 'tea', 'milk', 'sugar', 'cake', 'break', 'sandwich', 'bread', 'butter', 'jam', 'glass', 'cup', 'table', 'waiter', 'waitress', 'menu', 'bill', 'tip', 'croissant', 'biscuit', 'cookie', 'pastry', 'donut', 'muffin', 'toast', 'cereal', 'yogurt', 'fruit', 'juice', 'water', 'wine', 'beer', 'cocktail', 'restaurant', 'bar', 'café'],
  'gallery': ['art', 'painting', 'picture', 'photo', 'photograph', 'museum', 'sculpture', 'statue', 'wall', 'color', 'beautiful', 'ugly', 'old', 'new', 'big', 'small', 'light', 'shadow', 'dark', 'bright', 'artist', 'frame', 'brush', 'paint', 'canvas', 'exhibition', 'gallery', 'theater', 'cinema', 'concert', 'stage', 'actor', 'actress', 'film', 'movie', 'camera', 'lens'],
  'farm': ['farmer', 'farm', 'field', 'barn', 'tractor', 'fruit', 'vegetable', 'strawberry', 'cherry', 'pear', 'peach', 'grape', 'watermelon', 'apple', 'orange', 'lemon', 'banana', 'tomato', 'potato', 'onion', 'garlic', 'carrot', 'cucumber', 'lettuce', 'corn', 'wheat', 'hay', 'animal', 'chicken', 'cow', 'pig', 'horse', 'sheep', 'goat', 'duck', 'goose', 'turkey', 'donkey', 'rabbit', 'mouse', 'rat', 'snail', 'worm', 'egg', 'milk', 'cheese', 'butter', 'cream', 'meat', 'wool', 'seed', 'soil', 'mud'],
  'animals': ['animal', 'dog', 'cat', 'horse', 'bird', 'chicken', 'wolf', 'fish', 'cow', 'pig', 'sheep', 'goat', 'duck', 'goose', 'turkey', 'donkey', 'rabbit', 'mouse', 'rat', 'snail', 'worm', 'elephant', 'lion', 'tiger', 'bear', 'monkey', 'snake', 'spider', 'insect', 'butterfly', 'bee', 'ant', 'fly', 'mosquito', 'frog', 'turtle', 'crocodile', 'shark', 'whale', 'dolphin', 'penguin', 'owl', 'eagle', 'parrot', 'pigeon', 'sparrow'],
  'weather': ['weather', 'climate', 'sun', 'rain', 'snow', 'wind', 'cloud', 'storm', 'thunder', 'lightning', 'fog', 'mist', 'cold', 'hot', 'warm', 'cool', 'degree', 'season', 'spring', 'summer', 'autumn', 'winter', 'temperature', 'forecast', 'sunshine', 'shade', 'rainbow', 'frost', 'ice', 'hail', 'drought', 'flood', 'hurricane', 'typhoon', 'tornado', 'earthquake'],
  'tools': ['tool', 'hammer', 'screw', 'screwdriver', 'scissors', 'glue', 'battery', 'wood', 'iron', 'engineer', 'build', 'clean', 'blackboard', 'drill', 'saw', 'axe', 'knife', 'ladder', 'rope', 'chain', 'wire', 'cable', 'plug', 'socket', 'switch', 'bulb', 'light', 'fan', 'heater', 'air conditioner', 'vacuum', 'broom', 'mop', 'bucket', 'sponge', 'brush', 'soap', 'detergent', 'polish', 'oil', 'paint', 'nail', 'screw', 'bolt', 'nut', 'washer', 'tape', 'string', 'thread', 'needle', 'pin', 'clip', 'staple'],
  'emotions': ['love', 'like', 'happy', 'sad', 'angry', 'mad', 'afraid', 'scared', 'surprised', 'shocked', 'tired', 'sleepy', 'bored', 'excited', 'nervous', 'anxious', 'calm', 'relaxed', 'proud', 'jealous', 'envy', 'hope', 'joy', 'pleasure', 'delight', 'fear', 'terror', 'horror', 'shame', 'embarrassed', 'ashamed', 'guilty', 'innocent', 'disappointed', 'frustrated', 'confused', 'curious', 'interested', 'indifferent', 'lonely', 'alone', 'friendly', 'kind', 'generous', 'selfish', 'brave', 'coward', 'patient', 'impatient', 'polite', 'rude', 'gentle', 'rough', 'soft', 'hard'],
  'actions': ['go', 'come', 'eat', 'drink', 'sleep', 'wake', 'walk', 'run', 'swim', 'fly', 'jump', 'sing', 'dance', 'play', 'work', 'study', 'read', 'write', 'speak', 'talk', 'listen', 'hear', 'look', 'see', 'watch', 'open', 'close', 'begin', 'start', 'finish', 'end', 'stop', 'enter', 'exit', 'leave', 'buy', 'sell', 'pay', 'take', 'get', 'give', 'put', 'make', 'do', 'have', 'be', 'can', 'must', 'should', 'need', 'want', 'wish', 'like', 'love', 'prefer', 'try', 'attempt', 'remember', 'forget', 'help', 'assist', 'call', 'phone', 'ask', 'request', 'answer', 'reply', 'say', 'tell', 'speak', 'think', 'believe', 'know', 'understand', 'learn', 'teach', 'cook', 'clean', 'wash', 'dress', 'wear', 'wait', 'turn', 'return', 'come back', 'pass', 'cross', 'lose', 'find', 'discover', 'win', 'defeat', 'break', 'fix', 'repair', 'cut', 'carry', 'bring', 'send', 'receive', 'show', 'meet', 'stay', 'remain', 'live', 'reside', 'die', 'dead', 'death', 'born', 'birth', 'grow', 'increase', 'decrease', 'rise', 'fall', 'drop', 'climb', 'descend', 'sit', 'stand', 'lie', 'rest'],
  'fantasy': ['dragon', 'monster', 'ghost', 'spirit', 'magic', 'magical', 'wizard', 'witch', 'princess', 'prince', 'king', 'queen', 'castle', 'palace', 'tower', 'treasure', 'gold', 'silver', 'jewel', 'gem', 'diamond', 'ruby', 'emerald', 'sapphire', 'pearl', 'crown', 'throne', 'sword', 'shield', 'armor', 'helmet', 'arrow', 'bow', 'spear', 'knight', 'warrior', 'hero', 'villain', 'enemy', 'battle', 'war', 'peace', 'spell', 'potion', 'fairy', 'elf', 'dwarf', 'giant', 'ogre', 'troll', 'unicorn', 'phoenix', 'mermaid', 'pirate', 'ninja', 'samurai', 'vampire', 'werewolf', 'zombie', 'alien', 'robot', 'superhero', 'superpower', ' spaceship', 'planet', 'star', 'moon', 'galaxy', 'universe'],
};

const keep = [];
const reject = [];
const dialogueOnly = [];

for (const w of words) {
  const id = w.id.toLowerCase();
  const eng = w.english.toLowerCase();
  
  if (isPhrase(w)) {
    reject.push({ ...w, reason: 'phrase' });
    continue;
  }
  
  if (blocklist.has(id) && !allowlist.has(id)) {
    reject.push({ ...w, reason: 'abstract/formal' });
    continue;
  }
  
  // Function words → dialogue only
  const functionWords = new Set([
    'e','ma','o','per','con','da','in','di','tra','fra','su','sotto','sopra','davanti','dietro','dentro','fuori',
    'che','chi','come','dove','quando','perché','perche','quale','quanto','qualcuno','qualcosa','nessuno',
    'tutto','nulla','niente','io','tu','lui','lei','noi','voi','loro','mi','ti','ci','vi','gli','le','me','te',
    'se','lo','la','li','ne','mio','tuo','suo','nostro','vostro','loro','miei','tuoi','suoi','nostri','vostri'
  ]);
  if (functionWords.has(id)) {
    dialogueOnly.push({ ...w, reason: 'function_word' });
    continue;
  }
  
  keep.push(w);
}

// Assign rooms
const roomAssignments = {};
for (const room of Object.keys(roomKeywords)) roomAssignments[room] = [];
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
    // Try secondary heuristics
    if (['rosso','verde','blu','giallo','nero','bianco','rosa','grigio','marrone','arancione','viola','colorato'].includes(id)) {
      roomAssignments['gallery'].push(w);
    } else if (['primavera','estate','autunno','inverno'].includes(id)) {
      roomAssignments['weather'].push(w);
    } else if (['lunedì','martedì','mercoledì','giovedì','venerdì','sabato','domenica','gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'].includes(id)) {
      roomAssignments['entrance-hall'].push(w);
    } else if (['uno','due','tre','quattro','cinque','sei','sette','otto','nove','dieci','undici','dodici','tredici','quattordici','quindici','sedici','diciassette','diciotto','diciannove','venti','trenta','cento','mille'].includes(id)) {
      roomAssignments['entrance-hall'].push(w);
    } else if (['forte','veloce','lento','alto','basso','lungo','corto','largo','stretto','grasso','magro','giovane','vecchio','nuovo','antico','moderno','pulito','sporco','buono','cattivo','bello','brutto','facile','difficile','caldo','freddo','pesante','leggero','morbido','duro','vuoto','pieno','aperto','chiuso','pronto','ricco','povero'].includes(id)) {
      roomAssignments['entrance-hall'].push(w); // common adjectives in mirror/welcome-mat
    } else {
      roomAssignments['uncategorized'].push(w);
    }
  }
}

console.log(`KEEP: ${keep.length}`);
console.log(`DIALOGUE_ONLY: ${dialogueOnly.length}`);
console.log(`REJECT: ${reject.length}`);
console.log('\n=== Room Distribution ===');
for (const [room, words] of Object.entries(roomAssignments)) {
  console.log(`${room}: ${words.length}`);
}

console.log('\n=== Remaining Uncategorized ===');
for (const w of roomAssignments.uncategorized) {
  console.log(`  ${w.id} = ${w.english}`);
}

// Write output
const output = {
  metadata: {
    totalOriginal: words.length,
    kept: keep.length,
    dialogueOnly: dialogueOnly.length,
    rejected: reject.length,
    generatedAt: new Date().toISOString()
  },
  vocabulary: {},
  dialogueWords: {},
  roomMap: {},
  uncategorized: roomAssignments.uncategorized.map(w => w.id)
};

for (const w of keep) output.vocabulary[w.id] = w;
for (const w of dialogueOnly) output.dialogueWords[w.id] = w;
for (const [room, words] of Object.entries(roomAssignments)) {
  if (room !== 'uncategorized') {
    output.roomMap[room] = words.map(w => w.id);
  }
}

fs.writeFileSync('curated-vocab-v2.json', JSON.stringify(output, null, 2), 'utf8');
console.log('\nWrote curated-vocab-v2.json');
