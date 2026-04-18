// Flexible ComfyUI Service - Adapts to your loaded models

import { getRoomById } from '../data/rooms';

export interface VocabEntry {
  native?: string;
  english?: string;
  emoji?: string;
  gender?: string;
}
type VocabMap = Record<string, VocabEntry>;

const COMFY_API_URL = 'http://127.0.0.1:8188';

export interface ComfyModel {
  name: string;
  type: 'checkpoint' | 'lora' | 'vae' | 'controlnet';
  size: number;
}

export interface GenerationResult {
  imageUrl: string;
  filename: string;
  metadata: {
    prompt: string;
    seed: number;
    model: string;
  };
}

class ComfyService {
  private availableModels: ComfyModel[] = [];
  private isConnected = false;

  // Auto-detect what models you have loaded
  async refreshModels(): Promise<ComfyModel[]> {
    try {
      // Fetch checkpoints
      const checkpointsRes = await fetch(`${COMFY_API_URL}/object_info/CheckpointLoaderSimple`);
      const checkpoints = await checkpointsRes.json();
      
      // Fetch Loras
      const lorasRes = await fetch(`${COMFY_API_URL}/object_info/LoraLoader`);
      const loras = await lorasRes.json();

      this.availableModels = [
        ...this.parseModels(checkpoints, 'checkpoint'),
        ...this.parseModels(loras, 'lora'),
      ];

      this.isConnected = true;
      return this.availableModels;
    } catch (err) {
      this.isConnected = false;
      throw new Error('Cannot connect to ComfyUI. Is it running?');
    }
  }

  private parseModels(data: unknown, type: ComfyModel['type']): ComfyModel[] {
    try {
      // Navigate the ComfyUI response structure
      const info = (data as Record<string, unknown>)?.CheckpointLoaderSimple || 
                   (data as Record<string, unknown>)?.LoraLoader;
      
      if (!info) return [];
      
      const infoAny = info as any;
      const names = (infoAny?.input?.required?.ckpt_name ||
                    infoAny?.input?.required?.lora_name || []) as string[];
      
      return names.map(name => ({
        name,
        type,
        size: 0, // Could fetch actual sizes if needed
      }));
    } catch {
      return [];
    }
  }

  // Pick best model based on what's available
  getBestModel(preference: 'realistic' | 'anime' | 'painterly'): string {
    const checkpoints = this.availableModels.filter(m => m.type === 'checkpoint');
    
    if (checkpoints.length === 0) {
      return 'sdxl_base_1.0.safetensors'; // Fallback
    }

    const names = checkpoints.map(m => m.name.toLowerCase());

    // Look for model matches based on preference
    if (preference === 'realistic') {
      const realistic = names.find(n => 
        n.includes('realvis') || n.includes('realistic') || 
        n.includes('photon') || n.includes('juggernaut')
      );
      if (realistic) return realistic;
    }
    
    if (preference === 'anime') {
      const anime = names.find(n => 
        n.includes('anime') || n.includes('meina') || 
        n.includes('counterfeit') || n.includes('anything')
      );
      if (anime) return anime;
    }

    if (preference === 'painterly') {
      const painterly = names.find(n => 
        n.includes('dreamshaper') || n.includes('deliberate') ||
        n.includes('art') || n.includes('illustration')
      );
      if (painterly) return painterly;
    }

    return checkpoints[0].name;
  }

  // Generate a room image enriched with room vocabulary.
  // Pass vocabMap from the current language's vocabulary (e.g. italianVocabulary for Italian).
  async generateRoom(roomType: string, style: string = 'mediterranean', vocabMap?: VocabMap): Promise<GenerationResult> {
    const model = this.getBestModel('realistic');
    const seed = Math.floor(Math.random() * 1000000);

    const roomPrompts: Record<string, string> = {
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
      fantasy: "magical Italian fantasy realm, ancient castle, mystical creatures, enchanted forest, dreamlike atmosphere",
      default: `beautiful ${roomType} interior, Italian Mediterranean style, warm golden lighting, authentic details, architectural beauty`
    };

    // Build vocabulary enrichment from room words
    let vocabEnrichment = '';
    const room = getRoomById(roomType);
    if (vocabMap && room && room.vocabularyIds.length > 0) {
      const visualWords = room.vocabularyIds
        .map(id => vocabMap[id])
        .filter(w => w && (w.emoji || w.gender !== 'none'))
        .slice(0, 8);
      if (visualWords.length > 0) {
        const wordDesc = visualWords.map(w => w.native).join(', ');
        vocabEnrichment = ` featuring: ${wordDesc}`;
      }
    }

    const prompt = roomPrompts[roomType] || roomPrompts.default;
    const fullPrompt = `masterpiece, best quality, highly detailed, ${prompt}${vocabEnrichment}, ${style} aesthetic, cinematic lighting, 8k uhd, sharp focus, professional photography`;
    const negativePrompt = "lowres, bad anatomy, bad hands, text, error, watermark, signature, blurry, modern cars, people, humans, cartoon, anime";

    const workflow = {
      "1": {
        "inputs": { "ckpt_name": model },
        "class_type": "CheckpointLoaderSimple"
      },
      "2": {
        "inputs": {
          "text": fullPrompt,
          "clip": ["1", 1]
        },
        "class_type": "CLIPTextEncode"
      },
      "3": {
        "inputs": {
          "text": negativePrompt,
          "clip": ["1", 1]
        },
        "class_type": "CLIPTextEncode"
      },
      "4": {
        "inputs": {
          "width": 1344,
          "height": 768,
          "batch_size": 1
        },
        "class_type": "EmptyLatentImage"
      },
      "5": {
        "inputs": {
          "seed": seed,
          "steps": 28,
          "cfg": 7,
          "sampler_name": "dpmpp_2m_sde",
          "scheduler": "karras",
          "denoise": 1,
          "model": ["1", 0],
          "positive": ["2", 0],
          "negative": ["3", 0],
          "latent_image": ["4", 0]
        },
        "class_type": "KSampler"
      },
      "6": {
        "inputs": {
          "samples": ["5", 0],
          "vae": ["1", 2]
        },
        "class_type": "VAEDecode"
      },
      "7": {
        "inputs": {
          "filename_prefix": `room_${roomType}`,
          "images": ["6", 0]
        },
        "class_type": "SaveImage"
      }
    };

    return this.executeWorkflow(workflow, fullPrompt, seed, model);
  }

  // Generate a cat character enriched with room vocabulary.
  // Pass vocabMap from the current language's vocabulary.
  async generateCatCharacter(role: string, mood: string, roomId?: string, vocabMap?: VocabMap): Promise<GenerationResult> {
    const model = this.getBestModel('anime'); // Cats work better with anime/cartoon models
    const seed = Math.floor(Math.random() * 1000000);

    const roleOutfits: Record<string, string> = {
      barista: "wearing barista apron, holding espresso cup",
      vendor: "market vendor with apron, surrounded by produce",
      doctor: "doctor in white coat, caring expression",
      pharmacist: "pharmacist with professional coat",
      teacher: "teacher with books, glasses, wise expression",
      chef: "chef with hat and utensils, kitchen background",
      farmer: "farmer with straw hat, countryside background",
      knight: "medieval knight with armor and sword",
      wizard: "wizard with robe and staff, magical aura",
      default: "elegant outfit, charming character"
    };

    const moodExpressions: Record<string, string> = {
      happy: "joyful smile, sparkling eyes, ears perked up",
      stern: "serious expression, focused professional look",
      surprised: "wide curious eyes, ears alert",
      neutral: "calm friendly expression, approachable",
      sad: "gentle tear, drooping ears, melancholic eyes",
      excited: "bouncing pose, sparkling eyes, open mouth smile",
      default: "friendly welcoming expression"
    };

    const outfit = roleOutfits[role] || roleOutfits.default;
    const expression = moodExpressions[mood] || moodExpressions.default;

    // Build vocabulary enrichment from room words for the character context
    let vocabEnrichment = '';
    if (vocabMap && roomId) {
      const room = getRoomById(roomId);
      if (room && room.vocabularyIds.length > 0) {
        const visualWords = room.vocabularyIds
          .map(id => vocabMap[id])
          .filter(w => w && w.emoji)
          .slice(0, 5);
        if (visualWords.length > 0) {
          const words = visualWords.map(w => w.english).join(', ');
          vocabEnrichment = `, surrounded by ${words}, themed environment`;
        }
      }
    }

    const prompt = `masterpiece, best quality, anthropomorphic cat character, ${outfit}, ${expression}${vocabEnrichment}, soft fur, detailed face, standing upright, charming personality, clean background, character portrait`;
    const negativePrompt = "lowres, bad anatomy, text, watermark, signature, blurry, scary, realistic proportions, human face, low quality";

    const workflow = {
      "1": {
        "inputs": { "ckpt_name": model },
        "class_type": "CheckpointLoaderSimple"
      },
      "2": {
        "inputs": {
          "text": prompt,
          "clip": ["1", 1]
        },
        "class_type": "CLIPTextEncode"
      },
      "3": {
        "inputs": {
          "text": negativePrompt,
          "clip": ["1", 1]
        },
        "class_type": "CLIPTextEncode"
      },
      "4": {
        "inputs": {
          "width": 768,
          "height": 768,
          "batch_size": 1
        },
        "class_type": "EmptyLatentImage"
      },
      "5": {
        "inputs": {
          "seed": seed,
          "steps": 30,
          "cfg": 7.5,
          "sampler_name": "dpmpp_2m_sde",
          "scheduler": "karras",
          "denoise": 1,
          "model": ["1", 0],
          "positive": ["2", 0],
          "negative": ["3", 0],
          "latent_image": ["4", 0]
        },
        "class_type": "KSampler"
      },
      "6": {
        "inputs": {
          "samples": ["5", 0],
          "vae": ["1", 2]
        },
        "class_type": "VAEDecode"
      },
      "7": {
        "inputs": {
          "filename_prefix": `cat_${role}_${mood}`,
          "images": ["6", 0]
        },
        "class_type": "SaveImage"
      }
    };

    return this.executeWorkflow(workflow, prompt, seed, model);
  }

  // Execute workflow and poll for result
  private async executeWorkflow(
    workflow: Record<string, unknown>, 
    prompt: string, 
    seed: number,
    model: string
  ): Promise<GenerationResult> {
    // Queue the workflow
    const queueRes = await fetch(`${COMFY_API_URL}/prompt`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: workflow })
    });

    if (!queueRes.ok) {
      throw new Error(`Failed to queue workflow: ${queueRes.status}`);
    }

    const { prompt_id } = await queueRes.json() as { prompt_id: string };

    // Poll for completion
    let attempts = 0;
    const maxAttempts = 60;

    while (attempts < maxAttempts) {
      await new Promise(r => setTimeout(r, 2000));

      const historyRes = await fetch(`${COMFY_API_URL}/history/${prompt_id}`);
      if (!historyRes.ok) continue;

      const history = await historyRes.json() as Record<string, {
        outputs: Record<string, { images?: Array<{ filename: string; subfolder: string; type: string }> }>
      }>;

      const job = history[prompt_id];
      if (job?.outputs) {
        // Find image output
        for (const nodeOutput of Object.values(job.outputs)) {
          if (nodeOutput.images?.length) {
            const img = nodeOutput.images[0];
            const imageUrl = `${COMFY_API_URL}/view?filename=${encodeURIComponent(img.filename)}&subfolder=${encodeURIComponent(img.subfolder)}&type=${img.type}`;
            
            return {
              imageUrl,
              filename: img.filename,
              metadata: { prompt, seed, model }
            };
          }
        }
      }

      attempts++;
    }

    throw new Error('Generation timed out');
  }

  getConnectionStatus(): boolean {
    return this.isConnected;
  }

  getAvailableModels(): ComfyModel[] {
    return this.availableModels;
  }
}

export const comfyService = new ComfyService();
