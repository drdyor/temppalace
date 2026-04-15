# Cat Palace Image Generation - Quick Start

## What You Need

1. **ComfyUI running** (you have `ComfyUI_windows_portable`)
2. **A Stable Diffusion model** downloaded (cartoon/anime style works best)
3. **These files** in the same folder:
   - `cat-palace-prompts.json` - All the prompts
   - `generate_cat_assets.py` - The automation script
   - `generate_assets.bat` - Easy Windows launcher
   - `comfyui-cat-palace-workflow.json` - Manual workflow backup

## Quick Start (Windows)

### Step 1: Configure Your Model
Edit `generate_cat_assets.py`, find this line:
```python
CHECKPOINT_NAME = "SELECT_YOUR_MODEL.safetensors"
```

Change to your actual model name (check `ComfyUI_windows_portable\ComfyUI\models\checkpoints\`):
```python
CHECKPOINT_NAME = "dreamshaper_8.safetensors"
```

### Step 2: Start ComfyUI
```bash
cd ComfyUI_windows_portable
.\run_nvidia_gpu.bat
```
Wait for "To see the GUI go to: http://127.0.0.1:8188"

### Step 3: Run Generator
```bash
# Option A: Double-click this file
generate_assets.bat

# Option B: Command line
python generate_cat_assets.py
```

### Step 4: Wait
- 7 characters × 30 seconds = ~3.5 minutes
- 8 backgrounds × 60 seconds = ~8 minutes
- **Total: ~12 minutes**

### Step 5: Collect Images
Images save to:
```
ComfyUI_windows_portable\ComfyUI\output\
```

Rename and move to your project:
```
memory-palace-learner/public/assets/
├── characters/ (7 cat sprites)
└── palace/ (8 backgrounds)
```

### Step 6: Remove Backgrounds
Use https://remove.bg/ for the character sprites (make them transparent).

---

## No Model? Download One

**For this project, I recommend:**

| Model | Style | Download |
|-------|-------|----------|
| **ToonYou** | Cartoon, cute | https://civitai.com/models/30240 |
| **DreamShaper** | Versatile | https://civitai.com/models/4384 |
| **Counterfeit** | Anime | https://civitai.com/models/4468 |

Place in: `ComfyUI_windows_portable\ComfyUI\models\checkpoints\`

---

## Manual Method (If Script Fails)

1. Open ComfyUI in browser: http://127.0.0.1:8188
2. Click **Load** → Select `comfyui-cat-palace-workflow.json`
3. Edit the prompt with text from `cat-palace-prompts.json`
4. Click **Queue Prompt**
5. Repeat for each image

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "ComfyUI not running" | Start ComfyUI first with `run_nvidia_gpu.bat` |
| "SELECT_YOUR_MODEL" error | Edit the Python script with your actual model name |
| Images look weird | Try a different model (cartoon/anime works best) |
| Out of memory | Close other apps, restart ComfyUI |

---

## What's Generated

### Characters (512×768, transparent-ready)
1. Barista Cat - Kitchen scene
2. Vendor Cat - Market scene
3. Train Agent Cat - Station scene
4. Pharmacist Cat - Clinic scene
5. Business Cat - Office scene
6. Tourist Cat - Player avatar
7. Security Cat - Airport scene

### Backgrounds (1920×1080)
1. Kitchen - Espresso bar
2. Market - Outdoor piazza
3. Station - Train terminal
4. Clinic - Pharmacy
5. Gallery - Museum
6. Airport - Terminal
7. Office - Bank
8. Entrance - Villa hallway

---

## File Structure After Generation

```
memory-palace-learner/
├── src/
│   └── data/
│       └── cultural-fluency.ts  ← Already updated
├── public/
│   └── assets/
│       ├── characters/
│       │   ├── barista.png      ← Generated
│       │   ├── vendor.png       ← Generated
│       │   ├── agent.png        ← Generated
│       │   ├── pharmacist.png   ← Generated
│       │   ├── business.png     ← Generated
│       │   ├── tourist.png      ← Generated
│       │   └── security.png     ← Generated
│       └── palace/
│           ├── kitchen.png      ← Generated
│           ├── market.png       ← Generated
│           ├── station.png      ← Generated
│           ├── clinic.png       ← Generated
│           ├── gallery.png      ← Generated
│           ├── airport.png      ← Generated
│           ├── office.png       ← Generated
│           └── entrance.png     ← Generated
```

---

Ready? Start with Step 1 above! 🐱🇮🇹
