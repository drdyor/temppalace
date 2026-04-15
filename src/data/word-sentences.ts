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
