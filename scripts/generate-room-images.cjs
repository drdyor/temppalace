const http = require('http');
const fs = require('fs');
const path = require('path');
const { rooms } = require('../src/data/rooms.ts');
const { italianVocabulary } = require('../src/data/italian-generated.ts');

const COMFY_URL = 'http://127.0.0.1:8188';
const OUTPUT_DIR = path.join(__dirname, '../public/rooms');

const roomPrompts = {
  kitchen: "traditional Italian kitchen (cucina), terracotta floor tiles, copper pots hanging, wooden dining table, fresh herbs, warm sunlight, rustic Tuscan style",
  bedroom: "elegant Italian bedroom, ornate wrought iron bed frame, fresco painted walls, linen curtains, terracotta flooring, morning light streaming",
  cafe: "authentic Italian bar interior, marble countertop, vintage espresso machine, pastries on display, warm ambient lighting",
  market: "Italian mercato scene, wooden produce crates, fresh fruits and vegetables, cheese wheels, hanging prosciutto, bustling atmosphere",
  'entrance-hall': "grand Italian foyer, marble floors, ornate mirror, coat rack, family portrait on wall, warm chandelier light, elegant entrance",
  library: "classic Italian study, tall bookshelves, antique desk, warm reading lamp, leather bound books, quiet contemplative atmosphere",
  bathroom: "luxurious Italian bathroom, mosaic tiles, clawfoot tub, fresh towels, marble sink, spa-like atmosphere",
  garden: "beautiful Italian giardino, blooming flowers, cypress trees, stone path, sunny blue sky, peaceful afternoon",
  transport: "vintage Italian train station, arched platforms, old ticket booth, travelers with luggage, warm afternoon light",
  'living-room': "cozy Italian salotto, plush sofa, antique furniture, soft lamplight, family photos, welcoming atmosphere",
  supermarket: "bustling Italian alimentari, shelves of local products, fresh produce, cheese counter, warm lighting",
  gallery: "refined Italian galleria d'arte, framed paintings on walls, sculpture on pedestal, soft spotlighting, cultured atmosphere",
  animals: "charming Italian pet sanctuary, various animals in natural poses, warm barn setting, friendly atmosphere",
  weather: "dramatic Italian countryside sky, rolling hills, atmospheric clouds, golden light breaking through",
  tools: "rustic Italian workshop, hand tools on wooden walls, workbench, warm workshop lighting, craftsman atmosphere",
  actions: "dynamic Italian street scene, people in motion, expressive gestures, lively piazza atmosphere",
  emotions: "artistic Italian emotional portrait, expressive faces, dramatic chiaroscuro lighting, deep feelings",
  farm: "sunny Italian fattoria, rolling fields, farm buildings, harvested crops, pastoral beauty",
  fantasy: "magical Italian fantasy realm, ancient castle, mystical creatures, enchanted forest, dreamlike atmosphere"
};

async function fetchJson(urlPath) {
  return new Promise((resolve, reject) => {
    http.get(`${COMFY_URL}${urlPath}`, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

async function postJson(urlPath, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const req = http.request(`${COMFY_URL}${urlPath}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) }
    }, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try { resolve(JSON.parse(d)); } catch (e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function downloadImage(filename, subfolder, type, destPath) {
  return new Promise((resolve, reject) => {
    const url = `${COMFY_URL}/view?filename=${encodeURIComponent(filename)}&subfolder=${encodeURIComponent(subfolder)}&type=${type}`;
    http.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Status ${res.statusCode}`));
        return;
      }
      const stream = fs.createWriteStream(destPath);
      res.pipe(stream);
      stream.on('finish', () => { stream.close(); resolve(); });
      stream.on('error', reject);
    }).on('error', reject);
  });
}

async function getBestModel() {
  const info = await fetchJson('/object_info/CheckpointLoaderSimple');
  const names = info?.CheckpointLoaderSimple?.input?.required?.ckpt_name || [];
  if (names.length === 0) throw new Error('No checkpoints found');
  const realistic = names.find(n => /realvis|realistic|photon|juggernaut/i.test(n));
  return realistic || names[0];
}

async function generateRoom(roomType, model) {
  const seed = Math.floor(Math.random() * 1000000);
  const promptBase = roomPrompts[roomType] || `beautiful ${roomType} interior, Italian Mediterranean style, warm golden lighting, authentic details, architectural beauty`;
  
  const room = rooms.find(r => r.id === roomType);
  let vocabEnrichment = '';
  if (room && room.vocabularyIds.length > 0) {
    const visualWords = room.vocabularyIds
      .map(id => italianVocabulary[id])
      .filter(w => w && (w.emoji || w.gender !== 'none'))
      .slice(0, 8);
    if (visualWords.length > 0) {
      vocabEnrichment = ` featuring: ${visualWords.map(w => w.native).join(', ')}`;
    }
  }
  
  const fullPrompt = `masterpiece, best quality, highly detailed, ${promptBase}${vocabEnrichment}, italian aesthetic, cinematic lighting, 8k uhd, sharp focus, professional photography`;
  const negativePrompt = "lowres, bad anatomy, bad hands, text, error, watermark, signature, blurry, modern cars, people, humans, cartoon, anime";
  
  const workflow = {
    "1": { "inputs": { "ckpt_name": model }, "class_type": "CheckpointLoaderSimple" },
    "2": { "inputs": { "text": fullPrompt, "clip": ["1", 1] }, "class_type": "CLIPTextEncode" },
    "3": { "inputs": { "text": negativePrompt, "clip": ["1", 1] }, "class_type": "CLIPTextEncode" },
    "4": { "inputs": { "width": 1344, "height": 768, "batch_size": 1 }, "class_type": "EmptyLatentImage" },
    "5": { "inputs": { "seed": seed, "steps": 28, "cfg": 7, "sampler_name": "dpmpp_2m_sde", "scheduler": "karras", "denoise": 1, "model": ["1", 0], "positive": ["2", 0], "negative": ["3", 0], "latent_image": ["4", 0] }, "class_type": "KSampler" },
    "6": { "inputs": { "samples": ["5", 0], "vae": ["1", 2] }, "class_type": "VAEDecode" },
    "7": { "inputs": { "filename_prefix": `room_${roomType}`, "images": ["6", 0] }, "class_type": "SaveImage" }
  };
  
  console.log(`Queueing ${roomType}...`);
  const { prompt_id } = await postJson('/prompt', { prompt: workflow });
  
  // Poll
  for (let i = 0; i < 90; i++) {
    await new Promise(r => setTimeout(r, 2000));
    const history = await fetchJson(`/history/${prompt_id}`);
    const job = history[prompt_id];
    if (job?.outputs) {
      for (const nodeOutput of Object.values(job.outputs)) {
        if (nodeOutput.images?.length) {
          const img = nodeOutput.images[0];
          const destPath = path.join(OUTPUT_DIR, `${roomType}.jpg`);
          await downloadImage(img.filename, img.subfolder, img.type, destPath);
          console.log(`  Saved ${roomType}.jpg (${img.filename})`);
          return;
        }
      }
    }
  }
  throw new Error(`Timeout for ${roomType}`);
}

(async () => {
  // Determine missing main room images
  const missing = [];
  for (const r of rooms) {
    const imgPath = path.join(OUTPUT_DIR, `${r.id}.jpg`);
    if (!fs.existsSync(imgPath)) missing.push(r.id);
  }
  
  if (missing.length === 0) {
    console.log('All main room images already exist!');
    return;
  }
  
  console.log(`Missing rooms: ${missing.join(', ')}`);
  
  const model = await getBestModel();
  console.log(`Using checkpoint: ${model}`);
  
  for (const roomType of missing) {
    try {
      await generateRoom(roomType, model);
    } catch (err) {
      console.error(`FAILED ${roomType}:`, err.message);
    }
    // Small cooldown between generations
    await new Promise(r => setTimeout(r, 500));
  }
  
  console.log('\nDone!');
})();
