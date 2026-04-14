const fs = require('fs');
const http = require('http');

// 1. Parse the A1-A2 vocabulary list
const a1a2Text = fs.readFileSync('../camera-cafe-learner/data/a1a2-vocabulary.txt', 'utf8');
const a1a2Words = [];
for (const line of a1a2Text.split('\n')) {
  if (!line.includes(':') || line.startsWith('ITALIAN')) continue;
  const [cat, rest] = line.split(':', 2);
  const items = rest.split(',').map(x => x.trim().replace(/^\uFEFF/, '')).filter(Boolean);
  for (const item of items) {
    a1a2Words.push({ category: cat.trim().toLowerCase(), word: item });
  }
}

// 2. Load existing dictionary for overlap enrichment
const existingDict = JSON.parse(fs.readFileSync('../camera-cafe-learner/data/italian-dictionary.json', 'utf8'));

// 3. Gender heuristic
function guessGender(word, category) {
  if (['v', 'adv', 'conj', 'prep', 'num', 'int', 'abb'].includes(category)) return 'none';
  if (['np'].includes(category)) {
    return word.endsWith('o') ? 'masculine' : 'feminine';
  }
  if (word.endsWith('o') || word.endsWith('i')) return 'masculine';
  if (word.endsWith('a') || word.endsWith('à')) return 'feminine';
  return 'none';
}

// 4. Phonetic renderer
function generatePseudoPhonetic(word) {
  const cleaned = word.toLowerCase().replace(/[^a-zàèéìòóù']/g, '');
  if (!cleaned) return word.toUpperCase();
  const vowels = 'aeiouàèéìòóù';
  const syllables = [];
  let current = '';
  for (let i = 0; i < cleaned.length; i++) {
    const ch = cleaned[i];
    current += ch;
    if (vowels.includes(ch)) {
      if (i + 1 < cleaned.length && vowels.includes(cleaned[i + 1])) continue;
      syllables.push(current);
      current = '';
    }
  }
  if (current) {
    if (syllables.length) syllables[syllables.length - 1] += current;
    else syllables.push(current);
  }
  if (syllables.length === 0) return cleaned.toUpperCase();
  let stressIndex = Math.max(0, syllables.length - 2);
  const last = syllables[syllables.length - 1].toLowerCase().replace(/[^a-z]/g, '');
  if (['ia','ie','io','e','i','o'].includes(last) && stressIndex > 0) stressIndex--;
  return syllables.map((s, i) => i === stressIndex ? s.toUpperCase() : s.toLowerCase()).join('-');
}

// 5. Emoji heuristic
function guessEmoji(word, english) {
  const eng = (english || '').toLowerCase();
  const map = {
    house: '🏠', home: '🏠', school: '🏫', work: '💼', book: '📚', car: '🚗',
    food: '🍽️', water: '💧', coffee: '☕', bread: '🍞', cat: '🐱', dog: '🐕',
    family: '👨‍👩‍👧‍👦', money: '💰', time: '⏰', day: '☀️', night: '🌙',
    love: '❤️', happy: '😊', sad: '😢', big: '⬆️', small: '⬇️',
    city: '🏙️', country: '🌍', music: '🎵', phone: '📱', computer: '💻',
    television: '📺', tv: '📺', film: '🎬', game: '🎮', sport: '⚽',
    doctor: '👨‍⚕️', hospital: '🏥', medicine: '💊', fruit: '🍎', vegetable: '🥕',
    meat: '🥩', fish: '🐟', egg: '🥚', milk: '🥛', cheese: '🧀', sugar: '🍬',
    salt: '🧂', oil: '🫒', wine: '🍷', beer: '🍺', fruit: '🍎', apple: '🍎',
    table: '🪑', chair: '🪑', door: '🚪', window: '🪟', bed: '🛏️', bathroom: '🛁',
    kitchen: '🍳', garden: '🌳', flower: '🌸', tree: '🌲', sun: '☀️', rain: '🌧️',
    snow: '❄️', wind: '💨', cloud: '☁️', road: '🛣️', train: '🚆', bus: '🚌',
    plane: '✈️', ship: '🚢', bicycle: '🚲', walk: '🚶', run: '🏃', swim: '🏊',
    write: '✍️', read: '📖', speak: '🗣️', listen: '👂', look: '👀', eat: '🍽️',
    drink: '🥤', sleep: '😴', wake: '⏰', buy: '🛒', sell: '🏷️', pay: '💳',
    open: '🔓', close: '🔒', begin: '▶️', end: '⏹️', enter: '🚪', exit: '🚪',
    help: '🆘', friend: '👫', boy: '👦', girl: '👧', man: '👨', woman: '👩',
    child: '👶', baby: '👶', mother: '👩', father: '👨', parent: '👨‍👩‍👧',
    brother: '👦', sister: '👧', son: '👦', daughter: '👧'
  };
  for (const [key, emoji] of Object.entries(map)) {
    if (eng.includes(key)) return emoji;
  }
  return '';
}

// 6. Build merged vocabulary
const merged = {};
let enriched = 0, guessed = 0;

for (const { category, word } of a1a2Words) {
  if (merged[word]) continue;
  const existing = existingDict[word];
  if (existing && existing.en) {
    merged[word] = {
      id: word, native: word, english: existing.en,
      gender: existing.g === 'm' ? 'masculine' : existing.g === 'f' ? 'feminine' : 'none',
      pronunciation: generatePseudoPhonetic(word),
      emoji: existing.emoji || '', x: 20, y: 20,
    };
    enriched++;
  } else {
    merged[word] = {
      id: word, native: word, english: '',
      gender: guessGender(word, category),
      pronunciation: generatePseudoPhonetic(word),
      emoji: '', x: 20, y: 20,
    };
    guessed++;
  }
}

console.log(`Total A1-A2 words: ${a1a2Words.length}`);
console.log(`Enriched from existing dict: ${enriched}`);
console.log(`Need translations: ${guessed}`);

// 7. Batch-translate missing words via local LLM
const missingWords = Object.values(merged).filter(v => !v.english);
const BATCH_SIZE = 40;

async function translateBatch(batch) {
  const wordsStr = batch.map(w => `- ${w.native} (${w.gender === 'masculine' ? 'm' : w.gender === 'feminine' ? 'f' : 'n'})`).join('\n');
  const prompt = `Translate these common Italian A1-A2 words to English. Respond ONLY with a JSON array. No markdown, no explanations.

[${batch.map(w => `{"id":"${w.native}","english":"TRANSLATION"}`).join(', ')}]

Replace TRANSLATION with the actual English meaning for each word. Keep it to 1-3 words max.`;

  return new Promise((resolve) => {
    const data = JSON.stringify({ model: 'llama3.2', stream: false, prompt });
    const req = http.request(
      { hostname: '127.0.0.1', port: 11434, path: '/api/generate', method: 'POST', headers: { 'Content-Type': 'application/json' } },
      (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          try {
            const json = JSON.parse(body);
            const text = (json.response || '').trim();
            // Find the first [ ... ] block
            const start = text.indexOf('[');
            const end = text.lastIndexOf(']');
            if (start !== -1 && end > start) {
              const arr = JSON.parse(text.slice(start, end + 1));
              resolve(arr);
            } else {
              console.error('No JSON array found. Text:', text.slice(0, 300));
              resolve([]);
            }
          } catch (e) {
            console.error('Parse error:', e.message, '\nBody:', body.slice(0, 300));
            resolve([]);
          }
        });
      }
    );
    req.on('error', (err) => { console.error('Ollama error:', err.message); resolve([]); });
    req.write(data);
    req.end();
  });
}

(async () => {
  const totalBatches = Math.ceil(missingWords.length / BATCH_SIZE);
  for (let i = 0; i < missingWords.length; i += BATCH_SIZE) {
    const batch = missingWords.slice(i, i + BATCH_SIZE);
    console.log(`Translating batch ${Math.floor(i / BATCH_SIZE) + 1} / ${totalBatches} (${batch.length} words)...`);
    const results = await translateBatch(batch);
    for (const r of results) {
      if (r.id && r.english && merged[r.id]) {
        merged[r.id].english = r.english;
        merged[r.id].emoji = guessEmoji(r.id, r.english);
      }
    }
    await new Promise(res => setTimeout(res, 200));
  }

  const stillMissing = Object.values(merged).filter(v => !v.english).length;
  console.log(`Still missing translations: ${stillMissing}`);

  // For any still missing, do a hardcoded fallback for common function words
  const hardcoded = {
    di: 'of', in: 'in', per: 'for', con: 'with', da: 'from', tra: 'between', fra: 'between',
    presso: 'at', durante: 'during', entro: 'within', mediante: 'by means of', tramite: 'through',
    'fino a': 'until', 'prima di': 'before', 'rispetto a': 'regarding', 'grazie a': 'thanks to',
    'oltre a': 'besides', 'nel corso di': 'during', 'in base a': 'based on', 'intorno a': 'around',
    'a causa di': 'because of', 'attorno a': 'around', 'in grado di': 'able to', 'insieme a': 'together with',
    'vicino a': 'near', 'per quanto riguarda': 'regarding', "all'interno di": 'inside', 'fuori da': 'outside',
    'al di là di': 'beyond', e: 'and', ma: 'but', o: 'or', mentre: 'while', sia: 'both',
    nonché: 'as well as', dunque: 'therefore', certo: 'certain', oppure: 'or', ovvero: 'that is',
    poiché: 'since', 'anche se': 'even if', 'in quanto': 'as', qualora: 'if', perciò: 'therefore',
    affinché: 'so that', ossia: 'namely', 'come se': 'as if', tuttavia: 'however',
    non: 'not', sempre: 'always', poi: 'then', già: 'already', ancora: 'still/yet', invece: 'instead',
    ora: 'now', mai: 'never', infatti: 'indeed', qui: 'here', soprattutto: 'above all',
    inoltre: 'furthermore', forse: 'maybe', almeno: 'at least', fa: 'ago', ormai: 'by now',
    cioè: 'that is', subito: 'immediately', infine: 'finally', soltanto: 'only',
    direttamente: 'directly', davvero: 'really', ecco: 'here is', ieri: 'yesterday',
    piuttosto: 'rather', adesso: 'now', avanti: 'forward', magari: 'maybe', sicuramente: 'surely',
    ovviamente: 'obviously', veramente: 'truly', probabilmente: 'probably', attualmente: 'currently',
    particolarmente: 'particularly', assolutamente: 'absolutely', dove: 'where', sennò: 'otherwise',
    'in particolare': 'in particular', 'per esempio': 'for example', addirittura: 'even',
    finalmente: 'finally', nemmeno: 'not even', completamente: 'completely',
    semplicemente: 'simply', certamente: 'certainly', abbastanza: 'enough', naturalmente: 'naturally',
    esclusivamente: 'exclusively', secondo: 'according to', lungo: 'along', massimo: 'maximum',
    successivamente: 'subsequently', altrimenti: 'otherwise', immediatamente: 'immediately',
    intanto: 'meanwhile', neanche: 'neither', assai: 'very', accanto: 'next to', sotto: 'under',
    facilmente: 'easily', relativamente: 'relatively', indietro: 'back', eventualmente: 'eventually',
    effettivamente: 'effectively', rispettivamente: 'respectively', finora: 'so far',
    chiaramente: 'clearly', praticamente: 'practically', fortemente: 'strongly',
    esattamente: 'exactly', persino: 'even', estremamente: 'extremely', recentemente: 'recently',
    affatto: 'at all', personalmente: 'personally', 'nel frattempo': 'meanwhile',
    separatamente: 'separately', io: 'I', tu: 'you', lui: 'he', lei: 'she', noi: 'we', voi: 'you',
    mi: 'me', ti: 'you', ci: 'us', vi: 'you', gli: 'him', le: 'her', chi: 'who', che: 'that',
    qualcosa: 'something', qualcuno: 'someone', nessuno: 'no one', ciascuno: 'each one',
    ognuno: 'everyone', chiunque: 'anyone', coloro: 'those', egli: 'he', esso: 'it',
    po: 'little', 'po\'': 'little', bene: 'well', pure: 'also', medico: 'doctor',
    dentro: 'inside', trenta: 'thirty', ciao: 'hi/bye', "vabbè": 'okay', basta: 'enough',
    oddio: 'oh god', dio: 'god', ecc: 'etc', tel: 'tel', km: 'km'
  };

  for (const [w, def] of Object.entries(hardcoded)) {
    if (merged[w] && !merged[w].english) {
      merged[w].english = def;
      merged[w].emoji = guessEmoji(w, def);
    }
  }

  const finalMissing = Object.values(merged).filter(v => !v.english).length;
  console.log(`Final missing after hardcoded fallbacks: ${finalMissing}`);

  const finalVocab = {};
  for (const [k, v] of Object.entries(merged)) {
    if (v.english) finalVocab[k] = v;
  }

  console.log(`Final A1-A2 vocabulary count: ${Object.keys(finalVocab).length}`);

  const ts = `// Auto-generated A1-A2 Italian vocabulary
// Source: camera-cafe-learner A1-A2 frequency list (1812 words) + existing dictionary enrichment
// Scope: CEFR A1-A2 only — optimized for visual memory palace learning
// Method: merged curated frequency list, local LLM translations (llama3.2), heuristic gender/emoji, custom phonetic renderer
// License: See VOCABULARY_PROVENANCE.md for full legal documentation

import type { VocabularyItem } from '../types';

export const italianVocabulary: Record<string, VocabularyItem> = ${JSON.stringify(finalVocab, null, 2).replace(/"([^"]+)"\s*:/g, '$1:').replace(/"/g, "'")};
`;

  fs.writeFileSync('src/data/italian-generated.ts', ts, 'utf8');
  console.log('Wrote src/data/italian-generated.ts');
})();
