// Contextual sentences for vocabulary words
// Each word has 2-3 example sentences showing practical usage

export interface WordSentence {
  italian: string;
  english: string;
  context: string; // brief context like "shopping", "cooking", "daily routine"
}

export const wordSentences: Record<string, WordSentence[]> = {
  // KITCHEN - Fridge items
  'acqua': [
    { italian: "L'acqua è in frigo.", english: "The water is in the fridge.", context: "location" },
    { italian: "Bevo un bicchiere d'acqua.", english: "I drink a glass of water.", context: "drinking" },
    { italian: "L'acqua è fredda.", english: "The water is cold.", context: "temperature" },
  ],
  'latte': [
    { italian: "Il latte è scaduto.", english: "The milk is expired.", context: "shopping check" },
    { italian: "Prendo il latte dal frigo.", english: "I get the milk from the fridge.", context: "daily routine" },
    { italian: "Vorrei del latte senza lattosio.", english: "I would like lactose-free milk.", context: "dietary needs" },
  ],
  'uova': [
    { italian: "Ho bisogno di uova per la frittata.", english: "I need eggs for the omelette.", context: "cooking" },
    { italian: "Le uova sono nel frigo.", english: "The eggs are in the fridge.", context: "location" },
    { italian: "Quante uova ci sono?", english: "How many eggs are there?", context: "inventory" },
  ],
  'burro': [
    { italian: "Il burro è sul tavolo.", english: "The butter is on the table.", context: "location" },
    { italian: "Metto il burro sul pane.", english: "I put butter on the bread.", context: "eating" },
    { italian: "Il burro è morbido.", english: "The butter is soft.", context: "texture" },
  ],
  'formaggio': [
    { italian: "Il formaggio è buono.", english: "The cheese is good.", context: "taste" },
    { italian: "Vorrei del formaggio grattugiato.", english: "I would like grated cheese.", context: "cooking" },
    { italian: "Quanto costa il formaggio?", english: "How much does the cheese cost?", context: "shopping" },
  ],
  'carne': [
    { italian: "La carne è nel freezer.", english: "The meat is in the freezer.", context: "location" },
    { italian: "Mangio carne ogni giorno.", english: "I eat meat every day.", context: "diet" },
    { italian: "La carne è cruda.", english: "The meat is raw.", context: "cooking" },
  ],
  'pesce': [
    { italian: "Il pesce è fresco.", english: "The fish is fresh.", context: "quality" },
    { italian: "Mangio pesce il venerdì.", english: "I eat fish on Fridays.", context: "tradition" },
    { italian: "Il pesce è sul ghiaccio.", english: "The fish is on ice.", context: "storage" },
  ],
  'pollo': [
    { italian: "Il pollo è nel forno.", english: "The chicken is in the oven.", context: "cooking" },
    { italian: "Mangio pollo arrosto.", english: "I eat roasted chicken.", context: "meal" },
    { italian: "Il pollo è pronto.", english: "The chicken is ready.", context: "timing" },
  ],
  'pomodoro': [
    { italian: "I pomodori sono rossi.", english: "The tomatoes are red.", context: "description" },
    { italian: "Taglio i pomodori per l'insalata.", english: "I cut the tomatoes for the salad.", context: "preparation" },
    { italian: "I pomodori sono maturi.", english: "The tomatoes are ripe.", context: "quality" },
  ],
  'carota': [
    { italian: "Le carote sono arancioni.", english: "The carrots are orange.", context: "description" },
    { italian: "Mangio carote crude.", english: "I eat raw carrots.", context: "eating" },
    { italian: "Le carote sono buone per gli occhi.", english: "Carrots are good for the eyes.", context: "health" },
  ],
  'insalata': [
    { italian: "L'insalata è fresca.", english: "The lettuce is fresh.", context: "quality" },
    { italian: "Mangio insalata a pranzo.", english: "I eat salad for lunch.", context: "meal" },
    { italian: "L'insalata è nel frigo.", english: "The lettuce is in the fridge.", context: "location" },
  ],
  'mela': [
    { italian: "La mela è rossa.", english: "The apple is red.", context: "description" },
    { italian: "Mangio una mela al giorno.", english: "I eat an apple a day.", context: "habit" },
    { italian: "La mela è dolce.", english: "The apple is sweet.", context: "taste" },
  ],
  'arancia': [
    { italian: "L'arancia è succosa.", english: "The orange is juicy.", context: "description" },
    { italian: "Spremo le arance per il succo.", english: "We squeeze oranges for juice.", context: "preparation" },
    { italian: "L'arancia è arancione.", english: "The orange is orange.", context: "color" },
  ],
  'banana': [
    { italian: "La banana è gialla.", english: "The banana is yellow.", context: "description" },
    { italian: "Mangio una banana a colazione.", english: "I eat a banana for breakfast.", context: "meal" },
    { italian: "La banana è matura.", english: "The banana is ripe.", context: "quality" },
  ],
  
  // KITCHEN - Pantry items
  'pasta': [
    { italian: "La pasta è pronta.", english: "The pasta is ready.", context: "cooking" },
    { italian: "Mangio pasta al pomodoro.", english: "I eat pasta with tomato sauce.", context: "meal" },
    { italian: "La pasta è nel cassetto.", english: "The pasta is in the drawer.", context: "location" },
  ],
  'riso': [
    { italian: "Il riso è cotto.", english: "The rice is cooked.", context: "cooking" },
    { italian: "Mangio riso con il pollo.", english: "I eat rice with chicken.", context: "meal" },
    { italian: "Il riso è nella dispensa.", english: "The rice is in the pantry.", context: "location" },
  ],
  'pane': [
    { italian: "Il pane è fresco.", english: "The bread is fresh.", context: "quality" },
    { italian: "Mangio pane con il burro.", english: "I eat bread with butter.", context: "eating" },
    { italian: "Il pane è nel cestino.", english: "The bread is in the basket.", context: "location" },
  ],
  'zucchero': [
    { italian: "Lo zucchero è nel barattolo.", english: "The sugar is in the jar.", context: "location" },
    { italian: "Metto lo zucchero nel caffè.", english: "I put sugar in the coffee.", context: "preparation" },
    { italian: "Lo zucchero è dolce.", english: "Sugar is sweet.", context: "taste" },
  ],
  'sale': [
    { italian: "Il sale è sul tavolo.", english: "The salt is on the table.", context: "location" },
    { italian: "Metto il sale nella pasta.", english: "I put salt in the pasta.", context: "cooking" },
    { italian: "Il sale è salato.", english: "Salt is salty.", context: "taste" },
  ],
  'olio': [
    { italian: "L'olio è nella bottiglia.", english: "The oil is in the bottle.", context: "location" },
    { italian: "Metto l'olio nell'insalata.", english: "I put oil in the salad.", context: "cooking" },
    { italian: "L'olio è extravergine.", english: "The oil is extra virgin.", context: "quality" },
  ],
  'caffe': [
    { italian: "Il caffè è caldo.", english: "The coffee is hot.", context: "temperature" },
    { italian: "Bevo il caffè al mattino.", english: "I drink coffee in the morning.", context: "habit" },
    { italian: "Il caffè è nella lattina.", english: "The coffee is in the tin.", context: "location" },
  ],
  'cioccolata': [
    { italian: "La cioccolata è dolce.", english: "The chocolate is sweet.", context: "taste" },
    { italian: "Mangio cioccolata dopo cena.", english: "I eat chocolate after dinner.", context: "meal" },
    { italian: "La cioccolata è nella dispensa.", english: "The chocolate is in the pantry.", context: "location" },
  ],
  'miele': [
    { italian: "Il miele è dolce.", english: "The honey is sweet.", context: "taste" },
    { italian: "Metto il miele sul pane.", english: "I put honey on the bread.", context: "eating" },
    { italian: "Il miele è nel barattolo.", english: "The honey is in the jar.", context: "location" },
  ],
  'biscotto': [
    { italian: "Il biscotto è croccante.", english: "The cookie is crunchy.", context: "texture" },
    { italian: "Mangio un biscotto con il caffè.", english: "I eat a cookie with coffee.", context: "snack" },
    { italian: "I biscotti sono nella scatola.", english: "The cookies are in the tin.", context: "location" },
  ],
  
  // KITCHEN - Utensils
  'coltello': [
    { italian: "Il coltello è affilato.", english: "The knife is sharp.", context: "description" },
    { italian: "Taglio il pane con il coltello.", english: "I cut the bread with the knife.", context: "usage" },
    { italian: "Il coltello è nel cassetto.", english: "The knife is in the drawer.", context: "location" },
  ],
  'forchetta': [
    { italian: "La forchetta è pulita.", english: "The fork is clean.", context: "description" },
    { italian: "Mangio la pasta con la forchetta.", english: "I eat pasta with the fork.", context: "usage" },
    { italian: "La forchetta è sul tavolo.", english: "The fork is on the table.", context: "location" },
  ],
  'cucchiaio': [
    { italian: "Il cucchiaio è grande.", english: "The spoon is big.", context: "description" },
    { italian: "Mangio la zuppa con il cucchiaio.", english: "I eat soup with the spoon.", context: "usage" },
    { italian: "Il cucchiaio è nel cassetto.", english: "The spoon is in the drawer.", context: "location" },
  ],
  
  // KITCHEN - Cooking
  'padella': [
    { italian: "La padella è calda.", english: "The frying pan is hot.", context: "temperature" },
    { italian: "Cucino le uova nella padella.", english: "I cook eggs in the frying pan.", context: "cooking" },
    { italian: "La padella è sul fornello.", english: "The frying pan is on the stove.", context: "location" },
  ],
  'pentola': [
    { italian: "La pentola è piena.", english: "The pot is full.", context: "description" },
    { italian: "Cucino la pasta nella pentola.", english: "I cook pasta in the pot.", context: "cooking" },
    { italian: "La pentola è sul fornello.", english: "The pot is on the stove.", context: "location" },
  ],
  'forno': [
    { italian: "Il forno è caldo.", english: "The oven is hot.", context: "temperature" },
    { italian: "Metto la torta nel forno.", english: "I put the cake in the oven.", context: "cooking" },
    { italian: "Il forno è in cucina.", english: "The oven is in the kitchen.", context: "location" },
  ],
  
  // KITCHEN - Table
  'piatto': [
    { italian: "Il piatto è pulito.", english: "The plate is clean.", context: "description" },
    { italian: "Metto la pasta nel piatto.", english: "I put the pasta on the plate.", context: "serving" },
    { italian: "Il piatto è sul tavolo.", english: "The plate is on the table.", context: "location" },
  ],
  'bicchiere': [
    { italian: "Il bicchiere è pieno.", english: "The glass is full.", context: "description" },
    { italian: "Bevo l'acqua dal bicchiere.", english: "I drink water from the glass.", context: "usage" },
    { italian: "Il bicchiere è sul tavolo.", english: "The glass is on the table.", context: "location" },
  ],
  'tazza': [
    { italian: "La tazza è calda.", english: "The cup is hot.", context: "temperature" },
    { italian: "Bevo il caffè dalla tazza.", english: "I drink coffee from the cup.", context: "usage" },
    { italian: "La tazza è sul piattino.", english: "The cup is on the saucer.", context: "location" },
  ],
  'vino': [
    { italian: "Il vino è rosso.", english: "The wine is red.", context: "description" },
    { italian: "Bevo vino a cena.", english: "I drink wine at dinner.", context: "meal" },
    { italian: "Il vino è nella bottiglia.", english: "The wine is in the bottle.", context: "location" },
  ],
  'birra': [
    { italian: "La birra è fredda.", english: "The beer is cold.", context: "temperature" },
    { italian: "Bevo birra con gli amici.", english: "I drink beer with friends.", context: "social" },
    { italian: "La birra è nella bottiglia.", english: "The beer is in the bottle.", context: "location" },
  ],
  'succo': [
    { italian: "Il succo è dolce.", english: "The juice is sweet.", context: "taste" },
    { italian: "Bevo succo d'arancia a colazione.", english: "I drink orange juice for breakfast.", context: "meal" },
    { italian: "Il succo è nel frigo.", english: "The juice is in the fridge.", context: "location" },
  ],
  'colazione': [
    { italian: "La colazione è importante.", english: "Breakfast is important.", context: "opinion" },
    { italian: "Mangio la colazione alle otto.", english: "I eat breakfast at eight.", context: "time" },
    { italian: "A colazione mangio il cornetto.", english: "For breakfast I eat a croissant.", context: "food" },
  ],
  'pranzo': [
    { italian: "Il pranzo è alle dodici.", english: "Lunch is at twelve.", context: "time" },
    { italian: "Mangio il pranzo al ristorante.", english: "I eat lunch at the restaurant.", context: "location" },
    { italian: "Il pranzo è pronto.", english: "Lunch is ready.", context: "timing" },
  ],
  'cena': [
    { italian: "La cena è alle otto.", english: "Dinner is at eight.", context: "time" },
    { italian: "Mangio la cena a casa.", english: "I eat dinner at home.", context: "location" },
    { italian: "La cena è buona.", english: "Dinner is good.", context: "taste" },
  ],
  
  // KITCHEN - Desserts
  'torta': [
    { italian: "La torta è buona.", english: "The cake is good.", context: "taste" },
    { italian: "Mangio la torta dopo cena.", english: "I eat cake after dinner.", context: "meal" },
    { italian: "La torta è nel frigo.", english: "The cake is in the fridge.", context: "location" },
  ],
  'gelato': [
    { italian: "Il gelato è freddo.", english: "The ice cream is cold.", context: "temperature" },
    { italian: "Mangio il gelato d'estate.", english: "I eat ice cream in summer.", context: "season" },
    { italian: "Il gelato è al cioccolato.", english: "The ice cream is chocolate.", context: "flavor" },
  ],
  'cornetto': [
    { italian: "Il cornetto è caldo.", english: "The croissant is warm.", context: "temperature" },
    { italian: "Mangio il cornetto a colazione.", english: "I eat a croissant for breakfast.", context: "meal" },
    { italian: "Il cornetto è alla crema.", english: "The croissant is cream-filled.", context: "flavor" },
  ],

  // ENTRANCE HALL - coat rack
  'guanto': [
    { italian: "Indosso il guanto quando fa freddo.", english: "I wear the glove when it's cold.", context: "coat rack" },
    { italian: "Il guanto è nella tasca del cappotto.", english: "The glove is in the coat pocket.", context: "coat rack" },
  ],
  // ENTRANCE HALL - mirror
  'magro': [
    { italian: "Mio fratello è alto e magro.", english: "My brother is tall and thin.", context: "describing people" },
    { italian: "Nello specchio sembri più magro.", english: "In the mirror you look thinner.", context: "mirror" },
  ],
  'grasso': [
    { italian: "Il gatto è un po' grasso.", english: "The cat is a bit fat.", context: "describing" },
    { italian: "Dopo Natale mi sento grasso.", english: "After Christmas I feel fat.", context: "mirror" },
  ],
  'debole': [
    { italian: "Oggi mi sento debole.", english: "Today I feel weak.", context: "condition" },
    { italian: "Il caffè è troppo debole.", english: "The coffee is too weak.", context: "taste" },
  ],
  // ENTRANCE HALL - welcome mat
  'scusa': [
    { italian: "Scusa, sono in ritardo.", english: "Sorry, I'm late.", context: "apology" },
    { italian: "Scusa, non ho capito.", english: "Sorry, I didn't understand.", context: "apology" },
  ],

  // LIBRARY - bookshelf
  'romanzo': [
    { italian: "Leggo un romanzo italiano.", english: "I'm reading an Italian novel.", context: "reading" },
    { italian: "Questo romanzo è molto lungo.", english: "This novel is very long.", context: "bookshelf" },
  ],
  'poesia': [
    { italian: "Mi piace la poesia di Leopardi.", english: "I like Leopardi's poetry.", context: "literature" },
    { italian: "Scrivo una poesia per mia madre.", english: "I'm writing a poem for my mother.", context: "writing" },
  ],
  'rivista': [
    { italian: "Compro una rivista di moda.", english: "I buy a fashion magazine.", context: "shopping" },
    { italian: "La rivista è sul tavolino.", english: "The magazine is on the side table.", context: "living room" },
  ],
  'giornale': [
    { italian: "Leggo il giornale ogni mattina.", english: "I read the newspaper every morning.", context: "daily routine" },
    { italian: "Il giornale parla di politica.", english: "The newspaper is about politics.", context: "news" },
  ],
  'manuale': [
    { italian: "Prendo il manuale di matematica.", english: "I take the math manual.", context: "study" },
    { italian: "Questo manuale è molto utile.", english: "This handbook is very useful.", context: "library" },
  ],
  'racconto': [
    { italian: "Scrivo un racconto per i bambini.", english: "I'm writing a story for children.", context: "writing" },
    { italian: "Il racconto è breve e divertente.", english: "The short story is brief and fun.", context: "library" },
  ],
  'biografia': [
    { italian: "Leggo la biografia di Dante.", english: "I'm reading Dante's biography.", context: "reading" },
    { italian: "Questa biografia è molto dettagliata.", english: "This biography is very detailed.", context: "library" },
  ],
  // LIBRARY - desk
  'calendario': [
    { italian: "Guardo il calendario per il compleanno.", english: "I check the calendar for the birthday.", context: "planning" },
    { italian: "Il calendario è appeso al muro.", english: "The calendar is hanging on the wall.", context: "desk" },
  ],

  // BEDROOM - jewelry
  'bracciale': [
    { italian: "Il bracciale è d'argento.", english: "The bracelet is silver.", context: "jewelry" },
    { italian: "Porto il bracciale della nonna.", english: "I wear grandma's bracelet.", context: "jewelry box" },
  ],
  'orecchini': [
    { italian: "Ho perso un orecchino.", english: "I lost an earring.", context: "jewelry" },
    { italian: "Gli orecchini sono d'oro.", english: "The earrings are gold.", context: "jewelry box" },
  ],
  // BEDROOM - shoes
  'scarpa': [
    { italian: "Mi manca una scarpa.", english: "I'm missing a shoe.", context: "getting dressed" },
    { italian: "La scarpa è troppo stretta.", english: "The shoe is too tight.", context: "shoe rack" },
  ],
  'stivale': [
    { italian: "Lo stivale è di pelle.", english: "The boot is leather.", context: "shoe rack" },
    { italian: "Metto gli stivali quando piove.", english: "I put on boots when it rains.", context: "weather" },
  ],
  'sandali': [
    { italian: "D'estate porto i sandali.", english: "In summer I wear sandals.", context: "shoe rack" },
    { italian: "I sandali sono molto comodi.", english: "The sandals are very comfortable.", context: "shoe rack" },
  ],
  'scarpette': [
    { italian: "Le scarpette del neonato sono piccole.", english: "The baby's little shoes are tiny.", context: "bedroom" },
    { italian: "Metto le scarpette prima di dormire.", english: "I put on the slippers before sleeping.", context: "bedroom" },
  ],
  // BEDROOM - bed
  'lenzuolo': [
    { italian: "Cambio il lenzuolo ogni settimana.", english: "I change the sheet every week.", context: "bed" },
    { italian: "Il lenzuolo è pulito e profumato.", english: "The sheet is clean and fragrant.", context: "bed" },
  ],
  'materasso': [
    { italian: "Il materasso è nuovo e morbido.", english: "The mattress is new and soft.", context: "bed" },
    { italian: "Dormo bene su questo materasso.", english: "I sleep well on this mattress.", context: "bed" },
  ],

  // BATHROOM - sink
  'spazzolino': [
    { italian: "Lo spazzolino è nel bicchiere.", english: "The toothbrush is in the glass.", context: "sink" },
    { italian: "Uso lo spazzolino due volte al giorno.", english: "I use the toothbrush twice a day.", context: "daily routine" },
  ],
  'rubinetto': [
    { italian: "Chiudi il rubinetto, per favore.", english: "Close the tap, please.", context: "sink" },
    { italian: "Il rubinetto perde acqua.", english: "The tap is leaking.", context: "sink" },
  ],
  // BATHROOM - shower
  'shampoo': [
    { italian: "Lo shampoo è finito.", english: "The shampoo is finished.", context: "shower" },
    { italian: "Uso lo shampoo per capelli secchi.", english: "I use shampoo for dry hair.", context: "shower" },
  ],
  'bagnoschiuma': [
    { italian: "Il bagnoschiuma profuma di lavanda.", english: "The body wash smells of lavender.", context: "shower" },
    { italian: "Metto il bagnoschiuma sulla spugna.", english: "I put body wash on the sponge.", context: "shower" },
  ],
  // BATHROOM - cabinet
  'aspirina': [
    { italian: "Prendo un'aspirina per il mal di testa.", english: "I take an aspirin for the headache.", context: "medicine cabinet" },
    { italian: "L'aspirina è sullo scaffale del bagno.", english: "The aspirin is on the bathroom shelf.", context: "medicine cabinet" },
  ],
  'pomata': [
    { italian: "La pomata è per la pelle secca.", english: "The ointment is for dry skin.", context: "medicine cabinet" },
    { italian: "Metto la pomata sulla ferita.", english: "I put ointment on the wound.", context: "first aid" },
  ],
  'cotone': [
    { italian: "Il cotone è nel cassetto del bagno.", english: "The cotton is in the bathroom drawer.", context: "medicine cabinet" },
    { italian: "Uso il cotone per pulire la ferita.", english: "I use cotton to clean the wound.", context: "first aid" },
  ],

  // GARDEN - flowers
  'rosa': [
    { italian: "La rosa rossa profuma molto.", english: "The red rose smells wonderful.", context: "garden" },
    { italian: "Regalo una rosa a mia moglie.", english: "I give a rose to my wife.", context: "gift" },
  ],
  // GARDEN - path
  'sentiero': [
    { italian: "Il sentiero porta al fiume.", english: "The path leads to the river.", context: "garden" },
    { italian: "Camminiamo su un sentiero stretto.", english: "We walk along a narrow path.", context: "walking" },
  ],
  'cancello': [
    { italian: "Apri il cancello del giardino.", english: "Open the garden gate.", context: "garden" },
    { italian: "Il cancello è chiuso a chiave.", english: "The gate is locked.", context: "garden" },
  ],

  // TRANSPORT - ticket office / platform
  'abbonamento': [
    { italian: "Ho un abbonamento mensile per il treno.", english: "I have a monthly train pass.", context: "commuting" },
    { italian: "L'abbonamento scade a giugno.", english: "The subscription expires in June.", context: "ticket office" },
  ],
  'partenza': [
    { italian: "La partenza è alle nove.", english: "Departure is at nine.", context: "station" },
    { italian: "La partenza è dal binario tre.", english: "Departure is from platform three.", context: "platform" },
  ],
  'arrivo': [
    { italian: "L'arrivo è previsto alle sei.", english: "Arrival is scheduled for six.", context: "station" },
    { italian: "Aspetto l'arrivo del treno.", english: "I'm waiting for the train's arrival.", context: "platform" },
  ],
  'binario': [
    { italian: "Il treno parte dal binario cinque.", english: "The train leaves from platform five.", context: "station" },
    { italian: "Cerco il binario giusto.", english: "I'm looking for the right platform.", context: "station" },
  ],
  'ritardo': [
    { italian: "Il treno è in ritardo di dieci minuti.", english: "The train is ten minutes late.", context: "platform" },
    { italian: "Scusa per il ritardo.", english: "Sorry for the delay.", context: "apology" },
  ],
  'vagone': [
    { italian: "Il mio posto è nel vagone sei.", english: "My seat is in carriage six.", context: "train" },
    { italian: "Il vagone è pieno di gente.", english: "The carriage is full of people.", context: "train" },
  ],
  // TRANSPORT - street
  'uscita': [
    { italian: "L'uscita è a destra.", english: "The exit is on the right.", context: "directions" },
    { italian: "Cerca l'uscita della stazione.", english: "Look for the station exit.", context: "station" },
  ],
  'entrata': [
    { italian: "L'entrata del museo è qui.", english: "The museum entrance is here.", context: "directions" },
    { italian: "L'entrata è gratis la domenica.", english: "Entrance is free on Sundays.", context: "museum" },
  ],
  'incrocio': [
    { italian: "Gira a sinistra all'incrocio.", english: "Turn left at the intersection.", context: "directions" },
    { italian: "C'è un semaforo all'incrocio.", english: "There's a traffic light at the intersection.", context: "street" },
  ],
  'direzione': [
    { italian: "Vado in direzione del centro.", english: "I'm heading toward the centre.", context: "directions" },
    { italian: "Quale direzione è giusta?", english: "Which direction is right?", context: "directions" },
  ],
  'cartello': [
    { italian: "Il cartello indica l'autostrada.", english: "The sign points to the motorway.", context: "driving" },
    { italian: "Non ho visto il cartello di stop.", english: "I didn't see the stop sign.", context: "street" },
  ],

  // SUPERMARKET - dairy
  'yogurt': [
    { italian: "Lo yogurt è alla fragola.", english: "The yogurt is strawberry flavour.", context: "dairy aisle" },
    { italian: "Compro lo yogurt al supermercato.", english: "I buy yogurt at the supermarket.", context: "shopping" },
  ],
  'panna': [
    { italian: "La panna è per il caffè.", english: "The cream is for the coffee.", context: "dairy aisle" },
    { italian: "Aggiungo panna al dolce.", english: "I add cream to the dessert.", context: "baking" },
  ],

  // CAFE - counter
  'barista': [
    { italian: "Il barista prepara un caffè perfetto.", english: "The barista makes a perfect coffee.", context: "cafe" },
    { italian: "Chiedo il menu al barista.", english: "I ask the barista for the menu.", context: "cafe" },
  ],

  // GALLERY - paintings
  'colore': [
    { italian: "Il colore di questo quadro è vivace.", english: "The colour of this painting is vivid.", context: "gallery" },
    { italian: "Il mio colore preferito è il blu.", english: "My favourite colour is blue.", context: "preference" },
  ],
  'artista': [
    { italian: "L'artista è famoso in tutto il mondo.", english: "The artist is famous worldwide.", context: "gallery" },
    { italian: "L'artista dipinge con olio su tela.", english: "The artist paints with oil on canvas.", context: "studio" },
  ],
  'mostra': [
    { italian: "Andiamo alla mostra di Caravaggio.", english: "Let's go to the Caravaggio exhibition.", context: "gallery" },
    { italian: "La mostra chiude domenica.", english: "The exhibition closes on Sunday.", context: "gallery" },
  ],
  'pennello': [
    { italian: "Il pennello è sporco di rosso.", english: "The paintbrush is dirty with red.", context: "studio" },
    { italian: "Uso un pennello fine per i dettagli.", english: "I use a thin brush for the details.", context: "painting" },
  ],
  // GALLERY - shopping
  'regalo': [
    { italian: "Compro un regalo per mia sorella.", english: "I buy a gift for my sister.", context: "shopping" },
    { italian: "Questo regalo è per te.", english: "This gift is for you.", context: "giving" },
  ],
  'cartolina': [
    { italian: "Mando una cartolina da Roma.", english: "I'm sending a postcard from Rome.", context: "travel" },
    { italian: "La cartolina mostra il Colosseo.", english: "The postcard shows the Colosseum.", context: "souvenir shop" },
  ],
  'souvenir': [
    { italian: "Prendo un souvenir per i miei amici.", english: "I'm getting a souvenir for my friends.", context: "travel" },
    { italian: "Il negozio di souvenir è caro.", english: "The souvenir shop is expensive.", context: "shopping" },
  ],

  // ANIMALS - reptiles
  'serpente': [
    { italian: "Il serpente dorme al sole.", english: "The snake sleeps in the sun.", context: "reptile house" },
    { italian: "Attento, c'è un serpente sul sentiero!", english: "Careful, there's a snake on the path!", context: "outdoors" },
  ],
  'lucertola': [
    { italian: "La lucertola si scalda sulla pietra.", english: "The lizard warms itself on the stone.", context: "reptile house" },
    { italian: "La lucertola è veloce e piccola.", english: "The lizard is quick and small.", context: "reptile house" },
  ],
  'tartaruga': [
    { italian: "La tartaruga è lenta ma paziente.", english: "The turtle is slow but patient.", context: "zoo" },
    { italian: "Ho una tartaruga come animale domestico.", english: "I have a turtle as a pet.", context: "pets" },
  ],
  'coccodrillo': [
    { italian: "Il coccodrillo vive nel fiume.", english: "The crocodile lives in the river.", context: "zoo" },
    { italian: "Il coccodrillo ha denti affilati.", english: "The crocodile has sharp teeth.", context: "zoo" },
  ],
  // ANIMALS - mammals
  'mucca': [
    { italian: "La mucca mangia erba nel campo.", english: "The cow eats grass in the field.", context: "farm" },
    { italian: "La mucca produce latte fresco.", english: "The cow produces fresh milk.", context: "farm" },
  ],
  'maiale': [
    { italian: "Il maiale si rotola nel fango.", english: "The pig rolls in the mud.", context: "farm" },
    { italian: "In fattoria c'è un maiale rosa.", english: "On the farm there's a pink pig.", context: "farm" },
  ],
  'pecora': [
    { italian: "La pecora dà la lana.", english: "The sheep gives wool.", context: "farm" },
    { italian: "Le pecore seguono il pastore.", english: "The sheep follow the shepherd.", context: "farm" },
  ],
  'capra': [
    { italian: "La capra mangia di tutto.", english: "The goat eats anything.", context: "farm" },
    { italian: "La capra sale sulla roccia.", english: "The goat climbs the rock.", context: "farm" },
  ],
  'coniglio': [
    { italian: "Il coniglio mangia una carota.", english: "The rabbit eats a carrot.", context: "farm" },
    { italian: "Il coniglio corre veloce.", english: "The rabbit runs fast.", context: "farm" },
  ],

  // WEATHER - storms
  'grandine': [
    { italian: "La grandine ha rotto i vetri.", english: "The hail broke the windows.", context: "storm" },
    { italian: "Durante il temporale cade grandine.", english: "Hail falls during the storm.", context: "weather" },
  ],

  // FARM - vegetables
  'aglio': [
    { italian: "Uso l'aglio per il sugo.", english: "I use garlic for the sauce.", context: "cooking" },
    { italian: "L'aglio cresce nell'orto.", english: "Garlic grows in the vegetable patch.", context: "farm" },
  ],
  'cipolla': [
    { italian: "La cipolla mi fa piangere.", english: "The onion makes me cry.", context: "cooking" },
    { italian: "Taglio la cipolla sul tagliere.", english: "I cut the onion on the cutting board.", context: "cooking" },
  ],
  'patata': [
    { italian: "Mangio le patate al forno.", english: "I eat baked potatoes.", context: "cooking" },
    { italian: "La patata cresce sotto terra.", english: "The potato grows underground.", context: "farm" },
  ],
  'peperone': [
    { italian: "Il peperone rosso è dolce.", english: "The red bell pepper is sweet.", context: "cooking" },
    { italian: "Compro i peperoni al mercato.", english: "I buy bell peppers at the market.", context: "market" },
  ],

  // ACTIONS - movement
  'cadere': [
    { italian: "Attento, non cadere!", english: "Careful, don't fall!", context: "warning" },
    { italian: "La foglia cade dall'albero.", english: "The leaf falls from the tree.", context: "garden" },
  ],
  'camminare': [
    { italian: "Camminiamo nel parco.", english: "We walk in the park.", context: "outdoors" },
    { italian: "Mi piace camminare la mattina.", english: "I like walking in the morning.", context: "routine" },
  ],
  'correre': [
    { italian: "Corro ogni mattina.", english: "I run every morning.", context: "exercise" },
    { italian: "Il cane corre nel prato.", english: "The dog runs in the meadow.", context: "outdoors" },
  ],
  'girare': [
    { italian: "Gira a destra al semaforo.", english: "Turn right at the traffic light.", context: "directions" },
    { italian: "La ruota gira veloce.", english: "The wheel spins fast.", context: "movement" },
  ],
  'nuotare': [
    { italian: "Nuoto in piscina d'estate.", english: "I swim in the pool in summer.", context: "summer" },
    { italian: "I pesci nuotano nel mare.", english: "Fish swim in the sea.", context: "nature" },
  ],
  'saltare': [
    { italian: "I bambini saltano sul letto.", english: "The children jump on the bed.", context: "play" },
    { italian: "Il gatto salta sul tavolo.", english: "The cat jumps onto the table.", context: "home" },
  ],
  'volare': [
    { italian: "L'aereo vola sopra le nuvole.", english: "The plane flies above the clouds.", context: "travel" },
    { italian: "Gli uccelli volano a sud in inverno.", english: "Birds fly south in winter.", context: "nature" },
  ],

  // BATHROOM - sink
  'asciugamano': [
    { italian: "L'asciugamano è sul gancio.", english: "The towel is on the hook.", context: "bathroom" },
    { italian: "Mi asciugo con l'asciugamano.", english: "I dry off with the towel.", context: "bathroom" },
  ],
  'dentifricio': [
    { italian: "Metto il dentifricio sullo spazzolino.", english: "I put toothpaste on the toothbrush.", context: "sink" },
    { italian: "Il dentifricio è alla menta.", english: "The toothpaste is mint-flavoured.", context: "sink" },
  ],
  'sapone': [
    { italian: "Il sapone profuma di limone.", english: "The soap smells of lemon.", context: "sink" },
    { italian: "Lavo le mani con il sapone.", english: "I wash my hands with soap.", context: "sink" },
  ],
  'specchio': [
    { italian: "Mi guardo allo specchio.", english: "I look at myself in the mirror.", context: "bathroom" },
    { italian: "Lo specchio è sopra il lavandino.", english: "The mirror is above the sink.", context: "bathroom" },
  ],

  // BEDROOM - bed
  'coperta': [
    { italian: "La coperta è calda e morbida.", english: "The blanket is warm and soft.", context: "bed" },
    { italian: "Metto la coperta sul letto.", english: "I put the blanket on the bed.", context: "bed" },
  ],
  'cuscino': [
    { italian: "Il cuscino è morbido.", english: "The pillow is soft.", context: "bed" },
    { italian: "Dormo con due cuscini.", english: "I sleep with two pillows.", context: "bed" },
  ],
  'letto': [
    { italian: "Il letto è grande e comodo.", english: "The bed is big and comfortable.", context: "bedroom" },
    { italian: "Vado a letto alle undici.", english: "I go to bed at eleven.", context: "routine" },
  ],

  // BEDROOM - wardrobe
  'camicia': [
    { italian: "La camicia bianca è stirata.", english: "The white shirt is ironed.", context: "wardrobe" },
    { italian: "Indosso la camicia per il lavoro.", english: "I wear the shirt for work.", context: "work" },
  ],
  'gonna': [
    { italian: "La gonna è troppo corta.", english: "The skirt is too short.", context: "wardrobe" },
    { italian: "Compro una gonna nera.", english: "I buy a black skirt.", context: "shopping" },
  ],
  'jeans': [
    { italian: "I jeans sono comodi.", english: "The jeans are comfortable.", context: "wardrobe" },
    { italian: "Metto i jeans nel weekend.", english: "I wear jeans on the weekend.", context: "casual" },
  ],
  'maglietta': [
    { italian: "La maglietta è di cotone.", english: "The t-shirt is cotton.", context: "wardrobe" },
    { italian: "In estate porto una maglietta.", english: "In summer I wear a t-shirt.", context: "summer" },
  ],
  'pantaloni': [
    { italian: "I pantaloni sono neri.", english: "The trousers are black.", context: "wardrobe" },
    { italian: "Stiro i pantaloni.", english: "I iron the trousers.", context: "laundry" },
  ],
  'pigiama': [
    { italian: "Metto il pigiama prima di dormire.", english: "I put on pyjamas before sleeping.", context: "night routine" },
    { italian: "Il pigiama è a righe.", english: "The pyjamas are striped.", context: "bedroom" },
  ],
  'vestito': [
    { italian: "Il vestito rosso è bellissimo.", english: "The red dress is beautiful.", context: "wardrobe" },
    { italian: "Porto il vestito alla festa.", english: "I wear the dress to the party.", context: "event" },
  ],

  // BATHROOM - cabinet
  'cerotto': [
    { italian: "Metto un cerotto sul dito.", english: "I put a plaster on my finger.", context: "first aid" },
    { italian: "Il cerotto è nel cassetto.", english: "The plaster is in the drawer.", context: "medicine cabinet" },
  ],
  'medicina': [
    { italian: "Prendo la medicina dopo cena.", english: "I take the medicine after dinner.", context: "health" },
    { italian: "La medicina è amara.", english: "The medicine is bitter.", context: "health" },
  ],
  'termometro': [
    { italian: "Il termometro segna trentotto.", english: "The thermometer reads thirty-eight.", context: "health" },
    { italian: "Uso il termometro quando ho la febbre.", english: "I use the thermometer when I have a fever.", context: "health" },
  ],

  // CAFE
  'menu': [
    { italian: "Posso vedere il menu?", english: "May I see the menu?", context: "cafe" },
    { italian: "Il menu è in italiano e inglese.", english: "The menu is in Italian and English.", context: "cafe" },
  ],
  'conto': [
    { italian: "Il conto, per favore.", english: "The bill, please.", context: "cafe" },
    { italian: "Paghiamo il conto al bar.", english: "We pay the bill at the counter.", context: "cafe" },
  ],

  // SUPERMARKET - checkout
  'carrello': [
    { italian: "Riempio il carrello al supermercato.", english: "I fill the cart at the supermarket.", context: "shopping" },
    { italian: "Il carrello è pesante.", english: "The cart is heavy.", context: "shopping" },
  ],
  'cassa': [
    { italian: "Faccio la fila alla cassa.", english: "I queue at the checkout.", context: "shopping" },
    { italian: "La cassa è chiusa.", english: "The till is closed.", context: "shopping" },
  ],
  'contanti': [
    { italian: "Pago in contanti.", english: "I pay in cash.", context: "shopping" },
    { italian: "Non ho contanti con me.", english: "I don't have cash with me.", context: "payment" },
  ],
  'euro': [
    { italian: "Costa dieci euro.", english: "It costs ten euros.", context: "shopping" },
    { italian: "Ho solo venti euro.", english: "I only have twenty euros.", context: "money" },
  ],
  'prezzo': [
    { italian: "Qual è il prezzo?", english: "What's the price?", context: "shopping" },
    { italian: "Il prezzo è scritto sul cartellino.", english: "The price is on the tag.", context: "shopping" },
  ],
  'scontrino': [
    { italian: "Lo scontrino è nella borsa.", english: "The receipt is in the bag.", context: "shopping" },
    { italian: "Mi dà lo scontrino, per favore?", english: "Can you give me the receipt, please?", context: "shopping" },
  ],

  // ENTRANCE HALL - clock
  'giorno': [
    { italian: "Oggi è un bel giorno.", english: "Today is a nice day.", context: "daily" },
    { italian: "Lavoro ogni giorno.", english: "I work every day.", context: "routine" },
  ],
  'mattina': [
    { italian: "La mattina prendo un caffè.", english: "In the morning I have a coffee.", context: "routine" },
    { italian: "La mattina è fredda.", english: "The morning is cold.", context: "weather" },
  ],
  'mezzanotte': [
    { italian: "A mezzanotte il treno arriva.", english: "At midnight the train arrives.", context: "time" },
    { italian: "Torno a casa a mezzanotte.", english: "I come home at midnight.", context: "time" },
  ],
  'mezzogiorno': [
    { italian: "Mangiamo a mezzogiorno.", english: "We eat at noon.", context: "meals" },
    { italian: "A mezzogiorno fa caldo.", english: "At noon it's hot.", context: "weather" },
  ],
  'minuto': [
    { italian: "Aspetta un minuto!", english: "Wait a minute!", context: "time" },
    { italian: "Il minuto è passato veloce.", english: "The minute passed quickly.", context: "time" },
  ],
  'notte': [
    { italian: "Di notte dormo otto ore.", english: "At night I sleep eight hours.", context: "routine" },
    { italian: "La notte è silenziosa.", english: "The night is silent.", context: "atmosphere" },
  ],
  'ora': [
    { italian: "Che ora è?", english: "What time is it?", context: "time" },
    { italian: "Studio per un'ora.", english: "I study for an hour.", context: "time" },
  ],
  'secondo': [
    { italian: "Aspetta un secondo.", english: "Wait a second.", context: "time" },
    { italian: "Arrivo in pochi secondi.", english: "I'll arrive in a few seconds.", context: "time" },
  ],
  'sera': [
    { italian: "La sera guardo la TV.", english: "In the evening I watch TV.", context: "routine" },
    { italian: "Ceniamo alle otto di sera.", english: "We have dinner at eight in the evening.", context: "meals" },
  ],
  'tempo': [
    { italian: "Non ho tempo oggi.", english: "I don't have time today.", context: "time" },
    { italian: "Il tempo passa veloce.", english: "Time flies.", context: "expression" },
  ],

  // ENTRANCE HALL - coat rack
  'borsa': [
    { italian: "La borsa è appesa al gancio.", english: "The bag is on the hook.", context: "coat rack" },
    { italian: "Prendo la borsa e vado.", english: "I grab the bag and go.", context: "leaving" },
  ],
  'cappello': [
    { italian: "Il cappello è sul ripiano.", english: "The hat is on the shelf.", context: "coat rack" },
    { italian: "Porto il cappello quando fa sole.", english: "I wear a hat when it's sunny.", context: "weather" },
  ],
  'cappotto': [
    { italian: "Il cappotto è di lana.", english: "The coat is wool.", context: "winter" },
    { italian: "Appendo il cappotto all'attaccapanni.", english: "I hang the coat on the coat rack.", context: "coat rack" },
  ],
  'cintura': [
    { italian: "Allaccio la cintura dei pantaloni.", english: "I fasten the belt on my trousers.", context: "dressing" },
    { italian: "La cintura è di cuoio.", english: "The belt is leather.", context: "accessory" },
  ],
  'cravatta': [
    { italian: "Metto la cravatta per l'ufficio.", english: "I put on the tie for the office.", context: "work" },
    { italian: "La cravatta è a righe blu.", english: "The tie has blue stripes.", context: "accessory" },
  ],
  'giacca': [
    { italian: "La giacca nera è elegante.", english: "The black jacket is elegant.", context: "wardrobe" },
    { italian: "Fa freddo, prendi la giacca.", english: "It's cold, take the jacket.", context: "weather" },
  ],
  'impermeabile': [
    { italian: "L'impermeabile è appeso all'ingresso.", english: "The raincoat is hanging in the entrance.", context: "coat rack" },
    { italian: "Metto l'impermeabile quando piove.", english: "I put on the raincoat when it rains.", context: "weather" },
  ],
  'maglione': [
    { italian: "Il maglione è di lana.", english: "The sweater is wool.", context: "winter" },
    { italian: "D'inverno porto un maglione caldo.", english: "In winter I wear a warm sweater.", context: "weather" },
  ],
  'sciarpa': [
    { italian: "La sciarpa rossa è lunga.", english: "The red scarf is long.", context: "accessory" },
    { italian: "Metto la sciarpa al collo.", english: "I wrap the scarf around my neck.", context: "winter" },
  ],

  // LIBRARY - computer
  'computer': [
    { italian: "Accendo il computer.", english: "I turn on the computer.", context: "work" },
    { italian: "Il computer è lento oggi.", english: "The computer is slow today.", context: "tech" },
  ],
  'file': [
    { italian: "Salvo il file sul desktop.", english: "I save the file on the desktop.", context: "computing" },
    { italian: "Il file è troppo grande.", english: "The file is too big.", context: "computing" },
  ],
  'mouse': [
    { italian: "Il mouse non funziona.", english: "The mouse isn't working.", context: "computing" },
    { italian: "Clicca con il mouse.", english: "Click with the mouse.", context: "computing" },
  ],
  'password': [
    { italian: "Dimentico sempre la password.", english: "I always forget the password.", context: "computing" },
    { italian: "La password è segreta.", english: "The password is secret.", context: "security" },
  ],
  'schermo': [
    { italian: "Lo schermo è luminoso.", english: "The screen is bright.", context: "computing" },
    { italian: "Guardo lo schermo del computer.", english: "I look at the computer screen.", context: "computing" },
  ],
  'scienza': [
    { italian: "La scienza è interessante.", english: "Science is interesting.", context: "study" },
    { italian: "Studio scienza all'università.", english: "I study science at university.", context: "education" },
  ],
  'stampante': [
    { italian: "La stampante non ha carta.", english: "The printer is out of paper.", context: "office" },
    { italian: "Stampo con la stampante nuova.", english: "I print with the new printer.", context: "office" },
  ],
  'studente': [
    { italian: "Lo studente studia per l'esame.", english: "The student studies for the exam.", context: "school" },
    { italian: "Sono uno studente di italiano.", english: "I am a student of Italian.", context: "introduction" },
  ],
  'studentessa': [
    { italian: "La studentessa è molto brava.", english: "The student is very good.", context: "school" },
    { italian: "La studentessa arriva in ritardo.", english: "The student arrives late.", context: "school" },
  ],
  'tastiera': [
    { italian: "La tastiera è italiana.", english: "The keyboard is Italian.", context: "computing" },
    { italian: "Scrivo veloce con la tastiera.", english: "I type fast with the keyboard.", context: "computing" },
  ],

  // ACTIONS - daily
  'addormentarsi': [
    { italian: "Mi addormento alle undici.", english: "I fall asleep at eleven.", context: "night routine" },
    { italian: "Il bambino si addormenta sul divano.", english: "The child falls asleep on the sofa.", context: "home" },
  ],
  'alzarsi': [
    { italian: "Mi alzo presto la mattina.", english: "I get up early in the morning.", context: "morning routine" },
    { italian: "Si alza tardi il weekend.", english: "He gets up late on weekends.", context: "routine" },
  ],
  'aprire': [
    { italian: "Apro la porta.", english: "I open the door.", context: "home" },
    { italian: "Apri la finestra, per favore.", english: "Open the window, please.", context: "home" },
  ],
  'chiudere': [
    { italian: "Chiudo la porta piano.", english: "I close the door quietly.", context: "home" },
    { italian: "Chiudi a chiave, per favore.", english: "Lock it, please.", context: "home" },
  ],
  'lavarsi': [
    { italian: "Mi lavo le mani prima di mangiare.", english: "I wash my hands before eating.", context: "hygiene" },
    { italian: "Il bambino si lava la faccia.", english: "The child washes his face.", context: "hygiene" },
  ],
  'pettinarsi': [
    { italian: "Mi pettino davanti allo specchio.", english: "I comb my hair in front of the mirror.", context: "morning routine" },
    { italian: "La bambina si pettina da sola.", english: "The girl combs her hair on her own.", context: "routine" },
  ],
  'svegliarsi': [
    { italian: "Mi sveglio alle sette.", english: "I wake up at seven.", context: "morning routine" },
    { italian: "Si sveglia con la sveglia.", english: "He wakes up with the alarm.", context: "routine" },
  ],
  'vestirsi': [
    { italian: "Mi vesto per il lavoro.", english: "I get dressed for work.", context: "morning routine" },
    { italian: "Si veste elegante per la festa.", english: "She dresses elegantly for the party.", context: "event" },
  ],

  // LIBRARY - desk
  'carta': [
    { italian: "Scrivo sulla carta bianca.", english: "I write on the white paper.", context: "desk" },
    { italian: "La carta è finita.", english: "The paper is finished.", context: "office" },
  ],
  'gomma': [
    { italian: "Cancello l'errore con la gomma.", english: "I erase the mistake with the rubber.", context: "desk" },
    { italian: "La gomma è sulla scrivania.", english: "The rubber is on the desk.", context: "desk" },
  ],
  'lezione': [
    { italian: "La lezione inizia alle nove.", english: "The lesson starts at nine.", context: "school" },
    { italian: "Oggi abbiamo lezione d'italiano.", english: "Today we have an Italian lesson.", context: "school" },
  ],
  'matita': [
    { italian: "Disegno con la matita.", english: "I draw with the pencil.", context: "desk" },
    { italian: "La matita è rossa.", english: "The pencil is red.", context: "desk" },
  ],
  'pagina': [
    { italian: "Leggo la pagina cinque.", english: "I read page five.", context: "reading" },
    { italian: "La pagina è strappata.", english: "The page is torn.", context: "book" },
  ],
  'penna': [
    { italian: "La penna non scrive più.", english: "The pen doesn't write anymore.", context: "desk" },
    { italian: "Prendo appunti con la penna.", english: "I take notes with the pen.", context: "study" },
  ],
  'quaderno': [
    { italian: "Apro il quaderno a pagina dieci.", english: "I open the notebook to page ten.", context: "school" },
    { italian: "Il quaderno è sulla scrivania.", english: "The notebook is on the desk.", context: "desk" },
  ],
  'righello': [
    { italian: "Misuro con il righello.", english: "I measure with the ruler.", context: "desk" },
    { italian: "Il righello è di venti centimetri.", english: "The ruler is twenty centimetres long.", context: "desk" },
  ],
  'scrivania': [
    { italian: "La scrivania è ordinata.", english: "The desk is tidy.", context: "office" },
    { italian: "Studio alla scrivania ogni sera.", english: "I study at the desk every evening.", context: "routine" },
  ],

  // BEDROOM - drawer
  'calze': [
    { italian: "Le calze sono nel cassetto.", english: "The socks are in the drawer.", context: "wardrobe" },
    { italian: "Metto le calze di lana d'inverno.", english: "I wear wool socks in winter.", context: "winter" },
  ],
  'occhiali': [
    { italian: "Gli occhiali sono sul comodino.", english: "The glasses are on the nightstand.", context: "bedroom" },
    { italian: "Metto gli occhiali per leggere.", english: "I put on glasses to read.", context: "reading" },
  ],
  'orologio': [
    { italian: "L'orologio segna le otto.", english: "The watch reads eight.", context: "time" },
    { italian: "Il mio orologio è nuovo.", english: "My watch is new.", context: "accessory" },
  ],

  // EMOTIONS - feelings
  'amore': [
    { italian: "L'amore è importante.", english: "Love is important.", context: "feeling" },
    { italian: "Parlo con amore di mia figlia.", english: "I speak with love about my daughter.", context: "family" },
  ],
  'gioia': [
    { italian: "Ballo dalla gioia.", english: "I dance for joy.", context: "feeling" },
    { italian: "La gioia si vede sul suo viso.", english: "Joy shows on his face.", context: "feeling" },
  ],
  'paura': [
    { italian: "Ho paura dei ragni.", english: "I'm afraid of spiders.", context: "fear" },
    { italian: "La paura passa con il tempo.", english: "Fear passes with time.", context: "feeling" },
  ],
  'rabbia': [
    { italian: "Provo rabbia quando mento.", english: "I feel anger when I lie.", context: "feeling" },
    { italian: "Cerco di controllare la rabbia.", english: "I try to control the anger.", context: "feeling" },
  ],
  'tristezza': [
    { italian: "Una grande tristezza mi prende.", english: "A great sadness takes me.", context: "feeling" },
    { italian: "La tristezza passa presto.", english: "The sadness passes soon.", context: "feeling" },
  ],

  // ENTRANCE HALL - family portrait
  'figlia': [
    { italian: "Mia figlia ha cinque anni.", english: "My daughter is five years old.", context: "family" },
    { italian: "La figlia di Maria è simpatica.", english: "Maria's daughter is nice.", context: "family" },
  ],
  'figlio': [
    { italian: "Mio figlio va a scuola.", english: "My son goes to school.", context: "family" },
    { italian: "Ha un figlio e una figlia.", english: "He has a son and a daughter.", context: "family" },
  ],
  'fratello': [
    { italian: "Mio fratello è più grande.", english: "My brother is older.", context: "family" },
    { italian: "Parlo con mio fratello ogni giorno.", english: "I talk to my brother every day.", context: "family" },
  ],
  'madre': [
    { italian: "Mia madre cucina bene.", english: "My mother cooks well.", context: "family" },
    { italian: "Chiamo mia madre la domenica.", english: "I call my mother on Sundays.", context: "family" },
  ],
  'nonna': [
    { italian: "La nonna racconta storie.", english: "Grandma tells stories.", context: "family" },
    { italian: "Visito la nonna ogni domenica.", english: "I visit grandma every Sunday.", context: "family" },
  ],
  'nonno': [
    { italian: "Il nonno ha ottant'anni.", english: "Grandpa is eighty.", context: "family" },
    { italian: "Il nonno gioca con i nipoti.", english: "Grandpa plays with the grandchildren.", context: "family" },
  ],
  'padre': [
    { italian: "Mio padre lavora in banca.", english: "My father works at a bank.", context: "family" },
    { italian: "Il padre di Luca è medico.", english: "Luca's father is a doctor.", context: "family" },
  ],
  'sorella': [
    { italian: "Mia sorella studia a Roma.", english: "My sister studies in Rome.", context: "family" },
    { italian: "Ho una sorella maggiore.", english: "I have an older sister.", context: "family" },
  ],
  'zia': [
    { italian: "Mia zia vive in Sicilia.", english: "My aunt lives in Sicily.", context: "family" },
    { italian: "La zia porta sempre dolci.", english: "Auntie always brings sweets.", context: "family" },
  ],
  'zio': [
    { italian: "Lo zio è il fratello di papà.", english: "The uncle is dad's brother.", context: "family" },
    { italian: "Mio zio è simpatico.", english: "My uncle is nice.", context: "family" },
  ],

  // FANTASY
  'fata': [
    { italian: "La fata ha le ali.", english: "The fairy has wings.", context: "fantasy" },
    { italian: "La fata esaudisce tre desideri.", english: "The fairy grants three wishes.", context: "fantasy" },
  ],

  // FARM - fruits
  'ciliegia': [
    { italian: "La ciliegia è rossa e dolce.", english: "The cherry is red and sweet.", context: "fruit" },
    { italian: "Mangio le ciliegie in estate.", english: "I eat cherries in summer.", context: "summer" },
  ],
  'limone': [
    { italian: "Il limone è giallo.", english: "The lemon is yellow.", context: "fruit" },
    { italian: "Spremo il limone nel tè.", english: "I squeeze lemon into the tea.", context: "cooking" },
  ],

  // LIVING ROOM - furniture
  'libreria': [
    { italian: "La libreria è piena di libri.", english: "The bookshelf is full of books.", context: "furniture" },
    { italian: "Metto il dizionario sulla libreria.", english: "I put the dictionary on the bookshelf.", context: "library" },
  ],
  'quadro': [
    { italian: "Il quadro è appeso al muro.", english: "The painting hangs on the wall.", context: "living room" },
    { italian: "Questo quadro è di mia zia.", english: "This painting is by my aunt.", context: "gallery" },
  ],
  'sedia': [
    { italian: "La sedia è di legno.", english: "The chair is wooden.", context: "furniture" },
    { italian: "Siedi sulla sedia.", english: "Sit on the chair.", context: "furniture" },
  ],
  'tappeto': [
    { italian: "Il tappeto è morbido.", english: "The rug is soft.", context: "living room" },
    { italian: "Pulisco il tappeto la domenica.", english: "I clean the rug on Sundays.", context: "cleaning" },
  ],
  'tavolo': [
    { italian: "Il tavolo è apparecchiato.", english: "The table is set.", context: "dining" },
    { italian: "Mangiamo al tavolo grande.", english: "We eat at the big table.", context: "dining" },
  ],
  'tenda': [
    { italian: "La tenda è chiusa.", english: "The curtain is closed.", context: "living room" },
    { italian: "Apro la tenda la mattina.", english: "I open the curtain in the morning.", context: "morning" },
  ],

  // GALLERY - paintings
  'luce': [
    { italian: "C'è poca luce in questa stanza.", english: "There's little light in this room.", context: "gallery" },
    { italian: "La luce entra dalla finestra.", english: "Light comes through the window.", context: "atmosphere" },
  ],
  'scultura': [
    { italian: "La scultura è di marmo.", english: "The sculpture is marble.", context: "gallery" },
    { italian: "La scultura di Michelangelo è famosa.", english: "Michelangelo's sculpture is famous.", context: "art" },
  ],

  // GARDEN - flowers
  'albero': [
    { italian: "L'albero è molto alto.", english: "The tree is very tall.", context: "garden" },
    { italian: "Ci sono mele sull'albero.", english: "There are apples on the tree.", context: "garden" },
  ],
  'erba': [
    { italian: "L'erba è verde dopo la pioggia.", english: "The grass is green after the rain.", context: "garden" },
    { italian: "Il cane corre sull'erba.", english: "The dog runs on the grass.", context: "outdoors" },
  ],
  'fiore': [
    { italian: "Il fiore rosso è bellissimo.", english: "The red flower is beautiful.", context: "garden" },
    { italian: "Metto un fiore nel vaso.", english: "I put a flower in the vase.", context: "home" },
  ],
  'foglia': [
    { italian: "La foglia cade dall'albero.", english: "The leaf falls from the tree.", context: "garden" },
    { italian: "La foglia è gialla in autunno.", english: "The leaf is yellow in autumn.", context: "autumn" },
  ],
  'radice': [
    { italian: "La radice dell'albero è profonda.", english: "The tree's root is deep.", context: "garden" },
    { italian: "La radice porta acqua alla pianta.", english: "The root brings water to the plant.", context: "nature" },
  ],
  'ramo': [
    { italian: "Il ramo è rotto dal vento.", english: "The branch is broken by the wind.", context: "garden" },
    { italian: "L'uccello canta sul ramo.", english: "The bird sings on the branch.", context: "nature" },
  ],

  // BEDROOM - jewelry
  'anello': [
    { italian: "L'anello è d'oro.", english: "The ring is gold.", context: "jewelry" },
    { italian: "Porto l'anello al dito.", english: "I wear the ring on my finger.", context: "jewelry" },
  ],
  'collana': [
    { italian: "La collana è di perle.", english: "The necklace is pearls.", context: "jewelry" },
    { italian: "Metto la collana per la festa.", english: "I wear the necklace for the party.", context: "event" },
  ],

  // LIBRARY - bookshelf
  'biblioteca': [
    { italian: "Vado in biblioteca per studiare.", english: "I go to the library to study.", context: "study" },
    { italian: "La biblioteca chiude alle sette.", english: "The library closes at seven.", context: "library" },
  ],
  'dizionario': [
    { italian: "Cerco la parola nel dizionario.", english: "I look up the word in the dictionary.", context: "study" },
    { italian: "Il dizionario è sullo scaffale.", english: "The dictionary is on the shelf.", context: "library" },
  ],
  'libro': [
    { italian: "Il libro è molto interessante.", english: "The book is very interesting.", context: "reading" },
    { italian: "Leggo un libro prima di dormire.", english: "I read a book before sleeping.", context: "bedtime" },
  ],

  // LIVING ROOM - sofa
  'divano': [
    { italian: "Il divano è verde e grande.", english: "The sofa is green and big.", context: "living room" },
    { italian: "Mi siedo sul divano per guardare la TV.", english: "I sit on the sofa to watch TV.", context: "relaxing" },
  ],
  'poltrona': [
    { italian: "La poltrona è comoda.", english: "The armchair is comfortable.", context: "living room" },
    { italian: "Il nonno dorme in poltrona.", english: "Grandpa sleeps in the armchair.", context: "home" },
  ],
  'tavolino': [
    { italian: "Il tavolino è davanti al divano.", english: "The side table is in front of the sofa.", context: "living room" },
    { italian: "Metto il caffè sul tavolino.", english: "I put the coffee on the side table.", context: "living room" },
  ],

  // ANIMALS - mammals (common)
  'cane': [
    { italian: "Il cane abbaia al postino.", english: "The dog barks at the postman.", context: "home" },
    { italian: "Il mio cane si chiama Luna.", english: "My dog is called Luna.", context: "pets" },
  ],
  'cavallo': [
    { italian: "Il cavallo corre nel prato.", english: "The horse runs in the meadow.", context: "farm" },
    { italian: "Cavalco il cavallo bianco.", english: "I ride the white horse.", context: "riding" },
  ],
  'gatto': [
    { italian: "Il gatto dorme sul divano.", english: "The cat sleeps on the sofa.", context: "home" },
    { italian: "Il gatto mangia il pesce.", english: "The cat eats the fish.", context: "pets" },
  ],

  // ENTRANCE HALL - mirror (adjectives)
  'alto': [
    { italian: "Il palazzo è molto alto.", english: "The building is very tall.", context: "description" },
    { italian: "Mio fratello è più alto di me.", english: "My brother is taller than me.", context: "people" },
  ],
  'basso': [
    { italian: "Il tavolino è basso.", english: "The side table is low.", context: "furniture" },
    { italian: "La bambina è piccola e bassa.", english: "The girl is small and short.", context: "people" },
  ],
  'bello': [
    { italian: "Il tramonto è bello.", english: "The sunset is beautiful.", context: "scenery" },
    { italian: "Che bello vederti!", english: "How nice to see you!", context: "greeting" },
  ],
  'brutto': [
    { italian: "Il tempo è brutto oggi.", english: "The weather is ugly today.", context: "weather" },
    { italian: "Questo quadro è brutto.", english: "This painting is ugly.", context: "opinion" },
  ],
  'forte': [
    { italian: "Il caffè è forte.", english: "The coffee is strong.", context: "cafe" },
    { italian: "Parla a voce forte.", english: "Speak in a loud voice.", context: "speaking" },
  ],
  'giovane': [
    { italian: "È ancora giovane per questo lavoro.", english: "He's still young for this job.", context: "work" },
    { italian: "Si sente giovane a cinquant'anni.", english: "She feels young at fifty.", context: "age" },
  ],
  'vecchio': [
    { italian: "Il libro è molto vecchio.", english: "The book is very old.", context: "library" },
    { italian: "Mio nonno è vecchio ma attivo.", english: "My grandfather is old but active.", context: "family" },
  ],

  // BEDROOM - nightstand
  'lampada': [
    { italian: "Accendo la lampada la sera.", english: "I turn on the lamp in the evening.", context: "bedroom" },
    { italian: "La lampada è sul comodino.", english: "The lamp is on the nightstand.", context: "bedroom" },
  ],
  'sveglia': [
    { italian: "La sveglia suona alle sette.", english: "The alarm rings at seven.", context: "morning" },
    { italian: "Spengo la sveglia.", english: "I turn off the alarm.", context: "morning" },
  ],

  // ENTRANCE HALL - number plate
  'uno': [
    { italian: "Ho un fratello.", english: "I have one brother.", context: "counting" },
    { italian: "Uno più uno fa due.", english: "One plus one makes two.", context: "math" },
  ],
  'due': [
    { italian: "Due caffè, per favore.", english: "Two coffees, please.", context: "ordering" },
    { italian: "Abbiamo due gatti.", english: "We have two cats.", context: "counting" },
  ],
  'tre': [
    { italian: "La classe ha tre studenti.", english: "The class has three students.", context: "school" },
    { italian: "Sono le tre del pomeriggio.", english: "It's three in the afternoon.", context: "time" },
  ],
  'quattro': [
    { italian: "La famiglia è di quattro persone.", english: "The family has four people.", context: "family" },
    { italian: "Quattro stagioni in un anno.", english: "Four seasons in a year.", context: "general" },
  ],
  'cinque': [
    { italian: "Ho cinque minuti.", english: "I have five minutes.", context: "time" },
    { italian: "Cinque euro, per favore.", english: "Five euros, please.", context: "shopping" },
  ],
  'sei': [
    { italian: "Sei biglietti, per favore.", english: "Six tickets, please.", context: "buying" },
    { italian: "Ha sei anni oggi.", english: "She's six today.", context: "birthday" },
  ],
  'sette': [
    { italian: "Sette giorni in una settimana.", english: "Seven days in a week.", context: "time" },
    { italian: "Lavoro sette ore al giorno.", english: "I work seven hours a day.", context: "work" },
  ],
  'otto': [
    { italian: "Otto ore di sonno sono importanti.", english: "Eight hours of sleep are important.", context: "health" },
    { italian: "Ha otto anni oggi.", english: "He's eight today.", context: "birthday" },
  ],
  'nove': [
    { italian: "Nove mesi fino al parto.", english: "Nine months until birth.", context: "family" },
    { italian: "Sono le nove di sera.", english: "It's nine in the evening.", context: "time" },
  ],
  'dieci': [
    { italian: "Dieci euro, per favore.", english: "Ten euros, please.", context: "shopping" },
    { italian: "Ho dieci dita alle mani.", english: "I have ten fingers on my hands.", context: "body" },
  ],
  'undici': [
    { italian: "Vado a letto alle undici.", english: "I go to bed at eleven.", context: "routine" },
    { italian: "Undici amici alla festa.", english: "Eleven friends at the party.", context: "event" },
  ],
  'dodici': [
    { italian: "L'anno ha dodici mesi.", english: "The year has twelve months.", context: "time" },
    { italian: "Mezzogiorno sono le dodici.", english: "Noon is twelve o'clock.", context: "time" },
  ],

  // GARDEN - path
  'pietra': [
    { italian: "La pietra è pesante.", english: "The stone is heavy.", context: "garden" },
    { italian: "Il sentiero è fatto di pietre.", english: "The path is made of stones.", context: "garden" },
  ],
  'ponte': [
    { italian: "Il ponte attraversa il fiume.", english: "The bridge crosses the river.", context: "outdoors" },
    { italian: "Il ponte è di legno.", english: "The bridge is wooden.", context: "garden" },
  ],
  'terra': [
    { italian: "La terra è fertile qui.", english: "The soil is fertile here.", context: "garden" },
    { italian: "Pianto il seme nella terra.", english: "I plant the seed in the soil.", context: "gardening" },
  ],

  // TRANSPORT - platform
  'treno': [
    { italian: "Il treno è in arrivo.", english: "The train is arriving.", context: "station" },
    { italian: "Prendo il treno per Roma.", english: "I'm taking the train to Rome.", context: "travel" },
  ],

  // BEDROOM - shoes
  'pantofole': [
    { italian: "Metto le pantofole quando torno a casa.", english: "I put on slippers when I come home.", context: "home" },
    { italian: "Le pantofole sono vicino al letto.", english: "The slippers are by the bed.", context: "bedroom" },
  ],

  // BATHROOM - shower
  'doccia': [
    { italian: "Faccio la doccia la mattina.", english: "I take a shower in the morning.", context: "routine" },
    { italian: "La doccia è calda.", english: "The shower is warm.", context: "bathroom" },
  ],

  // GARDEN - sky
  'cielo': [
    { italian: "Il cielo è blu e limpido.", english: "The sky is blue and clear.", context: "weather" },
    { italian: "Guardo il cielo stellato.", english: "I look at the starry sky.", context: "night" },
  ],
  'luna': [
    { italian: "La luna è piena stanotte.", english: "The moon is full tonight.", context: "night" },
    { italian: "La luna brilla nel cielo.", english: "The moon shines in the sky.", context: "night" },
  ],
  'nuvola': [
    { italian: "Una nuvola copre il sole.", english: "A cloud covers the sun.", context: "weather" },
    { italian: "Le nuvole sono bianche e grandi.", english: "The clouds are white and big.", context: "sky" },
  ],
  'sole': [
    { italian: "Il sole splende forte oggi.", english: "The sun shines brightly today.", context: "weather" },
    { italian: "Il sole tramonta alle otto.", english: "The sun sets at eight.", context: "evening" },
  ],
  'stella': [
    { italian: "Conto le stelle nel cielo.", english: "I count the stars in the sky.", context: "night" },
    { italian: "La stella più luminosa è Venere.", english: "The brightest star is Venus.", context: "astronomy" },
  ],

  // WEATHER - sky
  'arcobaleno': [
    { italian: "L'arcobaleno appare dopo la pioggia.", english: "The rainbow appears after the rain.", context: "weather" },
    { italian: "L'arcobaleno ha sette colori.", english: "The rainbow has seven colours.", context: "nature" },
  ],
  'vento': [
    { italian: "Il vento è forte oggi.", english: "The wind is strong today.", context: "weather" },
    { italian: "Il vento muove le foglie.", english: "The wind moves the leaves.", context: "nature" },
  ],

  // EMOTIONS - states
  'ansia': [
    { italian: "Provo ansia prima dell'esame.", english: "I feel anxiety before the exam.", context: "feeling" },
    { italian: "L'ansia mi toglie il sonno.", english: "Anxiety takes my sleep away.", context: "feeling" },
  ],
  'sorpresa': [
    { italian: "Che bella sorpresa!", english: "What a nice surprise!", context: "feeling" },
    { italian: "La sorpresa è sul tavolo.", english: "The surprise is on the table.", context: "event" },
  ],
  'vergogna': [
    { italian: "Arrossisco dalla vergogna.", english: "I blush from embarrassment.", context: "feeling" },
    { italian: "Sento vergogna per l'errore.", english: "I feel shame for the mistake.", context: "feeling" },
  ],

  // TRANSPORT - street
  'semaforo': [
    { italian: "Il semaforo è rosso.", english: "The traffic light is red.", context: "driving" },
    { italian: "Aspetto il verde al semaforo.", english: "I wait for the green at the light.", context: "driving" },
  ],
  'strada': [
    { italian: "La strada è lunga.", english: "The road is long.", context: "travel" },
    { italian: "Attraverso la strada con attenzione.", english: "I cross the road carefully.", context: "street" },
  ],

  // SUPERMARKET - produce
  'fragola': [
    { italian: "La fragola è dolce e rossa.", english: "The strawberry is sweet and red.", context: "fruit" },
    { italian: "Raccolgo fragole nel giardino.", english: "I pick strawberries in the garden.", context: "garden" },
  ],
  'lattuga': [
    { italian: "La lattuga è fresca.", english: "The lettuce is fresh.", context: "produce" },
    { italian: "Lavo la lattuga per l'insalata.", english: "I wash the lettuce for the salad.", context: "cooking" },
  ],
  'pera': [
    { italian: "La pera è matura.", english: "The pear is ripe.", context: "fruit" },
    { italian: "Mangio una pera dopo cena.", english: "I eat a pear after dinner.", context: "dessert" },
  ],
  'pesca': [
    { italian: "La pesca profuma di estate.", english: "The peach smells of summer.", context: "fruit" },
    { italian: "La pesca è gialla e succosa.", english: "The peach is yellow and juicy.", context: "fruit" },
  ],
  'uva': [
    { italian: "L'uva bianca è dolce.", english: "The white grape is sweet.", context: "fruit" },
    { italian: "Raccolgo l'uva in settembre.", english: "I harvest grapes in September.", context: "harvest" },
  ],

  // KITCHEN - table
  'tovagliolo': [
    { italian: "Il tovagliolo è di stoffa.", english: "The napkin is cloth.", context: "dining" },
    { italian: "Metto il tovagliolo sulle gambe.", english: "I place the napkin on my lap.", context: "dining" },
  ],

  // TOOLS
  'metro': [
    { italian: "Misuro la stanza con il metro.", english: "I measure the room with the tape measure.", context: "workshop" },
    { italian: "Il metro è nel cassetto degli attrezzi.", english: "The tape measure is in the toolbox.", context: "workshop" },
  ],

  // TRANSPORT - ticket office
  'biglietto': [
    { italian: "Il biglietto costa cinque euro.", english: "The ticket costs five euros.", context: "station" },
    { italian: "Compro un biglietto di andata e ritorno.", english: "I buy a return ticket.", context: "station" },
  ],
  'orario': [
    { italian: "L'orario del treno è sul cartellone.", english: "The train timetable is on the board.", context: "station" },
    { italian: "L'orario è cambiato.", english: "The schedule has changed.", context: "station" },
  ],
  'valigia': [
    { italian: "La valigia è pesante.", english: "The suitcase is heavy.", context: "travel" },
    { italian: "Faccio la valigia per il viaggio.", english: "I pack the suitcase for the trip.", context: "travel" },
  ],
  'zaino': [
    { italian: "Lo zaino è sulle spalle.", english: "The backpack is on my shoulders.", context: "travel" },
    { italian: "Metto il libro nello zaino.", english: "I put the book in the backpack.", context: "school" },
  ],

  // LIVING ROOM - tv
  'film': [
    { italian: "Il film inizia alle otto.", english: "The film starts at eight.", context: "entertainment" },
    { italian: "Il film è molto bello.", english: "The film is very good.", context: "entertainment" },
  ],
  'musica': [
    { italian: "Ascolto la musica italiana.", english: "I listen to Italian music.", context: "music" },
    { italian: "La musica è troppo alta.", english: "The music is too loud.", context: "complaint" },
  ],
  'telecomando': [
    { italian: "Il telecomando è sul divano.", english: "The remote is on the sofa.", context: "living room" },
    { italian: "Non trovo il telecomando.", english: "I can't find the remote.", context: "living room" },
  ],
  'televisione': [
    { italian: "Guardo la televisione la sera.", english: "I watch television in the evening.", context: "evening" },
    { italian: "La televisione è nuova.", english: "The television is new.", context: "living room" },
  ],

  // WEATHER - storms (non-stub)
  'fulmine': [
    { italian: "Il fulmine illumina il cielo.", english: "The lightning lights up the sky.", context: "storm" },
    { italian: "Il fulmine colpisce l'albero.", english: "The lightning strikes the tree.", context: "storm" },
  ],
  'nebbia': [
    { italian: "La nebbia è fitta stamattina.", english: "The fog is thick this morning.", context: "weather" },
    { italian: "Non si vede niente con la nebbia.", english: "You can't see anything in the fog.", context: "weather" },
  ],
  'pioggia': [
    { italian: "La pioggia cade forte.", english: "The rain falls hard.", context: "weather" },
    { italian: "Amo il suono della pioggia.", english: "I love the sound of rain.", context: "weather" },
  ],
  'temporale': [
    { italian: "Il temporale arriva in serata.", english: "The storm arrives in the evening.", context: "weather" },
    { italian: "Durante il temporale resto in casa.", english: "During the storm I stay at home.", context: "weather" },
  ],
  'tuono': [
    { italian: "Il tuono fa paura al cane.", english: "The thunder scares the dog.", context: "storm" },
    { italian: "Dopo il fulmine arriva il tuono.", english: "After the lightning comes the thunder.", context: "storm" },
  ],

  // ENTRANCE HALL - welcome mat (greetings)
  'arrivederci': [
    { italian: "Arrivederci, a domani!", english: "Goodbye, see you tomorrow!", context: "greeting" },
    { italian: "Dico arrivederci al barista.", english: "I say goodbye to the barista.", context: "cafe" },
  ],
  'buonanotte': [
    { italian: "Buonanotte, sogni d'oro.", english: "Goodnight, sweet dreams.", context: "night" },
    { italian: "Buonanotte, a domani mattina.", english: "Goodnight, until tomorrow morning.", context: "night" },
  ],
  'buonasera': [
    { italian: "Buonasera, come va?", english: "Good evening, how's it going?", context: "greeting" },
    { italian: "Buonasera, signora Rossi.", english: "Good evening, Mrs. Rossi.", context: "greeting" },
  ],
  'buongiorno': [
    { italian: "Buongiorno, un caffè per favore.", english: "Good morning, a coffee please.", context: "cafe" },
    { italian: "Buongiorno a tutti!", english: "Good morning everyone!", context: "greeting" },
  ],
  'ciao': [
    { italian: "Ciao, come stai?", english: "Hi, how are you?", context: "greeting" },
    { italian: "Ciao ragazzi, ci vediamo!", english: "Bye guys, see you!", context: "greeting" },
  ],
  'forse': [
    { italian: "Forse viene anche Luca.", english: "Maybe Luca is coming too.", context: "uncertainty" },
    { italian: "Forse domani piove.", english: "Maybe tomorrow it will rain.", context: "uncertainty" },
  ],
  'grazie': [
    { italian: "Grazie mille!", english: "Thanks a lot!", context: "gratitude" },
    { italian: "Grazie per il regalo.", english: "Thanks for the gift.", context: "gratitude" },
  ],
  'permesso': [
    { italian: "Permesso, posso passare?", english: "Excuse me, may I pass?", context: "polite" },
    { italian: "Permesso, vorrei entrare.", english: "Excuse me, I'd like to enter.", context: "polite" },
  ],
  'prego': [
    { italian: "Prego, si accomodi.", english: "Please, have a seat.", context: "polite" },
    { italian: "Grazie. – Prego!", english: "Thanks. – You're welcome!", context: "polite" },
  ],

  // TOOLS - hand-tools
  'martello': [
    { italian: "Prendo il martello per il chiodo.", english: "I take the hammer for the nail.", context: "workshop" },
    { italian: "Il martello è pesante.", english: "The hammer is heavy.", context: "workshop" },
  ],
  'cacciavite': [
    { italian: "Mi serve il cacciavite a stella.", english: "I need the Phillips screwdriver.", context: "workshop" },
    { italian: "Il cacciavite è sul banco.", english: "The screwdriver is on the workbench.", context: "workshop" },
  ],
  'pinza': [
    { italian: "Uso la pinza per tagliare il filo.", english: "I use the pliers to cut the wire.", context: "workshop" },
    { italian: "La pinza è arrugginita.", english: "The pliers are rusty.", context: "workshop" },
  ],
  'sega': [
    { italian: "Taglio il legno con la sega.", english: "I cut the wood with the saw.", context: "workshop" },
    { italian: "La sega è affilata, attento.", english: "The saw is sharp, be careful.", context: "workshop" },
  ],
  'trapano': [
    { italian: "Il trapano fa un buco nel muro.", english: "The drill makes a hole in the wall.", context: "workshop" },
    { italian: "Il trapano è elettrico.", english: "The drill is electric.", context: "workshop" },
  ],
  'vite': [
    { italian: "Stringo la vite con il cacciavite.", english: "I tighten the screw with the screwdriver.", context: "workshop" },
    { italian: "Manca una vite al mobile.", english: "The cabinet is missing a screw.", context: "workshop" },
  ],
  'chiodo': [
    { italian: "Pianto il chiodo nel muro.", english: "I drive the nail into the wall.", context: "workshop" },
    { italian: "Il chiodo è storto.", english: "The nail is bent.", context: "workshop" },
  ],
  // TOOLS - workbench
  'banco': [
    { italian: "Il banco da lavoro è pieno di attrezzi.", english: "The workbench is full of tools.", context: "workshop" },
    { italian: "Lavoro al banco tutto il giorno.", english: "I work at the bench all day.", context: "workshop" },
  ],
  'morsa': [
    { italian: "Stringo il legno nella morsa.", english: "I clamp the wood in the vise.", context: "workshop" },
    { italian: "La morsa tiene il pezzo fermo.", english: "The vise holds the piece still.", context: "workshop" },
  ],
  'lima': [
    { italian: "Uso la lima per levigare il metallo.", english: "I use the file to smooth the metal.", context: "workshop" },
    { italian: "La lima è piccola e precisa.", english: "The file is small and precise.", context: "workshop" },
  ],

  // ACTIONS - movement
  'spingere': [
    { italian: "Devo spingere la porta per aprirla.", english: "I have to push the door to open it.", context: "doors" },
    { italian: "Spingi il carrello al supermercato.", english: "Push the cart at the supermarket.", context: "shopping" },
  ],
  'tirare': [
    { italian: "Tira la corda forte!", english: "Pull the rope hard!", context: "action" },
    { italian: "Devi tirare, non spingere.", english: "You have to pull, not push.", context: "doors" },
  ],

  // EMOTIONS - feelings / states
  'odio': [
    { italian: "Odio il rumore del traffico.", english: "I hate the noise of traffic.", context: "feeling" },
    { italian: "L'odio non risolve niente.", english: "Hate doesn't solve anything.", context: "philosophy" },
  ],
  'fiducia': [
    { italian: "Ho fiducia in te.", english: "I trust you.", context: "relationship" },
    { italian: "La fiducia è importante in amicizia.", english: "Trust is important in friendship.", context: "relationship" },
  ],
  'orgoglio': [
    { italian: "Sento un grande orgoglio per mio figlio.", english: "I feel great pride for my son.", context: "family" },
    { italian: "Parla con orgoglio della sua città.", english: "He speaks with pride about his city.", context: "feeling" },
  ],

  // FANTASY - creatures
  'drago': [
    { italian: "Il drago sputa fuoco.", english: "The dragon breathes fire.", context: "fantasy" },
    { italian: "Il drago dorme nella caverna.", english: "The dragon sleeps in the cave.", context: "fantasy" },
  ],
  'elfo': [
    { italian: "L'elfo vive nella foresta.", english: "The elf lives in the forest.", context: "fantasy" },
    { italian: "L'elfo ha le orecchie a punta.", english: "The elf has pointed ears.", context: "fantasy" },
  ],
  'strega': [
    { italian: "La strega vola sulla scopa.", english: "The witch flies on the broom.", context: "fantasy" },
    { italian: "La strega prepara una pozione magica.", english: "The witch brews a magic potion.", context: "fantasy" },
  ],
  'nano': [
    { italian: "Il nano scava nelle miniere.", english: "The dwarf digs in the mines.", context: "fantasy" },
    { italian: "Il nano è piccolo ma forte.", english: "The dwarf is small but strong.", context: "fantasy" },
  ],
  'mago': [
    { italian: "Il mago lancia un incantesimo.", english: "The wizard casts a spell.", context: "fantasy" },
    { italian: "Il mago porta un cappello a punta.", english: "The wizard wears a pointed hat.", context: "fantasy" },
  ],
  // FANTASY - supernatural
  'fantasma': [
    { italian: "C'è un fantasma nel castello.", english: "There's a ghost in the castle.", context: "fantasy" },
    { italian: "Il fantasma attraversa il muro.", english: "The ghost passes through the wall.", context: "fantasy" },
  ],
  'zombie': [
    { italian: "Lo zombie cammina lentamente.", english: "The zombie walks slowly.", context: "fantasy" },
    { italian: "Nel film ci sono molti zombie.", english: "In the movie there are many zombies.", context: "fantasy" },
  ],
  'vampiro': [
    { italian: "Il vampiro esce solo di notte.", english: "The vampire comes out only at night.", context: "fantasy" },
    { italian: "Il vampiro ha paura dell'aglio.", english: "The vampire is afraid of garlic.", context: "fantasy" },
  ],

  // KITCHEN - pantry / utensils / stove / dessert
  'farina': [
    { italian: "Uso la farina per fare il pane.", english: "I use flour to make bread.", context: "baking" },
    { italian: "La farina è nel sacchetto bianco.", english: "The flour is in the white bag.", context: "pantry" },
  ],
  'mestolo': [
    { italian: "Mescolo la zuppa con il mestolo.", english: "I stir the soup with the ladle.", context: "cooking" },
    { italian: "Il mestolo è nel cassetto.", english: "The ladle is in the drawer.", context: "kitchen" },
  ],
  'spatola': [
    { italian: "Giro la frittata con la spatola.", english: "I flip the omelette with the spatula.", context: "cooking" },
    { italian: "La spatola è di silicone.", english: "The spatula is silicone.", context: "kitchen" },
  ],
  'grattugia': [
    { italian: "Grattugio il formaggio con la grattugia.", english: "I grate the cheese with the grater.", context: "cooking" },
    { italian: "La grattugia è affilata, attento.", english: "The grater is sharp, be careful.", context: "kitchen" },
  ],
  'tagliere': [
    { italian: "Taglio le verdure sul tagliere.", english: "I cut the vegetables on the cutting board.", context: "cooking" },
    { italian: "Il tagliere di legno è grande.", english: "The wooden cutting board is large.", context: "kitchen" },
  ],
  'fornello': [
    { italian: "Accendo il fornello per la pasta.", english: "I turn on the burner for the pasta.", context: "cooking" },
    { italian: "Il fornello è a gas.", english: "The stove is gas.", context: "kitchen" },
  ],
  'colino': [
    { italian: "Scolo la pasta con il colino.", english: "I drain the pasta with the colander.", context: "cooking" },
    { italian: "Il colino è nel lavello.", english: "The colander is in the sink.", context: "kitchen" },
  ],
};

// Helper function to get sentences for a word.
// If no curated sentences exist and a VocabularyItem is provided, generate
// simple template sentences so every word has at least some context.
import type { VocabularyItem } from '../types';

export const getWordSentences = (
  wordId: string,
  item?: VocabularyItem
): WordSentence[] => {
  const curated = wordSentences[wordId];
  if (curated && curated.length > 0) return curated;
  if (!item) return [];
  return generateSentences(item);
};

function primaryEnglish(en: string): string {
  // "excuse me / sorry" → "excuse me". "bread / loaf" → "bread".
  const first = en.split('/')[0].trim();
  return first || en;
}

function isVerb(en: string): boolean {
  return /^to\s+/i.test(en.trim());
}

function generateSentences(item: VocabularyItem): WordSentence[] {
  const en = primaryEnglish(item.english);
  const native = item.native;

  if (isVerb(en)) {
    const bare = en.replace(/^to\s+/i, '');
    return [
      {
        italian: `Devo ${native}.`,
        english: `I have to ${bare}.`,
        context: 'obligation',
      },
      {
        italian: `Mi piace ${native}.`,
        english: `I like to ${bare}.`,
        context: 'preference',
      },
    ];
  }

  const article =
    item.gender === 'masculine' ? 'Il' : item.gender === 'feminine' ? 'La' : '';
  const articleLower =
    item.gender === 'masculine' ? 'il' : item.gender === 'feminine' ? 'la' : '';
  const enArticle = /^[aeiou]/i.test(en) ? 'an' : 'a';

  if (article) {
    return [
      {
        italian: `${article} ${native} è qui.`,
        english: `The ${en} is here.`,
        context: 'location',
      },
      {
        italian: `Vedo ${articleLower} ${native}.`,
        english: `I see the ${en}.`,
        context: 'observation',
      },
    ];
  }

  // Adjective / adverb / other — use predicate frame
  return [
    {
      italian: `È ${native}.`,
      english: `It is ${en}.`,
      context: 'description',
    },
    {
      italian: `Questo è ${enArticle === 'an' ? 'un' : 'un'} esempio di "${native}".`,
      english: `This is ${enArticle} example of "${en}".`,
      context: 'usage',
    },
  ];
}

// Practical phrases for "Do you speak English" conversations
export const practicalPhrases = [
  {
    italian: "Parla inglese?",
    english: "Do you speak English?",
    situation: "Asking if someone speaks English",
  },
  {
    italian: "Non parlo italiano.",
    english: "I don't speak Italian.",
    situation: "Explaining you don't speak Italian",
  },
  {
    italian: "Parlo un po' di italiano.",
    english: "I speak a little Italian.",
    situation: "Explaining your level",
  },
  {
    italian: "Può ripetere, per favore?",
    english: "Can you repeat, please?",
    situation: "Asking for repetition",
  },
  {
    italian: "Può parlare più lentamente?",
    english: "Can you speak more slowly?",
    situation: "Asking to slow down",
  },
  {
    italian: "Non capisco.",
    english: "I don't understand.",
    situation: "Expressing confusion",
  },
  {
    italian: "Come si dice...?",
    english: "How do you say...?",
    situation: "Asking how to say something",
  },
  {
    italian: "Che cosa significa...?",
    english: "What does ... mean?",
    situation: "Asking for meaning",
  },
  {
    italian: "Può aiutarmi?",
    english: "Can you help me?",
    situation: "Asking for help",
  },
  {
    italian: "Grazie per l'aiuto.",
    english: "Thank you for the help.",
    situation: "Expressing gratitude",
  },
];
