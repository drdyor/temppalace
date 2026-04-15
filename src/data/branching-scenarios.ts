// Branching Dialogue Scenarios for each room
// Each scenario has cat characters, subroom contexts, and multiple choice paths

export interface ScenarioNode {
  id: string;
  speaker: 'narrator' | 'npc' | 'player';
  text: string;
  textItalian?: string;
  backgroundEffect?: 'happy' | 'angry' | 'neutral' | 'surprised';
  choices: {
    text: string;
    textItalian?: string;
    nextNodeId: string;
    feedback?: string;
    feedbackItalian?: string;
  }[];
}

export interface BranchingScenario {
  id: string;
  roomId: string;
  title: string;
  titleNative: string;
  timeContext: string;
  startNodeId: string;
  culturalLesson: string;
  catCharacter: {
    id: string;
    name: string;
    emoji: string;
    color: string;
  };
  nodes: Record<string, ScenarioNode>;
}

// ============================================
// KITCHEN SCENARIOS
// ============================================

const kitchenBreakfastScenario: BranchingScenario = {
  id: 'kitchen-breakfast-order',
  roomId: 'kitchen',
  title: 'The Breakfast Order',
  titleNative: "L'Ordine della Colazione",
  timeContext: 'Sunday morning, 8:30 AM',
  startNodeId: 'enter-kitchen',
  culturalLesson: 'Italian breakfast is light: coffee and a pastry. Planning ahead for tomorrow shows good household management.',
  catCharacter: {
    id: 'chef-cat',
    name: 'Chef Cat',
    emoji: '👨‍🍳',
    color: '#E7A04D'
  },
  nodes: {
    'enter-kitchen': {
      id: 'enter-kitchen',
      speaker: 'narrator',
      text: 'You enter the kitchen. 🐱 Chef Cat is checking the pantry with a worried expression.',
      textItalian: 'Entri in cucina. 🐱 Chef Cat sta controllando la dispensa con un\'espressione preoccupata.',
      choices: [
        { 
          text: '💬 "Buongiorno! Cosa stai facendo?"', 
          textItalian: 'Buongiorno! Cosa stai facendo?',
          nextNodeId: 'explain-problem' 
        },
        { 
          text: '🍳 "Posso aiutarti con la colazione?"', 
          textItalian: 'Posso aiutarti con la colazione?',
          nextNodeId: 'offer-help' 
        },
        { 
          text: '☕ "Fammi un caffè, per favore."', 
          textItalian: 'Fammi un caffè, per favore.',
          nextNodeId: 'direct-order' 
        }
      ]
    },
    'explain-problem': {
      id: 'explain-problem',
      speaker: 'npc',
      text: '🐱 Chef Cat turns to you. "Non abbiamo abbastanza per la colazione di domani. Il pane è finito, il latte è scaduto, e non abbiamo più caffè!"',
      textItalian: 'Non abbiamo abbastanza per la colazione di domani. Il pane è finito, il latte è scaduto, e non abbiamo più caffè!',
      backgroundEffect: 'neutral',
      choices: [
        { 
          text: '🛒 "Andiamo al supermercato ora!"', 
          textItalian: 'Andiamo al supermercato ora!',
          nextNodeId: 'supermarket-plan' 
        },
        { 
          text: '📋 "Facciamo una lista della spesa."', 
          textItalian: 'Facciamo una lista della spesa.',
          nextNodeId: 'make-list' 
        },
        { 
          text: '🍞 "Prendiamo il pane dal forno sotto casa."', 
          textItalian: 'Prendiamo il pane dal forno sotto casa.',
          nextNodeId: 'bakery-option' 
        }
      ]
    },
    'offer-help': {
      id: 'offer-help',
      speaker: 'npc',
      text: '🐱 Chef Cat smiles. "Grazie! Sì, ho bisogno di aiuto. Dobbiamo fare una lista per domani."',
      textItalian: 'Grazie! Sì, ho bisogno di aiuto. Dobbiamo fare una lista per domani.',
      backgroundEffect: 'happy',
      choices: [
        { 
          text: '📝 "Cosa ci serve?"', 
          textItalian: 'Cosa ci serve?',
          nextNodeId: 'make-list' 
        }
      ]
    },
    'direct-order': {
      id: 'direct-order',
      speaker: 'npc',
      text: '🐱 Chef Cat looks stressed. "Mi dispiace, non posso fare il caffè. Non abbiamo più caffè!"',
      textItalian: 'Mi dispiace, non posso fare il caffè. Non abbiamo più caffè!',
      backgroundEffect: 'angry',
      choices: [
        { 
          text: '😱 "Niente caffè?! Dobbiamo andare a comprarlo subito!"', 
          textItalian: 'Niente caffè?! Dobbiamo andare a comprarlo subito!',
          nextNodeId: 'urgent-coffee' 
        }
      ]
    },
    'make-list': {
      id: 'make-list',
      speaker: 'npc',
      text: '🐱 Chef Cat pulls out a notepad. "Allora: pane, latte, caffè, burro, marmellata... e forse anche delle uova?"',
      textItalian: 'Allora: pane, latte, caffè, burro, marmellata... e forse anche delle uova?',
      backgroundEffect: 'happy',
      choices: [
        { 
          text: '✅ "Perfetto! Andiamo al supermercato."', 
          textItalian: 'Perfetto! Andiamo al supermercato.',
          nextNodeId: 'end-success' 
        },
        { 
          text: '🍊 "Aggiungiamo anche la frutta!"', 
          textItalian: 'Aggiungiamo anche la frutta!',
          nextNodeId: 'add-fruit' 
        }
      ]
    },
    'supermarket-plan': {
      id: 'supermarket-plan',
      speaker: 'npc',
      text: '🐱 Chef Cat nods. "Buona idea! Ma prima dobbiamo fare una lista, altrimenti dimentichiamo qualcosa."',
      textItalian: 'Buona idea! Ma prima dobbiamo fare una lista, altrimenti dimentichiamo qualcosa.',
      choices: [
        { 
          text: '📝 "Hai ragione. Iniziamo la lista."', 
          textItalian: 'Hai ragione. Iniziamo la lista.',
          nextNodeId: 'make-list' 
        }
      ]
    },
    'bakery-option': {
      id: 'bakery-option',
      speaker: 'npc',
      text: '🐱 Chef Cat considers. "Buona idea per il pane, ma abbiamo ancora bisogno di latte e caffè dal supermercato."',
      textItalian: 'Buona idea per il pane, ma abbiamo ancora bisogno di latte e caffè dal supermercato.',
      choices: [
        { 
          text: '🛒 "Allora facciamo entrambi!"', 
          textItalian: 'Allora facciamo entrambi!',
          nextNodeId: 'end-success' 
        }
      ]
    },
    'urgent-coffee': {
      id: 'urgent-coffee',
      speaker: 'npc',
      text: '🐱 Chef Cat grabs his keys. "Sì, andiamo subito! Senza caffè, domani mattina sarà un disastro!"',
      textItalian: 'Sì, andiamo subito! Senza caffè, domani mattina sarà un disastro!',
      backgroundEffect: 'happy',
      choices: [
        { 
          text: '☕ "Il caffè è sacro!"', 
          textItalian: 'Il caffè è sacro!',
          nextNodeId: 'end-success' 
        }
      ]
    },
    'add-fruit': {
      id: 'add-fruit',
      speaker: 'npc',
      text: '🐱 Chef Cat adds to the list. "Sì, ottima idea! Arance, mele, banane... una colazione completa!"',
      textItalian: 'Sì, ottima idea! Arance, mele, banane... una colazione completa!',
      backgroundEffect: 'happy',
      choices: [
        { 
          text: '🍎 "Perfetto! Andiamo!"', 
          textItalian: 'Perfetto! Andiamo!',
          nextNodeId: 'end-perfect' 
        }
      ]
    },
    'end-success': {
      id: 'end-success',
      speaker: 'narrator',
      text: '✅ You and Chef Cat made a shopping list. Tomorrow\'s breakfast is saved!',
      textItalian: 'Tu e Chef Cat avete fatto una lista della spesa. La colazione di domani è salva!',
      choices: []
    },
    'end-perfect': {
      id: 'end-perfect',
      speaker: 'narrator',
      text: '✅ Perfect planning! You even remembered the fruit. Chef Cat is impressed.',
      textItalian: 'Pianificazione perfetta! Hai anche ricordato la frutta. Chef Cat è impressionato.',
      choices: []
    }
  }
};

// ============================================
// BEDROOM SCENARIOS
// ============================================

const bedroomWrongBagScenario: BranchingScenario = {
  id: 'bedroom-wrong-bag',
  roomId: 'bedroom',
  title: 'The Wrong Bag',
  titleNative: "La Borsa Sbagliata",
  timeContext: 'Afternoon arrival',
  startNodeId: 'knock',
  culturalLesson: 'Always check your luggage immediately. Italian hostels and small B&Bs often have manual bag handling, and mix-ups happen.',
  catCharacter: {
    id: 'porter-cat',
    name: 'Porter Cat',
    emoji: '🐱',
    color: '#8B5CF6'
  },
  nodes: {
    'knock': {
      id: 'knock',
      speaker: 'narrator',
      text: 'There\'s a knock at the door. 🐱 Porter Cat holds a large suitcase, tail wagging with effort. "Ciao, ho portato la tua valigia!"',
      textItalian: 'C\'è un bussare alla porta. 🐱 Porter Cat tiene una grande valigia, la coda si muove con sforzo. "Ciao, ho portato la tua valigia!"',
      choices: [
        { 
          text: '👍 "Sì, è mia. Entra."', 
          textItalian: 'Sì, è mia. Entra.',
          nextNodeId: 'assume-wrong' 
        },
        { 
          text: '🔍 "Aspetta, devo controllare"', 
          textItalian: 'Aspetta, devo controllare',
          nextNodeId: 'check-good' 
        },
        { 
          text: '🙅 "Non è la mia. Io ho uno zaino."', 
          textItalian: 'Non è la mia. Io ho uno zaino.',
          nextNodeId: 'correct-good' 
        }
      ]
    },
    'assume-wrong': {
      id: 'assume-wrong',
      speaker: 'narrator',
      text: 'You open the suitcase. Inside are slippers and a shirt that definitely aren\'t yours.',
      textItalian: 'Apri la valigia. Dentro ci sono pantofole e una camicia che sicuramente non sono le tue.',
      choices: [
        { 
          text: '💬 "Scusa, ho sbagliato. Non è la mia."', 
          textItalian: 'Scusa, ho sbagliato. Non è la mia.',
          nextNodeId: 'correct-good' 
        },
        { 
          text: '😤 "Deve essere mia! Me l\'hai portata tu!"', 
          textItalian: 'Deve essere mia! Me l\'hai portata tu!',
          nextNodeId: 'end-hostile' 
        }
      ]
    },
    'check-good': {
      id: 'check-good',
      speaker: 'npc',
      text: '🐱 Porter Cat nods patiently. "Certo, controlla." You unzip it — your shoes and jacket are inside.',
      textItalian: '🐱 Porter Cat annuisce pazientemente. "Certo, controlla." Apri la cerniera — le tue scarpe e la giacca sono dentro.',
      backgroundEffect: 'happy',
      choices: [
        { 
          text: '💬 "Sì, è tutto qui. Grazie!"', 
          textItalian: 'Sì, è tutto qui. Grazie!',
          nextNodeId: 'end-perfect' 
        },
        { 
          text: '🔌 "Dov\'è il caricabatterie?" (search frantically)', 
          textItalian: 'Dov\'è il caricabatterie?',
          nextNodeId: 'search-panic' 
        }
      ]
    },
    'correct-good': {
      id: 'correct-good',
      speaker: 'npc',
      text: '🐱 Porter Cat\'s ears perk up. "Ah, capisco! Aspetta un attimo." He returns with your backpack. "Ecco, questo è il tuo!"',
      textItalian: '🐱 Porter Cat ha le orecchie dritte. "Ah, capisco! Aspetta un attimo." Torna con il tuo zaino. "Ecco, questo è il tuo!"',
      backgroundEffect: 'happy',
      choices: [
        { 
          text: '💬 "Grazie mille, perfetto!"', 
          textItalian: 'Grazie mille, perfetto!',
          nextNodeId: 'end-perfect' 
        }
      ]
    },
    'search-panic': {
      id: 'search-panic',
      speaker: 'narrator',
      text: 'You tear through the backpack. No charger. Your phone is at 3%.',
      textItalian: 'Rovisti nello zaino. Nessun caricabatterie. Il tuo telefono è al 3%.',
      choices: [
        { 
          text: '💡 "Forse è nel cassetto del comodino!"', 
          textItalian: 'Forse è nel cassetto del comodino!',
          nextNodeId: 'end-perfect' 
        },
        { 
          text: '😰 "Oh no, l\'ho dimenticato!"', 
          textItalian: 'Oh no, l\'ho dimenticato!',
          nextNodeId: 'end-forgotten' 
        }
      ]
    },
    'end-hostile': {
      id: 'end-hostile',
      speaker: 'narrator',
      text: '⚠️ Porter Cat left with flattened ears. Blaming staff for an honest mistake gets you nowhere in Italy.',
      textItalian: '⚠️ Porter Cat se n\'è andato con le orecchie basse. Dare la colpa al personale per un errore onesto non ti porta da nessuna parte in Italia.',
      choices: []
    },
    'end-forgotten': {
      id: 'end-forgotten',
      speaker: 'narrator',
      text: '⚠️ You forgot the charger. Always double-check your backpack before leaving home.',
      textItalian: '⚠️ Hai dimenticato il caricabatterie. Controlla sempre due volte lo zaino prima di uscire di casa.',
      choices: []
    },
    'end-perfect': {
      id: 'end-perfect',
      speaker: 'narrator',
      text: '✅ Bag correct, everything accounted for. Ready to explore Italy!',
      textItalian: '✅ Borsa corretta, tutto controllato. Pronto per esplorare l\'Italia!',
      choices: []
    }
  }
};

// ============================================
// LIVING ROOM SCENARIOS
// ============================================

const livingRoomMatchScenario: BranchingScenario = {
  id: 'living-room-match-night',
  roomId: 'living-room',
  title: 'Match Night',
  titleNative: "Serata Partita",
  timeContext: 'Saturday evening',
  startNodeId: 'sofa',
  culturalLesson: 'Football is sacred in many Italian homes. Talking during a critical moment is a serious social error.',
  catCharacter: {
    id: 'roommate-cat',
    name: 'Roommate Cat',
    emoji: '🐱',
    color: '#10B981'
  },
  nodes: {
    'sofa': {
      id: 'sofa',
      speaker: 'narrator',
      text: 'You flop onto the sofa. 🐱 Roommate Cat is gripping the remote, eyes locked on the TV.',
      textItalian: 'Ti butti sul divano. 🐱 Roommate Cat tiene stretto il telecomando, gli occhi fissi sulla TV.',
      choices: [
        { 
          text: '⚽ "Metti la partita"', 
          textItalian: 'Metti la partita',
          nextNodeId: 'match-path' 
        },
        { 
          text: '🎬 "Guardiamo un film"', 
          textItalian: 'Guardiamo un film',
          nextNodeId: 'film-path' 
        },
        { 
          text: '🎮 "Giochiamo a un videogame?"', 
          textItalian: 'Giochiamo a un videogame?',
          nextNodeId: 'game-path' 
        }
      ]
    },
    'match-path': {
      id: 'match-path',
      speaker: 'npc',
      text: '🐱 Roommate Cat\'s tail swishes with excitement. "Sì! È rigore!"',
      textItalian: '🐱 Roommate Cat ha la coda che si muove per l\'eccitazione. "Sì! È rigore!"',
      backgroundEffect: 'happy',
      choices: [
        { 
          text: '💬 "Come è andata la tua giornata?"', 
          textItalian: 'Come è andata la tua giornata?',
          nextNodeId: 'talk-wrong' 
        },
        { 
          text: '🤐 Watch in silence', 
          textItalian: 'Guarda in silenzio',
          nextNodeId: 'end-match' 
        },
        { 
          text: '👏 Cheer when the ball goes in', 
          textItalian: 'Esulta quando entra la palla',
          nextNodeId: 'celebrate-good' 
        }
      ]
    },
    'film-path': {
      id: 'film-path',
      speaker: 'npc',
      text: '🐱 Roommate Cat sighs but changes the channel. "Va bene, scegli tu il film." But the screen says "No signal."',
      textItalian: '🐱 Roommate Cat sospira ma cambia canale. "Va bene, scegli tu il film." Ma lo schermo dice "Nessun segnale."',
      backgroundEffect: 'neutral',
      choices: [
        { 
          text: '📱 "Guardiamo dal cellulare"', 
          textItalian: 'Guardiamo dal cellulare',
          nextNodeId: 'phone-streaming' 
        },
        { 
          text: '📻 "Allora mettiamo la radio"', 
          textItalian: 'Allora mettiamo la radio',
          nextNodeId: 'end-music' 
        },
        { 
          text: '😤 "Il wifi qui è terribile!"', 
          textItalian: 'Il wifi qui è terribile!',
          nextNodeId: 'complain-wrong' 
        }
      ]
    },
    'game-path': {
      id: 'game-path',
      speaker: 'npc',
      text: '🐱 Roommate Cat\'s ears perk up. "Sì, prendiamo i tablet!"',
      textItalian: '🐱 Roommate Cat ha le orecchie dritte. "Sì, prendiamo i tablet!"',
      backgroundEffect: 'happy',
      choices: [
        { 
          text: 'Grab your tablet and play together', 
          textItalian: 'Prendi il tuo tablet e giocate insieme',
          nextNodeId: 'end-gaming' 
        }
      ]
    },
    'talk-wrong': {
      id: 'talk-wrong',
      speaker: 'npc',
      text: '🐱 Roommate Cat\'s ears flatten. "Shh! È rigore!" He misses the goal because of your chatter.',
      textItalian: '🐱 Roommate Cat ha le orecchie basse. "Shh! È rigore!" Ha perso il gol a causa delle tue chiacchiere.',
      backgroundEffect: 'angry',
      choices: [
        { 
          text: '💬 "Scusa, non sapevo"', 
          textItalian: 'Scusa, non sapevo',
          nextNodeId: 'recover-respect' 
        },
        { 
          text: 'Keep talking anyway', 
          textItalian: 'Continua a parlare comunque',
          nextNodeId: 'end-annoying' 
        }
      ]
    },
    'celebrate-good': {
      id: 'celebrate-good',
      speaker: 'npc',
      text: '🐱 Roommate Cat high-fives you with a paw. "Gol! Lo visto? Perfetto!"',
      textItalian: '🐱 Roommate Cat ti dà il cinque con la zampa. "Gol! L\'hai visto? Perfetto!"',
      backgroundEffect: 'happy',
      choices: [
        { 
          text: '🍻 "Evviva! Che partita!"', 
          textItalian: 'Evviva! Che partita!',
          nextNodeId: 'end-match' 
        }
      ]
    },
    'recover-respect': {
      id: 'recover-respect',
      speaker: 'npc',
      text: '🐱 Roommate Cat\'s tail relaxes. "Va bene, ma durante la partita... silenzio."',
      textItalian: '🐱 Roommate Cat ha la coda rilassata. "Va bene, ma durante la partita... silenzio."',
      backgroundEffect: 'neutral',
      choices: [
        { 
          text: 'Nod and watch quietly', 
          textItalian: 'Annuisci e guarda in silenzio',
          nextNodeId: 'end-match' 
        }
      ]
    },
    'complain-wrong': {
      id: 'complain-wrong',
      speaker: 'npc',
      text: '🐱 Roommate Cat shrugs. "Succede. Meglio la radio allora." Complaining doesn\'t fix the wifi.',
      textItalian: '🐱 Roommate Cat si stringe nelle spalle. "Succede. Meglio la radio allora." Lamentarsi non aggiusta il wifi.',
      backgroundEffect: 'neutral',
      choices: [
        { 
          text: 'Accept the radio option', 
          textItalian: 'Accetta l\'opzione radio',
          nextNodeId: 'end-music' 
        }
      ]
    },
    'phone-streaming': {
      id: 'phone-streaming',
      speaker: 'narrator',
      text: 'You prop the phone against a book on the table. Not cinematic, but it works.',
      textItalian: 'Appoggi il telefono contro un libro sul tavolo. Non è cinematografico, ma funziona.',
      choices: [
        { 
          text: '😌 Watch together anyway', 
          textItalian: 'Guardate insieme comunque',
          nextNodeId: 'end-perfect' 
        }
      ]
    },
    'end-annoying': {
      id: 'end-annoying',
      speaker: 'narrator',
      text: '⚠️ Roommate Cat sends you to another room. In Italy, football concentration is not negotiable.',
      textItalian: '⚠️ Roommate Cat ti manda in un\'altra stanza. In Italia, la concentrazione per il calcio non è negoziabile.',
      choices: []
    },
    'end-match': {
      id: 'end-match',
      speaker: 'narrator',
      text: '✅ You survived match night without offending Roommate Cat. Football diplomacy: mastered.',
      textItalian: '✅ Hai sopravvissuto alla serata partita senza offendere Roommate Cat. Diplomazia calcistica: padroneggiata.',
      choices: []
    },
    'end-music': {
      id: 'end-music',
      speaker: 'narrator',
      text: '✅ The radio plays a song. Sometimes low-tech is the best tech.',
      textItalian: '✅ La radio suona una canzone. A volte la tecnologia semplice è la migliore.',
      choices: []
    },
    'end-gaming': {
      id: 'end-gaming',
      speaker: 'narrator',
      text: '✅ You spent the evening gaming together. A peaceful alternative to football politics.',
      textItalian: '✅ Avete passato la serata a giocare insieme. Un\'alternativa pacifica alla politica calcistica.',
      choices: []
    },
    'end-perfect': {
      id: 'end-perfect',
      speaker: 'narrator',
      text: '✅ Perfect! Flexible, resourceful, and culturally aware. That\'s Italian living-room harmony.',
      textItalian: '✅ Perfetto! Flessibile, ingegnoso e culturalmente consapevole. Questa è l\'armonia del soggiorno italiano.',
      choices: []
    }
  }
};

// ============================================
// GARDEN SCENARIOS
// ============================================

const gardenWeekendScenario: BranchingScenario = {
  id: 'garden-weekend-plan',
  roomId: 'garden',
  title: 'The Weekend Plan',
  titleNative: "Il Programma del Weekend",
  timeContext: 'Saturday morning',
  startNodeId: 'grass',
  culturalLesson: 'Italians often let weather dictate outdoor plans. Arguing with rain is futile.',
  catCharacter: {
    id: 'friend-cat',
    name: 'Friend Cat',
    emoji: '🐱',
    color: '#22C55E'
  },
  nodes: {
    'grass': {
      id: 'grass',
      speaker: 'narrator',
      text: 'You and 🐱 Friend Cat are lying on the grass. The sun is warm.',
      textItalian: 'Tu e 🐱 Friend Cat siete sdraiati sull\'erba. Il sole è caldo.',
      choices: [
        { 
          text: '🏖️ "Andiamo al mare"', 
          textItalian: 'Andiamo al mare',
          nextNodeId: 'beach-plan' 
        },
        { 
          text: '⛰️ "Andiamo in montagna"', 
          textItalian: 'Andiamo in montagna',
          nextNodeId: 'mountain-plan' 
        },
        { 
          text: '🌳 "Restiamo qui nel giardino"', 
          textItalian: 'Restiamo qui nel giardino',
          nextNodeId: 'garden-stay' 
        }
      ]
    },
    'beach-plan': {
      id: 'beach-plan',
      speaker: 'npc',
      text: '🐱 Friend Cat stretches. "Sì! Prendiamo il sole sulla spiaggia!" But a dark cloud appears.',
      textItalian: '🐱 Friend Cat si stiracchia. "Sì! Prendiamo il sole sulla spiaggia!" Ma appare una nuvola scura.',
      backgroundEffect: 'happy',
      choices: [
        { 
          text: '☁️ "Non importa, andiamo lo stesso"', 
          textItalian: 'Non importa, andiamo lo stesso',
          nextNodeId: 'beach-cloudy' 
        },
        { 
          text: '🌳 "Meglio restare nel giardino"', 
          textItalian: 'Meglio restare nel giardino',
          nextNodeId: 'garden-stay' 
        },
        { 
          text: '🥪 "Prendiamo un panino prima"', 
          textItalian: 'Prendiamo un panino prima',
          nextNodeId: 'picnic-delay' 
        }
      ]
    },
    'mountain-plan': {
      id: 'mountain-plan',
      speaker: 'npc',
      text: '🐱 Friend Cat\'s ears perk up. "Bella idea! Corriamo nel bosco!"',
      textItalian: '🐱 Friend Cat ha le orecchie dritte. "Bella idea! Corriamo nel bosco!"',
      backgroundEffect: 'happy',
      choices: [
        { 
          text: '🏃 "Sì, corro nel bosco!"', 
          textItalian: 'Sì, corro nel bosco!',
          nextNodeId: 'run-forest' 
        },
        { 
          text: '😴 "No, sono stanco. Restiamo qui."', 
          textItalian: 'No, sono stanco. Restiamo qui.',
          nextNodeId: 'garden-stay' 
        },
        { 
          text: '🌧️ "Guarda quella nuvola. Piove!"', 
          textItalian: 'Guarda quella nuvola. Piove!',
          nextNodeId: 'rain-cancel' 
        }
      ]
    },
    'garden-stay': {
      id: 'garden-stay',
      speaker: 'npc',
      text: '🐱 Friend Cat curls up under a tree. "Perfetto. È tranquillo qui."',
      textItalian: '🐱 Friend Cat si rannicchia sotto un albero. "Perfetto. È tranquillo qui."',
      backgroundEffect: 'happy',
      choices: [
        { 
          text: '🥪 "Mangiamo un panino"', 
          textItalian: 'Mangiamo un panino',
          nextNodeId: 'picnic-good' 
        },
        { 
          text: '🍃 "Ascoltiamo il vento tra le foglie"', 
          textItalian: 'Ascoltiamo il vento tra le foglie',
          nextNodeId: 'end-zen' 
        }
      ]
    },
    'rain-cancel': {
      id: 'rain-cancel',
      speaker: 'narrator',
      text: 'The rain arrives in big drops. Friend Cat\'s tail puffs up.',
      textItalian: 'La pioggia arriva a grandi gocce. La coda di Friend Cat si gonfia.',
      choices: [
        { 
          text: '🌳 "Corriamo sotto l\'albero!"', 
          textItalian: 'Corriamo sotto l\'albero!',
          nextNodeId: 'tree-shelter' 
        },
        { 
          text: '☂️ "Ho l\'ombrello!"', 
          textItalian: 'Ho l\'ombrello!',
          nextNodeId: 'umbrella-hero' 
        },
        { 
          text: '💧 "Ci bagniamo lo stesso!"', 
          textItalian: 'Ci bagniamo lo stesso!',
          nextNodeId: 'end-soaked' 
        }
      ]
    },
    'beach-cloudy': {
      id: 'beach-cloudy',
      speaker: 'narrator',
      text: 'You arrive at the beach. The sea is grey. The wind is cold. Not exactly paradise.',
      textItalian: 'Arrivi alla spiaggia. Il mare è grigio. Il vento è freddo. Non è esattamente il paradiso.',
      choices: [
        { 
          text: '😤 "Volevo il sole!"', 
          textItalian: 'Volevo il sole!',
          nextNodeId: 'end-grumpy' 
        },
        { 
          text: '🌳 "Torniamo nel giardino"', 
          textItalian: 'Torniamo nel giardino',
          nextNodeId: 'garden-stay' 
        }
      ]
    },
    'picnic-delay': {
      id: 'picnic-delay',
      speaker: 'narrator',
      text: 'You eat the sandwich. By the time you finish, the cloud has turned into a storm.',
      textItalian: 'Mangi il panino. Quando finisci, la nuvola si è trasformata in un temporale.',
      choices: [
        { 
          text: '🌳 "Restiamo nel giardino"', 
          textItalian: 'Restiamo nel giardino',
          nextNodeId: 'garden-stay' 
        }
      ]
    },
    'run-forest': {
      id: 'run-forest',
      speaker: 'narrator',
      text: 'You run through the forest, leaves crunching underfoot. Then you hear thunder.',
      textItalian: 'Corri nel bosco, le foglie scricchiolano sotto i piedi. Poi senti il tuono.',
      choices: [
        { 
          text: '🏃 "Corriamo più veloce!"', 
          textItalian: 'Corriamo più veloce!',
          nextNodeId: 'end-thunder' 
        },
        { 
          text: '🌳 "Torniamo indietro!"', 
          textItalian: 'Torniamo indietro!',
          nextNodeId: 'garden-stay' 
        }
      ]
    },
    'picnic-good': {
      id: 'picnic-good',
      speaker: 'npc',
      text: '🐱 Friend Cat takes a bite. "Buonissimo! Hai portato anche la frutta?"',
      textItalian: '🐱 Friend Cat dà un morso. "Buonissimo! Hai portato anche la frutta?"',
      backgroundEffect: 'happy',
      choices: [
        { 
          text: '💬 "Sì, una mela"', 
          textItalian: 'Sì, una mela',
          nextNodeId: 'end-perfect' 
        }
      ]
    },
    'tree-shelter': {
      id: 'tree-shelter',
      speaker: 'narrator',
      text: 'Under the tree the leaves form a natural roof. You stay almost dry.',
      textItalian: 'Sotto l\'albero le foglie formano un tetto naturale. Rimani quasi asciutto.',
      choices: [
        { 
          text: '💬 "Siamo riparati qui"', 
          textItalian: 'Siamo riparati qui',
          nextNodeId: 'end-perfect' 
        }
      ]
    },
    'umbrella-hero': {
      id: 'umbrella-hero',
      speaker: 'npc',
      text: '🐱 Friend Cat looks surprised and grateful. "Sei un eroe! Non sapevo che avessi l\'ombrello!"',
      textItalian: '🐱 Friend Cat sembra sorpreso e grato. "Sei un eroe! Non sapevo che avessi l\'ombrello!"',
      backgroundEffect: 'happy',
      choices: [
        { 
          text: '💬 "Sempre preparato!"', 
          textItalian: 'Sempre preparato!',
          nextNodeId: 'end-perfect' 
        }
      ]
    },
    'end-grumpy': {
      id: 'end-grumpy',
      speaker: 'narrator',
      text: '⚠️ You complained while the grey waves crashed. In Italy, you adapt to the weather, not the other way around.',
      textItalian: '⚠️ Ti sei lamentato mentre le onde grigie si infrangevano. In Italia, ti adatti al tempo, non il contrario.',
      choices: []
    },
    'end-thunder': {
      id: 'end-thunder',
      speaker: 'narrator',
      text: '⚠️ Lightning flashed nearby. Running in a forest during a storm is dangerous. When thunder roars, go indoors.',
      textItalian: '⚠️ Un fulmine ha lampeggiato vicino. Correre in un bosco durante un temporale è pericoloso. Quando tuona, vai al chiuso.',
      choices: []
    },
    'end-soaked': {
      id: 'end-soaked',
      speaker: 'narrator',
      text: '⚠️ You are completely soaked. Checking the weather before going out is essential!',
      textItalian: '⚠️ Siete completamente bagnati. Controllare il tempo prima di uscire è fondamentale!',
      choices: []
    },
    'end-zen': {
      id: 'end-zen',
      speaker: 'narrator',
      text: '✅ Sometimes the best plan is no plan. You and Friend Cat enjoyed the garden in peace.',
      textItalian: '✅ A volte il miglior piano è non avere un piano. Tu e Friend Cat avete goduto del giardino in pace.',
      choices: []
    },
    'end-perfect': {
      id: 'end-perfect',
      speaker: 'narrator',
      text: '✅ Weekend plan: adapted, executed, enjoyed. That\'s the Italian way.',
      textItalian: '✅ Piano del weekend: adattato, eseguito, goduto. Questo è il modo italiano.',
      choices: []
    }
  }
};

// ============================================
// CAFE SCENARIOS
// ============================================

const cafeOrderScenario: BranchingScenario = {
  id: 'cafe-order-coffee',
  roomId: 'cafe',
  title: 'The Coffee Order',
  titleNative: "L'Ordine del Caffè",
  timeContext: 'Monday morning, 9:00 AM',
  startNodeId: 'enter-cafe',
  culturalLesson: 'At Italian bars, you pay first at the register (cassa), then order at the counter. Saying "al banco" means standing at the counter.',
  catCharacter: {
    id: 'barista-cat',
    name: 'Barista Cat',
    emoji: '☕',
    color: '#A16207'
  },
  nodes: {
    'enter-cafe': {
      id: 'enter-cafe',
      speaker: 'narrator',
      text: 'You enter the café. 🐱 Barista Cat is steaming milk behind the espresso machine. The smell of coffee fills the air.',
      textItalian: 'Entri nel caffè. 🐱 Barista Cat sta montando il latte dietro la macchina del caffè. L\'aroma di caffè riempie l\'aria.',
      choices: [
        { 
          text: '💬 "Buongiorno! Un caffè, per favore."', 
          textItalian: 'Buongiorno! Un caffè, per favore.',
          nextNodeId: 'order-direct' 
        },
        { 
          text: '🪑 Sit at a table first', 
          textItalian: 'Siediti prima a un tavolo',
          nextNodeId: 'table-wrong' 
        },
        { 
          text: '💶 Go to the register (cassa) first', 
          textItalian: 'Vai prima alla cassa',
          nextNodeId: 'pay-first' 
        }
      ]
    },
    'order-direct': {
      id: 'order-direct',
      speaker: 'npc',
      text: '🐱 Barista Cat looks confused. "Ha pagato alla cassa?" (Did you pay at the register?)',
      textItalian: '🐱 Barista Cat sembra confuso. "Ha pagato alla cassa?"',
      choices: [
        { 
          text: '😅 "No, scusi. Vado subito."', 
          textItalian: 'No, scusi. Vado subito.',
          nextNodeId: 'pay-first' 
        },
        { 
          text: '💳 "Pago qui?"', 
          textItalian: 'Pago qui?',
          nextNodeId: 'explain-system' 
        }
      ]
    },
    'table-wrong': {
      id: 'table-wrong',
      speaker: 'narrator',
      text: 'You sit at a table. Barista Cat looks at you expectantly, but doesn\'t come over. In Italy, table service is different.',
      textItalian: 'Ti siedi a un tavolo. Barista Cat ti guarda in attesa, ma non si avvicina. In Italia, il servizio ai tavoli è diverso.',
      choices: [
        { 
          text: '🚶 Go to the counter', 
          textItalian: 'Vai al bancone',
          nextNodeId: 'enter-cafe' 
        }
      ]
    },
    'pay-first': {
      id: 'pay-first',
      speaker: 'npc',
      text: '🐱 Cashier Cat takes your money. "Un caffè al banco. Ecco lo scontrino." (Here\'s the receipt.)',
      textItalian: '🐱 Cashier Cat prende i tuoi soldi. "Un caffè al banco. Ecco lo scontrino."',
      backgroundEffect: 'happy',
      choices: [
        { 
          text: '🧾 Take receipt to the counter', 
          textItalian: 'Porta lo scontrino al bancone',
          nextNodeId: 'get-coffee' 
        }
      ]
    },
    'explain-system': {
      id: 'explain-system',
      speaker: 'npc',
      text: '🐱 Barista Cat explains: "Prima paga alla cassa, poi torna qui con lo scontrino." (First pay at the register, then come back with the receipt.)',
      textItalian: '🐱 Barista Cat spiega: "Prima paga alla cassa, poi torna qui con lo scontrino."',
      choices: [
        { 
          text: '💶 Go to the register', 
          textItalian: 'Vai alla cassa',
          nextNodeId: 'pay-first' 
        }
      ]
    },
    'get-coffee': {
      id: 'get-coffee',
      speaker: 'npc',
      text: '🐱 Barista Cat takes your receipt and starts the espresso machine. "Un caffè, subito pronto!"',
      textItalian: '🐱 Barista Cat prende il tuo scontrino e avvia la macchina del caffè. "Un caffè, subito pronto!"',
      backgroundEffect: 'happy',
      choices: [
        { 
          text: '☕ "Grazie!"', 
          textItalian: 'Grazie!',
          nextNodeId: 'end-perfect' 
        },
        { 
          text: '🥐 "Anche un cornetto, per favore."', 
          textItalian: 'Anche un cornetto, per favore.',
          nextNodeId: 'add-croissant' 
        }
      ]
    },
    'add-croissant': {
      id: 'add-croissant',
      speaker: 'npc',
      text: '🐱 Barista Cat grabs a fresh croissant. "Ecco! Vuole la crema o la marmellata?"',
      textItalian: '🐱 Barista Cat prende un cornetto fresco. "Ecco! Vuole la crema o la marmellata?"',
      backgroundEffect: 'happy',
      choices: [
        { 
          text: '🍯 "La marmellata, grazie."', 
          textItalian: 'La marmellata, grazie.',
          nextNodeId: 'end-perfect' 
        },
        { 
          text: '🍦 "La crema, per favore."', 
          textItalian: 'La crema, per favore.',
          nextNodeId: 'end-perfect' 
        }
      ]
    },
    'end-perfect': {
      id: 'end-perfect',
      speaker: 'narrator',
      text: '✅ Perfect! You learned the Italian bar system: cassa first, then banconco. Enjoy your caffè!',
      textItalian: '✅ Perfetto! Hai imparato il sistema del bar italiano: prima la cassa, poi il bancone. Buon caffè!',
      choices: []
    }
  }
};

// ============================================
// SUPERMARKET SCENARIOS
// ============================================

const supermarketShoppingScenario: BranchingScenario = {
  id: 'supermarket-shopping',
  roomId: 'supermarket',
  title: 'The Shopping List',
  titleNative: "La Lista della Spesa",
  timeContext: 'Tuesday afternoon',
  startNodeId: 'enter-market',
  culturalLesson: 'In Italian supermarkets, you weigh and label produce yourself at special scales before checkout.',
  catCharacter: {
    id: 'vendor-cat',
    name: 'Vendor Cat',
    emoji: '🛒',
    color: '#22C55E'
  },
  nodes: {
    'enter-market': {
      id: 'enter-market',
      speaker: 'narrator',
      text: 'You enter the supermarket with a list. 🐱 Vendor Cat is arranging fresh vegetables.',
      textItalian: 'Entri nel supermercato con una lista. 🐱 Vendor Cat sta sistemando le verdure fresche.',
      choices: [
        { 
          text: '🍎 Go to the produce section', 
          textItalian: 'Vai alla sezione ortofrutta',
          nextNodeId: 'produce-section' 
        },
        { 
          text: '🥛 Go to the dairy section', 
          textItalian: 'Vai alla sezione latticini',
          nextNodeId: 'dairy-section' 
        },
        { 
          text: '📋 Check the list first', 
          textItalian: 'Controlla prima la lista',
          nextNodeId: 'check-list' 
        }
      ]
    },
    'produce-section': {
      id: 'produce-section',
      speaker: 'npc',
      text: '🐱 Vendor Cat points to the scales. "Deve pesare la frutta e mettere l\'etichetta." (You need to weigh the fruit and put the label.)',
      textItalian: '🐱 Vendor Cat indica le bilance. "Deve pesare la frutta e mettere l\'etichetta."',
      choices: [
        { 
          text: '🍎 Weigh the apples', 
          textItalian: 'Pesa le mele',
          nextNodeId: 'weigh-produce' 
        },
        { 
          text: '😕 "Non capisco. Mi aiuti?"', 
          textItalian: 'Non capisco. Mi aiuti?',
          nextNodeId: 'help-offered' 
        }
      ]
    },
    'weigh-produce': {
      id: 'weigh-produce',
      speaker: 'narrator',
      text: 'You put the apples on the scale and press the button with the apple picture. A label prints out.',
      textItalian: 'Metti le mele sulla bilancia e premi il pulsante con l\'immagine della mela. Esce un\'etichetta.',
      choices: [
        { 
          text: '🏷️ Stick label on the bag', 
          textItalian: 'Attacca l\'etichetta sulla busta',
          nextNodeId: 'end-perfect' 
        }
      ]
    },
    'help-offered': {
      id: 'help-offered',
      speaker: 'npc',
      text: '🐱 Vendor Cat smiles and shows you how. "Vede? Mette qui, preme il numero, e prende l\'etichetta."',
      textItalian: '🐱 Vendor Cat sorride e ti mostra come fare. "Vede? Mette qui, preme il numero, e prende l\'etichetta."',
      backgroundEffect: 'happy',
      choices: [
        { 
          text: '💬 "Grazie mille!"', 
          textItalian: 'Grazie mille!',
          nextNodeId: 'end-perfect' 
        }
      ]
    },
    'dairy-section': {
      id: 'dairy-section',
      speaker: 'narrator',
      text: 'You find the milk, but there are so many types: intero, parzialmente scremato, scremato...',
      textItalian: 'Trovi il latte, ma ci sono così tanti tipi: intero, parzialmente scremato, scremato...',
      choices: [
        { 
          text: '🥛 Take whole milk (intero)', 
          textItalian: 'Prendi il latte intero',
          nextNodeId: 'end-perfect' 
        },
        { 
          text: '🤔 Ask someone for help', 
          textItalian: 'Chiedi aiuto a qualcuno',
          nextNodeId: 'ask-help' 
        }
      ]
    },
    'ask-help': {
      id: 'ask-help',
      speaker: 'npc',
      text: '🐱 Another shopper Cat explains: "Intero è whole, scremato è skimmed. Io prendo il parzialmente scremato."',
      textItalian: '🐱 Un altro gatto acquirente spiega: "Intero è whole, scremato è skimmed. Io prendo il parzialmente scremato."',
      backgroundEffect: 'happy',
      choices: [
        { 
          text: '💬 "Grazie! Prendo lo stesso."', 
          textItalian: 'Grazie! Prendo lo stesso.',
          nextNodeId: 'end-perfect' 
        }
      ]
    },
    'check-list': {
      id: 'check-list',
      speaker: 'narrator',
      text: 'Your list says: pane, latte, uova, mela, pasta. You have a plan now.',
      textItalian: 'La tua lista dice: pane, latte, uova, mela, pasta. Hai un piano ora.',
      choices: [
        { 
          text: '🍎 Start with produce', 
          textItalian: 'Inizia con l\'ortofrutta',
          nextNodeId: 'produce-section' 
        }
      ]
    },
    'end-perfect': {
      id: 'end-perfect',
      speaker: 'narrator',
      text: '✅ Shopping success! You learned to weigh your own produce and navigate Italian dairy options.',
      textItalian: '✅ Spesa riuscita! Hai imparato a pesare la tua frutta e a navigare tra le opzioni lattiero-casearie italiane.',
      choices: []
    }
  }
};

// ============================================
// TRANSPORT SCENARIOS
// ============================================

const transportTicketScenario: BranchingScenario = {
  id: 'transport-buy-ticket',
  roomId: 'transport',
  title: 'Buying a Ticket',
  titleNative: "Comprare un Biglietto",
  timeContext: 'Friday morning, rush hour',
  startNodeId: 'enter-station',
  culturalLesson: 'Italian train tickets must be validated (stamped) at the yellow machines before boarding, or you face a fine.',
  catCharacter: {
    id: 'agent-cat',
    name: 'Agent Cat',
    emoji: '🎫',
    color: '#6366F1'
  },
  nodes: {
    'enter-station': {
      id: 'enter-station',
      speaker: 'narrator',
      text: 'You enter the train station. 🐱 Agent Cat is behind the counter, helping another customer.',
      textItalian: 'Entri nella stazione del treno. 🐱 Agent Cat è dietro il bancone, ad aiutare un altro cliente.',
      choices: [
        { 
          text: '🎫 Go to the counter', 
          textItalian: 'Vai al bancone',
          nextNodeId: 'at-counter' 
        },
        { 
          text: '🤖 Use the ticket machine', 
          textItalian: 'Usa la macchina dei biglietti',
          nextNodeId: 'machine-path' 
        },
        { 
          text: '📱 Check the departure board first', 
          textItalian: 'Controlla prima il tabellone delle partenze',
          nextNodeId: 'check-board' 
        }
      ]
    },
    'at-counter': {
      id: 'at-counter',
      speaker: 'npc',
      text: '🐱 Agent Cat looks up. "Buongiorno! Dove vuole andare?" (Where do you want to go?)',
      textItalian: '🐱 Agent Cat alza lo sguardo. "Buongiorno! Dove vuole andare?"',
      choices: [
        { 
          text: '💬 "Vorrei andare a Roma, per favore."', 
          textItalian: 'Vorrei andare a Roma, per favore.',
          nextNodeId: 'ticket-roma' 
        },
        { 
          text: '💬 "Un biglietto per Firenze."', 
          textItalian: 'Un biglietto per Firenze.',
          nextNodeId: 'ticket-firenze' 
        },
        { 
          text: '❓ "Quanto costa per Milano?"', 
          textItalian: 'Quanto costa per Milano?',
          nextNodeId: 'ask-price' 
        }
      ]
    },
    'ticket-roma': {
      id: 'ticket-roma',
      speaker: 'npc',
      text: '🐱 Agent Cat types on the computer. "Andata o andata e ritorno?" (One way or round trip?)',
      textItalian: '🐱 Agent Cat digita sul computer. "Andata o andata e ritorno?"',
      choices: [
        { 
          text: '🔄 "Andata e ritorno, grazie."', 
          textItalian: 'Andata e ritorno, grazie.',
          nextNodeId: 'validate-reminder' 
        },
        { 
          text: '➡️ "Solo andata."', 
          textItalian: 'Solo andata.',
          nextNodeId: 'validate-reminder' 
        }
      ]
    },
    'validate-reminder': {
      id: 'validate-reminder',
      speaker: 'npc',
      text: '🐱 Agent Cat hands you the ticket. "Ricordi di convalidare il biglietto prima di salire!" (Remember to validate before boarding!)',
      textItalian: '🐱 Agent Cat ti porge il biglietto. "Ricordi di convalidare il biglietto prima di salire!"',
      backgroundEffect: 'happy',
      choices: [
        { 
          text: '💬 "Sì, lo so. Grazie!"', 
          textItalian: 'Sì, lo so. Grazie!',
          nextNodeId: 'end-perfect' 
        },
        { 
          text: '❓ "Come si fa?"', 
          textItalian: 'Come si fa?',
          nextNodeId: 'explain-validation' 
        }
      ]
    },
    'explain-validation': {
      id: 'explain-validation',
      speaker: 'npc',
      text: '🐱 Agent Cat points. "Vede le macchine gialle? Mette il biglietto lì. Fa bip!" (See the yellow machines? Put the ticket there. It goes beep!)',
      textItalian: '🐱 Agent Cat indica. "Vede le macchine gialle? Mette il biglietto lì. Fa bip!"',
      choices: [
        { 
          text: '💬 "Capito! Grazie mille!"', 
          textItalian: 'Capito! Grazie mille!',
          nextNodeId: 'end-perfect' 
        }
      ]
    },
    'machine-path': {
      id: 'machine-path',
      speaker: 'narrator',
      text: 'The machine has many options. Regionale, Intercity, Frecciarossa... Where do you press?',
      textItalian: 'La macchina ha molte opzioni. Regionale, Intercity, Frecciarossa... Dove premi?',
      choices: [
        { 
          text: '🚂 Press "Regionale" (local train)', 
          textItalian: 'Premi "Regionale"',
          nextNodeId: 'machine-success' 
        },
        { 
          text: '❓ Go ask for help', 
          textItalian: 'Vai a chiedere aiuto',
          nextNodeId: 'at-counter' 
        }
      ]
    },
    'machine-success': {
      id: 'machine-success',
      speaker: 'narrator',
      text: 'The machine prints your ticket. But wait... you need to validate it!',
      textItalian: 'La macchina stampa il tuo biglietto. Ma aspetta... devi convalidarlo!',
      choices: [
        { 
          text: '🟡 Find the yellow validation machine', 
          textItalian: 'Trova la macchina gialla di convalida',
          nextNodeId: 'end-perfect' 
        }
      ]
    },
    'check-board': {
      id: 'check-board',
      speaker: 'narrator',
      text: 'The departure board shows: Roma - Binario 5 - 10:15. You have 20 minutes.',
      textItalian: 'Il tabellone delle partenze mostra: Roma - Binario 5 - 10:15. Hai 20 minuti.',
      choices: [
        { 
          text: '🎫 Go buy the ticket now', 
          textItalian: 'Vai a comprare il biglietto ora',
          nextNodeId: 'at-counter' 
        }
      ]
    },
    'ticket-firenze': {
      id: 'ticket-firenze',
      speaker: 'npc',
      text: '🐱 Agent Cat checks the schedule. "Il prossimo treno per Firenze parte alle 11:30."',
      textItalian: '🐱 Agent Cat controlla l\'orario. "Il prossimo treno per Firenze parte alle 11:30."',
      choices: [
        { 
          text: '💬 "Perfetto, prendo quello."', 
          textItalian: 'Perfetto, prendo quello.',
          nextNodeId: 'validate-reminder' 
        }
      ]
    },
    'ask-price': {
      id: 'ask-price',
      speaker: 'npc',
      text: '🐱 Agent Cat checks. "Per Milano? Trentacinque euro. Vuole il biglietto?"',
      textItalian: '🐱 Agent Cat controlla. "Per Milano? Trentacinque euro. Vuole il biglietto?"',
      choices: [
        { 
          text: '💬 "Sì, grazie."', 
          textItalian: 'Sì, grazie.',
          nextNodeId: 'validate-reminder' 
        },
        { 
          text: '💬 "Troppo caro. Forse un altro giorno."', 
          textItalian: 'Troppo caro. Forse un altro giorno.',
          nextNodeId: 'end-later' 
        }
      ]
    },
    'end-later': {
      id: 'end-later',
      speaker: 'narrator',
      text: '✅ Smart choice to check the price first. Italian trains can be expensive if you don\'t book in advance.',
      textItalian: '✅ Scelta intelligente controllare prima il prezzo. I treni italiani possono essere costosi se non prenoti in anticipo.',
      choices: []
    },
    'end-perfect': {
      id: 'end-perfect',
      speaker: 'narrator',
      text: '✅ Ticket purchased and validated! Remember: always validate before boarding Italian trains.',
      textItalian: '✅ Biglietto comprato e convalidato! Ricorda: convalida sempre prima di salire sui treni italiani.',
      choices: []
    }
  }
};

// ============================================
// BATHROOM SCENARIOS
// ============================================

const bathroomPharmacyScenario: BranchingScenario = {
  id: 'bathroom-pharmacy-visit',
  roomId: 'bathroom',
  title: 'The Pharmacy Visit',
  titleNative: "La Visita in Farmacia",
  timeContext: 'Wednesday morning',
  startNodeId: 'wake-up',
  culturalLesson: 'Italian pharmacies (farmacia) are the first stop for minor health issues. The pharmacist can recommend treatments without a prescription.',
  catCharacter: {
    id: 'pharmacist-cat',
    name: 'Pharmacist Cat',
    emoji: '💊',
    color: '#EC4899'
  },
  nodes: {
    'wake-up': {
      id: 'wake-up',
      speaker: 'narrator',
      text: 'You wake up with a headache and sore throat. The medicine cabinet is empty.',
      textItalian: 'Ti svegli con mal di testa e mal di gola. L\'armadietto dei medicinali è vuoto.',
      choices: [
        { 
          text: '🏥 Go to the pharmacy (farmacia)', 
          textItalian: 'Vai in farmacia',
          nextNodeId: 'at-pharmacy' 
        },
        { 
          text: '🏥 Go to the hospital (ospedale)', 
          textItalian: 'Vai in ospedale',
          nextNodeId: 'hospital-wrong' 
        },
        { 
          text: '🛌 Stay in bed and hope it passes', 
          textItalian: 'Resta a letto e spera che passi',
          nextNodeId: 'wait-wrong' 
        }
      ]
    },
    'hospital-wrong': {
      id: 'hospital-wrong',
      speaker: 'narrator',
      text: 'The hospital emergency room is for serious cases. For a sore throat, they\'ll send you to the pharmacy anyway.',
      textItalian: 'Il pronto soccorso dell\'ospedale è per casi gravi. Per un mal di gola, ti manderanno comunque in farmacia.',
      choices: [
        { 
          text: '🏥 Go to the pharmacy instead', 
          textItalian: 'Vai invece in farmacia',
          nextNodeId: 'at-pharmacy' 
        }
      ]
    },
    'wait-wrong': {
      id: 'wait-wrong',
      speaker: 'narrator',
      text: 'You spend the whole day in bed. The headache gets worse. You should have gone to the pharmacy.',
      textItalian: 'Passi tutta la giornata a letto. Il mal di testa peggiora. Saresti dovuto andare in farmacia.',
      choices: [
        { 
          text: '🏥 Go to the pharmacy now', 
          textItalian: 'Vai in farmacia ora',
          nextNodeId: 'at-pharmacy' 
        }
      ]
    },
    'at-pharmacy': {
      id: 'at-pharmacy',
      speaker: 'npc',
      text: '🐱 Pharmacist Cat looks up. "Buongiorno! Come posso aiutarla?" (How can I help you?)',
      textItalian: '🐱 Pharmacist Cat alza lo sguardo. "Buongiorno! Come posso aiutarla?"',
      choices: [
        { 
          text: '💬 "Ho mal di gola e mal di testa."', 
          textItalian: 'Ho mal di gola e mal di testa.',
          nextNodeId: 'examine-good' 
        },
        { 
          text: '💬 "Ho bisogno di medicine."', 
          textItalian: 'Ho bisogno di medicine.',
          nextNodeId: 'need-more-info' 
        },
        { 
          text: '💬 "Dov\'è il paracetamolo?"', 
          textItalian: 'Dov\'è il paracetamolo?',
          nextNodeId: 'self-diagnose' 
        }
      ]
    },
    'examine-good': {
      id: 'examine-good',
      speaker: 'npc',
      text: '🐱 Pharmacist Cat nods sympathetically. "Mi dispiace. Ha anche la febbre?" (I\'m sorry. Do you also have a fever?)',
      textItalian: '🐱 Pharmacist Cat annuisce con compassione. "Mi dispiace. Ha anche la febbre?"',
      backgroundEffect: 'neutral',
      choices: [
        { 
          text: '💬 "Sì, un po\'."', 
          textItalian: 'Sì, un po\'.',
          nextNodeId: 'recommend-treatment' 
        },
        { 
          text: '💬 "No, solo mal di gola."', 
          textItalian: 'No, solo mal di gola.',
          nextNodeId: 'recommend-simple' 
        }
      ]
    },
    'need-more-info': {
      id: 'need-more-info',
      speaker: 'npc',
      text: '🐱 Pharmacist Cat asks questions. "Che sintomi ha? Mal di testa? Febbre? Tosse?"',
      textItalian: '🐱 Pharmacist Cat fa domande. "Che sintomi ha? Mal di testa? Febbre? Tosse?"',
      choices: [
        { 
          text: '💬 "Mal di gola e mal di testa."', 
          textItalian: 'Mal di gola e mal di testa.',
          nextNodeId: 'examine-good' 
        }
      ]
    },
    'self-diagnose': {
      id: 'self-diagnose',
      speaker: 'npc',
      text: '🐱 Pharmacist Cat raises an eyebrow. "Prima mi dica i sintomi. Devo capire cosa ha."',
      textItalian: '🐱 Pharmacist Cat alza un sopracciglio. "Prima mi dica i sintomi. Devo capire cosa ha."',
      choices: [
        { 
          text: '💬 "Ho mal di gola e mal di testa."', 
          textItalian: 'Ho mal di gola e mal di testa.',
          nextNodeId: 'examine-good' 
        }
      ]
    },
    'recommend-treatment': {
      id: 'recommend-treatment',
      speaker: 'npc',
      text: '🐱 Pharmacist Cat gets some medicines. "Le do un antinfiammatorio e uno sciroppo per la tosse. Riposi e beva molta acqua."',
      textItalian: '🐱 Pharmacist Cat prende dei medicinali. "Le do un antinfiammatorio e uno sciroppo per la tosse. Riposi e beva molta acqua."',
      backgroundEffect: 'happy',
      choices: [
        { 
          text: '💬 "Grazie mille! Quanto costa?"', 
          textItalian: 'Grazie mille! Quanto costa?',
          nextNodeId: 'end-perfect' 
        }
      ]
    },
    'recommend-simple': {
      id: 'recommend-simple',
      speaker: 'npc',
      text: '🐱 Pharmacist Cat smiles. "Niente febbre? Bene. Prenda questo per il mal di gola. Passerà presto."',
      textItalian: '🐱 Pharmacist Cat sorride. "Niente febbre? Bene. Prenda questo per il mal di gola. Passerà presto."',
      backgroundEffect: 'happy',
      choices: [
        { 
          text: '💬 "Grazie!"', 
          textItalian: 'Grazie!',
          nextNodeId: 'end-perfect' 
        }
      ]
    },
    'end-perfect': {
      id: 'end-perfect',
      speaker: 'narrator',
      text: '✅ You got the right treatment! In Italy, pharmacists are trusted health advisors for minor issues.',
      textItalian: '✅ Hai ricevuto il trattamento giusto! In Italia, i farmacisti sono consulenti sanitari di fiducia per problemi minori.',
      choices: []
    }
  }
};

// ============================================
// EXPORT ALL SCENARIOS
// ============================================

export const branchingScenarios: BranchingScenario[] = [
  kitchenBreakfastScenario,
  bedroomWrongBagScenario,
  livingRoomMatchScenario,
  gardenWeekendScenario,
  cafeOrderScenario,
  supermarketShoppingScenario,
  transportTicketScenario,
  bathroomPharmacyScenario,
];

export const getScenarioById = (id: string): BranchingScenario | undefined => {
  return branchingScenarios.find(s => s.id === id);
};

export const getScenariosByRoom = (roomId: string): BranchingScenario[] => {
  return branchingScenarios.filter(s => s.roomId === roomId);
};
