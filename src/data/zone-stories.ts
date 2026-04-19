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
      { speaker: "Tu", it: "Posso entrare? Sto per lavarmi i denti.", en: "Can I come in? I'm about to brush my teeth.", grammarTags: [{"text": "Posso", "type": "congiuntivo"}, {"text": "Sto per", "type": "imperfetto"}] },
      { speaker: "Amico", it: "Sì, ma ho già finito. Ecco lo spazzolino e il dentifricio.", en: "Yes, but I've already finished. Here's the toothbrush and toothpaste.", grammarTags: [{"text": "ho già finito", "type": "passato_prossimo"}, {"text": "Ecco", "type": "imperativo"}, {"text": "lo spazzolino e il dentifricio", "type": "presente"}] },
      { speaker: "Tu", it: "Dov'è il sapone? Non lo vedo.", en: "Where's the soap? I can't see it.", grammarTags: [{"text": "Dov'è", "type": "congiuntivo"}, {"text": "vedo", "type": "presente"}] },
      { speaker: "Amico", it: "È accanto al rubinetto. Apri l'acqua, per favore.", en: "It's next to the faucet. Turn on the water, please.", grammarTags: [{"text": "È accanto al rubinetto", "type": "presente"}, {"text": "Apri l'acqua, per favore", "type": "imperativo"}] },
      { speaker: "Tu", it: "Grazie. Mi passi l'asciugamano? Ho la faccia sporca.", en: "Thanks. Can you pass me the towel? My face is dirty.", grammarTags: [{"text": "Mi passi", "type": "imperativo"}, {"text": "Ho", "type": "passato_prossimo"}, {"text": "la faccia sporca", "type": "presente"}] },
      { speaker: "Amico", it: "Figurati. Però, mica hai visto che c'è un asciugamano sul pavimento?", en: "You're welcome. But, have you seen there's a towel on the floor?", grammarTags: [{"text": "hai visto", "type": "passato_prossimo"}, {"text": "c'è", "type": "presente"}, {"text": "Figurati", "type": "imperativo"}] }
    ]
  },
  "bed_a2": {
    zoneId: "bed",
    zoneName: "The Bed",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Non riesco a dormire. Il materasso è troppo duro.", en: "I can't sleep. The mattress is too hard.", grammarTags: [{"text": "Non riesco", "type": "congiuntivo"}, {"text": "è", "type": "presente"}] },
      { speaker: "Amico", it: "Prova a girare il cuscino.", en: "Try flipping the pillow.", grammarTags: [{"text": "Prova", "type": "imperativo"}, {"text": "girare", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "Non funziona. Mi serve una coperta più pesante.", en: "Doesn't work. I need a heavier blanket.", grammarTags: [{"text": "Non funziona", "type": "passato_prossimo"}, {"text": "Mi serve", "type": "imperfetto"}] },
      { speaker: "Amico", it: "Prendi il lenzuolo di flanella. È nel cassetto.", en: "Take the flannel sheet. It's in the drawer.", grammarTags: [{"text": "Prendi", "type": "imperativo"}, {"text": "È", "type": "presente"}, {"text": "nel", "type": "presente"}] },
      { speaker: "Tu", it: "Ok. E domani cambiamo letto?", en: "Ok. And tomorrow do we change beds?", grammarTags: [{"text": "cambiamo", "type": "imperfetto"}, {"text": "cambiamo", "type": "imperativo"}] },
      { speaker: "Amico", it: "Se vuoi, prendi il mio. Io dormo sul divano.", en: "If you want, take mine. I'll sleep on the couch.", grammarTags: [{"text": "Se vuoi", "type": "congiuntivo"}, {"text": "prendi", "type": "imperativo"}, {"text": "Io dormo", "type": "presente"}, {"text": "sul divano", "type": "presente"}] }
    ]
  },
  "bed_b1": {
    zoneId: "bed",
    zoneName: "The Bed",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Non riesco a dormire. Ho già provato a girare il materasso, ma non funziona.", en: "I can't sleep. I've already tried flipping the mattress, but it doesn't work.", grammarTags: [{"text": "Non riesco", "type": "congiuntivo"}, {"text": "Ho già provato", "type": "passato_prossimo"}, {"text": "non funziona", "type": "presente"}] },
      { speaker: "Amico", it: "Pero, hai provato a mettere un cuscino più alto?", en: "But, have you tried using a higher pillow?", grammarTags: [{"text": "hai provato", "type": "passato_prossimo"}, {"text": "un cuscino", "type": "presente"}, {"text": "più alto", "type": "presente"}] },
      { speaker: "Tu", it: "Sì, ma non è bastato. Spero che ci sia un materasso più comodo da qualche parte.", en: "Yes, but it wasn't enough. I hope there's a more comfortable mattress somewhere.", grammarTags: [{"text": "è bastato", "type": "passato_prossimo"}, {"text": "Spero che ci sia", "type": "congiuntivo"}, {"text": "ci sia", "type": "congiuntivo"}, {"text": "Spero", "type": "presente"}] },
      { speaker: "Amico", it: "Figurati, ne ho uno nel mio letto. Se vuoi, puoi dormire lì.", en: "Don't worry, I have one in my bed. If you want, you can sleep there.", grammarTags: [{"text": "Figurati", "type": "congiuntivo"}, {"text": "ho", "type": "passato_prossimo"}, {"text": "Se vuoi", "type": "condizionale"}, {"text": "puoi", "type": "imperfetto"}] },
      { speaker: "Tu", it: "Meno male! Allora, domani porto il mio materasso qui?", en: "Good! Then, tomorrow I'll bring my mattress here?", grammarTags: [{"text": "Meno male", "type": "congiuntivo"}, {"text": "porto", "type": "passato_prossimo"}, {"text": "domani", "type": "futuro"}, {"text": "porto", "type": "imperativo"}] },
      { speaker: "Amico", it: "Sì, ma comunque, io dormo sul divano stanotte.", en: "Yes, but anyway, I'll sleep on the couch tonight." }
    ]
  },
  "bedroom_a2": {
    zoneId: "bedroom",
    zoneName: "Bedroom",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Metto la camicia o la maglietta?", en: "Should I wear the shirt or the t-shirt?", grammarTags: [{"text": "Metto", "type": "imperativo"}, {"text": "Metto", "type": "presente"}] },
      { speaker: "Amico", it: "Maglietta. Fuori fa caldo. E jeans.", en: "T-shirt. It's hot outside. And jeans." },
      { speaker: "Tu", it: "Ma ho solo pantaloni lunghi. E la gonna?", en: "But I only have long pants. And the skirt?" },
      { speaker: "Amico", it: "No, meglio il vestito. O il pigiama, se resti a casa.", en: "No, better the dress. Or pajamas, if you're staying home.", grammarTags: [{"text": "resti", "type": "congiuntivo"}, {"text": "meglio", "type": "presente"}, {"text": "O", "type": "presente"}, {"text": "il", "type": "presente"}, {"text": "vestito", "type": "presente"}, {"text": "il", "type": "presente"}, {"text": "pigiama", "type": "presente"}, {"text": "se", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "Resto. Prendo il maglione — scherzo, fa troppo caldo.", en: "I'm staying. I'll take the sweater — just kidding, it's too hot.", grammarTags: [{"text": "Resto", "type": "presente"}, {"text": "Prendo", "type": "presente"}, {"text": "scherzo", "type": "imperfetto"}, {"text": "fa", "type": "presente"}] }
    ]
  },
  "bedroom_b1": {
    zoneId: "bedroom",
    zoneName: "Bedroom",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Metto la camicia o la maglietta?", en: "Should I wear the shirt or the t-shirt?", grammarTags: [{"text": "Metto", "type": "imperativo"}] },
      { speaker: "Amico", it: "Maglietta, per favore. Fuori fa caldo, quindi jeans.", en: "T-shirt, please. It's hot outside, so jeans.", grammarTags: [{"text": "Maglietta, per favore", "type": "imperativo"}, {"text": "Fuori fa caldo", "type": "presente"}, {"text": "quindi jeans", "type": "presente"}] },
      { speaker: "Tu", it: "Ma ho solo pantaloni lunghi. E la gonna?", en: "But I only have long pants. What about the skirt?" },
      { speaker: "Amico", it: "No, meglio il vestito. O il pigiama, se resti a casa.", en: "No, better the dress. Or pajamas, if you're staying home.", grammarTags: [{"text": "resti", "type": "congiuntivo"}, {"text": "vestito", "type": "presente"}, {"text": "pigiama", "type": "presente"}] },
      { speaker: "Tu", it: "Resto a casa. Prendo il maglione — scherzo, fa troppo caldo.", en: "I’m staying home. I’ll take the sweater — just kidding, it’s too hot.", grammarTags: [{"text": "Resto", "type": "presente"}, {"text": "Prendo", "type": "presente"}, {"text": "scherzo", "type": "imperfetto"}, {"text": "fa", "type": "presente"}] },
      { speaker: "Amico", it: "Figurati, ma almeno mettilo comunque. Così se ti fa freddo, puoi toglierlo.", en: "Don’t worry, but at least put it on anyway. That way, if you get cold, you can take it off.", grammarTags: [{"text": "Figurati", "type": "congiuntivo"}, {"text": "mettilo", "type": "imperativo"}, {"text": "Così", "type": "presente"}, {"text": "ti fa", "type": "presente"}, {"text": "puoi", "type": "presente"}, {"text": "toglierlo", "type": "imperativo"}] }
    ]
  },
  "cabinet_a2": {
    zoneId: "cabinet",
    zoneName: "Medicine Cabinet",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Mi fa male la testa. Hai un'aspirina?", en: "I have a headache. Do you have an aspirin?", grammarTags: [{"text": "Mi fa male la testa", "type": "passato_prossimo"}, {"text": "Hai un'aspirina", "type": "imperfetto"}] },
      { speaker: "Amico", it: "Nell'armadietto. Prendi anche il termometro, forse hai la febbre.", en: "In the cabinet. Also take the thermometer, maybe you have a fever.", grammarTags: [{"text": "Prendi", "type": "imperativo"}, {"text": "hai", "type": "presente"}, {"text": "forse", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "Non ho febbre. Ma mi sono tagliato il dito — c'è un cerotto?", en: "No fever. But I cut my finger — is there a band-aid?", grammarTags: [{"text": "Non ho febbre", "type": "passato_prossimo"}, {"text": "mi sono tagliato", "type": "passato_prossimo"}, {"text": "c'è", "type": "imperfetto"}] },
      { speaker: "Amico", it: "Sì, e anche la pomata. E del cotone per pulire.", en: "Yes, and also the ointment. And some cotton to clean." },
      { speaker: "Tu", it: "Grazie. Questa medicina mi sta facendo bene.", en: "Thanks. This medicine is making me feel better.", grammarTags: [{"text": "sta facendo", "type": "passato_prossimo"}, {"text": "sta", "type": "presente"}] }
    ]
  },
  "cabinet_b1": {
    zoneId: "cabinet",
    zoneName: "Medicine Cabinet",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Mi fa male la testa. Hai un’aspirina?", en: "I have a headache. Do you have an aspirin?", grammarTags: [{"text": "Mi fa male la testa", "type": "passato_prossimo"}, {"text": "Hai un’aspirina", "type": "imperfetto"}] },
      { speaker: "Amico", it: "Sì, l’ho messa nell’armadietto. Però prendi anche il termometro, forse hai la febbre.", en: "Yes, I put it in the cabinet. But also take the thermometer, maybe you have a fever.", grammarTags: [{"text": "l’ho messa", "type": "passato_prossimo"}, {"text": "prendi", "type": "imperativo"}, {"text": "hai", "type": "presente"}, {"text": "forse hai", "type": "presente"}, {"text": "forse hai la febbre", "type": "presente"}] },
      { speaker: "Tu", it: "Non ho febbre. Ma mi sono tagliato il dito — c’è un cerotto?", en: "No fever. But I cut my finger — is there a band-aid?", grammarTags: [{"text": "Non ho febbre", "type": "presente"}, {"text": "mi sono tagliato", "type": "passato_prossimo"}, {"text": "c’è", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, e anche la pomata. E del cotone per pulire. Figurati, è sempre utile averli a portata di mano.", en: "Yes, and also the ointment. And some cotton to clean. Don’t worry, it’s always useful to have them within reach.", grammarTags: [{"text": "Sì", "type": "presente"}, {"text": "è", "type": "presente"}, {"text": "Figurati", "type": "imperativo"}, {"text": "è", "type": "presente"}, {"text": "a portata di mano", "type": "presente"}] },
      { speaker: "Tu", it: "Grazie. Questa medicina mi sta facendo bene.", en: "Thanks. This medicine is making me feel better.", grammarTags: [{"text": "sta facendo", "type": "passato_prossimo"}, {"text": "sta", "type": "presente"}] },
      { speaker: "Amico", it: "Pero, se non ti senti meglio tra poco, spero che venga un medico.", en: "But, if you don’t feel better soon, I hope a doctor comes.", grammarTags: [{"text": "Pero", "type": "presente"}, {"text": "se non ti senti meglio tra poco", "type": "imperfetto"}, {"text": "spero che venga un medico", "type": "congiuntivo"}] }
    ]
  },
  "checkout_a2": {
    zoneId: "checkout",
    zoneName: "Checkout",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Hai già il carrello?", en: "Do you already have the cart?", grammarTags: [{"text": "Hai", "type": "imperativo"}, {"text": "già", "type": "presente"}, {"text": "il", "type": "presente"}, {"text": "carrello", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, l’ho appena preso. Vuoi mettere qualcosa nel mio?", en: "Yes, I just took it. Do you want to put something in mine?", grammarTags: [{"text": "l’ho appena preso", "type": "passato_prossimo"}, {"text": "Vuoi", "type": "imperativo"}] },
      { speaker: "Tu", it: "No, grazie. Vado alla cassa.", en: "No, thanks. I’m going to the checkout.", grammarTags: [{"text": "Vado", "type": "passato_prossimo"}, {"text": "Vado", "type": "presente"}] },
      { speaker: "Amico", it: "Okay. Hai la carta o preferisci i contanti?", en: "Okay. Do you have a card or do you prefer cash?", grammarTags: [{"text": "Hai", "type": "presente"}, {"text": "preferisci", "type": "presente"}] },
      { speaker: "Tu", it: "Carta, per favore. Il prezzo è in euro?", en: "Card, please. Is the price in euros?" },
      { speaker: "Amico", it: "Sì. Ecco lo scontrino. Hai bisogno di aiuto?", en: "Yes. Here’s the receipt. Do you need help?", grammarTags: [{"text": "Hai bisogno", "type": "presente"}] }
    ]
  },
  "checkout_b1": {
    zoneId: "checkout",
    zoneName: "Checkout",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Hai già preso il carrello?", en: "Have you already taken the cart?", grammarTags: [{"text": "Hai", "type": "congiuntivo"}, {"text": "preso", "type": "passato_prossimo"}, {"text": "hai", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "Sì, l’ho appena preso. Però non hai bisogno di mettere qualcosa nel mio, vero?", en: "Yes, I just took it. But you don’t need to put anything in mine, do you?", grammarTags: [{"text": "l’ho appena preso", "type": "passato_prossimo"}, {"text": "hai bisogno", "type": "presente"}, {"text": "vero", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "No, grazie. Vado direttamente alla cassa.", en: "No, thanks. I’m going straight to the checkout.", grammarTags: [{"text": "Vado", "type": "passato_prossimo"}, {"text": "vado", "type": "presente"}] },
      { speaker: "Amico", it: "Okay. Hai la carta o preferisci i contanti?", en: "Okay. Do you have a card or do you prefer cash?", grammarTags: [{"text": "Hai", "type": "presente"}, {"text": "preferisci", "type": "presente"}] },
      { speaker: "Tu", it: "Carta, per favore. Spero che il prezzo sia in euro.", en: "Card, please. I hope the price is in euros.", grammarTags: [{"text": "Spero che il prezzo sia in euro", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "Sì, certo. Ecco lo scontrino. Hai bisogno di aiuto?", en: "Yes, of course. Here’s the receipt. Do you need any help?", grammarTags: [{"text": "Hai", "type": "presente"}, {"text": "hai", "type": "presente"}, {"text": "aiuto", "type": "presente"}] }
    ]
  },
  "clock_a2": {
    zoneId: "clock",
    zoneName: "The Clock",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Che ora è? Ho perso la cognizione del tempo.", en: "What time is it? I've lost track of time.", grammarTags: [{"text": "Ho perso", "type": "passato_prossimo"}, {"text": "è", "type": "presente"}, {"text": "Ho perso", "type": "passato_prossimo"}] },
      { speaker: "Amico", it: "Quasi mezzogiorno. Vuoi pranzare?", en: "Almost noon. Do you want lunch?", grammarTags: [{"text": "Vuoi", "type": "imperativo"}, {"text": "pranzare", "type": "passato_prossimo"}] },
      { speaker: "Tu", it: "No, ho mangiato stamattina tardi. Che giorno è?", en: "No, I ate late this morning. What day is it?", grammarTags: [{"text": "ho mangiato", "type": "passato_prossimo"}, {"text": "è", "type": "presente"}] },
      { speaker: "Amico", it: "Martedì. Ma stanotte non ho dormito, quindi per me è ancora notte.", en: "Tuesday. But I didn't sleep tonight, so for me it's still night.", grammarTags: [{"text": "ho dormito", "type": "passato_prossimo"}, {"text": "è", "type": "presente"}, {"text": "è ancora notte", "type": "presente"}] },
      { speaker: "Tu", it: "Aspetta un minuto... sono le 11:30 del mattino. La sera arriva più tardi.", en: "Wait a minute... it's 11:30 in the morning. Evening comes later.", grammarTags: [{"text": "Aspetta", "type": "imperativo"}, {"text": "sono", "type": "presente"}, {"text": "arriva", "type": "imperfetto"}] }
    ]
  },
  "clock_b1": {
    zoneId: "clock",
    zoneName: "The Clock",
    level: "b1",
    exchanges: [
      { speaker: "Persona", it: "Che ora è? Non so più che giorno è.", en: "What time is it? I don't know what day it is anymore.", grammarTags: [{"text": "Che ora è", "type": "imperfetto"}, {"text": "Non so", "type": "passato_prossimo"}, {"text": "che giorno è", "type": "imperfetto"}] },
      { speaker: "Persona", it: "Sono le 11:30. Ma non hai dormito, quindi per te è ancora notte.", en: "It's 11:30. But you didn't sleep, so for you it's still night.", grammarTags: [{"text": "Sono", "type": "presente"}, {"text": "hai dormito", "type": "passato_prossimo"}, {"text": "è", "type": "presente"}, {"text": "è ancora notte", "type": "presente"}] },
      { speaker: "Persona", it: "Già, ma ho mangiato tardi. Per me è già mattina.", en: "Right, but I ate late. For me, it's already morning.", grammarTags: [{"text": "ho mangiato", "type": "passato_prossimo"}, {"text": "è", "type": "imperfetto"}, {"text": "è già mattina", "type": "imperfetto"}, {"text": "Già", "type": "presente"}, {"text": "Per me", "type": "presente"}] },
      { speaker: "Persona", it: "Però la sera arriva più tardi. Non ti preoccupare.", en: "But evening comes later. Don't worry.", grammarTags: [{"text": "arriva", "type": "passato_prossimo"}, {"text": "Non ti preoccupare", "type": "imperativo"}] },
      { speaker: "Persona", it: "Spero che non sia troppo tardi. Ho già perso troppo tempo.", en: "I hope it's not too late. I've already lost too much time.", grammarTags: [{"text": "Spero che non sia troppo tardi", "type": "congiuntivo"}, {"text": "non sia", "type": "congiuntivo"}, {"text": "Ho già perso troppo tempo", "type": "passato_prossimo"}, {"text": "Ho", "type": "presente"}] }
    ]
  },
  "coat-rack_a2": {
    zoneId: "coat-rack",
    zoneName: "Coat Rack",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Prendo il cappotto? Fa freddo fuori.", en: "Should I take the coat? It's cold outside." },
      { speaker: "Amica", it: "Ok. E la sciarpa e i guanti? Ci sta il cappello dentro.", en: "Take the scarf and gloves too. And the hat." },
      { speaker: "Tu", it: "No, ho visto la pioggia. Porta l'impermeabile.", en: "Isn't the jacket enough?" },
      { speaker: "Amica", it: "Ok. E la borsa? Ci sta il maglione dentro?", en: "No, I saw rain. Bring the raincoat." }
    ]
  },
  "coat-rack_b1": {
    zoneId: "coat-rack",
    zoneName: "Coat Rack",
    level: "b1",
    exchanges: [
      { speaker: "Amica", it: "Prendo il cappotto? Fa freddo fuori.", en: "Should I take the coat? It's cold outside.", grammarTags: [{"text": "Prendo", "type": "passato_prossimo"}, {"text": "Fa", "type": "imperfetto"}] },
      { speaker: "Tu", it: "Sì, prendi il cappotto, però anche la sciarpa e i guanti. E il cappello, figurati.", en: "Yes, take the coat, but also the scarf and gloves. And the hat, for sure.", grammarTags: [{"text": "prendi", "type": "imperativo"}, {"text": "prendi", "type": "presente"}, {"text": "figurati", "type": "congiuntivo"}] },
      { speaker: "Amica", it: "La giacca è abbastanza, no?", en: "Isn't the jacket enough?" },
      { speaker: "Tu", it: "No, ho visto la pioggia. Spero che non piova troppo, ma porta l'impermeabile.", en: "No, I saw rain. I hope it doesn’t rain too much, but bring the raincoat.", grammarTags: [{"text": "ho visto", "type": "passato_prossimo"}, {"text": "Spero che non piova", "type": "congiuntivo"}, {"text": "porta", "type": "presente"}] },
      { speaker: "Amica", it: "Ok. E la borsa? Ci sta il maglione dentro.", en: "Ok. And the bag? The sweater fits inside.", grammarTags: [{"text": "Ci sta", "type": "passato_prossimo"}, {"text": "sta", "type": "imperfetto"}] },
      { speaker: "Tu", it: "Mica ti serve il maglione adesso. Comunque, mettilo dentro per quando torni.", en: "You don’t need the sweater now. Anyway, put it inside for when you come back.", grammarTags: [{"text": "Mica ti serve", "type": "imperfetto"}, {"text": "mettilo", "type": "imperativo"}, {"text": "torni", "type": "futuro"}] }
    ]
  },
  "computer_a2": {
    zoneId: "computer",
    zoneName: "Computer Station",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Il computer non si accende. Lo schermo è nero.", en: "The computer won't turn on. The screen is black." },
      { speaker: "Amico", it: "Hai premuto la tastiera? Forse è il mouse.", en: "Did you press the keyboard? Maybe it's the mouse.", grammarTags: [{"text": "Hai premuto", "type": "passato_prossimo"}, {"text": "è", "type": "imperfetto"}] },
      { speaker: "Tu", it: "No, ho dimenticato la password. Non entro.", en: "No, I forgot the password. I can't get in.", grammarTags: [{"text": "ho dimenticato", "type": "passato_prossimo"}, {"text": "entro", "type": "imperfetto"}] },
      { speaker: "Amico", it: "Chiedi alla studentessa. Lei è brava in scienza.", en: "Ask the female student. She's good at science.", grammarTags: [{"text": "Chiedi", "type": "imperativo"}, {"text": "è", "type": "presente"}, {"text": "brava", "type": "presente"}] },
      { speaker: "Tu", it: "E lo studente? Dov'è?", en: "And the male student? Where is he?", grammarTags: [{"text": "Dov'è", "type": "congiuntivo"}, {"text": "è", "type": "presente"}] },
      { speaker: "Amico", it: "Alla stampante. Sta stampando un file.", en: "At the printer. He's printing a file.", grammarTags: [{"text": "Sta stampando", "type": "passato_prossimo"}, {"text": "Sta stampando", "type": "imperfetto"}] }
    ]
  },
  "computer_b1": {
    zoneId: "computer",
    zoneName: "Computer Station",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Il computer non si accende. Lo schermo è nero, ma non so cosa fare.", en: "The computer won't turn on. The screen is black, but I don't know what to do.", grammarTags: [{"text": "non si accende", "type": "passato_prossimo"}, {"text": "è", "type": "presente"}, {"text": "non so", "type": "presente"}] },
      { speaker: "Amico", it: "Hai già premuto il pulsante di accensione? Forse è il mouse, ma non ne sono sicuro.", en: "Have you already pressed the power button? Maybe it's the mouse, but I'm not sure.", grammarTags: [{"text": "Hai già premuto", "type": "passato_prossimo"}, {"text": "è", "type": "imperfetto"}, {"text": "non ne sono sicuro", "type": "imperfetto"}] },
      { speaker: "Tu", it: "No, ho dimenticato la password. Non riesco ad entrare, però non so se è il problema.", en: "No, I forgot the password. I can't get in, but I don't know if that's the problem.", grammarTags: [{"text": "ho dimenticato", "type": "passato_prossimo"}, {"text": "Non riesco", "type": "imperfetto"}, {"text": "non so", "type": "presente"}] },
      { speaker: "Amico", it: "Penso che tu debba chiedere alla studentessa. Lei è brava in scienza, quindi forse sa aiutarti.", en: "I think you should ask the female student. She's good at science, so maybe she can help you.", grammarTags: [{"text": "Penso che tu debba chiedere", "type": "congiuntivo"}, {"text": "debba", "type": "congiuntivo"}, {"text": "chiedere", "type": "passato_prossimo"}, {"text": "è", "type": "presente"}, {"text": "brava", "type": "presente"}, {"text": "sa", "type": "presente"}, {"text": "aiutarti", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "E lo studente? Dov'è?", en: "And the male student? Where is he?" },
      { speaker: "Amico", it: "Alla stampante. Sta stampando un file, ma meno male che non è occupato.", en: "At the printer. He's printing a file, but at least he's not busy.", grammarTags: [{"text": "Sta stampando", "type": "passato_prossimo"}, {"text": "Sta stampando", "type": "imperfetto"}, {"text": "non è occupato", "type": "passato_prossimo"}] }
    ]
  },
  "counter_a2": {
    zoneId: "counter",
    zoneName: "The Café Counter",
    level: "a2",
    exchanges: [
      { speaker: "Cliente", it: "Buongiorno. Vorrei un caffè e un cornetto.", en: "Good morning. I would like a coffee and a cornetto.", grammarTags: [{"text": "Buongiorno", "type": "presente"}, {"text": "Vorrei", "type": "congiuntivo"}] },
      { speaker: "Barista", it: "Caffè normale o doppio?", en: "Normal coffee or double?" },
      { speaker: "Cliente", it: "Normale, per favore.", en: "Normal, please." },
      { speaker: "Barista", it: "E la tazza? Vuoi la tazza grande?", en: "And the cup? Do you want the large cup?", grammarTags: [{"text": "Vuoi", "type": "imperativo"}, {"text": "Vuoi", "type": "presente"}] },
      { speaker: "Cliente", it: "Sì, quella.", en: "Yes, that one." },
      { speaker: "Barista", it: "Ecco il tuo caffè e il cornetto. Buon appetito!", en: "Here is your coffee and cornetto. Enjoy!", grammarTags: [{"text": "Ecco", "type": "imperativo"}, {"text": "Buon appetito", "type": "imperativo"}] }
    ]
  },
  "counter_b1": {
    zoneId: "counter",
    zoneName: "The Café Counter",
    level: "b1",
    exchanges: [
      { speaker: "Cliente", it: "Ciao, ho già ordinato un caffè e un cornetto, ma non so se ho scelto la tazza giusta.", en: "Hi, I already ordered a coffee and a cornetto, but I don't know if I chose the right cup.", grammarTags: [{"text": "ho già ordinato", "type": "passato_prossimo"}, {"text": "ho scelto", "type": "passato_prossimo"}, {"text": "non so se", "type": "congiuntivo"}, {"text": "ho scelto", "type": "passato_prossimo"}] },
      { speaker: "Barista", it: "Ah, ma non ti preoccupare, ho già visto. Ti ho messo la tazza grande, per fortuna.", en: "Oh, don't worry, I already saw. I put the large cup for you, luckily.", grammarTags: [{"text": "ho già visto", "type": "passato_prossimo"}, {"text": "Ti ho messo", "type": "passato_prossimo"}, {"text": "per fortuna", "type": "presente"}] },
      { speaker: "Cliente", it: "Ah, grazie! Però non so se è la tazza che volevo.", en: "Oh, thank you! But I don't know if it's the cup I wanted.", grammarTags: [{"text": "Ah", "type": "imperativo"}, {"text": "so", "type": "presente"}, {"text": "è", "type": "presente"}, {"text": "volevo", "type": "passato_prossimo"}] },
      { speaker: "Barista", it: "Spero che ti piaccia, comunque. Se non ti piace, puoi sempre chiedere la piccola.", en: "I hope you like it, anyway. If you don't like it, you can always ask for the small one.", grammarTags: [{"text": "Spero", "type": "congiuntivo"}, {"text": "piaccia", "type": "congiuntivo"}, {"text": "Se", "type": "condizionale"}, {"text": "puoi", "type": "imperativo"}] },
      { speaker: "Cliente", it: "Sì, ma non credo che la piccola mi serva. Mica sono tanto goloso.", en: "Yes, but I don't think the small one will do. I'm not that greedy.", grammarTags: [{"text": "mi serva", "type": "congiuntivo"}, {"text": "Mica sono", "type": "presente"}, {"text": "sono tanto goloso", "type": "presente"}] },
      { speaker: "Barista", it: "Ecco, ho sistemato. Buon appetito, e se hai bisogno di altro, chiamami.", en: "Here we go, I've sorted it. Enjoy, and if you need anything else, call me.", grammarTags: [{"text": "ho sistemato", "type": "passato_prossimo"}, {"text": "hai bisogno", "type": "presente"}, {"text": "chiamami", "type": "imperativo"}] }
    ]
  },
  "creatures_a2": {
    zoneId: "creatures",
    zoneName: "Mythical Creatures",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Hai visto il drago nel gioco? È bellissimo!", en: "You saw the dragon in the game? It's beautiful!", grammarTags: [{"text": "Hai visto", "type": "passato_prossimo"}, {"text": "È", "type": "presente"}, {"text": "bellissimo", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, ma preferisco l'elfo. È più veloce.", en: "Yes, but I prefer the elf. It's faster.", grammarTags: [{"text": "preferisco", "type": "passato_prossimo"}, {"text": "È", "type": "presente"}, {"text": "veloce", "type": "presente"}] },
      { speaker: "Tu", it: "Io amo le fate. Sono molto misteriose.", en: "I love fairies. They're very mysterious.", grammarTags: [{"text": "Io amo le fate", "type": "presente"}, {"text": "Sono molto misteriose", "type": "presente"}] },
      { speaker: "Amico", it: "E la strega? Non mi piace tanto.", en: "And the witch? I don't like her much." },
      { speaker: "Tu", it: "Vuoi giocare con il nano o con il mago?", en: "Do you want to play with the dwarf or the wizard?", grammarTags: [{"text": "Vuoi", "type": "imperativo"}] },
      { speaker: "Amico", it: "Con il mago. Ha più magie!", en: "With the wizard. He has more magic!", grammarTags: [{"text": "Ha", "type": "passato_prossimo"}, {"text": "Ha", "type": "presente"}] }
    ]
  },
  "creatures_b1": {
    zoneId: "creatures",
    zoneName: "Mythical Creatures",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Hai visto il drago nel gioco? È bellissimo!", en: "You saw the dragon in the game? It's beautiful!", grammarTags: [{"text": "Hai visto", "type": "passato_prossimo"}, {"text": "È", "type": "presente"}, {"text": "bellissimo", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, ma preferisco l'elfo. È più veloce.", en: "Yes, but I prefer the elf. It's faster.", grammarTags: [{"text": "preferisco", "type": "passato_prossimo"}, {"text": "È", "type": "presente"}, {"text": "veloce", "type": "presente"}] },
      { speaker: "Tu", it: "Io amo le fate. Sono molto misteriose.", en: "I love fairies. They're very mysterious.", grammarTags: [{"text": "Io amo le fate", "type": "presente"}, {"text": "Sono molto misteriose", "type": "presente"}] },
      { speaker: "Amico", it: "E la strega? Non mi piace tanto.", en: "And the witch? I don't like her much." },
      { speaker: "Tu", it: "Vuoi giocare con il nano o con il mago?", en: "Do you want to play with the dwarf or the wizard?", grammarTags: [{"text": "Vuoi", "type": "imperativo"}] },
      { speaker: "Amico", it: "Con il mago. Ha più magie!", en: "With the wizard. He has more magic!", grammarTags: [{"text": "Ha", "type": "passato_prossimo"}, {"text": "Ha", "type": "presente"}] },
      { speaker: "Tu", it: "Hai visto il drago nel gioco? È bellissimo!", en: "You saw the dragon in the game? It's beautiful!", grammarTags: [{"text": "Hai visto", "type": "passato_prossimo"}, {"text": "È", "type": "presente"}, {"text": "bellissimo", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, ma preferisco l'elfo. È più veloce.", en: "Yes, but I prefer the elf. It's faster.", grammarTags: [{"text": "preferisco", "type": "passato_prossimo"}, {"text": "È", "type": "presente"}, {"text": "veloce", "type": "presente"}] },
      { speaker: "Tu", it: "Io amo le fate. Sono molto misteriose.", en: "I love fairies. They're very mysterious.", grammarTags: [{"text": "Io amo le fate", "type": "presente"}, {"text": "Sono molto misteriose", "type": "presente"}] },
      { speaker: "Amico", it: "E la strega? Non mi piace tanto. Penso che sia un po' spaventosa.", en: "And the witch? I don't like her much. I think she's a bit scary.", grammarTags: [{"text": "Non mi piace tanto", "type": "presente"}, {"text": "Penso che sia un po' spaventosa", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "Vuoi giocare con il nano o con il mago?", en: "Do you want to play with the dwarf or the wizard?", grammarTags: [{"text": "Vuoi", "type": "imperativo"}] },
      { speaker: "Amico", it: "Con il mago. Ha più magie, quindi è più divertente!", en: "With the wizard. He has more magic, so it's more fun!", grammarTags: [{"text": "Ha", "type": "passato_prossimo"}, {"text": "è", "type": "presente"}] }
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
      { speaker: "Tu", it: "Dai, ho aperto gli occhi e sono uscito. Quasi mi sono riaddormentato.", en: "Come on, I opened my eyes and left. I almost fell back asleep." }
    ]
  },
  "daily-actions_b1": {
    zoneId: "daily-actions",
    zoneName: "Daily Actions",
    level: "b1",
    exchanges: [
      { speaker: "Amico", it: "A che ora ti sei alzato ieri?", en: "What time did you get up yesterday?", grammarTags: [{"text": "ti sei alzato", "type": "passato_prossimo"}, {"text": "A che ora", "type": "presente"}, {"text": "ieri", "type": "passato_prossimo"}] },
      { speaker: "Tu", it: "Alle sette e mezzo. Mi sono svegliato, ho fatto la doccia e mi sono vestito in cinque minuti.", en: "At seven thirty. I woke up, had a shower and got dressed in five minutes.", grammarTags: [{"text": "Mi sono svegliato", "type": "passato_prossimo"}, {"text": "ho fatto la doccia", "type": "passato_prossimo"}, {"text": "mi sono vestito", "type": "passato_prossimo"}] },
      { speaker: "Amico", it: "Non ti sei nemmeno pettinato, ma figurati — lo sai che non ci tengo tanto.", en: "You didn’t even comb your hair, but come on — you know I don’t care that much.", grammarTags: [{"text": "Non ti sei nemmeno pettinato", "type": "passato_prossimo"}, {"text": "lo sai", "type": "presente"}, {"text": "figurati", "type": "imperativo"}, {"text": "non ci tengo tanto", "type": "presente"}] },
      { speaker: "Tu", it: "Sì, ma ho visto che ti sei svegliato anche tu tardi. Però non hai lasciato la porta aperta.", en: "Yes, but I saw that you also woke up late. However, you didn’t leave the door open.", grammarTags: [{"text": "ho visto", "type": "passato_prossimo"}, {"text": "ti sei svegliato", "type": "passato_prossimo"}, {"text": "non hai lasciato", "type": "passato_prossimo"}, {"text": "sei svegliato", "type": "passato_prossimo"}] },
      { speaker: "Amico", it: "Ah, meno male! Spero che tu non ti sia dimenticato di chiudere il gas.", en: "Oh, good! I hope you didn’t forget to turn off the gas.", grammarTags: [{"text": "Spero che tu non ti sia dimenticato di chiudere il gas", "type": "passato_prossimo"}, {"text": "Spero che tu non ti sia dimenticato di chiudere il gas", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "No, ho controllato. Comunque, non ti preoccupare — mica ho lasciato la casa in disordine.", en: "No, I checked. Anyway, don’t worry — I didn’t leave the house in a mess.", grammarTags: [{"text": "ho controllato", "type": "passato_prossimo"}, {"text": "non ti preoccupare", "type": "imperativo"}, {"text": "mica ho lasciato", "type": "passato_prossimo"}] }
    ]
  },
  "desk_a2": {
    zoneId: "desk",
    zoneName: "Study Desk",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "hai una penna? la mia non scrive.", en: "Do you have a pen? Mine doesn't write." },
      { speaker: "Amico", it: "prendi questa matita. e la gomma.", en: "Take this pencil. And the eraser." },
      { speaker: "Tu", it: "grazie. dov'è il righello? devo fare una linea.", en: "Thanks. Where's the ruler? I need to draw a line." },
      { speaker: "Amico", it: "sulla scrivania, vicino al quaderno.", en: "On the desk, next to the notebook." },
      { speaker: "Tu", it: "che lezione abbiamo dopo?", en: "What lesson do we have next?" }
    ]
  },
  "desk_b1": {
    zoneId: "desk",
    zoneName: "Study Desk",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Hai una penna? La mia non scrive più.", en: "Do you have a pen? Mine doesn’t write anymore.", grammarTags: [{"text": "Hai", "type": "imperativo"}, {"text": "non scrive", "type": "passato_prossimo"}] },
      { speaker: "Amico", it: "Prendi questa matita. E anche la gomma, se ti serve.", en: "Take this pencil. And the eraser too, if you need it.", grammarTags: [{"text": "Prendi", "type": "imperativo"}, {"text": "ti serve", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "Grazie. Dove è il righello? Devo disegnare una linea.", en: "Thanks. Where is the ruler? I need to draw a line.", grammarTags: [{"text": "Grazie", "type": "imperativo"}, {"text": "Dove è", "type": "presente"}, {"text": "Devo", "type": "presente"}] },
      { speaker: "Amico", it: "È sulla scrivania, vicino al quaderno. Però non so se è tuo.", en: "It’s on the desk, next to the notebook. But I don’t know if it’s yours.", grammarTags: [{"text": "È", "type": "presente"}, {"text": "è", "type": "presente"}, {"text": "so", "type": "congiuntivo"}, {"text": "è", "type": "presente"}, {"text": "tuo", "type": "presente"}] },
      { speaker: "Tu", it: "Che lezione abbiamo dopo? Spero che non sia troppo difficile.", en: "What lesson do we have next? I hope it’s not too difficult.", grammarTags: [{"text": "Che lezione abbiamo dopo?", "type": "passato_prossimo"}, {"text": "Spero che non sia troppo difficile.", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "Italiano. Guarda il calendario — oggi è pagina 45. Figurati, non è mica facile.", en: "Italian. Look at the calendar — today is page 45. Don’t worry, it’s not that easy.", grammarTags: [{"text": "Guarda", "type": "imperativo"}, {"text": "è", "type": "passato_prossimo"}, {"text": "Figurati", "type": "imperativo"}, {"text": "è", "type": "passato_prossimo"}, {"text": "è", "type": "passato_prossimo"}] }
    ]
  },
  "dessert_a2": {
    zoneId: "dessert",
    zoneName: "Dessert Station",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Prendo un cornetto. Tu?", en: "I'll take a croissant. You?", grammarTags: [{"text": "Prendo", "type": "presente"}] },
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
      { speaker: "Tu", it: "Prendo un cornetto. Tu?", en: "I'll take a croissant. You?", grammarTags: [{"text": "Prendo", "type": "presente"}] },
      { speaker: "Amico", it: "Un biscotto al miele, e un gelato. Però prima vorrei una fetta di torta.", en: "A honey cookie and an ice cream. But first, I'd like a slice of cake.", grammarTags: [{"text": "vorrei", "type": "congiuntivo"}, {"text": "vorrei", "type": "condizionale"}] },
      { speaker: "Tu", it: "Che gusto? Io cioccolata.", en: "What flavor? I'll go with chocolate." },
      { speaker: "Amico", it: "Anche io. Spero che ci siano ancora le fragole.", en: "Me too. I hope there are still strawberries left.", grammarTags: [{"text": "Spero che ci siano ancora le fragole", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "Se dividiamo, sì. Comunque, non c’è problema se non c’è.", en: "If we share, sure. Anyway, no problem if there isn’t.", grammarTags: [{"text": "Se dividiamo", "type": "congiuntivo"}, {"text": "non c’è", "type": "presente"}, {"text": "non c’è", "type": "presente"}] },
      { speaker: "Amico", it: "Affare fatto. Figurati, lo pago io.", en: "Deal. Don’t worry, I’ll pay.", grammarTags: [{"text": "Affare fatto", "type": "passato_prossimo"}, {"text": "Figurati", "type": "imperativo"}, {"text": "lo pago io", "type": "passato_prossimo"}] }
    ]
  },
  "drawer_a2": {
    zoneId: "drawer",
    zoneName: "Accessory Drawer",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Hai visto le mie calze? Non le trovo.", en: "Did you see my socks? I can't find them.", grammarTags: [{"text": "Hai visto", "type": "passato_prossimo"}, {"text": "trovo", "type": "presente"}] },
      { speaker: "Amico", it: "Nel cassetto degli accessori. Ecco l'orologio.", en: "In the accessory drawer. Here's the watch." },
      { speaker: "Tu", it: "Grazie. E gli occhiali? Mi servono per leggere.", en: "Thanks. And the glasses? I need them to read." },
      { speaker: "Amico", it: "Sopra la cintura. Prendi anche la cravatta?", en: "On top of the belt. Do you also want the tie?" },
      { speaker: "Tu", it: "No. Ma la sciarpa e i guanti — fa freddo stasera.", en: "No. But the scarf and gloves — it's cold tonight.", grammarTags: [{"text": "fa", "type": "imperfetto"}, {"text": "stasera", "type": "presente"}] },
      { speaker: "Amico", it: "Allora prendi anche la borsa.", en: "Then take the bag too.", grammarTags: [{"text": "prendi", "type": "imperativo"}] }
    ]
  },
  "drawer_b1": {
    zoneId: "drawer",
    zoneName: "Accessory Drawer",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Hai visto le mie calze? Non le trovo.", en: "Did you see my socks? I can't find them.", grammarTags: [{"text": "Hai visto", "type": "passato_prossimo"}, {"text": "Non le trovo", "type": "presente"}] },
      { speaker: "Amico", it: "Le ho viste nel cassetto degli accessori. Ecco l'orologio.", en: "I saw them in the accessory drawer. Here's the watch.", grammarTags: [{"text": "ho viste", "type": "passato_prossimo"}, {"text": "Ecco", "type": "imperativo"}] },
      { speaker: "Tu", it: "Grazie. Ma dove sono gli occhiali? Mi servono per leggere.", en: "Thanks. But where are the glasses? I need them to read.", grammarTags: [{"text": "Grazie", "type": "imperativo"}, {"text": "sono", "type": "passato_prossimo"}, {"text": "servono", "type": "passato_prossimo"}] },
      { speaker: "Amico", it: "Sono sopra la cintura. Prendi anche la cravatta?", en: "They're on top of the belt. Do you want the tie too?", grammarTags: [{"text": "Sono", "type": "presente"}, {"text": "Prendi", "type": "imperativo"}] },
      { speaker: "Tu", it: "No, ma la sciarpa e i guanti — fa freddo stasera.", en: "No, but the scarf and gloves — it's cold tonight.", grammarTags: [{"text": "fa", "type": "presente"}, {"text": "stasera", "type": "presente"}] },
      { speaker: "Amico", it: "Allora prendi anche la borsa. Figurati, non c'è problema.", en: "Then take the bag too. Don't worry, no problem.", grammarTags: [{"text": "prendi", "type": "imperativo"}, {"text": "c'è", "type": "presente"}, {"text": "Figurati", "type": "imperfetto"}] }
    ]
  },
  "entrance-hall_a2": {
    zoneId: "entrance-hall",
    zoneName: "Foyer",
    level: "a2",
    exchanges: [
      { speaker: "Sorella", it: "Mamma e papà sono in foyer. Aspettano il nonno.", en: "Mom and dad are in the foyer. They're waiting for grandpa.", grammarTags: [{"text": "sono", "type": "presente"}, {"text": "Aspettano", "type": "presente"}] },
      { speaker: "Tu", it: "E la nonna?", en: "And grandma?" },
      { speaker: "Sorella", it: "In cucina con zia. Zio è arrivato con i suoi figli.", en: "In the kitchen with aunt. Uncle arrived with his kids." },
      { speaker: "Tu", it: "Quindi mio cugino è qui? Vado a salutarlo.", en: "So my cousin is here? I'll go say hi.", grammarTags: [{"text": "è", "type": "presente"}, {"text": "Vado", "type": "passato_prossimo"}, {"text": "salutarlo", "type": "congiuntivo"}] },
      { speaker: "Sorella", it: "Aspetta — anche la nonna vuole vedere te prima.", en: "Wait — grandma wants to see you first.", grammarTags: [{"text": "Aspetta", "type": "imperativo"}, {"text": "vuole", "type": "passato_prossimo"}] }
    ]
  },
  "entrance-hall_b1": {
    zoneId: "entrance-hall",
    zoneName: "Foyer",
    level: "b1",
    exchanges: [
      { speaker: "Sorella", it: "Mamma e papà sono già nel foyer. Stanno aspettando il nonno.", en: "Mom and dad are already in the foyer. They're waiting for grandpa.", grammarTags: [{"text": "sono", "type": "presente"}, {"text": "stanno", "type": "presente"}, {"text": "sono", "type": "presente"}, {"text": "stanno", "type": "presente"}] },
      { speaker: "Tu", it: "E la nonna? Non è con loro?", en: "And grandma? Isn't she with them?" },
      { speaker: "Sorella", it: "No, è in cucina con zia. Zio è arrivato poco fa con i suoi figli.", en: "No, she's in the kitchen with aunt. Uncle arrived a little while ago with his kids.", grammarTags: [{"text": "è in cucina", "type": "passato_prossimo"}, {"text": "è arrivato", "type": "passato_prossimo"}, {"text": "con zia", "type": "presente"}, {"text": "con i suoi figli", "type": "presente"}] },
      { speaker: "Tu", it: "Quindi mio cugino è qui? Vado a salutarlo subito.", en: "So my cousin is here? I'll go say hi right away.", grammarTags: [{"text": "è", "type": "presente"}, {"text": "Vado", "type": "passato_prossimo"}, {"text": "salutarlo", "type": "congiuntivo"}] },
      { speaker: "Sorella", it: "Aspetta un momento — penso che la nonna voglia vederti prima.", en: "Wait a moment — I think grandma wants to see you first.", grammarTags: [{"text": "Aspetta", "type": "imperativo"}, {"text": "penso", "type": "presente"}, {"text": "voglia", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "Figurati, non c'è problema. Vado a salutarla, ma non ci metto molto.", en: "No problem, I'll go say hi to her, but I won't take long.", grammarTags: [{"text": "Figurati", "type": "congiuntivo"}, {"text": "non c'è", "type": "passato_prossimo"}, {"text": "Vado", "type": "presente"}, {"text": "ci metto", "type": "presente"}] }
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
      { speaker: "Amico", it: "Io provo amore per te. Non ti lascio solo.", en: "I feel love for you. I won't leave you alone.", grammarTags: [{"text": "Io provo amore per te", "type": "presente"}, {"text": "Non ti lascio solo", "type": "presente"}] },
      { speaker: "Tu", it: "Grazie. Vorrei un po' di gioia, adesso.", en: "Thank you. I would like a little joy now.", grammarTags: [{"text": "Vorrei", "type": "condizionale"}, {"text": "adesso", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, andiamo a prendere un gelato. Meglio di odio e rabbia.", en: "Yes, let's go get ice cream. Better than hate and anger.", grammarTags: [{"text": "andiamo", "type": "imperfetto"}, {"text": "prendere", "type": "passato_prossimo"}, {"text": "Meglio", "type": "presente"}] }
    ]
  },
  "feelings_b1": {
    zoneId: "feelings",
    zoneName: "Feelings",
    level: "b1",
    exchanges: [
      { speaker: "Persona", it: "Come ti senti dopo quel discorso?", en: "How do you feel after that speech?" },
      { speaker: "Persona", it: "Un po' triste. E tu?", en: "A bit sad. And you?" },
      { speaker: "Persona", it: "Io ho paura. Non so cosa fare.", en: "I'm scared. I don't know what to do.", grammarTags: [{"text": "ho", "type": "passato_prossimo"}, {"text": "so", "type": "imperfetto"}] },
      { speaker: "Persona", it: "Io provo amore per te. Non ti lascio mai solo.", en: "I feel love for you. I'll never leave you alone.", grammarTags: [{"text": "Io provo amore per te", "type": "presente"}, {"text": "Non ti lascio mai solo", "type": "presente"}] },
      { speaker: "Persona", it: "Grazie. Vorrei un po' di gioia, adesso.", en: "Thank you. I'd like a little joy now.", grammarTags: [{"text": "Vorrei", "type": "condizionale"}, {"text": "adesso", "type": "presente"}] },
      { speaker: "Persona", it: "Sì, andiamo a prendere un gelato. Meglio del rancore.", en: "Yes, let's go get ice cream. Better than resentment.", grammarTags: [{"text": "andiamo", "type": "passato_prossimo"}, {"text": "prendere", "type": "imperfetto"}, {"text": "Meglio", "type": "congiuntivo"}, {"text": "del", "type": "presente"}] }
    ]
  },
  "fruits_a2": {
    zoneId: "fruits",
    zoneName: "Fruit Orchard",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Prendiamo delle mele? Ne vedo tante.", en: "Let's take some apples? I see a lot.", grammarTags: [{"text": "Prendiamo", "type": "imperativo"}, {"text": "vedo", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, ma anche delle pesche. Hai visto quelle lì?", en: "Yes, but also some peaches. Have you seen those over there?", grammarTags: [{"text": "Hai visto", "type": "passato_prossimo"}, {"text": "quelle", "type": "imperfetto"}, {"text": "lì", "type": "imperfetto"}] },
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
      { speaker: "Tu", it: "Prendiamo delle mele? Ne ho viste tante.", en: "Let's take some apples? I've seen a lot.", grammarTags: [{"text": "Prendiamo", "type": "imperativo"}, {"text": "ho viste", "type": "passato_prossimo"}, {"text": "viste", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "Sì, ma anche delle pesche. Le hai viste quelle là?", en: "Yes, but also some peaches. Have you seen those over there?", grammarTags: [{"text": "Sì", "type": "presente"}, {"text": "hai viste", "type": "passato_prossimo"}, {"text": "quelle", "type": "imperfetto"}, {"text": "quelle là", "type": "imperfetto"}] },
      { speaker: "Tu", it: "Un po' di fragole, per favore.", en: "A little strawberries, please." },
      { speaker: "Amico", it: "Certo. E un limone, per il succo? Spero che non te la sia dimenticata.", en: "Of course. And a lemon, for the juice? I hope you didn't forget about it.", grammarTags: [{"text": "Certo", "type": "presente"}, {"text": "Spero che non te la sia dimenticata", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "Sì, molto volentieri. Comunque, pensavo che ce ne fossero anche delle ciliegie.", en: "Yes, very gladly. By the way, I thought there were also some cherries.", grammarTags: [{"text": "Sì", "type": "presente"}, {"text": "pensavo", "type": "imperfetto"}, {"text": "ce ne fossero", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "Figurati, ne ho viste anche io. Meno male che le hai menzionate.", en: "You're welcome, I've seen some too. Good thing you mentioned them.", grammarTags: [{"text": "Figurati", "type": "imperativo"}, {"text": "ho viste", "type": "passato_prossimo"}, {"text": "hai menzionate", "type": "passato_prossimo"}, {"text": "che le hai menzionate", "type": "passato_prossimo"}] }
    ]
  },
  "furniture_a2": {
    zoneId: "furniture",
    zoneName: "Furniture",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Questo tavolo è troppo grande. Lo spostiamo?", en: "This table is too big. Shall we move it?" },
      { speaker: "Amico", it: "Sì, ma dove mettiamo la sedia?", en: "Yes, but where do we put the chair?" },
      { speaker: "Tu", it: "Lì vicino alla lampada. E il quadro, lo togliamo?", en: "There, near the lamp. And the painting, shall we take it down?" },
      { speaker: "Amico", it: "No, lasciamolo. Poi mettiamo il tappeto.", en: "No, let's leave it. Then we'll put down the carpet." },
      { speaker: "Tu", it: "Bene. E le tende? Sono troppo pesanti.", en: "Good. And the tents? They are too heavy." },
      { speaker: "Amico", it: "Sì, ma il specchio va bene così.", en: "---" }
    ]
  },
  "furniture_b1": {
    zoneId: "furniture",
    zoneName: "Furniture",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Questo tavolo è troppo grande. Lo spostiamo?", en: "This table is too big. Shall we move it?" },
      { speaker: "You", it: "This table is too big. Should we move it?", en: "This table is too big. Should we move it?" },
      { speaker: "Amico", it: "Sì, ma dove mettiamo la sedia? Non ho visto un posto libero.", en: "Yes, but where do we put the chair? I didn't see a free spot.", grammarTags: [{"text": "Sì", "type": "presente"}, {"text": "mettiamo", "type": "imperativo"}, {"text": "ho visto", "type": "passato_prossimo"}] },
      { speaker: "Friend", it: "Yes, but where do we put the chair? I didn’t see a free spot.", en: "Yes, but where do we put the chair? I didn’t see a free spot.", grammarTags: [{"text": "do we put", "type": "imperfetto"}, {"text": "I didn’t see", "type": "passato_prossimo"}, {"text": "a free spot", "type": "presente"}] },
      { speaker: "Tu", it: "Lì, vicino alla lampada. E il quadro, lo togliamo?", en: "There, near the lamp. And the painting, shall we take it down?" },
      { speaker: "You", it: "There, next to the lamp. And the picture, do we take it down?", en: "There, next to the lamp. And the picture, do we take it down?" },
      { speaker: "Amico", it: "No, lasciamolo. Poi mettiamo il tappeto, così sembra più caldo.", en: "No, let's leave it. Then we'll put down the carpet, so it looks warmer.", grammarTags: [{"text": "lasciamolo", "type": "congiuntivo"}, {"text": "mettiamo", "type": "imperfetto"}, {"text": "sembra", "type": "presente"}] },
      { speaker: "Friend", it: "No, leave it. Then we put the rug, it’ll look warmer.", en: "No, leave it. Then we put the rug, it’ll look warmer.", grammarTags: [{"text": "put", "type": "passato_prossimo"}, {"text": "it’ll", "type": "condizionale"}, {"text": "leave", "type": "imperativo"}] },
      { speaker: "Tu", it: "Bene. E le tende? Sono troppo pesanti.", en: "Good. And the tents? They are too heavy.", grammarTags: [{"text": "Sono troppo pesanti", "type": "passato_prossimo"}, {"text": "Sono troppo pesanti", "type": "presente"}] },
      { speaker: "You", it: "Good. And the curtains? They’re too heavy.", en: "Good. And the curtains? They're too heavy.", grammarTags: [{"text": "They’re", "type": "passato_prossimo"}, {"text": "too heavy", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, ma penso che il specchio vada bene così. Comunque, non è un problema.", en: "Yes, but I think the mirror is fine as it is. Anyway, it's not a problem.", grammarTags: [{"text": "penso", "type": "presente"}, {"text": "vada", "type": "congiuntivo"}, {"text": "non è", "type": "presente"}] },
      { speaker: "Friend", it: "Yes, but I think the mirror is fine like this. Anyway, it’s not a problem.", en: "Yes, but I think the mirror is fine like this. Anyway, it’s not a problem.", grammarTags: [{"text": "I think", "type": "presente"}, {"text": "is", "type": "presente"}, {"text": "is fine", "type": "presente"}, {"text": "it’s", "type": "presente"}, {"text": "not a problem", "type": "presente"}] }
    ]
  },
  "garden_a2": {
    zoneId: "garden",
    zoneName: "Garden",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Che bel fiore! È una rosa?", en: "What a beautiful flower! Is it a rose?", grammarTags: [{"text": "È", "type": "presente"}, {"text": "una", "type": "presente"}, {"text": "rosa", "type": "presente"}] },
      { speaker: "Amico", it: "Sì. L'ho piantata vicino all'albero.", en: "Yes. I planted it near the tree.", grammarTags: [{"text": "L'ho piantata", "type": "passato_prossimo"}] },
      { speaker: "Tu", it: "Le foglie sono verdi. E l'erba è alta.", en: "The leaves are green. And the grass is tall." },
      { speaker: "Amico", it: "Devo tagliarla. Ma prima raccolgo questo ramo caduto.", en: "I need to cut it. But first I'll pick up this fallen branch.", grammarTags: [{"text": "Devo", "type": "congiuntivo"}, {"text": "tagliarla", "type": "passato_prossimo"}, {"text": "raccolgo", "type": "imperfetto"}] },
      { speaker: "Tu", it: "Le radici dell'albero sono fuori terra. È normale?", en: "The tree's roots are above ground. Is that normal?" },
      { speaker: "Amico", it: "No, forse è malato.", en: "No, maybe it's sick.", grammarTags: [{"text": "è", "type": "passato_prossimo"}, {"text": "malato", "type": "presente"}] }
    ]
  },
  "garden_b1": {
    zoneId: "garden",
    zoneName: "Garden",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Che bel fiore! È una rosa?", en: "What a beautiful flower! Is it a rose?", grammarTags: [{"text": "È", "type": "presente"}, {"text": "una", "type": "presente"}, {"text": "rosa", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, l’ho piantata vicino all’albero. Però non è cresciuta molto.", en: "Yes, I planted it near the tree. But it hasn’t grown much.", grammarTags: [{"text": "l’ho piantata", "type": "passato_prossimo"}, {"text": "è cresciuta", "type": "imperfetto"}] },
      { speaker: "Tu", it: "Le foglie sono verdi. E l’erba è alta. Devo tagliarla?", en: "The leaves are green. And the grass is tall. Should I cut it?", grammarTags: [{"text": "sono", "type": "presente"}, {"text": "è", "type": "presente"}, {"text": "Devo", "type": "imperativo"}, {"text": "tagliarla", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "Sì, ma prima raccogliamo questo ramo caduto. Figurati, non è niente.", en: "Yes, but first let’s pick up this fallen branch. Don’t worry, it’s nothing.", grammarTags: [{"text": "raccogliamo", "type": "passato_prossimo"}, {"text": "Figurati", "type": "imperativo"}, {"text": "non è", "type": "presente"}] },
      { speaker: "Tu", it: "Le radici dell’albero sono fuori terra. È normale?", en: "The tree’s roots are above ground. Is that normal?" },
      { speaker: "Amico", it: "No, penso che sia malato. Spero che non si propaghi.", en: "No, I think it’s sick. I hope it doesn’t spread.", grammarTags: [{"text": "penso che sia malato", "type": "passato_prossimo"}, {"text": "Spero che non si propaghi", "type": "congiuntivo"}] }
    ]
  },
  "hand-tools_a2": {
    zoneId: "hand-tools",
    zoneName: "Hand Tools",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Hai il martello? Mi serve subito.", en: "Do you have the hammer? I need it right away.", grammarTags: [{"text": "Hai", "type": "imperfetto"}, {"text": "serve", "type": "imperfetto"}] },
      { speaker: "Amico", it: "Sì, qua. Ma hai il cacciavite?", en: "Yes, here. But do you have the screwdriver?" },
      { speaker: "Tu", it: "Sì, e anche la pinza. Quante viti hai?", en: "Yes, and also the pliers. How many screws do you have?", grammarTags: [{"text": "Sì", "type": "presente"}, {"text": "hai", "type": "presente"}] },
      { speaker: "Amico", it: "Un po', ma non molto. Usa quelle là.", en: "A few, but not many. Use those there.", grammarTags: [{"text": "Usa quelle là", "type": "imperativo"}] },
      { speaker: "Tu", it: "Bene. E il trapano? Lo usiamo?", en: "Good. And the drill? Are we using it?", grammarTags: [{"text": "Bene", "type": "presente"}, {"text": "usiamo", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, per i buchi grossi. Prendi la sega anche?", en: "Yes, for the big holes. Do you also take the saw?", grammarTags: [{"text": "Prendi", "type": "imperativo"}, {"text": "Prendi", "type": "presente"}] }
    ]
  },
  "hand-tools_b1": {
    zoneId: "hand-tools",
    zoneName: "Hand Tools",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Hai il martello? Me lo serve subito.", en: "Do you have the hammer? I need it right away.", grammarTags: [{"text": "Hai", "type": "imperativo"}, {"text": "serve", "type": "passato_prossimo"}] },
      { speaker: "You", it: "Do you have the hammer? I need it right away.", en: "Do you have the hammer? I need it right away." },
      { speaker: "Amico", it: "Sì, qua. Però hai il cacciavite?", en: "Yes, here. But do you have a screwdriver?" },
      { speaker: "Friend", it: "Yes, here. But do you have the screwdriver?", en: "Yes, here. But do you have the screwdriver?", grammarTags: [{"text": "do you have", "type": "imperfetto"}, {"text": "have", "type": "presente"}] },
      { speaker: "Tu", it: "Sì, e anche la pinza. Quante viti hai?", en: "Yes, and also the pliers. How many screws do you have?", grammarTags: [{"text": "Sì", "type": "presente"}, {"text": "hai", "type": "presente"}] },
      { speaker: "You", it: "Yes, and also the pliers. How many screws do you have?", en: "Yes, and also the pliers. How many screws do you have?" },
      { speaker: "Amico", it: "Un po', ma non molto. Usa quelle là.", en: "A little, but not much. Use those ones.", grammarTags: [{"text": "Usa quelle là", "type": "imperativo"}] },
      { speaker: "Friend", it: "A few, but not many. Use those ones there.", en: "A few, but not many. Use those ones there." },
      { speaker: "Tu", it: "Bene. E il trapano? Lo usiamo?", en: "Well. And the drill? Do we use it?", grammarTags: [{"text": "Bene", "type": "presente"}, {"text": "usiamo", "type": "presente"}] },
      { speaker: "You", it: "Good. And the drill? Are we using it?", en: "Good. And the drill? Are we using it?" },
      { speaker: "Amico", it: "Sì, per i buchi grossi. Prendi la sega anche?", en: "Yes, for the big holes. Take the saw too?", grammarTags: [{"text": "Prendi", "type": "imperativo"}, {"text": "Prendi", "type": "presente"}] },
      { speaker: "Friend", it: "Yes, for the big holes. Do you need the saw too?", en: "Yes, for the big holes. Do you need the saw too?", grammarTags: [{"text": "Do you need", "type": "imperfetto"}, {"text": "the saw", "type": "presente"}, {"text": "too", "type": "imperativo"}] }
    ]
  },
  "jewelry_a2": {
    zoneId: "jewelry",
    zoneName: "Jewelry Box",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Mi presti la collana? È per la festa.", en: "Can you lend me the necklace? It's for the party.", grammarTags: [{"text": "Mi presti", "type": "imperfetto"}, {"text": "È", "type": "presente"}, {"text": "per la festa", "type": "presente"}] },
      { speaker: "Amico", it: "Certo. Prendi anche gli orecchini?", en: "Sure. Do you also want the earrings?", grammarTags: [{"text": "Prendi", "type": "imperativo"}, {"text": "Prendi", "type": "presente"}] },
      { speaker: "Tu", it: "Sì. E l'anello? Quello d'argento.", en: "Yes. And the ring? The silver one." },
      { speaker: "Amico", it: "Ecco. Il bracciale è rotto, non prenderlo.", en: "Here. The bracelet is broken, don't take it.", grammarTags: [{"text": "è rotto", "type": "passato_prossimo"}, {"text": "non prenderlo", "type": "imperativo"}] },
      { speaker: "Tu", it: "Va bene. Il mio orologio fa abbinamento con la collana.", en: "Alright. My watch matches the necklace.", grammarTags: [{"text": "Va bene", "type": "imperativo"}, {"text": "fa", "type": "passato_prossimo"}, {"text": "fa abbinamento", "type": "passato_prossimo"}, {"text": "con la collana", "type": "presente"}] }
    ]
  },
  "jewelry_b1": {
    zoneId: "jewelry",
    zoneName: "Jewelry Box",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Mi presti la collana? È per la festa.", en: "Can you lend me the necklace? It's for the party.", grammarTags: [{"text": "Mi presti", "type": "imperfetto"}, {"text": "È", "type": "presente"}, {"text": "per la festa", "type": "presente"}] },
      { speaker: "Amico", it: "Certo. Perché non prendi anche gli orecchini?", en: "Sure. Why don’t you take the earrings too?", grammarTags: [{"text": "prendi", "type": "imperfetto"}, {"text": "prendi", "type": "imperativo"}] },
      { speaker: "Tu", it: "Sì, ma ho visto che c’è anche un anello. Quello d’argento.", en: "Yes, but I saw there’s also a ring. The silver one.", grammarTags: [{"text": "ho visto", "type": "passato_prossimo"}, {"text": "c’è", "type": "imperfetto"}, {"text": "Quello", "type": "presente"}, {"text": "d’argento", "type": "presente"}] },
      { speaker: "Amico", it: "Ecco. Purtroppo il bracciale è rotto, quindi non prenderlo.", en: "Here. Unfortunately, the bracelet is broken, so don’t take it.", grammarTags: [{"text": "Ecco", "type": "imperativo"}, {"text": "è rotto", "type": "passato_prossimo"}, {"text": "non prenderlo", "type": "imperativo"}] },
      { speaker: "Tu", it: "Va bene. Comunque, il mio orologio fa abbinamento con la collana.", en: "Alright. Anyway, my watch matches the necklace.", grammarTags: [{"text": "Va bene", "type": "imperativo"}, {"text": "fa abbinamento", "type": "passato_prossimo"}, {"text": "fa abbinamento", "type": "presente"}] },
      { speaker: "Amico", it: "Figurati! Spero che ti piaccia tutto.", en: "You’re welcome! I hope you like everything.", grammarTags: [{"text": "Figurati", "type": "imperativo"}, {"text": "Spero", "type": "presente"}, {"text": "che ti piaccia", "type": "congiuntivo"}] }
    ]
  },
  "kitchen_a2": {
    zoneId: "kitchen",
    zoneName: "Kitchen",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Vuoi delle uova?", en: "Do you want some eggs?", grammarTags: [{"text": "Vuoi", "type": "imperativo"}] },
      { speaker: "Amico", it: "Sì, due. E un po' di formaggio dentro.", en: "Yes, two. And some cheese inside." },
      { speaker: "Tu", it: "Metto anche un po' di latte e burro.", en: "I'll also put a little milk and butter.", grammarTags: [{"text": "Metto", "type": "imperativo"}] },
      { speaker: "Amico", it: "La carne la facciamo dopo? Ho del pollo.", en: "Should we make the meat after? I have some chicken.", grammarTags: [{"text": "facciamo", "type": "passato_prossimo"}, {"text": "Ho", "type": "presente"}] },
      { speaker: "Tu", it: "Meglio il pesce. È più leggero.", en: "Better fish. It's lighter.", grammarTags: [{"text": "Meglio il pesce", "type": "congiuntivo"}, {"text": "È più leggero", "type": "passato_prossimo"}] },
      { speaker: "Amico", it: "Va bene. Poi yogurt con panna per dessert?", en: "Alright. Then yogurt with cream for dessert?", grammarTags: [{"text": "Va bene", "type": "imperativo"}, {"text": "Poi yogurt con panna per dessert", "type": "presente"}] },
      { speaker: "Tu", it: "Perfetto.", en: "Perfect." }
    ]
  },
  "kitchen_b1": {
    zoneId: "kitchen",
    zoneName: "Kitchen",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Vuoi delle uova?", en: "Do you want some eggs?", grammarTags: [{"text": "Vuoi", "type": "imperativo"}] },
      { speaker: "Amico", it: "Sì, due. E un po’ di formaggio dentro, per favore.", en: "Yes, two. And a bit of cheese inside, please." },
      { speaker: "Tu", it: "Metto anche un po’ di latte e burro. Poi, però, dobbiamo decidere se fare la carne o il pesce.", en: "I’ll also put a little milk and butter. But then we need to decide whether to do the meat or the fish.", grammarTags: [{"text": "Metto", "type": "presente"}, {"text": "dobbiamo", "type": "presente"}, {"text": "fare", "type": "imperativo"}, {"text": "decidere", "type": "imperfetto"}] },
      { speaker: "Amico", it: "Spero che venga il pesce. È più leggero, comunque.", en: "I hope the fish comes. It’s lighter, anyway.", grammarTags: [{"text": "Spero che venga il pesce", "type": "congiuntivo"}, {"text": "venga", "type": "congiuntivo"}, {"text": "È più leggero", "type": "presente"}, {"text": "comunque", "type": "presente"}] },
      { speaker: "Tu", it: "Va bene. Poi, figurati, yogurt con panna per dessert?", en: "Alright. And by the way, yogurt with cream for dessert?", grammarTags: [{"text": "Va bene", "type": "imperativo"}, {"text": "Poi", "type": "presente"}, {"text": "figurati", "type": "imperativo"}, {"text": "per dessert", "type": "presente"}] },
      { speaker: "Amico", it: "Perfetto. Meno male che hai pensato al dessert!", en: "Perfect. Good thing you thought of dessert!" }
    ]
  },
  "library_a2": {
    zoneId: "library",
    zoneName: "Knowledge Hub",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Cerchi un libro?", en: "Looking for a book?", grammarTags: [{"text": "Cerchi", "type": "imperfetto"}] },
      { speaker: "Amico", it: "Sì, un romanzo. Hai letto questa biografia?", en: "Yes, a novel. Did you read this biography?", grammarTags: [{"text": "Hai letto", "type": "passato_prossimo"}, {"text": "hai", "type": "imperfetto"}] },
      { speaker: "Tu", it: "No, preferisco la poesia. O i racconti brevi.", en: "No, I prefer poetry. Or short stories.", grammarTags: [{"text": "preferisco", "type": "passato_prossimo"}, {"text": "preferisco", "type": "presente"}, {"text": "O", "type": "imperativo"}] },
      { speaker: "Amico", it: "C'è un manuale interessante in biblioteca. Vuoi che lo prendo?", en: "There's an interesting manual in the library. Want me to get it?", grammarTags: [{"text": "C'è", "type": "congiuntivo"}, {"text": "Vuoi", "type": "imperativo"}, {"text": "che lo prendo", "type": "condizionale"}] },
      { speaker: "Tu", it: "Prima controllo il giornale. Poi vedo.", en: "First I'll check the newspaper. Then I'll see.", grammarTags: [{"text": "Prima controllo il giornale", "type": "presente"}, {"text": "Poi vedo", "type": "passato_prossimo"}] },
      { speaker: "Amico", it: "Ok. Io prendo anche un dizionario.", en: "Ok. I'll also get a dictionary.", grammarTags: [{"text": "prendo", "type": "presente"}] }
    ]
  },
  "library_b1": {
    zoneId: "library",
    zoneName: "Knowledge Hub",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Hai visto un libro da leggere?", en: "Have you seen a book to read?", grammarTags: [{"text": "Hai visto", "type": "passato_prossimo"}] },
      { speaker: "Amico", it: "Sì, ma non ho ancora letto questa biografia. Tu, invece, hai già finito il romanzo?", en: "Yes, but I haven't read this biography yet. What about you? Have you already finished the novel?", grammarTags: [{"text": "hai già finito", "type": "passato_prossimo"}] },
      { speaker: "Tu", it: "No, preferisco la poesia. O i racconti brevi. Però non so se ce ne siano.", en: "No, I prefer poetry. Or short stories. But I don't know if there are any.", grammarTags: [{"text": "preferisco", "type": "passato_prossimo"}, {"text": "ce ne siano", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "C'è un manuale interessante in biblioteca. Vuoi che lo prendo?", en: "There's an interesting manual in the library. Want me to get it?", grammarTags: [{"text": "C'è", "type": "congiuntivo"}, {"text": "Vuoi", "type": "imperfetto"}, {"text": "che lo prendo", "type": "condizionale"}] },
      { speaker: "Tu", it: "Prima controllo il giornale. Poi vedo. Comunque, figurati, non c'è problema.", en: "First I'll check the newspaper. Then I'll see. Anyway, don't worry, it's no problem.", grammarTags: [{"text": "Prima controllo il giornale", "type": "passato_prossimo"}, {"text": "Poi vedo", "type": "passato_prossimo"}, {"text": "figurati", "type": "congiuntivo"}, {"text": "non c'è problema", "type": "presente"}] },
      { speaker: "Amico", it: "Ok. Io prendo anche un dizionario. Spero che non sia troppo vecchio.", en: "Ok. I'll also get a dictionary. I hope it's not too old.", grammarTags: [{"text": "prendo", "type": "presente"}, {"text": "sia", "type": "congiuntivo"}] }
    ]
  },
  "mammals_a2": {
    zoneId: "mammals",
    zoneName: "Mammal Zone",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Guarda quel cane! È molto bello.", en: "Look at that dog! It's very handsome.", grammarTags: [{"text": "Guarda", "type": "imperativo"}, {"text": "È", "type": "presente"}, {"text": "è", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, ma preferisco il gatto là vicino. È più tranquillo.", en: "Yes, but I prefer the cat over there. It's calmer.", grammarTags: [{"text": "preferisco", "type": "passato_prossimo"}, {"text": "È", "type": "presente"}, {"text": "è", "type": "presente"}, {"text": "più", "type": "presente"}, {"text": "tranquillo", "type": "presente"}] },
      { speaker: "Tu", it: "Quante pecore ci sono in questo recinto?", en: "How many sheep are in this enclosure?" },
      { speaker: "Amico", it: "Un po', ma non tante. C'è anche una capra.", en: "A few, but not many. There's also a goat.", grammarTags: [{"text": "C'è", "type": "congiuntivo"}, {"text": "Un po'", "type": "presente"}, {"text": "non tante", "type": "presente"}, {"text": "C'è", "type": "congiuntivo"}, {"text": "una capra", "type": "presente"}] },
      { speaker: "Tu", it: "Vuoi andare a vedere il cavallo?", en: "Do you want to go see the horse?", grammarTags: [{"text": "Vuoi", "type": "imperativo"}] },
      { speaker: "Amico", it: "Sì, ma prima passiamo vicino alla mucca e al maiale.", en: "Yes, but first let's go near the cow and the pig." }
    ]
  },
  "mammals_b1": {
    zoneId: "mammals",
    zoneName: "Mammal Zone",
    level: "b1",
    exchanges: [
      { speaker: "Persona", it: "Guarda quel cane! È molto bello.", en: "Look at that dog! It's really handsome.", grammarTags: [{"text": "Guarda", "type": "imperativo"}, {"text": "È", "type": "presente"}, {"text": "è", "type": "presente"}] },
      { speaker: "Persona", it: "Sì, però preferisco il gatto là vicino. È più tranquillo.", en: "Yes, but I prefer the cat over there. It's calmer.", grammarTags: [{"text": "preferisco", "type": "passato_prossimo"}, {"text": "È", "type": "presente"}, {"text": "è", "type": "presente"}] },
      { speaker: "Persona", it: "Quante pecore ci sono in questo recinto?", en: "How many sheep are in this enclosure?" },
      { speaker: "Persona", it: "Un po', ma non tante. C'è anche una capra.", en: "A few, but not many. There's also a goat.", grammarTags: [{"text": "C'è", "type": "congiuntivo"}, {"text": "Un po'", "type": "presente"}, {"text": "non tante", "type": "presente"}, {"text": "C'è", "type": "congiuntivo"}, {"text": "una capra", "type": "presente"}] },
      { speaker: "Persona", it: "Vuoi andare a vedere il cavallo?", en: "Do you want to go see the horse?", grammarTags: [{"text": "Vuoi", "type": "imperativo"}] },
      { speaker: "Persona", it: "Sì, però prima passiamo vicino alla mucca e al maiale.", en: "Yes, but let's go past the cow and the pig first.", grammarTags: [{"text": "passiamo", "type": "passato_prossimo"}, {"text": "vicino", "type": "presente"}, {"text": "alla", "type": "presente"}, {"text": "al", "type": "presente"}] }
    ]
  },
  "mirror_a2": {
    zoneId: "mirror",
    zoneName: "The Mirror",
    level: "a2",
    exchanges: [
      { speaker: "Amico", it: "Guardami allo specchio. Sono troppo grasso?", en: "Look at me in the mirror. Am I too fat?", grammarTags: [{"text": "Guardami", "type": "imperativo"}, {"text": "Sono", "type": "presente"}, {"text": "grasso", "type": "presente"}] },
      { speaker: "Tu", it: "No, sei magro. Ma sembri vecchio oggi.", en: "No, you're thin. But you look old today.", grammarTags: [{"text": "sei", "type": "presente"}, {"text": "sembri", "type": "imperfetto"}] },
      { speaker: "Amico", it: "Grazie. E tu sei alto e bello, come sempre.", en: "Thanks. And you're tall and handsome, as always.", grammarTags: [{"text": "sei", "type": "presente"}, {"text": "come sempre", "type": "presente"}] },
      { speaker: "Tu", it: "Smetterla. Sono basso e brutto, lo so.", en: "Stop it. I'm short and ugly, I know.", grammarTags: [{"text": "Smetterla", "type": "imperativo"}, {"text": "Sono", "type": "presente"}, {"text": "sono", "type": "presente"}, {"text": "basso", "type": "presente"}, {"text": "brutto", "type": "presente"}, {"text": "lo", "type": "presente"}, {"text": "so", "type": "presente"}] },
      { speaker: "Amico", it: "Non dire sciocchezze. Sei forte dentro.", en: "Don't talk nonsense. You're strong inside.", grammarTags: [{"text": "Non dire", "type": "imperativo"}, {"text": "Sei", "type": "presente"}, {"text": "dentro", "type": "presente"}] }
    ]
  },
  "mirror_b1": {
    zoneId: "mirror",
    zoneName: "The Mirror",
    level: "b1",
    exchanges: [
      { speaker: "Amico", it: "Guardami allo specchio. Sono troppo grasso?", en: "Look at me in the mirror. Am I too fat?", grammarTags: [{"text": "Guardami", "type": "imperativo"}, {"text": "Sono", "type": "presente"}, {"text": "grasso", "type": "presente"}] },
      { speaker: "Tu", it: "No, sei magro. Però oggi sembri un po' stanco.", en: "No, you're thin. But you look a bit tired today.", grammarTags: [{"text": "sei", "type": "presente"}, {"text": "sembri", "type": "imperfetto"}] },
      { speaker: "Amico", it: "Grazie. E tu sei alto e bello, come sempre.", en: "Thanks. And you're tall and handsome, as always.", grammarTags: [{"text": "sei", "type": "presente"}, {"text": "come sempre", "type": "presente"}] },
      { speaker: "Tu", it: "Figurati. Sono basso e non sono bello, lo so.", en: "Don't mention it. I'm short and not handsome, I know.", grammarTags: [{"text": "Figurati", "type": "congiuntivo"}, {"text": "Sono", "type": "presente"}, {"text": "sono", "type": "presente"}, {"text": "lo so", "type": "presente"}] },
      { speaker: "Amico", it: "Non dire sciocchezze. Spero che tu abbia fiducia in te stesso.", en: "Don't talk nonsense. I hope you have confidence in yourself.", grammarTags: [{"text": "Non dire", "type": "imperativo"}, {"text": "Spero che tu abbia", "type": "passato_prossimo"}, {"text": "tu abbia", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "Grazie. Comunque, non ti preoccupare, io non sono mai troppo grasso.", en: "Thanks. Anyway, don't worry, I'm never too fat.", grammarTags: [{"text": "non ti preoccupare", "type": "imperativo"}, {"text": "io non sono", "type": "passato_prossimo"}, {"text": "non sono mai troppo grasso", "type": "presente"}] }
    ]
  },
  "movement_a2": {
    zoneId: "movement",
    zoneName: "Movement Zone",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Vuoi correre o camminare?", en: "Do you want to run or walk?" },
      { speaker: "Amico", it: "Correre! Ma non troppo veloce, eh?", en: "Run! But not too fast, huh?" },
      { speaker: "Tu", it: "D'accordo. Poi possiamo saltare un po'?", en: "Okay. Then can we skip a bit?" },
      { speaker: "Amico", it: "Sì, ma non troppo in alto, o rischiamo di cadere.", en: "Yes, but not too high, or we risk falling." },
      { speaker: "Tu", it: "Hai paura? Io invece vorrei nuotare.", en: "Are you afraid? I would rather swim." },
      { speaker: "Amico", it: "Non oggi. Forse domani. Per ora spingiamo il carrello.", en: "---" }
    ]
  },
  "movement_b1": {
    zoneId: "movement",
    zoneName: "Movement Zone",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Allora, vuoi correre o camminare?", en: "Then, do you want to run or walk?", grammarTags: [{"text": "vuoi", "type": "presente"}] },
      { speaker: "You", it: "So, do you want to run or walk?", en: "So, do you want to run or walk?" },
      { speaker: "Amico", it: "Correre, ma non troppo veloce, però.", en: "Run, but not too fast, though." },
      { speaker: "Friend", it: "Run, but not too fast, though.", en: "Run, but not too fast, though." },
      { speaker: "Tu", it: "D’accordo. Poi, magari possiamo saltare un po’?", en: "Okay. Then, maybe we can skip a bit?", grammarTags: [{"text": "D’accordo", "type": "presente"}, {"text": "possiamo", "type": "passato_prossimo"}, {"text": "saltare", "type": "imperfetto"}] },
      { speaker: "You", it: "Okay. Then, maybe we can jump a little?", en: "Okay. Then, maybe we can jump a little?" },
      { speaker: "Amico", it: "Sì, ma non troppo in alto, altrimenti rischiamo di cadere.", en: "Yes, but not too high, otherwise we risk falling.", grammarTags: [{"text": "Sì", "type": "presente"}, {"text": "non troppo in alto", "type": "presente"}, {"text": "altrimenti", "type": "condizionale"}, {"text": "rischiamo", "type": "passato_prossimo"}] },
      { speaker: "Friend", it: "Yes, but not too high, or we might fall.", en: "Yes, but not too high, or we might fall." },
      { speaker: "Tu", it: "Hai paura? Io invece vorrei nuotare.", en: "Are you afraid? I would rather swim.", grammarTags: [{"text": "Hai paura", "type": "congiuntivo"}, {"text": "vorrei", "type": "condizionale"}] },
      { speaker: "You", it: "Are you scared? I, on the other hand, would like to swim.", en: "Are you scared? I, on the other hand, would like to swim.", grammarTags: [{"text": "Are you scared?", "type": "imperfetto"}, {"text": "would like", "type": "condizionale"}] },
      { speaker: "Amico", it: "Non oggi. Forse domani. Per ora, spingiamo il carrello, figurati.", en: "Not today. Maybe tomorrow. For now, let's push the cart, you know.", grammarTags: [{"text": "Non oggi", "type": "presente"}, {"text": "Forse domani", "type": "futuro"}, {"text": "spingiamo", "type": "passato_prossimo"}, {"text": "figurati", "type": "imperativo"}] },
      { speaker: "Friend", it: "Not today. Maybe tomorrow. For now, let's push the cart, come on.", en: "Not today. Maybe tomorrow. For now, let's push the cart, come on.", grammarTags: [{"text": "let's push", "type": "imperativo"}, {"text": "come on", "type": "imperativo"}] }
    ]
  },
  "nightstand_a2": {
    zoneId: "nightstand",
    zoneName: "Nightstand",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Che ore sono? Non trovo il mio orologio.", en: "What time is it? I can't find my watch.", grammarTags: [{"text": "Che ore sono?", "type": "imperativo"}, {"text": "Non trovo", "type": "passato_prossimo"}, {"text": "il mio orologio", "type": "presente"}] },
      { speaker: "Amico", it: "Guarda la sveglia sul comodino. Sono le 7.", en: "Look at the alarm clock on the nightstand. It's 7.", grammarTags: [{"text": "Guarda", "type": "imperativo"}, {"text": "sono", "type": "presente"}, {"text": "sono", "type": "presente"}] },
      { speaker: "Tu", it: "Troppo presto. Accendo la lampada per leggere un po'.", en: "Too early. I'll turn on the lamp to read a bit.", grammarTags: [{"text": "Accendo", "type": "passato_prossimo"}, {"text": "leggere", "type": "imperfetto"}] },
      { speaker: "Amico", it: "Prendi il libro. E gli occhiali, se non vedi bene.", en: "Take the book. And your glasses, if you can't see well.", grammarTags: [{"text": "Prendi", "type": "imperativo"}, {"text": "vedi", "type": "presente"}] },
      { speaker: "Tu", it: "Grazie. Tu dormi ancora?", en: "Thanks. You still sleeping?", grammarTags: [{"text": "dormi", "type": "presente"}, {"text": "Tu", "type": "imperativo"}] },
      { speaker: "Amico", it: "Sì, spenga la lampada quando hai finito.", en: "Yes, turn off the lamp when you're done.", grammarTags: [{"text": "spenga", "type": "congiuntivo"}, {"text": "hai", "type": "imperfetto"}] }
    ]
  },
  "nightstand_b1": {
    zoneId: "nightstand",
    zoneName: "Nightstand",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Che ore sono? Non ho trovato il mio orologio.", en: "What time is it? I haven't found my watch.", grammarTags: [{"text": "Che ore sono?", "type": "imperfetto"}, {"text": "Non ho trovato", "type": "passato_prossimo"}, {"text": "il mio orologio", "type": "presente"}] },
      { speaker: "Amico", it: "Guarda la sveglia sul comodino. Sono le 7.", en: "Look at the alarm clock on the nightstand. It's 7.", grammarTags: [{"text": "Guarda", "type": "imperativo"}, {"text": "sono", "type": "presente"}, {"text": "sono", "type": "presente"}] },
      { speaker: "Tu", it: "Troppo presto. Accendo la lampada per leggere un po', ma non voglio disturbarti.", en: "Too early. I'll turn on the lamp to read a bit, but I don't want to disturb you.", grammarTags: [{"text": "Accendo", "type": "passato_prossimo"}, {"text": "leggere", "type": "imperfetto"}, {"text": "voglio", "type": "presente"}, {"text": "disturbarti", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "Prendi il libro. E gli occhiali, se non vedi bene. Figurati, non ti disturbo.", en: "Take the book. And your glasses, if you can't see well. Don't worry, I'm not disturbing you.", grammarTags: [{"text": "Prendi", "type": "imperativo"}, {"text": "vedi", "type": "presente"}, {"text": "Figurati", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "Grazie. Tu dormi ancora?", en: "Thanks. Are you still sleeping?", grammarTags: [{"text": "dormi", "type": "presente"}, {"text": "Tu", "type": "imperativo"}] },
      { speaker: "Amico", it: "Sì, ma spero che tu spegni la lampada quando hai finito.", en: "Yes, but I hope you turn off the lamp when you're done.", grammarTags: [{"text": "che tu spegni", "type": "congiuntivo"}, {"text": "hai", "type": "passato_prossimo"}, {"text": "finito", "type": "passato_prossimo"}] }
    ]
  },
  "number-plate_a2": {
    zoneId: "number-plate",
    zoneName: "House Number",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Qual è il numero civico?", en: "What's the house number?" },
      { speaker: "Amico", it: "Numero cinque. O forse sei? No, aspetta — otto.", en: "Number five. Or maybe six? No, wait — eight." },
      { speaker: "Tu", it: "Non è otto. Guarda lì — c'è scritto 'dieci'.", en: "It's not eight. Look there — it says 'ten'.", grammarTags: [{"text": "Non è otto", "type": "passato_prossimo"}, {"text": "c'è scritto", "type": "passato_prossimo"}, {"text": "Guarda", "type": "imperativo"}, {"text": "è", "type": "presente"}, {"text": "c'è", "type": "presente"}] },
      { speaker: "Amico", it: "Hai ragione. Dieci. E il tuo è undici?", en: "You're right. Ten. And yours is eleven?", grammarTags: [{"text": "Hai", "type": "imperfetto"}, {"text": "Dieci", "type": "presente"}, {"text": "E", "type": "presente"}, {"text": "il tuo", "type": "presente"}, {"text": "è", "type": "imperfetto"}] },
      { speaker: "Tu", it: "No, dodici. Due porte più avanti.", en: "No, twelve. Two doors further." }
    ]
  },
  "number-plate_b1": {
    zoneId: "number-plate",
    zoneName: "House Number",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Qual è il numero civico?", en: "What is the house number?" },
      { speaker: "Amico", it: "Cinque, però non ne sono sicuro. Forse sei?", en: "Five, but I'm not sure. Maybe six?", grammarTags: [{"text": "sei", "type": "imperfetto"}] },
      { speaker: "Tu", it: "No, aspetta — lì c'è scritto 'otto'.", en: "No, wait — there it says \"eight.", grammarTags: [{"text": "No", "type": "imperativo"}, {"text": "aspetta", "type": "imperfetto"}, {"text": "c'è", "type": "passato_prossimo"}, {"text": "scritto", "type": "passato_prossimo"}, {"text": "otto", "type": "presente"}] },
      { speaker: "Amico", it: "Ah, hai ragione. Ma il tuo non è dieci?", en: "Ah, you're right. But isn't yours ten?", grammarTags: [{"text": "hai", "type": "presente"}, {"text": "non è", "type": "presente"}, {"text": "è", "type": "presente"}, {"text": "hai", "type": "imperativo"}] },
      { speaker: "Tu", it: "No, è dodici. Due porte più avanti.", en: "---" },
      { speaker: "You", it: "What is the house number?", en: "What is the house number?" },
      { speaker: "Friend", it: "Five, but I'm not sure. Maybe six?", en: "Five, but I'm not sure. Maybe six?" },
      { speaker: "You", it: "No, wait — there it says 'eight'.", en: "No, wait — it says 'eight'." },
      { speaker: "Friend", it: "Oh, you're right. But isn't yours ten?", en: "Oh, you're right. But isn't yours ten?" },
      { speaker: "You", it: "No, it's twelve. Two doors ahead.", en: "No, it's twelve. Two doors ahead." }
    ]
  },
  "paintings_a2": {
    zoneId: "paintings",
    zoneName: "The Paintings",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Guarda questo quadro! Che colore hai preferito?", en: "Look at this painting! Which color did you like best?", grammarTags: [{"text": "Guarda", "type": "imperativo"}, {"text": "hai", "type": "presente"}, {"text": "preferito", "type": "passato_prossimo"}] },
      { speaker: "Amico", it: "Io il blu. Ma ti piace il rosso?", en: "I me blue. But do you like red?" },
      { speaker: "Tu", it: "Sì, ma è troppo forte. C'è una scultura in mostra?", en: "Yes, but it's too strong. Is there a sculpture on display?", grammarTags: [{"text": "è", "type": "presente"}, {"text": "è", "type": "passato_prossimo"}, {"text": "C'è", "type": "imperfetto"}, {"text": "C'è", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "Sì, lì in fondo. Ma non mi piace la luce là.", en: "Yes, over there. But I don't like the light there.", grammarTags: [{"text": "Sì", "type": "presente"}, {"text": "mi piace", "type": "presente"}, {"text": "la luce", "type": "presente"}, {"text": "là", "type": "presente"}] },
      { speaker: "Tu", it: "Dove è l'artista? Lo vedo?", en: "Where is the artist? I see him?", grammarTags: [{"text": "Dove è l'artista", "type": "presente"}, {"text": "vedo", "type": "presente"}, {"text": "Lo vedo", "type": "passato_prossimo"}] },
      { speaker: "Amico", it: "No, non c'è. Ma c'è un pennello appeso. Strano.", en: "No, there isn't. But there's a brush hanging. Strange.", grammarTags: [{"text": "non c'è", "type": "passato_prossimo"}, {"text": "c'è", "type": "passato_prossimo"}, {"text": "c'è", "type": "presente"}, {"text": "appeso", "type": "passato_prossimo"}, {"text": "Strano", "type": "presente"}] },
      { speaker: "Tu", it: "Sì, ma non è un quadro. Vuoi andare a vedere la mostra?", en: "Yes, but it's not a painting. Want to go see the exhibition?", grammarTags: [{"text": "Vuoi", "type": "imperativo"}, {"text": "la mostra", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, un po' di luce mi piace di più.", en: "Yes, I prefer a little light." }
    ]
  },
  "paintings_b1": {
    zoneId: "paintings",
    zoneName: "The Paintings",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Guarda questo quadro! Hai già visto qualcosa che ti è piaciuto?", en: "Look at this painting! Have you already seen something you liked?", grammarTags: [{"text": "Guarda", "type": "imperativo"}, {"text": "hai", "type": "passato_prossimo"}, {"text": "è piaciuto", "type": "passato_prossimo"}, {"text": "Hai", "type": "presente"}, {"text": "già", "type": "presente"}, {"text": "ti", "type": "presente"}, {"text": "è", "type": "presente"}, {"text": "piaciuto", "type": "passato_prossimo"}] },
      { speaker: "Amico", it: "Spero che ti piaccia il blu. Però io preferisco il rosso. Ti piace?", en: "I hope you like the blue. But I prefer the red. Do you like it?", grammarTags: [{"text": "Spero che ti piaccia il blu", "type": "congiuntivo"}, {"text": "ti piaccia", "type": "congiuntivo"}, {"text": "preferisco", "type": "presente"}, {"text": "Ti piace?", "type": "imperativo"}] },
      { speaker: "Tu", it: "Sì, ma è un po’ troppo forte. C’è una scultura in mostra?", en: "Yes, but it’s a bit too strong. Is there a sculpture on display?", grammarTags: [{"text": "è", "type": "presente"}, {"text": "è", "type": "passato_prossimo"}, {"text": "C’è", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "Sì, lì in fondo. Però non mi piace la luce là. Meno male che c’è un’altra stanza.", en: "Yes, over there at the back. But I don’t like the light there. At least there’s another room.", grammarTags: [{"text": "Sì, lì in fondo", "type": "presente"}, {"text": "Però non mi piace la luce là", "type": "passato_prossimo"}] },
      { speaker: "Tu", it: "Dove è l’artista? Lo hai visto?", en: "Where is the artist? Have you seen him?", grammarTags: [{"text": "Dove è l’artista?", "type": "presente"}, {"text": "Lo hai visto?", "type": "passato_prossimo"}] },
      { speaker: "Amico", it: "No, non c’è. Ma c’è un pennello appeso. Strano, no?", en: "No, he’s not there. But there’s a brush hanging. Strange, isn’t it?", grammarTags: [{"text": "non c’è", "type": "passato_prossimo"}, {"text": "c’è", "type": "passato_prossimo"}, {"text": "c’è", "type": "passato_prossimo"}, {"text": "Strano", "type": "imperfetto"}] }
    ]
  },
  "pantry_a2": {
    zoneId: "pantry",
    zoneName: "The Pantry",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Faccio la pasta. Mi passi il sale?", en: "I'm making pasta. Can you pass me the salt?", grammarTags: [{"text": "Faccio", "type": "congiuntivo"}, {"text": "passi", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "Ecco. Vuoi anche l'olio?", en: "Here. Do you want the oil too?", grammarTags: [{"text": "Ecco", "type": "imperativo"}, {"text": "Vuoi", "type": "presente"}, {"text": "anche", "type": "presente"}, {"text": "l'olio", "type": "presente"}] },
      { speaker: "Tu", it: "Sì, un giro. E il pane? Dov'è?", en: "Yes, a swirl. And the bread? Where is it?", grammarTags: [{"text": "Sì", "type": "presente"}, {"text": "un giro", "type": "presente"}, {"text": "pane", "type": "presente"}, {"text": "Dov'è", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "Nella dispensa, vicino al riso.", en: "In the pantry, next to the rice." },
      { speaker: "Tu", it: "Prendi anche la farina? Forse faccio dolci dopo.", en: "Can you also get the flour? Maybe I'll make desserts later.", grammarTags: [{"text": "Prendi", "type": "imperativo"}, {"text": "faccio", "type": "presente"}] },
      { speaker: "Amico", it: "Zucchero e caffè?", en: "Sugar and coffee?" },
      { speaker: "Tu", it: "Sì, grazie.", en: "Yes, thanks." }
    ]
  },
  "pantry_b1": {
    zoneId: "pantry",
    zoneName: "The Pantry",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Sto facendo la pasta. Mi passi il sale?", en: "I'm making pasta. Can you pass me the salt?", grammarTags: [{"text": "Sto facendo", "type": "passato_prossimo"}, {"text": "Mi passi", "type": "imperativo"}] },
      { speaker: "Amico", it: "Ecco. Vuoi anche l'olio?", en: "Here. Do you want the oil too?", grammarTags: [{"text": "Vuoi", "type": "presente"}, {"text": "Ecco", "type": "imperativo"}] },
      { speaker: "Tu", it: "Sì, un giro. E il pane? Dove è?", en: "Yes, a swirl. And the bread? Where is it?", grammarTags: [{"text": "Sì", "type": "presente"}, {"text": "un giro", "type": "presente"}, {"text": "è", "type": "presente"}, {"text": "pane", "type": "presente"}, {"text": "dove", "type": "imperfetto"}] },
      { speaker: "Amico", it: "È nella dispensa, vicino al riso.", en: "It's in the pantry, next to the rice." },
      { speaker: "Tu", it: "Prendi anche la farina? Magari faccio dei dolci dopo.", en: "Can you get the flour too? Maybe I'll make some desserts later.", grammarTags: [{"text": "Prendi", "type": "imperativo"}, {"text": "faccio", "type": "presente"}] },
      { speaker: "Amico", it: "Vuoi anche zucchero e caffè?", en: "Do you want sugar and coffee too?", grammarTags: [{"text": "Vuoi", "type": "imperativo"}] },
      { speaker: "Tu", it: "Sì, grazie. Figurati, ma non c'è il latte?", en: "Yes, thanks. Don't mention it, but is there any milk?" },
      { speaker: "Amico", it: "Meno male che te lo chiedi. Non c'è, ma posso andare a comprarlo.", en: "Good thing you asked. There isn't any, but I can go buy some.", grammarTags: [{"text": "Meno male che te lo chiedi", "type": "congiuntivo"}, {"text": "Non c'è", "type": "presente"}, {"text": "posso andare", "type": "presente"}, {"text": "posso andare a comprarlo", "type": "presente"}] }
    ]
  },
  "path_a2": {
    zoneId: "path",
    zoneName: "The Path",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Prendiamo il sentiero o la strada principale?", en: "Should we take the path or the main road?", grammarTags: [{"text": "Prendiamo", "type": "imperativo"}] },
      { speaker: "Amico", it: "Il sentiero. Passiamo sopra il ponte di pietra.", en: "The path. We'll go over the stone bridge.", grammarTags: [{"text": "Passiamo", "type": "presente"}, {"text": "sopra", "type": "presente"}, {"text": "ponte", "type": "presente"}, {"text": "di", "type": "presente"}, {"text": "pietra", "type": "presente"}] },
      { speaker: "Tu", it: "Ma c'è un cancello chiuso più avanti.", en: "But there's a closed gate further ahead.", grammarTags: [{"text": "c'è", "type": "congiuntivo"}, {"text": "è", "type": "passato_prossimo"}, {"text": "chiuso", "type": "passato_prossimo"}, {"text": "più", "type": "presente"}, {"text": "avanti", "type": "presente"}] },
      { speaker: "Amico", it: "Possiamo saltare la pietra grande. O girare sulla terra.", en: "We can jump over the big rock. Or turn onto the dirt.", grammarTags: [{"text": "Possiamo", "type": "congiuntivo"}, {"text": "saltare", "type": "passato_prossimo"}, {"text": "girare", "type": "imperfetto"}] },
      { speaker: "Tu", it: "Meglio girare. Non voglio cadere.", en: "Better to turn. I don't want to fall.", grammarTags: [{"text": "Meglio girare", "type": "imperativo"}, {"text": "Non voglio cadere", "type": "presente"}] }
    ]
  },
  "path_b1": {
    zoneId: "path",
    zoneName: "The Path",
    level: "b1",
    exchanges: [
      { speaker: "Persona", it: "Prendiamo il sentiero o la strada principale?", en: "Shall we take the path or the main road?", grammarTags: [{"text": "Prendiamo", "type": "imperativo"}] },
      { speaker: "Persona", it: "Il sentiero, però c’è un cancello chiuso più avanti.", en: "The path, but there's a closed gate ahead.", grammarTags: [{"text": "c’è", "type": "imperfetto"}, {"text": "è", "type": "passato_prossimo"}, {"text": "c’è", "type": "imperativo"}] },
      { speaker: "Persona", it: "Allora giriamo sulla terra. Non voglio rischiare.", en: "Then we take the dirt path. I don’t want to take any risks.", grammarTags: [{"text": "giriamo", "type": "passato_prossimo"}, {"text": "voglio", "type": "presente"}] },
      { speaker: "Persona", it: "Sì, meglio girare. Ho visto la pietra grande, è pericolosa.", en: "Yes, better to go around. I saw the big stone, it's dangerous.", grammarTags: [{"text": "Ho visto", "type": "passato_prossimo"}, {"text": "è", "type": "presente"}, {"text": "è pericolosa", "type": "presente"}] },
      { speaker: "Persona", it: "Comunque, possiamo saltare il cancello, se non vuoi girare.", en: "Anyway, we could jump over the gate if you don’t want to go around.", grammarTags: [{"text": "possiamo", "type": "presente"}, {"text": "se", "type": "congiuntivo"}, {"text": "vuoi", "type": "imperfetto"}] }
    ]
  },
  "platform_a2": {
    zoneId: "platform",
    zoneName: "Platform",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "A che binario parte il treno?", en: "On which platform does the train leave?" },
      { speaker: "Amico", it: "Binario 3. Ma c'è un ritardo di 20 minuti.", en: "Platform 3. But there's a 20-minute delay.", grammarTags: [{"text": "c'è", "type": "congiuntivo"}, {"text": "ritardo", "type": "presente"}] },
      { speaker: "Tu", it: "Speriamo che l'arrivo non sia in ritardo.", en: "Let's hope the arrival isn't late.", grammarTags: [{"text": "Speriamo", "type": "imperfetto"}, {"text": "che l'arrivo non sia in ritardo", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "Il vagone ristorante è aperto. Andiamo a prendere un caffè.", en: "The dining car is open. Let's go get a coffee.", grammarTags: [{"text": "è aperto", "type": "passato_prossimo"}, {"text": "Andiamo", "type": "imperativo"}] },
      { speaker: "Tu", it: "Bene. Quando il treno arriva, saliamo.", en: "Good. When the train arrives, we'll board.", grammarTags: [{"text": "saliamo", "type": "passato_prossimo"}, {"text": "arriva", "type": "imperfetto"}, {"text": "saliamo", "type": "imperativo"}] }
    ]
  },
  "platform_b1": {
    zoneId: "platform",
    zoneName: "Platform",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "A che binario parte il treno?", en: "On which platform does the train leave?" },
      { speaker: "Amico", it: "È partito dal binario 3, ma c’è stato un ritardo di 20 minuti.", en: "It left from platform 3, but there was a 20-minute delay.", grammarTags: [{"text": "È partito", "type": "passato_prossimo"}, {"text": "c’è stato", "type": "passato_prossimo"}, {"text": "c’è", "type": "presente"}] },
      { speaker: "Tu", it: "Spero che non ci sia un ritardo anche all’arrivo.", en: "I hope there isn’t a delay at the arrival either.", grammarTags: [{"text": "Spero", "type": "congiuntivo"}, {"text": "che non ci sia", "type": "congiuntivo"}, {"text": "ci sia", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "Per fortuna, il vagone ristorante è aperto. Andiamo a prendere un caffè?", en: "Fortunately, the dining car is open. Let’s go get a coffee?", grammarTags: [{"text": "è aperto", "type": "passato_prossimo"}, {"text": "Andiamo", "type": "imperativo"}] },
      { speaker: "Tu", it: "Figurati, meno male che è aperto. Ne ho proprio bisogno.", en: "Sure, good thing it’s open. I really need one.", grammarTags: [{"text": "Figurati", "type": "imperativo"}, {"text": "è aperto", "type": "passato_prossimo"}, {"text": "ho", "type": "presente"}, {"text": "bisogno", "type": "presente"}] },
      { speaker: "Amico", it: "Quando il treno arriva, andiamo su. Comunque, non dimenticare il biglietto.", en: "When the train arrives, we’ll go on board. Anyway, don’t forget your ticket.", grammarTags: [{"text": "arriva", "type": "passato_prossimo"}, {"text": "andiamo", "type": "passato_prossimo"}, {"text": "dimenticare", "type": "imperativo"}, {"text": "non dimenticare", "type": "imperativo"}, {"text": "Quando", "type": "presente"}, {"text": "andiamo", "type": "presente"}, {"text": "non dimenticare", "type": "imperativo"}] }
    ]
  },
  "produce_a2": {
    zoneId: "produce",
    zoneName: "Fresh Produce",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Prendo una mela e una pera. Tu che prendi?", en: "I take an apple and a pear. What are you taking?", grammarTags: [{"text": "Prendo", "type": "presente"}, {"text": "prendi", "type": "imperativo"}] },
      { speaker: "Amico", it: "Un po' di arance e una banana. E tu, carote o lattuga?", en: "A few oranges and a banana. And you, carrots or lettuce?" },
      { speaker: "Tu", it: "Un po' di carote. E tu, pomodori?", en: "A little bit of carrots. And you, tomatoes?" },
      { speaker: "Amico", it: "Sì, molti pomodori. Ne vuoi anche tu?", en: "Yes, many tomatoes. Do you want some too?", grammarTags: [{"text": "vuoi", "type": "congiuntivo"}, {"text": "Ne", "type": "imperativo"}] },
      { speaker: "Tu", it: "Un paio, grazie.", en: "A couple, thanks." }
    ]
  },
  "produce_b1": {
    zoneId: "produce",
    zoneName: "Fresh Produce",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Ho preso una mela e una pera. Tu che hai preso?", en: "I took an apple and a pear. What did you take?", grammarTags: [{"text": "Ho preso", "type": "passato_prossimo"}, {"text": "hai preso", "type": "passato_prossimo"}, {"text": "Tu che", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "Un po’ di arance e una banana. E tu, carote o lattuga?", en: "A few oranges and a banana. And you, carrots or lettuce?" },
      { speaker: "Tu", it: "Un po’ di carote. Però non so se ne voglia anche tu.", en: "A little bit of carrots. But I don’t know if you want any too.", grammarTags: [{"text": "voglia", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "Spero che ne voglia anche tu. Ho preso tanti pomodori.", en: "I hope you want some too. I took a lot of tomatoes.", grammarTags: [{"text": "Spero che ne voglia anche tu", "type": "congiuntivo"}, {"text": "Ho preso", "type": "passato_prossimo"}, {"text": "voglia", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "Ah, io ne prendo un paio. Comunque, hai visto i meloni?", en: "Oh, I’ll take a couple. By the way, have you seen the melons?", grammarTags: [{"text": "io ne prendo", "type": "passato_prossimo"}, {"text": "hai visto", "type": "passato_prossimo"}, {"text": "prendo", "type": "presente"}, {"text": "hai visto", "type": "passato_prossimo"}] },
      { speaker: "Amico", it: "Figurati, non ne ho visti. Meno male che hai preso le carote!", en: "Don’t worry, I haven’t seen any. Good thing you took the carrots!", grammarTags: [{"text": "Figurati", "type": "imperativo"}, {"text": "hai preso", "type": "passato_prossimo"}, {"text": "hai preso", "type": "passato_prossimo"}, {"text": "non ne ho visti", "type": "passato_prossimo"}, {"text": "hai preso", "type": "passato_prossimo"}] }
    ]
  },
  "shoes_a2": {
    zoneId: "shoes",
    zoneName: "Shoe Rack",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Devo uscire. Dove sono le mie scarpe?", en: "I need to go out. Where are my shoes?", grammarTags: [{"text": "Devo", "type": "congiuntivo"}, {"text": "uscire", "type": "passato_prossimo"}, {"text": "Dove", "type": "imperativo"}, {"text": "sono", "type": "presente"}, {"text": "scarpe", "type": "presente"}] },
      { speaker: "Amico", it: "Sullo scaffale. Ma oggi piove — meglio gli stivali.", en: "On the rack. But it's raining today — better the boots." },
      { speaker: "Tu", it: "Hai ragione. E i sandali?", en: "You're right. And the sandals?", grammarTags: [{"text": "Hai", "type": "imperfetto"}, {"text": "ragione", "type": "presente"}, {"text": "E", "type": "presente"}, {"text": "i", "type": "presente"}, {"text": "sandali", "type": "presente"}] },
      { speaker: "Amico", it: "Per l'estate. Ora prendi le pantofole se resti.", en: "For summer. Now take the slippers if you're staying.", grammarTags: [{"text": "prendi", "type": "imperativo"}, {"text": "resti", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "No, esco. Dov'è il paio di scarpette nuove?", en: "No, I'm going out. Where's the new pair of little shoes?", grammarTags: [{"text": "esco", "type": "passato_prossimo"}, {"text": "Dov'è", "type": "imperfetto"}, {"text": "paio", "type": "presente"}, {"text": "scarpette", "type": "presente"}, {"text": "nuove", "type": "presente"}] },
      { speaker: "Amico", it: "Nell'armadio, vicino agli stivali.", en: "In the closet, near the boots." }
    ]
  },
  "shoes_b1": {
    zoneId: "shoes",
    zoneName: "Shoe Rack",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Devo uscire. Dove sono le mie scarpe?", en: "I need to go out. Where are my shoes?", grammarTags: [{"text": "Devo", "type": "congiuntivo"}, {"text": "uscire", "type": "passato_prossimo"}, {"text": "Dove", "type": "imperativo"}, {"text": "sono", "type": "presente"}, {"text": "scarpe", "type": "presente"}] },
      { speaker: "Amico", it: "Sono sullo scaffale. Però oggi piove — meglio prendere gli stivali.", en: "They're on the rack. But it's raining today — better to take the boots.", grammarTags: [{"text": "Sono", "type": "presente"}, {"text": "piove", "type": "presente"}, {"text": "prendere", "type": "imperativo"}] },
      { speaker: "Tu", it: "Hai ragione. E i sandali?", en: "You're right. And the sandals?", grammarTags: [{"text": "Hai", "type": "imperfetto"}, {"text": "ragione", "type": "presente"}, {"text": "E", "type": "presente"}, {"text": "i", "type": "presente"}, {"text": "sandali", "type": "presente"}] },
      { speaker: "Amico", it: "Sono per l’estate. Comunque, se resti, prendi le pantofole.", en: "They're for summer. Anyway, if you're staying, take the slippers.", grammarTags: [{"text": "Sono", "type": "presente"}, {"text": "resti", "type": "congiuntivo"}, {"text": "prendi", "type": "imperativo"}] },
      { speaker: "Tu", it: "No, esco. Dov’è il paio di scarpette nuove?", en: "No, I'm going out. Where's the new pair of shoes?", grammarTags: [{"text": "esco", "type": "passato_prossimo"}, {"text": "Dov’è", "type": "congiuntivo"}, {"text": "paio", "type": "presente"}, {"text": "scarpette", "type": "presente"}, {"text": "nuove", "type": "presente"}] },
      { speaker: "Amico", it: "Le ho viste nell’armadio, vicino agli stivali. Spero che non siano finite nel water.", en: "I saw them in the closet, near the boots. I hope they didn’t end up in the toilet.", grammarTags: [{"text": "Le ho viste", "type": "passato_prossimo"}, {"text": "Spero che non siano", "type": "congiuntivo"}, {"text": "non siano", "type": "congiuntivo"}] }
    ]
  },
  "shopping_a2": {
    zoneId: "shopping",
    zoneName: "Gift Shop",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Cerchi un regalo? Hai visto quelle magliette?", en: "Are you looking for a gift? Have you seen those T-shirts?", grammarTags: [{"text": "Cerchi", "type": "congiuntivo"}, {"text": "Hai visto", "type": "passato_prossimo"}, {"text": "quelle magliette", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, ma preferisco un libro. Hai visto i libri?", en: "Yes, but I prefer a book. Have you seen any books?", grammarTags: [{"text": "preferisco", "type": "passato_prossimo"}, {"text": "hai", "type": "imperfetto"}, {"text": "libri", "type": "imperfetto"}, {"text": "preferisco", "type": "passato_prossimo"}, {"text": "hai", "type": "imperfetto"}, {"text": "libri", "type": "imperfetto"}] },
      { speaker: "Tu", it: "Ecco, li vedi? E quelle cartoline, non sono belle?", en: "Here, do you see them? And those postcards, aren't they nice?", grammarTags: [{"text": "Ecco", "type": "imperativo"}, {"text": "vedi", "type": "presente"}, {"text": "non sono", "type": "passato_prossimo"}, {"text": "sono", "type": "presente"}, {"text": "belle", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, sono molto belle. Ma io voglio un souvenir per mio figlio.", en: "Yes, they are very beautiful. But I want a souvenir for my son.", grammarTags: [{"text": "sono", "type": "passato_prossimo"}, {"text": "voglio", "type": "presente"}] },
      { speaker: "Tu", it: "C’è un sacco di souvenir qui. Quanti ne vuoi?", en: "There are a lot of souvenirs here. How many do you want?", grammarTags: [{"text": "C’è", "type": "congiuntivo"}, {"text": "vuoi", "type": "imperfetto"}] },
      { speaker: "Amico", it: "Un po’ bastano. Prendo quelle con il disegno dell’isola.", en: "---", grammarTags: [{"text": "Un po’ bastano", "type": "passato_prossimo"}, {"text": "Prendo", "type": "presente"}] },
      { speaker: "You", it: "Looking for a gift? Have you seen those T-shirts?", en: "Looking for a gift? Have you seen those T-shirts?" },
      { speaker: "Friend", it: "Yes, but I prefer a book. Have you seen the books?", en: "Yes, but I prefer a book. Have you seen the books?", grammarTags: [{"text": "Have you seen", "type": "imperfetto"}, {"text": "prefer", "type": "presente"}, {"text": "books", "type": "presente"}] },
      { speaker: "You", it: "Here they are. And those postcards, aren’t they nice?", en: "Here they are. And those postcards, aren't they nice?", grammarTags: [{"text": "aren’t they nice", "type": "congiuntivo"}] },
      { speaker: "Friend", it: "Yes, they’re very nice. But I want a souvenir for my son.", en: "Yes, they're very nice. But I want a souvenir for my son.", grammarTags: [{"text": "they’re", "type": "presente"}, {"text": "want", "type": "presente"}] },
      { speaker: "You", it: "There are lots of souvenirs here. How many do you want?", en: "There are lots of souvenirs here. How many do you want?" },
      { speaker: "Friend", it: "A few will do. I’ll take those with the island drawing.", en: "A few will do. I'll take those with the island drawing.", grammarTags: [{"text": "I’ll take", "type": "futuro"}, {"text": "with the island drawing", "type": "presente"}] }
    ]
  },
  "shopping_b1": {
    zoneId: "shopping",
    zoneName: "Gift Shop",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Cerchi un regalo? Hai visto quelle magliette?", en: "Are you looking for a gift? Have you seen those T-shirts?", grammarTags: [{"text": "Cerchi", "type": "congiuntivo"}, {"text": "Hai visto", "type": "passato_prossimo"}, {"text": "quelle magliette", "type": "presente"}] },
      { speaker: "You", it: "Looking for a gift? Have you seen those T-shirts?", en: "Looking for a gift? Have you seen those T-shirts?", grammarTags: [{"text": "Have you seen", "type": "imperfetto"}, {"text": "Looking", "type": "presente"}, {"text": "Have", "type": "passato_prossimo"}] },
      { speaker: "Amico", it: "Sì, ma preferisco un libro. Ho già visto i libri?", en: "Yes, but I prefer a book. Have I already seen the books?", grammarTags: [{"text": "preferisco", "type": "presente"}, {"text": "Ho", "type": "passato_prossimo"}] },
      { speaker: "Friend", it: "Yes, but I prefer a book. Have I already seen the books?", en: "Yes, but I prefer a book. Have I already seen the books?", grammarTags: [{"text": "Have I already seen", "type": "congiuntivo"}, {"text": "prefer", "type": "presente"}, {"text": "books", "type": "presente"}] },
      { speaker: "Tu", it: "Ecco, li vedi? E quelle cartoline, non sono belle?", en: "Here, do you see them? And those postcards, aren't they nice?", grammarTags: [{"text": "Ecco", "type": "imperativo"}, {"text": "vedi", "type": "presente"}, {"text": "non sono", "type": "passato_prossimo"}, {"text": "sono", "type": "presente"}, {"text": "belle", "type": "presente"}] },
      { speaker: "You", it: "Here they are. And those postcards, aren’t they nice?", en: "Here they are. And those postcards, aren't they nice?", grammarTags: [{"text": "aren’t they nice", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "Sì, sono molto belle. Pero io voglio un souvenir per mio figlio.", en: "Yes, they are very beautiful. But I want a souvenir for my son.", grammarTags: [{"text": "sono", "type": "passato_prossimo"}, {"text": "voglio", "type": "presente"}] },
      { speaker: "Friend", it: "Yes, they’re very nice. But I want a souvenir for my son.", en: "Yes, they're very nice. But I want a souvenir for my son.", grammarTags: [{"text": "they’re", "type": "presente"}, {"text": "want", "type": "presente"}] },
      { speaker: "Tu", it: "C’è un sacco di souvenir qui. Quanti ne vuoi?", en: "There are a lot of souvenirs here. How many do you want?", grammarTags: [{"text": "C’è", "type": "congiuntivo"}, {"text": "vuoi", "type": "congiuntivo"}] },
      { speaker: "You", it: "There are lots of souvenirs here. How many do you want?", en: "There are lots of souvenirs here. How many do you want?" },
      { speaker: "Amico", it: "Un po’ bastano. Prendo quelle con il disegno dell’isola.", en: "A few are enough. I'll take the ones with the island drawing.", grammarTags: [{"text": "Un po’ bastano", "type": "passato_prossimo"}, {"text": "Prendo", "type": "presente"}] },
      { speaker: "Friend", it: "A few will do. I’ll take those with the island drawing.", en: "A few will do. I'll take those with the island drawing.", grammarTags: [{"text": "I’ll take", "type": "futuro"}, {"text": "with the island drawing", "type": "presente"}] }
    ]
  },
  "shower_a2": {
    zoneId: "shower",
    zoneName: "The Shower",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Faccio la doccia. C'è ancora shampoo?", en: "I'm taking a shower. Is there still shampoo?", grammarTags: [{"text": "Faccio", "type": "congiuntivo"}, {"text": "C'è", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, e c'è anche il bagnoschiuma. L'asciugamano è dietro la porta.", en: "Yes, and there's body wash too. The towel is behind the door." },
      { speaker: "Tu", it: "L'acqua è calda?", en: "Is the water hot?" },
      { speaker: "Amico", it: "Abbastanza. Lasciala scorrere un po' prima.", en: "Enough. Let it run a bit first.", grammarTags: [{"text": "Abbastanza", "type": "presente"}, {"text": "Lasciala", "type": "imperativo"}, {"text": "scorrere", "type": "imperfetto"}] },
      { speaker: "Tu", it: "Ok, esco tra dieci minuti.", en: "Ok, I'll be out in ten minutes." }
    ]
  },
  "shower_b1": {
    zoneId: "shower",
    zoneName: "The Shower",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Sto facendo la doccia. Hai ancora dello shampoo?", en: "I'm taking a shower. Do you still have any shampoo?", grammarTags: [{"text": "Sto facendo", "type": "passato_prossimo"}, {"text": "Hai", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, e c’è anche il bagnoschiuma. Però l’asciugamano è dietro la porta.", en: "Yes, and there's body wash too. But the towel is behind the door.", grammarTags: [{"text": "c’è", "type": "congiuntivo"}, {"text": "l’asciugamano è", "type": "presente"}] },
      { speaker: "Tu", it: "L’acqua è calda?", en: "Is the water hot?" },
      { speaker: "Amico", it: "Abbastanza. Spero che non ti bruci, ma lasciala scorrere un po’ prima.", en: "Enough. I hope it doesn’t burn you, but let it run a bit first.", grammarTags: [{"text": "Spero che non ti bruci", "type": "congiuntivo"}, {"text": "lasciala scorrere", "type": "imperativo"}] },
      { speaker: "Tu", it: "Ok, esco tra dieci minuti.", en: "Okay, I’ll be out in ten minutes." },
      { speaker: "Amico", it: "Figurati, non c’è problema. Comunque, ti aspetto qui.", en: "Don’t worry, no problem. Anyway, I’ll wait for you here.", grammarTags: [{"text": "Figurati", "type": "congiuntivo"}, {"text": "non c’è", "type": "passato_prossimo"}, {"text": "ti aspetto", "type": "presente"}] }
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
      { speaker: "Amico", it: "Sì, ma porta l'ombrello — domani dicono pioggia.", en: "Yes, but bring an umbrella — they say rain tomorrow." }
    ]
  },
  "sky_b1": {
    zoneId: "sky",
    zoneName: "The Sky",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Hai visto che cielo oggi?", en: "Have you seen the sky today?", grammarTags: [{"text": "Hai visto", "type": "passato_prossimo"}, {"text": "che", "type": "congiuntivo"}, {"text": "oggi", "type": "presente"}] },
      { speaker: "Amico", it: "Bellissimo. Non c'è nemmeno una nuvola.", en: "Beautiful. Not even a cloud.", grammarTags: [{"text": "Bellissimo", "type": "presente"}, {"text": "Non c'è", "type": "passato_prossimo"}, {"text": "nemmeno", "type": "presente"}, {"text": "una", "type": "presente"}, {"text": "nuvola", "type": "presente"}] },
      { speaker: "Tu", it: "E il vento è sparito. Andiamo fuori?", en: "And the wind has gone. Shall we go outside?", grammarTags: [{"text": "è sparito", "type": "passato_prossimo"}, {"text": "Andiamo", "type": "imperativo"}, {"text": "è", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, ma portiamo l'ombrello — dicono che domani pioverà.", en: "Yes, but let's take an umbrella — they say it will rain tomorrow.", grammarTags: [{"text": "portiamo", "type": "passato_prossimo"}, {"text": "pioverà", "type": "futuro"}, {"text": "dicono", "type": "presente"}, {"text": "che", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "Figurati, non ci penso. Oggi è un giorno perfetto.", en: "Forget it, I'm not thinking about it. Today is a perfect day.", grammarTags: [{"text": "Figurati", "type": "congiuntivo"}, {"text": "non ci penso", "type": "passato_prossimo"}, {"text": "è", "type": "presente"}] },
      { speaker: "Amico", it: "Spero che non cambi, ma comunque andiamo.", en: "I hope it doesn't change, but anyway, let's go.", grammarTags: [{"text": "Spero", "type": "presente"}, {"text": "che non cambi", "type": "congiuntivo"}, {"text": "andiamo", "type": "imperativo"}] }
    ]
  },
  "sky-weather_a2": {
    zoneId: "sky-weather",
    zoneName: "Sky View",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Guarda quel sole! È così forte oggi.", en: "Look at that sun! It's so strong today.", grammarTags: [{"text": "Guarda", "type": "imperativo"}, {"text": "È", "type": "presente"}, {"text": "è", "type": "presente"}, {"text": "oggi", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, ma c'è anche una nuvola. Pensi che pioverà?", en: "Yes, but there's also a cloud. Do you think it will rain?", grammarTags: [{"text": "c'è", "type": "congiuntivo"}, {"text": "Pensi", "type": "imperfetto"}, {"text": "pioverà", "type": "futuro"}] },
      { speaker: "Tu", it: "Non so. C'è tanto vento. Mi sembra che sta per arrivare qualcosa.", en: "I don't know. There's a lot of wind. It seems like something is coming.", grammarTags: [{"text": "Non so", "type": "congiuntivo"}, {"text": "Mi sembra che sta per arrivare qualcosa", "type": "congiuntivo"}, {"text": "sta per arrivare", "type": "passato_prossimo"}] },
      { speaker: "Amico", it: "Hai visto quell'arcobaleno? È bellissimo.", en: "Did you see that rainbow? It's beautiful.", grammarTags: [{"text": "Hai visto", "type": "passato_prossimo"}, {"text": "È", "type": "presente"}, {"text": "bellissimo", "type": "presente"}] },
      { speaker: "Tu", it: "Sì, ma dove è il fulmine? Non lo vedo.", en: "Yes, but where is the lightning? I don't see it." },
      { speaker: "Amico", it: "Forse è passato. Vuoi andare dentro? Pioverà un po'.", en: "Maybe it's gone. Do you want to go inside? It will rain a bit.", grammarTags: [{"text": "è passato", "type": "passato_prossimo"}, {"text": "Vuoi", "type": "imperativo"}, {"text": "Pioverà", "type": "futuro"}] }
    ]
  },
  "sky-weather_b1": {
    zoneId: "sky-weather",
    zoneName: "Sky View",
    level: "b1",
    exchanges: [
      { speaker: "Persona", it: "Guarda quel sole! È veramente forte oggi.", en: "Look at that sun! It's really strong today.", grammarTags: [{"text": "Guarda", "type": "imperativo"}, {"text": "È", "type": "presente"}, {"text": "oggi", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, però c'è anche una nuvola. Penso che potrebbe piovere.", en: "Yes, but there's also a cloud. I think it might rain.", grammarTags: [{"text": "c'è", "type": "congiuntivo"}, {"text": "Penso che potrebbe piovere", "type": "condizionale"}, {"text": "potrebbe piovere", "type": "condizionale"}] },
      { speaker: "Tu", it: "Non so. C'è tanto vento. Mi sembra che stia per arrivare qualcosa.", en: "I don't know. There's a lot of wind. It seems like something is coming.", grammarTags: [{"text": "Non so", "type": "congiuntivo"}, {"text": "Mi sembra che stia per arrivare qualcosa", "type": "congiuntivo"}, {"text": "stia", "type": "congiuntivo"}, {"text": "arrivar", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "Hai visto quell'arcobaleno? È bellissimo.", en: "Did you see that rainbow? It's beautiful.", grammarTags: [{"text": "Hai visto", "type": "passato_prossimo"}, {"text": "È", "type": "presente"}, {"text": "bellissimo", "type": "presente"}] },
      { speaker: "Tu", it: "Sì, però dove è il fulmine? Non lo vedo.", en: "Yes, but where is the lightning? I don't see it." },
      { speaker: "Amico", it: "Forse è passato. Vuoi andare dentro? Spero che non piova troppo.", en: "Maybe it's gone. Do you want to go inside? I hope it doesn't rain too much.", grammarTags: [{"text": "è passato", "type": "passato_prossimo"}, {"text": "Vuoi", "type": "imperativo"}, {"text": "Spero che non piova troppo", "type": "congiuntivo"}] }
    ]
  },
  "sofa_a2": {
    zoneId: "sofa",
    zoneName: "The Sofa",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Sono stanco. Siediamo sul divano?", en: "I'm tired. Let's sit on the sofa?", grammarTags: [{"text": "Sono stanco", "type": "passato_prossimo"}, {"text": "Siediamo", "type": "imperfetto"}] },
      { speaker: "Amico", it: "Sì, ma preferisco la poltrona. È più comoda.", en: "Yes, but I prefer the armchair. It's more comfortable.", grammarTags: [{"text": "preferisco", "type": "passato_prossimo"}, {"text": "È", "type": "presente"}, {"text": "è", "type": "presente"}, {"text": "più", "type": "presente"}, {"text": "comoda", "type": "presente"}] },
      { speaker: "Tu", it: "Vuoi un cuscino?", en: "Do you want a cushion?", grammarTags: [{"text": "Vuoi", "type": "imperativo"}] },
      { speaker: "Amico", it: "Sì, uno. E la coperta? È qui sul tavolino.", en: "Yes, one. And the blanket? It's here on the table.", grammarTags: [{"text": "È qui sul tavolino", "type": "presente"}] },
      { speaker: "Tu", it: "Poco male. Mettiamola qui.", en: "No problem. Let's put it here.", grammarTags: [{"text": "Poco male", "type": "presente"}, {"text": "Mettiamola", "type": "imperativo"}] }
    ]
  },
  "sofa_b1": {
    zoneId: "sofa",
    zoneName: "The Sofa",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Sono stanco. Siediamo sul divano?", en: "I'm tired. Let's sit on the sofa?", grammarTags: [{"text": "Sono stanco", "type": "passato_prossimo"}, {"text": "Siediamo", "type": "imperfetto"}] },
      { speaker: "Amico", it: "Sì, ma preferisco la poltrona. È più comoda. Però, se vuoi, possiamo anche rimanere qui.", en: "Yes, but I prefer the armchair. It's more comfortable. However, if you want, we can stay here too.", grammarTags: [{"text": "preferisco", "type": "passato_prossimo"}, {"text": "È", "type": "presente"}, {"text": "vuoi", "type": "imperfetto"}, {"text": "possiamo", "type": "presente"}, {"text": "se", "type": "congiuntivo"}, {"text": "possiamo", "type": "presente"}] },
      { speaker: "Tu", it: "Vuoi un cuscino?", en: "Do you want a cushion?", grammarTags: [{"text": "Vuoi", "type": "imperativo"}] },
      { speaker: "Amico", it: "Sì, uno. E la coperta? È qui sul tavolino.", en: "Yes, one. And the blanket? It's here on the table.", grammarTags: [{"text": "È qui sul tavolino", "type": "presente"}] },
      { speaker: "Tu", it: "Meno male che l’hai vista. Mettiamola qui.", en: "Good thing you saw it. Let's put it here.", grammarTags: [{"text": "Meno male che l’hai vista", "type": "passato_prossimo"}, {"text": "Mettiamola qui", "type": "imperativo"}] },
      { speaker: "Amico", it: "Figurati. Comunque, pensavo che fosse in camera.", en: "You're welcome. Anyway, I thought it was in the bedroom.", grammarTags: [{"text": "Figurati", "type": "congiuntivo"}, {"text": "pensavo", "type": "imperfetto"}, {"text": "fosse", "type": "congiuntivo"}] }
    ]
  },
  "states_a2": {
    zoneId: "states",
    zoneName: "Mental States",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Hai visto come ha parlato di me? Ho tanto orgoglio.", en: "Have you seen how he spoke about me? I'm so proud.", grammarTags: [{"text": "Hai visto", "type": "passato_prossimo"}, {"text": "ha parlato", "type": "passato_prossimo"}, {"text": "Ho", "type": "presente"}, {"text": "orgoglio", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, ma non ti ha detto niente di male. Però... hai paura?", en: "Yes, but he didn't say anything bad to you. However... are you afraid?", grammarTags: [{"text": "ha detto", "type": "passato_prossimo"}, {"text": "hai paura", "type": "imperfetto"}] },
      { speaker: "Tu", it: "Un po' di ansia, sì. E tu? Hai fiducia in lui?", en: "A little anxiety, yes. And you? Do you trust him?", grammarTags: [{"text": "Hai fiducia", "type": "passato_prossimo"}, {"text": "hai", "type": "presente"}, {"text": "E tu?", "type": "imperativo"}] },
      { speaker: "Amico", it: "Un po', ma non tanto. Mi ha sorpreso.", en: "A little, but not too much. It surprised me.", grammarTags: [{"text": "Mi ha sorpreso", "type": "passato_prossimo"}, {"text": "Mi ha sorpreso", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "E non ti vergogni di averlo detto?", en: "And don't you feel ashamed of saying that?", grammarTags: [{"text": "E non ti vergogni", "type": "presente"}, {"text": "di averlo detto", "type": "passato_prossimo"}] },
      { speaker: "Amico", it: "No, non mi vergogno. È la verità.", en: "No, I don't feel ashamed. It's the truth.", grammarTags: [{"text": "non mi vergogno", "type": "passato_prossimo"}, {"text": "È", "type": "presente"}, {"text": "la verità", "type": "presente"}] }
    ]
  },
  "states_b1": {
    zoneId: "states",
    zoneName: "Mental States",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Hai visto come ha parlato di me? Ho tanto orgoglio, ma mi ha anche un po' ferito.", en: "Have you seen how he spoke about me? I have a lot of pride, but he also hurt me a bit.", grammarTags: [{"text": "Hai visto", "type": "passato_prossimo"}, {"text": "ha parlato", "type": "passato_prossimo"}, {"text": "Ho", "type": "presente"}, {"text": "mi ha", "type": "passato_prossimo"}, {"text": "mi ha", "type": "passato_prossimo"}] },
      { speaker: "Amico", it: "Sì, ma non ti ha detto niente di male. Però... hai paura?", en: "Yes, but he didn’t say anything bad. However... are you scared?", grammarTags: [{"text": "ha detto", "type": "passato_prossimo"}, {"text": "hai paura", "type": "imperfetto"}] },
      { speaker: "Tu", it: "Un po' di ansia, sì. E tu? Hai fiducia in lui?", en: "A bit of anxiety, yes. And you? Do you have trust in him?", grammarTags: [{"text": "Hai fiducia", "type": "passato_prossimo"}, {"text": "hai", "type": "presente"}, {"text": "E tu?", "type": "imperativo"}] },
      { speaker: "Amico", it: "Un po', ma non tanto. Mi ha sorpreso. Penso che sia un po' ingiusto.", en: "A little, but not much. He surprised me. I think he’s a bit unfair.", grammarTags: [{"text": "Mi ha sorpreso", "type": "passato_prossimo"}, {"text": "Penso che sia un po' ingiusto", "type": "congiuntivo"}, {"text": "Penso che sia un po' ingiusto", "type": "presente"}] },
      { speaker: "Tu", it: "E non ti vergogni di averlo detto?", en: "And aren’t you ashamed of having said it?", grammarTags: [{"text": "E non ti vergogni", "type": "presente"}, {"text": "di averlo detto", "type": "passato_prossimo"}] },
      { speaker: "Amico", it: "No, non mi vergogno. È la verità. Figurati se non lo dico!", en: "No, I’m not ashamed. It’s the truth. Imagine if I didn’t say it!", grammarTags: [{"text": "non mi vergogno", "type": "passato_prossimo"}, {"text": "È", "type": "presente"}, {"text": "Figurati se non lo dico", "type": "congiuntivo"}] }
    ]
  },
  "storms_a2": {
    zoneId: "storms",
    zoneName: "Storm Center",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Guarda quel temporale! Che brutto tuono!", en: "Look at that thunderstorm! What terrible thunder!", grammarTags: [{"text": "Guarda", "type": "imperativo"}, {"text": "Che brutto tuono", "type": "imperfetto"}] },
      { speaker: "Amico", it: "Sì, e quel fulmine! Ti sembra che piova?", en: "Yes, and that lightning! Does it seem to you that it's raining?", grammarTags: [{"text": "Ti sembra", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "Sì, un po'. E c'è anche la nebbia.", en: "Yes, a bit. And there's also fog.", grammarTags: [{"text": "c'è", "type": "congiuntivo"}, {"text": "nebbia", "type": "presente"}] },
      { speaker: "Amico", it: "Pensi che venga la grandine?", en: "Do you think hail is coming?", grammarTags: [{"text": "Pensi", "type": "congiuntivo"}, {"text": "venga", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "Non so. Preferisco stare qui, al coperto.", en: "I don't know. I prefer to stay here, out of the weather.", grammarTags: [{"text": "Non so", "type": "congiuntivo"}, {"text": "Preferisco", "type": "presente"}] },
      { speaker: "Amico", it: "Anch'io. Non usciamo finché non passa.", en: "---", grammarTags: [{"text": "Non usciamo", "type": "imperfetto"}, {"text": "finché non passa", "type": "passato_prossimo"}, {"text": "passa", "type": "passato_prossimo"}] }
    ]
  },
  "storms_b1": {
    zoneId: "storms",
    zoneName: "Storm Center",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Guarda quel temporale! Che tuono terribile!", en: "**Look at that storm! What a terrible thunder!**", grammarTags: [{"text": "Guarda", "type": "imperativo"}, {"text": "Che tuono", "type": "presente"}, {"text": "terribile", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, e quel fulmine! Non credo che piova, però...", en: "**Yes, and that lightning! I don’t think it’s raining, though...**", grammarTags: [{"text": "Non credo che piova", "type": "congiuntivo"}, {"text": "piova", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "In realtà, sì. Piove un po', e c'è anche la nebbia.", en: "**Actually, yes. It’s raining a little, and there’s also fog.**", grammarTags: [{"text": "Piove", "type": "imperfetto"}, {"text": "c'è", "type": "presente"}, {"text": "la nebbia", "type": "presente"}] },
      { speaker: "Amico", it: "Pensi che venga la grandine? Non vorrei che ci fosse.", en: "**Do you think there will be hail? I wouldn’t want that to happen.**", grammarTags: [{"text": "Pensi", "type": "presente"}, {"text": "che venga", "type": "congiuntivo"}, {"text": "Non vorrei che ci fosse", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "Non so. Preferisco stare qui, al coperto.", en: "**I don’t know. I prefer to stay here, under cover.**", grammarTags: [{"text": "Non so", "type": "congiuntivo"}, {"text": "Preferisco", "type": "presente"}] },
      { speaker: "Amico", it: "Anch'io. Figurati se usciamo finché non passa.", en: "**Me too. You can imagine that we won’t go out until it passes.**", grammarTags: [{"text": "Figurati", "type": "congiuntivo"}, {"text": "passa", "type": "passato_prossimo"}] }
    ]
  },
  "stove_a2": {
    zoneId: "stove",
    zoneName: "The Stove",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Accendi il fornello? Devo scaldare la padella.", en: "Turn on the stove? I need to heat the pan.", grammarTags: [{"text": "Accendi", "type": "imperativo"}, {"text": "Devo", "type": "presente"}] },
      { speaker: "Amico", it: "Fatto. La pentola per la pasta?", en: "Done. The pot for the pasta?" },
      { speaker: "Tu", it: "Mettila sull'altro fornello. Poi prendi il tagliere.", en: "Put it on the other burner. Then get the cutting board.", grammarTags: [{"text": "Mettila", "type": "imperativo"}, {"text": "prendi", "type": "imperativo"}] },
      { speaker: "Amico", it: "Devo accendere anche il forno?", en: "Should I turn on the oven too?", grammarTags: [{"text": "Devo", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "No, aspetta. Prima scola la pasta con il colino.", en: "No, wait. First drain the pasta with the strainer.", grammarTags: [{"text": "No", "type": "imperativo"}, {"text": "aspetta", "type": "imperativo"}, {"text": "Prima", "type": "presente"}, {"text": "scola", "type": "passato_prossimo"}, {"text": "la", "type": "presente"}, {"text": "pasta", "type": "presente"}, {"text": "con", "type": "presente"}, {"text": "il", "type": "presente"}, {"text": "colino", "type": "presente"}] },
      { speaker: "Amico", it: "Ok. Dopo la cena spengo tutto.", en: "Ok. After dinner I'll turn everything off.", grammarTags: [{"text": "spengo", "type": "passato_prossimo"}, {"text": "Dopo la cena", "type": "presente"}, {"text": "spengo", "type": "presente"}] }
    ]
  },
  "stove_b1": {
    zoneId: "stove",
    zoneName: "The Stove",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Hai già acceso il fornello? Devo scaldare la padella.", en: "Have you already turned on the burner? I need to heat the pan.", grammarTags: [{"text": "Hai già acceso", "type": "passato_prossimo"}, {"text": "Devo", "type": "imperfetto"}] },
      { speaker: "Amico", it: "Sì, l'ho appena acceso. Ma hai già messo la pentola per la pasta?", en: "Yes, I just turned it on. But have you already put the pot for the pasta on?", grammarTags: [{"text": "l'ho appena acceso", "type": "passato_prossimo"}, {"text": "hai già messo", "type": "passato_prossimo"}, {"text": "hai già messo", "type": "imperfetto"}, {"text": "messo", "type": "passato_prossimo"}] },
      { speaker: "Tu", it: "No, mettila sull'altro fornello. Poi prendi il tagliere, per favore.", en: "No, put it on the other burner. Then get the cutting board, please.", grammarTags: [{"text": "mettila", "type": "congiuntivo"}, {"text": "prendi", "type": "imperativo"}, {"text": "per favore", "type": "presente"}] },
      { speaker: "Amico", it: "Figurati. Ma devo anche accendere il forno?", en: "Sure thing. But should I also turn on the oven?", grammarTags: [{"text": "devo", "type": "presente"}, {"text": "Figurati", "type": "imperativo"}] },
      { speaker: "Tu", it: "No, aspetta. Prima scola la pasta con il colino, così non si brucia.", en: "No, wait. First drain the pasta with the strainer, otherwise it will burn.", grammarTags: [{"text": "aspetta", "type": "imperativo"}, {"text": "scola", "type": "presente"}, {"text": "si brucia", "type": "condizionale"}] },
      { speaker: "Amico", it: "Ok, ho capito. Dopo la cena spegnerò tutto, comunque.", en: "Ok, I got it. Anyway, I'll turn everything off after dinner.", grammarTags: [{"text": "ho capito", "type": "passato_prossimo"}, {"text": "spegnerò", "type": "futuro"}, {"text": "comunque", "type": "congiuntivo"}] }
    ]
  },
  "street_a2": {
    zoneId: "street",
    zoneName: "Street Exit",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Dov'è l'uscita per il centro?", en: "Where's the exit to the city center?" },
      { speaker: "Amico", it: "Dopo il semaforo. Gira a destra all'incrocio.", en: "After the traffic light. Turn right at the intersection." },
      { speaker: "Tu", it: "Quale direzione? C'è un cartello che dice 'centro'?", en: "Which direction? Is there a sign that says 'center'?", grammarTags: [{"text": "Quale direzione?", "type": "presente"}, {"text": "C'è", "type": "passato_prossimo"}, {"text": "dice", "type": "imperfetto"}] },
      { speaker: "Amico", it: "Sì, segui quella strada. L'entrata è dall'altra parte.", en: "Yes, follow that road. The entrance is on the other side.", grammarTags: [{"text": "Sì", "type": "presente"}, {"text": "segui", "type": "imperativo"}, {"text": "è", "type": "presente"}, {"text": "è", "type": "presente"}, {"text": "dall'altra", "type": "presente"}] },
      { speaker: "Tu", it: "Ok. Allora vado dritto.", en: "Ok. Then I'll go straight.", grammarTags: [{"text": "vado", "type": "passato_prossimo"}, {"text": "vado dritto", "type": "imperativo"}] }
    ]
  },
  "street_b1": {
    zoneId: "street",
    zoneName: "Street Exit",
    level: "b1",
    exchanges: [
      { speaker: "Persona", it: "Dov'è l'uscita per il centro?", en: "Where is the exit to the city center?" },
      { speaker: "Persona", it: "Dopo il semaforo. Gira a destra all'incrocio.", en: "After the traffic light. Turn right at the intersection." },
      { speaker: "Persona", it: "L'ho vista quella strada? C'è un cartello?", en: "Have you seen that road? Is there a sign?", grammarTags: [{"text": "L'ho vista", "type": "passato_prossimo"}, {"text": "C'è", "type": "presente"}, {"text": "cartello", "type": "presente"}] },
      { speaker: "Persona", it: "Sì, ma non c'è il cartello. Segui comunque quella strada.", en: "Yes, but there's no sign. Follow that road anyway.", grammarTags: [{"text": "Segui", "type": "imperativo"}, {"text": "c'è", "type": "passato_prossimo"}, {"text": "Segui", "type": "imperativo"}] },
      { speaker: "Persona", it: "Ok, quindi vado dritto.", en: "Okay, so I go straight.", grammarTags: [{"text": "vado", "type": "passato_prossimo"}, {"text": "dritto", "type": "presente"}] }
    ]
  },
  "supernatural_a2": {
    zoneId: "supernatural",
    zoneName: "Supernatural",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Hai paura dei fantasmi?", en: "Do you scare easily?", grammarTags: [{"text": "Hai", "type": "imperfetto"}, {"text": "paura", "type": "presente"}, {"text": "dei", "type": "presente"}, {"text": "fantasmi", "type": "presente"}] },
      { speaker: "Amico", it: "Un po', ma solo se sono vecchi. I fantasmi moderni non mi spaventano.", en: "A little, but only if they're old. Modern ghosts don't scare me.", grammarTags: [{"text": "sono", "type": "presente"}, {"text": "spaventano", "type": "presente"}] },
      { speaker: "Tu", it: "E le streghe? Ti piacciono?", en: "What about witches? Do you like them?", grammarTags: [{"text": "Ti piacciono", "type": "imperfetto"}, {"text": "E le streghe", "type": "presente"}, {"text": "Ti piacciono", "type": "imperfetto"}] },
      { speaker: "Amico", it: "No, non mi piacciono. Preferisco i vampiri.", en: "No, I don't like them. I prefer vampires.", grammarTags: [{"text": "non mi piacciono", "type": "passato_prossimo"}, {"text": "Preferisco", "type": "presente"}, {"text": "i vampiri", "type": "presente"}] },
      { speaker: "Tu", it: "Ah, i vampiri? Molto romantici.", en: "Ah, vampires? Very romantic." },
      { speaker: "Amico", it: "Sì, ma non mi piacciono tanto. Preferisco i zombie.", en: "Yes, but I don't like them that much. I prefer zombies.", grammarTags: [{"text": "mi piacciono", "type": "passato_prossimo"}, {"text": "Preferisco", "type": "passato_prossimo"}, {"text": "i zombie", "type": "presente"}] }
    ]
  },
  "supernatural_b1": {
    zoneId: "supernatural",
    zoneName: "Supernatural",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Hai paura dei fantasmi?", en: "Do you get scared by ghosts?", grammarTags: [{"text": "Hai", "type": "imperfetto"}, {"text": "paura", "type": "presente"}, {"text": "dei", "type": "presente"}, {"text": "fantasmi", "type": "presente"}] },
      { speaker: "Amico", it: "Un po', ma solo se sono vecchi. I fantasmi moderni non mi spaventano.", en: "A little, but only if they're old. Modern ghosts don't scare me.", grammarTags: [{"text": "sono", "type": "presente"}, {"text": "spaventano", "type": "presente"}] },
      { speaker: "Tu", it: "E le streghe? Ti piacciono?", en: "What about witches? Do you like them?", grammarTags: [{"text": "Ti piacciono", "type": "imperfetto"}, {"text": "E le streghe", "type": "presente"}, {"text": "Ti piacciono", "type": "imperfetto"}] },
      { speaker: "Amico", it: "No, non mi piacciono. Preferisco i vampiri.", en: "No, I don't like them. I prefer vampires.", grammarTags: [{"text": "non mi piacciono", "type": "passato_prossimo"}, {"text": "Preferisco", "type": "presente"}, {"text": "i vampiri", "type": "presente"}] },
      { speaker: "Tu", it: "Ah, i vampiri? Molto romantici.", en: "Ah, vampires? Very romantic." },
      { speaker: "Amico", it: "Sì, ma non mi piacciono tanto. Preferisco i zombie.", en: "Yes, but I don't like them that much. I prefer zombies.", grammarTags: [{"text": "mi piacciono", "type": "passato_prossimo"}, {"text": "Preferisco", "type": "passato_prossimo"}, {"text": "i zombie", "type": "presente"}] },
      { speaker: "Tu", it: "I zombie? Mica ti spaventano?", en: "Zombies? They don’t scare you?", grammarTags: [{"text": "Mica ti spaventano", "type": "passato_prossimo"}, {"text": "ti", "type": "imperativo"}] },
      { speaker: "Amico", it: "No, figurati. Sono più spaventosi i fantasmi, ma i zombie... sono divertenti.", en: "No, come on. Ghosts are scarier, but zombies... they’re fun.", grammarTags: [{"text": "Sono più spaventosi", "type": "passato_prossimo"}, {"text": "sono divertenti", "type": "passato_prossimo"}, {"text": "Sono più spaventosi", "type": "presente"}, {"text": "sono divertenti", "type": "presente"}] }
    ]
  },
  "table_a2": {
    zoneId: "table",
    zoneName: "The Table",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Posso avere un piatto?", en: "Can I have a plate?", grammarTags: [{"text": "Posso", "type": "congiuntivo"}, {"text": "avere", "type": "passato_prossimo"}, {"text": "un", "type": "presente"}, {"text": "piatto", "type": "presente"}] },
      { speaker: "Amico", it: "Ecco. Vuoi anche un bicchiere?", en: "Here. Do you also want a glass?", grammarTags: [{"text": "Ecco", "type": "presente"}, {"text": "Vuoi", "type": "presente"}] },
      { speaker: "Tu", it: "Sì, per il vino. Ma bevi tu birra?", en: "Yes, for the wine. But are you drinking beer?", grammarTags: [{"text": "bevi", "type": "imperfetto"}, {"text": "bevi", "type": "imperativo"}] },
      { speaker: "Amico", it: "No, succo d'arancia. Ecco la tazza.", en: "No, orange juice. Here's the cup." },
      { speaker: "Tu", it: "Grazie. Dov'è il tovagliolo?", en: "Thanks. Where's the napkin?" },
      { speaker: "Amico", it: "Nel cassetto. Ne prendo uno anche per me.", en: "In the drawer. I'll get one for myself too.", grammarTags: [{"text": "prendo", "type": "passato_prossimo"}, {"text": "prendo", "type": "imperativo"}] }
    ]
  },
  "table_b1": {
    zoneId: "table",
    zoneName: "The Table",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Posso avere un piatto?", en: "Can I have a plate?", grammarTags: [{"text": "Posso", "type": "congiuntivo"}, {"text": "avere", "type": "passato_prossimo"}, {"text": "un", "type": "presente"}, {"text": "piatto", "type": "presente"}] },
      { speaker: "Amico", it: "Ecco. Vuoi anche un bicchiere?", en: "Here. Do you want a glass too?", grammarTags: [{"text": "Vuoi", "type": "presente"}, {"text": "Ecco", "type": "imperativo"}] },
      { speaker: "Tu", it: "Sì, per il vino. Però bevi tu birra?", en: "Yes, for the wine. But are you drinking beer?", grammarTags: [{"text": "bevi", "type": "imperfetto"}, {"text": "bevi", "type": "imperativo"}] },
      { speaker: "Amico", it: "No, preferisco il succo d'arancia. Ecco la tazza.", en: "No, I prefer orange juice. Here's the cup.", grammarTags: [{"text": "preferisco", "type": "passato_prossimo"}, {"text": "Ecco", "type": "imperativo"}] },
      { speaker: "Tu", it: "Grazie. Dov'è il tovagliolo?", en: "Thanks. Where is the napkin?" },
      { speaker: "Amico", it: "È nel cassetto. Ne prendo uno anche per me.", en: "It's in the drawer. I'll get one for myself too.", grammarTags: [{"text": "È", "type": "presente"}, {"text": "prendo", "type": "passato_prossimo"}] }
    ]
  },
  "table-cafe_a2": {
    zoneId: "table-cafe",
    zoneName: "Café Table",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Questo tavolo è libero? Hai visto la sedia?", en: "Is this table free? Did you see the chair?", grammarTags: [{"text": "è libero", "type": "presente"}, {"text": "Hai visto", "type": "passato_prossimo"}, {"text": "la sedia", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, ma c’è un po’ di gente in attesa. Vuoi il menu?", en: "Yes, but there are a few people waiting. Do you want the menu?", grammarTags: [{"text": "c’è", "type": "passato_prossimo"}, {"text": "Vuoi", "type": "imperativo"}, {"text": "Vuoi", "type": "presente"}] },
      { speaker: "Tu", it: "Sì, grazie. E il bicchiere d’acqua?", en: "Yes, thank you. And the glass of water?" },
      { speaker: "Amico", it: "Arriva subito. Hai già scelto il piatto?", en: "It’s coming right away. Have you already chosen the dish?", grammarTags: [{"text": "Arriva", "type": "imperativo"}, {"text": "Hai", "type": "passato_prossimo"}, {"text": "scelto", "type": "passato_prossimo"}, {"text": "hai", "type": "presente"}] },
      { speaker: "Tu", it: "No, ancora non so. Posso guardare il menu un po’ di più?", en: "No, not yet. Can I look at the menu a little more?", grammarTags: [{"text": "so", "type": "presente"}, {"text": "Posso", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "Certo. Ecco il tovagliolo. Il conto arriverà dopo.", en: "Of course. Here’s the napkin. The bill will come later.", grammarTags: [{"text": "Certo", "type": "presente"}, {"text": "Ecco", "type": "imperativo"}, {"text": "Il conto arriverà", "type": "futuro"}] }
    ]
  },
  "table-cafe_b1": {
    zoneId: "table-cafe",
    zoneName: "Café Table",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Questo tavolo è libero? Hai visto la sedia?", en: "Is this table free? Did you see the chair?", grammarTags: [{"text": "è libero", "type": "presente"}, {"text": "Hai visto", "type": "passato_prossimo"}, {"text": "la sedia", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, ma c’è un po’ di gente in attesa. Vuoi il menu?", en: "Yes, but there are a few people waiting. Do you want the menu?", grammarTags: [{"text": "c’è", "type": "passato_prossimo"}, {"text": "Vuoi", "type": "imperativo"}, {"text": "Vuoi", "type": "presente"}] },
      { speaker: "Tu", it: "Sì, grazie. E il bicchiere d’acqua?", en: "Yes, thank you. And the glass of water?" },
      { speaker: "Amico", it: "Arriva subito. Hai già scelto il piatto?", en: "It’s coming right away. Have you already chosen the dish?", grammarTags: [{"text": "Arriva", "type": "imperativo"}, {"text": "Hai", "type": "passato_prossimo"}, {"text": "scelto", "type": "passato_prossimo"}] },
      { speaker: "Tu", it: "No, ancora non so. Posso guardare il menu un po’ di più?", en: "No, not yet. Can I look at the menu a little more?", grammarTags: [{"text": "so", "type": "presente"}, {"text": "Posso", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "Certo. Ecco il tovagliolo. Il conto arriverà dopo.", en: "Of course. Here’s the napkin. The bill will come later.", grammarTags: [{"text": "Certo", "type": "presente"}, {"text": "Ecco", "type": "imperativo"}, {"text": "arriverà", "type": "futuro"}] },
      { speaker: "Tu", it: "Questo tavolo è libero? Hai visto la sedia?", en: "Is this table free? Did you see the chair?", grammarTags: [{"text": "è libero", "type": "presente"}, {"text": "Hai visto", "type": "passato_prossimo"}, {"text": "la sedia", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, ma c’è un po’ di gente in attesa. Ti porto subito il menu.", en: "Yes, but there are a few people waiting. I’ll bring you the menu right away.", grammarTags: [{"text": "c’è", "type": "congiuntivo"}, {"text": "Ti porto", "type": "imperativo"}, {"text": "porto", "type": "passato_prossimo"}, {"text": "è", "type": "congiuntivo"}, {"text": "subito", "type": "presente"}, {"text": "Ti porto", "type": "imperativo"}] },
      { speaker: "Tu", it: "Grazie. E il bicchiere d’acqua?", en: "Thank you. And the glass of water?" },
      { speaker: "Amico", it: "Arriva subito. Però, hai già scelto il piatto?", en: "It’s coming right away. But have you already chosen the dish?", grammarTags: [{"text": "Arriva", "type": "imperativo"}, {"text": "hai", "type": "presente"}, {"text": "hai già scelto", "type": "passato_prossimo"}] },
      { speaker: "Tu", it: "No, non ancora. Posso guardare il menu un po’ di più?", en: "No, not yet. Can I look at the menu a little more?", grammarTags: [{"text": "non ancora", "type": "imperfetto"}, {"text": "Posso", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "Certo, non c’è problema. Ecco il tovagliolo. Il conto arriverà dopo che avrai finito.", en: "Sure, no problem. Here’s the napkin. The bill will come after you’ve finished.", grammarTags: [{"text": "Certo, non c’è problema", "type": "presente"}, {"text": "Ecco il tovagliolo", "type": "imperativo"}, {"text": "Il conto arriverà dopo che avrai finito", "type": "futuro"}, {"text": "dopo che avrai finito", "type": "congiuntivo"}] }
    ]
  },
  "transport_a2": {
    zoneId: "transport",
    zoneName: "Transport Hub",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Hai comprato il biglietto per Roma?", en: "Did you buy the ticket to Rome?", grammarTags: [{"text": "Hai comprato", "type": "passato_prossimo"}, {"text": "per Roma", "type": "presente"}] },
      { speaker: "Amico", it: "Sì. Ecco l'orario: partenza alle 10, arrivo alle 14.", en: "Yes. Here's the schedule: departure at 10, arrival at 2 PM." },
      { speaker: "Tu", it: "La valigia è pronta. Prendo anche lo zaino.", en: "The suitcase is ready. I'll also take the backpack.", grammarTags: [{"text": "La valigia è pronta", "type": "passato_prossimo"}, {"text": "Prendo anche lo zaino", "type": "presente"}] },
      { speaker: "Amico", it: "Io ho l'abbonamento, quindi non pago.", en: "I have a subscription, so I don't pay.", grammarTags: [{"text": "ho", "type": "passato_prossimo"}, {"text": "pago", "type": "presente"}] },
      { speaker: "Tu", it: "Allora ci vediamo alla partenza.", en: "Then see you at departure." }
    ]
  },
  "transport_b1": {
    zoneId: "transport",
    zoneName: "Transport Hub",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Hai già comprato il biglietto per Roma?", en: "Have you already bought the ticket to Rome?", grammarTags: [{"text": "Hai", "type": "congiuntivo"}, {"text": "comprato", "type": "passato_prossimo"}, {"text": "per", "type": "presente"}, {"text": "per", "type": "presente"}, {"text": "Roma", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, l'ho comprato ieri. Però non so se sia ancora valido.", en: "Yes, I bought it yesterday. But I don't know if it's still valid.", grammarTags: [{"text": "l'ho comprato", "type": "passato_prossimo"}, {"text": "so", "type": "presente"}, {"text": "sia", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "La valigia è pronta. Prendo anche lo zaino.", en: "The suitcase is ready. I'll also take the backpack.", grammarTags: [{"text": "La valigia è pronta", "type": "passato_prossimo"}, {"text": "Prendo anche lo zaino", "type": "presente"}] },
      { speaker: "Amico", it: "Io ho l’abbonamento, quindi non pago. Figurati, non c’è problema.", en: "I have a subscription, so I don’t pay. Don’t worry, there’s no problem.", grammarTags: [{"text": "ho", "type": "passato_prossimo"}, {"text": "non pago", "type": "presente"}, {"text": "Figurati", "type": "imperativo"}, {"text": "non c’è", "type": "presente"}] },
      { speaker: "Tu", it: "Allora ci vediamo alla partenza. Spero che non ci siano ritardi.", en: "Then see you at departure. I hope there are no delays.", grammarTags: [{"text": "ci vediamo", "type": "passato_prossimo"}, {"text": "Spero che non ci siano", "type": "congiuntivo"}, {"text": "ci siano", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "Sì, meno male che hai pensato al biglietto. Comunque, ti aspetto lì.", en: "Yes, good thing you thought about the ticket. Anyway, I’ll wait for you there.", grammarTags: [{"text": "hai pensato", "type": "passato_prossimo"}, {"text": "ti aspetto", "type": "presente"}, {"text": "Comunque", "type": "congiuntivo"}] }
    ]
  },
  "tv_a2": {
    zoneId: "tv",
    zoneName: "The TV",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Accendi la televisione?", en: "Do you want to turn on the TV?" },
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
      { speaker: "Tu", it: "Vuoi accendere la televisione?", en: "Do you want to turn on the TV?", grammarTags: [{"text": "Vuoi", "type": "imperativo"}] },
      { speaker: "Amico", it: "Sì, però prima mettiamo un po' di musica.", en: "Yes, but first let's play some music." },
      { speaker: "Tu", it: "C'è un film interessante in programma. Lo guardiamo?", en: "There's an interesting movie on. Should we watch it?", grammarTags: [{"text": "C'è", "type": "congiuntivo"}, {"text": "guardiamo", "type": "imperfetto"}] },
      { speaker: "Amico", it: "No, preferisco la musica. Troppo volume in quel film.", en: "No, I prefer music. That movie is too loud.", grammarTags: [{"text": "preferisco", "type": "passato_prossimo"}, {"text": "Troppo volume", "type": "presente"}, {"text": "in quel film", "type": "presente"}] },
      { speaker: "Tu", it: "Allora accendo la musica. Tu regoli il volume?", en: "Then I'll turn on the music. You adjust the volume?", grammarTags: [{"text": "accendo", "type": "passato_prossimo"}, {"text": "regoli", "type": "imperfetto"}] },
      { speaker: "Amico", it: "Sì, lo faccio. Vuoi che metta il telecomando sullo schermo?", en: "Yes, I'll do it. Do you want me to put the remote on the screen?", grammarTags: [{"text": "lo faccio", "type": "passato_prossimo"}, {"text": "Vuoi", "type": "imperfetto"}, {"text": "che metta", "type": "congiuntivo"}, {"text": "metta", "type": "congiuntivo"}, {"text": "sul", "type": "presente"}, {"text": "sullo", "type": "presente"}] }
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
      { speaker: "Tu", it: "Dov'è la grattugia? Devo grattugiare il formaggio.", en: "Where's the grater? I need to grate the cheese.", grammarTags: [{"text": "Dov'è", "type": "congiuntivo"}, {"text": "Devo", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "Appesa al muro, vicino al coltello.", en: "Hanging on the wall, near the knife." }
    ]
  },
  "utensil-drawer_b1": {
    zoneId: "utensil-drawer",
    zoneName: "Utensil Drawer",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Ho bisogno di un coltello per tagliare la cipolla.", en: "I need a knife to cut the onion.", grammarTags: [{"text": "Ho bisogno", "type": "passato_prossimo"}] },
      { speaker: "Amico", it: "È nel secondo cassetto. Però, ti consiglio di prendere anche una forchetta, no?", en: "It's in the second drawer. But I suggest you also take a fork, okay?", grammarTags: [{"text": "È", "type": "presente"}, {"text": "ti consiglio", "type": "presente"}, {"text": "di prendere", "type": "congiuntivo"}, {"text": "anche", "type": "presente"}, {"text": "no", "type": "presente"}] },
      { speaker: "Tu", it: "Sì, e un cucchiaio per mescolare. Comunque, ho visto che manca il cucchiaio.", en: "Yes, and a spoon to stir. Anyway, I saw that the spoon is missing.", grammarTags: [{"text": "ho visto", "type": "passato_prossimo"}, {"text": "manca", "type": "presente"}] },
      { speaker: "Amico", it: "Figurati, ho appena finito di lavarlo. Ma ti consiglio la spatola invece del mestolo, perché è più comoda.", en: "Don’t worry, I just finished washing it. But I suggest the spatula instead of the ladle, because it's more convenient.", grammarTags: [{"text": "ho appena finito", "type": "passato_prossimo"}, {"text": "Figurati", "type": "imperativo"}, {"text": "ti consiglio", "type": "imperfetto"}, {"text": "è più comoda", "type": "presente"}] },
      { speaker: "Tu", it: "Dov’è la grattugia? Devo grattugiare il formaggio.", en: "Where is the grater? I need to grate the cheese.", grammarTags: [{"text": "Dov’è", "type": "congiuntivo"}, {"text": "Devo", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "È appesa al muro, vicino al coltello. Meno male che l’hai chiesto, perché non l’ho vista nemmeno io.", en: "It's hanging on the wall, near the knife. Good thing you asked, because I didn't even see it.", grammarTags: [{"text": "È appesa", "type": "passato_prossimo"}, {"text": "l’hai chiesto", "type": "passato_prossimo"}, {"text": "non l’ho vista", "type": "passato_prossimo"}, {"text": "l’hai chiesto", "type": "congiuntivo"}, {"text": "non l’ho vista", "type": "congiuntivo"}, {"text": "vicino al coltello", "type": "presente"}] }
    ]
  },
  "welcome-mat_a2": {
    zoneId: "welcome-mat",
    zoneName: "Welcome Mat",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Permesso? Buongiorno a tutti!", en: "May I? Good morning everyone!" },
      { speaker: "Zia", it: "Ciao! Entra, prego.", en: "Hi! Come in, please.", grammarTags: [{"text": "Entra", "type": "imperativo"}, {"text": "prego", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "Grazie. Scusa se arrivo tardi.", en: "Thanks. Sorry I'm late.", grammarTags: [{"text": "Scusa", "type": "imperativo"}, {"text": "arrivo", "type": "passato_prossimo"}] },
      { speaker: "Zia", it: "Non preoccuparti. Forse possiamo mangiare tra un'ora.", en: "Don't worry. Maybe we can eat in an hour.", grammarTags: [{"text": "Non preoccuparti", "type": "imperativo"}, {"text": "possiamo", "type": "presente"}] },
      { speaker: "Tu", it: "Ok. Allora arrivederci — vado a lavarmi le mani.", en: "Ok. Then goodbye for now — I'll go wash my hands.", grammarTags: [{"text": "arrivederci", "type": "congiuntivo"}, {"text": "vado", "type": "passato_prossimo"}] },
      { speaker: "Zia", it: "Buonasera, allora. Più tardi.", en: "Good evening, then. See you later." }
    ]
  },
  "welcome-mat_b1": {
    zoneId: "welcome-mat",
    zoneName: "Welcome Mat",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Permesso? Buongiorno a tutti!", en: "May I? Good morning everyone!" },
      { speaker: "Zia", it: "Ciao! Entra pure, figurati.", en: "Hi! Come in, don't worry.", grammarTags: [{"text": "Entra", "type": "imperativo"}, {"text": "figurati", "type": "congiuntivo"}] },
      { speaker: "Tu", it: "Grazie. Scusa se sono arrivato tardi.", en: "Thanks. Sorry I'm late." },
      { speaker: "Zia", it: "Figurati, non preoccuparti. Pensa che possiamo mangiare tra un’ora.", en: "Don't worry. Think about it, we can eat in an hour.", grammarTags: [{"text": "Figurati", "type": "imperativo"}, {"text": "non preoccuparti", "type": "imperativo"}, {"text": "Pensa", "type": "presente"}, {"text": "possiamo", "type": "presente"}] },
      { speaker: "Tu", it: "Ok. Allora, vado a lavarmi le mani — arrivederci.", en: "Okay. Then, I'll go wash my hands — goodbye.", grammarTags: [{"text": "vado", "type": "passato_prossimo"}, {"text": "lavarmi", "type": "imperfetto"}, {"text": "arrivederci", "type": "imperativo"}] },
      { speaker: "Zia", it: "Buonasera, allora. Più tardi, ma non andare via, per favore.", en: "Good evening, then. See you later, but don't go away, please.", grammarTags: [{"text": "Buonasera", "type": "presente"}, {"text": "andare", "type": "imperativo"}] }
    ]
  },
  "workbench_a2": {
    zoneId: "workbench",
    zoneName: "Workbench",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Il banco è pronto? Ho bisogno della morsa.", en: "The workbench is ready? I need the vise.", grammarTags: [{"text": "è pronto", "type": "passato_prossimo"}, {"text": "Ho bisogno", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, ma la lima l’hai già usata tu, no?", en: "Yes, but you already used the file, right?", grammarTags: [{"text": "hai", "type": "passato_prossimo"}, {"text": "hai", "type": "imperfetto"}, {"text": "hai", "type": "presente"}] },
      { speaker: "Tu", it: "Un po’, ma non tanto. Posso prendere un’altra?", en: "A little, but not too much. Can I take another one?", grammarTags: [{"text": "Posso", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "Sì, ce n’è molto. Prendi pure.", en: "Yes, there’s a lot. Take it.", grammarTags: [{"text": "Sì", "type": "presente"}, {"text": "ce n’è", "type": "passato_prossimo"}, {"text": "Prendi", "type": "imperativo"}, {"text": "pure", "type": "presente"}] },
      { speaker: "Tu", it: "Grazie. E la morsa, dove l’hai messa?", en: "Thanks. And the vise, where did you put it?", grammarTags: [{"text": "Grazie", "type": "imperativo"}, {"text": "hai", "type": "passato_prossimo"}, {"text": "dove", "type": "congiuntivo"}, {"text": "l’hai", "type": "passato_prossimo"}, {"text": "messa", "type": "passato_prossimo"}] },
      { speaker: "Amico", it: "Lì, vicino al banco. Ti do una mano?", en: "There, near the workbench. I can help you?" }
    ]
  },
  "workbench_b1": {
    zoneId: "workbench",
    zoneName: "Workbench",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Il banco è pronto? Ho bisogno della morsa.", en: "Is the workbench ready? I need the vise.", grammarTags: [{"text": "è pronto", "type": "passato_prossimo"}, {"text": "Ho bisogno", "type": "presente"}] },
      { speaker: "Amico", it: "Sì, ma la lima l’hai già usata tu, no?", en: "Yes, but you already used the file, right?", grammarTags: [{"text": "hai", "type": "passato_prossimo"}, {"text": "hai", "type": "imperfetto"}, {"text": "l’hai", "type": "passato_prossimo"}, {"text": "no", "type": "imperativo"}] },
      { speaker: "Tu", it: "Un po’, ma non tanto. Posso prendere un’altra?", en: "A little, but not too much. Can I take another one?", grammarTags: [{"text": "Posso", "type": "congiuntivo"}] },
      { speaker: "Amico", it: "Sì, ce n’è molto. Prendi pure.", en: "Yes, there’s a lot. Go ahead.", grammarTags: [{"text": "Sì", "type": "presente"}, {"text": "ce n’è", "type": "passato_prossimo"}, {"text": "Prendi", "type": "imperativo"}, {"text": "pure", "type": "presente"}] },
      { speaker: "Tu", it: "Grazie. E la morsa, dove l’hai messa?", en: "Thanks. And the vise, where did you put it?", grammarTags: [{"text": "Grazie", "type": "imperativo"}, {"text": "hai", "type": "passato_prossimo"}, {"text": "dove", "type": "congiuntivo"}, {"text": "l’hai", "type": "passato_prossimo"}, {"text": "messa", "type": "passato_prossimo"}] },
      { speaker: "Amico", it: "Lì, vicino al banco. Ti do una mano?", en: "There, near the workbench. Can I help you?" }
    ]
  }
};

export function getZoneStory(zoneId: string, level: LanguageLevel = 'a2'): ZoneStory | undefined {
  return zoneStories[`${zoneId}_${level}`] ?? zoneStories[`${zoneId}_a2`];
}
