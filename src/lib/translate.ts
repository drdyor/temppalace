// Velcro translation layer. Swap providers without touching callers.
// Target language is passed in — never hardcode 'it' in consumers.

import type { Language } from '../types';

export interface TranslateProvider {
  name: string;
  translate(text: string, from: string, to: string): Promise<string>;
}

export const LANGUAGE_ISO: Record<Language, string> = {
  italian: 'it',
  french: 'fr',
  spanish: 'es',
};

export function isoFor(language: Language): string {
  return LANGUAGE_ISO[language] ?? 'en';
}

// Free, no-key, in-browser. Good enough for vocab-length strings.
export const myMemoryProvider: TranslateProvider = {
  name: 'mymemory',
  async translate(text, from, to) {
    const q = encodeURIComponent(text);
    const pair = `${from}|${to}`;
    const url = `https://api.mymemory.translated.net/get?q=${q}&langpair=${pair}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`MyMemory HTTP ${res.status}`);
    const json = await res.json();
    const translated = json?.responseData?.translatedText;
    if (typeof translated !== 'string' || !translated.trim()) {
      throw new Error('Empty translation');
    }
    return translated.trim();
  },
};

let activeProvider: TranslateProvider = myMemoryProvider;

export function setProvider(p: TranslateProvider) {
  activeProvider = p;
}

export function getProvider(): TranslateProvider {
  return activeProvider;
}

export async function translate(text: string, to: string, from: string = 'en'): Promise<string> {
  const trimmed = text.trim();
  if (!trimmed) return '';
  return activeProvider.translate(trimmed, from, to);
}
