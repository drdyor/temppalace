const fs = require('fs');
const http = require('http');

// Use local qwen2.5:14b to generate a pedagogically sound A1-A2 Italian vocabulary curriculum

const systemPrompt = `You are an expert Italian language teacher and CEFR curriculum designer. 
Your task is to generate a structured A1-A2 Italian vocabulary list optimized for visual memory-palace learning.

Rules:
1. Focus on CONCRETE, VISUAL, HIGH-FREQUENCY words that a beginner actually needs in daily life.
2. Avoid abstract political, legal, economic, or formal words (e.g. no "governo", "decreto", "commissione", "norma", "articolo", "sistema", "fatto", "modo" in abstract senses).
3. Each word must have: id (Italian word), native, english (1-3 words), gender (masculine/feminine/none), emoji (single Unicode emoji or empty string if none fits).
4. Total target: 650-850 words.
5. Nouns should include gender. Verbs/adverbs/prepositions/pronouns = "none".
6. Only single words, no phrases.

Respond with ONLY valid JSON in this exact format:
{
  "topics": [
    {
      "topic": "Greetings",
      "words": [
        {"id":"ciao","native":"ciao","english":"hello/bye","gender":"none","emoji":"👋"}
      ]
    }
  ]
}`;

const userPrompt = `Generate the complete A1-A2 Italian vocabulary curriculum.

Include these topics (add 15-35 words per topic):
- Greetings & Politeness
- Personal Info (name, age, nationality, job)
- Family & People
- House & Rooms
- Furniture & Objects
- Kitchen & Food
- Drinks
- Clothing & Accessories
- Body Parts
- Health & Illness
- Colors
- Numbers & Quantities
- Time & Dates
- Weather & Seasons
- Animals
- Nature & Garden
- Transport & Travel
- City & Directions
- Shopping & Money
- School & Work
- Hobbies & Sports
- Daily Routine (verbs)
- Common Adjectives
- Common Adverbs
- Prepositions
- Conjunctions
- Pronouns
- Questions

IMPORTANT: Keep words concrete and visual. Avoid abstract formal/bureaucratic vocabulary. Total should be 650-850 words.

JSON output only:`;

function askOllama(model, system, prompt) {
  return new Promise((resolve) => {
    const data = JSON.stringify({ model, stream: false, system, prompt });
    const req = http.request(
      { hostname: '127.0.0.1', port: 11434, path: '/api/generate', method: 'POST', headers: { 'Content-Type': 'application/json' } },
      (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          try {
            const json = JSON.parse(body);
            resolve(json.response || '');
          } catch (e) {
            console.error('Ollama parse error:', e.message, body.slice(0, 200));
            resolve('');
          }
        });
      }
    );
    req.on('error', (err) => { console.error('Ollama request error:', err.message); resolve(''); });
    req.write(data);
    req.end();
  });
}

function extractJSON(text) {
  // Try to find the outermost JSON object
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) return null;
  try {
    return JSON.parse(text.slice(start, end + 1));
  } catch (e) {
    console.error('JSON parse failed:', e.message);
    return null;
  }
}

function generatePseudoPhonetic(word) {
  const cleaned = word.toLowerCase().replace(/[^a-zàèéìòóù']/g, '');
  if (!cleaned) return word.toUpperCase();
  const vowels = 'aeiouàèéìòóù';
  const syllables = [];
  let current = '';
  for (let i = 0; i < cleaned.length; i++) {
    const ch = cleaned[i];
    current += ch;
    if (vowels.includes(ch)) {
      if (i + 1 < cleaned.length && vowels.includes(cleaned[i + 1])) continue;
      syllables.push(current);
      current = '';
    }
  }
  if (current) {
    if (syllables.length) syllables[syllables.length - 1] += current;
    else syllables.push(current);
  }
  if (syllables.length === 0) return cleaned.toUpperCase();
  let stressIndex = Math.max(0, syllables.length - 2);
  const last = syllables[syllables.length - 1].toLowerCase().replace(/[^a-z]/g, '');
  if (['ia','ie','io','e','i','o'].includes(last) && stressIndex > 0) stressIndex--;
  return syllables.map((s, i) => i === stressIndex ? s.toUpperCase() : s.toLowerCase()).join('-');
}

(async () => {
  console.log('Asking qwen2.5:14b to generate A1-A2 curriculum...');
  const response = await askOllama('qwen2.5:14b', systemPrompt, userPrompt);
  
  if (!response) {
    console.error('No response from Ollama');
    process.exit(1);
  }
  
  const data = extractJSON(response);
  if (!data || !data.topics) {
    console.error('Could not extract valid JSON. Raw response start:');
    console.log(response.slice(0, 800));
    process.exit(1);
  }
  
  let total = 0;
  const vocab = {};
  for (const topic of data.topics) {
    console.log(`Topic: ${topic.topic} — ${topic.words?.length || 0} words`);
    for (const w of (topic.words || [])) {
      if (!w.id || !w.native || !w.english) continue;
      const key = w.id.toLowerCase();
      if (vocab[key]) continue;
      total++;
      vocab[key] = {
        id: w.id,
        native: w.native,
        english: w.english,
        gender: w.gender === 'masculine' ? 'masculine' : w.gender === 'feminine' ? 'feminine' : 'none',
        pronunciation: generatePseudoPhonetic(w.id),
        emoji: w.emoji || '',
        x: 20, y: 20,
      };
    }
  }
  
  console.log(`\nTotal unique words generated: ${total}`);
  
  const ts = `// Auto-generated A1-A2 Italian vocabulary curriculum
// Generated by: local LLM (qwen2.5:14b)
// Scope: CEFR A1-A2 — concrete, visual, high-frequency words for memory palace learning
// Method: topic-based curriculum generation (28 topics)
// Pronunciations: custom syllable-based renderer
// License: Original generated content — see VOCABULARY_PROVENANCE.md

import type { VocabularyItem } from '../types';

export const italianVocabulary: Record<string, VocabularyItem> = ${JSON.stringify(vocab, null, 2).replace(/"([^"]+)"\s*:/g, '$1:').replace(/"/g, "'")};
`;
  
  fs.writeFileSync('src/data/italian-generated.ts', ts, 'utf8');
  console.log('Wrote src/data/italian-generated.ts');
})();
