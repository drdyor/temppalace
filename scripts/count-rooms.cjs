const fs = require('fs');
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
let total = 0;
for (const obj of objects) {
  const id = obj.match(/id:\s*'([^']+)'/)?.[1];
  const vocabMatch = obj.match(/vocabularyIds:\s*\[([\s\S]*?)\]/);
  if (id && vocabMatch) {
    const count = vocabMatch[1].split(',').filter(x => x.trim().startsWith('"') || x.trim().startsWith("'")).length;
    total += count;
    console.log(id + ': ' + count);
  }
}
console.log('---');
console.log('total: ' + total);
