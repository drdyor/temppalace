# Italian Memory Palace - Implementation Plan
# Based on Full Audit Analysis (5446 lines)

---

## 1. CORE ARCHITECTURE

### Three-Layer System:
```
LAYER 1: PALACE_MAP (8 Rooms)
  - Visual/spatial memory anchors
  - Cat characters (anthropomorphic, non-racial)
  - AI image prompts for each room
  - Interactive elements (clickable objects)

LAYER 2: SCENARIOS (Branching Dialogues)
  - Language-first (grammar/vocabulary focus)
  - Three modes: Present | Past | Future
  - Multiple correct paths + one "wrong/funny" path
  - Cat NPCs with ear/tail expressions

LAYER 3: CONTEXT TIPS (Cultural Awareness)
  - Pre-scene popups (optional, dismissible)
  - Soft tone: "You might notice..." not "You must..."
  - Not tested, just awareness
```

---

## 2. PALACE_MAP (8 Rooms)

| Room | Character | Key Interactables | Scenarios |
|------|-----------|-------------------|-----------|
| **Entrance Hall** | Coat Check Cat | Coat rack, console table | Hotel check-in, Home greetings |
| **Kitchen** | Barista Cat ☕ | Espresso machine, dining table | Cafe, Restaurant, Home |
| **Market Square** | Vendor Cats 🍑 | Fruit stall, scale, fountain | Shop (past/present), Market |
| **Train Station** | Ticket Agent Cat 🚂 | Ticket counter, departure board | Train (all tenses), Directions |
| **Clinic** | Pharmacist Cat 💊 | Pharmacy counter, reception | Pharmacy, Doctor (past/present) |
| **Gallery** | Tourist Cats 🎨 | Paintings, sculpture | Museum (present/past) |
| **Airport** | Security Cat ✈️ | Security checkpoint, flight screens | Airport (present/future) |
| **Office** | Bank Teller Cat 🏦 | Teller counter, reception | Bank (present/past), Gym |

### Cat Expression System:
- **Happy**: Ears up, tail curved, purring
- **Confused**: One ear down, head tilt
- **Stern**: Ears slightly back, tail still
- **Surprised**: Both ears up, whiskers forward

---

## 3. SCENARIO STRUCTURE

### Branching Design:
```typescript
// Each scenario has:
- startNodeId: string
- nodes: Record<string, DialogueNode>
- grammarMode: 'present' | 'past' | 'future'
- contextTip?: { title, message, severity }

// Each node has:
- speaker: 'user' | 'npc' | 'narrator'
- text: string (with cat expressions inline)
- choices?: DialogueChoice[]
- backgroundEffect?: 'happy' | 'angry' | 'neutral' | 'surprised'

// Each choice has:
- text: string
- nextNodeId: string
- isCorrect?: boolean (language accuracy)
- feedback?: string (grammar/vocab feedback)
```

### Multiple Correct Paths:
Example: Ordering coffee
- "Prendo un cappuccino" ✅ (correct verb)
- "Vorrei un cappuccino" ✅ (polite conditional)
- "Un cappuccino, per favore" ✅ (short, clear)
- *Silence + pointing* ❌ (wrong/funny)

---

## 4. CONTEXT TIPS (Cultural Awareness)

### Design Rules:
| ❌ Avoid | ✅ Use |
|---------|--------|
| "Never order cappuccino after 11 AM" | "You might notice locals avoid milk coffee after breakfast" |
| "You must say Buongiorno" | "Greeting when entering shops is common practice" |
| "Don't touch the produce" | "Vendors often prefer to select the fruit themselves" |

### Implementation:
- Popup before scene starts
- One-click dismiss
- Soft visual style (info icon, not warning)
- Optional - user can ignore

---

## 5. TENSE MODES (Grammar Drill)

Each scenario has 3 variants:

**Example: Bar Scene**
- `scene_bar_present` - "Cosa prende?" (What are you having?)
- `scene_bar_past` - "Cosa ha preso?" (What did you have?)
- `scene_bar_future` - "Cosa prenderà?" (What will you have?)

Same room, same characters, different grammar focus.

---

## 6. DATA STRUCTURE

### File: `src/data/palace-map.ts`
```typescript
export interface PalaceRoom {
  id: string;
  name: string;
  description: string;
  assetPath: string;
  linkedScenarioIds: string[];
  coordinates: { x: number; y: number };
  characterStyle: 'anthropomorphic_cat';
  visualDescription: string;
  aiImagePrompt: string;
  colorPalette: string[];
  visualElements: VisualElement[];
  atmosphere: {
    lighting: string;
    mood: string;
    sounds?: string[];
  };
}
```

### File: `src/data/scenarios.ts`
```typescript
export interface Scenario {
  id: string;
  roomId: string;
  title: string;
  titleNative: string;
  grammarMode: 'present' | 'past' | 'future';
  timeContext: string;
  contextTip?: {
    title: string;
    message: string;
    severity: 'info' | 'note';
  };
  startNodeId: string;
  nodes: Record<string, DialogueNode>;
  culturalLesson?: string;
}
```

---

## 7. UI COMPONENTS NEEDED

### 1. PalaceMap (2D Navigation)
- Show 8 rooms as clickable nodes
- Lines connecting rooms
- Room preview on hover
- Enter room button

### 2. RoomView (3D/2D Scene)
- Background image (from AI prompt)
- Interactive elements (hotspots)
- Enter scenario button
- Back to map button

### 3. ContextTipModal
- Pre-scene popup
- Title + message
- "Got it" dismiss button
- Don't show again option

### 4. DialogueScene
- Character portrait (cat with expression)
- Dialogue text box
- Choice buttons (3-4 options)
- Feedback on selection
- Progress indicator

### 5. GrammarModeSelector
- Toggle: Present | Past | Future
- Filters available scenarios
- Visual indicator of current mode

---

## 8. IMPLEMENTATION PHASES

### Phase 1: Foundation
- [ ] Create palace-map.ts with 8 rooms
- [ ] Create scenarios.ts with interfaces
- [ ] Build PalaceMap navigation component
- [ ] Build RoomView component

### Phase 2: Dialogue System
- [ ] Build DialogueScene component
- [ ] Implement branching logic
- [ ] Add cat expression system
- [ ] Add grammar feedback

### Phase 3: Content
- [ ] Write 5 scenarios with all 3 tenses (15 total)
- [ ] Add context tips
- [ ] Record audio (or use TTS)

### Phase 4: Polish
- [ ] Add animations
- [ ] Add sound effects
- [ ] Mobile responsiveness
- [ ] Performance optimization

---

## 9. KEY DECISIONS FROM AUDIT

✅ **Cat Characters**: Anthropomorphic, clothed, expressive ears/tails
✅ **Language First**: Culture is soft layer, not tested
✅ **Multiple Correct Paths**: Not binary right/wrong
✅ **Context Tips**: Pre-scene, dismissible, soft tone
✅ **Tense Modes**: Present/Past/Future as grammar drill
✅ **Visual Palace**: 8 rooms with interactive elements
✅ **Memory Anchors**: Objects linked to vocabulary

---

Ready to implement? Start with Phase 1?
