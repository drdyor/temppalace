import { useState, useEffect, useCallback, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getTtsCode } from '../lib/language-config';

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognitionResult {
  [index: number]: SpeechRecognitionAlternative;
  isFinal: boolean;
}

interface SpeechRecognitionEvent {
  results: {
    [index: number]: SpeechRecognitionResult;
  };
}

interface SpeechRecognitionErrorEvent {
  error: string;
}

interface UseSpeechRecognitionOptions {
  onResult?: (transcript: string, confidence: number) => void;
  onError?: (error: string) => void;
  language?: string;
}

export function useSpeechRecognition(options: UseSpeechRecognitionOptions = {}) {
  const { currentLanguage } = useLanguage();
  const { onResult, onError, language = getTtsCode(currentLanguage) } = options;
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [hasSupport, setHasSupport] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      setHasSupport(true);
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = language;

      recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
        const result = event.results[0];
        const transcriptText = result[0].transcript;
        const confidence = result[0].confidence;
        const isFinal = result.isFinal;

        setTranscript(transcriptText);
        if (isFinal) {
          onResult?.(transcriptText, confidence);
          setIsListening(false);
        }
      };

      recognitionRef.current.onerror = (event: SpeechRecognitionErrorEvent) => {
        setError(event.error);
        onError?.(event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {
          // ignore
        }
      }
    };
  }, [language, onResult, onError]);

  const startListening = useCallback(() => {
    if (recognitionRef.current) {
      setTranscript('');
      setError(null);
      setIsListening(true);
      try {
        recognitionRef.current.start();
      } catch (e) {
        // Already started
      }
    }
  }, []);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        // ignore
      }
      setIsListening(false);
    }
  }, []);

  return {
    isListening,
    transcript,
    hasSupport,
    error,
    startListening,
    stopListening,
  };
}

/**
 * Normalizes spoken text for comparison across Romance languages.
 * Strips diacritics and punctuation. Works for Italian, French, Spanish.
 */
export function normalizeSpoken(text: string): string {
  return text
    .toLowerCase()
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[ñ]/g, 'n')
    .replace(/[^a-z0-9\s]/g, '')
    .trim();
}

/**
 * @deprecated Use `compareSpoken` instead.
 */
export function compareItalianSpoken(spoken: string, expected: string): {
  similarity: number;
  isMatch: boolean;
  missingWords: string[];
} {
  return compareSpoken(spoken, expected);
}

export function compareSpoken(spoken: string, expected: string): {
  similarity: number;
  isMatch: boolean;
  missingWords: string[];
} {
  const normSpoken = normalizeSpoken(spoken);
  const normExpected = normalizeSpoken(expected);

  const spokenWords = normSpoken.split(/\s+/).filter(Boolean);
  const expectedWords = normExpected.split(/\s+/).filter(Boolean);

  if (expectedWords.length === 0) {
    return { similarity: 0, isMatch: false, missingWords: [] };
  }

  let matched = 0;
  const missing: string[] = [];

  for (const expectedWord of expectedWords) {
    if (spokenWords.some(sw => sw === expectedWord || sw.includes(expectedWord) || expectedWord.includes(sw))) {
      matched++;
    } else {
      missing.push(expectedWord);
    }
  }

  const similarity = matched / expectedWords.length;
  return {
    similarity,
    isMatch: similarity >= 0.6,
    missingWords: missing,
  };
}
