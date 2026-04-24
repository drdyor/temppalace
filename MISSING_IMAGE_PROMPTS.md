# Missing Image Generation Prompts

**Commercial-safe approach:** Generate with self-hosted Stable Diffusion / Flux / ComfyUI.
You own the output images completely.

**Style guide:** Warm, photorealistic, Italian setting, soft natural lighting,
clearly legible objects suitable for vocabulary labeling.

---

## Piazza (Town Square)

### `rooms/piazza-fontana.jpg` — The Fountain
**Vocab to show:** essere, stare, avere, fare, dare
**Scene:** Two friends meeting at a baroque stone fountain in an Italian piazza.
One sits on the fountain edge holding a bottle of water; the other stands gesturing happily.
**Prompt:**
```
Photorealistic image of a historic Italian town square with an ornate baroque stone fountain in the center. Two young friends meeting: one sitting casually on the fountain edge holding a water bottle, the other standing with an open happy gesture. Warm golden afternoon light, cobblestones, a cafe in the background. A small dog sits nearby. Soft shadows, Tuscan architecture, highly detailed, 8k quality.
```

### `rooms/piazza-bar.jpg` — The Bar
**Vocab to show:** volere, potere, dovere, prendere, mettere
**Scene:** Inside a traditional Italian bar (cafe). Barista behind counter. Customer pointing at a cornetto and espresso.
A wallet and phone on the counter. Menu board on wall.
**Prompt:**
```
Photorealistic interior of a traditional Italian bar counter. A friendly barista in a white shirt behind an espresso machine. A customer in casual clothes pointing at a golden croissant (cornetto) and a small espresso cup on the counter. A leather wallet and smartphone nearby. Vintage menu board on the wall. Warm morning light from a side window, marble counter, warm browns and creams, highly detailed.
```

### `rooms/piazza-fermata.jpg` — Bus Stop
**Vocab to show:** andare, venire, partire, arrivare, uscire, tornare
**Scene:** An Italian city bus stop with a sign. Two people with a suitcase and a backpack checking a phone.
A bus approaching in the background. Schedule posted on the shelter.
**Prompt:**
```
Photorealistic Italian city bus stop shelter with a glass and metal frame. A young traveler with a small rolling suitcase and a backpack looking at a smartphone. Another person pointing down the street where a yellow city bus is approaching. A posted timetable on the shelter wall. Urban street with parked scooters, trees, morning light. Clean, modern but warm Italian city feel.
```

### `rooms/piazza-panchina.jpg` — Park Bench
**Vocab to show:** dire, parlare, vedere, sapere, capire
**Scene:** Two people sitting on a wooden park bench under trees in an Italian park.
One holds an open book and gestures while talking. The other listens, holding reading glasses.
Birds, fallen leaves, dappled sunlight.
**Prompt:**
```
Photorealistic Italian public garden with a wooden park bench under plane trees. Two friends sitting and talking: one holding an open paperback book and gesturing expressively, the other listening with reading glasses in hand. Dappled sunlight through leaves, pigeons on the path, a stone statue in the background. Warm afternoon, peaceful atmosphere, soft bokeh, highly detailed.
```

---

## Calendario (Calendar Room)

### `rooms/calendario-settimana.jpg` — The Week
**Vocab to show:** lunedi, martedi, mercoledi, giovedi, venerdi, sabato, domenica
**Scene:** A large wall calendar or planner in a bright home office/kitchen.
Someone marking days with a red pen. Coffee cup nearby. Color-coded sticky notes.
**Prompt:**
```
Photorealistic bright home kitchen wall with a large colorful weekly calendar planner. A hand holding a red pen marking a day. Seven clearly visible day columns. Color-coded sticky notes (yellow, pink, blue) on various dates. A coffee cup and a small potted plant on a wooden shelf below. Morning light from a window, clean modern Italian home interior, warm and organized feel.
```

### `rooms/calendario-mesi.jpg` — The Months
**Vocab to show:** gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre
**Scene:** A beautiful large wall calendar showing all 12 months in a grid.
Seasonal photos for each month (snow, flowers, beach, autumn leaves).
Hanging in a cozy Italian living room.
**Prompt:**
```
Photorealistic large annual wall calendar hanging on a textured Italian plaster wall in a cozy living room. The calendar shows all twelve months in a 3x4 grid, each with a small seasonal photo: snow for winter, flowers for spring, sun and beach for summer, red leaves for autumn. A comfortable sofa partially visible, warm lamp light, wooden picture frames nearby. Intimate domestic atmosphere, highly detailed.
```

### `rooms/calendario-stagioni.jpg` — The Seasons
**Vocab to show:** primavera, estate, autunno, inverno
**Scene:** Four panels or a framed quadriptych on a wall, each showing a season.
Spring = cherry blossoms in a Tuscan field. Summer = sunflowers and blue sky.
Autumn = vineyard with red leaves. Winter = snowy Dolomite mountains.
**Prompt:**
```
Photorealistic four-panel wall art in a rustic Italian home, each panel showing one season. Top-left: Tuscan hills with cherry blossoms and green grass (spring). Top-right: golden sunflower field under intense blue sky (summer). Bottom-left: vineyard rows with brilliant red and orange leaves (autumn). Bottom-right: snow-covered Dolomite mountain peak with a small village (winter). Warm interior lighting, textured plaster wall, wooden frame, highly detailed landscape photography style.
```

### `rooms/calendario-tempo.jpg` — Today & Tomorrow
**Vocab to show:** oggi, ieri, domani, adesso, dopo, prima, sempre, mai, ancora, tardi, spesso
**Scene:** A desk with a calendar, a clock, a diary, and a phone showing the time.
Morning light streaming in. Someone writing "oggi" and "domani" in a notebook.
**Prompt:**
```
Photorealistic close-up of a wooden desk with time-related objects. A small analog clock showing 9:00. An open diary with handwritten notes. A smartphone displaying a calendar app. A wall calendar page showing the current month. Morning light streaming through a window creating long shadows. Coffee steam rising from a white ceramic cup. Warm, productive, organized atmosphere. Shallow depth of field, highly detailed textures.
```

---

## How to Generate

1. Open ComfyUI (already configured at `http://127.0.0.1:8188`)
2. Use your existing image generation workflow
3. Paste the prompt above into the positive prompt node
4. Negative prompt: `blurry, text, words, letters, watermark, signature, cartoon, illustration, painting`
5. Recommended settings: 1024x768 or 1216x832, 25-30 steps, CFG 7-8
6. Save outputs to `public/rooms/` with the filenames listed above
7. Run `npm run build` to copy them to `dist/`
