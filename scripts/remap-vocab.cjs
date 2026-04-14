const fs = require('fs');
const path = require('path');

const { italianVocabulary } = require('../src/data/italian-generated.ts');
const roomsPath = path.join(__dirname, '../src/data/rooms.ts');

// Get all single words
const allWords = Object.entries(italianVocabulary)
  .filter(([k]) => !k.includes(' '))
  .map(([id, data]) => ({ id, en: data.english?.toLowerCase() || '', emoji: data.emoji || '' }));

// ============================================
// EXPLICIT ZONE MAPPINGS - Processed in priority order
// ============================================

const zoneMappings = {
  'bedroom': {
    'wardrobe': ['camicia', 'pantaloni', 'gonna', 'vestito', 'giacca', 'maglietta', 'maglione', 'scarpe', 'calze', 'pigiama', 'vestirsi', 'cambiare', 'indossare', 'berretto', 'cappotto', 'cappello', 'cintura', 'cravatta', 'guanti', 'jeans'],
    'bed': ['letto', 'cuscino', 'coperta', 'dormire', 'sveglia', 'svegliarsi', 'addormentarsi', 'stanco', 'stanca', 'presto', 'riposare', 'sognare', 'comodino', 'lampada'],
    'photos': ['madre', 'padre', 'figlia', 'figlio', 'fratello', 'sorella', 'nonna', 'nonno', 'bambino', 'bambina', 'famiglia', 'persona', 'persone', 'genitore', 'ragazzo', 'ragazza', 'coppia', 'foto', 'immagine'],
  },
  'bathroom': {
    'sink': ['lavarsi', 'lavare', 'faccia', 'mani', 'mano', 'denti', 'dente', 'dentifricio', 'sapone', 'asciugamano', 'specchio', 'pettinarsi', 'spazzolino', 'asciugacapelli', 'lavandino'],
    'shower': ['doccia', 'capelli', 'corpo', 'gamba', 'piede', 'piedi', 'schiena', 'spalla', 'collo', 'bocca', 'fronte', 'naso', 'occhi', 'occhio', 'orecchio', 'testa', 'asciugamano', 'bagno', 'pulito', 'bagnato'],
    'cabinet': ['medicina', 'farmaco', 'febbre', 'influenza', 'raffreddore', 'malato', 'malata', 'dolore', 'sangue', 'cuore', 'stomaco', 'testa', 'dente', 'denti', 'ospedale', 'dottore', 'dottoressa', 'medico', 'infermiera', 'infermiere', 'cerotto', 'ferita', 'salute', 'tosse'],
  },
  'kitchen': {
    'fridge': ['latte', 'burro', 'uova', 'uovo', 'formaggio', 'ghiaccio', 'frigorifero', 'frutta', 'verdura', 'carne', 'pesce', 'freddo', 'gelato'],
    'pantry': ['pasta', 'riso', 'sale', 'zucchero', 'olio', 'pane', 'miele', 'bottiglia', 'te', 'caffe', 'farina', 'fagioli', 'lenticchie', 'conserva', 'scatola', 'biscotto', 'cioccolata'],
    'stove': ['forno', 'pentola', 'padella', 'fuoco', 'cucinare', 'cuoco', 'cuoca', 'pepe', 'zuppa', 'olio', 'fiamma', 'cotto', 'bollire', 'soffritto'],
    'table': ['tavolo', 'piatto', 'bicchiere', 'tazza', 'forchetta', 'coltello', 'cucchiaio', 'cena', 'pranzo', 'colazione', 'dolce', 'torta', 'mangiare', 'bere', 'cibo', 'pane', 'panino', 'vino', 'birra', 'succo', 'acqua', 'menu', 'tovagliolo', 'caldo'],
  },
  'entrance-hall': {
    'family-portrait': ['uomo', 'donna', 'signore', 'signora', 'marito', 'moglie', 'zio', 'zia'],
    'coat-rack': ['cappotto', 'cappello', 'berretto', 'guanti', 'sciarpa', 'ombrello', 'chiave', 'chiavi', 'scarpe', 'stivali', 'zaino', 'valigia', 'cintura', 'cravatta', 'borsa', 'borse'],
    'mirror': ['specchio', 'guardare', 'vedere', 'faccia', 'occhi', 'occhio', 'bocca', 'naso', 'capelli', 'sopracciglio', 'guancia', 'mento', 'labbro', 'fronte'],
  },
  'library': {
    'bookshelf': ['libro', 'dizionario', 'storia', 'lettera', 'pagina', 'parola', 'testo', 'biblioteca', 'raccontare', 'leggere'],
    'desk': ['quaderno', 'penna', 'matita', 'compito', 'esame', 'lezione', 'scuola', 'studente', 'studentessa', 'insegnante', 'studiare', 'imparare', 'scrivere', 'disegno', 'righello', 'gesso'],
    'computer': ['computer', 'internet', 'email', 'programma', 'software', 'sito', 'rete', 'tastiera', 'mouse', 'stampante', 'tablet', 'orologio', 'matematica', 'scienza', 'musica', 'applicazione', 'password', 'video', 'informatica'],
  },
  'living-room': {
    'sofa': ['divano', 'poltrona', 'sedersi', 'stare', 'riposare', 'rilassarsi', 'soggiorno', 'casa', 'sala'],
    'tv': ['televisione', 'tv', 'telecomando', 'film', 'sport', 'gioco', 'videogame', 'streaming', 'canzone', 'ascoltare', 'guardare', 'spettacolo', 'notizie', 'musica', 'radio'],
    'furniture': ['libreria', 'quadro', 'tappeto', 'lampada', 'tenda', 'tavolino', 'mobile', 'stanza', 'edificio', 'casa', 'sala', 'palazzo', 'palazzi'],
  },
  'transport': {
    'ticket-office': ['biglietto', 'abbonamento', 'carta', 'passaporto', 'soldi', 'euro', 'moneta', 'pagare', 'comprare', 'prezzo', 'bancomat', 'portafoglio'],
    'platform': ['treno', 'autobus', 'metro', 'tram', 'taxi', 'aereo', 'nave', 'barca', 'porto', 'stazione', 'fermata', 'binario', 'viaggio', 'partire', 'arrivare', 'aeroporto', 'pullman', 'termometro'],
    'street': ['macchina', 'auto', 'bicicletta', 'moto', 'strada', 'strade', 'via', 'guidare', 'mappa', 'lontano', 'vicino', 'veloce', 'lento', 'benzina', 'patente', 'parcheggio', 'semaforo', 'ponte', 'autista', 'carriera', 'caricabatterie', 'cartella'],
  },
  'supermarket': {
    'produce': ['mela', 'arancia', 'banana', 'limone', 'pomodoro', 'patata', 'aglio', 'cipolla', 'cetriolo', 'peperone', 'carota', 'lattuga', 'carne', 'pesce', 'pane', 'frutta', 'verdura', 'uova'],
    'dairy': ['latte', 'formaggio', 'burro', 'uova', 'gelato'],
    'checkout': ['carrello', 'cassa', 'scontrino', 'soldi', 'euro', 'resto', 'prezzo', 'caro', 'economico', 'cliente', 'commessa', 'commesso', 'negoziante', 'quanto', 'comprare', 'pagare', 'borsa', 'borse', 'cento', 'sconto', 'scontato', 'offerta'],
  },
  'cafe': {
    'counter': ['caffe', 'te', 'succo', 'acqua', 'bicchiere', 'tazza', 'dolce', 'torta', 'gelato', 'cioccolata', 'zucchero', 'latte', 'menu', 'ordinare', 'cameriere', 'cameriera', 'conto', 'mancia', 'pagare', 'grazie', 'buongiorno', 'arrivederci', 'prego'],
    'table-cafe': ['amico', 'amica', 'parlare', 'tavolo', 'sedia', 'giornale', 'universita', 'altoparlante', 'antipasto', 'stipendio', 'tovagliolo', 'incontrare', 'saluto'],
  },
  'garden': {
    'flowers': ['fiore', 'albero', 'pianta', 'erba', 'foglia', 'radice', 'ramo', 'bosco', 'foresta', 'giardino', 'rosa'],
    'path': ['strada', 'via', 'campo', 'pietra', 'pietre', 'terra', 'ponte', 'collina', 'montagna', 'montagne', 'valle', 'sentiero'],
    'sky': ['cielo', 'sole', 'nuvola', 'vento', 'pioggia', 'neve', 'tempo', 'estate', 'inverno', 'primavera', 'autunno', 'verde', 'arcobaleno', 'ghiaccio', 'temperatura', 'caldo', 'freddo'],
  },
  'gallery': {
    'paintings': ['quadro', 'pittura', 'scultura', 'museo', 'bello', 'brutto', 'vecchio', 'nuovo', 'famoso', 'colore', 'ombra', 'ombre', 'luce', 'immagine', 'capolavoro', 'arte', 'artista'],
    'pharmacy': ['farmacia', 'farmaco', 'medicina', 'dottore', 'dottoressa'],
    'shopping': ['negozio', 'mercato', 'prezzo', 'articolo', 'guida', 'biglietto', 'quartiere', 'centro', 'citta', 'zona', 'area', 'spazio', 'livello'],
  },
  'animals': {
    'reptiles': ['iguana', 'lucertola', 'serpente', 'coccodrillo', 'tartaruga'],
    'mammals': ['cane', 'gatto', 'cavallo', 'lupo', 'pollo', 'uccello', 'animale', 'coniglio', 'topo', 'elefante', 'leone', 'tigre', 'orso'],
  },
  'weather': {
    'storms': ['tuono', 'fulmine', 'temporale', 'pioggia', 'grandine', 'alluvione'],
    'sky-weather': ['sole', 'nuvola', 'vento', 'neve', 'nebbia', 'arcobaleno', 'cielo', 'clima', 'temperatura', 'caldo', 'freddo'],
  },
  'tools': {
    'hand-tools': ['martello', 'sega', 'cacciavite', 'forbici', 'coltello', 'ascia', 'piccone', 'pala', 'rastrello'],
    'workbench': ['costruire', 'pulire', 'colla', 'batteria', 'file', 'ingegnere', 'pittura', 'lavagna', 'tastiera', 'minuto', 'bastoncini'],
  },
  'actions': {
    'movement': ['andare', 'venire', 'partire', 'arrivare', 'correre', 'camminare', 'saltare', 'nuotare', 'volare', 'ballare', 'cadere', 'alzarsi', 'sedersi', 'sdraiarsi', 'girare', 'attraversare', 'scappare'],
    'daily-actions': ['svegliarsi', 'addormentarsi', 'dormire', 'mangiare', 'bere', 'leggere', 'scrivere', 'guardare', 'vedere', 'sentire', 'ascoltare', 'toccare', 'aprire', 'chiudere', 'muoversi', 'tornare', 'entrare', 'uscire', 'iniziare', 'cominciare', 'fermarsi', 'finire', 'continuare', 'scegliere', 'decidere', 'provare', 'prendere', 'dare', 'portare', 'tenere', 'mettere', 'chiamare', 'chiedere', 'rispondere', 'dire', 'spiegare', 'mostrare', 'cercare', 'trovare', 'perdere', 'lavorare', 'studiare', 'insegnare', 'imparare', 'riposare', 'giocare', 'aspettare', 'preparare', 'pulire', 'lavare', 'lavarsi', 'vestirsi', 'pettinarsi', 'cambiare', 'pagare', 'comprare', 'vendere'],
  },
  'emotions': {
    'feelings': ['felice', 'contento', 'allegro', 'triste', 'arrabbiato', 'paura', 'sorpresa', 'amore', 'piacere', 'odio', 'geloso', 'gelosia'],
    'states': ['nervoso', 'tranquillo', 'calmo', 'stanco', 'eccitato', 'deluso', 'imbarazzato', 'orgoglioso', 'solo', 'solitario', 'insieme', 'pazzo', 'normale', 'strano', 'divertente', 'serio', 'buono', 'cattivo', 'male', 'noia', 'tristezza', 'sollievo', 'speranza', 'vergogna'],
  },
  'farm': {
    'vegetables': ['pomodoro', 'patata', 'aglio', 'cipolla', 'cetriolo', 'peperone', 'carota', 'lattuga', 'verdura', 'melanzana', 'broccolo', 'asparago'],
    'fruits': ['mela', 'arancia', 'banana', 'limone', 'pesca', 'pera', 'ciliegia', 'anguria', 'uva', 'fragola', 'frutta', 'avocado'],
  },
  'fantasy': {
    'creatures': ['drago', 'fata', 'strega', 'mago', 'fantasma', 'principe', 'regina', 're', 'elfo', 'mostro'],
    'supernatural': ['magia', 'incantesimo', 'maledizione', 'benedizione', 'pozione', 'cristallo', 'specchio', 'tesoro', 'oro', 'argento', 'anello', 'collana', 'chiave', 'spada', 'scudo', 'armatura', 'corona', 'trono'],
  },
};

// Room-level fallback keywords
const roomFallbackKeywords = {
  'entrance-hall': ['porta', 'ingresso', 'uscita', 'arrivare', 'entrare', 'uscire', 'saluto', 'pavimento', 'soffitto', 'finestra', 'tenda', 'campanello', 'tappeto', 'scala', 'luce', 'corridoio', 'ascensore', 'citofono', 'campanello'],
  'kitchen': ['cucina', 'ricetta', 'ingrediente', 'gusto', 'saporito', 'piccante', 'amaro', 'aspro', 'cotto', 'crudo'],
  'library': ['conoscenza', 'idea', 'domanda', 'risposta', 'numero', 'contare', 'capire', 'sapere', 'pensare', 'paesi'],
  'bedroom': ['taglia', 'persona', 'camera', 'nanna'],
  'bathroom': ['salute', 'ospedale', 'medico', 'pulito', 'bagnato', 'asciutto'],
  'garden': ['natura', 'prato', 'fiore', 'albero'],
  'transport': ['viaggiare', 'guidare', 'direzione', 'indirizzo', 'mappa', 'fermata', 'volo', 'nave'],
  'living-room': ['vivere', 'casa', 'relax', 'ospitare'],
  'supermarket': ['negozio', 'mercato', 'supermercato', 'spesa', 'cliente'],
  'cafe': ['bar', 'ristorante', 'caffe', 'tavolo'],
  'gallery': ['galleria', 'cultura', 'monumento', 'turista', 'muro', 'cornice'],
  'animals': ['animale', 'uccello', 'cane', 'gatto'],
  'weather': ['tempo', 'stagione', 'previsione', 'grado', 'celsius'],
  'tools': ['attrezzo', 'strumento', 'macchina', 'motore', 'riparare', 'sistemare', 'costruire'],
  'actions': ['azione', 'movimento', 'gesto', 'comportamento'],
  'emotions': ['emozione', 'sentimento', 'umore', 'stato', 'mente', 'anima'],
  'farm': ['fattoria', 'contadino', 'agricoltura', 'raccolto', 'campo', 'trattore'],
  'fantasy': ['leggenda', 'mito', 'storia', 'racconto', 'avventura', 'missione', 'viaggio', 'battaglia', 'guerra', 'pace', 'vittoria', 'sconfitta', 'eroe', 'nemico', 'amico', 'alleato', 'traditore'],
};

// ============================================
// Build assignments
// ============================================

const roomAssignments = {};
const zoneInteriorVocab = {}; // zoneId -> [{wordId, x, y}]
const assignedWords = new Set();

for (const roomId of Object.keys(zoneMappings)) {
  roomAssignments[roomId] = [];
}

// 1. Assign explicit zone words (rooms processed in order above = priority order)
for (const [roomId, zones] of Object.entries(zoneMappings)) {
  for (const [zoneId, wordIds] of Object.entries(zones)) {
    zoneInteriorVocab[zoneId] = [];
    let count = 0;
    
    for (const wordId of wordIds) {
      if (italianVocabulary[wordId] && !assignedWords.has(wordId)) {
        assignedWords.add(wordId);
        roomAssignments[roomId].push(wordId);
        
        // Generate position in a grid layout
        const cols = 4;
        const col = count % cols;
        const row = Math.floor(count / cols);
        const marginX = 12;
        const marginY = 12;
        const usableWidth = 100 - marginX * 2;
        const usableHeight = 100 - marginY * 2;
        const rows = Math.max(Math.ceil(wordIds.length / cols), 1);
        
        const x = marginX + (col / Math.max(cols - 1, 1)) * usableWidth;
        const y = marginY + (row / Math.max(rows - 1, 1)) * usableHeight;
        
        zoneInteriorVocab[zoneId].push({ wordId, x: Math.round(x), y: Math.round(y) });
        count++;
      }
    }
  }
}

// 2. Fallback assignments for unassigned words
const unassigned = allWords.filter(w => !assignedWords.has(w.id));

function findBestRoom(word) {
  const en = word.en;
  const id = word.id;
  
  // Check explicit fallback keywords
  for (const [roomId, keywords] of Object.entries(roomFallbackKeywords)) {
    for (const kw of keywords) {
      if (id === kw || en.includes(kw)) {
        return roomId;
      }
    }
  }
  
  // Smart category matching
  if (['mangiare','bere','cucinare','cibo','pane','pasta','riso','olio','sale','zucchero','caffe','te','latte','burro','formaggio','uova','vino','birra','acqua','succo','carne','pesce','frutta','verdura','forno','pentola','padella','piatto','tazza','bicchiere','forchetta','coltello','cucchiaio','tavolo','cena','pranzo','colazione','dolce','torta','gelato','cioccolata','miele','pane','panino','pomodoro','patata','aglio','cipolla','cetriolo','peperone','carota','lattuga','pepe','zuppa','cuoco','cuoca','cucina','frigorifero','ghiaccio','freddo','caldo','menu','ricetta','gusto'].includes(id)) return 'kitchen';
  
  if (['dormire','letto','cuscino','coperta','svegliarsi','sveglia','addormentarsi','stanco','camicia','pantaloni','gonna','vestito','giacca','maglietta','maglione','scarpe','calze','pigiama','vestirsi','cambiare','armadio','comodino','lampada','madre','padre','figlia','figlio','fratello','sorella','nonna','nonno','bambino','bambina','famiglia','persona','persone','foto','ragazzo','ragazza','genitore','coppia','taglia','parrucchiere'].includes(id)) return 'bedroom';
  
  if (['lavarsi','doccia','bagno','asciugamano','sapone','denti','dente','dentifricio','capelli','faccia','mano','mani','piede','piedi','gamba','schiena','spalla','collo','bocca','naso','occhi','occhio','orecchio','testa','corpo','medicina','farmaco','dottore','dottoressa','medico','ospedale','salute','malato','malata','dolore','sangue','cuore','stomaco','febbre','influenza','raffreddore','infermiera','infermiere','ferita','tosse','cerotto','pettinarsi','lavare','pulito','bagnato','asciutto','asciugacapelli','pittore'].includes(id)) return 'bathroom';
  
  if (['libro','leggere','scrivere','studiare','imparare','insegnante','studente','studentessa','scuola','lezione','compito','esame','quaderno','penna','matita','dizionario','storia','lettera','pagina','parola','testo','biblioteca','computer','internet','email','programma','software','sito','rete','tastiera','mouse','stampante','tablet','matematica','scienza','musica','applicazione','password','video','informatica','orologio','disegno','righello','lavagna','pensare','capire','sapere','idea','domanda','risposta','numero','contare','paesi'].includes(id)) return 'library';
  
  if (['divano','poltrona','televisione','tv','telecomando','film','sport','gioco','videogame','streaming','canzone','radio','ascoltare','libreria','quadro','tappeto','lampada','tenda','tavolino','casa','stanza','sala','edificio','soggiorno','spettacolo','vivere','relax','ospitare'].includes(id)) return 'living-room';
  
  if (['treno','autobus','metro','tram','taxi','macchina','auto','bicicletta','moto','aereo','nave','barca','stazione','aeroporto','porto','strada','via','guidare','viaggio','biglietto','abbonamento','soldi','euro','moneta','pagare','comprare','prezzo','mappa','lontano','vicino','veloce','lento','benzina','patente','parcheggio','semaforo','ponte','autista','carriera','fermata','binario','partire','arrivare','pullman','volo','caricabatterie','cartella','termometro','portafoglio','bancomat','passaporto'].includes(id)) return 'transport';
  
  if (['mela','arancia','banana','limone','pomodoro','patata','aglio','cipolla','cetriolo','peperone','carota','lattuga','carne','pesce','pane','frutta','verdura','uova','latte','formaggio','burro','gelato','carrello','cassa','scontrino','soldi','euro','resto','prezzo','caro','economico','cliente','commessa','commesso','negoziante','quanto','comprare','pagare','borsa','borse','cento','sconto','scontato','offerta','supermercato','negozio','mercato','pesca','pera','ciliegia','anguria','uva','fragola'].includes(id)) return 'supermarket';
  
  if (['caffe','te','succo','acqua','bicchiere','tazza','dolce','torta','gelato','cioccolata','zucchero','latte','menu','ordinare','cameriere','cameriera','conto','mancia','pagare','grazie','buongiorno','arrivederci','prego','amico','amica','parlare','tavolo','sedia','giornale','universita','altoparlante','antipasto','stipendio','tovagliolo','ristorante','bar'].includes(id)) return 'cafe';
  
  if (['fiore','albero','pianta','erba','foglia','radice','ramo','bosco','foresta','giardino','strada','via','campo','pietra','pietre','terra','ponte','collina','montagna','montagne','valle','cielo','sole','nuvola','vento','pioggia','neve','tempo','estate','inverno','primavera','autunno','verde','mare','lago','fiume','spiaggia','sabbia','arcobaleno','ghiaccio','temperatura','caldo','freddo','natura'].includes(id)) return 'garden';
  
  if (['quadro','pittura','scultura','museo','bello','brutto','vecchio','nuovo','famoso','colore','ombra','ombre','luce','immagine','capolavoro','galleria','cultura','monumento','turista','muro','cornice','negozio','mercato','prezzo','articolo','guida','biglietto','quartiere','centro','citta','zona','area','spazio','livello'].includes(id)) return 'gallery';
  
  if (['cane','gatto','cavallo','lupo','pollo','uccello','animale','coniglio','topo','elefante','leone','tigre','orso','iguana','lucertola','serpente','coccodrillo','tartaruga'].includes(id)) return 'animals';
  
  if (['tuono','fulmine','temporale','pioggia','grandine','alluvione','sole','nuvola','vento','neve','nebbia','arcobaleno','cielo','clima','temperatura','caldo','freddo','Piove','Nevica'].includes(id)) return 'weather';
  
  if (['martello','sega','cacciavite','forbici','coltello','ascia','piccone','pala','rastrello','costruire','pulire','colla','batteria','file','ingegnere','pittura','lavagna','tastiera','minuto','bastoncini'].includes(id)) return 'tools';
  
  if (['andare','venire','partire','arrivare','correre','camminare','saltare','nuotare','volare','ballare','cadere','alzarsi','sedersi','sdraiarsi','girare','attraversare','scappare','svegliarsi','addormentarsi','dormire','mangiare','bere','leggere','scrivere','guardare','vedere','sentire','ascoltare','toccare','aprire','chiudere','muoversi','tornare','entrare','uscire','iniziare','cominciare','fermarsi','finire','continuare','scegliere','decidere','provare','prendere','dare','portare','tenere','mettere','chiamare','chiedere','rispondere','dire','spiegare','mostrare','cercare','trovare','perdere','lavorare','studiare','insegnare','imparare','riposare','giocare','aspettare','preparare','pulire','lavare','lavarsi','vestirsi','pettinarsi','cambiare','pagare','comprare','vendere','fare','dovere','potere','volere','essere','avere','piacere','preferire','credere','ricordare','dimenticare','capire','sapere','pensare','immaginare','morire','nascere','nascondere','diventare','rimanere','restare','tornare','ritornare','rompere','sembrare'].includes(id)) return 'actions';
  
  if (['felice','contento','allegro','triste','arrabbiato','paura','sorpresa','amore','piacere','odio','geloso','gelosia','nervoso','tranquillo','calmo','stanco','eccitato','deluso','imbarazzato','orgoglioso','solo','solitario','insieme','pazzo','normale','strano','divertente','serio','buono','cattivo','male','noia','tristezza','sollievo','speranza','vergogna','bello','bella','brutto','allegro'].includes(id)) return 'emotions';
  
  if (['pomodoro','patata','aglio','cipolla','cetriolo','peperone','carota','lattuga','verdura','melanzana','broccolo','asparago','mela','arancia','banana','limone','pesca','pera','ciliegia','anguria','uva','fragola','frutta','avocado','contadino','grano','fieno','spiga','fattoria'].includes(id)) return 'farm';
  
  if (['drago','fata','strega','mago','fantasma','principe','regina','re','elfo','mostro','magia','incantesimo','maledizione','benedizione','pozione','cristallo','specchio','tesoro','oro','argento','anello','collana','chiave','spada','scudo','armatura','corona','trono','castello','palazzo','torre','grotta','caverna','deserto','isola','luna','stella','stelle','vulcano','montagne','guerra','pace','vittoria','sconfitta','eroe','nemico','amico','alleato','traditore','spia','ladro','assassino','guerriero','negromante','vampiro','zombie','scheletro','orco','nano','goblin','troll','gigante','genio','fenice','sirena','prigione','poliziotto','soldato','guardia','crimine','colpa','innocenza','giustizia','vendetta','tradimento','onore','dignita','orgoglio','umilta','saggezza','verita','bugia','segreto','mistero','destino','fato','festa','compleanno','vacanza','natale','pasqua','matrimonio','funerale','chiesa','tempio','preghiera','sacrificio','paradiso','inferno'].includes(id)) return 'fantasy';
  
  // Time/number/grammar words -> entrance-hall (foundation)
  if (['january','february','march','april','may','june','july','august','september','october','november','december','monday','tuesday','wednesday','thursday','friday','saturday','sunday','morning','afternoon','evening','night','today','tomorrow','yesterday','now','hour','minute','second','week','month','year','midnight','noon','spring','summer','autumn','winter'].some(m => en.includes(m))) return 'entrance-hall';
  if (['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty','thirty','hundred','thousand','million'].some(m => en.includes(m))) return 'entrance-hall';
  if (['io','tu','lui','lei','noi','voi','loro','mi','ti','ci','vi','si','me','te','se','ne','a','di','da','in','con','su','per','tra','fra','e','o','ma','se','che','chi','cosa','come','dove','quando','perche','quale','quanto'].includes(id)) return 'entrance-hall';
  
  // Common adjectives that don't fit elsewhere -> entrance-hall
  if (['alto','basso','grande','piccolo','lungo','corto','largo','stretto','nuovo','vecchio','facile','difficile','possibile','impossibile','incredibile','enorme','forte','duro','morbido','leggero','pesante','pieno','vuoto','giovane','ricco','povero','simile','diverso','uguale','primo','secondo','terzo','quarto','quinto','ultimo','prossimo','passato','presente','futuro','vero','falso','sicuro','certo','chiaro','scuro','lungo','lento','vicino','lontano'].includes(id)) return 'entrance-hall';
  
  // Default: try to guess from word ending or default to entrance-hall
  if (en.includes('to ') || id.endsWith('are') || id.endsWith('ere') || id.endsWith('ire')) return 'actions';
  
  return 'entrance-hall';
}

for (const word of unassigned) {
  const roomId = findBestRoom(word);
  roomAssignments[roomId].push(word.id);
  
  // Try to assign to a zone within the room
  const zones = zoneMappings[roomId];
  if (zones) {
    let bestZone = null;
    let bestScore = 0;
    
    for (const [zoneId, zoneWords] of Object.entries(zones)) {
      // Check if this word is already in the zone's explicit list
      if (zoneWords.includes(word.id)) {
        bestZone = zoneId;
        break;
      }
      
      // Check semantic similarity with zone words
      const zoneWordObjs = zoneWords
        .map(id => allWords.find(w => w.id === id))
        .filter(Boolean);
      
      let score = 0;
      for (const zw of zoneWordObjs) {
        if (zw.en === word.en) score += 3;
        else if (zw.en.split(/[\s,\/]+/).some(p => p.length > 2 && word.en.includes(p))) score += 2;
        else if (word.en.split(/[\s,\/]+/).some(p => p.length > 2 && zw.en.includes(p))) score += 1;
      }
      
      if (score > bestScore) {
        bestScore = score;
        bestZone = zoneId;
      }
    }
    
    if (bestZone && bestScore >= 2) {
      const existing = zoneInteriorVocab[bestZone] || [];
      const cols = 4;
      const count = existing.length;
      const col = count % cols;
      const row = Math.floor(count / cols);
      const marginX = 12;
      const marginY = 12;
      const usableWidth = 100 - marginX * 2;
      const usableHeight = 100 - marginY * 2;
      const rows = Math.max(Math.ceil((count + 1) / cols), 1);
      const x = marginX + (col / Math.max(cols - 1, 1)) * usableWidth;
      const y = marginY + (row / Math.max(rows - 1, 1)) * usableHeight;
      
      zoneInteriorVocab[bestZone].push({ wordId: word.id, x: Math.round(x), y: Math.round(y) });
    }
  }
}

// ============================================
// Rebuild rooms.ts
// ============================================

function escapeStr(s) {
  return s.replace(/'/g, "\\'");
}

let roomsContent = `// Room structure - language agnostic
// All 18 rooms from the original camera-cafe-learner

import type { Room } from '../types';

export const rooms: Room[] = [
`;

const roomDefs = [
  {
    id: 'entrance-hall',
    name: 'Foyer',
    subtitle: 'Essere & Avere',
    nameNative: 'Ingresso',
    image: '/rooms/entrance-hall.jpg',
    description: 'Step into the grand hall. Meet the people and learn the two most important verbs in Italian.',
    grammarFocus: 'essere & avere (to be & to have)',
    zones: [
      { id: 'family-portrait', name: 'Family Portrait', nameNative: 'Ritratto di Famiglia', description: 'Family members on the wall', icon: '👨‍👩‍👧‍👦', x: 30, y: 40, width: 20, height: 25, interiorImage: '/rooms/entrance-portrait.jpg' },
      { id: 'coat-rack', name: 'Coat Rack', nameNative: 'Appendiabiti', description: 'Clothes and accessories', icon: '🧥', x: 75, y: 45, width: 15, height: 30 },
      { id: 'mirror', name: 'The Mirror', nameNative: 'Lo Specchio', description: 'Body parts and descriptions', icon: '🪞', x: 50, y: 35, width: 15, height: 20 },
    ],
    grammarPoints: [
      { id: 'essere', title: 'Essere - To Be', explanation: 'Used for identity, characteristics, and location', example: 'Io sono Italiano (I am Italian)', color: '#E7A04D' },
      { id: 'avere', title: 'Avere - To Have', explanation: 'Used for possession and age', example: 'Io ho una chiave (I have a key)', color: '#3B82F6' },
    ],
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    subtitle: 'Fare & -ARE Verbs',
    nameNative: 'Cucina',
    image: '/rooms/kitchen.jpg',
    description: 'La cucina del palazzo — where every object tells a story and teaches the verb "fare".',
    grammarFocus: 'fare & regular -ARE verbs',
    zones: [
      { id: 'fridge', name: 'The Fridge', nameNative: 'Il Frigorifero', description: 'Cold food and drinks', icon: '❄️', x: 75, y: 45, width: 15, height: 25, interiorImage: '/rooms/kitchen-fridge.jpg' },
      { id: 'pantry', name: 'The Pantry', nameNative: 'La Dispensa', description: 'Dry goods and staples', icon: '🥫', x: 88, y: 40, width: 10, height: 30, interiorImage: '/rooms/kitchen-pantry.jpg' },
      { id: 'stove', name: 'The Stove', nameNative: 'I Fornelli', description: 'Cooking and preparation', icon: '🔥', x: 60, y: 55, width: 15, height: 15 },
      { id: 'table', name: 'The Table', nameNative: 'Il Tavolo', description: 'Dining and eating', icon: '🍽️', x: 25, y: 65, width: 20, height: 15 },
    ],
    grammarPoints: [
      { id: 'fare', title: 'Fare - To Do/Make', explanation: 'Irregular verb used for actions and weather', example: 'Faccio la pasta (I make pasta)', color: '#E7A04D' },
      { id: 'are-verbs', title: 'Regular -ARE Verbs', explanation: 'Most common verb conjugation pattern', example: 'Parlare → Io parlo, Tu parli, Lui/lei parla', color: '#10B981' },
    ],
  },
  {
    id: 'library',
    name: 'Knowledge Hub',
    subtitle: 'Learning, Work & Technology',
    nameNative: 'Biblioteca',
    image: '/rooms/library.jpg',
    description: 'La biblioteca e lo studio — master learning, work, and technology vocabulary.',
    grammarFocus: 'questions, negation, and verb patterns',
    zones: [
      { id: 'bookshelf', name: 'The Bookshelf', nameNative: 'Lo Scaffale', description: 'School and books', icon: '📚', x: 30, y: 35, width: 25, height: 30 },
      { id: 'desk', name: 'Study Desk', nameNative: 'La Scrivania', description: 'Study and work', icon: '📝', x: 60, y: 60, width: 20, height: 20 },
      { id: 'computer', name: 'Computer Station', nameNative: 'Il Computer', description: 'Technology and time', icon: '💻', x: 85, y: 45, width: 12, height: 15 },
    ],
    grammarPoints: [
      { id: 'questions', title: 'Forming Questions', explanation: 'Raise intonation or use question words', example: 'Tu parli italiano? → Parli tu italiano?', color: '#8B5CF6' },
      { id: 'negation', title: 'Negation', explanation: 'Wrap the verb with non...', example: "Non parlo italiano (I don't speak Italian)", color: '#EC4899' },
    ],
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    subtitle: 'Family & Descriptions',
    nameNative: "L'Camera da Letto",
    image: '/rooms/bedroom.jpg',
    description: 'Learn family members and master adjective agreement.',
    grammarFocus: 'possessive adjectives & adjective agreement',
    zones: [
      { id: 'wardrobe', name: 'The Wardrobe', nameNative: "L'Armadio", description: 'Clothes and fashion', icon: '👔', x: 70, y: 40, width: 15, height: 30, interiorImage: '/rooms/bedroom-wardrobe.jpg' },
      { id: 'bed', name: 'The Bed', nameNative: 'Il Letto', description: 'Rest and daily routine', icon: '🛏️', x: 40, y: 55, width: 25, height: 20 },
      { id: 'photos', name: 'Family Photos', nameNative: 'Le Foto', description: 'Family and relationships', icon: '📷', x: 25, y: 30, width: 20, height: 15 },
    ],
    grammarPoints: [
      { id: 'possessives', title: 'Possessive Adjectives', explanation: 'Show ownership: il mio, la tua, il suo', example: 'Il mio letto (My bed), La tua famiglia (Your family)', color: '#EC4899' },
      { id: 'agreement', title: 'Adjective Agreement', explanation: 'Adjectives match gender and number of nouns', example: 'Una famiglia grande (A big family)', color: '#8B5CF6' },
    ],
  },
  {
    id: 'bathroom',
    name: 'Bathroom',
    subtitle: 'Daily Routine & Reflexives',
    nameNative: 'Bagno',
    image: '/rooms/bathroom.jpg',
    description: 'Il bagno — master daily routines and reflexive verbs.',
    grammarFocus: 'reflexive verbs (mi lavo, mi pettino) & daily routine',
    zones: [
      { id: 'sink', name: 'The Sink', nameNative: 'Il Lavandino', description: 'Washing and face', icon: '🚰', x: 25, y: 45, width: 20, height: 25 },
      { id: 'shower', name: 'The Shower', nameNative: 'La Doccia', description: 'Bathing and body', icon: '🚿', x: 60, y: 35, width: 25, height: 35 },
      { id: 'cabinet', name: 'Medicine Cabinet', nameNative: "L'Armadietto", description: 'Health and care', icon: '💊', x: 85, y: 30, width: 12, height: 20 },
    ],
    grammarPoints: [
      { id: 'reflexives', title: 'Reflexive Verbs', explanation: 'Actions you do to yourself with mi/ti/si/ci/vi/si', example: 'Mi lavo (I wash myself), Ti pettini (You comb yourself)', color: '#10B981' },
    ],
  },
  {
    id: 'garden',
    name: 'Garden',
    subtitle: 'Andare & Places',
    nameNative: 'Giardino',
    image: '/rooms/garden.jpg',
    description: 'Il giardino del palazzo — learn the verb "andare" as you walk through the garden.',
    grammarFocus: 'andare & preposizioni articolate',
    zones: [
      { id: 'flowers', name: 'The Flowers', nameNative: 'I Fiori', description: 'Nature and plants', icon: '🌸', x: 65, y: 60, width: 20, height: 20 },
      { id: 'path', name: 'The Path', nameNative: 'Il Vialetto', description: 'Places and directions', icon: '🛤️', x: 30, y: 75, width: 25, height: 15 },
      { id: 'sky', name: 'The Sky', nameNative: 'Il Cielo', description: 'Weather and seasons', icon: '☀️', x: 50, y: 15, width: 30, height: 15 },
    ],
    grammarPoints: [
      { id: 'andare', title: 'Andare - To Go', explanation: 'Irregular verb for movement', example: 'Vado a Roma (I go to Rome)', color: '#E7A04D' },
      { id: 'prepositions', title: 'Preposizioni Articolate', explanation: 'Combined preposition + article', example: 'a + il = al, in + la = nella', color: '#3B82F6' },
    ],
  },
  {
    id: 'transport',
    name: 'Transport Hub',
    subtitle: 'Movement & Directions',
    nameNative: 'Stazione',
    image: '/rooms/transport.jpg',
    description: 'La stazione — learn to navigate, buy tickets, and ask directions.',
    grammarFocus: 'andare + dove, direzione, prepositions of place',
    zones: [
      { id: 'ticket-office', name: 'Ticket Office', nameNative: 'La Biglietteria', description: 'Buying tickets', icon: '🎫', x: 20, y: 45, width: 22, height: 25 },
      { id: 'platform', name: 'Platform', nameNative: 'Il Binario', description: 'Trains and departure', icon: '🚂', x: 50, y: 40, width: 25, height: 30 },
      { id: 'street', name: 'Street Exit', nameNative: "L'Uscita", description: 'Directions and navigation', icon: '🚶', x: 80, y: 50, width: 18, height: 25 },
    ],
    grammarPoints: [
      { id: 'directions', title: 'Asking for Directions', explanation: 'Dove è...? Come si va...?', example: "Dov'è la stazione? (Where is the station?)", color: '#10B981' },
    ],
  },
  {
    id: 'living-room',
    name: 'Living Room',
    subtitle: 'Modal Verbs',
    nameNative: 'Soggiorno',
    image: '/rooms/living-room.jpg',
    description: 'Express ability, desire, and obligation with modal verbs.',
    grammarFocus: 'modal verbs: potere, volere, dovere',
    zones: [
      { id: 'sofa', name: 'The Sofa', nameNative: 'Il Divano', description: 'Relaxation and free time', icon: '🛋️', x: 40, y: 60, width: 25, height: 20 },
      { id: 'tv', name: 'The TV', nameNative: 'La TV', description: 'Entertainment and media', icon: '📺', x: 70, y: 45, width: 15, height: 15 },
      { id: 'furniture', name: 'Furniture', nameNative: 'I Mobili', description: 'Home items', icon: '🏠', x: 20, y: 45, width: 15, height: 20 },
    ],
    grammarPoints: [
      { id: 'potere', title: 'Potere - Can/To Be Able', explanation: 'Express ability or possibility', example: 'Posso aiutarti? (Can I help you?)', color: '#3B82F6' },
      { id: 'volere', title: 'Volere - To Want', explanation: 'Express desire', example: 'Voglio un caffè (I want a coffee)', color: '#EC4899' },
      { id: 'dovere', title: 'Dovere - Must/To Have To', explanation: 'Express obligation', example: 'Devo studiare (I must study)', color: '#E7A04D' },
    ],
  },
  {
    id: 'supermarket',
    name: 'Supermarket',
    subtitle: 'Shopping & Numbers',
    nameNative: 'Supermercato',
    image: '/rooms/supermarket.jpg',
    description: 'Il supermercato — learn to shop, count, and pay.',
    grammarFocus: 'numbers, prices & shopping expressions',
    zones: [
      { id: 'produce', name: 'Fresh Produce', nameNative: 'Frutta e Verdura', description: 'Fruits and vegetables', icon: '🍎', x: 20, y: 50, width: 25, height: 30 },
      { id: 'dairy', name: 'Dairy Section', nameNative: 'Latticini', description: 'Milk and cheese', icon: '🧀', x: 50, y: 45, width: 20, height: 25 },
      { id: 'checkout', name: 'Checkout', nameNative: 'La Cassa', description: 'Paying and prices', icon: '💰', x: 80, y: 55, width: 18, height: 20 },
    ],
    grammarPoints: [
      { id: 'numbers', title: 'Numbers 1-100', explanation: 'Essential for shopping and prices', example: 'Quanto costa? (How much does it cost?)', color: '#10B981' },
      { id: 'quantities', title: 'Quantities', explanation: "un chilo di, un litro di, un po' di", example: 'Un chilo di mele (A kilo of apples)', color: '#8B5CF6' },
    ],
  },
  {
    id: 'cafe',
    name: 'Café',
    subtitle: 'Ordering & Social',
    nameNative: 'Caffè',
    image: '/rooms/cafe.jpg',
    description: 'Il caffè — master ordering, social interaction, and café culture.',
    grammarFocus: 'vorrei, posso, conditional politeness',
    zones: [
      { id: 'counter', name: 'The Counter', nameNative: 'Il Bancone', description: 'Ordering coffee', icon: '☕', x: 35, y: 40, width: 30, height: 20 },
      { id: 'table-cafe', name: 'Table', nameNative: 'Il Tavolo', description: 'Sitting and socializing', icon: '🪑', x: 70, y: 60, width: 25, height: 20 },
    ],
    grammarPoints: [
      { id: 'vorrei', title: 'Vorrei - I would like', explanation: 'Polite way to order', example: 'Vorrei un caffè, per favore', color: '#E7A04D' },
      { id: 'politeness', title: 'Polite Requests', explanation: 'Using conditional for politeness', example: 'Potrebbe portarmi...? (Could you bring me...?)', color: '#3B82F6' },
    ],
  },
  {
    id: 'gallery',
    name: 'Gallery',
    subtitle: 'Passato Prossimo',
    nameNative: 'Galleria',
    image: '/rooms/gallery.jpg',
    description: 'Learn the passato prossimo to talk about completed actions.',
    grammarFocus: 'passato prossimo: avere/essere + participio passato',
    zones: [
      { id: 'paintings', name: 'The Paintings', nameNative: 'I Quadri', description: 'Emotions and feelings', icon: '🎨', x: 40, y: 35, width: 25, height: 20 },
      { id: 'pharmacy', name: 'Medicine Cabinet', nameNative: 'Armadietto Medicinale', description: 'Health and body', icon: '💊', x: 75, y: 50, width: 15, height: 20 },
      { id: 'shopping', name: 'Gift Shop', nameNative: 'Il Negozio', description: 'Shopping and commerce', icon: '🛍️', x: 20, y: 60, width: 15, height: 15 },
    ],
    grammarPoints: [
      { id: 'passato-prossimo', title: 'Passato Prossimo', explanation: 'Past tense with avere/essere + past participle', example: 'Ho mangiato (I ate), Sono andato (I went)', color: '#E7A04D' },
      { id: 'auxiliary', title: 'Avere vs Essere', explanation: 'Most verbs use avere; movement/change uses essere', example: 'Ho parlato vs Sono arrivato', color: '#EC4899' },
    ],
  },
  {
    id: 'animals',
    name: 'Animal Sanctuary',
    subtitle: 'Creatures & Nature',
    nameNative: 'Santuario Animali',
    image: '/rooms/animals.jpg',
    description: 'Discover creatures from around the world.',
    grammarFocus: 'animal names, habitats, and descriptive adjectives',
    zones: [
      { id: 'reptiles', name: 'Reptile House', nameNative: 'Rettili', description: 'Snakes, lizards, iguanas', icon: '🦎', x: 25, y: 40, width: 20, height: 25 },
      { id: 'mammals', name: 'Mammal Zone', nameNative: 'Mammiferi', description: 'Wolves, bears, and more', icon: '🐿️', x: 55, y: 35, width: 25, height: 30 },
    ],
    grammarPoints: [
      { id: 'animal-descriptions', title: 'Describing Animals', explanation: 'Using adjectives with animals', example: 'Un grande orso (A big bear)', color: '#10B981' },
    ],
  },
  {
    id: 'weather',
    name: 'Weather Station',
    subtitle: 'Sky & Natural Phenomena',
    nameNative: 'Meteo',
    image: '/rooms/weather.jpg',
    description: 'Thunder, hail, fog, lightning, drizzle and all weather vocabulary.',
    grammarFocus: "weather expressions with fare (fa caldo/freddo) & c'è",
    zones: [
      { id: 'storms', name: 'Storm Center', nameNative: 'Temporali', description: 'Thunder, lightning, hail', icon: '⛈️', x: 25, y: 35, width: 25, height: 25 },
      { id: 'sky-weather', name: 'Sky View', nameNative: 'Il Cielo', description: 'Clouds, sun, fog', icon: '🌤️', x: 55, y: 30, width: 30, height: 20 },
    ],
    grammarPoints: [
      { id: 'weather-expressions', title: 'Weather Expressions', explanation: 'Using fare for weather', example: "Fa caldo (It's hot), Fa freddo (It's cold)", color: '#3B82F6' },
    ],
  },
  {
    id: 'tools',
    name: 'Workshop',
    subtitle: 'Tools & Objects',
    nameNative: 'Officina',
    image: '/rooms/tools.jpg',
    description: 'Hammer, saw, funnel, screwdriver and workshop vocabulary.',
    grammarFocus: 'tool names & verb-noun collocations',
    zones: [
      { id: 'hand-tools', name: 'Hand Tools', nameNative: 'Attrezzi Manuali', description: 'Hammer, saw, screwdriver', icon: '🔨', x: 25, y: 40, width: 25, height: 25 },
      { id: 'workbench', name: 'Workbench', nameNative: 'Banco da Lavoro', description: 'File, drill, sharpen', icon: '🛠️', x: 55, y: 35, width: 25, height: 30 },
    ],
    grammarPoints: [
      { id: 'tool-verbs', title: 'Tool Verbs', explanation: 'Using tools as verbs', example: 'Martellare (to hammer), Segare (to saw)', color: '#E7A04D' },
    ],
  },
  {
    id: 'actions',
    name: 'Action Arena',
    subtitle: 'Verbs & Movement',
    nameNative: 'Arena Azione',
    image: '/rooms/actions.jpg',
    description: 'Kick, choke, float, surrender, wrap, wake up. Verbs need scenes, not just objects.',
    grammarFocus: 'imperative mood & verb conjugations',
    zones: [
      { id: 'movement', name: 'Movement Zone', nameNative: 'Movimento', description: 'Kick, jump, climb, dance', icon: '🏃', x: 25, y: 35, width: 25, height: 25 },
      { id: 'daily-actions', name: 'Daily Actions', nameNative: 'Azioni Quotidiane', description: 'Wake up, shave, comb', icon: '🌅', x: 55, y: 30, width: 25, height: 25 },
    ],
    grammarPoints: [
      { id: 'imperative', title: 'Imperative Mood', explanation: 'Giving commands and instructions', example: 'Vieni qui! (Come here!), Aspetta! (Wait!)', color: '#EC4899' },
    ],
  },
  {
    id: 'emotions',
    name: 'Emotion Chamber',
    subtitle: 'Feelings & Abstract Concepts',
    nameNative: 'Camera Emozioni',
    image: '/rooms/emotions.jpg',
    description: 'Angry, ashamed, betray, fear, happiness, and the abstract vocabulary.',
    grammarFocus: 'verbs of emotion & subjunctive mood',
    zones: [
      { id: 'feelings', name: 'Feelings', nameNative: 'Sentimenti', description: 'Happy, sad, angry, afraid', icon: '😊', x: 30, y: 35, width: 25, height: 25 },
      { id: 'states', name: 'Mental States', nameNative: 'Stati Mentali', description: 'Confused, nervous, anxious', icon: '🧠', x: 60, y: 30, width: 25, height: 25 },
    ],
    grammarPoints: [
      { id: 'emotion-verbs', title: 'Verbs of Emotion', explanation: 'Expressing feelings with essere', example: "Sono felice (I'm happy), Sono triste (I'm sad)", color: '#8B5CF6' },
    ],
  },
  {
    id: 'farm',
    name: 'Farm & Agriculture',
    subtitle: 'Food & Farming',
    nameNative: 'Fattoria',
    image: '/rooms/farm.jpg',
    description: 'Pumpkin, avocado, barley, rice, wheat and agricultural vocabulary.',
    grammarFocus: 'agricultural terms & food preparation verbs',
    zones: [
      { id: 'vegetables', name: 'Vegetable Garden', nameNative: 'Orto', description: 'Asparagus, broccoli, eggplant', icon: '🥬', x: 25, y: 40, width: 25, height: 25 },
      { id: 'fruits', name: 'Fruit Orchard', nameNative: 'Frutteto', description: 'Avocado, cherries, figs', icon: '🍎', x: 55, y: 35, width: 25, height: 30 },
    ],
    grammarPoints: [
      { id: 'farm-verbs', title: 'Farming Verbs', explanation: 'Agricultural activities', example: 'Arare (to plow), Raccogliere (to harvest)', color: '#10B981' },
    ],
  },
  {
    id: 'fantasy',
    name: 'Fantasy Realm',
    subtitle: 'Myth & Imagination',
    nameNative: 'Regno Fantasy',
    image: '/rooms/fantasy.jpg',
    description: 'Dragon, elf, demon, shaman, ghost and mythological vocabulary.',
    grammarFocus: 'narrative past & descriptive language',
    zones: [
      { id: 'creatures', name: 'Mythical Creatures', nameNative: 'Creature Mitiche', description: 'Dragon, unicorn, fairy', icon: '🐉', x: 30, y: 35, width: 25, height: 25 },
      { id: 'supernatural', name: 'Supernatural', nameNative: 'Soprannaturale', description: 'Ghost, spirit, soul', icon: '👻', x: 60, y: 30, width: 25, height: 25 },
    ],
    grammarPoints: [
      { id: 'storytelling', title: 'Storytelling Language', explanation: 'Narrative techniques', example: "C'era una volta... (Once upon a time...)", color: '#8B5CF6' },
    ],
  },
];

for (const def of roomDefs) {
  const vocabIds = roomAssignments[def.id] || [];
  const uniqueVocab = [...new Set(vocabIds)].sort();
  
  // Update zones with interiorVocab
  const updatedZones = def.zones.map(zone => {
    const iv = zoneInteriorVocab[zone.id];
    if (iv && iv.length > 0) {
      return { ...zone, interiorVocab: iv };
    }
    return zone;
  });
  
  roomsContent += `  {
    id: '${def.id}',
    name: '${def.name}',
    subtitle: '${def.subtitle}',
    nameNative: "${escapeStr(def.nameNative)}",
    image: '${def.image}',
    description: '${escapeStr(def.description)}',
    grammarFocus: '${escapeStr(def.grammarFocus)}',
    vocabularyIds: [${uniqueVocab.map(id => `"${id}"`).join(', ')}],
    zones: [
${updatedZones.map(z => {
  let zoneStr = `      { id: '${z.id}', name: '${escapeStr(z.name)}', nameNative: "${escapeStr(z.nameNative)}", description: '${escapeStr(z.description)}', icon: '${z.icon}', x: ${z.x}, y: ${z.y}, width: ${z.width}, height: ${z.height}`;
  if (z.interiorImage) zoneStr += `, interiorImage: '${z.interiorImage}'`;
  if (z.interiorVocab && z.interiorVocab.length > 0) {
    zoneStr += `, interiorVocab: [${z.interiorVocab.map(v => `{ wordId: '${v.wordId}', x: ${v.x}, y: ${v.y} }`).join(', ')}]`;
  }
  zoneStr += ` },`;
  return zoneStr;
}).join('\n')}
    ],
    grammarPoints: [
${def.grammarPoints.map(gp => `      { id: '${gp.id}', title: '${escapeStr(gp.title)}', explanation: '${escapeStr(gp.explanation)}', example: '${escapeStr(gp.example)}', color: '${gp.color}' },`).join('\n')}
    ],
  },
`;
}

roomsContent += `];

export const getRoomById = (id: string): Room | undefined => {
  return rooms.find((room) => room.id === id);
};

export const getAllRooms = (): Room[] => rooms;

export const getAdjacentRooms = (id: string): Room[] => {
  const adjacencyMap: Record<string, string[]> = {
    'entrance-hall': ['kitchen', 'library', 'living-room'],
    'kitchen': ['entrance-hall', 'garden', 'cafe', 'farm'],
    'library': ['entrance-hall', 'bedroom'],
    'bedroom': ['library', 'living-room', 'bathroom'],
    'bathroom': ['bedroom'],
    'garden': ['kitchen', 'gallery', 'supermarket', 'weather', 'animals'],
    'transport': ['supermarket', 'cafe'],
    'supermarket': ['garden', 'cafe', 'transport'],
    'cafe': ['kitchen', 'supermarket', 'transport'],
    'living-room': ['entrance-hall', 'bedroom', 'gallery'],
    'gallery': ['living-room', 'garden', 'fantasy'],
    'animals': ['garden', 'weather', 'farm'],
    'weather': ['garden', 'animals', 'farm'],
    'tools': ['kitchen', 'farm', 'actions'],
    'actions': ['tools', 'emotions'],
    'emotions': ['actions', 'fantasy', 'gallery'],
    'farm': ['kitchen', 'animals', 'weather', 'tools'],
    'fantasy': ['gallery', 'emotions'],
  };
  const adjacentIds = adjacencyMap[id] || [];
  return adjacentIds
    .map((adjId) => getRoomById(adjId))
    .filter((r): r is Room => r !== undefined);
};
`;

fs.writeFileSync(roomsPath, roomsContent);

console.log('✅ Remapped all vocabulary with logical room/zone assignments');
for (const [roomId, words] of Object.entries(roomAssignments)) {
  console.log(`  ${roomId}: ${[...new Set(words)].length} words`);
}
