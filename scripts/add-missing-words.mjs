// Adds stub VocabularyItem entries for words used in zone-corrections.json
// that are missing from src/data/italian-generated.ts.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const dictPath = path.join(ROOT, 'src/data/italian-generated.ts');

// word -> { english, gender, emoji }
const STUBS = {
  guanto: { english: 'glove', gender: 'masculine', emoji: '🧤' },
  magro: { english: 'thin', gender: 'masculine', emoji: '' },
  grasso: { english: 'fat', gender: 'masculine', emoji: '' },
  debole: { english: 'weak', gender: 'none', emoji: '' },
  scusa: { english: 'excuse me / sorry', gender: 'none', emoji: '' },
  romanzo: { english: 'novel', gender: 'masculine', emoji: '📖' },
  poesia: { english: 'poetry', gender: 'feminine', emoji: '📜' },
  rivista: { english: 'magazine', gender: 'feminine', emoji: '📰' },
  giornale: { english: 'newspaper', gender: 'masculine', emoji: '📰' },
  manuale: { english: 'manual / handbook', gender: 'masculine', emoji: '📘' },
  racconto: { english: 'short story', gender: 'masculine', emoji: '📖' },
  biografia: { english: 'biography', gender: 'feminine', emoji: '📗' },
  calendario: { english: 'calendar', gender: 'masculine', emoji: '📅' },
  bracciale: { english: 'bracelet', gender: 'masculine', emoji: '' },
  orecchini: { english: 'earrings', gender: 'masculine', emoji: '' },
  scarpa: { english: 'shoe', gender: 'feminine', emoji: '👟' },
  stivale: { english: 'boot', gender: 'masculine', emoji: '👢' },
  sandali: { english: 'sandals', gender: 'masculine', emoji: '🩴' },
  scarpette: { english: 'slippers / little shoes', gender: 'feminine', emoji: '' },
  lenzuolo: { english: 'sheet', gender: 'masculine', emoji: '🛏️' },
  materasso: { english: 'mattress', gender: 'masculine', emoji: '🛏️' },
  spazzolino: { english: 'toothbrush', gender: 'masculine', emoji: '🪥' },
  rubinetto: { english: 'tap / faucet', gender: 'masculine', emoji: '🚰' },
  shampoo: { english: 'shampoo', gender: 'masculine', emoji: '' },
  bagnoschiuma: { english: 'body wash', gender: 'masculine', emoji: '🧴' },
  aspirina: { english: 'aspirin', gender: 'feminine', emoji: '💊' },
  pomata: { english: 'ointment', gender: 'feminine', emoji: '' },
  cotone: { english: 'cotton', gender: 'masculine', emoji: '' },
  rosa: { english: 'rose', gender: 'feminine', emoji: '🌹' },
  sentiero: { english: 'path', gender: 'masculine', emoji: '' },
  cancello: { english: 'gate', gender: 'masculine', emoji: '' },
  abbonamento: { english: 'season ticket / subscription', gender: 'masculine', emoji: '🎫' },
  partenza: { english: 'departure', gender: 'feminine', emoji: '' },
  arrivo: { english: 'arrival', gender: 'masculine', emoji: '' },
  binario: { english: 'platform / track', gender: 'masculine', emoji: '🚆' },
  ritardo: { english: 'delay', gender: 'masculine', emoji: '' },
  vagone: { english: 'carriage / train car', gender: 'masculine', emoji: '🚃' },
  uscita: { english: 'exit', gender: 'feminine', emoji: '' },
  entrata: { english: 'entrance', gender: 'feminine', emoji: '' },
  incrocio: { english: 'intersection', gender: 'masculine', emoji: '' },
  direzione: { english: 'direction', gender: 'feminine', emoji: '' },
  cartello: { english: 'sign', gender: 'masculine', emoji: '🪧' },
  yogurt: { english: 'yogurt', gender: 'masculine', emoji: '' },
  panna: { english: 'cream', gender: 'feminine', emoji: '' },
  cornetto: { english: 'croissant', gender: 'masculine', emoji: '🥐' },
  barista: { english: 'barista', gender: 'none', emoji: '' },
  colore: { english: 'colour', gender: 'masculine', emoji: '🎨' },
  artista: { english: 'artist', gender: 'none', emoji: '🎨' },
  mostra: { english: 'exhibition', gender: 'feminine', emoji: '🖼️' },
  pennello: { english: 'paintbrush', gender: 'masculine', emoji: '🖌️' },
  regalo: { english: 'gift', gender: 'masculine', emoji: '🎁' },
  cartolina: { english: 'postcard', gender: 'feminine', emoji: '📮' },
  souvenir: { english: 'souvenir', gender: 'masculine', emoji: '' },
  serpente: { english: 'snake', gender: 'masculine', emoji: '🐍' },
  lucertola: { english: 'lizard', gender: 'feminine', emoji: '🦎' },
  tartaruga: { english: 'turtle', gender: 'feminine', emoji: '🐢' },
  coccodrillo: { english: 'crocodile', gender: 'masculine', emoji: '🐊' },
  mucca: { english: 'cow', gender: 'feminine', emoji: '🐄' },
  maiale: { english: 'pig', gender: 'masculine', emoji: '🐖' },
  pecora: { english: 'sheep', gender: 'feminine', emoji: '🐑' },
  capra: { english: 'goat', gender: 'feminine', emoji: '🐐' },
  coniglio: { english: 'rabbit', gender: 'masculine', emoji: '🐇' },
  martello: { english: 'hammer', gender: 'masculine', emoji: '🔨' },
  cacciavite: { english: 'screwdriver', gender: 'masculine', emoji: '🪛' },
  pinza: { english: 'pliers', gender: 'feminine', emoji: '' },
  sega: { english: 'saw', gender: 'feminine', emoji: '🪚' },
  trapano: { english: 'drill', gender: 'masculine', emoji: '' },
  vite: { english: 'screw', gender: 'feminine', emoji: '' },
  chiodo: { english: 'nail', gender: 'masculine', emoji: '' },
  banco: { english: 'workbench', gender: 'masculine', emoji: '' },
  morsa: { english: 'vise / clamp', gender: 'feminine', emoji: '' },
  lima: { english: 'file (tool)', gender: 'feminine', emoji: '' },
  spingere: { english: 'to push', gender: 'none', emoji: '' },
  tirare: { english: 'to pull', gender: 'none', emoji: '' },
  odio: { english: 'hate', gender: 'masculine', emoji: '' },
  fiducia: { english: 'trust', gender: 'feminine', emoji: '' },
  orgoglio: { english: 'pride', gender: 'masculine', emoji: '' },
  drago: { english: 'dragon', gender: 'masculine', emoji: '🐉' },
  elfo: { english: 'elf', gender: 'masculine', emoji: '🧝' },
  strega: { english: 'witch', gender: 'feminine', emoji: '🧙' },
  nano: { english: 'dwarf', gender: 'masculine', emoji: '' },
  mago: { english: 'wizard', gender: 'masculine', emoji: '🧙' },
  fantasma: { english: 'ghost', gender: 'masculine', emoji: '👻' },
  zombie: { english: 'zombie', gender: 'masculine', emoji: '🧟' },
  vampiro: { english: 'vampire', gender: 'masculine', emoji: '🧛' },
  farina: { english: 'flour', gender: 'feminine', emoji: '🌾' },
  mestolo: { english: 'ladle', gender: 'masculine', emoji: '🥄' },
  spatola: { english: 'spatula', gender: 'feminine', emoji: '' },
  grattugia: { english: 'grater', gender: 'feminine', emoji: '' },
  tagliere: { english: 'cutting board', gender: 'masculine', emoji: '' },
  fornello: { english: 'stove / burner', gender: 'masculine', emoji: '🔥' },
  colino: { english: 'colander', gender: 'masculine', emoji: '' },
  biscotto: { english: 'biscuit / cookie', gender: 'masculine', emoji: '🍪' },
  grandine: { english: 'hail', gender: 'feminine', emoji: '🌨️' },
};

// crude pronunciation: uppercase, basic vowel hints
function pronounce(w) {
  return w.toUpperCase();
}

let src = fs.readFileSync(dictPath, 'utf8');
const existing = new Set(
  [...src.matchAll(/^  ([A-Za-zÀ-ÿ'0-9]+):\s*\{/gm)].map((m) => m[1])
);

const toAdd = [];
for (const [word, meta] of Object.entries(STUBS)) {
  if (existing.has(word)) continue;
  toAdd.push(`  ${word}: {
    id: '${word}',
    native: '${word}',
    english: '${meta.english.replace(/'/g, "\\'")}',
    gender: '${meta.gender}',
    pronunciation: '${pronounce(word)}',
    emoji: '${meta.emoji}',
    x: 50, y: 50,
  },`);
}

if (toAdd.length === 0) {
  console.log('Nothing to add.');
  process.exit(0);
}

// Insert before the closing `};`
const closeIdx = src.lastIndexOf('};');
src = src.slice(0, closeIdx) + toAdd.join('\n') + '\n' + src.slice(closeIdx);
fs.writeFileSync(dictPath, src);
console.log(`Added ${toAdd.length} stub entries.`);
