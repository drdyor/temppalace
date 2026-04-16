import json

STYLE = "3D rendered elegant character with big expressive eyes and soft fluffy fur, vintage luxury aesthetic, warm cinematic lighting, highly detailed"

PROMPTS = {
    # Kitchen
    "kt-01": "A hopeful anthropomorphic cat mascot sitting at a kitchen table holding an empty plate with both paws, looking up with big round eyes at an off-screen cook, warm wooden cabinets in the background",
    "kt-02": "A curious anthropomorphic cat mascot in a kitchen pointing with one paw at various toppings scattered on a counter, head tilted in question, cozy kitchen with warm lighting",
    "kt-03": "A polite anthropomorphic cat mascot at a dinner table extending one paw toward an empty space where a napkin would be, expectant expression, kitchen background",
    "kt-04": "An anthropomorphic cat mascot standing on tiptoes peering into an almost-empty bread box or container, one eye squinted, checking for leftovers, kitchen counter behind",
    "kt-05": "A friendly anthropomorphic cat mascot wearing a tiny apron and holding a wooden spoon, gesturing welcomingly toward an empty stool, cozy kitchen interior",
    "kt-06": "A busy anthropomorphic cat mascot carefully placing plates and cups on a wooden table, tongue sticking out in concentration, warm kitchen behind",
    "kt-07": "A hungry anthropomorphic cat mascot sitting at a set table looking at an empty plate, then glancing at a wall clock, hopeful expression, homey kitchen",
    "kt-08": "A generous anthropomorphic cat mascot holding out a bowl with both paws toward the viewer, tail curled in a question mark, friendly kitchen setting",

    # Entrance Hall
    "eh-01": "A proud anthropomorphic cat mascot standing in a doorway gesturing with one paw toward a family portrait on the wall, chest puffed out, grand entrance hall",
    "eh-02": "An anthropomorphic cat mascot reaching up with one paw toward a coat rack trying to grab a hanging item, balancing on one leg, entrance hall with family portraits",
    "eh-03": "An anthropomorphic cat mascot holding a small photo frame and gesturing with the other paw, standing in an entrance hall with portraits on the wall",
    "eh-04": "An anthropomorphic cat mascot with one paw on an open door, looking back over its shoulder while holding a tiny wristwatch, entrance hall with coat rack",
    "eh-05": "A confused anthropomorphic cat mascot staring up at a tall grandfather clock, paw raised to its chin, standing in a grand entrance hall",
    "eh-06": "Two friendly anthropomorphic cat mascots waving at each other across an entrance hall doorway, both with big smiles, family portraits on the walls",
    "eh-07": "A gracious anthropomorphic cat mascot holding a door open with one paw and bowing slightly, tail wagging like a dog, warm entrance hall",
    "eh-08": "A cheerful anthropomorphic cat mascot waving goodbye from a doorway, one paw high in the air, standing in a grand entrance hall with portraits",

    # Library
    "li-01": "An enthusiastic anthropomorphic cat mascot in a library holding up an open book with both paws, showing it to another cat, tall bookshelves behind",
    "li-02": "A polite anthropomorphic cat mascot sitting at a wooden study desk extending one paw toward a stack of books, expectant expression, library with tall shelves",
    "li-03": "A determined anthropomorphic cat mascot surrounded by scattered papers and pencils at a desk, one paw holding a pen, library bookshelves towering behind",
    "li-04": "An anthropomorphic cat mascot standing in a library pointing at a calendar on the wall with one paw, head tilted, wooden study desk nearby",
    "li-05": "A frustrated anthropomorphic cat mascot tapping a silent computer or phone with one paw, screen dark, sitting at a library desk with bookshelves behind",
    "li-06": "A hopeful anthropomorphic cat mascot pointing at a difficult book with one paw while looking up pleadingly, sitting at a wooden library desk",
    "li-07": "An anthropomorphic cat mascot standing on a small stool reaching for a heavy encyclopedia on a tall bookshelf, one paw stretched high, quiet library",
    "li-08": "An anthropomorphic cat mascot spreading a large map across a library desk with both paws, looking excited, tall bookshelves in the background",

    # Bedroom
    "bd-01": "An anthropomorphic cat mascot rummaging through an open wardrobe with its head inside and tail sticking out, searching for something, cozy bedroom",
    "bd-02": "An anthropomorphic cat mascot holding up a missing sock with one paw and looking around the bedroom with a questioning expression, bed unmade behind",
    "bd-03": "An anthropomorphic cat mascot admiring itself in a mirror wearing a shiny necklace or bracelet, paw touching the jewelry, soft bedroom interior",
    "bd-04": "An anthropomorphic cat mascot sitting on the edge of a bed reaching out one paw toward a pair of slippers on the floor, polite expression, bedroom",
    "bd-05": "A sleepy anthropomorphic cat mascot buried in fluffy pillows on a bed, only its face visible, eyes half-closed in bliss, comfortable bedroom",
    "bd-06": "An anthropomorphic cat mascot leaning over a bedside table squinting at an alarm clock, one paw reaching to tap it, early morning bedroom",
    "bd-07": "An anthropomorphic cat mascot in front of a mirror trying to put on a tiny hat or piece of clothing, one paw caught in the fabric, bedroom wardrobe behind",
    "bd-08": "An anthropomorphic cat mascot stretching up to flip a light switch by the bed, one paw on the switch, ready to turn it off, cozy bedroom",

    # Bathroom
    "ba-01": "An anthropomorphic cat mascot peeking around a shower curtain with one paw holding it back, looking for something, clean white-tiled bathroom",
    "ba-02": "An anthropomorphic cat mascot wrapped in a fluffy towel with a shower cap on its head, one paw testing the bath water, bright bathroom",
    "ba-03": "An anthropomorphic cat mascot sitting in a bathtub extending one wet paw toward a bar of soap on the edge, expectant expression, white tiles",
    "ba-04": "An anthropomorphic cat mascot peering into an empty shampoo bottle held up to one eye, the other eye squinted, bathroom counter behind",
    "ba-05": "An anthropomorphic cat mascot in a bathtub with steam rising around it, one paw dipped in water testing temperature, surprised expression, bathroom",
    "ba-06": "An anthropomorphic cat mascot standing at a sink on a small stool, lathering one paw with soap, bubbles everywhere, mirror and sink behind",
    "ba-07": "An anthropomorphic cat mascot in a bathtub reaching one paw toward a towel rack just out of reach, body stretched long, bathroom interior",
    "ba-08": "An anthropomorphic cat mascot standing on hind legs pressing a faucet handle with both paws, water just starting to flow, delighted expression, bathroom sink",

    # Garden
    "ga-01": "An anthropomorphic cat mascot in a sunny garden pointing with one paw at a blooming flower, eyes wide with wonder, green grass and stone path",
    "ga-02": "An anthropomorphic cat mascot walking carefully along a winding stone path in a garden, one paw raised mid-step, flowers on both sides",
    "ga-03": "An anthropomorphic cat mascot lying on its back in green grass looking straight up at a bright sun or fluffy clouds, paws in the air, garden setting",
    "ga-04": "An anthropomorphic cat mascot sprawled on a picnic blanket in a garden with a half-eaten sandwich nearby, sunhat over one eye, perfect sunny day",
    "ga-05": "An anthropomorphic cat mascot holding a watering can with both paws, water arcing toward a potted plant, some water splashing on its own feet, garden",
    "ga-06": "An anthropomorphic cat mascot in a garden looking up at dark clouds gathering overhead, one paw shielding its eyes, wind ruffling its fur",
    "ga-07": "An anthropomorphic cat mascot sitting contentedly under a large tree in a garden, dappled sunlight on its fur, tail curled around its paws",
    "ga-08": "An anthropomorphic cat mascot rolling on its back in soft green grass with eyes closed in bliss, one paw twitching, sunny garden with flowers",

    # Transport
    "tr-01": "An anthropomorphic cat mascot standing at a train station ticket counter holding a tiny suitcase in one paw and pointing at a departure board with the other",
    "tr-02": "An anthropomorphic cat mascot at a train station platform looking up at a large departure clock, one paw tapping its foot impatiently, ticket machines behind",
    "tr-03": "A confused anthropomorphic cat mascot at a train station staring at platform signs pointing in opposite directions, one paw scratching its head",
    "tr-04": "An anthropomorphic cat mascot pressed against a train window from the inside, nose flattened on the glass, waving one paw, platform visible outside",
    "tr-05": "An anthropomorphic cat mascot holding a tiny map upside down at a train station, looking around in confusion, departure board in the background",
    "tr-06": "An anthropomorphic cat mascot standing at the edge of a train platform leaning forward to read a direction sign, one paw pointing, train tracks behind",
    "tr-07": "An anthropomorphic cat mascot struggling to carry an oversized suitcase at a train station, body leaning to one side, ticket counter in the background",
    "tr-08": "An anthropomorphic cat mascot at a crosswalk looking both ways with wide eyes, one paw raised in a stop gesture, traffic light glowing red behind",

    # Living Room
    "lr-01": "An anthropomorphic cat mascot happily bouncing on a soft sofa in a living room, mid-jump with all four paws off the cushion, warm carpet below",
    "lr-02": "An anthropomorphic cat mascot lounging on a sofa extending one lazy paw toward a remote control on the coffee table, expectant expression",
    "lr-03": "An anthropomorphic cat mascot sitting on a sofa pointing excitedly at a dark TV screen with one paw, popcorn spilled nearby, cozy living room",
    "lr-04": "An anthropomorphic cat mascot standing in front of a music player or TV with both paws on the buttons, head bobbing to an imagined tune, living room",
    "lr-05": "An anthropomorphic cat mascot squinting at a bright TV screen from a sofa, one paw shielding its eyes, remote control in the other paw",
    "lr-06": "An anthropomorphic cat mascot hugging a decorative cushion on a sofa, cheek pressed against it, eyes closed in happiness, warm living room",
    "lr-07": "An anthropomorphic cat mascot standing on hind legs reaching for a light switch or power button near a TV, tail straight out for balance, living room",
    "lr-08": "An anthropomorphic cat mascot stretching on a soft rug in the middle of a living room, yoga pose with eyes closed, warm afternoon light",

    # Supermarket
    "sm-01": "An anthropomorphic cat mascot in a supermarket holding a price tag with both paws, eyes wide at the numbers, shelves of fresh produce behind",
    "sm-02": "An anthropomorphic cat mascot in a supermarket carefully placing apples or vegetables into a basket, one paw holding the item, bright aisle behind",
    "sm-03": "An anthropomorphic cat mascot peeking around a supermarket shelf looking for a missing item, one paw holding an empty shopping list",
    "sm-04": "An anthropomorphic cat mascot in a supermarket looking up at tall aisle signs, spinning in a circle trying to find the right section, bright lighting",
    "sm-05": "An anthropomorphic cat mascot at a supermarket checkout holding a tiny credit card in one paw and an empty wallet in the other, hopeful expression",
    "sm-06": "An anthropomorphic cat mascot in a supermarket holding a piece of fruit up to its nose, sniffing with eyes closed, delighted expression, produce shelves",
    "sm-07": "An anthropomorphic cat mascot trying to push an oversized shopping cart in a supermarket, barely reaching the handle, one wheel spinning crookedly",
    "sm-08": "An anthropomorphic cat mascot at a checkout counter holding up a price tag that reads a number with euro symbol, proud expression, supermarket background",

    # Cafe
    "cf-01": "A polite anthropomorphic cat mascot sitting at a small cafe table holding a menu with both paws, looking up at an off-screen waiter, espresso machine behind counter",
    "cf-02": "An anthropomorphic cat mascot at a cafe counter pointing with one paw at a pastry display case, other paw holding a tiny coffee cup, wooden counter",
    "cf-03": "An anthropomorphic cat mascot in a cafe looking around for an empty table, one paw scratching its chin, small tables and chairs around",
    "cf-04": "An anthropomorphic cat mascot at a cafe table raising one paw to get attention while holding an empty plate with the other, polite expression",
    "cf-05": "An anthropomorphic cat mascot in a cafe holding a steaming cup with both paws, eyes closed in bliss, a tiny heart floating above its head",
    "cf-06": "An anthropomorphic cat mascot at a cafe pointing with one paw at a pastry on a plate in front of another cat, inviting expression, wooden counter behind",
    "cf-07": "An anthropomorphic cat mascot in a cafe pointing confidently at a menu item with one paw, the other paw on its hip, decisive expression",
    "cf-08": "A grateful anthropomorphic cat mascot at a cafe table bowing its head slightly with both paws pressed together, tiny coffee cup on the table",

    # Gallery
    "gl-01": "An anthropomorphic cat mascot in an art gallery standing on hind legs with both paws pressed together in awe, gazing up at a large painting on white wall",
    "gl-02": "An anthropomorphic cat mascot in an art gallery pointing with one paw at a painting's name plaque, head tilted in curiosity, elegant white walls",
    "gl-03": "An anthropomorphic cat mascot in a gallery gift shop holding a tiny postcard with both paws, examining it closely, souvenirs on shelves behind",
    "gl-04": "An anthropomorphic cat mascot in an art gallery with its mouth open in amazement, both paws on its cheeks, staring at an abstract sculpture",
    "gl-05": "An anthropomorphic cat mascot posing proudly in front of a famous painting while an unseen photographer takes the picture, one paw on hip, gallery interior",
    "gl-06": "An anthropomorphic cat mascot in an art gallery pointing with one paw at bright colors in a painting, tail curled in appreciation, white walls",
    "gl-07": "An anthropomorphic cat mascot in a gallery looking at a price tag below a painting, eyes bulging out comically, one paw holding its wallet",
    "gl-08": "An anthropomorphic cat mascot walking through an art gallery doorway into the next room, one paw beckoning the viewer to follow, elegant white walls",

    # Animals
    "an-01": "An anthropomorphic cat mascot in a sunny meadow pointing with one paw at a distant animal over a wooden fence, eyes wide with excitement, friendly animal sanctuary",
    "an-02": "An anthropomorphic cat mascot leaning over a fence reaching one paw toward a fluffy creature, soft expression, green meadows behind",
    "an-03": "An anthropomorphic cat mascot surrounded by various small animals in a green meadow, arms spread wide in a hug, eyes closed in happiness",
    "an-04": "An anthropomorphic cat mascot at a wooden fence extending one paw through the slats to pet a friendly animal on the other side, gentle expression",
    "an-05": "An anthropomorphic cat mascot peeking from behind a fence post with wide nervous eyes, looking at a small harmless lizard, body frozen in place",
    "an-06": "An anthropomorphic cat mascot watching another animal eat from a trough, head resting on its paws, content expression, sunny farm meadow",
    "an-07": "An anthropomorphic cat mascot holding a handful of feed toward animals behind a fence, some feed spilling from its paws, green meadows",
    "an-08": "An anthropomorphic cat mascot in a meadow holding a tiny baby animal in both paws, nose touching its fur, big loving eyes, wooden fence behind",

    # Weather
    "we-01": "An anthropomorphic cat mascot standing in a doorway looking up at dark storm clouds gathering outside, one paw pointing at the sky, dramatic landscape",
    "we-02": "An anthropomorphic cat mascot with ears flattened back by wind, listening intently to a distant rumble of thunder, open landscape behind",
    "we-03": "An anthropomorphic cat mascot lying on a hill looking straight up at colorful clouds or a rainbow, paws behind its head, dramatic sky above",
    "we-04": "An anthropomorphic cat mascot standing at an open window feeling the breeze, fur blowing sideways, satisfied expression, landscape outside",
    "we-05": "An anthropomorphic cat mascot holding a tiny umbrella that is flipping inside out in the wind, struggling to keep it steady, stormy sky behind",
    "we-06": "An anthropomorphic cat mascot stepping out from under an umbrella onto wet grass, looking up at clearing blue sky breaking through clouds, puddles around",
    "we-07": "An anthropomorphic cat mascot looking out a window at dark clouds with worried eyes, one paw pressed against the glass, fingers crossed on the other paw",
    "we-08": "An anthropomorphic cat mascot spinning in a circle on a sunny hill with arms wide open, face tilted up to a bright blue sky, flowers around",

    # Tools
    "tl-01": "An anthropomorphic cat mascot in a rustic workshop extending one paw toward a hammer on a workbench, expectant expression, hanging tools behind",
    "tl-02": "An anthropomorphic cat mascot in a workshop struggling to hold a tool that is too big for its paws, working on a wooden object, sawdust flying",
    "tl-03": "An anthropomorphic cat mascot rummaging through a tool box with its head inside and tail sticking up, searching for the right tool, workshop background",
    "tl-04": "An anthropomorphic cat mascot in a workshop holding one end of a long plank while another cat holds the other end, teamwork expression, workbench behind",
    "tl-05": "A frustrated anthropomorphic cat mascot looking at a broken tool in two pieces, one paw scratching its head, rustic workshop setting",
    "tl-06": "An anthropomorphic cat mascot in a workshop carefully aiming a tiny hammer at a nail, tongue sticking out in concentration, workbench cluttered with tools",
    "tl-07": "A nervous anthropomorphic cat mascot tiptoeing around a sharp tool on a workbench, wide eyes, one paw raised in caution, workshop interior",
    "tl-08": "A proud anthropomorphic cat mascot in a workshop standing next to a lopsided wooden birdhouse, holding a tiny flag that says 'MIO', tools scattered around",

    # Actions
    "ac-01": "An anthropomorphic cat mascot looking at a watch or clock with urgency, one paw tapping its foot, ready to run, simple indoor setting",
    "ac-02": "An anthropomorphic cat mascot beckoning with one paw while the other is on its hip, standing in an open doorway, inviting expression",
    "ac-03": "An anthropomorphic cat mascot holding a stop sign or making a halt gesture with one paw, the other paw waving 'slow down', concerned expression",
    "ac-04": "A sleepy anthropomorphic cat mascot sitting up in bed rubbing its eyes with both paws, blanket falling off, just woke up, simple room",
    "ac-05": "An anthropomorphic cat mascot looking at an alarm clock with resigned expression, one paw reaching to turn it off, morning routine beginning",
    "ac-06": "An anthropomorphic cat mascot standing on hind legs turning a doorknob with both paws, body leaning into the motion, door cracking open",
    "ac-07": "An anthropomorphic cat mascot sitting on the floor holding one paw up with a tiny bandage on it, looking at it with a pout, simple indoor space",
    "ac-08": "An anthropomorphic cat mascot reaching both paws toward another cat across a table, inviting them to join, happy expression, simple cozy room",

    # Emotions
    "em-01": "An anthropomorphic cat mascot walking on a path with a big smile, sunshine rays around its head, tail held high, warm abstract background",
    "em-02": "An anthropomorphic cat mascot pointing at a mirror reflection with one paw, the reflection shows a different expression, soft warm room",
    "em-03": "An anthropomorphic cat mascot with heart-shaped eyes hugging itself with both paws, floating slightly off the ground, warm colored abstract room",
    "em-04": "An anthropomorphic cat mascot bouncing on its toes with energy, sparks or stars around it, big enthusiastic grin, soft warm background",
    "em-05": "An anthropomorphic cat mascot sitting with another cat, one paw gently patting the other's shoulder in comfort, soft warm abstract room",
    "em-06": "An anthropomorphic cat mascot shaking paws with another cat while looking straight into its eyes, sincere expression, warm glowing abstract background",
    "em-07": "An anthropomorphic cat mascot with paws on its cheeks and mouth open in delighted surprise, confetti or sparkles around, warm abstract room",
    "em-08": "An anthropomorphic cat mascot giving a thumbs-up with one paw while beaming with pride at another cat, warm glowing abstract background",

    # Farm
    "fa-01": "An anthropomorphic cat mascot in a vegetable garden holding a ripe tomato or vegetable up to the sun, inspecting it proudly, sunny farm",
    "fa-02": "An anthropomorphic cat mascot at a farm stand holding out a basket of fresh produce with both paws, inviting expression, vegetable gardens behind",
    "fa-03": "An anthropomorphic cat mascot in an orchard biting into a juicy fruit, juice dripping from its chin, eyes closed in bliss, fruit trees around",
    "fa-04": "An anthropomorphic cat mascot in a garden holding a watering can that is tipping over, water splashing on its own feet, vegetable patches behind",
    "fa-05": "An anthropomorphic cat mascot in a field carrying a basket of vegetables that is overflowing, one carrot falling out, sunny farm landscape",
    "fa-06": "An anthropomorphic cat mascot standing next to an enormous vegetable plant that is twice its height, looking up with awe, garden rows behind",
    "fa-07": "An anthropomorphic cat mascot on a small ladder in an orchard reaching for a fruit with one paw, basket hanging from its arm, sunny farm",
    "fa-08": "An anthropomorphic cat mascot at a farm gate holding a sign that reads 'from our garden', pointing proudly at vegetable rows behind",

    # Fantasy
    "ft-01": "An anthropomorphic cat mascot in a magical forest pointing with one paw at a glowing fairy creature, eyes wide with wonder, whimsical fantasy realm",
    "ft-02": "An anthropomorphic cat mascot in a fantasy realm wearing a tiny wizard hat, holding a sparkling wand that shoots glitter, magical glowing elements around",
    "ft-03": "An anthropomorphic cat mascot in front of a mirror wearing a cardboard crown and cape, pretending to be a royal character, whimsical magical background",
    "ft-04": "An anthropomorphic cat mascot peeking from behind a glowing mushroom in a fantasy forest, one eye visible, watching a tiny dragon, magical atmosphere",
    "ft-05": "An anthropomorphic cat mascot sitting on a mushroom in a magical forest holding an open storybook, a tiny castle visible in the background mist",
    "ft-06": "An anthropomorphic cat mascot in a fantasy realm looking up at floating glowing beings in the sky, paws pressed together in wonder, magical lights around",
    "ft-07": "An anthropomorphic cat mascot in a magical landscape waving goodbye as a winged creature flies into a colorful sunset, one paw shielding its eyes",
    "ft-08": "An anthropomorphic cat mascot in a fantasy forest wearing a tiny knight's helmet made from a teacup, holding a wooden sword, magical glowing plants around",
}

with open("src/data/conversation-templates-all.json", "r", encoding="utf-8") as f:
    templates = json.load(f)

updated = 0
for t in templates:
    tid = t["id"]
    if tid in PROMPTS:
        t["imagePrompt"] = PROMPTS[tid] + ", " + STYLE
        updated += 1
    else:
        print(f"Warning: no prompt found for {tid}")

with open("src/data/conversation-templates-all.json", "w", encoding="utf-8") as f:
    json.dump(templates, f, indent=2, ensure_ascii=False)
    f.write("\n")

print(f"Updated {updated}/{len(templates)} templates with specific image prompts.")
