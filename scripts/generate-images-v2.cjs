const fs = require('fs');
const path = require('path');
const { rooms } = require('../src/data/rooms.ts');
const { italianVocabulary } = require('../src/data/italian-generated.ts');

const COMFY_URL = 'http://127.0.0.1:8188';
const OUT = path.join(__dirname, '../public/rooms');
const MODEL = 'dreamshaperXL_lightningDPMSDE.safetensors';

function httpPost(url, body, timeoutMs = 30000) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const req = require('http').request(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) }
    }, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try { resolve(JSON.parse(d)); } catch { resolve(d); }
      });
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
    req.setTimeout(timeoutMs);
    req.write(data);
    req.end();
  });
}

function httpGet(url, timeoutMs = 10000) {
  return new Promise((resolve, reject) => {
    const req = require('http').get(url, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try { resolve(JSON.parse(d)); } catch { resolve(d); }
      });
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
    req.setTimeout(timeoutMs);
  });
}

async function download(filename, subfolder, type, dest) {
  const url = `${COMFY_URL}/view?filename=${encodeURIComponent(filename)}&subfolder=${encodeURIComponent(subfolder)}&type=${type}`;
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    require('http').get(url, (res) => {
      if (res.statusCode !== 200) { reject(new Error(`HTTP ${res.statusCode}`)); return; }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', reject);
  });
}

function pickVisualWords(wordIds, max = 8) {
  return wordIds
    .map(id => italianVocabulary[id])
    .filter(w => w && w.gender !== 'none') // concrete nouns only
    .slice(0, max)
    .map(w => w.native);
}

function buildRoomPrompt(room) {
  const words = pickVisualWords(room.vocabularyIds, 10);
  const wordList = words.length ? words.join(', ') : '';

  const templates = {
    'kitchen': `highly detailed traditional Italian kitchen interior, terracotta floor tiles, copper pots hanging from a rack, wooden dining table with ${wordList}, ceramic bowls, fresh basil and rosemary in terracotta pots, warm golden afternoon sunlight streaming through wooden shutters, rustic Tuscan farmhouse style, photorealistic, sharp focus, 8k uhd`,
    'bedroom': `elegant Italian bedroom interior, ornate wrought iron bed with white linen, wardrobe with clothes, bedside table with ${wordList}, terracotta flooring, soft morning light through linen curtains, fresco painted walls, cozy and romantic atmosphere, photorealistic`,
    'bathroom': `luxurious Italian bathroom, mosaic tile walls, clawfoot bathtub with fresh towels, marble sink with soap and ${wordList}, large mirror, spa-like atmosphere, soft natural light, clean and elegant, photorealistic`,
    'library': `classic Italian study room, tall dark wood bookshelves filled with leather books, antique wooden desk with ${wordList}, vintage world map on wall, warm reading lamp, quiet scholarly atmosphere, photorealistic`,
    'entrance-hall': `grand Italian foyer entrance hall, polished marble floors, ornate golden mirror on wall, wooden coat rack with hats and scarves, family portrait in gilded frame, antique clock on wall showing ${wordList}, warm chandelier light, elegant and welcoming, photorealistic`,
    'living-room': `cozy Italian salotto living room, plush velvet sofa, antique wooden coffee table with ${wordList}, soft lamplight, family photos on sideboard, warm rug on floor, welcoming home atmosphere, photorealistic`,
    'transport': `vintage Italian train station interior, arched platforms, old ticket booth with ${wordList}, travelers with suitcases, warm afternoon light through glass roof, nostalgic atmosphere, photorealistic`,
    'garden': `beautiful Italian giardino garden, stone path through blooming flowers and cypress trees, sunny blue sky, ${wordList}, peaceful afternoon, manicured hedges, photorealistic landscape`,
    'supermarket': `bustling Italian alimentari grocery shop interior, wooden shelves with local products, fresh produce counter with ${wordList}, cheese wheels, hanging prosciutto, warm lighting, photorealistic`,
    'cafe': `authentic Italian bar cafe interior, marble countertop, vintage espresso machine steaming, display case with ${wordList}, warm ambient lighting, cozy atmosphere, photorealistic`,
    'gallery': `refined Italian art gallery interior, white walls with framed paintings, marble sculpture on pedestal, soft spotlighting, ${wordList}, cultured museum atmosphere, photorealistic`,
    'animals': `charming Italian barn and countryside, various friendly animals including ${wordList}, warm afternoon light, rustic wooden fences, peaceful farm atmosphere, photorealistic`,
    'weather': `dramatic Italian countryside landscape, rolling hills under atmospheric sky, ${wordList}, golden light breaking through clouds, expansive vista, photorealistic`,
    'tools': `rustic Italian workshop interior, wooden walls with hand tools including ${wordList}, sturdy workbench, warm workshop lighting, craftsman atmosphere, photorealistic`,
    'actions': `dynamic Italian piazza street scene, people walking and gesturing, outdoor cafe tables, ${wordList}, lively atmosphere, warm afternoon light, photorealistic`,
    'emotions': `artistic Italian Renaissance style portrait scene, expressive faces showing ${wordList}, dramatic chiaroscuro lighting, rich colors, emotional depth, photorealistic`,
    'farm': `sunny Italian fattoria farm, rolling green fields, farm buildings, harvested crops including ${wordList}, pastoral beauty, photorealistic landscape`,
    'fantasy': `magical Italian fantasy realm, ancient stone castle on hill, enchanted forest with ${wordList}, mystical glowing light, dreamlike fairytale atmosphere, photorealistic`
  };

  return templates[room.id] || `beautiful Italian ${room.id} interior, Mediterranean style, warm golden lighting, featuring ${wordList}, authentic details, photorealistic`;
}

function buildZonePrompt(room, zone) {
  const words = pickVisualWords(zone.interiorVocab ? zone.interiorVocab.map(v => v.wordId) : [], 8);
  const wordList = words.length ? words.join(', ') : '';

  const zoneTemplates = {
    // Kitchen
    'fridge': `close-up interior of an Italian refrigerator, shelves neatly organized with ${wordList}, bright fridge interior light, cold condensation, photorealistic food photography`,
    'pantry': `close-up of an Italian pantry shelf, jars of pasta, rice, olive oil, salt, sugar, honey, ${wordList}, wooden shelves, warm ambient light, photorealistic`,
    'stove': `close-up of an Italian kitchen stove and counter, copper pots, frying pan, wooden cutting board with ${wordList}, gas flame visible, warm cooking light, photorealistic`,
    'table': `close-up of an Italian dining table set for a meal, plates, glasses, cutlery, napkins, ${wordList}, warm family dinner atmosphere, photorealistic`,
    // Bedroom
    'wardrobe': `open Italian wardrobe closet interior, hanging shirts, dresses, coats, shelves with ${wordList}, wooden wardrobe, soft bedroom light, photorealistic`,
    'bed': `close-up of an ornate Italian bed, white linen sheets, pillows, bedside table with ${wordList}, soft morning light, photorealistic`,
    'photos': `close-up of family photographs on a wooden dresser frame, portraits of ${wordList}, warm lamplight, nostalgic atmosphere, photorealistic`,
    // Bathroom
    'sink': `close-up of an Italian bathroom sink area, marble countertop, soap, toothbrush, towel, mirror reflecting ${wordList}, clean and bright, photorealistic`,
    'shower': `close-up of an Italian shower area, mosaic tiles, shower head, shampoo bottles, fresh towels, ${wordList}, spa atmosphere, photorealistic`,
    'cabinet': `open Italian bathroom cabinet, shelves with medicine, cream, bandages, ${wordList}, organized and clean, photorealistic`,
    // Library
    'bookshelf': `close-up of tall Italian bookshelf, leather bound books, small decorative objects including ${wordList}, warm reading light, photorealistic`,
    'desk': `close-up of antique Italian writing desk, paper, pen, lamp, computer, ${wordList}, scholarly atmosphere, photorealistic`,
    'computer': `close-up of a modern computer on a classic Italian desk, screen glowing, keyboard, mouse, ${wordList}, study room, photorealistic`,
    // Entrance
    'family-portrait': `close-up of a gilded family portrait on wall, painted faces of ${wordList}, ornate frame, warm foyer light, photorealistic`,
    'coat-rack': `close-up of a wooden coat rack in an Italian foyer, hanging coats, scarves, hats, umbrellas, ${wordList}, elegant entrance, photorealistic`,
    'mirror': `close-up of an ornate golden mirror reflecting ${wordList}, marble wall, elegant Italian foyer, photorealistic`,
    'clock': `close-up of an antique wall clock, Roman numerals, showing time, calendar pages of ${wordList} nearby, warm light, photorealistic`,
    'number-plate': `close-up of an Italian house number plaque on marble wall, numbers ${wordList}, elegant typography, warm light, photorealistic`,
    'welcome-mat': `close-up of a welcome mat at an Italian door, friendly greeting atmosphere, ${wordList}, warm foyer light, photorealistic`,
    // Transport
    'ticket-office': `close-up of an old Italian train ticket counter, tickets, stamps, signs, ${wordList}, nostalgic atmosphere, photorealistic`,
    'platform': `Italian train platform, vintage benches, luggage, tracks, arched glass roof, ${wordList}, warm afternoon light, photorealistic`,
    'street': `narrow Italian cobblestone street, vintage buildings, street signs, ${wordList}, warm golden hour light, photorealistic`,
    // Garden
    'flowers': `close-up of colorful Italian garden flowers in bloom, ${wordList}, green leaves, sunny afternoon, photorealistic botanical`,
    'path': `winding stone garden path through Italian giardino, cypress trees, ${wordList}, peaceful sunny day, photorealistic`,
    'sky': `expansive blue Italian sky with clouds, sun shining, ${wordList}, serene garden view, photorealistic`,
    // Living room
    'sofa': `close-up of a plush Italian sofa, cushions, throw blanket, coffee table with ${wordList}, soft lamplight, photorealistic`,
    'tv': `Italian living room entertainment area, television, remote controls, books, ${wordList}, cozy evening atmosphere, photorealistic`,
    'furniture': `elegant Italian living room furniture, antique wooden cabinet, decorative objects including ${wordList}, warm light, photorealistic`,
    // Supermarket
    'produce': `close-up of fresh produce counter in Italian grocery, fruits and vegetables including ${wordList}, wooden crates, warm light, photorealistic`,
    'dairy': `close-up of Italian dairy counter, cheese wheels, milk bottles, butter, ${wordList}, rustic shop interior, photorealistic`,
    'checkout': `Italian grocery checkout counter, cash register, receipt, shopping bags, ${wordList}, warm shop lighting, photorealistic`,
    // Cafe
    'counter': `close-up of Italian bar counter, marble surface, espresso cups, pastry display with ${wordList}, vintage espresso machine, photorealistic`,
    'table-cafe': `small Italian cafe table with coffee cups, croissant, sugar bowl, ${wordList}, warm morning light, photorealistic`,
    // Gallery
    'paintings': `close-up of framed paintings on Italian gallery wall, artworks depicting ${wordList}, soft spotlight, photorealistic`,
    'pharmacy': `elegant Italian pharmacy interior, marble counters, medicine bottles, ${wordList}, clean professional lighting, photorealistic`,
    'shopping': `Italian boutique shopping scene, elegant displays, clothing racks, ${wordList}, warm lighting, photorealistic`,
    // Animals
    'reptiles': `close-up of terrarium with reptiles, ${wordList}, natural habitat setting, warm light, photorealistic`,
    'mammals': `friendly mammals in a warm Italian barn setting, ${wordList}, soft afternoon light, photorealistic`,
    // Weather
    'storms': `dramatic Italian sky during a storm, dark clouds, lightning, rain, ${wordList}, powerful atmosphere, photorealistic landscape`,
    'sky-weather': `expansive Italian sky showing weather phenomena, ${wordList}, rolling hills below, photorealistic`,
    // Tools
    'hand-tools': `close-up of Italian workshop wall with hand tools including ${wordList}, wooden pegboard, warm workshop light, photorealistic`,
    'workbench': `sturdy Italian workbench with projects, wood shavings, tools including ${wordList}, craftsman atmosphere, photorealistic`,
    // Actions
    'movement': `dynamic scene of people in motion, walking, running, dancing, ${wordList}, Italian street background, warm light, photorealistic`,
    'daily-actions': `everyday Italian life scene, people cooking, cleaning, reading, ${wordList}, warm home atmosphere, photorealistic`,
    // Emotions
    'feelings': `expressive faces showing emotions including ${wordList}, warm intimate lighting, Italian interior, photorealistic portrait`,
    'states': `people in various emotional states, ${wordList}, artistic composition, warm colors, photorealistic`,
    // Farm
    'vegetables': `close-up of fresh Italian farm vegetables, ${wordList}, soil, green leaves, sunny field, photorealistic`,
    'fruits': `close-up of ripe Italian farm fruits, ${wordList}, orchard trees, sunny day, photorealistic`,
    // Fantasy
    'creatures': `magical fantasy creatures including ${wordList}, enchanted Italian forest, mystical light, photorealistic fantasy art`,
    'supernatural': `supernatural fantasy scene with ${wordList}, ancient castle ruins, dreamlike atmosphere, photorealistic`
  };

  return zoneTemplates[zone.id] || `close-up interior of ${zone.name} in an Italian ${room.id}, featuring ${wordList}, warm light, photorealistic`;
}

async function generateImage(prompt, filenamePrefix, destPath) {
  const seed = Math.floor(Math.random() * 1000000);
  const negative = "lowres, bad anatomy, bad hands, text, error, watermark, signature, blurry, cartoon, anime, ugly, deformed";
  const workflow = {
    "1": { inputs: { ckpt_name: MODEL }, class_type: "CheckpointLoaderSimple" },
    "2": { inputs: { text: prompt, clip: ["1", 1] }, class_type: "CLIPTextEncode" },
    "3": { inputs: { text: negative, clip: ["1", 1] }, class_type: "CLIPTextEncode" },
    "4": { inputs: { width: 1344, height: 768, batch_size: 1 }, class_type: "EmptyLatentImage" },
    "5": { inputs: { seed, steps: 8, cfg: 2, sampler_name: "dpmpp_sde", scheduler: "karras", denoise: 1, model: ["1", 0], positive: ["2", 0], negative: ["3", 0], latent_image: ["4", 0] }, class_type: "KSampler" },
    "6": { inputs: { samples: ["5", 0], vae: ["1", 2] }, class_type: "VAEDecode" },
    "7": { inputs: { filename_prefix: filenamePrefix, images: ["6", 0] }, class_type: "SaveImage" }
  };

  console.log(`  Queueing ${filenamePrefix}...`);
  const { prompt_id } = await httpPost(`${COMFY_URL}/prompt`, { prompt: workflow }, 30000);

  for (let i = 0; i < 120; i++) {
    await new Promise(r => setTimeout(r, 2000));
    const history = await httpGet(`${COMFY_URL}/history/${prompt_id}`);
    const job = history[prompt_id];
    if (job?.outputs) {
      for (const nodeOutput of Object.values(job.outputs)) {
        if (nodeOutput.images?.length) {
          const img = nodeOutput.images[0];
          await download(img.filename, img.subfolder, img.type, destPath);
          console.log(`  Saved -> ${path.basename(destPath)}`);
          return;
        }
      }
    }
  }
  throw new Error('Timeout');
}

(async () => {
  const missingMain = [];
  const missingZones = [];

  for (const room of rooms) {
    const mainPath = path.join(OUT, `${room.id}.jpg`);
    if (!fs.existsSync(mainPath)) missingMain.push(room);

    for (const zone of room.zones || []) {
      if (zone.interiorImage) {
        const zonePath = path.join(OUT, path.basename(zone.interiorImage));
        if (!fs.existsSync(zonePath)) missingZones.push({ room, zone });
      }
    }
  }

  console.log(`Missing main rooms: ${missingMain.length}`);
  console.log(`Missing zone images: ${missingZones.length}`);

  // Generate main rooms first
  for (const room of missingMain) {
    const prompt = buildRoomPrompt(room);
    console.log(`\n[ROOM] ${room.id}`);
    console.log(`Prompt: ${prompt.slice(0, 200)}...`);
    try {
      await generateImage(prompt, `room_${room.id}`, path.join(OUT, `${room.id}.jpg`));
    } catch (err) {
      console.error(`  FAILED: ${err.message}`);
    }
    await new Promise(r => setTimeout(r, 500));
  }

  // Generate zone interiors
  for (const { room, zone } of missingZones) {
    const prompt = buildZonePrompt(room, zone);
    console.log(`\n[ZONE] ${room.id} / ${zone.id}`);
    console.log(`Prompt: ${prompt.slice(0, 200)}...`);
    try {
      await generateImage(prompt, `zone_${room.id}_${zone.id}`, path.join(OUT, path.basename(zone.interiorImage)));
    } catch (err) {
      console.error(`  FAILED: ${err.message}`);
    }
    await new Promise(r => setTimeout(r, 500));
  }

  console.log('\nDone!');
})();
