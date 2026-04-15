// Audit room/subroom vocabulary consistency.
// Reports:
//  1. vocabularyIds missing from italian-dictionary.json
//  2. subroom interiorVocab words NOT in the parent room's vocabularyIds
//  3. room vocabularyIds NOT placed in any subroom
//  4. suspicious subroom patterns (alphabetical contiguous chunks — sign of mis-assignment)

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const dictSrc = fs.readFileSync(path.join(ROOT, 'src/data/italian-generated.ts'), 'utf8');
const roomsSrc = fs.readFileSync(path.join(ROOT, 'src/data/rooms.ts'), 'utf8');

// Extract word keys from italian-generated.ts: top-level entries like `  mela: {`
const dictWords = new Set(
  [...dictSrc.matchAll(/^  ([A-Za-zÀ-ÿ'0-9]+):\s*\{/gm)].map((m) => m[1].toLowerCase())
);

// Parse rooms.ts by regex (TS would need ts-node). Good enough for audit.
const roomBlocks = [...roomsSrc.matchAll(/\{\s*id:\s*'([^']+)',[\s\S]*?grammarPoints:/g)];

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

const rooms = [];
const roomIdRe = /\{\s*id:\s*'([a-z-]+)',\s*name:\s*'([^']+)',/g;
for (const m of roomsSrc.matchAll(roomIdRe)) {
  const openIdx = m.index;
  const endIdx = findBalanced(roomsSrc, openIdx);
  if (endIdx < 0) continue;
  const block = roomsSrc.slice(openIdx, endIdx + 1);
  if (!block.includes('vocabularyIds')) continue; // skip zone-level
  const vocabMatch = block.match(/vocabularyIds:\s*\[([\s\S]*?)\]/);
  if (!vocabMatch) continue;
  const vocab = [...vocabMatch[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]);

  const zones = [];
  const zoneRe = /\{\s*id:\s*'([a-z-]+)',\s*name:\s*'([^']+)',[\s\S]*?interiorVocab:\s*\[([\s\S]*?)\]\s*\}/g;
  for (const z of block.matchAll(zoneRe)) {
    const words = [...z[3].matchAll(/wordId:\s*'([^']+)'/g)].map((x) => x[1]);
    zones.push({ id: z[1], name: z[2], words });
  }
  rooms.push({ id: m[1], name: m[2], vocab, zones });
}

const report = [];
report.push(`# Room Vocabulary Audit\n\nGenerated ${new Date().toISOString()}\n`);
report.push(`Rooms parsed: **${rooms.length}**\n`);

let totalMissingDict = 0;
let totalZoneOrphans = 0;
let totalUnplaced = 0;
let suspiciousZones = 0;

for (const room of rooms) {
  report.push(`\n## ${room.name} (\`${room.id}\`)`);
  report.push(`- vocabularyIds: **${room.vocab.length}**`);
  report.push(`- zones: **${room.zones.length}**`);

  const missing = room.vocab.filter((w) => !dictWords.has(w.toLowerCase()));
  if (missing.length) {
    totalMissingDict += missing.length;
    report.push(`\n**❌ ${missing.length} words missing from dictionary:**`);
    report.push('`' + missing.join('`, `') + '`');
  }

  const placed = new Set();
  for (const z of room.zones) {
    z.words.forEach((w) => placed.add(w));
    const orphans = z.words.filter((w) => !room.vocab.includes(w));
    if (orphans.length) {
      totalZoneOrphans += orphans.length;
      report.push(`\n**⚠ Zone \`${z.id}\` (${z.name}) has ${orphans.length} words not in room vocabulary:**`);
      report.push('`' + orphans.join('`, `') + '`');
    }

    // Alphabetical-chunk heuristic: if >=7 words and >=70% are sorted ascending,
    // likely a chunk-slice rather than a semantic grouping.
    if (z.words.length >= 7) {
      const sorted = [...z.words].sort();
      const matches = z.words.filter((w, i) => w === sorted[i]).length;
      const ratio = matches / z.words.length;
      if (ratio >= 0.7) {
        suspiciousZones++;
        report.push(`\n**🔍 Zone \`${z.id}\` looks alphabetically chunked (${Math.round(ratio * 100)}% sorted) — likely mis-assigned:**`);
        report.push('`' + z.words.join('`, `') + '`');
      }
    }
  }

  const unplaced = room.vocab.filter((w) => !placed.has(w));
  if (unplaced.length) {
    totalUnplaced += unplaced.length;
    report.push(`\n**📦 ${unplaced.length} words in room vocabulary but not placed in any zone:**`);
    report.push('`' + unplaced.join('`, `') + '`');
  }
}

report.unshift(
  `\n## Summary\n` +
    `- Words missing from dictionary: **${totalMissingDict}**\n` +
    `- Zone words not in parent room vocab: **${totalZoneOrphans}**\n` +
    `- Room words not placed in any zone: **${totalUnplaced}**\n` +
    `- Zones that look alphabetically chunked: **${suspiciousZones}**\n`
);

const outPath = path.join(ROOT, 'docs/ROOM_VOCAB_AUDIT.md');
fs.writeFileSync(outPath, report.join('\n'));
console.log(`Audit written to ${outPath}`);
console.log(
  `Missing dict: ${totalMissingDict}, zone orphans: ${totalZoneOrphans}, unplaced: ${totalUnplaced}, suspicious zones: ${suspiciousZones}`
);
