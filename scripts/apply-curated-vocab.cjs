const fs = require('fs');

// Manual assignments for the uncategorized words
const manualAssignments = {
  'entrance-hall': [
    'alte','alti','altra','altro','anche','collega','coppia','cosa','dopo','enorme','famoso','finalmente','francese','gratis','inglese','idea','luogo','mai','male','mondo','nome','paesi','pericoloso','primo','problema','questo','secondo','sempre','simile','società','stipendio','subito','tardi','terzo','quarto','quinto','zero','molto','poco','troppo','abbastanza','quasi','più','meno','poi','senza','sicuro','zia','zio','natale'
  ],
  'kitchen': ['bastoncini','fiamma','fuoco','piattino','preparare'],
  'bedroom': ['caricabatterie','jeans','pantaloni','pantaloncini','taglia'],
  'bathroom': ['denti','ferita','influenza','tosse','polvere','piedi'],
  'living-room': ['email','internet','schermo','streaming','wifi'],
  'library': ['file','righello','stampante','telescopio','testo'],
  'transport': ['arrivare','città','guida','lontano','piazza','porto','prenotazione','tram'],
  'garden': ['ramo','radice'],
  'supermarket': ['mercato','offerta','supermercato'],
  'cafe': ['ordinare'],
  'gallery': ['area','capolavoro','immagine','livello','nera','punto','storie','zona'],
  'farm': ['paglia'],
  'fantasy': ['caverna','chiesa','deserto','grotta','isola'],
  'weather': ['aria','cenere','energia','inquinamento','onda'],
  'tools': ['mattone','mattoni'],
  'emotions': ['ansia','nostalgia','preoccupato','rabbia','realtà','segreto','verità','vita'],
  'actions': ['cambiare','movimento','nascondere','ridere'],
};

const curated = JSON.parse(fs.readFileSync('curated-vocab-v2.json', 'utf8'));

// Merge manual assignments
for (const [room, words] of Object.entries(manualAssignments)) {
  if (!curated.roomMap[room]) curated.roomMap[room] = [];
  for (const w of words) {
    if (!curated.roomMap[room].includes(w)) curated.roomMap[room].push(w);
  }
}
curated.uncategorized = [];

const finalVocab = { ...curated.vocabulary, ...curated.dialogueWords };

console.log('=== Final Room Distribution ===');
let total = 0;
for (const [room, words] of Object.entries(curated.roomMap)) {
  console.log(`${room}: ${words.length}`);
  total += words.length;
}
console.log(`Total visual/grid words: ${total}`);
console.log(`Dialogue-only words: ${Object.keys(curated.dialogueWords).length}`);

// Write italian-generated.ts
const tsLines = [];
tsLines.push(`// Auto-generated curated A1-A2 Italian vocabulary`);
tsLines.push(`// Source: camera-cafe-learner dictionary + manual curation`);
tsLines.push(`// Scope: CEFR A1-A2 concrete/visual words + essential function words`);
tsLines.push(`// Method: keyword room assignment + manual review`);
tsLines.push(`// License: See VOCABULARY_PROVENANCE.md`);
tsLines.push(``);
tsLines.push(`import type { VocabularyItem } from '../types';`);
tsLines.push(``);
tsLines.push(`export const italianVocabulary: Record<string, VocabularyItem> = {`);

const keys = Object.keys(finalVocab).sort();
for (const k of keys) {
  const v = finalVocab[k];
  const safeKey = k.includes('-') || /^\d/.test(k) || ['super','typeof','instanceof','in','void','delete','export','import','default','var','let','const','function','class','return','if','else','while','for','do','switch','case','break','continue','try','catch','finally','throw','new','this','true','false','null','undefined','with','debugger','yield','await'].includes(k) ? `"${k}"` : k;
  tsLines.push(`  ${safeKey}: {`);
  tsLines.push(`    id: '${v.id}',`);
  tsLines.push(`    native: '${v.native}',`);
  tsLines.push(`    english: '${v.english.replace(/'/g, "\\'")}',`);
  tsLines.push(`    gender: '${v.gender}',`);
  tsLines.push(`    pronunciation: '${v.pronunciation}',`);
  tsLines.push(`    emoji: '${v.emoji}',`);
  tsLines.push(`    x: ${v.x}, y: ${v.y},`);
  tsLines.push(`  },`);
}
tsLines.push(`};`);

fs.writeFileSync('src/data/italian-generated.ts', tsLines.join('\n'), 'utf8');
console.log('\nWrote src/data/italian-generated.ts');

// Helper: find the position of a vocabularyIds array for a given room block
function replaceVocabArray(source, roomId, newWords) {
  const roomStart = source.indexOf(`id: '${roomId}'`);
  if (roomStart === -1) return source;
  
  const vocabLabel = 'vocabularyIds:';
  let vocabPos = source.indexOf(vocabLabel, roomStart);
  if (vocabPos === -1) return source;
  
  const bracketOpen = source.indexOf('[', vocabPos);
  if (bracketOpen === -1) return source;
  
  let depth = 1;
  let bracketClose = bracketOpen + 1;
  while (depth > 0 && bracketClose < source.length) {
    if (source[bracketClose] === '[') depth++;
    else if (source[bracketClose] === ']') depth--;
    bracketClose++;
  }
  
  const newVocab = newWords.map(w => `"${w}"`).join(', ');
  return source.slice(0, bracketOpen + 1) + newVocab + source.slice(bracketClose - 1);
}

// Helper: replace interiorVocab for zones inside a room block
function replaceZoneInteriors(source, roomId, zoneWordMap) {
  const roomStart = source.indexOf(`id: '${roomId}'`);
  if (roomStart === -1) return source;
  const zonesLabel = 'zones:';
  let zonesPos = source.indexOf(zonesLabel, roomStart);
  if (zonesPos === -1) return source;
  
  for (const [zoneId, words] of Object.entries(zoneWordMap)) {
    const zoneIdPos = source.indexOf(`id: '${zoneId}'`, zonesPos);
    if (zoneIdPos === -1) continue;
    
    const interiorLabel = 'interiorVocab:';
    let interiorPos = source.indexOf(interiorLabel, zoneIdPos);
    if (interiorPos === -1) continue;
    
    const bracketOpen = source.indexOf('[', interiorPos);
    if (bracketOpen === -1) continue;
    
    let depth = 1;
    let bracketClose = bracketOpen + 1;
    while (depth > 0 && bracketClose < source.length) {
      if (source[bracketClose] === '[') depth++;
      else if (source[bracketClose] === ']') depth--;
      bracketClose++;
    }
    
    const newInterior = words.map((w, i) => {
      const x = 12 + (i % 4) * 25;
      const y = 12 + Math.floor(i / 4) * 25;
      return `{ wordId: '${w}', x: ${x}, y: ${y} }`;
    }).join(', ');
    
    source = source.slice(0, bracketOpen + 1) + newInterior + source.slice(bracketClose - 1);
  }
  return source;
}

let roomsTs = fs.readFileSync('src/data/rooms.ts', 'utf8');

const roomIds = [
  'entrance-hall','kitchen','library','bedroom','bathroom','garden',
  'transport','living-room','supermarket','cafe','gallery','animals',
  'weather','tools','actions','emotions','farm','fantasy'
];

for (const roomId of roomIds) {
  let vocabIds = (curated.roomMap[roomId] || []).filter(w => finalVocab[w]);
  if (vocabIds.length === 0) continue;
  
  // Sort: nouns first, then verbs, then others
  vocabIds = vocabIds.sort((a, b) => {
    const wa = finalVocab[a], wb = finalVocab[b];
    const score = (w) => {
      if (w.gender !== 'none') return 0;
      if (w.english.startsWith('to ')) return 1;
      return 2;
    };
    return score(wa) - score(wb);
  });
  
  roomsTs = replaceVocabArray(roomsTs, roomId, vocabIds);
  
  // Build zone word map: first 4 zones get up to 10 words each
  const zoneMatches = [...roomsTs.matchAll(/id:\s*'([^']+)'/g)];
  // Find zones that belong to this room
  const roomStart = roomsTs.indexOf(`id: '${roomId}'`);
  const nextRoom = roomIds.find(r => r !== roomId && roomsTs.indexOf(`id: '${r}'`) > roomStart);
  const roomEnd = nextRoom ? roomsTs.indexOf(`id: '${nextRoom}'`) : roomsTs.length;
  const roomSlice = roomsTs.slice(roomStart, roomEnd);
  const zoneIdsInRoom = [...roomSlice.matchAll(/id:\s*'([^']+)'/g)].map(m => m[1]).filter(z => !roomIds.includes(z));
  
  const zoneWordMap = {};
  let wordIdx = 0;
  for (const zoneId of zoneIdsInRoom.slice(0, 4)) {
    zoneWordMap[zoneId] = vocabIds.slice(wordIdx, wordIdx + 10);
    wordIdx += 10;
  }
  
  roomsTs = replaceZoneInteriors(roomsTs, roomId, zoneWordMap);
}

fs.writeFileSync('src/data/rooms.ts', roomsTs, 'utf8');
console.log('Wrote src/data/rooms.ts');
