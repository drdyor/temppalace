const fs = require('fs');
const path = require('path');

const vocabPath = path.join(__dirname, '../src/data/italian-generated.ts');
let content = fs.readFileSync(vocabPath, 'utf8');

function italianPronunciation(word) {
  let w = word.toLowerCase();
  
  // Step 1: Handle digraphs and clusters by using placeholders
  const placeholders = [];
  
  function placeholder(str) {
    const key = `__PH${placeholders.length}__`;
    placeholders.push(str);
    return key;
  }
  
  // Save gn, gl(i), sc(e/i), ch, gh, qu, ci, ce, gi, ge, sci, sce, gn, gli
  // We process in order of specificity
  
  // gli before gl
  w = w.replace(/gli/g, placeholder('lyee'));
  // gn
  w = w.replace(/gn/g, placeholder('ny'));
  // sci, sce
  w = w.replace(/sci/g, placeholder('shee'));
  w = w.replace(/sce/g, placeholder('shay'));
  // sch -> sk
  w = w.replace(/sch/g, placeholder('sk'));
  // ch -> k
  w = w.replace(/ch/g, placeholder('k'));
  // gh -> g
  w = w.replace(/gh/g, placeholder('g'));
  // ci, ce
  w = w.replace(/ci/g, placeholder('chee'));
  w = w.replace(/ce/g, placeholder('chay'));
  // gi, ge
  w = w.replace(/gi/g, placeholder('jee'));
  w = w.replace(/ge/g, placeholder('jay'));
  // qu
  w = w.replace(/qu/g, placeholder('kw'));
  // sca, sco, scu -> ska, sko, skoo
  w = w.replace(/sc/g, placeholder('sk'));
  // zz -> ts
  w = w.replace(/zz/g, placeholder('ts'));
  // z -> ts
  w = w.replace(/z/g, placeholder('ts'));
  // cc before e/i -> tch (rare, but cci = chee already handled above)
  // cia, cio, ciu -> cha, cho, choo
  w = w.replace(/cia/g, placeholder('cha'));
  w = w.replace(/cio/g, placeholder('cho'));
  w = w.replace(/ciu/g, placeholder('choo'));
  // gia, gio, giu -> ja, jo, joo
  w = w.replace(/gia/g, placeholder('ja'));
  w = w.replace(/gio/g, placeholder('jo'));
  w = w.replace(/giu/g, placeholder('joo'));
  
  // Step 2: Simple letter replacements
  w = w.replace(/c/g, 'k'); // remaining c = k (ca, co, cu)
  w = w.replace(/j/g, 'y'); // just in case
  
  // Step 3: Vowel mapping with accents
  w = w.replace(/à/g, 'ah');
  w = w.replace(/è/g, 'eh');
  w = w.replace(/é/g, 'ay');
  w = w.replace(/ì/g, 'ee');
  w = w.replace(/ò/g, 'oh');
  w = w.replace(/ù/g, 'oo');
  w = w.replace(/a/g, 'ah');
  w = w.replace(/e/g, 'ay');
  w = w.replace(/i/g, 'ee');
  w = w.replace(/o/g, 'oh');
  w = w.replace(/u/g, 'oo');
  w = w.replace(/y/g, 'ee');
  w = w.replace(/h/g, ''); // h is silent in Italian (already handled ch, gh)
  w = w.replace(/x/g, 'ks');
  
  // Step 4: Restore placeholders
  for (let i = 0; i < placeholders.length; i++) {
    w = w.replace(`__PH${i}__`, placeholders[i]);
  }
  
  // Step 5: Insert syllable breaks
  // Simple approach: break before consonant groups when preceded by vowel sounds
  // We'll look for patterns like ahk, ohb, eet, etc. and insert hyphens
  // A syllable in Italian generally: vowel(s) + consonant(s)
  // Break: V-CV -> V-CV, but V-CCV -> V-CCV (break between CC)
  
  // For simplicity, let's just break after each vowel sound group that's followed by a consonant
  // and before the next vowel sound, respecting consonant clusters
  
  // Actually, a simpler visual approach: just capitalize the stressed syllable
  // Italian stress is usually on the penultimate syllable
  
  const syllables = w.match(/(ks|kw|sk|sh|ch|ny|ly|ts|rr|r|[^aeiouyoh])?[aeiouy](?:h|(?:[aeiouy]{1,2}))?/gi) || [w];
  
  // Determine stress
  let stressIndex = syllables.length - 2; // penultimate by default
  if (stressIndex < 0) stressIndex = 0;
  
  // If word ends with accented vowel in original, stress last syllable
  if (/[àèéìòù]$/.test(word)) {
    stressIndex = syllables.length - 1;
  }
  
  // Some common exceptions: words ending in -zione, -sione, -tore stress 3rd-to-last (antepenultimate)
  if (/(zione|sione|tore)$/.test(word)) {
    stressIndex = syllables.length - 3;
    if (stressIndex < 0) stressIndex = 0;
  }
  
  syllables[stressIndex] = syllables[stressIndex]?.toUpperCase();
  
  let result = syllables.join('-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  
  // Clean up common issues
  result = result.replace(/-([A-Z])/, '$1'); // stressed syllable should connect
  
  return result || w.toUpperCase();
}

// Parse and replace
const regex = /pronunciation: '([^']+)'/g;
let match;
let replacements = 0;

while ((match = regex.exec(content)) !== null) {
  const oldPron = match[1];
  // Find the word id that precedes this pronunciation
  const before = content.substring(0, match.index);
  const idMatch = before.match(/id: '([^']+)'[^}]*$/);
  if (idMatch) {
    const wordId = idMatch[1];
    const newPron = italianPronunciation(wordId);
    if (newPron !== oldPron) {
      content = content.substring(0, match.index) + `pronunciation: '${newPron}'` + content.substring(match.index + match[0].length);
      replacements++;
    }
  }
}

fs.writeFileSync(vocabPath, content, 'utf8');
console.log(`✅ Fixed ${replacements} pronunciations`);
