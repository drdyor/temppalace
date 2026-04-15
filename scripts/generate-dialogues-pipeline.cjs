const http = require('http');
const fs = require('fs');
const path = require('path');

const GENERATOR_MODEL = 'qwen3:8b';
const CRITIC_MODEL = 'llama3.2:latest';

const rooms = [
  {
    id: 'transport',
    name: 'Transport Hub',
    context: 'Modern Italian train travel in 2024. Buying tickets on the Trenitalia app, checking in before boarding regional trains, scanning QR codes at turnstiles, platform changes announced over speakers.',
    vocab: ['biglietto', 'treno', 'binario', 'carrozza', 'posto', 'prenotazione', 'codice QR', 'check-in', 'cambio', 'ritardo', 'partenza', 'arrivo', 'finestrino', 'corridoio'],
    grammarFocus: 'future tense (partirà, arriverà), formal requests (può dirmi...), announcements (il treno è in partenza)',
  },
  {
    id: 'cafe',
    name: 'Café',
    context: 'A busy Roman bar at 8 AM. Crowded counter, fast service, locals drinking espresso standing up. You need to order quickly and clearly. No apps here — pure spoken Italian under pressure.',
    vocab: ['caffè', 'cappuccino', 'espresso', 'macchiato', 'cornetto', 'banco', 'tavolo', 'scontrino', 'cassa', 'caldo', 'freddo', 'latte', 'zucchero'],
    grammarFocus: 'imperative and direct requests (un caffè, per favore), prices (un euro e venti)',
  },
  {
    id: 'supermarket',
    name: 'Supermarket',
    context: 'Modern Italian supermarket. Self-checkout machine (cassa automatica) is beeping. You need to weigh produce, scan items, and pay contactless. The attendant is helping you because the machine says "Operatore richiesto".',
    vocab: ['supermercato', 'cassa', 'scontrino', 'etichetta', 'pesare', 'frutta', 'verdura', 'sacchetto', 'carta', 'contanti', 'bancomat', 'operatore', 'aiuto'],
    grammarFocus: 'asking for help (può aiutarmi?), explaining problems (non funziona), numbers and prices',
  },
  {
    id: 'entrance-hall',
    name: 'Foyer / Accommodation',
    context: 'You just arrived at your Airbnb in Florence. The host sent you a WhatsApp voice note. You need to find the key box, enter the code, connect to WiFi, and ask about the neighborhood. Everything happens through spoken messages or brief face-to-face with the host.',
    vocab: ['host', 'chiave', 'codice', 'wifi', 'password', 'appartamento', 'quartiere', 'ristorante', 'consiglio', 'arrivato', 'bagagli', 'ascensore'],
    grammarFocus: 'past tense (sono arrivato), asking for recommendations (mi consiglia?), giving thanks',
  },
];

function askOllama(model, prompt) {
  return new Promise((resolve) => {
    const data = JSON.stringify({ model, stream: false, prompt });
    const start = Date.now();
    const req = http.request(
      { hostname: '127.0.0.1', port: 11434, path: '/api/generate', method: 'POST', headers: { 'Content-Type': 'application/json' } },
      (res) => {
        let body = '';
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () => {
          try {
            const json = JSON.parse(body);
            resolve({ model, time: Date.now() - start, response: json.response || json.error || body });
          } catch (e) {
            resolve({ model, time: Date.now() - start, response: body.slice(0, 500) });
          }
        });
      }
    );
    req.on('error', (err) => resolve({ model, time: Date.now() - start, response: 'ERROR: ' + err.message }));
    req.write(data);
    req.end();
  });
}

async function generateScenario(room) {
  const prompt = `You are an expert Italian language teacher and dialogue writer.

Write ONE branching dialogue scenario for an Italian language learning app.

ROOM: ${room.name} (${room.id})
CONTEXT: ${room.context}
TARGET VOCABULARY: ${room.vocab.join(', ')}
GRAMMAR FOCUS: ${room.grammarFocus}

Requirements:
1. The scenario must be SPOKEN-FIRST. This is for modern travel where people need to SPEAK Italian, not read it.
2. The NPC is an anthropomorphic cat (🐱) with ear/tail expressions.
3. The scenario should have 8-12 nodes with branching choices (A/B/C).
4. Include multiple correct paths and one wrong/funny path.
5. Use realistic, natural Italian that a traveler would actually say in 2024.
6. Output the scenario as a structured JSON object matching this TypeScript interface:

{
  "id": "string",
  "roomId": "${room.id}",
  "title": "English title",
  "titleNative": "Italian title",
  "timeContext": "e.g. 8:00 AM",
  "culturalLesson": "What the learner should take away",
  "nodes": {
    "enter": {
      "id": "enter",
      "speaker": "narrator" | "npc" | "user",
      "text": "Description or dialogue line",
      "backgroundEffect": "happy" | "neutral" | "surprised" | "angry",
      "choices": [
        { "text": "What the user says/does", "nextNodeId": "nodeId", "effect": { "culturalNote": "optional", "reputationChange": 1 } }
      ]
    }
  }
}

Output ONLY valid JSON. No markdown, no explanations.`;

  console.log(`\n🎬 GENERATING scenario for ${room.name} via ${GENERATOR_MODEL}...`);
  const genResult = await askOllama(GENERATOR_MODEL, prompt);
  console.log(`   Done in ${genResult.time}ms`);

  const critiquePrompt = `You are a critical editor for an Italian language learning app.

Review the following branching dialogue scenario. Check for:
1. Natural, realistic Italian (would a native actually say this?)
2. Cultural accuracy for 2024 Italy
3. Grammar correctness at A1-A2 level
4. Pedagogical value (does it teach useful travel Italian?)
5. Wrong paths should be clearly wrong but recoverable

Return the scenario with your corrections applied. Fix any unnatural phrases, grammatical errors, or cultural inaccuracies.

SCENARIO:
${genResult.response}

Output ONLY the corrected valid JSON. No markdown, no explanations.`;

  console.log(`🔍 CRITIQUING scenario for ${room.name} via ${CRITIC_MODEL}...`);
  const critResult = await askOllama(CRITIC_MODEL, critiquePrompt);
  console.log(`   Done in ${critResult.time}ms`);

  return {
    room: room.id,
    draft: genResult.response,
    final: critResult.response,
  };
}

(async () => {
  const results = [];
  for (const room of rooms) {
    const result = await generateScenario(room);
    results.push(result);
  }

  const outPath = path.join(__dirname, '..', 'generated-scenarios-pipeline.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\n✅ Saved ${results.length} scenarios to ${outPath}`);
})();
