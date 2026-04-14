const fs = require('fs');
const c = fs.readFileSync('src/data/rooms.ts', 'utf8');
const m = c.match(/id:\s*'entrance-hall'[\s\S]*?vocabularyIds:\s*\[([\s\S]*?)\]/);
if (m) {
  const words = m[1].split(',').map(x => x.trim().replace(/['"]/g, '')).filter(Boolean);
  fs.writeFileSync('entrance-hall-words.json', JSON.stringify(words, null, 2), 'utf8');
  console.log('saved', words.length, 'words');
}
