const http = require('http');

const prompt = `You are a brutal but helpful product strategist and ed-tech advisor.

I've built a memory-palace Italian vocabulary web app with these current features:
- 18 themed rooms with ~800 A1-A2 Italian words
- Words are clickable dots on AI-generated room images (ComfyUI)
- Clicking a word shows translation, pseudo-phonetic pronunciation, and AI-generated examples + verb conjugations via local LLM
- Browser TTS for pronunciation
- Subrooms/zones let you drill into specific areas (fridge, pantry, stove, etc.)
- Practice tab: flashcards + gender practice
- Test tab: multiple choice quizzes
- Narratives tab: past/present/future stories per room
- Culture tab: soft cultural tips and example dialogues
- Dialogue tab: basic branching scenarios + AI-generated dynamic scenarios
- Static Vite + React app, runs in browser, no install needed
- Vocabulary is curated from open-source frequency data, manually cleaned

We just got brutally honest competitive feedback vs Pimsleur. The main weaknesses are:
1. Browser TTS is weak vs native speaker audio
2. No proven spaced repetition / structured progression
3. Memory palace is visually cool but lacks forced active recall
4. AI-generated content can be inaccurate
5. Huge brand/trust gap vs established players
6. Only real edge is visual learners at A1-A2 who want a free browser tool

Answer these three questions in detail:

1. HOW DO WE MAKE THIS A PRODUCT WORTH PAYING FOR based on what we currently have? What monetization model, pricing tier, or specific paid feature would actually work?

2. WHAT SHOULD WE IMPROVE AND HOW? Give me a prioritized roadmap of the top 5 improvements (with concrete implementation steps) that would close the gap vs Pimsleur or carve out a defensible niche.

3. ARE THERE ANY OPEN-SOURCE GITHUB REPOS, LIBRARIES, OR TOOLS that could accelerate these improvements? Name specific repos, what they do, and how we'd integrate them.

Be specific, actionable, and realistic. No fluff.`;

const models = ['qwen3:8b', 'llama3.2:latest'];

function askModel(model) {
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

(async () => {
  console.log('Asking local LLMs for product strategy...\n');
  for (const model of models) {
    const r = await askModel(model);
    console.log('\n========== ' + r.model + ' (' + r.time + 'ms) ==========');
    console.log(r.response);
  }
})();
