// Base de donnees des conjugaisons des verbes finnois
// Types de verbes:
// Type 1: -a/-ä (puhua, lukea)
// Type 2: -da/-dä (syödä, juoda)
// Type 3: -la/-lä/-na/-nä/-ra/-rä (mennä, tulla)
// Type 4: -ta/-tä (tavata, haluta)
// Type 5: -ita/-itä (tarvita)
// Type 6: -eta/-etä (vanheta)

export const VERB_TYPES = {
  1: { description: 'Verbes en -a/-ä', pattern: '-a/-ä → -n' },
  2: { description: 'Verbes en -da/-dä', pattern: '-da/-dä → -n' },
  3: { description: 'Verbes en -la/-na/-ra', pattern: 'consonne + -a/-ä → consonne double + -en' },
  4: { description: 'Verbes en -ta/-tä', pattern: '-ta/-tä → -an/-än' },
  5: { description: 'Verbes en -ita/-itä', pattern: '-ita/-itä → -itsen' },
  6: { description: 'Verbes en -eta/-etä', pattern: '-eta/-etä → -enen' }
};

export const verbConjugations = {
  // Type 1 - Verbes en -a/-ä
  puhua: {
    type: 1,
    meaning: 'parler',
    present: {
      minä: 'puhun', sinä: 'puhut', hän: 'puhuu',
      me: 'puhumme', te: 'puhutte', he: 'puhuvat'
    },
    presentPuhekieli: {
      minä: 'mä puhun', sinä: 'sä puhut', hän: 'se puhuu',
      me: 'me puhutaan', te: 'te puhutte', he: 'ne puhuu'
    },
    past: {
      minä: 'puhuin', sinä: 'puhuit', hän: 'puhui',
      me: 'puhuimme', te: 'puhuitte', he: 'puhuivat'
    },
    imperative: 'puhu!',
    passive: 'puhutaan',
    negative: 'en puhu'
  },

  lukea: {
    type: 1,
    meaning: 'lire',
    present: {
      minä: 'luen', sinä: 'luet', hän: 'lukee',
      me: 'luemme', te: 'luette', he: 'lukevat'
    },
    presentPuhekieli: {
      minä: 'mä luen', sinä: 'sä luet', hän: 'se lukee',
      me: 'me luetaan', te: 'te luette', he: 'ne lukee'
    },
    past: {
      minä: 'luin', sinä: 'luit', hän: 'luki',
      me: 'luimme', te: 'luitte', he: 'lukivat'
    },
    imperative: 'lue!',
    passive: 'luetaan',
    negative: 'en lue'
  },

  antaa: {
    type: 1,
    meaning: 'donner',
    present: {
      minä: 'annan', sinä: 'annat', hän: 'antaa',
      me: 'annamme', te: 'annatte', he: 'antavat'
    },
    presentPuhekieli: {
      minä: 'mä annan', sinä: 'sä annat', hän: 'se antaa',
      me: 'me annetaan', te: 'te annatte', he: 'ne antaa'
    },
    past: {
      minä: 'annoin', sinä: 'annoit', hän: 'antoi',
      me: 'annoimme', te: 'annoitte', he: 'antoivat'
    },
    imperative: 'anna!',
    passive: 'annetaan',
    negative: 'en anna'
  },

  ostaa: {
    type: 1,
    meaning: 'acheter',
    present: {
      minä: 'ostan', sinä: 'ostat', hän: 'ostaa',
      me: 'ostamme', te: 'ostatte', he: 'ostavat'
    },
    presentPuhekieli: {
      minä: 'mä ostan', sinä: 'sä ostat', hän: 'se ostaa',
      me: 'me ostetaan', te: 'te ostatte', he: 'ne ostaa'
    },
    past: {
      minä: 'ostin', sinä: 'ostit', hän: 'osti',
      me: 'ostimme', te: 'ostitte', he: 'ostivat'
    },
    imperative: 'osta!',
    passive: 'ostetaan',
    negative: 'en osta'
  },

  sanoa: {
    type: 1,
    meaning: 'dire',
    present: {
      minä: 'sanon', sinä: 'sanot', hän: 'sanoo',
      me: 'sanomme', te: 'sanotte', he: 'sanovat'
    },
    presentPuhekieli: {
      minä: 'mä sanon', sinä: 'sä sanot', hän: 'se sanoo',
      me: 'me sanotaan', te: 'te sanotte', he: 'ne sanoo'
    },
    past: {
      minä: 'sanoin', sinä: 'sanoit', hän: 'sanoi',
      me: 'sanoimme', te: 'sanoitte', he: 'sanoivat'
    },
    imperative: 'sano!',
    passive: 'sanotaan',
    negative: 'en sano'
  },

  kysyä: {
    type: 1,
    meaning: 'demander',
    present: {
      minä: 'kysyn', sinä: 'kysyt', hän: 'kysyy',
      me: 'kysymme', te: 'kysytte', he: 'kysyvät'
    },
    presentPuhekieli: {
      minä: 'mä kysyn', sinä: 'sä kysyt', hän: 'se kysyy',
      me: 'me kysytään', te: 'te kysytte', he: 'ne kysyy'
    },
    past: {
      minä: 'kysyin', sinä: 'kysyit', hän: 'kysyi',
      me: 'kysyimme', te: 'kysyitte', he: 'kysyivät'
    },
    imperative: 'kysy!',
    passive: 'kysytään',
    negative: 'en kysy'
  },

  oppia: {
    type: 1,
    meaning: 'apprendre',
    present: {
      minä: 'opin', sinä: 'opit', hän: 'oppii',
      me: 'opimme', te: 'opitte', he: 'oppivat'
    },
    presentPuhekieli: {
      minä: 'mä opin', sinä: 'sä opit', hän: 'se oppii',
      me: 'me opitaan', te: 'te opitte', he: 'ne oppii'
    },
    past: {
      minä: 'opin', sinä: 'opit', hän: 'oppi',
      me: 'opimme', te: 'opitte', he: 'oppivat'
    },
    imperative: 'opi!',
    passive: 'opitaan',
    negative: 'en opi'
  },

  asua: {
    type: 1,
    meaning: 'habiter',
    present: {
      minä: 'asun', sinä: 'asut', hän: 'asuu',
      me: 'asumme', te: 'asutte', he: 'asuvat'
    },
    presentPuhekieli: {
      minä: 'mä asun', sinä: 'sä asut', hän: 'se asuu',
      me: 'me asutaan', te: 'te asutte', he: 'ne asuu'
    },
    past: {
      minä: 'asuin', sinä: 'asuit', hän: 'asui',
      me: 'asuimme', te: 'asuitte', he: 'asuivat'
    },
    imperative: 'asu!',
    passive: 'asutaan',
    negative: 'en asu'
  },

  // Type 2 - Verbes en -da/-dä
  syödä: {
    type: 2,
    meaning: 'manger',
    present: {
      minä: 'syön', sinä: 'syöt', hän: 'syö',
      me: 'syömme', te: 'syötte', he: 'syövät'
    },
    presentPuhekieli: {
      minä: 'mä syön', sinä: 'sä syöt', hän: 'se syö',
      me: 'me syödään', te: 'te syötte', he: 'ne syö'
    },
    past: {
      minä: 'söin', sinä: 'söit', hän: 'söi',
      me: 'söimme', te: 'söitte', he: 'söivät'
    },
    imperative: 'syö!',
    passive: 'syödään',
    negative: 'en syö'
  },

  juoda: {
    type: 2,
    meaning: 'boire',
    present: {
      minä: 'juon', sinä: 'juot', hän: 'juo',
      me: 'juomme', te: 'juotte', he: 'juovat'
    },
    presentPuhekieli: {
      minä: 'mä juon', sinä: 'sä juot', hän: 'se juo',
      me: 'me juodaan', te: 'te juotte', he: 'ne juo'
    },
    past: {
      minä: 'join', sinä: 'joit', hän: 'joi',
      me: 'joimme', te: 'joitte', he: 'joivat'
    },
    imperative: 'juo!',
    passive: 'juodaan',
    negative: 'en juo'
  },

  tehdä: {
    type: 2,
    meaning: 'faire',
    present: {
      minä: 'teen', sinä: 'teet', hän: 'tekee',
      me: 'teemme', te: 'teette', he: 'tekevät'
    },
    presentPuhekieli: {
      minä: 'mä teen', sinä: 'sä teet', hän: 'se tekee',
      me: 'me tehdään', te: 'te teette', he: 'ne tekee'
    },
    past: {
      minä: 'tein', sinä: 'teit', hän: 'teki',
      me: 'teimme', te: 'teitte', he: 'tekivät'
    },
    imperative: 'tee!',
    passive: 'tehdään',
    negative: 'en tee'
  },

  nähdä: {
    type: 2,
    meaning: 'voir',
    present: {
      minä: 'näen', sinä: 'näet', hän: 'näkee',
      me: 'näemme', te: 'näette', he: 'näkevät'
    },
    presentPuhekieli: {
      minä: 'mä nään', sinä: 'sä näät', hän: 'se näkee',
      me: 'me nähdään', te: 'te näätte', he: 'ne näkee'
    },
    past: {
      minä: 'näin', sinä: 'näit', hän: 'näki',
      me: 'näimme', te: 'näitte', he: 'näkivät'
    },
    imperative: 'näe!',
    passive: 'nähdään',
    negative: 'en näe'
  },

  // Type 3 - Verbes en -la/-na/-ra
  mennä: {
    type: 3,
    meaning: 'aller',
    present: {
      minä: 'menen', sinä: 'menet', hän: 'menee',
      me: 'menemme', te: 'menette', he: 'menevät'
    },
    presentPuhekieli: {
      minä: 'mä meen', sinä: 'sä meet', hän: 'se menee',
      me: 'me mennään', te: 'te meette', he: 'ne menee'
    },
    past: {
      minä: 'menin', sinä: 'menit', hän: 'meni',
      me: 'menimme', te: 'menitte', he: 'menivät'
    },
    imperative: 'mene!',
    passive: 'mennään',
    negative: 'en mene'
  },

  tulla: {
    type: 3,
    meaning: 'venir',
    present: {
      minä: 'tulen', sinä: 'tulet', hän: 'tulee',
      me: 'tulemme', te: 'tulette', he: 'tulevat'
    },
    presentPuhekieli: {
      minä: 'mä tuun', sinä: 'sä tuut', hän: 'se tulee',
      me: 'me tullaan', te: 'te tuutte', he: 'ne tulee'
    },
    past: {
      minä: 'tulin', sinä: 'tulit', hän: 'tuli',
      me: 'tulimme', te: 'tulitte', he: 'tulivat'
    },
    imperative: 'tule!',
    passive: 'tullaan',
    negative: 'en tule'
  },

  olla: {
    type: 'irrégulier',
    meaning: 'être',
    present: {
      minä: 'olen', sinä: 'olet', hän: 'on',
      me: 'olemme', te: 'olette', he: 'ovat'
    },
    presentPuhekieli: {
      minä: 'mä oon', sinä: 'sä oot', hän: 'se on',
      me: 'me ollaan', te: 'te ootte', he: 'ne on'
    },
    past: {
      minä: 'olin', sinä: 'olit', hän: 'oli',
      me: 'olimme', te: 'olitte', he: 'olivat'
    },
    imperative: 'ole!',
    passive: 'ollaan',
    negative: 'en ole'
  },

  kuulla: {
    type: 3,
    meaning: 'entendre',
    present: {
      minä: 'kuulen', sinä: 'kuulet', hän: 'kuulee',
      me: 'kuulemme', te: 'kuulette', he: 'kuulevat'
    },
    presentPuhekieli: {
      minä: 'mä kuulen', sinä: 'sä kuulet', hän: 'se kuulee',
      me: 'me kuullaan', te: 'te kuulette', he: 'ne kuulee'
    },
    past: {
      minä: 'kuulin', sinä: 'kuulit', hän: 'kuuli',
      me: 'kuulimme', te: 'kuulitte', he: 'kuulivat'
    },
    imperative: 'kuule!',
    passive: 'kuullaan',
    negative: 'en kuule'
  },

  // Type 4 - Verbes en -ta/-tä
  tavata: {
    type: 4,
    meaning: 'rencontrer',
    present: {
      minä: 'tapaan', sinä: 'tapaat', hän: 'tapaa',
      me: 'tapaamme', te: 'tapaatte', he: 'tapaavat'
    },
    presentPuhekieli: {
      minä: 'mä tapaan', sinä: 'sä tapaat', hän: 'se tapaa',
      me: 'me tavataan', te: 'te tapaatte', he: 'ne tapaa'
    },
    past: {
      minä: 'tapasin', sinä: 'tapasit', hän: 'tapasi',
      me: 'tapasimme', te: 'tapasitte', he: 'tapasivat'
    },
    imperative: 'tapaa!',
    passive: 'tavataan',
    negative: 'en tapaa'
  },

  haluta: {
    type: 4,
    meaning: 'vouloir',
    present: {
      minä: 'haluan', sinä: 'haluat', hän: 'haluaa',
      me: 'haluamme', te: 'haluatte', he: 'haluavat'
    },
    presentPuhekieli: {
      minä: 'mä haluan', sinä: 'sä haluat', hän: 'se haluaa',
      me: 'me halutaan', te: 'te haluatte', he: 'ne haluaa'
    },
    past: {
      minä: 'halusin', sinä: 'halusit', hän: 'halusi',
      me: 'halusimme', te: 'halusitte', he: 'halusivat'
    },
    imperative: 'halua!',
    passive: 'halutaan',
    negative: 'en halua'
  },

  pelata: {
    type: 4,
    meaning: 'jouer (sport, jeu)',
    present: {
      minä: 'pelaan', sinä: 'pelaat', hän: 'pelaa',
      me: 'pelaamme', te: 'pelaatte', he: 'pelaavat'
    },
    presentPuhekieli: {
      minä: 'mä pelaan', sinä: 'sä pelaat', hän: 'se pelaa',
      me: 'me pelataan', te: 'te pelaatte', he: 'ne pelaa'
    },
    past: {
      minä: 'pelasin', sinä: 'pelasit', hän: 'pelasi',
      me: 'pelasimme', te: 'pelasitte', he: 'pelasivat'
    },
    imperative: 'pelaa!',
    passive: 'pelataan',
    negative: 'en pelaa'
  },

  // Type 5 - Verbes en -ita/-itä
  tarvita: {
    type: 5,
    meaning: 'avoir besoin de',
    present: {
      minä: 'tarvitsen', sinä: 'tarvitset', hän: 'tarvitsee',
      me: 'tarvitsemme', te: 'tarvitsette', he: 'tarvitsevat'
    },
    presentPuhekieli: {
      minä: 'mä tartten', sinä: 'sä tarttet', hän: 'se tarttee',
      me: 'me tarvitaan', te: 'te tarttette', he: 'ne tarttee'
    },
    past: {
      minä: 'tarvitsin', sinä: 'tarvitsit', hän: 'tarvitsi',
      me: 'tarvitsimme', te: 'tarvitsitte', he: 'tarvitsivat'
    },
    imperative: 'tarvitse!',
    passive: 'tarvitaan',
    negative: 'en tarvitse'
  },

  // Autres verbes courants
  tietää: {
    type: 1,
    meaning: 'savoir',
    present: {
      minä: 'tiedän', sinä: 'tiedät', hän: 'tietää',
      me: 'tiedämme', te: 'tiedätte', he: 'tietävät'
    },
    presentPuhekieli: {
      minä: 'mä tiedän', sinä: 'sä tiedät', hän: 'se tietää',
      me: 'me tiedetään', te: 'te tiedätte', he: 'ne tietää'
    },
    past: {
      minä: 'tiesin', sinä: 'tiesit', hän: 'tiesi',
      me: 'tiesimme', te: 'tiesitte', he: 'tiesivät'
    },
    imperative: 'tiedä!',
    passive: 'tiedetään',
    negative: 'en tiedä'
  },

  pitää: {
    type: 1,
    meaning: 'aimer, tenir, devoir',
    present: {
      minä: 'pidän', sinä: 'pidät', hän: 'pitää',
      me: 'pidämme', te: 'pidätte', he: 'pitävät'
    },
    presentPuhekieli: {
      minä: 'mä pidän', sinä: 'sä pidät', hän: 'se pitää',
      me: 'me pidetään', te: 'te pidätte', he: 'ne pitää'
    },
    past: {
      minä: 'pidin', sinä: 'pidit', hän: 'piti',
      me: 'pidimme', te: 'piditte', he: 'pitivät'
    },
    imperative: 'pidä!',
    passive: 'pidetään',
    negative: 'en pidä'
  },

  voida: {
    type: 2,
    meaning: 'pouvoir',
    present: {
      minä: 'voin', sinä: 'voit', hän: 'voi',
      me: 'voimme', te: 'voitte', he: 'voivat'
    },
    presentPuhekieli: {
      minä: 'mä voin', sinä: 'sä voit', hän: 'se voi',
      me: 'me voidaan', te: 'te voitte', he: 'ne voi'
    },
    past: {
      minä: 'voin', sinä: 'voit', hän: 'voi',
      me: 'voimme', te: 'voitte', he: 'voivat'
    },
    imperative: 'voi!',
    passive: 'voidaan',
    negative: 'en voi'
  },

  saada: {
    type: 2,
    meaning: 'obtenir, recevoir, pouvoir',
    present: {
      minä: 'saan', sinä: 'saat', hän: 'saa',
      me: 'saamme', te: 'saatte', he: 'saavat'
    },
    presentPuhekieli: {
      minä: 'mä saan', sinä: 'sä saat', hän: 'se saa',
      me: 'me saadaan', te: 'te saatte', he: 'ne saa'
    },
    past: {
      minä: 'sain', sinä: 'sait', hän: 'sai',
      me: 'saimme', te: 'saitte', he: 'saivat'
    },
    imperative: 'saa!',
    passive: 'saadaan',
    negative: 'en saa'
  },

  ottaa: {
    type: 1,
    meaning: 'prendre',
    present: {
      minä: 'otan', sinä: 'otat', hän: 'ottaa',
      me: 'otamme', te: 'otatte', he: 'ottavat'
    },
    presentPuhekieli: {
      minä: 'mä otan', sinä: 'sä otat', hän: 'se ottaa',
      me: 'me otetaan', te: 'te otatte', he: 'ne ottaa'
    },
    past: {
      minä: 'otin', sinä: 'otit', hän: 'otti',
      me: 'otimme', te: 'otitte', he: 'ottivat'
    },
    imperative: 'ota!',
    passive: 'otetaan',
    negative: 'en ota'
  },

  lähteä: {
    type: 1,
    meaning: 'partir',
    present: {
      minä: 'lähden', sinä: 'lähdet', hän: 'lähtee',
      me: 'lähdemme', te: 'lähdette', he: 'lähtevät'
    },
    presentPuhekieli: {
      minä: 'mä lähden', sinä: 'sä lähdet', hän: 'se lähtee',
      me: 'me lähdetään', te: 'te lähdette', he: 'ne lähtee'
    },
    past: {
      minä: 'lähdin', sinä: 'lähdit', hän: 'lähti',
      me: 'lähdimme', te: 'lähditte', he: 'lähtivät'
    },
    imperative: 'lähde!',
    passive: 'lähdetään',
    negative: 'en lähde'
  },

  ajatella: {
    type: 3,
    meaning: 'penser',
    present: {
      minä: 'ajattelen', sinä: 'ajattelet', hän: 'ajattelee',
      me: 'ajattelemme', te: 'ajattelette', he: 'ajattelevat'
    },
    presentPuhekieli: {
      minä: 'mä ajattelen', sinä: 'sä ajattelet', hän: 'se ajattelee',
      me: 'me ajatellaan', te: 'te ajattelette', he: 'ne ajattelee'
    },
    past: {
      minä: 'ajattelin', sinä: 'ajattelit', hän: 'ajatteli',
      me: 'ajattelimme', te: 'ajattelitte', he: 'ajattelivat'
    },
    imperative: 'ajattele!',
    passive: 'ajatellaan',
    negative: 'en ajattele'
  },

  käydä: {
    type: 2,
    meaning: 'visiter, aller',
    present: {
      minä: 'käyn', sinä: 'käyt', hän: 'käy',
      me: 'käymme', te: 'käytte', he: 'käyvät'
    },
    presentPuhekieli: {
      minä: 'mä käyn', sinä: 'sä käyt', hän: 'se käy',
      me: 'me käydään', te: 'te käytte', he: 'ne käy'
    },
    past: {
      minä: 'kävin', sinä: 'kävit', hän: 'kävi',
      me: 'kävimme', te: 'kävitte', he: 'kävivät'
    },
    imperative: 'käy!',
    passive: 'käydään',
    negative: 'en käy'
  },

  työskennellä: {
    type: 3,
    meaning: 'travailler',
    present: {
      minä: 'työskentelen', sinä: 'työskentelet', hän: 'työskentelee',
      me: 'työskentelemme', te: 'työskentelette', he: 'työskentelevät'
    },
    presentPuhekieli: {
      minä: 'mä työskentelen', sinä: 'sä työskentelet', hän: 'se työskentelee',
      me: 'me työskennellään', te: 'te työskentelette', he: 'ne työskentelee'
    },
    past: {
      minä: 'työskentelin', sinä: 'työskentelit', hän: 'työskenteli',
      me: 'työskentelimme', te: 'työskentelitte', he: 'työskentelivät'
    },
    imperative: 'työskentele!',
    passive: 'työskennellään',
    negative: 'en työskentele'
  },

  rakastaa: {
    type: 1,
    meaning: 'aimer (amour)',
    present: {
      minä: 'rakastan', sinä: 'rakastat', hän: 'rakastaa',
      me: 'rakastamme', te: 'rakastatte', he: 'rakastavat'
    },
    presentPuhekieli: {
      minä: 'mä rakastan', sinä: 'sä rakastat', hän: 'se rakastaa',
      me: 'me rakastetaan', te: 'te rakastatte', he: 'ne rakastaa'
    },
    past: {
      minä: 'rakastin', sinä: 'rakastit', hän: 'rakasti',
      me: 'rakastimme', te: 'rakastitte', he: 'rakastivat'
    },
    imperative: 'rakasta!',
    passive: 'rakastetaan',
    negative: 'en rakasta'
  },

  odottaa: {
    type: 1,
    meaning: 'attendre',
    present: {
      minä: 'odotan', sinä: 'odotat', hän: 'odottaa',
      me: 'odotamme', te: 'odotatte', he: 'odottavat'
    },
    presentPuhekieli: {
      minä: 'mä odotan', sinä: 'sä odotat', hän: 'se odottaa',
      me: 'me odotetaan', te: 'te odotatte', he: 'ne odottaa'
    },
    past: {
      minä: 'odotin', sinä: 'odotit', hän: 'odotti',
      me: 'odotimme', te: 'odotitte', he: 'odottivat'
    },
    imperative: 'odota!',
    passive: 'odotetaan',
    negative: 'en odota'
  },

  muistaa: {
    type: 1,
    meaning: 'se souvenir',
    present: {
      minä: 'muistan', sinä: 'muistat', hän: 'muistaa',
      me: 'muistamme', te: 'muistatte', he: 'muistavat'
    },
    presentPuhekieli: {
      minä: 'mä muistan', sinä: 'sä muistat', hän: 'se muistaa',
      me: 'me muistetaan', te: 'te muistatte', he: 'ne muistaa'
    },
    past: {
      minä: 'muistin', sinä: 'muistit', hän: 'muisti',
      me: 'muistimme', te: 'muistitte', he: 'muistivat'
    },
    imperative: 'muista!',
    passive: 'muistetaan',
    negative: 'en muista'
  }
};

// Fonction pour obtenir les conjugaisons d'un verbe
export const getVerbConjugation = (verb) => {
  const normalized = verb.toLowerCase().trim();
  return verbConjugations[normalized] || null;
};

// Fonction pour verifier si un mot est un verbe
export const isVerb = (word) => {
  const normalized = word.toLowerCase().trim();
  return !!verbConjugations[normalized];
};

// Liste des verbes disponibles
export const getAvailableVerbs = () => {
  return Object.keys(verbConjugations);
};
