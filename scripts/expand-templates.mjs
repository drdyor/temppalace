import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, '..');
const inputPath = path.join(root, 'src', 'data', 'conversation-templates.json');
const outputJsonPath = path.join(root, 'src', 'data', 'expanded-phrases.json');
const outputTxtPath = path.join(root, 'data', 'deepl-input.txt');

const templates = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

const expanded = [];
const deeplLines = [];

for (const t of templates) {
  if (!t.slots || t.slots.length === 0) {
    const phrase = {
      id: `${t.id}-01`,
      roomId: t.roomId,
      templateId: t.id,
      english: t.frame,
      italian: '',
      register: t.register,
    };
    expanded.push(phrase);
    deeplLines.push(t.frame);
    continue;
  }

  for (let i = 0; i < t.slots.length; i++) {
    const slot = t.slots[i];
    const english = t.frame.replace(/{[^}]+}/, slot);
    const phrase = {
      id: `${t.id}-${String(i + 1).padStart(2, '0')}`,
      roomId: t.roomId,
      templateId: t.id,
      english,
      italian: '',
      register: t.register,
    };
    expanded.push(phrase);
    deeplLines.push(english);
  }
}

fs.mkdirSync(path.dirname(outputJsonPath), { recursive: true });
fs.writeFileSync(outputJsonPath, JSON.stringify(expanded, null, 2) + '\n');

fs.mkdirSync(path.dirname(outputTxtPath), { recursive: true });
fs.writeFileSync(outputTxtPath, deeplLines.join('\n') + '\n');

console.log(`Expanded ${templates.length} templates into ${expanded.length} phrases.`);
console.log(`JSON output: ${outputJsonPath}`);
console.log(`DeepL input: ${outputTxtPath}`);
