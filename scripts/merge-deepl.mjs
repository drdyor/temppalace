// Merges Italian translations from data/deepl-output.txt into
// src/data/expanded-phrases.json.
//
// Line N of deepl-input.txt (english) corresponds to line N of
// deepl-output.txt (italian). Both must have the same number of lines
// and match the order of entries in expanded-phrases.json (which the
// expand script guarantees on re-run).
//
// Usage:
//   1. Paste scripts/data/deepl-input.txt into DeepL (EN -> IT)
//   2. Save the Italian result to data/deepl-output.txt (one line per input)
//   3. node scripts/merge-deepl.mjs

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const inputPath = path.join(ROOT, 'data', 'deepl-input.txt');
const outputPath = path.join(ROOT, 'data', 'deepl-output.txt');
const phrasesPath = path.join(ROOT, 'src', 'data', 'expanded-phrases.json');

for (const p of [inputPath, outputPath, phrasesPath]) {
  if (!fs.existsSync(p)) {
    console.error(`Missing file: ${p}`);
    process.exit(1);
  }
}

const en = fs.readFileSync(inputPath, 'utf-8').split('\n').filter((l) => l.trim());
const it = fs.readFileSync(outputPath, 'utf-8').split('\n').filter((l) => l.trim());
const phrases = JSON.parse(fs.readFileSync(phrasesPath, 'utf-8'));

if (en.length !== it.length) {
  console.error(`Line count mismatch: ${en.length} english vs ${it.length} italian.`);
  console.error('DeepL must produce one italian line per english line; check deepl-output.txt.');
  process.exit(1);
}

if (en.length !== phrases.length) {
  console.error(`Phrase count mismatch: ${en.length} lines vs ${phrases.length} phrases in json.`);
  console.error('Re-run expand-templates.mjs to regenerate deepl-input.txt in sync.');
  process.exit(1);
}

let filled = 0;
let overwritten = 0;
let skippedMismatch = 0;

for (let i = 0; i < phrases.length; i++) {
  if (phrases[i].english !== en[i]) {
    console.warn(`Line ${i + 1} mismatch: json="${phrases[i].english}" vs input="${en[i]}" — skipping.`);
    skippedMismatch++;
    continue;
  }
  const newItalian = it[i].trim();
  if (!newItalian) continue;
  if (phrases[i].italian && phrases[i].italian !== newItalian) overwritten++;
  if (!phrases[i].italian) filled++;
  phrases[i].italian = newItalian;
}

fs.writeFileSync(phrasesPath, JSON.stringify(phrases, null, 2) + '\n');

console.log(`Filled (was empty):  ${filled}`);
console.log(`Overwritten:         ${overwritten}`);
console.log(`Skipped (mismatch):  ${skippedMismatch}`);
console.log(`Total phrases:       ${phrases.length}`);
console.log(`Wrote: ${phrasesPath}`);
