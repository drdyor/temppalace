export interface GrammarTag {
  text: string;
  type: string;
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
  // ==================== SELF (About Me) ====================
  "name-card_a2": {
    zoneId: "name-card",
    zoneName: "Name Card",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Ciao! Mi chiamo Marco. E tu, come ti chiami?", en: "Hi! My name is Marco. And you, what's your name?" },
      { speaker: "Amico", it: "Ciao Marco! Io sono Anna. Piacere di conoscerti.", en: "Hi Marco! I'm Anna. Nice to meet you." },
      { speaker: "Tu", it: "Piacere mio. Di dove sei?", en: "My pleasure. Where are you from?" },
      { speaker: "Amico", it: "Sono di Milano, ma ora abito a Roma. E tu?", en: "I'm from Milan, but now I live in Rome. And you?" },
      { speaker: "Tu", it: "Io sono spagnolo. Abito qui da tre mesi.", en: "I'm Spanish. I've been living here for three months." },
      { speaker: "Amico", it: "Che bello! Quanti anni hai?", en: "How nice! How old are you?" },
      { speaker: "Tu", it: "Ho ventisei anni. E tu ne hai?", en: "I'm twenty-six. And how old are you?" },
      { speaker: "Amico", it: "Io ne ho ventiquattro. Sei studente o lavori?", en: "I'm twenty-four. Are you a student or do you work?" },
      { speaker: "Tu", it: "Lavoro in un ristorante. Studio italiano la sera.", en: "I work in a restaurant. I study Italian in the evening." },
      { speaker: "Amico", it: "Ottimo! Sei molto gentile. Ecco il mio numero di telefono.", en: "Excellent! You're very kind. Here's my phone number." },
      { speaker: "Tu", it: "Grazie! Ti chiamo domani per un caffè.", en: "Thanks! I'll call you tomorrow for a coffee." },
      { speaker: "Amico", it: "Perfetto! A presto, Marco.", en: "Perfect! See you soon, Marco." }
    ]
  },
  "name-card_b1": {
    zoneId: "name-card",
    zoneName: "Name Card",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Ciao! Permetto di presentarmi: mi chiamo Marco Rossi. E tu?", en: "Hi! Allow me to introduce myself: my name is Marco Rossi. And you?" },
      { speaker: "Amico", it: "Ciao Marco, io sono Anna Bianchi. Piacere di fare la tua conoscenza.", en: "Hi Marco, I'm Anna Bianchi. Pleased to make your acquaintance." },
      { speaker: "Tu", it: "Il piacere è tutto mio. Di dove sei originaria?", en: "The pleasure is all mine. Where are you originally from?" },
      { speaker: "Amico", it: "Sono milanese di nascita, ma ormai sono romana d'adozione. E tu?", en: "I'm Milanese by birth, but by now I'm Roman by adoption. And you?" },
      { speaker: "Tu", it: "Sono spagnolo, di Madrid. Mi sono trasferito qui per lavoro.", en: "I'm Spanish, from Madrid. I moved here for work." },
      { speaker: "Amico", it: "Che interessante! Quanti anni hai, se posso chiedere?", en: "How interesting! How old are you, if I may ask?" },
      { speaker: "Tu", it: "Ho ventisei anni, compiuti a febbraio. E tu?", en: "I'm twenty-six, turned in February. And you?" },
      { speaker: "Amico", it: "Io ne ho ventiquattro. Fai lo studente o lavori già?", en: "I'm twenty-four. Are you a student or do you already work?" },
      { speaker: "Tu", it: "Attualmente lavoro come cuoco in un ristorante vicino al centro. La sera frequento un corso di italiano.", en: "Currently I work as a cook in a restaurant near the center. In the evenings I attend an Italian course." },
      { speaker: "Amico", it: "Che bello! Allora conosci già molti ristoranti buoni. Ti va di darci un appuntamento per un caffè?", en: "How nice! So you already know many good restaurants. Would you like to meet for a coffee?" },
      { speaker: "Tu", it: "Volentieri! Dammi il tuo numero, così ti scrivo su WhatsApp.", en: "Gladly! Give me your number, so I'll text you on WhatsApp." },
      { speaker: "Amico", it: "Ecco il mio contatto. A domani allora!", en: "Here's my contact. See you tomorrow then!" }
    ]
  },
  "mirror-self_a2": {
    zoneId: "mirror-self",
    zoneName: "The Mirror",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Guarda questo specchio. Come mi vedo oggi?", en: "Look at this mirror. How do I look today?" },
      { speaker: "Amico", it: "Ti vedo bene! Sei sempre alto e magro.", en: "You look good! You're always tall and thin." },
      { speaker: "Tu", it: "Sì, ma i miei capelli sono troppo lunghi. Devo tagliarli.", en: "Yes, but my hair is too long. I need to cut it." },
      { speaker: "Amico", it: "No, stanno bene così. Hai gli occhi azzurri, vero?", en: "No, they look fine like this. You have blue eyes, right?" },
      { speaker: "Tu", it: "Sì, come mia madre. Mia sorella invece ha gli occhi marroni.", en: "Yes, like my mother. My sister, on the other hand, has brown eyes." },
      { speaker: "Amico", it: "Interessante! Sei più alto di tuo fratello?", en: "Interesting! Are you taller than your brother?" },
      { speaker: "Tu", it: "Sì, sono più alto, ma lui è più forte. Fa molto sport.", en: "Yes, I'm taller, but he's stronger. He does a lot of sports." },
      { speaker: "Amico", it: "Anch'io voglio essere più forte. Devo allenarmi di più!", en: "I also want to be stronger. I need to work out more!" },
      { speaker: "Tu", it: "Andiamo in palestra insieme domani?", en: "Shall we go to the gym together tomorrow?" },
      { speaker: "Amico", it: "Buona idea! A che ora ci vediamo?", en: "Good idea! What time shall we meet?" },
      { speaker: "Tu", it: "Alle sette di sera, davanti allo specchio!", en: "At seven in the evening, in front of the mirror!" },
      { speaker: "Amico", it: "Perfetto, non mancare!", en: "Perfect, don't miss it!" }
    ]
  },
  "mirror-self_b1": {
    zoneId: "mirror-self",
    zoneName: "The Mirror",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Guardati in questo specchio. Come ti sembra il tuo look oggi?", en: "Look at yourself in this mirror. How do you like your look today?" },
      { speaker: "Amico", it: "Onestamente? Ti vedo in forma. Sei alto e magro come sempre.", en: "Honestly? You look in shape. You're tall and thin as always." },
      { speaker: "Tu", it: "Grazie, però penso che i miei capelli siano diventati troppo lunghi. Dovrei tagliarli.", en: "Thanks, but I think my hair has become too long. I should cut it." },
      { speaker: "Amico", it: "Lascia stare, stanno bene così. Tra l'altro, hai degli occhi azzurri molto belli.", en: "Leave it, they look fine like this. Besides, you have very beautiful blue eyes." },
      { speaker: "Tu", it: "Sì, li ho ereditati da mia madre. Mia sorella invece ha gli occhi marroni come mio padre.", en: "Yes, I inherited them from my mother. My sister, on the other hand, has brown eyes like my father." },
      { speaker: "Amico", it: "Fascinante! E tuo fratello? È più alto o più basso di te?", en: "Fascinating! And your brother? Is he taller or shorter than you?" },
      { speaker: "Tu", it: "Sono più alto io, ma lui è decisamente più forte. Si allena quasi ogni giorno.", en: "I'm taller, but he's definitely stronger. He works out almost every day." },
      { speaker: "Amico", it: "Anch'io dovrei fare più attività fisica. Vorrei essere più in forma.", en: "I should also do more physical activity. I'd like to be more in shape." },
      { speaker: "Tu", it: "Perché non vieni in palestra con me domani sera? Potremmo allenarci insieme.", en: "Why don't you come to the gym with me tomorrow evening? We could work out together." },
      { speaker: "Amico", it: "Mi piace l'idea! A che ora ci troviamo?", en: "I like the idea! What time do we meet?" },
      { speaker: "Tu", it: "Alle sette, davanti allo specchio dello spogliatoio!", en: "At seven, in front of the locker room mirror!" },
      { speaker: "Amico", it: "D'accordo, ci sarò. Non vedo l'ora!", en: "Alright, I'll be there. I can't wait!" }
    ]
  },
  "hobby-corner_a2": {
    zoneId: "hobby-corner",
    zoneName: "Hobby Corner",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Cosa ti piace fare nel tempo libero?", en: "What do you like to do in your free time?" },
      { speaker: "Amico", it: "Mi piace molto la musica. Suono la chitarra.", en: "I really like music. I play the guitar." },
      { speaker: "Tu", it: "Che bello! Io preferisco lo sport. Gioco a calcio il sabato.", en: "How nice! I prefer sports. I play soccer on Saturdays." },
      { speaker: "Amico", it: "Sei bravo? Io non so giocare a calcio.", en: "Are you good? I don't know how to play soccer." },
      { speaker: "Tu", it: "Non sono bravissimo, ma mi diverto. E tu, fai altri sport?", en: "I'm not very good, but I have fun. And you, do you do other sports?" },
      { speaker: "Amico", it: "Sì, nuoto due volte a settimana. E tu sai nuotare?", en: "Yes, I swim twice a week. And do you know how to swim?" },
      { speaker: "Tu", it: "Sì, ma preferisco sciare in inverno. Amo la neve!", en: "Yes, but I prefer skiing in winter. I love the snow!" },
      { speaker: "Amico", it: "Anch'io! Andiamo a sciare insieme a dicembre?", en: "Me too! Shall we go skiing together in December?" },
      { speaker: "Tu", it: "Ottima idea! Dopo sciare, possiamo leggere un libro.", en: "Great idea! After skiing, we can read a book." },
      { speaker: "Amico", it: "Tu leggi molto? Io leggo solo fumetti.", en: "Do you read a lot? I only read comics." },
      { speaker: "Tu", it: "Anche i fumetti vanno bene. L'importante è riposare la mente.", en: "Comics are fine too. The important thing is to rest the mind." },
      { speaker: "Amico", it: "Hai ragione. Ogni tanto bisogna rilassarsi!", en: "You're right. Every now and then you need to relax!" }
    ]
  },
  "hobby-corner_b1": {
    zoneId: "hobby-corner",
    zoneName: "Hobby Corner",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Dimmi, cosa ti appassiona nel tempo libero?", en: "Tell me, what are you passionate about in your free time?" },
      { speaker: "Amico", it: "Sono appassionato di musica. Suono la chitarra da quando avevo dodici anni.", en: "I'm passionate about music. I've been playing the guitar since I was twelve." },
      { speaker: "Tu", it: "Impressionante! Io sono più orientato verso lo sport. Gioco a calcio ogni sabato con gli amici.", en: "Impressive! I'm more oriented toward sports. I play soccer every Saturday with friends." },
      { speaker: "Amico", it: "Sei bravo a calcio? Io purtroppo non ho mai imparato a giocare bene.", en: "Are you good at soccer? Unfortunately I never learned to play well." },
      { speaker: "Tu", it: "Non sono un campione, ma mi diverto tantissimo. Lo sport mi aiuta a scaricare lo stress.", en: "I'm not a champion, but I have a lot of fun. Sports help me release stress." },
      { speaker: "Amico", it: "Capisco. Io nuoto due volte a settimana per mantenermi in forma.", en: "I understand. I swim twice a week to stay in shape." },
      { speaker: "Tu", it: "Nuoti bene? Io so nuotare, ma preferisco sciare in inverno. C'è qualcosa di magico nella neve.", en: "Do you swim well? I know how to swim, but I prefer skiing in winter. There's something magical about snow." },
      { speaker: "Amico", it: "Sono d'accordo! Dovremmo organizzare una settimana bianca a dicembre.", en: "I agree! We should organize a ski trip in December." },
      { speaker: "Tu", it: "Mi piace l'idea. La sera, dopo una giornata sugli sci, potremmo leggere qualcosa di interessante.", en: "I like the idea. In the evening, after a day on the slopes, we could read something interesting." },
      { speaker: "Amico", it: "Tu leggi molto? Io ammetto di leggere solo fumetti e qualche romanzo leggero.", en: "Do you read a lot? I admit I only read comics and some light novels." },
      { speaker: "Tu", it: "Non c'è nulla di male. La lettura, in ogni forma, serve a riposare la mente.", en: "There's nothing wrong with that. Reading, in any form, serves to rest the mind." },
      { speaker: "Amico", it: "Hai perfettamente ragione. Dopo tutto, il tempo libero serve proprio a questo: rilassarsi e ricaricarsi.", en: "You're absolutely right. After all, free time is for exactly that: relaxing and recharging." }
    ]
  },
  "family-photo_a2": {
    zoneId: "family-photo",
    zoneName: "Family Photo",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Guarda questa foto di famiglia. Chi è questa donna?", en: "Look at this family photo. Who is this woman?" },
      { speaker: "Amico", it: "È mia madre. È molto gentile e simpatica.", en: "It's my mother. She's very kind and nice." },
      { speaker: "Tu", it: "E l'uomo accanto a lei?", en: "And the man next to her?" },
      { speaker: "Amico", it: "Quello è mio padre. Lavora come insegnante.", en: "That's my father. He works as a teacher." },
      { speaker: "Tu", it: "Che bello! Hai fratelli o sorelle?", en: "How nice! Do you have brothers or sisters?" },
      { speaker: "Amico", it: "Ho un fratello maggiore e una sorella minore.", en: "I have an older brother and a younger sister." },
      { speaker: "Tu", it: "E tu sei sposato?", en: "And are you married?" },
      { speaker: "Amico", it: "No, non ancora. Vivo ancora con i miei genitori.", en: "No, not yet. I still live with my parents." },
      { speaker: "Tu", it: "Anch'io. I miei genitori abitano in campagna.", en: "Me too. My parents live in the countryside." },
      { speaker: "Amico", it: "Che bello la campagna! Hai anche nonni?", en: "How nice is the countryside! Do you also have grandparents?" },
      { speaker: "Tu", it: "Sì, mia nonna vive con noi. Ha novant'anni!", en: "Yes, my grandmother lives with us. She's ninety years old!" },
      { speaker: "Amico", it: "Wow, è una nonna fortunata. La famiglia è importante.", en: "Wow, she's a lucky grandmother. Family is important." }
    ]
  },
  "family-photo_b1": {
    zoneId: "family-photo",
    zoneName: "Family Photo",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Guarda questa bella foto di famiglia. Chi è questa signora elegante?", en: "Look at this beautiful family photo. Who is this elegant lady?" },
      { speaker: "Amico", it: "È mia madre. È una persona molto gentile e sempre disponibile con tutti.", en: "It's my mother. She's a very kind person and always helpful with everyone." },
      { speaker: "Tu", it: "E l'uomo con gli occhiali accanto a lei? Sembra molto serio.", en: "And the man with glasses next to her? He looks very serious." },
      { speaker: "Amico", it: "Quello è mio padre. In realtà è molto simpatico, lavora come insegnante di storia.", en: "That's my father. Actually he's very nice, he works as a history teacher." },
      { speaker: "Tu", it: "Che professione interessante! Hai anche fratelli o sorelle?", en: "What an interesting profession! Do you also have brothers or sisters?" },
      { speaker: "Amico", it: "Sì, ho un fratello maggiore che vive all'estero e una sorella minore che studia all'università.", en: "Yes, I have an older brother who lives abroad and a younger sister who studies at university." },
      { speaker: "Tu", it: "E tu sei sposato o vivi da solo?", en: "And are you married or do you live alone?" },
      { speaker: "Amico", it: "No, non sono sposato e per ora vivo ancora con i miei genitori. È più economico.", en: "No, I'm not married and for now I still live with my parents. It's more economical." },
      { speaker: "Tu", it: "Lo capisco perfettamente. Anch'io vivo con i miei genitori, che abitano in campagna vicino a Bologna.", en: "I understand perfectly. I also live with my parents, who live in the countryside near Bologna." },
      { speaker: "Amico", it: "Che fortuna! La campagna è bellissima. Hai anche nonni in vita?", en: "How lucky! The countryside is beautiful. Do you also have living grandparents?" },
      { speaker: "Tu", it: "Sì, mia nonna materna vive con noi. Ha novant'anni ed è piena di energia!", en: "Yes, my maternal grandmother lives with us. She's ninety years old and full of energy!" },
      { speaker: "Amico", it: "Che meraviglia! Avere una famiglia numerosa e unita è un vero tesoro.", en: "How wonderful! Having a large and united family is a real treasure." }
    ]
  },
  "desk-work_a2": {
    zoneId: "desk-work",
    zoneName: "Work Desk",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Cosa fai nella vita? Lavori o studi?", en: "What do you do in life? Do you work or study?" },
      { speaker: "Amico", it: "Lavoro in un ufficio. Sono segretaria.", en: "I work in an office. I'm a secretary." },
      { speaker: "Tu", it: "Ti piace il tuo lavoro?", en: "Do you like your job?" },
      { speaker: "Amico", it: "Sì, è interessante, ma è un po' stressante.", en: "Yes, it's interesting, but it's a bit stressful." },
      { speaker: "Tu", it: "Capisco. Io invece sono studente. Studio medicina.", en: "I understand. I'm a student instead. I study medicine." },
      { speaker: "Amico", it: "Che fatica! Quanti anni di università devi fare?", en: "What hard work! How many years of university do you have to do?" },
      { speaker: "Tu", it: "Sei anni. Sono al terzo anno ora.", en: "Six years. I'm in the third year now." },
      { speaker: "Amico", it: "Bravo! E dopo vuoi fare il medico?", en: "Good for you! And after do you want to be a doctor?" },
      { speaker: "Tu", it: "Sì, spero di lavorare in un ospedale grande.", en: "Yes, I hope to work in a big hospital." },
      { speaker: "Amico", it: "Ottimo! I tuoi colleghi sono simpatici?", en: "Excellent! Are your colleagues nice?" },
      { speaker: "Tu", it: "Sì, abbiamo un buon rapporto. Studiamo insieme spesso.", en: "Yes, we have a good relationship. We often study together." },
      { speaker: "Amico", it: "È importante avere buoni colleghi. In bocca al lupo!", en: "It's important to have good colleagues. Good luck!" }
    ]
  },
  "desk-work_b1": {
    zoneId: "desk-work",
    zoneName: "Work Desk",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Dimmi un po', cosa fai nella vita? Lavori già o sei ancora in fase di studi?", en: "Tell me, what do you do in life? Do you already work or are you still studying?" },
      { speaker: "Amico", it: "Attualmente lavoro come segretaria in un ufficio nel centro della città.", en: "Currently I work as a secretary in an office in the city center." },
      { speaker: "Tu", it: "Ti trovi bene? Ti piace l'ambiente di lavoro?", en: "Do you like it there? Do you like the work environment?" },
      { speaker: "Amico", it: "Sì, il lavoro è interessante, anche se a volte può essere piuttosto stressante.", en: "Yes, the work is interesting, although sometimes it can be quite stressful." },
      { speaker: "Tu", it: "Lo immagino. Io invece sono ancora studente. Frequento la facoltà di medicina.", en: "I can imagine. I'm still a student instead. I attend the faculty of medicine." },
      { speaker: "Amico", it: "Che impegno! Quanti anni dura il tuo corso di laurea?", en: "What a commitment! How many years does your degree course last?" },
      { speaker: "Tu", it: "In totale sono sei anni. Sono al terzo anno, quindi sono a metà del percorso.", en: "In total it's six years. I'm in the third year, so I'm halfway through." },
      { speaker: "Amico", it: "Complimenti per la tua determinazione! Dopo la laurea vuoi specializzarti in qualcosa di specifico?", en: "Congratulations on your determination! After graduation do you want to specialize in something specific?" },
      { speaker: "Tu", it: "Mi piacerebbe lavorare in un grande ospedale, magari in cardiologia. Ma è ancora presto per decidere.", en: "I'd like to work in a big hospital, maybe in cardiology. But it's still early to decide." },
      { speaker: "Amico", it: "Hai già dei colleghi di studio con cui ti trovi bene?", en: "Do you already have study colleagues you get along with?" },
      { speaker: "Tu", it: "Sì, siamo un gruppo affiatato. Ci aiutiamo a vicenda e studiamo insieme prima degli esami.", en: "Yes, we're a close-knit group. We help each other and study together before exams." },
      { speaker: "Amico", it: "È fondamentale avere un buon rapporto con i colleghi. Ti auguro buona fortuna per il tuo percorso!", en: "It's fundamental to have a good relationship with colleagues. I wish you good luck for your journey!" }
    ]
  },
  // ==================== DOCTOR (Health & Emergencies) ====================
  "reception_a2": {
    zoneId: "reception",
    zoneName: "Reception",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Buongiorno, ho un appuntamento con il dottor Rossi.", en: "Good morning, I have an appointment with Dr. Rossi." },
      { speaker: "Amico", it: "Buongiorno. Il suo nome, per favore?", en: "Good morning. Your name, please?" },
      { speaker: "Tu", it: "Marco Bianchi. Sono le dieci, giusto?", en: "Marco Bianchi. It's ten o'clock, right?" },
      { speaker: "Amico", it: "Sì, esatto. Il dottore la riceverà tra pochi minuti.", en: "Yes, exactly. The doctor will see you in a few minutes." },
      { speaker: "Tu", it: "Grazie. Devo compilare qualche modulo?", en: "Thank you. Do I need to fill out any forms?" },
      { speaker: "Amico", it: "Sì, ecco la scheda del paziente. Mi metta la firma qui.", en: "Yes, here's the patient card. Please sign here." },
      { speaker: "Tu", it: "Ecco fatto. È la prima volta che vengo in questa clinica.", en: "Done. It's the first time I've come to this clinic." },
      { speaker: "Amico", it: "Benvenuto allora. Si accomodi in sala d'attesa.", en: "Welcome then. Please have a seat in the waiting room." },
      { speaker: "Tu", it: "Va bene. Quanto tempo devo aspettare?", en: "Alright. How long do I have to wait?" },
      { speaker: "Amico", it: "Circa dieci minuti. Il dottore è in ritardo oggi.", en: "About ten minutes. The doctor is running late today." },
      { speaker: "Tu", it: "Capisco. Non c'è problema, aspetto.", en: "I understand. No problem, I'll wait." },
      { speaker: "Amico", it: "La chiamo io quando è il suo turno. Si rilassi.", en: "I'll call you when it's your turn. Relax." }
    ]
  },
  "reception_b1": {
    zoneId: "reception",
    zoneName: "Reception",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Buongiorno, ho fissato un appuntamento con il dottor Rossi per le dieci.", en: "Good morning, I made an appointment with Dr. Rossi for ten o'clock." },
      { speaker: "Amico", it: "Buongiorno signore. Mi confermi il suo nome e cognome?", en: "Good morning sir. Can you confirm your first and last name?" },
      { speaker: "Tu", it: "Sono Marco Bianchi. Ho la prenotazione per una visita di controllo.", en: "I'm Marco Bianchi. I have a booking for a check-up visit." },
      { speaker: "Amico", it: "Perfetto, la trovo in elenco. Il dottore la riceverà tra pochi minuti.", en: "Perfect, I find you on the list. The doctor will see you in a few minutes." },
      { speaker: "Tu", it: "Bene. Devo compilare qualche modulo o portare documenti?", en: "Good. Do I need to fill out any forms or bring documents?" },
      { speaker: "Amico", it: "Sì, le serve solo questa scheda anagrafica. Mi metta la firma in fondo, per favore.", en: "Yes, you only need this personal data form. Please sign at the bottom." },
      { speaker: "Tu", it: "Ecco fatto. Devo dirle che è la prima volta che vengo in questa struttura.", en: "Done. I should tell you that it's the first time I've come to this facility." },
      { speaker: "Amico", it: "Non si preoccupi, è tutto molto semplice. Si accomodi in sala d'attesa e la chiameremo.", en: "Don't worry, everything is very simple. Please have a seat in the waiting room and we'll call you." },
      { speaker: "Tu", it: "Grazie. Potrebbe dirmi più o meno quanto tempo devo aspettare?", en: "Thank you. Could you tell me approximately how long I have to wait?" },
      { speaker: "Amico", it: "Dovrebbero essere circa dieci minuti. Il dottore è leggermente in ritardo a causa di un'urgenza.", en: "It should be about ten minutes. The doctor is slightly late due to an emergency." },
      { speaker: "Tu", it: "Capisco perfettamente. Le urgenze vanno sempre prima.", en: "I understand perfectly. Emergencies always come first." },
      { speaker: "Amico", it: "Esatto. Appena il dottore è libero, la faccio passare. Si rilassi.", en: "Exactly. As soon as the doctor is free, I'll let you through. Relax." }
    ]
  },
  "waiting-room_a2": {
    zoneId: "waiting-room",
    zoneName: "Waiting Room",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Scusi, è da molto che aspetta?", en: "Excuse me, have you been waiting long?" },
      { speaker: "Amico", it: "Circa venti minuti. Ho molto mal di testa.", en: "About twenty minutes. I have a bad headache." },
      { speaker: "Tu", it: "Mi dispiace. Ha preso qualche medicina?", en: "I'm sorry. Did you take any medicine?" },
      { speaker: "Amico", it: "Sì, un'aspirina stamattina, ma non è passato.", en: "Yes, an aspirin this morning, but it didn't go away." },
      { speaker: "Tu", it: "Che brutto! Io ho la tosse da tre giorni.", en: "How awful! I've had a cough for three days." },
      { speaker: "Amico", it: "Hai anche la febbre?", en: "Do you also have a fever?" },
      { speaker: "Tu", it: "Sì, ieri sera avevo trentotto gradi.", en: "Yes, last night I had thirty-eight degrees." },
      { speaker: "Amico", it: "Forse è influenza. Quest'anno c'è molta influenza.", en: "Maybe it's the flu. This year there's a lot of flu." },
      { speaker: "Tu", it: "Spero di no. Devo lavorare domani!", en: "I hope not. I have to work tomorrow!" },
      { speaker: "Amico", it: "Se è influenza, devi riposare a casa. La salute prima di tutto.", en: "If it's the flu, you need to rest at home. Health first of all." },
      { speaker: "Tu", it: "Hai ragione. Spero solo che il dottore arrivi presto.", en: "You're right. I just hope the doctor arrives soon." },
      { speaker: "Amico", it: "Anch'io. Questa sedia è scomoda!", en: "Me too. This chair is uncomfortable!" }
    ]
  },
  "waiting-room_b1": {
    zoneId: "waiting-room",
    zoneName: "Waiting Room",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Scusi, è da molto che aspetta? Sembra preoccupato.", en: "Excuse me, have you been waiting long? You seem worried." },
      { speaker: "Amico", it: "Sì, sono qui da circa venti minuti. Ho un mal di testa terribile che non mi passa.", en: "Yes, I've been here for about twenty minutes. I have a terrible headache that won't go away." },
      { speaker: "Tu", it: "Mi dispiace sentirlo. Ha provato a prendere qualcosa per il dolore?", en: "I'm sorry to hear that. Did you try taking something for the pain?" },
      { speaker: "Amico", it: "Ho preso un'aspirina stamattina, ma purtroppo non ha avuto effetto.", en: "I took an aspirin this morning, but unfortunately it had no effect." },
      { speaker: "Tu", it: "Che situazione difficile! Io sono qui per una tosse persistente. Dura da tre giorni ormai.", en: "What a difficult situation! I'm here for a persistent cough. It's been going on for three days now." },
      { speaker: "Amico", it: "Oh, e hai anche la febbre? I sintomi della influenza sono proprio questi.", en: "Oh, and do you also have a fever? The symptoms of the flu are exactly these." },
      { speaker: "Tu", it: "Sì, ieri sera la temperatura era salita a trentotto gradi. Ho sudato tutta la notte.", en: "Yes, last night the temperature had risen to thirty-eight degrees. I sweated all night." },
      { speaker: "Amico", it: "Sembra proprio influenza. Quest'anno c'è un'epidemia molto forte in città.", en: "It really sounds like the flu. This year there's a very strong epidemic in the city." },
      { speaker: "Tu", it: "Spero proprio di no. Domani dovrei essere al lavoro e non posso permettermi di stare a casa.", en: "I really hope not. Tomorrow I should be at work and I can't afford to stay home." },
      { speaker: "Amico", it: "Capisco, ma se è influenza il medico ti prescriverà il riposo assoluto. La salute viene prima di tutto.", en: "I understand, but if it's the flu the doctor will prescribe absolute rest. Health comes before everything." },
      { speaker: "Tu", it: "Ha ragione, non posso rischiare di peggiorare. Speriamo solo che il dottore ci riceva presto.", en: "You're right, I can't risk getting worse. Let's just hope the doctor sees us soon." },
      { speaker: "Amico", it: "Sono d'accordo. Tra l'altro, queste sedie sono davvero scomode per aspettare così tanto!", en: "I agree. Besides, these chairs are really uncomfortable for waiting so long!" }
    ]
  },
  "exam-room_a2": {
    zoneId: "exam-room",
    zoneName: "Exam Room",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Buongiorno dottore. Non mi sento bene.", en: "Good morning doctor. I don't feel well." },
      { speaker: "Amico", it: "Mi dica che sintomi ha. Dov'è il dolore?", en: "Tell me what symptoms you have. Where is the pain?" },
      { speaker: "Tu", it: "Mi fa male la testa e ho la gola infiammata.", en: "My head hurts and I have a sore throat." },
      { speaker: "Amico", it: "Ha la febbre? Le misuro la temperatura.", en: "Do you have a fever? I'll measure your temperature." },
      { speaker: "Tu", it: "Sì, stamattina avevo trentasette e mezzo.", en: "Yes, this morning I had thirty-seven point five." },
      { speaker: "Amico", it: "Respiri profondo, per favore. Ora dica 'ah'.", en: "Breathe deeply, please. Now say 'ah'." },
      { speaker: "Tu", it: "Aaaah... Secondo lei è grave?", en: "Aaaah... Do you think it's serious?" },
      { speaker: "Amico", it: "No, è solo un raffreddore forte. Le prescrivo delle pastiglie.", en: "No, it's just a bad cold. I'll prescribe some tablets for you." },
      { speaker: "Tu", it: "Devo prendere anche gli sciroppi?", en: "Do I also need to take syrups?" },
      { speaker: "Amico", it: "Sì, e deve bere molta acqua e riposare.", en: "Yes, and you must drink a lot of water and rest." },
      { speaker: "Tu", it: "Quanti giorni di riposo mi dà?", en: "How many days of rest do you give me?" },
      { speaker: "Amico", it: "Tre giorni. Se non passa, torni a farmi vedere.", en: "Three days. If it doesn't go away, come back to see me." }
    ]
  },
  "exam-room_b1": {
    zoneId: "exam-room",
    zoneName: "Exam Room",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Buongiorno dottore, grazie di ricevermi. Da qualche giorno non mi sento affatto bene.", en: "Good morning doctor, thank you for seeing me. For a few days I haven't been feeling well at all." },
      { speaker: "Amico", it: "Mi dica pure che sintomi presenta. Dov'è localizzato principalmente il dolore?", en: "Please tell me what symptoms you have. Where is the pain mainly located?" },
      { speaker: "Tu", it: "Mi fa molto male la testa, soprattutto la sera, e ho la gola completamente infiammata.", en: "My head hurts a lot, especially in the evening, and my throat is completely inflamed." },
      { speaker: "Amico", it: "Ha misurato la febbre? Le prendo subito la temperatura.", en: "Did you measure your fever? I'll take your temperature right away." },
      { speaker: "Tu", it: "Sì, stamattina avevo trentasette e mezzo, ma ieri sera era più alta.", en: "Yes, this morning I had thirty-seven point five, but last night it was higher." },
      { speaker: "Amico", it: "Mi faccia sentire. Respiri profondo, per favore. Ora apra bene la bocca e dica 'ah'.", en: "Let me listen. Breathe deeply, please. Now open your mouth wide and say 'ah'." },
      { speaker: "Tu", it: "Aaaah... Secondo lei è qualcosa di grave, dottore?", en: "Aaaah... Do you think it's something serious, doctor?" },
      { speaker: "Amico", it: "Si calmi, non è niente di preoccupante. Sembra essere solo un raffreddore piuttosto forte.", en: "Calm down, it's nothing to worry about. It seems to be just a rather strong cold." },
      { speaker: "Tu", it: "Devo prendere degli sciroppi o solo le pastiglie?", en: "Do I need to take syrups or only tablets?" },
      { speaker: "Amico", it: "Le prescrivo sia le pastiglie che uno sciroppo per la tosse. E deve assolutamente bere molta acqua e riposare.", en: "I'll prescribe both tablets and a cough syrup. And you absolutely must drink a lot of water and rest." },
      { speaker: "Tu", it: "Per quanti giorni di riposo ha bisogno il mio corpo?", en: "For how many days of rest does my body need?" },
      { speaker: "Amico", it: "Le do tre giorni di assoluto riposo. Se i sintomi non migliorano, torni senza esitazione a farmi vedere.", en: "I'll give you three days of absolute rest. If the symptoms don't improve, come back to see me without hesitation." }
    ]
  },
  "pharmacy-desk_a2": {
    zoneId: "pharmacy-desk",
    zoneName: "Pharmacy Desk",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Buongiorno, ho questa ricetta del dottore.", en: "Good morning, I have this prescription from the doctor." },
      { speaker: "Amico", it: "Grazie. Sono pastiglie per il mal di testa, giusto?", en: "Thank you. These are tablets for headaches, right?" },
      { speaker: "Tu", it: "Sì, e anche uno sciroppo per la tosse.", en: "Yes, and also a syrup for cough." },
      { speaker: "Amico", it: "Ho tutto in magazzino. Quante scatole vuole?", en: "I have everything in stock. How many boxes do you want?" },
      { speaker: "Tu", it: "Una scatola di pastiglie e una bottiglia di sciroppo.", en: "One box of tablets and one bottle of syrup." },
      { speaker: "Amico", it: "Bene. Le pastiglie sono tre al giorno, dopo i pasti.", en: "Good. The tablets are three a day, after meals." },
      { speaker: "Tu", it: "E lo sciroppo? Quante volte al giorno?", en: "And the syrup? How many times a day?" },
      { speaker: "Amico", it: "Due cucchiaiate, mattina e sera. Non dimentichi!", en: "Two spoonfuls, morning and evening. Don't forget!" },
      { speaker: "Tu", it: "Va bene. Ha anche delle gocce per il naso?", en: "Alright. Do you also have nose drops?" },
      { speaker: "Amico", it: "Sì, eccole. Sono naturali e non fanno male.", en: "Yes, here they are. They're natural and don't hurt." },
      { speaker: "Tu", it: "Perfetto. Quanto pago in totale?", en: "Perfect. How much do I pay in total?" },
      { speaker: "Amico", it: "Ventidue euro e cinquanta. Ecco lo scontrino.", en: "Twenty-two euros and fifty. Here's the receipt." }
    ]
  },
  "pharmacy-desk_b1": {
    zoneId: "pharmacy-desk",
    zoneName: "Pharmacy Desk",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Buongiorno, le porto questa ricetta medica del dottor Rossi.", en: "Good morning, I'm bringing you this medical prescription from Dr. Rossi." },
      { speaker: "Amico", it: "Grazie, la controllo subito. Vedo che sono pastiglie per il mal di testa e anti-infiammatori, corretto?", en: "Thank you, I'll check it right away. I see these are tablets for headaches and anti-inflammatories, correct?" },
      { speaker: "Tu", it: "Esatto, e dovrebbe esserci anche uno sciroppo per la tosse persistente.", en: "Exactly, and there should also be a syrup for the persistent cough." },
      { speaker: "Amico", it: "Perfetto, ho tutto disponibile in magazzino. Di quante scatole ha bisogno?", en: "Perfect, I have everything available in stock. How many boxes do you need?" },
      { speaker: "Tu", it: "Per le pastiglie una scatola, e per lo sciroppo una bottiglia da duecento millilitri.", en: "For the tablets one box, and for the syrup one two-hundred-milliliter bottle." },
      { speaker: "Amico", it: "Molto bene. Per le pastiglie la posologia è di tre volte al giorno, dopo i pasti principali.", en: "Very good. For the tablets the dosage is three times a day, after main meals." },
      { speaker: "Tu", it: "E per quanto riguarda lo sciroppo? Con che frequenza devo assumerlo?", en: "And regarding the syrup? How often do I need to take it?" },
      { speaker: "Amico", it: "Due cucchiaiate, una al mattino e una alla sera prima di dormire. Non salti mai le dosi.", en: "Two spoonfuls, one in the morning and one in the evening before sleeping. Never skip doses." },
      { speaker: "Tu", it: "Capisco. Avrebbe anche delle gocce nasali? Ho il naso molto chiuso.", en: "I understand. Would you also have nasal drops? My nose is very stuffy." },
      { speaker: "Amico", it: "Certamente, queste sono a base naturale e non creano dipendenza. Le consiglio vivamente.", en: "Certainly, these are natural-based and don't create dependence. I highly recommend them." },
      { speaker: "Tu", it: "Ottimo. Mi dica il totale, per favore.", en: "Excellent. Tell me the total, please." },
      { speaker: "Amico", it: "Sono ventidue euro e cinquanta centesimi. Ecco lo scontrino e la restituzione.", en: "That's twenty-two euros and fifty cents. Here's the receipt and your change." }
    ]
  },
  "first-aid_a2": {
    zoneId: "first-aid",
    zoneName: "First Aid",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Aiuto! Mi sono tagliato il dito con un coltello!", en: "Help! I cut my finger with a knife!" },
      { speaker: "Amico", it: "Calma! Non ti preoccupare. È profondo il taglio?", en: "Calm down! Don't worry. Is the cut deep?" },
      { speaker: "Tu", it: "No, è piccolo, ma sanguina molto.", en: "No, it's small, but it bleeds a lot." },
      { speaker: "Amico", it: "Metti il dito sotto l'acqua fredda. Poi asciuga bene.", en: "Put your finger under cold water. Then dry it well." },
      { speaker: "Tu", it: "Fatto. Ora che faccio?", en: "Done. Now what do I do?" },
      { speaker: "Amico", it: "Metto io il cerotto. Tieni fermo il dito.", en: "I'll put the band-aid on. Hold your finger still." },
      { speaker: "Tu", it: "Grazie. Mi serve anche una pomata?", en: "Thank you. Do I also need an ointment?" },
      { speaker: "Amico", it: "Sì, questa antisettica. Mettine un po' due volte al giorno.", en: "Yes, this antiseptic one. Put a little on twice a day." },
      { speaker: "Tu", it: "Dovrei andare in ospedale?", en: "Should I go to the hospital?" },
      { speaker: "Amico", it: "No, non è necessario. Ma se il dolore aumenta, chiama il medico.", en: "No, it's not necessary. But if the pain increases, call the doctor." },
      { speaker: "Tu", it: "Va bene. Grazie per l'aiuto!", en: "Alright. Thanks for the help!" },
      { speaker: "Amico", it: "Figurati! Stai più attento la prossima volta.", en: "Don't mention it! Be more careful next time." }
    ]
  },
  "first-aid_b1": {
    zoneId: "first-aid",
    zoneName: "First Aid",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Aiuto! Mi sono tagliato il dito con un coltello da cucina!", en: "Help! I cut my finger with a kitchen knife!" },
      { speaker: "Amico", it: "Stai calmo! Respira e non farti prendere dal panico. Il taglio è profondo?", en: "Stay calm! Breathe and don't panic. Is the cut deep?" },
      { speaker: "Tu", it: "Non credo sia profondo, è piccolo, ma sanguina in modo abbondante.", en: "I don't think it's deep, it's small, but it bleeds abundantly." },
      { speaker: "Amico", it: "Va bene, metti subito il dito sotto l'acqua fredda corrente per qualche minuto. Poi asciuga delicatamente.", en: "Alright, put your finger under cold running water right away for a few minutes. Then dry it gently." },
      { speaker: "Tu", it: "Ho fatto come hai detto. Ora cosa dovrei fare?", en: "I did as you said. Now what should I do?" },
      { speaker: "Amico", it: "Adesso applico io il cerotto. Tieni fermo il dito e non muoverlo.", en: "Now I'll apply the band-aid. Hold your finger still and don't move it." },
      { speaker: "Tu", it: "Grazie mille. Credi che mi serva anche una pomata per evitare infezioni?", en: "Thank you very much. Do you think I also need an ointment to avoid infections?" },
      { speaker: "Amico", it: "Sì, è meglio usare questa pomata antisettica. Applicane una piccola quantità due volte al giorno.", en: "Yes, it's better to use this antiseptic ointment. Apply a small amount twice a day." },
      { speaker: "Tu", it: "Secondo te dovrei andare al pronto soccorso o in ospedale?", en: "Do you think I should go to the emergency room or to the hospital?" },
      { speaker: "Amico", it: "Non è necessario per un taglio così piccolo. Tuttavia, se il dolore dovesse aumentare o ci fosse rossore, chiama immediatamente il medico.", en: "It's not necessary for such a small cut. However, if the pain should increase or there's redness, call the doctor immediately." },
      { speaker: "Tu", it: "Capisco, terrò tutto sotto controllo. Ti ringrazio davvero molto per l'aiuto!", en: "I understand, I'll keep everything under control. I really thank you very much for the help!" },
      { speaker: "Amico", it: "Non c'è di che! Però la prossima volta stai più attento quando usi i coltelli.", en: "You're welcome! But next time be more careful when using knives." }
    ]
  },
  // ==================== ENTRANCE HALL ====================
  "family-portrait_a2": {
    zoneId: "family-portrait",
    zoneName: "Family Portrait",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Guarda questo ritratto di famiglia. Quante persone ci sono?", en: "Look at this family portrait. How many people are there?" },
      { speaker: "Amico", it: "Ci sono sette persone: i nonni, i genitori, i figli e lo zio.", en: "There are seven people: the grandparents, the parents, the children and the uncle." },
      { speaker: "Tu", it: "L'uomo con i capelli bianchi è tuo nonno?", en: "The man with white hair is your grandfather?" },
      { speaker: "Amico", it: "Sì, mio nonno Giovanni. Ha ottantacinque anni.", en: "Yes, my grandfather Giovanni. He's eighty-five years old." },
      { speaker: "Tu", it: "E la donna accanto a lui? È tua nonna?", en: "And the woman next to him? Is she your grandmother?" },
      { speaker: "Amico", it: "Esatto, nonna Maria. È molto allegra.", en: "Exactly, grandmother Maria. She's very cheerful." },
      { speaker: "Tu", it: "Il ragazzo con la maglietta rossa è tuo fratello?", en: "The boy with the red t-shirt is your brother?" },
      { speaker: "Amico", it: "Sì, quello è Paolo. Ha quindici anni.", en: "Yes, that's Paolo. He's fifteen years old." },
      { speaker: "Tu", it: "E la ragazza accanto a tua madre?", en: "And the girl next to your mother?" },
      { speaker: "Amico", it: "È mia cugina Lucia. Viene a casa nostra ogni estate.", en: "It's my cousin Lucia. She comes to our house every summer." },
      { speaker: "Tu", it: "Che bella famiglia numerosa!", en: "What a beautiful large family!" },
      { speaker: "Amico", it: "Grazie! La famiglia è tutto per noi.", en: "Thank you! Family is everything to us." }
    ]
  },
  "family-portrait_b1": {
    zoneId: "family-portrait",
    zoneName: "Family Portrait",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Guarda che bellissimo ritratto di famiglia. Sai quante persone ci sono in totale?", en: "Look at this beautiful family portrait. Do you know how many people there are in total?" },
      { speaker: "Amico", it: "Contiamole insieme: i nonni paterni, i miei genitori, mio fratello, mia cugina e mio zio.", en: "Let's count them together: the paternal grandparents, my parents, my brother, my cousin and my uncle." },
      { speaker: "Tu", it: "L'uomo distinto con i capelli completamente bianchi deve essere tuo nonno, immagino.", en: "The distinguished man with completely white hair must be your grandfather, I imagine." },
      { speaker: "Amico", it: "Sì, è nonno Giovanni. Ha compiuto ottantacinque anni lo scorso mese ed è pieno di energia.", en: "Yes, that's grandfather Giovanni. He turned eighty-five last month and is full of energy." },
      { speaker: "Tu", it: "E la signora elegante con il sorriso accanto a lui è certamente tua nonna.", en: "And the elegant lady with the smile next to him is certainly your grandmother." },
      { speaker: "Amico", it: "Esatto, è nonna Maria. È la persona più allegra che conosca.", en: "Exactly, that's grandmother Maria. She's the cheeriest person I know." },
      { speaker: "Tu", it: "Chi è il ragazzo con la maglietta rossa in primo piano? Sembra molto giovane.", en: "Who is the boy with the red t-shirt in the foreground? He looks very young." },
      { speaker: "Amico", it: "È mio fratello minore Paolo. Ha appena compiuto quindici anni e frequenta il liceo.", en: "It's my younger brother Paolo. He just turned fifteen and attends high school." },
      { speaker: "Tu", it: "E la ragazza sorridente accanto a tua madre? Non l'ho mai vista prima.", en: "And the smiling girl next to your mother? I've never seen her before." },
      { speaker: "Amico", it: "È mia cugina Lucia, la figlia di mio zio. Viene a trovarci ogni estate dalle Marche.", en: "It's my cousin Lucia, my uncle's daughter. She comes to visit us every summer from the Marche region." },
      { speaker: "Tu", it: "È proprio una famiglia numerosa e affiatata. Deve essere bellissimo avere tutti questi parenti vicini.", en: "It's really a large and close-knit family. It must be beautiful to have all these relatives close by." },
      { speaker: "Amico", it: "Infatti per noi la famiglia è tutto. Ci vediamo sempre per le feste e i compleanni.", en: "Indeed for us family is everything. We always see each other for holidays and birthdays." }
    ]
  },
  "coat-rack_a2": {
    zoneId: "coat-rack",
    zoneName: "Coat Rack",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Che bel cappotto! È nuovo?", en: "What a nice coat! Is it new?" },
      { speaker: "Amico", it: "Sì, l'ho comprato ieri. È caldissimo.", en: "Yes, I bought it yesterday. It's very warm." },
      { speaker: "Tu", it: "Di che colore è? Sembra marrone scuro.", en: "What color is it? It looks dark brown." },
      { speaker: "Amico", it: "Sì, è marrone scuro. Ho anche una sciarpa nuova.", en: "Yes, it's dark brown. I also have a new scarf." },
      { speaker: "Tu", it: "Dove hai messo i guanti? Fa freddo fuori.", en: "Where did you put the gloves? It's cold outside." },
      { speaker: "Amico", it: "Sono nel cassetto. Aspetta, li prendo.", en: "They're in the drawer. Wait, I'll get them." },
      { speaker: "Tu", it: "Grazie. Ti piace il mio cappello rosso?", en: "Thanks. Do you like my red hat?" },
      { speaker: "Amico", it: "Sì, ti sta bene! È perfetto per l'inverno.", en: "Yes, it looks good on you! It's perfect for winter." },
      { speaker: "Tu", it: "Devo anche mettere la cintura?", en: "Do I also need to put on the belt?" },
      { speaker: "Amico", it: "Sì, con i jeans è meglio. Ecco la tua giacca.", en: "Yes, with jeans it's better. Here's your jacket." },
      { speaker: "Tu", it: "Perfetto, sono pronto per uscire.", en: "Perfect, I'm ready to go out." },
      { speaker: "Amico", it: "Andiamo! Non facciamo tardi.", en: "Let's go! Let's not be late." }
    ]
  },
  "coat-rack_b1": {
    zoneId: "coat-rack",
    zoneName: "Coat Rack",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Che splendido cappotto! È un acquisto recente?", en: "What a splendid coat! Is it a recent purchase?" },
      { speaker: "Amico", it: "Sì, l'ho acquistato ieri in centro. È di lana e tiene molto caldo.", en: "Yes, I bought it yesterday downtown. It's wool and keeps you very warm." },
      { speaker: "Tu", it: "Di che tonalità è esattamente? Sembra un marrone molto scuro, quasi nero.", en: "What shade is it exactly? It looks like a very dark brown, almost black." },
      { speaker: "Amico", it: "Esattamente, è marrone scuro. Ho comprato anche una sciarpa coordinata.", en: "Exactly, it's dark brown. I also bought a matching scarf." },
      { speaker: "Tu", it: "Hai per caso visto i miei guanti? Fuori fa un freddo terribile.", en: "Have you by any chance seen my gloves? It's terribly cold outside." },
      { speaker: "Amico", it: "Dovrebbero essere nel cassetto dell'ingresso. Fammi controllare, li prendo subito.", en: "They should be in the entrance drawer. Let me check, I'll get them right away." },
      { speaker: "Tu", it: "Grazie mille. Dimmi, cosa ne pensi del mio cappello rosso?", en: "Thank you very much. Tell me, what do you think of my red hat?" },
      { speaker: "Amico", it: "Ti sta benissimo! Il rosso è un colore che ti valorizza molto.", en: "It looks great on you! Red is a color that suits you very well." },
      { speaker: "Tu", it: "Credi che dovrei mettere anche la cintura con questo outfit?", en: "Do you think I should also wear the belt with this outfit?" },
      { speaker: "Amico", it: "Assolutamente sì, specialmente con i jeans. Ecco anche la tua giacca di pelle.", en: "Absolutely yes, especially with jeans. Here's also your leather jacket." },
      { speaker: "Tu", it: "Perfetto, ora sono completamente pronto per affrontare il freddo.", en: "Perfect, now I'm completely ready to face the cold." },
      { speaker: "Amico", it: "Bene, andiamo! Non vorrei fare tardi all'appuntamento.", en: "Good, let's go! I wouldn't want to be late for the appointment." }
    ]
  },
  "mirror_a2": {
    zoneId: "mirror",
    zoneName: "The Mirror",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Guardati nello specchio. Come ti trovi oggi?", en: "Look at yourself in the mirror. How do you feel today?" },
      { speaker: "Amico", it: "Non molto bene. Mi sento stanco e un po' giù.", en: "Not very well. I feel tired and a bit down." },
      { speaker: "Tu", it: "Ma sei bello come sempre! Hai gli occhi brillanti.", en: "But you're beautiful as always! You have bright eyes." },
      { speaker: "Amico", it: "Grazie, sei gentile. Tu invece sembri molto felice.", en: "Thank you, you're kind. You, on the other hand, seem very happy." },
      { speaker: "Tu", it: "Sì, oggi sono di buon umore. Ho dormito bene.", en: "Yes, today I'm in a good mood. I slept well." },
      { speaker: "Amico", it: "Lucky you! Io ho dormito solo cinque ore.", en: "Lucky you! I only slept five hours." },
      { speaker: "Tu", it: "Devi riposare di più. Sei ancora giovane, ma la stanchezza si vede.", en: "You need to rest more. You're still young, but the tiredness shows." },
      { speaker: "Amico", it: "Hai ragione. Stasera vado a dormire presto.", en: "You're right. Tonight I'll go to sleep early." },
      { speaker: "Tu", it: "Bene. Un buon sonno ti farà sentire più forte.", en: "Good. A good sleep will make you feel stronger." },
      { speaker: "Amico", it: "Spero! Domani ho un esame importante.", en: "I hope so! Tomorrow I have an important exam." },
      { speaker: "Tu", it: "In bocca al lupo allora! Dormi bene.", en: "Good luck then! Sleep well." },
      { speaker: "Amico", it: "Grazie! Sei un vero amico.", en: "Thanks! You're a true friend." }
    ]
  },
  "mirror_b1": {
    zoneId: "mirror",
    zoneName: "The Mirror",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Guardati bene nello specchio. Come ti senti oggi?", en: "Look carefully in the mirror. How do you feel today?" },
      { speaker: "Amico", it: "Onestamente non molto bene. Mi sento stanco e un po' giù di morale.", en: "Honestly not very well. I feel tired and a bit down in spirits." },
      { speaker: "Tu", it: "Ma sei bellissimo come sempre! Hai degli occhi davvero brillanti.", en: "But you're beautiful as always! You have really bright eyes." },
      { speaker: "Amico", it: "Grazie per le parole gentili. Tu invece sembri radioso, c'è qualche motivo particolare?", en: "Thank you for the kind words. You, on the other hand, seem radiant, is there any particular reason?" },
      { speaker: "Tu", it: "Sì, sono di ottimo umore oggi. Ho dormito benissimo e mi sono svegliato pieno di energia.", en: "Yes, I'm in an excellent mood today. I slept very well and woke up full of energy." },
      { speaker: "Amico", it: "Che fortuna! Io invece ho dormito appena cinque ore e mi sento a pezzi.", en: "What luck! I, on the other hand, slept only five hours and I feel wrecked." },
      { speaker: "Tu", it: "Dovresti proprio riposare di più. Sei ancora giovane, ma la stanchezza si vede sul tuo viso.", en: "You really should rest more. You're still young, but the tiredness shows on your face." },
      { speaker: "Amico", it: "Hai perfettamente ragione. Stasera vado a dormire assolutamente presto.", en: "You're absolutely right. Tonight I'll go to sleep absolutely early." },
      { speaker: "Tu", it: "Ottima decisione. Un sonno ristoratore ti farà sentire molto più forte domani.", en: "Excellent decision. Restorative sleep will make you feel much stronger tomorrow." },
      { speaker: "Amico", it: "Ne ho proprio bisogno, domani ho un esame importante all'università.", en: "I really need it, tomorrow I have an important exam at university." },
      { speaker: "Tu", it: "Allora ti auguro in bocca al lupo! Dormi bene e non pensarci troppo.", en: "Then I wish you good luck! Sleep well and don't think about it too much." },
      { speaker: "Amico", it: "Grazie mille! Sei davvero un amico su cui poter contare.", en: "Thank you so much! You're really a friend you can count on." }
    ]
  },
  "clock_a2": {
    zoneId: "clock",
    zoneName: "The Clock",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Che ore sono? Non vedo l'orologio bene.", en: "What time is it? I can't see the clock well." },
      { speaker: "Amico", it: "Sono le dieci e un quarto. Perché, hai fretta?", en: "It's ten fifteen. Why, are you in a hurry?" },
      { speaker: "Tu", it: "Sì, il treno parte alle dieci e mezza!", en: "Yes, the train leaves at ten thirty!" },
      { speaker: "Amico", it: "Oh no! Dobbiamo correre alla stazione.", en: "Oh no! We need to run to the station." },
      { speaker: "Tu", it: "Quanti minuti ci vogliono a piedi?", en: "How many minutes does it take on foot?" },
      { speaker: "Amico", it: "Circa venti minuti. Troppo tardi!", en: "About twenty minutes. Too late!" },
      { speaker: "Tu", it: "Prendiamo un taxi, allora. Chiamo ora.", en: "Let's take a taxi, then. I'll call now." },
      { speaker: "Amico", it: "Bona idea. Ma guarda, l'orologio è fermo!", en: "Good idea. But look, the clock has stopped!" },
      { speaker: "Tu", it: "Cosa? Che ore sono davvero?", en: "What? What time is it really?" },
      { speaker: "Amico", it: "Controllo il telefono... sono solo le nove e cinquantacinque!", en: "Let me check the phone... it's only nine fifty-five!" },
      { speaker: "Tu", it: "Meno male! Abbiamo ancora mezz'ora.", en: "Thank goodness! We still have half an hour." },
      { speaker: "Amico", it: "Andiamo a piedi, così facciamo anche movimento.", en: "Let's walk, so we also get some exercise." }
    ]
  },
  "clock_b1": {
    zoneId: "clock",
    zoneName: "The Clock",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Scusa, che ore sono esattamente? Non riesco a vedere bene l'orologio da lontano.", en: "Excuse me, what time is it exactly? I can't see the clock well from far away." },
      { speaker: "Amico", it: "Secondo l'orologio sono le dieci e un quarto. Perché, hai fretta?", en: "According to the clock it's ten fifteen. Why, are you in a hurry?" },
      { speaker: "Tu", it: "Sì, il mio treno per Firenze parte alle dieci e mezza in punto!", en: "Yes, my train to Florence leaves at ten thirty sharp!" },
      { speaker: "Amico", it: "Oh no, siamo in serio ritardo! Dobbiamo correre subito alla stazione.", en: "Oh no, we're seriously late! We need to run to the station right away." },
      { speaker: "Tu", it: "Quanti minuti ci vogliono a piedi dalla qui?", en: "How many minutes does it take on foot from here?" },
      { speaker: "Amico", it: "Normalmente circa venti minuti, ma troppo tardi per arrivare in tempo.", en: "Normally about twenty minutes, but too late to arrive on time." },
      { speaker: "Tu", it: "Prendiamo un taxi allora. Chiamo subito un'auto.", en: "Let's take a taxi then. I'll call a car right away." },
      { speaker: "Amico", it: "Aspetta un attimo, guarda bene: l'orologio è fermo da ore!", en: "Wait a moment, look carefully: the clock has been stopped for hours!" },
      { speaker: "Tu", it: "Cosa dici? Allora che ore sono davvero?", en: "What are you saying? Then what time is it really?" },
      { speaker: "Amico", it: "Controllo subito il telefono... meno male, sono solo le nove e cinquantacinque!", en: "Let me check the phone right away... thank goodness, it's only nine fifty-five!" },
      { speaker: "Tu", it: "Che sollievo! Abbiamo ancora più di mezz'ora a disposizione.", en: "What a relief! We still have more than half an hour available." },
      { speaker: "Amico", it: "Perfetto, andiamo a piedi tranquillamente. Così facciamo anche un po' di movimento.", en: "Perfect, let's walk calmly. That way we also get a bit of exercise." }
    ]
  },
  "number-plate_a2": {
    zoneId: "number-plate",
    zoneName: "House Number",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Qual è il numero civico di questa casa?", en: "What's the house number of this house?" },
      { speaker: "Amico", it: "È il numero ventitré. Lo vedi sulla porta?", en: "It's number twenty-three. Do you see it on the door?" },
      { speaker: "Tu", it: "Sì, ma è scritto in numeri romani: XXIII.", en: "Yes, but it's written in Roman numerals: XXIII." },
      { speaker: "Amico", it: "Ah, è vero! Io leggo solo i numeri normali.", en: "Ah, that's right! I only read normal numbers." },
      { speaker: "Tu", it: "Quanti piani ha questo palazzo?", en: "How many floors does this building have?" },
      { speaker: "Amico", it: "Quattro piani, più il sottotetto. Abito al secondo.", en: "Four floors, plus the attic. I live on the second." },
      { speaker: "Tu", it: "Quanti appartamenti ci sono per piano?", en: "How many apartments are there per floor?" },
      { speaker: "Amico", it: "Due appartamenti. Il mio è quello a sinistra.", en: "Two apartments. Mine is the one on the left." },
      { speaker: "Tu", it: "E quante persone vivono in questo palazzo?", en: "And how many people live in this building?" },
      { speaker: "Amico", it: "Diciotto persone in totale. È un palazzo piccolo.", en: "Eighteen people in total. It's a small building." },
      { speaker: "Tu", it: "Bello! Conosci tutti i vicini?", en: "Nice! Do you know all the neighbors?" },
      { speaker: "Amico", it: "Sì, quasi tutti. Siamo una piccola comunità.", en: "Yes, almost all of them. We're a small community." }
    ]
  },
  "number-plate_b1": {
    zoneId: "number-plate",
    zoneName: "House Number",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Potresti dirmi qual è il numero civico esatto di questo edificio?", en: "Could you tell me what the exact house number of this building is?" },
      { speaker: "Amico", it: "È il numero ventitré. Lo vedi scritto sulla porta d'ingresso?", en: "It's number twenty-three. Do you see it written on the entrance door?" },
      { speaker: "Tu", it: "Sì, l'ho visto, ma è curioso: è scritto in numeri romani come XXIII.", en: "Yes, I saw it, but it's curious: it's written in Roman numerals as XXIII." },
      { speaker: "Amico", it: "Ah, hai ragione! Io onestamente leggo più facilmente i numeri arabi.", en: "Ah, you're right! I honestly read Arabic numbers more easily." },
      { speaker: "Tu", it: "Quanti piani ha esattamente questo palazzo? Sembra antico.", en: "How many floors does this building have exactly? It looks ancient." },
      { speaker: "Amico", it: "Ha quattro piani abitabili, più il sottotetto usato come ripostiglio. Io abito al secondo piano.", en: "It has four habitable floors, plus the attic used as a storage room. I live on the second floor." },
      { speaker: "Tu", it: "E quanti appartamenti ci sono per ogni singolo piano?", en: "And how many apartments are there on each single floor?" },
      { speaker: "Amico", it: "Due appartamenti per piano, uno a sinistra e uno a destra delle scale. Il mio è quello di sinistra.", en: "Two apartments per floor, one to the left and one to the right of the stairs. Mine is the one on the left." },
      { speaker: "Tu", it: "Sai quante persone vivono in totale in questo condominio?", en: "Do you know how many people live in total in this condominium?" },
      { speaker: "Amico", it: "Dovremmo essere circa diciotto persone in totale. È un palazzo piuttosto piccolo e familiare.", en: "We should be about eighteen people in total. It's a rather small and familiar building." },
      { speaker: "Tu", it: "Che bello! Conosci personalmente tutti i tuoi vicini di casa?", en: "How nice! Do you personally know all your neighbors?" },
      { speaker: "Amico", it: "Sì, conosco praticamente tutti. Siamo una piccola comunità molto unita.", en: "Yes, I practically know everyone. We're a very close-knit small community." }
    ]
  },
  "welcome-mat_a2": {
    zoneId: "welcome-mat",
    zoneName: "Welcome Mat",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Buongiorno! Permesso, posso entrare?", en: "Good morning! May I, can I come in?" },
      { speaker: "Amico", it: "Certo, entra pure! Benvenuto a casa mia.", en: "Of course, come on in! Welcome to my home." },
      { speaker: "Tu", it: "Grazie mille. Scusa se sono in ritardo.", en: "Thank you very much. Sorry I'm late." },
      { speaker: "Amico", it: "Non ti preoccupare, non fa niente. Togiti il cappotto.", en: "Don't worry, it's nothing. Take off your coat." },
      { speaker: "Tu", it: "Grazie. Fa freddissimo fuori oggi!", en: "Thanks. It's freezing outside today!" },
      { speaker: "Amico", it: "Sì, è inverno! Vuoi qualcosa di caldo da bere?", en: "Yes, it's winter! Do you want something hot to drink?" },
      { speaker: "Tu", it: "Volentieri, un tè se ce l'hai.", en: "Gladly, a tea if you have it." },
      { speaker: "Amico", it: "Certo, ho anche i biscotti. Fammi pensare...", en: "Of course, I also have cookies. Let me think..." },
      { speaker: "Tu", it: "Forse dovrei chiamare prima di venire la prossima volta.", en: "Maybe I should call before coming next time." },
      { speaker: "Amico", it: "No, figurati! Vieni quando vuoi. Sei sempre il benvenuto.", en: "No, don't worry about it! Come whenever you want. You're always welcome." },
      { speaker: "Tu", it: "Sei molto gentile. Allora arrivederci a dopo!", en: "You're very kind. So goodbye for later!" },
      { speaker: "Amico", it: "A dopo! E grazie per essere passato.", en: "See you later! And thanks for stopping by." }
    ]
  },
  "welcome-mat_b1": {
    zoneId: "welcome-mat",
    zoneName: "Welcome Mat",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Buongiorno! Permesso, posso entrare o preferisci che aspetti fuori?", en: "Good morning! May I, can I come in or do you prefer I wait outside?" },
      { speaker: "Amico", it: "Ma certo, entra pure! Sei il benvenuto a casa mia in qualsiasi momento.", en: "But of course, come on in! You're welcome at my home at any time." },
      { speaker: "Tu", it: "Grazie mille per l'accoglienza. Scusa se sono arrivato leggermente in ritardo.", en: "Thank you very much for the welcome. Sorry I arrived slightly late." },
      { speaker: "Amico", it: "Non ti preoccupare affatto, non fa assolutamente niente. Togiti pure il cappotto e mettiti comodo.", en: "Don't worry at all, it absolutely doesn't matter. Take off your coat and make yourself comfortable." },
      { speaker: "Tu", it: "Grazie. Devo dirti che fa un freddo terribile fuori oggi, sembra di essere al Polo Nord!", en: "Thanks. I must tell you that it's terribly cold outside today, it feels like being at the North Pole!" },
      { speaker: "Amico", it: "Sì, è pieno inverno! Per scaldarti, vuoi qualcosa di caldo da bere?", en: "Yes, it's full winter! To warm you up, do you want something hot to drink?" },
      { speaker: "Tu", it: "Volentieri, un buon tè caldo sarebbe perfetto, se ce l'hai disponibile.", en: "Gladly, a good hot tea would be perfect, if you have it available." },
      { speaker: "Amico", it: "Certamente, ho un'ottima selezione di tè. E ho anche dei biscotti appena sfornati.", en: "Certainly, I have an excellent selection of tea. And I also have freshly baked cookies." },
      { speaker: "Tu", it: "Ottimo! Forse però la prossima volta dovrei chiamare prima di passare, giusto?", en: "Excellent! But maybe next time I should call before coming by, right?" },
      { speaker: "Amico", it: "No, figurati! Non c'è bisogno di chiamare. Vieni quando vuoi, per me sei sempre il benvenuto.", en: "No, don't worry about it! There's no need to call. Come whenever you want, you're always welcome to me." },
      { speaker: "Tu", it: "Sei davvero troppo gentile. Allora ci vediamo più tardi, arrivederci!", en: "You're really too kind. So see you later, goodbye!" },
      { speaker: "Amico", it: "A dopo! E grazie di essere passato a trovarmi.", en: "See you later! And thanks for coming to see me." }
    ]
  },
  // ==================== KITCHEN ====================
  "fridge_a2": {
    zoneId: "fridge",
    zoneName: "The Fridge",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Cosa c'è nel frigorifero? Ho fame.", en: "What's in the fridge? I'm hungry." },
      { speaker: "Amico", it: "C'è del latte fresco, alcune uova e del formaggio.", en: "There's fresh milk, some eggs and cheese." },
      { speaker: "Tu", it: "C'è anche della carne per la cena?", en: "Is there also meat for dinner?" },
      { speaker: "Amico", it: "Sì, c'è del pollo e un po' di pesce. Preferisci?", en: "Yes, there's chicken and some fish. Which do you prefer?" },
      { speaker: "Tu", it: "Preferisco il pesce. È più leggero.", en: "I prefer fish. It's lighter." },
      { speaker: "Amico", it: "Bene. C'è anche della frutta: mele e arance.", en: "Good. There's also fruit: apples and oranges." },
      { speaker: "Tu", it: "Prendo un'arancia, grazie. E c'è burro per il pane?", en: "I'll take an orange, thanks. And is there butter for the bread?" },
      { speaker: "Amico", it: "Sì, nel cassetto centrale. C'è anche la marmellata.", en: "Yes, in the middle drawer. There's also jam." },
      { speaker: "Tu", it: "Ottimo. E lo yogurt? È scaduto?", en: "Excellent. And the yogurt? Has it expired?" },
      { speaker: "Amico", it: "No, scade domani. Prendilo se vuoi.", en: "No, it expires tomorrow. Take it if you want." },
      { speaker: "Tu", it: "Perfetto. Preparo una colazione completa!", en: "Perfect. I'll make a complete breakfast!" },
      { speaker: "Amico", it: "Buon appetito! Lascia un po' di latte per me.", en: "Enjoy your meal! Leave some milk for me." }
    ]
  },
  "fridge_b1": {
    zoneId: "fridge",
    zoneName: "The Fridge",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Potresti dirmi cosa c'è disponibile nel frigorifero? Sono abbastanza affamato.", en: "Could you tell me what's available in the fridge? I'm quite hungry." },
      { speaker: "Amico", it: "Diamo un'occhiata: c'è del latte fresco, un paio di uova e diverse forme di formaggio.", en: "Let's take a look: there's fresh milk, a couple of eggs and various forms of cheese." },
      { speaker: "Tu", it: "C'è anche della carne che possiamo cucinare per cena stasera?", en: "Is there also meat we can cook for dinner tonight?" },
      { speaker: "Amico", it: "Sì, trovi sia del petto di pollo che un bel trancio di pesce. Tu cosa preferisci?", en: "Yes, you'll find both chicken breast and a nice piece of fish. What do you prefer?" },
      { speaker: "Tu", it: "Preferisco decisamente il pesce, lo trovo più leggero e digeribile.", en: "I definitely prefer fish, I find it lighter and more digestible." },
      { speaker: "Amico", it: "Ottima scelta. A proposito, c'è anche della frutta fresca: mele croccanti e arance succose.", en: "Excellent choice. By the way, there's also fresh fruit: crunchy apples and juicy oranges." },
      { speaker: "Tu", it: "Prendo un'arancia allora, grazie. C'è anche del burro per spalmare sul pane?", en: "I'll take an orange then, thanks. Is there also butter to spread on bread?" },
      { speaker: "Amico", it: "Certo, è nel cassetto centrale. Troverai anche un barattolo di marmellata di albicocche.", en: "Of course, it's in the middle drawer. You'll also find a jar of apricot jam." },
      { speaker: "Tu", it: "Fantastico. E lo yogurt che vedo in fondo? Non è scaduto, spero.", en: "Fantastic. And the yogurt I see in the back? It hasn't expired, I hope." },
      { speaker: "Amico", it: "No, tranquillo, la scadenza è domani. Prendilo pure se ti va.", en: "No, don't worry, the expiration is tomorrow. Take it if you like." },
      { speaker: "Tu", it: "Perfetto, allora preparo una colazione davvero completa e nutriente!", en: "Perfect, then I'll make a really complete and nutritious breakfast!" },
      { speaker: "Amico", it: "Buon appetito! Però lascia un po' di latte per il mio caffè, per favore.", en: "Enjoy your meal! But leave some milk for my coffee, please." }
    ]
  },
  "pantry_a2": {
    zoneId: "pantry",
    zoneName: "The Pantry",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Dov'è la pasta? Non la trovo.", en: "Where's the pasta? I can't find it." },
      { speaker: "Amico", it: "È nel ripiano alto, a sinistra. Vedi?", en: "It's on the high shelf, on the left. See?" },
      { speaker: "Tu", it: "Ah sì, eccola! C'è anche del riso?", en: "Ah yes, here it is! Is there also rice?" },
      { speaker: "Amico", it: "Sì, c'è il riso basmati. È nella scatola di latta.", en: "Yes, there's basmati rice. It's in the tin box." },
      { speaker: "Tu", it: "Prendo anche il pane. È fresco?", en: "I'll also take the bread. Is it fresh?" },
      { speaker: "Amico", it: "Sì, l'ho comprato stamattina. È ancora caldo.", en: "Yes, I bought it this morning. It's still warm." },
      { speaker: "Tu", it: "C'è della farina per fare una torta?", en: "Is there flour to make a cake?" },
      { speaker: "Amico", it: "Sì, e c'è anche lo zucchero e il cacao.", en: "Yes, and there's also sugar and cocoa." },
      { speaker: "Tu", it: "Ottimo! E l'olio d'oliva?", en: "Excellent! And the olive oil?" },
      { speaker: "Amico", it: "È nella bottiglia verde, accanto al sale.", en: "It's in the green bottle, next to the salt." },
      { speaker: "Tu", it: "Grazie. Preparo uno spuntino italiano!", en: "Thanks. I'll make an Italian snack!" },
      { speaker: "Amico", it: "Buona idea! Non dimenticare il pepe.", en: "Good idea! Don't forget the pepper." }
    ]
  },
  "pantry_b1": {
    zoneId: "pantry",
    zoneName: "The Pantry",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Scusa, non riesco a trovare la pasta. Dov'è finita?", en: "Sorry, I can't find the pasta. Where did it end up?" },
      { speaker: "Amico", it: "Dovrebbe essere nel ripiano più alto, sul lato sinistro. La vedi adesso?", en: "It should be on the highest shelf, on the left side. Do you see it now?" },
      { speaker: "Tu", it: "Ah sì, eccola finalmente! A proposito, c'è anche del riso in dispensa?", en: "Ah yes, here it is finally! By the way, is there also rice in the pantry?" },
      { speaker: "Amico", it: "Certo, c'è del riso basmati di buona qualità. È conservato nella scatola di latta.", en: "Of course, there's good quality basmati rice. It's kept in the tin box." },
      { speaker: "Tu", it: "Prendo anche il pane se non ti dispiace. È ancora fresco?", en: "I'll also take the bread if you don't mind. Is it still fresh?" },
      { speaker: "Amico", it: "Assolutamente sì, l'ho comprato stamattina al forno ed è ancora tiepido.", en: "Absolutely yes, I bought it this morning at the bakery and it's still warm." },
      { speaker: "Tu", it: "C'è abbastanza farina se volessi preparare una torta per domani?", en: "Is there enough flour if I wanted to prepare a cake for tomorrow?" },
      { speaker: "Amico", it: "Sì, e troverai anche lo zucchero semolato, il cacao in polvere e il lievito.", en: "Yes, and you'll also find granulated sugar, cocoa powder and baking powder." },
      { speaker: "Tu", it: "Perfetto! E l'olio d'oliva extravergine? Ne abbiamo ancora?", en: "Perfect! And the extra virgin olive oil? Do we still have some?" },
      { speaker: "Amico", it: "Sì, è nella bottiglia verde scuro, appoggiata accanto al sale marino.", en: "Yes, it's in the dark green bottle, placed next to the sea salt." },
      { speaker: "Tu", it: "Grazie per l'aiuto. Allora preparo uno spuntino alla italiana!", en: "Thanks for the help. Then I'll make a snack Italian style!" },
      { speaker: "Amico", it: "Buonissima idea! E non dimenticare di aggiungere un pizzico di pepe nero.", en: "Very good idea! And don't forget to add a pinch of black pepper." }
    ]
  },
  "utensil-drawer_a2": {
    zoneId: "utensil-drawer",
    zoneName: "Utensil Drawer",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Mi passi il coltello, per favore?", en: "Can you pass me the knife, please?" },
      { speaker: "Amico", it: "Ecco. Attenzione, è molto affilato!", en: "Here. Careful, it's very sharp!" },
      { speaker: "Tu", it: "Grazie. Ora mi serve una forchetta per mescolare.", en: "Thanks. Now I need a fork to mix." },
      { speaker: "Amico", it: "Usa il cucchiaio di legno, è meglio.", en: "Use the wooden spoon, it's better." },
      { speaker: "Tu", it: "Hai ragione. Dov'è la grattugia?", en: "You're right. Where's the grater?" },
      { speaker: "Amico", it: "È nel secondo cassetto, a destra.", en: "It's in the second drawer, on the right." },
      { speaker: "Tu", it: "Trovata! E il mestolo per la zuppa?", en: "Found it! And the ladle for the soup?" },
      { speaker: "Amico", it: "Appeso al muro, vicino alla pentola.", en: "Hanging on the wall, near the pot." },
      { speaker: "Tu", it: "Prendo anche la spatola per la frittata.", en: "I'll also take the spatula for the omelette." },
      { speaker: "Amico", it: "Buona idea. La frittata è il tuo piatto forte!", en: "Good idea. The omelette is your specialty!" },
      { speaker: "Tu", it: "Sì, tutti dicono che è buonissima.", en: "Yes, everyone says it's very good." },
      { speaker: "Amico", it: "Non vedo l'ora di assaggiarla!", en: "I can't wait to taste it!" }
    ]
  },
  "utensil-drawer_b1": {
    zoneId: "utensil-drawer",
    zoneName: "Utensil Drawer",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Mi passeresti il coltello da cucina, per favore? Ne ho urgente bisogno.", en: "Would you pass me the kitchen knife, please? I urgently need it." },
      { speaker: "Amico", it: "Ecco, prendi. Fai molta attenzione perché l'ho appena affilato ed è molto tagliente.", en: "Here, take it. Be very careful because I just sharpened it and it's very sharp." },
      { speaker: "Tu", it: "Grazie per l'avvertimento. Ora mi servirebbe anche una forchetta per mescolare gli ingredienti.", en: "Thanks for the warning. Now I would also need a fork to mix the ingredients." },
      { speaker: "Amico", it: "Ti consiglio di usare il cucchiaio di legno, è più adatto e non rovina la pentola.", en: "I recommend using the wooden spoon, it's more suitable and doesn't ruin the pot." },
      { speaker: "Tu", it: "Ottimo consiglio, grazie. A proposito, hai visto dov'è finita la grattugia?", en: "Excellent advice, thanks. By the way, have you seen where the grater ended up?" },
      { speaker: "Amico", it: "Dovrebbe essere nel secondo cassetto, sul lato destro. Controlla bene.", en: "It should be in the second drawer, on the right side. Check carefully." },
      { speaker: "Tu", it: "Ah, eccola! E il mestolo per la zuppa? Non lo trovo da nessuna parte.", en: "Ah, here it is! And the ladle for the soup? I can't find it anywhere." },
      { speaker: "Amico", it: "È appeso al muro, proprio accanto alla grande pentola di rame.", en: "It's hanging on the wall, right next to the big copper pot." },
      { speaker: "Tu", it: "Perfetto. Prendo anche la spatola perché voglio preparare una bella frittata.", en: "Perfect. I'll also take the spatula because I want to prepare a nice omelette." },
      { speaker: "Amico", it: "Buonissima idea! La tua frittata è diventata famosa tra tutti gli amici.", en: "Very good idea! Your omelette has become famous among all our friends." },
      { speaker: "Tu", it: "Sono contento che piaccia tanto. Tutti dicono che è buonissima e soffice.", en: "I'm glad it's so liked. Everyone says it's very good and fluffy." },
      { speaker: "Amico", it: "È la verità! Non vedo l'ora di assaggiarla a pranzo.", en: "It's the truth! I can't wait to taste it at lunch." }
    ]
  },
  "stove_a2": {
    zoneId: "stove",
    zoneName: "The Stove",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Accendi il fornello? Devo scaldare la padella.", en: "Turn on the stove? I need to heat the pan." },
      { speaker: "Amico", it: "Fatto. La pentola per la pasta è già sul fuoco?", en: "Done. Is the pot for the pasta already on the fire?" },
      { speaker: "Tu", it: "Sì, l'acqua bolle. Metti il sale, per favore.", en: "Yes, the water is boiling. Put the salt in, please." },
      { speaker: "Amico", it: "Quanto ne metto? Un cucchiaio?", en: "How much do I put? A spoonful?" },
      { speaker: "Tu", it: "Sì, basta così. Ora butta la pasta.", en: "Yes, that's enough. Now throw in the pasta." },
      { speaker: "Amico", it: "Fatto. Devo accendere anche il forno?", en: "Done. Should I also turn on the oven?" },
      { speaker: "Tu", it: "No, aspetta. Prima scola la pasta con il colino.", en: "No, wait. First drain the pasta with the strainer." },
      { speaker: "Amico", it: "Ok. Dopo accendo il forno per il pane?", en: "Ok. After do I turn on the oven for the bread?" },
      { speaker: "Tu", it: "Sì, a centottanta gradi per venti minuti.", en: "Yes, at one hundred eighty degrees for twenty minutes." },
      { speaker: "Amico", it: "Perfetto. Cuciniamo una vera cena italiana!", en: "Perfect. We're cooking a real Italian dinner!" },
      { speaker: "Tu", it: "Esatto! E dopo spengiamo tutto per sicurezza.", en: "Exactly! And after we'll turn everything off for safety." },
      { speaker: "Amico", it: "Non preoccuparti, lo faccio io alla fine.", en: "Don't worry, I'll do it at the end." }
    ]
  },
  "stove_b1": {
    zoneId: "stove",
    zoneName: "The Stove",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Potresti accendere il fornello? Ho bisogno di scaldare bene la padella.", en: "Could you turn on the stove? I need to heat the pan well." },
      { speaker: "Amico", it: "L'ho appena acceso. Dimmi, la pentola per la pasta è già sul fuoco?", en: "I just turned it on. Tell me, is the pot for the pasta already on the fire?" },
      { speaker: "Tu", it: "Sì, l'acqua sta già bollendo. Mi metti il sale, per favore?", en: "Yes, the water is already boiling. Can you put the salt in, please?" },
      { speaker: "Amico", it: "Quanto sale devo aggiungere? Un cucchiaio abbondante?", en: "How much salt should I add? A heaping spoonful?" },
      { speaker: "Tu", it: "Sì, basta così. Ora puoi buttare la pasta e mescolare subito.", en: "Yes, that's enough. Now you can throw in the pasta and stir right away." },
      { speaker: "Amico", it: "Fatto. Nel frattempo devo accendere anche il forno per dopo?", en: "Done. In the meantime should I also turn on the oven for later?" },
      { speaker: "Tu", it: "No, aspetta ancora un momento. Prima dobbiamo scolare la pasta usando il colino.", en: "No, wait a moment longer. First we need to drain the pasta using the strainer." },
      { speaker: "Amico", it: "D'accordo. Dopo aver scolato la pasta, accendo il forno per il pane?", en: "Alright. After draining the pasta, do I turn on the oven for the bread?" },
      { speaker: "Tu", it: "Sì, a centottanta gradi per circa venti minuti, finché non è dorato.", en: "Yes, at one hundred eighty degrees for about twenty minutes, until it's golden." },
      { speaker: "Amico", it: "Perfetto. Stasera cuciniamo una vera e propria cena italiana tradizionale!", en: "Perfect. Tonight we're cooking a real traditional Italian dinner!" },
      { speaker: "Tu", it: "Esattamente! E ricordati di spegnere tutto alla fine per sicurezza.", en: "Exactly! And remember to turn everything off at the end for safety." },
      { speaker: "Amico", it: "Non preoccuparti, mi occupo io di controllare tutto alla fine della cottura.", en: "Don't worry, I'll take care of checking everything at the end of cooking." }
    ]
  },
  "table_a2": {
    zoneId: "table",
    zoneName: "The Table",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Posso avere un piatto pulito, per favore?", en: "Can I have a clean plate, please?" },
      { speaker: "Amico", it: "Ecco. Vuoi anche un bicchiere per il vino?", en: "Here. Do you also want a glass for the wine?" },
      { speaker: "Tu", it: "Sì, grazie. E la tazza per il caffè dopo?", en: "Yes, thanks. And the cup for coffee after?" },
      { speaker: "Amico", it: "La preparo subito dopo cena. Preferisci espresso o lungo?", en: "I'll prepare it right after dinner. Do you prefer espresso or long?" },
      { speaker: "Tu", it: "Un espresso, per favore. Bevi tu birra o vino?", en: "An espresso, please. Are you drinking beer or wine?" },
      { speaker: "Amico", it: "Io bevo solo acqua stasera. Devo guidare dopo.", en: "I'm only drinking water tonight. I have to drive after." },
      { speaker: "Tu", it: "Hai ragione, la sicurezza prima di tutto. Dov'è il tovagliolo?", en: "You're right, safety first. Where's the napkin?" },
      { speaker: "Amico", it: "Nel cassetto della cucina. Ne prendo uno anche per me.", en: "In the kitchen drawer. I'll get one for myself too." },
      { speaker: "Tu", it: "Grazie. Imposta la tavola bene, sembra un ristorante!", en: "Thanks. You set the table well, it looks like a restaurant!" },
      { speaker: "Amico", it: "Ti piace? Ho messo anche un fiore al centro.", en: "Do you like it? I also put a flower in the center." },
      { speaker: "Tu", it: "Molto elegante. Sei un ospite perfetto.", en: "Very elegant. You're a perfect host." },
      { speaker: "Amico", it: "Grazie! Buon appetito, allora.", en: "Thanks! Enjoy your meal, then." }
    ]
  },
  "table_b1": {
    zoneId: "table",
    zoneName: "The Table",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Potrei avere un piatto pulito per favore? Sto apparecchiando.", en: "Could I have a clean plate please? I'm setting the table." },
      { speaker: "Amico", it: "Ecco il piatto. Ti serve anche un bicchiere adeguato per il vino rosso?", en: "Here's the plate. Do you also need a suitable glass for the red wine?" },
      { speaker: "Tu", it: "Sì, grazie mille. E potresti preparare anche la tazza per il caffè dopo cena?", en: "Yes, thank you very much. And could you also prepare the cup for after-dinner coffee?" },
      { speaker: "Amico", it: "La preparo senz'altro dopo cena. Preferisci un espresso classico o un caffè lungo?", en: "I'll certainly prepare it after dinner. Do you prefer a classic espresso or a long coffee?" },
      { speaker: "Tu", it: "Un espresso intenso, per favore. Tu invece cosa berresti, birra o vino?", en: "An intense espresso, please. What would you drink instead, beer or wine?" },
      { speaker: "Amico", it: "Io stasera bevo solo acqua naturale. Purtroppo devo guidare la macchina dopo cena.", en: "I'm only drinking still water tonight. Unfortunately I have to drive the car after dinner." },
      { speaker: "Tu", it: "Hai assolutamente ragione, la sicurezza stradale viene prima di tutto. A proposito, dov'è il tovagliolo di stoffa?", en: "You're absolutely right, road safety comes before everything. By the way, where's the cloth napkin?" },
      { speaker: "Amico", it: "Dovrebbe essere nel cassetto della cucina. Ne prendo subito uno anche per me.", en: "It should be in the kitchen drawer. I'll get one for myself right away." },
      { speaker: "Tu", it: "Grazie. Devo dire che hai apparecchiato la tavola in modo impeccabile, sembra un vero ristorante!", en: "Thanks. I must say you set the table impeccably, it looks like a real restaurant!" },
      { speaker: "Amico", it: "Ti fa piacere? Ho messo anche un fiore fresco al centro come tocco finale.", en: "Does it please you? I also put a fresh flower in the center as a final touch." },
      { speaker: "Tu", it: "Molto elegante e raffinato. Sei davvero un ospite perfetto e premuroso.", en: "Very elegant and refined. You're really a perfect and thoughtful host." },
      { speaker: "Amico", it: "Grazie per i complimenti! Allora buon appetito e buona cena.", en: "Thanks for the compliments! So enjoy your meal and good dinner." }
    ]
  },
  "dessert_a2": {
    zoneId: "dessert",
    zoneName: "Dessert Station",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Hai voglia di dolce? C'è della torta al cioccolato.", en: "Do you feel like dessert? There's chocolate cake." },
      { speaker: "Amico", it: "Mmm, adoro il cioccolato! È fatta in casa?", en: "Mmm, I love chocolate! Is it homemade?" },
      { speaker: "Tu", it: "Sì, l'ho preparata io stamattina. Vuoi un pezzo?", en: "Yes, I prepared it myself this morning. Do you want a piece?" },
      { speaker: "Amico", it: "Volentieri, ma una fetta piccola. Sto a dieta!", en: "Gladly, but a small slice. I'm on a diet!" },
      { speaker: "Tu", it: "Va bene. E dopo vuoi un gelato?", en: "Alright. And after do you want ice cream?" },
      { speaker: "Amico", it: "No, grazie. Il gelato è troppo freddo per me.", en: "No, thanks. Ice cream is too cold for me." },
      { speaker: "Tu", it: "Allora prendi un cornetto con la marmellata.", en: "Then take a croissant with jam." },
      { speaker: "Amico", it: "Buona idea! Ne mangio uno al bar ogni mattina.", en: "Good idea! I eat one at the bar every morning." },
      { speaker: "Tu", it: "Anche io! Con il cappuccino è perfetto.", en: "Me too! With cappuccino it's perfect." },
      { speaker: "Amico", it: "Giusto! Ecco perché siamo amici: stessi gusti!", en: "Exactly! That's why we're friends: same tastes!" },
      { speaker: "Tu", it: "Hai ragione! Uniamo il dolce al caffè?", en: "You're right! Shall we combine dessert with coffee?" },
      { speaker: "Amico", it: "Sì, preparo due caffè subito!", en: "Yes, I'll make two coffees right away!" }
    ]
  },
  "dessert_b1": {
    zoneId: "dessert",
    zoneName: "Dessert Station",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Hai voglia di qualcosa di dolce? Ho appena sfornato una torta al cioccolato.", en: "Do you feel like something sweet? I just baked a chocolate cake." },
      { speaker: "Amico", it: "Mmm, il cioccolato è la mia debolezza! Dimmi, è una torta fatta in casa?", en: "Mmm, chocolate is my weakness! Tell me, is it a homemade cake?" },
      { speaker: "Tu", it: "Sì, l'ho preparata con le mie mani stamattina. Ti va di assaggiarne un pezzo?", en: "Yes, I prepared it with my own hands this morning. Would you like to taste a piece?" },
      { speaker: "Amico", it: "Volentieri, ma solo una fetta piccola per favore. Sto cercando di stare a dieta!", en: "Gladly, but only a small slice please. I'm trying to be on a diet!" },
      { speaker: "Tu", it: "D'accordo, taglio una fetta sottile. E dopo, ti andrebbe anche un gelato?", en: "Alright, I'll cut a thin slice. And after, would you also like ice cream?" },
      { speaker: "Amico", it: "No, ti ringrazio. Il gelato mi fa sempre male alla gola, è troppo freddo per me.", en: "No, thank you. Ice cream always hurts my throat, it's too cold for me." },
      { speaker: "Tu", it: "Capisco. Allora prendi un cornetto caldo con la marmellata di albicocche.", en: "I understand. Then take a warm croissant with apricot jam." },
      { speaker: "Amico", it: "Ottima idea! Devo confessare che ne mangio uno ogni mattina al bar sotto casa.", en: "Excellent idea! I must confess that I eat one every morning at the bar below my house." },
      { speaker: "Tu", it: "Anche io faccio la stessa cosa! Un cornetto con il cappuccino è la mia colazione perfetta.", en: "I do the same thing too! A croissant with cappuccino is my perfect breakfast." },
      { speaker: "Amico", it: "Esatto! Ecco perché andiamo così d'accordo: abbiamo esattamente gli stessi gusti!", en: "Exactly! That's why we get along so well: we have exactly the same tastes!" },
      { speaker: "Tu", it: "Hai perfettamente ragione! Che ne dici se uniamo il dolce a un buon caffè?", en: "You're perfectly right! What do you say if we combine dessert with a good coffee?" },
      { speaker: "Amico", it: "Grande idea! Preparo subito due caffè aromatici per accompagnare la torta.", en: "Great idea! I'll make two aromatic coffees right away to go with the cake." }
    ]
  },
  // ==================== LIBRARY ====================
  "bookshelf_a2": {
    zoneId: "bookshelf",
    zoneName: "The Bookshelf",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Hai molti libri! Qual è il tuo preferito?", en: "You have many books! Which is your favorite?" },
      { speaker: "Amico", it: "Mi piace molto questo romanzo d'avventura.", en: "I really like this adventure novel." },
      { speaker: "Tu", it: "È interessante? Di cosa parla?", en: "Is it interesting? What is it about?" },
      { speaker: "Amico", it: "Parla di un viaggio in montagna. Molto emozionante!", en: "It's about a trip in the mountains. Very exciting!" },
      { speaker: "Tu", it: "Bello! Io preferisco le biografie. Ho letto quella di Einstein.", en: "Nice! I prefer biographies. I read the one about Einstein." },
      { speaker: "Amico", it: "Davvero? Io invece leggo solo romanzi.", en: "Really? I, on the other hand, only read novels." },
      { speaker: "Tu", it: "E la poesia? Leggi qualche volta?", en: "And poetry? Do you read it sometimes?" },
      { speaker: "Amico", it: "Sì, ma solo poesia moderna. Quella classica è difficile.", en: "Yes, but only modern poetry. Classical poetry is difficult." },
      { speaker: "Tu", it: "Hai ragione. Io uso il dizionario per le parole difficili.", en: "You're right. I use the dictionary for difficult words." },
      { speaker: "Amico", it: "Buona idea! Anch'io dovrei comprarne uno.", en: "Good idea! I should buy one too." },
      { speaker: "Tu", it: "Prestati il mio, se vuoi. È molto utile.", en: "Lend you mine, if you want. It's very useful." },
      { speaker: "Amico", it: "Grazie! Sei molto gentile.", en: "Thanks! You're very kind." }
    ]
  },
  "bookshelf_b1": {
    zoneId: "bookshelf",
    zoneName: "The Bookshelf",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Guarda quanti libri hai nella tua libreria! Qual è il tuo preferito in assoluto?", en: "Look at how many books you have in your library! Which is your absolute favorite?" },
      { speaker: "Amico", it: "Senza dubbio questo romanzo d'avventura che ho letto almeno tre volte.", en: "Without a doubt this adventure novel that I've read at least three times." },
      { speaker: "Tu", it: "Sembra interessante. Di cosa parla esattamente?", en: "It seems interesting. What is it exactly about?" },
      { speaker: "Amico", it: "Racconta di un viaggio pericoloso in montagna. È davvero molto emozionante!", en: "It tells of a dangerous journey in the mountains. It's really very exciting!" },
      { speaker: "Tu", it: "Bello! Io preferisco di gran lunga le biografie. Ho appena finito quella di Einstein.", en: "Nice! I far prefer biographies. I just finished the one about Einstein." },
      { speaker: "Amico", it: "Davvero? Deve essere stata molto istruttiva. Io invece leggo quasi esclusivamente romanzi.", en: "Really? It must have been very instructive. I, on the other hand, read almost exclusively novels." },
      { speaker: "Tu", it: "E la poesia? La leggi mai per relax?", en: "And poetry? Do you ever read it to relax?" },
      { speaker: "Amico", it: "Sì, ma devo ammettere che leggo solo poesia moderna. Quella classica la trovo troppo difficile.", en: "Yes, but I must admit that I only read modern poetry. I find classical poetry too difficult." },
      { speaker: "Tu", it: "Capisco perfettamente. Io uso spesso il dizionario quando incontro parole complicate.", en: "I understand perfectly. I often use the dictionary when I encounter complicated words." },
      { speaker: "Amico", it: "È una buona strategia. Anch'io dovrei comprare un buon dizionario italiano.", en: "It's a good strategy. I should buy a good Italian dictionary too." },
      { speaker: "Tu", it: "Se vuoi, posso prestarti il mio. È molto completo e utile.", en: "If you want, I can lend you mine. It's very complete and useful." },
      { speaker: "Amico", it: "Grazie mille! Sei davvero una persona molto gentile e generosa.", en: "Thank you very much! You're really a very kind and generous person." }
    ]
  },
  "desk_a2": {
    zoneId: "desk",
    zoneName: "Study Desk",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Stai studiando? Cosa c'è sul quaderno?", en: "Are you studying? What's on the notebook?" },
      { speaker: "Amico", it: "Sì, sto facendo i compiti di matematica. Sono difficili!", en: "Yes, I'm doing math homework. They're difficult!" },
      { speaker: "Tu", it: "Posso aiutarti? Ho una calcolatrice.", en: "Can I help you? I have a calculator." },
      { speaker: "Amico", it: "Grazie, ma devo usarci la testa. Ecco la penna.", en: "Thanks, but I need to use my head. Here's the pen." },
      { speaker: "Tu", it: "Usi anche la matita per gli schemi?", en: "Do you also use the pencil for diagrams?" },
      { speaker: "Amico", it: "Sì, è più comoda per cancellare gli errori.", en: "Yes, it's more convenient for erasing mistakes." },
      { speaker: "Tu", it: "Hai un righello? Devo disegnare una linea retta.", en: "Do you have a ruler? I need to draw a straight line." },
      { speaker: "Amico", it: "È nel cassetto, accanto alla gomma.", en: "It's in the drawer, next to the eraser." },
      { speaker: "Tu", it: "Trovato! E questo calendario? Segni le date degli esami?", en: "Found it! And this calendar? Do you mark the exam dates?" },
      { speaker: "Amico", it: "Sì, il prossimo esame è il quindici marzo.", en: "Yes, the next exam is on March fifteenth." },
      { speaker: "Tu", it: "Manca poco! Devi studiare molto.", en: "There's not much time! You need to study a lot." },
      { speaker: "Amico", it: "Lo so. Ogni giorno leggo dieci pagine.", en: "I know. Every day I read ten pages." }
    ]
  },
  "desk_b1": {
    zoneId: "desk",
    zoneName: "Study Desk",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Stai studiando? Cosa c'è scritto sul tuo quaderno?", en: "Are you studying? What's written on your notebook?" },
      { speaker: "Amico", it: "Sì, sto cercando di fare i compiti di matematica. Sono piuttosto difficili quest'oggi!", en: "Yes, I'm trying to do math homework. They're rather difficult today!" },
      { speaker: "Tu", it: "Se vuoi posso darti una mano. Ho portato con me la calcolatrice scientifica.", en: "If you want I can give you a hand. I brought the scientific calculator with me." },
      { speaker: "Amico", it: "Grazie per l'offerta, ma purtroppo devo fare i conti a mente. Ecco comunque la penna.", en: "Thanks for the offer, but unfortunately I need to do the calculations in my head. Here's the pen anyway." },
      { speaker: "Tu", it: "Usi anche la matita per fare gli schemi e i disegni?", en: "Do you also use the pencil to make diagrams and drawings?" },
      { speaker: "Amico", it: "Sì, preferisco la matita perché è molto più comoda per cancellare eventuali errori.", en: "Yes, I prefer the pencil because it's much more convenient for erasing any mistakes." },
      { speaker: "Tu", it: "Hai per caso un righello? Devo disegnare una linea perfettamente retta.", en: "Do you happen to have a ruler? I need to draw a perfectly straight line." },
      { speaker: "Amico", it: "Dovrebbe essere nel cassetto della scrivania, proprio accanto alla gomma da cancellare.", en: "It should be in the desk drawer, right next to the eraser." },
      { speaker: "Tu", it: "Ah, trovato! E questo calendario appeso? Ci segni le date importanti degli esami?", en: "Ah, found it! And this hanging calendar? Do you mark the important exam dates on it?" },
      { speaker: "Amico", it: "Esatto, il prossimo esame importante è fissato per il quindici marzo.", en: "Exactly, the next important exam is scheduled for March fifteenth." },
      { speaker: "Tu", it: "Manca davvero poco tempo! Devi assolutamente studiare con impegno.", en: "There's really not much time left! You absolutely must study diligently." },
      { speaker: "Amico", it: "Lo so bene. Il mio obiettivo è leggere almeno dieci pagine ogni singolo giorno.", en: "I know well. My goal is to read at least ten pages every single day." }
    ]
  },
  "computer_a2": {
    zoneId: "computer",
    zoneName: "Computer Station",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Il tuo computer è nuovo? Sembra veloce.", en: "Is your computer new? It seems fast." },
      { speaker: "Amico", it: "Sì, l'ho comprato due mesi fa. Ha uno schermo grande.", en: "Yes, I bought it two months ago. It has a big screen." },
      { speaker: "Tu", it: "La tastiera è comoda per scrivere?", en: "Is the keyboard comfortable for typing?" },
      { speaker: "Amico", it: "Sì, è silenziosa. Il mouse è senza fili.", en: "Yes, it's quiet. The mouse is wireless." },
      { speaker: "Tu", it: "Hai una stampante? Devo stampare un documento.", en: "Do you have a printer? I need to print a document." },
      { speaker: "Amico", it: "Sì, è collegata al computer. Accendo tutto?", en: "Yes, it's connected to the computer. Shall I turn everything on?" },
      { speaker: "Tu", it: "Per favore. Qual è la password del Wi-Fi?", en: "Please. What's the Wi-Fi password?" },
      { speaker: "Amico", it: "È scritta su quel post-it. 'Biblioteca2024'.", en: "It's written on that post-it. 'Biblioteca2024'." },
      { speaker: "Tu", it: "Grazie. Salvo subito il file.", en: "Thanks. I'll save the file right away." },
      { speaker: "Amico", it: "Attenzione a non perdere il documento!", en: "Be careful not to lose the document!" },
      { speaker: "Tu", it: "Non preoccupare, faccio sempre una copia.", en: "Don't worry, I always make a copy." },
      { speaker: "Amico", it: "Bravo! La tecnologia è utile ma pericolosa.", en: "Good! Technology is useful but dangerous." }
    ]
  },
  "computer_b1": {
    zoneId: "computer",
    zoneName: "Computer Station",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Il tuo computer sembra molto moderno. È un acquisto recente?", en: "Your computer looks very modern. Is it a recent purchase?" },
      { speaker: "Amico", it: "Sì, l'ho comprato circa due mesi fa. Ha uno schermo molto grande e definito.", en: "Yes, I bought it about two months ago. It has a very large and defined screen." },
      { speaker: "Tu", it: "La tastiera è comoda per scrivere a lungo?", en: "Is the keyboard comfortable for writing for a long time?" },
      { speaker: "Amico", it: "Sì, è piuttosto silenziosa e morbida. Il mouse, tra l'altro, è completamente senza fili.", en: "Yes, it's rather quiet and soft. The mouse, by the way, is completely wireless." },
      { speaker: "Tu", it: "Hai per caso una stampante funzionante? Devo stampare urgentemente un documento.", en: "Do you happen to have a working printer? I need to urgently print a document." },
      { speaker: "Amico", it: "Sì, è già collegata via Bluetooth al computer. Accendo tutto l'equipaggiamento?", en: "Yes, it's already connected via Bluetooth to the computer. Shall I turn on all the equipment?" },
      { speaker: "Tu", it: "Sì, per favore. Potresti dirmi anche qual è la password della rete Wi-Fi?", en: "Yes, please. Could you also tell me what the Wi-Fi network password is?" },
      { speaker: "Amico", it: "Certo, è scritta su quel post-it giallo appeso al monitor. 'Biblioteca2024'.", en: "Of course, it's written on that yellow post-it hanging on the monitor. 'Biblioteca2024'." },
      { speaker: "Tu", it: "Perfetto, grazie. Salvo subito il file per non rischiare di perderlo.", en: "Perfect, thanks. I'll save the file right away so as not to risk losing it." },
      { speaker: "Amico", it: "Fai bene ad essere prudente. Ricorda che la tecnologia è utile ma può essere anche molto ingannevole!", en: "You're right to be cautious. Remember that technology is useful but can also be very deceptive!" },
      { speaker: "Tu", it: "Hai ragione. Io per sicurezza faccio sempre una copia di backup su una chiavetta USB.", en: "You're right. For safety I always make a backup copy on a USB stick." },
      { speaker: "Amico", it: "Ottima abitudine! Meglio prevenire che curare, specialmente con i file importanti.", en: "Excellent habit! Better safe than sorry, especially with important files." }
    ]
  },
  // ==================== BEDROOM ====================
  "wardrobe_a2": {
    zoneId: "wardrobe",
    zoneName: "The Wardrobe",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Cosa indossi oggi? Devo scegliere un vestito.", en: "What are you wearing today? I need to choose an outfit." },
      { speaker: "Amico", it: "Io metto la camicia blu e i pantaloni grigi.", en: "I'm wearing the blue shirt and gray pants." },
      { speaker: "Tu", it: "Ti sta bene. Io preferisco la maglietta rossa.", en: "It looks good on you. I prefer the red t-shirt." },
      { speaker: "Amico", it: "È più comoda, è vero. E la giacca?", en: "It's more comfortable, it's true. And the jacket?" },
      { speaker: "Tu", it: "Non serve, fa caldo oggi. Metto solo il vestito leggero.", en: "It's not needed, it's warm today. I'll only wear the light dress." },
      { speaker: "Amico", it: "Giusto. E per stasera? Prendi il pigiama?", en: "Right. And for tonight? Are you taking pajamas?" },
      { speaker: "Tu", it: "Sì, il pigiama a righe. È il mio preferito.", en: "Yes, the striped pajamas. They're my favorite." },
      { speaker: "Amico", it: "Bella scelta! Io invece dormo con un maglione vecchio.", en: "Good choice! I, on the other hand, sleep in an old sweater." },
      { speaker: "Tu", it: "Devi comprare un pigiama nuovo!", en: "You need to buy new pajamas!" },
      { speaker: "Amico", it: "Hai ragione, il mio è pieno di buchi.", en: "You're right, mine is full of holes." },
      { speaker: "Tu", it: "Andiamo a fare shopping insieme questo weekend?", en: "Shall we go shopping together this weekend?" },
      { speaker: "Amico", it: "Volentieri! Mi serve anche un cappotto nuovo.", en: "Gladly! I also need a new coat." }
    ]
  },
  "wardrobe_b1": {
    zoneId: "wardrobe",
    zoneName: "The Wardrobe",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Hai già deciso cosa indosserai oggi? Io non so proprio cosa scegliere.", en: "Have you already decided what you'll wear today? I really don't know what to choose." },
      { speaker: "Amico", it: "Io opterò per la camicia blu e i pantaloni grigi. Sono comodi ed eleganti.", en: "I'll opt for the blue shirt and gray pants. They're comfortable and elegant." },
      { speaker: "Tu", it: "Ti sta molto bene quel look. Io invece penso di mettere la maglietta rossa che mi piace tanto.", en: "That look suits you very well. I, on the other hand, am thinking of wearing the red t-shirt I like so much." },
      { speaker: "Amico", it: "È decisamente più comoda, è innegabile. E per completare, la giacca?", en: "It's definitely more comfortable, it's undeniable. And to complete, the jacket?" },
      { speaker: "Tu", it: "Non credo ne avrò bisogno, dicono che farà abbastanza caldo oggi. Metterò solo un vestito leggero.", en: "I don't think I'll need it, they say it will be quite warm today. I'll only wear a light dress." },
      { speaker: "Amico", it: "Hai ragione. E per stasera, quando andrai a dormire? Hai preso il pigiama?", en: "You're right. And for tonight, when you go to sleep? Did you take pajamas?" },
      { speaker: "Tu", it: "Sì, ho già preparato il mio pigiama a righe blu. È senza dubbio il mio preferito.", en: "Yes, I've already prepared my blue striped pajamas. They're without a doubt my favorite." },
      { speaker: "Amico", it: "Ottima scelta! Io invece, devo confessarlo, dormo ancora con un vecchio maglione sformato.", en: "Excellent choice! I, on the other hand, must confess, I still sleep in an old misshapen sweater." },
      { speaker: "Tu", it: "Ma dai, è ora che tu compri un pigiama decente! Il tuo è ormai da buttare.", en: "Come on, it's time you buy decent pajamas! Yours are ready to be thrown away by now." },
      { speaker: "Amico", it: "Lo so, hai perfettamente ragione. Il mio pigiama attuale è letteralmente pieno di buchi.", en: "I know, you're perfectly right. My current pajamas are literally full of holes." },
      { speaker: "Tu", it: "Perfetto, allora andiamo a fare shopping insieme questo fine settimana?", en: "Perfect, so shall we go shopping together this weekend?" },
      { speaker: "Amico", it: "Accetto volentieri l'invito! Tra l'altro mi serve urgentemente anche un nuovo cappotto invernale.", en: "I gladly accept the invitation! Besides, I urgently need a new winter coat too." }
    ]
  },
  "drawer_a2": {
    zoneId: "drawer",
    zoneName: "Accessory Drawer",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Dov'è il mio portafoglio? Non lo trovo.", en: "Where's my wallet? I can't find it." },
      { speaker: "Amico", it: "Controlla nel cassetto. Forse è lì sotto le calze.", en: "Check the drawer. Maybe it's there under the socks." },
      { speaker: "Tu", it: "Ah, eccolo! E anche il mio orologio. Grazie!", en: "Ah, here it is! And also my watch. Thanks!" },
      { speaker: "Amico", it: "Prego. Hai visto i miei occhiali da sole?", en: "You're welcome. Have you seen my sunglasses?" },
      { speaker: "Tu", it: "Sono sul comodino, accanto alla lampada.", en: "They're on the nightstand, next to the lamp." },
      { speaker: "Amico", it: "Giusto, li avevo messi lì ieri sera.", en: "Right, I put them there last night." },
      { speaker: "Tu", it: "La tua cintura marrone è nel cassetto?", en: "Is your brown belt in the drawer?" },
      { speaker: "Amico", it: "Sì, è arrotolata accanto alla cravatta blu.", en: "Yes, it's rolled up next to the blue tie." },
      { speaker: "Tu", it: "Prendo anche la sciarpa? Fuori tira vento.", en: "Should I also take the scarf? It's windy outside." },
      { speaker: "Amico", it: "Sì, è meglio. E non dimenticare i guanti!", en: "Yes, it's better. And don't forget the gloves!" },
      { speaker: "Tu", it: "Grazie per il consiglio. Sei sempre molto attento.", en: "Thanks for the advice. You're always very attentive." },
      { speaker: "Amico", it: "Figurati! Prepararsi bene è importante.", en: "Don't mention it! Being well prepared is important." }
    ]
  },
  "drawer_b1": {
    zoneId: "drawer",
    zoneName: "Accessory Drawer",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Non riesco proprio a trovare il mio portafoglio. L'hai visto per caso?", en: "I really can't find my wallet. Have you seen it by any chance?" },
      { speaker: "Amico", it: "Prova a controllare nel cassetto degli accessori. Potrebbe essere finito lì sotto le calze.", en: "Try checking the accessories drawer. It might have ended up there under the socks." },
      { speaker: "Tu", it: "Ah, eccolo finalmente! E guarda, c'era anche il mio orologio che cercavo da ieri. Grazie mille!", en: "Ah, here it is finally! And look, my watch that I've been looking for since yesterday was there too. Thank you so much!" },
      { speaker: "Amico", it: "Di nulla. A proposito, hai per caso visto dove ho messo i miei occhiali da sole?", en: "You're welcome. By the way, have you by any chance seen where I put my sunglasses?" },
      { speaker: "Tu", it: "Sì, credo di averli visti sul comodino, proprio accanto alla lampada da lettura.", en: "Yes, I think I saw them on the nightstand, right next to the reading lamp." },
      { speaker: "Amico", it: "Ah, giusto! Li avevo appoggiati lì ieri sera prima di addormentarmi.", en: "Ah, right! I rested them there last night before falling asleep." },
      { speaker: "Tu", it: "Dimmi, la tua cintura marrone in pelle è conservata in questo cassetto?", en: "Tell me, is your brown leather belt kept in this drawer?" },
      { speaker: "Amico", it: "Sì, dovrebbe essere arrotolata con cura proprio accanto alla cravatta blu a righe.", en: "Yes, it should be carefully rolled up right next to the blue striped tie." },
      { speaker: "Tu", it: "Pensi che dovrei prendere anche la sciarpa di lana? Fuori sembra tirare molto vento.", en: "Do you think I should also take the wool scarf? Outside it seems very windy." },
      { speaker: "Amico", it: "Assolutamente sì, è meglio coprirsi bene. E per favore non dimenticare i guanti in pelle!", en: "Absolutely yes, it's better to cover up well. And please don't forget the leather gloves!" },
      { speaker: "Tu", it: "Grazie per i utili consigli. Sei sempre una persona molto attenta e premurosa.", en: "Thanks for the useful advice. You're always a very attentive and caring person." },
      { speaker: "Amico", it: "Figurati, è un piacere! Prepararsi bene prima di uscire è sempre molto importante.", en: "Don't mention it, it's a pleasure! Being well prepared before going out is always very important." }
    ]
  },
  "jewelry_a2": {
    zoneId: "jewelry",
    zoneName: "Jewelry Box",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Che bella collana! È d'oro?", en: "What a beautiful necklace! Is it gold?" },
      { speaker: "Amico", it: "Sì, è un regalo di mia madre. È molto speciale.", en: "Yes, it's a gift from my mother. It's very special." },
      { speaker: "Tu", it: "E quell'anello? Ha una pietra blu.", en: "And that ring? It has a blue stone." },
      { speaker: "Amico", it: "È uno zaffiro. Lo porto sempre al dito medio.", en: "It's a sapphire. I always wear it on my middle finger." },
      { speaker: "Tu", it: "Hai anche un bracciale? Non te l'ho mai visto.", en: "Do you also have a bracelet? I've never seen you wear one." },
      { speaker: "Amico", it: "Sì, ma lo tengo per le occasioni speciali.", en: "Yes, but I keep it for special occasions." },
      { speaker: "Tu", it: "E gli orecchini? Sono a forma di cuore?", en: "And the earrings? Are they heart-shaped?" },
      { speaker: "Amico", it: "Sì, li ho comprati per San Valentino.", en: "Yes, I bought them for Valentine's Day." },
      { speaker: "Tu", it: "Romantico! E l'orologio? È antico?", en: "Romantic! And the watch? Is it antique?" },
      { speaker: "Amico", it: "Sì, era di mio nonno. Ha settant'anni!", en: "Yes, it was my grandfather's. It's seventy years old!" },
      { speaker: "Tu", it: "Che bel ricordo! I gioielli raccontano storie.", en: "What a beautiful memory! Jewelry tells stories." },
      { speaker: "Amico", it: "Hai ragione. Ogni pezzo ha un significato.", en: "You're right. Every piece has a meaning." }
    ]
  },
  "jewelry_b1": {
    zoneId: "jewelry",
    zoneName: "Jewelry Box",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Che meravigliosa collana! Se non indiscreto, è d'oro vero?", en: "What a wonderful necklace! If it's not indiscreet, is it real gold?" },
      { speaker: "Amico", it: "Sì, è in oro giallo ed è un regalo molto prezioso di mia madre. Ha un valore sentimentale enorme per me.", en: "Yes, it's in yellow gold and it's a very precious gift from my mother. It has enormous sentimental value for me." },
      { speaker: "Tu", it: "Si vede che è speciale. E quell'anello che porti? Ha una pietra blu molto bella.", en: "You can tell it's special. And that ring you're wearing? It has a very beautiful blue stone." },
      { speaker: "Amico", it: "È uno zaffiro autentico. Io lo porto sempre e solo al dito medio della mano sinistra.", en: "It's an authentic sapphire. I always and only wear it on the middle finger of my left hand." },
      { speaker: "Tu", it: "Hai anche un bracciale in quella scatolina? Non te l'ho mai visto indossare.", en: "Do you also have a bracelet in that little box? I've never seen you wear it." },
      { speaker: "Amico", it: "Sì, ce l'ho, ma lo conservo gelosamente solo per le occasioni speciali e importanti.", en: "Yes, I have it, but I jealously keep it only for special and important occasions." },
      { speaker: "Tu", it: "E quegli orecchini lì? Sembrano a forma di cuore, molto romantici.", en: "And those earrings there? They look heart-shaped, very romantic." },
      { speaker: "Amico", it: "Hai indovinato! Li ho comprati proprio per festeggiare San Valentino l'anno scorso.", en: "You guessed it! I bought them exactly to celebrate Valentine's Day last year." },
      { speaker: "Tu", it: "Molto romantico! E l'orologio da taschino? Sembra un pezzo d'antiquariato.", en: "Very romantic! And the pocket watch? It looks like an antique piece." },
      { speaker: "Amico", it: "Sì, era di proprietà di mio nonno paterno. Ha ben settant'anni di storia!", en: "Yes, it was the property of my paternal grandfather. It has a good seventy years of history!" },
      { speaker: "Tu", it: "Che bellissimo ricordo familiare! I gioielli veri raccontano sempre storie uniche.", en: "What a beautiful family memory! Real jewelry always tells unique stories." },
      { speaker: "Amico", it: "Hai perfettamente ragione. Ogni singolo pezzo che possiedo ha un significato profondo e personale.", en: "You're perfectly right. Every single piece I own has a deep and personal meaning." }
    ]
  },
  "shoes_a2": {
    zoneId: "shoes",
    zoneName: "Shoe Rack",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Quante paia di scarpe hai?", en: "How many pairs of shoes do you have?" },
      { speaker: "Amico", it: "Cinque paia. Troppi, secondo mia madre!", en: "Five pairs. Too many, according to my mother!" },
      { speaker: "Tu", it: "Quali usi per andare a lavoro?", en: "Which ones do you use to go to work?" },
      { speaker: "Amico", it: "Le scarpe nere eleganti. Sono comode.", en: "The elegant black shoes. They're comfortable." },
      { speaker: "Tu", it: "E per fare sport? Hai delle scarpe da ginnastica?", en: "And for sports? Do you have sneakers?" },
      { speaker: "Amico", it: "Sì, quelle bianche e rosse. Le uso per correre.", en: "Yes, those white and red ones. I use them for running." },
      { speaker: "Tu", it: "Belle! E gli stivali? Per quando piove?", en: "Nice! And the boots? For when it rains?" },
      { speaker: "Amico", it: "Sì, quelli marroni. Li tengo vicino alla porta.", en: "Yes, the brown ones. I keep them near the door." },
      { speaker: "Tu", it: "Hai anche i sandali per l'estate?", en: "Do you also have sandals for summer?" },
      { speaker: "Amico", it: "Sì, ma sono vecchi. Devo comprarne di nuovi.", en: "Yes, but they're old. I need to buy new ones." },
      { speaker: "Tu", it: "Andiamo insieme al negozio sabato?", en: "Shall we go to the store together on Saturday?" },
      { speaker: "Amico", it: "Volentieri! Cerco anche le pantofole.", en: "Gladly! I'm also looking for slippers." }
    ]
  },
  "shoes_b1": {
    zoneId: "shoes",
    zoneName: "Shoe Rack",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Non sapevo avessi così tante scarpe. Quante paia possiedi esattamente?", en: "I didn't know you had so many shoes. How many pairs do you exactly own?" },
      { speaker: "Amico", it: "Contiamole insieme: in totale sono cinque paia. Mia madre dice che sono decisamente troppe!", en: "Let's count them together: in total there are five pairs. My mother says they're definitely too many!" },
      { speaker: "Tu", it: "E quali sono quelle che usi abitualmente per andare a lavoro in ufficio?", en: "And which are the ones you usually use to go to work at the office?" },
      { speaker: "Amico", it: "Indosso le scarpe nere eleganti che vedi lì. Sono abbastanza comode per tutta la giornata.", en: "I wear the elegant black shoes you see there. They're quite comfortable for the whole day." },
      { speaker: "Tu", it: "E per fare sport o andare a correre al parco? Hai delle scarpe da ginnastica adeguate?", en: "And for sports or going running in the park? Do you have adequate sneakers?" },
      { speaker: "Amico", it: "Sì, possiedo quelle bianche e rosse che preferisco. Le uso esclusivamente per correre.", en: "Yes, I own those white and red ones that I prefer. I use them exclusively for running." },
      { speaker: "Tu", it: "Ottimo. E quegli stivali marroni? Li usi quando piove molto?", en: "Excellent. And those brown boots? Do you use them when it rains a lot?" },
      { speaker: "Amico", it: "Esatto, sono i miei stivali impermeabili. Li tengo sempre pronti vicino alla porta d'ingresso.", en: "Exactly, they're my waterproof boots. I always keep them ready near the entrance door." },
      { speaker: "Tu", it: "Hai anche dei sandali leggeri per i mesi estivi e per la spiaggia?", en: "Do you also have light sandals for the summer months and for the beach?" },
      { speaker: "Amico", it: "Sì, ma devo ammettere che sono piuttosto vecchi e consumati. È ora di sostituirli.", en: "Yes, but I must admit they're rather old and worn out. It's time to replace them." },
      { speaker: "Tu", it: "Allora andiamo insieme in centro a fare shopping questo sabato mattina?", en: "Then shall we go together downtown shopping this Saturday morning?" },
      { speaker: "Amico", it: "Accetto volentieri! Tra l'altro cerco anche un paio di pantofole calde per casa.", en: "I gladly accept! Besides, I'm also looking for a pair of warm slippers for home." }
    ]
  },
  "bed_a2": {
    zoneId: "bed",
    zoneName: "The Bed",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Il tuo letto è molto grande! È comodo?", en: "Your bed is very big! Is it comfortable?" },
      { speaker: "Amico", it: "Sì, il materasso è nuovo. Dormo benissimo.", en: "Yes, the mattress is new. I sleep very well." },
      { speaker: "Tu", it: "E i cuscini? Sono di piume?", en: "And the pillows? Are they feather?" },
      { speaker: "Amico", it: "No, sono in memory foam. Sostengono bene la testa.", en: "No, they're memory foam. They support the head well." },
      { speaker: "Tu", it: "La coperta è pesante? Ho sempre freddo la notte.", en: "Is the blanket heavy? I'm always cold at night." },
      { speaker: "Amico", it: "È di lana, molto calda. Vuoi provarla?", en: "It's wool, very warm. Do you want to try it?" },
      { speaker: "Tu", it: "Sì, grazie. E il lenzuolo? È di cotone?", en: "Yes, thanks. And the sheet? Is it cotton?" },
      { speaker: "Amico", it: "Sì, cotone egiziano. È morbidissimo.", en: "Yes, Egyptian cotton. It's very soft." },
      { speaker: "Tu", it: "Che lusso! Io ho solo lenzuola normali.", en: "What luxury! I only have normal sheets." },
      { speaker: "Amico", it: "Dormire bene è importante per la salute.", en: "Sleeping well is important for health." },
      { speaker: "Tu", it: "Hai ragione. Dovrei cambiare il mio materasso.", en: "You're right. I should change my mattress." },
      { speaker: "Amico", it: "Fai bene! Un buon letto cambia la vita.", en: "Good idea! A good bed changes your life." }
    ]
  },
  "bed_b1": {
    zoneId: "bed",
    zoneName: "The Bed",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Wow, il tuo letto è davvero molto grande e invitante! È comodo come sembra?", en: "Wow, your bed is really very big and inviting! Is it as comfortable as it looks?" },
      { speaker: "Amico", it: "Sì, devo dire che il materasso è praticamente nuovo e ci dormo veramente benissimo.", en: "Yes, I must say the mattress is practically new and I really sleep very well on it." },
      { speaker: "Tu", it: "E quei cuscini sembrano altissimi. Sono fatti di piume d'oca?", en: "And those pillows look very high. Are they made of goose feathers?" },
      { speaker: "Amico", it: "No, in realtà sono in memory foam tecnologico. Sostengono perfettamente la testa e il collo.", en: "No, actually they're made of technological memory foam. They perfectly support the head and neck." },
      { speaker: "Tu", it: "La coperta sembra anche molto pesante. Io ho sempre freddo durante la notte.", en: "The blanket also looks very heavy. I'm always cold during the night." },
      { speaker: "Amico", it: "È una coperta di pura lana, molto calda e avvolgente. Vuoi assolutamente provarla?", en: "It's a pure wool blanket, very warm and enveloping. Do you absolutely want to try it?" },
      { speaker: "Tu", it: "Sì, grazie mille. E il lenzuolo che sento è morbido? Sembra di cotone.", en: "Yes, thank you very much. And the sheet that I feel is soft? It looks like cotton." },
      { speaker: "Amico", it: "Esatto, è cotone egiziano di altissima qualità. È morbidissimo sulla pelle.", en: "Exactly, it's very high quality Egyptian cotton. It's very soft on the skin." },
      { speaker: "Tu", it: "Che lusso! Io al momento ho solo lenzuola di cotone normale, niente di speciale.", en: "What luxury! At the moment I only have normal cotton sheets, nothing special." },
      { speaker: "Amico", it: "Dormire bene e riposare a sufficienza è fondamentale per mantenersi in salute.", en: "Sleeping well and resting sufficiently is fundamental for staying healthy." },
      { speaker: "Tu", it: "Hai perfettamente ragione. Forse è arrivato il momento che io cambi il mio vecchio materasso.", en: "You're perfectly right. Perhaps it's time that I change my old mattress." },
      { speaker: "Amico", it: "Fai benissimo! Credimi, un buon letto di qualità può davvero cambiarti la vita.", en: "Very good idea! Believe me, a good quality bed can really change your life." }
    ]
  },
  "nightstand_a2": {
    zoneId: "nightstand",
    zoneName: "Nightstand",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "La tua sveglia suona presto?", en: "Does your alarm clock ring early?" },
      { speaker: "Amico", it: "Sì, alle sei e mezza. Devo alzarmi per lavoro.", en: "Yes, at six thirty. I have to get up for work." },
      { speaker: "Tu", it: "È difficile svegliarsi così presto?", en: "Is it difficult to wake up so early?" },
      { speaker: "Amico", it: "All'inizio sì, ora ci sono abituato.", en: "At first yes, now I'm used to it." },
      { speaker: "Tu", it: "Hai una lampada per leggere la sera?", en: "Do you have a lamp for reading in the evening?" },
      { speaker: "Amico", it: "Sì, quella piccola abat-jour. È perfetta.", en: "Yes, that small bedside lamp. It's perfect." },
      { speaker: "Tu", it: "C'è un libro sul comodino? Che leggi?", en: "Is there a book on the nightstand? What are you reading?" },
      { speaker: "Amico", it: "Un giallo. Leggo due pagine prima di dormire.", en: "A mystery novel. I read two pages before sleeping." },
      { speaker: "Tu", it: "Buona abitudine! Io guardo il telefono.", en: "Good habit! I look at my phone." },
      { speaker: "Amico", it: "Non è buono per gli occhi. Prova a leggere!", en: "It's not good for the eyes. Try reading!" },
      { speaker: "Tu", it: "Hai ragione. Domani compro un libro nuovo.", en: "You're right. Tomorrow I'll buy a new book." },
      { speaker: "Amico", it: "Ottima idea! La lettura rilassa la mente.", en: "Excellent idea! Reading relaxes the mind." }
    ]
  },
  "nightstand_b1": {
    zoneId: "nightstand",
    zoneName: "Nightstand",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "A che ora hai impostato la sveglia domani mattina?", en: "What time did you set the alarm for tomorrow morning?" },
      { speaker: "Amico", it: "L'ho messa alle sei e mezza in punto. Purtroppo devo alzarmi presto per andare a lavoro.", en: "I set it at six thirty sharp. Unfortunately I have to get up early to go to work." },
      { speaker: "Tu", it: "Deve essere molto difficile svegliarsi così presto ogni mattina.", en: "It must be very difficult to wake up so early every morning." },
      { speaker: "Amico", it: "All'inizio era terribile, ma ora il mio corpo si è completamente abituato.", en: "At first it was terrible, but now my body has completely gotten used to it." },
      { speaker: "Tu", it: "Hai una lampada sul comodino per leggere tranquillamente la sera prima di dormire?", en: "Do you have a lamp on the nightstand for reading quietly in the evening before sleeping?" },
      { speaker: "Amico", it: "Sì, uso quella piccola abat-jour che vedi lì. Dà una luce soffusa perfetta.", en: "Yes, I use that small bedside lamp you see there. It gives a perfect soft light." },
      { speaker: "Tu", it: "Vedo che c'è anche un libro sul comodino. Che genere stai leggendo?", en: "I see there's also a book on the nightstand. What genre are you reading?" },
      { speaker: "Amico", it: "È un giallo avvincente. La mia routine è leggere almeno due pagine prima di addormentarmi.", en: "It's a gripping mystery novel. My routine is to read at least two pages before falling asleep." },
      { speaker: "Tu", it: "È un'abitudine molto sana! Io invece purtroppo guardo sempre il telefono.", en: "It's a very healthy habit! I, on the other hand, unfortunately always look at my phone." },
      { speaker: "Amico", it: "Non è affatto buono per la vista e per la qualità del sonno. Prova a leggere un libro!", en: "It's not at all good for your eyesight and for sleep quality. Try reading a book!" },
      { speaker: "Tu", it: "Hai perfettamente ragione. Domani passo in libreria e compro un bel romanzo.", en: "You're perfectly right. Tomorrow I'll stop by the bookstore and buy a nice novel." },
      { speaker: "Amico", it: "Ottima decisione! La lettura prima di dormire rilassa profondamente la mente.", en: "Excellent decision! Reading before sleeping deeply relaxes the mind." }
    ]
  },
  // ==================== BATHROOM ====================
  "sink_a2": {
    zoneId: "sink",
    zoneName: "The Sink",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Dov'è il sapone? Devo lavarmi le mani.", en: "Where's the soap? I need to wash my hands." },
      { speaker: "Amico", it: "È sul lavandino, accanto allo spazzolino.", en: "It's on the sink, next to the toothbrush." },
      { speaker: "Tu", it: "Grazie. Hai visto il mio dentifricio?", en: "Thanks. Have you seen my toothpaste?" },
      { speaker: "Amico", it: "È nel cassetno di sopra. Lo prendo io.", en: "It's in the top drawer. I'll get it." },
      { speaker: "Tu", it: "Aspetta, devo anche usare lo specchio. Mi taglio la barba.", en: "Wait, I also need to use the mirror. I'm shaving my beard." },
      { speaker: "Amico", it: "Attento con il rasoio! È nuovo e taglia.", en: "Be careful with the razor! It's new and sharp." },
      { speaker: "Tu", it: "Lo so, grazie. Dov'è l'asciugamano pulito?", en: "I know, thanks. Where's the clean towel?" },
      { speaker: "Amico", it: "Sul gancio, a sinistra del lavandino.", en: "On the hook, to the left of the sink." },
      { speaker: "Tu", it: "Trovato. Il rubinetto gocciola, lo sai?", en: "Found it. The faucet is dripping, you know?" },
      { speaker: "Amico", it: "Sì, devo chiamare l'idraulico.", en: "Yes, I need to call the plumber." },
      { speaker: "Tu", it: "Meglio farlo presto, spreca molta acqua.", en: "Better do it soon, it wastes a lot of water." },
      { speaker: "Amico", it: "Hai ragione. Lo faccio domani mattina.", en: "You're right. I'll do it tomorrow morning." }
    ]
  },
  "sink_b1": {
    zoneId: "sink",
    zoneName: "The Sink",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Non trovo il sapone da nessuna parte. Dov'è finito?", en: "I can't find the soap anywhere. Where did it end up?" },
      { speaker: "Amico", it: "Dovrebbe essere sul bordo del lavandino, proprio accanto allo spazzolino da denti.", en: "It should be on the edge of the sink, right next to the toothbrush." },
      { speaker: "Tu", it: "Ah, eccolo! A proposito, hai per caso visto il mio dentifricio preferito?", en: "Ah, here it is! By the way, have you by any chance seen my favorite toothpaste?" },
      { speaker: "Amico", it: "Sì, credo sia rimasto nel cassetto superiore. Vado a prenderlo io per te.", en: "Yes, I think it was left in the top drawer. I'll go get it for you." },
      { speaker: "Tu", it: "Grazie. Nel frattempo devo usare lo specchio per tagliarmi la barba.", en: "Thanks. In the meantime I need to use the mirror to shave my beard." },
      { speaker: "Amico", it: "Fai molta attenzione con quel rasoio nuovo! È molto affilato e potresti tagliarti.", en: "Be very careful with that new razor! It's very sharp and you could cut yourself." },
      { speaker: "Tu", it: "Non preoccupare, sono abbastanza esperto. Dov'è l'asciugamano pulito?", en: "Don't worry, I'm quite experienced. Where's the clean towel?" },
      { speaker: "Amico", it: "Dovrebbe essere appeso sul gancio di metallo, esattamente a sinistra del lavandino.", en: "It should be hanging on the metal hook, exactly to the left of the sink." },
      { speaker: "Tu", it: "Perfetto, l'ho trovato. Sai che il rubinetto continua a gocciolare senza sosta?", en: "Perfect, I found it. Do you know that the faucet keeps dripping nonstop?" },
      { speaker: "Amico", it: "Sì, me ne sono accorto. Devo assolutamente chiamare un idraulico competente.", en: "Yes, I noticed. I absolutely must call a competent plumber." },
      { speaker: "Tu", it: "Ti consiglio di farlo al più presto, perché così spreca davvero molta acqua potabile.", en: "I recommend you do it as soon as possible, because like this it really wastes a lot of drinking water." },
      { speaker: "Amico", it: "Hai perfettamente ragione. Lo metto in cima alla lista delle cose da fare domani mattina.", en: "You're perfectly right. I'll put it at the top of my to-do list for tomorrow morning." }
    ]
  },
  "shower_a2": {
    zoneId: "shower",
    zoneName: "The Shower",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Freddo oggi! Ho bisogno di una doccia calda.", en: "Cold today! I need a hot shower." },
      { speaker: "Amico", it: "Sì, fa un freddo terribile. L'acqua è già calda.", en: "Yes, it's terribly cold. The water is already hot." },
      { speaker: "Tu", it: "Dov'è lo shampoo? Quello nuovo.", en: "Where's the shampoo? The new one." },
      { speaker: "Amico", it: "Sulla mensola, a destra. C'è anche il bagnoschiuma.", en: "On the shelf, on the right. There's also the shower gel." },
      { speaker: "Tu", it: "Grazie. L'asciugamano è pulito?", en: "Thanks. Is the towel clean?" },
      { speaker: "Amico", it: "Sì, l'ho messo fuori stamattina.", en: "Yes, I put it out this morning." },
      { speaker: "Tu", it: "Perfetto. La doccia è piccola ma funziona bene.", en: "Perfect. The shower is small but works well." },
      { speaker: "Amico", it: "Sì, l'acqua esce forte. Non sprecarla però!", en: "Yes, the water comes out strong. Don't waste it though!" },
      { speaker: "Tu", it: "Lo so, faccio sempre docce brevi.", en: "I know, I always take short showers." },
      { speaker: "Amico", it: "Bene, così risparmiamo anche l'ambiente.", en: "Good, that way we also save the environment." },
      { speaker: "Tu", it: "Esatto! Dopo la doccia mi siedo un po'.", en: "Exactly! After the shower I'll sit for a bit." },
      { speaker: "Amico", it: "Prendi il mio accappatoio, è nel cassetto.", en: "Take my bathrobe, it's in the drawer." }
    ]
  },
  "shower_b1": {
    zoneId: "shower",
    zoneName: "The Shower",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Che giornata fredda! Ho proprio bisogno di una bella doccia calda rilassante.", en: "What a cold day! I really need a nice relaxing hot shower." },
      { speaker: "Amico", it: "Sono d'accordo, fuori fa un freddo terribile. Non preoccupare, ho già scaldato l'acqua per te.", en: "I agree, it's terribly cold outside. Don't worry, I've already heated the water for you." },
      { speaker: "Tu", it: "Ottimo. Dov'è finito lo shampoo nuovo che ho comprato ieri?", en: "Excellent. Where did the new shampoo I bought yesterday end up?" },
      { speaker: "Amico", it: "È sulla mensola di vetro, sul lato destro. Ho messo anche il bagnoschiuma nuovo accanto.", en: "It's on the glass shelf, on the right side. I also put the new shower gel next to it." },
      { speaker: "Tu", it: "Grazie. L'asciugamano grande è pulito e pronto da usare?", en: "Thanks. Is the big towel clean and ready to use?" },
      { speaker: "Amico", it: "Sì, l'ho appena cambiato e messo fuori stamattina proprio per te.", en: "Yes, I just changed it and put it out this morning exactly for you." },
      { speaker: "Tu", it: "Perfetto, grazie mille. La doccia è un po' piccola ma devo ammettere che funziona molto bene.", en: "Perfect, thank you very much. The shower is a bit small but I must admit it works very well." },
      { speaker: "Amico", it: "Sì, l'acqua esce con una pressione molto forte. Ti prego però di non sprecarla!", en: "Yes, the water comes out with very strong pressure. Please don't waste it though!" },
      { speaker: "Tu", it: "Non preoccupare, sono abituato a fare sempre docce molto brevi per risparmiare.", en: "Don't worry, I'm used to always taking very short showers to save." },
      { speaker: "Amico", it: "Ottimo comportamento! Così risparmiamo sia l'ambiente che la bolletta dell'acqua.", en: "Excellent behavior! That way we save both the environment and the water bill." },
      { speaker: "Tu", it: "Esattamente! Dopo la doccia penso di rilassarmi seduto sul divano per un po'.", en: "Exactly! After the shower I'm thinking of relaxing sitting on the couch for a bit." },
      { speaker: "Amico", it: "Prendi pure il mio accappatoio morbido che trovi nel cassetno sotto il lavandino.", en: "Feel free to take my soft bathrobe that you'll find in the drawer under the sink." }
    ]
  },
  "cabinet_a2": {
    zoneId: "cabinet",
    zoneName: "Medicine Cabinet",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Ho mal di testa. C'è dell'aspirina?", en: "I have a headache. Is there any aspirin?" },
      { speaker: "Amico", it: "Sì, nell'armadietto. Aspetta, la prendo io.", en: "Yes, in the cabinet. Wait, I'll get it." },
      { speaker: "Tu", it: "Grazie. E hai anche un termometro?", en: "Thanks. And do you also have a thermometer?" },
      { speaker: "Amico", it: "Sì, quello digitale. Vuoi che ti misuri la febbre?", en: "Yes, the digital one. Do you want me to measure your fever?" },
      { speaker: "Tu", it: "Sì, per favore. Mi sento un po' strano.", en: "Yes, please. I feel a bit strange." },
      { speaker: "Amico", it: "Trentasette e due. Hai un po' di febbre.", en: "Thirty-seven point two. You have a bit of fever." },
      { speaker: "Tu", it: "Oh no! Devo prendere qualcosa?", en: "Oh no! Do I need to take something?" },
      { speaker: "Amico", it: "Prendi questa medicina e riposati.", en: "Take this medicine and rest." },
      { speaker: "Tu", it: "C'è anche un cerotto? Mi sono scalfito.", en: "Is there also a band-aid? I scratched myself." },
      { speaker: "Amico", it: "Sì, nella scatola blu. Ne prendo uno.", en: "Yes, in the blue box. I'll get one." },
      { speaker: "Tu", it: "Grazie per tutto. Sei un infermiere perfetto!", en: "Thanks for everything. You're a perfect nurse!" },
      { speaker: "Amico", it: "Figurati! Spero che ti passi presto.", en: "Don't mention it! I hope it passes soon." }
    ]
  },
  "cabinet_b1": {
    zoneId: "cabinet",
    zoneName: "Medicine Cabinet",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Ho un mal di testa terribile. Hai per caso dell'aspirina nell'armadietto?", en: "I have a terrible headache. Do you by any chance have any aspirin in the cabinet?" },
      { speaker: "Amico", it: "Sì, dovrebbe essercene ancora nell'armadietto dei medicinali. Aspetta un attimo, vado a controllare.", en: "Yes, there should still be some in the medicine cabinet. Wait a moment, I'll go check." },
      { speaker: "Tu", it: "Grazie mille. E hai anche un termometro funzionante?", en: "Thank you very much. And do you also have a working thermometer?" },
      { speaker: "Amico", it: "Sì, ho quello digitale nuovo. Vuoi che ti misuri subito la temperatura?", en: "Yes, I have the new digital one. Do you want me to measure your temperature right away?" },
      { speaker: "Tu", it: "Sì, per favore. Mi sento stranamente debole e un po' frastornato.", en: "Yes, please. I feel strangely weak and a bit dazed." },
      { speaker: "Amico", it: "Segna trentasette e due gradi. Hai leggermente la febbre, niente di grave.", en: "It reads thirty-seven point two degrees. You have a slight fever, nothing serious." },
      { speaker: "Tu", it: "Oh no, spero di non essere contagiato! Devo prendere qualcosa subito?", en: "Oh no, I hope I'm not contagious! Do I need to take something right away?" },
      { speaker: "Amico", it: "Prendi questa medicina effervescente e poi riposati per almeno un'ora.", en: "Take this effervescent medicine and then rest for at least an hour." },
      { speaker: "Tu", it: "Grazie. A proposito, c'è anche un cerotto? Mi sono scalfito il ginocchio.", en: "Thanks. By the way, is there also a band-aid? I scratched my knee." },
      { speaker: "Amico", it: "Sì, ci sono nella scatola blu in fondo. Ne prendo subito uno per te.", en: "Yes, they're in the blue box in the back. I'll get one for you right away." },
      { speaker: "Tu", it: "Grazie per tutto l'aiuto. Sei proprio un infermiere perfetto e premuroso!", en: "Thanks for all the help. You're really a perfect and caring nurse!" },
      { speaker: "Amico", it: "Figurati, è normale! Spero davvero che ti passi tutto molto presto.", en: "Don't mention it, it's normal! I really hope everything passes for you very soon." }
    ]
  },
  // ==================== GARDEN ====================
  "flowers_a2": {
    zoneId: "flowers",
    zoneName: "The Flowers",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Guarda che bei fiori! Sono rose?", en: "Look at those beautiful flowers! Are they roses?" },
      { speaker: "Amico", it: "Sì, sono rose rosse e gialle. Le ho piantate io.", en: "Yes, they're red and yellow roses. I planted them myself." },
      { speaker: "Tu", it: "Che bello! E quelli bianchi?", en: "How nice! And those white ones?" },
      { speaker: "Amico", it: "Sono garofani. Profumano tantissimo.", en: "They're carnations. They smell so much." },
      { speaker: "Tu", it: "L'erba è molto verde. La tagli spesso?", en: "The grass is very green. Do you cut it often?" },
      { speaker: "Amico", it: "Sì, ogni sabato mattina. È rilassante.", en: "Yes, every Saturday morning. It's relaxing." },
      { speaker: "Tu", it: "C'è anche un albero da frutta?", en: "Is there also a fruit tree?" },
      { speaker: "Amico", it: "Sì, un limone. Fa molti frutti d'estate.", en: "Yes, a lemon tree. It makes a lot of fruit in summer." },
      { speaker: "Tu", it: "E i semi? Li conservi per l'anno prossimo?", en: "And the seeds? Do you save them for next year?" },
      { speaker: "Amico", it: "Sì, li metto in un barattolo di vetro.", en: "Yes, I put them in a glass jar." },
      { speaker: "Tu", it: "Sei un giardiniere naturale!", en: "You're a natural gardener!" },
      { speaker: "Amico", it: "Grazie! Mi piace molto stare all'aria aperta.", en: "Thanks! I really like being outdoors." }
    ]
  },
  "flowers_b1": {
    zoneId: "flowers",
    zoneName: "The Flowers",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Guarda che splendidi fiori in giardino! Sono delle rose?", en: "Look at the splendid flowers in the garden! Are they roses?" },
      { speaker: "Amico", it: "Sì, esatto, sono rose rosse e gialle che ho personalmente piantato questa primavera.", en: "Yes, exactly, they're red and yellow roses that I personally planted this spring." },
      { speaker: "Tu", it: "Che meraviglia! E quei fiori bianchi che vedo lì accanto?", en: "How wonderful! And those white flowers I see there next to them?" },
      { speaker: "Amico", it: "Sono garofani bianchi. Devono piacerti perché emanano un profumo molto intenso.", en: "They're white carnations. You must like them because they give off a very intense fragrance." },
      { speaker: "Tu", it: "Noto che anche l'erba del prato è incredibilmente verde. La tagli spesso?", en: "I notice that the lawn grass is also incredibly green. Do you cut it often?" },
      { speaker: "Amico", it: "Sì, la taglio religiosamente ogni sabato mattina. Trovo l'attività molto rilassante.", en: "Yes, I cut it religiously every Saturday morning. I find the activity very relaxing." },
      { speaker: "Tu", it: "Hai per caso anche un albero da frutto qui in giardino?", en: "Do you by any chance also have a fruit tree here in the garden?" },
      { speaker: "Amico", it: "Sì, ho un bel limone in un angolo. Produce tantissimi frutti durante l'estate.", en: "Yes, I have a nice lemon tree in a corner. It produces a lot of fruit during the summer." },
      { speaker: "Tu", it: "E i semi dei fiori? Li conservi per poterli piantare l'anno prossimo?", en: "And the flower seeds? Do you save them to be able to plant them next year?" },
      { speaker: "Amico", it: "Certo, li raccolgo con cura e li conservo in un barattolo di vetro in dispensa.", en: "Of course, I carefully collect them and keep them in a glass jar in the pantry." },
      { speaker: "Tu", it: "Sei proprio un giardiniere naturale, complimenti per la cura del verde!", en: "You're really a natural gardener, congratulations for taking care of the greenery!" },
      { speaker: "Amico", it: "Grazie mille! Per me stare all'aria aperta e occuparmi delle piante è una vera gioia.", en: "Thank you very much! For me being outdoors and taking care of plants is a real joy." }
    ]
  },
  "path_a2": {
    zoneId: "path",
    zoneName: "The Path",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Dove porta questo sentiero?", en: "Where does this path lead?" },
      { speaker: "Amico", it: "Porta al piccolo ponte sul fiume. È molto romantico.", en: "It leads to the small bridge on the river. It's very romantic." },
      { speaker: "Tu", it: "Andiamo a vedere? Ho voglia di camminare.", en: "Shall we go see? I feel like walking." },
      { speaker: "Amico", it: "Sì, ma fa attenzione alle pietre. Scivolano.", en: "Yes, but watch out for the stones. They're slippery." },
      { speaker: "Tu", it: "Grazie per l'avvertimento. E quel cancello?", en: "Thanks for the warning. And that gate?" },
      { speaker: "Amico", it: "È l'ingresso del giardino del vicino. È chiuso.", en: "It's the entrance to the neighbor's garden. It's closed." },
      { speaker: "Tu", it: "La terra qui è molto morbida. Piove spesso?", en: "The ground here is very soft. Does it rain often?" },
      { speaker: "Amico", it: "Sì, specialmente in primavera. Le piante crescono bene.", en: "Yes, especially in spring. The plants grow well." },
      { speaker: "Tu", it: "C'è un posto per sedersi lungo il sentiero?", en: "Is there a place to sit along the path?" },
      { speaker: "Amico", it: "Sì, c'è una panchina sotto l'albero grande.", en: "Yes, there's a bench under the big tree." },
      { speaker: "Tu", it: "Perfetto! Mi riposo un attimo.", en: "Perfect! I'll rest for a moment." },
      { speaker: "Amico", it: "Buona idea. Il paesaggio è bellissimo da lì.", en: "Good idea. The landscape is beautiful from there." }
    ]
  },
  "path_b1": {
    zoneId: "path",
    zoneName: "The Path",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Sai dirmi dove porta esattamente questo sentiero? Sembra molto invitante.", en: "Can you tell me where exactly this path leads? It looks very inviting." },
      { speaker: "Amico", it: "Porta direttamente al piccolo ponte di legno sul fiume. È un posto molto romantico al tramonto.", en: "It leads directly to the small wooden bridge on the river. It's a very romantic place at sunset." },
      { speaker: "Tu", it: "Andiamo a vedere insieme? Ho proprio voglia di fare una bella camminata.", en: "Shall we go see together? I really feel like taking a nice walk." },
      { speaker: "Amico", it: "Sì, volentieri, ma fai molta attenzione alle pietre lungo il percorso. Sono scivolose.", en: "Yes, gladly, but be very careful of the stones along the way. They're slippery." },
      { speaker: "Tu", it: "Grazie per l'avvertimento. E quel cancello di ferro che vedo in fondo?", en: "Thanks for the warning. And that iron gate I see at the end?" },
      { speaker: "Amico", it: "È l'ingresso del giardino privato del vicino. Purtroppo è sempre chiuso a chiave.", en: "It's the entrance to the neighbor's private garden. Unfortunately it's always locked." },
      { speaker: "Tu", it: "Noto che la terra qui è molto morbida e fertile. Piove spesso in questa zona?", en: "I notice that the ground here is very soft and fertile. Does it rain often in this area?" },
      { speaker: "Amico", it: "Sì, specialmente durante la primavera piove abbastanza regolarmente. Le piante ne traggono grande beneficio.", en: "Yes, especially during spring it rains quite regularly. The plants greatly benefit from it." },
      { speaker: "Tu", it: "C'è un posto tranquillo dove sedersi lungo il sentiero per riposare?", en: "Is there a quiet place to sit along the path to rest?" },
      { speaker: "Amico", it: "Sì, c'è una comoda panchina di legno proprio sotto il grande albero di quercia.", en: "Yes, there's a comfortable wooden bench right under the big oak tree." },
      { speaker: "Tu", it: "Perfetto allora! Mi ci siedo un attimo per riprendere fiato.", en: "Perfect then! I'll sit there for a moment to catch my breath." },
      { speaker: "Amico", it: "Buonissima idea. Ti assicuro che il paesaggio naturale è bellissimo da quella prospettiva.", en: "Very good idea. I assure you that the natural landscape is beautiful from that perspective." }
    ]
  },
  "sky_a2": {
    zoneId: "sky",
    zoneName: "The Sky",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Guarda che bel cielo azzurro oggi!", en: "Look at how beautiful the blue sky is today!" },
      { speaker: "Amico", it: "Sì, il sole splende e non ci sono nuvole.", en: "Yes, the sun is shining and there are no clouds." },
      { speaker: "Tu", it: "Vedi quella stella luminosa? È Venere?", en: "Do you see that bright star? Is it Venus?" },
      { speaker: "Amico", it: "Forse sì, ma è presto per le stelle. Aspetta la sera.", en: "Maybe yes, but it's early for stars. Wait for the evening." },
      { speaker: "Tu", it: "Hai ragione. E la luna stasera sarà piena?", en: "You're right. And will the moon be full tonight?" },
      { speaker: "Amico", it: "Sì, è luna piena. Sarà molto luminosa.", en: "Yes, it's a full moon. It will be very bright." },
      { speaker: "Tu", it: "Adoro guardare il cielo la notte. È rilassante.", en: "I love looking at the sky at night. It's relaxing." },
      { speaker: "Amico", it: "Anche a me. Mi piace cercare le costellazioni.", en: "Me too. I like to look for constellations." },
      { speaker: "Tu", it: "Sai riconoscere l'Orsa Maggiore?", en: "Do you know how to recognize the Big Dipper?" },
      { speaker: "Amico", it: "Sì, è facile. Sembra un grande cucchiaio.", en: "Yes, it's easy. It looks like a big spoon." },
      { speaker: "Tu", it: "Esatto! E le stelle cadenti? Ne hai mai vista una?", en: "Exactly! And shooting stars? Have you ever seen one?" },
      { speaker: "Amico", it: "Sì, l'anno scorso in montagna. Ho espresso un desiderio!", en: "Yes, last year in the mountains. I made a wish!" }
    ]
  },
  "sky_b1": {
    zoneId: "sky",
    zoneName: "The Sky",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Guarda che meraviglioso cielo azzurro oggi, senza una nuvola!", en: "Look at what a wonderful blue sky today, without a single cloud!" },
      { speaker: "Amico", it: "Sì, il sole splende magnificamente e il cielo è completamente limpido.", en: "Yes, the sun is shining magnificently and the sky is completely clear." },
      { speaker: "Tu", it: "Vedi quel punto luminoso lassù? Potrebbe essere il pianeta Venere?", en: "Do you see that bright point up there? Could it be the planet Venus?" },
      { speaker: "Amico", it: "Potrebbe essere, ma è ancora un po' presto per vedere bene le stelle. Aspetta che cali il sole.", en: "It could be, but it's still a bit early to see the stars well. Wait for the sun to set." },
      { speaker: "Tu", it: "Hai ragione. A proposito, la luna stasera sarà piena o calante?", en: "You're right. By the way, will the moon be full or waning tonight?" },
      { speaker: "Amico", it: "Stasera dovrebbe essere luna piena. Sarà molto luminosa e visibile.", en: "Tonight it should be a full moon. It will be very bright and visible." },
      { speaker: "Tu", it: "Adoro passare il tempo a guardare il cielo durante la notte. Trovo l'attività molto rilassante.", en: "I love spending time looking at the sky during the night. I find the activity very relaxing." },
      { speaker: "Amico", it: "Anche a me piace molto. Mi diverto a cercare e riconoscere le varie costellazioni.", en: "I also like it very much. I enjoy looking for and recognizing the various constellations." },
      { speaker: "Tu", it: "Sai riconoscere facilmente l'Orsa Maggiore nel cielo?", en: "Do you easily know how to recognize the Big Dipper in the sky?" },
      { speaker: "Amico", it: "Sì, è una delle più facili. Ha la forma caratteristica di un grande cucchiaio.", en: "Yes, it's one of the easiest. It has the characteristic shape of a big spoon." },
      { speaker: "Tu", it: "Esattamente! E le stelle cadenti? Hai mai avuto la fortuna di vederne una?", en: "Exactly! And shooting stars? Have you ever had the fortune to see one?" },
      { speaker: "Amico", it: "Sì, l'anno scorso in montagna ne ho vista una luminosissima. Ho subito espresso un desiderio!", en: "Yes, last year in the mountains I saw a very bright one. I immediately made a wish!" }
    ]
  },
  // ==================== TRANSPORT ====================
  "ticket-office_a2": {
    zoneId: "ticket-office",
    zoneName: "Ticket Office",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Buongiorno, un biglietto per Roma, per favore.", en: "Good morning, a ticket to Rome, please." },
      { speaker: "Amico", it: "Andata o andata e ritorno?", en: "One way or round trip?" },
      { speaker: "Tu", it: "Andata e ritorno, torno domani sera.", en: "Round trip, I'm coming back tomorrow evening." },
      { speaker: "Amico", it: "Bene. L'orario di partenza è alle dieci.", en: "Good. The departure time is at ten." },
      { speaker: "Tu", it: "Quanto costa in totale?", en: "How much does it cost in total?" },
      { speaker: "Amico", it: "Quarantacinque euro. Paga in contanti?", en: "Forty-five euros. Are you paying in cash?" },
      { speaker: "Tu", it: "Sì, ecco cinquanta euro. Tenga il resto.", en: "Yes, here's fifty euros. Keep the change." },
      { speaker: "Amico", it: "Grazie! Ecco il biglietto e lo scontrino.", en: "Thanks! Here's the ticket and the receipt." },
      { speaker: "Tu", it: "Dov'è l'uscita per il binario?", en: "Where's the exit to the platform?" },
      { speaker: "Amico", it: "A sinistra, dopo la scala mobile.", en: "To the left, after the escalator." },
      { speaker: "Tu", it: "Grazie per l'aiuto. Buona giornata!", en: "Thanks for the help. Have a good day!" },
      { speaker: "Amico", it: "Buon viaggio a lei!", en: "Have a good trip!" }
    ]
  },
  "ticket-office_b1": {
    zoneId: "ticket-office",
    zoneName: "Ticket Office",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Buongiorno, vorrei acquistare un biglietto per Roma, se possibile.", en: "Good morning, I would like to buy a ticket to Rome, if possible." },
      { speaker: "Amico", it: "Certo. Le serve solo l'andata o preferisce un biglietto di andata e ritorno?", en: "Of course. Do you need only one way or do you prefer a round-trip ticket?" },
      { speaker: "Tu", it: "Mi servirebbe l'andata e ritorno, perché torno domani sera dopo il lavoro.", en: "I would need a round trip, because I'm coming back tomorrow evening after work." },
      { speaker: "Amico", it: "Perfetto. Il treno delle dieci ha ancora posti disponibili.", en: "Perfect. The ten o'clock train still has seats available." },
      { speaker: "Tu", it: "Ottimo. Mi può dire quanto viene in totale?", en: "Excellent. Can you tell me how much it comes to in total?" },
      { speaker: "Amico", it: "Il totale è quarantacinque euro. Preferisce pagare in contanti o con carta?", en: "The total is forty-five euros. Do you prefer to pay in cash or by card?" },
      { speaker: "Tu", it: "Pago in contanti, ecco cinquanta euro. Può tenermi il resto.", en: "I'll pay in cash, here's fifty euros. You can keep the change." },
      { speaker: "Amico", it: "Grazie mille! Ecco il suo biglietto, lo scontrino e il numero del binario.", en: "Thank you very much! Here's your ticket, the receipt and the platform number." },
      { speaker: "Tu", it: "Potrebbe indicarmi dov'è l'uscita per raggiungere il binario?", en: "Could you tell me where the exit is to reach the platform?" },
      { speaker: "Amico", it: "Proceda a sinistra subito dopo la scala mobile. Non può sbagliarsi.", en: "Go to the left right after the escalator. You can't miss it." },
      { speaker: "Tu", it: "La ringrazio molto per la sua cortesia. Buona giornata!", en: "I thank you very much for your courtesy. Have a good day!" },
      { speaker: "Amico", it: "Grazie a lei! Le auguro un piacevole viaggio a Roma!", en: "Thank you! I wish you a pleasant trip to Rome!" }
    ]
  },
  "platform_a2": {
    zoneId: "platform",
    zoneName: "Platform",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Scusi, è questo il treno per Firenze?", en: "Excuse me, is this the train to Florence?" },
      { speaker: "Amico", it: "No, questo va a Napoli. Il suo è il prossimo.", en: "No, this one goes to Naples. Yours is the next one." },
      { speaker: "Tu", it: "Grazie. Quanto manca all'arrivo?", en: "Thanks. How long until arrival?" },
      { speaker: "Amico", it: "Dieci minuti. Non è in ritardo oggi.", en: "Ten minutes. It's not late today." },
      { speaker: "Tu", it: "Bene. È un treno diretto o ferma spesso?", en: "Good. Is it a direct train or does it stop often?" },
      { speaker: "Amico", it: "È diretto. Arriva a Firenze in un'ora e mezza.", en: "It's direct. It arrives in Florence in an hour and a half." },
      { speaker: "Tu", it: "Perfetto. Devo cambiare vagone?", en: "Perfect. Do I need to change cars?" },
      { speaker: "Amico", it: "No, il suo posto è nel vagone numero cinque.", en: "No, your seat is in car number five." },
      { speaker: "Tu", it: "Grazie mille. È la prima volta che prendo questo treno.", en: "Thank you very much. It's the first time I take this train." },
      { speaker: "Amico", it: "Non si preoccupi, è molto comodo.", en: "Don't worry, it's very comfortable." },
      { speaker: "Tu", it: "Buon viaggio anche a lei, se parte con questo.", en: "Have a good trip too, if you're leaving with this one." },
      { speaker: "Amico", it: "Grazie, ma io aspetto un amico. Arrivederci!", en: "Thanks, but I'm waiting for a friend. Goodbye!" }
    ]
  },
  "platform_b1": {
    zoneId: "platform",
    zoneName: "Platform",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Mi scusi, vorrei essere sicuro: è questo il treno che parte per Firenze?", en: "Excuse me, I'd like to be sure: is this the train leaving for Florence?" },
      { speaker: "Amico", it: "No, mi dispiace, questo treno qui va diretto a Napoli. Il suo è il prossimo che arriverà.", en: "No, I'm sorry, this train here goes directly to Naples. Yours is the next one that will arrive." },
      { speaker: "Tu", it: "Grazie per la precisazione. Quanto tempo manca all'arrivo del mio treno?", en: "Thanks for the clarification. How much time is left until my train arrives?" },
      { speaker: "Amico", it: "Dovrebbero essere circa dieci minuti. Per fortuna oggi non è in ritardo.", en: "It should be about ten minutes. Fortunately it's not late today." },
      { speaker: "Tu", it: "Bene. Mi può dire se è un treno diretto oppure se ferma in molte stazioni intermedie?", en: "Good. Can you tell me if it's a direct train or if it stops at many intermediate stations?" },
      { speaker: "Amico", it: "È un treno diretto. Dovrebbe arrivare a destinazione in circa un'ora e mezza.", en: "It's a direct train. It should arrive at its destination in about an hour and a half." },
      { speaker: "Tu", it: "Perfetto, così è più veloce. Devo per caso cambiare vagone durante il viaggio?", en: "Perfect, so it's faster. Do I by any chance need to change cars during the trip?" },
      { speaker: "Amico", it: "No, assolutamente. Il suo posto a sedere è prenotato nel vagone numero cinque.", en: "No, absolutely not. Your seat is reserved in car number five." },
      { speaker: "Tu", it: "La ringrazio mille per l'aiuto. Devo ammettere che è la prima volta che prendo questo treno.", en: "I thank you very much for the help. I must admit it's the first time I take this train." },
      { speaker: "Amico", it: "Non si preoccupi affatto, è un treno moderno e molto comodo.", en: "Don't worry at all, it's a modern and very comfortable train." },
      { speaker: "Tu", it: "Buon viaggio anche a lei, se dovesse partire con questo treno.", en: "Have a good trip too, if you should leave with this train." },
      { speaker: "Amico", it: "Grazie, ma in realtà sto solo aspettando un amico che deve arrivare. Arrivederci e buon viaggio!", en: "Thanks, but actually I'm just waiting for a friend who needs to arrive. Goodbye and have a good trip!" }
    ]
  },
  "street_a2": {
    zoneId: "street",
    zoneName: "Street Exit",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Scusi, dov'è l'uscita per il centro storico?", en: "Excuse me, where's the exit to the old town?" },
      { speaker: "Amico", it: "Dopo il semaforo, giri a destra all'incrocio.", en: "After the traffic light, turn right at the intersection." },
      { speaker: "Tu", it: "È lontano? Devo prendere l'autobus?", en: "Is it far? Do I need to take the bus?" },
      { speaker: "Amico", it: "No, sono solo dieci minuti a piedi.", en: "No, it's only ten minutes on foot." },
      { speaker: "Tu", it: "C'è un cartello che indica la direzione?", en: "Is there a sign indicating the direction?" },
      { speaker: "Amico", it: "Sì, segua quella strada con l'arco. Non si può sbagliare.", en: "Yes, follow that street with the arch. You can't miss it." },
      { speaker: "Tu", it: "Grazie. E la fermata del taxi è vicina?", en: "Thanks. And is the taxi stand close by?" },
      { speaker: "Amico", it: "Sì, proprio all'angolo, davanti alla banca.", en: "Yes, right at the corner, in front of the bank." },
      { speaker: "Tu", it: "Perfetto. Spero di non perdermi.", en: "Perfect. I hope I don't get lost." },
      { speaker: "Amico", it: "Non si preoccupi, è molto facile.", en: "Don't worry, it's very easy." },
      { speaker: "Tu", it: "Grazie mille per la sua gentilezza.", en: "Thank you very much for your kindness." },
      { speaker: "Amico", it: "Figurarsi! Buona passeggiata!", en: "Don't mention it! Have a nice walk!" }
    ]
  },
  "street_b1": {
    zoneId: "street",
    zoneName: "Street Exit",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Mi scusi, potrebbe indicarmi dov'è l'uscita per il centro storico?", en: "Excuse me, could you tell me where the exit to the old town is?" },
      { speaker: "Amico", it: "Certo, dopo il semaforo deve girare a destra al primo incrocio importante.", en: "Of course, after the traffic light you must turn right at the first important intersection." },
      { speaker: "Tu", it: "È molto lontano a piedi? Valuta la pena prendere l'autobus?", en: "Is it very far on foot? Is it worth taking the bus?" },
      { speaker: "Amico", it: "No, non è affatto lontano. Sono circa dieci minuti a piedi, tutto dritto.", en: "No, it's not far at all. It's about ten minutes on foot, straight ahead." },
      { speaker: "Tu", it: "C'è per caso un cartello stradale che indica chiaramente la direzione giusta?", en: "Is there by any chance a road sign that clearly indicates the right direction?" },
      { speaker: "Amico", it: "Sì, segua la strada con il grande arco di pietra. È impossibile sbagliarsi.", en: "Yes, follow the street with the big stone arch. It's impossible to miss it." },
      { speaker: "Tu", it: "Grazie. E la fermata dei taxi è nelle vicinanze o è meglio chiamarne uno?", en: "Thanks. And is the taxi stand nearby or is it better to call one?" },
      { speaker: "Amico", it: "La fermata è proprio all'angolo della strada, esattamente davanti alla grande banca.", en: "The stand is right at the corner of the street, exactly in front of the big bank." },
      { speaker: "Tu", it: "Perfetto, allora dovrebbe essere semplice. Spero solo di non perdermi per strada.", en: "Perfect, then it should be simple. I just hope I don't get lost along the way." },
      { speaker: "Amico", it: "Non si preoccupi affatto, è un percorso molto facile e ben segnalato.", en: "Don't worry at all, it's a very easy and well-marked route." },
      { speaker: "Tu", it: "La ringrazio mille per la sua gentilezza e la sua pazienza.", en: "I thank you very much for your kindness and your patience." },
      { speaker: "Amico", it: "Figurarsi, è stato un piacere! Le auguro una buona passeggiata in città!", en: "Don't mention it, it was a pleasure! I wish you a nice walk in the city!" }
    ]
  },
  // ==================== LIVING ROOM ====================
  "sofa_a2": {
    zoneId: "sofa",
    zoneName: "The Sofa",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Questo divano è comodo! Di che colore è?", en: "This couch is comfortable! What color is it?" },
      { speaker: "Amico", it: "È grigio. L'ho comprato l'anno scorso.", en: "It's gray. I bought it last year." },
      { speaker: "Tu", it: "Mi piace la poltrona accanto. È morbida?", en: "I like the armchair next to it. Is it soft?" },
      { speaker: "Amico", it: "Sì, è perfetta per leggere. Provala!", en: "Yes, it's perfect for reading. Try it!" },
      { speaker: "Tu", it: "Ottima! E il tavolino? È di legno?", en: "Excellent! And the coffee table? Is it wood?" },
      { speaker: "Amico", it: "Sì, legno massello. Molto resistente.", en: "Yes, solid wood. Very resistant." },
      { speaker: "Tu", it: "Posso mettere i piedi sul cuscino?", en: "Can I put my feet on the pillow?" },
      { speaker: "Amico", it: "Certo! Il cuscino è per rilassarsi.", en: "Of course! The pillow is for relaxing." },
      { speaker: "Tu", it: "Grazie. Mi sistemo qui per guardare un film.", en: "Thanks. I'll settle in here to watch a movie." },
      { speaker: "Amico", it: "Buona idea. Prendo la coperta, fa fresco.", en: "Good idea. I'll get the blanket, it's cool." },
      { speaker: "Tu", it: "Perfetto. Questo è il mio angolo preferito.", en: "Perfect. This is my favorite corner." },
      { speaker: "Amico", it: "Anche per me. Il divano è il cuore della casa.", en: "For me too. The couch is the heart of the home." }
    ]
  },
  "sofa_b1": {
    zoneId: "sofa",
    zoneName: "The Sofa",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Devo dire che questo divano è davvero molto comodo! Di che colore esattamente lo hai scelto?", en: "I must say that this couch is really very comfortable! What exact color did you choose it in?" },
      { speaker: "Amico", it: "È di un grigio neutro abbastanza versatile. L'ho acquistato l'anno scorso in un negozio di mobili.", en: "It's in a fairly versatile neutral gray. I bought it last year at a furniture store." },
      { speaker: "Tu", it: "Noto che anche la poltrona accanto è molto invitante. È morbida come sembra?", en: "I notice that the armchair next to it is also very inviting. Is it as soft as it looks?" },
      { speaker: "Amico", it: "Sì, è incredibilmente morbida e perfetta per passare delle ore a leggere. Provala pure!", en: "Yes, it's incredibly soft and perfect for spending hours reading. Feel free to try it!" },
      { speaker: "Tu", it: "Ottima sensazione! E quel tavolino basso? Sembra fatto di un bel legno.", en: "Excellent feeling! And that low coffee table? It looks like it's made of nice wood." },
      { speaker: "Amico", it: "Esatto, è in legno massello di rovere. È molto resistente e durevole nel tempo.", en: "Exactly, it's in solid oak wood. It's very resistant and durable over time." },
      { speaker: "Tu", it: "Posso mettere i piedi sul cuscino grande per rilassarmi meglio?", en: "Can I put my feet on the big pillow to relax better?" },
      { speaker: "Amico", it: "Certamente! Il grande cuscino è proprio lì per rendere il relax più confortevole.", en: "Certainly! The big pillow is right there to make relaxation more comfortable." },
      { speaker: "Tu", it: "Grazie, allora mi sistemo proprio qui per guardare un bel film stasera.", en: "Thanks, then I'll settle right here to watch a nice movie tonight." },
      { speaker: "Amico", it: "Buonissima idea. Prendo subito una coperta leggera perché la sera fa un po' di fresco.", en: "Very good idea. I'll get a light blanket right away because in the evening it's a bit cool." },
      { speaker: "Tu", it: "Perfetto. Devo ammettere che questo è diventato il mio angolo preferito della casa.", en: "Perfect. I must admit that this has become my favorite corner of the house." },
      { speaker: "Amico", it: "Anche per me è così. Il divano è decisamente il cuore pulsante di questa casa.", en: "For me it's the same. The couch is definitely the beating heart of this house." }
    ]
  },
  "tv_a2": {
    zoneId: "tv",
    zoneName: "The TV",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Vuoi guardare un film stasera?", en: "Do you want to watch a movie tonight?" },
      { speaker: "Amico", it: "Sì! Cosa c'è in programma?", en: "Yes! What's on?" },
      { speaker: "Tu", it: "Un'azione americana o una commedia italiana?", en: "An American action movie or an Italian comedy?" },
      { speaker: "Amico", it: "Preferisco la commedia. Voglio ridere.", en: "I prefer the comedy. I want to laugh." },
      { speaker: "Tu", it: "D'accordo. Accendo la televisione.", en: "Alright. I'll turn on the TV." },
      { speaker: "Amico", it: "Aspetta, il telecomando è sotto il cuscino.", en: "Wait, the remote is under the pillow." },
      { speaker: "Tu", it: "Trovato! Ma il volume è troppo alto.", en: "Found it! But the volume is too high." },
      { speaker: "Amico", it: "Abbassalo un po', altrimenti i vicini si lamentano.", en: "Turn it down a bit, otherwise the neighbors will complain." },
      { speaker: "Tu", it: "Fatto. Lo schermo è grande, sembra al cinema!", en: "Done. The screen is big, it feels like the movies!" },
      { speaker: "Amico", it: "Sì, è nuovo. Guardiamo in HD.", en: "Yes, it's new. Let's watch in HD." },
      { speaker: "Tu", it: "Perfetto. Passami i popcorn?", en: "Perfect. Pass me the popcorn?" },
      { speaker: "Amico", it: "Eccoli! Buona visione!", en: "Here they are! Enjoy the show!" }
    ]
  },
  "tv_b1": {
    zoneId: "tv",
    zoneName: "The TV",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Ti andrebbe di guardare un bel film insieme stasera?", en: "Would you like to watch a nice movie together tonight?" },
      { speaker: "Amico", it: "Sì, volentieri! Sai già cosa c'è in programmazione questa sera?", en: "Yes, gladly! Do you already know what's on the schedule this evening?" },
      { speaker: "Tu", it: "Possiamo scegliere tra un film d'azione americano o una commedia italiana leggera.", en: "We can choose between an American action movie or a light Italian comedy." },
      { speaker: "Amico", it: "Preferisco decisamente la commedia italiana. Stasera ho proprio voglia di ridere e rilassarmi.", en: "I definitely prefer the Italian comedy. Tonight I really feel like laughing and relaxing." },
      { speaker: "Tu", it: "Ottima scelta, anche a me piace di più. Accendo subito la televisione allora.", en: "Excellent choice, I like it more too. I'll turn on the TV right away then." },
      { speaker: "Amico", it: "Aspetta un secondo, credo che il telecomando sia finito sotto il cuscino del divano.", en: "Wait a second, I think the remote ended up under the couch pillow." },
      { speaker: "Tu", it: "Ah, eccolo qui! Ho trovato il telecomando. Ma il volume è impostato troppo alto.", en: "Ah, here it is! I found the remote. But the volume is set too high." },
      { speaker: "Amico", it: "Potresti abbassarlo un pochino, per favore? Altrimenti i vicini di sotto si lamenteranno di nuovo.", en: "Could you turn it down a bit, please? Otherwise the neighbors downstairs will complain again." },
      { speaker: "Tu", it: "Fatto, ho abbassato il volume. Lo schermo è davvero enorme, sembra di essere al cinema!", en: "Done, I turned down the volume. The screen is really huge, it feels like being at the movies!" },
      { speaker: "Amico", it: "Sì, l'ho comprato di recente e supporta anche la risoluzione in alta definizione.", en: "Yes, I bought it recently and it also supports high definition resolution." },
      { speaker: "Tu", it: "Perfetto per una serata cinema a casa. Mi passeresti i popcorn?", en: "Perfect for a movie night at home. Would you pass me the popcorn?" },
      { speaker: "Amico", it: "Eccoli freschi! Buona visione e buon divertimento!", en: "Here they are fresh! Enjoy the show and have fun!" }
    ]
  },
  "furniture_a2": {
    zoneId: "furniture",
    zoneName: "Furniture",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Che bella libreria! Quanti libri ci sono?", en: "What a beautiful bookcase! How many books are there?" },
      { speaker: "Amico", it: "Circa duecento. Ne colleziono da anni.", en: "About two hundred. I've been collecting them for years." },
      { speaker: "Tu", it: "E quel tappeto? È fatto a mano?", en: "And that rug? Is it handmade?" },
      { speaker: "Amico", it: "Sì, l'ho comprato in Turchia. È morbidissimo.", en: "Yes, I bought it in Turkey. It's very soft." },
      { speaker: "Tu", it: "Le tende sono eleganti. Filtrano la luce?", en: "The curtains are elegant. Do they filter the light?" },
      { speaker: "Amico", it: "Sì, sono a doppio strato. Oscurano bene.", en: "Yes, they're double-layered. They darken well." },
      { speaker: "Tu", it: "Lo specchio sul muro è antico?", en: "Is the mirror on the wall antique?" },
      { speaker: "Amico", it: "Sì, era di mia nonna. Ha cent'anni!", en: "Yes, it was my grandmother's. It's a hundred years old!" },
      { speaker: "Tu", it: "Che bel ricordo! E la lampada?", en: "What a beautiful memory! And the lamp?" },
      { speaker: "Amico", it: "È moderna, a risparmio energetico.", en: "It's modern, energy-saving." },
      { speaker: "Tu", it: "Hai arredato con molto gusto.", en: "You've decorated with great taste." },
      { speaker: "Amico", it: "Grazie! Mi piace avere oggetti con storia.", en: "Thanks! I like having objects with history." }
    ]
  },
  "furniture_b1": {
    zoneId: "furniture",
    zoneName: "Furniture",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Devo complimentarmi per questa bellissima libreria a parete. Quanti volumi possiedi circa?", en: "I must compliment you on this beautiful wall bookcase. How many volumes do you own approximately?" },
      { speaker: "Amico", it: "Grazie! Ci sono all'incirca duecento libri. Li colleziono con passione da molti anni.", en: "Thanks! There are approximately two hundred books. I've been collecting them passionately for many years." },
      { speaker: "Tu", it: "E quel magnifico tappeto al centro della stanza? Sembra un pezzo pregiato.", en: "And that magnificent rug in the center of the room? It looks like a precious piece." },
      { speaker: "Amico", it: "Sì, l'ho acquistato direttamente in Turchia durante un viaggio. È fatto a mano ed è morbidissimo.", en: "Yes, I bought it directly in Turkey during a trip. It's handmade and very soft." },
      { speaker: "Tu", it: "Anche le tende sono molto eleganti e raffinate. Filtrano bene la luce del sole?", en: "The curtains are also very elegant and refined. Do they filter the sunlight well?" },
      { speaker: "Amico", it: "Sì, sono a doppio strato e oscurano perfettamente la stanza quando serve.", en: "Yes, they're double-layered and perfectly darken the room when needed." },
      { speaker: "Tu", it: "Quello specchio appeso al muro sembra avere molta storia. È un pezzo d'antiquariato?", en: "That mirror hanging on the wall seems to have a lot of history. Is it an antique piece?" },
      { speaker: "Amico", it: "Sì, era appartenuto a mia nonna materna. Ha ormai più di cento anni di storia!", en: "Yes, it had belonged to my maternal grandmother. It now has more than a hundred years of history!" },
      { speaker: "Tu", it: "Un bellissimo ricordo familiare! E la lampada sul tavolino? Sembra molto moderna.", en: "A beautiful family memory! And the lamp on the side table? It looks very modern." },
      { speaker: "Amico", it: "Sì, è un modello moderno a risparmio energetico, perfetto per creare l'atmosfera giusta.", en: "Yes, it's a modern energy-saving model, perfect for creating the right atmosphere." },
      { speaker: "Tu", it: "Devo dire che hai arredato tutto con molto gusto personale e attenzione ai dettagli.", en: "I must say you've decorated everything with a lot of personal taste and attention to detail." },
      { speaker: "Amico", it: "Grazie mille! Per me è importante avere in casa oggetti che raccontano una storia personale.", en: "Thank you very much! For me it's important to have objects in the house that tell a personal story." }
    ]
  },
  // ==================== SUPERMARKET ====================
  "produce_a2": {
    zoneId: "produce",
    zoneName: "Fresh Produce",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Queste mele sono fresche?", en: "Are these apples fresh?" },
      { speaker: "Amico", it: "Sì, sono arrivate stamattina. Sono croccanti.", en: "Yes, they arrived this morning. They're crunchy." },
      { speaker: "Tu", it: "Prendo un chilo. E quelle arance?", en: "I'll take a kilo. And those oranges?" },
      { speaker: "Amico", it: "Sono dolci e succose. Prova una!", en: "They're sweet and juicy. Try one!" },
      { speaker: "Tu", it: "Grazie. Sono buone! Prendo anche delle banane.", en: "Thanks. They're good! I'll also take some bananas." },
      { speaker: "Amico", it: "Attenzione, quelle sono ancora verdi.", en: "Careful, those are still green." },
      { speaker: "Tu", it: "Hai ragione. Prendo le gialle allora.", en: "You're right. I'll take the yellow ones then." },
      { speaker: "Amico", it: "Ottima scelta. Vuoi anche delle carote?", en: "Excellent choice. Do you also want some carrots?" },
      { speaker: "Tu", it: "Sì, per l'insalata. E quei pomodori?", en: "Yes, for the salad. And those tomatoes?" },
      { speaker: "Amico", it: "Sono di stagione, molto saporiti.", en: "They're in season, very tasty." },
      { speaker: "Tu", it: "Perfetto, ne prendo mezzo chilo. Grazie!", en: "Perfect, I'll take half a kilo. Thanks!" },
      { speaker: "Amico", it: "Prego! Buona spesa!", en: "You're welcome! Happy shopping!" }
    ]
  },
  "produce_b1": {
    zoneId: "produce",
    zoneName: "Fresh Produce",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Mi scusi, queste mele che vedo sono fresche e di recente arrivo?", en: "Excuse me, are these apples I see fresh and recently arrived?" },
      { speaker: "Amico", it: "Sì, assolutamente. Sono arrivate stamattina presto e sono ancora molto croccanti.", en: "Yes, absolutely. They arrived early this morning and are still very crunchy." },
      { speaker: "Tu", it: "Perfetto, allora ne prendo un chilo intero. E quelle arance lì in fondo?", en: "Perfect, then I'll take a whole kilo. And those oranges there in the back?" },
      { speaker: "Amico", it: "Sono arance dolci e succose di Sicilia. Se vuole può assaggiarne una!", en: "They're sweet and juicy Sicilian oranges. If you want you can try one!" },
      { speaker: "Tu", it: "Grazie, sono davvero deliziose! Prendo anche un mazzo di banane mature.", en: "Thanks, they're really delicious! I'll also take a bunch of ripe bananas." },
      { speaker: "Amico", it: "Le consiglio di non prendere quelle verdi, altrimenti dovrà aspettare giorni per mangiarle.", en: "I recommend you not take the green ones, otherwise you'll have to wait days to eat them." },
      { speaker: "Tu", it: "Ha ragione, allora scelgo le banane gialle che sono già pronte.", en: "You're right, then I'll choose the yellow bananas that are already ready." },
      { speaker: "Amico", it: "Ottima scelta! Desidera anche delle carote fresche per un'insalata?", en: "Excellent choice! Would you also like some fresh carrots for a salad?" },
      { speaker: "Tu", it: "Sì, ne prendo un mazzo. E quei pomodori rossi sembrano molto invitanti.", en: "Yes, I'll take a bunch. And those red tomatoes look very inviting." },
      { speaker: "Amico", it: "Sono pomodori di stagione del posto, coltivati localmente. Sono molto saporiti.", en: "They're locally grown seasonal tomatoes. They're very tasty." },
      { speaker: "Tu", it: "Perfetto, allora ne prendo mezzo chilo. La ringrazio per la sua cortesia.", en: "Perfect, then I'll take half a kilo. I thank you for your courtesy." },
      { speaker: "Amico", it: "Grazie a lei! Le auguro una buona continuazione di spesa!", en: "Thank you! I wish you a good continuation of your shopping!" }
    ]
  },
  "dairy_a2": {
    zoneId: "dairy",
    zoneName: "Dairy Section",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Dov'è il latte fresco?", en: "Where's the fresh milk?" },
      { speaker: "Amico", it: "Nel banco refrigerato, a sinistra.", en: "In the refrigerated counter, on the left." },
      { speaker: "Tu", it: "Grazie. Prendo anche lo yogurt alla fragola.", en: "Thanks. I'll also take the strawberry yogurt." },
      { speaker: "Amico", it: "È in offerta: tre per due euro.", en: "It's on sale: three for two euros." },
      { speaker: "Tu", it: "Ottimo! Prendo tre. E il formaggio?", en: "Excellent! I'll take three. And the cheese?" },
      { speaker: "Amico", it: "Il parmigiano è qui, il mozzarella è lì.", en: "The parmesan is here, the mozzarella is there." },
      { speaker: "Tu", it: "Prendo la mozzarella. È di bufala?", en: "I'll take the mozzarella. Is it buffalo?" },
      { speaker: "Amico", it: "Sì, arriva dalla Campania ogni giorno.", en: "Yes, it comes from Campania every day." },
      { speaker: "Tu", it: "Perfetto. E il burro? È salato?", en: "Perfect. And the butter? Is it salted?" },
      { speaker: "Amico", it: "No, è dolce. Ideale per la colazione.", en: "No, it's sweet. Ideal for breakfast." },
      { speaker: "Tu", it: "Bene, ne prendo una confezione. Grazie!", en: "Good, I'll take one package. Thanks!" },
      { speaker: "Amico", it: "Prego! A presto!", en: "You're welcome! See you soon!" }
    ]
  },
  "dairy_b1": {
    zoneId: "dairy",
    zoneName: "Dairy Section",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Mi scusi, potrebbe indicarmi dov'è il latte fresco intero?", en: "Excuse me, could you tell me where the whole fresh milk is?" },
      { speaker: "Amico", it: "Certo, lo trova nel banco refrigerato centrale, esattamente sul lato sinistro.", en: "Of course, you'll find it in the central refrigerated counter, exactly on the left side." },
      { speaker: "Tu", it: "Grazie. Vorrei anche prendere dello yogurt alla fragola, se ce n'è.", en: "Thanks. I'd also like to take some strawberry yogurt, if there is any." },
      { speaker: "Amico", it: "Sì, e oggi è in offerta speciale: tre vasetti al prezzo di due euro.", en: "Yes, and today it's on special offer: three jars for the price of two euros." },
      { speaker: "Tu", it: "Ottima offerta! Allora ne prendo tre vasetti. E per quanto riguarda il formaggio?", en: "Excellent offer! Then I'll take three jars. And regarding the cheese?" },
      { speaker: "Amico", it: "Il parmigiano stagionato è qui a destra, mentre la mozzarella fresca è in fondo a sinistra.", en: "The aged parmesan is here on the right, while the fresh mozzarella is in the back on the left." },
      { speaker: "Tu", it: "Prendo la mozzarella fresca. È per caso di latte di bufala campana?", en: "I'll take the fresh mozzarella. Is it by any chance from Campanian buffalo milk?" },
      { speaker: "Amico", it: "Sì, esattamente. Arriva direttamente dalla Campania ogni singolo giorno.", en: "Yes, exactly. It arrives directly from Campania every single day." },
      { speaker: "Tu", it: "Perfetto. Vorrei anche del burro, ma preferisco quello non salato.", en: "Perfect. I'd also like some butter, but I prefer the unsalted one." },
      { speaker: "Amico", it: "Capisco. Il burro dolce è ideale per la colazione e per fare i dolci.", en: "I understand. Sweet butter is ideal for breakfast and for making desserts." },
      { speaker: "Tu", it: "Esatto, ne prendo una confezione da duecento grammi. Grazie mille!", en: "Exactly, I'll take one two-hundred-gram package. Thank you very much!" },
      { speaker: "Amico", it: "Grazie a lei per la preferenza! A presto e buona giornata!", en: "Thank you for your preference! See you soon and have a good day!" }
    ]
  },
  "checkout_a2": {
    zoneId: "checkout",
    zoneName: "Checkout",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Buongiorno, pago in contanti.", en: "Good morning, I'm paying in cash." },
      { speaker: "Amico", it: "Bene. Il totale è ventitré euro e quaranta.", en: "Good. The total is twenty-three euros and forty." },
      { speaker: "Tu", it: "Ecco trenta euro. Tenga il resto.", en: "Here's thirty euros. Keep the change." },
      { speaker: "Amico", it: "Grazie! Vuole una busta?", en: "Thanks! Do you want a bag?" },
      { speaker: "Tu", it: "Sì, per favore. Ho comprato molte cose.", en: "Yes, please. I bought many things." },
      { speaker: "Amico", it: "Ecco lo scontrino. Ha la carta fedeltà?", en: "Here's the receipt. Do you have the loyalty card?" },
      { speaker: "Tu", it: "Sì, eccola. Accumulo punti?", en: "Yes, here it is. Do I accumulate points?" },
      { speaker: "Amico", it: "Sì, ha appena raggiunto cento punti. Ha uno sconto di cinque euro.", en: "Yes, you just reached one hundred points. You have a five euro discount." },
      { speaker: "Tu", it: "Fantastico! Lo uso la prossima volta.", en: "Fantastic! I'll use it next time." },
      { speaker: "Amico", it: "Perfetto. Ha bisogno di aiuto con le buste?", en: "Perfect. Do you need help with the bags?" },
      { speaker: "Tu", it: "No, grazie. Ce la faccio da solo.", en: "No, thanks. I can manage by myself." },
      { speaker: "Amico", it: "Arrivederci e grazie per la spesa!", en: "Goodbye and thanks for shopping!" }
    ]
  },
  "checkout_b1": {
    zoneId: "checkout",
    zoneName: "Checkout",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Buongiorno, preferisco pagare la spesa in contanti, se possibile.", en: "Good morning, I prefer to pay for the shopping in cash, if possible." },
      { speaker: "Amico", it: "Certo, nessun problema. Il totale del suo scontrino è ventitré euro e quaranta centesimi.", en: "Of course, no problem. The total of your receipt is twenty-three euros and forty cents." },
      { speaker: "Tu", it: "Ecco trenta euro. Mi tenga pure il resto come mancia per la gentilezza.", en: "Here's thirty euros. Keep the change as a tip for your kindness." },
      { speaker: "Amico", it: "Grazie mille, è molto gentile da parte sua! Desidera una busta per la spesa?", en: "Thank you very much, that's very kind of you! Would you like a bag for the shopping?" },
      { speaker: "Tu", it: "Sì, per favore. Ho comprato tante cose e da solo non riesco a portarle tutte.", en: "Yes, please. I bought so many things and by myself I can't carry them all." },
      { speaker: "Amico", it: "Ecco lo scontrino dettagliato. Ha con sé la carta fedeltà del supermercato?", en: "Here's the detailed receipt. Do you have the supermarket loyalty card with you?" },
      { speaker: "Tu", it: "Sì, ce l'ho qui nel portafoglio. Accumulo qualche punto con questa spesa?", en: "Yes, I have it here in my wallet. Do I accumulate any points with this shopping?" },
      { speaker: "Amico", it: "Sì, con questo acquisto ha appena raggiunto cento punti. Ha diritto a uno sconto di cinque euro.", en: "Yes, with this purchase you just reached one hundred points. You're entitled to a five euro discount." },
      { speaker: "Tu", it: "Fantastico! Allora userò lo sconto la prossima volta che verrò a fare la spesa.", en: "Fantastic! Then I'll use the discount next time I come shopping." },
      { speaker: "Amico", it: "Perfetto. Ha bisogno di qualche aiuto per portare le buste fino all'auto?", en: "Perfect. Do you need any help carrying the bags to the car?" },
      { speaker: "Tu", it: "No, la ringrazio. Ce la faccio benissimo da solo. Buon lavoro!", en: "No, thank you. I can manage very well by myself. Good work!" },
      { speaker: "Amico", it: "Grazie a lei! Arrivederci e a presto!", en: "Thank you! Goodbye and see you soon!" }
    ]
  },
  // ==================== CAFE ====================
  "counter_a2": {
    zoneId: "counter",
    zoneName: "The Counter",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Buongiorno! Un caffè, per favore.", en: "Good morning! A coffee, please." },
      { speaker: "Amico", it: "Solo caffè? Vuoi anche un cornetto?", en: "Just coffee? Do you also want a croissant?" },
      { speaker: "Tu", it: "Sì, alla crema, grazie. Quanto viene?", en: "Yes, with cream, thanks. How much is it?" },
      { speaker: "Amico", it: "Due euro e venti. Ecco il vassoio.", en: "Two euros and twenty. Here's the tray." },
      { speaker: "Tu", it: "Grazie. Il menu è scritto sulla lavagna?", en: "Thanks. Is the menu written on the blackboard?" },
      { speaker: "Amico", it: "Sì, oggi abbiamo anche i biscotti freschi.", en: "Yes, today we also have fresh cookies." },
      { speaker: "Tu", it: "Ne prendo uno per dopo. Ecco i soldi.", en: "I'll take one for later. Here's the money." },
      { speaker: "Amico", it: "Grazie! Il barista è molto bravo.", en: "Thanks! The barista is very good." },
      { speaker: "Tu", it: "Lo so, viene sempre qui al mattino.", en: "I know, I always come here in the morning." },
      { speaker: "Amico", it: "Anche io. È il bar migliore del quartiere.", en: "Me too. It's the best bar in the neighborhood." },
      { speaker: "Tu", it: "Sono d'accordo. Buon caffè!", en: "I agree. Enjoy your coffee!" },
      { speaker: "Amico", it: "A te! A domani!", en: "To you! See you tomorrow!" }
    ]
  },
  "counter_b1": {
    zoneId: "counter",
    zoneName: "The Counter",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Buongiorno! Vorrei un buon caffè espresso, per favore.", en: "Good morning! I'd like a good espresso coffee, please." },
      { speaker: "Amico", it: "Solo il caffè? Non le va di accompagnarlo con un cornetto fresco?", en: "Just the coffee? Wouldn't you like to accompany it with a fresh croissant?" },
      { speaker: "Tu", it: "Sì, volentieri, alla crema pasticcera. Quanto viene in totale?", en: "Yes, gladly, with pastry cream. How much does it come to in total?" },
      { speaker: "Amico", it: "Sono due euro e venti centesimi. Ecco il vassoio con il suo ordine.", en: "That's two euros and twenty cents. Here's the tray with your order." },
      { speaker: "Tu", it: "Grazie. A proposito, il menu completo è quello scritto sulla lavagna dietro di lei?", en: "Thanks. By the way, is the complete menu the one written on the blackboard behind you?" },
      { speaker: "Amico", it: "Sì, esatto. E oggi come specialità abbiamo anche dei biscotti appena sfornati.", en: "Yes, exactly. And today as a specialty we also have freshly baked cookies." },
      { speaker: "Tu", it: "Allora ne prendo uno per dopo pranzo. Ecco i soldi esatti.", en: "Then I'll take one for after lunch. Here's the exact money." },
      { speaker: "Amico", it: "Grazie mille! Sappia che il nostro barista è molto bravo e prepara un caffè eccellente.", en: "Thank you very much! Know that our barista is very good and makes excellent coffee." },
      { speaker: "Tu", it: "Lo so bene, per questo vengo sempre qui al mattino prima di lavorare.", en: "I know well, that's why I always come here in the morning before working." },
      { speaker: "Amico", it: "Anche io sono un cliente abituale. Per me è decisamente il bar migliore di tutto il quartiere.", en: "I'm also a regular customer too. For me it's definitely the best bar in the whole neighborhood." },
      { speaker: "Tu", it: "Sono completamente d'accordo con lei. Buon caffè allora!", en: "I completely agree with you. Enjoy your coffee then!" },
      { speaker: "Amico", it: "Altrettanto! Ci vediamo domani mattina come al solito!", en: "Likewise! See you tomorrow morning as usual!" }
    ]
  },
  "table-cafe_a2": {
    zoneId: "table-cafe",
    zoneName: "Café Table",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Questo tavolo è libero? Posso sedermi?", en: "Is this table free? Can I sit down?" },
      { speaker: "Amico", it: "Sì, si accomodi. Ha già ordinato?", en: "Yes, please have a seat. Have you already ordered?" },
      { speaker: "Tu", it: "No, aspetto un amico. Arriva tra poco.", en: "No, I'm waiting for a friend. He's arriving soon." },
      { speaker: "Amico", it: "Nessun problema. Le porto il menu.", en: "No problem. I'll bring you the menu." },
      { speaker: "Tu", it: "Grazie. Avete anche il menu in inglese?", en: "Thanks. Do you also have the menu in English?" },
      { speaker: "Amico", it: "Sì, eccolo. Ecco anche il bicchiere d'acqua.", en: "Yes, here it is. Here's also the glass of water." },
      { speaker: "Tu", it: "Gentilissimo. E il conto lo pago alla fine?", en: "Very kind. And do I pay the bill at the end?" },
      { speaker: "Amico", it: "Sì, alla cassa. Vuole lo scontrino?", en: "Yes, at the counter. Do you want the receipt?" },
      { speaker: "Tu", it: "Sì, per favore. Sono turista.", en: "Yes, please. I'm a tourist." },
      { speaker: "Amico", it: "Capisco. Benvenuto nella nostra città!", en: "I understand. Welcome to our city!" },
      { speaker: "Tu", it: "Grazie! È bellissima qui.", en: "Thanks! It's beautiful here." },
      { speaker: "Amico", it: "Sono contento. Si goda la visita!", en: "I'm glad. Enjoy your visit!" }
    ]
  },
  "table-cafe_b1": {
    zoneId: "table-cafe",
    zoneName: "Café Table",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Mi scusi, questo tavolino vicino alla finestra è libero? Posso sedermi?", en: "Excuse me, is this little table near the window free? Can I sit down?" },
      { speaker: "Amico", it: "Sì, si accomodi pure. Ha già deciso cosa ordinare o sta ancora aspettando?", en: "Yes, please have a seat. Have you already decided what to order or are you still waiting?" },
      { speaker: "Tu", it: "Sto aspettando un amico che dovrebbe arrivare da un momento all'altro.", en: "I'm waiting for a friend who should arrive any moment." },
      { speaker: "Amico", it: "Nessun problema, faccia pure comodo. Le porto subito il menu da consultare.", en: "No problem, make yourself comfortable. I'll bring you the menu right away to look at." },
      { speaker: "Tu", it: "Grazie. Per caso avete anche il menu tradotto in inglese?", en: "Thanks. Do you by any chance also have the menu translated into English?" },
      { speaker: "Amico", it: "Sì, ecco la versione in inglese. Le porto anche subito un bicchiere d'acqua fresca.", en: "Yes, here's the English version. I'll also bring you a glass of fresh water right away." },
      { speaker: "Tu", it: "Gentilissimo, grazie. Il conto lo saldo direttamente qui al tavolo o alla cassa?", en: "Very kind, thanks. Do I pay the bill directly here at the table or at the counter?" },
      { speaker: "Amico", it: "Può pagare comodamente alla cassa in uscita. Desidera lo scontrino fiscale?", en: "You can comfortably pay at the counter on your way out. Would you like the fiscal receipt?" },
      { speaker: "Tu", it: "Sì, per favore, se non è un problema. Sono turista e devo tenere le ricevute.", en: "Yes, please, if it's not a problem. I'm a tourist and I need to keep the receipts." },
      { speaker: "Amico", it: "Capisco perfettamente. Le do il benvenuto nella nostra splendida città!", en: "I understand perfectly. I give you welcome to our splendid city!" },
      { speaker: "Tu", it: "La ringrazio molto! Devo dire che è veramente bellissima e piena di vita.", en: "I thank you very much! I must say it's really beautiful and full of life." },
      { speaker: "Amico", it: "Sono davvero contento che le piaccia. Si goda al massimo la sua visita!", en: "I'm really glad you like it. Enjoy your visit to the fullest!" }
    ]
  },
  // ==================== GALLERY ====================
  "paintings_a2": {
    zoneId: "paintings",
    zoneName: "The Paintings",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Guarda quel quadro! Che colori vivaci!", en: "Look at that painting! What vivid colors!" },
      { speaker: "Amico", it: "Sì, è una pittura moderna. L'artista usa molto il rosso.", en: "Yes, it's a modern painting. The artist uses a lot of red." },
      { speaker: "Tu", it: "E quella scultura in metallo? Sembra un uccello.", en: "And that metal sculpture? It looks like a bird." },
      { speaker: "Amico", it: "Esatto, è un falco. È molto elegante.", en: "Exactly, it's a falcon. It's very elegant." },
      { speaker: "Tu", it: "La luce in questa stanza è perfetta.", en: "The light in this room is perfect." },
      { speaker: "Amico", it: "Sì, è studiata per valorizzare le opere.", en: "Yes, it's designed to enhance the works." },
      { speaker: "Tu", it: "Chi è l'artista del quadro grande?", en: "Who is the artist of the big painting?" },
      { speaker: "Amico", it: "Un pittore locale. Questa è la sua prima mostra.", en: "A local painter. This is his first exhibition." },
      { speaker: "Tu", it: "Molto impressionante! Quanto costa?", en: "Very impressive! How much does it cost?" },
      { speaker: "Amico", it: "Cento euro. Non è molto per un'opera originale.", en: "One hundred euros. It's not much for an original work." },
      { speaker: "Tu", it: "Hai ragione. Compro una stampa.", en: "You're right. I'll buy a print." },
      { speaker: "Amico", it: "Buona idea! Ecco il catalogo.", en: "Good idea! Here's the catalog." }
    ]
  },
  "paintings_b1": {
    zoneId: "paintings",
    zoneName: "The Paintings",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Guarda che quadro straordinario! I colori sono incredibilmente vivaci!", en: "Look at that extraordinary painting! The colors are incredibly vivid!" },
      { speaker: "Amico", it: "Sì, appartiene al movimento della pittura moderna contemporanea. L'artista sembra usare molto il rosso come colore dominante.", en: "Yes, it belongs to the contemporary modern painting movement. The artist seems to use a lot of red as the dominant color." },
      { speaker: "Tu", it: "E quella scultura in metallo lucido che vedo lì? A me sembra raffigurare un uccello.", en: "And that shiny metal sculpture I see there? To me it seems to depict a bird." },
      { speaker: "Amico", it: "Ha indovinato, dovrebbe rappresentare un falco in volo. È un'opera molto elegante e dinamica.", en: "You guessed it, it should represent a falcon in flight. It's a very elegant and dynamic work." },
      { speaker: "Tu", it: "La luce naturale che entra in questa sala è assolutamente perfetta per l'esposizione.", en: "The natural light that enters this room is absolutely perfect for the exhibition." },
      { speaker: "Amico", it: "Sì, è stata studiata e calibrata appositamente per valorizzare al meglio le opere esposte.", en: "Yes, it was studied and calibrated specifically to best enhance the exhibited works." },
      { speaker: "Tu", it: "Chi è l'artista che ha realizzato il quadro più grande della parete di fondo?", en: "Who is the artist who made the biggest painting on the back wall?" },
      { speaker: "Amico", it: "È un pittore locale molto promettente. Questa è in assoluto la sua prima mostra personale.", en: "It's a very promising local painter. This is absolutely his first solo exhibition." },
      { speaker: "Tu", it: "Davvero molto impressionante per un esordiente! Sai per caso quanto costa?", en: "Really very impressive for a debut artist! Do you by any chance know how much it costs?" },
      { speaker: "Amico", it: "Il prezzo è di cento euro. Non è eccessivo se si considera che è un'opera originale.", en: "The price is one hundred euros. It's not excessive considering that it's an original work." },
      { speaker: "Tu", it: "Ha ragione. Allora compro almeno una stampa firmata come ricordo.", en: "You're right. Then I'll buy at least a signed print as a souvenir." },
      { speaker: "Amico", it: "Ottima idea! Le faccio vedere il catalogo completo delle opere disponibili.", en: "Excellent idea! I'll show you the complete catalog of available works." }
    ]
  },
  "shopping_a2": {
    zoneId: "shopping",
    zoneName: "Gift Shop",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Cerco un regalo per mia madre. Che mi consiglia?", en: "I'm looking for a gift for my mother. What do you recommend?" },
      { speaker: "Amico", it: "Questa cartolina è carina, oppure questa maglietta.", en: "This postcard is cute, or this t-shirt." },
      { speaker: "Tu", it: "La maglietta è bella. Di che taglia è?", en: "The t-shirt is nice. What size is it?" },
      { speaker: "Amico", it: "È una media. Vuole provarla?", en: "It's a medium. Would you like to try it?" },
      { speaker: "Tu", it: "No, è un regalo. Prendo anche un libro.", en: "No, it's a gift. I'll also take a book." },
      { speaker: "Amico", it: "Abbiamo questo libro sulla storia della città.", en: "We have this book on the history of the city." },
      { speaker: "Tu", it: "Perfetto! Lei ama la storia. Quanto viene?", en: "Perfect! She loves history. How much is it?" },
      { speaker: "Amico", it: "Quindici euro. In totale fa venticinque.", en: "Fifteen euros. In total it makes twenty-five." },
      { speaker: "Tu", it: "Va bene. Pago con la carta.", en: "Alright. I'll pay by card." },
      { speaker: "Amico", it: "Certo. Ecco il suo scontrino.", en: "Of course. Here's your receipt." },
      { speaker: "Tu", it: "Grazie! Avete una borsa?", en: "Thanks! Do you have a bag?" },
      { speaker: "Amico", it: "Sì, ecco. Torni a trovarci!", en: "Yes, here. Come visit us again!" }
    ]
  },
  "shopping_b1": {
    zoneId: "shopping",
    zoneName: "Gift Shop",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Sto cercando un regalo speciale per il compleanno di mia madre. Cosa mi consiglia di questi articoli?", en: "I'm looking for a special gift for my mother's birthday. What do you recommend among these items?" },
      { speaker: "Amico", it: "Potrebbe scegliere questa cartolina artistica, oppure questa maglietta di ottima qualità.", en: "You could choose this artistic postcard, or this very good quality t-shirt." },
      { speaker: "Tu", it: "La maglietta mi sembra molto bella e originale. Di che taglia esattamente?", en: "The t-shirt seems very nice and original to me. What exact size is it?" },
      { speaker: "Amico", it: "Questo modello è una taglia media. Desidera che la faccia provare?", en: "This model is a medium size. Would you like me to let you try it?" },
      { speaker: "Tu", it: "No, non serve, è un regalo a sorpresa. Prendo anche un bel libro da abbinare.", en: "No, it's not necessary, it's a surprise gift. I'll also take a nice book to go with it." },
      { speaker: "Amico", it: "Le consiglio questo bellissimo libro illustrato sulla storia affascinante della nostra città.", en: "I recommend this beautiful illustrated book on the fascinating history of our city." },
      { speaker: "Tu", it: "Perfetto, lei adora la storia locale! Quanto viene in totale per entrambi gli articoli?", en: "Perfect, she loves local history! How much does it come to in total for both items?" },
      { speaker: "Amico", it: "Il libro è quindici euro, quindi in totale per entrambi fa venticinque euro esatti.", en: "The book is fifteen euros, so in total for both it makes exactly twenty-five euros." },
      { speaker: "Tu", it: "Va benissimo. Preferisco pagare comodamente con la carta di credito.", en: "That's fine. I prefer to pay comfortably with credit card." },
      { speaker: "Amico", it: "Certo, nessun problema. Ecco il suo scontrino e la ricevuta di pagamento.", en: "Of course, no problem. Here's your receipt and payment receipt." },
      { speaker: "Tu", it: "La ringrazio. Per caso avete una bella borsa da regalo per impacchettare tutto?", en: "I thank you. Do you by any chance have a nice gift bag to wrap everything?" },
      { speaker: "Amico", it: "Sì, ecco una borsa elegante. Torni presto a trovarci, sarà sempre il benvenuto!", en: "Yes, here's an elegant bag. Come visit us again soon, you'll always be welcome!" }
    ]
  },
  // ==================== ANIMALS ====================
  "reptiles_a2": {
    zoneId: "reptiles",
    zoneName: "Reptile House",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Guarda quel serpente! È enorme!", en: "Look at that snake! It's huge!" },
      { speaker: "Amico", it: "Sì, è un pitone. Non è velenoso.", en: "Yes, it's a python. It's not venomous." },
      { speaker: "Tu", it: "Meno male! E quella lucertola verde?", en: "Thank goodness! And that green lizard?" },
      { speaker: "Amico", it: "È un'iguana. Vive nelle foreste tropicali.", en: "It's an iguana. It lives in tropical forests." },
      { speaker: "Tu", it: "Sembra molto tranquilla. Si può toccare?", en: "It looks very calm. Can you touch it?" },
      { speaker: "Amico", it: "No, è vietato. Per sicurezza.", en: "No, it's forbidden. For safety." },
      { speaker: "Tu", it: "Hai ragione. E la tartaruga lì in fondo?", en: "You're right. And the turtle there in the back?" },
      { speaker: "Amico", it: "Ha cento anni! È la star dello zoo.", en: "It's a hundred years old! It's the star of the zoo." },
      { speaker: "Tu", it: "Wow! Devo fare una foto.", en: "Wow! I must take a photo." },
      { speaker: "Amico", it: "Sì, ma senza flash. Disturba gli animali.", en: "Yes, but without flash. It disturbs the animals." },
      { speaker: "Tu", it: "Ok, capito. Sono animali affascinanti.", en: "Ok, understood. They're fascinating animals." },
      { speaker: "Amico", it: "Sono i miei preferiti dello zoo!", en: "They're my favorites at the zoo!" }
    ]
  },
  "reptiles_b1": {
    zoneId: "reptiles",
    zoneName: "Reptile House",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Guarda che serpente enorme! Sembra pericoloso a prima vista.", en: "Look at that enormous snake! It looks dangerous at first sight." },
      { speaker: "Amico", it: "Sì, è impressionante, ma si tratta di un pitone che non è affatto velenoso.", en: "Yes, it's impressive, but it's a python that's not venomous at all." },
      { speaker: "Tu", it: "Meno male, che sollievo! E quella lucertola verde brillante sul ramo?", en: "Thank goodness, what a relief! And that bright green lizard on the branch?" },
      { speaker: "Amico", it: "È un'iguana. Questo tipo di rettile vive naturalmente nelle fitte foreste tropicali.", en: "It's an iguana. This type of reptile naturally lives in dense tropical forests." },
      { speaker: "Tu", it: "Sembra stranamente molto tranquilla e indifferente. È permesso toccarla?", en: "It strangely seems very calm and indifferent. Is it allowed to touch it?" },
      { speaker: "Amico", it: "No, assolutamente vietato toccare qualsiasi animale. È una norma di sicurezza rigida.", en: "No, absolutely forbidden to touch any animal. It's a strict safety rule." },
      { speaker: "Tu", it: "Ha perfettamente ragione. E quella tartaruga gigante lì in fondo alla gabbia?", en: "You're perfectly right. And that giant turtle there at the back of the cage?" },
      { speaker: "Amico", it: "Quella tartaruga ha la bellezza di cento anni! È la vera star indiscussa di questo zoo.", en: "That turtle is a good hundred years old! It's the true undisputed star of this zoo." },
      { speaker: "Tu", it: "Incredibile! Devo assolutamente fare una bella foto come ricordo.", en: "Incredible! I absolutely must take a nice photo as a souvenir." },
      { speaker: "Amico", it: "Sì, ma per favore senza usare il flash. Potrebbe disturbare e stressare gli animali.", en: "Yes, but please without using the flash. It could disturb and stress the animals." },
      { speaker: "Tu", it: "D'accordo, ho capito. Sono davvero animali molto affascinanti e misteriosi.", en: "Alright, I understood. They're really very fascinating and mysterious animals." },
      { speaker: "Amico", it: "Sono completamente d'accordo, sono i miei preferiti assoluti di tutto lo zoo!", en: "I completely agree, they're my absolute favorites in the whole zoo!" }
    ]
  },
  "mammals_a2": {
    zoneId: "mammals",
    zoneName: "Mammal Zone",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Guarda quel cane! È enorme e peloso.", en: "Look at that dog! It's huge and furry." },
      { speaker: "Amico", it: "Sì, sembra un orso. Ma è dolcissimo.", en: "Yes, it looks like a bear. But it's very sweet." },
      { speaker: "Tu", it: "E quel gatto nero? Ha gli occhi gialli.", en: "And that black cat? It has yellow eyes." },
      { speaker: "Amico", it: "È un gatto persiano. È molto elegante.", en: "It's a Persian cat. It's very elegant." },
      { speaker: "Tu", it: "La mucca fa molto latte?", en: "Does the cow make a lot of milk?" },
      { speaker: "Amico", it: "Sì, è una razza da latte. Produttiva.", en: "Yes, it's a dairy breed. Productive." },
      { speaker: "Tu", it: "E il cavallo? È da corsa?", en: "And the horse? Is it a racehorse?" },
      { speaker: "Amico", it: "No, è da tiro. Usato in fattoria.", en: "No, it's a draft horse. Used on the farm." },
      { speaker: "Tu", it: "I conigli sono teneri. Ne vorrei uno.", en: "The rabbits are adorable. I'd like one." },
      { speaker: "Amico", it: "Sono facili da tenere. Ma mangiano tanto!", en: "They're easy to keep. But they eat a lot!" },
      { speaker: "Tu", it: "Lo so, mia nonna ne aveva tanti.", en: "I know, my grandmother had many." },
      { speaker: "Amico", it: "Allora conosci bene i conigli!", en: "Then you know rabbits well!" }
    ]
  },
  "mammals_b1": {
    zoneId: "mammals",
    zoneName: "Mammal Zone",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Guarda che cane imponente! Sembra enorme e molto peloso.", en: "Look at that imposing dog! It looks huge and very furry." },
      { speaker: "Amico", it: "Sì, a prima vista sembra quasi un orso. In realtà però è un cane dolcissimo e affettuoso.", en: "Yes, at first sight it almost looks like a bear. Actually though it's a very sweet and affectionate dog." },
      { speaker: "Tu", it: "E quel gatto nero lussuoso? Ha degli occhi gialli molto intensi.", en: "And that luxurious black cat? It has very intense yellow eyes." },
      { speaker: "Amico", it: "È un gatto persiano puro. È considerato una razza molto elegante e raffinata.", en: "It's a pure Persian cat. It's considered a very elegant and refined breed." },
      { speaker: "Tu", it: "Quella mucca lì produce molto latte ogni giorno?", en: "Does that cow there produce a lot of milk every day?" },
      { speaker: "Amico", it: "Sì, appartiene a una razza da latte molto produttiva e conosciuta.", en: "Yes, it belongs to a very productive and well-known dairy breed." },
      { speaker: "Tu", it: "E quel cavallo robusto? È un cavallo da corsa o da lavoro?", en: "And that robust horse? Is it a racehorse or a workhorse?" },
      { speaker: "Amico", it: "Non è da corsa, è un cavallo da tiro tradizionale. Viene usato in fattoria per i lavori pesanti.", en: "It's not for racing, it's a traditional draft horse. It's used on the farm for heavy work." },
      { speaker: "Tu", it: "I conigli bianchi sono così teneri. Vorrei tanto averne uno come animale domestico.", en: "The white rabbits are so adorable. I'd really like to have one as a pet." },
      { speaker: "Amico", it: "Sono animali facili da tenere in casa. Bisogna però sapere che mangiano davvero tanto!", en: "They're easy animals to keep at home. However you must know that they really eat a lot!" },
      { speaker: "Tu", it: "Lo so bene, mia nonna ne allevava tantissimi quando ero piccolo.", en: "I know well, my grandmother raised a lot of them when I was little." },
      { speaker: "Amico", it: "Allora conosci già perfettamente le abitudini e il carattere dei conigli!", en: "Then you already perfectly know the habits and character of rabbits!" }
    ]
  },
  // ==================== WEATHER ====================
  "storms_a2": {
    zoneId: "storms",
    zoneName: "Storm Center",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Guarda che temporale! Che tuono forte!", en: "Look at that thunderstorm! What loud thunder!" },
      { speaker: "Amico", it: "Sì, e quel fulmine! Sembra molto vicino.", en: "Yes, and that lightning! It seems very close." },
      { speaker: "Tu", it: "Pensi che piova? Il cielo è nero.", en: "Do you think it's raining? The sky is black." },
      { speaker: "Amico", it: "Sì, inizia a piovere a dirotto. Entriamo!", en: "Yes, it's starting to pour. Let's go inside!" },
      { speaker: "Tu", it: "E la grandine? Può venire?", en: "And the hail? Can it come?" },
      { speaker: "Amico", it: "Forse sì. Meglio mettere l'auto al riparo.", en: "Maybe yes. Better put the car under shelter." },
      { speaker: "Tu", it: "C'è anche la nebbia. Non si vede niente!", en: "There's also fog. You can't see anything!" },
      { speaker: "Amico", it: "Sì, è pericoloso guidare così.", en: "Yes, it's dangerous to drive like this." },
      { speaker: "Tu", it: "Aspettiamo che passi il temporale.", en: "Let's wait for the thunderstorm to pass." },
      { speaker: "Amico", it: "Buona idea. Preparo un tè caldo.", en: "Good idea. I'll make hot tea." },
      { speaker: "Tu", it: "Perfetto! Il tepore ci aiuterà.", en: "Perfect! The warmth will help us." },
      { speaker: "Amico", it: "Sì, il maltempo fa venire fame!", en: "Yes, bad weather makes you hungry!" }
    ]
  },
  "storms_b1": {
    zoneId: "storms",
    zoneName: "Storm Center",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Guarda che temporale impressionante! Quel tuono era davvero fortissimo!", en: "Look at that impressive thunderstorm! That thunder was really very strong!" },
      { speaker: "Amico", it: "Sì, e quel fulmine che abbiamo appena visto sembrava incredibilmente vicino a noi.", en: "Yes, and that lightning we just saw seemed incredibly close to us." },
      { speaker: "Tu", it: "Pensi che stia per piovere molto? Il cielo è diventato completamente nero.", en: "Do you think it's about to rain a lot? The sky has become completely black." },
      { speaker: "Amico", it: "Sì, purtroppo sta già iniziando a piovere a dirotto. Facciamo meglio a entrare subito!", en: "Yes, unfortunately it's already starting to pour. We'd better go inside right away!" },
      { speaker: "Tu", it: "E la grandine? C'è il rischio che arrivi anche quella?", en: "And the hail? Is there a risk that will come too?" },
      { speaker: "Amico", it: "È possibile, sì. Sarà meglio mettere subito l'auto al riparo in garage.", en: "It's possible, yes. It would be better to put the car under shelter in the garage right away." },
      { speaker: "Tu", it: "Noto che c'è anche molta nebbia. Non si riesce quasi a vedere nulla!", en: "I notice there's also a lot of fog. You can hardly see anything!" },
      { speaker: "Amico", it: "Sì, questa combinazione di pioggia e nebbia rende la guida davvero pericolosa.", en: "Yes, this combination of rain and fog makes driving really dangerous." },
      { speaker: "Tu", it: "Allora aspettiamo pazientemente che passi completamente il temporale.", en: "Then let's patiently wait for the thunderstorm to completely pass." },
      { speaker: "Amico", it: "Buonissima idea. Intanto preparo subito un buon tè caldo per scaldarci.", en: "Very good idea. In the meantime I'll make some good hot tea right away to warm us up." },
      { speaker: "Tu", it: "Perfetto! Il tepore della bevanda ci aiuterà sicuramente a sentirci meglio.", en: "Perfect! The warmth of the drink will certainly help us feel better." },
      { speaker: "Amico", it: "Sì, è strano ma il maltempo fa sempre venire un po' di fame e sonnolenza!", en: "Yes, it's strange but bad weather always makes you a bit hungry and sleepy!" }
    ]
  },
  "sky-weather_a2": {
    zoneId: "sky-weather",
    zoneName: "Sky View",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Che bel sole oggi! Fa molto caldo.", en: "What a beautiful sun today! It's very hot." },
      { speaker: "Amico", it: "Sì, è una giornata perfetta per il mare.", en: "Yes, it's a perfect day for the beach." },
      { speaker: "Tu", it: "Ci sono poche nuvole. Non pioverà.", en: "There are few clouds. It won't rain." },
      { speaker: "Amico", it: "Spero di no. Ho portato l'ombrellone.", en: "I hope not. I brought the beach umbrella." },
      { speaker: "Tu", it: "C'è un po' di vento. Fa fresco.", en: "There's a bit of wind. It's cool." },
      { speaker: "Amico", it: "Sì, il vento è perfetto per fare vela.", en: "Yes, the wind is perfect for sailing." },
      { speaker: "Tu", it: "Guarda l'arcobaleno! Dopo la pioggia di ieri.", en: "Look at the rainbow! After yesterday's rain." },
      { speaker: "Amico", it: "È bellissimo! Sempre un buon segno.", en: "It's beautiful! Always a good sign." },
      { speaker: "Tu", it: "E la pioggia leggera? Serve alle piante.", en: "And the light rain? The plants need it." },
      { speaker: "Amico", it: "Sì, il giardino ne aveva bisogno.", en: "Yes, the garden needed it." },
      { speaker: "Tu", it: "Adoro le giornate così variabili.", en: "I love variable days like this." },
      { speaker: "Amico", it: "Anche a me! Ogni ora cambia.", en: "Me too! Every hour it changes." }
    ]
  },
  "sky-weather_b1": {
    zoneId: "sky-weather",
    zoneName: "Sky View",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Che splendido sole splende oggi! La temperatura sembra molto alta.", en: "What a splendid sun is shining today! The temperature seems very high." },
      { speaker: "Amico", it: "Sì, è davvero una giornata perfetta e limpida per andare al mare.", en: "Yes, it's really a perfect and clear day for going to the beach." },
      { speaker: "Tu", it: "Noto che ci sono pochissime nuvole in cielo. Credo proprio che non pioverà.", en: "I notice there are very few clouds in the sky. I really think it won't rain." },
      { speaker: "Amico", it: "Spero proprio di no, perché ho già preparato l'ombrellone e la borsa da spiaggia.", en: "I really hope not, because I've already prepared the beach umbrella and bag." },
      { speaker: "Tu", it: "C'è anche una leggera brezza di vento che rende il caldo più sopportabile.", en: "There's also a light breeze that makes the heat more bearable." },
      { speaker: "Amico", it: "Sì, il vento è perfetto e costante. Oggi sarebbe ideale per fare vela.", en: "Yes, the wind is perfect and constant. Today would be ideal for sailing." },
      { speaker: "Tu", it: "Guarda lì, un bellissimo arcobaleno! Deve essere rimasto dopo la pioggia di ieri sera.", en: "Look there, a beautiful rainbow! It must have remained after last night's rain." },
      { speaker: "Amico", it: "È uno spettacolo bellissimo! Per me l'arcobaleno è sempre un ottimo segno di speranza.", en: "It's a beautiful sight! For me the rainbow is always a great sign of hope." },
      { speaker: "Tu", it: "E quella leggera pioggerellina di stamattina? In realtà ha fatto bene alle piante.", en: "And that light drizzle this morning? Actually it did good for the plants." },
      { speaker: "Amico", it: "Sì, il giardino e le piante ne avevano assolutamente bisogno dopo settimane di siccità.", en: "Yes, the garden and plants absolutely needed it after weeks of drought." },
      { speaker: "Tu", it: "Devo ammettere che adoro profondamente le giornate dal tempo così variabile.", en: "I must admit that I deeply love days with such variable weather." },
      { speaker: "Amico", it: "Anche a me piace molto! In pratica ogni ora il tempo cambia e sorprende.", en: "I also like it very much! In practice every hour the weather changes and surprises." }
    ]
  },
  // ==================== TOOLS ====================
  "hand-tools_a2": {
    zoneId: "hand-tools",
    zoneName: "Hand Tools",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Mi passi il martello? Devo inchiodare questo quadro.", en: "Can you pass me the hammer? I need to nail up this picture." },
      { speaker: "Amico", it: "Ecco. Attenzione a non sbagliare muro!", en: "Here. Be careful not to hit the wrong wall!" },
      { speaker: "Tu", it: "Grazie. Ora mi serve il cacciavite.", en: "Thanks. Now I need the screwdriver." },
      { speaker: "Amico", it: "Quale? A croce o a taglio?", en: "Which one? Phillips or flathead?" },
      { speaker: "Tu", it: "A croce, per questa vite nuova.", en: "Phillips, for this new screw." },
      { speaker: "Amico", it: "Ecco. Ecco anche le pinze, se servono.", en: "Here. Here's also the pliers, if you need them." },
      { speaker: "Tu", it: "Perfetto. Ho anche bisogno della sega per tagliare questo legno.", en: "Perfect. I also need the saw to cut this wood." },
      { speaker: "Amico", it: "Sì, ma è nel garage. Vado a prenderla.", en: "Yes, but it's in the garage. I'll go get it." },
      { speaker: "Tu", it: "Grazie! Dopo mi dai una mano?", en: "Thanks! Will you give me a hand after?" },
      { speaker: "Amico", it: "Certo! Due persone sono meglio di una.", en: "Of course! Two people are better than one." },
      { speaker: "Tu", it: "Hai ragione. Il lavoro di squadra funziona.", en: "You're right. Teamwork works." },
      { speaker: "Amico", it: "Sempre! Insieme si fa prima e meglio.", en: "Always! Together it's faster and better." }
    ]
  },
  "hand-tools_b1": {
    zoneId: "hand-tools",
    zoneName: "Hand Tools",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Potresti passarmi il martello? Devo inchiodare con cura questo quadro al muro.", en: "Could you pass me the hammer? I need to carefully nail up this picture on the wall." },
      { speaker: "Amico", it: "Ecco, prendi. Fai molta attenzione a non sbagliare muro e a non rovinare la vernice!", en: "Here, take it. Be very careful not to hit the wrong wall and not to ruin the paint!" },
      { speaker: "Tu", it: "Grazie per l'avvertimento. Ora però mi servirebbe anche il cacciavite adatto.", en: "Thanks for the warning. Now though I would also need the suitable screwdriver." },
      { speaker: "Amico", it: "Quale tipo ti serve esattamente? A croce oppure a taglio piatto?", en: "Which type do you exactly need? Phillips or flathead?" },
      { speaker: "Tu", it: "Mi serve quello a croce, perché ho comprato delle viti nuove a croce.", en: "I need the Phillips one, because I bought new Phillips screws." },
      { speaker: "Amico", it: "Ecco il cacciavite. Ho portato anche le pinze, nel caso ti possano servire.", en: "Here's the screwdriver. I also brought the pliers, in case they can be useful to you." },
      { speaker: "Tu", it: "Perfetto, grazie. Purtroppo ho anche bisogno della sega per tagliare questo pezzo di legno.", en: "Perfect, thanks. Unfortunately I also need the saw to cut this piece of wood." },
      { speaker: "Amico", it: "Sì, ma la sega grande è in garage. Vado subito a prenderla per te.", en: "Yes, but the big saw is in the garage. I'll go get it for you right away." },
      { speaker: "Tu", it: "Grazie mille! Dopo, quando hai un momento, mi dai una mano con il montaggio?", en: "Thank you very much! After, when you have a moment, will you give me a hand with the assembly?" },
      { speaker: "Amico", it: "Ma certo, volentieri! Per questo genere di lavori due persone sono sempre meglio di una sola.", en: "But of course, gladly! For this kind of work two people are always better than one." },
      { speaker: "Tu", it: "Hai assolutamente ragione. Il lavoro di squadra dà sempre ottimi risultati.", en: "You're absolutely right. Teamwork always gives excellent results." },
      { speaker: "Amico", it: "Sempre! Lavorare insieme si fa prima, si fa meglio e si sbaglia meno.", en: "Always! Working together it's faster, it's better and you make fewer mistakes." }
    ]
  },
  "workbench_a2": {
    zoneId: "workbench",
    zoneName: "Workbench",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Il banco è pronto? Devo serrare questa vite.", en: "Is the workbench ready? I need to tighten this screw." },
      { speaker: "Amico", it: "Sì, ma la morsa l'hai già usata?", en: "Yes, but have you already used the vise?" },
      { speaker: "Tu", it: "No, ancora no. Serve per tenere fermo il pezzo?", en: "No, not yet. Is it used to hold the piece steady?" },
      { speaker: "Amico", it: "Sì, altrimenti il legno scivola. Mettilo qui.", en: "Yes, otherwise the wood slips. Put it here." },
      { speaker: "Tu", it: "Grazie. Ora uso la lima per levigare.", en: "Thanks. Now I'll use the file to smooth." },
      { speaker: "Amico", it: "Bene. Poi passa la carta vetrata.", en: "Good. Then use the sandpaper." },
      { speaker: "Tu", it: "Ho capito. Dov'è il metro?", en: "I understand. Where's the measuring tape?" },
      { speaker: "Amico", it: "Appeso al muro, vicino al trapano.", en: "Hanging on the wall, near the drill." },
      { speaker: "Tu", it: "Trovato. Le misure sono corrette.", en: "Found it. The measurements are correct." },
      { speaker: "Amico", it: "Perfetto! Ora possiamo assemblare.", en: "Perfect! Now we can assemble." },
      { speaker: "Tu", it: "Sì, il progetto procede bene.", en: "Yes, the project is going well." },
      { speaker: "Amico", it: "Ottimo lavoro! Siamo una bella squadra.", en: "Excellent work! We're a good team." }
    ]
  },
  "workbench_b1": {
    zoneId: "workbench",
    zoneName: "Workbench",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Il banco da lavoro è pronto per l'uso? Ho bisogno di serrare bene questa vite grossa.", en: "Is the workbench ready for use? I need to tighten this big screw well." },
      { speaker: "Amico", it: "Sì, è pronto. Ma dimmi, la morsa l'hai già usata prima oggi?", en: "Yes, it's ready. But tell me, have you already used the vise before today?" },
      { speaker: "Tu", it: "No, devo ammettere che ancora non l'ho mai usata. Mi serve per tenere fermo il pezzo di legno?", en: "No, I must admit I've never used it yet. Do I need it to hold the piece of wood steady?" },
      { speaker: "Amico", it: "Assolutamente sì, altrimenti il pezzo di legno scivola mentre lavori. Mettilo bene al centro della morsa.", en: "Absolutely yes, otherwise the piece of wood slips while you work. Put it well in the center of the vise." },
      { speaker: "Tu", it: "Grazie per il consiglio. Ora userò la lima per levigare gli angoli.", en: "Thanks for the advice. Now I'll use the file to smooth the corners." },
      { speaker: "Amico", it: "Bene, fai attenzione. Dopo ti consiglio di passare anche la carta vetrata fine.", en: "Good, be careful. After I recommend you also use fine sandpaper." },
      { speaker: "Tu", it: "Ho capito il procedimento. A proposito, dov'è finito il metro a nastro?", en: "I understand the procedure. By the way, where did the measuring tape end up?" },
      { speaker: "Amico", it: "Dovrebbe essere appeso al muro del fondo, proprio vicino al trapano elettrico.", en: "It should be hanging on the back wall, right near the electric drill." },
      { speaker: "Tu", it: "Ah, eccolo! Ho ricontrollato e le misure sono tutte corrette.", en: "Ah, here it is! I rechecked and all the measurements are correct." },
      { speaker: "Amico", it: "Perfetto allora! Ora abbiamo tutto il necessario per procedere con l'assemblaggio finale.", en: "Perfect then! Now we have everything needed to proceed with the final assembly." },
      { speaker: "Tu", it: "Sì, devo dire che il progetto procede molto bene e secondo i tempi previsti.", en: "Yes, I must say the project is going very well and according to schedule." },
      { speaker: "Amico", it: "Ottimo lavoro di squadra! Collaborando così si ottengono sempre risultati eccellenti.", en: "Excellent teamwork! By collaborating like this you always get excellent results." }
    ]
  },
  // ==================== ACTIONS ====================
  "movement_a2": {
    zoneId: "movement",
    zoneName: "Movement Zone",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Corri sempre al parco la mattina?", en: "Do you always run at the park in the morning?" },
      { speaker: "Amico", it: "Sì, corro per mezz'ora. Poi cammino.", en: "Yes, I run for half an hour. Then I walk." },
      { speaker: "Tu", it: "Anch'io! A volte salto la corda.", en: "Me too! Sometimes I jump rope." },
      { speaker: "Amico", it: "È un buon esercizio per le gambe.", en: "It's a good exercise for the legs." },
      { speaker: "Tu", it: "Sai nuotare? Io vado in piscina.", en: "Do you know how to swim? I go to the pool." },
      { speaker: "Amico", it: "Sì, nuoto ogni estate al mare.", en: "Yes, I swim every summer at the sea." },
      { speaker: "Tu", it: "E volare? Vorrei provare il paracadute!", en: "And fly? I'd like to try skydiving!" },
      { speaker: "Amico", it: "Sei coraggioso! Io ho paura dell'altezza.", en: "You're brave! I'm afraid of heights." },
      { speaker: "Tu", it: "Non preoccupare, è normale. A me piace l'adrenalina.", en: "Don't worry, it's normal. I like adrenaline." },
      { speaker: "Amico", it: "Hai ragione. Ognuno ha i suoi limiti.", en: "You're right. Everyone has their limits." },
      { speaker: "Tu", it: "Esatto! L'importante è muoversi.", en: "Exactly! The important thing is to move." },
      { speaker: "Amico", it: "Sì, lo sport fa bene al corpo e alla mente.", en: "Yes, sports are good for the body and mind." }
    ]
  },
  "movement_b1": {
    zoneId: "movement",
    zoneName: "Movement Zone",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Corri abitualmente al parco la mattina presto?", en: "Do you usually run at the park early in the morning?" },
      { speaker: "Amico", it: "Sì, cerco di correre regolarmente per circa mezz'ora. Dopo faccio una bella camminata.", en: "Yes, I try to run regularly for about half an hour. After I take a nice walk." },
      { speaker: "Tu", it: "Anche io faccio lo stesso! A volte alterno saltando la corda per variare.", en: "I do the same too! Sometimes I alternate by jumping rope to vary." },
      { speaker: "Amico", it: "È un ottimo esercizio cardiovascolare e rafforza molto bene i muscoli delle gambe.", en: "It's an excellent cardiovascular exercise and strengthens the leg muscles very well." },
      { speaker: "Tu", it: "Sai nuotare bene? Io cerco di andare in piscina almeno due volte a settimana.", en: "Do you swim well? I try to go to the pool at least twice a week." },
      { speaker: "Amico", it: "Sì, nuoto da sempre. Ogni estate non manco mai di andare al mare per nuotare.", en: "Yes, I've always swum. Every summer I never miss going to the sea to swim." },
      { speaker: "Tu", it: "E lanciarsi con il paracadute? È un'esperienza che vorrei provare almeno una volta nella vita!", en: "And skydiving? It's an experience I'd like to try at least once in my life!" },
      { speaker: "Amico", it: "Sei molto coraggioso! Io devo ammettere che ho una paura terribile dell'altezza.", en: "You're very brave! I must admit that I have a terrible fear of heights." },
      { speaker: "Tu", it: "Non ti preoccupare, è una paura del tutto normale e comprensibile. A me invece piace l'adrenalina pura.", en: "Don't worry, it's a completely normal and understandable fear. I, on the other hand, like pure adrenaline." },
      { speaker: "Amico", it: "Hai perfettamente ragione. Ognuno di noi ha i propri limiti fisici e psicologici.", en: "You're perfectly right. Each of us has our own physical and psychological limits." },
      { speaker: "Tu", it: "Esattamente! Alla fine l'aspetto fondamentale è semplicemente quello di muoversi e stare attivi.", en: "Exactly! In the end the fundamental aspect is simply to move and stay active." },
      { speaker: "Amico", it: "Sì, è innegabile che lo sport faccia un bene immenso sia al corpo che alla mente.", en: "Yes, it's undeniable that sports do immense good for both the body and the mind." }
    ]
  },
  "daily-actions_a2": {
    zoneId: "daily-actions",
    zoneName: "Daily Actions",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "A che ora ti svegli di solito?", en: "What time do you usually wake up?" },
      { speaker: "Amico", it: "Alle sette. Poi mi lavo e mi vesto.", en: "At seven. Then I wash and get dressed." },
      { speaker: "Tu", it: "Ti pettini prima di uscire?", en: "Do you comb your hair before going out?" },
      { speaker: "Amico", it: "Sì, sempre. Anche se ho fretta.", en: "Yes, always. Even if I'm in a hurry." },
      { speaker: "Tu", it: "E la sera? Ti addormenti subito?", en: "And in the evening? Do you fall asleep right away?" },
      { speaker: "Amico", it: "No, leggo un po'. Poi mi addormento.", en: "No, I read a bit. Then I fall asleep." },
      { speaker: "Tu", it: "A che ora ti alzi dal letto?", en: "What time do you get up from bed?" },
      { speaker: "Amico", it: "Subito dopo la sveglia. Non rimando mai.", en: "Right after the alarm. I never snooze." },
      { speaker: "Tu", it: "Apri subito la finestra?", en: "Do you open the window right away?" },
      { speaker: "Amico", it: "Sì, per far entrare aria fresca.", en: "Yes, to let fresh air in." },
      { speaker: "Tu", it: "Bella routine! Io invece chiudo sempre.", en: "Nice routine! I, on the other hand, always close it." },
      { speaker: "Amico", it: "Devi provare, l'aria fresca aiuta!", en: "You must try, fresh air helps!" }
    ]
  },
  "daily-actions_b1": {
    zoneId: "daily-actions",
    zoneName: "Daily Actions",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "A che ora esatta ti svegli abitualmente tutte le mattine?", en: "At what exact time do you usually wake up every morning?" },
      { speaker: "Amico", it: "Mi sveglio sempre alle sette in punto. Poi faccio subito la mia routine: mi lavo e mi vesto.", en: "I always wake up at seven o'clock sharp. Then I immediately do my routine: I wash and get dressed." },
      { speaker: "Tu", it: "Ti pettini i capelli con cura prima di uscire di casa?", en: "Do you carefully comb your hair before leaving the house?" },
      { speaker: "Amico", it: "Sì, lo faccio sempre e comunque. Anche quando sono di fretta e rischio di fare tardi.", en: "Yes, I always do it anyway. Even when I'm in a hurry and risk being late." },
      { speaker: "Tu", it: "E la sera, quando vai a letto, riesci ad addormentarti subito o ci metti tempo?", en: "And in the evening, when you go to bed, do you manage to fall asleep right away or does it take time?" },
      { speaker: "Amico", it: "Non mi addormento subito. Di solito leggo qualche pagina di un libro, poi il sonno arriva.", en: "I don't fall asleep right away. I usually read a few pages of a book, then sleep comes." },
      { speaker: "Tu", it: "A che ora ti alzi effettivamente dal letto dopo che suona la sveglia?", en: "What time do you actually get up from bed after the alarm rings?" },
      { speaker: "Amico", it: "Mi alzo immediatamente, senza rimandare mai. Odio procrastinare al mattino.", en: "I get up immediately, without ever snoozing. I hate procrastinating in the morning." },
      { speaker: "Tu", it: "Apri subito la finestra della camera per far entrare aria nuova?", en: "Do you open the bedroom window right away to let new air in?" },
      { speaker: "Amico", it: "Sì, è la prima cosa che faccio. Apro sempre per far entrare aria fresca e ossigenata.", en: "Yes, it's the first thing I do. I always open it to let fresh and oxygenated air in." },
      { speaker: "Tu", it: "È una bella routine mattutina! Io invece ho la pessima abitudine di chiudere sempre tutto.", en: "It's a nice morning routine! I, on the other hand, have the bad habit of always closing everything." },
      { speaker: "Amico", it: "Dovresti assolutamente provare, l'aria fresca del mattino fa davvero molto bene al corpo!", en: "You should absolutely try, the fresh morning air really does a lot of good for the body!" }
    ]
  },
  // ==================== EMOTIONS ====================
  "feelings_a2": {
    zoneId: "feelings",
    zoneName: "Feelings",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Come ti senti oggi? Sei felice?", en: "How do you feel today? Are you happy?" },
      { speaker: "Amico", it: "Sì, sono molto felice. Ho ricevuto buone notizie.", en: "Yes, I'm very happy. I received good news." },
      { speaker: "Tu", it: "Che bello! A volte sono triste senza motivo.", en: "How nice! Sometimes I'm sad for no reason." },
      { speaker: "Amico", it: "È normale. A tutti capita. Passa.", en: "It's normal. It happens to everyone. It passes." },
      { speaker: "Tu", it: "Hai ragione. E la rabbia? Ti arrabbi spesso?", en: "You're right. And anger? Do you get angry often?" },
      { speaker: "Amico", it: "No, cerco di stare calmo. Respiro forte.", en: "No, I try to stay calm. I breathe deeply." },
      { speaker: "Tu", it: "Buon metodo! Io a volte ho paura del buio.", en: "Good method! I sometimes am afraid of the dark." },
      { speaker: "Amico", it: "Anche da piccolo? È comune.", en: "Even as a child? It's common." },
      { speaker: "Tu", it: "Sì, ma ora va meglio. L'amore aiuta.", en: "Yes, but now it's better. Love helps." },
      { speaker: "Amico", it: "È vero. L'affetto è la cura migliore.", en: "It's true. Affection is the best cure." },
      { speaker: "Tu", it: "Sono d'accordo. Le emozioni sono importanti.", en: "I agree. Emotions are important." },
      { speaker: "Amico", it: "Sì, ci rendono umani e vivi!", en: "Yes, they make us human and alive!" }
    ]
  },
  "feelings_b1": {
    zoneId: "feelings",
    zoneName: "Feelings",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Come ti senti esattamente oggi? Ti senti felice e sereno?", en: "How do you exactly feel today? Do you feel happy and serene?" },
      { speaker: "Amico", it: "Sì, devo dire che sono molto felice. Ho appena ricevuto delle ottime notizie dal lavoro.", en: "Yes, I must say I'm very happy. I just received some great news from work." },
      { speaker: "Tu", it: "Che splendida notizia! Io invece a volte mi sento triste senza un motivo apparente.", en: "What splendid news! I, on the other hand, sometimes feel sad for no apparent reason." },
      { speaker: "Amico", it: "È una sensazione del tutto normale. Capita a tutti prima o poi. Poi passa da sé.", en: "It's a completely normal feeling. It happens to everyone sooner or later. Then it passes on its own." },
      { speaker: "Tu", it: "Hai ragione, devo solo aspettare. E per quanto riguarda la rabbia? Ti arrabbi facilmente?", en: "You're right, I just need to wait. And regarding anger? Do you get angry easily?" },
      { speaker: "Amico", it: "No, faccio molto di tutto per stare calmo. Quando sono nervoso respiro profondamente.", en: "No, I do everything to stay calm. When I'm nervous I breathe deeply." },
      { speaker: "Tu", it: "Sembra un ottimo metodo di controllo! Io a volte provo ancora paura del buio totale.", en: "It seems like an excellent control method! I sometimes still feel afraid of total darkness." },
      { speaker: "Amico", it: "Anche da bambino avevi questa paura? È in realtà molto comune tra i bambini.", en: "Did you also have this fear as a child? It's actually very common among children." },
      { speaker: "Tu", it: "Sì, ma ora con l'età va decisamente meglio. Credo che l'amore della famiglia abbia aiutato molto.", en: "Yes, but now with age it's definitely better. I think my family's love helped a lot." },
      { speaker: "Amico", it: "È assolutamente vero. L'affetto sincero è sicuramente la cura migliore per l'anima.", en: "It's absolutely true. Sincere affection is definitely the best cure for the soul." },
      { speaker: "Tu", it: "Sono completamente d'accordo. Le emozioni, positive o negative, sono fondamentali per noi.", en: "I completely agree. Emotions, positive or negative, are fundamental for us." },
      { speaker: "Amico", it: "Sì, esattamente. Sono le emozioni che ci rendono esseri umani e ci fanno sentire vivi!", en: "Yes, exactly. It's emotions that make us human beings and make us feel alive!" }
    ]
  },
  "states_a2": {
    zoneId: "states",
    zoneName: "Mental States",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Hai fiducia in te stesso?", en: "Do you have confidence in yourself?" },
      { speaker: "Amico", it: "Sì, più o meno. A volte dubito.", en: "Yes, more or less. Sometimes I doubt." },
      { speaker: "Tu", it: "È normale. Io sono spesso sorpreso dalla vita.", en: "It's normal. I'm often surprised by life." },
      { speaker: "Amico", it: "In senso positivo o negativo?", en: "In a positive or negative sense?" },
      { speaker: "Tu", it: "Entrambi! Ma cerco di essere ottimista.", en: "Both! But I try to be optimistic." },
      { speaker: "Amico", it: "Bravo. L'ottimismo aiuta a vivere meglio.", en: "Good. Optimism helps you live better." },
      { speaker: "Tu", it: "Soffri di ansia prima degli esami?", en: "Do you suffer from anxiety before exams?" },
      { speaker: "Amico", it: "Un po'. Ma respiro e mi concentro.", en: "A bit. But I breathe and focus." },
      { speaker: "Tu", it: "Hai ragione. L'orgoglio a volte blocca.", en: "You're right. Pride sometimes blocks you." },
      { speaker: "Amico", it: "Sì, bisogna essere umili e chiedere aiuto.", en: "Yes, you need to be humble and ask for help." },
      { speaker: "Tu", it: "E la vergogna? Ti vergogni mai?", en: "And shame? Are you ever ashamed?" },
      { speaker: "Amico", it: "Sì, ma poi capisco che non serve.", en: "Yes, but then I understand it's not useful." }
    ]
  },
  "states_b1": {
    zoneId: "states",
    zoneName: "Mental States",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Ti senti una persona che ha fiducia in se stessa?", en: "Do you feel like a person who has confidence in themselves?" },
      { speaker: "Amico", it: "Sì, più o meno. Devo ammettere che a volte ho ancora qualche dubbio su me stesso.", en: "Yes, more or less. I must admit that sometimes I still have some doubts about myself." },
      { speaker: "Tu", it: "È perfettamente normale. Io personalmente sono spesso sorpreso da ciò che mi riserva la vita.", en: "It's perfectly normal. I personally am often surprised by what life has in store for me." },
      { speaker: "Amico", it: "In senso positivo o in senso negativo? Cosa ti sorprende di più?", en: "In a positive or negative sense? What surprises you the most?" },
      { speaker: "Tu", it: "In entrambi i sensi, a dire il vero! Ma faccio sempre del mio meglio per essere ottimista.", en: "In both senses, to tell the truth! But I always do my best to be optimistic." },
      { speaker: "Amico", it: "Hai ragione, è un approccio molto saggio. L'ottimismo aiuta sicuramente a vivere molto meglio.", en: "You're right, it's a very wise approach. Optimism certainly helps you live much better." },
      { speaker: "Tu", it: "Soffri mai di ansia o nervosismo prima di affrontare gli esami importanti?", en: "Do you ever suffer from anxiety or nervousness before facing important exams?" },
      { speaker: "Amico", it: "Un pochino sì, lo ammetto. Ma cerco di respirare a fondo e di concentrarmi solo su me stesso.", en: "A little bit yes, I admit. But I try to breathe deeply and focus only on myself." },
      { speaker: "Tu", it: "Hai perfettamente ragione. A volte però è l'orgoglio personale che blocca e non aiuta.", en: "You're perfectly right. Sometimes though it's personal pride that blocks and doesn't help." },
      { speaker: "Amico", it: "Sì, bisogna assolutamente essere umili e non avere paura di chiedere aiuto agli altri.", en: "Yes, you absolutely must be humble and not be afraid to ask others for help." },
      { speaker: "Tu", it: "E per quanto riguarda la vergogna? Ti capita mai di sentirti in imbarazzo?", en: "And regarding shame? Does it ever happen that you feel embarrassed?" },
      { speaker: "Amico", it: "Sì, a volte mi capita. Ma poi ragiono e capisco che in realtà non serve a nulla.", en: "Yes, sometimes it happens to me. But then I reason and understand that in reality it's useless." }
    ]
  },
  // ==================== FARM ====================
  "vegetables_a2": {
    zoneId: "vegetables",
    zoneName: "Vegetable Garden",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Cosa coltivi in questo orto?", en: "What do you grow in this vegetable garden?" },
      { speaker: "Amico", it: "Pomodori, zucchine e melanzane.", en: "Tomatoes, zucchini and eggplants." },
      { speaker: "Tu", it: "E le carote? Sono già pronte?", en: "And the carrots? Are they ready yet?" },
      { speaker: "Amico", it: "Quasi. Le raccolgo la settimana prossima.", en: "Almost. I'll harvest them next week." },
      { speaker: "Tu", it: "Il basilico profuma tantissimo!", en: "The basil smells so much!" },
      { speaker: "Amico", it: "Sì, lo uso per il pesto fresco.", en: "Yes, I use it for fresh pesto." },
      { speaker: "Tu", it: "Hai anche il prezzemolo?", en: "Do you also have parsley?" },
      { speaker: "Amico", it: "Sì, cresce vicino alla cipolla.", en: "Yes, it grows near the onion." },
      { speaker: "Tu", it: "Che bello avere un orto! È sano.", en: "How nice to have a vegetable garden! It's healthy." },
      { speaker: "Amico", it: "Sì, le verdure sono biologiche e fresche.", en: "Yes, the vegetables are organic and fresh." },
      { speaker: "Tu", it: "Vorrei anch'io coltivare qualcosa.", en: "I'd like to grow something too." },
      { speaker: "Amico", it: "Inizia con il basilico, è facile!", en: "Start with basil, it's easy!" }
    ]
  },
  "vegetables_b1": {
    zoneId: "vegetables",
    zoneName: "Vegetable Garden",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Dimmi, cosa coltivi principalmente in questo tuo bell'orto?", en: "Tell me, what do you mainly grow in this nice vegetable garden of yours?" },
      { speaker: "Amico", it: "In questa stagione coltivo pomodori, zucchine e melanzane mature.", en: "In this season I grow tomatoes, zucchini and ripe eggplants." },
      { speaker: "Tu", it: "E le carote che vedo spuntare? Sono già pronte per essere raccolte?", en: "And the carrots I see sprouting? Are they ready to be harvested?" },
      { speaker: "Amico", it: "Sono quasi pronte. Penso proprio di poterle raccogliere la settimana prossima.", en: "They're almost ready. I really think I can harvest them next week." },
      { speaker: "Tu", it: "Il basilico che coltivi profuma in modo incredibile!", en: "The basil you grow smells incredible!" },
      { speaker: "Amico", it: "Sì, è un profumo inconfondibile. Io lo uso sempre per preparare il pesto fresco.", en: "Yes, it's an unmistakable fragrance. I always use it to prepare fresh pesto." },
      { speaker: "Tu", it: "Hai messo a dimora anche il prezzemolo o solo il basilico?", en: "Did you also plant parsley or only basil?" },
      { speaker: "Amico", it: "Sì, ho piantato anche il prezzemolo. Cresce rigoglioso proprio vicino alle cipolle.", en: "Yes, I also planted parsley. It grows lush right near the onions." },
      { speaker: "Tu", it: "Che bella soddisfazione avere un orto proprio! Deve essere molto sano e naturale.", en: "What a nice satisfaction to have your own vegetable garden! It must be very healthy and natural." },
      { speaker: "Amico", it: "Sì, tutte le verdure che produco sono biologiche, sane e raccolte fresche ogni giorno.", en: "Yes, all the vegetables I produce are organic, healthy and freshly harvested every day." },
      { speaker: "Tu", it: "Mi hai convinto, vorrei anch'io provare a coltivare qualcosa nel mio balcone.", en: "You've convinced me, I'd also like to try growing something on my balcony." },
      { speaker: "Amico", it: "Ti consiglio di iniziare con il basilico, è la pianta più facile da coltivare per i principianti!", en: "I recommend you start with basil, it's the easiest plant to grow for beginners!" }
    ]
  },
  "fruits_a2": {
    zoneId: "fruits",
    zoneName: "Fruit Orchard",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Che alberi sono questi? Fanno frutta?", en: "What trees are these? Do they bear fruit?" },
      { speaker: "Amico", it: "Sì, sono meli e peri. In autunno si raccoglie.", en: "Yes, they're apple and pear trees. In autumn they're harvested." },
      { speaker: "Tu", it: "E quelli lì? Sono ciliegi?", en: "And those there? Are they cherry trees?" },
      { speaker: "Amico", it: "Sì, le ciliegie sono dolcissime a giugno.", en: "Yes, the cherries are very sweet in June." },
      { speaker: "Tu", it: "Hai anche limoni?", en: "Do you also have lemons?" },
      { speaker: "Amico", it: "Sì, in vaso sul terrazzo. Crescono bene.", en: "Yes, in pots on the terrace. They grow well." },
      { speaker: "Tu", it: "Le fragole sono pronte?", en: "Are the strawberries ready?" },
      { speaker: "Amico", it: "Sì, le ho raccolte stamattina. Ne vuoi?", en: "Yes, I picked them this morning. Do you want some?" },
      { speaker: "Tu", it: "Volentieri! Sono le mie preferite.", en: "Gladly! They're my favorite." },
      { speaker: "Amico", it: "Buone e naturali. Senza pesticidi.", en: "Good and natural. Without pesticides." },
      { speaker: "Tu", it: "Il sapore è diverso dal supermercato.", en: "The taste is different from the supermarket." },
      { speaker: "Amico", it: "Sì, la frutta dell'orto è più buona!", en: "Yes, fruit from the vegetable garden is tastier!" }
    ]
  },
  "fruits_b1": {
    zoneId: "fruits",
    zoneName: "Fruit Orchard",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Mi sai dire che alberi sono questi che vedo? Producono frutta commestibile?", en: "Can you tell me what trees these are that I see? Do they produce edible fruit?" },
      { speaker: "Amico", it: "Sì, sono meli e peri che ho piantato anni fa. In autunno si raccoglie la frutta matura.", en: "Yes, they're apple and pear trees that I planted years ago. In autumn the ripe fruit is harvested." },
      { speaker: "Tu", it: "E quegli alberi più piccoli in fondo? Sono forse dei ciliegi?", en: "And those smaller trees in the back? Are they perhaps cherry trees?" },
      { speaker: "Amico", it: "Hai indovinato, sono ciliegi. Le ciliegie che producono a giugno sono dolcissime.", en: "You guessed it, they're cherry trees. The cherries they produce in June are very sweet." },
      { speaker: "Tu", it: "Coltivi anche dei limoni qui in giardino o solo alberi da frutta?", en: "Do you also grow lemons here in the garden or only fruit trees?" },
      { speaker: "Amico", it: "Ho anche dei limoni in vaso sul terrazzo. Crescono sorprendentemente bene.", en: "I also have lemons in pots on the terrace. They grow surprisingly well." },
      { speaker: "Tu", it: "E le fragole che ho visto prima? Sono già pronte per essere raccolte?", en: "And the strawberries I saw earlier? Are they ready to be picked?" },
      { speaker: "Amico", it: "Sì, le ho appena raccolte stamattina presto. Ne vuoi assaggiare qualcuna?", en: "Yes, I just picked them early this morning. Would you like to taste some?" },
      { speaker: "Tu", it: "Volentieri, sono la mia frutta preferita in assoluto!", en: "Gladly, they're my absolute favorite fruit!" },
      { speaker: "Amico", it: "Sono buonissime e completamente naturali. Le coltivo senza usare pesticidi chimici.", en: "They're very good and completely natural. I grow them without using chemical pesticides." },
      { speaker: "Tu", it: "Si sente proprio che il sapore autentico è diverso dalla frutta del supermercato.", en: "You can really tell that the authentic taste is different from supermarket fruit." },
      { speaker: "Amico", it: "Sì, non c'è confronto. La frutta coltivata nel proprio orto è sempre molto più buona!", en: "Yes, there's no comparison. Fruit grown in your own vegetable garden is always much tastier!" }
    ]
  },
  // ==================== FANTASY ====================
  "creatures_a2": {
    zoneId: "creatures",
    zoneName: "Mythical Creatures",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Credi ai draghi? Io li adoro!", en: "Do you believe in dragons? I love them!" },
      { speaker: "Amico", it: "Sì, nelle fiabe. Sono creature potenti.", en: "Yes, in fairy tales. They're powerful creatures." },
      { speaker: "Tu", it: "E gli elfi? Sono come i folletti?", en: "And elves? Are they like goblins?" },
      { speaker: "Amico", it: "No, sono più eleganti e intelligenti.", en: "No, they're more elegant and intelligent." },
      { speaker: "Tu", it: "Le fate hanno le ali?", en: "Do fairies have wings?" },
      { speaker: "Amico", it: "Sì, e volano tra i fiori.", en: "Yes, and they fly among the flowers." },
      { speaker: "Tu", it: "Preferisci le streghe buone o cattive?", en: "Do you prefer good or bad witches?" },
      { speaker: "Amico", it: "Quelle buone, come nella favola di Biancaneve.", en: "The good ones, like in the Snow White fairy tale." },
      { speaker: "Tu", it: "E i nani? Vivono nelle montagne?", en: "And dwarves? Do they live in the mountains?" },
      { speaker: "Amico", it: "Sì, scavano tunnel e cercano tesori.", en: "Yes, they dig tunnels and look for treasures." },
      { speaker: "Tu", it: "Che belle storie da bambini!", en: "What beautiful children's stories!" },
      { speaker: "Amico", it: "Sì, la fantasia non ha età!", en: "Yes, imagination has no age!" }
    ]
  },
  "creatures_b1": {
    zoneId: "creatures",
    zoneName: "Mythical Creatures",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Tu ci credi all'esistenza dei draghi? Io personalmente li adoro nella fantasia!", en: "Do you believe in the existence of dragons? I personally love them in fantasy!" },
      { speaker: "Amico", it: "Sì, credo a tutto nelle fiabe. Sono creature mitiche molto potenti e affascinanti.", en: "Yes, I believe in everything in fairy tales. They're very powerful and fascinating mythical creatures." },
      { speaker: "Tu", it: "E gli elfi come li immagini? Sono simili ai piccoli folletti?", en: "And how do you imagine elves? Are they similar to little goblins?" },
      { speaker: "Amico", it: "No, per niente. Gli elfi sono creature molto più eleganti, alte e intelligenti.", en: "No, not at all. Elves are much more elegant, tall and intelligent creatures." },
      { speaker: "Tu", it: "E le fate secondo te hanno davvero delle ali di cristallo?", en: "And fairies, do you think they really have crystal wings?" },
      { speaker: "Amico", it: "Sì, volano leggiadre e silenziose tra i petali dei fiori profumati.", en: "Yes, they fly graceful and silent among the petals of fragrant flowers." },
      { speaker: "Tu", it: "Preferisci le streghe buone e gentili o quelle cattive e perfide?", en: "Do you prefer good and kind witches or bad and wicked ones?" },
      { speaker: "Amico", it: "Definitivamente quelle buone, proprio come la fata madrina nella favola di Biancaneve.", en: "Definitely the good ones, just like the fairy godmother in the Snow White fairy tale." },
      { speaker: "Tu", it: "E i nani dove vivono? Nei libri dicono che amano le montagne.", en: "And where do dwarves live? In books they say they love the mountains." },
      { speaker: "Amico", it: "Sì, vivono sottoterra dove scavano tunnel labirintici e cercano tesori nascosti.", en: "Yes, they live underground where they dig labyrinthine tunnels and look for hidden treasures." },
      { speaker: "Tu", it: "Che bellissime e magiche storie da raccontare ai bambini prima di dormire!", en: "What beautiful and magical stories to tell children before sleeping!" },
      { speaker: "Amico", it: "Sono assolutamente d'accordo! La fantasia e l'immaginazione non hanno davvero alcuna età!", en: "I absolutely agree! Imagination and fantasy really have no age at all!" }
    ]
  },
  "supernatural_a2": {
    zoneId: "supernatural",
    zoneName: "Supernatural",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Hai paura dei fantasmi?", en: "Are you afraid of ghosts?" },
      { speaker: "Amico", it: "Un po', ma solo se sono vecchi e polverosi.", en: "A bit, but only if they're old and dusty." },
      { speaker: "Tu", it: "E le streghe? Ti piacciono?", en: "And witches? Do you like them?" },
      { speaker: "Amico", it: "No, non mi piacciono. Preferisco i vampiri.", en: "No, I don't like them. I prefer vampires." },
      { speaker: "Tu", it: "I vampiri? Sono romantici ma spaventosi!", en: "Vampires? They're romantic but scary!" },
      { speaker: "Amico", it: "Sì, ma non mi spaventano. Preferisco gli zombie.", en: "Yes, but they don't scare me. I prefer zombies." },
      { speaker: "Tu", it: "Gli zombie? Mica ti fanno paura?", en: "Zombies? They don't scare you?" },
      { speaker: "Amico", it: "No, figurati! Sono lenti e goffi.", en: "No, come on! They're slow and clumsy." },
      { speaker: "Tu", it: "E gli spiriti? Ci credi?", en: "And spirits? Do you believe in them?" },
      { speaker: "Amico", it: "Forse sì. L'anima dopo la morte vive.", en: "Maybe yes. The soul lives after death." },
      { speaker: "Tu", it: "È una bella speranza.", en: "It's a beautiful hope." },
      { speaker: "Amico", it: "Sì, il soprannaturale ci fa sognare!", en: "Yes, the supernatural makes us dream!" }
    ]
  },
  "supernatural_b1": {
    zoneId: "supernatural",
    zoneName: "Supernatural",
    level: "b1",
    exchanges: [
      { speaker: "Tu", it: "Sii onesto, hai mai avuto paura dei fantasmi da bambino?", en: "Be honest, were you ever afraid of ghosts as a child?" },
      { speaker: "Amico", it: "Un pochino sì, ma solo se immaginavo che fossero vecchi, polverosi e lugubri.", en: "A little bit yes, but only if I imagined they were old, dusty and gloomy." },
      { speaker: "Tu", it: "E le streghe cattive con il naso grosso? Ti piacevano?", en: "And bad witches with big noses? Did you like them?" },
      { speaker: "Amico", it: "No, non mi sono mai piaciute. Ho sempre preferito di gran lunga i vampiri eleganti.", en: "No, I never liked them. I've always far preferred elegant vampires." },
      { speaker: "Tu", it: "I vampiri? Sono romantici ma possono essere anche spaventosi e pericolosi!", en: "Vampires? They're romantic but can also be scary and dangerous!" },
      { speaker: "Amico", it: "Sì, ma in qualche modo non mi spaventano. Preferisco ancora gli zombie divertenti.", en: "Yes, but somehow they don't scare me. I still prefer funny zombies." },
      { speaker: "Tu", it: "Gli zombie? Non ti fanno per niente paura con tutto quel sangue finto?", en: "Zombies? They don't scare you at all with all that fake blood?" },
      { speaker: "Amico", it: "No, figurati! Sono creature lente, goffe e assolutamente non minacciose.", en: "No, come on! They're slow, clumsy creatures and absolutely not threatening." },
      { speaker: "Tu", it: "E gli spiriti dei defunti? Ci credi che esistano davvero?", en: "And the spirits of the deceased? Do you believe they really exist?" },
      { speaker: "Amico", it: "Forse sì, è possibile. Credo che l'anima di una persona continui a vivere dopo la morte fisica.", en: "Maybe yes, it's possible. I believe that a person's soul continues to live after physical death." },
      { speaker: "Tu", it: "È una bella e rassicurante speranza per tutti noi.", en: "It's a beautiful and reassuring hope for all of us." },
      { speaker: "Amico", it: "Sì, esattamente! Il mondo del soprannaturale ci fa sognare e riflettere sulla vita!", en: "Yes, exactly! The world of the supernatural makes us dream and reflect on life!" }
    ]
  },
  // ==================== LA PIAZZA (Essential Verbs) ====================
  "fontana-piazza_a2": {
    zoneId: "fontana-piazza",
    zoneName: "La Fontana",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Ciao! Sei di Roma?", en: "Hi! Are you from Rome?" },
      { speaker: "Amico", it: "Sì, sono romano. E tu, di dove sei?", en: "Yes, I'm Roman. And you, where are you from?" },
      { speaker: "Tu", it: "Io sono inglese. Ho una casa qui vicino.", en: "I'm English. I have a house nearby." },
      { speaker: "Amico", it: "Che bello! Hai una famiglia qui?", en: "How nice! Do you have family here?" },
      { speaker: "Tu", it: "No, sto qui da solo per imparare l'italiano.", en: "No, I'm here alone to learn Italian." },
      { speaker: "Amico", it: "Stai bene? L'italiano è difficile all'inizio.", en: "Are you doing well? Italian is difficult at first." },
      { speaker: "Tu", it: "Sì, sto bene! Essere qui è la cosa migliore.", en: "Yes, I'm fine! Being here is the best thing." },
      { speaker: "Amico", it: "Benvenuto a Roma! Dai, facciamo una passeggiata.", en: "Welcome to Rome! Come on, let's take a walk." },
    ]
  },
  "bar-piazza_a2": {
    zoneId: "bar-piazza",
    zoneName: "Il Bar",
    level: "a2",
    exchanges: [
      { speaker: "Barista", it: "Buongiorno! Cosa vuole?", en: "Good morning! What would you like?" },
      { speaker: "Tu", it: "Voglio un caffè, per favore.", en: "I'd like a coffee, please." },
      { speaker: "Barista", it: "Subito. Può sedersi al tavolo.", en: "Right away. You can sit at the table." },
      { speaker: "Tu", it: "Posso avere anche un cornetto?", en: "Can I also have a croissant?" },
      { speaker: "Barista", it: "Certo! Deve aspettare un momento.", en: "Of course! You need to wait a moment." },
      { speaker: "Tu", it: "Va bene. Devo prendere anche l'acqua.", en: "That's fine. I also need to get some water." },
      { speaker: "Barista", it: "Eccolo. Desidera altro?", en: "Here you go. Would you like anything else?" },
      { speaker: "Tu", it: "No, grazie. Posso pagare adesso?", en: "No, thank you. Can I pay now?" },
      { speaker: "Barista", it: "Certo, deve pagare alla cassa.", en: "Of course, you need to pay at the till." },
    ]
  },
  "fermata-piazza_a2": {
    zoneId: "fermata-piazza",
    zoneName: "La Fermata",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Scusi, a che ora parte il prossimo autobus?", en: "Excuse me, what time does the next bus leave?" },
      { speaker: "Signora", it: "Parte tra dieci minuti. Dove deve andare?", en: "It leaves in ten minutes. Where do you need to go?" },
      { speaker: "Tu", it: "Devo andare al centro. Vengo dalla stazione.", en: "I need to go to the centre. I'm coming from the station." },
      { speaker: "Signora", it: "Ah, allora prenda il numero 40. Arriva in piazza in venti minuti.", en: "Ah, then take the number 40. It arrives at the square in twenty minutes." },
      { speaker: "Tu", it: "Grazie! E quando torno, devo prendere lo stesso autobus?", en: "Thank you! And when I come back, do I take the same bus?" },
      { speaker: "Signora", it: "Sì, parte da qui e torna qui. Buon viaggio!", en: "Yes, it leaves from here and comes back here. Have a good trip!" },
      { speaker: "Tu", it: "Perfetto. A che ora esce l'ultimo autobus la sera?", en: "Perfect. What time does the last bus leave in the evening?" },
      { speaker: "Signora", it: "L'ultimo parte alle undici. Non uscire troppo tardi!", en: "The last one leaves at eleven. Don't go out too late!" },
    ]
  },
  "panchina-piazza_a2": {
    zoneId: "panchina-piazza",
    zoneName: "La Panchina",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Sai dov'è il Colosseo?", en: "Do you know where the Colosseum is?" },
      { speaker: "Amico", it: "Sì, so dov'è. Devi andare dritto, poi girare a sinistra.", en: "Yes, I know where it is. You need to go straight, then turn left." },
      { speaker: "Tu", it: "Non capisco bene. Puoi dirlo di nuovo?", en: "I don't understand well. Can you say it again?" },
      { speaker: "Amico", it: "Certo. Vedo che parli italiano — parli molto bene!", en: "Of course. I see you speak Italian — you speak very well!" },
      { speaker: "Tu", it: "Grazie, ma devo ancora imparare molto.", en: "Thank you, but I still have a lot to learn." },
      { speaker: "Amico", it: "Dici bene. Io non parlo inglese per niente!", en: "You're right. I don't speak English at all!" },
      { speaker: "Tu", it: "Allora possiamo parlare solo italiano.", en: "Then we can speak only Italian." },
      { speaker: "Amico", it: "Perfetto! Vediamo chi impara di più!", en: "Perfect! Let's see who learns more!" },
    ]
  },

  // ==================== IL CALENDARIO (Days, Months & Time) ====================
  "settimana_a2": {
    zoneId: "settimana",
    zoneName: "La Settimana",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Che giorno è oggi?", en: "What day is today?" },
      { speaker: "Amico", it: "Oggi è mercoledì. Perché?", en: "Today is Wednesday. Why?" },
      { speaker: "Tu", it: "Lunedì e martedì ho lavorato molto. Sono stanco.", en: "On Monday and Tuesday I worked a lot. I'm tired." },
      { speaker: "Amico", it: "Anch'io! Giovedì ho una riunione importante.", en: "Me too! On Thursday I have an important meeting." },
      { speaker: "Tu", it: "E venerdì sera usciamo, no?", en: "And on Friday evening we're going out, right?" },
      { speaker: "Amico", it: "Sì! E sabato mattina dormo fino a tardi.", en: "Yes! And on Saturday morning I sleep in." },
      { speaker: "Tu", it: "La domenica vado sempre dalla nonna.", en: "On Sundays I always go to my grandmother's." },
      { speaker: "Amico", it: "Che bella settimana! Il weekend è quasi qui.", en: "What a nice week! The weekend is almost here." },
    ]
  },
  "mesi_a2": {
    zoneId: "mesi",
    zoneName: "I Mesi",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Qual è il tuo mese preferito?", en: "What is your favourite month?" },
      { speaker: "Amico", it: "Mi piace molto luglio. In luglio andiamo al mare.", en: "I really like July. In July we go to the sea." },
      { speaker: "Tu", it: "Anch'io adoro l'estate! Ma dicembre è speciale.", en: "I love summer too! But December is special." },
      { speaker: "Amico", it: "Sì, a dicembre c'è il Natale. E a febbraio, il Carnevale!", en: "Yes, in December there's Christmas. And in February, Carnival!" },
      { speaker: "Tu", it: "Quando è il tuo compleanno?", en: "When is your birthday?" },
      { speaker: "Amico", it: "Il mio compleanno è il quindici marzo. E il tuo?", en: "My birthday is the fifteenth of March. And yours?" },
      { speaker: "Tu", it: "Il mio è in ottobre. Fa già fresco.", en: "Mine is in October. It's already cool." },
      { speaker: "Amico", it: "Ottobre è bellissimo — le foglie cambiano colore.", en: "October is beautiful — the leaves change colour." },
    ]
  },
  "stagioni_a2": {
    zoneId: "stagioni",
    zoneName: "Le Stagioni",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Che stagione preferisci?", en: "Which season do you prefer?" },
      { speaker: "Amico", it: "Preferisco la primavera. I fiori sono bellissimi.", en: "I prefer spring. The flowers are beautiful." },
      { speaker: "Tu", it: "Io preferisco l'estate. Mi piace il sole.", en: "I prefer summer. I like the sun." },
      { speaker: "Amico", it: "Fa troppo caldo per me! L'autunno è perfetto.", en: "It's too hot for me! Autumn is perfect." },
      { speaker: "Tu", it: "E l'inverno? Ti piace la neve?", en: "And winter? Do you like snow?" },
      { speaker: "Amico", it: "Un po'. Ma in inverno fa troppo freddo.", en: "A little. But in winter it's too cold." },
      { speaker: "Tu", it: "In Italia d'estate fa caldo dappertutto.", en: "In Italy in summer it's hot everywhere." },
      { speaker: "Amico", it: "Sì! Per questo andiamo tutti al mare in agosto.", en: "Yes! That's why everyone goes to the sea in August." },
    ]
  },
  "avverbi-tempo_a2": {
    zoneId: "avverbi-tempo",
    zoneName: "Oggi e Domani",
    level: "a2",
    exchanges: [
      { speaker: "Tu", it: "Cosa fai oggi?", en: "What are you doing today?" },
      { speaker: "Amico", it: "Oggi resto a casa. Ieri sono uscito molto.", en: "Today I'm staying home. Yesterday I went out a lot." },
      { speaker: "Tu", it: "E domani?", en: "And tomorrow?" },
      { speaker: "Amico", it: "Domani vado al mercato — vado sempre il giovedì.", en: "Tomorrow I'm going to the market — I always go on Thursdays." },
      { speaker: "Tu", it: "Devi venire adesso? È tardi!", en: "Do you need to come now? It's late!" },
      { speaker: "Amico", it: "No, no — ho ancora tempo. Non parto mai prima delle dieci.", en: "No, no — I still have time. I never leave before ten." },
      { speaker: "Tu", it: "Spesso dimentichi l'ora!", en: "You often forget the time!" },
      { speaker: "Amico", it: "È vero. Prima finisco il caffè, poi vengo.", en: "That's true. First I'll finish my coffee, then I'll come." },
    ]
  },
};

export function getZoneStory(zoneId: string, level: LanguageLevel = 'a2'): ZoneStory | undefined {
  return zoneStories[`${zoneId}_${level}`] ?? zoneStories[`${zoneId}_a2`];
}
