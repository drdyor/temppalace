// Applies scripts/zone-corrections.json to src/data/rooms.ts.
// For each zone listed, replaces interiorVocab with a grid layout of the new words
// and rebuilds the parent room's vocabularyIds as the union of its zone words.
// Reports any corrected words that are not yet in italian-generated.ts.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const roomsPath = path.join(ROOT, 'src/data/rooms.ts');
const dictPath = path.join(ROOT, 'src/data/italian-generated.ts');
const correctionsPath = path.join(ROOT, 'scripts/zone-corrections.json');

const src = fs.readFileSync(roomsPath, 'utf8');
const dictSrc = fs.readFileSync(dictPath, 'utf8');
const corrections = JSON.parse(fs.readFileSync(correctionsPath, 'utf8')).zones;

const dictWords = new Set(
  [...dictSrc.matchAll(/^  ([A-Za-zÀ-ÿ'0-9]+):\s*\{/gm)].map((m) => m[1].toLowerCase())
);

function gridLayout(words) {
  const cols = Math.min(4, Math.max(2, Math.ceil(Math.sqrt(words.length))));
  const rows = Math.ceil(words.length / cols);
  const xs = Array.from({ length: cols }, (_, i) => Math.round(((i + 0.5) / cols) * 100));
  const ys = Array.from({ length: rows }, (_, r) => Math.round(((r + 0.5) / rows) * 100));
  return words.map((w, i) => ({
    wordId: w,
    x: xs[i % cols],
    y: ys[Math.floor(i / cols)],
  }));
}

// Parse rooms by locating top-level `    id: 'ROOM',` and descending to find nested zone blocks.
function findBalanced(str, openIdx) {
  let depth = 0;
  for (let i = openIdx; i < str.length; i++) {
    if (str[i] === '{') depth++;
    else if (str[i] === '}') {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

// Locate room objects: they start with `  {` followed by `    id: 'X',`
const roomRe = /^(\s\s\{)(\n\s\s\s\s)id:\s*'([a-z-]+)',/gm;
let out = src;
const missingWords = new Map(); // word -> [zones]

// We rebuild out by replaying edits per room.
// For each room we know about: find its `{...}` block, rewrite zones that match,
// then rewrite its vocabularyIds.

// Simpler approach: for each zone key in corrections, find and replace its interiorVocab array in-place.
// Then for each affected room, find its vocabularyIds and replace with the union of its listed zones.

const affectedRooms = new Map(); // roomId -> Set of words
for (const key of Object.keys(corrections)) {
  const [roomId] = key.split('::');
  if (!affectedRooms.has(roomId)) affectedRooms.set(roomId, new Set());
  for (const w of corrections[key]) affectedRooms.get(roomId).add(w);
}

// Replace each zone's interiorVocab
for (const [key, words] of Object.entries(corrections)) {
  const [roomId, zoneId] = key.split('::');
  const grid = gridLayout(words);
  const vocabLiteral = grid.map((g) => `{ wordId: '${g.wordId}', x: ${g.x}, y: ${g.y} }`).join(', ');

  // Find zone block inside room: look for `id: 'ZONE'` then rewrite the following interiorVocab: [ ... ]
  // Use a regex that finds the zone's id line and its interiorVocab array.
  // We anchor by zoneId being fairly unique.
  const zoneIdRe = new RegExp(`(id:\\s*'${zoneId}',[\\s\\S]*?interiorVocab:\\s*)\\[[^\\]]*\\]`, 'g');
  const before = out;
  out = out.replace(zoneIdRe, (_m, prefix) => `${prefix}[${vocabLiteral}]`);
  if (out === before) {
    console.warn(`[warn] zone not found or unchanged: ${key}`);
  }

  for (const w of words) {
    if (!dictWords.has(w.toLowerCase())) {
      if (!missingWords.has(w)) missingWords.set(w, []);
      missingWords.get(w).push(key);
    }
  }
}

// Now update each affected room's vocabularyIds.
// A room's vocabularyIds should be the union of its *updated* zones' words, plus any existing
// words from untouched zones. To avoid over-reach, we just replace vocabularyIds with the union
// of corrections entries for that room — that covers every placed word. Words still present in
// untouched zones will already be covered since we don't touch those zones.

// Build map: roomId -> Set of zoneIds known to this script's hierarchy (parse from rooms.ts)
const zonesByRoom = {};
{
  const lines = src.split('\n');
  let currentRoom = null;
  for (const line of lines) {
    const top = line.match(/^    id: '([a-z-]+)',$/);
    const zone = line.match(/^\s{6,}\{\s*id:\s*'([a-z-]+)',/);
    if (top) {
      currentRoom = top[1];
      zonesByRoom[currentRoom] = [];
    } else if (zone && currentRoom) {
      zonesByRoom[currentRoom].push(zone[1]);
    }
  }
}

// For each affected room, gather the union of all its zone words after correction.
// For zones we corrected: use corrections data.
// For zones we did NOT correct: extract current interiorVocab from updated `out`.
for (const [roomId] of affectedRooms) {
  const zones = zonesByRoom[roomId] ?? [];
  const union = new Set();
  for (const zoneId of zones) {
    const key = `${roomId}::${zoneId}`;
    if (corrections[key]) {
      for (const w of corrections[key]) union.add(w);
      continue;
    }
    // find untouched zone's current words in `out` — stay within one element
    // by refusing to cross another `id: '...'` declaration.
    const re = new RegExp(
      `id:\\s*'${zoneId}',(?:(?!id:\\s*')[\\s\\S])*?interiorVocab:\\s*\\[([^\\]]*)\\]`
    );
    const m = out.match(re);
    if (m) {
      for (const wm of m[1].matchAll(/wordId:\s*'([^']+)'/g)) union.add(wm[1]);
    }
  }

  // Replace this room's vocabularyIds with the union.
  const wordsArr = [...union];
  const literal = wordsArr.map((w) => `"${w}"`).join(', ');
  const roomRe = new RegExp(`(id:\\s*'${roomId}',[\\s\\S]*?vocabularyIds:\\s*)\\[[^\\]]*\\]`);
  const before = out;
  out = out.replace(roomRe, (_m, prefix) => `${prefix}[${literal}]`);
  if (out === before) console.warn(`[warn] room vocabularyIds not updated: ${roomId}`);
}

fs.writeFileSync(roomsPath, out);
console.log(`rooms.ts updated. Rooms touched: ${affectedRooms.size}`);
console.log(`Zones rewritten: ${Object.keys(corrections).length}`);

if (missingWords.size > 0) {
  console.log(`\n⚠ ${missingWords.size} words in corrections are NOT in italian-generated.ts:`);
  for (const [w, zones] of missingWords) {
    console.log(`  - ${w}   (used in: ${zones.join(', ')})`);
  }
} else {
  console.log('\n✓ All correction words exist in italian-generated.ts');
}
