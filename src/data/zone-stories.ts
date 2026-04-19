export type GrammarFeature =
  | 'passato_prossimo'
  | 'imperfetto'
  | 'futuro'
  | 'congiuntivo'
  | 'condizionale'
  | 'imperativo'
  | 'presente';

export interface GrammarTag {
  text: string;
  type: GrammarFeature;
}

export interface ZoneExchange {
  speaker: string;
  it: string;
  en: string;
  grammarTags?: GrammarTag[];
}

export type LanguageLevel = 'a2' | 'b1';

export interface ZoneStory {
  zoneId: string;
  zoneName: string;
  level?: LanguageLevel;
  exchanges: ZoneExchange[];
}

// Keyed by "zoneId_level" e.g. "entrance-hall_a2", "entrance-hall_b1"
export const zoneStories: Record<string, ZoneStory> = {
  "bathroom_a2": {
    zoneId: "bathroom",
    zoneName: "Bathroom",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Posso entrare? Mi lavo i denti.", en: "Can I come in? I need to brush my teeth." },
      { speaker: "Amico", it: "Sì, ma ho finito. Ecco lo spazzolino e il dentifricio.", en: "Yes, but I'm done. Here's the toothbrush and toothpaste." },
      { speaker: "Tu", it: "Dov'è il sapone?", en: "Where's the soap?" },
      { speaker: "Amico", it: "Accanto al rubinetto. Apri l'acqua.", en: "Next to the faucet. Turn on the water." },
      { speaker: "Tu", it: "Grazie. Mi passi l'asciugamano? Ho la faccia sporca.", en: "Thanks. Can you pass me the towel? My face is dirty." }
    ]
  },
  "bathroom_b1": {
    zoneId: "bathroom",
    zoneName: "Bathroom",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Posso entrare? Sto per lavarmi i denti.", en: "Can I come in? I'm about to brush my teeth." },
      { speaker: "Amico", it: "Sì, ma ho già finito. Ecco lo spazzolino e il dentifricio.", en: "Yes, but I've already finished. Here's the toothbrush and toothpaste." },
      { speaker: "Tu", it: "Dov'è il sapone? Non lo vedo.", en: "Where's the soap? I can't see it." },
      { speaker: "Amico", it: "È accanto al rubinetto. Apri l'acqua, per favore.", en: "It's next to the faucet. Turn on the water, please." },
      { speaker: "Tu", it: "Grazie. Mi passi l'asciugamano? Ho la faccia sporca.", en: "Thanks. Can you pass me the towel? My face is dirty." },
      { speaker: "Amico", it: "Figurati. Però, mica hai visto che c'è un asciugamano sul pavimento?", en: "You're welcome. But, have you seen there's a towel on the floor?" }
    ]
  },
  "bed_a2": {
    zoneId: "bed",
    zoneName: "The Bed",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Non riesco a dormire. Il materasso è troppo duro.", en: "I can't sleep. The mattress is too hard." },
      { speaker: "Amico", it: "Prova a girare il cuscino.", en: "Try flipping the pillow." },
      { speaker: "Tu", it: "Non funziona. Mi serve una coperta più pesante.", en: "Doesn't work. I need a heavier blanket." },
      { speaker: "Amico", it: "Prendi il lenzuolo di flanella. È nel cassetto.", en: "Take the flannel sheet. It's in the drawer." },
      { speaker: "Tu", it: "Ok. E domani cambiamo letto?", en: "Ok. And tomorrow do we change beds?" },
      { speaker: "Amico", it: "Se vuoi, prendi il mio. Io dormo sul divano.", en: "If you want, take mine. I'll sleep on the couch." }
    ]
  },
  "bed_b1": {
    zoneId: "bed",
    zoneName: "The Bed",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Non riesco a dormire. Ho già provato a girare il materasso, ma non funziona.", en: "I can't sleep. I've already tried flipping the mattress, but it doesn't work." },
      { speaker: "Amico", it: "Pero, hai provato a mettere un cuscino più alto?", en: "But, have you tried using a higher pillow?" },
      { speaker: "Tu", it: "Sì, ma non è bastato. Spero che ci sia un materasso più comodo da qualche parte.", en: "Yes, but it wasn't enough. I hope there's a more comfortable mattress somewhere." },
      { speaker: "Amico", it: "Figurati, ne ho uno nel mio letto. Se vuoi, puoi dormire lì.", en: "Don't worry, I have one in my bed. If you want, you can sleep there." },
      { speaker: "Tu", it: "Meno male! Allora, domani porto il mio materasso qui?", en: "Good! Then, tomorrow I'll bring my mattress here?" },
      { speaker: "Amico", it: "Sì, ma comunque, io dormo sul divano stanotte.", en: "Yes, but anyway, I'll sleep on the couch tonight." }
    ]
  },
  "bedroom_a2": {
    zoneId: "bedroom",
    zoneName: "Bedroom",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Metto la camicia o la maglietta?", en: "Should I wear the shirt or the t-shirt?" },
      { speaker: "Amico", it: "Maglietta. Fuori fa caldo. E jeans.", en: "T-shirt. It's hot outside. And jeans." },
      { speaker: "Tu", it: "Ma ho solo pantaloni lunghi. E la gonna?", en: "But I only have long pants. And the skirt?" },
      { speaker: "Amico", it: "No, meglio il vestito. O il pigiama, se resti a casa.", en: "No, better the dress. Or pajamas, if you're staying home." },
      { speaker: "Tu", it: "Resto. Prendo il maglione — scherzo, fa troppo caldo.", en: "I'm staying. I'll take the sweater — just kidding, it's too hot." }
    ]
  },
  "bedroom_b1": {
    zoneId: "bedroom",
    zoneName: "Bedroom",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Metto la camicia o la maglietta?", en: "Should I wear the shirt or the t-shirt?" },
      { speaker: "Amico", it: "Maglietta, per favore. Fuori fa caldo, quindi jeans.", en: "T-shirt, please. It's hot outside, so jeans." },
      { speaker: "Tu", it: "Ma ho solo pantaloni lunghi. E la gonna?", en: "But I only have long pants. What about the skirt?" },
      { speaker: "Amico", it: "No, meglio il vestito. O il pigiama, se resti a casa.", en: "No, better the dress. Or pajamas, if you're staying home." },
      { speaker: "Tu", it: "Resto a casa. Prendo il maglione — scherzo, fa troppo caldo.", en: "I’m staying home. I’ll take the sweater — just kidding, it’s too hot." },
      { speaker: "Amico", it: "Figurati, ma almeno mettilo comunque. Così se ti fa freddo, puoi toglierlo.", en: "Don’t worry, but at least put it on anyway. That way, if you get cold, you can take it off." }
    ]
  },
  "cabinet_a2": {
    zoneId: "cabinet",
    zoneName: "Medicine Cabinet",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Mi fa male la testa. Hai un'aspirina?", en: "I have a headache. Do you have an aspirin?" },
      { speaker: "Amico", it: "Nell'armadietto. Prendi anche il termometro, forse hai la febbre.", en: "In the cabinet. Also take the thermometer, maybe you have a fever." },
      { speaker: "Tu", it: "Non ho febbre. Ma mi sono tagliato il dito — c'è un cerotto?", en: "No fever. But I cut my finger — is there a band-aid?" },
      { speaker: "Amico", it: "Sì, e anche la pomata. E del cotone per pulire.", en: "Yes, and also the ointment. And some cotton to clean." },
      { speaker: "Tu", it: "Grazie. Questa medicina mi sta facendo bene.", en: "Thanks. This medicine is making me feel better." }
    ]
  },
  "cabinet_b1": {
    zoneId: "cabinet",
    zoneName: "Medicine Cabinet",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Mi fa male la testa. Hai un’aspirina?", en: "I have a headache. Do you have an aspirin?" },
      { speaker: "Amico", it: "Sì, l’ho messa nell’armadietto. Però prendi anche il termometro, forse hai la febbre.", en: "Yes, I put it in the cabinet. But also take the thermometer, maybe you have a fever." },
      { speaker: "Tu", it: "Non ho febbre. Ma mi sono tagliato il dito — c’è un cerotto?", en: "No fever. But I cut my finger — is there a band-aid?" },
      { speaker: "Amico", it: "Sì, e anche la pomata. E del cotone per pulire. Figurati, è sempre utile averli a portata di mano.", en: "Yes, and also the ointment. And some cotton to clean. Don’t worry, it’s always useful to have them within reach." },
      { speaker: "Tu", it: "Grazie. Questa medicina mi sta facendo bene.", en: "Thanks. This medicine is making me feel better." },
      { speaker: "Amico", it: "Pero, se non ti senti meglio tra poco, spero che venga un medico.", en: "But, if you don’t feel better soon, I hope a doctor comes." }
    ]
  },
  "checkout_a2": {
    zoneId: "checkout",
    zoneName: "Checkout",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Hai già il carrello?", en: "Do you already have the cart?" },
      { speaker: "Amico", it: "Sì, l’ho appena preso. Vuoi mettere qualcosa nel mio?", en: "Yes, I just took it. Do you want to put something in mine?" },
      { speaker: "Tu", it: "No, grazie. Vado alla cassa.", en: "No, thanks. I’m going to the checkout." },
      { speaker: "Amico", it: "Okay. Hai la carta o preferisci i contanti?", en: "Okay. Do you have a card or do you prefer cash?" },
      { speaker: "Tu", it: "Carta, per favore. Il prezzo è in euro?", en: "Card, please. Is the price in euros?" },
      { speaker: "Amico", it: "Sì. Ecco lo scontrino. Hai bisogno di aiuto?", en: "Yes. Here’s the receipt. Do you need help?" }
    ]
  },
  "checkout_b1": {
    zoneId: "checkout",
    zoneName: "Checkout",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Hai già preso il carrello?", en: "Have you already taken the cart?" },
      { speaker: "Amico", it: "Sì, l’ho appena preso. Però non hai bisogno di mettere qualcosa nel mio, vero?", en: "Yes, I just took it. But you don’t need to put anything in mine, do you?" },
      { speaker: "Tu", it: "No, grazie. Vado direttamente alla cassa.", en: "No, thanks. I’m going straight to the checkout." },
      { speaker: "Amico", it: "Okay. Hai la carta o preferisci i contanti?", en: "Okay. Do you have a card or do you prefer cash?" },
      { speaker: "Tu", it: "Carta, per favore. Spero che il prezzo sia in euro.", en: "Card, please. I hope the price is in euros." },
      { speaker: "Amico", it: "Sì, certo. Ecco lo scontrino. Hai bisogno di aiuto?", en: "Yes, of course. Here’s the receipt. Do you need any help?" }
    ]
  },
  "clock_a2": {
    zoneId: "clock",
    zoneName: "The Clock",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Che ora è? Ho perso la cognizione del tempo.", en: "What time is it? I've lost track of time." },
      { speaker: "Amico", it: "Quasi mezzogiorno. Vuoi pranzare?", en: "Almost noon. Do you want lunch?" },
      { speaker: "Tu", it: "No, ho mangiato stamattina tardi. Che giorno è?", en: "No, I ate late this morning. What day is it?" },
      { speaker: "Amico", it: "Martedì. Ma stanotte non ho dormito, quindi per me è ancora notte.", en: "Tuesday. But I didn't sleep tonight, so for me it's still night." },
      { speaker: "Tu", it: "Aspetta un minuto... sono le 11:30 del mattino. La sera arriva più tardi.", en: "Wait a minute... it's 11:30 in the morning. Evening comes later." }
    ]
  },
  "clock_b1": {
    zoneId: "clock",
    zoneName: "The Clock",
    level: "b1",
    exchanges: [
      { speaker: "Persona", it: "Che ora è? Non so più che giorno è.", en: "What time is it? I don't know what day it is anymore." },
      { speaker: "Persona", it: "Sono le 11:30. Ma non hai dormito, quindi per te è ancora notte.", en: "It's 11:30. But you didn't sleep, so for you it's still night." },
      { speaker: "Persona", it: "Già, ma ho mangiato tardi. Per me è già mattina.", en: "Right, but I ate late. For me, it's already morning." },
      { speaker: "Persona", it: "Però la sera arriva più tardi. Non ti preoccupare.", en: "But evening comes later. Don't worry." },
      { speaker: "Persona", it: "Spero che non sia troppo tardi. Ho già perso troppo tempo.", en: "I hope it's not too late. I've already lost too much time." }
    ]
  },
  "coat-rack_a2": {
    zoneId: "coat-rack",
    zoneName: "Coat Rack",
    level: "a2",
    exchanges: [
      { speaker: "Amica", it: "Prendo il cappotto? Fa freddo fuori.", en: "Should I take the coat? It's cold outside." },
      { speaker: "Tu", it: "Prendi anche la sciarpa e i guanti. E il cappello.", en: "Take the scarf and gloves too. And the hat." },
      { speaker: "Amica", it: "La giacca è abbastanza, no?", en: "Isn't the jacket enough?" },
      { speaker: "Tu", it: "No, ho visto la pioggia. Porta l'impermeabile.", en: "No, I saw rain. Bring the raincoat." },
      { speaker: "Amica", it: "Ok. E la borsa? Ci sta il maglione dentro.", en: "Ok. And the bag? The sweater fits inside." }
    ]
  },
  "coat-rack_b1": {
    zoneId: "coat-rack",
    zoneName: "Coat Rack",
    level: "b1",
    exchanges: [
      { speaker: "Amica", it: "Prendo il cappotto? Fa freddo fuori.", en: "Should I take the coat? It's cold outside." },
      { speaker: "Tu", it: "Sì, prendi il cappotto, però anche la sciarpa e i guanti. E il cappello, figurati.", en: "Yes, take the coat, but also the scarf and gloves. And the hat, for sure." },
      { speaker: "Amica", it: "La giacca è abbastanza, no?", en: "Isn't the jacket enough?" },
      { speaker: "Tu", it: "No, ho visto la pioggia. Spero che non piova troppo, ma porta l'impermeabile.", en: "No, I saw rain. I hope it doesn’t rain too much, but bring the raincoat." },
      { speaker: "Amica", it: "Ok. E la borsa? Ci sta il maglione dentro.", en: "Ok. And the bag? The sweater fits inside." },
      { speaker: "Tu", it: "Mica ti serve il maglione adesso. Comunque, mettilo dentro per quando torni.", en: "You don’t need the sweater now. Anyway, put it inside for when you come back." }
    ]
  },
  "computer_a2": {
    zoneId: "computer",
    zoneName: "Computer Station",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Il computer non si accende. Lo schermo è nero.", en: "The computer won't turn on. The screen is black." },
      { speaker: "Amico", it: "Hai premuto la tastiera? Forse è il mouse.", en: "Did you press the keyboard? Maybe it's the mouse." },
      { speaker: "Tu", it: "No, ho dimenticato la password. Non entro.", en: "No, I forgot the password. I can't get in." },
      { speaker: "Amico", it: "Chiedi alla studentessa. Lei è brava in scienza.", en: "Ask the female student. She's good at science." },
      { speaker: "Tu", it: "E lo studente? Dov'è?", en: "And the male student? Where is he?" },
      { speaker: "Amico", it: "Alla stampante. Sta stampando un file.", en: "At the printer. He's printing a file." }
    ]
  },
  "computer_b1": {
    zoneId: "computer",
    zoneName: "Computer Station",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Il computer non si accende. Lo schermo è nero, ma non so cosa fare.", en: "The computer won't turn on. The screen is black, but I don't know what to do." },
      { speaker: "Amico", it: "Hai già premuto il pulsante di accensione? Forse è il mouse, ma non ne sono sicuro.", en: "Have you already pressed the power button? Maybe it's the mouse, but I'm not sure." },
      { speaker: "Tu", it: "No, ho dimenticato la password. Non riesco ad entrare, però non so se è il problema.", en: "No, I forgot the password. I can't get in, but I don't know if that's the problem." },
      { speaker: "Amico", it: "Penso che tu debba chiedere alla studentessa. Lei è brava in scienza, quindi forse sa aiutarti.", en: "I think you should ask the female student. She's good at science, so maybe she can help you." },
      { speaker: "Tu", it: "E lo studente? Dov'è?", en: "And the male student? Where is he?" },
      { speaker: "Amico", it: "Alla stampante. Sta stampando un file, ma meno male che non è occupato.", en: "At the printer. He's printing a file, but at least he's not busy." }
    ]
  },
  "counter_a2": {
    zoneId: "counter",
    zoneName: "The Café Counter",
    level: "a2",
    exchanges: [
      { speaker: "Cliente", it: "Buongiorno. Vorrei un caffè e un cornetto.", en: "Good morning. I would like a coffee and a cornetto." },
      { speaker: "Barista", it: "Caffè normale o doppio?", en: "Normal coffee or double?" },
      { speaker: "Cliente", it: "Normale, per favore.", en: "Normal, please." },
      { speaker: "Barista", it: "E la tazza? Vuoi la tazza grande?", en: "And the cup? Do you want the large cup?" },
      { speaker: "Cliente", it: "Sì, quella.", en: "Yes, that one." },
      { speaker: "Barista", it: "Ecco il tuo caffè e il cornetto. Buon appetito!", en: "Here is your coffee and cornetto. Enjoy!" }
    ]
  },
  "counter_b1": {
    zoneId: "counter",
    zoneName: "The Café Counter",
    level: "b1",
    exchanges: [
      { speaker: "Cliente", it: "Ciao, ho già ordinato un caffè e un cornetto, ma non so se ho scelto la tazza giusta.", en: "Hi, I already ordered a coffee and a cornetto, but I don't know if I chose the right cup." },
      { speaker: "Barista", it: "Ah, ma non ti preoccupare, ho già visto. Ti ho messo la tazza grande, per fortuna.", en: "Oh, don't worry, I already saw. I put the large cup for you, luckily." },
      { speaker: "Cliente", it: "Ah, grazie! Però non so se è la tazza che volevo.", en: "Oh, thank you! But I don't know if it's the cup I wanted." },
      { speaker: "Barista", it: "Spero che ti piaccia, comunque. Se non ti piace, puoi sempre chiedere la piccola.", en: "I hope you like it, anyway. If you don't like it, you can always ask for the small one." },
      { speaker: "Cliente", it: "Sì, ma non credo che la piccola mi serva. Mica sono tanto goloso.", en: "Yes, but I don't think the small one will do. I'm not that greedy." },
      { speaker: "Barista", it: "Ecco, ho sistemato. Buon appetito, e se hai bisogno di altro, chiamami.", en: "Here we go, I've sorted it. Enjoy, and if you need anything else, call me." }
    ]
  },
  "creatures_a2": {
    zoneId: "creatures",
    zoneName: "Mythical Creatures",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Hai visto il drago nel gioco? È bellissimo!", en: "You saw the dragon in the game? It's beautiful!" },
      { speaker: "Amico", it: "Sì, ma preferisco l'elfo. È più veloce.", en: "Yes, but I prefer the elf. It's faster." },
      { speaker: "Tu", it: "Io amo le fate. Sono molto misteriose.", en: "I love fairies. They're very mysterious." },
      { speaker: "Amico", it: "E la strega? Non mi piace tanto.", en: "And the witch? I don't like her much." },
      { speaker: "Tu", it: "Vuoi giocare con il nano o con il mago?", en: "Do you want to play with the dwarf or the wizard?" },
      { speaker: "Amico", it: "Con il mago. Ha più magie!", en: "With the wizard. He has more magic!" }
    ]
  },
  "creatures_b1": {
    zoneId: "creatures",
    zoneName: "Mythical Creatures",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Hai visto il drago nel gioco? È bellissimo!", en: "You saw the dragon in the game? It's beautiful!" },
      { speaker: "Amico", it: "Sì, ma preferisco l'elfo. È più veloce.", en: "Yes, but I prefer the elf. It's faster." },
      { speaker: "Tu", it: "Io amo le fate. Sono molto misteriose.", en: "I love fairies. They're very mysterious." },
      { speaker: "Amico", it: "E la strega? Non mi piace tanto.", en: "And the witch? I don't like her much." },
      { speaker: "Tu", it: "Vuoi giocare con il nano o con il mago?", en: "Do you want to play with the dwarf or the wizard?" },
      { speaker: "Amico", it: "Con il mago. Ha più magie!", en: "With the wizard. He has more magic!" },
      { speaker: "Tu", it: "Hai visto il drago nel gioco? È bellissimo!", en: "You saw the dragon in the game? It's beautiful!" },
      { speaker: "Amico", it: "Sì, ma preferisco l'elfo. È più veloce.", en: "Yes, but I prefer the elf. It's faster." },
      { speaker: "Tu", it: "Io amo le fate. Sono molto misteriose.", en: "I love fairies. They're very mysterious." },
      { speaker: "Amico", it: "E la strega? Non mi piace tanto. Penso che sia un po' spaventosa.", en: "And the witch? I don't like her much. I think she's a bit scary." },
      { speaker: "Tu", it: "Vuoi giocare con il nano o con il mago?", en: "Do you want to play with the dwarf or the wizard?" },
      { speaker: "Amico", it: "Con il mago. Ha più magie, quindi è più divertente!", en: "With the wizard. He has more magic, so it's more fun!" }
    ]
  },
  "daily-actions_a2": {
    zoneId: "daily-actions",
    zoneName: "Daily Actions",
    level: "a2",
    exchanges: [
      { speaker: "Amico", it: "A che ora ti sei alzato?", en: "What time did you get up?" },
      { speaker: "Tu", it: "Alle sette. Mi sono lavato e vestito in cinque minuti.", en: "At seven. I washed and got dressed in five minutes." },
      { speaker: "Amico", it: "Non ti sei nemmeno pettinato, si vede.", en: "You didn't even comb your hair, it shows." },
      { speaker: "Tu", it: "Dai, ho aperto gli occhi e sono uscito. Quasi mi sono riaddormentato.", en: "Come on, I opened my eyes and left. I almost fell back asleep." },
      { speaker: "Amico", it: "Stasera almeno chiudi la porta — hai lasciato tutto aperto.", en: "Tonight at least close the door — you left everything open." }
    ]
  },
  "daily-actions_b1": {
    zoneId: "daily-actions",
    zoneName: "Daily Actions",
    level: "b1",
    exchanges: [
      { speaker: "Amico", it: "A che ora ti sei alzato ieri?", en: "What time did you get up yesterday?" },
      { speaker: "Tu", it: "Alle sette e mezzo. Mi sono svegliato, ho fatto la doccia e mi sono vestito in cinque minuti.", en: "At seven thirty. I woke up, had a shower and got dressed in five minutes." },
      { speaker: "Amico", it: "Non ti sei nemmeno pettinato, ma figurati — lo sai che non ci tengo tanto.", en: "You didn’t even comb your hair, but come on — you know I don’t care that much." },
      { speaker: "Tu", it: "Sì, ma ho visto che ti sei svegliato anche tu tardi. Però non hai lasciato la porta aperta.", en: "Yes, but I saw that you also woke up late. However, you didn’t leave the door open." },
      { speaker: "Amico", it: "Ah, meno male! Spero che tu non ti sia dimenticato di chiudere il gas.", en: "Oh, good! I hope you didn’t forget to turn off the gas." },
      { speaker: "Tu", it: "No, ho controllato. Comunque, non ti preoccupare — mica ho lasciato la casa in disordine.", en: "No, I checked. Anyway, don’t worry — I didn’t leave the house in a mess." }
    ]
  },
  "desk_a2": {
    zoneId: "desk",
    zoneName: "Study Desk",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Hai una penna? La mia non scrive.", en: "Do you have a pen? Mine doesn't write." },
      { speaker: "Amico", it: "Prendi questa matita. E la gomma.", en: "Take this pencil. And the eraser." },
      { speaker: "Tu", it: "Grazie. Dov'è il righello? Devo fare una linea.", en: "Thanks. Where's the ruler? I need to draw a line." },
      { speaker: "Amico", it: "Sulla scrivania, vicino al quaderno.", en: "On the desk, next to the notebook." },
      { speaker: "Tu", it: "Che lezione abbiamo dopo?", en: "What lesson do we have next?" },
      { speaker: "Amico", it: "Italiano. Guarda il calendario — oggi è pagina 45.", en: "Italian. Look at the calendar — today is page 45." }
    ]
  },
  "desk_b1": {
    zoneId: "desk",
    zoneName: "Study Desk",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Hai una penna? La mia non scrive più.", en: "Do you have a pen? Mine doesn’t write anymore." },
      { speaker: "Amico", it: "Prendi questa matita. E anche la gomma, se ti serve.", en: "Take this pencil. And the eraser too, if you need it." },
      { speaker: "Tu", it: "Grazie. Dove è il righello? Devo disegnare una linea.", en: "Thanks. Where is the ruler? I need to draw a line." },
      { speaker: "Amico", it: "È sulla scrivania, vicino al quaderno. Però non so se è tuo.", en: "It’s on the desk, next to the notebook. But I don’t know if it’s yours." },
      { speaker: "Tu", it: "Che lezione abbiamo dopo? Spero che non sia troppo difficile.", en: "What lesson do we have next? I hope it’s not too difficult." },
      { speaker: "Amico", it: "Italiano. Guarda il calendario — oggi è pagina 45. Figurati, non è mica facile.", en: "Italian. Look at the calendar — today is page 45. Don’t worry, it’s not that easy." }
    ]
  },
  "dessert_a2": {
    zoneId: "dessert",
    zoneName: "Dessert Station",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Prendo un cornetto. Tu?", en: "I'll take a croissant. You?" },
      { speaker: "Amico", it: "Un biscotto al miele. E un gelato.", en: "A honey cookie. And an ice cream." },
      { speaker: "Tu", it: "Che gusto? Io cioccolata.", en: "What flavor? I'll have chocolate." },
      { speaker: "Amico", it: "Anche io. Ma prima una fetta di torta?", en: "Me too. But first a slice of cake?" },
      { speaker: "Tu", it: "Se dividiamo, sì.", en: "If we share, yes." },
      { speaker: "Amico", it: "Affare fatto.", en: "Deal." }
    ]
  },
  "dessert_b1": {
    zoneId: "dessert",
    zoneName: "Dessert Station",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Prendo un cornetto. Tu?", en: "I'll take a croissant. You?" },
      { speaker: "Amico", it: "Un biscotto al miele, e un gelato. Però prima vorrei una fetta di torta.", en: "A honey cookie and an ice cream. But first, I'd like a slice of cake." },
      { speaker: "Tu", it: "Che gusto? Io cioccolata.", en: "What flavor? I'll go with chocolate." },
      { speaker: "Amico", it: "Anche io. Spero che ci siano ancora le fragole.", en: "Me too. I hope there are still strawberries left." },
      { speaker: "Tu", it: "Se dividiamo, sì. Comunque, non c’è problema se non c’è.", en: "If we share, sure. Anyway, no problem if there isn’t." },
      { speaker: "Amico", it: "Affare fatto. Figurati, lo pago io.", en: "Deal. Don’t worry, I’ll pay." }
    ]
  },
  "drawer_a2": {
    zoneId: "drawer",
    zoneName: "Accessory Drawer",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Hai visto le mie calze? Non le trovo.", en: "Did you see my socks? I can't find them." },
      { speaker: "Amico", it: "Nel cassetto degli accessori. Ecco l'orologio.", en: "In the accessory drawer. Here's the watch." },
      { speaker: "Tu", it: "Grazie. E gli occhiali? Mi servono per leggere.", en: "Thanks. And the glasses? I need them to read." },
      { speaker: "Amico", it: "Sopra la cintura. Prendi anche la cravatta?", en: "On top of the belt. Do you also want the tie?" },
      { speaker: "Tu", it: "No. Ma la sciarpa e i guanti — fa freddo stasera.", en: "No. But the scarf and gloves — it's cold tonight." },
      { speaker: "Amico", it: "Allora prendi anche la borsa.", en: "Then take the bag too." }
    ]
  },
  "drawer_b1": {
    zoneId: "drawer",
    zoneName: "Accessory Drawer",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Hai visto le mie calze? Non le trovo.", en: "Did you see my socks? I can't find them." },
      { speaker: "Amico", it: "Le ho viste nel cassetto degli accessori. Ecco l'orologio.", en: "I saw them in the accessory drawer. Here's the watch." },
      { speaker: "Tu", it: "Grazie. Ma dove sono gli occhiali? Mi servono per leggere.", en: "Thanks. But where are the glasses? I need them to read." },
      { speaker: "Amico", it: "Sono sopra la cintura. Prendi anche la cravatta?", en: "They're on top of the belt. Do you want the tie too?" },
      { speaker: "Tu", it: "No, ma la sciarpa e i guanti — fa freddo stasera.", en: "No, but the scarf and gloves — it's cold tonight." },
      { speaker: "Amico", it: "Allora prendi anche la borsa. Figurati, non c'è problema.", en: "Then take the bag too. Don't worry, no problem." }
    ]
  },
  "entrance-hall_a2": {
    zoneId: "entrance-hall",
    zoneName: "Foyer",
    level: "a2",
    exchanges: [
      { speaker: "Sorella", it: "Mamma e papà sono in foyer. Aspettano il nonno.", en: "Mom and dad are in the foyer. They're waiting for grandpa." },
      { speaker: "Tu", it: "E la nonna?", en: "And grandma?" },
      { speaker: "Sorella", it: "In cucina con zia. Zio è arrivato con i suoi figli.", en: "In the kitchen with aunt. Uncle arrived with his kids." },
      { speaker: "Tu", it: "Quindi mio cugino è qui? Vado a salutarlo.", en: "So my cousin is here? I'll go say hi." },
      { speaker: "Sorella", it: "Aspetta — anche la nonna vuole vedere te prima.", en: "Wait — grandma wants to see you first." }
    ]
  },
  "entrance-hall_b1": {
    zoneId: "entrance-hall",
    zoneName: "Foyer",
    level: "b1",
    exchanges: [
      { speaker: "Sorella", it: "Mamma e papà sono già nel foyer. Stanno aspettando il nonno.", en: "Mom and dad are already in the foyer. They're waiting for grandpa." },
      { speaker: "Tu", it: "E la nonna? Non è con loro?", en: "And grandma? Isn't she with them?" },
      { speaker: "Sorella", it: "No, è in cucina con zia. Zio è arrivato poco fa con i suoi figli.", en: "No, she's in the kitchen with aunt. Uncle arrived a little while ago with his kids." },
      { speaker: "Tu", it: "Quindi mio cugino è qui? Vado a salutarlo subito.", en: "So my cousin is here? I'll go say hi right away." },
      { speaker: "Sorella", it: "Aspetta un momento — penso che la nonna voglia vederti prima.", en: "Wait a moment — I think grandma wants to see you first." },
      { speaker: "Tu", it: "Figurati, non c'è problema. Vado a salutarla, ma non ci metto molto.", en: "No problem, I'll go say hi to her, but I won't take long." }
    ]
  },
  "feelings_a2": {
    zoneId: "feelings",
    zoneName: "Feelings",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Come ti senti dopo quel discorso?", en: "How do you feel after that speech?" },
      { speaker: "Amico", it: "Un po' di tristezza. E tu?", en: "A bit of sadness. And you?" },
      { speaker: "Tu", it: "Io... molto paura. Non so cosa fare.", en: "I... a lot of fear. I don't know what to do." },
      { speaker: "Amico", it: "Io provo amore per te. Non ti lascio solo.", en: "I feel love for you. I won't leave you alone." },
      { speaker: "Tu", it: "Grazie. Vorrei un po' di gioia, adesso.", en: "Thank you. I would like a little joy now." },
      { speaker: "Amico", it: "Sì, andiamo a prendere un gelato. Meglio di odio e rabbia.", en: "Yes, let's go get ice cream. Better than hate and anger." }
    ]
  },
  "feelings_b1": {
    zoneId: "feelings",
    zoneName: "Feelings",
    level: "b1",
    exchanges: [
      { speaker: "Persona", it: "Come ti senti dopo quel discorso?", en: "How do you feel after that speech?" },
      { speaker: "Persona", it: "Un po' triste. E tu?", en: "A bit sad. And you?" },
      { speaker: "Persona", it: "Io ho paura. Non so cosa fare.", en: "I'm scared. I don't know what to do." },
      { speaker: "Persona", it: "Io provo amore per te. Non ti lascio mai solo.", en: "I feel love for you. I'll never leave you alone." },
      { speaker: "Persona", it: "Grazie. Vorrei un po' di gioia, adesso.", en: "Thank you. I'd like a little joy now." },
      { speaker: "Persona", it: "Sì, andiamo a prendere un gelato. Meglio del rancore.", en: "Yes, let's go get ice cream. Better than resentment." }
    ]
  },
  "fruits_a2": {
    zoneId: "fruits",
    zoneName: "Fruit Orchard",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Prendiamo delle mele? Ne vedo tante.", en: "Let's take some apples? I see a lot." },
      { speaker: "Amico", it: "Sì, ma anche delle pesche. Hai visto quelle lì?", en: "Yes, but also some peaches. Have you seen those over there?" },
      { speaker: "Tu", it: "Un po' di fragole, per favore.", en: "A little strawberries, please." },
      { speaker: "Amico", it: "Certo. E un limone, per il succo?", en: "Of course. And a lemon, for the juice?" },
      { speaker: "Tu", it: "Sì, molto volentieri.", en: "Yes, very gladly." },
      { speaker: "Amico", it: "E un'arancia, per i bambini.", en: "And an orange, for the kids." }
    ]
  },
  "fruits_b1": {
    zoneId: "fruits",
    zoneName: "Fruit Orchard",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Prendiamo delle mele? Ne ho viste tante.", en: "Let's take some apples? I've seen a lot." },
      { speaker: "Amico", it: "Sì, ma anche delle pesche. Le hai viste quelle là?", en: "Yes, but also some peaches. Have you seen those over there?" },
      { speaker: "Tu", it: "Un po' di fragole, per favore.", en: "A little strawberries, please." },
      { speaker: "Amico", it: "Certo. E un limone, per il succo? Spero che non te la sia dimenticata.", en: "Of course. And a lemon, for the juice? I hope you didn't forget about it." },
      { speaker: "Tu", it: "Sì, molto volentieri. Comunque, pensavo che ce ne fossero anche delle ciliegie.", en: "Yes, very gladly. By the way, I thought there were also some cherries." },
      { speaker: "Amico", it: "Figurati, ne ho viste anche io. Meno male che le hai menzionate.", en: "You're welcome, I've seen some too. Good thing you mentioned them." }
    ]
  },
  "furniture_a2": {
    zoneId: "furniture",
    zoneName: "Furniture",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Questo tavolo è troppo grande. Lo spostiamo?", en: "" },
      { speaker: "Amico", it: "Sì, ma dove mettiamo la sedia?", en: "" },
      { speaker: "Tu", it: "Lì, vicino alla lampada. E il quadro, lo togliamo?", en: "" },
      { speaker: "Amico", it: "No, lasciamolo. Poi mettiamo il tappeto.", en: "" },
      { speaker: "Tu", it: "Bene. E le tende? Sono troppo pesanti.", en: "" },
      { speaker: "Amico", it: "Sì, ma il specchio va bene così.", en: "---" },
      { speaker: "You", it: "This table is too big. Should we move it?", en: "" },
      { speaker: "Friend", it: "Yes, but where do we put the chair?", en: "" },
      { speaker: "You", it: "There, next to the lamp. And the picture, do we take it down?", en: "" },
      { speaker: "Friend", it: "No, leave it. Then we put the rug.", en: "" },
      { speaker: "You", it: "Good. And the curtains? They're too heavy.", en: "" },
      { speaker: "Friend", it: "Yes, but the mirror is fine like this.", en: "" }
    ]
  },
  "furniture_b1": {
    zoneId: "furniture",
    zoneName: "Furniture",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Questo tavolo è troppo grande. Lo spostiamo?", en: "" },
      { speaker: "You", it: "This table is too big. Should we move it?", en: "" },
      { speaker: "Amico", it: "Sì, ma dove mettiamo la sedia? Non ho visto un posto libero.", en: "" },
      { speaker: "Friend", it: "Yes, but where do we put the chair? I didn’t see a free spot.", en: "" },
      { speaker: "Tu", it: "Lì, vicino alla lampada. E il quadro, lo togliamo?", en: "" },
      { speaker: "You", it: "There, next to the lamp. And the picture, do we take it down?", en: "" },
      { speaker: "Amico", it: "No, lasciamolo. Poi mettiamo il tappeto, così sembra più caldo.", en: "" },
      { speaker: "Friend", it: "No, leave it. Then we put the rug, it’ll look warmer.", en: "" },
      { speaker: "Tu", it: "Bene. E le tende? Sono troppo pesanti.", en: "" },
      { speaker: "You", it: "Good. And the curtains? They’re too heavy.", en: "" },
      { speaker: "Amico", it: "Sì, ma penso che il specchio vada bene così. Comunque, non è un problema.", en: "" },
      { speaker: "Friend", it: "Yes, but I think the mirror is fine like this. Anyway, it’s not a problem.", en: "" }
    ]
  },
  "garden_a2": {
    zoneId: "garden",
    zoneName: "Garden",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Che bel fiore! È una rosa?", en: "What a beautiful flower! Is it a rose?" },
      { speaker: "Amico", it: "Sì. L'ho piantata vicino all'albero.", en: "Yes. I planted it near the tree." },
      { speaker: "Tu", it: "Le foglie sono verdi. E l'erba è alta.", en: "The leaves are green. And the grass is tall." },
      { speaker: "Amico", it: "Devo tagliarla. Ma prima raccolgo questo ramo caduto.", en: "I need to cut it. But first I'll pick up this fallen branch." },
      { speaker: "Tu", it: "Le radici dell'albero sono fuori terra. È normale?", en: "The tree's roots are above ground. Is that normal?" },
      { speaker: "Amico", it: "No, forse è malato.", en: "No, maybe it's sick." }
    ]
  },
  "garden_b1": {
    zoneId: "garden",
    zoneName: "Garden",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Che bel fiore! È una rosa?", en: "What a beautiful flower! Is it a rose?" },
      { speaker: "Amico", it: "Sì, l’ho piantata vicino all’albero. Però non è cresciuta molto.", en: "Yes, I planted it near the tree. But it hasn’t grown much." },
      { speaker: "Tu", it: "Le foglie sono verdi. E l’erba è alta. Devo tagliarla?", en: "The leaves are green. And the grass is tall. Should I cut it?" },
      { speaker: "Amico", it: "Sì, ma prima raccogliamo questo ramo caduto. Figurati, non è niente.", en: "Yes, but first let’s pick up this fallen branch. Don’t worry, it’s nothing." },
      { speaker: "Tu", it: "Le radici dell’albero sono fuori terra. È normale?", en: "The tree’s roots are above ground. Is that normal?" },
      { speaker: "Amico", it: "No, penso che sia malato. Spero che non si propaghi.", en: "No, I think it’s sick. I hope it doesn’t spread." }
    ]
  },
  "hand-tools_a2": {
    zoneId: "hand-tools",
    zoneName: "Hand Tools",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Hai il martello? Mi serve subito.", en: "Do you have the hammer? I need it right away." },
      { speaker: "Amico", it: "Sì, qua. Ma hai il cacciavite?", en: "Yes, here. But do you have the screwdriver?" },
      { speaker: "Tu", it: "Sì, e anche la pinza. Quante viti hai?", en: "Yes, and also the pliers. How many screws do you have?" },
      { speaker: "Amico", it: "Un po', ma non molto. Usa quelle là.", en: "A few, but not many. Use those there." },
      { speaker: "Tu", it: "Bene. E il trapano? Lo usiamo?", en: "Good. And the drill? Are we using it?" },
      { speaker: "Amico", it: "Sì, per i buchi grossi. Prendi la sega anche?", en: "Yes, for the big holes. Do you also take the saw?" }
    ]
  },
  "hand-tools_b1": {
    zoneId: "hand-tools",
    zoneName: "Hand Tools",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Hai il martello? Me lo serve subito.", en: "" },
      { speaker: "You", it: "Do you have the hammer? I need it right away.", en: "" },
      { speaker: "Amico", it: "Sì, qua. Però hai il cacciavite?", en: "" },
      { speaker: "Friend", it: "Yes, here. But do you have the screwdriver?", en: "" },
      { speaker: "Tu", it: "Sì, e anche la pinza. Quante viti hai?", en: "" },
      { speaker: "You", it: "Yes, and also the pliers. How many screws do you have?", en: "" },
      { speaker: "Amico", it: "Un po', ma non molto. Usa quelle là.", en: "" },
      { speaker: "Friend", it: "A few, but not many. Use those ones there.", en: "" },
      { speaker: "Tu", it: "Bene. E il trapano? Lo usiamo?", en: "" },
      { speaker: "You", it: "Good. And the drill? Are we using it?", en: "" },
      { speaker: "Amico", it: "Sì, per i buchi grossi. Prendi la sega anche?", en: "" },
      { speaker: "Friend", it: "Yes, for the big holes. Do you need the saw too?", en: "" }
    ]
  },
  "jewelry_a2": {
    zoneId: "jewelry",
    zoneName: "Jewelry Box",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Mi presti la collana? È per la festa.", en: "Can you lend me the necklace? It's for the party." },
      { speaker: "Amico", it: "Certo. Prendi anche gli orecchini?", en: "Sure. Do you also want the earrings?" },
      { speaker: "Tu", it: "Sì. E l'anello? Quello d'argento.", en: "Yes. And the ring? The silver one." },
      { speaker: "Amico", it: "Ecco. Il bracciale è rotto, non prenderlo.", en: "Here. The bracelet is broken, don't take it." },
      { speaker: "Tu", it: "Va bene. Il mio orologio fa abbinamento con la collana.", en: "Alright. My watch matches the necklace." }
    ]
  },
  "jewelry_b1": {
    zoneId: "jewelry",
    zoneName: "Jewelry Box",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Mi presti la collana? È per la festa.", en: "Can you lend me the necklace? It's for the party." },
      { speaker: "Amico", it: "Certo. Perché non prendi anche gli orecchini?", en: "Sure. Why don’t you take the earrings too?" },
      { speaker: "Tu", it: "Sì, ma ho visto che c’è anche un anello. Quello d’argento.", en: "Yes, but I saw there’s also a ring. The silver one." },
      { speaker: "Amico", it: "Ecco. Purtroppo il bracciale è rotto, quindi non prenderlo.", en: "Here. Unfortunately, the bracelet is broken, so don’t take it." },
      { speaker: "Tu", it: "Va bene. Comunque, il mio orologio fa abbinamento con la collana.", en: "Alright. Anyway, my watch matches the necklace." },
      { speaker: "Amico", it: "Figurati! Spero che ti piaccia tutto.", en: "You’re welcome! I hope you like everything." }
    ]
  },
  "kitchen_a2": {
    zoneId: "kitchen",
    zoneName: "Kitchen",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Vuoi delle uova?", en: "Do you want some eggs?" },
      { speaker: "Amico", it: "Sì, due. E un po' di formaggio dentro.", en: "Yes, two. And some cheese inside." },
      { speaker: "Tu", it: "Metto anche un po' di latte e burro.", en: "I'll also put a little milk and butter." },
      { speaker: "Amico", it: "La carne la facciamo dopo? Ho del pollo.", en: "Should we make the meat after? I have some chicken." },
      { speaker: "Tu", it: "Meglio il pesce. È più leggero.", en: "Better fish. It's lighter." },
      { speaker: "Amico", it: "Va bene. Poi yogurt con panna per dessert?", en: "Alright. Then yogurt with cream for dessert?" },
      { speaker: "Tu", it: "Perfetto.", en: "Perfect." }
    ]
  },
  "kitchen_b1": {
    zoneId: "kitchen",
    zoneName: "Kitchen",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Vuoi delle uova?", en: "Do you want some eggs?" },
      { speaker: "Amico", it: "Sì, due. E un po’ di formaggio dentro, per favore.", en: "Yes, two. And a bit of cheese inside, please." },
      { speaker: "Tu", it: "Metto anche un po’ di latte e burro. Poi, però, dobbiamo decidere se fare la carne o il pesce.", en: "I’ll also put a little milk and butter. But then we need to decide whether to do the meat or the fish." },
      { speaker: "Amico", it: "Spero che venga il pesce. È più leggero, comunque.", en: "I hope the fish comes. It’s lighter, anyway." },
      { speaker: "Tu", it: "Va bene. Poi, figurati, yogurt con panna per dessert?", en: "Alright. And by the way, yogurt with cream for dessert?" },
      { speaker: "Amico", it: "Perfetto. Meno male che hai pensato al dessert!", en: "Perfect. Good thing you thought of dessert!" }
    ]
  },
  "library_a2": {
    zoneId: "library",
    zoneName: "Knowledge Hub",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Cerchi un libro?", en: "Looking for a book?" },
      { speaker: "Amico", it: "Sì, un romanzo. Hai letto questa biografia?", en: "Yes, a novel. Did you read this biography?" },
      { speaker: "Tu", it: "No, preferisco la poesia. O i racconti brevi.", en: "No, I prefer poetry. Or short stories." },
      { speaker: "Amico", it: "C'è un manuale interessante in biblioteca. Vuoi che lo prendo?", en: "There's an interesting manual in the library. Want me to get it?" },
      { speaker: "Tu", it: "Prima controllo il giornale. Poi vedo.", en: "First I'll check the newspaper. Then I'll see." },
      { speaker: "Amico", it: "Ok. Io prendo anche un dizionario.", en: "Ok. I'll also get a dictionary." }
    ]
  },
  "library_b1": {
    zoneId: "library",
    zoneName: "Knowledge Hub",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Hai visto un libro da leggere?", en: "Have you seen a book to read?" },
      { speaker: "Amico", it: "Sì, ma non ho ancora letto questa biografia. Tu, invece, hai già finito il romanzo?", en: "Yes, but I haven't read this biography yet. What about you? Have you already finished the novel?" },
      { speaker: "Tu", it: "No, preferisco la poesia. O i racconti brevi. Però non so se ce ne siano.", en: "No, I prefer poetry. Or short stories. But I don't know if there are any." },
      { speaker: "Amico", it: "C'è un manuale interessante in biblioteca. Vuoi che lo prendo?", en: "There's an interesting manual in the library. Want me to get it?" },
      { speaker: "Tu", it: "Prima controllo il giornale. Poi vedo. Comunque, figurati, non c'è problema.", en: "First I'll check the newspaper. Then I'll see. Anyway, don't worry, it's no problem." },
      { speaker: "Amico", it: "Ok. Io prendo anche un dizionario. Spero che non sia troppo vecchio.", en: "Ok. I'll also get a dictionary. I hope it's not too old." }
    ]
  },
  "mammals_a2": {
    zoneId: "mammals",
    zoneName: "Mammal Zone",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Guarda quel cane! È molto bello.", en: "Look at that dog! It's very handsome." },
      { speaker: "Amico", it: "Sì, ma preferisco il gatto là vicino. È più tranquillo.", en: "Yes, but I prefer the cat over there. It's calmer." },
      { speaker: "Tu", it: "Quante pecore ci sono in questo recinto?", en: "How many sheep are in this enclosure?" },
      { speaker: "Amico", it: "Un po', ma non tante. C'è anche una capra.", en: "A few, but not many. There's also a goat." },
      { speaker: "Tu", it: "Vuoi andare a vedere il cavallo?", en: "Do you want to go see the horse?" },
      { speaker: "Amico", it: "Sì, ma prima passiamo vicino alla mucca e al maiale.", en: "Yes, but first let's go near the cow and the pig." }
    ]
  },
  "mammals_b1": {
    zoneId: "mammals",
    zoneName: "Mammal Zone",
    level: "b1",
    exchanges: [
      { speaker: "Persona", it: "Guarda quel cane! È molto bello.", en: "Look at that dog! It's really handsome." },
      { speaker: "Persona", it: "Sì, però preferisco il gatto là vicino. È più tranquillo.", en: "Yes, but I prefer the cat over there. It's calmer." },
      { speaker: "Persona", it: "Quante pecore ci sono in questo recinto?", en: "How many sheep are in this enclosure?" },
      { speaker: "Persona", it: "Un po', ma non tante. C'è anche una capra.", en: "A few, but not many. There's also a goat." },
      { speaker: "Persona", it: "Vuoi andare a vedere il cavallo?", en: "Do you want to go see the horse?" },
      { speaker: "Persona", it: "Sì, però prima passiamo vicino alla mucca e al maiale.", en: "Yes, but let's go past the cow and the pig first." }
    ]
  },
  "mirror_a2": {
    zoneId: "mirror",
    zoneName: "The Mirror",
    level: "a2",
    exchanges: [
      { speaker: "Amico", it: "Guardami allo specchio. Sono troppo grasso?", en: "Look at me in the mirror. Am I too fat?" },
      { speaker: "Tu", it: "No, sei magro. Ma sembri vecchio oggi.", en: "No, you're thin. But you look old today." },
      { speaker: "Amico", it: "Grazie. E tu sei alto e bello, come sempre.", en: "Thanks. And you're tall and handsome, as always." },
      { speaker: "Tu", it: "Smetterla. Sono basso e brutto, lo so.", en: "Stop it. I'm short and ugly, I know." },
      { speaker: "Amico", it: "Non dire sciocchezze. Sei forte dentro.", en: "Don't talk nonsense. You're strong inside." }
    ]
  },
  "mirror_b1": {
    zoneId: "mirror",
    zoneName: "The Mirror",
    level: "b1",
    exchanges: [
      { speaker: "Amico", it: "Guardami allo specchio. Sono troppo grasso?", en: "Look at me in the mirror. Am I too fat?" },
      { speaker: "Tu", it: "No, sei magro. Però oggi sembri un po' stanco.", en: "No, you're thin. But you look a bit tired today." },
      { speaker: "Amico", it: "Grazie. E tu sei alto e bello, come sempre.", en: "Thanks. And you're tall and handsome, as always." },
      { speaker: "Tu", it: "Figurati. Sono basso e non sono bello, lo so.", en: "Don't mention it. I'm short and not handsome, I know." },
      { speaker: "Amico", it: "Non dire sciocchezze. Spero che tu abbia fiducia in te stesso.", en: "Don't talk nonsense. I hope you have confidence in yourself." },
      { speaker: "Tu", it: "Grazie. Comunque, non ti preoccupare, io non sono mai troppo grasso.", en: "Thanks. Anyway, don't worry, I'm never too fat." }
    ]
  },
  "movement_a2": {
    zoneId: "movement",
    zoneName: "Movement Zone",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Vuoi correre o camminare?", en: "" },
      { speaker: "Amico", it: "Correre! Ma non troppo veloce, eh?", en: "" },
      { speaker: "Tu", it: "D'accordo. Poi possiamo saltare un po'?", en: "" },
      { speaker: "Amico", it: "Sì, ma non troppo in alto, o rischiamo di cadere.", en: "" },
      { speaker: "Tu", it: "Hai paura? Io invece vorrei nuotare.", en: "" },
      { speaker: "Amico", it: "Non oggi. Forse domani. Per ora spingiamo il carrello.", en: "---" },
      { speaker: "You", it: "Do you want to run or walk?", en: "" },
      { speaker: "Friend", it: "Run! But not too fast, okay?", en: "" },
      { speaker: "You", it: "Okay. Then can we jump a little?", en: "" },
      { speaker: "Friend", it: "Yes, but not too high, or we might fall.", en: "" },
      { speaker: "You", it: "Are you scared? I would rather swim.", en: "" },
      { speaker: "Friend", it: "Not today. Maybe tomorrow. For now, let's push the cart.", en: "" }
    ]
  },
  "movement_b1": {
    zoneId: "movement",
    zoneName: "Movement Zone",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Allora, vuoi correre o camminare?", en: "" },
      { speaker: "You", it: "So, do you want to run or walk?", en: "" },
      { speaker: "Amico", it: "Correre, ma non troppo veloce, però.", en: "" },
      { speaker: "Friend", it: "Run, but not too fast, though.", en: "" },
      { speaker: "Tu", it: "D’accordo. Poi, magari possiamo saltare un po’?", en: "" },
      { speaker: "You", it: "Okay. Then, maybe we can jump a little?", en: "" },
      { speaker: "Amico", it: "Sì, ma non troppo in alto, altrimenti rischiamo di cadere.", en: "" },
      { speaker: "Friend", it: "Yes, but not too high, or we might fall.", en: "" },
      { speaker: "Tu", it: "Hai paura? Io invece vorrei nuotare.", en: "" },
      { speaker: "You", it: "Are you scared? I, on the other hand, would like to swim.", en: "" },
      { speaker: "Amico", it: "Non oggi. Forse domani. Per ora, spingiamo il carrello, figurati.", en: "" },
      { speaker: "Friend", it: "Not today. Maybe tomorrow. For now, let's push the cart, come on.", en: "" }
    ]
  },
  "nightstand_a2": {
    zoneId: "nightstand",
    zoneName: "Nightstand",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Che ore sono? Non trovo il mio orologio.", en: "What time is it? I can't find my watch." },
      { speaker: "Amico", it: "Guarda la sveglia sul comodino. Sono le 7.", en: "Look at the alarm clock on the nightstand. It's 7." },
      { speaker: "Tu", it: "Troppo presto. Accendo la lampada per leggere un po'.", en: "Too early. I'll turn on the lamp to read a bit." },
      { speaker: "Amico", it: "Prendi il libro. E gli occhiali, se non vedi bene.", en: "Take the book. And your glasses, if you can't see well." },
      { speaker: "Tu", it: "Grazie. Tu dormi ancora?", en: "Thanks. You still sleeping?" },
      { speaker: "Amico", it: "Sì, spenga la lampada quando hai finito.", en: "Yes, turn off the lamp when you're done." }
    ]
  },
  "nightstand_b1": {
    zoneId: "nightstand",
    zoneName: "Nightstand",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Che ore sono? Non ho trovato il mio orologio.", en: "What time is it? I haven't found my watch." },
      { speaker: "Amico", it: "Guarda la sveglia sul comodino. Sono le 7.", en: "Look at the alarm clock on the nightstand. It's 7." },
      { speaker: "Tu", it: "Troppo presto. Accendo la lampada per leggere un po', ma non voglio disturbarti.", en: "Too early. I'll turn on the lamp to read a bit, but I don't want to disturb you." },
      { speaker: "Amico", it: "Prendi il libro. E gli occhiali, se non vedi bene. Figurati, non ti disturbo.", en: "Take the book. And your glasses, if you can't see well. Don't worry, I'm not disturbing you." },
      { speaker: "Tu", it: "Grazie. Tu dormi ancora?", en: "Thanks. Are you still sleeping?" },
      { speaker: "Amico", it: "Sì, ma spero che tu spegni la lampada quando hai finito.", en: "Yes, but I hope you turn off the lamp when you're done." }
    ]
  },
  "number-plate_a2": {
    zoneId: "number-plate",
    zoneName: "House Number",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Qual è il numero civico?", en: "What's the house number?" },
      { speaker: "Amico", it: "Numero cinque. O forse sei? No, aspetta — otto.", en: "Number five. Or maybe six? No, wait — eight." },
      { speaker: "Tu", it: "Non è otto. Guarda lì — c'è scritto 'dieci'.", en: "It's not eight. Look there — it says 'ten'." },
      { speaker: "Amico", it: "Hai ragione. Dieci. E il tuo è undici?", en: "You're right. Ten. And yours is eleven?" },
      { speaker: "Tu", it: "No, dodici. Due porte più avanti.", en: "No, twelve. Two doors further." }
    ]
  },
  "number-plate_b1": {
    zoneId: "number-plate",
    zoneName: "House Number",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Qual è il numero civico?", en: "" },
      { speaker: "Amico", it: "Cinque, però non ne sono sicuro. Forse sei?", en: "" },
      { speaker: "Tu", it: "No, aspetta — lì c'è scritto 'otto'.", en: "" },
      { speaker: "Amico", it: "Ah, hai ragione. Ma il tuo non è dieci?", en: "" },
      { speaker: "Tu", it: "No, è dodici. Due porte più avanti.", en: "---" },
      { speaker: "You", it: "What is the house number?", en: "" },
      { speaker: "Friend", it: "Five, but I'm not sure. Maybe six?", en: "" },
      { speaker: "You", it: "No, wait — there it says 'eight'.", en: "" },
      { speaker: "Friend", it: "Oh, you're right. But isn't yours ten?", en: "" },
      { speaker: "You", it: "No, it's twelve. Two doors ahead.", en: "" }
    ]
  },
  "paintings_a2": {
    zoneId: "paintings",
    zoneName: "The Paintings",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Guarda questo quadro! Che colore hai preferito?", en: "" },
      { speaker: "Amico", it: "Io il blu. Ma ti piace il rosso?", en: "" },
      { speaker: "Tu", it: "Sì, ma è troppo forte. C'è una scultura in mostra?", en: "" },
      { speaker: "Amico", it: "Sì, lì in fondo. Ma non mi piace la luce là.", en: "" },
      { speaker: "Tu", it: "Dove è l'artista? Lo vedo?", en: "" },
      { speaker: "Amico", it: "No, non c'è. Ma c'è un pennello appeso. Strano.", en: "" },
      { speaker: "Tu", it: "Sì, ma non è un quadro. Vuoi andare a vedere la mostra?", en: "" },
      { speaker: "Amico", it: "Sì, un po' di luce mi piace di più.", en: "" }
    ]
  },
  "paintings_b1": {
    zoneId: "paintings",
    zoneName: "The Paintings",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Guarda questo quadro! Hai già visto qualcosa che ti è piaciuto?", en: "Look at this painting! Have you already seen something you liked?" },
      { speaker: "Amico", it: "Spero che ti piaccia il blu. Però io preferisco il rosso. Ti piace?", en: "I hope you like the blue. But I prefer the red. Do you like it?" },
      { speaker: "Tu", it: "Sì, ma è un po’ troppo forte. C’è una scultura in mostra?", en: "Yes, but it’s a bit too strong. Is there a sculpture on display?" },
      { speaker: "Amico", it: "Sì, lì in fondo. Però non mi piace la luce là. Meno male che c’è un’altra stanza.", en: "Yes, over there at the back. But I don’t like the light there. At least there’s another room." },
      { speaker: "Tu", it: "Dove è l’artista? Lo hai visto?", en: "Where is the artist? Have you seen him?" },
      { speaker: "Amico", it: "No, non c’è. Ma c’è un pennello appeso. Strano, no?", en: "No, he’s not there. But there’s a brush hanging. Strange, isn’t it?" }
    ]
  },
  "pantry_a2": {
    zoneId: "pantry",
    zoneName: "The Pantry",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Faccio la pasta. Mi passi il sale?", en: "I'm making pasta. Can you pass me the salt?" },
      { speaker: "Amico", it: "Ecco. Vuoi anche l'olio?", en: "Here. Do you want the oil too?" },
      { speaker: "Tu", it: "Sì, un giro. E il pane? Dov'è?", en: "Yes, a swirl. And the bread? Where is it?" },
      { speaker: "Amico", it: "Nella dispensa, vicino al riso.", en: "In the pantry, next to the rice." },
      { speaker: "Tu", it: "Prendi anche la farina? Forse faccio dolci dopo.", en: "Can you also get the flour? Maybe I'll make desserts later." },
      { speaker: "Amico", it: "Zucchero e caffè?", en: "Sugar and coffee?" },
      { speaker: "Tu", it: "Sì, grazie.", en: "Yes, thanks." }
    ]
  },
  "pantry_b1": {
    zoneId: "pantry",
    zoneName: "The Pantry",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Sto facendo la pasta. Mi passi il sale?", en: "I'm making pasta. Can you pass me the salt?" },
      { speaker: "Amico", it: "Ecco. Vuoi anche l'olio?", en: "Here. Do you want the oil too?" },
      { speaker: "Tu", it: "Sì, un giro. E il pane? Dove è?", en: "Yes, a swirl. And the bread? Where is it?" },
      { speaker: "Amico", it: "È nella dispensa, vicino al riso.", en: "It's in the pantry, next to the rice." },
      { speaker: "Tu", it: "Prendi anche la farina? Magari faccio dei dolci dopo.", en: "Can you get the flour too? Maybe I'll make some desserts later." },
      { speaker: "Amico", it: "Vuoi anche zucchero e caffè?", en: "Do you want sugar and coffee too?" },
      { speaker: "Tu", it: "Sì, grazie. Figurati, ma non c'è il latte?", en: "Yes, thanks. Don't mention it, but is there any milk?" },
      { speaker: "Amico", it: "Meno male che te lo chiedi. Non c'è, ma posso andare a comprarlo.", en: "Good thing you asked. There isn't any, but I can go buy some." }
    ]
  },
  "path_a2": {
    zoneId: "path",
    zoneName: "The Path",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Prendiamo il sentiero o la strada principale?", en: "Should we take the path or the main road?" },
      { speaker: "Amico", it: "Il sentiero. Passiamo sopra il ponte di pietra.", en: "The path. We'll go over the stone bridge." },
      { speaker: "Tu", it: "Ma c'è un cancello chiuso più avanti.", en: "But there's a closed gate further ahead." },
      { speaker: "Amico", it: "Possiamo saltare la pietra grande. O girare sulla terra.", en: "We can jump over the big rock. Or turn onto the dirt." },
      { speaker: "Tu", it: "Meglio girare. Non voglio cadere.", en: "Better to turn. I don't want to fall." }
    ]
  },
  "path_b1": {
    zoneId: "path",
    zoneName: "The Path",
    level: "b1",
    exchanges: [
      { speaker: "Persona", it: "Prendiamo il sentiero o la strada principale?", en: "Shall we take the path or the main road?" },
      { speaker: "Persona", it: "Il sentiero, però c’è un cancello chiuso più avanti.", en: "The path, but there's a closed gate ahead." },
      { speaker: "Persona", it: "Allora giriamo sulla terra. Non voglio rischiare.", en: "Then we take the dirt path. I don’t want to take any risks." },
      { speaker: "Persona", it: "Sì, meglio girare. Ho visto la pietra grande, è pericolosa.", en: "Yes, better to go around. I saw the big stone, it's dangerous." },
      { speaker: "Persona", it: "Comunque, possiamo saltare il cancello, se non vuoi girare.", en: "Anyway, we could jump over the gate if you don’t want to go around." }
    ]
  },
  "platform_a2": {
    zoneId: "platform",
    zoneName: "Platform",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "A che binario parte il treno?", en: "On which platform does the train leave?" },
      { speaker: "Amico", it: "Binario 3. Ma c'è un ritardo di 20 minuti.", en: "Platform 3. But there's a 20-minute delay." },
      { speaker: "Tu", it: "Speriamo che l'arrivo non sia in ritardo.", en: "Let's hope the arrival isn't late." },
      { speaker: "Amico", it: "Il vagone ristorante è aperto. Andiamo a prendere un caffè.", en: "The dining car is open. Let's go get a coffee." },
      { speaker: "Tu", it: "Bene. Quando il treno arriva, saliamo.", en: "Good. When the train arrives, we'll board." }
    ]
  },
  "platform_b1": {
    zoneId: "platform",
    zoneName: "Platform",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "A che binario parte il treno?", en: "On which platform does the train leave?" },
      { speaker: "Amico", it: "È partito dal binario 3, ma c’è stato un ritardo di 20 minuti.", en: "It left from platform 3, but there was a 20-minute delay." },
      { speaker: "Tu", it: "Spero che non ci sia un ritardo anche all’arrivo.", en: "I hope there isn’t a delay at the arrival either." },
      { speaker: "Amico", it: "Per fortuna, il vagone ristorante è aperto. Andiamo a prendere un caffè?", en: "Fortunately, the dining car is open. Let’s go get a coffee?" },
      { speaker: "Tu", it: "Figurati, meno male che è aperto. Ne ho proprio bisogno.", en: "Sure, good thing it’s open. I really need one." },
      { speaker: "Amico", it: "Quando il treno arriva, andiamo su. Comunque, non dimenticare il biglietto.", en: "When the train arrives, we’ll go on board. Anyway, don’t forget your ticket." }
    ]
  },
  "produce_a2": {
    zoneId: "produce",
    zoneName: "Fresh Produce",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Prendo una mela e una pera. Tu che prendi?", en: "I take an apple and a pear. What are you taking?" },
      { speaker: "Amico", it: "Un po' di arance e una banana. E tu, carote o lattuga?", en: "A few oranges and a banana. And you, carrots or lettuce?" },
      { speaker: "Tu", it: "Un po' di carote. E tu, pomodori?", en: "A little bit of carrots. And you, tomatoes?" },
      { speaker: "Amico", it: "Sì, molti pomodori. Ne vuoi anche tu?", en: "Yes, many tomatoes. Do you want some too?" },
      { speaker: "Tu", it: "Un paio, grazie.", en: "A couple, thanks." }
    ]
  },
  "produce_b1": {
    zoneId: "produce",
    zoneName: "Fresh Produce",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Ho preso una mela e una pera. Tu che hai preso?", en: "I took an apple and a pear. What did you take?" },
      { speaker: "Amico", it: "Un po’ di arance e una banana. E tu, carote o lattuga?", en: "A few oranges and a banana. And you, carrots or lettuce?" },
      { speaker: "Tu", it: "Un po’ di carote. Però non so se ne voglia anche tu.", en: "A little bit of carrots. But I don’t know if you want any too." },
      { speaker: "Amico", it: "Spero che ne voglia anche tu. Ho preso tanti pomodori.", en: "I hope you want some too. I took a lot of tomatoes." },
      { speaker: "Tu", it: "Ah, io ne prendo un paio. Comunque, hai visto i meloni?", en: "Oh, I’ll take a couple. By the way, have you seen the melons?" },
      { speaker: "Amico", it: "Figurati, non ne ho visti. Meno male che hai preso le carote!", en: "Don’t worry, I haven’t seen any. Good thing you took the carrots!" }
    ]
  },
  "shoes_a2": {
    zoneId: "shoes",
    zoneName: "Shoe Rack",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Devo uscire. Dove sono le mie scarpe?", en: "I need to go out. Where are my shoes?" },
      { speaker: "Amico", it: "Sullo scaffale. Ma oggi piove — meglio gli stivali.", en: "On the rack. But it's raining today — better the boots." },
      { speaker: "Tu", it: "Hai ragione. E i sandali?", en: "You're right. And the sandals?" },
      { speaker: "Amico", it: "Per l'estate. Ora prendi le pantofole se resti.", en: "For summer. Now take the slippers if you're staying." },
      { speaker: "Tu", it: "No, esco. Dov'è il paio di scarpette nuove?", en: "No, I'm going out. Where's the new pair of little shoes?" },
      { speaker: "Amico", it: "Nell'armadio, vicino agli stivali.", en: "In the closet, near the boots." }
    ]
  },
  "shoes_b1": {
    zoneId: "shoes",
    zoneName: "Shoe Rack",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Devo uscire. Dove sono le mie scarpe?", en: "I need to go out. Where are my shoes?" },
      { speaker: "Amico", it: "Sono sullo scaffale. Però oggi piove — meglio prendere gli stivali.", en: "They're on the rack. But it's raining today — better to take the boots." },
      { speaker: "Tu", it: "Hai ragione. E i sandali?", en: "You're right. And the sandals?" },
      { speaker: "Amico", it: "Sono per l’estate. Comunque, se resti, prendi le pantofole.", en: "They're for summer. Anyway, if you're staying, take the slippers." },
      { speaker: "Tu", it: "No, esco. Dov’è il paio di scarpette nuove?", en: "No, I'm going out. Where's the new pair of shoes?" },
      { speaker: "Amico", it: "Le ho viste nell’armadio, vicino agli stivali. Spero che non siano finite nel water.", en: "I saw them in the closet, near the boots. I hope they didn’t end up in the toilet." }
    ]
  },
  "shopping_a2": {
    zoneId: "shopping",
    zoneName: "Gift Shop",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Cerchi un regalo? Hai visto quelle magliette?", en: "" },
      { speaker: "Amico", it: "Sì, ma preferisco un libro. Hai visto i libri?", en: "" },
      { speaker: "Tu", it: "Ecco, li vedi? E quelle cartoline, non sono belle?", en: "" },
      { speaker: "Amico", it: "Sì, sono molto belle. Ma io voglio un souvenir per mio figlio.", en: "" },
      { speaker: "Tu", it: "C’è un sacco di souvenir qui. Quanti ne vuoi?", en: "" },
      { speaker: "Amico", it: "Un po’ bastano. Prendo quelle con il disegno dell’isola.", en: "---" },
      { speaker: "You", it: "Looking for a gift? Have you seen those T-shirts?", en: "" },
      { speaker: "Friend", it: "Yes, but I prefer a book. Have you seen the books?", en: "" },
      { speaker: "You", it: "Here they are. And those postcards, aren’t they nice?", en: "" },
      { speaker: "Friend", it: "Yes, they’re very nice. But I want a souvenir for my son.", en: "" },
      { speaker: "You", it: "There are lots of souvenirs here. How many do you want?", en: "" },
      { speaker: "Friend", it: "A few will do. I’ll take those with the island drawing.", en: "" }
    ]
  },
  "shopping_b1": {
    zoneId: "shopping",
    zoneName: "Gift Shop",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Cerchi un regalo? Hai visto quelle magliette?", en: "" },
      { speaker: "You", it: "Looking for a gift? Have you seen those T-shirts?", en: "" },
      { speaker: "Amico", it: "Sì, ma preferisco un libro. Ho già visto i libri?", en: "" },
      { speaker: "Friend", it: "Yes, but I prefer a book. Have I already seen the books?", en: "" },
      { speaker: "Tu", it: "Ecco, li vedi? E quelle cartoline, non sono belle?", en: "" },
      { speaker: "You", it: "Here they are. And those postcards, aren’t they nice?", en: "" },
      { speaker: "Amico", it: "Sì, sono molto belle. Pero io voglio un souvenir per mio figlio.", en: "" },
      { speaker: "Friend", it: "Yes, they’re very nice. But I want a souvenir for my son.", en: "" },
      { speaker: "Tu", it: "C’è un sacco di souvenir qui. Quanti ne vuoi?", en: "" },
      { speaker: "You", it: "There are lots of souvenirs here. How many do you want?", en: "" },
      { speaker: "Amico", it: "Un po’ bastano. Prendo quelle con il disegno dell’isola.", en: "" },
      { speaker: "Friend", it: "A few will do. I’ll take those with the island drawing.", en: "" }
    ]
  },
  "shower_a2": {
    zoneId: "shower",
    zoneName: "The Shower",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Faccio la doccia. C'è ancora shampoo?", en: "I'm taking a shower. Is there still shampoo?" },
      { speaker: "Amico", it: "Sì, e c'è anche il bagnoschiuma. L'asciugamano è dietro la porta.", en: "Yes, and there's body wash too. The towel is behind the door." },
      { speaker: "Tu", it: "L'acqua è calda?", en: "Is the water hot?" },
      { speaker: "Amico", it: "Abbastanza. Lasciala scorrere un po' prima.", en: "Enough. Let it run a bit first." },
      { speaker: "Tu", it: "Ok, esco tra dieci minuti.", en: "Ok, I'll be out in ten minutes." }
    ]
  },
  "shower_b1": {
    zoneId: "shower",
    zoneName: "The Shower",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Sto facendo la doccia. Hai ancora dello shampoo?", en: "I'm taking a shower. Do you still have any shampoo?" },
      { speaker: "Amico", it: "Sì, e c’è anche il bagnoschiuma. Però l’asciugamano è dietro la porta.", en: "Yes, and there's body wash too. But the towel is behind the door." },
      { speaker: "Tu", it: "L’acqua è calda?", en: "Is the water hot?" },
      { speaker: "Amico", it: "Abbastanza. Spero che non ti bruci, ma lasciala scorrere un po’ prima.", en: "Enough. I hope it doesn’t burn you, but let it run a bit first." },
      { speaker: "Tu", it: "Ok, esco tra dieci minuti.", en: "Okay, I’ll be out in ten minutes." },
      { speaker: "Amico", it: "Figurati, non c’è problema. Comunque, ti aspetto qui.", en: "Don’t worry, no problem. Anyway, I’ll wait for you here." }
    ]
  },
  "sky_a2": {
    zoneId: "sky",
    zoneName: "The Sky",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Hai visto che cielo oggi?", en: "Have you seen the sky today?" },
      { speaker: "Amico", it: "Bellissimo. Non c'è una nuvola.", en: "Beautiful. Not a cloud in sight." },
      { speaker: "Tu", it: "E il vento è sparito. Ci andiamo fuori?", en: "And the wind is gone. Shall we go outside?" },
      { speaker: "Amico", it: "Sì, ma porta l'ombrello — domani dicono pioggia.", en: "Yes, but bring an umbrella — they say rain tomorrow." },
      { speaker: "Tu", it: "Per oggi non ci penso. Andiamo.", en: "Not worrying about today. Let's go." }
    ]
  },
  "sky_b1": {
    zoneId: "sky",
    zoneName: "The Sky",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Hai visto che cielo oggi?", en: "Have you seen the sky today?" },
      { speaker: "Amico", it: "Bellissimo. Non c'è nemmeno una nuvola.", en: "Beautiful. Not even a cloud." },
      { speaker: "Tu", it: "E il vento è sparito. Andiamo fuori?", en: "And the wind has gone. Shall we go outside?" },
      { speaker: "Amico", it: "Sì, ma portiamo l'ombrello — dicono che domani pioverà.", en: "Yes, but let's take an umbrella — they say it will rain tomorrow." },
      { speaker: "Tu", it: "Figurati, non ci penso. Oggi è un giorno perfetto.", en: "Forget it, I'm not thinking about it. Today is a perfect day." },
      { speaker: "Amico", it: "Spero che non cambi, ma comunque andiamo.", en: "I hope it doesn't change, but anyway, let's go." }
    ]
  },
  "sky-weather_a2": {
    zoneId: "sky-weather",
    zoneName: "Sky View",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Guarda quel sole! È così forte oggi.", en: "Look at that sun! It's so strong today." },
      { speaker: "Amico", it: "Sì, ma c'è anche una nuvola. Pensi che pioverà?", en: "Yes, but there's also a cloud. Do you think it will rain?" },
      { speaker: "Tu", it: "Non so. C'è tanto vento. Mi sembra che sta per arrivare qualcosa.", en: "I don't know. There's a lot of wind. It seems like something is coming." },
      { speaker: "Amico", it: "Hai visto quell'arcobaleno? È bellissimo.", en: "Did you see that rainbow? It's beautiful." },
      { speaker: "Tu", it: "Sì, ma dove è il fulmine? Non lo vedo.", en: "Yes, but where is the lightning? I don't see it." },
      { speaker: "Amico", it: "Forse è passato. Vuoi andare dentro? Pioverà un po'.", en: "Maybe it's gone. Do you want to go inside? It will rain a bit." }
    ]
  },
  "sky-weather_b1": {
    zoneId: "sky-weather",
    zoneName: "Sky View",
    level: "b1",
    exchanges: [
      { speaker: "Persona", it: "Guarda quel sole! È veramente forte oggi.", en: "Look at that sun! It's really strong today." },
      { speaker: "Amico", it: "Sì, però c'è anche una nuvola. Penso che potrebbe piovere.", en: "Yes, but there's also a cloud. I think it might rain." },
      { speaker: "Tu", it: "Non so. C'è tanto vento. Mi sembra che stia per arrivare qualcosa.", en: "I don't know. There's a lot of wind. It seems like something is coming." },
      { speaker: "Amico", it: "Hai visto quell'arcobaleno? È bellissimo.", en: "Did you see that rainbow? It's beautiful." },
      { speaker: "Tu", it: "Sì, però dove è il fulmine? Non lo vedo.", en: "Yes, but where is the lightning? I don't see it." },
      { speaker: "Amico", it: "Forse è passato. Vuoi andare dentro? Spero che non piova troppo.", en: "Maybe it's gone. Do you want to go inside? I hope it doesn't rain too much." }
    ]
  },
  "sofa_a2": {
    zoneId: "sofa",
    zoneName: "The Sofa",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Sono stanco. Siediamo sul divano?", en: "I'm tired. Let's sit on the sofa?" },
      { speaker: "Amico", it: "Sì, ma preferisco la poltrona. È più comoda.", en: "Yes, but I prefer the armchair. It's more comfortable." },
      { speaker: "Tu", it: "Vuoi un cuscino?", en: "Do you want a cushion?" },
      { speaker: "Amico", it: "Sì, uno. E la coperta? È qui sul tavolino.", en: "Yes, one. And the blanket? It's here on the table." },
      { speaker: "Tu", it: "Poco male. Mettiamola qui.", en: "No problem. Let's put it here." }
    ]
  },
  "sofa_b1": {
    zoneId: "sofa",
    zoneName: "The Sofa",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Sono stanco. Siediamo sul divano?", en: "I'm tired. Let's sit on the sofa?" },
      { speaker: "Amico", it: "Sì, ma preferisco la poltrona. È più comoda. Però, se vuoi, possiamo anche rimanere qui.", en: "Yes, but I prefer the armchair. It's more comfortable. However, if you want, we can stay here too." },
      { speaker: "Tu", it: "Vuoi un cuscino?", en: "Do you want a cushion?" },
      { speaker: "Amico", it: "Sì, uno. E la coperta? È qui sul tavolino.", en: "Yes, one. And the blanket? It's here on the table." },
      { speaker: "Tu", it: "Meno male che l’hai vista. Mettiamola qui.", en: "Good thing you saw it. Let's put it here." },
      { speaker: "Amico", it: "Figurati. Comunque, pensavo che fosse in camera.", en: "You're welcome. Anyway, I thought it was in the bedroom." }
    ]
  },
  "states_a2": {
    zoneId: "states",
    zoneName: "Mental States",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Hai visto come ha parlato di me? Ho tanto orgoglio.", en: "" },
      { speaker: "Amico", it: "Sì, ma non ti ha detto niente di male. Però... hai paura?", en: "" },
      { speaker: "Tu", it: "Un po' di ansia, sì. E tu? Hai fiducia in lui?", en: "" },
      { speaker: "Amico", it: "Un po', ma non tanto. Mi ha sorpreso.", en: "" },
      { speaker: "Tu", it: "E non ti vergogni di averlo detto?", en: "" },
      { speaker: "Amico", it: "No, non mi vergogno. È la verità.", en: "" }
    ]
  },
  "states_b1": {
    zoneId: "states",
    zoneName: "Mental States",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Hai visto come ha parlato di me? Ho tanto orgoglio, ma mi ha anche un po' ferito.", en: "Have you seen how he spoke about me? I have a lot of pride, but he also hurt me a bit." },
      { speaker: "Amico", it: "Sì, ma non ti ha detto niente di male. Però... hai paura?", en: "Yes, but he didn’t say anything bad. However... are you scared?" },
      { speaker: "Tu", it: "Un po' di ansia, sì. E tu? Hai fiducia in lui?", en: "A bit of anxiety, yes. And you? Do you have trust in him?" },
      { speaker: "Amico", it: "Un po', ma non tanto. Mi ha sorpreso. Penso che sia un po' ingiusto.", en: "A little, but not much. He surprised me. I think he’s a bit unfair." },
      { speaker: "Tu", it: "E non ti vergogni di averlo detto?", en: "And aren’t you ashamed of having said it?" },
      { speaker: "Amico", it: "No, non mi vergogno. È la verità. Figurati se non lo dico!", en: "No, I’m not ashamed. It’s the truth. Imagine if I didn’t say it!" }
    ]
  },
  "storms_a2": {
    zoneId: "storms",
    zoneName: "Storm Center",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Guarda quel temporale! Che brutto tuono!", en: "" },
      { speaker: "Amico", it: "Sì, e quel fulmine! Ti sembra che piova?", en: "" },
      { speaker: "Tu", it: "Sì, un po'. E c'è anche la nebbia.", en: "" },
      { speaker: "Amico", it: "Pensi che venga la grandine?", en: "" },
      { speaker: "Tu", it: "Non so. Preferisco stare qui, al coperto.", en: "" },
      { speaker: "Amico", it: "Anch'io. Non usciamo finché non passa.", en: "---" },
      { speaker: "You", it: "Look at that storm! What a loud thunder!", en: "" },
      { speaker: "Friend", it: "Yes, and that lightning! Do you think it's raining?", en: "" },
      { speaker: "You", it: "Yes, a little. And there's also fog.", en: "" },
      { speaker: "Friend", it: "Do you think there will be hail?", en: "" },
      { speaker: "You", it: "I don't know. I prefer to stay here, under cover.", en: "" },
      { speaker: "Friend", it: "Me too. We won't go out until it passes.", en: "" }
    ]
  },
  "storms_b1": {
    zoneId: "storms",
    zoneName: "Storm Center",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Guarda quel temporale! Che tuono terribile!", en: "**Look at that storm! What a terrible thunder!**" },
      { speaker: "Amico", it: "Sì, e quel fulmine! Non credo che piova, però...", en: "**Yes, and that lightning! I don’t think it’s raining, though...**" },
      { speaker: "Tu", it: "In realtà, sì. Piove un po', e c'è anche la nebbia.", en: "**Actually, yes. It’s raining a little, and there’s also fog.**" },
      { speaker: "Amico", it: "Pensi che venga la grandine? Non vorrei che ci fosse.", en: "**Do you think there will be hail? I wouldn’t want that to happen.**" },
      { speaker: "Tu", it: "Non so. Preferisco stare qui, al coperto.", en: "**I don’t know. I prefer to stay here, under cover.**" },
      { speaker: "Amico", it: "Anch'io. Figurati se usciamo finché non passa.", en: "**Me too. You can imagine that we won’t go out until it passes.**" }
    ]
  },
  "stove_a2": {
    zoneId: "stove",
    zoneName: "The Stove",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Accendi il fornello? Devo scaldare la padella.", en: "Turn on the stove? I need to heat the pan." },
      { speaker: "Amico", it: "Fatto. La pentola per la pasta?", en: "Done. The pot for the pasta?" },
      { speaker: "Tu", it: "Mettila sull'altro fornello. Poi prendi il tagliere.", en: "Put it on the other burner. Then get the cutting board." },
      { speaker: "Amico", it: "Devo accendere anche il forno?", en: "Should I turn on the oven too?" },
      { speaker: "Tu", it: "No, aspetta. Prima scola la pasta con il colino.", en: "No, wait. First drain the pasta with the strainer." },
      { speaker: "Amico", it: "Ok. Dopo la cena spengo tutto.", en: "Ok. After dinner I'll turn everything off." }
    ]
  },
  "stove_b1": {
    zoneId: "stove",
    zoneName: "The Stove",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Hai già acceso il fornello? Devo scaldare la padella.", en: "Have you already turned on the burner? I need to heat the pan." },
      { speaker: "Amico", it: "Sì, l'ho appena acceso. Ma hai già messo la pentola per la pasta?", en: "Yes, I just turned it on. But have you already put the pot for the pasta on?" },
      { speaker: "Tu", it: "No, mettila sull'altro fornello. Poi prendi il tagliere, per favore.", en: "No, put it on the other burner. Then get the cutting board, please." },
      { speaker: "Amico", it: "Figurati. Ma devo anche accendere il forno?", en: "Sure thing. But should I also turn on the oven?" },
      { speaker: "Tu", it: "No, aspetta. Prima scola la pasta con il colino, così non si brucia.", en: "No, wait. First drain the pasta with the strainer, otherwise it will burn." },
      { speaker: "Amico", it: "Ok, ho capito. Dopo la cena spegnerò tutto, comunque.", en: "Ok, I got it. Anyway, I'll turn everything off after dinner." }
    ]
  },
  "street_a2": {
    zoneId: "street",
    zoneName: "Street Exit",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Dov'è l'uscita per il centro?", en: "Where's the exit to the city center?" },
      { speaker: "Amico", it: "Dopo il semaforo. Gira a destra all'incrocio.", en: "After the traffic light. Turn right at the intersection." },
      { speaker: "Tu", it: "Quale direzione? C'è un cartello che dice 'centro'?", en: "Which direction? Is there a sign that says 'center'?" },
      { speaker: "Amico", it: "Sì, segui quella strada. L'entrata è dall'altra parte.", en: "Yes, follow that road. The entrance is on the other side." },
      { speaker: "Tu", it: "Ok. Allora vado dritto.", en: "Ok. Then I'll go straight." }
    ]
  },
  "street_b1": {
    zoneId: "street",
    zoneName: "Street Exit",
    level: "b1",
    exchanges: [
      { speaker: "Persona", it: "Dov'è l'uscita per il centro?", en: "Where is the exit to the city center?" },
      { speaker: "Persona", it: "Dopo il semaforo. Gira a destra all'incrocio.", en: "After the traffic light. Turn right at the intersection." },
      { speaker: "Persona", it: "L'ho vista quella strada? C'è un cartello?", en: "Have you seen that road? Is there a sign?" },
      { speaker: "Persona", it: "Sì, ma non c'è il cartello. Segui comunque quella strada.", en: "Yes, but there's no sign. Follow that road anyway." },
      { speaker: "Persona", it: "Ok, quindi vado dritto.", en: "Okay, so I go straight." }
    ]
  },
  "supernatural_a2": {
    zoneId: "supernatural",
    zoneName: "Supernatural",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Hai paura dei fantasmi?", en: "Do you scare easily?" },
      { speaker: "Amico", it: "Un po', ma solo se sono vecchi. I fantasmi moderni non mi spaventano.", en: "A little, but only if they're old. Modern ghosts don't scare me." },
      { speaker: "Tu", it: "E le streghe? Ti piacciono?", en: "What about witches? Do you like them?" },
      { speaker: "Amico", it: "No, non mi piacciono. Preferisco i vampiri.", en: "No, I don't like them. I prefer vampires." },
      { speaker: "Tu", it: "Ah, i vampiri? Molto romantici.", en: "Ah, vampires? Very romantic." },
      { speaker: "Amico", it: "Sì, ma non mi piacciono tanto. Preferisco i zombie.", en: "Yes, but I don't like them that much. I prefer zombies." }
    ]
  },
  "supernatural_b1": {
    zoneId: "supernatural",
    zoneName: "Supernatural",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Hai paura dei fantasmi?", en: "Do you get scared by ghosts?" },
      { speaker: "Amico", it: "Un po', ma solo se sono vecchi. I fantasmi moderni non mi spaventano.", en: "A little, but only if they're old. Modern ghosts don't scare me." },
      { speaker: "Tu", it: "E le streghe? Ti piacciono?", en: "What about witches? Do you like them?" },
      { speaker: "Amico", it: "No, non mi piacciono. Preferisco i vampiri.", en: "No, I don't like them. I prefer vampires." },
      { speaker: "Tu", it: "Ah, i vampiri? Molto romantici.", en: "Ah, vampires? Very romantic." },
      { speaker: "Amico", it: "Sì, ma non mi piacciono tanto. Preferisco i zombie.", en: "Yes, but I don't like them that much. I prefer zombies." },
      { speaker: "Tu", it: "I zombie? Mica ti spaventano?", en: "Zombies? They don’t scare you?" },
      { speaker: "Amico", it: "No, figurati. Sono più spaventosi i fantasmi, ma i zombie... sono divertenti.", en: "No, come on. Ghosts are scarier, but zombies... they’re fun." }
    ]
  },
  "table_a2": {
    zoneId: "table",
    zoneName: "The Table",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Posso avere un piatto?", en: "Can I have a plate?" },
      { speaker: "Amico", it: "Ecco. Vuoi anche un bicchiere?", en: "Here. Do you also want a glass?" },
      { speaker: "Tu", it: "Sì, per il vino. Ma bevi tu birra?", en: "Yes, for the wine. But are you drinking beer?" },
      { speaker: "Amico", it: "No, succo d'arancia. Ecco la tazza.", en: "No, orange juice. Here's the cup." },
      { speaker: "Tu", it: "Grazie. Dov'è il tovagliolo?", en: "Thanks. Where's the napkin?" },
      { speaker: "Amico", it: "Nel cassetto. Ne prendo uno anche per me.", en: "In the drawer. I'll get one for myself too." }
    ]
  },
  "table_b1": {
    zoneId: "table",
    zoneName: "The Table",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Posso avere un piatto?", en: "Can I have a plate?" },
      { speaker: "Amico", it: "Ecco. Vuoi anche un bicchiere?", en: "Here. Do you want a glass too?" },
      { speaker: "Tu", it: "Sì, per il vino. Però bevi tu birra?", en: "Yes, for the wine. But are you drinking beer?" },
      { speaker: "Amico", it: "No, preferisco il succo d'arancia. Ecco la tazza.", en: "No, I prefer orange juice. Here's the cup." },
      { speaker: "Tu", it: "Grazie. Dov'è il tovagliolo?", en: "Thanks. Where is the napkin?" },
      { speaker: "Amico", it: "È nel cassetto. Ne prendo uno anche per me.", en: "It's in the drawer. I'll get one for myself too." }
    ]
  },
  "table-cafe_a2": {
    zoneId: "table-cafe",
    zoneName: "Café Table",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Questo tavolo è libero? Hai visto la sedia?", en: "Is this table free? Did you see the chair?" },
      { speaker: "Amico", it: "Sì, ma c’è un po’ di gente in attesa. Vuoi il menu?", en: "Yes, but there are a few people waiting. Do you want the menu?" },
      { speaker: "Tu", it: "Sì, grazie. E il bicchiere d’acqua?", en: "Yes, thank you. And the glass of water?" },
      { speaker: "Amico", it: "Arriva subito. Hai già scelto il piatto?", en: "It’s coming right away. Have you already chosen the dish?" },
      { speaker: "Tu", it: "No, ancora non so. Posso guardare il menu un po’ di più?", en: "No, not yet. Can I look at the menu a little more?" },
      { speaker: "Amico", it: "Certo. Ecco il tovagliolo. Il conto arriverà dopo.", en: "Of course. Here’s the napkin. The bill will come later." }
    ]
  },
  "table-cafe_b1": {
    zoneId: "table-cafe",
    zoneName: "Café Table",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Questo tavolo è libero? Hai visto la sedia?", en: "Is this table free? Did you see the chair?" },
      { speaker: "Amico", it: "Sì, ma c’è un po’ di gente in attesa. Vuoi il menu?", en: "Yes, but there are a few people waiting. Do you want the menu?" },
      { speaker: "Tu", it: "Sì, grazie. E il bicchiere d’acqua?", en: "Yes, thank you. And the glass of water?" },
      { speaker: "Amico", it: "Arriva subito. Hai già scelto il piatto?", en: "It’s coming right away. Have you already chosen the dish?" },
      { speaker: "Tu", it: "No, ancora non so. Posso guardare il menu un po’ di più?", en: "No, not yet. Can I look at the menu a little more?" },
      { speaker: "Amico", it: "Certo. Ecco il tovagliolo. Il conto arriverà dopo.", en: "Of course. Here’s the napkin. The bill will come later." },
      { speaker: "Tu", it: "Questo tavolo è libero? Hai visto la sedia?", en: "Is this table free? Did you see the chair?" },
      { speaker: "Amico", it: "Sì, ma c’è un po’ di gente in attesa. Ti porto subito il menu.", en: "Yes, but there are a few people waiting. I’ll bring you the menu right away." },
      { speaker: "Tu", it: "Grazie. E il bicchiere d’acqua?", en: "Thank you. And the glass of water?" },
      { speaker: "Amico", it: "Arriva subito. Però, hai già scelto il piatto?", en: "It’s coming right away. But have you already chosen the dish?" },
      { speaker: "Tu", it: "No, non ancora. Posso guardare il menu un po’ di più?", en: "No, not yet. Can I look at the menu a little more?" },
      { speaker: "Amico", it: "Certo, non c’è problema. Ecco il tovagliolo. Il conto arriverà dopo che avrai finito.", en: "Sure, no problem. Here’s the napkin. The bill will come after you’ve finished." }
    ]
  },
  "transport_a2": {
    zoneId: "transport",
    zoneName: "Transport Hub",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Hai comprato il biglietto per Roma?", en: "Did you buy the ticket to Rome?" },
      { speaker: "Amico", it: "Sì. Ecco l'orario: partenza alle 10, arrivo alle 14.", en: "Yes. Here's the schedule: departure at 10, arrival at 2 PM." },
      { speaker: "Tu", it: "La valigia è pronta. Prendo anche lo zaino.", en: "The suitcase is ready. I'll also take the backpack." },
      { speaker: "Amico", it: "Io ho l'abbonamento, quindi non pago.", en: "I have a subscription, so I don't pay." },
      { speaker: "Tu", it: "Allora ci vediamo alla partenza.", en: "Then see you at departure." }
    ]
  },
  "transport_b1": {
    zoneId: "transport",
    zoneName: "Transport Hub",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Hai già comprato il biglietto per Roma?", en: "Have you already bought the ticket to Rome?" },
      { speaker: "Amico", it: "Sì, l'ho comprato ieri. Però non so se sia ancora valido.", en: "Yes, I bought it yesterday. But I don't know if it's still valid." },
      { speaker: "Tu", it: "La valigia è pronta. Prendo anche lo zaino.", en: "The suitcase is ready. I'll also take the backpack." },
      { speaker: "Amico", it: "Io ho l’abbonamento, quindi non pago. Figurati, non c’è problema.", en: "I have a subscription, so I don’t pay. Don’t worry, there’s no problem." },
      { speaker: "Tu", it: "Allora ci vediamo alla partenza. Spero che non ci siano ritardi.", en: "Then see you at departure. I hope there are no delays." },
      { speaker: "Amico", it: "Sì, meno male che hai pensato al biglietto. Comunque, ti aspetto lì.", en: "Yes, good thing you thought about the ticket. Anyway, I’ll wait for you there." }
    ]
  },
  "tv_a2": {
    zoneId: "tv",
    zoneName: "The TV",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Vuoi accendere la televisione?", en: "Do you want to turn on the TV?" },
      { speaker: "Amico", it: "Sì, ma prima mettiamo un po' di musica.", en: "Yes, but first let's play some music." },
      { speaker: "Tu", it: "C'è un film interessante in programma. Lo guardiamo?", en: "There's an interesting movie on. Do we watch it?" },
      { speaker: "Amico", it: "No, preferisco la musica. Troppo volume in quel film.", en: "No, I prefer music. Too much volume in that movie." },
      { speaker: "Tu", it: "Allora accendo la musica. Tu regoli il volume?", en: "Then I'll turn on the music. You adjust the volume?" },
      { speaker: "Amico", it: "Sì, lo faccio. Vuoi che metta il telecomando sullo schermo?", en: "Yes, I'll do it. Do you want me to put the remote on the screen?" }
    ]
  },
  "tv_b1": {
    zoneId: "tv",
    zoneName: "The TV",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Vuoi accendere la televisione?", en: "Do you want to turn on the TV?" },
      { speaker: "Amico", it: "Sì, però prima mettiamo un po' di musica.", en: "Yes, but first let's play some music." },
      { speaker: "Tu", it: "C'è un film interessante in programma. Lo guardiamo?", en: "There's an interesting movie on. Should we watch it?" },
      { speaker: "Amico", it: "No, preferisco la musica. Troppo volume in quel film.", en: "No, I prefer music. That movie is too loud." },
      { speaker: "Tu", it: "Allora accendo la musica. Tu regoli il volume?", en: "Then I'll turn on the music. You adjust the volume?" },
      { speaker: "Amico", it: "Sì, lo faccio. Vuoi che metta il telecomando sullo schermo?", en: "Yes, I'll do it. Do you want me to put the remote on the screen?" }
    ]
  },
  "utensil-drawer_a2": {
    zoneId: "utensil-drawer",
    zoneName: "Utensil Drawer",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Mi serve un coltello per tagliare la cipolla.", en: "I need a knife to cut the onion." },
      { speaker: "Amico", it: "Nel secondo cassetto. Prendi anche una forchetta?", en: "In the second drawer. Also grab a fork?" },
      { speaker: "Tu", it: "Sì, e un cucchiaio per mescolare.", en: "Yes, and a spoon to stir." },
      { speaker: "Amico", it: "Il mestolo è grande, meglio la spatola.", en: "The ladle is big, better the spatula." },
      { speaker: "Tu", it: "Dov'è la grattugia? Devo grattugiare il formaggio.", en: "Where's the grater? I need to grate the cheese." },
      { speaker: "Amico", it: "Appesa al muro, vicino al coltello.", en: "Hanging on the wall, near the knife." }
    ]
  },
  "utensil-drawer_b1": {
    zoneId: "utensil-drawer",
    zoneName: "Utensil Drawer",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Ho bisogno di un coltello per tagliare la cipolla.", en: "I need a knife to cut the onion." },
      { speaker: "Amico", it: "È nel secondo cassetto. Però, ti consiglio di prendere anche una forchetta, no?", en: "It's in the second drawer. But I suggest you also take a fork, okay?" },
      { speaker: "Tu", it: "Sì, e un cucchiaio per mescolare. Comunque, ho visto che manca il cucchiaio.", en: "Yes, and a spoon to stir. Anyway, I saw that the spoon is missing." },
      { speaker: "Amico", it: "Figurati, ho appena finito di lavarlo. Ma ti consiglio la spatola invece del mestolo, perché è più comoda.", en: "Don’t worry, I just finished washing it. But I suggest the spatula instead of the ladle, because it's more convenient." },
      { speaker: "Tu", it: "Dov’è la grattugia? Devo grattugiare il formaggio.", en: "Where is the grater? I need to grate the cheese." },
      { speaker: "Amico", it: "È appesa al muro, vicino al coltello. Meno male che l’hai chiesto, perché non l’ho vista nemmeno io.", en: "It's hanging on the wall, near the knife. Good thing you asked, because I didn't even see it." }
    ]
  },
  "welcome-mat_a2": {
    zoneId: "welcome-mat",
    zoneName: "Welcome Mat",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Permesso? Buongiorno a tutti!", en: "May I? Good morning everyone!" },
      { speaker: "Zia", it: "Ciao! Entra, prego.", en: "Hi! Come in, please." },
      { speaker: "Tu", it: "Grazie. Scusa se arrivo tardi.", en: "Thanks. Sorry I'm late." },
      { speaker: "Zia", it: "Non preoccuparti. Forse possiamo mangiare tra un'ora.", en: "Don't worry. Maybe we can eat in an hour." },
      { speaker: "Tu", it: "Ok. Allora arrivederci — vado a lavarmi le mani.", en: "Ok. Then goodbye for now — I'll go wash my hands." },
      { speaker: "Zia", it: "Buonasera, allora. Più tardi.", en: "Good evening, then. See you later." }
    ]
  },
  "welcome-mat_b1": {
    zoneId: "welcome-mat",
    zoneName: "Welcome Mat",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Permesso? Buongiorno a tutti!", en: "May I? Good morning everyone!" },
      { speaker: "Zia", it: "Ciao! Entra pure, figurati.", en: "Hi! Come in, don't worry." },
      { speaker: "Tu", it: "Grazie. Scusa se sono arrivato tardi.", en: "Thanks. Sorry I'm late." },
      { speaker: "Zia", it: "Figurati, non preoccuparti. Pensa che possiamo mangiare tra un’ora.", en: "Don't worry. Think about it, we can eat in an hour." },
      { speaker: "Tu", it: "Ok. Allora, vado a lavarmi le mani — arrivederci.", en: "Okay. Then, I'll go wash my hands — goodbye." },
      { speaker: "Zia", it: "Buonasera, allora. Più tardi, ma non andare via, per favore.", en: "Good evening, then. See you later, but don't go away, please." }
    ]
  },
  "workbench_a2": {
    zoneId: "workbench",
    zoneName: "Workbench",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Il banco è pronto? Ho bisogno della morsa.", en: "The workbench is ready? I need the vise." },
      { speaker: "Amico", it: "Sì, ma la lima l’hai già usata tu, no?", en: "Yes, but you already used the file, right?" },
      { speaker: "Tu", it: "Un po’, ma non tanto. Posso prendere un’altra?", en: "A little, but not too much. Can I take another one?" },
      { speaker: "Amico", it: "Sì, ce n’è molto. Prendi pure.", en: "Yes, there’s a lot. Take it." },
      { speaker: "Tu", it: "Grazie. E la morsa, dove l’hai messa?", en: "Thanks. And the vise, where did you put it?" },
      { speaker: "Amico", it: "Lì, vicino al banco. Ti do una mano?", en: "There, near the workbench. I can help you?" }
    ]
  },
  "workbench_b1": {
    zoneId: "workbench",
    zoneName: "Workbench",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Il banco è pronto? Ho bisogno della morsa.", en: "Is the workbench ready? I need the vise." },
      { speaker: "Amico", it: "Sì, ma la lima l’hai già usata tu, no?", en: "Yes, but you already used the file, right?" },
      { speaker: "Tu", it: "Un po’, ma non tanto. Posso prendere un’altra?", en: "A little, but not too much. Can I take another one?" },
      { speaker: "Amico", it: "Sì, ce n’è molto. Prendi pure.", en: "Yes, there’s a lot. Go ahead." },
      { speaker: "Tu", it: "Grazie. E la morsa, dove l’hai messa?", en: "Thanks. And the vise, where did you put it?" },
      { speaker: "Amico", it: "Lì, vicino al banco. Ti do una mano?", en: "There, near the workbench. Can I help you?" }
    ]
  }
};

// Convenience: get story for a zone at a given level
export function getZoneStory(zoneId: string, level: LanguageLevel = 'a2'): ZoneStory | undefined {
  return zoneStories[`${zoneId}_${level}`] ?? zoneStories[`${zoneId}_a2`];
}
