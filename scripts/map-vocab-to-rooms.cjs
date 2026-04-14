const fs = require('fs');
const path = require('path');

const { italianVocabulary } = require('../src/data/italian-generated.ts');
const roomsPath = path.join(__dirname, '../src/data/rooms.ts');

const roomMappings = {
  'entrance-hall': {
    keywords: ['door', 'entrance', 'hall', 'mirror', 'coat', 'hat', 'key', 'light', 'stairs', 'floor', 'ceiling', 'window', 'curtain', 'bell', 'carpet', 'rug', 'man', 'woman', 'family', 'gentleman', 'lady', 'mr', 'mrs', 'people', 'person', 'hello', 'goodbye', 'welcome', 'enter', 'exit', 'look', 'see', 'dirty', 'clean', 'shoe'],
  },
  'kitchen': {
    keywords: ['kitchen', 'table', 'chair', 'plate', 'glass', 'cup', 'fork', 'knife', 'spoon', 'pot', 'pan', 'oven', 'fridge', 'refrigerator', 'bread', 'water', 'wine', 'coffee', 'milk', 'cheese', 'egg', 'butter', 'pasta', 'oil', 'salt', 'sugar', 'cook', 'eat', 'drink', 'food', 'meal', 'breakfast', 'lunch', 'dinner', 'cooking', 'hot', 'cold', 'fresh', 'burn', 'boil', 'cut', 'pour', 'stove', 'sink', 'dish', 'meat', 'fish', 'vegetable', 'fruit', 'flour', 'tomato', 'potato', 'rice', 'soup', 'cake', 'ice', 'juice', 'beer', 'tea', 'honey', 'jam', 'snack', 'recipe', 'ingredient', 'bowl', 'bottle', 'fork', 'menu', 'taste', 'delicious', 'spicy', 'sweet', 'sour', 'bitter'],
  },
  'library': {
    keywords: ['book', 'read', 'study', 'learn', 'write', 'pen', 'pencil', 'notebook', 'paper', 'work', 'computer', 'internet', 'email', 'clock', 'watch', 'time', 'school', 'student', 'teacher', 'lesson', 'homework', 'exam', 'test', 'dictionary', 'library', 'knowledge', 'science', 'art', 'history', 'math', 'music', 'letter', 'page', 'word', 'language', 'understand', 'know', 'think', 'idea', 'question', 'answer', 'number', 'count'],
  },
  'bedroom': {
    keywords: ['bed', 'pillow', 'blanket', 'wardrobe', 'closet', 'nightstand', 'lamp', 'clock', 'alarm', 'sleep', 'dream', 'wake', 'tired', 'rest', 'mother', 'father', 'son', 'daughter', 'brother', 'sister', 'child', 'baby', 'shirt', 'pants', 'trousers', 'skirt', 'dress', 'jacket', 'sweater', 'shoe', 'sock', 'underwear', 'clothes', 'clothing', 'wear', 'dress', 'wardrobe', 'closet', 'change'],
  },
  'bathroom': {
    keywords: ['shower', 'bath', 'sink', 'towel', 'soap', 'toothbrush', 'toothpaste', 'wash', 'face', 'hand', 'tooth', 'teeth', 'neck', 'shoulder', 'hair', 'back', 'arm', 'leg', 'foot', 'feet', 'nose', 'eye', 'ear', 'mouth', 'head', 'finger', 'skin', 'body', 'health', 'sick', 'pain', 'medicine', 'doctor', 'hospital', 'blood', 'bone', 'heart', 'brain', 'stomach', 'clean', 'dirty', 'wet', 'dry', 'toilet'],
  },
  'garden': {
    keywords: ['flower', 'tree', 'plant', 'grass', 'garden', 'street', 'road', 'path', 'area', 'field', 'sky', 'sun', 'cloud', 'wind', 'rain', 'snow', 'nature', 'outdoor', 'leaf', 'root', 'seed', 'earth', 'soil', 'mountain', 'hill', 'valley', 'forest', 'wood', 'river', 'lake', 'sea', 'beach', 'sand', 'stone', 'rock', 'green', 'blue', 'weather', 'season', 'spring', 'summer', 'autumn', 'fall', 'winter'],
  },
  'transport': {
    keywords: ['ticket', 'pass', 'subscription', 'money', 'euro', 'card', 'train', 'car', 'taxi', 'metro', 'subway', 'stop', 'bus', 'bicycle', 'bike', 'motorcycle', 'tram', 'street', 'road', 'drive', 'travel', 'trip', 'journey', 'station', 'platform', 'airport', 'airplane', 'flight', 'ship', 'boat', 'harbor', 'port', 'gas', 'fuel', 'speed', 'fast', 'slow', 'far', 'near', 'direction', 'map', 'address', 'buy', 'pay', 'cost', 'price', 'expensive', 'cheap', 'free', 'vehicle'],
  },
  'living-room': {
    keywords: ['sofa', 'couch', 'armchair', 'carpet', 'rug', 'table', 'television', 'tv', 'radio', 'screen', 'bookshelf', 'painting', 'picture', 'curtain', 'remote', 'control', 'relax', 'sit', 'watch', 'listen', 'movie', 'film', 'show', 'news', 'sport', 'game', 'play', 'music', 'song', 'live', 'home', 'house', 'room', 'apartment', 'building', 'furniture', 'living'],
  },
  'supermarket': {
    keywords: ['apple', 'orange', 'tomato', 'buy', 'pay', 'price', 'receipt', 'cart', 'trolley', 'checkout', 'cashier', 'shop', 'store', 'market', 'supermarket', 'fruit', 'vegetable', 'meat', 'fish', 'bread', 'cheese', 'milk', 'egg', 'butter', 'oil', 'sugar', 'salt', 'flour', 'rice', 'pasta', 'potato', 'onion', 'garlic', 'lemon', 'banana', 'grape', 'water', 'juice', 'beer', 'wine', 'coffee', 'tea', 'chocolate', 'ice cream', 'cookie', 'cake', 'snack', 'can', 'box', 'bottle', 'bag', 'kilo', 'liter', 'how much', 'money', 'euro', 'cent', 'change', 'expensive', 'cheap', 'fresh', 'frozen', 'organic', 'customer'],
  },
  'cafe': {
    keywords: ['coffee', 'croissant', 'eat', 'drink', 'friend', 'speak', 'talk', 'bar', 'waiter', 'bill', 'check', 'sugar', 'milk', 'cappuccino', 'espresso', 'tea', 'juice', 'water', 'glass', 'cup', 'plate', 'fork', 'spoon', 'knife', 'napkin', 'menu', 'order', 'please', 'thank you', 'good morning', 'goodbye', 'how are you', 'meet', 'invite', 'pay', 'tip', 'table', 'chair', 'sit', 'smoke', 'cigarette', 'newspaper', 'magazine'],
  },
  'gallery': {
    keywords: ['city', 'street', 'road', 'area', 'space', 'center', 'level', 'zone', 'hospital', 'pharmacy', 'shop', 'store', 'price', 'market', 'painting', 'picture', 'museum', 'art', 'artist', 'exhibition', 'sculpture', 'statue', 'gallery', 'culture', 'history', 'monument', 'tourist', 'guide', 'ticket', 'entrance', 'beautiful', 'ugly', 'old', 'new', 'big', 'small', 'famous', 'interesting', 'boring', 'color', 'light', 'shadow', 'frame', 'wall'],
  },
  'animals': {
    keywords: ['iguana', 'lizard', 'snake', 'wolf', 'bear', 'wasp', 'butterfly', 'dolphin', 'animal', 'bird', 'dog', 'cat', 'fish', 'horse', 'cow', 'pig', 'sheep', 'goat', 'chicken', 'duck', 'goose', 'rabbit', 'mouse', 'rat', 'elephant', 'lion', 'tiger', 'monkey', 'giraffe', 'zebra', 'hippopotamus', 'rhinoceros', 'crocodile', 'turtle', 'frog', 'spider', 'ant', 'bee', 'fly', 'mosquito', 'worm', 'snail', 'shell', 'feather', 'fur', 'tail', 'wing', 'paw', 'claw', 'horn', 'pet', 'wild', 'zoo', 'farm animal', 'insect', 'reptile', 'mammal'],
  },
  'weather': {
    keywords: ['lightning', 'hail', 'dawn', 'aurora', 'snow', 'rain', 'waterfall', 'river', 'lake', 'thunder', 'storm', 'fog', 'mist', 'cloud', 'wind', 'sun', 'heat', 'cold', 'warm', 'cool', 'freeze', 'melt', 'flood', 'drought', 'weather', 'forecast', 'temperature', 'degree', 'climate', 'season', 'spring', 'summer', 'autumn', 'fall', 'winter', 'rainbow', 'ice', 'snowflake', 'drop', 'wet', 'dry', 'humid', 'sunny', 'cloudy', 'windy', 'rainy', 'snowy', 'stormy'],
  },
  'tools': {
    keywords: ['hammer', 'saw', 'screwdriver', 'scissors', 'file', 'drill', 'ladle', 'kettle', 'tool', 'instrument', 'machine', 'engine', 'motor', 'wheel', 'gear', 'chain', 'rope', 'wire', 'nail', 'screw', 'bolt', 'nut', 'plate', 'sheet', 'board', 'stick', 'tube', 'pipe', 'bucket', 'broom', 'brush', 'mop', 'sponge', 'knife', 'axe', 'pick', 'shovel', 'rake', 'hoe', 'plow', 'glue', 'tape', 'paint', 'ladder', 'flashlight', 'battery', 'plug', 'socket', 'switch', 'repair', 'fix', 'build', 'construct', 'measure', 'cut', 'hit', 'dig', 'sweep', 'clean', 'sharp', 'blunt'],
  },
  'actions': {
    keywords: ['kick', 'jump', 'wake up', 'shave', 'push', 'pull', 'kiss', 'speak', 'talk', 'run', 'walk', 'sit', 'stand', 'lie', 'sleep', 'eat', 'drink', 'read', 'write', 'look', 'see', 'hear', 'listen', 'feel', 'touch', 'smell', 'taste', 'open', 'close', 'turn', 'move', 'go', 'come', 'leave', 'arrive', 'enter', 'exit', 'return', 'begin', 'start', 'stop', 'finish', 'end', 'continue', 'repeat', 'choose', 'decide', 'try', 'succeed', 'fail', 'win', 'lose', 'fall', 'rise', 'climb', 'descend', 'fly', 'swim', 'dance', 'sing', 'cry', 'laugh', 'smile', 'shout', 'whisper', 'call', 'ask', 'answer', 'tell', 'say', 'explain', 'show', 'give', 'take', 'bring', 'carry', 'hold', 'throw', 'catch', 'hit', 'fight', 'hug', 'help', 'kill', 'die', 'live', 'love', 'hate', 'like', 'want', 'need', 'prefer', 'hope', 'wish', 'believe', 'doubt', 'remember', 'forget', 'understand', 'know', 'think', 'imagine', 'learn', 'teach', 'study', 'work', 'rest', 'play', 'wait', 'search', 'find'],
  },
  'emotions': {
    keywords: ['happy', 'cheerful', 'sad', 'angry', 'confused', 'nervous', 'polite', 'courteous', 'brave', 'courageous', 'honest', 'emotion', 'feeling', 'mood', 'state', 'mind', 'soul', 'spirit', 'heart', 'love', 'hate', 'fear', 'afraid', 'scared', 'worry', 'anxious', 'calm', 'peaceful', 'excited', 'bored', 'tired', 'energetic', 'lazy', 'active', 'shy', 'embarrassed', 'ashamed', 'proud', 'jealous', 'envy', 'surprised', 'shocked', 'disappointed', 'satisfied', 'hopeful', 'desperate', 'lonely', 'alone', 'together', 'free', 'crazy', 'mad', 'sane', 'normal', 'strange', 'weird', 'funny', 'serious', 'kind', 'nice', 'good', 'bad', 'evil', 'beautiful', 'ugly'],
  },
  'farm': {
    keywords: ['asparagus', 'broccoli', 'eggplant', 'aubergine', 'avocado', 'cherry', 'ear', 'grain', 'hay', 'plow', 'farm', 'farmer', 'agriculture', 'crop', 'harvest', 'field', 'tractor', 'barn', 'stable', 'chicken', 'cow', 'pig', 'sheep', 'goat', 'horse', 'donkey', 'rabbit', 'duck', 'goose', 'turkey', 'wheat', 'barley', 'corn', 'oat', 'rye', 'rice', 'cotton', 'tobacco', 'pumpkin', 'melon', 'watermelon', 'peach', 'pear', 'plum', 'fig', 'olive', 'grape', 'nut', 'almond', 'hazelnut', 'walnut', 'mushroom', 'truffle', 'soil', 'seed', 'plant', 'grow', 'sow', 'reap', 'gather', 'pick', 'dig', 'water', 'fertilize'],
  },
  'fantasy': {
    keywords: ['dragon', 'fairy', 'witch', 'wizard', 'magician', 'ghost', 'prince', 'princess', 'queen', 'king', 'castle', 'palace', 'tower', 'dungeon', 'knight', 'sword', 'shield', 'armor', 'helmet', 'horse', 'monster', 'demon', 'devil', 'angel', 'god', 'goddess', 'temple', 'church', 'prayer', 'sacrifice', 'magic', 'spell', 'curse', 'blessing', 'potion', 'crystal', 'mirror', 'book', 'map', 'treasure', 'gold', 'silver', 'jewel', 'gem', 'diamond', 'ruby', 'emerald', 'sapphire', 'pearl', 'crown', 'throne', 'scepter', 'ring', 'necklace', 'chain', 'key', 'door', 'gate', 'portal', 'cave', 'mountain', 'island', 'ocean', 'sea', 'river', 'lake', 'swamp', 'desert', 'volcano', 'thunder', 'lightning', 'storm', 'rainbow', 'star', 'moon', 'sun', 'planet', 'universe', 'galaxy', 'comet', 'eclipse', 'shadow', 'darkness', 'light', 'fire', 'ice', 'wind', 'earth', 'water', 'death', 'life', 'dream', 'nightmare', 'destiny', 'fate', 'prophecy', 'legend', 'myth', 'story', 'tale', 'adventure', 'quest', 'journey', 'battle', 'war', 'peace', 'victory', 'defeat', 'hero', 'villain', 'enemy', 'friend', 'ally', 'traitor', 'spy', 'thief', 'assassin', 'warrior', 'archer', 'mage', 'healer', 'bard', 'ranger', 'rogue', 'paladin', 'necromancer', 'vampire', 'werewolf', 'zombie', 'skeleton', 'orc', 'elf', 'dwarf', 'goblin', 'troll', 'giant', 'pixie', 'genie', 'phoenix', 'griffin', 'unicorn', 'pegasus', 'centaur', 'mermaid', 'kraken', 'hydra', 'minotaur', 'sphinx', 'basilisk', 'chimera', 'gorgon', 'banshee', 'poltergeist', 'wraith', 'lich', 'shaman', 'druid', 'monk', 'samurai', 'ninja', 'pirate', 'cowboy', 'explorer', 'astronaut', 'pilot', 'captain', 'general', 'emperor', 'empress', 'lord', 'lady', 'master', 'servant', 'slave', 'prisoner', 'criminal', 'murderer', 'victim', 'witness', 'judge', 'jury', 'lawyer', 'police', 'detective', 'soldier', 'guard', 'prison', 'jail', 'cell', 'court', 'trial', 'sentence', 'punishment', 'crime', 'sin', 'guilt', 'innocence', 'justice', 'mercy', 'forgiveness', 'revenge', 'betrayal', 'loyalty', 'honor', 'dignity', 'pride', 'humility', 'wisdom', 'knowledge', 'truth', 'lie', 'secret', 'mystery', 'riddle', 'puzzle', 'clue', 'evidence', 'proof', 'fact', 'opinion', 'belief', 'faith', 'religion', 'cult', 'church', 'temple', 'mosque', 'synagogue', 'shrine', 'altar', 'ritual', 'ceremony', 'festival', 'celebration', 'holiday', 'vacation', 'birthday', 'anniversary', 'wedding', 'funeral', 'baptism', 'communion', 'confirmation', 'ordination', 'pilgrimage', 'prayer', 'meditation', 'contemplation', 'enlightenment', 'nirvana', 'salvation', 'damnation', 'heaven', 'hell', 'purgatory', 'limbo', 'paradise'],
  },
};

// Exact word assignments for known words
const exactAssignments = {
  'entrance-hall': ['porta', 'chiave', 'specchio', 'cappotto', 'cappello', 'luce', 'scala', 'pavimento', 'soffitto', 'finestra', 'tenda', 'campanello', 'tappeto', 'uomo', 'donna', 'famiglia', 'signore', 'signora', 'ingresso', 'uscita', 'arrivare', 'entrare', 'uscire', 'guardare', 'vedere', 'sporco', 'pulito', 'scarpa', 'saluto'],
  'kitchen': ['tavolo', 'sedia', 'piatto', 'bicchiere', 'tazza', 'forchetta', 'coltello', 'cucchiaio', 'pentola', 'padella', 'forno', 'frigo', 'pane', 'acqua', 'vino', 'caffe', 'latte', 'formaggio', 'uova', 'burro', 'pasta', 'olio', 'sale', 'zucchero', 'cucina', 'mangiare', 'bere', 'cibo', 'caldo', 'freddo', 'fresco', 'cuocere', 'tagliare', 'versare', 'fuoco', 'carne', 'pesce', 'verdura', 'frutta', 'farina', 'pomodoro', 'patata', 'riso', 'minestra', 'torta', 'ghiaccio', 'succo', 'birra', 'te', 'miele', 'marmellata', 'ricetta', 'ingrediente', 'scodella', 'bottiglia', 'menu', 'gusto', 'saporito', 'piccante', 'dolce', 'aspro', 'amaro'],
  'library': ['leggere', 'libro', 'studiare', 'imparare', 'scrivere', 'penna', 'quaderno', 'lavorare', 'computer', 'internet', 'email', 'orologio', 'scuola', 'studente', 'insegnante', 'lezione', 'compito', 'esame', 'test', 'dizionario', 'biblioteca', 'conoscenza', 'scienza', 'arte', 'storia', 'matematica', 'musica', 'lettera', 'pagina', 'parola', 'lingua', 'capire', 'sapere', 'pensare', 'idea', 'domanda', 'risposta', 'numero', 'contare'],
  'bedroom': ['letto', 'cuscino', 'coperta', 'armadio', 'comodino', 'lampada', 'orologio', 'sveglia', 'dormire', 'sogno', 'svegliarsi', 'stanco', 'riposare', 'madre', 'padre', 'figlio', 'figlia', 'fratello', 'sorella', 'bambino', 'bambina', 'camicia', 'pantaloni', 'gonna', 'vestito', 'giacca', 'maglione', 'scarpa', 'calza', 'biancheria', 'vestiti', 'indossare', 'vestirsi', 'spogliarsi', 'cambiare'],
  'bathroom': ['doccia', 'bagno', 'lavandino', 'asciugamano', 'sapone', 'spazzolino', 'dentifricio', 'lavarsi', 'faccia', 'mano', 'denti', 'collo', 'spalla', 'capelli', 'schiena', 'braccio', 'gamba', 'piede', 'piedi', 'naso', 'occhio', 'orecchio', 'bocca', 'testa', 'dito', 'pelle', 'corpo', 'salute', 'malato', 'dolore', 'medicina', 'dottore', 'ospedale', 'sangue', 'osso', 'cuore', 'cervello', 'stomaco', 'pulito', 'sporco', 'bagnato', 'asciutto', 'cesso', 'toilette'],
  'garden': ['fiore', 'albero', 'pianta', 'erba', 'giardino', 'via', 'strada', 'zona', 'campo', 'cielo', 'sole', 'nuvola', 'vento', 'pioggia', 'neve', 'natura', 'foglia', 'radice', 'seme', 'terra', 'montagna', 'collina', 'valle', 'foresta', 'bosco', 'fiume', 'lago', 'mare', 'spiaggia', 'sabbia', 'pietra', 'roccia', 'verde', 'azzurro', 'tempo', 'stagione', 'primavera', 'estate', 'autunno', 'inverno'],
  'transport': ['biglietto', 'abbonamento', 'soldi', 'euro', 'carta', 'treno', 'macchina', 'taxi', 'metro', 'fermata', 'autobus', 'bicicletta', 'moto', 'tram', 'strada', 'guidare', 'viaggiare', 'viaggio', 'stazione', 'binario', 'aeroporto', 'aereo', 'volo', 'nave', 'barca', 'porto', 'benzina', 'carburante', 'velocita', 'veloce', 'lento', 'lontano', 'vicino', 'direzione', 'mappa', 'indirizzo', 'comprare', 'pagare', 'costare', 'prezzo', 'caro', 'economico', 'gratis', 'veicolo'],
  'living-room': ['divano', 'poltrona', 'tappeto', 'tavolino', 'televisione', 'tv', 'radio', 'schermo', 'libreria', 'quadro', 'tenda', 'telecomando', 'rilassarsi', 'sedersi', 'guardare', 'ascoltare', 'film', 'spettacolo', 'notizie', 'sport', 'gioco', 'giocare', 'musica', 'canzone', 'vivere', 'casa', 'stanza', 'appartamento', 'edificio', 'mobile', 'soggiorno'],
  'supermarket': ['mela', 'arancia', 'pomodoro', 'comprare', 'pagare', 'prezzo', 'scontrino', 'carrello', 'cassa', 'negozio', 'mercato', 'supermercato', 'frutta', 'verdura', 'carne', 'pesce', 'pane', 'formaggio', 'latte', 'uova', 'burro', 'olio', 'zucchero', 'sale', 'farina', 'riso', 'patata', 'cipolla', 'aglio', 'limone', 'banana', 'uva', 'succo', 'birra', 'vino', 'caffe', 'te', 'cioccolata', 'gelato', 'biscotto', 'torta', 'scatola', 'bottiglia', 'sacchetto', 'chilo', 'litro', 'quanto costa', 'soldi', 'euro', 'centesimo', 'resto', 'caro', 'economico', 'fresco', 'surgelato', 'biologico', 'cliente'],
  'cafe': ['caffe', 'vorrei', 'cornetto', 'posso', 'mangiare', 'bere', 'amico', 'parlare', 'bar', 'cameriere', 'conto', 'zucchero', 'latte', 'cappuccino', 'espresso', 'te', 'succo', 'acqua', 'bicchiere', 'tazza', 'piatto', 'forchetta', 'cucchiaio', 'coltello', 'tovagliolo', 'menu', 'ordinare', 'per favore', 'grazie', 'buongiorno', 'arrivederci', 'come stai', 'incontrare', 'invitare', 'pagare', 'mancia', 'tavolo', 'sedia', 'sedersi', 'fumare', 'sigaretta', 'giornale', 'rivista'],
  'gallery': ['citta', 'via', 'strada', 'area', 'spazio', 'centro', 'livello', 'zona', 'ospedale', 'farmacia', 'negozio', 'prezzo', 'mercato', 'quadro', 'museo', 'arte', 'artista', 'mostra', 'scultura', 'statua', 'galleria', 'cultura', 'storia', 'monumento', 'turista', 'guida', 'biglietto', 'ingresso', 'bello', 'brutto', 'vecchio', 'nuovo', 'grande', 'piccolo', 'famoso', 'interessante', 'noioso', 'colore', 'luce', 'ombra', 'cornice', 'muro'],
  'animals': ['iguana', 'lucertola', 'serpente', 'lupo', 'orso', 'vespa', 'farfalla', 'delfino', 'animale', 'uccello', 'cane', 'gatto', 'pesce', 'cavallo', 'mucca', 'maiale', 'pecora', 'capra', 'pollo', 'anatra', 'oca', 'coniglio', 'topo', 'ratto', 'elefante', 'leone', 'tigre', 'scimmia', 'giraffa', 'zebra', 'ippopotamo', 'rinoceronte', 'coccodrillo', 'tartaruga', 'rana', 'ragno', 'formica', 'ape', 'mosca', 'zanzara', 'verme', 'lumaca', 'conchiglia', 'piuma', 'pelliccia', 'coda', 'ala', 'zampa', 'artiglio', 'corno', 'animale domestico', 'selvatico', 'zoo', 'insetto', 'rettile', 'mammifero'],
  'weather': ['fulmine', 'grandine', 'aurora', 'neve', 'piovere', 'cascata', 'fiume', 'lago', 'tuono', 'temporale', 'nebbia', 'foschia', 'nuvola', 'vento', 'sole', 'caldo', 'freddo', 'tiepido', 'fresco', 'gelare', 'sciogliersi', 'alluvione', 'siccita', 'previsione', 'temperatura', 'grado', 'celsius', 'clima', 'stagione', 'primavera', 'estate', 'autunno', 'inverno', 'arcobaleno', 'ghiaccio', 'fiocco di neve', 'goccia', 'bagnato', 'asciutto', 'umido', 'soleggiato', 'nuvoloso', 'ventoso', 'piovoso', 'nevoso', 'tempestoso'],
  'tools': ['martello', 'sega', 'cacciavite', 'forbici', 'limare', 'trapanare', 'mestolo', 'bollitore', 'attrezzo', 'strumento', 'macchina', 'motore', 'ruota', 'ingranaggio', 'catena', 'corda', 'filo', 'chiodo', 'vite', 'bullone', 'dado', 'piastra', 'lastra', 'tavola', 'bastone', 'tubo', 'secchio', 'scopa', 'spazzola', 'straccio', 'spugna', 'coltello', 'ascia', 'piccone', 'pala', 'rastrello', 'zappa', 'aratro', 'colla', 'nastro', 'vernice', 'pittura', 'scala', 'torcia', 'batteria', 'spina', 'presa', 'interruttore', 'riparare', 'sistemare', 'costruire', 'misurare', 'tagliare', 'colpire', 'scavare', 'spazzare', 'pulire', 'affilato', 'ottuso'],
  'actions': ['calciare', 'saltare', 'svegliarsi', 'radersi', 'spingere', 'tirare', 'baciare', 'parlare', 'correre', 'camminare', 'sedersi', 'alzarsi', 'sdraiarsi', 'dormire', 'mangiare', 'bere', 'leggere', 'scrivere', 'guardare', 'vedere', 'sentire', 'ascoltare', 'toccare', 'odorare', 'gustare', 'aprire', 'chiudere', 'girare', 'muoversi', 'andare', 'venire', 'partire', 'arrivare', 'entrare', 'uscire', 'tornare', 'iniziare', 'cominciare', 'fermarsi', 'finire', 'terminare', 'continuare', 'ripetere', 'scegliere', 'decidere', 'provare', 'tentare', 'riuscire', 'fallire', 'vincere', 'perdere', 'cadere', 'salire', 'scendere', 'volare', 'nuotare', 'ballare', 'cantare', 'piangere', 'ridere', 'sorridere', 'gridare', 'sussurrare', 'chiamare', 'chiedere', 'rispondere', 'dire', 'spiegare', 'descrivere', 'mostrare', 'dare', 'prendere', 'portare', 'tenere', 'afferrare', 'gettare', 'colpire', 'battere', 'combattere', 'abbracciare', 'aiutare', 'salvare', 'uccidere', 'morire', 'vivere', 'amare', 'odiare', 'piacere', 'volere', 'preferire', 'sperare', 'desiderare', 'credere', 'dubitare', 'ricordare', 'dimenticare', 'capire', 'sapere', 'pensare', 'immaginare', 'imparare', 'insegnare', 'studiare', 'lavorare', 'riposare', 'giocare', 'aspettare', 'cercare', 'trovare'],
  'emotions': ['allegro', 'triste', 'arrabbiato', 'confuso', 'nervoso', 'cortese', 'coraggioso', 'onesto', 'emozione', 'sentimento', 'umore', 'stato', 'mente', 'anima', 'spirito', 'cuore', 'amore', 'odio', 'paura', 'spaventato', 'impaurito', 'preoccupazione', 'ansioso', 'calmo', 'tranquillo', 'eccitato', 'annoaito', 'stanco', 'energico', 'pigro', 'attivo', 'timido', 'imbarazzato', 'vergognoso', 'orgoglioso', 'geloso', 'invidia', 'sorpreso', 'scioccato', 'deluso', 'soddisfatto', 'speranzoso', 'disperato', 'solo', 'solitario', 'insieme', 'libero', 'prigioniero', 'pazzo', 'matto', 'sano', 'normale', 'strano', 'bizzarro', 'divertente', 'serio', 'gentile', 'simpatico', 'buono', 'cattivo', 'malvagio', 'bello', 'brutto'],
  'farm': ['asparago', 'broccolo', 'melanzana', 'avocado', 'ciliegia', 'spiga', 'fieno', 'arare', 'fattoria', 'contadino', 'agricoltura', 'raccolto', 'campo', 'trattore', 'fienile', 'stalla', 'pollo', 'gallina', 'mucca', 'maiale', 'pecora', 'capra', 'cavallo', 'asino', 'coniglio', 'anatra', 'oca', 'tacchino', 'grano', 'orzo', 'mais', 'avena', 'segale', 'riso', 'cotone', 'tabacco', 'zucca', 'melone', 'anguria', 'pesca', 'pera', 'prugna', 'fico', 'oliva', 'uva', 'noce', 'mandorla', 'nocciola', 'fungo', 'tartufo', 'terra', 'seme', 'piantare', 'crescere', 'seminare', 'mietere', 'raccogliere', 'cogliere', 'scavare', 'annaffiare', 'concimare'],
  'fantasy': ['drago', 'fata', 'strega', 'mago', 'fantasma', 'principe', 'principessa', 'regina', 're', 'castello', 'palazzo', 'torre', 'segreta', 'cavaliere', 'spada', 'scudo', 'armatura', 'elmo', 'cavallo', 'mostro', 'demone', 'diavolo', 'angelo', 'dio', 'dea', 'tempio', 'chiesa', 'preghiera', 'sacrificio', 'magia', 'incantesimo', 'maledizione', 'benedizione', 'pozione', 'cristallo', 'specchio', 'libro', 'mappa', 'tesoro', 'oro', 'argento', 'gioiello', 'gemma', 'diamante', 'rubino', 'smeraldo', 'zaffiro', 'perla', 'corona', 'trono', 'scettro', 'anello', 'collana', 'catena', 'chiave', 'porta', 'cancello', 'portale', 'foresta', 'grotta', 'montagna', 'isola', 'oceano', 'mare', 'fiume', 'lago', 'palude', 'deserto', 'vulcano', 'tuono', 'fulmine', 'tempesta', 'arcobaleno', 'stella', 'luna', 'sole', 'pianeta', 'universo', 'galassia', 'cometa', 'eclissi', 'ombra', 'oscurita', 'luce', 'fuoco', 'ghiaccio', 'vento', 'terra', 'acqua', 'morte', 'vita', 'sogno', 'incubo', 'destino', 'fato', 'profezia', 'leggenda', 'mito', 'storia', 'racconto', 'avventura', 'missione', 'viaggio', 'battaglia', 'guerra', 'pace', 'vittoria', 'sconfitta', 'eroe', 'villain', 'nemico', 'amico', 'alleato', 'traditore', 'spia', 'ladro', 'assassino', 'guerriero', 'arciere', 'guaritore', 'bardo', 'guardiano', 'ladro', 'paladino', 'negromante', 'vampiro', 'lupo mannaro', 'zombie', 'scheletro', 'orco', 'elfo', 'nano', 'goblin', 'troll', 'gigante', 'folletto', 'genio', 'fenice', 'grifone', 'unicorno', 'pegaso', 'centauro', 'sirena', 'kraken', 'idra', 'minotauro', 'sfinge', 'basilisco', 'chimera', 'gorgone', 'banshee', 'poltergeist', 'wraith', 'lich', 'sciamano', 'druido', 'monaco', 'samurai', 'ninja', 'pirata', 'cowboy', 'esploratore', 'astronauta', 'pilota', 'capitano', 'generale', 'imperatore', 'imperatrice', 'signore', 'signora', 'maestro', 'servo', 'schiavo', 'prigioniero', 'criminale', 'vittima', 'testimone', 'giudice', 'giuria', 'avvocato', 'poliziotto', 'detective', 'soldato', 'guardia', 'prigione', 'carcere', 'cella', 'tribunale', 'processo', 'sentenza', 'punizione', 'crimine', 'peccato', 'colpa', 'innocenza', 'giustizia', 'misericordia', 'perdono', 'vendetta', 'tradimento', 'lealta', 'onore', 'dignita', 'orgoglio', 'umilta', 'saggezza', 'conoscenza', 'verita', 'bugia', 'segreto', 'mistero', 'indovinello', 'enigma', 'indizio', 'prova', 'fatto', 'opinione', 'credenza', 'fede', 'religione', 'culto', 'chiesa', 'tempio', 'moschea', 'sinagoga', 'santuario', 'altare', 'rito', 'cerimonia', 'festa', 'celebrazione', 'vacanza', 'compleanno', 'anniversario', 'matrimonio', 'funerale', 'battesimo', 'comunione', 'cresima', 'ordinazione', 'pellegrinaggio', 'preghiera', 'meditazione', 'contemplazione', 'illuminazione', 'nirvana', 'salvezza', 'dannazione', 'paradiso', 'inferno', 'purgatorio', 'limbo'],
};

function assignWordsToRooms() {
  const assignments = {};
  for (const roomId of Object.keys(roomMappings)) {
    assignments[roomId] = [];
  }
  
  const unassigned = [];
  
  for (const [wordId, word] of Object.entries(italianVocabulary)) {
    // Skip phrases - only map single words
    if (wordId.includes(' ')) continue;
    
    const english = (word.english || '').toLowerCase();
    const native = (word.native || '').toLowerCase();
    let assigned = false;
    
    // Exact match
    for (const [roomId, exacts] of Object.entries(exactAssignments)) {
      if (exacts.includes(native) || exacts.includes(wordId)) {
        assignments[roomId].push(wordId);
        assigned = true;
        break;
      }
    }
    
    if (!assigned) {
      const matchedRooms = [];
      for (const [roomId, mapping] of Object.entries(roomMappings)) {
        for (const kw of mapping.keywords) {
          if (english.includes(kw.toLowerCase()) || native.includes(kw.toLowerCase())) {
            matchedRooms.push(roomId);
            break;
          }
        }
      }
      
      if (matchedRooms.length > 0) {
        // Pick first match, or most specific based on priority
        const priority = ['kitchen', 'bedroom', 'bathroom', 'transport', 'supermarket', 'cafe', 'animals', 'weather', 'tools', 'actions', 'emotions', 'farm', 'fantasy', 'gallery', 'library', 'living-room', 'garden', 'entrance-hall'];
        let bestRoom = matchedRooms[0];
        for (const p of priority) {
          if (matchedRooms.includes(p)) {
            bestRoom = p;
            break;
          }
        }
        assignments[bestRoom].push(wordId);
        assigned = true;
      }
    }
    
    if (!assigned) {
      unassigned.push(wordId);
    }
  }
  
  // Fallback for unassigned
  for (const wordId of unassigned) {
    const word = italianVocabulary[wordId];
    const english = (word.english || '').toLowerCase();
    
    if (english.includes('food') || english.includes('drink') || english.includes('eat') || english.includes('cook')) {
      assignments['kitchen'].push(wordId);
    } else if (english.includes('cloth') || english.includes('wear') || english.includes('dress') || english.includes('bed')) {
      assignments['bedroom'].push(wordId);
    } else if (english.includes('body') || english.includes('health') || english.includes('wash') || english.includes('clean')) {
      assignments['bathroom'].push(wordId);
    } else if (english.includes('travel') || english.includes('vehicle') || english.includes('drive') || english.includes('road')) {
      assignments['transport'].push(wordId);
    } else if (english.includes('shop') || english.includes('buy') || english.includes('money') || english.includes('pay')) {
      assignments['supermarket'].push(wordId);
    } else if (english.includes('animal') || english.includes('bird') || english.includes('fish') || english.includes('dog') || english.includes('cat')) {
      assignments['animals'].push(wordId);
    } else if (english.includes('weather') || english.includes('rain') || english.includes('snow') || english.includes('sun')) {
      assignments['weather'].push(wordId);
    } else if (english.includes('tool') || english.includes('machine') || english.includes('build') || english.includes('fix')) {
      assignments['tools'].push(wordId);
    } else if (english.includes('feel') || english.includes('emotion') || english.includes('happy') || english.includes('sad')) {
      assignments['emotions'].push(wordId);
    } else if (english.includes('farm') || english.includes('plant') || english.includes('crop') || english.includes('vegetable') || english.includes('fruit')) {
      assignments['farm'].push(wordId);
    } else if (english.includes('magic') || english.includes('dragon') || english.includes('king') || english.includes('prince') || english.includes('castle')) {
      assignments['fantasy'].push(wordId);
    } else if (english.includes('book') || english.includes('read') || english.includes('write') || english.includes('study')) {
      assignments['library'].push(wordId);
    } else if (english.includes('sit') || english.includes('watch') || english.includes('tv') || english.includes('relax')) {
      assignments['living-room'].push(wordId);
    } else if (english.includes('tree') || english.includes('flower') || english.includes('grass') || english.includes('nature')) {
      assignments['garden'].push(wordId);
    } else if (english.includes('door') || english.includes('enter') || english.includes('hello') || english.includes('family')) {
      assignments['entrance-hall'].push(wordId);
    } else if (english.includes('art') || english.includes('paint') || english.includes('museum') || english.includes('city')) {
      assignments['gallery'].push(wordId);
    } else if (english.includes('coffee') || english.includes('friend') || english.includes('talk') || english.includes('bar')) {
      assignments['cafe'].push(wordId);
    } else {
      if (english.includes('to ') || english.endsWith('ing') || english.includes('verb')) {
        assignments['actions'].push(wordId);
      } else {
        assignments['entrance-hall'].push(wordId);
      }
    }
  }
  
  return assignments;
}

function updateRoomsFile() {
  const assignments = assignWordsToRooms();
  
  let roomsContent = fs.readFileSync(roomsPath, 'utf8');
  
  for (const [roomId, wordIds] of Object.entries(assignments)) {
    const uniqueIds = [...new Set(wordIds)].sort();
    const newVocabArray = `vocabularyIds: [${uniqueIds.map(id => `"${id.replace(/"/g, '\\"')}"`).join(', ')}],`;
    
    const regex = new RegExp(`(id: '${roomId}',[\\s\\S]*?)vocabularyIds: \\[[^\\]]*\\],`);
    roomsContent = roomsContent.replace(regex, `$1${newVocabArray}`);
  }
  
  fs.writeFileSync(roomsPath, roomsContent);
  console.log('✅ Updated rooms.ts with mapped vocabulary');
  
  for (const [roomId, wordIds] of Object.entries(assignments)) {
    console.log(`  ${roomId}: ${[...new Set(wordIds)].length} words`);
  }
}

updateRoomsFile();
