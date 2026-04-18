export type Register = 'friendly' | 'polite' | 'family';

export interface ConversationTemplate {
  id: string;
  roomId: string;
  frame: string;
  slots: string[];
  register: Register;
  contextNote?: string;
  imagePrompt?: string;
}

export interface ExpandedPhrase {
  id: string;
  roomId: string;
  templateId: string;
  source: string;   // was 'english'
  target: string;   // was 'italian'
  register: Register;
}

// Runtime adapter: the JSON files still use 'english' / 'italian' fields.
// We map them to 'source' / 'target' at load time so the rest of the app is clean.
import templatesJson from './conversation-templates-all.json';
import expandedJson from './expanded-phrases.json';

function mapTemplate(t: any): ConversationTemplate {
  return t as ConversationTemplate;
}

function mapPhrase(p: any): ExpandedPhrase {
  return {
    id: p.id,
    roomId: p.roomId,
    templateId: p.templateId,
    source: p.english ?? p.source ?? '',
    target: p.italian ?? p.target ?? '',
    register: p.register,
  };
}

export const conversationTemplates: ConversationTemplate[] = (templatesJson as any[]).map(mapTemplate);
export const expandedPhrases: ExpandedPhrase[] = (expandedJson as any[]).map(mapPhrase);
