// Mini-histoires graduees niveau A2
// Chaque histoire contient: texte finnois, version puhekieli, traduction, vocabulaire cle, questions

export const stories = [
  {
    id: 'story-1',
    title: 'Päivä Helsingissä',
    titleFr: 'Une journee a Helsinki',
    level: 'A2',
    theme: 'voyage',
    // Texte en kirjakieli (finnois ecrit standard)
    text: `Minna herää aikaisin aamulla. Hän syö puuroa ja juo kahvia. Tänään hän menee Helsinkiin.

Hän ottaa junan asemalta. Matka kestää kaksi tuntia. Junassa hän lukee kirjaa.

Helsingissä hän kävelee Esplanadilla. Siellä on paljon ihmisiä ja kauppoja. Hän ostaa lahjoja ystävilleen.

Iltapäivällä hän menee ravintolaan. Hän tilaa lohikeittoa ja ruisleipää. Ruoka on herkullista!

Illalla hän on väsynyt mutta onnellinen. Tämä oli hieno päivä.`,
    // Version puhekieli (finnois parle)
    textPuhekieli: `Minna herää aikasii aamul. Se syö puuroo ja juo kahvii. Tänään se menee Hesaan.

Se ottaa junan asemalt. Matka kestää kaks tuntii. Junas se lukee kirjaa.

Hesas se kävelee Espalla. Siel on paljo porukkaa ja kauppoi. Se ostaa lahjoi kavereille.

Iltapäiväl se menee raflaan. Se tilaa lohikeittoo ja ruisleipää. Safka on tosi hyvää!

Illal se on väsyny mut onnellinen. Tää oli makee päivä.`,
    // Traduction francaise
    translation: `Minna se reveille tot le matin. Elle mange du porridge et boit du cafe. Aujourd'hui, elle va a Helsinki.

Elle prend le train a la gare. Le trajet dure deux heures. Dans le train, elle lit un livre.

A Helsinki, elle se promene sur l'Esplanade. Il y a beaucoup de gens et de magasins. Elle achete des cadeaux pour ses amis.

L'apres-midi, elle va au restaurant. Elle commande une soupe au saumon et du pain de seigle. La nourriture est delicieuse !

Le soir, elle est fatiguee mais heureuse. C'etait une belle journee.`,
    // Vocabulaire cle (mots a surligner et traduire au clic)
    vocabulary: {
      'herää': 'se reveille',
      'aikaisin': 'tot',
      'aamulla': 'le matin',
      'syö': 'mange',
      'puuroa': 'du porridge (partitif)',
      'juo': 'boit',
      'menee': 'va',
      'ottaa': 'prend',
      'asemalta': 'de la gare (ablatif)',
      'matka': 'le trajet',
      'kestää': 'dure',
      'tuntia': 'heures (partitif)',
      'junassa': 'dans le train (inessif)',
      'lukee': 'lit',
      'kävelee': 'marche, se promene',
      'ihmisiä': 'des gens (partitif)',
      'kauppoja': 'des magasins (partitif)',
      'ostaa': 'achete',
      'lahjoja': 'des cadeaux (partitif)',
      'ystävilleen': 'pour ses amis',
      'iltapäivällä': 'l\'apres-midi',
      'ravintolaan': 'au restaurant (illatif)',
      'tilaa': 'commande',
      'lohikeittoa': 'soupe au saumon (partitif)',
      'ruisleipää': 'pain de seigle (partitif)',
      'ruoka': 'la nourriture',
      'herkullista': 'delicieux (partitif)',
      'illalla': 'le soir',
      'väsynyt': 'fatigue(e)',
      'onnellinen': 'heureux/heureuse',
      'hieno': 'beau, chouette'
    },
    // Questions de comprehension
    questions: [
      {
        type: 'trueFalse',
        question: 'Minna syö leipää aamiaiseksi.',
        questionFr: 'Minna mange du pain au petit-dejeuner.',
        answer: false,
        explanation: 'Minna syö puuroa (Minna mange du porridge).'
      },
      {
        type: 'qcm',
        question: 'Kuinka kauan matka kestää?',
        questionFr: 'Combien de temps dure le trajet ?',
        options: ['Yhden tunnin', 'Kaksi tuntia', 'Kolme tuntia', 'Neljä tuntia'],
        answer: 1,
        answerFr: 'Deux heures'
      },
      {
        type: 'qcm',
        question: 'Mitä Minna tilaa ravintolassa?',
        questionFr: 'Que commande Minna au restaurant ?',
        options: ['Pizzaa', 'Lohikeittoa ja ruisleipää', 'Hampurilaisen', 'Salaattia'],
        answer: 1,
        answerFr: 'De la soupe au saumon et du pain de seigle'
      },
      {
        type: 'trueFalse',
        question: 'Minna on illalla surullinen.',
        questionFr: 'Minna est triste le soir.',
        answer: false,
        explanation: 'Minna on onnellinen (Minna est heureuse).'
      }
    ]
  },
  {
    id: 'story-2',
    title: 'Kaupassa',
    titleFr: 'Au supermarche',
    level: 'A2',
    theme: 'quotidien',
    text: `Pekka menee Prismaan lauantaina. Hän tarvitsee ruokaa viikonlopuksi.

Ensin hän ottaa ostoskorin. Sitten hän menee hedelmäosastolle. Hän ottaa banaaneja, omenoita ja appelsiineja.

Seuraavaksi hän menee maitotuotteisiin. Hän ostaa maitoa, juustoa ja jogurttia. Hän tarvitsee myös kananmunia.

Lihaosastolla hän valitsee kanaa ja jauhelihaa. Hän aikoo tehdä lasagnea sunnuntaina.

Kassalla hän maksaa kortilla. Yhteensä ostos maksaa kolmekymmentäviisi euroa. Hän pakkaa ostokset kassiin ja lähtee kotiin.`,
    textPuhekieli: `Pekka menee Prismaa lauantain. Se tarvii ruokaa viikonlopuks.

Ekal se ottaa ostoskärryn. Sit se menee hedelmäosastol. Se ottaa banaanei, omenoita ja appelsiinei.

Seuraavaks se menee maitotuotteisii. Se ostaa maitoo, juustoo ja jogurttii. Se tarvii kans kananmunii.

Lihaosastol se valitsee kanaa ja jauhelihaa. Se aikoo tehä lasagnee sunnuntain.

Kassal se maksaa kortil. Yhteens ostos maksaa kolkytviis euroo. Se pakkaa ostokset kassii ja lähtee kotii.`,
    translation: `Pekka va a Prisma le samedi. Il a besoin de nourriture pour le week-end.

D'abord, il prend un panier. Ensuite, il va au rayon fruits. Il prend des bananes, des pommes et des oranges.

Ensuite, il va aux produits laitiers. Il achete du lait, du fromage et du yaourt. Il a aussi besoin d'oeufs.

Au rayon viande, il choisit du poulet et de la viande hachee. Il compte faire des lasagnes dimanche.

A la caisse, il paie par carte. Le total fait trente-cinq euros. Il met les courses dans un sac et rentre chez lui.`,
    vocabulary: {
      'menee': 'va',
      'lauantaina': 'le samedi',
      'tarvitsee': 'a besoin de',
      'viikonlopuksi': 'pour le week-end',
      'ensin': 'd\'abord',
      'ostoskorin': 'un panier',
      'sitten': 'ensuite',
      'hedelmäosastolle': 'au rayon fruits',
      'banaaneja': 'des bananes (partitif)',
      'omenoita': 'des pommes (partitif)',
      'appelsiineja': 'des oranges (partitif)',
      'seuraavaksi': 'ensuite',
      'maitotuotteisiin': 'aux produits laitiers (illatif)',
      'maitoa': 'du lait (partitif)',
      'juustoa': 'du fromage (partitif)',
      'jogurttia': 'du yaourt (partitif)',
      'myös': 'aussi',
      'kananmunia': 'des oeufs (partitif)',
      'lihaosastolla': 'au rayon viande (adesif)',
      'valitsee': 'choisit',
      'kanaa': 'du poulet (partitif)',
      'jauhelihaa': 'de la viande hachee (partitif)',
      'aikoo': 'compte, a l\'intention de',
      'tehdä': 'faire',
      'sunnuntaina': 'le dimanche',
      'kassalla': 'a la caisse (adesif)',
      'maksaa': 'paie',
      'kortilla': 'par carte (adesif)',
      'yhteensä': 'au total',
      'ostos': 'l\'achat',
      'kolmekymmentäviisi': 'trente-cinq',
      'pakkaa': 'emballe, met',
      'ostokset': 'les courses',
      'kassiin': 'dans le sac (illatif)',
      'lähtee': 'part',
      'kotiin': 'a la maison (illatif)'
    },
    questions: [
      {
        type: 'qcm',
        question: 'Milloin Pekka menee kauppaan?',
        questionFr: 'Quand Pekka va-t-il au magasin ?',
        options: ['Maanantaina', 'Keskiviikkona', 'Lauantaina', 'Sunnuntaina'],
        answer: 2,
        answerFr: 'Samedi'
      },
      {
        type: 'trueFalse',
        question: 'Pekka ostaa mansikoita.',
        questionFr: 'Pekka achete des fraises.',
        answer: false,
        explanation: 'Hän ostaa banaaneja, omenoita ja appelsiineja (Il achete des bananes, des pommes et des oranges).'
      },
      {
        type: 'qcm',
        question: 'Mitä Pekka aikoo tehdä sunnuntaina?',
        questionFr: 'Que compte faire Pekka dimanche ?',
        options: ['Pizzaa', 'Kakkua', 'Lasagnea', 'Keittoa'],
        answer: 2,
        answerFr: 'Des lasagnes'
      },
      {
        type: 'qcm',
        question: 'Kuinka paljon Pekka maksaa?',
        questionFr: 'Combien Pekka paie-t-il ?',
        options: ['25 euroa', '35 euroa', '45 euroa', '55 euroa'],
        answer: 1,
        answerFr: '35 euros'
      }
    ]
  },
  {
    id: 'story-3',
    title: 'Lääkärissä',
    titleFr: 'Chez le medecin',
    level: 'A2',
    theme: 'sante',
    text: `Liisa ei voi hyvin. Hänellä on kuumetta ja kurkkukipua. Hän varaa ajan lääkärille.

Vastaanottolla hoitaja kysyy: "Mikä vaivaa?"
Liisa vastaa: "Minulla on ollut kuumetta kolme päivää. Kurkkuni on kipeä ja olen väsynyt."

Lääkäri tutkii Liisan. Hän katsoo kurkkua ja mittaa kuumeen. Liisalla on 38 astetta kuumetta.

Lääkäri sanoo: "Sinulla on flunssa. Lepää kotona ja juo paljon vettä. Voit ottaa parasetamolia kuumeeseen."

Hän kirjoittaa reseptin. Liisa menee apteekkiin ja ostaa lääkettä. Kotona hän lepää sängyssä ja katsoo televisiota. Viikon päästä hän voi paremmin.`,
    textPuhekieli: `Liisa ei voi hyvin. Sil on kuumetta ja kurkkukipuu. Se varaa ajan lääkäril.

Vastaanotol hoitaja kysyy: "Mikä vaivaa?"
Liisa vastaa: "Mul on ollu kuumetta kolme päivää. Kurkku on kipee ja oon väsyny."

Lääkäri tutkii Liisan. Se kattoo kurkkuu ja mittaa kuumeen. Liisal on 38 astetta kuumetta.

Lääkäri sanoo: "Sul on flunssa. Lepää koton ja juo paljo vettä. Voit ottaa parasetamolii kuumeesee."

Se kirjottaa reseptin. Liisa menee apteekkii ja ostaa lääkettä. Koton se lepää sängys ja kattoo telkkarii. Viikon päästä se voi paremmin.`,
    translation: `Liisa ne va pas bien. Elle a de la fievre et mal a la gorge. Elle prend rendez-vous chez le medecin.

A l'accueil, l'infirmiere demande : "Qu'est-ce qui ne va pas ?"
Liisa repond : "J'ai eu de la fievre pendant trois jours. Ma gorge me fait mal et je suis fatiguee."

Le medecin examine Liisa. Il regarde la gorge et prend la temperature. Liisa a 38 degres de fievre.

Le medecin dit : "Tu as la grippe. Repose-toi a la maison et bois beaucoup d'eau. Tu peux prendre du paracetamol pour la fievre."

Il ecrit une ordonnance. Liisa va a la pharmacie et achete des medicaments. A la maison, elle se repose au lit et regarde la television. Une semaine plus tard, elle va mieux.`,
    vocabulary: {
      'voi': 'va (etre)',
      'hyvin': 'bien',
      'hanella on': 'il/elle a',
      'kuumetta': 'de la fievre (partitif)',
      'kurkkukipua': 'mal a la gorge (partitif)',
      'varaa': 'reserve, prend rendez-vous',
      'ajan': 'un rendez-vous',
      'lääkärille': 'chez le medecin (allatif)',
      'vastaanottolla': 'a l\'accueil (adesif)',
      'hoitaja': 'l\'infirmier/infirmiere',
      'kysyy': 'demande',
      'vaivaa': 'fait mal, gene',
      'vastaa': 'repond',
      'ollut': 'eu (participe passe)',
      'päivää': 'jours (partitif)',
      'kurkkuni': 'ma gorge',
      'kipeä': 'douloureux',
      'väsynyt': 'fatigue(e)',
      'tutkii': 'examine',
      'katsoo': 'regarde',
      'mittaa': 'mesure',
      'kuumeen': 'la fievre (genitif)',
      'astetta': 'degres (partitif)',
      'sanoo': 'dit',
      'flunssa': 'la grippe',
      'lepää': 'se repose',
      'kotona': 'a la maison (essif)',
      'paljon': 'beaucoup',
      'vettä': 'de l\'eau (partitif)',
      'voit': 'tu peux',
      'kuumeeseen': 'pour la fievre (illatif)',
      'kirjoittaa': 'ecrit',
      'reseptin': 'une ordonnance',
      'apteekkiin': 'a la pharmacie (illatif)',
      'lääkettä': 'des medicaments (partitif)',
      'sängyssä': 'au lit (inessif)',
      'viikon päästä': 'dans une semaine',
      'paremmin': 'mieux'
    },
    questions: [
      {
        type: 'qcm',
        question: 'Mitä Liisalla on?',
        questionFr: 'Qu\'est-ce qu\'a Liisa ?',
        options: ['Päänsärkyä', 'Kuumetta ja kurkkukipua', 'Vatsakipua', 'Jalkakipua'],
        answer: 1,
        answerFr: 'De la fievre et mal a la gorge'
      },
      {
        type: 'qcm',
        question: 'Kuinka monta astetta kuumetta Liisalla on?',
        questionFr: 'Combien de degres de fievre Liisa a-t-elle ?',
        options: ['36 astetta', '37 astetta', '38 astetta', '39 astetta'],
        answer: 2,
        answerFr: '38 degres'
      },
      {
        type: 'trueFalse',
        question: 'Lääkäri sanoo, että Liisalla on angina.',
        questionFr: 'Le medecin dit que Liisa a une angine.',
        answer: false,
        explanation: 'Lääkäri sanoo, että Liisalla on flunssa (Le medecin dit que Liisa a la grippe).'
      },
      {
        type: 'qcm',
        question: 'Milloin Liisa voi paremmin?',
        questionFr: 'Quand Liisa va-t-elle mieux ?',
        options: ['Seuraavana päivänä', 'Kolmen päivän päästä', 'Viikon päästä', 'Kuukauden päästä'],
        answer: 2,
        answerFr: 'Une semaine plus tard'
      }
    ]
  },
  {
    id: 'story-4',
    title: 'Viikonloppu mökillä',
    titleFr: 'Un week-end au chalet',
    level: 'A2',
    theme: 'loisirs',
    text: `Kesalla perheemme menee usein mökille. Mökki on järven rannalla Itä-Suomessa.

Perjantai-iltana me ajamme autolla kolme tuntia. Kun saavumme, isä lämmittää saunan. Me saunomme ja uimme järvessä. Vesi on vielä kylmää mutta virkistävää!

Lauantaiaamuna äiti tekee aamupalaa. Me syömme pannukakkuja ja juomme mehua. Sitten me menemme kalastamaan. Isä saa ison hauen!

Illalla me grillaamme kalaa ja makkaraa. Me istumme laiturilla ja katsomme auringonlaskua. Taivas on oranssi ja punainen. On niin kaunista.

Sunnuntaina me pakaamme ja ajamme takaisin kaupunkiin. Olen vähän surullinen mutta tiedän, että tulemme taas.`,
    textPuhekieli: `Kesäl meiän perhe menee usein mökil. Mökki on järven rannal Itä-Suomes.

Perjantai-iltan me ajetaa autol kolme tuntii. Ku me saavutaa, faija lämmittää saunan. Me saunotaa ja uitaa järves. Vesi on viel kylmää mut virkistävää!

Lauantaiaamun mutsi tekee aamupalaa. Me syödää pannukakkui ja juodaa mehuu. Sit me mennää kalastaa. Faija saa ison hauen!

Illal me grillataa kalaa ja makkaraa. Me istutaa laiturilla ja katsotaa auringonlaskuu. Taivas on oranssi ja punanen. On nii kaunista.

Sunnuntain me pakataa ja ajetaa takas kaupunkii. Oon vähä surullinen mut tiiän, et me tullaa taas.`,
    translation: `En ete, notre famille va souvent au chalet. Le chalet est au bord d'un lac dans l'est de la Finlande.

Vendredi soir, nous conduisons trois heures en voiture. Quand nous arrivons, papa chauffe le sauna. Nous prenons le sauna et nageons dans le lac. L'eau est encore froide mais rafraichissante !

Samedi matin, maman prepare le petit-dejeuner. Nous mangeons des crepes et buvons du jus. Ensuite, nous allons pecher. Papa attrape un gros brochet !

Le soir, nous grillons du poisson et des saucisses. Nous nous asseyons sur le ponton et regardons le coucher de soleil. Le ciel est orange et rouge. C'est si beau.

Dimanche, nous faisons les valises et rentrons en ville. Je suis un peu triste mais je sais que nous reviendrons.`,
    vocabulary: {
      'kesalla': 'en ete',
      'perheemme': 'notre famille',
      'usein': 'souvent',
      'mökille': 'au chalet (allatif)',
      'järven': 'du lac (genitif)',
      'rannalla': 'au bord de (adesif)',
      'Itä-Suomessa': 'dans l\'est de la Finlande (inessif)',
      'perjantai-iltana': 'vendredi soir',
      'ajamme': 'nous conduisons',
      'autolla': 'en voiture (adesif)',
      'saavumme': 'nous arrivons',
      'isä': 'papa',
      'lämmittää': 'chauffe',
      'saunan': 'le sauna (genitif)',
      'saunomme': 'nous prenons le sauna',
      'uimme': 'nous nageons',
      'järvessä': 'dans le lac (inessif)',
      'vesi': 'l\'eau',
      'vielä': 'encore',
      'kylmää': 'froid (partitif)',
      'virkistävää': 'rafraichissant (partitif)',
      'äiti': 'maman',
      'aamupalaa': 'le petit-dejeuner (partitif)',
      'pannukakkuja': 'des crepes (partitif)',
      'mehua': 'du jus (partitif)',
      'kalastamaan': 'pecher (illatif)',
      'saa': 'attrape, obtient',
      'hauen': 'un brochet (genitif)',
      'grillaamme': 'nous grillons',
      'makkaraa': 'des saucisses (partitif)',
      'istumme': 'nous nous asseyons',
      'laiturilla': 'sur le ponton (adesif)',
      'auringonlaskua': 'le coucher de soleil (partitif)',
      'taivas': 'le ciel',
      'oranssi': 'orange',
      'punainen': 'rouge',
      'kaunista': 'beau (partitif)',
      'pakaamme': 'nous faisons les valises',
      'takaisin': 'de retour',
      'kaupunkiin': 'en ville (illatif)',
      'surullinen': 'triste',
      'tiedän': 'je sais',
      'tulemme': 'nous viendrons',
      'taas': 'encore, a nouveau'
    },
    questions: [
      {
        type: 'qcm',
        question: 'Missä mökki sijaitsee?',
        questionFr: 'Ou se trouve le chalet ?',
        options: ['Länsi-Suomessa', 'Etelä-Suomessa', 'Itä-Suomessa', 'Pohjois-Suomessa'],
        answer: 2,
        answerFr: 'Dans l\'est de la Finlande'
      },
      {
        type: 'trueFalse',
        question: 'Perhe ajaa autolla viisi tuntia.',
        questionFr: 'La famille conduit cinq heures en voiture.',
        answer: false,
        explanation: 'Perhe ajaa autolla kolme tuntia (La famille conduit trois heures).'
      },
      {
        type: 'qcm',
        question: 'Mitäisä saa kalastuksessa?',
        questionFr: 'Qu\'est-ce que le pere attrape a la peche ?',
        options: ['Ahvenen', 'Lohen', 'Hauen', 'Siian'],
        answer: 2,
        answerFr: 'Un brochet'
      },
      {
        type: 'trueFalse',
        question: 'Taivas on illalla sininen.',
        questionFr: 'Le ciel est bleu le soir.',
        answer: false,
        explanation: 'Taivas on oranssi ja punainen (Le ciel est orange et rouge).'
      }
    ]
  },
  {
    id: 'story-5',
    title: 'Uusi työ',
    titleFr: 'Un nouveau travail',
    level: 'A2',
    theme: 'travail',
    text: `Tänään on minun ensimmäinen työpäiväni uudessa yrityksessä. Olen vähän hermostunut mutta myös innoissani.

Tulen toimistoon kahdeksalta. Vastaanottovirkailija tervehtii minua ja ohjaa minut esimieheni luo.

Esimieheni nimi on Markus. Hän esittelee minut tiimille. Tiimissä on viisi henkilöä. Kaikki ovat ystävällisiä.

Aamulla minä saan oman tietokoneen ja pöydän. Markus selittää työtehtäväni. Minun täytyy vastata asiakkaiden sähköposteihin ja soittaa puheluita.

Lounaalla me menemme yhdessä ravintolaan. Kollegat kertovat minulle yrityksestä. Opin paljon uutta tänään.

Työpäivän jälkeen olen väsynyt mutta tyytyväinen. Luulen, että viihdyn täällä.`,
    textPuhekieli: `Tänään on mun ekan työpäivä uudes firmas. Oon vähän hermostunu mut kans innoissani.

Tuun toimistool kasilt. Vastaanottotyyppi tervehtii mua ja ohjaa mut mun pomon luo.

Mun pomon nimi on Markus. Se esittelee mut tiimille. Tiimis on viis tyyppiä. Kaikki on tosi kivoi.

Aamul mä saan oman läppärin ja pöydän. Markus selittää mun duunit. Mun täytyy vastata asiakkaitten sähköposteihin ja soittaa puheluita.

Lounaalla me mennää yhes raflaan. Kollegat kertoo mulle firmasta. Opin tosi paljo uutta tänään.

Työpäivän jälkeen oon väsyny mut tyytyväinen. Luulen, et mä viihdyn täällä.`,
    translation: `Aujourd'hui, c'est mon premier jour de travail dans la nouvelle entreprise. Je suis un peu nerveux mais aussi enthousiaste.

J'arrive au bureau a huit heures. Le/La receptionniste me salue et me dirige vers mon chef.

Mon chef s'appelle Markus. Il me presente a l'equipe. Il y a cinq personnes dans l'equipe. Tout le monde est sympa.

Le matin, je recois mon propre ordinateur et bureau. Markus m'explique mes taches. Je dois repondre aux e-mails des clients et passer des appels.

Au dejeuner, nous allons ensemble au restaurant. Les collegues me parlent de l'entreprise. J'apprends beaucoup de nouvelles choses aujourd'hui.

Apres la journee de travail, je suis fatigue mais satisfait. Je pense que je vais me plaire ici.`,
    vocabulary: {
      'ensimmäinen': 'premier',
      'työpäiväni': 'mon jour de travail',
      'uudessa': 'dans la nouvelle (inessif)',
      'yrityksessä': 'entreprise (inessif)',
      'hermostunut': 'nerveux',
      'innoissani': 'enthousiaste',
      'tulen': 'j\'arrive',
      'toimistoon': 'au bureau (illatif)',
      'kahdeksalta': 'a huit heures',
      'vastaanottovirkailija': 'receptionniste',
      'tervehtii': 'salue',
      'ohjaa': 'dirige',
      'esimieheni': 'mon chef',
      'luo': 'vers, chez',
      'esittelee': 'presente',
      'tiimille': 'a l\'equipe (allatif)',
      'henkilöä': 'personnes (partitif)',
      'kaikki': 'tout le monde',
      'ystävällisiä': 'sympa (partitif)',
      'oman': 'mon propre (genitif)',
      'tietokoneen': 'un ordinateur (genitif)',
      'pöydän': 'un bureau (genitif)',
      'selittää': 'explique',
      'työtehtäväni': 'mes taches',
      'täytyy': 'devoir',
      'vastata': 'repondre',
      'asiakkaiden': 'des clients (genitif)',
      'sähköposteihin': 'aux e-mails (illatif)',
      'soittaa': 'appeler, passer',
      'puheluita': 'des appels (partitif)',
      'lounaalla': 'au dejeuner (adesif)',
      'yhdessä': 'ensemble',
      'kollegat': 'les collegues',
      'kertovat': 'racontent',
      'yrityksestä': 'de l\'entreprise (elatif)',
      'opin': 'j\'apprends',
      'uutta': 'de nouveau (partitif)',
      'työpäivän jälkeen': 'apres la journee de travail',
      'tyytyväinen': 'satisfait',
      'luulen': 'je pense',
      'viihdyn': 'je me plais'
    },
    questions: [
      {
        type: 'qcm',
        question: 'Mihin aikaan kertoja tulee toimistoon?',
        questionFr: 'A quelle heure le narrateur arrive-t-il au bureau ?',
        options: ['Seitsemältä', 'Kahdeksalta', 'Yhdeksältä', 'Kymmeneltä'],
        answer: 1,
        answerFr: 'A huit heures'
      },
      {
        type: 'qcm',
        question: 'Kuinka monta henkilöä tiimissä on?',
        questionFr: 'Combien de personnes y a-t-il dans l\'equipe ?',
        options: ['Kolme', 'Neljä', 'Viisi', 'Kuusi'],
        answer: 2,
        answerFr: 'Cinq'
      },
      {
        type: 'trueFalse',
        question: 'Kertojan täytyy kirjoittaa raportteja.',
        questionFr: 'Le narrateur doit ecrire des rapports.',
        answer: false,
        explanation: 'Kertojan täytyy vastata sähköposteihin ja soittaa puheluita (Le narrateur doit repondre aux e-mails et passer des appels).'
      },
      {
        type: 'trueFalse',
        question: 'Kertoja on työpäivän jälkeen tyytyväinen.',
        questionFr: 'Le narrateur est satisfait apres la journee de travail.',
        answer: true,
        explanation: 'Olen väsynyt mutta tyytyväinen (Je suis fatigue mais satisfait).'
      }
    ]
  },
  {
    id: 'story-6',
    title: 'Ravintolassa',
    titleFr: 'Au restaurant',
    level: 'A2',
    theme: 'quotidien',
    text: `Perjantai-iltana menen ravintolaan ystäväni Annan kanssa. Ravintola on kaupungin keskustassa.

Menemme sisään ja tarjoilija tervehtii meitä. Hän kysyy: "Oletteko varanneet pöydän?"
Me vastaamme: "Kyllä, varaus on nimellä Korhonen."

Tarjoilija ohjaa meidät pöytään ikkunan luo. Hän antaa meille ruokalistan.

Minä tilaan alkuruoaksi salaattia ja pääruoaksi lohta perunoiden kera. Anna tilaa pastaa ja lasin punaviiniä.

Ruoka on todella hyvää! Me puhumme ja nauramme paljon. Illasta tulee hauska.

Lopuksi me tilaamme jälkiruoaksi suklaakakkua. Se on taivaallista!

Me maksamme laskun ja jätämme tippiä. Kiitämme tarjoilijaa ja lähdemme.`,
    textPuhekieli: `Perjantai-iltan meen ravintolaa mun kaverin Annan kaa. Ravintola on keskustas.

Me mennää sisää ja tarjoilija tervehtii meit. Se kysyy: "Ootteko varanneet pöydän?"
Me vastataa: "Joo, varaus on nimellä Korhonen."

Tarjoilija ohjaa meiät pöytää ikkunan luo. Se antaa meille ruokalistan.

Mä tilaan alkuruoaks salaattii ja pääruoaks lohta perunoiden kaa. Anna tilaa pastaa ja lasin punaviiinii.

Safka on tosi hyvää! Me puhutaa ja nauretaa paljo. Illast tulee tosi kiva.

Lopuks me tilataa jälkkäriks suklaakakkuu. Se on taivaallista!

Me maksetaa lasku ja jätetää tippii. Kiitataa tarjoilijaa ja lähdetää.`,
    translation: `Vendredi soir, je vais au restaurant avec mon amie Anna. Le restaurant est dans le centre-ville.

Nous entrons et le serveur nous salue. Il demande : "Avez-vous reserve une table ?"
Nous repondons : "Oui, la reservation est au nom de Korhonen."

Le serveur nous conduit a une table pres de la fenetre. Il nous donne le menu.

Je commande une salade en entree et du saumon avec des pommes de terre en plat principal. Anna commande des pates et un verre de vin rouge.

La nourriture est vraiment bonne ! Nous parlons et rions beaucoup. La soiree devient agreable.

A la fin, nous commandons un gateau au chocolat en dessert. C'est divin !

Nous payons l'addition et laissons un pourboire. Nous remercions le serveur et partons.`,
    vocabulary: {
      'ystäväni': 'mon ami(e)',
      'kanssa': 'avec',
      'kaupungin': 'de la ville (genitif)',
      'keskustassa': 'dans le centre (inessif)',
      'sisään': 'a l\'interieur',
      'tarjoilija': 'le serveur',
      'meitä': 'nous (partitif)',
      'oletteko': 'avez-vous',
      'varanneet': 'reserve (participe)',
      'varaus': 'la reservation',
      'nimellä': 'au nom de (adesif)',
      'ohjaa': 'conduit',
      'pöytään': 'a la table (illatif)',
      'ikkunan': 'de la fenetre (genitif)',
      'antaa': 'donne',
      'ruokalistan': 'le menu',
      'tilaan': 'je commande',
      'alkuruoaksi': 'en entree',
      'salaattia': 'de la salade (partitif)',
      'pääruoaksi': 'en plat principal',
      'lohta': 'du saumon (partitif)',
      'perunoiden': 'des pommes de terre (genitif)',
      'kera': 'avec',
      'lasin': 'un verre (genitif)',
      'punaviiniä': 'de vin rouge (partitif)',
      'todella': 'vraiment',
      'puhumme': 'nous parlons',
      'nauramme': 'nous rions',
      'illasta': 'de la soiree (elatif)',
      'hauska': 'agreable, amusant',
      'lopuksi': 'a la fin',
      'jälkiruoaksi': 'en dessert',
      'suklaakakkua': 'du gateau au chocolat (partitif)',
      'taivaallista': 'divin (partitif)',
      'maksamme': 'nous payons',
      'laskun': 'l\'addition (genitif)',
      'jätämme': 'nous laissons',
      'tippiä': 'un pourboire (partitif)',
      'kiitämme': 'nous remercions',
      'lähdemme': 'nous partons'
    },
    questions: [
      {
        type: 'qcm',
        question: 'Missä ravintola sijaitsee?',
        questionFr: 'Ou se trouve le restaurant ?',
        options: ['Rannalla', 'Keskustassa', 'Lentokentällä', 'Metroasemalla'],
        answer: 1,
        answerFr: 'Dans le centre-ville'
      },
      {
        type: 'qcm',
        question: 'Mitäkertoja tilaa pääruoaksi?',
        questionFr: 'Qu\'est-ce que le narrateur commande en plat principal ?',
        options: ['Pastaa', 'Kanaa', 'Lohta', 'Pihviä'],
        answer: 2,
        answerFr: 'Du saumon'
      },
      {
        type: 'trueFalse',
        question: 'Anna tilaa valkoviiniä.',
        questionFr: 'Anna commande du vin blanc.',
        answer: false,
        explanation: 'Anna tilaa punaviiniä (Anna commande du vin rouge).'
      },
      {
        type: 'qcm',
        question: 'Mitähe tilaavat jälkiruoaksi?',
        questionFr: 'Que commandent-ils en dessert ?',
        options: ['Jäätelöä', 'Pannukakkua', 'Suklaakakkua', 'Omenapiirakkaa'],
        answer: 2,
        answerFr: 'Du gateau au chocolat'
      }
    ]
  },
  {
    id: 'story-7',
    title: 'Junalla matkustaminen',
    titleFr: 'Voyager en train',
    level: 'A2',
    theme: 'voyage',
    text: `Matkustan Tampereelta Turkuun junalla. Olen varannut lipun netissä.

Rautatieasemalla katson aikataulua. Junani lähtee raiteelta kolme kello 14.15. Minulla on puoli tuntia aikaa.

Ostan kahvin kioskista ja istun odotusaulaan. Luen uutisia puhelimestani.

Kuulutus kertoo, että juna on tulossa. Nostan laukkuni ja menen raiteelle. Juna saapuu täsmällisesti.

Löydän paikkani vaunusta neljä. Se on ikkunapaikka. Istun ja laitan laukkuni hyllylle.

Juna lähtee. Katselen maisemia ikkunasta. Suomen kesämaisema on kaunis: vihreitä metsiä ja sinisiä järviä.

Kaksi tuntia myöhemmin juna saapuu Turkuun. Olen perillä!`,
    textPuhekieli: `Matkustan Tampereelt Turkuu junal. Oon varannu lipun netist.

Rautatiasemal katon aikatauluu. Mun juna lähtee raiteelt kolme kello 14.15. Mul on puol tuntii aikaa.

Ostan kahvin kioskist ja istun odotusaulaa. Luen uutisii puhelimest.

Kuulutus kertoo, et juna on tulossa. Nostan mun laukun ja meen raiteelle. Juna saapuu ajallaa.

Löydän mun paikan vaunust neljä. Se on ikkunapaikka. Istun ja laitan laukun hyllyl.

Juna lähtee. Katselen maisemii ikkunast. Suomen kesämaisema on kaunis: vihreita metsiä ja sinisiä järviä.

Kaks tuntii myöhemmin juna saapuu Turkuu. Oon peril!`,
    translation: `Je voyage de Tampere a Turku en train. J'ai reserve un billet en ligne.

A la gare, je regarde les horaires. Mon train part du quai trois a 14h15. J'ai une demi-heure devant moi.

J'achete un cafe au kiosque et je m'assieds dans la salle d'attente. Je lis les actualites sur mon telephone.

L'annonce indique que le train arrive. Je prends ma valise et vais sur le quai. Le train arrive a l'heure.

Je trouve ma place dans le wagon quatre. C'est une place cote fenetre. Je m'assieds et mets ma valise sur l'etagere.

Le train part. Je regarde le paysage par la fenetre. Le paysage d'ete finlandais est beau : des forets vertes et des lacs bleus.

Deux heures plus tard, le train arrive a Turku. Je suis arrive !`,
    vocabulary: {
      'matkustan': 'je voyage',
      'junalla': 'en train (adesif)',
      'varannut': 'reserve (participe)',
      'lipun': 'un billet (genitif)',
      'netissä': 'en ligne, sur internet (inessif)',
      'rautatieasemalla': 'a la gare (adesif)',
      'katson': 'je regarde',
      'aikataulua': 'les horaires (partitif)',
      'junani': 'mon train',
      'lähtee': 'part',
      'raiteelta': 'du quai (ablatif)',
      'puoli tuntia': 'une demi-heure',
      'aikaa': 'du temps (partitif)',
      'kioskista': 'du kiosque (elatif)',
      'istun': 'je m\'assieds',
      'odotusaulaan': 'dans la salle d\'attente (illatif)',
      'luen': 'je lis',
      'uutisia': 'les actualites (partitif)',
      'puhelimestani': 'de mon telephone (elatif)',
      'kuulutus': 'l\'annonce',
      'kertoo': 'indique',
      'tulossa': 'en train d\'arriver',
      'nostan': 'je souleve',
      'laukkuni': 'ma valise',
      'saapuu': 'arrive',
      'täsmällisesti': 'a l\'heure, ponctuellement',
      'löydän': 'je trouve',
      'paikkani': 'ma place',
      'vaunusta': 'du wagon (elatif)',
      'ikkunapaikka': 'place cote fenetre',
      'laitan': 'je mets',
      'hyllylle': 'sur l\'etagere (allatif)',
      'katselen': 'je regarde',
      'maisemia': 'le paysage (partitif)',
      'ikkunasta': 'par la fenetre (elatif)',
      'kesämaisema': 'paysage d\'ete',
      'vihreitä': 'vertes (partitif)',
      'metsiä': 'des forets (partitif)',
      'sinisiä': 'bleus (partitif)',
      'järviä': 'des lacs (partitif)',
      'myöhemmin': 'plus tard',
      'perillä': 'arrive, a destination (adesif)'
    },
    questions: [
      {
        type: 'qcm',
        question: 'Mistä minne kertoja matkustaa?',
        questionFr: 'D\'ou a ou voyage le narrateur ?',
        options: ['Helsingistä Tampereelle', 'Tampereelta Turkuun', 'Turusta Ouluun', 'Oulusta Helsinkiin'],
        answer: 1,
        answerFr: 'De Tampere a Turku'
      },
      {
        type: 'qcm',
        question: 'Miltä raiteelta juna lähtee?',
        questionFr: 'De quel quai le train part-il ?',
        options: ['Raiteelta 1', 'Raiteelta 2', 'Raiteelta 3', 'Raiteelta 4'],
        answer: 2,
        answerFr: 'Du quai 3'
      },
      {
        type: 'trueFalse',
        question: 'Juna on myöhässä.',
        questionFr: 'Le train est en retard.',
        answer: false,
        explanation: 'Juna saapuu täsmällisesti (Le train arrive a l\'heure).'
      },
      {
        type: 'qcm',
        question: 'Kuinka kauan matka kestää?',
        questionFr: 'Combien de temps dure le trajet ?',
        options: ['Yhden tunnin', 'Puolitoista tuntia', 'Kaksi tuntia', 'Kolme tuntia'],
        answer: 2,
        answerFr: 'Deux heures'
      }
    ]
  },
  {
    id: 'story-8',
    title: 'Urheiluharrastus',
    titleFr: 'Un hobby sportif',
    level: 'A2',
    theme: 'loisirs',
    text: `Aloitin juoksemisen viime vuonna. Ensin se oli vaikeaa, mutta nyt pidän siitä paljon.

Juoksen kolme kertaa viikossa: maanantaina, keskiviikkona ja lauantaina. Yleensä juoksen viisi kilometriä.

Kesällä juoksen ulkona puistossa. Tykkään kuunnella musiikkia samalla kun juoksen. Se auttaa minua jaksamaan.

Talvella juoksen usein kuntosalilla juoksumatolla. Ulkona on liian kylmää ja pimeää.

Kuukausi sitten osallistuin ensimmäiseen kilpailuuni. Se oli viiden kilometrin katujuoksu. Olin todella hermostunut!

Lopulta selvisin hienosti. Aikani oli 28 minuuttia. Olen ylpeä itsestäni.

Seuraava tavoitteeni on juosta puolimaraton. Täytyy harjoitella paljon!`,
    textPuhekieli: `Aloitin juoksemisen viime vuon. Ekal se oli vaikeeta, mut nyt mä tykkään siit tosi paljo.

Juoksen kolme kertaa viikos: maanantain, keskiviikkon ja lauantain. Yleensä juoksen viis kilsaa.

Kesäl juoksen ulkon puistos. Tykkään kuunnella musaa samal ku juoksen. Se auttaa mua jaksaa.

Talvel juoksen usein salil juoksumatol. Ulkon on liian kylmää ja pimeetä.

Kuukausi sit mä osallistuin mun ekaa kilpailuu. Se oli viiden kilsan katujuoksu. Olin tosi hermostunu!

Lopul selvisin ihan hyvin. Mun aika oli 28 minuuttii. Oon ylpee itsestäni.

Seuraava tavoite on juosta puolikas maraton. Täytyy treenata paljo!`,
    translation: `J'ai commence a courir l'annee derniere. Au debut c'etait difficile, mais maintenant j'adore ca.

Je cours trois fois par semaine : le lundi, le mercredi et le samedi. D'habitude, je cours cinq kilometres.

En ete, je cours dehors dans le parc. J'aime ecouter de la musique en courant. Ca m'aide a tenir.

En hiver, je cours souvent a la salle de sport sur le tapis roulant. Dehors il fait trop froid et il fait noir.

Il y a un mois, j'ai participe a ma premiere competition. C'etait une course de rue de cinq kilometres. J'etais vraiment nerveux !

Finalement, je m'en suis bien sorti. Mon temps etait de 28 minutes. Je suis fier de moi.

Mon prochain objectif est de courir un semi-marathon. Il faut beaucoup s'entrainer !`,
    vocabulary: {
      'aloitin': 'j\'ai commence',
      'juoksemisen': 'la course (genitif)',
      'viime vuonna': 'l\'annee derniere',
      'ensin': 'au debut',
      'vaikeaa': 'difficile (partitif)',
      'pidän': 'j\'aime',
      'siitä': 'de cela (elatif)',
      'kertaa': 'fois (partitif)',
      'viikossa': 'par semaine (inessif)',
      'yleensä': 'd\'habitude',
      'kilometriä': 'kilometres (partitif)',
      'kesällä': 'en ete',
      'ulkona': 'dehors',
      'puistossa': 'dans le parc (inessif)',
      'tykkään': 'j\'aime',
      'kuunnella': 'ecouter',
      'musiikkia': 'de la musique (partitif)',
      'samalla kun': 'pendant que',
      'auttaa': 'aide',
      'jaksamaan': 'a tenir, a supporter',
      'talvella': 'en hiver',
      'kuntosalilla': 'a la salle de sport (adesif)',
      'juoksumatolla': 'sur le tapis roulant (adesif)',
      'liian': 'trop',
      'pimeää': 'sombre, noir (partitif)',
      'kuukausi sitten': 'il y a un mois',
      'osallistuin': 'j\'ai participe',
      'kilpailuuni': 'a ma competition (illatif)',
      'katujuoksu': 'course de rue',
      'hermostunut': 'nerveux',
      'lopulta': 'finalement',
      'selvisin': 'je m\'en suis sorti',
      'hienosti': 'bien, magnifiquement',
      'aikani': 'mon temps',
      'minuuttia': 'minutes (partitif)',
      'ylpeä': 'fier',
      'itsestäni': 'de moi-meme (elatif)',
      'seuraava': 'prochain',
      'tavoitteeni': 'mon objectif',
      'puolimaraton': 'semi-marathon',
      'harjoitella': 's\'entrainer'
    },
    questions: [
      {
        type: 'qcm',
        question: 'Kuinka usein kertoja juoksee?',
        questionFr: 'Combien de fois le narrateur court-il ?',
        options: ['Kerran viikossa', 'Kaksi kertaa viikossa', 'Kolme kertaa viikossa', 'Joka päivä'],
        answer: 2,
        answerFr: 'Trois fois par semaine'
      },
      {
        type: 'trueFalse',
        question: 'Kertoja juoksee talvella ulkona.',
        questionFr: 'Le narrateur court dehors en hiver.',
        answer: false,
        explanation: 'Talvella hän juoksee kuntosalilla (En hiver, il court a la salle de sport).'
      },
      {
        type: 'qcm',
        question: 'Mikä oli kertojan aika kilpailussa?',
        questionFr: 'Quel etait le temps du narrateur a la competition ?',
        options: ['25 minuuttia', '28 minuuttia', '30 minuuttia', '35 minuuttia'],
        answer: 1,
        answerFr: '28 minutes'
      },
      {
        type: 'qcm',
        question: 'Mikä on kertojan seuraava tavoite?',
        questionFr: 'Quel est le prochain objectif du narrateur ?',
        options: ['Juosta 10 km', 'Juosta puolimaraton', 'Juosta maraton', 'Osallistua triathloniin'],
        answer: 1,
        answerFr: 'Courir un semi-marathon'
      }
    ]
  },
  {
    id: 'story-9',
    title: 'Syntymäpäiväjuhlat',
    titleFr: 'La fete d\'anniversaire',
    level: 'A2',
    theme: 'fetes',
    text: `Tänään on minun syntymäpäiväni! Täytän kolmekymmentä vuotta.

Aamulla perheeni herättää minut laulamalla "Paljon onnea vaan". He tuovat minulle aamiaisen sänkyyn: tuoremehua, croissanteja ja kahvia.

Iltapäivällä järjestän juhlat. Kutsuin kaksikymmentä ystävää. Koristelen olohuoneen ilmapalloilla ja nauhoilla.

Vieraat saapuvat kuudelta. Kaikki tuovat lahjoja ja onnittelevat minua. Ystäväni Mikko antaa minulle kirjan. Sisko lahjoittaa kauniin kaulakorun.

Tarjoan vieraille pizzaa, salaattia ja juomia. Myöhemmin tuon esiin kakun. Se on suklaakakku kolmellakymmenellä kynttilällä!

Kaikki laulavat ja minä puhalan kynttilät. Toivon, että tämä vuosi on onnellinen.

Juhlat jatkuvat myöhään. Olen kiitollinen kaikista ystävistäni.`,
    textPuhekieli: `Tänää on mun synttärit! Täytän kolkyt vuotta.

Aamul mun perhe herättää mut laulaa "Paljon onnea vaan". Ne tuo mulle aamupalan sänkyy: tuoremehua, croissantei ja kahvii.

Iltapäiväl mä järjestän bileet. Kutsuin kakskyt kaverii. Koristelen olohuoneen ilmapalloil ja nauhoil.

Vieraat tulee kuudelt. Kaikki tuo lahjoi ja onnittelee mua. Mun kaveri Mikko antaa mulle kirjan. Sisko lahjoittaa kauniin kaulakorun.

Tarjoon vieraille pizzaa, salaattii ja juomii. Myöhemmin tuon esiin kakun. Se on suklaakakku kolmelkymmenel kynttilällä!

Kaikki laulaa ja mä puhallan kynttilät. Toivon, et tää vuosi on onnellinen.

Bileet jatkuu myöhää. Oon kiitollinen kaikist kavereista.`,
    translation: `Aujourd'hui c'est mon anniversaire ! J'ai trente ans.

Le matin, ma famille me reveille en chantant "Joyeux anniversaire". Ils m'apportent le petit-dejeuner au lit : du jus frais, des croissants et du cafe.

L'apres-midi, j'organise une fete. J'ai invite vingt amis. Je decore le salon avec des ballons et des rubans.

Les invites arrivent a six heures. Tout le monde apporte des cadeaux et me felicite. Mon ami Mikko me donne un livre. Ma soeur m'offre un beau collier.

J'offre aux invites de la pizza, de la salade et des boissons. Plus tard, j'apporte le gateau. C'est un gateau au chocolat avec trente bougies !

Tout le monde chante et je souffle les bougies. Je souhaite que cette annee soit heureuse.

La fete continue tard. Je suis reconnaissant pour tous mes amis.`,
    vocabulary: {
      'syntymäpäiväni': 'mon anniversaire',
      'täytän': 'j\'ai (ans)',
      'kolmekymmentä': 'trente',
      'vuotta': 'ans (partitif)',
      'herättää': 'reveille',
      'laulamalla': 'en chantant',
      'paljon onnea': 'felicitations, joyeux',
      'tuovat': 'ils apportent',
      'aamiaisen': 'le petit-dejeuner (genitif)',
      'sänkyyn': 'au lit (illatif)',
      'tuoremehua': 'du jus frais (partitif)',
      'iltapäivällä': 'l\'apres-midi',
      'järjestän': 'j\'organise',
      'juhlat': 'la fete',
      'kutsuin': 'j\'ai invite',
      'kaksikymmentä': 'vingt',
      'koristelen': 'je decore',
      'olohuoneen': 'le salon (genitif)',
      'ilmapalloilla': 'avec des ballons (adesif)',
      'nauhoilla': 'avec des rubans (adesif)',
      'vieraat': 'les invites',
      'saapuvat': 'arrivent',
      'kuudelta': 'a six heures',
      'lahjoja': 'des cadeaux (partitif)',
      'onnittelevat': 'felicitent',
      'antaa': 'donne',
      'kirjan': 'un livre (genitif)',
      'sisko': 'la soeur',
      'lahjoittaa': 'offre',
      'kaulakorun': 'un collier (genitif)',
      'tarjoan': 'j\'offre',
      'vieraille': 'aux invites (allatif)',
      'juomia': 'des boissons (partitif)',
      'tuon esiin': 'j\'apporte',
      'kakun': 'le gateau (genitif)',
      'kynttilällä': 'avec des bougies (adesif)',
      'laulavat': 'chantent',
      'puhalan': 'je souffle',
      'kynttilät': 'les bougies',
      'toivon': 'je souhaite',
      'jatkuvat': 'continuent',
      'myöhään': 'tard',
      'kiitollinen': 'reconnaissant',
      'ystävistäni': 'de mes amis (elatif)'
    },
    questions: [
      {
        type: 'qcm',
        question: 'Kuinka vanha kertoja täyttää?',
        questionFr: 'Quel age a le narrateur ?',
        options: ['20 vuotta', '25 vuotta', '30 vuotta', '35 vuotta'],
        answer: 2,
        answerFr: '30 ans'
      },
      {
        type: 'qcm',
        question: 'Mitäsisko antaa lahjaksi?',
        questionFr: 'Que donne la soeur en cadeau ?',
        options: ['Kirjan', 'Kaulakorun', 'Korvakorut', 'Laukun'],
        answer: 1,
        answerFr: 'Un collier'
      },
      {
        type: 'trueFalse',
        question: 'Kertoja kutsui kymmenen ystävää.',
        questionFr: 'Le narrateur a invite dix amis.',
        answer: false,
        explanation: 'Kertoja kutsui kaksikymmentä ystävää (Le narrateur a invite vingt amis).'
      },
      {
        type: 'qcm',
        question: 'Millainen kakku on?',
        questionFr: 'Quel type de gateau est-ce ?',
        options: ['Mansikkakakku', 'Porkkanakakku', 'Suklaakakku', 'Juustokakku'],
        answer: 2,
        answerFr: 'Un gateau au chocolat'
      }
    ]
  },
  {
    id: 'story-10',
    title: 'Asunnon etsiminen',
    titleFr: 'La recherche d\'appartement',
    level: 'A2',
    theme: 'logement',
    text: `Etsin uutta asuntoa Tampereella. Nykyinen asuntoni on liian pieni.

Luen ilmoituksia netissä joka päivä. Haluan kaksion keskustan lähellä. Budjettini on 800 euroa kuussa.

Tänään menen katsomaan asuntoa Kalevassa. Tapaan vuokranantajan kello 17.

Asunto on toisessa kerroksessa. Se on 45 neliömetriä. Olohuone on valoisa ja keittiö moderni.

Makuuhuone on sopivan kokoinen. Siellä on iso ikkuna. Kylpyhuoneessa on suihku ja pesukone.

Pidän asunnosta paljon. Vuokra on 750 euroa kuussa. Se sisältää veden ja lämmityksen.

Päätän ottaa asunnon. Allekirjoitan vuokrasopimuksen. Muutan ensi kuun alussa!`,
    textPuhekieli: `Etsin uutta kämppää Tampereelt. Mun nykyinen kämppä on liian pieni.

Luen ilmotuksii netis joka päivä. Haluun kaksion lähelt keskustaa. Mun budjetti on 800 euroo kuus.

Tänää meen kattoo kämppää Kalevas. Tapaan vuokranantajan kello 17.

Kämppä on tokas kerrokses. Se on 45 neliöö. Olohuone on valosa ja keittiö on moderni.

Makuuhuone on sopivan kokonen. Siel on iso ikkuna. Kylpyhuonees on suihku ja pesukone.

Tykkään kämpäst tosi paljo. Vuokra on 750 euroo kuus. Se sisältää veden ja lämmityksen.

Päätän ottaa kämpän. Allekirjotan vuokrasopimuksen. Muutan ensi kuun alus!`,
    translation: `Je cherche un nouvel appartement a Tampere. Mon appartement actuel est trop petit.

Je lis des annonces en ligne tous les jours. Je veux un deux-pieces pres du centre. Mon budget est de 800 euros par mois.

Aujourd'hui, je vais visiter un appartement a Kaleva. Je rencontre le proprietaire a 17h.

L'appartement est au deuxieme etage. Il fait 45 metres carres. Le salon est lumineux et la cuisine moderne.

La chambre est d'une taille convenable. Il y a une grande fenetre. La salle de bain a une douche et un lave-linge.

J'aime beaucoup l'appartement. Le loyer est de 750 euros par mois. Ca inclut l'eau et le chauffage.

Je decide de prendre l'appartement. Je signe le contrat de location. Je demenage debut du mois prochain !`,
    vocabulary: {
      'etsin': 'je cherche',
      'asuntoa': 'un appartement (partitif)',
      'nykyinen': 'actuel',
      'asuntoni': 'mon appartement',
      'liian': 'trop',
      'pieni': 'petit',
      'luen': 'je lis',
      'ilmoituksia': 'des annonces (partitif)',
      'netissä': 'en ligne (inessif)',
      'joka päivä': 'tous les jours',
      'haluan': 'je veux',
      'kaksion': 'un deux-pieces (genitif)',
      'keskustan': 'du centre (genitif)',
      'lähellä': 'pres de',
      'budjettini': 'mon budget',
      'kuussa': 'par mois (inessif)',
      'menen katsomaan': 'je vais visiter',
      'tapaan': 'je rencontre',
      'vuokranantajan': 'le proprietaire (genitif)',
      'toisessa kerroksessa': 'au deuxieme etage (inessif)',
      'neliömetriä': 'metres carres (partitif)',
      'olohuone': 'le salon',
      'valoisa': 'lumineux',
      'keittiö': 'la cuisine',
      'moderni': 'moderne',
      'makuuhuone': 'la chambre',
      'sopivan kokoinen': 'd\'une taille convenable',
      'iso': 'grand',
      'ikkuna': 'la fenetre',
      'kylpyhuoneessa': 'dans la salle de bain (inessif)',
      'suihku': 'la douche',
      'pesukone': 'le lave-linge',
      'pidän': 'j\'aime',
      'vuokra': 'le loyer',
      'sisältää': 'inclut',
      'veden': 'l\'eau (genitif)',
      'lämmityksen': 'le chauffage (genitif)',
      'päätän': 'je decide',
      'ottaa': 'prendre',
      'allekirjoitan': 'je signe',
      'vuokrasopimuksen': 'le contrat de location (genitif)',
      'muutan': 'je demenage',
      'ensi kuun': 'du mois prochain (genitif)',
      'alussa': 'au debut (inessif)'
    },
    questions: [
      {
        type: 'qcm',
        question: 'Miksi kertoja etsii uutta asuntoa?',
        questionFr: 'Pourquoi le narrateur cherche-t-il un nouvel appartement ?',
        options: ['Se on liian kallis', 'Se on liian pieni', 'Se on liian kaukana', 'Se on liian vanha'],
        answer: 1,
        answerFr: 'Il est trop petit'
      },
      {
        type: 'qcm',
        question: 'Kuinka iso asunto on?',
        questionFr: 'Quelle est la taille de l\'appartement ?',
        options: ['35 neliömetriä', '45 neliömetriä', '55 neliömetriä', '65 neliömetriä'],
        answer: 1,
        answerFr: '45 metres carres'
      },
      {
        type: 'trueFalse',
        question: 'Vuokra on 800 euroa kuussa.',
        questionFr: 'Le loyer est de 800 euros par mois.',
        answer: false,
        explanation: 'Vuokra on 750 euroa kuussa (Le loyer est de 750 euros par mois).'
      },
      {
        type: 'qcm',
        question: 'Milloin kertoja muuttaa?',
        questionFr: 'Quand le narrateur demenage-t-il ?',
        options: ['Heti', 'Ensi viikolla', 'Ensi kuun alussa', 'Kahden kuukauden päästä'],
        answer: 2,
        answerFr: 'Debut du mois prochain'
      }
    ]
  },
  {
    id: 'story-11',
    title: 'Ystävän kanssa kahvilassa',
    titleFr: 'Au cafe avec un ami',
    level: 'A2',
    theme: 'quotidien',
    text: `Tapaan ystäväni Lauran kahvilassa lauantaina. Emme ole nähneet pitkään aikaan.

Kahvila on viihtyisä ja rauhallinen. Tilaan cappuccinon ja mustikkapiirakan. Laura ottaa vihreää teetä ja kanelikierteen.

Laura kertoo elämästään. Hän on aloittanut uuden työn pankissa. Hän on innoissaan mutta myös väsynyt.

Minä kerron omista kuulumisistani. Opiskelen suomea iltakoulussa. Pidän siitä paljon.

Me puhumme myös yhteisistä ystävistämme. Pohdimme, pitäisikö meidän järjestää tapaaminen koko porukalle.

Aika kuluu nopeasti. Huomaan, että olemme istuneet jo kaksi tuntia! Laura katsoo kelloaan.

Maksamme ja sovimme, että nähdään taas pian. Halaamme ja lähdemme.`,
    textPuhekieli: `Tapaan mun kaverin Lauran kahvilas lauantain. Me ei olla nähty pitkää aikaa.

Kahvila on viihtyisä ja rauhallinen. Tilaan cappuccinon ja mustikkapiirakan. Laura ottaa vihreää teetä ja kanelikierteen.

Laura kertoo sen elämäst. Se on alottanu uuden duunin pankis. Se on innoissaa mut kans väsyny.

Mä kerron mun omist kuulumisist. Opiskelen suomee iltakoulus. Tykkään siit tosi paljo.

Me puhutaa kans yhteisist kavereist. Mietitää, pitäiskö meiän järjestää tapaaminen koko porukalle.

Aika kuluu tosi nopeesti. Huomaan, et me ollaan istuttu jo kaks tuntii! Laura kattoo kelloa.

Me maksetaa ja sovitaa, et nähdää taas pian. Halataa ja lähdetää.`,
    translation: `Je retrouve mon amie Laura au cafe samedi. Nous ne nous sommes pas vues depuis longtemps.

Le cafe est confortable et calme. Je commande un cappuccino et une tarte aux myrtilles. Laura prend du the vert et une brioche a la cannelle.

Laura parle de sa vie. Elle a commence un nouveau travail a la banque. Elle est enthousiaste mais aussi fatiguee.

Je parle de mes nouvelles. J'etudie le finnois aux cours du soir. J'aime beaucoup ca.

Nous parlons aussi de nos amis communs. Nous nous demandons si nous devrions organiser une rencontre avec tout le groupe.

Le temps passe vite. Je remarque que nous sommes assises depuis deja deux heures ! Laura regarde sa montre.

Nous payons et convenons de nous revoir bientot. Nous nous faisons un calin et partons.`,
    vocabulary: {
      'tapaan': 'je retrouve',
      'kahvilassa': 'au cafe (inessif)',
      'emme ole nähneet': 'nous ne nous sommes pas vus',
      'pitkään aikaan': 'depuis longtemps',
      'viihtyisä': 'confortable',
      'rauhallinen': 'calme',
      'tilaan': 'je commande',
      'mustikkapiirakan': 'une tarte aux myrtilles (genitif)',
      'vihreää teetä': 'du the vert (partitif)',
      'kanelikierteen': 'une brioche a la cannelle (genitif)',
      'kertoo': 'parle de',
      'elämästään': 'de sa vie (elatif)',
      'aloittanut': 'commence (participe)',
      'työn': 'un travail (genitif)',
      'pankissa': 'a la banque (inessif)',
      'innoissaan': 'enthousiaste',
      'omista': 'de mes propres (elatif)',
      'kuulumisistani': 'nouvelles (elatif)',
      'opiskelen': 'j\'etudie',
      'suomea': 'le finnois (partitif)',
      'iltakoulussa': 'aux cours du soir (inessif)',
      'yhteisistä': 'communs (elatif)',
      'ystävistämme': 'nos amis (elatif)',
      'pohdimme': 'nous nous demandons',
      'pitäisikö': 'devrions-nous',
      'meidän': 'nous (genitif)',
      'järjestää': 'organiser',
      'tapaaminen': 'une rencontre',
      'koko': 'tout',
      'porukalle': 'pour le groupe (allatif)',
      'aika': 'le temps',
      'kuluu': 'passe',
      'nopeasti': 'vite',
      'huomaan': 'je remarque',
      'olemme istuneet': 'nous sommes assis',
      'katsoo': 'regarde',
      'kelloaan': 'sa montre',
      'sovimme': 'nous convenons',
      'nähdään': 'nous nous voyons',
      'pian': 'bientot',
      'halaamme': 'nous nous faisons un calin'
    },
    questions: [
      {
        type: 'qcm',
        question: 'Mitäkertoja tilaa?',
        questionFr: 'Que commande le narrateur ?',
        options: ['Teetä ja kakkua', 'Cappuccinon ja mustikkapiirakan', 'Kahvia ja pullaa', 'Mehua ja voileipää'],
        answer: 1,
        answerFr: 'Un cappuccino et une tarte aux myrtilles'
      },
      {
        type: 'qcm',
        question: 'Missä Laura työskentelee?',
        questionFr: 'Ou travaille Laura ?',
        options: ['Sairaalassa', 'Koulussa', 'Pankissa', 'Kaupassa'],
        answer: 2,
        answerFr: 'A la banque'
      },
      {
        type: 'trueFalse',
        question: 'Kertoja opiskelee ruotsia.',
        questionFr: 'Le narrateur etudie le suedois.',
        answer: false,
        explanation: 'Kertoja opiskelee suomea (Le narrateur etudie le finnois).'
      },
      {
        type: 'qcm',
        question: 'Kuinka kauan ystävät istuvat kahvilassa?',
        questionFr: 'Combien de temps les amies restent-elles au cafe ?',
        options: ['Tunnin', 'Puolitoista tuntia', 'Kaksi tuntia', 'Kolme tuntia'],
        answer: 2,
        answerFr: 'Deux heures'
      }
    ]
  },
  {
    id: 'story-12',
    title: 'Bussimatka',
    titleFr: 'Le trajet en bus',
    level: 'A2',
    theme: 'voyage',
    text: `Joka aamu matkustan töihin bussilla. Bussi numero 15 kulkee kotini ohi.

Herään kuudelta ja syön nopeasti aamupalan. Lähden kotoa seitsemältä. Bussipysäkki on viiden minuutin kävelymatkan päässä.

Tänään bussi on myöhässä. Odotan pysäkillä kymmenen minuuttia. On kylmä ja sataa vettä. Onneksi minulla on sateenvarjo.

Viimein bussi tulee. Se on täynnä ihmisiä. En saa istumapaikkaa, joten seison.

Matka kestää kaksikymmentä minuuttia. Kuuntelen podcastia kuulokkeilla. Se on hyvä tapa oppia uutta.

Jään pois keskustassa. Toimistoni on lähellä pysäkkiä. Kävelen sinne viidessä minuutissa.

Saavun töihin juuri ajoissa. Huh, onneksi en myöhästynyt!`,
    textPuhekieli: `Joka aamu mä matkustan töihi bussil. Bussi numero 15 kulkee mun kodin ohi.

Herään kuudelt ja syön nopeesti aamupalan. Lähden kotoo seitsemält. Bussipysäkki on viiden minsan kävelymatkan pääs.

Tänää bussi on myöhäs. Odotan pysäkil kymppii minuuttii. On kylmä ja sataa vettä. Onneks mul on sateenvarjo.

Viimein bussi tulee. Se on täynnä porukkaa. En saa istumapaikkaa, joten mä seison.

Matka kestää kakskyt minuuttii. Kuuntelen podcastii kuulokkeil. Se on hyvä tapa oppii uutta.

Mä jään pois keskustas. Mun toimisto on lähel pysäkkii. Kävelen sinne viides minuutis.

Tuun töihi just ajoissa. Huh, onneks en myöhästyny!`,
    translation: `Chaque matin, je vais au travail en bus. Le bus numero 15 passe devant chez moi.

Je me reveille a six heures et prends rapidement le petit-dejeuner. Je pars de chez moi a sept heures. L'arret de bus est a cinq minutes a pied.

Aujourd'hui, le bus est en retard. J'attends a l'arret pendant dix minutes. Il fait froid et il pleut. Heureusement, j'ai un parapluie.

Enfin, le bus arrive. Il est plein de monde. Je n'ai pas de place assise, donc je reste debout.

Le trajet dure vingt minutes. J'ecoute un podcast avec mes ecouteurs. C'est une bonne facon d'apprendre des choses nouvelles.

Je descends dans le centre. Mon bureau est pres de l'arret. J'y marche en cinq minutes.

J'arrive au travail juste a temps. Ouf, heureusement je ne suis pas en retard !`,
    vocabulary: {
      'joka aamu': 'chaque matin',
      'matkustan': 'je voyage',
      'töihin': 'au travail (illatif)',
      'bussilla': 'en bus (adesif)',
      'kulkee': 'passe',
      'kotini': 'ma maison',
      'ohi': 'devant, pres de',
      'herään': 'je me reveille',
      'nopeasti': 'rapidement',
      'aamupalan': 'le petit-dejeuner (genitif)',
      'lähden': 'je pars',
      'kotoa': 'de chez moi (elatif)',
      'bussipysäkki': 'l\'arret de bus',
      'kävelymatkan': 'a pied (genitif)',
      'päässä': 'a (distance)',
      'myöhässä': 'en retard',
      'odotan': 'j\'attends',
      'pysäkillä': 'a l\'arret (adesif)',
      'sataa vettä': 'il pleut',
      'onneksi': 'heureusement',
      'sateenvarjo': 'parapluie',
      'viimein': 'enfin',
      'täynnä': 'plein de',
      'ihmisiä': 'des gens (partitif)',
      'istumapaikkaa': 'une place assise (partitif)',
      'joten': 'donc',
      'seison': 'je suis debout',
      'kestää': 'dure',
      'kuuntelen': 'j\'ecoute',
      'kuulokkeilla': 'avec des ecouteurs (adesif)',
      'tapa': 'facon, maniere',
      'oppia': 'apprendre',
      'uutta': 'de nouveau (partitif)',
      'jään pois': 'je descends',
      'toimistoni': 'mon bureau',
      'lähellä': 'pres de',
      'kävelen': 'je marche',
      'sinne': 'la-bas',
      'viidessä minuutissa': 'en cinq minutes',
      'saavun': 'j\'arrive',
      'ajoissa': 'a temps',
      'myöhästynyt': 'en retard (participe)'
    },
    questions: [
      {
        type: 'qcm',
        question: 'Mikä bussi kulkee kertojan kodin ohi?',
        questionFr: 'Quel bus passe devant chez le narrateur ?',
        options: ['Numero 5', 'Numero 10', 'Numero 15', 'Numero 20'],
        answer: 2,
        answerFr: 'Le numero 15'
      },
      {
        type: 'trueFalse',
        question: 'Kertoja saa istumapaikan bussissa.',
        questionFr: 'Le narrateur a une place assise dans le bus.',
        answer: false,
        explanation: 'Hän ei saa istumapaikkaa, joten hän seisoo (Il n\'a pas de place assise, donc il reste debout).'
      },
      {
        type: 'qcm',
        question: 'Kuinka kauan bussimatka kestää?',
        questionFr: 'Combien de temps dure le trajet en bus ?',
        options: ['10 minuuttia', '15 minuuttia', '20 minuuttia', '30 minuuttia'],
        answer: 2,
        answerFr: '20 minutes'
      },
      {
        type: 'trueFalse',
        question: 'Kertoja myöhästyy töistä.',
        questionFr: 'Le narrateur est en retard au travail.',
        answer: false,
        explanation: 'Hän saapuu töihin juuri ajoissa (Il arrive au travail juste a temps).'
      }
    ]
  }
];

// Categories de themes
export const storyThemes = [
  { id: 'voyage', name: 'Voyage', icon: '✈️' },
  { id: 'quotidien', name: 'Vie quotidienne', icon: '🏠' },
  { id: 'sante', name: 'Sante', icon: '🏥' },
  { id: 'loisirs', name: 'Loisirs', icon: '🎿' },
  { id: 'travail', name: 'Travail', icon: '💼' },
  { id: 'fetes', name: 'Fetes', icon: '🎉' },
  { id: 'logement', name: 'Logement', icon: '🏠' }
];

// Fonctions utilitaires
export function getAllStories() {
  return stories;
}

export function getStoriesByTheme(theme) {
  return stories.filter(s => s.theme === theme);
}

export function getStoriesByLevel(level) {
  return stories.filter(s => s.level === level);
}

export function getStoryById(id) {
  return stories.find(s => s.id === id);
}
