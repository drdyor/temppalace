# Cat Palace Image Generation Guide

This guide helps you generate all the cat character sprites and backgrounds using **ComfyUI**.

## Prerequisites

1. **ComfyUI installed** (you have `ComfyUI_windows_portable` in your home directory)
2. **A Stable Diffusion checkpoint** downloaded (e.g., DreamShaper, Realistic Vision, or ToonYou)
3. **Python 3.8+** installed

---

## Step 1: Start ComfyUI

1. Navigate to your ComfyUI folder:
   ```bash
   cd ComfyUI_windows_portable
   ```

2. Start ComfyUI with GPU:
   ```bash
   .\run_nvidia_gpu.bat
   ```

3. Wait for it to load. You should see:
   ```
   Starting server
   To see the GUI go to: http://127.0.0.1:8188
   ```

4. Open your browser to: `http://127.0.0.1:8188`

---

## Step 2: Load a Checkpoint (Model)

If you don't have a model yet:

1. Download one of these (good for cartoon/cute style):
   - **ToonYou** (recommended for this project): https://civitai.com/models/30240/toonyou
   - **DreamShaper**: https://civitai.com/models/4384/dreamshaper
   - **Any SD 1.5 or SDXL checkpoint**

2. Place the `.safetensors` or `.ckpt` file in:
   ```
   ComfyUI_windows_portable\ComfyUI\models\checkpoints\
   ```

3. In the ComfyUI web interface, select your model from the dropdown

---

## Step 3: Option A - Use the Workflow (Manual)

1. In ComfyUI, click **Load** button
2. Select `comfyui-cat-palace-workflow.json`
3. Edit the **POSITIVE PROMPT** node with prompts from `cat-palace-prompts.json`
4. Click **Queue Prompt**
5. Save each generated image

---

## Step 3: Option B - Use the Automation Script (Recommended)

### Install Python dependencies:
```bash
# No external packages needed - uses built-in urllib
```

### Edit the script:
1. Open `generate_cat_assets.py` in a text editor
2. Find this line:
   ```python
   CHECKPOINT_NAME = "SELECT_YOUR_MODEL.safetensors"
   ```
3. Replace with your actual model filename (check ComfyUI's model dropdown)

### Run the script:
```bash
python generate_cat_assets.py
```

The script will:
- Connect to your running ComfyUI
- Generate all 7 characters (one by one)
- Generate all 8 backgrounds
- Tell you where to find the images

---

## Step 4: Organize Your Assets

After generation, you'll find images in ComfyUI's output folder:
```
ComfyUI_windows_portable\ComfyUI\output\
```

Copy and rename them to your project:

```
memory-palace-learner/
└── public/
    └── assets/
        ├── characters/
        │   ├── barista.png
        │   ├── vendor.png
        │   ├── agent.png
        │   ├── pharmacist.png
        │   ├── business.png
        │   ├── tourist.png
        │   └── security.png
        └── palace/
            ├── kitchen.png
            ├── market.png
            ├── station.png
            ├── clinic.png
            ├── gallery.png
            ├── airport.png
            ├── office.png
            └── entrance.png
```

---

## Step 5: Remove Backgrounds (For Characters)

The character images will have white backgrounds. You need to make them transparent:

### Option 1: remove.bg (Easiest)
1. Go to https://www.remove.bg/
2. Upload each character image
3. Download the transparent PNG
4. Free tier: 50 images/month

### Option 2: Photoshop
1. Open image
2. Select > Subject
3. Layer > New Layer > Layer via Cut
4. Delete background layer
5. Save as PNG

### Option 3: GIMP (Free)
1. Open image
2. Tools > Selection Tools > Fuzzy Select
3. Click the white background
4. Edit > Clear
5. File > Export As > PNG

---

## Prompt Reference (Quick Copy)

### Characters (512x768, white background)

**Barista Cat:**
```
(masterpiece, best quality), clean vector-style 2D game art, Studio Ghibli inspired, anthropomorphic cartoon cat, chibi proportions 2.5 heads tall, large expressive eyes, small pink nose, medium pointed ears, long thin tail, thick black outlines, soft cel-shading, orange tabby cat wearing white barista apron with espresso cup logo, red neckerchief, holding silver portafilter, friendly smile with head tilt, white background, no shadows, highly detailed, 4k, game sprite asset
```

**Vendor Cat:**
```
(masterpiece, best quality), clean vector-style 2D game art, Studio Ghibli inspired, anthropomorphic cartoon cat, chibi proportions 2.5 heads tall, large expressive eyes, small pink nose, medium pointed ears, long thin tail, thick black outlines, soft cel-shading, grey cat wearing green-and-white striped apron, flat cap coppola, holding wicker basket overflowing with grapes and peaches, cheerful open-mouth expression, welcoming gesture, white background, no shadows, highly detailed, 4k, game sprite asset
```

### Backgrounds (1920x1080, no characters)

**Kitchen:**
```
(masterpiece, best quality), clean vector-style 2D game art, Studio Ghibli inspired, rustic Italian kitchen interior, terracotta tile floor, vintage chrome espresso machine on marble-topped wooden counter, copper pots hanging from wrought iron rack, wooden dining table with red-and-white checkered tablecloth, window showing rolling Tuscan hills, warm golden hour sunlight, potted basil, ceramic plates on wall, warm orange and cream palette, Studio Ghibli background style, no characters, no people, no animals, no anthropomorphic, highly detailed, 4k
```

(Full prompts are in `cat-palace-prompts.json`)

---

## Negative Prompt (Use for ALL)

```
photorealistic, 3d render, blurry, low quality, worst quality, normal quality, extra limbs, deformed paws, bad anatomy, human hands, human face, realistic fur texture, complex background, shadow, ground, asymmetrical, cropped, watermark, signature, text, jpeg artifacts, duplicate, multiple cats
```

Add for backgrounds:
```
cat, character, person, animal, anthropomorphic
```

---

## Recommended Settings

| Setting | Characters | Backgrounds |
|---------|------------|-------------|
| Width | 512 | 1920 |
| Height | 768 | 1080 |
| Steps | 30 | 35 |
| CFG Scale | 7 | 7.5 |
| Sampler | DPM++ 2M Karras | DPM++ 2M Karras |

---

## Troubleshooting

### "Connection refused" error
- Make sure ComfyUI is running
- Check the URL in the script matches your ComfyUI URL

### Images look wrong
- Check your checkpoint/model is loaded correctly
- Try a different model (cartoon/anime models work best)
- Increase steps if images are noisy

### Script stuck/waiting
- Generation takes time (30-60 seconds per image)
- Check ComfyUI's queue tab to see progress

### Out of memory
- Close other GPU-heavy apps
- Reduce batch size to 1
- Try smaller image dimensions first

---

## Need More Help?

If you get stuck:
1. Check ComfyUI is working by generating one image manually
2. Try the workflow JSON first (proves ComfyUI is working)
3. Then try the automation script

The manual workflow is more reliable but takes longer.
The script is faster but requires ComfyUI to be perfectly configured.
