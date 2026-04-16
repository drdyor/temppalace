export type Register = 'friendly' | 'polite' | 'family';

export interface ConversationTemplate {
  id: string;
  roomId: string;
  frame: string;
  slots: string[];
  register: Register;
  contextNote?: string;
}

export interface ExpandedPhrase {
  id: string;
  roomId: string;
  templateId: string;
  english: string;
  italian: string;
  register: Register;
}

import templatesJson from './conversation-templates.json';

export const conversationTemplates: ConversationTemplate[] = templatesJson as ConversationTemplate[];
