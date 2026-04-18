import { useState, useCallback } from 'react';
import type { Language } from '../types';
import { getLangConfig } from '../lib/language-config';

interface OllamaMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface UseOllamaOptions {
  model?: string;
  temperature?: number;
  language?: Language;
}

export function useOllama(options: UseOllamaOptions = {}) {
  const { model = 'llama3.2', temperature = 0.7, language = 'italian' } = options;
  const langConfig = getLangConfig(language);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generate = useCallback(async (prompt: string, systemPrompt?: string): Promise<string> => {
    setIsLoading(true);
    setError(null);

    try {
      const messages: OllamaMessage[] = [];
      
      if (systemPrompt) {
        messages.push({ role: 'system', content: systemPrompt });
      }
      
      messages.push({ role: 'user', content: prompt });

      const response = await fetch('http://localhost:11434/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model,
          messages,
          stream: false,
          options: { temperature }
        })
      });

      if (!response.ok) {
        throw new Error(`Ollama error: ${response.status}`);
      }

      const data = await response.json();
      return data.message?.content || '';
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      return '';
    } finally {
      setIsLoading(false);
    }
  }, [model, temperature]);

  // Generate a branching scenario dynamically
  const generateScenario = useCallback(async (context: {
    room: string;
    situation: string;
    characters: string[];
    vocabulary?: string[];
  }): Promise<{
    title: string;
    nodes: Array<{
      id: string;
      speaker: string;
      text: string;
      choices: Array<{
        text: string;
        isCorrect: boolean;
        feedback: string;
      }>;
    }>;
  } | null> => {
    const systemPrompt = `You are a language learning scenario generator. Create branching dialogue scenarios for ${langConfig.name} cultural situations.

Rules:
- Focus on authentic ${langConfig.name} cultural nuances
- Include multiple choice paths (A/B/C)
- One path should be culturally "perfect", one "acceptable", one "faux pas"
- Provide brief feedback for each choice explaining the cultural reasoning
- Keep dialogue natural and conversational
- Use ${langConfig.name} phrases with English translations

Output valid JSON in this format:
{
  "title": "Scenario Title",
  "nodes": [
    {
      "id": "start",
      "speaker": "npc",
      "text": "${langConfig.name} dialogue with English translation in parentheses",
      "choices": [
        {
          "text": "Choice text in English",
          "isCorrect": true/false,
          "feedback": "Cultural explanation"
        }
      ]
    }
  ]
}`;

    const vocabSection = context.vocabulary?.length
      ? `\n- Try to naturally incorporate some of these ${langConfig.name} words: ${context.vocabulary.slice(0, 15).join(', ')}`
      : '';

    const prompt = `Create a branching scenario for:
- Location: ${context.room}
- Situation: ${context.situation}
- Characters: ${context.characters.join(', ')}${vocabSection}

Generate 3-4 nodes with choices leading to different outcomes.`;

    const response = await generate(prompt, systemPrompt);
    
    try {
      // Extract JSON from response (handle markdown code blocks)
      const jsonMatch = response.match(/```json\n?([\s\S]*?)\n?```/) || 
                        response.match(/```\n?([\s\S]*?)\n?```/) ||
                        [null, response];
      const jsonStr = jsonMatch[1] || response;
      return JSON.parse(jsonStr);
    } catch {
      console.error('Failed to parse scenario JSON:', response);
      return null;
    }
  }, [generate]);

  // Generate cultural explanation for a word or phrase
  const explainCulturalContext = useCallback(async (phrase: string, context: string): Promise<string> => {
    const systemPrompt = `You are a ${langConfig.name} cultural expert. Explain the cultural context of phrases and expressions.
    Be concise but informative. Include when to use it, when NOT to use it, and any regional variations.`;

    const prompt = `Explain the cultural context of "${phrase}" in this situation: ${context}`;
    
    return await generate(prompt, systemPrompt);
  }, [generate]);

  // Generate alternative responses for a dialogue
  const generateAlternatives = useCallback(async (situation: string, currentDialogue: string): Promise<string[]> => {
    const systemPrompt = `You are a ${langConfig.name} language teacher. Given a dialogue situation, suggest 3-4 alternative ways to say the same thing,
    ranging from formal to informal. Only return the alternatives, one per line.`;

    const prompt = `Situation: ${situation}\nCurrent dialogue: ${currentDialogue}\n\nSuggest alternative responses:`;
    
    const response = await generate(prompt, systemPrompt);
    return response.split('\n').filter(line => line.trim()).slice(0, 4);
  }, [generate]);

  // Generate contextual examples, conjugation, and grammar notes for a vocabulary word
  const generateWordContext = useCallback(async (word: string, english: string, roomName: string): Promise<{
    examples: Array<{ native: string; english: string; context: string }>;
    conjugation?: { present: string[]; past: string[]; future: string[] };
    notes: string;
    isVerb: boolean;
  } | null> => {
    const systemPrompt = `You are a ${langConfig.name} language teacher creating vocabulary cards. Respond ONLY with valid JSON.`;

    const prompt = `For the ${langConfig.name} word "${word}" (English: ${english}), generate a learning card for a student in the "${roomName}" room.

Respond with valid JSON:
{
  "examples": [
    {"native": "${langConfig.name} sentence with ${word}", "english": "English translation", "context": "e.g. kitchen, dining"}
  ],
  "conjugation": {
    "present": ["${langConfig.nativeName} conjugation line 1", "..."],
    "past": ["..."],
    "future": ["..."]
  },
  "notes": "Brief grammar note or exception (1-2 sentences).",
  "isVerb": true/false
}

Rules:
- Provide 2-3 contextual examples relevant to ${roomName}.
- If ${word} is NOT a verb, set isVerb to false and omit the conjugation field entirely.
- Keep examples A1-A2 level.
- Include definite articles with nouns in example sentences.`;

    const response = await generate(prompt, systemPrompt);
    try {
      const jsonMatch = response.match(/```json\n?([\s\S]*?)\n?```/) || 
                        response.match(/```\n?([\s\S]*?)\n?```/) ||
                        [null, response];
      const jsonStr = (jsonMatch[1] || response).trim();
      return JSON.parse(jsonStr);
    } catch {
      console.error('Failed to parse word context JSON:', response);
      return null;
    }
  }, [generate]);

  return {
    generate,
    generateScenario,
    explainCulturalContext,
    generateAlternatives,
    generateWordContext,
    isLoading,
    error
  };
}
