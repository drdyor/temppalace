const http = require('http');

const prompt = `Brutally honest competitive analysis: my app is a memory-palace Italian vocabulary web app with 18 themed rooms, ~800 A1-A2 words as clickable dots on AI-generated room images. Clicking a word shows translation, pseudo-phonetic pronunciation, and AI-generated example sentences + verb conjugations. It uses browser TTS. Against Pimsleur (audio-only, proven spaced repetition, professional native speakers, 30-min daily lessons), where would I get destroyed and where might I win? 5-7 bullet points. Be harsh.`;

function ask(model) {
  return new Promise((resolve) => {
    const data = JSON.stringify({ model, stream: false, prompt });
    const start = Date.now();
    const req = http.request(
      { hostname: '127.0.0.1', port: 11434, path: '/api/generate', method: 'POST', headers: { 'Content-Type': 'application/json' } },
      (res) => {
        let body = '';
        res.on('data', c => body += c);
        res.on('end', () => {
          try {
            const json = JSON.parse(body);
            resolve({ model, time: Date.now() - start, text: json.response || '' });
          } catch (e) {
            resolve({ model, time: Date.now() - start, text: body.slice(0, 300) });
          }
        });
      }
    );
    req.on('error', e => resolve({ model, time: Date.now() - start, text: 'ERR: ' + e.message }));
    req.write(data);
    req.end();
  });
}

(async () => {
  for (const model of ['llama3.2', 'qwen3:8b']) {
    const r = await ask(model);
    console.log(`\n=== ${r.model} (${r.time}ms) ===`);
    console.log(r.text);
  }
})();
