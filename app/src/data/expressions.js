// Banque d'expressions finnoises (chunks)
// Organisees par situation et niveau

export const expressions = [
  // === OPINIONS ET AVIS ===
  {
    id: 'op-1',
    fi: 'Minun mielestäni...',
    fr: 'À mon avis...',
    puhekieli: 'Mun mielestä...',
    category: 'opinions',
    level: 'A2',
    example: 'Minun mielestäni tämä on hyvä idea.',
    exampleFr: 'À mon avis, c\'est une bonne idée.'
  },
  {
    id: 'op-2',
    fi: 'Mitä mieltä olet?',
    fr: 'Qu\'en penses-tu ?',
    puhekieli: 'Mitä mieltä sä oot?',
    category: 'opinions',
    level: 'A2',
    example: 'Mitä mieltä olet tästä elokuvasta?',
    exampleFr: 'Qu\'est-ce que tu penses de ce film ?'
  },
  {
    id: 'op-3',
    fi: 'Olen samaa mieltä.',
    fr: 'Je suis d\'accord.',
    puhekieli: 'Mä oon samaa mieltä.',
    category: 'opinions',
    level: 'A2',
    example: 'Olen samaa mieltä sinun kanssasi.',
    exampleFr: 'Je suis d\'accord avec toi.'
  },
  {
    id: 'op-4',
    fi: 'En ole samaa mieltä.',
    fr: 'Je ne suis pas d\'accord.',
    puhekieli: 'Mä en oo samaa mieltä.',
    category: 'opinions',
    level: 'A2',
    example: 'En ole samaa mieltä tästä asiasta.',
    exampleFr: 'Je ne suis pas d\'accord sur ce point.'
  },
  {
    id: 'op-5',
    fi: 'En ole varma.',
    fr: 'Je ne suis pas sûr(e).',
    puhekieli: 'En oo varma.',
    category: 'opinions',
    level: 'A2',
    example: 'En ole varma, onko se totta.',
    exampleFr: 'Je ne suis pas sûr si c\'est vrai.'
  },
  {
    id: 'op-6',
    fi: 'Minusta tuntuu, että...',
    fr: 'J\'ai l\'impression que...',
    puhekieli: 'Musta tuntuu, et...',
    category: 'opinions',
    level: 'A2',
    example: 'Minusta tuntuu, että hän on väsynyt.',
    exampleFr: 'J\'ai l\'impression qu\'il/elle est fatigué(e).'
  },
  {
    id: 'op-7',
    fi: 'Luulen, että...',
    fr: 'Je pense que...',
    puhekieli: 'Mä luulen, et...',
    category: 'opinions',
    level: 'A2',
    example: 'Luulen, että sataa huomenna.',
    exampleFr: 'Je pense qu\'il va pleuvoir demain.'
  },

  // === TEMPS ET FREQUENCE ===
  {
    id: 'tf-1',
    fi: 'Viime viikolla',
    fr: 'La semaine dernière',
    puhekieli: 'Viime viikol',
    category: 'temps',
    level: 'A2',
    example: 'Viime viikolla kävin Helsingissä.',
    exampleFr: 'La semaine dernière, je suis allé(e) à Helsinki.'
  },
  {
    id: 'tf-2',
    fi: 'Ensi viikolla',
    fr: 'La semaine prochaine',
    puhekieli: 'Ensi viikol',
    category: 'temps',
    level: 'A2',
    example: 'Ensi viikolla menen lomalle.',
    exampleFr: 'La semaine prochaine, je pars en vacances.'
  },
  {
    id: 'tf-3',
    fi: 'Viime kuussa',
    fr: 'Le mois dernier',
    puhekieli: 'Viime kuus',
    category: 'temps',
    level: 'A2',
    example: 'Viime kuussa ostin uuden auton.',
    exampleFr: 'Le mois dernier, j\'ai acheté une nouvelle voiture.'
  },
  {
    id: 'tf-4',
    fi: 'Ensi kuussa',
    fr: 'Le mois prochain',
    puhekieli: 'Ensi kuus',
    category: 'temps',
    level: 'A2',
    example: 'Ensi kuussa muutan uuteen asuntoon.',
    exampleFr: 'Le mois prochain, je déménage dans un nouvel appartement.'
  },
  {
    id: 'tf-5',
    fi: 'Joka päivä',
    fr: 'Chaque jour / Tous les jours',
    puhekieli: 'Joka päivä',
    category: 'temps',
    level: 'A2',
    example: 'Juon kahvia joka päivä.',
    exampleFr: 'Je bois du café tous les jours.'
  },
  {
    id: 'tf-6',
    fi: 'Silloin tällöin',
    fr: 'De temps en temps',
    puhekieli: 'Sillon tällön',
    category: 'temps',
    level: 'A2',
    example: 'Käyn silloin tällöin uimassa.',
    exampleFr: 'Je vais nager de temps en temps.'
  },
  {
    id: 'tf-7',
    fi: 'Kerran viikossa',
    fr: 'Une fois par semaine',
    puhekieli: 'Kerran viikos',
    category: 'temps',
    level: 'A2',
    example: 'Käyn salilla kerran viikossa.',
    exampleFr: 'Je vais à la salle une fois par semaine.'
  },
  {
    id: 'tf-8',
    fi: 'Kaksi kertaa kuussa',
    fr: 'Deux fois par mois',
    puhekieli: 'Kaks kertaa kuus',
    category: 'temps',
    level: 'A2',
    example: 'Soitan äidille kaksi kertaa kuussa.',
    exampleFr: 'J\'appelle ma mère deux fois par mois.'
  },

  // === CAUSE ET CONSEQUENCE ===
  {
    id: 'cc-1',
    fi: 'Sen takia',
    fr: 'À cause de cela / C\'est pourquoi',
    puhekieli: 'Sen takii',
    category: 'cause',
    level: 'A2',
    example: 'Olin sairas, sen takia en tullut.',
    exampleFr: 'J\'étais malade, c\'est pourquoi je ne suis pas venu(e).'
  },
  {
    id: 'cc-2',
    fi: 'Siksi',
    fr: 'C\'est pourquoi / Donc',
    puhekieli: 'Siksi',
    category: 'cause',
    level: 'A2',
    example: 'Nukuin huonosti, siksi olen väsynyt.',
    exampleFr: 'J\'ai mal dormi, c\'est pourquoi je suis fatigué(e).'
  },
  {
    id: 'cc-3',
    fi: 'Koska',
    fr: 'Parce que',
    puhekieli: 'Koska / Ku',
    category: 'cause',
    level: 'A2',
    example: 'En mene ulos, koska sataa.',
    exampleFr: 'Je ne sors pas parce qu\'il pleut.'
  },
  {
    id: 'cc-4',
    fi: 'Vaikka',
    fr: 'Bien que / Même si',
    puhekieli: 'Vaikka',
    category: 'cause',
    level: 'A2',
    example: 'Menen ulos, vaikka sataa.',
    exampleFr: 'Je sors même s\'il pleut.'
  },

  // === POLITESSE ET DEMANDES ===
  {
    id: 'po-1',
    fi: 'Voisitko...',
    fr: 'Pourrais-tu...',
    puhekieli: 'Voisiksä...',
    category: 'politesse',
    level: 'A2',
    example: 'Voisitko auttaa minua?',
    exampleFr: 'Pourrais-tu m\'aider ?'
  },
  {
    id: 'po-2',
    fi: 'Saisinko...',
    fr: 'Pourrais-je avoir...',
    puhekieli: 'Saisinks...',
    category: 'politesse',
    level: 'A2',
    example: 'Saisinko lasin vettä?',
    exampleFr: 'Pourrais-je avoir un verre d\'eau ?'
  },
  {
    id: 'po-3',
    fi: 'Olisiko mahdollista...',
    fr: 'Serait-il possible de...',
    puhekieli: 'Olisiks mahdollista...',
    category: 'politesse',
    level: 'A2',
    example: 'Olisiko mahdollista muuttaa aikaa?',
    exampleFr: 'Serait-il possible de changer l\'heure ?'
  },
  {
    id: 'po-4',
    fi: 'Ei se mitään.',
    fr: 'Ce n\'est rien. / Pas de problème.',
    puhekieli: 'Ei se mitää.',
    category: 'politesse',
    level: 'A2',
    example: 'A: Anteeksi! B: Ei se mitään.',
    exampleFr: 'A: Pardon ! B: Ce n\'est rien.'
  },
  {
    id: 'po-5',
    fi: 'Ole hyvä!',
    fr: 'Je vous en prie ! / Voilà !',
    puhekieli: 'Ole hyvä!',
    category: 'politesse',
    level: 'A2',
    example: 'A: Kiitos! B: Ole hyvä!',
    exampleFr: 'A: Merci ! B: De rien !'
  },

  // === SITUATIONS QUOTIDIENNES ===
  {
    id: 'sq-1',
    fi: 'Mitä kuuluu?',
    fr: 'Comment ça va ?',
    puhekieli: 'Mitä kuuluu? / Miten menee?',
    category: 'quotidien',
    level: 'A2',
    example: 'Hei! Mitä kuuluu?',
    exampleFr: 'Salut ! Comment ça va ?'
  },
  {
    id: 'sq-2',
    fi: 'Kiitos hyvää, entä sinulle?',
    fr: 'Bien merci, et toi ?',
    puhekieli: 'Hyvää, entä sulle?',
    category: 'quotidien',
    level: 'A2',
    example: 'A: Mitä kuuluu? B: Kiitos hyvää, entä sinulle?',
    exampleFr: 'A: Comment ça va ? B: Bien merci, et toi ?'
  },
  {
    id: 'sq-3',
    fi: 'Ei valittamista.',
    fr: 'On ne peut pas se plaindre.',
    puhekieli: 'Ei valittamista.',
    category: 'quotidien',
    level: 'A2',
    example: 'A: Miten menee? B: Ei valittamista.',
    exampleFr: 'A: Comment ça va ? B: On ne peut pas se plaindre.'
  },
  {
    id: 'sq-4',
    fi: 'Nähdään myöhemmin!',
    fr: 'À plus tard !',
    puhekieli: 'Nähdään!',
    category: 'quotidien',
    level: 'A2',
    example: 'Menen nyt, nähdään myöhemmin!',
    exampleFr: 'J\'y vais, à plus tard !'
  },
  {
    id: 'sq-5',
    fi: 'Pidä hauskaa!',
    fr: 'Amuse-toi bien !',
    puhekieli: 'Pidä hauskaa!',
    category: 'quotidien',
    level: 'A2',
    example: 'Nähdään huomenna, pidä hauskaa!',
    exampleFr: 'À demain, amuse-toi bien !'
  },
  {
    id: 'sq-6',
    fi: 'Hyvää viikonloppua!',
    fr: 'Bon week-end !',
    puhekieli: 'Hyvää viikonloppuu!',
    category: 'quotidien',
    level: 'A2',
    example: 'Nähdään maanantaina, hyvää viikonloppua!',
    exampleFr: 'À lundi, bon week-end !'
  },

  // === AU RESTAURANT / MAGASIN ===
  {
    id: 'rm-1',
    fi: 'Mitä saisi olla?',
    fr: 'Que désirez-vous ?',
    puhekieli: 'Mitä sais olla?',
    category: 'commerce',
    level: 'A2',
    example: 'Myyjä: Mitä saisi olla?',
    exampleFr: 'Vendeur : Que désirez-vous ?'
  },
  {
    id: 'rm-2',
    fi: 'Haluaisin...',
    fr: 'Je voudrais...',
    puhekieli: 'Mä haluisin...',
    category: 'commerce',
    level: 'A2',
    example: 'Haluaisin yhden kahvin, kiitos.',
    exampleFr: 'Je voudrais un café, s\'il vous plaît.'
  },
  {
    id: 'rm-3',
    fi: 'Paljonko tämä maksaa?',
    fr: 'Combien ça coûte ?',
    puhekieli: 'Paljon tää maksaa?',
    category: 'commerce',
    level: 'A2',
    example: 'Paljonko tämä paita maksaa?',
    exampleFr: 'Combien coûte cette chemise ?'
  },
  {
    id: 'rm-4',
    fi: 'Saanko laskun?',
    fr: 'L\'addition, s\'il vous plaît.',
    puhekieli: 'Saanks laskun?',
    category: 'commerce',
    level: 'A2',
    example: 'Anteeksi, saanko laskun?',
    exampleFr: 'Excusez-moi, l\'addition s\'il vous plaît.'
  },
  {
    id: 'rm-5',
    fi: 'Onko teillä...?',
    fr: 'Avez-vous... ?',
    puhekieli: 'Onks teillä...?',
    category: 'commerce',
    level: 'A2',
    example: 'Onko teillä laktoositonta maitoa?',
    exampleFr: 'Avez-vous du lait sans lactose ?'
  },

  // === DEMANDER DES INFORMATIONS ===
  {
    id: 'di-1',
    fi: 'Anteeksi, missä on...?',
    fr: 'Excusez-moi, où se trouve... ?',
    puhekieli: 'Anteeks, mis on...?',
    category: 'informations',
    level: 'A2',
    example: 'Anteeksi, missä on lähin pankki?',
    exampleFr: 'Excusez-moi, où se trouve la banque la plus proche ?'
  },
  {
    id: 'di-2',
    fi: 'Miten pääsen...?',
    fr: 'Comment puis-je aller à... ?',
    puhekieli: 'Miten mä pääsen...?',
    category: 'informations',
    level: 'A2',
    example: 'Miten pääsen rautatieasemalle?',
    exampleFr: 'Comment puis-je aller à la gare ?'
  },
  {
    id: 'di-3',
    fi: 'Mihin aikaan...?',
    fr: 'À quelle heure... ?',
    puhekieli: 'Mihin aikaan...?',
    category: 'informations',
    level: 'A2',
    example: 'Mihin aikaan kauppa sulkeutuu?',
    exampleFr: 'À quelle heure le magasin ferme-t-il ?'
  },
  {
    id: 'di-4',
    fi: 'Voitko toistaa?',
    fr: 'Peux-tu répéter ?',
    puhekieli: 'Voitko toistaa?',
    category: 'informations',
    level: 'A2',
    example: 'Anteeksi, en kuullut. Voitko toistaa?',
    exampleFr: 'Pardon, je n\'ai pas entendu. Peux-tu répéter ?'
  },
  {
    id: 'di-5',
    fi: 'En ymmärrä.',
    fr: 'Je ne comprends pas.',
    puhekieli: 'Mä en ymmärrä.',
    category: 'informations',
    level: 'A2',
    example: 'Anteeksi, en ymmärrä. Voitko puhua hitaammin?',
    exampleFr: 'Pardon, je ne comprends pas. Peux-tu parler plus lentement ?'
  }
];

// Collocations (verbe + cas specifique)
export const collocations = [
  // PITÄÄ + ELATIIVI (-sta/-stä)
  {
    id: 'col-1',
    verb: 'pitää',
    verbFr: 'aimer',
    case: 'elatiivi',
    caseSuffix: '-sta/-stä',
    example: 'Pidän kahvista.',
    exampleFr: 'J\'aime le café.',
    level: 'A2',
    note: 'pitää + elatiivi = aimer quelque chose'
  },
  {
    id: 'col-2',
    verb: 'pitää',
    verbFr: 'devoir (obligation)',
    case: 'genetiivi + infinitif',
    caseSuffix: '-n + verbe',
    example: 'Minun pitää mennä.',
    exampleFr: 'Je dois partir.',
    level: 'A2',
    note: 'pitää + génitif + infinitif = devoir'
  },

  // TYKÄTÄ + ELATIIVI
  {
    id: 'col-3',
    verb: 'tykätä',
    verbFr: 'aimer (puhekieli)',
    case: 'elatiivi',
    caseSuffix: '-sta/-stä',
    example: 'Tykkään musiikista.',
    exampleFr: 'J\'aime la musique.',
    level: 'A2',
    note: 'tykätä est plus courant en puhekieli que pitää'
  },

  // KÄYDÄ + INESSIIVI (-ssa/-ssä)
  {
    id: 'col-4',
    verb: 'käydä',
    verbFr: 'aller (visiter)',
    case: 'inessiivi',
    caseSuffix: '-ssa/-ssä',
    example: 'Käyn kaupassa.',
    exampleFr: 'Je vais au magasin.',
    level: 'A2',
    note: 'käydä + inessiivi = aller quelque part (et revenir)'
  },

  // PELATA + PARTITIIVI
  {
    id: 'col-5',
    verb: 'pelata',
    verbFr: 'jouer (sport/jeu)',
    case: 'partitiivi',
    caseSuffix: '-a/-ä',
    example: 'Pelaan jalkapalloa.',
    exampleFr: 'Je joue au football.',
    level: 'A2',
    note: 'pelata + partitif pour les sports et jeux'
  },

  // SOITTAA + PARTITIIVI
  {
    id: 'col-6',
    verb: 'soittaa',
    verbFr: 'jouer (instrument) / appeler',
    case: 'partitiivi',
    caseSuffix: '-a/-ä',
    example: 'Soitan kitaraa.',
    exampleFr: 'Je joue de la guitare.',
    level: 'A2',
    note: 'soittaa + partitif pour les instruments'
  },

  // OPISKELLA + PARTITIIVI
  {
    id: 'col-7',
    verb: 'opiskella',
    verbFr: 'étudier',
    case: 'partitiivi',
    caseSuffix: '-a/-ä',
    example: 'Opiskelen suomea.',
    exampleFr: 'J\'étudie le finnois.',
    level: 'A2',
    note: 'opiskella + partitif pour ce qu\'on étudie'
  },

  // ODOTTAA + PARTITIIVI
  {
    id: 'col-8',
    verb: 'odottaa',
    verbFr: 'attendre',
    case: 'partitiivi',
    caseSuffix: '-a/-ä',
    example: 'Odotan bussia.',
    exampleFr: 'J\'attends le bus.',
    level: 'A2',
    note: 'odottaa prend toujours le partitif'
  },

  // ETSIÄ + PARTITIIVI
  {
    id: 'col-9',
    verb: 'etsiä',
    verbFr: 'chercher',
    case: 'partitiivi',
    caseSuffix: '-a/-ä',
    example: 'Etsin avaimia.',
    exampleFr: 'Je cherche les clés.',
    level: 'A2',
    note: 'etsiä prend toujours le partitif'
  },

  // AUTTAA + PARTITIIVI
  {
    id: 'col-10',
    verb: 'auttaa',
    verbFr: 'aider',
    case: 'partitiivi',
    caseSuffix: '-a/-ä',
    example: 'Autan sinua.',
    exampleFr: 'Je t\'aide.',
    level: 'A2',
    note: 'auttaa + partitif pour la personne aidée'
  },

  // KYSYÄ + ABLATIIVI (-lta/-ltä)
  {
    id: 'col-11',
    verb: 'kysyä',
    verbFr: 'demander',
    case: 'ablatiivi',
    caseSuffix: '-lta/-ltä',
    example: 'Kysyn opettajalta.',
    exampleFr: 'Je demande au professeur.',
    level: 'A2',
    note: 'kysyä + ablatif pour la personne à qui on demande'
  },

  // KIITTÄÄ + ELATIIVI
  {
    id: 'col-12',
    verb: 'kiittää',
    verbFr: 'remercier pour',
    case: 'elatiivi',
    caseSuffix: '-sta/-stä',
    example: 'Kiitän sinua avusta.',
    exampleFr: 'Je te remercie pour ton aide.',
    level: 'A2',
    note: 'kiittää + élatif pour ce dont on remercie'
  },

  // OLLA KIINNOSTUNUT + ELATIIVI
  {
    id: 'col-13',
    verb: 'olla kiinnostunut',
    verbFr: 'être intéressé par',
    case: 'elatiivi',
    caseSuffix: '-sta/-stä',
    example: 'Olen kiinnostunut historiasta.',
    exampleFr: 'Je suis intéressé(e) par l\'histoire.',
    level: 'A2',
    note: 'kiinnostunut + élatif'
  },

  // VASTATA + ILLATIIVI (-Vn, -hVn)
  {
    id: 'col-14',
    verb: 'vastata',
    verbFr: 'répondre à',
    case: 'illatiivi',
    caseSuffix: '-Vn/-hVn',
    example: 'Vastaan kysymykseen.',
    exampleFr: 'Je réponds à la question.',
    level: 'A2',
    note: 'vastata + illatif'
  },

  // TUTUSTUA + ILLATIIVI
  {
    id: 'col-15',
    verb: 'tutustua',
    verbFr: 'faire connaissance avec',
    case: 'illatiivi',
    caseSuffix: '-Vn/-hVn',
    example: 'Tutustun uusiin ihmisiin.',
    exampleFr: 'Je fais connaissance avec de nouvelles personnes.',
    level: 'A2',
    note: 'tutustua + illatif'
  }
];

// Categories d'expressions
export const expressionCategories = [
  { id: 'opinions', name: 'Opinions et avis', icon: '💭' },
  { id: 'temps', name: 'Temps et fréquence', icon: '⏰' },
  { id: 'cause', name: 'Cause et conséquence', icon: '➡️' },
  { id: 'politesse', name: 'Politesse et demandes', icon: '🙏' },
  { id: 'quotidien', name: 'Situations quotidiennes', icon: '🏠' },
  { id: 'commerce', name: 'Au magasin / restaurant', icon: '🛒' },
  { id: 'informations', name: 'Demander des informations', icon: '❓' }
];

// Fonction pour obtenir toutes les expressions
export const getAllExpressions = () => expressions;

// Fonction pour obtenir les expressions par categorie
export const getExpressionsByCategory = (categoryId) => {
  return expressions.filter(exp => exp.category === categoryId);
};

// Fonction pour obtenir toutes les collocations
export const getAllCollocations = () => collocations;

// Fonction pour obtenir les collocations par niveau
export const getCollocationsByLevel = (level) => {
  return collocations.filter(col => col.level === level);
};
