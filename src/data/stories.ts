export interface StoryLine {
  italian: string;
  english: string;
}

export interface Story {
  id: string;
  title: string;
  englishTitle: string;
  level: string;
  lines: StoryLine[];
}

// I Tre Porcellini - The Three Little Pigs
const trePorcellini: Story = {
  id: 'tre-porcellini',
  title: 'I Tre Porcellini',
  englishTitle: 'The Three Little Pigs',
  level: 'A1',
  lines: [
    { italian: 'Porcellino 1 costruisce casa di legno.', english: 'Little Pig 1 builds a house of wood.' },
    { italian: 'Porcellino 2 costruisce casa di paglia.', english: 'Little Pig 2 builds a house of straw.' },
    { italian: 'Porcellino 3 costruisce casa di mattoni.', english: 'Little Pig 3 builds a house of bricks.' },
    { italian: 'Porcellino 1 dice: "La mia casa è bella!"', english: 'Little Pig 1 says: "My house is nice!"' },
    { italian: 'Porcellino 2 dice: "La mia casa è leggera!"', english: 'Little Pig 2 says: "My house is light!"' },
    { italian: 'Porcellino 3 dice: "La mia casa è forte!"', english: 'Little Pig 3 says: "My house is strong!"' },
    { italian: 'Lupo arriva e dice: "Casa tua è troppo debole!"', english: 'Wolf arrives and says: "Your house is too weak!"' },
    { italian: 'Lupo soffia e distrugge casa di legno.', english: 'Wolf blows and destroys the wood house.' },
    { italian: 'Porcellino 1 urla: "Aiuto!"', english: 'Little Pig 1 shouts: "Help!"' },
    { italian: 'Porcellino 2 dice: "La mia casa è leggera!"', english: 'Little Pig 2 says: "My house is light!"' },
    { italian: 'Lupo soffia e distrugge casa di paglia.', english: 'Wolf blows and destroys the straw house.' },
    { italian: 'Porcellino 2 urla: "Aiuto!"', english: 'Little Pig 2 shouts: "Help!"' },
    { italian: 'Porcellino 3 dice: "La mia casa è forte!"', english: 'Little Pig 3 says: "My house is strong!"' },
    { italian: 'Lupo arriva e dice: "Casa tua è troppo forte!"', english: 'Wolf arrives and says: "Your house is too strong!"' },
    { italian: 'Lupo soffia ma non distrugge casa di mattoni.', english: 'Wolf blows but doesn\'t destroy the brick house.' },
    { italian: 'Lupo urla: "Non posso entrare!"', english: 'Wolf shouts: "I can\'t enter!"' },
    { italian: 'Porcellino 3 dice: "La mia casa è sicura!"', english: 'Little Pig 3 says: "My house is safe!"' },
    { italian: 'Lupo arriva e dice: "Casa tua è troppo dura!"', english: 'Wolf arrives and says: "Your house is too hard!"' },
    { italian: 'Lupo tenta ma non entra.', english: 'Wolf tries but doesn\'t enter.' },
    { italian: 'Porcellino 3 dice: "La mia casa è perfetta!"', english: 'Little Pig 3 says: "My house is perfect!"' },
    { italian: 'Lupo arriva e dice: "Io non posso!"', english: 'Wolf arrives and says: "I can\'t!"' },
    { italian: 'Lupo va via e dice: "Io non vinco!"', english: 'Wolf leaves and says: "I can\'t win!"' },
    { italian: 'Porcellino 1 dice: "La mia casa è finita!"', english: 'Little Pig 1 says: "My house is finished!"' },
    { italian: 'Porcellino 2 dice: "La mia casa è finita!"', english: 'Little Pig 2 says: "My house is finished!"' },
    { italian: 'Porcellino 3 dice: "La mia casa è sempre lì!"', english: 'Little Pig 3 says: "My house is always there!"' }
  ]
};

// Pinocchio
const pinocchio: Story = {
  id: 'pinocchio',
  title: 'Pinocchio',
  englishTitle: 'Pinocchio (Collodi, 1883)',
  level: 'A1-A2',
  lines: [
    { italian: "C'era una volta un pezzo di legno.", english: 'Once upon a time there was a piece of wood.' },
    { italian: 'Un uomo vecchio trova il legno.', english: 'An old man finds the wood.' },
    { italian: 'Il suo nome è Geppetto.', english: 'His name is Geppetto.' },
    { italian: 'Geppetto è solo. Non ha famiglia.', english: 'Geppetto is alone. He has no family.' },
    { italian: '"Voglio fare un bambino di legno," dice Geppetto.', english: '"I want to make a boy of wood," says Geppetto.' },
    { italian: 'Geppetto lavora tutto il giorno.', english: 'Geppetto works all day.' },
    { italian: 'Fa la testa. Fa le braccia. Fa le gambe.', english: 'He makes the head. He makes the arms. He makes the legs.' },
    { italian: 'Il bambino di legno apre gli occhi.', english: 'The wooden boy opens his eyes.' },
    { italian: '"Ciao, papà!" dice il bambino.', english: '"Hello, papa!" says the boy.' },
    { italian: '"Il tuo nome è Pinocchio," dice Geppetto.', english: '"Your name is Pinocchio," says Geppetto.' },
    { italian: 'Pinocchio cammina. Pinocchio parla. Pinocchio ride.', english: 'Pinocchio walks. Pinocchio talks. Pinocchio laughs.' },
    { italian: 'Ma Pinocchio non è un bambino vero.', english: 'But Pinocchio is not a real boy.' },
    { italian: 'Geppetto compra un libro per Pinocchio.', english: 'Geppetto buys a book for Pinocchio.' },
    { italian: '"Vai a scuola," dice Geppetto.', english: '"Go to school," says Geppetto.' },
    { italian: 'Pinocchio va a scuola. Ma sulla strada vede un teatro.', english: 'Pinocchio goes to school. But on the road he sees a theatre.' },
    { italian: '"Il teatro è più divertente della scuola!" dice Pinocchio.', english: '"The theatre is more fun than school!" says Pinocchio.' },
    { italian: 'Pinocchio non va a scuola. Va al teatro.', english: 'Pinocchio does not go to school. He goes to the theatre.' },
    { italian: 'Poi incontra due animali. Un gatto e una volpe.', english: 'Then he meets two animals. A cat and a fox.' },
    { italian: '"Vuoi diventare ricco?" dice la volpe.', english: '"Do you want to become rich?" says the fox.' },
    { italian: '"Sì!" dice Pinocchio.', english: '"Yes!" says Pinocchio.' },
    { italian: '"Pianta le monete nel campo. Domani hai un albero di oro."', english: '"Plant the coins in the field. Tomorrow you have a tree of gold."' },
    { italian: 'Pinocchio pianta le monete. Ma non cresce niente.', english: 'Pinocchio plants the coins. But nothing grows.' },
    { italian: 'Il gatto e la volpe rubano le monete.', english: 'The cat and the fox steal the coins.' },
    { italian: 'Pinocchio è triste.', english: 'Pinocchio is sad.' },
    { italian: 'Una fata appare. Ha i capelli blu.', english: 'A fairy appears. She has blue hair.' },
    { italian: '"Perché non sei a scuola?" chiede la fata.', english: '"Why are you not at school?" asks the fairy.' },
    { italian: '"Sono andato a scuola," dice Pinocchio.', english: '"I went to school," says Pinocchio.' },
    { italian: 'È una bugia. Il naso di Pinocchio cresce.', english: 'It is a lie. Pinocchio\'s nose grows.' },
    { italian: '"Il tuo naso cresce quando dici bugie," dice la fata.', english: '"Your nose grows when you tell lies," says the fairy.' },
    { italian: 'Pinocchio ha paura. "Mi dispiace! Non dico più bugie!"', english: 'Pinocchio is afraid. "I\'m sorry! I won\'t tell lies anymore!"' },
    { italian: 'Il naso torna piccolo.', english: 'The nose becomes small again.' },
    { italian: 'Ma Pinocchio fa ancora errori.', english: 'But Pinocchio still makes mistakes.' },
    { italian: 'Un giorno, va in un paese dove i bambini non studiano mai.', english: 'One day, he goes to a country where children never study.' },
    { italian: 'Giocano tutto il giorno. Ma poi diventano asini.', english: 'They play all day. But then they become donkeys.' },
    { italian: 'Pinocchio diventa un asino!', english: 'Pinocchio becomes a donkey!' },
    { italian: '"Aiuto!" urla Pinocchio.', english: '"Help!" shouts Pinocchio.' },
    { italian: 'La fata lo salva. Pinocchio torna un bambino di legno.', english: 'The fairy saves him. Pinocchio becomes a wooden boy again.' },
    { italian: 'Poi Pinocchio cade nel mare.', english: 'Then Pinocchio falls into the sea.' },
    { italian: 'Un grande pesce lo mangia.', english: 'A big fish eats him.' },
    { italian: 'Dentro il pesce, Pinocchio trova Geppetto!', english: 'Inside the fish, Pinocchio finds Geppetto!' },
    { italian: '"Papà! Sei qui!" dice Pinocchio.', english: '"Papa! You are here!" says Pinocchio.' },
    { italian: 'Insieme, escono dal pesce.', english: 'Together, they escape from the fish.' },
    { italian: 'Pinocchio porta Geppetto a casa.', english: 'Pinocchio carries Geppetto home.' },
    { italian: '"Da oggi sono bravo. Vado a scuola. Non dico bugie."', english: '"From today I am good. I go to school. I don\'t tell lies."' },
    { italian: 'La fata vede che Pinocchio è cambiato.', english: 'The fairy sees that Pinocchio has changed.' },
    { italian: '"Sei un bravo ragazzo," dice la fata.', english: '"You are a good boy," says the fairy.' },
    { italian: 'Pinocchio si sveglia. Non è più di legno.', english: 'Pinocchio wakes up. He is no longer made of wood.' },
    { italian: 'È un bambino vero!', english: 'He is a real boy!' },
    { italian: 'Geppetto piange di gioia.', english: 'Geppetto cries with joy.' },
    { italian: 'Pinocchio abbraccia il suo papà.', english: 'Pinocchio hugs his papa.' }
  ]
};

// Riccioli d'Oro - Goldilocks
const riccioliDoro: Story = {
  id: 'riccioli-doro',
  title: 'Riccioli d\'Oro',
  englishTitle: 'Goldilocks and the Three Bears',
  level: 'A1',
  lines: [
    { italian: 'C\'era una volta una bambina con capelli dorati.', english: 'Once upon a time there was a girl with golden hair.' },
    { italian: 'Il suo nome è Riccioli d\'Oro.', english: 'Her name is Goldilocks.' },
    { italian: 'Un giorno, cammina nella foresta.', english: 'One day, she walks in the forest.' },
    { italian: 'Vede una casa piccola.', english: 'She sees a small house.' },
    { italian: 'Bussa alla porta. Nessuno risponde.', english: 'She knocks on the door. No one answers.' },
    { italian: 'Entra nella casa.', english: 'She enters the house.' },
    { italian: 'Nella cucina vede tre ciotole di porridge.', english: 'In the kitchen she sees three bowls of porridge.' },
    { italian: 'Assaggia il porridge del papà orso. È troppo caldo!', english: 'She tastes Papa Bear\'s porridge. It\'s too hot!' },
    { italian: 'Assaggia il porridge della mamma orsa. È troppo freddo!', english: 'She tastes Mama Bear\'s porridge. It\'s too cold!' },
    { italian: 'Assaggia il porridge del piccolo orso. È perfetto!', english: 'She tastes Baby Bear\'s porridge. It\'s perfect!' },
    { italian: 'Mangia tutto il porridge del piccolo orso.', english: 'She eats all of Baby Bear\'s porridge.' },
    { italian: 'Poi vuole sedersi.', english: 'Then she wants to sit down.' },
    { italian: 'Prova la sedia del papà orso. È troppo grande!', english: 'She tries Papa Bear\'s chair. It\'s too big!' },
    { italian: 'Prova la sedia della mamma orsa. È troppo alta!', english: 'She tries Mama Bear\'s chair. It\'s too high!' },
    { italian: 'Prova la sedia del piccolo orso. È perfetta!', english: 'She tries Baby Bear\'s chair. It\'s perfect!' },
    { italian: 'Ma la sedia si rompe!', english: 'But the chair breaks!' },
    { italian: 'Riccioli d\'Oro è stanca.', english: 'Goldilocks is tired.' },
    { italian: 'Va in camera da letto.', english: 'She goes to the bedroom.' },
    { italian: 'Prova il letto del papà orso. È troppo duro!', english: 'She tries Papa Bear\'s bed. It\'s too hard!' },
    { italian: 'Prova il letto della mamma orsa. È troppo morbido!', english: 'She tries Mama Bear\'s bed. It\'s too soft!' },
    { italian: 'Prova il letto del piccolo orso. È perfetto!', english: 'She tries Baby Bear\'s bed. It\'s perfect!' },
    { italian: 'Si addormenta.', english: 'She falls asleep.' },
    { italian: 'Gli orsi tornano a casa.', english: 'The bears come home.' },
    { italian: '"Qualcuno ha mangiato il mio porridge!" dice il papà orso.', english: '"Someone ate my porridge!" says Papa Bear.' },
    { italian: '"Qualcuno ha mangiato il mio porridge!" dice la mamma orsa.', english: '"Someone ate my porridge!" says Mama Bear.' },
    { italian: '"Qualcuno ha mangiato tutto il mio porridge!" dice il piccolo orso.', english: '"Someone ate all my porridge!" says Baby Bear.' },
    { italian: '"Qualcuno si è seduto sulla mia sedia!" dice il papà orso.', english: '"Someone sat on my chair!" says Papa Bear.' },
    { italian: '"Qualcuno si è seduto sulla mia sedia!" dice la mamma orsa.', english: '"Someone sat on my chair!" says Mama Bear.' },
    { italian: '"Qualcuno si è seduto sulla mia sedia e l\'ha rotta!" dice il piccolo orso.', english: '"Someone sat on my chair and broke it!" says Baby Bear.' },
    { italian: '"Qualcuno ha dormito nel mio letto!" dice il papà orso.', english: '"Someone slept in my bed!" says Papa Bear.' },
    { italian: '"Qualcuno ha dormito nel mio letto!" dice la mamma orsa.', english: '"Someone slept in my bed!" says Mama Bear.' },
    { italian: '"Qualcuno dorme nel mio letto!" urla il piccolo orso.', english: '"Someone is sleeping in my bed!" shouts Baby Bear.' },
    { italian: 'Riccioli d\'Oro si sveglia.', english: 'Goldilocks wakes up.' },
    { italian: 'Vede tre orsi!', english: 'She sees three bears!' },
    { italian: 'Ha molta paura!', english: 'She is very afraid!' },
    { italian: 'Corre via dalla casa.', english: 'She runs away from the house.' },
    { italian: 'Non torna mai più.', english: 'She never comes back.' }
  ]
};

// Dante's Inferno (excerpt)
const danteInferno: Story = {
  id: 'dante-inferno',
  title: 'Inferno di Dante',
  englishTitle: "Dante's Inferno (excerpt)",
  level: 'B1-B2',
  lines: [
    { italian: 'Nel mezzo del cammin di nostra vita', english: 'Midway upon the journey of our life' },
    { italian: 'mi ritrovai per una selva oscura,', english: 'I found myself within a forest dark,' },
    { italian: 'ché la diritta via era smarrita.', english: 'for the straightforward pathway had been lost.' },
    { italian: 'Ahi quanto a dir qual era è cosa dura', english: 'Ah me! how hard a thing it is to say' },
    { italian: 'esta selva selvaggia e aspra e forte', english: 'What was this forest savage, rough, and stern,' },
    { italian: 'che nel pensier rinova la paura!', english: 'which in the very thought renews the fear.' },
    { italian: 'Tant\'è amara che poco è più morte;', english: 'So bitter is it, death is little more;' },
    { italian: 'ma per trattar del ben ch\'i\' vi trovai,', english: 'But of the good to treat, which there I found,' },
    { italian: 'dirò de l\'altre cose ch\'i\' v\'ho scorte.', english: 'Speak will I of the other things I saw there.' },
    { italian: 'Io non so ben ridir com\'i\' v\'intrai,', english: 'I cannot well repeat how there I entered,' },
    { italian: 'tant\'era pien di sonno a quel punto', english: 'so full was I of slumber at the moment' },
    { italian: 'che la verace via abbandonai.', english: 'in which I had abandoned the true way.' }
  ]
};

// Galileo Galilei
const galileo: Story = {
  id: 'galileo',
  title: 'Galileo Galilei',
  englishTitle: 'The Story of Galileo',
  level: 'A2',
  lines: [
    { italian: 'Galileo Galilei è un famoso scienziato italiano.', english: 'Galileo Galilei is a famous Italian scientist.' },
    { italian: 'Nasce a Pisa nel 1564.', english: 'He is born in Pisa in 1564.' },
    { italian: 'Da giovane, studia matematica e medicina.', english: 'As a young man, he studies mathematics and medicine.' },
    { italian: 'Un giorno, nella cattedrale di Pisa, osserva una lampada.', english: 'One day, in the cathedral of Pisa, he observes a lamp.' },
    { italian: 'Nota che la lampada oscilla sempre allo stesso tempo.', english: 'He notices that the lamp always swings in the same time.' },
    { italian: 'Questa scoperta è importante per la scienza.', english: 'This discovery is important for science.' },
    { italian: 'Galileo inventa anche il telescopio.', english: 'Galileo also invents the telescope.' },
    { italian: 'Con il telescopio guarda il cielo.', english: 'With the telescope he looks at the sky.' },
    { italian: 'Vede le lune di Giove.', english: 'He sees the moons of Jupiter.' },
    { italian: 'Vede le fasi di Venere.', english: 'He sees the phases of Venus.' },
    { italian: 'Queste scoperte dimostrano che la Terra gira attorno al Sole.', english: 'These discoveries prove that the Earth revolves around the Sun.' },
    { italian: 'Ma la Chiesa non è d\'accordo.', english: 'But the Church does not agree.' },
    { italian: 'Dicono che la Terra è al centro dell\'universo.', english: 'They say that the Earth is at the center of the universe.' },
    { italian: 'Galileo deve difendere le sue idee.', english: 'Galileo must defend his ideas.' },
    { italian: 'Nel 1633, viene processato a Roma.', english: 'In 1633, he is tried in Rome.' },
    { italian: 'Deve abiurare, cioè dire che ha torto.', english: 'He must abjure, that is, say that he is wrong.' },
    { italian: 'Ma sussurra: "Eppur si muove!"', english: 'But he whispers: "And yet it moves!"' },
    { italian: 'Galileo muore nel 1642.', english: 'Galileo dies in 1642.' },
    { italian: 'Oggi è considerato il padre della scienza moderna.', english: 'Today he is considered the father of modern science.' }
  ]
};

// Leonardo da Vinci
const leonardo: Story = {
  id: 'leonardo',
  title: 'Leonardo da Vinci',
  englishTitle: 'The Life of Leonardo da Vinci',
  level: 'A2',
  lines: [
    { italian: 'Leonardo da Vinci è un grande artista e scienziato.', english: 'Leonardo da Vinci is a great artist and scientist.' },
    { italian: 'Nasce in Toscana nel 1452.', english: 'He is born in Tuscany in 1452.' },
    { italian: 'Da giovane, lavora a Firenze.', english: 'As a young man, he works in Florence.' },
    { italian: 'Studia con il maestro Verrocchio.', english: 'He studies with the master Verrocchio.' },
    { italian: 'Leonardo dipinge molti quadri famosi.', english: 'Leonardo paints many famous paintings.' },
    { italian: 'Il più famoso è la Gioconda.', english: 'The most famous is the Mona Lisa.' },
    { italian: 'La Gioconda è un ritratto di una donna con un sorriso misterioso.', english: 'The Mona Lisa is a portrait of a woman with a mysterious smile.' },
    { italian: 'Leonardo dipinge anche L\'Ultima Cena.', english: 'Leonardo also paints The Last Supper.' },
    { italian: 'È un affresco nel convento di Santa Maria delle Grazie a Milano.', english: 'It is a fresco in the convent of Santa Maria delle Grazie in Milan.' },
    { italian: 'Ma Leonardo non è solo un pittore.', english: 'But Leonardo is not only a painter.' },
    { italian: 'È anche un inventore.', english: 'He is also an inventor.' },
    { italian: 'Disegna macchine volanti.', english: 'He designs flying machines.' },
    { italian: 'Disegna macchine per la guerra.', english: 'He designs war machines.' },
    { italian: 'Studia l\'anatomia del corpo umano.', english: 'He studies the anatomy of the human body.' },
    { italian: 'Scrive i suoi appunti al contrario, da destra a sinistra.', english: 'He writes his notes backwards, from right to left.' },
    { italian: 'Muore in Francia nel 1519.', english: 'He dies in France in 1519.' },
    { italian: 'È considerato un genio universale.', english: 'He is considered a universal genius.' }
  ]
};

// Marco Polo
const marcoPolo: Story = {
  id: 'marco-polo',
  title: 'Marco Polo',
  englishTitle: 'The Travels of Marco Polo',
  level: 'A2',
  lines: [
    { italian: 'Marco Polo è un famoso esploratore veneziano.', english: 'Marco Polo is a famous Venetian explorer.' },
    { italian: 'Nasce a Venezia nel 1254.', english: 'He is born in Venice in 1254.' },
    { italian: 'Il padre e lo zio sono commercianti.', english: 'His father and uncle are merchants.' },
    { italian: 'Viaggiando in Asia, arrivano alla corte del Gran Khan.', english: 'Traveling in Asia, they arrive at the court of the Great Khan.' },
    { italian: 'Marco ha solo 17 anni quando parte con loro.', english: 'Marco is only 17 years old when he leaves with them.' },
    { italian: 'Il viaggio è lungo e pericoloso.', english: 'The journey is long and dangerous.' },
    { italian: 'Attraversano deserti e montagne.', english: 'They cross deserts and mountains.' },
    { italian: 'Dopo quattro anni, arrivano in Cina.', english: 'After four years, they arrive in China.' },
    { italian: 'Il Gran Khan li accoglie con grande onore.', english: 'The Great Khan welcomes them with great honor.' },
    { italian: 'Marco impara molte lingue.', english: 'Marco learns many languages.' },
    { italian: 'Il Khan lo manda in molte missioni.', english: 'The Khan sends him on many missions.' },
    { italian: 'Marco visita la Cina, il Tibet, il Myanmar e l\'India.', english: 'Marco visits China, Tibet, Myanmar, and India.' },
    { italian: 'Vede cose incredibili: palazzi d\'oro, strade di pietra, carta moneta.', english: 'He sees incredible things: golden palaces, stone roads, paper money.' },
    { italian: 'Rimane in Cina per 17 anni.', english: 'He stays in China for 17 years.' },
    { italian: 'Poi decide di tornare a Venezia.', english: 'Then he decides to return to Venice.' },
    { italian: 'Il viaggio di ritorno dura tre anni.', english: 'The return journey lasts three years.' },
    { italian: 'A Venezia, nessuno crede alle sue storie.', english: 'In Venice, no one believes his stories.' },
    { italian: 'Lo chiamano "Marco Milione" perché esagera.', english: 'They call him "Marco Million" because he exaggerates.' },
    { italian: 'Ma le sue avventure sono vere.', english: 'But his adventures are true.' },
    { italian: 'Il suo libro "Il Milione" ispira molti esploratori.', english: 'His book "The Million" inspires many explorers.' }
  ]
};

// Pompei
const pompei: Story = {
  id: 'pompei',
  title: 'Pompei',
  englishTitle: 'The Story of Pompeii',
  level: 'A2',
  lines: [
    { italian: 'Pompei è una città antica vicino a Napoli.', english: 'Pompeii is an ancient city near Naples.' },
    { italian: 'È una città romana molto importante.', english: 'It is a very important Roman city.' },
    { italian: 'Nel 79 d.C., il Vesuvio, un vulcano vicino, erutta.', english: 'In 79 AD, Vesuvius, a nearby volcano, erupts.' },
    { italian: 'La gente non sa che il Vesuvio è un vulcano.', english: 'People do not know that Vesuvius is a volcano.' },
    { italian: 'Pensa che sia solo una montagna.', english: 'They think it is just a mountain.' },
    { italian: 'Un mattino, c\'è un grande terremoto.', english: 'One morning, there is a big earthquake.' },
    { italian: 'Poi, il vulvio esplode.', english: 'Then, the volcano explodes.' },
    { italian: 'Una nube di cenere e pietre copre la città.', english: 'A cloud of ash and stones covers the city.' },
    { italian: 'La gente prova a scappare.', english: 'People try to escape.' },
    { italian: 'Ma è troppo tardi per molti.', english: 'But it is too late for many.' },
    { italian: 'La cenere copre tutto.', english: 'The ash covers everything.' },
    { italian: 'La città scompare per 1700 anni.', english: 'The city disappears for 1700 years.' },
    { italian: 'Nel 1748, un contadino scopre Pompei.', english: 'In 1748, a farmer discovers Pompeii.' },
    { italian: 'Gli archeologi iniziano a scavare.', english: 'Archaeologists begin to dig.' },
    { italian: 'Trovano case, strade, templi e teatri.', english: 'They find houses, streets, temples, and theaters.' },
    { italian: 'Trovano pitture bellissime.', english: 'They find beautiful paintings.' },
    { italian: 'Trovano anche i corpi delle persone.', english: 'They also find the bodies of people.' },
    { italian: 'La cenere ha conservato tutto.', english: 'The ash has preserved everything.' },
    { italian: 'Oggi Pompei è un sito archeologico famoso.', english: 'Today Pompeii is a famous archaeological site.' },
    { italian: 'Milioni di persone vengono a visitarla ogni anno.', english: 'Millions of people come to visit it every year.' }
  ]
};

// Romeo e Giulietta
const romeoGiulietta: Story = {
  id: 'romeo-giulietta',
  title: 'Romeo e Giulietta',
  englishTitle: 'Romeo and Juliet',
  level: 'B1',
  lines: [
    { italian: 'Romeo e Giulietta è una famosa tragedia di Shakespeare.', english: 'Romeo and Juliet is a famous tragedy by Shakespeare.' },
    { italian: 'La storia è ambientata a Verona, in Italia.', english: 'The story is set in Verona, Italy.' },
    { italian: 'Due famiglie, i Montecchi e i Capuleti, sono nemiche.', english: 'Two families, the Montagues and the Capulets, are enemies.' },
    { italian: 'Romeo è un Montecchio.', english: 'Romeo is a Montague.' },
    { italian: 'Giulietta è una Capuleti.', english: 'Juliet is a Capulet.' },
    { italian: 'Si incontrano a un ballo.', english: 'They meet at a ball.' },
    { italian: 'Si innamorano immediatamente.', english: 'They fall in love immediately.' },
    { italian: 'Ma le loro famiglie non possono sapere.', english: 'But their families cannot know.' },
    { italian: 'Si sposano in segreto.', english: 'They get married in secret.' },
    { italian: 'Poi Romeo uccide il cugino di Giulietta in un duello.', english: 'Then Romeo kills Juliet\'s cousin in a duel.' },
    { italian: 'Deve lasciare Verona.', english: 'He must leave Verona.' },
    { italian: 'Giulietta è disperata.', english: 'Juliet is desperate.' },
    { italian: 'Il padre vuole che sposi un altro uomo.', english: 'Her father wants her to marry another man.' },
    { italian: 'Giulietta ha un\'idea.', english: 'Juliet has an idea.' },
    { italian: 'Prende una pozione che la fa sembrare morta.', english: 'She takes a potion that makes her seem dead.' },
    { italian: 'La famiglia crede che sia morta.', english: 'The family believes she is dead.' },
    { italian: 'Romeo non sa del piano.', english: 'Romeo does not know about the plan.' },
    { italian: 'Trova Giulietta nel suo monumento funebre.', english: 'He finds Juliet in her tomb.' },
    { italian: 'Pensa che sia veramente morta.', english: 'He thinks she is really dead.' },
    { italian: 'Beve veleno e muore.', english: 'He drinks poison and dies.' },
    { italian: 'Giulietta si sveglia e trova Romeo morto.', english: 'Juliet wakes up and finds Romeo dead.' },
    { italian: 'Prende il pugnale di Romeo e si uccide.', english: 'She takes Romeo\'s dagger and kills herself.' },
    { italian: 'Le due famiglie trovano i giovani morti.', english: 'The two families find the young people dead.' },
    { italian: 'Capiscono che il loro odio ha causato questa tragedia.', english: 'They understand that their hatred caused this tragedy.' },
    { italian: 'Finalmente fanno la pace.', english: 'They finally make peace.' }
  ]
};

// La caverna di Platone
const cavernaPlatone: Story = {
  id: 'caverna-platone',
  title: 'La Caverna di Platone',
  englishTitle: "Plato's Allegory of the Cave",
  level: 'B1',
  lines: [
    { italian: 'Platone è un grande filosofo greco.', english: 'Plato is a great Greek philosopher.' },
    { italian: 'Scrive una famosa allegoria: la caverna.', english: 'He writes a famous allegory: the cave.' },
    { italian: 'Immagina uomini che vivono in una caverna.', english: 'Imagine men who live in a cave.' },
    { italian: 'Sono prigionieri da quando sono nati.', english: 'They have been prisoners since they were born.' },
    { italian: 'Sono legati e non possono muoversi.', english: 'They are tied up and cannot move.' },
    { italian: 'Guardano solo il muro davanti a loro.', english: 'They look only at the wall in front of them.' },
    { italian: 'Dietro di loro c\'è un fuoco.', english: 'Behind them is a fire.' },
    { italian: 'Tra il fuoco e i prigionieri passano oggetti.', english: 'Between the fire and the prisoners, objects pass by.' },
    { italian: 'I prigionieri vedono solo le ombre sul muro.', english: 'The prisoners see only the shadows on the wall.' },
    { italian: 'Credono che le ombre siano la realtà.', english: 'They believe the shadows are reality.' },
    { italian: 'Un giorno, un prigioniero si libera.', english: 'One day, a prisoner frees himself.' },
    { italian: 'Vede il fuoco. È accecato dalla luce.', english: 'He sees the fire. He is blinded by the light.' },
    { italian: 'Poi esce dalla caverna.', english: 'Then he exits the cave.' },
    { italian: 'Vede il sole. È ancora più accecato.', english: 'He sees the sun. He is even more blinded.' },
    { italian: 'Ma piano piano i suoi occhi si abituano.', english: 'But slowly his eyes get used to it.' },
    { italian: 'Vede il mondo vero: alberi, montagne, cielo.', english: 'He sees the true world: trees, mountains, sky.' },
    { italian: 'Capisce che le ombre erano solo illusioni.', english: 'He understands that the shadows were only illusions.' },
    { italian: 'Vuole tornare nella caverna per liberare gli altri.', english: 'He wants to return to the cave to free the others.' },
    { italian: 'Ma quando torna, non vede bene al buio.', english: 'But when he returns, he cannot see well in the dark.' },
    { italian: 'Gli altri prigionieri pensano che sia diventato cieco.', english: 'The other prisoners think he has become blind.' },
    { italian: 'Non vogliono uscire dalla caverna.', english: 'They do not want to leave the cave.' },
    { italian: 'Preferiscono le loro ombre familiari.', english: 'They prefer their familiar shadows.' },
    { italian: 'L\'allegoria insegna che la conoscenza vera richiede sforzo.', english: 'The allegory teaches that true knowledge requires effort.' }
  ]
};

export const stories: Story[] = [
  trePorcellini,
  pinocchio,
  riccioliDoro,
  danteInferno,
  galileo,
  leonardo,
  marcoPolo,
  pompei,
  romeoGiulietta,
  cavernaPlatone,
];

export const getStoryById = (id: string): Story | undefined => {
  return stories.find(s => s.id === id);
};

export const getStoriesByLevel = (level: string): Story[] => {
  return stories.filter(s => s.level.toLowerCase().includes(level.toLowerCase()));
};
