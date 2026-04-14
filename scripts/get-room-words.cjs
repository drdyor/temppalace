const fs = require('fs');
const { italianVocabulary } = require('../src/data/italian-generated.ts');
const c = fs.readFileSync('src/data/rooms.ts', 'utf8');

let depth = 0, buffer = '';
const objects = [];
for (let i = 0; i < c.length; i++) {
  const ch = c[i];
  if (ch === '{') {
    if (depth === 0) buffer = '';
    depth++;
  }
  if (depth > 0) buffer += ch;
  if (ch === '}') {
    depth--;
    if (depth === 0) objects.push(buffer);
  }
}

for (const obj of objects) {
  const id = obj.match(/id:\s*'([^']+)'/)?.[1];
  const vocabMatch = obj.match(/vocabularyIds:\s*\[([\s\S]*?)\]/);
  if (id && vocabMatch) {
    const words = vocabMatch[1].split(',').map(x => x.trim().replace(/['"]/g, '')).filter(Boolean);
    if (['gallery', 'animals', 'farm', 'weather', 'emotions', 'actions', 'tools', 'transport', 'living-room'].includes(id)) {
      console.log('\n=== ' + id + ' (' + words.length + ' words) ===');
      for (const w of words) {
        const v = italianVocabulary[w];
        console.log((v ? v.english : '?') + ' | ' + w);
      }
    }
  }
}
