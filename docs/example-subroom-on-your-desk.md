# Example Subroom: "On Your Desk"

This file demonstrates the complete data pipeline for one subroom.

---

## 1. Subroom Definition

| Field | Value |
|-------|-------|
| **Subroom ID** | `classroom-desk` |
| **Parent Room** | Classroom |
| **Angle** | Top-down view |
| **Target Items** | 15 |
| **CEFR Level** | A1 |

---

## 2. Image Prompt

```
A top-down view of a primary school child's wooden desk.

Visible items: yellow pencil, blue pen, pink eraser, wooden ruler,
red notebook, green textbook, zip pencil case, pencil sharpener,
child-safe scissors, glue stick, white paper, printed worksheet,
yellow folder, pink highlighter, box of coloured pencils.

Style: warm children's book illustration, soft colours, friendly,
clear outlines, European primary school setting, clean wooden desk
surface, no text, no labels, no watermarks.
```

---

## 3. English Vocabulary — Image Layer (Truth Layer)

**Rule:** Concrete objects and visible actions only. Every item can be pointed at in the image.

| # | Word | Context |
|---|------|---------|
| 1 | pencil | Writing tool on desk |
| 2 | pen | Writing tool on desk |
| 3 | eraser | For fixing mistakes |
| 4 | ruler | For drawing lines |
| 5 | notebook | For writing in |
| 6 | textbook | School book |
| 7 | pencil case | Holds pencils |
| 8 | sharpener | For pencils |
| 9 | scissors | For cutting paper |
| 10 | glue | For sticking |
| 11 | paper | White sheet |
| 12 | worksheet | Printed page |
| 13 | folder | Holds papers |
| 14 | highlighter | Yellow marker |
| 15 | coloured pencil | For colouring |

> **Abstract words live in dialogues, not here.** "help", "sorry", "please", "thank you" — these are in the dialogue layer below.

---

## 3b. English Vocabulary — Dialogue Layer (Social / Functional)

These words don't get image pins. They appear in dialogues only.

| Word | Example use | Where it appears |
|------|-------------|-----------------|
| help | "I need help." | Nurse, Teacher |
| sorry | "I am sorry." | Playground, Classroom |
| please | "Please, can I...?" | Lunch hall, Classroom |
| thank you | "Thank you." | Everywhere |
| yes / no | "Yes." / "No." | Everywhere |
| I don't understand | "I don't understand." | Classroom |
| I don't know | "I don't know." | Classroom |
| excuse me | "Excuse me." | Hallway, Classroom |

---

## 4. Pin Positions (set AFTER image generation)

Pins are placed on the actual objects in the generated image.

| Word | Pin X | Pin Y | Notes |
|------|-------|-------|-------|
| pencil | 0.35 | 0.25 | Top-left area of desk |
| pen | 0.40 | 0.30 | Next to pencil |
| eraser | 0.30 | 0.40 | Near ruler |
| ruler | 0.45 | 0.35 | Horizontal, top area |
| notebook | 0.55 | 0.45 | Centre-right |
| textbook | 0.60 | 0.30 | Top-right |
| pencil case | 0.20 | 0.60 | Bottom-left |
| sharpener | 0.25 | 0.50 | Near pencil case |
| scissors | 0.15 | 0.70 | Bottom edge |
| glue | 0.30 | 0.65 | Bottom area |
| paper | 0.50 | 0.60 | Centre-bottom |
| worksheet | 0.55 | 0.55 | Overlapping paper |
| folder | 0.70 | 0.50 | Right side |
| highlighter | 0.42 | 0.42 | Near ruler |
| coloured pencil | 0.75 | 0.70 | Box in corner |

> **Note:** These are estimates. Actual positions are set after reviewing the generated image. The image determines the pins, not the other way around.

---

## 5. Mini-Dialogues (A1, 2–3 turns)

### Dialogue 1: Forgot my pencil

| Speaker | English |
|---------|---------|
| Student | "I don't have a pencil." |
| Teacher | "Here, take one." |
| Student | "Thank you." |

### Dialogue 2: Can I use scissors?

| Speaker | English |
|---------|---------|
| Student | "Can I use the scissors?" |
| Teacher | "Yes, but be careful." |

### Dialogue 3: Sharing glue

| Speaker | English |
|---------|---------|
| Student A | "Can I use your glue?" |
| Student B | "Yes, here." |
| Student A | "Thanks!" |

---

## 6. Italian Layer (post-Minerva audit)

| # | Word | Phrase | Audit |
|---|------|--------|-------|
| 1 | matita | "Ho bisogno di una matita." | PASS |
| 2 | penna | "Posso usare una penna?" | PASS |
| 3 | gomma | "Ho bisogno di una gomma." | PASS |
| 4 | righello | "Disegna una linea con il righello." | PASS |
| 5 | quaderno | "Apri il quaderno." | PASS |
| 6 | libro di testo | "Prendi il libro di testo." | PASS |
| 7 | astuccio | "Mettilo nell'astuccio." | PASS |
| 8 | temperino | "La matita ha bisogno del temperino." | PASS |
| 9 | forbici | "Passami le forbici." | PASS |
| 10 | colla | "Ho bisogno della colla." | PASS |
| 11 | foglio | "Prendi un foglio." | PASS |
| 12 | scheda | "Finisci la scheda." | PASS |
| 13 | cartellina | "Mettilo nella cartellina." | PASS |
| 14 | evidenziatore | "Usa l'evidenziatore." | PASS |
| 15 | matita colorata | "Usa le matite colorate." | PASS |

---

## 7. French Layer (post-Mistral audit)

| # | Word | Phrase | Audit | Notes |
|---|------|--------|-------|-------|
| 1 | crayon | "J'ai besoin d'un crayon." | PASS | |
| 2 | stylo | "Je peux utiliser un stylo?" | PASS | Student→teacher: "Puis-je utiliser un stylo?" |
| 3 | gomme | "J'ai besoin d'une gomme." | PASS | |
| 4 | règle | "Trace une ligne avec la règle." | PASS | |
| 5 | cahier | "Ouvre ton cahier." | PASS | "ton" = informal to student |
| 6 | manuel | "Sors ton manuel." | PASS | |
| 7 | trousse | "Mets-le dans ta trousse." | PASS | |
| 8 | taille-crayon | "Le crayon a besoin du taille-crayon." | FIX | Better: "Il faut tailler le crayon." |
| 9 | ciseaux | "Passe-moi les ciseaux." | PASS | Peer language, "tu" form |
| 10 | colle | "J'ai besoin de colle." | PASS | |
| 11 | feuille | "Prends une feuille." | PASS | |
| 12 | fiche | "Finis la fiche." | PASS | |
| 13 | classeur | "Mets-le dans ton classeur." | PASS | |
| 14 | surligneur | "Utilise le surligneur." | PASS | |
| 15 | crayon de couleur | "Utilise les crayons de couleur." | PASS | |

> **Mistral note:** Item 8 "taille-crayon" as object name is fine, but the sentence "Le crayon a besoin du taille-crayon" is awkward. Better classroom phrasing: "Il faut tailler le crayon" or "Le crayon n'est pas taillé."

---

## 8. Maltese Layer (manual curation)

| # | Word | Notes |
|---|------|-------|
| 1 | lapes | |
| 2 | pinna | |
| 3 | gomma | Same as Italian — cognate |
| 4 | riga | |
| 5 | ktieb | Generic for notebook/book at A1 |
| 6 | kotba | Plural — might use ktieb only at A1 |
| 7 | kas | pencil case |
| 8 | moqred | sharpener |
| 9 | mqass | scissors |
| 10 | gomma tal-hadid | glue (lit. "rubber of sticking") |
| 11 | karti | paper |
| 12 | xoghol | worksheet (lit. "work") |
| 13 | fowlder | folder (loanword) |
| 14 | highlighter | Loanword, used in schools |
| 15 | lapes tal-kulur | coloured pencil |

> **Maltese rule:** At A1, use common forms. Loanwords acceptable if used in Maltese schools. Complex phrases deferred to A2+.

---

## 9. Data File Structure

```typescript
// src/data/school/classroom/on-your-desk.ts

export const onYourDeskSubroom = {
  id: 'classroom-desk',
  name: 'On Your Desk',
  roomId: 'classroom',
  image: '/rooms/classroom-desk.jpg',
  
  vocabulary: [
    {
      id: 'desk-pencil',
      pin: { x: 0.35, y: 0.25 },
      en: { word: 'pencil', phrase: 'I need a pencil.' },
      it: { word: 'matita', phrase: 'Ho bisogno di una matita.', audit: { status: 'pass', auditor: 'minerva:7b' } },
      fr: { word: 'crayon', phrase: "J'ai besoin d'un crayon.", audit: { status: 'pass', auditor: 'mistral' } },
      mt: { word: 'lapes', phrase: null, audit: { status: 'pass', auditor: 'manual' } },
    },
    // ... 14 more items
  ],
  
  dialogues: [
    {
      id: 'desk-no-pencil',
      scenario: 'Forgot my pencil',
      turns: [
        { speaker: 'student', en: "I don't have a pencil.", it: "Non ho una matita.", fr: "Je n'ai pas de crayon.", mt: "M'ghandiex lapes." },
        { speaker: 'teacher', en: "Here, take one.", it: "Ecco, prendi.", fr: "Tiens, prends-en un.", mt: "Hawn, hadu wiehed." },
        { speaker: 'student', en: "Thank you.", it: "Grazie.", fr: "Merci.", mt: "Grazzi." },
      ],
    },
    // ... more dialogues
  ],
};
```

---

## 10. Full Pipeline Checklist for This Subroom

- [ ] Image prompt written (lists all 15 items)
- [ ] Image generated and reviewed (all 15 items visible?)
- [ ] Pin positions set on actual objects
- [ ] English vocabulary complete (15 items, A1)
- [ ] English phrases complete (≤6 words)
- [ ] English dialogues written (2–3 turns, 3 dialogues)
- [ ] Italian translations drafted
- [ ] Italian audited by Minerva (all PASS)
- [ ] French translations drafted
- [ ] French audited by Mistral (all PASS)
- [ ] Maltese word labels curated
- [ ] Data file created with pins + translations
- [ ] Subroom integrated into app
- [ ] TTS tested for IT and FR
