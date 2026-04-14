const http = require('http');

const prompt = `I need a quick, actionable take (3-5 bullet points) on fixing a vocabulary distribution problem in a memory-palace Italian learning app.

Current state:
- 955 Italian words mapped into 18 rooms
- entrance-hall has 339 generic words (colors, numbers, dates, common adjectives, prepositions, pronouns)
- Other rooms have 7-69 words each
- Only 5 room images exist; rest use gradient+emoji fallbacks
- Subrooms (zones) exist and can hold specific vocabulary

Goal: Make the app feel usable and not overwhelming. What should I do RIGHT NOW to fix this? Prioritize quick wins over perfect solutions.`;

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
  const results = await Promise.all(models.map(askModel));
  for (const r of results) {
    console.log('\n========== ' + r.model + ' ==========');
    console.log(r.response);
  }
})();
