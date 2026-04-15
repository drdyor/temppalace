// OpenRouter API Service with CORS handling
const API_KEY = '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';

// Free models available on OpenRouter - ordered by reliability
const FREE_MODELS = [
  'google/gemini-2.0-flash-exp:free',
  'meta-llama/llama-3.2-3b-instruct:free',
  'meta-llama/llama-3.2-1b-instruct:free',
  'mistralai/mistral-7b-instruct:free',
];

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface AIResponse {
  content: string;
  error?: string;
}

// Character-specific system prompts generator
const generateSystemPrompt = (character: { name: string; role: string; personality: string; topics: string[] }, roomContext: { roomName: string; roomTopic: string }) => {
  return `You are ${character.name}, ${character.role} in the ${roomContext.roomName}.

Your personality: ${character.personality}

You are helping a KS3 student (ages 11-14) learn French. You are in the ${roomContext.roomName} which is about ${roomContext.roomTopic}.

IMPORTANT RULES:
1. Keep responses SHORT (2-4 sentences maximum)
2. Use simple French appropriate for beginners/intermediates
3. Always provide English translation in parentheses for any French you use
4. Be encouraging, friendly, and patient
5. Stay in character - respond as ${character.name} would
6. Focus on these topics: ${character.topics.join(', ')}
7. If the student makes a mistake, gently correct them
8. Use vocabulary related to the ${roomContext.roomName}

Example response format:
"Bonjour! Je suis ${character.name}. (Hello! I am ${character.name}.) Comment ça va? (How are you?)"

Start with a brief greeting in French, then help with their question.`;
};

export class OpenRouterService {
  private currentModelIndex: number = 0;
  private maxRetries: number = 3;

  async chat(
    messages: ChatMessage[], 
    character: { name: string; role: string; personality: string; topics: string[] },
    roomContext: { roomName: string; roomTopic: string }
  ): Promise<AIResponse> {
    const model = FREE_MODELS[this.currentModelIndex];
    
    for (let attempt = 0; attempt < this.maxRetries; attempt++) {
      try {
        const systemPrompt = generateSystemPrompt(character, roomContext);

        // Use a CORS proxy for the request
        const corsProxies = [
          'https://api.allorigins.win/raw?url=',
          'https://corsproxy.io/?',
        ];
        
        // Try direct first, then proxies
        const urls = [
          'https://openrouter.ai/api/v1/chat/completions',
          ...corsProxies.map(p => p + encodeURIComponent('https://openrouter.ai/api/v1/chat/completions'))
        ];

        let lastError: Error | null = null;

        for (const url of urls) {
          try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout

            const response = await fetch(url, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': typeof window !== 'undefined' ? window.location.origin : 'https://frenchmemorypalace.com',
                'X-Title': 'French Memory Palace',
              },
              body: JSON.stringify({
                model: model,
                messages: [
                  { role: 'system', content: systemPrompt },
                  ...messages.slice(-6), // Keep last 6 messages for context
                ],
                temperature: 0.7,
                max_tokens: 200,
              }),
              signal: controller.signal,
            });

            clearTimeout(timeoutId);

            if (response.ok) {
              const data = await response.json();
              const content = data.choices?.[0]?.message?.content;

              if (content) {
                return { content: content.trim() };
              }
            }

            // If rate limited or model unavailable, try next model
            if (response.status === 429 || response.status === 503) {
              this.currentModelIndex = (this.currentModelIndex + 1) % FREE_MODELS.length;
              break; // Break to retry with new model
            }

          } catch (fetchError) {
            lastError = fetchError instanceof Error ? fetchError : new Error('Fetch failed');
            continue; // Try next URL
          }
        }

        if (lastError) {
          throw lastError;
        }

      } catch (error) {
        console.error(`OpenRouter attempt ${attempt + 1} failed:`, error);
        
        // Try next model on error
        this.currentModelIndex = (this.currentModelIndex + 1) % FREE_MODELS.length;
        
        if (attempt < this.maxRetries - 1) {
          await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1))); // Exponential backoff
        }
      }
    }

    return {
      content: '',
      error: 'Unable to connect to AI service. Please try again in a moment.',
    };
  }

  // Generate a fallback response when API is unavailable
  generateFallbackResponse(character: { name: string; greeting: string; topics: string[] }): string {
    const fallbacks = [
      `${character.greeting} I'm having a bit of trouble connecting right now. But I can still help! Try asking me about ${character.topics[0]} or ${character.topics[1] || character.topics[0]}.`,
      `Bonjour! (${character.name} here!) It seems the connection is slow. Let's practice some French! Comment ça va? (How are you?)`,
      `Salut! I'm ${character.name}. The AI service is taking a break, but I'm still here! What would you like to learn about today?`,
    ];
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  }
}

export const openRouter = new OpenRouterService();
