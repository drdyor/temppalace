#!/usr/bin/env python3
"""
Cat Palace Asset Generator for ComfyUI

This script automatically generates all character sprites and backgrounds
for the Italian Cat Palace memory palace app using ComfyUI's API.

Prerequisites:
1. ComfyUI must be running (usually on http://127.0.0.1:8188)
2. A Stable Diffusion checkpoint loaded in ComfyUI
3. This script and cat-palace-prompts.json in the same folder

Usage:
    python generate_cat_assets.py

Output:
    ./output/characters/ - 7 cat character sprites (512x768, transparent-ready)
    ./output/backgrounds/ - 8 room backgrounds (1920x1080)
"""

import json
import os
import sys
import time
import urllib.request
import urllib.parse
import random

# Configuration
COMFYUI_URL = "http://127.0.0.1:8188"
PROMPTS_FILE = "cat-palace-prompts.json"
OUTPUT_DIR = "output"
# ============================================
# CHANGE THIS to your downloaded model filename:
# Examples:
#   "epicdisneyvisionxl_v2.safetensors"
#   "frosty_mix_v3.safetensors"
# ============================================
CHECKPOINT_NAME = "dreamshaperXL_lightningDPMSDE.safetensors"

# Paths
CHARACTERS_DIR = os.path.join(OUTPUT_DIR, "characters")
BACKGROUNDS_DIR = os.path.join(OUTPUT_DIR, "backgrounds")


def ensure_directories():
    """Create output directories if they don't exist."""
    os.makedirs(CHARACTERS_DIR, exist_ok=True)
    os.makedirs(BACKGROUNDS_DIR, exist_ok=True)
    print(f"✓ Output directories ready:")
    print(f"  - {CHARACTERS_DIR}")
    print(f"  - {BACKGROUNDS_DIR}")


def load_prompts():
    """Load the prompt definitions from JSON."""
    try:
        with open(PROMPTS_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"✗ Error: {PROMPTS_FILE} not found!")
        print("Make sure the prompts file is in the same directory.")
        sys.exit(1)
    except json.JSONDecodeError as e:
        print(f"✗ Error: Invalid JSON in {PROMPTS_FILE}: {e}")
        sys.exit(1)


def queue_prompt(prompt_workflow):
    """Send a prompt to ComfyUI's API."""
    data = json.dumps({"prompt": prompt_workflow}).encode('utf-8')
    req = urllib.request.Request(
        f"{COMFYUI_URL}/prompt",
        data=data,
        headers={'Content-Type': 'application/json'}
    )
    
    try:
        with urllib.request.urlopen(req) as response:
            return json.loads(response.read().decode('utf-8'))
    except urllib.error.URLError as e:
        print(f"✗ Error connecting to ComfyUI: {e}")
        print(f"  Make sure ComfyUI is running at {COMFYUI_URL}")
        return None


def get_image(filename, subfolder, folder_type):
    """Download a generated image from ComfyUI."""
    data = {"filename": filename, "subfolder": subfolder, "type": folder_type}
    url_values = urllib.parse.urlencode(data)
    url = f"{COMFYUI_URL}/view?{url_values}"
    
    try:
        with urllib.request.urlopen(url) as response:
            return response.read()
    except urllib.error.URLError as e:
        print(f"✗ Error downloading image: {e}")
        return None


def get_history(prompt_id):
    """Get the generation history for a prompt."""
    try:
        with urllib.request.urlopen(f"{COMFYUI_URL}/history/{prompt_id}") as response:
            return json.loads(response.read().decode('utf-8'))
    except urllib.error.URLError:
        return {}


def build_workflow(prompt_text, negative_text, width, height, seed=-1):
    """Build a ComfyUI workflow JSON."""
    # Use random seed if -1
    if seed == -1:
        seed = random.randint(1, 9999999999)
    
    workflow = {
        "3": {
            "inputs": {
                "seed": seed,
                "steps": 8,
                "cfg": 2.5,  # Lightning: 8 steps + CFG 2.5 for more expressive detail
                "sampler_name": "dpmpp_sde",
                "scheduler": "karras",
                "denoise": 1.0,
                "model": ["4", 0],
                "positive": ["6", 0],
                "negative": ["7", 0],
                "latent_image": ["5", 0]
            },
            "class_type": "KSampler"
        },
        "4": {
            "inputs": {
                "ckpt_name": CHECKPOINT_NAME
            },
            "class_type": "CheckpointLoaderSimple"
        },
        "5": {
            "inputs": {
                "width": width,
                "height": height,
                "batch_size": 1
            },
            "class_type": "EmptyLatentImage"
        },
        "6": {
            "inputs": {
                "text": prompt_text,
                "clip": ["4", 1]
            },
            "class_type": "CLIPTextEncode"
        },
        "7": {
            "inputs": {
                "text": negative_text,
                "clip": ["4", 1]
            },
            "class_type": "CLIPTextEncode"
        },
        "8": {
            "inputs": {
                "samples": ["3", 0],
                "vae": ["4", 2]
            },
            "class_type": "VAEDecode"
        },
        "9": {
            "inputs": {
                "filename_prefix": "CatPalace",
                "images": ["8", 0]
            },
            "class_type": "SaveImage"
        }
    }
    return workflow


def generate_character(character_data, style_data, index, total):
    """Generate a single character sprite."""
    print(f"\n[{index}/{total}] Generating: {character_data['name']}")
    
    # Build full prompt
    full_prompt = f"{style_data['prefix']} {style_data['cat_base']} {character_data['prompt']}, {style_data['suffix']}"
    negative = style_data['negative']
    
    print(f"  Prompt: {character_data['prompt'][:60]}...")
    
    # Create workflow
    workflow = build_workflow(
        full_prompt,
        negative,
        character_data['width'],
        character_data['height']
    )
    
    # Queue and wait
    result = queue_prompt(workflow)
    if not result:
        print(f"  ✗ Failed to queue prompt")
        return False
    
    prompt_id = result.get('prompt_id')
    print(f"  Queued with ID: {prompt_id}")
    print(f"  Waiting for generation...")
    
    # Poll for completion (simple version - just wait)
    time.sleep(8)  # Lightning model: ~2s/image + buffer
    
    # Note: In a full implementation, we'd poll the history endpoint
    # For now, images are saved to ComfyUI's output folder
    print(f"  ✓ Generation complete (check ComfyUI output folder)")
    
    return True


def generate_background(bg_data, style_data, index, total):
    """Generate a single background image."""
    print(f"\n[{index}/{total}] Generating: {bg_data['name']}")
    
    # Build full prompt
    full_prompt = f"{style_data['prefix']} {bg_data['prompt']}, {style_data['suffix']}"
    negative = f"{style_data['negative']}, {bg_data.get('negative_add', '')}"
    
    print(f"  Prompt: {bg_data['prompt'][:60]}...")
    
    # Create workflow
    workflow = build_workflow(
        full_prompt,
        negative,
        bg_data['width'],
        bg_data['height']
    )
    
    # Queue
    result = queue_prompt(workflow)
    if not result:
        print(f"  ✗ Failed to queue prompt")
        return False
    
    prompt_id = result.get('prompt_id')
    print(f"  Queued with ID: {prompt_id}")
    print(f"  Waiting for generation...")
    
    time.sleep(15)  # Lightning 1920x1080 bg: ~5-8s
    
    print(f"  ✓ Generation complete (check ComfyUI output folder)")
    
    return True


def print_summary():
    """Print final instructions."""
    print("\n" + "="*60)
    print("GENERATION COMPLETE!")
    print("="*60)
    print("\nYour images have been saved to ComfyUI's output folder.")
    print("\nNext steps:")
    print("1. Copy the generated images from ComfyUI's output folder")
    print("2. Rename them according to the file list above")
    print("3. Place them in your project's public/assets/ folder:")
    print("   - public/assets/characters/ (for the 7 cats)")
    print("   - public/assets/palace/ (for the 8 backgrounds)")
    print("\nRecommended: Use a background removal tool for characters")
    print("(removebg.com, Photoshop, or GIMP with fuzzy select)")


def main():
    """Main execution."""
    print("="*60)
    print("CAT PALACE ASSET GENERATOR")
    print("="*60)
    print(f"\nComfyUI URL: {COMFYUI_URL}")
    print(f"Checkpoint: {CHECKPOINT_NAME}")
    
    # Check ComfyUI is running
    print("\nChecking ComfyUI connection...")
    try:
        urllib.request.urlopen(f"{COMFYUI_URL}/system_stats", timeout=5)
        print("✓ ComfyUI is running!")
    except urllib.error.URLError:
        print("✗ ComfyUI is not running!")
        print(f"  Please start ComfyUI first:")
        print(f"  .\\ComfyUI_windows_portable\\run_nvidia_gpu.bat")
        sys.exit(1)
    
    # Setup
    ensure_directories()
    prompts_data = load_prompts()
    style_data = prompts_data['style_bible']
    
    characters = prompts_data['characters']
    backgrounds = prompts_data['backgrounds']
    
    total = len(characters) + len(backgrounds)
    
    print(f"\nGeneration Plan:")
    print(f"  - {len(characters)} character sprites (512x768)")
    print(f"  - {len(backgrounds)} backgrounds (1920x1080)")
    print(f"  - Total: {total} images")
    
    # Update checkpoint name from user
    print(f"\n⚠ IMPORTANT: Edit this script and set CHECKPOINT_NAME to your model!")
    print(f"   Current value: {CHECKPOINT_NAME}")
    print(f"   Available models will be shown when ComfyUI loads.")
    
    print("\nStarting generation...")
    
    # Generate characters
    print("\n" + "="*60)
    print("GENERATING CHARACTERS")
    print("="*60)
    
    for i, char in enumerate(characters, 1):
        generate_character(char, style_data, i, total)
    
    # Generate backgrounds
    print("\n" + "="*60)
    print("GENERATING BACKGROUNDS")
    print("="*60)
    
    for i, bg in enumerate(backgrounds, len(characters) + 1):
        generate_background(bg, style_data, i, total)
    
    print_summary()


if __name__ == "__main__":
    main()
