const http = require('http');

const prompt = `You are a brutal, no-nonsense product critic and ed-tech investor. I'm about to pitch my Italian language learning app against Pimsleur in a competition. I need you to be brutally honest about where I'd get destroyed and where I might actually win.

Here's my app:
- It's a "memory palace" web app: 18 themed rooms (kitchen, bedroom, transport, etc.) with ~800 A1-A2 Italian words
- Words are visual dots you can click on room images; clicking opens a modal with the word, translation, pseudo-phonetic pronunciation, and AI-generated contextual examples + conjugation tables (via local LLM)
- Room images are AI-generated (ComfyUI) to match the vocabulary in each room
- It uses browser text-to-speech for pronunciation
- It's a static web app (Vite + React), runs in browser, no install needed
- The vocabulary is curated from open-source frequency data, manually cleaned for A1-A2 learners
- Subrooms/zones let you drill into specific areas (e.g. fridge, pantry, stove in kitchen)
- There's a dialogue/scenario mode but it's still basic

Pimsleur is:
- Audio-only, 30-minute daily lessons
- Proven spaced repetition methodology
- Professional native speaker audio
- No visuals, no gamification, very structured curriculum
- Strong brand recognition and decades of research backing

Give me 5-7 bullet points. Be harsh where deserved. Don't sugarcoat. If my app would lose, say exactly why. If there's a genuine edge, say what it is. Focus on learner outcomes, retention, engagement, and market viability.

Your response:`;

const models = ['qwen2.5:14b', 'llama3.2:latest', 'qwen3:8b'];

function askModel(model) {
  return new Promise((resolve) => {
    const data = JSON.stringify({ model, stream: false, prompt });
    const req = http.request(
      { hostname: '127.0.0.1', port: 11434, path: '/api/generate', method: 'POST', headers: { 'Content-Type': 'application/json' } },
      (res) => {
        let body = '';
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () => {
          try {
            const json = JSON.parse(body);
            resolve({ model, response: json.response || json.error || body });
          } catch (e) {
            resolve({ model, response: body.slice(0, 500) });
          }
        });
      }
    );
    req.on('error', (err) => resolve({ model, response: 'ERROR: ' + err.message }));
    req.write(data);
    req.end();
  });
}

(async () => {
  console.log('Asking local LLMs for brutally honest competitive feedback vs Pimsleur...\n');
  const results = await Promise.all(models.map(askModel));
  for (const r of results) {
    console.log('\n========== ' + r.model + ' ==========');
    console.log(r.response);
  }
})();
