// Script to convert italian-dictionary.json to TypeScript
const fs = require('fs');
const path = require('path');

const dictPath = path.join(__dirname, '../../camera-cafe-learner/data/italian-dictionary.json');
const outputPath = path.join(__dirname, '../src/data/italian-generated.ts');

const dict = JSON.parse(fs.readFileSync(dictPath, 'utf8'));

let output = `// Auto-generated from camera-cafe-learner/data/italian-dictionary.json
// Contains ${Object.keys(dict).length} vocabulary items

import type { VocabularyItem } from '../types';

export const italianVocabulary: Record<string, VocabularyItem> = {
`;

const entries = Object.entries(dict);
let count = 0;

for (const [key, val] of entries) {
  const safeKey = key.replace(/'/g, "\\'");
  const safeEn = (val.en || '').replace(/'/g, "\\'");
  const gender = val.g === 'm' ? 'masculine' : val.g === 'f' ? 'feminine' : 'none';
  const emoji = val.emoji || '';
  
  // Generate simple pronunciation hint
  const pronunciation = safeKey.toUpperCase();
  
  // Generate position (will be refined later)
  const x = 20 + (count % 10) * 8;
  const y = 20 + Math.floor(count / 10) * 8;
  
  output += `  '${safeKey}': {
    id: '${safeKey}',
    native: '${safeKey}',
    english: '${safeEn}',
    gender: '${gender}',
    pronunciation: '${pronunciation}',
    emoji: '${emoji}',
    x: ${x},
    y: ${y},
  },
`;
  count++;
  
  if (count % 100 === 0) {
    console.log(`Processed ${count}/${entries.length} words...`);
  }
}

output += `};

export const italianVocabCount = ${count};
`;

fs.writeFileSync(outputPath, output);
console.log(`✓ Generated ${outputPath} with ${count} vocabulary items`);
