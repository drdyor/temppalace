import { useState, useCallback } from 'react';

interface ComfyUIQueueResponse {
  prompt_id: string;
  number: number;
  node_errors: Record<string, unknown>;
}

interface ComfyUIHistoryResponse {
  [promptId: string]: {
    outputs: {
      [nodeId: string]: {
        images?: Array<{ filename: string; subfolder: string; type: string }>;
      };
    };
  };
}

export function useComfyUI(baseUrl: string = 'http://127.0.0.1:8188') {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  // Generate a room image
  const generateRoomImage = useCallback(async (roomName: string): Promise<string | null> => {
    setIsGenerating(true);
    setProgress(0);
    setError(null);

    const prompt = {
      "3": {
        "inputs": {
          "seed": Math.floor(Math.random() * 1000000),
          "steps": 25,
          "cfg": 7.5,
          "sampler_name": "dpmpp_2m",
          "scheduler": "karras",
          "denoise": 1,
          "model": ["4", 0],
          "positive": ["6", 0],
          "negative": ["7", 0],
          "latent_image": ["5", 0]
        },
        "class_type": "KSampler"
      },
      "4": {
        "inputs": {
          "ckpt_name": "sdxl_base_1.0.safetensors"
        },
        "class_type": "CheckpointLoaderSimple"
      },
      "5": {
        "inputs": {
          "width": 1024,
          "height": 768,
          "batch_size": 1
        },
        "class_type": "EmptyLatentImage"
      },
      "6": {
        "inputs": {
          "text": `interior of a ${roomName} in Italian style, warm lighting, detailed architecture, cozy atmosphere, high quality, photorealistic, 4k, golden hour lighting, tuscan villa aesthetic`,
          "clip": ["4", 1]
        },
        "class_type": "CLIPTextEncode"
      },
      "7": {
        "inputs": {
          "text": "blurry, low quality, distorted, ugly, deformed, watermark, signature, text, people, humans, characters",
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
          "filename_prefix": `room_${roomName.toLowerCase().replace(/\s+/g, '_')}`,
          "images": ["8", 0]
        },
        "class_type": "SaveImage"
      }
    };

    try {
      // Queue the prompt
      const queueResponse = await fetch(`${baseUrl}/prompt`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      if (!queueResponse.ok) {
        throw new Error(`ComfyUI error: ${queueResponse.status}`);
      }

      const { prompt_id } = await queueResponse.json() as ComfyUIQueueResponse;

      // Poll for completion
      let attempts = 0;
      const maxAttempts = 60; // 2 minutes max

      while (attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const historyResponse = await fetch(`${baseUrl}/history/${prompt_id}`);
        if (historyResponse.ok) {
          const history = await historyResponse.json() as ComfyUIHistoryResponse;
          
          if (history[prompt_id]) {
            // Find the SaveImage node output
            for (const [, nodeOutput] of Object.entries(history[prompt_id].outputs)) {
              if (nodeOutput.images && nodeOutput.images.length > 0) {
                const image = nodeOutput.images[0];
                const imageUrl = `${baseUrl}/view?filename=${encodeURIComponent(image.filename)}&subfolder=${encodeURIComponent(image.subfolder)}&type=${image.type}`;
                setIsGenerating(false);
                return imageUrl;
              }
            }
          }
        }

        setProgress(Math.min((attempts / maxAttempts) * 100, 95));
        attempts++;
      }

      throw new Error('Generation timeout');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setIsGenerating(false);
      return null;
    }
  }, [baseUrl]);

  // Generate a character portrait (anthropomorphic cat)
  const generateCatCharacter = useCallback(async (role: string, mood: string = 'happy'): Promise<string | null> => {
    setIsGenerating(true);
    setProgress(0);
    setError(null);

    const prompt = {
      "3": {
        "inputs": {
          "seed": Math.floor(Math.random() * 1000000),
          "steps": 30,
          "cfg": 8,
          "sampler_name": "dpmpp_2m",
          "scheduler": "karras",
          "denoise": 1,
          "model": ["4", 0],
          "positive": ["6", 0],
          "negative": ["7", 0],
          "latent_image": ["5", 0]
        },
        "class_type": "KSampler"
      },
      "4": {
        "inputs": {
          "ckpt_name": "sdxl_base_1.0.safetensors"
        },
        "class_type": "CheckpointLoaderSimple"
      },
      "5": {
        "inputs": {
          "width": 512,
          "height": 512,
          "batch_size": 1
        },
        "class_type": "EmptyLatentImage"
      },
      "6": {
        "inputs": {
          "text": `anthropomorphic cat character, ${role} outfit, ${mood} expression, detailed fur, expressive eyes, studio ghibli style, charming, friendly, high quality illustration, clean background, character portrait`,
          "clip": ["4", 1]
        },
        "class_type": "CLIPTextEncode"
      },
      "7": {
        "inputs": {
          "text": "human, person, scary, aggressive, low quality, blurry, distorted, ugly, deformed, watermark, signature, text, multiple heads, extra limbs",
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
          "filename_prefix": `cat_${role.toLowerCase().replace(/\s+/g, '_')}_${mood}`,
          "images": ["8", 0]
        },
        "class_type": "SaveImage"
      }
    };

    try {
      const queueResponse = await fetch(`${baseUrl}/prompt`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      if (!queueResponse.ok) {
        throw new Error(`ComfyUI error: ${queueResponse.status}`);
      }

      const { prompt_id } = await queueResponse.json() as ComfyUIQueueResponse;

      let attempts = 0;
      const maxAttempts = 60;

      while (attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const historyResponse = await fetch(`${baseUrl}/history/${prompt_id}`);
        if (historyResponse.ok) {
          const history = await historyResponse.json() as ComfyUIHistoryResponse;
          
          if (history[prompt_id]) {
            for (const [, nodeOutput] of Object.entries(history[prompt_id].outputs)) {
              if (nodeOutput.images && nodeOutput.images.length > 0) {
                const image = nodeOutput.images[0];
                const imageUrl = `${baseUrl}/view?filename=${encodeURIComponent(image.filename)}&subfolder=${encodeURIComponent(image.subfolder)}&type=${image.type}`;
                setIsGenerating(false);
                return imageUrl;
              }
            }
          }
        }

        setProgress(Math.min((attempts / maxAttempts) * 100, 95));
        attempts++;
      }

      throw new Error('Generation timeout');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setIsGenerating(false);
      return null;
    }
  }, [baseUrl]);

  // Check if ComfyUI is running
  const checkConnection = useCallback(async (): Promise<boolean> => {
    try {
      const response = await fetch(`${baseUrl}/system_stats`);
      return response.ok;
    } catch {
      return false;
    }
  }, [baseUrl]);

  return {
    generateRoomImage,
    generateCatCharacter,
    checkConnection,
    isGenerating,
    progress,
    error
  };
}
