const fs = require('fs');
const path = require('path');

const vocabPath = path.join(__dirname, '../src/data/italian-generated.ts');
const { italianVocabulary } = require('../src/data/italian-generated.ts');

function italianPronunciation(word) {
  // Skip phrases
  if (word.includes(' ')) {
    return word.toLowerCase();
  }
  
  let w = word.toLowerCase();
  const placeholders = [];
  
  function ph(str) {
    const key = `__P${placeholders.length}__`;
    placeholders.push(str);
    return key;
  }
  
  // Handle digraphs in order of specificity
  w = w.replace(/gli/g, ph('LYEE'));
  w = w.replace(/gn/g, ph('NY'));
  w = w.replace(/sci/g, ph('SHEE'));
  w = w.replace(/sce/g, ph('SHAY'));
  w = w.replace(/sch/g, ph('SK'));
  w = w.replace(/ch/g, ph('K'));
  w = w.replace(/gh/g, ph('G'));
  w = w.replace(/ci/g, ph('CHEE'));
  w = w.replace(/ce/g, ph('CHAY'));
  w = w.replace(/gi/g, ph('JEE'));
  w = w.replace(/ge/g, ph('JAY'));
  w = w.replace(/qu/g, ph('KW'));
  w = w.replace(/sc/g, ph('SK'));
  w = w.replace(/zz/g, ph('TS'));
  w = w.replace(/z/g, ph('TS'));
  w = w.replace(/cia/g, ph('CHA'));
  w = w.replace(/cio/g, ph('CHO'));
  w = w.replace(/ciu/g, ph('CHOO'));
  w = w.replace(/gia/g, ph('JA'));
  w = w.replace(/gio/g, ph('JO'));
  w = w.replace(/giu/g, ph('JOO'));
  
  // Simple replacements
  w = w.replace(/c/g, 'K'); // remaining c
  w = w.replace(/h/g, '');  // silent h
  w = w.replace(/x/g, 'KS');
  
  // Vowels with accents
  w = w.replace(/à/g, 'AH');
  w = w.replace(/è/g, 'EH');
  w = w.replace(/é/g, 'AY');
  w = w.replace(/ì/g, 'EE');
  w = w.replace(/ò/g, 'OH');
  w = w.replace(/ù/g, 'OO');
  w = w.replace(/a/g, 'AH');
  w = w.replace(/e/g, 'AY');
  w = w.replace(/i/g, 'EE');
  w = w.replace(/o/g, 'OH');
  w = w.replace(/u/g, 'OO');
  w = w.replace(/y/g, 'EE');
  
  // Restore placeholders
  for (let i = 0; i < placeholders.length; i++) {
    w = w.replace(`__P${i}__`, placeholders[i]);
  }
  
  // Syllable breaking: split before consonants that precede vowels
  // Insert hyphen between vowel group and following consonant+vowel
  // But keep consonant clusters together
  let result = '';
  for (let i = 0; i < w.length; i++) {
    const ch = w[i];
    const next = w[i + 1] || '';
    const prev = w[i - 1] || '';
    
    result += ch;
    
    // Insert hyphen after vowel if next is a consonant that starts a new syllable
    if (/[AEIOU]/.test(ch) && next && /[BCDFGHJKLMNPQRSTVWXYZ]/.test(next)) {
      // Don't break if this is part of a vowel cluster and next is same
      const afterNext = w[i + 2] || '';
      // Simple rule: break if next+afterNext contains a vowel
      if (afterNext && /[AEIOU]/.test(afterNext)) {
        result += '-';
      }
    }
  }
  
  // Remove double hyphens and trailing/leading hyphens
  result = result.replace(/-+/g, '-').replace(/^-|-$/g, '');
  
  // Capitalize stressed syllable
  const parts = result.split('-');
  if (parts.length > 1) {
    let stressIdx = parts.length - 2; // penultimate
    if (/(ZIONE|SIONE|TORE)$/.test(w)) stressIdx = parts.length - 3;
    if (stressIdx < 0) stressIdx = 0;
    parts[stressIdx] = parts[stressIdx].toUpperCase();
    result = parts.join('-');
  } else if (parts.length === 1) {
    result = result.toUpperCase();
  }
  
  return result || w;
}

let output = `// Auto-generated from camera-cafe-learner/data/italian-dictionary.json
// Contains ${Object.keys(italianVocabulary).length} vocabulary items

import type { VocabularyItem } from '../types';

export const italianVocabulary: Record<string, VocabularyItem> = {
`;

const entries = Object.entries(italianVocabulary);
let count = 0;

for (const [key, val] of entries) {
  const safeKey = key.replace(/'/g, "\\'");
  const safeEn = (val.english || '').replace(/'/g, "\\'");
  const gender = val.gender;
  const emoji = val.emoji || '';
  const pronunciation = italianPronunciation(key);
  const x = val.x;
  const y = val.y;
  
  output += `  '${safeKey}': {
    id: '${safeKey}',
    native: '${safeKey}',
    english: '${safeEn}',
    gender: '${gender}',
    pronunciation: '${pronunciation.replace(/'/g, "\\'")}',
    emoji: '${emoji}',
    x: ${x},
    y: ${y},
  },
`;
  count++;
}

output += `};

export const italianVocabCount = ${count};
`;

fs.writeFileSync(vocabPath, output, 'utf8');
console.log(`✅ Regenerated ${count} pronunciations`);
