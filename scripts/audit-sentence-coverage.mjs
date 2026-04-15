// Reports vocab words (referenced by any room/zone) that have no curated
// sentences in word-sentences.ts. These fall through to the template generator.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const rooms = fs.readFileSync(path.join(ROOT, 'src/data/rooms.ts'), 'utf8');
const sentences = fs.readFileSync(path.join(ROOT, 'src/data/word-sentences.ts'), 'utf8');

const usedWords = new Set();
for (const m of rooms.matchAll(/wordId:\s*'([^']+)'/g)) usedWords.add(m[1]);
for (const m of rooms.matchAll(/vocabularyIds:\s*\[([^\]]*)\]/g)) {
  for (const w of m[1].matchAll(/"([^"]+)"/g)) usedWords.add(w[1]);
}

const covered = new Set();
for (const m of sentences.matchAll(/^  '([^']+)':\s*\[/gm)) covered.add(m[1]);

const missing = [...usedWords].filter((w) => !covered.has(w)).sort();

// Group by first room/zone they appear in
const zoneOf = {};
const zoneRe = /id:\s*'([a-z-]+)',[^}]*?interiorVocab:\s*\[([^\]]*)\]/g;
let zm;
while ((zm = zoneRe.exec(rooms)) !== null) {
  const zoneId = zm[1];
  for (const wm of zm[2].matchAll(/wordId:\s*'([^']+)'/g)) {
    if (!zoneOf[wm[1]]) zoneOf[wm[1]] = zoneId;
  }
}

console.log(`Total vocab words referenced: ${usedWords.size}`);
console.log(`Covered by curated sentences:  ${[...usedWords].filter((w) => covered.has(w)).length}`);
console.log(`Hitting template fallback:     ${missing.length}\n`);

const byZone = {};
for (const w of missing) {
  const z = zoneOf[w] ?? '(room-only / unplaced)';
  (byZone[z] ??= []).push(w);
}
for (const z of Object.keys(byZone).sort()) {
  console.log(`[${z}] (${byZone[z].length})`);
  console.log(`  ${byZone[z].join(', ')}`);
}
