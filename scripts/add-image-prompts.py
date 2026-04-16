import json

ROOM_SETTINGS = {
    "kitchen": "cozy kitchen interior with wooden cabinets and warm lighting",
    "entrance-hall": "grand entrance hall with a coat rack and family portraits on the wall",
    "library": "quiet library with tall bookshelves and a wooden study desk",
    "bedroom": "comfortable bedroom with a wardrobe, bed, and soft pillows",
    "bathroom": "clean bathroom with a sink, mirror, and white tiles",
    "garden": "sunny garden with green grass, flowers, and a stone path",
    "transport": "busy train station platform with ticket machines and a departure board",
    "living-room": "modern living room with a sofa, TV, and warm carpet",
    "supermarket": "bright supermarket aisle with shelves of fresh produce",
    "cafe": "small Italian cafe with a wooden counter and espresso machine",
    "gallery": "elegant art gallery with paintings on white walls",
    "animals": "friendly animal sanctuary with green meadows and a wooden fence",
    "weather": "open landscape under a dramatic sky showing weather phenomena",
    "tools": "rustic workshop with a workbench and hanging tools",
    "actions": "simple indoor or outdoor space showing movement and activity",
    "emotions": "soft abstract room with warm colors representing feelings",
    "farm": "sunny farm with vegetable gardens and fruit trees",
    "fantasy": "whimsical fantasy realm with magical glowing elements",
}

def generate_prompt(t):
    room = t["roomId"]
    setting = ROOM_SETTINGS.get(room, room.replace("-", " ") + " setting")
    context = t.get("contextNote", "")
    
    # Base prompt structure
    base = f"Cute cartoon cat in a {setting}"
    
    # Add action/context detail
    action = context if context else "interacting with the environment"
    
    # Specific enhancements based on room
    style = "children's storybook illustration style, warm colors, clean lines, friendly expression, cozy atmosphere"
    
    prompt = f"{base}, {action.lower()}, {style}"
    return prompt

with open("src/data/conversation-templates-all.json", "r", encoding="utf-8") as f:
    templates = json.load(f)

for t in templates:
    t["imagePrompt"] = generate_prompt(t)

with open("src/data/conversation-templates-all.json", "w", encoding="utf-8") as f:
    json.dump(templates, f, indent=2, ensure_ascii=False)
    f.write("\n")

print(f"Added imagePrompt to {len(templates)} templates.")
