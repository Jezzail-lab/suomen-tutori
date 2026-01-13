// Données des leçons - Niveaux A1 à B2
// Structure: modules > leçons > sections (théorie + exercices)

export const lessons = [
  // ============= NIVEAU A1 =============
  {
    id: 'a1-1',
    level: 'A1',
    module: 'A1.1',
    title: 'Tervetuloa! - Bienvenue !',
    description: 'Salutations et présentations de base',
    sections: [
      {
        type: 'theory',
        title: 'Les salutations',
        content: `En finnois, les salutations varient selon le contexte. C'est important de connaître les deux registres!

---

### 🎩 FORMEL (kirjakieli)

Utilisé dans les situations officielles, avec des inconnus plus âgés, ou à l'écrit :

| Finnois | Français | Moment |
|---------|----------|--------|
| **Hyvää huomenta** | Bonjour | Matin (jusqu'à 10h) |
| **Hyvää päivää** | Bonjour | Journée (10h-18h) |
| **Hyvää iltaa** | Bonsoir | Soir (après 18h) |
| **Hyvää yötä** | Bonne nuit | Pour dormir |
| **Näkemiin** | Au revoir | Formel |

---

### 😊 INFORMEL (puhekieli)

Ce que les Finlandais utilisent vraiment au quotidien :

| Finnois | Français | Usage |
|---------|----------|-------|
| **Moi** | Salut | Le plus courant ! |
| **Moikka** | Salut | Très décontracté |
| **Moro** | Salut | Régional (Tampere) |
| **Hei** | Bonjour/Salut | Neutre, passe-partout |
| **Terve** | Salut | Littéralement "sain" |
| **Moi moi** | Au revoir | Informel |
| **Hei hei** | Au revoir | Courant |

> 💡 **Astuce** : En Finlande, "Moi!" suffit dans 90% des situations !`
      },
      {
        type: 'theory',
        title: 'Se présenter',
        content: `### Comment demander le nom de quelqu'un

| Finnois | Français |
|---------|----------|
| **Mikä sinun nimesi on?** | Quel est ton nom ? |
| **Kuka sinä olet?** | Qui es-tu ? |
| **Mikä sun nimi on?** | C'est quoi ton nom ? (puhekieli) |

---

### Comment répondre

**En kirjakieli (formel) :**
- **Minä olen** [nom] = Je suis [nom]
- **Minun nimeni on** [nom] = Mon nom est [nom]

**En puhekieli (parlé) :**
- **Mä oon** [nom] = Je suis [nom]
- **Mun nimi on** [nom] = Mon nom est [nom]

---

### 🗣️ Dialogue exemple

| Finnois | Français |
|---------|----------|
| – Moi! Mä oon Liisa. Mikä sun nimi on? | – Salut ! Je suis Liisa. C'est quoi ton nom ? |
| – Moi! Mä oon Matti. Hauska tutustua! | – Salut ! Je suis Matti. Enchanté ! |
| – Hauska tutustua myös! | – Enchanté aussi ! |

> 💡 **"Hauska tutustua"** = Enchanté (littéralement : "agréable de faire connaissance")`
      },
      {
        type: 'theory',
        title: 'Expressions utiles',
        content: `### Politesse de base

| Finnois | Français |
|---------|----------|
| **Kiitos** | Merci |
| **Kiitti** | Merci (puhekieli) |
| **Ole hyvä** | De rien / Je vous en prie |
| **Eipä kestä** | De rien (puhekieli) |
| **Anteeksi** | Pardon / Excusez-moi |
| **Sori** | Désolé (puhekieli) |

---

### Phrases pratiques

| Finnois | Français |
|---------|----------|
| **En puhu suomea** | Je ne parle pas finnois |
| **Puhutko englantia?** | Parles-tu anglais ? |
| **En ymmärrä** | Je ne comprends pas |
| **Voitko toistaa?** | Peux-tu répéter ? |
| **Hitaammin, kiitos** | Plus lentement, s'il vous plaît |`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "Salut" de manière informelle ?',
        options: ['Hyvää päivää', 'Moi', 'Näkemiin', 'Anteeksi'],
        correct: 1,
        explanation: '"Moi" est la salutation informelle la plus courante en Finlande. Vous l\'entendrez partout !'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Que signifie "Mä oon Matti" ?',
        options: ['Je m\'appelle Matti', 'Je suis Matti', 'Bonjour Matti', 'Où est Matti ?'],
        correct: 1,
        explanation: '"Mä oon" est la forme parlée de "Minä olen" (Je suis). Les deux réponses sont acceptables en français !'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quelle salutation utiliseriez-vous le matin dans un contexte formel ?',
        options: ['Moi', 'Hyvää iltaa', 'Hyvää huomenta', 'Moro'],
        correct: 2,
        explanation: '"Hyvää huomenta" signifie "Bonjour" le matin (jusqu\'à environ 10h). C\'est la forme formelle.'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Hei, minä olen Anna. Hauska tutustua!',
        answer: 'Bonjour, je suis Anna. Enchantée !',
        alternatives: ['Salut, je suis Anna. Enchantée !', 'Bonjour, je m\'appelle Anna. Enchanté !']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Salut ! Je suis Pierre.',
        answer: 'Moi! Mä oon Pierre.',
        alternatives: ['Moi! Minä olen Pierre.', 'Hei! Mä oon Pierre.']
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Moi! ___ oon Liisa. Hauska tutustua!',
        answer: 'Mä',
        hint: 'Forme parlée de "minä" (je)'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Hyvää ___, kuinka voit? (Bonsoir, comment vas-tu ?)',
        answer: 'iltaa',
        hint: 'Le mot pour "soir" en finnois'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "Enchanté" en finnois ?',
        options: ['Kiitos', 'Hauska tutustua', 'Anteeksi', 'Näkemiin'],
        correct: 1,
        explanation: '"Hauska tutustua" signifie littéralement "agréable de faire connaissance" - c\'est l\'équivalent de "enchanté".'
      },
      {
        type: 'exercise',
        exerciseType: 'dialogue',
        instruction: 'Tu rencontres quelqu\'un pour la première fois. Que réponds-tu ?',
        context: 'Dans un café à Helsinki',
        otherName: 'Mikko',
        conversation: [
          { speaker: 'other', text: 'Moi! Mä oon Mikko.', translation: 'Salut ! Je suis Mikko.' },
          { speaker: 'other', text: 'Mikä sun nimi on?', translation: 'C\'est quoi ton nom ?' }
        ],
        options: [
          'Mä oon [ton nom]. Hauska tutustua!',
          'Moi moi! Näkemiin!',
          'Kiitos paljon!'
        ],
        optionTranslations: [
          'Je suis [ton nom]. Enchanté !',
          'Salut salut ! Au revoir !',
          'Merci beaucoup !'
        ],
        correct: 0,
        explanation: 'On se présente en puhekieli avec "Mä oon..." suivi de "Hauska tutustua" (Enchanté).'
      },
      {
        type: 'exercise',
        exerciseType: 'dialogue',
        instruction: 'Comment salues-tu quelqu\'un le matin ?',
        context: 'Au bureau, 9h du matin',
        otherName: 'Liisa',
        conversation: [
          { speaker: 'other', text: 'Huomenta! Mitä kuuluu?', translation: 'Bonjour ! Comment ça va ?' }
        ],
        options: [
          'Hyvää yötä!',
          'Huomenta! Hyvää kuuluu, kiitos!',
          'Näkemiin!'
        ],
        optionTranslations: [
          'Bonne nuit !',
          'Bonjour ! Ça va bien, merci !',
          'Au revoir !'
        ],
        correct: 1,
        explanation: '"Huomenta" est le salut du matin. On répond "Hyvää kuuluu" (Ça va bien) ou simplement "Kiitos, hyvää!"'
      },
      {
        type: 'exercise',
        exerciseType: 'dialogue',
        instruction: 'Tu quittes une fête. Que dis-tu ?',
        context: 'Fin de soirée chez des amis',
        otherName: 'Pekka',
        conversation: [
          { speaker: 'other', text: 'Lähdetkö jo?', translation: 'Tu pars déjà ?' },
          { speaker: 'user', text: 'Joo, mun täytyy mennä.', translation: 'Oui, je dois y aller.' },
          { speaker: 'other', text: 'Okei, oli kiva nähdä!', translation: 'Ok, c\'était sympa de te voir !' }
        ],
        options: [
          'Hei hei! Nähdään!',
          'Huomenta!',
          'Terve!'
        ],
        optionTranslations: [
          'Salut ! À plus !',
          'Bonjour !',
          'Salut !'
        ],
        correct: 0,
        explanation: '"Hei hei" ou "Moi moi" sont des façons informelles de dire au revoir. "Nähdään" = On se voit / À plus.'
      }
    ],
    vocabulary: [
      { fi: 'hei', fr: 'bonjour/salut', puhekieli: 'hei' },
      { fi: 'moi', fr: 'salut', puhekieli: 'moi' },
      { fi: 'moikka', fr: 'salut (très informel)', puhekieli: 'moikka' },
      { fi: 'terve', fr: 'salut (littéralement: sain)', puhekieli: 'terve' },
      { fi: 'minä', fr: 'je', puhekieli: 'mä' },
      { fi: 'sinä', fr: 'tu', puhekieli: 'sä' },
      { fi: 'olla', fr: 'être', puhekieli: 'olla' },
      { fi: 'nimi', fr: 'nom', puhekieli: 'nimi' },
      { fi: 'näkemiin', fr: 'au revoir (formel)', puhekieli: 'moi moi' },
      { fi: 'kiitos', fr: 'merci', puhekieli: 'kiitti' },
      { fi: 'anteeksi', fr: 'pardon/excusez-moi', puhekieli: 'sori' },
      { fi: 'hauska tutustua', fr: 'enchanté(e)', puhekieli: 'hauska tutustua' }
    ]
  },
  {
    id: 'a1-2',
    level: 'A1',
    module: 'A1.1',
    title: 'Numerot - Les chiffres',
    description: 'Les nombres de 0 à 100 et au-delà',
    sections: [
      {
        type: 'theory',
        title: 'Les chiffres 0-10',
        content: `Les chiffres de base sont essentiels ! Apprenez-les par coeur.

---

### 📊 Les chiffres de 0 à 10

| Chiffre | Finnois | Prononciation | Puhekieli |
|:-------:|---------|---------------|-----------|
| 0 | **nolla** | NOL-la | nolla |
| 1 | **yksi** | UK-si | yks |
| 2 | **kaksi** | KAK-si | kaks |
| 3 | **kolme** | KOL-me | kolme |
| 4 | **neljä** | NEL-yä | neljä |
| 5 | **viisi** | VII-si | viis |
| 6 | **kuusi** | KUU-si | kuus |
| 7 | **seitsemän** | SEIT-se-män | seiska |
| 8 | **kahdeksan** | KAH-dek-san | kasi |
| 9 | **yhdeksän** | YH-dek-sän | ysi |
| 10 | **kymmenen** | KYM-me-nen | kymppi |

---

> 💡 **Astuce mnémotechnique** :
> - **Yksi** ressemble à "unique" (1)
> - **Kaksi** → "K" comme "couple" (2)
> - **Kuusi** (6) ressemble à "kuusi" (sapin) - un sapin a souvent 6 branches principales !

> ⚠️ **Attention** : Ne confondez pas **kuusi** (6) et **kuusi** (sapin) !`
      },
      {
        type: 'theory',
        title: 'Les chiffres 11-19',
        content: `### Formation des nombres 11-19

La logique est simple : **nombre + toista**

"Toista" signifie littéralement "de la deuxième (dizaine)".

| Chiffre | Finnois | Décomposition |
|:-------:|---------|---------------|
| 11 | **yksitoista** | yksi + toista |
| 12 | **kaksitoista** | kaksi + toista |
| 13 | **kolmetoista** | kolme + toista |
| 14 | **neljätoista** | neljä + toista |
| 15 | **viisitoista** | viisi + toista |
| 16 | **kuusitoista** | kuusi + toista |
| 17 | **seitsemäntoista** | seitsemän + toista |
| 18 | **kahdeksantoista** | kahdeksan + toista |
| 19 | **yhdeksäntoista** | yhdeksän + toista |

---

> 💡 **En puhekieli**, on raccourcit souvent :
> - yksitoista → **ykstoista**
> - kaksitoista → **kakstoista**`
      },
      {
        type: 'theory',
        title: 'Les dizaines et centaines',
        content: `### Les dizaines (20-90)

Formation : **nombre + kymmentä**

| Chiffre | Finnois | Puhekieli |
|:-------:|---------|-----------|
| 20 | **kaksikymmentä** | kakskyt |
| 30 | **kolmekymmentä** | kolkyt |
| 40 | **neljäkymmentä** | nelkyt |
| 50 | **viisikymmentä** | viiskyt |
| 60 | **kuusikymmentä** | kuuskyt |
| 70 | **seitsemänkymmentä** | seiskyt |
| 80 | **kahdeksankymmentä** | kaheksankyt |
| 90 | **yhdeksänkymmentä** | yheksänkyt |

---

### Nombres composés (21, 35, 67...)

Dizaine + unité (sans espace ni trait d'union) :

| Nombre | Finnois |
|:------:|---------|
| 21 | **kaksikymmentäyksi** |
| 35 | **kolmekymmentäviisi** |
| 67 | **kuusikymmentäseitsemän** |
| 99 | **yhdeksänkymmentäyhdeksän** |

---

### Les centaines et au-delà

| Nombre | Finnois |
|:------:|---------|
| 100 | **sata** |
| 200 | **kaksisataa** |
| 1 000 | **tuhat** |
| 1 000 000 | **miljoona** |

> 💡 **Exemple** : 2024 = **kaksituhattakaksikymmentäneljä**`
      },
      {
        type: 'theory',
        title: 'Utilisation des nombres',
        content: `### Demander et donner des chiffres

| Finnois | Français |
|---------|----------|
| **Mikä sun numero on?** | C'est quoi ton numéro ? |
| **Paljonko tämä maksaa?** | Combien ça coûte ? |
| **Kuinka vanha olet?** | Quel âge as-tu ? |

---

### Exemples pratiques

| Contexte | Finnois | Français |
|----------|---------|----------|
| Âge | Olen **kolmekymmentä** vuotta. | J'ai 30 ans. |
| Prix | Se maksaa **viisi** euroa. | Ça coûte 5 euros. |
| Téléphone | Mun numero on **nolla-neljä-viisi**... | Mon numéro est 045... |
| Adresse | Asun **Mannerheimintie kahdeksan**. | J'habite 8 rue Mannerheim. |

---

### 🔢 Les ordinaux (1er, 2ème...)

| Ordinal | Finnois |
|:-------:|---------|
| 1er | **ensimmäinen** |
| 2ème | **toinen** |
| 3ème | **kolmas** |
| 4ème | **neljäs** |
| 5ème | **viides** |

> 💡 À partir du 3ème, on ajoute généralement **-s** ou **-as/-äs** au nombre.`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "5" en finnois ?',
        options: ['neljä', 'viisi', 'kuusi', 'kolme'],
        correct: 1,
        explanation: 'Viisi = 5. Neljä = 4, Kuusi = 6, Kolme = 3.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Que signifie "kaksitoista" ?',
        options: ['2', '10', '12', '22'],
        correct: 2,
        explanation: 'Kaksi (2) + toista = 12. "Toista" indique la deuxième dizaine, donc 12 est "2 de la deuxième dizaine".'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "20" en finnois ?',
        options: ['kaksitoista', 'kaksikymmentä', 'kymmenen', 'kahdeksan'],
        correct: 1,
        explanation: 'Kaksikymmentä = 2 × 10 = 20. Kaksi (2) + kymmentä (dizaine).'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quel est le puhekieli pour "seitsemän" (7) ?',
        options: ['seiska', 'kasi', 'ysi', 'kymppi'],
        correct: 0,
        explanation: 'Seiska est la forme familière de seitsemän (7). Kasi = 8, Ysi = 9, Kymppi = 10.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Yksi, kaksi, ___, neljä, viisi',
        answer: 'kolme',
        hint: 'Le nombre 3'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Kymmenen + yksi = ___',
        answer: 'yksitoista',
        hint: '11 en finnois'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Viisi + viisi = ___',
        answer: 'kymmenen',
        hint: '10 en finnois'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Olen kaksikymmentäviisi vuotta.',
        answer: 'J\'ai 25 ans.',
        alternatives: ['J\'ai vingt-cinq ans.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Ça coûte 15 euros.',
        answer: 'Se maksaa viisitoista euroa.',
        alternatives: ['Tämä maksaa viisitoista euroa.']
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "premier" en finnois ?',
        options: ['yksi', 'ensimmäinen', 'toinen', 'kolmas'],
        correct: 1,
        explanation: 'Ensimmäinen = premier. Yksi = un (cardinal), Toinen = deuxième, Kolmas = troisième.'
      }
    ],
    vocabulary: [
      { fi: 'nolla', fr: 'zéro (0)', puhekieli: 'nolla' },
      { fi: 'yksi', fr: 'un (1)', puhekieli: 'yks' },
      { fi: 'kaksi', fr: 'deux (2)', puhekieli: 'kaks' },
      { fi: 'kolme', fr: 'trois (3)', puhekieli: 'kolme' },
      { fi: 'neljä', fr: 'quatre (4)', puhekieli: 'neljä' },
      { fi: 'viisi', fr: 'cinq (5)', puhekieli: 'viis' },
      { fi: 'kuusi', fr: 'six (6)', puhekieli: 'kuus' },
      { fi: 'seitsemän', fr: 'sept (7)', puhekieli: 'seiska' },
      { fi: 'kahdeksan', fr: 'huit (8)', puhekieli: 'kasi' },
      { fi: 'yhdeksän', fr: 'neuf (9)', puhekieli: 'ysi' },
      { fi: 'kymmenen', fr: 'dix (10)', puhekieli: 'kymppi' },
      { fi: 'sata', fr: 'cent (100)', puhekieli: 'sata' },
      { fi: 'tuhat', fr: 'mille (1000)', puhekieli: 'tuhat' },
      { fi: 'numero', fr: 'numéro', puhekieli: 'numero' },
      { fi: 'vuotta', fr: 'ans (âge)', puhekieli: 'vuotta' }
    ]
  },
  {
    id: 'a1-3',
    level: 'A1',
    module: 'A1.1',
    title: 'Olla-verbi - Le verbe être',
    description: 'Conjugaison du verbe olla (être) - le verbe le plus important !',
    sections: [
      {
        type: 'theory',
        title: 'Le verbe olla au présent',
        content: `Le verbe **olla** (être) est LE verbe le plus important en finnois. Apprenez-le parfaitement !

---

### 🎯 Conjugaison KIRJAKIELI (formel)

| Pronom | Verbe | Français |
|--------|-------|----------|
| **minä** | **olen** | je suis |
| **sinä** | **olet** | tu es |
| **hän** | **on** | il/elle est |
| **me** | **olemme** | nous sommes |
| **te** | **olette** | vous êtes |
| **he** | **ovat** | ils/elles sont |

---

### 😊 Conjugaison PUHEKIELI (parlé)

C'est ce que vous entendrez vraiment en Finlande !

| Pronom | Verbe | Exemple |
|--------|-------|---------|
| **mä** | **oon** | Mä oon täällä (Je suis ici) |
| **sä** | **oot** | Sä oot kiva (Tu es sympa) |
| **se** | **on** | Se on hyvä (C'est bien) |
| **me** | **ollaan** | Me ollaan valmiita (On est prêts) |
| **te** | **ootte** | Te ootte myöhässä (Vous êtes en retard) |
| **ne** | **on** | Ne on siellä (Ils sont là-bas) |

> ⚠️ **Important** : En puhekieli, "**se**" remplace "hän" et "**ne**" remplace "he". Ce n'est pas impoli !

> 💡 **Astuce** : "**Me ollaan**" utilise la forme passive - très courant en finnois parlé pour "nous".`
      },
      {
        type: 'theory',
        title: 'La négation',
        content: `### Comment former la négation

En finnois, la négation utilise un **verbe négatif qui se conjugue** + le radical du verbe principal.

---

### 🚫 Négation de "olla"

| Pronom | Négatif | Français |
|--------|---------|----------|
| **minä** | **en ole** | je ne suis pas |
| **sinä** | **et ole** | tu n'es pas |
| **hän** | **ei ole** | il/elle n'est pas |
| **me** | **emme ole** | nous ne sommes pas |
| **te** | **ette ole** | vous n'êtes pas |
| **he** | **eivät ole** | ils/elles ne sont pas |

---

### En puhekieli

| Formel | Parlé | Français |
|--------|-------|----------|
| en ole | **en oo** | je ne suis pas |
| et ole | **et oo** | tu n'es pas |
| ei ole | **ei oo** | il/elle n'est pas |
| emme ole | **ei olla** | on n'est pas |

> 💡 **Structure** : Le verbe négatif (en, et, ei...) se conjugue, mais "ole/oo" reste invariable.

---

### Exemples pratiques

| Finnois | Français |
|---------|----------|
| Mä en oo suomalainen | Je ne suis pas finlandais(e) |
| Se ei oo täällä | Il/elle n'est pas ici |
| Me ei olla valmiita | On n'est pas prêts |`
      },
      {
        type: 'theory',
        title: 'Les pronoms personnels',
        content: `### 👤 Les pronoms en finnois

| Kirjakieli | Puhekieli | Français |
|------------|-----------|----------|
| **minä** | **mä** / mie | je |
| **sinä** | **sä** / sie | tu |
| **hän** | **se** | il / elle |
| **me** | **me** | nous |
| **te** | **te** | vous |
| **he** | **ne** | ils / elles |

---

### ⚠️ Points importants

1. **Hän vs Se** : "Hän" est neutre (pas de genre), mais en puhekieli, on utilise souvent "se" (qui signifie aussi "ça/cela")

2. **Pas de genre** : Le finnois n'a pas de distinction il/elle - "hän" couvre les deux !

3. **On peut omettre le pronom** : Comme en espagnol, le pronom est souvent omis car la conjugaison suffit :
   - "Olen suomalainen" = "Je suis finlandais(e)"

---

### 🗣️ Ce qu'on dit vraiment

| On écrit | On dit |
|----------|--------|
| Minä olen | Mä oon |
| Sinä olet | Sä oot |
| Hän on | Se on |
| Me olemme | Me ollaan |`
      },
      {
        type: 'theory',
        title: 'Usages courants',
        content: `### Utiliser "olla" pour exprimer...

---

### 🌍 La nationalité / l'origine

| Finnois | Français |
|---------|----------|
| Olen **ranskalainen** | Je suis français(e) |
| Olen **suomalainen** | Je suis finlandais(e) |
| Olen **Ranskasta** | Je viens de France |
| Olen **Pariisista** | Je viens de Paris |

---

### 💼 La profession

| Finnois | Français |
|---------|----------|
| Olen **opiskelija** | Je suis étudiant(e) |
| Olen **opettaja** | Je suis professeur |
| Olen **lääkäri** | Je suis médecin |

---

### 📍 Le lieu

| Finnois | Français |
|---------|----------|
| Olen **täällä** | Je suis ici |
| Olen **kotona** | Je suis à la maison |
| Olen **töissä** | Je suis au travail |

---

### 😊 L'état / l'humeur

| Finnois | Français |
|---------|----------|
| Olen **väsynyt** | Je suis fatigué(e) |
| Olen **iloinen** | Je suis content(e) |
| Olen **valmis** | Je suis prêt(e) |`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "je suis" en finnois standard ?',
        options: ['minä on', 'minä olen', 'minä olet', 'minä ovat'],
        correct: 1,
        explanation: '"Minä olen" = Je suis. "Olen" est la forme conjuguée pour "minä".'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quelle est la forme parlée (puhekieli) de "sinä olet" ?',
        options: ['sä oot', 'sä on', 'sä olen', 'sinä oon'],
        correct: 0,
        explanation: 'En puhekieli : sinä → sä, olet → oot. Donc "sä oot".'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "nous sommes" en puhekieli ?',
        options: ['me olemme', 'me ovat', 'me ollaan', 'me on'],
        correct: 2,
        explanation: '"Me ollaan" est la forme parlée. Elle utilise le passif, ce qui est très courant en finnois parlé.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quelle est la forme négative de "minä olen" ?',
        options: ['minä ei ole', 'minä en ole', 'minä olen ei', 'en minä ole'],
        correct: 1,
        explanation: 'La négation se forme avec le verbe négatif "en" (pour minä) + "ole". Donc "minä en ole" ou simplement "en ole".'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Hän ___ suomalainen. (Il/elle est finlandais(e))',
        answer: 'on',
        hint: 'Forme de "olla" pour hän'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Me ___ opiskelijoita. (Nous sommes étudiants - formel)',
        answer: 'olemme',
        hint: 'Forme de "olla" pour me (kirjakieli)'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Mä ___ väsynyt. (Je suis fatigué(e) - puhekieli)',
        answer: 'oon',
        hint: 'Forme parlée de "olen"'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Te ___ myöhässä! (Vous êtes en retard !)',
        answer: 'olette',
        hint: 'Forme de "olla" pour te'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Je ne suis pas finlandais.',
        answer: 'Minä en ole suomalainen.',
        alternatives: ['En ole suomalainen.', 'Mä en oo suomalainen.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Se ei oo täällä.',
        answer: 'Il/elle n\'est pas ici.',
        alternatives: ['Il n\'est pas ici.', 'Elle n\'est pas ici.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Nous sommes prêts.',
        answer: 'Me ollaan valmiita.',
        alternatives: ['Olemme valmiita.', 'Me olemme valmiita.']
      }
    ],
    vocabulary: [
      { fi: 'olla', fr: 'être', puhekieli: 'olla' },
      { fi: 'olen', fr: 'je suis', puhekieli: 'oon' },
      { fi: 'olet', fr: 'tu es', puhekieli: 'oot' },
      { fi: 'on', fr: 'il/elle est', puhekieli: 'on' },
      { fi: 'olemme', fr: 'nous sommes', puhekieli: 'ollaan' },
      { fi: 'olette', fr: 'vous êtes', puhekieli: 'ootte' },
      { fi: 'ovat', fr: 'ils/elles sont', puhekieli: 'on' },
      { fi: 'suomalainen', fr: 'finlandais(e)', puhekieli: 'suomalainen' },
      { fi: 'ranskalainen', fr: 'français(e)', puhekieli: 'ranskalainen' },
      { fi: 'opiskelija', fr: 'étudiant(e)', puhekieli: 'opiskelija' },
      { fi: 'väsynyt', fr: 'fatigué(e)', puhekieli: 'väsyny' },
      { fi: 'valmis', fr: 'prêt(e)', puhekieli: 'valmis' },
      { fi: 'täällä', fr: 'ici', puhekieli: 'täällä' },
      { fi: 'en', fr: 'ne...pas (je)', puhekieli: 'en' },
      { fi: 'ei', fr: 'ne...pas (il/elle)', puhekieli: 'ei' }
    ]
  },
  {
    id: 'a1-4',
    level: 'A1',
    module: 'A1.2',
    title: 'Mitä kuuluu? - Comment ça va ?',
    description: 'Demander et donner des nouvelles',
    sections: [
      {
        type: 'theory',
        title: 'Demander des nouvelles',
        content: `En Finlande, on demande des nouvelles de manière assez directe. Pas besoin de longues formules !

---

### 🗣️ Expressions courantes

| Finnois | Français | Usage |
|---------|----------|-------|
| **Mitä kuuluu?** | Quoi de neuf ? | Le plus courant |
| **Miten menee?** | Comment ça va ? | Très utilisé |
| **Miten voit?** | Comment te sens-tu ? | Plus personnel |
| **Kuinka voit?** | Comment vas-tu ? | Plus formel |

---

### 😊 En puhekieli (parlé)

| Kirjakieli | Puhekieli | Français |
|------------|-----------|----------|
| Mitä sinulle kuuluu? | Mitä sulle kuuluu? | Quoi de neuf pour toi ? |
| Miten sinä voit? | Miten sä voit? | Comment tu te sens ? |

> 💡 **Astuce** : Entre amis, on dit souvent juste "**Mitä?**" ou "**Miten?**" - très informel mais courant !

> ⚠️ **Littéralement** : "Mitä kuuluu?" signifie "Qu'est-ce qu'on entend ?" - une façon poétique de demander des nouvelles.`
      },
      {
        type: 'theory',
        title: 'Répondre positivement',
        content: `### 😄 Réponses positives

| Finnois | Français | Niveau |
|---------|----------|--------|
| **Hyvää, kiitos!** | Bien, merci ! | Standard |
| **Ihan hyvää** | Ça va bien | Courant |
| **Hyvin menee** | Ça va bien | Courant |
| **Tosi hyvää!** | Très bien ! | Enthousiaste |
| **Loistavasti!** | Super ! | Très positif |
| **Mahtavaa!** | Génial ! | Très positif |
| **Erinomaisesti!** | Excellent ! | Formel |

---

### 🗣️ Dialogue exemple

| Finnois | Français |
|---------|----------|
| – Moi! Mitä kuuluu? | – Salut ! Quoi de neuf ? |
| – Hyvää, kiitos! Entä sulle? | – Bien, merci ! Et toi ? |
| – Ihan hyvää! | – Ça va bien ! |

> 💡 **Astuce** : "Ihan" est un mot très utile qui signifie "assez/plutôt". Il modère le mot qui suit.`
      },
      {
        type: 'theory',
        title: 'Réponses neutreset négatives',
        content: `### 😐 Réponses neutres

| Finnois | Français |
|---------|----------|
| **Ihan ok** | Ça va |
| **Menee** | Ça va (puhekieli) |
| **Ei erikoista** | Rien de spécial |
| **Ihan tavallista** | Comme d'habitude |
| **Sama meno** | Pareil (puhekieli) |

---

### 😔 Réponses négatives

| Finnois | Français |
|---------|----------|
| **Ei kovin hyvää** | Pas très bien |
| **Huonosti** | Mal |
| **Olen väsynyt** | Je suis fatigué(e) |
| **Olen kipeä** | Je suis malade |
| **Aika huonosti** | Assez mal |

---

### ↩️ Retourner la question

| Finnois | Français |
|---------|----------|
| **Entä sinulle?** | Et toi ? (formel) |
| **Entä sulle?** | Et toi ? (puhekieli) |
| **Entäs ite?** | Et toi-même ? (très informel) |

> 💡 **"Entä"** est le mot magique pour retourner une question. Très utile !`
      },
      {
        type: 'theory',
        title: 'Conversations typiques',
        content: `### 🎭 Scénarios de la vie quotidienne

---

**Au travail (formel) :**

| Finnois | Français |
|---------|----------|
| – Hyvää huomenta! Mitä kuuluu? | – Bonjour ! Comment allez-vous ? |
| – Kiitos hyvää. Entä teille? | – Bien, merci. Et vous ? |
| – Hyvin menee, kiitos. | – Ça va bien, merci. |

---

**Entre amis (puhekieli) :**

| Finnois | Français |
|---------|----------|
| – Moi! Miten menee? | – Salut ! Comment ça va ? |
| – Menee ihan hyvin! Sä? | – Ça va bien ! Et toi ? |
| – Joo, ihan ok. Vähän väsyny. | – Ouais, ça va. Un peu fatigué. |

---

**Quand ça ne va pas :**

| Finnois | Français |
|---------|----------|
| – Mitä kuuluu? | – Quoi de neuf ? |
| – No... ei kovin hyvää. Olen vähän sairas. | – Ben... pas très bien. Je suis un peu malade. |
| – Voi harmi! Toivottavasti paranet pian. | – Oh dommage ! J'espère que tu iras mieux bientôt. |

> 💡 **"No..."** au début d'une phrase signale qu'on hésite ou que ce n'est pas positif.`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Que signifie "Mitä kuuluu?" ?',
        options: ['Au revoir', 'Comment ça va ? / Quoi de neuf ?', 'Merci beaucoup', 'Je m\'appelle'],
        correct: 1,
        explanation: '"Mitä kuuluu?" est l\'expression standard pour demander comment ça va. Littéralement : "Qu\'est-ce qu\'on entend ?"'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment répondre "Bien, merci" en finnois ?',
        options: ['Anteeksi', 'Näkemiin', 'Hyvää, kiitos', 'Moi moi'],
        correct: 2,
        explanation: '"Hyvää, kiitos" = Bien, merci. C\'est la réponse standard à "Mitä kuuluu?".'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Que signifie "Entä sulle?" ?',
        options: ['Comment ça va ?', 'Et toi ?', 'À bientôt', 'Pas très bien'],
        correct: 1,
        explanation: '"Entä sulle?" = Et toi ? C\'est la forme puhekieli de "Entä sinulle?".'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quelle réponse indique que ça ne va PAS bien ?',
        options: ['Loistavasti!', 'Ihan hyvää', 'Ei kovin hyvää', 'Mahtavaa!'],
        correct: 2,
        explanation: '"Ei kovin hyvää" = Pas très bien. Les autresréponses sont positives.'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Miten menee? - Ihan hyvin, kiitos!',
        answer: 'Comment ça va ? - Ça va bien, merci !',
        alternatives: ['Comment ça va ? - Très bien, merci !', 'Comment ça va ? - Plutôt bien, merci !']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Olen vähän väsynyt tänään.',
        answer: 'Je suis un peu fatigué(e) aujourd\'hui.',
        alternatives: ['Je suis un peu fatigué aujourd\'hui.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Quoi de neuf ? - Super, merci !',
        answer: 'Mitä kuuluu? - Loistavasti, kiitos!',
        alternatives: ['Mitä kuuluu? - Mahtavaa, kiitos!']
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Mitä kuuluu? - Hyvää, ___! Entä sinulle?',
        answer: 'kiitos',
        hint: 'Merci en finnois'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Miten menee? - ___ hyvää. (Ça va bien)',
        answer: 'Ihan',
        hint: 'Mot qui signifie "assez/plutôt"'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: '___ kovin hyvää. Olen kipeä. (Pas très bien. Je suis malade.)',
        answer: 'Ei',
        hint: 'Le mot négatif en finnois'
      }
    ],
    vocabulary: [
      { fi: 'mitä', fr: 'quoi', puhekieli: 'mitä' },
      { fi: 'kuuluu', fr: 'entendre / nouvelles', puhekieli: 'kuuluu' },
      { fi: 'miten', fr: 'comment', puhekieli: 'miten' },
      { fi: 'menee', fr: 'ça va (verbe mennä)', puhekieli: 'menee' },
      { fi: 'hyvää', fr: 'bien / bon', puhekieli: 'hyvää' },
      { fi: 'hyvin', fr: 'bien (adverbe)', puhekieli: 'hyvin' },
      { fi: 'kiitos', fr: 'merci', puhekieli: 'kiitti' },
      { fi: 'entä', fr: 'et (question)', puhekieli: 'entä' },
      { fi: 'väsynyt', fr: 'fatigué(e)', puhekieli: 'väsyny' },
      { fi: 'ihan', fr: 'assez / plutôt', puhekieli: 'ihan' },
      { fi: 'loistavasti', fr: 'super / excellent', puhekieli: 'loistavasti' },
      { fi: 'mahtavaa', fr: 'génial', puhekieli: 'mahtavaa' },
      { fi: 'kipeä', fr: 'malade', puhekieli: 'kipeä' },
      { fi: 'huonosti', fr: 'mal', puhekieli: 'huonosti' },
      { fi: 'tänään', fr: 'aujourd\'hui', puhekieli: 'tänään' }
    ]
  },
  {
    id: 'a1-5',
    level: 'A1',
    module: 'A1.2',
    title: 'Perhe - La famille',
    description: 'Les membres de la famille et les possessifs',
    sections: [
      {
        type: 'theory',
        title: 'La famille proche',
        content: `En Finlande, la famille (perhe) est importante. Le vocabulaire familial est un des premiers qu'on apprend !

---

### 👨‍👩‍👧‍👦 Les membres de base

| Finnois | Français | Puhekieli |
|---------|----------|-----------|
| **perhe** | famille | perhe |
| **äiti** | mère | äiti / äiskä |
| **isä** | père | isä / iskä |
| **vanhemmat** | parents | vanhemmat |
| **lapsi** | enfant | lapsi |
| **lapset** | enfants | lapset |

---

### 👦👧 Frères, soeurs, enfants

| Finnois | Français |
|---------|----------|
| **poika** | fils / garçon |
| **tyttö** | fille |
| **veli** | frère |
| **sisko** | soeur |
| **sisarukset** | frères et soeurs |
| **vauva** | bébé |

> 💡 **Astuce** : "Poika" signifie à la fois "garçon" et "fils". Le contexte précise le sens.

> ⚠️ **Attention** : En finnois, pas de genre grammatical ! "Lapsi" peut être un garçon ou une fille.`
      },
      {
        type: 'theory',
        title: 'La famille élargie',
        content: `### 👴👵 Grands-parents et petits-enfants

| Finnois | Français | Note |
|---------|----------|------|
| **isovanhemmat** | grands-parents | iso = grand |
| **isoäiti** | grand-mère | formel |
| **mummo** / **mummi** | mamie | puhekieli |
| **isoisä** | grand-père | formel |
| **vaari** / **pappa** | papy | puhekieli |
| **lapsenlapsi** | petit-enfant | littéralement "enfant d'enfant" |

---

### 👨‍👩‍👦 Oncles, tantes, cousins

| Finnois | Français | Précision |
|---------|----------|-----------|
| **setä** | oncle | frère du père |
| **eno** | oncle | frère de la mère |
| **täti** | tante | soeur du père ou de la mère |
| **serkku** | cousin(e) | pas de genre ! |

> 💡 **Particularité** : Le finnois distingue l'oncle paternel (setä) de l'oncle maternel (eno). C'est unique !`
      },
      {
        type: 'theory',
        title: 'Famille par alliance et relations',
        content: `### 💍 Couples et mariage

| Finnois | Français |
|---------|----------|
| **aviomies** | mari / époux |
| **vaimo** | femme / épouse |
| **mies** | homme / mari (informel) |
| **poikaystävä** | petit ami |
| **tyttöystävä** | petite amie |
| **puoliso** | conjoint(e) |
| **aviopari** | couple marié |

---

### 👨‍👩‍👧 Belle-famille

| Finnois | Français |
|---------|----------|
| **anoppi** | belle-mère (mère du conjoint) |
| **appi** | beau-père (père du conjoint) |
| **miniä** | belle-fille |
| **vävy** | gendre |
| **lanko** | beau-frère |
| **käly** | belle-soeur |

> 💡 **En puhekieli**, on utilise souvent juste le prénom au lieu du terme de parenté !`
      },
      {
        type: 'theory',
        title: 'Les suffixes possessifs',
        content: `### 🏠 Parler de SA famille

En finnois, on utilise des **suffixes possessifs** attachés au nom.

---

### 📊 Les suffixes

| Pronom | Suffixe | Exemple | Français |
|--------|---------|---------|----------|
| minä | **-ni** | äiti**ni** | ma mère |
| sinä | **-si** | äiti**si** | ta mère |
| hän | **-nsa/-nsä** | äiti**nsä** | sa mère |
| me | **-mme** | äiti**mme** | notre mère |
| te | **-nne** | äiti**nne** | votre mère |
| he | **-nsa/-nsä** | äiti**nsä** | leur mère |

---

### 😊 En puhekieli (beaucoup plus simple !)

On utilise juste le pronom possessif :

| Kirjakieli | Puhekieli | Français |
|------------|-----------|----------|
| Minun äitini | **Mun äiti** | Ma mère |
| Sinun veljesi | **Sun veli** | Ton frère |
| Hänen siskonsa | **Sen sisko** | Sa soeur |

> 💡 **Bonne nouvelle** : En puhekieli, pas besoin d'apprendre les suffixes par coeur ! "Mun", "sun", "sen" + le nom suffit.

---

### 🗣️ Exemples

| Finnois | Français |
|---------|----------|
| Mun perhe asuu Helsingissä | Ma famille habite à Helsinki |
| Sun äiti on kiva | Ta mère est sympa |
| Mulla on kaks siskoo | J'ai deux soeurs (puhekieli) |`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "mère" en finnois ?',
        options: ['isä', 'äiti', 'sisko', 'täti'],
        correct: 1,
        explanation: 'Äiti = mère. Isä = père, Sisko = soeur, Täti = tante.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Que signifie "veli" ?',
        options: ['soeur', 'frère', 'cousin', 'oncle'],
        correct: 1,
        explanation: 'Veli = frère. Sisko = soeur.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quelle est la différence entre "setä" et "eno" ?',
        options: ['Setä = oncle plus âgé', 'Setä = oncle côté père, Eno = oncle côté mère', 'Eno = oncle par alliance', 'Il n\'y a pas de différence'],
        correct: 1,
        explanation: 'En finnois, on distingue l\'oncle paternel (setä) de l\'oncle maternel (eno). C\'est une particularité du finnois !'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quel est le suffixe possessif pour "minä" (je) ?',
        options: ['-si', '-ni', '-nsa', '-mme'],
        correct: 1,
        explanation: 'Le suffixe possessif pour "minä" est -ni. Exemple : äitini = ma mère.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "ma mère" en puhekieli ?',
        options: ['Minun äitini', 'Mun äiti', 'Äiti minun', 'Minä äiti'],
        correct: 1,
        explanation: 'En puhekieli, on dit simplement "Mun äiti" au lieu de "Minun äitini".'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Minun ___ on Liisa. (Ma soeur est Liisa)',
        answer: 'siskoni',
        hint: 'Soeur + suffixe possessif -ni'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Mun ___ asuu Tampereella. (Mon père habite à Tampere)',
        answer: 'isä',
        hint: 'Père en finnois (puhekieli, pas de suffixe)'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Hänellä on kolme ___. (Il/elle a trois enfants)',
        answer: 'lasta',
        hint: 'Enfant au partitif (après un nombre)'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Minulla on kaksi veljeä ja yksi sisko.',
        answer: 'J\'ai deux frères et une soeur.',
        alternatives: ['J\'ai 2 frères et 1 soeur.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Mun mummo on tosi kiva.',
        answer: 'Ma grand-mère est très gentille.',
        alternatives: ['Ma mamie est très sympa.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Mon frère a 25 ans.',
        answer: 'Mun veli on kaksikymmentäviisi vuotta.',
        alternatives: ['Minun veljeni on kaksikymmentäviisi vuotta.', 'Mun veli on 25 vuotta.']
      }
    ],
    vocabulary: [
      { fi: 'perhe', fr: 'famille', puhekieli: 'perhe' },
      { fi: 'äiti', fr: 'mère', puhekieli: 'äiti / äiskä' },
      { fi: 'isä', fr: 'père', puhekieli: 'isä / iskä' },
      { fi: 'vanhemmat', fr: 'parents', puhekieli: 'vanhemmat' },
      { fi: 'veli', fr: 'frère', puhekieli: 'veli' },
      { fi: 'sisko', fr: 'soeur', puhekieli: 'sisko' },
      { fi: 'lapsi', fr: 'enfant', puhekieli: 'lapsi' },
      { fi: 'poika', fr: 'fils / garçon', puhekieli: 'poika' },
      { fi: 'tyttö', fr: 'fille', puhekieli: 'tyttö' },
      { fi: 'isoäiti', fr: 'grand-mère', puhekieli: 'mummo' },
      { fi: 'isoisä', fr: 'grand-père', puhekieli: 'vaari' },
      { fi: 'setä', fr: 'oncle (paternel)', puhekieli: 'setä' },
      { fi: 'eno', fr: 'oncle (maternel)', puhekieli: 'eno' },
      { fi: 'täti', fr: 'tante', puhekieli: 'täti' },
      { fi: 'serkku', fr: 'cousin(e)', puhekieli: 'serkku' }
    ]
  },
  {
    id: 'a1-6',
    level: 'A1',
    module: 'A1.2',
    title: 'Verbityyppi 1 - Verbes type 1',
    description: 'Les verbes se terminant en deux voyelles (-aa/-ää, etc.)',
    sections: [
      {
        type: 'theory',
        title: 'Comprendre les types de verbes',
        content: `En finnois, il existe **6 types de verbes** classés selon leur terminaison. Les verbes de type 1 sont les plus courants !

---

### 📚 Le type 1 : verbes en deux voyelles

Les verbes de type 1 se terminent par **deux voyelles** :

| Terminaison | Exemple | Français |
|-------------|---------|----------|
| **-aa** | sano**a** | dire |
| **-ää** | ymmärt**ää** | comprendre |
| **-ea** | luk**ea** | lire |
| **-eä** | | |
| **-ia** | opi**a** | apprendre |
| **-iä** | | |
| **-oa** | ost**aa** | acheter |
| **-ua** | puh**ua** | parler |
| **-yä** | | |
| **-öä** | | |

---

### ⭐ Verbes type 1 les plus utiles

| Infinitif | Français | Très courant |
|-----------|----------|--------------|
| **puhua** | parler | oui |
| **lukea** | lire | oui |
| **kirjoittaa** | écrire | oui |
| **asua** | habiter | oui |
| **sanoa** | dire | oui |
| **ostaa** | acheter | oui |
| **antaa** | donner | |
| **ottaa** | prendre | oui |

> 💡 **Astuce** : Environ 50% des verbes finnois sont de type 1 !`
      },
      {
        type: 'theory',
        title: 'Conjugaison au présent',
        content: `### 🔧 Comment conjuguer ?

1. Prendre l'infinitif : **puhua**
2. Enlever la **dernière voyelle** : puhu-
3. Ajouter la **terminaison** personnelle

---

### 📊 Tableau de conjugaison

| Pronom | Terminaison | puhua | lukea | sanoa |
|--------|-------------|-------|-------|-------|
| minä | **-n** | puhu**n** | lue**n** | sano**n** |
| sinä | **-t** | puhu**t** | lue**t** | sano**t** |
| hän | **-V** (double) | puhu**u** | luke**e** | sano**o** |
| me | **-mme** | puhu**mme** | lue**mme** | sano**mme** |
| te | **-tte** | puhu**tte** | lue**tte** | sano**tte** |
| he | **-vat/-vät** | puhu**vat** | luke**vat** | sano**vat** |

---

### ⚠️ La 3ème personne (hän)

Pour **hän**, on **double la voyelle du radical** :
- puhu → puhu**u**
- lue → luke**e** (attention au changement k→k!)
- sano → sano**o**

> 💡 **Rappel** : -vat pour les voyelles arrière (a, o, u), -vät pour les voyelles avant (ä, ö, y, e, i)`
      },
      {
        type: 'theory',
        title: 'En puhekieli (parlé)',
        content: `### 😊 Ce qu'on dit vraiment

En finnois parlé, la conjugaison se simplifie !

---

### 📊 Comparaison formel vs parlé

| Kirjakieli | Puhekieli | Français |
|------------|-----------|----------|
| minä puhun | **mä puhun** | je parle |
| sinä puhut | **sä puhut** | tu parles |
| hän puhuu | **se puhuu** | il/elle parle |
| me puhumme | **me puhutaan** | nous parlons |
| te puhutte | **te puhutte** | vous parlez |
| he puhuvat | **ne puhuu** | ils/elles parlent |

---

### 🎯 Points clés

1. **"Me" utilise le passif** : me puhu**mme** → me puhu**taan**
2. **"He/Ne" utilise la 3ème sing.** : he puhu**vat** → ne puhu**u**
3. **Les pronoms changent** : minä→mä, sinä→sä, hän→se, he→ne

> 💡 **En puhekieli**, la forme "nous" avec le passif est TRÈS courante. C'est même la norme !

---

### 🗣️ Exemples concrets

| Kirjakieli | Puhekieli | Français |
|------------|-----------|----------|
| Minä asun Helsingissä | Mä asun Helsingis | J'habite à Helsinki |
| Me ostamme ruokaa | Me ostetaan ruokaa | On achète de la nourriture |
| He lukevat kirjaa | Ne lukee kirjaa | Ils lisent un livre |`
      },
      {
        type: 'theory',
        title: 'Exemples pratiques',
        content: `### 📝 Phrases du quotidien

---

**Avec puhua (parler) :**

| Finnois | Français |
|---------|----------|
| Puhun suomea | Je parle finnois |
| Puhutko englantia? | Parles-tu anglais ? |
| Se puhuu tosi hyvin | Il/elle parle très bien |
| Me puhutaan suomee | On parle finnois (puhekieli) |

---

**Avec asua (habiter) :**

| Finnois | Français |
|---------|----------|
| Asun Pariisissa | J'habite à Paris |
| Missä sä asut? | Où tu habites ? (puhekieli) |
| Ne asuu Tampereella | Ils habitent à Tampere |

---

**Avec lukea (lire) :**

| Finnois | Français |
|---------|----------|
| Luen kirjaa | Je lis un livre |
| Luetko sanomalehteä? | Lis-tu le journal ? |
| Me luetaan uutisia | On lit les nouvelles |

> 💡 **Notez** : Après ces verbes, on utilise souvent le **partitif** (suome**a**, kirja**a**) car l'action est en cours.`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quelle est la forme correcte de "puhua" pour "minä" ?',
        options: ['puhun', 'puhuu', 'puhua', 'puhut'],
        correct: 0,
        explanation: 'Minä puhun = Je parle. On enlève la dernière voyelle (puhu-) et on ajoute -n.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment conjugue-t-on "lukea" pour "hän" ?',
        options: ['luen', 'luet', 'lukee', 'lukevat'],
        correct: 2,
        explanation: 'Hän lukee = Il/elle lit. Pour "hän", on double la voyelle du radical : luke → lukee.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quelle forme utilise-t-on pour "me" en puhekieli ?',
        options: ['me puhumme', 'me puhutaan', 'me puhuvat', 'me puhuu'],
        correct: 1,
        explanation: 'En puhekieli, "nous" utilise la forme passive : "me puhutaan" au lieu de "me puhumme".'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "ils disent" en kirjakieli ?',
        options: ['he sanoo', 'he sanovat', 'he sanotaan', 'he sanon'],
        correct: 1,
        explanation: 'He sanovat = ils disent. Pour "he", terminaison -vat (voyelles arrière).'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Hän ___ suomea. (Il/elle parle finnois)',
        answer: 'puhuu',
        hint: 'Radical puhu- + voyelle doublée pour hän'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Me ___ kirjaa. (Nous lisons un livre - puhekieli)',
        answer: 'luetaan',
        hint: 'Forme passive utilisée pour "nous" en puhekieli'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Sinä ___ Helsingissä. (Tu habites à Helsinki)',
        answer: 'asut',
        hint: 'Radical asu- + terminaison -t pour sinä'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'He ___ ruokaa. (Ils achètent de la nourriture)',
        answer: 'ostavat',
        hint: 'Verbe ostaa, terminaison -vat pour he'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'J\'habite en Finlande.',
        answer: 'Asun Suomessa.',
        alternatives: ['Minä asun Suomessa.', 'Mä asun Suomessa.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Puhutko ranskaa?',
        answer: 'Parles-tu français ?',
        alternatives: ['Tu parles français ?', 'Est-ce que tu parles français ?']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Nous lisons le journal. (puhekieli)',
        answer: 'Me luetaan lehteä.',
        alternatives: ['Me luetaan sanomalehteä.']
      },
      {
        type: 'exercise',
        exerciseType: 'cloze',
        instruction: 'Conjugue le verbe pour compléter la phrase :',
        sentence: 'Mä ___ suomea ja englantia.',
        baseWord: 'puhua (minä)',
        answer: 'puhun',
        translation: 'Je parle finnois et anglais.',
        explanation: 'Puhua → puhun : radical puhu- + terminaison -n pour minä.'
      },
      {
        type: 'exercise',
        exerciseType: 'cloze',
        instruction: 'Mets le verbe à la bonne forme :',
        sentence: 'Me ___ uutta autoa huomenna.',
        baseWord: 'ostaa (me, puhekieli)',
        answer: 'ostetaan',
        translation: 'On achète une nouvelle voiture demain.',
        explanation: 'En puhekieli, "me" utilise la forme passive : ostaa → ostetaan.'
      },
      {
        type: 'exercise',
        exerciseType: 'cloze',
        instruction: 'Conjugue le verbe correctement :',
        sentence: 'Mikko ___ sähköpostia joka päivä.',
        baseWord: 'kirjoittaa (hän)',
        answer: 'kirjoittaa',
        translation: 'Mikko écrit des emails tous les jours.',
        explanation: 'Kirjoittaa → kirjoittaa : pour hän, la voyelle double (aa reste aa).'
      },
      {
        type: 'exercise',
        exerciseType: 'wordOrder',
        instruction: 'Construis la phrase en finnois :',
        translation: 'Je parle finnois.',
        words: ['suomea', 'Minä', 'puhun'],
        answer: 'Minä puhun suomea',
        alternatives: ['Puhun suomea'],
        explanation: 'L\'ordre de base est Sujet + Verbe + Complément, mais le pronom peut être omis.'
      },
      {
        type: 'exercise',
        exerciseType: 'wordOrder',
        instruction: 'Remets les mots dans le bon ordre :',
        translation: 'Elle lit un livre.',
        words: ['kirjaa', 'Hän', 'lukee'],
        answer: 'Hän lukee kirjaa',
        explanation: 'Hän lukee kirjaa = Elle lit un livre. Le complément est au partitif (kirjaa).'
      },
      {
        type: 'exercise',
        exerciseType: 'wordOrder',
        instruction: 'Construis la phrase (puhekieli) :',
        translation: 'On achète de la nourriture.',
        words: ['ruokaa', 'Me', 'ostetaan'],
        answer: 'Me ostetaan ruokaa',
        explanation: 'En puhekieli, "nous" utilise le passif : me ostetaan au lieu de me ostamme.'
      }
    ],
    vocabulary: [
      { fi: 'puhua', fr: 'parler', puhekieli: 'puhua' },
      { fi: 'lukea', fr: 'lire', puhekieli: 'lukea' },
      { fi: 'kirjoittaa', fr: 'écrire', puhekieli: 'kirjottaa' },
      { fi: 'asua', fr: 'habiter', puhekieli: 'asua' },
      { fi: 'sanoa', fr: 'dire', puhekieli: 'sanoa' },
      { fi: 'ostaa', fr: 'acheter', puhekieli: 'ostaa' },
      { fi: 'antaa', fr: 'donner', puhekieli: 'antaa' },
      { fi: 'ottaa', fr: 'prendre', puhekieli: 'ottaa' },
      { fi: 'ymmärtää', fr: 'comprendre', puhekieli: 'ymmärtää' },
      { fi: 'suomea', fr: 'finnois (partitif)', puhekieli: 'suomee' },
      { fi: 'ranskaa', fr: 'français (partitif)', puhekieli: 'ranskaa' },
      { fi: 'englantia', fr: 'anglais (partitif)', puhekieli: 'englantia' },
      { fi: 'kirjaa', fr: 'livre (partitif)', puhekieli: 'kirjaa' },
      { fi: 'lehteä', fr: 'journal (partitif)', puhekieli: 'lehtee' }
    ]
  },
  {
    id: 'a1-7',
    level: 'A1',
    module: 'A1.2',
    title: 'Ruoka - La nourriture',
    description: 'Vocabulaire alimentaire et expressions au restaurant',
    sections: [
      {
        type: 'theory',
        title: 'Aliments de base',
        content: `La nourriture (ruoka) est essentielle pour survivre en Finlande ! Voici les mots les plus utiles.

---

### 🥖 Produits du quotidien

| Finnois | Français | Partitif |
|---------|----------|----------|
| **leipä** | pain | leipää |
| **voi** | beurre | voita |
| **juusto** | fromage | juustoa |
| **maito** | lait | maitoa |
| **muna** | oeuf | munaa |
| **sokeri** | sucre | sokeria |
| **suola** | sel | suolaa |

---

### 🥩 Viandes et poissons

| Finnois | Français |
|---------|----------|
| **liha** | viande |
| **kala** | poisson |
| **kana** | poulet |
| **nauta** | boeuf |
| **sika** | porc |
| **lohi** | saumon |

> 💡 **Culture** : Le saumon (lohi) est très populaire en Finlande. On le mange frais, fumé ou en soupe (lohikeitto) !`
      },
      {
        type: 'theory',
        title: 'Boissons',
        content: `### ☕ Les boissons (juomat)

| Finnois | Français | Note |
|---------|----------|------|
| **kahvi** | café | Le plus important ! |
| **tee** | thé | |
| **vesi** | eau | |
| **maito** | lait | |
| **mehu** | jus | |
| **olut** | bière | |
| **viini** | vin | |
| **kaakao** | chocolat chaud | |

---

### ☕ La culture du café

> 💡 **Saviez-vous ?** Les Finlandais sont les **plus grands consommateurs de café au monde** ! Environ 12 kg par personne par an.

| Expression | Français |
|------------|----------|
| **kahvitauko** | pause café |
| **kahvikuppi** | tasse de café |
| **musta kahvi** | café noir |
| **kahvi maidolla** | café au lait |

> ⚠️ En Finlande, on propose TOUJOURS du café aux invités. Refuser peut sembler impoli !`
      },
      {
        type: 'theory',
        title: 'Fruits et légumes',
        content: `### 🍎 Fruits (hedelmät)

| Finnois | Français |
|---------|----------|
| **omena** | pomme |
| **banaani** | banane |
| **appelsiini** | orange |
| **mansikka** | fraise |
| **mustikka** | myrtille |
| **vadelma** | framboise |
| **puolukka** | airelle |

> 💡 **Baies finlandaises** : Les myrtilles (mustikka), airelles (puolukka) et framboises (vadelma) poussent dans les forêts finlandaises. La cueillette est un passe-temps national !

---

### 🥕 Légumes (vihannekset)

| Finnois | Français |
|---------|----------|
| **peruna** | pomme de terre |
| **tomaatti** | tomate |
| **kurkku** | concombre |
| **sipuli** | oignon |
| **porkkana** | carotte |
| **salaatti** | salade |
| **paprika** | poivron |

> 💡 La **peruna** (pomme de terre) est l'accompagnement traditionnel finlandais, comme le riz en Asie.`
      },
      {
        type: 'theory',
        title: 'Au restaurant et au magasin',
        content: `### 🍽️ Commander au restaurant

| Finnois | Français |
|---------|----------|
| **Haluaisin...** | Je voudrais... |
| **Saisinko...?** | Pourrais-je avoir... ? |
| **Otan...** | Je prends... |
| **Yksi kahvi, kiitos** | Un café, s'il vous plaît |

---

### 🗣️ Dialogue au restaurant

| Finnois | Français |
|---------|----------|
| – Mitä saisi olla? | – Que puis-je vous servir ? |
| – Saisinko lohikeittoa? | – Pourrais-je avoir de la soupe au saumon ? |
| – Totta kai! Juotavaksi? | – Bien sûr ! À boire ? |
| – Vettä, kiitos. | – De l'eau, s'il vous plaît. |

---

### 🛒 Au supermarché

| Finnois | Français |
|---------|----------|
| **Paljonko tämä maksaa?** | Combien ça coûte ? |
| **Tämä maksaa viisi euroa** | Ça coûte 5 euros |
| **Saanko pussin?** | Puis-je avoir un sac ? |
| **Kassakuitin, kiitos** | Le reçu, s'il vous plaît |

> 💡 **Manger et boire** : Les verbes sont syödä (manger) et juoda (boire). Au présent : syön (je mange), juon (je bois).`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "pain" en finnois ?',
        options: ['maito', 'leipä', 'juusto', 'vesi'],
        correct: 1,
        explanation: 'Leipä = pain. Maito = lait, Juusto = fromage, Vesi = eau.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Que signifie "kahvi" ?',
        options: ['thé', 'eau', 'café', 'lait'],
        correct: 2,
        explanation: 'Kahvi = café. Les Finlandais sont les plus grands consommateurs de café au monde !'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "Je voudrais..." pour commander ?',
        options: ['Kiitos...', 'Haluaisin...', 'Anteeksi...', 'Hei...'],
        correct: 1,
        explanation: '"Haluaisin..." = Je voudrais... C\'est la formule polie pour commander.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quelle baie est très populaire en Finlande pour la cueillette ?',
        options: ['mansikka (fraise)', 'mustikka (myrtille)', 'banaani (banane)', 'appelsiini (orange)'],
        correct: 1,
        explanation: 'Les myrtilles (mustikka) poussent dans les forêts finlandaises. La cueillette est une tradition !'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Haluaisin ___ ja kahvia. (Je voudrais du pain et du café)',
        answer: 'leipää',
        hint: 'Pain au partitif (après haluaisin)'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Juon ___ joka aamu. (Je bois du café chaque matin)',
        answer: 'kahvia',
        hint: 'Café au partitif'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: '___ tämä maksaa? (Combien ça coûte ?)',
        answer: 'Paljonko',
        hint: 'Le mot interrogatif pour "combien"'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Juon maitoa ja syön leipää.',
        answer: 'Je bois du lait et je mange du pain.',
        alternatives: ['Je bois du lait et mange du pain.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Saisinko yhden kahvin, kiitos?',
        answer: 'Pourrais-je avoir un café, s\'il vous plaît ?',
        alternatives: ['Puis-je avoir un café, s\'il vous plaît ?']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Je voudrais de la soupe au saumon.',
        answer: 'Haluaisin lohikeittoa.',
        alternatives: ['Saisinko lohikeittoa?']
      }
    ],
    vocabulary: [
      { fi: 'ruoka', fr: 'nourriture', puhekieli: 'ruoka' },
      { fi: 'leipä', fr: 'pain', puhekieli: 'leipä' },
      { fi: 'voi', fr: 'beurre', puhekieli: 'voi' },
      { fi: 'juusto', fr: 'fromage', puhekieli: 'juusto' },
      { fi: 'maito', fr: 'lait', puhekieli: 'maito' },
      { fi: 'kahvi', fr: 'café', puhekieli: 'kahvi' },
      { fi: 'vesi', fr: 'eau', puhekieli: 'vesi' },
      { fi: 'lohi', fr: 'saumon', puhekieli: 'lohi' },
      { fi: 'syödä', fr: 'manger', puhekieli: 'syödä' },
      { fi: 'juoda', fr: 'boire', puhekieli: 'juoda' },
      { fi: 'omena', fr: 'pomme', puhekieli: 'omena' },
      { fi: 'mustikka', fr: 'myrtille', puhekieli: 'mustikka' },
      { fi: 'peruna', fr: 'pomme de terre', puhekieli: 'peruna' },
      { fi: 'haluaisin', fr: 'je voudrais', puhekieli: 'haluisin' },
      { fi: 'paljonko', fr: 'combien', puhekieli: 'paljonko' }
    ]
  },
  {
    id: 'a1-8',
    level: 'A1',
    module: 'A1.2',
    title: 'Missä? - Où ?',
    description: 'Les cas locatifs intérieurs (inessif, élatif, illatif)',
    sections: [
      {
        type: 'theory',
        title: 'Introduction aux cas locatifs',
        content: `En finnois, on utilise des **suffixes** pour indiquer la position. Pas de prépositions comme en français !

---

### 📍 Le concept : être DANS quelque chose

Ces 3 cas indiquent une position **à l'intérieur** de quelque chose :

| Question | Signification | Cas | Direction |
|----------|---------------|-----|-----------|
| **Missä?** | Où ? | Inessif | Position statique |
| **Mistä?** | D'où ? | Élatif | Sortie |
| **Mihin?** | Vers où ? | Illatif | Entrée |

---

### 🔧 Les suffixes

| Cas | Suffixe | Exemple |
|-----|---------|---------|
| **Inessif** | **-ssa / -ssä** | talo**ssa** (dans la maison) |
| **Élatif** | **-sta / -stä** | talo**sta** (de la maison) |
| **Illatif** | **-Vn / -hVn / -seen** | talo**on** (vers la maison) |

> 💡 **Harmonie vocalique** :
> - Voyelles arrière (a, o, u) → -ssa, -sta
> - Voyelles avant (ä, ö, y) → -ssä, -stä

> ⚠️ **L'illatif** est plus complexe. La voyelle finale se double souvent, ou on ajoute -seen.`
      },
      {
        type: 'theory',
        title: 'L\'inessif : être quelque part',
        content: `### 📍 L'inessif répond à "Missä?" (Où ?)

Suffixes : **-ssa** / **-ssä**

---

### 📊 Exemples avec des lieux

| Lieu | Nominatif | Inessif | Français |
|------|-----------|---------|----------|
| maison | talo | talo**ssa** | dans la maison |
| école | koulu | koulu**ssa** | à l'école |
| magasin | kauppa | kaupa**ssa** | au magasin |
| travail | työ | työ**ssä** | au travail |
| Helsinki | Helsinki | Helsingis**sä** | à Helsinki |
| Finlande | Suomi | Suome**ssa** | en Finlande |
| France | Ranska | Ranska**ssa** | en France |

---

### 🗣️ Phrases d'exemple

| Finnois | Français |
|---------|----------|
| Asun **Suomessa** | J'habite en Finlande |
| Olen **kotona** | Je suis à la maison |
| Hän on **töissä** | Il/elle est au travail |
| Kirja on **pöydällä** | Le livre est sur la table |

> 💡 **Attention** : Certains mots ont des formes spéciales comme **kotona** (à la maison) au lieu de kodissa.`
      },
      {
        type: 'theory',
        title: 'L\'élatif et l\'illatif : mouvement',
        content: `### 🚶 L'élatif : d'où vient-on ? (Mistä?)

Suffixes : **-sta** / **-stä**

| Finnois | Français |
|---------|----------|
| talo**sta** | de la maison |
| koulu**sta** | de l'école |
| Suome**sta** | de Finlande |
| Ranska**sta** | de France |
| Helsingi**stä** | d'Helsinki |

---

### 🚶‍♂️ L'illatif : où va-t-on ? (Mihin?)

L'illatif est plus complexe. Plusieurs règles :

| Règle | Exemple | Résultat |
|-------|---------|----------|
| Doublement de voyelle | talo + o | talo**on** |
| + -seen (après -i) | Helsinki | Helsink**iin** |
| + -aan/-ään | kauppa | kaupp**aan** |

| Finnois | Français |
|---------|----------|
| talo**on** | vers la maison |
| koulu**un** | à l'école (direction) |
| Suom**een** | en Finlande (direction) |
| Ransk**aan** | en France (direction) |
| Helsink**iin** | à Helsinki (direction) |

---

### 🗣️ Exemples

| Finnois | Français |
|---------|----------|
| Tulen **Ranskasta** | Je viens de France |
| Menen **kauppaan** | Je vais au magasin |
| Hän muuttaa **Suomeen** | Il/elle déménage en Finlande |`
      },
      {
        type: 'theory',
        title: 'Récapitulatif et phrases utiles',
        content: `### 📊 Tableau récapitulatif

| Lieu | Missä ? (où) | Mistä ? (d'où) | Mihin ? (vers) |
|------|--------------|----------------|----------------|
| **talo** | talossa | talosta | taloon |
| **kauppa** | kaupassa | kaupasta | kauppaan |
| **koulu** | koulussa | koulusta | kouluun |
| **Suomi** | Suomessa | Suomesta | Suomeen |
| **Helsinki** | Helsingissä | Helsingistä | Helsinkiin |
| **Ranska** | Ranskassa | Ranskasta | Ranskaan |
| **Pariisi** | Pariisissa | Pariisista | Pariisiin |

---

### 🗣️ Dialogues pratiques

**Où habites-tu ?**
| Finnois | Français |
|---------|----------|
| – Missä sä asut? | – Où tu habites ? |
| – Mä asun Helsingissä. | – J'habite à Helsinki. |

**D'où viens-tu ?**
| Finnois | Français |
|---------|----------|
| – Mistä sä tulet? | – D'où tu viens ? |
| – Mä tulen Ranskasta. | – Je viens de France. |

**Où vas-tu ?**
| Finnois | Français |
|---------|----------|
| – Mihin sä meet? | – Où tu vas ? |
| – Mä meen kauppaan. | – Je vais au magasin. |

> 💡 **En puhekieli** : "menen" devient souvent "meen".`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "dans la maison" ?',
        options: ['taloon', 'talossa', 'talosta', 'talo'],
        correct: 1,
        explanation: 'Talossa = dans la maison (inessif avec -ssa pour indiquer la position).'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quel cas utilise-t-on pour dire "d\'où" ?',
        options: ['Inessif', 'Élatif', 'Illatif', 'Partitif'],
        correct: 1,
        explanation: 'L\'élatif (suffixes -sta/-stä) répond à la question "Mistä?" (D\'où ?)'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "Je vais en Finlande" ?',
        options: ['Menen Suomessa', 'Menen Suomesta', 'Menen Suomeen', 'Menen Suomi'],
        correct: 2,
        explanation: 'Menen Suomeen = Je vais en Finlande. L\'illatif (Suomeen) indique la direction/destination.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quelle est la question pour "Où habites-tu ?" ?',
        options: ['Mihin asut?', 'Mistä asut?', 'Missä asut?', 'Mikä asut?'],
        correct: 2,
        explanation: '"Missä asut?" = Où habites-tu ? Missä indique une position statique.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Asun Helsin___. (J\'habite à Helsinki)',
        answer: 'gissä',
        hint: 'Inessif de Helsinki (attention au changement k→g)'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Menen kaup___. (Je vais au magasin)',
        answer: 'paan',
        hint: 'Illatif de kauppa'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Tulen Ranska___. (Je viens de France)',
        answer: 'sta',
        hint: 'Suffixe de l\'élatif'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Hän on työ___. (Il/elle est au travail)',
        answer: 'ssä',
        hint: 'Suffixe de l\'inessif (voyelles avant)'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Tulen Suomesta ja menen Ranskaan.',
        answer: 'Je viens de Finlande et je vais en France.',
        alternatives: ['Je viens de Finlande et vais en France.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Missä sä asut? - Mä asun Pariisissa.',
        answer: 'Où tu habites ? - J\'habite à Paris.',
        alternatives: ['Où habites-tu ? - J\'habite à Paris.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Je vais à l\'école.',
        answer: 'Menen kouluun.',
        alternatives: ['Mä meen kouluun.']
      },
      {
        type: 'exercise',
        exerciseType: 'cloze',
        instruction: 'Mets le mot entre parenthèses à la forme correcte :',
        sentence: 'Minä asun ___ ja käyn töissä Espoossa.',
        baseWord: 'Helsinki',
        answer: 'Helsingissä',
        translation: 'J\'habite à Helsinki et je travaille à Espoo.',
        explanation: 'Helsinki → Helsingissä (inessif). Attention au changement k → g !'
      },
      {
        type: 'exercise',
        exerciseType: 'cloze',
        instruction: 'Complète avec la forme correcte du lieu :',
        sentence: 'Menen aamulla ___ ja tulen illalla kotiin.',
        baseWord: 'koulu',
        answer: 'kouluun',
        translation: 'Je vais à l\'école le matin et je rentre à la maison le soir.',
        explanation: 'Koulu → kouluun (illatif avec doublement de la voyelle u).'
      },
      {
        type: 'exercise',
        exerciseType: 'cloze',
        instruction: 'Utilise le bon cas locatif :',
        sentence: 'Hän tulee ___ mutta muuttaa pian Ruotsiin.',
        baseWord: 'Suomi',
        answer: 'Suomesta',
        translation: 'Il/elle vient de Finlande mais déménage bientôt en Suède.',
        explanation: 'Suomi → Suomesta (élatif avec -sta pour indiquer l\'origine).'
      }
    ],
    vocabulary: [
      { fi: 'missä', fr: 'où (position)', puhekieli: 'missä' },
      { fi: 'mistä', fr: 'd\'où', puhekieli: 'mistä' },
      { fi: 'mihin', fr: 'vers où', puhekieli: 'mihin' },
      { fi: 'talo', fr: 'maison', puhekieli: 'talo' },
      { fi: 'kauppa', fr: 'magasin', puhekieli: 'kauppa' },
      { fi: 'koulu', fr: 'école', puhekieli: 'koulu' },
      { fi: 'työ', fr: 'travail', puhekieli: 'työ' },
      { fi: 'Suomi', fr: 'Finlande', puhekieli: 'Suomi' },
      { fi: 'Ranska', fr: 'France', puhekieli: 'Ranska' },
      { fi: 'tulla', fr: 'venir', puhekieli: 'tulla' },
      { fi: 'mennä', fr: 'aller', puhekieli: 'mennä' },
      { fi: 'asua', fr: 'habiter', puhekieli: 'asua' },
      { fi: 'kotona', fr: 'à la maison', puhekieli: 'kotona' },
      { fi: 'töissä', fr: 'au travail', puhekieli: 'töissä' }
    ]
  },
  {
    id: 'a1-9',
    level: 'A1',
    module: 'A1.3',
    title: 'Värit - Les couleurs',
    description: 'Les couleurs et les adjectifs de base',
    sections: [
      {
        type: 'theory',
        title: 'Les couleurs principales',
        content: `Les couleurs (värit) sont essentielles pour décrire le monde autour de vous !

---

### 🎨 Couleurs de base

| Finnois | Français | Puhekieli |
|---------|----------|-----------|
| **valkoinen** | blanc | valkonen |
| **musta** | noir | musta |
| **punainen** | rouge | punanen |
| **sininen** | bleu | sininen |
| **vihreä** | vert | vihree |
| **keltainen** | jaune | keltanen |

---

### 🌈 Autrescouleurs

| Finnois | Français |
|---------|----------|
| **oranssi** | orange |
| **ruskea** | brun / marron |
| **harmaa** | gris |
| **violetti** | violet |
| **pinkki** | rose |
| **turkoosi** | turquoise |
| **kulta** | or / doré |
| **hopea** | argent |

> 💡 **Astuce** : Les couleurs en "-inen" (punainen, sininen, keltainen) perdent le "-i" en puhekieli : punanen, keltanen.`
      },
      {
        type: 'theory',
        title: 'Les adjectifs en finnois',
        content: `### 📌 Position des adjectifs

En finnois, l'adjectif se place **AVANT** le nom (comme en anglais) :

| Finnois | Français |
|---------|----------|
| **punainen** auto | une voiture **rouge** |
| **sininen** talo | une maison **bleue** |
| **iso** koira | un **grand** chien |
| **pieni** kissa | un **petit** chat |

---

### 📊 Adjectifs courants

| Finnois | Français | Opposé |
|---------|----------|--------|
| **iso** | grand | pieni (petit) |
| **pieni** | petit | iso (grand) |
| **kaunis** | beau | ruma (laid) |
| **uusi** | nouveau | vanha (vieux) |
| **hyvä** | bon | huono (mauvais) |
| **kuuma** | chaud | kylmä (froid) |
| **nopea** | rapide | hidas (lent) |
| **helppo** | facile | vaikea (difficile) |

> ⚠️ **Important** : L'adjectif s'accorde en CAS avec le nom ! (On verra cela plus tard.)`
      },
      {
        type: 'theory',
        title: 'Décrire les choses',
        content: `### 🗣️ Phrases pour décrire

La structure de base : **[Sujet] on [adjectif]**

| Finnois | Français |
|---------|----------|
| Auto on **punainen** | La voiture est rouge |
| Talo on **iso** | La maison est grande |
| Koira on **pieni** | Le chien est petit |
| Taivas on **sininen** | Le ciel est bleu |

---

### ❓ Poser des questions sur la couleur

| Finnois | Français |
|---------|----------|
| **Minkä värinen** tämä on? | De quelle couleur est ceci ? |
| **Mikä väri** tämä on? | Quelle couleur est-ce ? |
| Se on punainen | C'est rouge |

---

### 🗣️ Dialogue exemple

| Finnois | Français |
|---------|----------|
| – Minkä värinen sun auto on? | – De quelle couleur est ta voiture ? |
| – Mun auto on sininen. | – Ma voiture est bleue. |
| – Onko se iso vai pieni? | – Est-elle grande ou petite ? |
| – Se on aika iso! | – Elle est assez grande ! |`
      },
      {
        type: 'theory',
        title: 'Vocabulaire pratique',
        content: `### 🏠 Couleurs dans la vie quotidienne

| Finnois | Français |
|---------|----------|
| musta kahvi | café noir |
| valkoinen viini | vin blanc |
| punainen valo | feu rouge |
| vihreä valo | feu vert |
| sininen taivas | ciel bleu |
| valkoiset hampaat | dents blanches |

---

### 🎯 Expressions avec les couleurs

| Finnois | Français littéral | Signification |
|---------|-------------------|---------------|
| **vihreä** korva | oreille verte | débutant |
| **musta** huumori | humour noir | humour noir |
| nähdä **punaista** | voir rouge | être en colère |

---

### 📝 Nuances de couleurs

| Finnois | Français |
|---------|----------|
| **tumma**sininen | bleu **foncé** |
| **vaalea**sininen | bleu **clair** |
| **kirkas** punainen | rouge **vif** |

> 💡 "Tumma" (foncé) et "vaalea" (clair) se combinent avec les couleurs.`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "rouge" en finnois ?',
        options: ['sininen', 'vihreä', 'punainen', 'keltainen'],
        correct: 2,
        explanation: 'Punainen = rouge. Sininen = bleu, Vihreä = vert, Keltainen = jaune.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Que signifie "sininen talo" ?',
        options: ['grande maison', 'maison bleue', 'petite maison', 'maison rouge'],
        correct: 1,
        explanation: 'Sininen = bleu, talo = maison. Donc "maison bleue".'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Où se place l\'adjectif en finnois ?',
        options: ['Après le nom', 'Avant le nom', 'N\'importe où', 'À la fin de la phrase'],
        correct: 1,
        explanation: 'En finnois, l\'adjectif se place AVANT le nom : "iso talo" (grande maison).'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quel est le contraire de "iso" (grand) ?',
        options: ['vanha', 'pieni', 'uusi', 'kaunis'],
        correct: 1,
        explanation: 'Pieni = petit, c\'est le contraire de iso (grand).'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: '___ koira on iso. (Le chien noir est grand)',
        answer: 'Musta',
        hint: 'Noir en finnois'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Auto on ___. (La voiture est rouge)',
        answer: 'punainen',
        hint: 'Rouge en finnois'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Taivas on ___ tänään. (Le ciel est bleu aujourd\'hui)',
        answer: 'sininen',
        hint: 'Bleu en finnois'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Minkä ___ sun auto on? (De quelle couleur est ta voiture ?)',
        answer: 'värinen',
        hint: 'Le mot pour "de couleur"'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'La petite maison est belle.',
        answer: 'Pieni talo on kaunis.',
        alternatives: ['Pieni talo on kaunis']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Mun koira on musta ja valkoinen.',
        answer: 'Mon chien est noir et blanc.',
        alternatives: ['Mon chien est blanc et noir.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'La grande voiture bleue.',
        answer: 'Iso sininen auto.',
        alternatives: ['Sininen iso auto.']
      }
    ],
    vocabulary: [
      { fi: 'väri', fr: 'couleur', puhekieli: 'väri' },
      { fi: 'punainen', fr: 'rouge', puhekieli: 'punanen' },
      { fi: 'sininen', fr: 'bleu', puhekieli: 'sininen' },
      { fi: 'vihreä', fr: 'vert', puhekieli: 'vihree' },
      { fi: 'keltainen', fr: 'jaune', puhekieli: 'keltanen' },
      { fi: 'musta', fr: 'noir', puhekieli: 'musta' },
      { fi: 'valkoinen', fr: 'blanc', puhekieli: 'valkonen' },
      { fi: 'harmaa', fr: 'gris', puhekieli: 'harmaa' },
      { fi: 'ruskea', fr: 'marron', puhekieli: 'ruskea' },
      { fi: 'iso', fr: 'grand', puhekieli: 'iso' },
      { fi: 'pieni', fr: 'petit', puhekieli: 'pieni' },
      { fi: 'kaunis', fr: 'beau', puhekieli: 'kaunis' },
      { fi: 'uusi', fr: 'nouveau', puhekieli: 'uus' },
      { fi: 'vanha', fr: 'vieux', puhekieli: 'vanha' },
      { fi: 'tumma', fr: 'foncé', puhekieli: 'tumma' },
      { fi: 'vaalea', fr: 'clair', puhekieli: 'vaalea' }
    ]
  },
  {
    id: 'a1-10',
    level: 'A1',
    module: 'A1.3',
    title: 'Koti - La maison',
    description: 'Les pièces et meubles de la maison',
    sections: [
      {
        type: 'theory',
        title: 'Types de logement',
        content: `En Finlande, le logement est très important. Commençons par les bases !

---

### 🏠 Types de logement

| Finnois | Français | Note |
|---------|----------|------|
| **koti** | maison / foyer | le "chez-soi" |
| **talo** | maison (bâtiment) | immeuble ou maison |
| **asunto** | appartement | le plus courant |
| **omakotitalo** | maison individuelle | littéralement "propre-maison" |
| **rivitalo** | maison mitoyenne | |
| **kerrostalo** | immeuble | |

---

### 📊 Expressions utiles

| Finnois | Français |
|---------|----------|
| **Minulla on asunto** | J'ai un appartement |
| **Asun kerrostalossa** | J'habite dans un immeuble |
| **Kotona** | À la maison |
| **Kotiin** | Vers la maison (mouvement) |

> 💡 **Koti vs Talo** : "Koti" est le foyer (concept), "talo" est le bâtiment physique.`
      },
      {
        type: 'theory',
        title: 'Les pièces de la maison',
        content: `### 🚪 Pièces principales (huoneet)

| Finnois | Français | Composition |
|---------|----------|-------------|
| **olohuone** | salon | olo (être) + huone |
| **makuuhuone** | chambre | makuu (coucher) + huone |
| **keittiö** | cuisine | |
| **kylpyhuone** | salle de bain | kylpy (bain) + huone |
| **vessa** / **WC** | toilettes | |
| **eteinen** | entrée | |
| **parveke** | balcon | |
| **sauna** | sauna | Essentiel en Finlande ! |

---

### 📐 Décrire son appartement

| Finnois | Français |
|---------|----------|
| **yksiö** | studio (1 pièce) |
| **kaksio** | 2 pièces |
| **kolmio** | 3 pièces |
| **neliö** | mètre carré |

> 💡 **Culture** : En Finlande, presque tous les appartements ont un **sauna** ! C'est un élément essentiel de la culture finlandaise.

> ⚠️ Les annonces immobilières disent par exemple "3h+k" = 3 huonetta + keittiö (3 pièces + cuisine)`
      },
      {
        type: 'theory',
        title: 'Les meubles',
        content: `### 🛋️ Meubles courants (huonekalut)

| Finnois | Français |
|---------|----------|
| **sohva** | canapé |
| **tuoli** | chaise |
| **pöytä** | table |
| **sänky** | lit |
| **kaappi** | armoire / placard |
| **hylly** | étagère |
| **kirjahylly** | bibliothèque |
| **lipasto** | commode |
| **nojatuoli** | fauteuil |

---

### 🏠 Éléments de la maison

| Finnois | Français |
|---------|----------|
| **ovi** | porte |
| **ikkuna** | fenêtre |
| **lattia** | sol |
| **katto** | plafond |
| **seinä** | mur |
| **lamppu** | lampe |
| **matto** | tapis |
| **verhot** | rideaux |`
      },
      {
        type: 'theory',
        title: 'Décrire où sont les choses',
        content: `### 📍 Localiser les objets

Rappel : On utilise l'**inessif** (-ssa/-ssä) pour dire "dans" :

| Finnois | Français |
|---------|----------|
| Sohva on **olohuoneessa** | Le canapé est dans le salon |
| Sänky on **makuuhuoneessa** | Le lit est dans la chambre |
| Ruoka on **keittiössä** | La nourriture est dans la cuisine |
| Olen **kotona** | Je suis à la maison |

---

### 🗣️ Dialogue : décrire son appartement

| Finnois | Français |
|---------|----------|
| – Millainen sun asunto on? | – Comment est ton appartement ? |
| – Mulla on kaksio. | – J'ai un 2 pièces. |
| – Onko siellä sauna? | – Il y a un sauna ? |
| – Joo, totta kai! | – Oui, bien sûr ! |
| – Kuinka monta neliötä? | – Combien de mètrescarrés ? |
| – Noin viisikymmentä. | – Environ 50. |

---

### 📝 Phrases utiles

| Finnois | Français |
|---------|----------|
| Missä on vessa? | Où sont les toilettes ? |
| Vessa on siellä | Les toilettes sont là-bas |
| Menen kotiin | Je rentre à la maison |
| Istun sohvalla | Je suis assis sur le canapé |

> 💡 "Siellä" = là-bas, "täällä" = ici`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "cuisine" en finnois ?',
        options: ['makuuhuone', 'olohuone', 'keittiö', 'kylpyhuone'],
        correct: 2,
        explanation: 'Keittiö = cuisine. Makuuhuone = chambre, Olohuone = salon, Kylpyhuone = salle de bain.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quelle est la différence entre "koti" et "talo" ?',
        options: ['Koti est plus grand', 'Koti = foyer, Talo = bâtiment', 'Pas de différence', 'Talo = appartement'],
        correct: 1,
        explanation: 'Koti est le foyer (concept de "chez-soi"), talo est le bâtiment physique.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "un 2 pièces" (appartement) ?',
        options: ['kaksiö', 'kaksio', 'kakshuone', 'kaksasunto'],
        correct: 1,
        explanation: 'Kaksio = 2 pièces. Yksiö = studio, Kolmio = 3 pièces.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quel élément est presque toujours présent dans un appartement finlandais ?',
        options: ['parveke (balcon)', 'sauna', 'puutarha (jardin)', 'autotalli (garage)'],
        correct: 1,
        explanation: 'Le sauna est essentiel en Finlande ! Presque tous les appartements en ont un.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Sänky on ___. (Le lit est dans la chambre)',
        answer: 'makuuhuoneessa',
        hint: 'Chambre à l\'inessif (-ssa)'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Sohva on ___. (Le canapé est dans le salon)',
        answer: 'olohuoneessa',
        hint: 'Salon à l\'inessif'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Menen ___. (Je vais à la maison)',
        answer: 'kotiin',
        hint: 'Maison à l\'illatif (mouvement vers)'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Missä on ___? (Où sont les toilettes ?)',
        answer: 'vessa',
        hint: 'Toilettes en finnois'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Minulla on iso asunto. Siellä on kolme huonetta.',
        answer: 'J\'ai un grand appartement. Il y a trois pièces.',
        alternatives: ['J\'ai un grand appartement. Il y a 3 pièces.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Mun asunnossa on sauna ja parveke.',
        answer: 'Mon appartement a un sauna et un balcon.',
        alternatives: ['Dans mon appartement il y a un sauna et un balcon.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'La table est dans la cuisine.',
        answer: 'Pöytä on keittiössä.',
        alternatives: ['Pöytä on keittiös.']
      }
    ],
    vocabulary: [
      { fi: 'koti', fr: 'maison / foyer', puhekieli: 'koti' },
      { fi: 'asunto', fr: 'appartement', puhekieli: 'asunto' },
      { fi: 'huone', fr: 'pièce / chambre', puhekieli: 'huone' },
      { fi: 'keittiö', fr: 'cuisine', puhekieli: 'keittiö' },
      { fi: 'olohuone', fr: 'salon', puhekieli: 'olohuone' },
      { fi: 'makuuhuone', fr: 'chambre', puhekieli: 'makuuhuone' },
      { fi: 'kylpyhuone', fr: 'salle de bain', puhekieli: 'kylpyhuone' },
      { fi: 'sauna', fr: 'sauna', puhekieli: 'sauna' },
      { fi: 'tuoli', fr: 'chaise', puhekieli: 'tuoli' },
      { fi: 'pöytä', fr: 'table', puhekieli: 'pöytä' },
      { fi: 'sänky', fr: 'lit', puhekieli: 'sänky' },
      { fi: 'sohva', fr: 'canapé', puhekieli: 'sohva' },
      { fi: 'ovi', fr: 'porte', puhekieli: 'ovi' },
      { fi: 'ikkuna', fr: 'fenêtre', puhekieli: 'ikkuna' },
      { fi: 'kotona', fr: 'à la maison', puhekieli: 'kotona' }
    ]
  },
  {
    id: 'a1-11',
    level: 'A1',
    module: 'A1.3',
    title: 'Aika - Le temps',
    description: 'Heures, jours et expressions temporelles',
    sections: [
      {
        type: 'theory',
        title: 'Demander et dire l\'heure',
        content: `En finnois, dire l'heure est un peu différent du français. Attention aux pièges !

---

### ⏰ Comment demander l'heure

| Finnois | Français |
|---------|----------|
| **Paljonko kello on?** | Quelle heure est-il ? |
| **Mitä kello on?** | Quelle heure est-il ? (informel) |

---

### 🕐 Les heures pleines

Structure : **Kello on** + nombre

| Heure | Finnois |
|-------|---------|
| 1:00 | Kello on **yksi** |
| 2:00 | Kello on **kaksi** |
| 3:00 | Kello on **kolme** |
| 12:00 | Kello on **kaksitoista** |

---

### 🕧 La demi-heure : ATTENTION !

> ⚠️ **Piège** : La demi-heure se dit par rapport à l'heure SUIVANTE !

| Heure | Finnois | Littéralement |
|-------|---------|---------------|
| 1:30 | **puoli kaksi** | demi deux |
| 2:30 | **puoli kolme** | demi trois |
| 3:30 | **puoli neljä** | demi quatre |

> 💡 **Astuce** : "Puoli kaksi" = demi de deux = 1h30 (on va vers 2h)`
      },
      {
        type: 'theory',
        title: 'Minutes et quarts d\'heure',
        content: `### ⏱️ Les quarts d'heure

| Finnois | Français | Exemple |
|---------|----------|---------|
| **varttia yli** | et quart | varttia yli kolme = 3h15 |
| **varttia vaille** | moins le quart | varttia vaille neljä = 3h45 |

---

### 📊 Les minutes

| Finnois | Français |
|---------|----------|
| viisi **yli** kolme | 3h05 (5 après 3) |
| kymmenen **yli** kolme | 3h10 |
| kaksikymmentä **yli** kolme | 3h20 |
| viisi **vaille** neljä | 3h55 (5 avant 4) |
| kymmenen **vaille** neljä | 3h50 |

> 💡 **"Yli"** = après/passé, **"vaille"** = avant/moins

---

### 🗣️ Exemples concrets

| Heure | Finnois |
|-------|---------|
| 8:15 | varttia yli kahdeksan |
| 9:30 | puoli kymmenen |
| 10:45 | varttia vaille yksitoista |
| 14:00 | kello on kaksi (ou neljätoista) |

> 💡 On utilise souvent le système 12h dans la vie quotidienne.`
      },
      {
        type: 'theory',
        title: 'Les jours de la semaine',
        content: `### 📅 Les jours (viikonpäivät)

| Finnois | Français | Astuce |
|---------|----------|--------|
| **maanantai** | lundi | maa = terre (lune en vieux nordique) |
| **tiistai** | mardi | du dieu Tyr |
| **keskiviikko** | mercredi | "milieu de semaine" |
| **torstai** | jeudi | du dieu Thor |
| **perjantai** | vendredi | du dieu Freya |
| **lauantai** | samedi | du vieux nordique |
| **sunnuntai** | dimanche | sun = soleil |

---

### 📆 Expressions avec les jours

| Finnois | Français |
|---------|----------|
| **tänään** | aujourd'hui |
| **huomenna** | demain |
| **eilen** | hier |
| **ylihuomenna** | après-demain |
| **toissapäivänä** | avant-hier |
| **viikonloppu** | week-end |
| **viikko** | semaine |

---

### 🗣️ Phrases pratiques

| Finnois | Français |
|---------|----------|
| Tänään on maanantai | Aujourd'hui c'est lundi |
| Huomenna on tiistai | Demain c'est mardi |
| Nähdään perjantaina! | On se voit vendredi ! |
| Mitä teet viikonloppuna? | Que fais-tu ce week-end ? |

> 💡 Pour dire "le lundi", on utilise l'**essif** : maanantai**na** = le lundi`
      },
      {
        type: 'theory',
        title: 'Moments de la journée et mois',
        content: `### 🌅 Moments de la journée

| Finnois | Français | Heure approximative |
|---------|----------|---------------------|
| **aamu** | matin | 6h - 10h |
| **aamupäivä** | matinée | 10h - 12h |
| **päivä** | jour / après-midi | 12h - 18h |
| **ilta** | soir | 18h - 22h |
| **yö** | nuit | 22h - 6h |

---

### 📅 Les mois (kuukaudet)

| Finnois | Français |
|---------|----------|
| **tammikuu** | janvier |
| **helmikuu** | février |
| **maaliskuu** | mars |
| **huhtikuu** | avril |
| **toukokuu** | mai |
| **kesäkuu** | juin |
| **heinäkuu** | juillet |
| **elokuu** | août |
| **syyskuu** | septembre |
| **lokakuu** | octobre |
| **marraskuu** | novembre |
| **joulukuu** | décembre |

> 💡 "Kuu" signifie "lune/mois". Joulukuu = le mois de Noël (joulu).

---

### 📝 Dire la date

| Finnois | Français |
|---------|----------|
| Tänään on 15. tammikuuta | Aujourd'hui c'est le 15 janvier |
| Syntymäpäiväni on 3. kesäkuuta | Mon anniversaire est le 3 juin |`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "lundi" en finnois ?',
        options: ['tiistai', 'maanantai', 'perjantai', 'sunnuntai'],
        correct: 1,
        explanation: 'Maanantai = lundi. Tiistai = mardi, Perjantai = vendredi.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Que signifie "puoli kaksi" ?',
        options: ['2h00', '2h30', '1h30', '12h30'],
        correct: 2,
        explanation: 'Puoli kaksi = 1h30. En finnois, la demi-heure se réfère à l\'heure SUIVANTE !'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "3h15" en finnois ?',
        options: ['puoli kolme', 'varttia yli kolme', 'varttia vaille kolme', 'kolme ja vartti'],
        correct: 1,
        explanation: 'Varttia yli kolme = 3h15 (un quart après 3).'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quel mois est "joulukuu" ?',
        options: ['janvier', 'juillet', 'décembre', 'juin'],
        correct: 2,
        explanation: 'Joulukuu = décembre (le mois de Noël - joulu = Noël).'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Kello on ___. (Il est trois heures)',
        answer: 'kolme',
        hint: 'Le chiffre 3'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Tänään on maanantai. ___ on tiistai. (Demain c\'est mardi)',
        answer: 'Huomenna',
        hint: 'Demain en finnois'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: '___ kaksi. (Il est 1h30)',
        answer: 'Puoli',
        hint: 'Demi en finnois'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Nähdään perjantai___! (On se voit vendredi !)',
        answer: 'na',
        hint: 'Suffixe de l\'essif pour indiquer "le jour"'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Tänään on perjantai. Huomenna on lauantai.',
        answer: 'Aujourd\'hui c\'est vendredi. Demain c\'est samedi.',
        alternatives: ['Aujourd\'hui on est vendredi. Demain on est samedi.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Paljonko kello on? - Kello on puoli yhdeksän.',
        answer: 'Quelle heure est-il ? - Il est 8h30.',
        alternatives: ['Quelle heure est-il ? - Il est huit heures et demie.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Que fais-tu demain soir ?',
        answer: 'Mitä teet huomenna illalla?',
        alternatives: ['Mitä sä teet huomenna illalla?']
      }
    ],
    vocabulary: [
      { fi: 'kello', fr: 'heure / horloge', puhekieli: 'kello' },
      { fi: 'aamu', fr: 'matin', puhekieli: 'aamu' },
      { fi: 'päivä', fr: 'jour', puhekieli: 'päivä' },
      { fi: 'ilta', fr: 'soir', puhekieli: 'ilta' },
      { fi: 'yö', fr: 'nuit', puhekieli: 'yö' },
      { fi: 'tänään', fr: 'aujourd\'hui', puhekieli: 'tänää' },
      { fi: 'huomenna', fr: 'demain', puhekieli: 'huomen' },
      { fi: 'eilen', fr: 'hier', puhekieli: 'eilen' },
      { fi: 'maanantai', fr: 'lundi', puhekieli: 'maanantai' },
      { fi: 'viikonloppu', fr: 'week-end', puhekieli: 'viikonloppu' },
      { fi: 'viikko', fr: 'semaine', puhekieli: 'viikko' },
      { fi: 'kuukausi', fr: 'mois', puhekieli: 'kuukausi' },
      { fi: 'puoli', fr: 'demi', puhekieli: 'puoli' },
      { fi: 'vartti', fr: 'quart d\'heure', puhekieli: 'vartti' },
      { fi: 'yli', fr: 'après / passé', puhekieli: 'yli' }
    ]
  },
  {
    id: 'a1-12',
    level: 'A1',
    module: 'A1.3',
    title: 'Minulla on - J\'ai',
    description: 'Exprimer la possession avec l\'adessif',
    sections: [
      {
        type: 'theory',
        title: 'Pas de verbe "avoir" en finnois !',
        content: `En finnois, il n'existe PAS de verbe "avoir". On utilise une structure différente !

---

### 💡 Le concept

Au lieu de dire "J'ai un chien", on dit littéralement **"Chez moi est un chien"** :

**Minulla on koira** = Chez-moi est chien = J'ai un chien

---

### 🔧 La structure

**Pronom à l'adessif (-lla/-llä)** + **on** + **objet**

| Pronom | Adessif | Exemple | Français |
|--------|---------|---------|----------|
| minä | **minulla** | Minulla on auto | J'ai une voiture |
| sinä | **sinulla** | Sinulla on kissa | Tu as un chat |
| hän | **hänellä** | Hänellä on lapsi | Il/elle a un enfant |
| me | **meillä** | Meillä on talo | Nous avons une maison |
| te | **teillä** | Teillä on koira | Vous avez un chien |
| he | **heillä** | Heillä on aikaa | Ils ont du temps |

> 💡 L'**adessif** est un cas qui signifie "sur/chez". Suffixe : **-lla/-llä**`
      },
      {
        type: 'theory',
        title: 'En puhekieli',
        content: `### 😊 Les formes parlées

| Kirjakieli | Puhekieli | Français |
|------------|-----------|----------|
| Minulla on | **Mulla on** | J'ai |
| Sinulla on | **Sulla on** | Tu as |
| Hänellä on | **Sillä on** | Il/elle a |
| Meillä on | **Meillä on** | On a |
| Teillä on | **Teillä on** | Vous avez |
| Heillä on | **Niillä on** | Ils ont |

---

### 🗣️ Exemples courants

| Puhekieli | Français |
|-----------|----------|
| **Mulla on nälkä** | J'ai faim |
| **Sulla on oikeus** | Tu as raison |
| **Sillä on kiire** | Il/elle est pressé(e) |
| **Mulla on idea!** | J'ai une idée ! |
| **Sulla on kauniit silmät** | Tu as de beaux yeux |

> 💡 **Expressions idiomatiques** : "Avoir faim" = "nälkä on" (la faim est chez moi), "avoir soif" = "jano on".`
      },
      {
        type: 'theory',
        title: 'La négation : "je n\'ai pas"',
        content: `### 🚫 Structure négative

**Pronom adessif** + **ei ole** + **objet au PARTITIF**

---

### 📊 Comparaison affirmatif / négatif

| Affirmatif | Négatif | Français |
|------------|---------|----------|
| Minulla on koira | Minulla **ei ole koiraa** | Je n'ai pas de chien |
| Sinulla on auto | Sinulla **ei ole autoa** | Tu n'as pas de voiture |
| Meillä on rahaa | Meillä **ei ole rahaa** | Nous n'avons pas d'argent |
| Hänellä on aikaa | Hänellä **ei ole aikaa** | Il/elle n'a pas le temps |

---

### ⚠️ Attention au partitif !

Après la négation, l'objet est au **partitif** :
- koira → koira**a**
- auto → auto**a**
- talo → talo**a**

---

### 😊 En puhekieli

| Kirjakieli | Puhekieli | Français |
|------------|-----------|----------|
| Minulla ei ole | **Mulla ei oo** | Je n'ai pas |
| Sinulla ei ole | **Sulla ei oo** | Tu n'as pas |

| Puhekieli | Français |
|-----------|----------|
| Mulla ei oo aikaa | Je n'ai pas le temps |
| Sulla ei oo oikeutta | Tu n'as pas raison |`
      },
      {
        type: 'theory',
        title: 'Questions et expressions',
        content: `### ❓ Poser des questions

| Finnois | Français |
|---------|----------|
| **Onko sinulla** koira? | As-tu un chien ? |
| **Onko sulla** aikaa? | Tu as le temps ? |
| **Onko teillä** lapsia? | Avez-vous des enfants ? |

---

### 🗣️ Dialogue exemple

| Finnois | Français |
|---------|----------|
| – Onko sulla lemmikkiä? | – Tu as un animal de compagnie ? |
| – Joo, mulla on kissa. Entä sulla? | – Oui, j'ai un chat. Et toi ? |
| – Mulla ei oo, mutta mä haluaisin koiran. | – Moi non, mais je voudrais un chien. |

---

### 📝 Expressions utiles avec "minulla on"

| Finnois | Français |
|---------|----------|
| Minulla on **nälkä** | J'ai faim |
| Minulla on **jano** | J'ai soif |
| Minulla on **kiire** | Je suis pressé(e) |
| Minulla on **kylmä** | J'ai froid |
| Minulla on **kuuma** | J'ai chaud |
| Minulla on **tylsää** | Je m'ennuie |
| Minulla on **hauskaa** | Je m'amuse |

> 💡 Ces expressions sont très courantes. Apprenez-les par coeur !`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "J\'ai une voiture" ?',
        options: ['Minä on auto', 'Minulla on auto', 'Minä olen auto', 'Minulle on auto'],
        correct: 1,
        explanation: 'Minulla on auto = J\'ai une voiture. On utilise l\'adessif (minulla) + on.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Pourquoi le finnois n\'a-t-il pas de verbe "avoir" ?',
        options: ['C\'est trop difficile', 'On utilise l\'adessif + on (être)', 'On utilise le génitif', 'Il existe mais est rare'],
        correct: 1,
        explanation: 'En finnois, on exprime la possession avec le pronom à l\'adessif + "on" (est).'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quel cas utilise-t-on après "ei ole" (ne pas avoir) ?',
        options: ['Nominatif', 'Génitif', 'Partitif', 'Inessif'],
        correct: 2,
        explanation: 'Après "ei ole", l\'objet est au partitif : "Minulla ei ole koiraa" (pas de chien).'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "J\'ai faim" en finnois ?',
        options: ['Minä olen nälkä', 'Minulla on nälkä', 'Minä nälkään', 'Nälkä minulla'],
        correct: 1,
        explanation: '"Minulla on nälkä" = J\'ai faim. Littéralement : "La faim est chez moi".'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: '___ on kaksi lasta. (Nous avons deux enfants)',
        answer: 'Meillä',
        hint: 'Nous à l\'adessif'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Minulla ei ole ___. (Je n\'ai pas de chien)',
        answer: 'koiraa',
        hint: 'Chien au partitif (après négation)'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Mulla on ___. (J\'ai soif)',
        answer: 'jano',
        hint: 'Soif en finnois'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: '___ sinulla aikaa? (As-tu le temps ?)',
        answer: 'Onko',
        hint: 'Forme interrogative de "on"'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Tu as un chat ?',
        answer: 'Onko sinulla kissa?',
        alternatives: ['Sinulla on kissa?', 'Sulla on kissa?', 'Onko sulla kissa?']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Mulla ei oo aikaa tänään.',
        answer: 'Je n\'ai pas le temps aujourd\'hui.',
        alternatives: ['Je n\'ai pas de temps aujourd\'hui.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Ils ont une grande maison.',
        answer: 'Heillä on iso talo.',
        alternatives: ['Niillä on iso talo.']
      }
    ],
    vocabulary: [
      { fi: 'minulla', fr: 'chez moi / j\'ai', puhekieli: 'mulla' },
      { fi: 'sinulla', fr: 'chez toi / tu as', puhekieli: 'sulla' },
      { fi: 'hänellä', fr: 'chez lui/elle', puhekieli: 'sillä' },
      { fi: 'meillä', fr: 'chez nous', puhekieli: 'meillä' },
      { fi: 'koira', fr: 'chien', puhekieli: 'koira' },
      { fi: 'kissa', fr: 'chat', puhekieli: 'kissa' },
      { fi: 'auto', fr: 'voiture', puhekieli: 'auto' },
      { fi: 'raha', fr: 'argent', puhekieli: 'raha' },
      { fi: 'aika', fr: 'temps', puhekieli: 'aika' },
      { fi: 'nälkä', fr: 'faim', puhekieli: 'nälkä' },
      { fi: 'jano', fr: 'soif', puhekieli: 'jano' },
      { fi: 'kiire', fr: 'être pressé', puhekieli: 'kiire' },
      { fi: 'lemmikki', fr: 'animal de compagnie', puhekieli: 'lemmikki' },
      { fi: 'idea', fr: 'idée', puhekieli: 'idea' },
      { fi: 'ongelma', fr: 'problème', puhekieli: 'ongelma' }
    ]
  },
  {
    id: 'a1-13',
    level: 'A1',
    module: 'A1.3',
    title: 'Kaupungilla - En ville',
    description: 'Lieux, directions et se déplacer en ville',
    sections: [
      {
        type: 'theory',
        title: 'Les lieux en ville',
        content: `Savoir se repérer en ville est essentiel ! Voici les endroits les plus importants.

---

### 🏙️ Lieux principaux

| Finnois | Français | À savoir |
|---------|----------|----------|
| **kaupunki** | ville | |
| **keskusta** | centre-ville | keski = milieu |
| **katu** | rue | |
| **tori** | place / marché | |
| **puisto** | parc | |

---

### 🏪 Services et commerces

| Finnois | Français |
|---------|----------|
| **kauppa** | magasin |
| **pankki** | banque |
| **posti** | poste |
| **apteekki** | pharmacie |
| **sairaala** | hôpital |
| **kirjasto** | bibliothèque |
| **ravintola** | restaurant |
| **kahvila** | café |
| **hotelli** | hôtel |
| **asema** | gare / station |

> 💡 **Culture** : Les bibliothèques (kirjasto) finlandaises sont excellentes et gratuites. On peut y emprunter même des instruments de musique !`
      },
      {
        type: 'theory',
        title: 'Demander son chemin',
        content: `### 🗣️ Comment demander

| Finnois | Français |
|---------|----------|
| **Anteeksi...** | Excusez-moi... |
| **Missä on...?** | Où est... ? |
| **Miten pääsen...?** | Comment aller à... ? |
| **Onko täällä lähellä...?** | Y a-t-il près d'ici... ? |

---

### 🗣️ Dialogue exemple

| Finnois | Français |
|---------|----------|
| – Anteeksi, missä on lähin apteekki? | – Excusez-moi, où est la pharmacie la plus proche ? |
| – Mene suoraan ja käänny vasemmalle. | – Allez tout droit et tournez à gauche. |
| – Kiitos! | – Merci ! |
| – Ole hyvä! | – De rien ! |

---

### 📍 Utiliser les cas locatifs

| Cas | Question | Exemple |
|-----|----------|---------|
| **Inessif** | Missä? (où) | Olen kaupa**ssa** (je suis au magasin) |
| **Illatif** | Mihin? (vers) | Menen pankk**iin** (je vais à la banque) |
| **Élatif** | Mistä? (d'où) | Tulen kirjasto**sta** (je viens de la bibliothèque) |`
      },
      {
        type: 'theory',
        title: 'Directions et orientation',
        content: `### 🧭 Directions de base

| Finnois | Français |
|---------|----------|
| **suoraan** | tout droit |
| **vasemmalle** | à gauche |
| **oikealle** | à droite |
| **takaisin** | en arrière |

---

### 📍 Position relative

| Finnois | Français |
|---------|----------|
| **lähellä** | près de |
| **kaukana** | loin de |
| **vieressä** | à côté de |
| **edessä** | devant |
| **takana** | derrière |
| **vastapäätä** | en face de |
| **keskellä** | au milieu de |
| **kulman takana** | au coin |

---

### 🗣️ Donner des instructions

| Finnois | Français |
|---------|----------|
| **Mene suoraan** | Va tout droit |
| **Käänny vasemmalle** | Tourne à gauche |
| **Jatka suoraan** | Continue tout droit |
| **Se on oikealla** | C'est à droite |
| **Näet sen heti** | Tu le verras tout de suite |`
      },
      {
        type: 'theory',
        title: 'Transports en ville',
        content: `### 🚌 Moyens de transport

| Finnois | Français |
|---------|----------|
| **bussi** | bus |
| **raitiovaunu** / **ratikka** | tramway |
| **metro** | métro |
| **juna** | train |
| **taksi** | taxi |
| **polkupyörä** | vélo |
| **auto** | voiture |

---

### 🎫 Expressions utiles

| Finnois | Français |
|---------|----------|
| Missä on bussipysäkki? | Où est l'arrêt de bus ? |
| Mikä bussi menee keskustaan? | Quel bus va au centre-ville ? |
| Paljonko lippu maksaa? | Combien coûte le ticket ? |
| Yksi lippu, kiitos | Un ticket, s'il vous plaît |

---

### 🗣️ Dialogue : prendre le bus

| Finnois | Français |
|---------|----------|
| – Anteeksi, meneekö tämä bussi Hakaniemeen? | – Excusez-moi, ce bus va-t-il à Hakaniemi ? |
| – Joo, menee. | – Oui, il y va. |
| – Kiitos! Yksi lippu, kiitos. | – Merci ! Un ticket, s'il vous plaît. |

> 💡 À Helsinki, on utilise l'application **HSL** pour les transports. Très pratique !`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "pharmacie" en finnois ?',
        options: ['pankki', 'posti', 'apteekki', 'sairaala'],
        correct: 2,
        explanation: 'Apteekki = pharmacie. Pankki = banque, Posti = poste, Sairaala = hôpital.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment demander "Où est la banque ?" ?',
        options: ['Mitä on pankki?', 'Missä on pankki?', 'Mikä on pankki?', 'Minne on pankki?'],
        correct: 1,
        explanation: '"Missä on pankki?" = Où est la banque ? Missä indique la position.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Que signifie "vasemmalle" ?',
        options: ['tout droit', 'à droite', 'à gauche', 'derrière'],
        correct: 2,
        explanation: 'Vasemmalle = à gauche. Oikealle = à droite, Suoraan = tout droit.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "tramway" en puhekieli ?',
        options: ['bussi', 'ratikka', 'juna', 'metro'],
        correct: 1,
        explanation: 'Ratikka est la forme puhekieli de raitiovaunu (tramway).'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Anteeksi, missä on ___? (Excusez-moi, où est la bibliothèque ?)',
        answer: 'kirjasto',
        hint: 'Bibliothèque en finnois'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Mene ___ ja käänny oikealle. (Va tout droit et tourne à droite)',
        answer: 'suoraan',
        hint: 'Tout droit en finnois'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Apteekki on pankki___. (La pharmacie est à côté de la banque)',
        answer: 'n vieressä',
        hint: 'Génitif + vieressä (à côté de)'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Menen keskusta___. (Je vais au centre-ville)',
        answer: 'an',
        hint: 'Suffixe de l\'illatif (mouvement vers)'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Mene suoraan ja käänny vasemmalle.',
        answer: 'Va tout droit et tourne à gauche.',
        alternatives: ['Allez tout droit et tournez à gauche.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Onko täällä lähellä kahvilaa?',
        answer: 'Y a-t-il un café près d\'ici ?',
        alternatives: ['Est-ce qu\'il y a un café près d\'ici ?']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'La gare est en face de l\'hôtel.',
        answer: 'Asema on hotellin vastapäätä.',
        alternatives: ['Asema on vastapäätä hotellia.']
      }
    ],
    vocabulary: [
      { fi: 'kaupunki', fr: 'ville', puhekieli: 'kaupunki' },
      { fi: 'keskusta', fr: 'centre-ville', puhekieli: 'keskusta' },
      { fi: 'katu', fr: 'rue', puhekieli: 'katu' },
      { fi: 'tori', fr: 'place / marché', puhekieli: 'tori' },
      { fi: 'kauppa', fr: 'magasin', puhekieli: 'kauppa' },
      { fi: 'pankki', fr: 'banque', puhekieli: 'pankki' },
      { fi: 'apteekki', fr: 'pharmacie', puhekieli: 'apteekki' },
      { fi: 'kirjasto', fr: 'bibliothèque', puhekieli: 'kirjasto' },
      { fi: 'asema', fr: 'gare / station', puhekieli: 'asema' },
      { fi: 'suoraan', fr: 'tout droit', puhekieli: 'suoraan' },
      { fi: 'vasemmalle', fr: 'à gauche', puhekieli: 'vasemmalle' },
      { fi: 'oikealle', fr: 'à droite', puhekieli: 'oikealle' },
      { fi: 'lähellä', fr: 'près de', puhekieli: 'lähellä' },
      { fi: 'vieressä', fr: 'à côté de', puhekieli: 'vieressä' },
      { fi: 'bussi', fr: 'bus', puhekieli: 'bussi' }
    ]
  },
  {
    id: 'a1-14',
    level: 'A1',
    module: 'A1.3',
    title: 'Haluan ja voin - Je veux et je peux',
    description: 'Les verbes modaux essentiels : haluta, voida, osata',
    sections: [
      {
        type: 'theory',
        title: 'Les trois verbes modaux',
        content: `Les verbes modaux sont essentiels pour exprimer ce qu'on veut, peut ou sait faire !

---

### 🎯 Les 3 verbes modaux de base

| Infinitif | Français | Usage |
|-----------|----------|-------|
| **haluta** | vouloir | désir, souhait |
| **voida** | pouvoir | capacité, permission |
| **osata** | savoir (faire) | compétence acquise |

---

### 📊 Haluta = vouloir

| Pronom | Kirjakieli | Puhekieli |
|--------|------------|-----------|
| minä | **haluan** | mä haluu(n) |
| sinä | **haluat** | sä haluu(t) |
| hän | **haluaa** | se haluu |
| me | **haluamme** | me halutaan |
| te | **haluatte** | te haluutte |
| he | **haluavat** | ne haluu |

> 💡 **Structure** : haluta + **infinitif** (verbe à l'infinitif)`
      },
      {
        type: 'theory',
        title: 'Voida et Osata',
        content: `### 📊 Voida = pouvoir

| Pronom | Kirjakieli | Puhekieli |
|--------|------------|-----------|
| minä | **voin** | mä voin |
| sinä | **voit** | sä voit |
| hän | **voi** | se voi |
| me | **voimme** | me voidaan |
| te | **voitte** | te voitte |
| he | **voivat** | ne voi |

---

### 📊 Osata = savoir faire

| Pronom | Kirjakieli | Puhekieli |
|--------|------------|-----------|
| minä | **osaan** | mä osaan |
| sinä | **osaat** | sä osaat |
| hän | **osaa** | se osaa |
| me | **osaamme** | me osataan |
| te | **osaatte** | te osaatte |
| he | **osaavat** | ne osaa |

---

### ⚠️ Voida vs Osata

| Finnois | Français | Explication |
|---------|----------|-------------|
| Voin puhua suomea | Je peux parler finnois | capacité physique/permission |
| Osaan puhua suomea | Je sais parler finnois | compétence apprise |`
      },
      {
        type: 'theory',
        title: 'Utilisation avec l\'infinitif',
        content: `### 🔧 Structure de base

**Verbe modal conjugué** + **infinitif** (+ objet au partitif)

---

### 🗣️ Exemples avec chaque verbe

**Haluta (vouloir) :**
| Finnois | Français |
|---------|----------|
| Haluan **oppia** suomea | Je veux apprendre le finnois |
| Haluan **mennä** kotiin | Je veux rentrer à la maison |
| Haluatko **syödä** jotain? | Tu veux manger quelque chose ? |

**Voida (pouvoir) :**
| Finnois | Français |
|---------|----------|
| Voin **auttaa** sinua | Je peux t'aider |
| Voitko **toistaa**? | Peux-tu répéter ? |
| En voi **tulla** | Je ne peux pas venir |

**Osata (savoir) :**
| Finnois | Français |
|---------|----------|
| Osaan **puhua** englantia | Je sais parler anglais |
| Osaatko **uida**? | Sais-tu nager ? |
| En osaa **laulaa** | Je ne sais pas chanter |`
      },
      {
        type: 'theory',
        title: 'Forme polie et négation',
        content: `### 🎩 Le conditionnel (forme polie)

Pour être poli, on utilise le **conditionnel** :

| Infinitif | Je voudrais / pourrais |
|-----------|------------------------|
| haluta | **haluaisin** |
| voida | **voisin** |

| Finnois | Français |
|---------|----------|
| **Haluaisin** kahvia | Je voudrais du café |
| **Voisitko** auttaa? | Pourrais-tu aider ? |
| **Haluaisitko** tulla? | Voudrais-tu venir ? |

---

### 🚫 La négation

| Affirmatif | Négatif |
|------------|---------|
| Haluan mennä | **En halua** mennä |
| Voin auttaa | **En voi** auttaa |
| Osaan uida | **En osaa** uida |

---

### 😊 En puhekieli

| Kirjakieli | Puhekieli |
|------------|-----------|
| Haluaisin kahvia | Mä haluisin kahvii |
| Voisitko auttaa? | Voisiksä auttaa? |
| En osaa puhua | Mä en osaa puhuu |

> 💡 **En puhekieli**, le "-n" final disparaît souvent : haluan → haluu, osaan → osaa`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "Je veux" en finnois ?',
        options: ['voin', 'osaan', 'haluan', 'täytyy'],
        correct: 2,
        explanation: 'Haluan = Je veux. Voin = Je peux, Osaan = Je sais (faire).'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quelle est la différence entre "voin" et "osaan" ?',
        options: ['Aucune différence', 'Voin = capacité, Osaan = compétence', 'Voin est formel, Osaan informel', 'Osaan = capacité, Voin = compétence'],
        correct: 1,
        explanation: 'Voin = je peux (capacité/permission), Osaan = je sais faire (compétence apprise).'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "Je voudrais" (forme polie) ?',
        options: ['Haluan', 'Haluaisin', 'Haluamme', 'Haluavat'],
        correct: 1,
        explanation: 'Haluaisin = Je voudrais (conditionnel de haluta, forme polie).'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "Je ne sais pas nager" ?',
        options: ['En voi uida', 'En osaa uida', 'Ei osaa uida', 'En halua uida'],
        correct: 1,
        explanation: 'En osaa uida = Je ne sais pas nager. "Osata" exprime une compétence apprise.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: '___ puhua suomea? (Sais-tu parler finnois ?)',
        answer: 'Osaatko',
        hint: 'Osata conjugué pour sinä + suffixe interrogatif -ko'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Mä ___ oppia suomee. (Je veux apprendre le finnois - puhekieli)',
        answer: 'haluu',
        hint: 'Forme puhekieli de "haluan"'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: '___ auttaa sinua. (Je peux t\'aider)',
        answer: 'Voin',
        hint: 'Voida conjugué pour minä'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: '___ kahvia, kiitos. (Je voudrais du café, s\'il vous plaît)',
        answer: 'Haluaisin',
        hint: 'Forme polie (conditionnel) de haluta'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Haluaisin oppia suomea. Voitko auttaa minua?',
        answer: 'Je voudrais apprendre le finnois. Peux-tu m\'aider ?',
        alternatives: ['Je voudrais apprendre le finnois. Tu peux m\'aider ?']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'En osaa laulaa, mutta osaan soittaa kitaraa.',
        answer: 'Je ne sais pas chanter, mais je sais jouer de la guitare.',
        alternatives: ['Je ne sais pas chanter mais je sais jouer de la guitare.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Voudrais-tu venir demain ?',
        answer: 'Haluaisitko tulla huomenna?',
        alternatives: ['Haluisiksä tulla huomenna?']
      }
    ],
    vocabulary: [
      { fi: 'haluta', fr: 'vouloir', puhekieli: 'haluta' },
      { fi: 'voida', fr: 'pouvoir', puhekieli: 'voida' },
      { fi: 'osata', fr: 'savoir (faire)', puhekieli: 'osata' },
      { fi: 'oppia', fr: 'apprendre', puhekieli: 'oppia' },
      { fi: 'auttaa', fr: 'aider', puhekieli: 'auttaa' },
      { fi: 'ymmärtää', fr: 'comprendre', puhekieli: 'ymmärtää' },
      { fi: 'tulla', fr: 'venir', puhekieli: 'tulla' },
      { fi: 'mennä', fr: 'aller', puhekieli: 'mennä' },
      { fi: 'uida', fr: 'nager', puhekieli: 'uida' },
      { fi: 'haluaisin', fr: 'je voudrais', puhekieli: 'haluisin' },
      { fi: 'voisitko', fr: 'pourrais-tu', puhekieli: 'voisiksä' },
      { fi: 'tietenkin', fr: 'bien sûr', puhekieli: 'tietenkin' },
      { fi: 'ehkä', fr: 'peut-être', puhekieli: 'ehkä' },
      { fi: 'totta kai', fr: 'bien sûr', puhekieli: 'totta kai' }
    ]
  },
  {
    id: 'a1-15',
    level: 'A1',
    module: 'A1.3',
    title: 'Partitiivin perusteet - Bases du partitif',
    description: 'Introduction au cas partitif, un des cas les plus utilisés en finnois',
    sections: [
      {
        type: 'theory',
        title: 'Qu\'est-ce que le partitif?',
        content: `### 🎯 Le cas partitif - Partitiivi

Le **partitif** est l'un des cas les plus importants et les plus utilisés en finnois. Il correspond souvent aux articles **"du", "de la", "des"** en français.

---

### 📋 Quand utilise-t-on le partitif?

| Situation | Exemple finnois | Traduction |
|-----------|-----------------|------------|
| **Quantité indéfinie** | Juon **kahvia** | Je bois **du** café |
| **Après les nombres (sauf 1)** | kaksi **koiraa** | deux **chiens** |
| **Après la négation** | En puhu **suomea** | Je ne parle pas **finnois** |
| **Action en cours** | Luen **kirjaa** | Je lis **un livre** (en cours) |
| **Après "paljon" (beaucoup)** | paljon **rahaa** | beaucoup **d'argent** |

---

### 🗣️ Dialogue au café

**Tarjoilija:** Mitä saisi olla?
*Que désirez-vous?*

**Asiakas:** Kahvia, kiitos. Ja voileipää.
*Du café, s'il vous plaît. Et un sandwich.*

**Tarjoilija:** Haluatko maitoa kahviin?
*Voulez-vous du lait dans le café?*

**Asiakas:** Kyllä, vähän maitoa.
*Oui, un peu de lait.*

> 💡 **Astuce** : Le partitif est très fréquent avec la nourriture et les boissons car on exprime souvent une quantité indéfinie.`
      },
      {
        type: 'theory',
        title: 'Formation du partitif',
        content: `### 📝 Règles de formation du partitif

La formation dépend de la dernière lettre du mot.

---

### 📋 Mots terminant par une voyelle → +a/ä

| Nominatif | Partitif | Traduction |
|-----------|----------|------------|
| **koira** | koira**a** | chien |
| **talo** | talo**a** | maison |
| **kirja** | kirja**a** | livre |
| **kahvi** | kahvi**a** | café |
| **pöytä** | pöytä**ä** | table |
| **työ** | työ**tä** | travail |

---

### 📋 Mots terminant par une consonne → +ta/tä

| Nominatif | Partitif | Traduction |
|-----------|----------|------------|
| **puhelin** | puhelin**ta** | téléphone |
| **avain** | avain**ta** | clé |
| **ystävätär** | ystävätär**tä** | amie |

---

### 📋 Mots en -nen → -sta/stä

| Nominatif | Partitif | Traduction |
|-----------|----------|------------|
| **suomalainen** | suomalai**sta** | finlandais |
| **punainen** | punai**sta** | rouge |
| **iloinen** | iloi**sta** | joyeux |

> ⚠️ **Attention** : Ces mots changent -nen en -sta/-stä. C'est une exception importante!

---

### 🎵 L'harmonie vocalique

| Voyelles du mot | Suffixe |
|-----------------|---------|
| Arrière (a, o, u) | **-a, -ta** |
| Avant (ä, ö, y) | **-ä, -tä** |

> 💡 **Astuce** : Si le mot contient ä, ö ou y, utilisez toujours -ä ou -tä.`
      },
      {
        type: 'theory',
        title: 'Le partitif après les nombres',
        content: `### 🔢 Nombres et partitif

En finnois, après un nombre (sauf 1), le nom se met au **partitif singulier**.

---

### 📋 Exemples avec les nombres

| Nombre | Exemple | Traduction |
|--------|---------|------------|
| yksi (1) | yksi **koira** | un chien (nominatif!) |
| kaksi (2) | kaksi **koiraa** | deux chiens |
| kolme (3) | kolme **taloa** | trois maisons |
| neljä (4) | neljä **kissaa** | quatre chats |
| viisi (5) | viisi **kirjaa** | cinq livres |
| kymmenen (10) | kymmenen **euroa** | dix euros |
| sata (100) | sata **vuotta** | cent ans |

---

### 🛒 Au marché - Torilla

**Myyjä:** Paljonko?
*Combien?*

**Ostaja:** Kaksi kiloa perunaa, kiitos.
*Deux kilos de pommes de terre, s'il vous plaît.*

**Myyjä:** Muuta?
*Autre chose?*

**Ostaja:** Kolme omenaa ja viisi banaania.
*Trois pommes et cinq bananes.*

**Myyjä:** Viisi euroa yhteensä.
*Cinq euros au total.*

> 💡 **Astuce** : Contrairement au français où on dit "deux chien**s**" (pluriel), en finnois c'est "kaksi koira**a**" (partitif singulier).

---

### 🗣️ En puhekieli (langue parlée)

| Kirjakieli | Puhekieli | Sens |
|------------|-----------|------|
| kaksi kahvia | kaks kahvii | deux cafés |
| kolme vuotta | kolme vuotta | trois ans |
| viisi euroa | viis euroo | cinq euros |`
      },
      {
        type: 'theory',
        title: 'Le partitif dans les négations',
        content: `### ❌ Partitif et négation

Après une **négation**, le complément d'objet se met au partitif.

---

### 📋 Affirmatif vs Négatif

| Affirmatif | Négatif | Traduction négative |
|------------|---------|---------------------|
| Minulla on auto | Minulla ei ole **autoa** | Je n'ai pas de voiture |
| Puhun suomea | En puhu **suomea** | Je ne parle pas finnois |
| Juon kahvia | En juo **kahvia** | Je ne bois pas de café |
| Syön leipää | En syö **leipää** | Je ne mange pas de pain |
| Näen talon | En näe **taloa** | Je ne vois pas la maison |

---

### 🗣️ Dialogue - Ruokavaliorajoituksia (Restrictions alimentaires)

**A:** Syötkö lihaa?
*Tu manges de la viande?*

**B:** En syö lihaa. Olen kasvissyöjä.
*Je ne mange pas de viande. Je suis végétarien.*

**A:** Entä kalaa?
*Et du poisson?*

**B:** En syö kalaa. En juo myöskään maitoa.
*Je ne mange pas de poisson. Je ne bois pas non plus de lait.*

**A:** Juotko kahvia?
*Tu bois du café?*

**B:** Kyllä juon! Paljon kahvia!
*Oui, j'en bois! Beaucoup de café!*

> 💡 **Astuce** : En finnois, même quand on répond "non" à une question, le verbe négatif suffit souvent : "Syötkö lihaa?" - "En." (Non / Je n'en mange pas).

---

### 📋 Expressions utiles avec la négation

| Finnois | Français |
|---------|----------|
| Ei mitään | Rien / De rien |
| En tiedä mitään | Je ne sais rien |
| Minulla ei ole aikaa | Je n'ai pas le temps |
| Minulla ei ole rahaa | Je n'ai pas d'argent |
| En ymmärrä mitään | Je ne comprends rien |`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quel est le partitif de "koira" (chien)?',
        options: ['koiran', 'koiraa', 'koirassa', 'koiralle'],
        correct: 1,
        explanation: 'Koira + a = koiraa. On ajoute -a pour les mots terminant par une voyelle.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "deux maisons" en finnois?',
        options: ['kaksi talo', 'kaksi taloa', 'kaksi talot', 'kaksi talon'],
        correct: 1,
        explanation: 'Après un nombre (sauf 1), on utilise le partitif singulier : kaksi taloa.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quel est le partitif de "suomalainen" (finlandais)?',
        options: ['suomalaista', 'suomalainen', 'suomalaisena', 'suomalaisia'],
        correct: 0,
        explanation: 'Les mots en -nen changent en -sta/-stä au partitif : suomalainen → suomalaista.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Juon ___. (Je bois du café)',
        answer: 'kahvia',
        hint: 'Café au partitif (kahvi + a)'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Minulla on kolme ___. (J\'ai trois chats)',
        answer: 'kissaa',
        hint: 'Chat au partitif (kissa + a)'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'En puhu ___. (Je ne parle pas finnois)',
        answer: 'suomea',
        hint: 'Finnois au partitif'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Haluatko ___? (Veux-tu de l\'eau?)',
        answer: 'vettä',
        hint: 'Eau au partitif'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Syön leipää ja juon maitoa.',
        answer: 'Je mange du pain et je bois du lait.',
        alternatives: ['Je mange du pain et bois du lait.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Minulla ei ole rahaa.',
        answer: 'Je n\'ai pas d\'argent.',
        alternatives: ['Je n\'ai pas d\'argent']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Deux cafés, s\'il vous plaît.',
        answer: 'Kaksi kahvia, kiitos.',
        alternatives: ['Kaksi kahvia kiitos', 'Kaks kahvia, kiitos']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Je n\'ai pas le temps.',
        answer: 'Minulla ei ole aikaa.',
        alternatives: ['Mul ei oo aikaa', 'Mulla ei ole aikaa']
      }
    ],
    vocabulary: [
      { fi: 'kahvia', fr: 'du café (partitif)', puhekieli: 'kahvii' },
      { fi: 'maitoa', fr: 'du lait (partitif)', puhekieli: 'maitoo' },
      { fi: 'leipää', fr: 'du pain (partitif)', puhekieli: 'leipää' },
      { fi: 'vettä', fr: 'de l\'eau (partitif)', puhekieli: 'vettä' },
      { fi: 'suomea', fr: 'du finnois (partitif)', puhekieli: 'suomee' },
      { fi: 'ruokaa', fr: 'de la nourriture (partitif)', puhekieli: 'ruokaa' },
      { fi: 'aikaa', fr: 'du temps (partitif)', puhekieli: 'aikaa' },
      { fi: 'rahaa', fr: 'de l\'argent (partitif)', puhekieli: 'rahaa' },
      { fi: 'paljon', fr: 'beaucoup', puhekieli: 'paljon' },
      { fi: 'vähän', fr: 'un peu', puhekieli: 'vähä' },
      { fi: 'lihaa', fr: 'de la viande (partitif)', puhekieli: 'lihaa' },
      { fi: 'kalaa', fr: 'du poisson (partitif)', puhekieli: 'kalaa' },
      { fi: 'perunaa', fr: 'des pommes de terre (partitif)', puhekieli: 'perunaa' },
      { fi: 'mitään', fr: 'rien (partitif)', puhekieli: 'mitää' },
      { fi: 'euroa', fr: 'euros (partitif)', puhekieli: 'euroo' }
    ]
  },
  // ============= NIVEAU A2 =============
  {
    id: 'a2-1',
    level: 'A2',
    module: 'A2.1',
    title: 'Imperfekti - Le passé',
    description: 'Conjugaison au passé simple en finnois',
    sections: [
      {
        type: 'theory',
        title: 'Introduction à l\'imparfait',
        content: `### 🕐 L'imparfait finnois - Imperfekti

L'imparfait (imperfekti) est le temps principal pour parler du **passé** en finnois. Il correspond au passé composé et à l'imparfait français.

---

### 📋 Formation générale

La règle de base : **radical + i + terminaison personnelle**

| Pronom | Présent | Imparfait | Traduction |
|--------|---------|-----------|------------|
| **minä** | puhun | puhu**i**n | je parlais / j'ai parlé |
| **sinä** | puhut | puhu**i**t | tu parlais / tu as parlé |
| **hän** | puhuu | puhu**i** | il/elle parlait |
| **me** | puhumme | puhu**i**mme | nous parlions |
| **te** | puhutte | puhu**i**tte | vous parliez |
| **he** | puhuvat | puhu**i**vat | ils/elles parlaient |

---

### 🗣️ Dialogue - Eilinen päivä (La journée d'hier)

**Liisa:** Mitä teit eilen?
*Qu'est-ce que tu as fait hier?*

**Matti:** Kävin kaupassa ja sitten söin lounaaksi pizzaa.
*Je suis allé au magasin et ensuite j'ai mangé une pizza pour le déjeuner.*

**Liisa:** Missä söit?
*Où as-tu mangé?*

**Matti:** Söin uudessa ravintolassa keskustassa.
*J'ai mangé dans un nouveau restaurant en ville.*

> 💡 **Astuce** : En finnois, le même temps (imperfekti) couvre ce que le français exprime avec le passé composé ET l'imparfait. Le contexte détermine la nuance.`
      },
      {
        type: 'theory',
        title: 'Changements de voyelles',
        content: `### 🔄 Les transformations voyelle + i

Quand on ajoute le **-i** de l'imparfait, certaines voyelles se combinent ou changent.

---

### 📋 Règles de transformation

| Voyelle finale | + i devient | Exemple |
|----------------|-------------|---------|
| **a** | **oi** | sanoa → san**oi**n (j'ai dit) |
| **ä** | **öi** | lähteä → läh**di**n (je suis parti) |
| **e** | **ei** ou **i** | lukea → lu**i**n (j'ai lu) |
| **u** | **ui** | nukkua → nukku**i**n (j'ai dormi) |
| **y** | **yi** | häilyä → häily**i**n (j'ai oscillé) |
| **i** | **i** (reste) | oppia → opp**i**n (j'ai appris) |
| **o** | **oi** | sanoa → san**oi**n |

---

### 📋 Exemples concrets

| Infinitif | Présent (minä) | Imparfait (minä) | Sens |
|-----------|----------------|------------------|------|
| **puhua** | puhun | puhu**i**n | parler |
| **sanoa** | sanon | san**oi**n | dire |
| **lukea** | luen | lu**i**n | lire |
| **nukkua** | nukun | nukku**i**n | dormir |
| **oppia** | opin | op**i**n | apprendre |

> ⚠️ **Attention** : La combinaison a+i → oi est très fréquente. "Asua" (habiter) devient "asuin", pas "asuain".`
      },
      {
        type: 'theory',
        title: 'Verbes irréguliers au passé',
        content: `### ⭐ Verbes irréguliers importants

Certains verbes très courants ont des formes irrégulières à l'imparfait.

---

### 📋 Conjugaison complète des verbes essentiels

**Olla (être) - Le plus important!**

| Pronom | Imparfait | Traduction |
|--------|-----------|------------|
| minä | **olin** | j'étais |
| sinä | **olit** | tu étais |
| hän | **oli** | il/elle était |
| me | **olimme** | nous étions |
| te | **olitte** | vous étiez |
| he | **olivat** | ils/elles étaient |

---

### 📋 Autresverbes irréguliers courants

| Infinitif | Minä | Sens | Particularité |
|-----------|------|------|---------------|
| **mennä** | menin | je suis allé | radical men- |
| **tulla** | tulin | je suis venu | radical tul- |
| **tehdä** | tein | j'ai fait | radical te- |
| **nähdä** | näin | j'ai vu | radical nä- |
| **syödä** | söin | j'ai mangé | radical sö- |
| **juoda** | join | j'ai bu | radical jo- |
| **saada** | sain | j'ai reçu | radical sa- |
| **käydä** | kävin | je suis allé (visite) | radical käv- |

> 💡 **Astuce** : Ces verbes perdent leur terminaison -dä/-da et utilisent un radical court + i.`
      },
      {
        type: 'theory',
        title: 'Expressions de temps au passé',
        content: `### 📅 Marqueurs temporels du passé

Pour situer une action dans le passé, utilisez ces expressions.

---

### 📋 Vocabulaire temporel

| Finnois | Français | Exemple |
|---------|----------|---------|
| **eilen** | hier | Eilen kävin kaupassa. |
| **toissapäivänä** | avant-hier | Toissapäivänä satoi. |
| **viime viikolla** | la semaine dernière | Viime viikolla olin sairas. |
| **viime kuussa** | le mois dernier | Viime kuussa muutin. |
| **viime vuonna** | l'année dernière | Viime vuonna matkustin. |
| **ennen** | avant / autrefois | Ennen asuin Pariisissa. |
| **silloin** | alors / à ce moment | Silloin olin nuori. |
| **kaksi päivää sitten** | il y a deux jours | Näin hänet kaksi päivää sitten. |

---

### 🗣️ En puhekieli (langue parlée)

| Kirjakieli | Puhekieli | Sens |
|------------|-----------|------|
| Minä olin | Mä olin | J'étais |
| Minä menin | Mä menin | Je suis allé |
| Me menimme | Me mentiin | Nous sommes allés |
| He söivät | Ne söi | Ils ont mangé |
| Minä näin | Mä näin | J'ai vu |

> 💡 **Astuce** : En puhekieli, "me" (nous) utilise souvent le passif : "Me mentiin" au lieu de "Me menimme".

---

### 🗣️ Dialogue - Viime loma (Les dernières vacances)

**A:** Missä olit viime lomalla?
*Où étais-tu pendant tes dernières vacances?*

**B:** Olin Espanjassa kaksi viikkoa.
*J'étais en Espagne pendant deux semaines.*

**A:** Mitä teit siellä?
*Qu'est-ce que tu as fait là-bas?*

**B:** Kävin rannalla joka päivä ja söin hyvää ruokaa.
*J'allais à la plage tous les jours et je mangeais de la bonne nourriture.*`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "j\'étais" en finnois?',
        options: ['olen', 'olin', 'oli', 'olemme'],
        correct: 1,
        explanation: 'Olin = j\'étais. C\'est l\'imparfait de "olla" pour minä.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quel est l\'imparfait de "sanoa" (dire) pour minä?',
        options: ['sanain', 'sanoin', 'sanuin', 'sanovin'],
        correct: 1,
        explanation: 'Sanoa → sanoin. La voyelle a + i devient oi.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "j\'ai fait" en finnois?',
        options: ['teen', 'tein', 'tehin', 'tekin'],
        correct: 1,
        explanation: 'Tehdä → tein. C\'est un verbe irrégulier avec le radical te-.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Eilen ___ kaupassa. (Hier je suis allé au magasin)',
        answer: 'menin',
        hint: 'Imparfait de mennä'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Viime viikolla ___ sairas. (La semaine dernière j\'étais malade)',
        answer: 'olin',
        hint: 'Imparfait de olla'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Mitä ___ eilen illalla? (Qu\'as-tu fait hier soir?)',
        answer: 'teit',
        hint: 'Imparfait de tehdä pour sinä'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: '___ hyvän kirjan viime kuussa. (J\'ai lu un bon livre le mois dernier)',
        answer: 'Luin',
        hint: 'Imparfait de lukea'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Eilen söin ravintolassa ja join kahvia.',
        answer: 'Hier j\'ai mangé au restaurant et j\'ai bu du café.',
        alternatives: ['Hier j\'ai mangé au restaurant et bu du café.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Viime vuonna asuimme Helsingissä.',
        answer: 'L\'année dernière nous habitions à Helsinki.',
        alternatives: ['L\'an dernier nous habitions à Helsinki.', 'L\'année dernière nous avons habité à Helsinki.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'J\'ai vu un film hier.',
        answer: 'Näin elokuvan eilen.',
        alternatives: ['Eilen näin elokuvan.', 'Mä näin elokuvan eilen.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Où étais-tu la semaine dernière?',
        answer: 'Missä olit viime viikolla?',
        alternatives: ['Missä sä olit viime viikolla?']
      },
      {
        type: 'exercise',
        exerciseType: 'cloze',
        instruction: 'Conjugue les verbes au passé :',
        sentence: 'Eilen {0} kotona ja {1} kirjaa.',
        blanks: [
          { baseWord: 'olla (minä)', answer: 'olin' },
          { baseWord: 'lukea (minä)', answer: 'luin' }
        ],
        translation: 'Hier j\'étais à la maison et je lisais un livre.',
        explanation: 'Olla → olin, lukea → luin. Les deux verbes prennent le marqueur -i- de l\'imparfait.'
      },
      {
        type: 'exercise',
        exerciseType: 'cloze',
        instruction: 'Mets les verbes à l\'imparfait :',
        sentence: 'Me {0} ravintolassa ja {1} hyvää ruokaa.',
        blanks: [
          { baseWord: 'käydä (me)', answer: 'kävimme', alternatives: ['käytiin'] },
          { baseWord: 'syödä (me)', answer: 'söimme', alternatives: ['syötiin'] }
        ],
        translation: 'Nous sommes allés au restaurant et avons mangé de la bonne nourriture.',
        explanation: 'Käydä → kävimme (ou käytiin en puhekieli), syödä → söimme (ou syötiin).'
      },
      {
        type: 'exercise',
        exerciseType: 'cloze',
        instruction: 'Conjugue le verbe correctement :',
        sentence: 'Viime kesänä ___ paljon.',
        baseWord: 'matkustaa (minä)',
        answer: 'matkustin',
        translation: 'L\'été dernier j\'ai beaucoup voyagé.',
        explanation: 'Matkustaa → matkustin : le -aa devient -i- à l\'imparfait.'
      }
    ],
    vocabulary: [
      { fi: 'olin', fr: 'j\'étais', puhekieli: 'olin' },
      { fi: 'menin', fr: 'je suis allé', puhekieli: 'menin' },
      { fi: 'tulin', fr: 'je suis venu', puhekieli: 'tulin' },
      { fi: 'tein', fr: 'j\'ai fait', puhekieli: 'tein' },
      { fi: 'söin', fr: 'j\'ai mangé', puhekieli: 'söin' },
      { fi: 'join', fr: 'j\'ai bu', puhekieli: 'join' },
      { fi: 'näin', fr: 'j\'ai vu', puhekieli: 'näin' },
      { fi: 'luin', fr: 'j\'ai lu', puhekieli: 'luin' },
      { fi: 'kävin', fr: 'je suis allé (visite)', puhekieli: 'kävin' },
      { fi: 'sain', fr: 'j\'ai reçu', puhekieli: 'sain' },
      { fi: 'eilen', fr: 'hier', puhekieli: 'eilen' },
      { fi: 'toissapäivänä', fr: 'avant-hier', puhekieli: 'toissapäivänä' },
      { fi: 'viime viikolla', fr: 'la semaine dernière', puhekieli: 'viime viikol' },
      { fi: 'viime vuonna', fr: 'l\'année dernière', puhekieli: 'viime vuon' },
      { fi: 'silloin', fr: 'alors / à ce moment', puhekieli: 'sillon' }
    ]
  },
  {
    id: 'a2-2',
    level: 'A2',
    module: 'A2.1',
    title: 'Ulkopaikallissijat - Cas locatifs extérieurs',
    description: 'Adessif, ablatif et allatif - les cas "sur" et "à la surface de"',
    sections: [
      {
        type: 'theory',
        title: 'Introduction aux cas extérieurs',
        content: `### 🌍 Les cas locatifs extérieurs

En plus des cas intérieurs (-ssa/-sta/-Vn) vus en A1, le finnois a trois cas **extérieurs** qui expriment une position "sur" ou "à la surface de" quelque chose.

---

### 📋 Les trois cas extérieurs

| Question | Cas | Suffixe | Sens | Exemple |
|----------|-----|---------|------|---------|
| **Missä?** (où?) | Adessif | **-lla/-llä** | sur, à | pöydä**llä** (sur la table) |
| **Mistä?** (d'où?) | Ablatif | **-lta/-ltä** | de (provenance) | pöydä**ltä** (de la table) |
| **Minne?** (vers où?) | Allatif | **-lle** | vers, sur (direction) | pöydä**lle** (sur la table →) |

---

### 🔄 Comparaison : Intérieurs vs Extérieurs

| Type | Statique | Provenance | Direction |
|------|----------|------------|-----------|
| **Intérieurs** (dedans) | -ssa/-ssä | -sta/-stä | -Vn |
| **Extérieurs** (dessus) | -lla/-llä | -lta/-ltä | -lle |

**Exemples concrets :**
- Talossa (dans la maison) vs Pöydällä (sur la table)
- Talosta (de la maison) vs Pöydältä (de la table)
- Taloon (dans la maison →) vs Pöydälle (sur la table →)

> 💡 **Astuce** : Les cas extérieurs ont tous un **double L** : -lla, -lta, -lle. Facile à retenir!`
      },
      {
        type: 'theory',
        title: 'Utilisation avec les surfaces',
        content: `### 🪑 Les surfaces et positions ouvertes

Les cas extérieurs s'utilisent pour les surfaces plates ou les positions "sur" quelque chose.

---

### 📋 Exemples avec des surfaces

| Adessif (sur) | Ablatif (de) | Allatif (vers) |
|---------------|--------------|----------------|
| pöydä**llä** (sur la table) | pöydä**ltä** | pöydä**lle** |
| lattia**lla** (sur le sol) | lattia**lta** | lattia**lle** |
| tuoli**lla** (sur la chaise) | tuoli**lta** | tuoli**lle** |
| seinä**llä** (sur le mur) | seinä**ltä** | seinä**lle** |
| katolla (sur le toit) | katolta | katolle |

---

### 🗣️ Dialogue - Kotona (À la maison)

**Äiti:** Missä avaimet ovat?
*Où sont les clés?*

**Lapsi:** Ne ovat pöydällä.
*Elles sont sur la table.*

**Äiti:** Ei ole. Katso lattialta!
*Non. Regarde par terre!*

**Lapsi:** Löysin! Ne olivat sohvalla.
*J'ai trouvé! Elles étaient sur le canapé.*

**Äiti:** Laita ne avainkoukuklle, kiitos.
*Mets-les sur le porte-clés, s'il te plaît.*

> 💡 **Astuce** : En français on dit "sur la chaise" mais aussi "assis sur la chaise". En finnois, c'est toujours l'adessif : "tuolilla istun" (je suis assis sur la chaise).`
      },
      {
        type: 'theory',
        title: 'Lieux avec cas extérieurs',
        content: `### 📍 Certains lieux utilisent les cas extérieurs

Certains endroits, même s'ils semblent "fermés", utilisent traditionnellement les cas extérieurs en finnois.

---

### 📋 Lieux courants avec cas extérieurs

| Lieu | Adessif | Ablatif | Allatif |
|------|---------|---------|---------|
| **tori** (place/marché) | tori**lla** | tori**lta** | tori**lle** |
| **asema** (gare) | asema**lla** | asema**lta** | asema**lle** |
| **pysäkki** (arrêt) | pysäki**llä** | pysäki**ltä** | pysäki**lle** |
| **yliopisto** (université) | yliopisto**lla** | yliopisto**lta** | yliopisto**lle** |
| **koulu** (école) | koulu**lla** | koulu**lta** | koulu**lle** |
| **posti** (poste) | posti**lla** | posti**lta** | posti**lle** |
| **kadulla** (dans la rue) | kadu**lla** | kadu**lta** | kadul**le** |

---

### ⚠️ Exceptions importantes

| Lieu | Forme | Explication |
|------|-------|-------------|
| **töissä** (au travail) | Inessif pluriel! | Exception historique |
| **kotona** (à la maison) | Forme spéciale | Pas d'adessif standard |
| **ulkona** (dehors) | Forme spéciale | Pas d'adessif standard |

> 💡 **Astuce** : Les gares, arrêts et places de marché sont considérés comme des espaces "ouverts" en finnois, d'où les cas extérieurs.

---

### 🗣️ En puhekieli

| Kirjakieli | Puhekieli | Sens |
|------------|-----------|------|
| asemalla | asemal | à la gare |
| pysäkillä | pysäkil | à l'arrêt |
| torilla | toril | au marché |
| yliopistolla | yliopistol | à l'université |`
      },
      {
        type: 'theory',
        title: 'Adessif pour la possession',
        content: `### 👐 L'adessif pour exprimer la possession

L'adessif a une utilisation importante : exprimer **qui possède quelque chose**.

---

### 📋 Structure de la possession

**Sujet (adessif) + on + objet**

| Finnois | Français |
|---------|----------|
| **Minulla** on auto. | J'ai une voiture. |
| **Sinulla** on koira. | Tu as un chien. |
| **Hänellä** on lapsia. | Il/elle a des enfants. |
| **Meillä** on talo. | Nous avons une maison. |
| **Teillä** on kysymys? | Vous avez une question? |
| **Heillä** on ongelma. | Ils ont un problème. |

---

### 📋 À la négative

| Affirmatif | Négatif |
|------------|---------|
| Minulla on auto. | Minulla **ei ole** autoa. |
| Hänellä on aikaa. | Hänellä **ei ole** aikaa. |

---

### 🗣️ Dialogue - Lemmikkejä (Animaux de compagnie)

**A:** Onko sinulla lemmikkejä?
*Tu as des animaux de compagnie?*

**B:** Kyllä, minulla on koira ja kaksi kissaa.
*Oui, j'ai un chien et deux chats.*

**A:** Onko koirallasi nimi?
*Ton chien a-t-il un nom?*

**B:** Kyllä, sen nimi on Musti.
*Oui, il s'appelle Musti.*

> 💡 **Astuce** : Remarquez "koirallasi" = "ton chien" (littéralement "sur ton chien"). Le possessif s'ajoute après l'adessif!

---

### 🗣️ En puhekieli

| Kirjakieli | Puhekieli | Sens |
|------------|-----------|------|
| Minulla on | Mul on / Mulla on | J'ai |
| Sinulla on | Sul on / Sulla on | Tu as |
| Hänellä on | Sil on / Sillä on | Il/elle a |
| Meillä on | Meil on | Nous avons |`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "sur la table"?',
        options: ['pöytään', 'pöydässä', 'pöydällä', 'pöydältä'],
        correct: 2,
        explanation: 'Pöydällä = sur la table (adessif). C\'est un cas extérieur car la table est une surface.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quel cas utilise-t-on pour "à la gare"?',
        options: ['asemassa (inessif)', 'asemalla (adessif)', 'asemaan (illatif)', 'asemalta (ablatif)'],
        correct: 1,
        explanation: 'La gare (asema) utilise les cas extérieurs : asemalla (à la gare).'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "J\'ai un chien"?',
        options: ['Minä on koira', 'Minulla on koira', 'Minussa on koira', 'Minulle on koira'],
        correct: 1,
        explanation: 'Pour la possession, on utilise l\'adessif : Minulla on koira.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Kirja on pöydä___. (Le livre est sur la table)',
        answer: 'llä',
        hint: 'Adessif de pöytä'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Tavataan asema___. (On se retrouve à la gare)',
        answer: 'lla',
        hint: 'Adessif de asema'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Otan avaimet pöydä___. (Je prends les clés de la table)',
        answer: 'ltä',
        hint: 'Ablatif de pöytä (provenance)'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Laitan kirjan hylly___. (Je mets le livre sur l\'étagère)',
        answer: 'lle',
        hint: 'Allatif de hylly (direction)'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Tavataan torilla kello viisi.',
        answer: 'On se retrouve au marché à cinq heures.',
        alternatives: ['Retrouvons-nous au marché à 5 heures.', 'Rendez-vous au marché à cinq heures.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Minulla ei ole aikaa tänään.',
        answer: 'Je n\'ai pas le temps aujourd\'hui.',
        alternatives: ['Je n\'ai pas de temps aujourd\'hui.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Les clés sont sur la table.',
        answer: 'Avaimet ovat pöydällä.',
        alternatives: ['Avaimet on pöydällä.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Tu as des enfants?',
        answer: 'Onko sinulla lapsia?',
        alternatives: ['Onko sulla lapsia?', 'Sinulla on lapsia?']
      }
    ],
    vocabulary: [
      { fi: 'pöydällä', fr: 'sur la table', puhekieli: 'pöydäl' },
      { fi: 'lattialla', fr: 'sur le sol', puhekieli: 'lattial' },
      { fi: 'tuolilla', fr: 'sur la chaise', puhekieli: 'tuolil' },
      { fi: 'seinällä', fr: 'sur le mur', puhekieli: 'seinäl' },
      { fi: 'torilla', fr: 'au marché', puhekieli: 'toril' },
      { fi: 'asemalla', fr: 'à la gare', puhekieli: 'asemal' },
      { fi: 'pysäkillä', fr: 'à l\'arrêt', puhekieli: 'pysäkil' },
      { fi: 'yliopistolla', fr: 'à l\'université', puhekieli: 'yliopistol' },
      { fi: 'koululla', fr: 'à l\'école', puhekieli: 'koulul' },
      { fi: 'kadulla', fr: 'dans la rue', puhekieli: 'kadul' },
      { fi: 'töissä', fr: 'au travail', puhekieli: 'töis' },
      { fi: 'kotona', fr: 'à la maison', puhekieli: 'koton' },
      { fi: 'ulkona', fr: 'dehors', puhekieli: 'ulkon' },
      { fi: 'minulla', fr: 'j\'ai (litt. sur moi)', puhekieli: 'mul/mulla' },
      { fi: 'sinulla', fr: 'tu as', puhekieli: 'sul/sulla' }
    ]
  },
  {
    id: 'a2-3',
    level: 'A2',
    module: 'A2.1',
    title: 'Perfekti - Le parfait',
    description: 'Actions passées avec un lien au présent',
    sections: [
      {
        type: 'theory',
        title: 'Introduction au parfait',
        content: `### ⏰ Le parfait finnois - Perfekti

Le **parfait** (perfekti) exprime une action passée qui a un **lien avec le présent** ou dont les conséquences sont encore actuelles.

---

### 📋 Formation du parfait

**Structure :** olla (au présent) + participe passé (-nut/-nyt)

| Pronom | Olla | + Participe | Traduction |
|--------|------|-------------|------------|
| **minä** | olen | puhunut | j'ai parlé |
| **sinä** | olet | puhunut | tu as parlé |
| **hän** | on | puhunut | il/elle a parlé |
| **me** | olemme | puhuneet | nous avons parlé |
| **te** | olette | puhuneet | vous avez parlé |
| **he** | ovat | puhuneet | ils/elles ont parlé |

> ⚠️ **Attention** : Au pluriel (me, te, he), le participe prend la forme -neet/-nyet!

---

### 🗣️ Dialogue - Kokemuksia (Expériences)

**Anna:** Oletko koskaan käynyt Suomessa?
*Es-tu déjà allé en Finlande?*

**Pierre:** Kyllä, olen käynyt siellä kaksi kertaa.
*Oui, j'y suis allé deux fois.*

**Anna:** Oletko nähnyt revontulia?
*As-tu vu les aurores boréales?*

**Pierre:** En ole nähnyt vielä. Haluaisin nähdä!
*Je n'en ai pas encore vu. J'aimerais en voir!*

> 💡 **Astuce** : Le parfait est souvent utilisé avec "koskaan" (jamais/déjà) pour parler d'expériences de vie.`
      },
      {
        type: 'theory',
        title: 'Formation du participe passé',
        content: `### 📝 Comment former le participe passé?

Le participe passé se termine en **-nut/-nyt** (singulier) ou **-neet/-nyet** (pluriel).

---

### 📋 Règles de formation

| Type de verbe | Formation | Exemple |
|---------------|-----------|---------|
| **Type 1** (-a/-ä) | radical + nut/nyt | puhua → puhu**nut** |
| **Type 2** (-da/-dä) | radical + nut/nyt | syödä → syö**nyt** |
| **Type 3** (-la/-na/-ra) | radical + lut/nut/rut | tulla → tul**lut** |
| **Type 4** (-ta/-tä) | radical + nnut/nnyt | tavata → tavan**nut** |

---

### 📋 Participes passés courants (à mémoriser)

| Infinitif | Participe (sing.) | Participe (plur.) | Sens |
|-----------|-------------------|-------------------|------|
| **olla** | ollut | olleet | avoir été |
| **tehdä** | tehnyt | tehneet | avoir fait |
| **nähdä** | nähnyt | nähneet | avoir vu |
| **tulla** | tullut | tulleet | être venu |
| **mennä** | mennyt | menneet | être allé |
| **syödä** | syönyt | syöneet | avoir mangé |
| **juoda** | juonut | juoneet | avoir bu |
| **saada** | saanut | saaneet | avoir reçu |
| **käydä** | käynyt | käyneet | être allé (visite) |
| **oppia** | oppinut | oppineet | avoir appris |

> 💡 **Astuce** : Les verbes en -dä/-da perdent le d et prennent directement -nut/-nyt.`
      },
      {
        type: 'theory',
        title: 'Imparfait vs Parfait',
        content: `### 🔄 Quand utiliser l'imparfait ou le parfait?

C'est une distinction importante en finnois!

---

### 📋 Comparaison

| Temps | Usage | Exemple | Traduction |
|-------|-------|---------|------------|
| **Imparfait** | Action passée terminée, datée | Eilen **söin** pizzaa. | Hier j'ai mangé de la pizza. |
| **Parfait** | Expérience, résultat présent | **Olen syönyt**. | J'ai mangé (donc je n'ai plus faim). |

---

### 📋 Exemples détaillés

**Imparfait (imperfekti) :**
- Eilen **kävin** kaupassa. (Hier je suis allé au magasin.)
- Viime vuonna **asuin** Pariisissa. (L'an dernier j'habitais à Paris.)

**Parfait (perfekti) :**
- **Olen käynyt** Suomessa. (Je suis allé en Finlande - expérience.)
- **Olen asunut** Pariisissa. (J'ai habité à Paris - dans ma vie.)

---

### 🗣️ Dialogue - Työnhaku (Recherche d'emploi)

**Haastattelija:** Mitä olet opiskellut?
*Qu'avez-vous étudié?*

**Hakija:** Olen opiskellut kieliä yliopistossa.
*J'ai étudié les langues à l'université.*

**Haastattelija:** Oletko työskennellyt ulkomailla?
*Avez-vous travaillé à l'étranger?*

**Hakija:** Kyllä, olen työskennellyt Ranskassa kaksi vuotta.
*Oui, j'ai travaillé en France pendant deux ans.*

> 💡 **Astuce** : Dans un entretien d'embauche, on utilise souvent le parfait car on parle de son expérience globale, pas d'un moment précis.`
      },
      {
        type: 'theory',
        title: 'Le parfait en puhekieli',
        content: `### 🗣️ Le parfait dans la langue parlée

En puhekieli, le parfait se simplifie considérablement.

---

### 📋 Transformations courantes

| Kirjakieli | Puhekieli | Traduction |
|------------|-----------|------------|
| Minä olen tehnyt | Mä oon **tehny** | J'ai fait |
| Sinä olet nähnyt | Sä oot **nähny** | Tu as vu |
| Hän on syönyt | Se on **syöny** | Il/elle a mangé |
| Me olemme menneet | Me ollaan **menty** | Nous sommes allés |
| He ovat tulleet | Ne on **tullu** | Ils sont venus |

> ⚠️ **Attention** : En puhekieli, le -t final du participe disparaît souvent!

---

### 📋 Avec la négation

| Affirmatif | Négatif |
|------------|---------|
| Olen nähnyt | **En ole** nähnyt |
| Olet tehnyt | **Et ole** tehnyt |
| On syönyt | **Ei ole** syönyt |

**En puhekieli :**
- Mä en oo nähny = Je n'ai pas vu
- Sä et oo tehny = Tu n'as pas fait

---

### 📋 Adverbes fréquents avec le parfait

| Finnois | Français | Exemple |
|---------|----------|---------|
| **jo** | déjà | Olen jo syönyt. (J'ai déjà mangé.) |
| **vielä** | encore | En ole vielä syönyt. (Je n'ai pas encore mangé.) |
| **koskaan** | jamais/déjà | Oletko koskaan käynyt? (Es-tu déjà allé?) |
| **usein** | souvent | Olen usein käynyt siellä. |
| **monta kertaa** | plusieurs fois | Olen käynyt monta kertaa. |

> 💡 **Astuce** : "Koskaan" change de sens selon le contexte : "jamais" dans une phrase négative, "déjà" dans une question.`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "J\'ai fait" en finnois (parfait)?',
        options: ['tein', 'olen tehnyt', 'teen', 'tekisin'],
        correct: 1,
        explanation: 'Olen tehnyt = J\'ai fait (parfait). Tein = Je fis (imparfait).'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quel est le participe passé de "nähdä" (voir)?',
        options: ['nähnyt', 'nähdyt', 'nähnut', 'nähdänyt'],
        correct: 0,
        explanation: 'Nähdä → nähnyt. Le -dä disparaît et on ajoute -nyt.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "Nous avons mangé" en finnois?',
        options: ['Me olemme syönyt', 'Me olemme syöneet', 'Me olimme syöneet', 'Me olet syönyt'],
        correct: 1,
        explanation: 'Au pluriel, le participe prend la forme -neet : olemme syöneet.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Oletko ___ Suomessa? (As-tu habité en Finlande?)',
        answer: 'asunut',
        hint: 'Participe passé de asua'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'En ole ___ häntä. (Je ne l\'ai pas vu.)',
        answer: 'nähnyt',
        hint: 'Participe passé de nähdä'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'He ovat ___ Suomeen. (Ils sont venus en Finlande.)',
        answer: 'tulleet',
        hint: 'Participe passé pluriel de tulla'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Oletko jo ___ aamiaista? (As-tu déjà pris le petit-déjeuner?)',
        answer: 'syönyt',
        hint: 'Participe passé de syödä'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Olen opiskellut suomea kaksi vuotta.',
        answer: 'J\'ai étudié le finnois pendant deux ans.',
        alternatives: ['J\'étudie le finnois depuis deux ans.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Oletko koskaan käynyt Helsingissä?',
        answer: 'Es-tu déjà allé à Helsinki?',
        alternatives: ['Tu es déjà allé à Helsinki?', 'As-tu déjà visité Helsinki?']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'J\'ai déjà mangé.',
        answer: 'Olen jo syönyt.',
        alternatives: ['Mä oon jo syöny.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Nous n\'avons pas encore vu le film.',
        answer: 'Emme ole vielä nähneet elokuvaa.',
        alternatives: ['Me ei olla vielä nähty elokuvaa.']
      }
    ],
    vocabulary: [
      { fi: 'olen tehnyt', fr: 'j\'ai fait', puhekieli: 'oon tehny' },
      { fi: 'olen nähnyt', fr: 'j\'ai vu', puhekieli: 'oon nähny' },
      { fi: 'olen ollut', fr: 'j\'ai été', puhekieli: 'oon ollu' },
      { fi: 'olen tullut', fr: 'je suis venu', puhekieli: 'oon tullu' },
      { fi: 'olen mennyt', fr: 'je suis allé', puhekieli: 'oon menny' },
      { fi: 'olen syönyt', fr: 'j\'ai mangé', puhekieli: 'oon syöny' },
      { fi: 'olen käynyt', fr: 'je suis allé (visite)', puhekieli: 'oon käyny' },
      { fi: 'olen oppinut', fr: 'j\'ai appris', puhekieli: 'oon oppinu' },
      { fi: 'jo', fr: 'déjà', puhekieli: 'jo' },
      { fi: 'vielä', fr: 'encore / pas encore', puhekieli: 'viel' },
      { fi: 'koskaan', fr: 'jamais / déjà (question)', puhekieli: 'koskaan' },
      { fi: 'usein', fr: 'souvent', puhekieli: 'usein' },
      { fi: 'monta kertaa', fr: 'plusieurs fois', puhekieli: 'monta kertaa' },
      { fi: 'kerran', fr: 'une fois', puhekieli: 'kerran' },
      { fi: 'kaksi kertaa', fr: 'deux fois', puhekieli: 'kaks kertaa' }
    ]
  },
  {
    id: 'a2-4',
    level: 'A2',
    module: 'A2.1',
    title: 'Konditionaali - Le conditionnel',
    description: 'Exprimer des souhaits, des hypothèses et la politesse',
    sections: [
      {
        type: 'theory',
        title: 'Introduction au conditionnel',
        content: `### 💭 Le conditionnel finnois - Konditionaali

Le **conditionnel** (konditionaali) exprime des souhaits, des possibilités ou des situations hypothétiques. C'est aussi le mode de la **politesse** en finnois!

---

### 📋 Formation générale

**Structure :** radical + **isi** + terminaison personnelle

| Pronom | Olla (être) | Haluta (vouloir) | Voida (pouvoir) |
|--------|-------------|------------------|-----------------|
| **minä** | ol**isi**n | halua**isi**n | vo**isi**n |
| **sinä** | ol**isi**t | halua**isi**t | vo**isi**t |
| **hän** | ol**isi** | halua**isi** | vo**isi** |
| **me** | ol**isi**mme | halua**isi**mme | vo**isi**mme |
| **te** | ol**isi**tte | halua**isi**tte | vo**isi**tte |
| **he** | ol**isi**vat | halua**isi**vat | vo**isi**vat |

---

### 📋 Verbes courants au conditionnel (minä)

| Infinitif | Conditionnel | Sens |
|-----------|--------------|------|
| **olla** | olisin | je serais |
| **haluta** | haluaisin | je voudrais |
| **voida** | voisin | je pourrais |
| **saada** | saisin | je pourrais avoir |
| **tulla** | tulisin | je viendrais |
| **mennä** | menisin | j'irais |
| **tehdä** | tekisin | je ferais |
| **sanoa** | sanoisin | je dirais |

> 💡 **Astuce** : Le marqueur du conditionnel est toujours **-isi-**. Repérez-le pour identifier ce mode!`
      },
      {
        type: 'theory',
        title: 'La politesse au conditionnel',
        content: `### 🎩 Le conditionnel de politesse

En finnois, le conditionnel est **essentiel** pour être poli. Il équivaut au "je voudrais" français.

---

### 📋 Expressions polies courantes

| Finnois | Français | Contexte |
|---------|----------|----------|
| **Haluaisin** kahvia. | Je voudrais un café. | Au café |
| **Saisinko** laskun? | Pourrais-je avoir l'addition? | Au restaurant |
| **Voisitko** auttaa? | Pourrais-tu aider? | Demande d'aide |
| **Voisitteko** toistaa? | Pourriez-vous répéter? | Formel |
| **Ottaisin** tämän. | Je prendrais celui-ci. | Achat |
| **Haluaisitko** tulla? | Voudrais-tu venir? | Invitation |

---

### 🗣️ Dialogue - Kahvilassa (Au café)

**Tarjoilija:** Hei! Mitä saisi olla?
*Bonjour! Que désirez-vous?*

**Asiakas:** Haluaisin kahvin ja korvapuustin, kiitos.
*Je voudrais un café et une brioche à la cannelle, s'il vous plaît.*

**Tarjoilija:** Haluaisitko maitoa kahviin?
*Voudriez-vous du lait dans le café?*

**Asiakas:** Kyllä kiitos. Saisinko myös vettä?
*Oui merci. Pourrais-je aussi avoir de l'eau?*

**Tarjoilija:** Totta kai!
*Bien sûr!*

> 💡 **Astuce** : "Mitä saisi olla?" (Que désirez-vous?) utilise aussi le conditionnel - c'est très poli!`
      },
      {
        type: 'theory',
        title: 'Les hypothèses avec "jos"',
        content: `### 🔮 Exprimer des hypothèses

La structure **jos + conditionnel** exprime des situations hypothétiques (comme "si" en français).

---

### 📋 Structure des phrases conditionnelles

**Jos** (si) + conditionnel, conditionnel

| Finnois | Français |
|---------|----------|
| **Jos olisin** rikas, **ostaisin** talon. | Si j'étais riche, j'achèterais une maison. |
| **Jos minulla olisi** aikaa, **matkustaisin**. | Si j'avais le temps, je voyagerais. |
| **Jos tietäisin**, **sanoisin**. | Si je savais, je dirais. |
| **Jos voisin**, **auttaisin**. | Si je pouvais, j'aiderais. |

---

### 📋 Exemples pratiques

| Situation | Finnois |
|-----------|---------|
| **Rêve** | Jos voittaisin lotossa... (Si je gagnais au loto...) |
| **Conseil** | Minä tekisin toisin. (Moi je ferais autrement.) |
| **Suggestion** | Voisimme mennä elokuviin. (On pourrait aller au cinéma.) |
| **Hésitation** | En tietäisi, mitä sanoisin. (Je ne saurais pas quoi dire.) |

---

### 🗣️ Dialogue - Unelmia (Rêves)

**A:** Mitä tekisit, jos voittaisit lotossa?
*Que ferais-tu si tu gagnais au loto?*

**B:** Ostaisin talon meren rannalla. Entä sinä?
*J'achèterais une maison au bord de la mer. Et toi?*

**A:** Minä matkustaisin ympäri maailmaa.
*Moi je voyagerais autour du monde.*

**B:** Se olisi ihanaa!
*Ce serait merveilleux!*

> 💡 **Astuce** : Contrairement au français qui utilise l'imparfait après "si", le finnois utilise le conditionnel dans les deux parties de la phrase.`
      },
      {
        type: 'theory',
        title: 'Le conditionnel en puhekieli',
        content: `### 🗣️ Le conditionnel dans la langue parlée

En puhekieli, le conditionnel se simplifie légèrement.

---

### 📋 Transformations courantes

| Kirjakieli | Puhekieli | Sens |
|------------|-----------|------|
| Minä haluaisin | Mä halui**si**n | Je voudrais |
| Sinä voisit | Sä voi**si**t | Tu pourrais |
| Hän olisi | Se ois | Il/elle serait |
| Me menisimme | Me men**täis** | Nous irions |
| Jos olisin | Jos mä oisin | Si j'étais |

---

### 📋 Formes contractées fréquentes

| Kirjakieli | Puhekieli | Sens |
|------------|-----------|------|
| olisin | **oisin** | je serais |
| olisit | **oisit** | tu serais |
| olisi | **ois** | il/elle serait |
| olisimme | **oltais** | nous serions |
| voisinko | **voisinks** | pourrais-je |
| voisitko | **voisiks** / **voisitsä** | pourrais-tu |

---

### 🗣️ Dialogue en puhekieli

**A:** Lähdettäiskö kahville?
*On irait prendre un café?*

**B:** Joo, se ois kiva! Mihin mentäis?
*Oui, ce serait sympa! On irait où?*

**A:** Voitais mennä siihen uuteen paikkaan.
*On pourrait aller à ce nouvel endroit.*

**B:** Okei, mä tulisin kyl mukaan.
*Ok, je viendrais bien.*

> 💡 **Astuce** : "Lähdettäiskö?" (On y irait?) est la forme puhekieli polie pour proposer quelque chose.

---

### 📋 Questions polies en puhekieli

| Kirjakieli | Puhekieli |
|------------|-----------|
| Voisitko auttaa? | Voisitsä auttaa? |
| Haluaisitko tulla? | Haluisitsä tulla? |
| Menisitkö kauppaan? | Menisiksä kauppaan? |`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "Je voudrais" en finnois?',
        options: ['haluan', 'haluaisin', 'halunnut', 'haluaa'],
        correct: 1,
        explanation: 'Haluaisin = Je voudrais (conditionnel de haluta).'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "Pourrais-tu m\'aider?" en finnois?',
        options: ['Voitko auttaa?', 'Voisitko auttaa?', 'Autatko minua?', 'Auttaisitko?'],
        correct: 1,
        explanation: 'Voisitko auttaa? utilise le conditionnel pour être poli.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quel est le conditionnel de "mennä" (aller) pour minä?',
        options: ['menin', 'menen', 'menisin', 'mennen'],
        correct: 2,
        explanation: 'Mennä → menisin (j\'irais). Le marqueur -isi- indique le conditionnel.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Jos ___ rikas, ostaisin talon. (Si j\'étais riche...)',
        answer: 'olisin',
        hint: 'Conditionnel de olla pour minä'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: '___ kahvia, kiitos. (Je voudrais un café...)',
        answer: 'Haluaisin',
        hint: 'Conditionnel de haluta'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: '___ laskun? (Pourrais-je avoir l\'addition?)',
        answer: 'Saisinko',
        hint: 'Conditionnel de saada + ko'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Mitä ___, jos voittaisit lotossa? (Que ferais-tu si...)',
        answer: 'tekisit',
        hint: 'Conditionnel de tehdä pour sinä'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Pourrais-je avoir un café?',
        answer: 'Saisinko kahvia?',
        alternatives: ['Voisinko saada kahvia?', 'Saisinko kahvin?']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Jos minulla olisi aikaa, matkustaisin enemmän.',
        answer: 'Si j\'avais le temps, je voyagerais plus.',
        alternatives: ['Si j\'avais le temps, je voyagerais davantage.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Ce serait bien.',
        answer: 'Se olisi hyvä.',
        alternatives: ['Se olis hyvä.', 'Se ois hyvä.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Voudrais-tu venir avec moi?',
        answer: 'Haluaisitko tulla mukaan?',
        alternatives: ['Tulisitko mukaan?', 'Haluisitsä tulla mukaan?']
      }
    ],
    vocabulary: [
      { fi: 'haluaisin', fr: 'je voudrais', puhekieli: 'haluisin' },
      { fi: 'voisinko', fr: 'pourrais-je', puhekieli: 'voisinks' },
      { fi: 'voisitko', fr: 'pourrais-tu', puhekieli: 'voisitsä' },
      { fi: 'saisinko', fr: 'pourrais-je avoir', puhekieli: 'saisinko' },
      { fi: 'olisin', fr: 'je serais', puhekieli: 'oisin' },
      { fi: 'tekisin', fr: 'je ferais', puhekieli: 'tekisin' },
      { fi: 'menisin', fr: 'j\'irais', puhekieli: 'menisin' },
      { fi: 'tulisin', fr: 'je viendrais', puhekieli: 'tulisin' },
      { fi: 'jos', fr: 'si (hypothèse)', puhekieli: 'jos' },
      { fi: 'matkustaa', fr: 'voyager', puhekieli: 'matkustaa' },
      { fi: 'ostaa', fr: 'acheter', puhekieli: 'ostaa' },
      { fi: 'voittaa', fr: 'gagner', puhekieli: 'voittaa' },
      { fi: 'rikas', fr: 'riche', puhekieli: 'rikas' },
      { fi: 'lasku', fr: 'addition / facture', puhekieli: 'lasku' },
      { fi: 'korvapuusti', fr: 'brioche à la cannelle', puhekieli: 'korvapuusti' }
    ]
  },
  {
    id: 'a2-5',
    level: 'A2',
    module: 'A2.2',
    title: 'Objektin sijat - Les cas de l\'objet',
    description: 'Accusatif, partitif et objet total - une notion clé du finnois',
    sections: [
      {
        type: 'theory',
        title: 'Introduction aux cas de l\'objet',
        content: `### 🎯 L'objet en finnois

En finnois, l'objet direct peut être à différents cas selon que l'action est **complète** ou **incomplète**. C'est une notion fondamentale!

---

### 📋 Les deux cas principaux de l'objet

| Cas | Suffixe | Usage | Exemple |
|-----|---------|-------|---------|
| **Partitif** | -a/-ä, -ta/-tä | Action en cours, incomplète | Luen **kirjaa**. (Je lis un livre.) |
| **Accusatif** | -n (génitif) | Action complète, résultat | Luin **kirjan**. (J'ai lu le livre entier.) |

---

### 🗣️ Dialogue - Kirjasto (À la bibliothèque)

**A:** Mitä luet?
*Que lis-tu?*

**B:** Luen romaania. Se on todella hyvä!
*Je lis un roman. Il est vraiment bien!*

**A:** Oletko jo lukenut sen loppuun?
*Tu l'as déjà lu jusqu'à la fin?*

**B:** En vielä. Luin ensimmäisen luvun eilen.
*Pas encore. J'ai lu le premier chapitre hier.*

> 💡 **Astuce** : "Luen romaania" = je suis en train de lire (processus). "Luin luvun" = j'ai fini de lire le chapitre (résultat).`
      },
      {
        type: 'theory',
        title: 'Partitif vs Accusatif',
        content: `### ⚖️ Quand utiliser quel cas?

La règle de base : **processus** (partitif) vs **résultat** (accusatif).

---

### 📋 Comparaison directe

| Partitif (processus) | Accusatif (résultat) |
|----------------------|----------------------|
| Syön **omenaa**. | Söin **omenan**. |
| *(Je mange une pomme - en cours)* | *(J'ai mangé la pomme entière)* |
| Kirjoitan **kirjettä**. | Kirjoitin **kirjeen**. |
| *(J'écris une lettre - pas finie)* | *(J'ai écrit la lettre - finie)* |
| Rakennan **taloa**. | Rakensin **talon**. |
| *(Je construis une maison - en cours)* | *(J'ai construit la maison)* |

---

### 📋 Exemples visuels

| Verbe | Partitif (en cours) | Accusatif (terminé) |
|-------|---------------------|---------------------|
| **lukea** | Luen kirjaa | Luin kirjan |
| **syödä** | Syön leipää | Söin leivän |
| **juoda** | Juon kahvia | Join kahvin |
| **ostaa** | - | Ostin auton |
| **tehdä** | Teen työtä | Tein työn |

> ⚠️ **Attention** : Certains verbes impliquent naturellement un résultat (ostaa = acheter) et utilisent donc souvent l'accusatif.`
      },
      {
        type: 'theory',
        title: 'Quand utiliser le partitif obligatoirement',
        content: `### ❌ Situations où le partitif est OBLIGATOIRE

Dans certains cas, on utilise **toujours** le partitif, peu importe si l'action est complète.

---

### 📋 1. Avec la négation

| Affirmatif | Négatif |
|------------|---------|
| Luin **kirjan**. | **En** lukenut **kirjaa**. |
| Söin **omenan**. | **En** syönyt **omenaa**. |
| Ostin **auton**. | **En** ostanut **autoa**. |

> ⚠️ **Règle absolue** : Après une négation, l'objet est TOUJOURS au partitif!

---

### 📋 2. Avec une quantité indéfinie

| Finnois | Français |
|---------|----------|
| Juon **kahvia**. | Je bois du café. |
| Syön **leipää**. | Je mange du pain. |
| Tarvitsen **rahaa**. | J'ai besoin d'argent. |

---

### 📋 3. Avec les verbes de sentiment

| Finnois | Français |
|---------|----------|
| Rakastan **sinua**. | Je t'aime. |
| Vihaan **talvea**. | Je déteste l'hiver. |
| Pelkään **koiraa**. | J'ai peur du chien. |

> 💡 **Astuce** : Les verbes rakastaa (aimer), vihata (détester), pelätä (craindre) prennent TOUJOURS le partitif.

---

### 📋 4. Avec certains verbes "continus"

| Verbe | Exemple |
|-------|---------|
| **odottaa** (attendre) | Odotan **bussia**. |
| **etsiä** (chercher) | Etsin **avaimia**. |
| **katsoa** (regarder) | Katson **televisiota**. |
| **kuunnella** (écouter) | Kuuntelen **musiikkia**. |`
      },
      {
        type: 'theory',
        title: 'L\'accusatif en détail',
        content: `### ✅ L'accusatif (objet total)

L'accusatif finnois a deux formes selon le contexte.

---

### 📋 Les deux formes de l'accusatif

| Forme | Suffixe | Quand l'utiliser |
|-------|---------|------------------|
| **Génitif** | -n | Avec un sujet personnel |
| **Nominatif** | - (zéro) | Avec l'impératif, le passif, les verbes modaux |

---

### 📋 Exemples avec le génitif (-n)

| Finnois | Français |
|---------|----------|
| Ostin **auton**. | J'ai acheté la voiture. |
| Söin **omenan**. | J'ai mangé la pomme. |
| Tein **työn**. | J'ai fait le travail. |
| Annoin hänelle **lahjan**. | Je lui ai donné le cadeau. |

---

### 📋 Exemples avec le nominatif (impératif/passif)

| Finnois | Français |
|---------|----------|
| Lue **kirja**! | Lis le livre! |
| Ota **laukku**! | Prends le sac! |
| Auto **myytiin**. | La voiture a été vendue. (passif) |
| Haluan ostaa **auto**. | Je veux acheter une voiture. |

---

### 🗣️ Dialogue - Kauppa (Au magasin)

**Myyjä:** Mitä saisi olla?
*Que désirez-vous?*

**Asiakas:** Haluaisin ostaa uuden puhelimen.
*Je voudrais acheter un nouveau téléphone.*

**Myyjä:** Meillä on hyvä tarjous. Otan sen teille.
*Nous avons une bonne offre. Je vous l'apporte.*

**Asiakas:** Kiitos! Otan tämän puhelimen.
*Merci! Je prends ce téléphone.*

> 💡 **Astuce** : Avec "haluta" + infinitif, l'objet est au nominatif : "Haluan ostaa **auto**" (pas "auton").`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quel cas utilise-t-on pour "Je mange du pain" (action en cours)?',
        options: ['nominatif', 'accusatif', 'partitif', 'génitif'],
        correct: 2,
        explanation: 'Partitif car l\'action est en cours : Syön leipää.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quel cas utilise-t-on après une négation?',
        options: ['nominatif', 'accusatif', 'partitif', 'génitif'],
        correct: 2,
        explanation: 'Après une négation, l\'objet est TOUJOURS au partitif.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "J\'ai lu le livre (entier)"?',
        options: ['Luin kirjaa', 'Luin kirjan', 'Luin kirja', 'Luin kirjassa'],
        correct: 1,
        explanation: 'Kirjan (accusatif) car l\'action est complète - le livre a été lu entièrement.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Ostin uuden ___. (J\'ai acheté une nouvelle voiture)',
        answer: 'auton',
        hint: 'Accusatif de auto (action complète)'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Rakastan ___. (Je t\'aime)',
        answer: 'sinua',
        hint: 'Verbe de sentiment → toujours partitif'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'En ostanut ___. (Je n\'ai pas acheté de voiture)',
        answer: 'autoa',
        hint: 'Négation → toujours partitif'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Lue tämä ___! (Lis ce livre!)',
        answer: 'kirja',
        hint: 'Impératif → accusatif nominatif (sans -n)'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Luin kirjan eilen. Nyt luen toista kirjaa.',
        answer: 'J\'ai lu le livre hier. Maintenant je lis un autre livre.',
        alternatives: ['J\'ai fini le livre hier. Maintenant je lis un autre livre.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'En syönyt aamupalaa tänään.',
        answer: 'Je n\'ai pas pris de petit-déjeuner aujourd\'hui.',
        alternatives: ['Je n\'ai pas mangé de petit-déjeuner aujourd\'hui.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'J\'ai fait le travail.',
        answer: 'Tein työn.',
        alternatives: ['Mä tein työn.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Je t\'aime.',
        answer: 'Rakastan sinua.',
        alternatives: ['Mä rakastan sua.']
      },
      // Nouveaux exercices objectCase
      {
        type: 'exercise',
        exerciseType: 'objectCase',
        instruction: 'Choisis la forme correcte de l\'objet :',
        sentence: 'Syön ___ joka aamu.',
        translation: 'Je mange une pomme chaque matin. (action répétée, pas finie)',
        options: [
          { word: 'omenan', case: 'accusatif' },
          { word: 'omenaa', case: 'partitif' },
          { word: 'omena', case: 'nominatif' }
        ],
        correct: 1,
        caseExplanation: 'Partitif car l\'action est répétée/habituelle et on ne parle pas d\'une pomme spécifique mangée entièrement.',
        explanation: 'Avec une action habituelle et une quantité non définie, on utilise le partitif.'
      },
      {
        type: 'exercise',
        exerciseType: 'objectCase',
        instruction: 'Choisis la forme correcte de l\'objet :',
        sentence: 'Ostin uuden ___.',
        translation: 'J\'ai acheté une nouvelle voiture. (achat terminé)',
        options: [
          { word: 'autoa', case: 'partitif' },
          { word: 'auton', case: 'accusatif' },
          { word: 'auto', case: 'nominatif' }
        ],
        correct: 1,
        caseExplanation: 'Accusatif car l\'action est complète - l\'achat est fait, vous avez la voiture.',
        explanation: 'L\'accusatif (-n) indique une action terminée avec un résultat concret.'
      },
      {
        type: 'exercise',
        exerciseType: 'objectCase',
        instruction: 'Choisis la forme correcte de l\'objet :',
        sentence: 'En ostanut ___.',
        translation: 'Je n\'ai pas acheté de voiture.',
        options: [
          { word: 'auton', case: 'accusatif' },
          { word: 'auto', case: 'nominatif' },
          { word: 'autoa', case: 'partitif' }
        ],
        correct: 2,
        caseExplanation: 'Avec la négation, l\'objet est TOUJOURS au partitif, peu importe le contexte.',
        explanation: 'Règle absolue : négation = partitif obligatoire.'
      },
      {
        type: 'exercise',
        exerciseType: 'objectCase',
        instruction: 'Choisis la forme correcte de l\'objet :',
        sentence: 'Rakastan ___.',
        translation: 'J\'aime la Finlande.',
        options: [
          { word: 'Suomen', case: 'accusatif' },
          { word: 'Suomea', case: 'partitif' },
          { word: 'Suomi', case: 'nominatif' }
        ],
        correct: 1,
        caseExplanation: 'Les verbes de sentiment (rakastaa, vihata, pelätä) prennent TOUJOURS le partitif.',
        explanation: 'Rakastaa (aimer) exige toujours le partitif, même si l\'amour est "complet".'
      },
      {
        type: 'exercise',
        exerciseType: 'objectCase',
        instruction: 'Choisis la forme correcte de l\'objet :',
        sentence: 'Lue tämä ___!',
        translation: 'Lis ce livre!',
        options: [
          { word: 'kirjaa', case: 'partitif' },
          { word: 'kirjan', case: 'accusatif -n' },
          { word: 'kirja', case: 'accusatif nominatif' }
        ],
        correct: 2,
        caseExplanation: 'À l\'impératif, l\'accusatif prend la forme du nominatif (sans -n).',
        explanation: 'Impératif + action complète = accusatif nominatif (kirja, pas kirjan).'
      }
    ],
    vocabulary: [
      { fi: 'kirjan', fr: 'le livre (accusatif)', puhekieli: 'kirjan' },
      { fi: 'kirjaa', fr: 'du livre / un livre (partitif)', puhekieli: 'kirjaa' },
      { fi: 'auton', fr: 'la voiture (accusatif)', puhekieli: 'auton' },
      { fi: 'autoa', fr: 'de voiture (partitif)', puhekieli: 'autoo' },
      { fi: 'työn', fr: 'le travail (accusatif)', puhekieli: 'työn' },
      { fi: 'työtä', fr: 'du travail (partitif)', puhekieli: 'työtä' },
      { fi: 'rakastaa', fr: 'aimer (prend toujours partitif)', puhekieli: 'rakastaa' },
      { fi: 'vihata', fr: 'détester', puhekieli: 'vihata' },
      { fi: 'pelätä', fr: 'avoir peur de', puhekieli: 'pelätä' },
      { fi: 'ostaa', fr: 'acheter', puhekieli: 'ostaa' },
      { fi: 'myydä', fr: 'vendre', puhekieli: 'myydä' },
      { fi: 'valmis', fr: 'prêt / terminé', puhekieli: 'valmis' },
      { fi: 'kokonaan', fr: 'entièrement', puhekieli: 'kokonaan' },
      { fi: 'loppuun', fr: 'jusqu\'à la fin', puhekieli: 'loppuun' },
      { fi: 'sinua', fr: 'toi (partitif)', puhekieli: 'sua' }
    ]
  },
  {
    id: 'a2-6',
    level: 'A2',
    module: 'A2.2',
    title: 'Postpositiot - Les postpositions',
    description: 'Expressions de lieu et de temps avec les postpositions',
    sections: [
      {
        type: 'theory',
        title: 'Introduction aux postpositions',
        content: `### 📍 Les postpositions finnoises

En français, on utilise des **prépositions** (devant le nom). En finnois, on utilise des **postpositions** (après le nom)!

---

### 📋 Règle générale

**Le nom est au GÉNITIF (-n) + postposition**

| Français | Finnois |
|----------|---------|
| devant **la** maison | talo**n** edessä |
| sous **la** table | pöydä**n** alla |
| près **de la** ville | kaupungi**n** lähellä |

---

### 📋 Postpositions de lieu principales

| Postposition | Sens | Exemple |
|--------------|------|---------|
| **edessä** | devant | talon edessä |
| **takana** | derrière | talon takana |
| **vieressä** | à côté de | talon vieressä |
| **lähellä** | près de | talon lähellä |
| **kaukana** | loin de | kaupungin kaukana |
| **alla** | sous | pöydän alla |
| **päällä** | sur, au-dessus de | pöydän päällä |
| **keskellä** | au milieu de | huoneen keskellä |
| **ympärillä** | autour de | talon ympärillä |

> 💡 **Astuce** : Remarquez que beaucoup de postpositions de lieu finissent en **-lla/-llä** (adessif) ou **-ssa/-ssä** (inessif).`
      },
      {
        type: 'theory',
        title: 'Mouvement avec les postpositions',
        content: `### 🚶 Postpositions avec mouvement

Les postpositions ont aussi des formes pour le mouvement (vers, de).

---

### 📋 Système complet

| Sens | Statique | Vers (direction) | De (provenance) |
|------|----------|------------------|-----------------|
| **devant** | edessä | eteen | edestä |
| **derrière** | takana | taakse | takaa |
| **à côté** | vieressä | viereen | vierestä |
| **sous** | alla | alle | alta |
| **sur** | päällä | päälle | päältä |

---

### 📋 Exemples pratiques

| Finnois | Français |
|---------|----------|
| Menen talon **eteen**. | Je vais devant la maison. |
| Tulen talon **takaa**. | Je viens de derrière la maison. |
| Istun pöydän **viereen**. | Je m'assieds à côté de la table. |
| Koira menee sohvan **alle**. | Le chien va sous le canapé. |
| Otan kirjan hyllyn **päältä**. | Je prends le livre de (sur) l'étagère. |

---

### 🗣️ Dialogue - Missä on kissa? (Où est le chat?)

**Äiti:** Oletko nähnyt kissaa?
*Tu as vu le chat?*

**Lapsi:** Se oli äsken sohvan päällä.
*Il était sur le canapé tout à l'heure.*

**Äiti:** Ei ole enää. Katso sängyn alta!
*Il n'y est plus. Regarde sous le lit!*

**Lapsi:** Löysin! Se on kaapin takana.
*J'ai trouvé! Il est derrière l'armoire.*

> 💡 **Astuce** : "Alta" = de dessous, "alle" = vers dessous, "alla" = sous (statique).`
      },
      {
        type: 'theory',
        title: 'Postpositions de temps',
        content: `### ⏰ Les postpositions temporelles

Le finnois utilise aussi des postpositions pour exprimer le temps.

---

### 📋 Postpositions temporelles principales

| Postposition | Sens | Exemple | Traduction |
|--------------|------|---------|------------|
| **jälkeen** | après | lounaan jälkeen | après le déjeuner |
| **ennen** | avant | lounasta ennen | avant le déjeuner |
| **aikana** | pendant | päivän aikana | pendant la journée |
| **kuluttua** | dans (futur) | viikon kuluttua | dans une semaine |
| **sitten** | il y a | viikko sitten | il y a une semaine |
| **ajan** | durant | koko ajan | tout le temps |

> ⚠️ **Attention** : "ennen" peut être préposition : "ennen lounasta" (avant le déjeuner).

---

### 📋 Exprimer "il y a" et "dans"

| Passé (il y a) | Futur (dans) |
|----------------|--------------|
| viikko **sitten** | viikon **kuluttua** |
| kaksi vuotta **sitten** | kahden vuoden **kuluttua** |
| tunti **sitten** | tunnin **kuluttua** |

**En puhekieli :**
- viikon **päästä** (dans une semaine) - plus courant que "kuluttua"

---

### 🗣️ Dialogue - Aikataulut (Horaires)

**A:** Milloin tapaamme?
*Quand est-ce qu'on se voit?*

**B:** Tunnin kuluttua? Lounaan jälkeen.
*Dans une heure? Après le déjeuner.*

**A:** Sopii! Missä?
*Ça marche! Où?*

**B:** Kahvilan edessä, kuten viime viikolla.
*Devant le café, comme la semaine dernière.*

> 💡 **Astuce** : "Sitten" signifie aussi "puis" : "Söin ja sitten lähdin." (J'ai mangé et puis je suis parti.)`
      },
      {
        type: 'theory',
        title: 'Postpositions et pronoms',
        content: `### 👤 Postpositions avec les pronoms personnels

Avec les pronoms, on utilise des formes spéciales.

---

### 📋 Formes avec les pronoms

| Pronom | + edessä | + takana | + vieressä |
|--------|----------|----------|------------|
| minä | **minun** edessäni | takanani | vieressäni |
| sinä | **sinun** edessäsi | takanasi | vieressäsi |
| hän | **hänen** edessään | takanaan | vieressään |
| me | **meidän** edessämme | takanamme | vieressämme |
| te | **teidän** edessänne | takananne | vieressänne |
| he | **heidän** edessään | takanaan | vieressään |

> ⚠️ **Attention** : La postposition prend un suffixe possessif (-ni, -si, -nsa, etc.)!

---

### 📋 Exemples

| Finnois | Français |
|---------|----------|
| Hän istuu **minun vieressäni**. | Il/elle est assis(e) à côté de moi. |
| Koira juoksee **hänen perässään**. | Le chien court derrière lui/elle. |
| Seiso **minun takanani**! | Reste derrière moi! |

---

### 🗣️ En puhekieli

| Kirjakieli | Puhekieli | Sens |
|------------|-----------|------|
| minun edessäni | mun edes | devant moi |
| sinun takanasi | sun takan | derrière toi |
| hänen vieressään | sen vieres | à côté de lui/elle |

---

### 📋 Prépositions (exceptions)

Quelques mots fonctionnent comme des **prépositions** (avant le nom) :

| Mot | Exemple | Sens |
|-----|---------|------|
| **ilman** | ilman sinua | sans toi |
| **ennen** | ennen lounasta | avant le déjeuner |
| **kohti** | kohti kaupunkia | vers la ville |`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "devant la maison"?',
        options: ['talo edessä', 'edessä talo', 'talon edessä', 'talossa edessä'],
        correct: 2,
        explanation: 'Talon (génitif) + edessä. Le nom est au génitif avant la postposition.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "il y a deux ans"?',
        options: ['kaksi vuotta aikana', 'kaksi vuotta jälkeen', 'kaksi vuotta sitten', 'kaksi vuotta ennen'],
        correct: 2,
        explanation: '"Sitten" exprime le passé : kaksi vuotta sitten = il y a deux ans.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quelle forme utilise-t-on pour "je vais sous la table"?',
        options: ['pöydän alla', 'pöydän alle', 'pöydän alta', 'pöydän alaan'],
        correct: 1,
        explanation: '"Alle" indique le mouvement vers dessous : menen pöydän alle.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Koira on pöydän ___. (Le chien est sous la table)',
        answer: 'alla',
        hint: 'Sous (statique) en finnois'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Tapaan sinut kahvilan ___. (Je te retrouve devant le café)',
        answer: 'edessä',
        hint: 'Devant en finnois'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Muutin tänne vuoden ___. (J\'ai déménagé ici il y a un an)',
        answer: 'sitten',
        hint: 'Postposition pour "il y a"'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Tulen tunnin ___. (Je viens dans une heure)',
        answer: 'kuluttua',
        hint: 'Postposition pour "dans" (futur)'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Tapasin hänet kaksi vuotta sitten.',
        answer: 'Je l\'ai rencontré(e) il y a deux ans.',
        alternatives: ['Je l\'ai rencontré il y a deux ans.', 'Je l\'ai rencontrée il y a deux ans.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Auto on talon takana.',
        answer: 'La voiture est derrière la maison.',
        alternatives: ['L\'auto est derrière la maison.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Le chat est sous le lit.',
        answer: 'Kissa on sängyn alla.',
        alternatives: ['Kissa on sängyn alla.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Je te verrai dans une semaine.',
        answer: 'Näen sinut viikon kuluttua.',
        alternatives: ['Näen sinut viikon päästä.', 'Nään sut viikon päästä.']
      }
    ],
    vocabulary: [
      { fi: 'edessä', fr: 'devant', puhekieli: 'edes' },
      { fi: 'takana', fr: 'derrière', puhekieli: 'takan' },
      { fi: 'vieressä', fr: 'à côté de', puhekieli: 'vieres' },
      { fi: 'lähellä', fr: 'près de', puhekieli: 'lähel' },
      { fi: 'kaukana', fr: 'loin de', puhekieli: 'kaukan' },
      { fi: 'alla', fr: 'sous', puhekieli: 'alla' },
      { fi: 'päällä', fr: 'sur, au-dessus', puhekieli: 'pääl' },
      { fi: 'keskellä', fr: 'au milieu de', puhekieli: 'keskel' },
      { fi: 'ympärillä', fr: 'autour de', puhekieli: 'ympäril' },
      { fi: 'jälkeen', fr: 'après', puhekieli: 'jälkee' },
      { fi: 'ennen', fr: 'avant', puhekieli: 'ennen' },
      { fi: 'aikana', fr: 'pendant', puhekieli: 'aikan' },
      { fi: 'sitten', fr: 'il y a / puis', puhekieli: 'sit' },
      { fi: 'kuluttua', fr: 'dans (futur)', puhekieli: 'kuluttuu' },
      { fi: 'päästä', fr: 'dans (futur, puhekieli)', puhekieli: 'päästä' }
    ]
  },
  {
    id: 'a2-7',
    level: 'A2',
    module: 'A2.2',
    title: 'Kolmas infinitiivi - Le 3ème infinitif',
    description: 'Exprimer le but, la manière et l\'action en cours',
    sections: [
      {
        type: 'theory',
        title: 'Introduction au 3ème infinitif',
        content: `### 🎯 Le 3ème infinitif finnois

Le **3ème infinitif** est une forme verbale très utilisée en finnois pour exprimer le **but** d'un déplacement ou une **action en cours**.

---

### 📋 Formation générale

**Structure :** radical du présent + **-ma-/-mä-** + suffixe de cas

| Infinitif | Radical | 3ème inf. (illatif) | Sens |
|-----------|---------|---------------------|------|
| **syödä** | syö- | syö**mään** | pour manger |
| **juoda** | juo- | juo**maan** | pour boire |
| **katsoa** | katso- | katso**maan** | pour regarder |
| **opiskella** | opiskele- | opiskele**maan** | pour étudier |
| **nukkua** | nukku- | nukku**maan** | pour dormir |

---

### 📋 Les deux formes principales

| Cas | Suffixe | Usage |
|-----|---------|-------|
| **Illatif** | -maan/-mään | But, direction (je vais manger) |
| **Inessif** | -massa/-mässä | Action en cours (je suis en train de) |

> 💡 **Astuce** : L'illatif répond à "minne?" (où va-t-on?), l'inessif à "missä?" (où est-on?). Logique!`
      },
      {
        type: 'theory',
        title: 'Le 3ème infinitif illatif (-maan/-mään)',
        content: `### 🚶 Exprimer le but avec -maan/-mään

On utilise le 3ème infinitif illatif après les **verbes de mouvement** pour exprimer le but.

---

### 📋 Verbes de mouvement + 3ème infinitif

| Verbe | Exemple | Traduction |
|-------|---------|------------|
| **mennä** (aller) | Menen **syömään**. | Je vais manger. |
| **tulla** (venir) | Tuletko **katsomaan**? | Tu viens regarder? |
| **lähteä** (partir) | Lähden **opiskelemaan**. | Je pars étudier. |
| **jäädä** (rester) | Jään **odottamaan**. | Je reste attendre. |
| **päästä** (réussir à aller) | Pääsen **nukkumaan**. | Je peux aller dormir. |

---

### 🗣️ Dialogue - Illalla (Le soir)

**Mikko:** Mitä teet illalla?
*Qu'est-ce que tu fais ce soir?*

**Anna:** Menen uimaan uimahalliin. Tuletko mukaan?
*Je vais nager à la piscine. Tu viens avec?*

**Mikko:** En voi tänään. Jään kotiin lukemaan kokeeseen.
*Je ne peux pas aujourd'hui. Je reste à la maison réviser pour l'examen.*

**Anna:** Okei. Menen sitten yksin. Tulen takaisin syömään kello seitsemän.
*Ok. J'y vais seule alors. Je reviens manger à sept heures.*

> 💡 **Astuce** : On utilise aussi cette forme après "oppia" (apprendre) : "Opin uimaan" (J'apprends à nager).`
      },
      {
        type: 'theory',
        title: 'Le 3ème infinitif inessif (-massa/-mässä)',
        content: `### ⏳ Exprimer une action en cours avec -massa/-mässä

Le 3ème infinitif inessif exprime qu'on est **en train de** faire quelque chose.

---

### 📋 Formation et exemples

| Olla + 3ème inf. inessif | Traduction |
|--------------------------|------------|
| Olen **syömässä**. | Je suis en train de manger. |
| Hän on **nukkumassa**. | Il/elle est en train de dormir. |
| Olemme **opiskelemassa**. | Nous sommes en train d'étudier. |
| He ovat **uimassa**. | Ils sont en train de nager. |

---

### 📋 Comparaison illatif vs inessif

| Illatif (-maan) | Inessif (-massa) |
|-----------------|------------------|
| Menen **syömään**. | Olen **syömässä**. |
| *Je vais manger.* | *Je suis en train de manger.* |
| Direction / but | Action en cours |

---

### 🗣️ Dialogue - Puhelimessa (Au téléphone)

**A:** Hei! Missä olet?
*Salut! Où es-tu?*

**B:** Olen kahvilassa juomassa kahvia.
*Je suis au café en train de boire un café.*

**A:** Okei. Tulen sinne. Odota!
*Ok. J'arrive. Attends!*

**B:** Hyvä! Jään odottamaan.
*Super! Je reste attendre.*

> 💡 **Astuce** : "Olla + 3ème inf. inessif" est très courant pour dire où l'on est et ce qu'on y fait.`
      },
      {
        type: 'theory',
        title: 'Autresformes du 3ème infinitif',
        content: `### 📚 Formes avancées du 3ème infinitif

Le 3ème infinitif peut aussi prendre d'autrescas.

---

### 📋 L'élatif (-masta/-mästä) - "venir de faire"

| Exemple | Traduction |
|---------|------------|
| Tulen **syömästä**. | Je viens de manger. |
| Hän tulee **nukkumasta**. | Il/elle vient de dormir. |
| Tulemme **uimasta**. | Nous venons de nager. |

---

### 📋 L'abessif (-matta/-mättä) - "sans faire"

| Exemple | Traduction |
|---------|------------|
| Lähdin **syömättä**. | Je suis parti sans manger. |
| Hän nukkui **pesemättä** hampaita. | Il/elle a dormi sans se laver les dents. |
| En voi lähteä **sanomatta** mitään. | Je ne peux pas partir sans rien dire. |

---

### 🗣️ En puhekieli

| Kirjakieli | Puhekieli | Sens |
|------------|-----------|------|
| Menen syömään | Meen syömää | Je vais manger |
| Olen syömässä | Oon syömäs | Je suis en train de manger |
| Tulen syömästä | Tuun syömäst | Je viens de manger |
| Lähdin syömättä | Lähdin syömät | Je suis parti sans manger |

---

### 📋 Verbes courants au 3ème infinitif

| Infinitif | -maan | -massa | Sens |
|-----------|-------|--------|------|
| **syödä** | syömään | syömässä | manger |
| **juoda** | juomaan | juomassa | boire |
| **nukkua** | nukkumaan | nukkumassa | dormir |
| **uida** | uimaan | uimassa | nager |
| **lukea** | lukemaan | lukemassa | lire |
| **katsoa** | katsomaan | katsomassa | regarder |
| **opiskella** | opiskelemaan | opiskelemassa | étudier |
| **harjoitella** | harjoittelemaan | harjoittelemassa | s'entraîner |`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "Je vais manger"?',
        options: ['Menen syön', 'Menen syödä', 'Menen syömään', 'Menen syömässä'],
        correct: 2,
        explanation: 'Menen syömään = Je vais manger. On utilise le 3ème infinitif illatif après les verbes de mouvement.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "Je suis en train de dormir"?',
        options: ['Olen nukkumaan', 'Olen nukkumassa', 'Olen nukkua', 'Olen nukkumasta'],
        correct: 1,
        explanation: 'Olen nukkumassa = Je suis en train de dormir. L\'inessif (-massa) exprime l\'action en cours.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Que signifie "Tulen syömästä"?',
        options: ['Je vais manger', 'Je suis en train de manger', 'Je viens de manger', 'Je mange'],
        correct: 2,
        explanation: 'L\'élatif (-mästä) avec "tulla" signifie "venir de faire" : Tulen syömästä = Je viens de manger.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Tuletko ___ elokuvaa? (Tu viens regarder un film?)',
        answer: 'katsomaan',
        hint: '3ème infinitif illatif de katsoa'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Olen kirjastossa ___. (Je suis à la bibliothèque en train d\'étudier)',
        answer: 'opiskelemassa',
        hint: '3ème infinitif inessif de opiskella'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Jään kotiin ___. (Je reste à la maison lire)',
        answer: 'lukemaan',
        hint: '3ème infinitif illatif de lukea'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Lähdin ___ aamupalaa. (Je suis parti sans prendre le petit-déjeuner)',
        answer: 'syömättä',
        hint: '3ème infinitif abessif de syödä (sans manger)'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Olen opiskelemassa kirjastossa.',
        answer: 'Je suis en train d\'étudier à la bibliothèque.',
        alternatives: ['J\'étudie à la bibliothèque.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Menen uimaan uimahalliin.',
        answer: 'Je vais nager à la piscine.',
        alternatives: ['Je vais à la piscine pour nager.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Tu viens regarder un film?',
        answer: 'Tuletko katsomaan elokuvaa?',
        alternatives: ['Tuutsä katsomaan elokuvaa?', 'Tuletko kattomaan leffaa?']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Il est en train de dormir.',
        answer: 'Hän on nukkumassa.',
        alternatives: ['Se on nukkumassa.', 'Se on nukkumas.']
      }
    ],
    vocabulary: [
      { fi: 'syömään', fr: 'pour manger (illatif)', puhekieli: 'syömää' },
      { fi: 'syömässä', fr: 'en train de manger (inessif)', puhekieli: 'syömäs' },
      { fi: 'syömästä', fr: 'de manger (élatif)', puhekieli: 'syömäst' },
      { fi: 'syömättä', fr: 'sans manger (abessif)', puhekieli: 'syömät' },
      { fi: 'juomaan', fr: 'pour boire', puhekieli: 'juomaa' },
      { fi: 'nukkumaan', fr: 'pour dormir', puhekieli: 'nukkumaa' },
      { fi: 'uimaan', fr: 'pour nager', puhekieli: 'uimaa' },
      { fi: 'katsomaan', fr: 'pour regarder', puhekieli: 'kattomaa' },
      { fi: 'opiskelemaan', fr: 'pour étudier', puhekieli: 'opiskelemaa' },
      { fi: 'lukemaan', fr: 'pour lire', puhekieli: 'lukemaa' },
      { fi: 'lähteä', fr: 'partir', puhekieli: 'lähtee' },
      { fi: 'jäädä', fr: 'rester', puhekieli: 'jäädä' },
      { fi: 'odottaa', fr: 'attendre', puhekieli: 'odottaa' },
      { fi: 'oppia', fr: 'apprendre', puhekieli: 'oppia' },
      { fi: 'uimahalli', fr: 'piscine (intérieure)', puhekieli: 'uimahalli' }
    ]
  },
  {
    id: 'a2-8',
    level: 'A2',
    module: 'A2.2',
    title: 'Mielipiteet - Les opinions',
    description: 'Exprimer son avis, ses préférences et réagir aux opinions',
    sections: [
      {
        type: 'theory',
        title: 'Donner son opinion',
        content: `### 💬 Exprimer une opinion en finnois

Il existe plusieurs façons de donner son avis en finnois.

---

### 📋 Expressions pour donner son avis

| Finnois | Français | Niveau de certitude |
|---------|----------|---------------------|
| **Minusta**... | À mon avis... | Opinion personnelle |
| **Mielestäni**... | Selon moi... | Opinion personnelle |
| **Luulen, että**... | Je pense que... | Supposition |
| **Uskon, että**... | Je crois que... | Conviction |
| **Ajattelen, että**... | Je pense que... | Réflexion |
| **Tiedän, että**... | Je sais que... | Certitude |

---

### 📋 Nuances d'opinion

| Finnois | Français |
|---------|----------|
| **Varmasti** | Certainement |
| **Luultavasti** | Probablement |
| **Ehkä** | Peut-être |
| **Tuskin** | À peine / Probablement pas |

---

### 🗣️ Dialogue - Keskustelu elokuvasta (Discussion sur un film)

**Anna:** Mitä pidit elokuvasta?
*Qu'as-tu pensé du film?*

**Mikko:** Minusta se oli todella hyvä! Entä sinusta?
*À mon avis, c'était vraiment bien! Et toi?*

**Anna:** En ole samaa mieltä. Mielestäni se oli liian pitkä.
*Je ne suis pas d'accord. Selon moi, c'était trop long.*

**Mikko:** Ehkä, mutta näyttelijät olivat hyviä.
*Peut-être, mais les acteurs étaient bons.*

> 💡 **Astuce** : "Minusta" est l'élatif de "minä". C'est comme si on disait "de moi" - l'opinion vient de vous.`
      },
      {
        type: 'theory',
        title: 'Accord et désaccord',
        content: `### ✅❌ Exprimer l'accord et le désaccord

---

### 📋 Être d'accord

| Finnois | Français |
|---------|----------|
| **Olen samaa mieltä.** | Je suis d'accord. |
| **Juuri niin!** | Exactement! |
| **Totta!** | C'est vrai! |
| **Tietenkin!** | Bien sûr! |
| **Ehdottomasti!** | Absolument! |
| **Aivan!** | Tout à fait! |

---

### 📋 Ne pas être d'accord

| Finnois | Français |
|---------|----------|
| **Olen eri mieltä.** | Je ne suis pas d'accord. |
| **En ole samaa mieltä.** | Je ne suis pas d'accord. |
| **Ei todellakaan!** | Pas du tout! |
| **En usko.** | Je ne crois pas. |
| **Se ei pidä paikkaansa.** | Ce n'est pas vrai. |

---

### 📋 Nuancer son désaccord (politesse)

| Finnois | Français |
|---------|----------|
| **Ymmärrän, mutta...** | Je comprends, mais... |
| **Kyllä, mutta toisaalta...** | Oui, mais d'un autre côté... |
| **En ole ihan varma...** | Je ne suis pas sûr(e)... |

---

### 🗣️ En puhekieli

| Kirjakieli | Puhekieli | Sens |
|------------|-----------|------|
| Minusta | **Musta** | À mon avis |
| Mielestäni | **Mun mielest** | Selon moi |
| Olen samaa mieltä | **Oon samaa mieltä** | Je suis d'accord |
| Tietenkin | **Tietty** | Bien sûr |`
      },
      {
        type: 'theory',
        title: 'Exprimer ses préférences',
        content: `### ❤️ Aimer et ne pas aimer

En finnois, le verbe "pitää" (aimer) se construit avec l'**élatif** (-sta/-stä).

---

### 📋 Verbes de préférence

| Verbe | Construction | Exemple | Traduction |
|-------|--------------|---------|------------|
| **pitää** | + élatif | Pidän kahvi**sta**. | J'aime le café. |
| **tykätä** (fam.) | + élatif | Tykkään musii**kista**. | J'aime la musique. |
| **rakastaa** | + partitif | Rakastan suome**a**. | J'adore le finnois. |
| **vihata** | + partitif | Vihaan talve**a**. | Je déteste l'hiver. |
| **inhota** | + partitif | Inhoan sipuli**a**. | J'ai horreur de l'oignon. |

---

### 📋 Exemples avec pitää

| Affirmatif | Négatif |
|------------|---------|
| Pidän **kahvista**. | **En pidä** kahvista. |
| Pidän **lukemisesta**. | **En pidä** lukemisesta. |
| Pidän **sinusta**. | **En pidä** sinusta. |

> ⚠️ **Attention** : "Pidän sinusta" = Je t'aime bien (amitié). "Rakastan sinua" = Je t'aime (amour).

---

### 📋 Exprimer des préférences comparatives

| Finnois | Français |
|---------|----------|
| Pidän **enemmän** teestä kuin kahvista. | Je préfère le thé au café. |
| **Mieluummin** teetä. | Plutôt du thé. |
| Tämä on **paras**! | C'est le meilleur! |
| **Lempi**ruokani on pizza. | Mon plat préféré est la pizza. |

---

### 🗣️ Dialogue - Ravintolassa (Au restaurant)

**Tarjoilija:** Haluaisitko lihaa vai kalaa?
*Voudriez-vous de la viande ou du poisson?*

**Asiakas:** Pidän enemmän kalasta. Otan kalan.
*Je préfère le poisson. Je prends le poisson.*

**Tarjoilija:** Entä juomaksi?
*Et comme boisson?*

**Asiakas:** En pidä viinistä. Vettä, kiitos.
*Je n'aime pas le vin. De l'eau, s'il vous plaît.*`
      },
      {
        type: 'theory',
        title: 'Demander l\'avis de quelqu\'un',
        content: `### ❓ Poser des questions sur les opinions

---

### 📋 Questions courantes

| Finnois | Français |
|---------|----------|
| **Mitä mieltä olet?** | Qu'en penses-tu? |
| **Mitä sinusta...?** | Que penses-tu de...? |
| **Pidätkö...?** | Aimes-tu...? |
| **Entä sinä?** | Et toi? |
| **Oletko samaa mieltä?** | Tu es d'accord? |
| **Eikö niin?** | N'est-ce pas? |

---

### 📋 Répondre aux questions d'opinion

| Question | Réponse positive | Réponse négative |
|----------|------------------|------------------|
| Pidätkö kahvista? | Kyllä, pidän. | En pidä. |
| Mitä mieltä olet? | Minusta se on hyvä. | Minusta se ei ole hyvä. |
| Oletko samaa mieltä? | Kyllä, olen. | En ole. |

---

### 🗣️ Dialogue - Mielipiteitä (Opinions)

**A:** Mitä mieltä olet uudesta opettajasta?
*Que penses-tu du nouveau professeur?*

**B:** Minusta hän on mukava. Entä sinä?
*Je trouve qu'il est sympa. Et toi?*

**A:** Olen samaa mieltä! Hän selittää hyvin.
*Je suis d'accord! Il explique bien.*

**B:** Totta. Pidän hänen tunneistaan.
*C'est vrai. J'aime ses cours.*

---

### 🗣️ En puhekieli

| Kirjakieli | Puhekieli | Sens |
|------------|-----------|------|
| Mitä mieltä olet? | Mitä mieltä sä oot? | Qu'en penses-tu? |
| Pidätkö? | Tykkäätsä? | Tu aimes? |
| Entä sinä? | Entä sä? / Sä sit? | Et toi? |

> 💡 **Astuce** : "Tykätä" est plus courant que "pitää" en puhekieli pour exprimer les goûts.`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "À mon avis"?',
        options: ['Minun', 'Minusta', 'Minulle', 'Minulla'],
        correct: 1,
        explanation: 'Minusta = À mon avis. C\'est l\'élatif de minä.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quel cas utilise-t-on avec "pitää" (aimer)?',
        options: ['Partitif', 'Génitif', 'Élatif', 'Illatif'],
        correct: 2,
        explanation: 'Pitää + élatif : Pidän kahvista (J\'aime le café).'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "Je suis d\'accord"?',
        options: ['Olen eri mieltä', 'Olen samaa mieltä', 'Minusta', 'Luulen'],
        correct: 1,
        explanation: 'Olen samaa mieltä = Je suis d\'accord (littéralement "Je suis de la même opinion").'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Pidän ___. (J\'aime le café)',
        answer: 'kahvista',
        hint: 'Café à l\'élatif (kahvi + sta)'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: '___ se oli hyvä elokuva. (À mon avis, c\'était un bon film)',
        answer: 'Minusta',
        hint: 'Élatif de minä'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'En ___ kalasta. (Je n\'aime pas le poisson)',
        answer: 'pidä',
        hint: 'Forme négative de pitää'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Oletko ___ mieltä? (Tu es d\'accord?)',
        answer: 'samaa',
        hint: 'Même (au partitif)'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Minusta suomi on kaunis kieli.',
        answer: 'À mon avis, le finnois est une belle langue.',
        alternatives: ['Selon moi, le finnois est une belle langue.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Pidän enemmän teestä kuin kahvista.',
        answer: 'Je préfère le thé au café.',
        alternatives: ['J\'aime mieux le thé que le café.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Je ne suis pas d\'accord.',
        answer: 'Olen eri mieltä.',
        alternatives: ['En ole samaa mieltä.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Qu\'en penses-tu?',
        answer: 'Mitä mieltä olet?',
        alternatives: ['Mitä mieltä sä oot?', 'Mitä sä ajattelet?']
      }
    ],
    vocabulary: [
      { fi: 'minusta', fr: 'à mon avis', puhekieli: 'musta' },
      { fi: 'mielestäni', fr: 'selon moi', puhekieli: 'mun mielest' },
      { fi: 'luulen', fr: 'je pense / je crois', puhekieli: 'luulen' },
      { fi: 'uskon', fr: 'je crois', puhekieli: 'uskon' },
      { fi: 'ajattelen', fr: 'je pense', puhekieli: 'ajattelen' },
      { fi: 'pitää + élatif', fr: 'aimer', puhekieli: 'pitää' },
      { fi: 'tykätä + élatif', fr: 'aimer (familier)', puhekieli: 'tykätä' },
      { fi: 'samaa mieltä', fr: 'd\'accord', puhekieli: 'samaa mieltä' },
      { fi: 'eri mieltä', fr: 'pas d\'accord', puhekieli: 'eri mieltä' },
      { fi: 'tietenkin', fr: 'bien sûr', puhekieli: 'tietty' },
      { fi: 'ehkä', fr: 'peut-être', puhekieli: 'ehkä' },
      { fi: 'mieluummin', fr: 'plutôt', puhekieli: 'mieluummin' },
      { fi: 'enemmän', fr: 'plus / davantage', puhekieli: 'enemmän' },
      { fi: 'lempiruoka', fr: 'plat préféré', puhekieli: 'lemppari' },
      { fi: 'ehdottomasti', fr: 'absolument', puhekieli: 'ehdottomasti' }
    ]
  },
  {
    id: 'a2-9',
    level: 'A2',
    module: 'A2.3',
    title: 'Verbityypit 2-3 - Verbes types 2 et 3',
    description: 'Conjugaison des verbes en -da/-dä et -la/-na/-ra',
    sections: [
      {
        type: 'theory',
        title: 'Les types de verbes finnois',
        content: `### 📚 Rappel : Les 6 types de verbes finnois

Le finnois classe ses verbes en 6 types selon leur terminaison. Chaque type a ses propres règles de conjugaison.

---

### 📋 Vue d'ensemble des types

| Type | Terminaison | Exemples |
|------|-------------|----------|
| **Type 1** | -a/-ä, -oa/-öä | puhua, sanoa, lukea |
| **Type 2** | -da/-dä | syödä, juoda, tehdä |
| **Type 3** | -la/-lä, -na/-nä, -ra/-rä | tulla, mennä, purra |
| **Type 4** | -ta/-tä (après voyelle) | tavata, haluta, pelätä |
| **Type 5** | -ita/-itä | tarvita, valita |
| **Type 6** | -eta/-etä | vanheta, lämmetä |

> 💡 **Astuce** : Dans cette leçon, nous nous concentrons sur les types 2 et 3, qui incluent des verbes très courants comme "faire", "manger", "venir" et "aller".`
      },
      {
        type: 'theory',
        title: 'Verbes type 2 (-da/-dä)',
        content: `### ✌️ Type 2 : Verbes en -da/-dä

Les verbes du type 2 se terminent en **-da** ou **-dä**.

---

### 📋 Verbes courants du type 2

| Infinitif | Sens | Particularité |
|-----------|------|---------------|
| **syödä** | manger | Radical court : syö- |
| **juoda** | boire | Radical court : juo- |
| **saada** | recevoir, pouvoir | Radical court : saa- |
| **voida** | pouvoir | Radical court : voi- |
| **tehdä** | faire | Radical avec e : teke- |
| **nähdä** | voir | Radical avec e : näke- |

---

### 📋 Conjugaison au présent

**Verbes à radical court (syödä, juoda, saada) :**

| Pronom | syödä | juoda | saada |
|--------|-------|-------|-------|
| **minä** | syö**n** | juo**n** | saa**n** |
| **sinä** | syö**t** | juo**t** | saa**t** |
| **hän** | syö | juo | saa |
| **me** | syö**mme** | juo**mme** | saa**mme** |
| **te** | syö**tte** | juo**tte** | saa**tte** |
| **he** | syö**vät** | juo**vat** | saa**vat** |

---

### 📋 Verbes avec radical en -ke-/-ke- (tehdä, nähdä)

| Pronom | tehdä | nähdä |
|--------|-------|-------|
| **minä** | tee**n** | näe**n** |
| **sinä** | tee**t** | näe**t** |
| **hän** | teke**e** | näke**e** |
| **me** | tee**mme** | näe**mme** |
| **te** | tee**tte** | näe**tte** |
| **he** | teke**vät** | näke**vät** |

> ⚠️ **Attention** : "Tehdä" et "nähdä" ont un radical qui change ! Le -k- apparaît à la 3ème personne.`
      },
      {
        type: 'theory',
        title: 'Verbes type 3 (-la/-na/-ra)',
        content: `### 3️⃣ Type 3 : Verbes en -la/-lä, -na/-nä, -ra/-rä

Les verbes du type 3 incluent les très importants "tulla" (venir) et "mennä" (aller).

---

### 📋 Verbes courants du type 3

| Infinitif | Sens | Radical |
|-----------|------|---------|
| **tulla** | venir | tule- |
| **mennä** | aller | mene- |
| **olla** | être | ole- |
| **opiskella** | étudier | opiskele- |
| **ajatella** | penser | ajattele- |
| **kuunnella** | écouter | kuuntele- |
| **panna** | mettre | pane- |
| **purra** | mordre | pure- |

---

### 📋 Formation du radical

On enlève la terminaison (-la/-na/-ra) et on ajoute -e- :
- tul-la → tul**e**- → tulen
- men-nä → men**e**- → menen
- opiskel-la → opiskel**e**- → opiskelen

---

### 📋 Conjugaison au présent

| Pronom | tulla | mennä | opiskella |
|--------|-------|-------|-----------|
| **minä** | tule**n** | mene**n** | opiskele**n** |
| **sinä** | tule**t** | mene**t** | opiskele**t** |
| **hän** | tule**e** | mene**e** | opiskele**e** |
| **me** | tule**mme** | mene**mme** | opiskele**mme** |
| **te** | tule**tte** | mene**tte** | opiskele**tte** |
| **he** | tule**vat** | mene**vät** | opiskele**vat** |

> 💡 **Astuce** : Les verbes en -lla ont souvent un double l dans le radical qui devient simple + e.`
      },
      {
        type: 'theory',
        title: 'Types 2-3 en puhekieli et à l\'imparfait',
        content: `### 🗣️ En puhekieli (langue parlée)

En puhekieli, "me" (nous) utilise souvent le passif au lieu de la forme standard.

---

### 📋 Formes parlées courantes

| Kirjakieli | Puhekieli | Sens |
|------------|-----------|------|
| Me syömme | Me **syödään** | Nous mangeons |
| Me juomme | Me **juodaan** | Nous buvons |
| Me teemme | Me **tehdään** | Nous faisons |
| Me tulemme | Me **tullaan** | Nous venons |
| Me menemme | Me **mennään** | Nous allons |

---

### 📋 À l'imparfait

| Infinitif | Minä (présent) | Minä (imparfait) |
|-----------|----------------|------------------|
| **syödä** | syön | söin |
| **juoda** | juon | join |
| **tehdä** | teen | tein |
| **nähdä** | näen | näin |
| **tulla** | tulen | tulin |
| **mennä** | menen | menin |

---

### 🗣️ Dialogue - Illalla kotona (Le soir à la maison)

**A:** Mitä tehdään illalla?
*Qu'est-ce qu'on fait ce soir?*

**B:** Mennään ulos syömään?
*On va manger dehors?*

**A:** Hyvä idea! Minne mennään?
*Bonne idée! On va où?*

**B:** Tullaan takaisin siihen ravintolaan, missä söimme viime viikolla.
*On retourne à ce restaurant où on a mangé la semaine dernière.*

> 💡 **Astuce** : "Tehdään", "mennään", "tullaan" sont omniprésents en puhekieli!`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "je fais"?',
        options: ['tehdän', 'teen', 'tehdä', 'tekevät'],
        correct: 1,
        explanation: 'Teen = je fais. Tehdä est un verbe type 2 avec le radical teke-.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quel est le type du verbe "tulla" (venir)?',
        options: ['Type 1', 'Type 2', 'Type 3', 'Type 4'],
        correct: 2,
        explanation: 'Tulla est un verbe type 3 car il se termine en -lla.'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "il/elle voit" en finnois?',
        options: ['nähdä', 'näen', 'näkee', 'näet'],
        correct: 2,
        explanation: 'Hän näkee = il/elle voit. Le radical näke- apparaît à la 3ème personne.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Hän ___ Suomeen huomenna. (Il/elle vient en Finlande demain)',
        answer: 'tulee',
        hint: 'Forme de tulla pour hän'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Mitä ___? (Que fais-tu?)',
        answer: 'teet',
        hint: 'Forme de tehdä pour sinä'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: '___ suomea koulussa. (J\'étudie le finnois à l\'école)',
        answer: 'Opiskelen',
        hint: 'Forme de opiskella pour minä'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'He ___ paljon kahvia. (Ils boivent beaucoup de café)',
        answer: 'juovat',
        hint: 'Forme de juoda pour he'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Nous mangeons et buvons.',
        answer: 'Syömme ja juomme.',
        alternatives: ['Me syödään ja juodaan.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Mitä tehdään tänään?',
        answer: 'Qu\'est-ce qu\'on fait aujourd\'hui?',
        alternatives: ['Que fait-on aujourd\'hui?']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Je viens demain.',
        answer: 'Tulen huomenna.',
        alternatives: ['Mä tuun huomenna.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Tu vas où?',
        answer: 'Minne menet?',
        alternatives: ['Mihin sä meet?', 'Minne meet?']
      },
      // Section bonus : Exercices de gradation consonantique
      {
        type: 'theory',
        title: 'Bonus: Gradation consonantique (KPT)',
        content: `### 🔄 La gradation consonantique

La gradation consonantique est un changement de consonnes qui se produit lors de la conjugaison de certains verbes et la déclinaison des noms.

---

### 📋 Les alternances principales

| Forte | Faible | Exemple |
|-------|--------|---------|
| **pp** | **p** | kauppa → kaupan |
| **tt** | **t** | matto → maton |
| **kk** | **k** | kukka → kukan |
| **p** | **v** | tapa → tavan |
| **t** | **d** | katu → kadun |
| **k** | **∅** | jalka → jalan |
| **mp** | **mm** | kampa → kamman |
| **nt** | **nn** | ranta → rannan |
| **nk** | **ng** | kenkä → kengän |
| **lt** | **ll** | ilta → illan |
| **rt** | **rr** | parta → parran |

---

### 📋 Quand appliquer la gradation?

**Forme forte** (nominatif, 3ème personne):
- kauppa, kukka, lukea → lukee

**Forme faible** (autres cas, autres personnes):
- kaupan, kukan, luen, luet

> 💡 **Astuce** : Si la syllabe suivante est "ouverte" (termine par voyelle), on utilise la forme faible.`
      },
      {
        type: 'exercise',
        exerciseType: 'gradation',
        instruction: 'Applique la gradation consonantique (forte → faible) :',
        word: 'kauppa',
        direction: 'strong-to-weak',
        pattern: 'pp → p',
        answer: 'kaupan',
        alternatives: ['kaupa'],
        context: 'kauppa → kaupa/n (génitif)',
        showHelp: true,
        explanation: 'pp devient p dans les syllabes fermées: kauppa → kaupan'
      },
      {
        type: 'exercise',
        exerciseType: 'gradation',
        instruction: 'Applique la gradation consonantique (forte → faible) :',
        word: 'kukka',
        direction: 'strong-to-weak',
        pattern: 'kk → k',
        answer: 'kukan',
        alternatives: ['kuka'],
        context: 'kukka → kuka/n (génitif)',
        showHelp: true,
        explanation: 'kk devient k: kukka → kukan'
      },
      {
        type: 'exercise',
        exerciseType: 'gradation',
        instruction: 'Applique la gradation consonantique (forte → faible) :',
        word: 'katu',
        direction: 'strong-to-weak',
        pattern: 't → d',
        answer: 'kadun',
        alternatives: ['kadu'],
        context: 'katu → kadu/n (génitif)',
        showHelp: true,
        explanation: 't devient d: katu → kadun'
      },
      {
        type: 'exercise',
        exerciseType: 'gradation',
        instruction: 'Applique la gradation consonantique (forte → faible) :',
        word: 'jalka',
        direction: 'strong-to-weak',
        pattern: 'k → ∅',
        answer: 'jalan',
        alternatives: ['jala'],
        context: 'jalka → jala/n (génitif) - le k disparaît!',
        showHelp: true,
        explanation: 'k simple disparaît devant une syllabe fermée: jalka → jalan'
      },
      {
        type: 'exercise',
        exerciseType: 'gradation',
        instruction: 'Applique la gradation consonantique (forte → faible) :',
        word: 'ranta',
        direction: 'strong-to-weak',
        pattern: 'nt → nn',
        answer: 'rannan',
        alternatives: ['ranna'],
        context: 'ranta → ranna/n (génitif)',
        showHelp: false,
        explanation: 'nt devient nn: ranta → rannan'
      },
      {
        type: 'exercise',
        exerciseType: 'gradation',
        instruction: 'Conjugue le verbe "lukea" (lire) à la 1ère personne (minä) :',
        word: 'lukea',
        direction: 'strong-to-weak',
        pattern: 'k → ∅ (dans les verbes)',
        answer: 'luen',
        alternatives: [],
        context: 'lukea → luen (le k disparaît à la 1ère personne)',
        showHelp: false,
        explanation: 'Dans les verbes type 1, le k disparaît sauf à la 3ème personne: lukea → luen, mais hän lukee'
      }
    ],
    vocabulary: [
      { fi: 'syödä', fr: 'manger', puhekieli: 'syödä' },
      { fi: 'juoda', fr: 'boire', puhekieli: 'juoda' },
      { fi: 'tehdä', fr: 'faire', puhekieli: 'tehdä' },
      { fi: 'nähdä', fr: 'voir', puhekieli: 'nähä' },
      { fi: 'saada', fr: 'recevoir / pouvoir', puhekieli: 'saada' },
      { fi: 'voida', fr: 'pouvoir', puhekieli: 'voida' },
      { fi: 'tulla', fr: 'venir', puhekieli: 'tulla' },
      { fi: 'mennä', fr: 'aller', puhekieli: 'mennä' },
      { fi: 'olla', fr: 'être', puhekieli: 'olla' },
      { fi: 'ajatella', fr: 'penser', puhekieli: 'ajatella' },
      { fi: 'opiskella', fr: 'étudier', puhekieli: 'opiskella' },
      { fi: 'kuunnella', fr: 'écouter', puhekieli: 'kuunnella' },
      { fi: 'panna', fr: 'mettre', puhekieli: 'panna' },
      { fi: 'huomenna', fr: 'demain', puhekieli: 'huomen' },
      { fi: 'tänään', fr: 'aujourd\'hui', puhekieli: 'tänää' }
    ]
  },
  {
    id: 'a2-10',
    level: 'A2',
    module: 'A2.3',
    title: 'Vertailu - La comparaison',
    description: 'Comparatifs et superlatifs en finnois',
    sections: [
      {
        type: 'theory',
        title: 'Le comparatif : formation',
        content: `### 🎯 Comparer deux éléments

En finnois, pour dire "plus [adjectif]", on ajoute le suffixe **-mpi** à l'adjectif.

---

### 📋 Formation du comparatif

| **Adjectif** | **Sens** | **Comparatif** | **Sens** |
|--------------|----------|----------------|----------|
| **iso** | grand | **isompi** | plus grand |
| **pieni** | petit | **pienempi** | plus petit |
| **nopea** | rapide | **nopeampi** | plus rapide |
| **kaunis** | beau | **kauniimpi** | plus beau |
| **vanha** | vieux | **vanhempi** | plus vieux |
| **nuori** | jeune | **nuorempi** | plus jeune |
| **halpa** | bon marché | **halvempi** | moins cher |
| **kallis** | cher | **kalliimpi** | plus cher |

---

### 🔧 Règles de formation

**1. Alternance consonantique inversée :**
Le comparatif utilise le **degré fort** du radical.

| Adjectif | Radical faible | Comparatif (fort) |
|----------|----------------|-------------------|
| halpa | halva- | **halvempi** |
| helppo | helpo- | **helpompi** |

**2. Voyelles doubles :**
Si l'adjectif finit par une voyelle, celle-ci se double souvent.

| Adjectif | Comparatif |
|----------|------------|
| kaunis | kauni**i**mpi |
| kallis | kall**ii**mpi |

> 💡 **Astuce** : Le comparatif se décline ! Au partitif : isompi → **isompaa**, pienempi → **pienempää**.`
      },
      {
        type: 'theory',
        title: 'La structure comparative',
        content: `### 🔄 Comparer avec "kuin"

**Structure :** A on [comparatif] **kuin** B = A est plus [adj] que B

---

### 📝 Exemples de comparaisons

| **Finnois** | **Français** |
|-------------|--------------|
| Koira on **isompi kuin** kissa | Le chien est plus grand que le chat |
| Helsinki on **suurempi kuin** Turku | Helsinki est plus grand que Turku |
| Kesä on **lämpimämpi kuin** talvi | L'été est plus chaud que l'hiver |
| Juna on **nopeampi kuin** bussi | Le train est plus rapide que le bus |
| Tämä ravintola on **halvempi kuin** tuo | Ce restaurant est moins cher que celui-là |

---

### 🗣️ Dialogue : Comparaisons au quotidien

**Matti:** Kumpi on parempi, tee vai kahvi?
*(Lequel est meilleur, le thé ou le café ?)*

**Liisa:** Minusta kahvi on parempi. Se on vahvempi.
*(Pour moi le café est meilleur. Il est plus fort.)*

**Matti:** Mutta tee on terveellisempi kuin kahvi!
*(Mais le thé est plus sain que le café !)*

**Liisa:** Ehkä, mutta kahvi maistuu paremmalta.
*(Peut-être, mais le café a meilleur goût.)*

> 💡 **Astuce** : En puhekieli, "kuin" se dit souvent **"ku"** : *Isompi ku kissa* (plus grand que le chat).`
      },
      {
        type: 'theory',
        title: 'Le superlatif',
        content: `### 🏆 Le plus, le meilleur

Pour exprimer le superlatif ("le plus [adjectif]"), on utilise le suffixe **-in**.

---

### 📋 Formation du superlatif

| **Adjectif** | **Comparatif** | **Superlatif** |
|--------------|----------------|----------------|
| iso | isompi | **isoin** |
| pieni | pienempi | **pienin** |
| nopea | nopeampi | **nopein** |
| kaunis | kauniimpi | **kaunein** |
| vanha | vanhempi | **vanhin** |
| nuori | nuorempi | **nuorin** |
| halpa | halvempi | **halvin** |
| kallis | kalliimpi | **kallein** |

---

### 📝 Exemples d'utilisation

| **Finnois** | **Français** |
|-------------|--------------|
| Suomi on **kaunein** maa | La Finlande est le plus beau pays |
| Tämä on **paras** kahvi | C'est le meilleur café |
| Helsinki on **suurin** kaupunki | Helsinki est la plus grande ville |
| Hän on **vanhin** oppilas | Il/Elle est l'élève le plus âgé(e) |
| Se on **halvin** vaihtoehto | C'est l'option la moins chère |

---

### 🔧 Le superlatif se décline aussi

| **Cas** | **Exemple** | **Sens** |
|---------|-------------|----------|
| Nominatif | paras | le meilleur |
| Génitif | **parhaan** | du meilleur |
| Partitif | **parasta** | le meilleur (partitif) |
| Inessif | **parhaassa** | dans le meilleur |

> 💡 **Astuce** : "Le meilleur café" = **paras kahvi**, mais "J'aime le meilleur café" = Pidän **parhaasta** kahvista (élatif).`
      },
      {
        type: 'theory',
        title: 'Irréguliers et autrescomparaisons',
        content: `### ⚠️ Comparatifs et superlatifs irréguliers

Certains adjectifs très courants ont des formes irrégulières :

| **Adjectif** | **Sens** | **Comparatif** | **Superlatif** |
|--------------|----------|----------------|----------------|
| **hyvä** | bon | **parempi** | **paras** |
| **huono** | mauvais | huonompi | huonoin |
| **paljon** | beaucoup | **enemmän** | **eniten** |
| **vähän** | peu | **vähemmän** | **vähiten** |
| **pitkä** | long | **pitempi** | **pisin** |
| **lyhyt** | court | **lyhyempi** | **lyhin** |

---

### 🔄 Égalité : "aussi... que"

**Structure :** yhtä [adjectif] **kuin** = aussi [adjectif] que

| **Finnois** | **Français** |
|-------------|--------------|
| Yhtä iso **kuin** | Aussi grand que |
| Yhtä kaunis **kuin** | Aussi beau que |
| Yhtä hyvä **kuin** | Aussi bon que |

**Exemples :**
- Suomi on **yhtä kaunis kuin** Ruotsi = La Finlande est aussi belle que la Suède
- Tämä on **yhtä kallis kuin** tuo = Ceci est aussi cher que cela

---

### ⬇️ Infériorité : "moins... que"

Il n'y a pas de forme spéciale. On utilise **vähemmän** + adjectif :

- Tämä on **vähemmän kallis** kuin tuo = Ceci est moins cher que cela

Ou on inverse la comparaison :
- Tuo on **kalliimpi** kuin tämä = Cela est plus cher que ceci

---

### 🗣️ En puhekieli

| **Kirjakieli** | **Puhekieli** | **Sens** |
|----------------|---------------|----------|
| kuin | **ku** | que |
| parempi | parempi | meilleur |
| yhtä hyvä kuin | yhtä hyvä ku | aussi bon que |
| enemmän | enemmän | plus (quantité) |

> 💡 **Astuce culturelle** : Les Finlandais adorent les superlatifs ! Ils sont fiers que la Finlande soit "paras maa maailmassa" (le meilleur pays du monde) selon de nombreux classements.`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "plus grand" ?',
        options: ['iso', 'isoin', 'isompi', 'isoa'],
        correct: 2,
        explanation: 'Isompi = plus grand. C\'est le comparatif de iso. Le superlatif serait "isoin" (le plus grand).'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quel est le superlatif de "hyvä" (bon) ?',
        options: ['hyvämpi', 'parempi', 'hyvin', 'paras'],
        correct: 3,
        explanation: 'Hyvä a des formes irrégulières : hyvä → parempi (meilleur) → paras (le meilleur).'
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Que signifie "kaunein" ?',
        options: ['beau', 'plus beau', 'le plus beau', 'aussi beau'],
        correct: 2,
        explanation: 'Kaunein est le superlatif de kaunis : le plus beau. Le comparatif serait "kauniimpi".'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Tämä kahvi on ___ kuin tuo. (Ce café est meilleur que celui-là)',
        answer: 'parempi',
        hint: 'Comparatif irrégulier de hyvä'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Koira on ___ kuin kissa. (Le chien est plus grand que le chat)',
        answer: 'isompi',
        hint: 'Comparatif de iso'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Helsinki on Suomen ___ kaupunki. (Helsinki est la plus grande ville de Finlande)',
        answer: 'suurin',
        hint: 'Superlatif de suuri (grand)'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Minä olen yhtä vanha ___ sinä. (J\'ai le même âge que toi)',
        answer: 'kuin',
        hint: 'Le mot pour "que" dans une comparaison'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Suomi on kaunein maa maailmassa.',
        answer: 'La Finlande est le plus beau pays du monde.',
        alternatives: ['La Finlande est le plus beau pays au monde.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Juna on nopeampi kuin bussi.',
        answer: 'Le train est plus rapide que le bus.',
        alternatives: ['Le train est plus rapide que l\'autobus.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'C\'est le meilleur café.',
        answer: 'Tämä on paras kahvi.',
        alternatives: ['Se on paras kahvi.']
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'Ma soeur est plus jeune que moi.',
        answer: 'Siskoni on nuorempi kuin minä.',
        alternatives: ['Minun siskoni on nuorempi kuin minä.', 'Mun sisko on nuorempi ku mä.']
      }
    ],
    vocabulary: [
      { fi: 'isompi', fr: 'plus grand', puhekieli: 'isompi' },
      { fi: 'pienempi', fr: 'plus petit', puhekieli: 'pienempi' },
      { fi: 'parempi', fr: 'meilleur', puhekieli: 'parempi' },
      { fi: 'huonompi', fr: 'pire', puhekieli: 'huonompi' },
      { fi: 'nopeampi', fr: 'plus rapide', puhekieli: 'nopeempi' },
      { fi: 'halvempi', fr: 'moins cher', puhekieli: 'halvempi' },
      { fi: 'kalliimpi', fr: 'plus cher', puhekieli: 'kalliimpi' },
      { fi: 'nuorempi', fr: 'plus jeune', puhekieli: 'nuorempi' },
      { fi: 'vanhempi', fr: 'plus vieux / parent', puhekieli: 'vanhempi' },
      { fi: 'isoin', fr: 'le plus grand', puhekieli: 'isoin' },
      { fi: 'paras', fr: 'le meilleur', puhekieli: 'paras' },
      { fi: 'kaunein', fr: 'le plus beau', puhekieli: 'kaunein' },
      { fi: 'kuin', fr: 'que (comparaison)', puhekieli: 'ku' },
      { fi: 'yhtä...kuin', fr: 'aussi...que', puhekieli: 'yhtä...ku' },
      { fi: 'enemmän', fr: 'plus (quantité)', puhekieli: 'enemmän' },
      { fi: 'vähemmän', fr: 'moins (quantité)', puhekieli: 'vähemmän' },
      { fi: 'eniten', fr: 'le plus (quantité)', puhekieli: 'eniten' },
      { fi: 'maailma', fr: 'monde', puhekieli: 'maailma' }
    ]
  },
  // ============= NIVEAU B1 =============
  {
    id: 'b1-1',
    level: 'B1',
    module: 'B1.1',
    title: 'Passiivi - Le passif',
    description: 'La voix passive en finnois',
    sections: [
      {
        type: 'theory',
        title: 'Formation du passif present',
        content: `Le **passif** en finnois est très utilisé, surtout en puhekieli pour "nous".

**Formation (present):**
Radical + **-taan/-tään** ou **-daan/-dään**

**Verbes type 1:**
| Infinitif | Passif |
|-----------|--------|
| puhua | puhutaan |
| lukea | luetaan |
| sanoa | sanotaan |
| opiskella | opiskellaan |

**Verbes type 2-3:**
| Infinitif | Passif |
|-----------|--------|
| syödä | syödään |
| juoda | juodaan |
| tehdä | tehdään |
| mennä | mennään |
| tulla | tullaan |`
      },
      {
        type: 'theory',
        title: 'Utilisations du passif',
        content: `**1. "On" impersonnel:**
- Suomessa puhutaan suomea = En Finlande, on parle finnois
- Täällä syödään paljon kalaa = Ici, on mange beaucoup de poisson

**2. "Nous" en puhekieli (très courant!):**
- Me mennään! = Nous allons! (au lieu de "me menemme")
- Me tehdään se! = Nous le faisons!
- Lähdetään! = Allons-y!

**3. Instructions générales:**
- Täällä ei saa tupakoida = Ici, il est interdit de fumer
- Kirjoja lainataan kirjastosta = On emprunte des livres à la bibliothèque

**Négation du passif:**
- Ei puhuta = On ne parle pas
- Ei mennä = On n'y va pas`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "On parle finnois" en passif?',
        options: ['Puhuu suomea', 'Puhutaan suomea', 'Puhuvat suomea', 'Puhua suomea'],
        correct: 1,
        explanation: 'Puhutaan suomea = On parle finnois. C\'est le passif de puhua.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Me ___ elokuviin! (Nous allons au cinema - puhekieli)',
        answer: 'mennään',
        hint: 'Passif de mennä (utilise pour "nous")'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Suomessa juodaan paljon kahvia.',
        answer: 'En Finlande, on boit beaucoup de cafe.',
        alternatives: ['On boit beaucoup de cafe en Finlande.']
      }
    ],
    vocabulary: [
      { fi: 'puhutaan', fr: 'on parle', puhekieli: 'puhutaan' },
      { fi: 'syödään', fr: 'on mange', puhekieli: 'syödään' },
      { fi: 'mennään', fr: 'on va', puhekieli: 'mennään' },
      { fi: 'tehdään', fr: 'on fait', puhekieli: 'tehdään' },
      { fi: 'tullaan', fr: 'on vient', puhekieli: 'tullaan' },
      { fi: 'lähdetään', fr: 'on part', puhekieli: 'lähdetään' },
      { fi: 'sanotaan', fr: 'on dit', puhekieli: 'sanotaan' },
      { fi: 'nähdään', fr: 'on se voit', puhekieli: 'nähään' },
      { fi: 'tavataan', fr: 'on se rencontre', puhekieli: 'tavataan' },
      { fi: 'aloitetaan', fr: 'on commence', puhekieli: 'alotetaan' }
    ]
  },
  {
    id: 'b1-2',
    level: 'B1',
    module: 'B1.1',
    title: 'Verbityypit 4-6 - Verbes types 4 a 6',
    description: 'Les derniers types de verbes finnois',
    sections: [
      {
        type: 'theory',
        title: 'Verbes type 4 (-ata/-ätä, -ota/-ötä, -uta/-ytä)',
        content: `**Type 4:** terminaison en **-ata/-ätä, -ota/-ötä, -uta/-ytä**

**Exemples:** haluta, tavata, vastata, pelata, herätä

**Conjugaison:** Le radical perd la voyelle finale + a devient aa

| Infinitif | Radical | Minä | Hän |
|-----------|---------|------|-----|
| haluta | halua- | haluan | haluaa |
| tavata | tapaa- | tapaan | tapaa |
| vastata | vastaa- | vastaan | vastaa |
| pelata | pelaa- | pelaan | pelaa |
| herätä | herää- | herään | herää |

**Attention:** Changements consonantiques!
- tavata: t → p (tapaan)
- pelata: pas de changement`
      },
      {
        type: 'theory',
        title: 'Verbes types 5 et 6',
        content: `**Type 5:** terminaison en **-ita/-itä**

| Infinitif | Minä | Hän |
|-----------|------|-----|
| tarvita | tarvitsen | tarvitsee |
| valita | valitsen | valitsee |
| merkitä | merkitsen | merkitsee |

Formation: radical + tse + terminaison

**Type 6:** terminaison en **-eta/-etä**

| Infinitif | Minä | Hän |
|-----------|------|-----|
| vanheta | vanhenen | vanhenee |
| paeta | pakenen | pakenee |
| kyetä | kykenen | kykenee |

Formation: radical + ne + terminaison

**Conseil:** Les types 5 et 6 sont rares. Concentre-toi sur les types 1-4!`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "je veux" avec le verbe haluta?',
        options: ['halutan', 'haluan', 'haluaan', 'halua'],
        correct: 1,
        explanation: 'Haluan = je veux. C\'est un verbe type 4: haluta → halua- → haluan.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Minä ___ sinua huomenna. (Je te rencontre demain)',
        answer: 'tapaan',
        hint: 'Verbe tavata, type 4, attention au changement t→p'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fr-fi',
        question: 'J\'ai besoin d\'aide.',
        answer: 'Tarvitsen apua.',
        alternatives: ['Minä tarvitsen apua.']
      }
    ],
    vocabulary: [
      { fi: 'haluta', fr: 'vouloir', puhekieli: 'haluta' },
      { fi: 'tavata', fr: 'rencontrer', puhekieli: 'tavata' },
      { fi: 'vastata', fr: 'répondre', puhekieli: 'vastata' },
      { fi: 'pelata', fr: 'jouer', puhekieli: 'pelata' },
      { fi: 'herätä', fr: 'se réveiller', puhekieli: 'herätä' },
      { fi: 'tarvita', fr: 'avoir besoin', puhekieli: 'tarvita' },
      { fi: 'valita', fr: 'choisir', puhekieli: 'valita' },
      { fi: 'häiritä', fr: 'deranger', puhekieli: 'häiritä' },
      { fi: 'vanheta', fr: 'vieillir', puhekieli: 'vanheta' },
      { fi: 'paeta', fr: 'fuir', puhekieli: 'paeta' }
    ]
  },
  {
    id: 'b1-3',
    level: 'B1',
    module: 'B1.1',
    title: 'Täytyy ja pitää - Necessite et obligation',
    description: 'Exprimer le devoir et la nécessité',
    sections: [
      {
        type: 'theory',
        title: 'Structures impersonnelles',
        content: `**Exprimer "il faut" / "devoir":**

**1. Täytyy** (il faut, necessaire)
- Minun täytyy mennä = Je dois partir
- Sinun täytyy opiskella = Tu dois etudier

**2. Pitää** (il faut, devoir)
- Minun pitää syödä = Je dois manger
- Meidän pitää lähteä = Nous devons partir

**3. On pakko** (être obligé)
- Minun on pakko tehdä se = Je suis obligé de le faire

**Structure:**
Pronom au GENITIF + täytyy/pitää + 1er infinitif

| Pronom | Genitif |
|--------|---------|
| minä | minun |
| sinä | sinun |
| hän | hänen |
| me | meidän |`
      },
      {
        type: 'theory',
        title: 'Autresexpressions de nécessité',
        content: `**Nuances:**

| Expression | Sens | Force |
|------------|------|-------|
| täytyy | il faut | forte |
| pitää | devoir | moyenne |
| on pakko | être obligé | très forte |
| kannattaa | valoir la peine | conseil |
| kuuluu | être censé | attente |

**Exemples:**
- Kannattaa opiskella = Ca vaut la peine d'etudier
- Sinun kuuluu olla täällä = Tu es censé être ici

**Négation:**
- Minun ei tarvitse mennä = Je n'ai pas besoin d'y aller
- Ei pidä/saa tehdä = Il ne faut pas faire

**En puhekieli:**
- Mun täytyy/pitää = Je dois
- Sun täytyy = Tu dois`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "Je dois partir"?',
        options: ['Minä täytyy mennä', 'Minun täytyy mennä', 'Minulle täytyy mennä', 'Minua täytyy mennä'],
        correct: 1,
        explanation: 'Minun täytyy mennä = Je dois partir. Le pronom est au genitif (minun).'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: '___ pitää opiskella suomea. (Nous devons etudier le finnois)',
        answer: 'Meidän',
        hint: 'Genitif de me'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Sinun ei tarvitse tulla, jos et halua.',
        answer: 'Tu n\'as pas besoin de venir si tu ne veux pas.',
        alternatives: ['Tu n\'es pas obligé de venir si tu ne veux pas.']
      }
    ],
    vocabulary: [
      { fi: 'täytyy', fr: 'il faut / devoir', puhekieli: 'täytyy' },
      { fi: 'pitää', fr: 'devoir / falloir', puhekieli: 'pitää' },
      { fi: 'on pakko', fr: 'être obligé', puhekieli: 'on pakko' },
      { fi: 'tarvita', fr: 'avoir besoin', puhekieli: 'tarvita' },
      { fi: 'kannattaa', fr: 'valoir la peine', puhekieli: 'kannattaa' },
      { fi: 'kuulua', fr: 'être censé', puhekieli: 'kuulua' },
      { fi: 'minun', fr: 'mon/de moi', puhekieli: 'mun' },
      { fi: 'sinun', fr: 'ton/de toi', puhekieli: 'sun' },
      { fi: 'meidän', fr: 'notre/de nous', puhekieli: 'meidän' },
      { fi: 'heidän', fr: 'leur/d\'eux', puhekieli: 'heidän' }
    ]
  },
  {
    id: 'b1-4',
    level: 'B1',
    module: 'B1.2',
    title: 'Sivulauseet - Propositions subordonnees',
    description: 'Les conjonctions että, koska, kun, jos',
    sections: [
      {
        type: 'theory',
        title: 'Les principales conjonctions',
        content: `**Conjonctions subordonnantes:**

| Conjonction | Sens | Exemple |
|-------------|------|---------|
| että | que | Tiedän, että olet täällä |
| koska | parce que | Olen väsynyt, koska työskentelin |
| kun | quand/lorsque | Kun tulen kotiin, syön |
| jos | si | Jos sataa, jään kotiin |
| vaikka | bien que | Vaikka olen väsynyt, lähden |
| kunnes | jusqu'a ce que | Odotan, kunnes tulet |

**Structure:**
Proposition principale + conjonction + proposition subordonnee

**Ordre des mots:** En finnois, l'ordre est flexible, mais le verbe reste souvent en 2e position.`
      },
      {
        type: 'theory',
        title: 'Nuances et exemples',
        content: `**Että (que):**
- Luulen, että hän tulee = Je pense qu'il/elle vient
- Toivon, että kaikki on hyvin = J'espère que tout va bien

**Koska (parce que):**
- En tule, koska olen sairas = Je ne viens pas parce que je suis malade
- Koska sataa, jään kotiin = Comme il pleut, je reste à la maison

**Kun (quand):**
- Kun olin nuori, asuin Helsingissä = Quand j'étais jeune, j'habitais à Helsinki
- Soita minulle, kun tulet = Appelle-moi quand tu arrives

**Jos (si):**
- Jos sinulla on aikaa, tule käymään = Si tu as le temps, viens me voir
- En tiedä, jos hän tulee = Je ne sais pas s'il vient`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quelle conjonction signifie "parce que"?',
        options: ['että', 'kun', 'koska', 'jos'],
        correct: 2,
        explanation: 'Koska = parce que. Että = que, Kun = quand, Jos = si.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Tiedän, ___ sinä puhut suomea. (Je sais que tu parles finnois)',
        answer: 'että',
        hint: 'Conjonction "que"'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Jos opit suomea, voit matkustaa Suomeen.',
        answer: 'Si tu apprends le finnois, tu peux voyager en Finlande.',
        alternatives: ['Si tu apprends le finnois, tu pourras voyager en Finlande.']
      }
    ],
    vocabulary: [
      { fi: 'että', fr: 'que', puhekieli: 'et' },
      { fi: 'koska', fr: 'parce que', puhekieli: 'koska' },
      { fi: 'kun', fr: 'quand/lorsque', puhekieli: 'ku' },
      { fi: 'jos', fr: 'si', puhekieli: 'jos' },
      { fi: 'vaikka', fr: 'bien que', puhekieli: 'vaikka' },
      { fi: 'kunnes', fr: 'jusqu\'a ce que', puhekieli: 'kunnes' },
      { fi: 'jotta', fr: 'afin que', puhekieli: 'jotta' },
      { fi: 'tietää', fr: 'savoir', puhekieli: 'tietää' },
      { fi: 'uskoa', fr: 'croire', puhekieli: 'uskoa' },
      { fi: 'toivoa', fr: 'esperer', puhekieli: 'toivoa' }
    ]
  },
  {
    id: 'b1-5',
    level: 'B1',
    module: 'B1.2',
    title: 'Translatiivi ja essiivi - Translatif et essif',
    description: 'Exprimer le changement et l\'etat',
    sections: [
      {
        type: 'theory',
        title: 'Le translatif (-ksi)',
        content: `Le **translatif** exprime un changement d'etat, une transformation ou une destination.

**Formation:** radical + **-ksi**

**Utilisations:**

**1. Transformation "devenir":**
- Hän tuli sairaaksi = Il/elle est devenu(e) malade
- Vesi muuttui jääksi = L'eau s'est transformee en glace

**2. "En tant que", "comme":**
- Työskentelen opettajaksi = Je travaille comme professeur
- Sain sen lahjaksi = Je l'ai recu en cadeau

**3. But/destination:**
- Opiskelen lääkäriksi = J'etudie pour devenir medecin

**4. Duree "pour":**
- Tulen viikoksi = Je viens pour une semaine
- Menen kaupunkiin päiväksi = Je vais en ville pour la journee`
      },
      {
        type: 'theory',
        title: 'L\'essif (-na/-nä)',
        content: `L'**essif** exprime un etat temporaire ou un role.

**Formation:** radical + **-na/-nä**

**Utilisations:**

**1. Etat temporaire:**
- Olen sairaana = Je suis malade (temporairement)
- Hän on poissa = Il/elle est absent(e)

**2. Role, fonction:**
- Työskentelen opettajana = Je travaille en tant que professeur
- Hän toimi johtajana = Il/elle a agi comme directeur

**3. Jours et moments:**
- maanantaina = lundi (le lundi)
- aamuna = le matin
- päivänä = le jour

**Translatif vs Essif:**
- Translatif = changement vers
- Essif = etat dans lequel on est`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "le lundi" (jour habituel)?',
        options: ['maanantai', 'maanantaiksi', 'maanantaina', 'maanantailla'],
        correct: 2,
        explanation: 'Maanantaina = le lundi (essif). On utilise l\'essif pour les jours.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Opiskelen lääkäri___. (J\'etudie pour devenir medecin)',
        answer: 'ksi',
        hint: 'Translatif pour exprimer le but'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Hän työskentelee opettajana ja tulee tunnetuksi.',
        answer: 'Il/elle travaille comme professeur et devient celebre.',
        alternatives: ['Elle travaille en tant que professeur et devient connue.']
      }
    ],
    vocabulary: [
      { fi: 'opettajaksi', fr: 'pour devenir professeur', puhekieli: 'opettajaks' },
      { fi: 'opettajana', fr: 'en tant que professeur', puhekieli: 'opettajan' },
      { fi: 'lääkäriksi', fr: 'pour devenir medecin', puhekieli: 'lääkäriks' },
      { fi: 'sairaaksi', fr: 'malade (devenir)', puhekieli: 'sairaaks' },
      { fi: 'sairaana', fr: 'malade (etre)', puhekieli: 'sairaana' },
      { fi: 'lahjaksi', fr: 'en cadeau', puhekieli: 'lahjaks' },
      { fi: 'viikoksi', fr: 'pour une semaine', puhekieli: 'viikoks' },
      { fi: 'maanantaina', fr: 'le lundi', puhekieli: 'maanantain' },
      { fi: 'aamuna', fr: 'le matin', puhekieli: 'aamun' },
      { fi: 'muuttua', fr: 'changer/devenir', puhekieli: 'muuttuu' }
    ]
  },
  {
    id: 'b1-6',
    level: 'B1',
    module: 'B1.2',
    title: 'Passiivin imperfekti - Passif au passe',
    description: 'Le passif a l\'imparfait',
    sections: [
      {
        type: 'theory',
        title: 'Formation du passif imparfait',
        content: `**Formation:** radical + **-ttiin/-tiin**

**Verbes type 1:**
| Infinitif | Passif present | Passif imparfait |
|-----------|----------------|------------------|
| puhua | puhutaan | puhuttiin |
| lukea | luetaan | luettiin |
| sanoa | sanotaan | sanottiin |

**Verbes type 2-3:**
| Infinitif | Passif present | Passif imparfait |
|-----------|----------------|------------------|
| syödä | syödään | syötiin |
| juoda | juodaan | juotiin |
| tehdä | tehdään | tehtiin |
| mennä | mennään | mentiin |

**Regle:** Le passif imparfait utilise souvent une consonne double.`
      },
      {
        type: 'theory',
        title: 'Utilisation et exemples',
        content: `**Comme "nous" au passe (puhekieli):**
- Me mentiin elokuviin = Nous sommes allés au cinema
- Me syötiin ravintolassa = Nous avons mange au restaurant
- Me tehtiin se yhdessä = Nous l'avons fait ensemble

**Comme "on" au passe:**
- Ennen puhuttiin eri tavalla = Avant, on parlait differemment
- Suomessa tehtiin paljon työtä = En Finlande, on a beaucoup travaille

**Négation:**
- Ei menty = On n'est pas alle
- Ei tehty = On n'a pas fait
- Ei sanottu mitään = On n'a rien dit

**Attention:** Le passif imparfait est TRES courant en puhekieli pour raconter des evenements passes avec "nous".`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "Nous sommes allés" en puhekieli?',
        options: ['Me menimme', 'Me mennään', 'Me mentiin', 'Me menemme'],
        correct: 2,
        explanation: 'Me mentiin = Nous sommes allés (passif imparfait, très courant en puhekieli).'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Eilen me ___ pizzaa. (Hier nous avons mange de la pizza)',
        answer: 'syötiin',
        hint: 'Passif imparfait de syödä'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Viime kesänä me matkustettiin Suomeen.',
        answer: 'L\'ete dernier, nous avons voyage en Finlande.',
        alternatives: ['L\'ete dernier, on a voyage en Finlande.']
      }
    ],
    vocabulary: [
      { fi: 'puhuttiin', fr: 'on a parle', puhekieli: 'puhuttiin' },
      { fi: 'syötiin', fr: 'on a mange', puhekieli: 'syötiin' },
      { fi: 'mentiin', fr: 'on est alle', puhekieli: 'mentiin' },
      { fi: 'tehtiin', fr: 'on a fait', puhekieli: 'tehtiin' },
      { fi: 'sanottiin', fr: 'on a dit', puhekieli: 'sanottiin' },
      { fi: 'tavattiin', fr: 'on s\'est rencontre', puhekieli: 'tavattiin' },
      { fi: 'nähtiin', fr: 'on a vu', puhekieli: 'nähtiin' },
      { fi: 'juotiin', fr: 'on a bu', puhekieli: 'juotiin' },
      { fi: 'viime', fr: 'dernier', puhekieli: 'viime' },
      { fi: 'kesä', fr: 'ete', puhekieli: 'kesä' }
    ]
  },
  {
    id: 'b1-7',
    level: 'B1',
    module: 'B1.3',
    title: 'Partisiipit - Les participes',
    description: 'Participes presents et passes',
    sections: [
      {
        type: 'theory',
        title: 'Le participe present actif (-va/-vä)',
        content: `Le **participe present actif** decrit quelqu'un/quelque chose qui fait l'action.

**Formation:** radical present + **-va/-vä**

| Infinitif | Participe |
|-----------|-----------|
| puhua | puhuva (qui parle) |
| lukea | lukeva (qui lit) |
| syödä | syövä (qui mange) |
| tulla | tuleva (qui vient) |

**Utilisations:**

**1. Comme adjectif:**
- puhuva kissa = un chat qui parle
- lukeva mies = un homme qui lit
- tuleva viikko = la semaine prochaine (qui vient)

**2. Dans des constructions relatives:**
- Mies, joka puhuu = puhuva mies
- (L'homme qui parle)`
      },
      {
        type: 'theory',
        title: 'Le participe passé actif (-nut/-nyt)',
        content: `Le **participe passé actif** decrit quelqu'un/quelque chose qui a fait l'action.

**Formation:** radical + **-nut/-nyt** (singulier) / **-neet** (pluriel)

| Infinitif | Participe sing. | Participe plur. |
|-----------|-----------------|-----------------|
| puhua | puhunut | puhuneet |
| lukea | lukenut | lukeneet |
| tehdä | tehnyt | tehneet |
| tulla | tullut | tulleet |

**Utilisations:**

**1. Temps composes (avec olla):**
- Olen puhunut = J'ai parlé
- Olemme tulleet = Nous sommes venus

**2. Comme adjectif:**
- väsynyt mies = un homme fatigué
- unohtunut asia = une chose oubliée

**3. Descriptions:**
- Kotiin tullut mies = L'homme qui est rentré à la maison`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "la semaine prochaine" (qui vient)?',
        options: ['tulevat viikko', 'tullut viikko', 'tuleva viikko', 'tulemaan viikko'],
        correct: 2,
        explanation: 'Tuleva viikko = la semaine prochaine (participe present de tulla).'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Olen ___ suomea kaksi vuotta. (J\'ai etudie le finnois...)',
        answer: 'opiskellut',
        hint: 'Participe passe de opiskella'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Suomea puhuva nainen on opettajani.',
        answer: 'La femme qui parle finnois est ma professeure.',
        alternatives: ['La femme parlant finnois est mon professeur.']
      }
    ],
    vocabulary: [
      { fi: 'puhuva', fr: 'qui parle/parlant', puhekieli: 'puhuva' },
      { fi: 'tuleva', fr: 'qui vient/prochain', puhekieli: 'tuleva' },
      { fi: 'lukeva', fr: 'qui lit/lisant', puhekieli: 'lukeva' },
      { fi: 'puhunut', fr: 'ayant parle', puhekieli: 'puhunu' },
      { fi: 'tullut', fr: 'venu', puhekieli: 'tullu' },
      { fi: 'väsynyt', fr: 'fatigue', puhekieli: 'väsyny' },
      { fi: 'opiskellut', fr: 'ayant etudie', puhekieli: 'opiskellu' },
      { fi: 'tehnyt', fr: 'ayant fait', puhekieli: 'tehny' },
      { fi: 'seuraava', fr: 'suivant', puhekieli: 'seuraava' },
      { fi: 'edellinen', fr: 'precedent', puhekieli: 'edellinen' }
    ]
  },
  {
    id: 'b1-8',
    level: 'B1',
    module: 'B1.3',
    title: 'Työ ja ammatti - Travail et profession',
    description: 'Vocabulaire professionnel et du monde du travail',
    sections: [
      {
        type: 'theory',
        title: 'Les professions',
        content: `**Professions courantes:**

| Finnois | Francais |
|---------|----------|
| opettaja | professeur |
| lääkäri | medecin |
| sairaanhoitaja | infirmier/ere |
| insinööri | ingenieur |
| lakimies | avocat |
| toimittaja | journaliste |
| myyjä | vendeur/euse |
| kokki | cuisinier/ere |
| poliisi | policier |
| palomies | pompier |
| siivooja | agent d'entretien |
| ohjelmoija | programmeur |

**Demander la profession:**
- Mikä sinä olet ammatiltasi? = Quelle est ta profession?
- Mitä työtä teet? = Quel travail fais-tu?`
      },
      {
        type: 'theory',
        title: 'Le monde du travail',
        content: `**Vocabulaire du travail:**

| Finnois | Francais |
|---------|----------|
| työ | travail |
| työpaikka | lieu de travail |
| toimisto | bureau |
| palkka | salaire |
| työsopimus | contrat de travail |
| työhaastattelu | entretien d'embauche |
| ansioluettelo / CV | CV |
| työtön | chomeur |
| työttömyys | chomage |
| eläke | retraite |

**Expressions utiles:**
- Olen töissä = Je suis au travail
- Haen töitä = Je cherche du travail
- Olen lomalla = Je suis en vacances
- Työskentelen... = Je travaille chez/a...`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "medecin" en finnois?',
        options: ['opettaja', 'lääkäri', 'lakimies', 'insinööri'],
        correct: 1,
        explanation: 'Lääkäri = medecin. Opettaja = professeur, Lakimies = avocat.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Haen ___. (Je cherche du travail)',
        answer: 'töitä',
        hint: 'Travail au partitif pluriel'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Työskentelen opettajana koulussa.',
        answer: 'Je travaille comme professeur dans une ecole.',
        alternatives: ['Je travaille en tant que professeur a l\'ecole.']
      }
    ],
    vocabulary: [
      { fi: 'työ', fr: 'travail', puhekieli: 'työ' },
      { fi: 'ammatti', fr: 'profession', puhekieli: 'ammatti' },
      { fi: 'opettaja', fr: 'professeur', puhekieli: 'opettaja' },
      { fi: 'lääkäri', fr: 'medecin', puhekieli: 'lääkäri' },
      { fi: 'insinööri', fr: 'ingenieur', puhekieli: 'insinööri' },
      { fi: 'palkka', fr: 'salaire', puhekieli: 'palkka' },
      { fi: 'toimisto', fr: 'bureau', puhekieli: 'toimisto' },
      { fi: 'työtön', fr: 'chomeur', puhekieli: 'työtön' },
      { fi: 'hakea', fr: 'chercher/postuler', puhekieli: 'hakee' },
      { fi: 'loma', fr: 'vacances', puhekieli: 'loma' }
    ]
  },
  {
    id: 'b1-9',
    level: 'B1',
    module: 'B1.3',
    title: 'Epäsuora esitys - Le discours indirect',
    description: 'Rapporter les paroles d\'autrui',
    sections: [
      {
        type: 'theory',
        title: 'Du discours direct a l\'indirect',
        content: `**Discours direct:**
- Hän sanoi: "Tulen huomenna" = Il/elle a dit: "Je viens demain"

**Discours indirect:**
- Hän sanoi, että tulee huomenna = Il/elle a dit qu'il/elle vient demain

**Verbes introducteurs:**
| Finnois | Francais |
|---------|----------|
| sanoa | dire |
| kertoa | raconter |
| kysyä | demander |
| vastata | répondre |
| ajatella | penser |
| luulla | croire |

**Changements:**
- minä → hän/se
- sinä → minä (si on parle à la même personne)
- nyt → silloin (maintenant → alors)
- tänään → sinä päivänä (aujourd'hui → ce jour-là)
- huomenna → seuraavana päivänä (demain → le jour suivant)`
      },
      {
        type: 'theory',
        title: 'Questions indirectes',
        content: `**Questions directes → indirectes:**

**1. Questions fermees (oui/non):**
- Direct: "Tuletko huomenna?" = "Tu viens demain?"
- Indirect: Hän kysyi, tuleeko huomenna = Il a demande s'il/elle vient demain

**Avec -ko/-kö attache au verbe!**

**2. Questions ouvertes:**
- Direct: "Missä asut?" = "Ou habites-tu?"
- Indirect: Hän kysyi, missä asun = Il a demande ou j'habite

**Le mot interrogatif reste le meme.**

**Exemples:**
- Hän kysyi, mitä teen = Il a demande ce que je fais
- En tiedä, miksi hän lähti = Je ne sais pas pourquoi il est parti
- Kerro, miten se tehdään = Dis-moi comment on fait`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment rend-on "Il a demande si tu viens"?',
        options: ['Hän kysyi, että tuletko', 'Hän kysyi, tuletko', 'Hän kysyi tulet', 'Hän kysyi, jos tulet'],
        correct: 1,
        explanation: 'Hän kysyi, tuletko = Il a demande si tu viens. On garde -ko sur le verbe.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Hän sanoi, ___ tulee huomenna. (Il a dit qu\'il vient demain)',
        answer: 'että',
        hint: 'Conjonction "que"'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'En tiedä, miksi hän ei tullut.',
        answer: 'Je ne sais pas pourquoi il/elle n\'est pas venu(e).',
        alternatives: ['Je ne sais pas pourquoi elle n\'est pas venue.']
      }
    ],
    vocabulary: [
      { fi: 'sanoa', fr: 'dire', puhekieli: 'sanoo' },
      { fi: 'kertoa', fr: 'raconter', puhekieli: 'kertoo' },
      { fi: 'kysyä', fr: 'demander', puhekieli: 'kysyy' },
      { fi: 'vastata', fr: 'répondre', puhekieli: 'vastaa' },
      { fi: 'ilmoittaa', fr: 'informer', puhekieli: 'ilmottaa' },
      { fi: 'väittää', fr: 'pretendre', puhekieli: 'väittää' },
      { fi: 'silloin', fr: 'alors/a ce moment', puhekieli: 'sillon' },
      { fi: 'seuraava', fr: 'suivant', puhekieli: 'seuraava' },
      { fi: 'edellinen', fr: 'precedent', puhekieli: 'edellinen' },
      { fi: 'miksi', fr: 'pourquoi', puhekieli: 'miks' }
    ]
  },
  {
    id: 'b1-10',
    level: 'B1',
    module: 'B1.3',
    title: 'Idiomit - Expressions idiomatiques',
    description: 'Expressions courantes en finnois',
    sections: [
      {
        type: 'theory',
        title: 'Expressions avec le corps',
        content: `**Expressions idiomatiques courantes:**

| Finnois | Littéralement | Sens |
|---------|---------------|------|
| Pidä pää kylmänä | Garde la tête froide | Reste calme |
| Olla hukassa | Être perdu | Ne pas comprendre |
| Painaa jarrua | Appuyer sur le frein | Ralentir |
| Pitää silmällä | Garder à l'oeil | Surveiller |
| Olla naulan kantaan | Être sur la tête du clou | Être exact |
| Lyödä lukkoon | Frapper le verrou | Fixer/confirmer |

**Expressions avec "olla":**
- Olla tuurissa = Avoir de la chance
- Olla pulassa = Être dans le pétrin
- Olla hereillä = Être éveillé
- Olla pois tolaltaan = Êtrehors de soi`
      },
      {
        type: 'theory',
        title: 'Expressions du quotidien',
        content: `**Expressions utiles au quotidien:**

| Finnois | Sens |
|---------|------|
| Ei se mitään | Ce n'est rien |
| Eipä kestä | De rien (reponse a "kiitos") |
| No niin | Bon, alors / Voila |
| Ai niin | Ah oui, au fait |
| Mitäs sitten? | Et alors? |
| Ihan sama | Ca m'est egal |
| Ei käy | Ca ne va pas / Non |
| Sopii | D'accord / Ca marche |
| Selvä | Compris / OK |
| Joo joo | Oui oui |

**Expressions de temps:**
- Ajan mittaan = Avec le temps
- Siinä sivussa = En passant
- Kerran kaikkiaan = Une bonne fois pour toutes`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Que signifie "Eipä kestä"?',
        options: ['Desolee', 'De rien', 'Merci', 'A bientot'],
        correct: 1,
        explanation: 'Eipä kestä = De rien. C\'est la reponse courante a "kiitos".'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Kiitos avusta! - ___ kestä! (Merci pour l\'aide! - De rien!)',
        answer: 'Eipä',
        hint: 'Expression de politesse'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Pidä pää kylmänä, kaikki järjestyy.',
        answer: 'Garde la tete froide, tout va s\'arranger.',
        alternatives: ['Reste calme, tout va s\'arranger.']
      }
    ],
    vocabulary: [
      { fi: 'eipä kestä', fr: 'de rien', puhekieli: 'eipä kestä' },
      { fi: 'ei se mitään', fr: 'ce n\'est rien', puhekieli: 'ei se mitää' },
      { fi: 'no niin', fr: 'bon alors', puhekieli: 'no nii' },
      { fi: 'ihan sama', fr: 'ca m\'est egal', puhekieli: 'ihan sama' },
      { fi: 'selvä', fr: 'compris/OK', puhekieli: 'selvä' },
      { fi: 'sopii', fr: 'ca marche', puhekieli: 'sopii' },
      { fi: 'olla hukassa', fr: 'être perdu', puhekieli: 'olla hukas' },
      { fi: 'olla tuurissa', fr: 'avoir de la chance', puhekieli: 'olla tuuris' },
      { fi: 'järjestyä', fr: 's\'arranger', puhekieli: 'järjestyy' },
      { fi: 'kaikki', fr: 'tout', puhekieli: 'kaikki' }
    ]
  },
  // ============= NIVEAU B2 =============
  {
    id: 'b2-1',
    level: 'B2',
    module: 'B2.1',
    title: 'Agenttipartisiippi - Le participe agent',
    description: 'Construction passive avec agent',
    sections: [
      {
        type: 'theory',
        title: 'Le participe agent (-ma/-mä)',
        content: `Le **participe agent** indique qui a fait l'action sur quelque chose.

**Formation:** radical + **-ma/-mä**

| Infinitif | Participe agent |
|-----------|-----------------|
| kirjoittaa | kirjoittama (ecrit par) |
| tehdä | tekemä (fait par) |
| laulaa | laulama (chante par) |
| rakentaa | rakentama (construit par) |

**Structure:** Objet + Agent (genitif) + Participe + Verbe

**Exemples:**
- Tove Janssonin kirjoittama kirja = Un livre ecrit par Tove Jansson
- Äidin tekemä ruoka = La nourriture faite par maman
- Lapsen piirtämä kuva = Une image dessinee par l'enfant`
      },
      {
        type: 'theory',
        title: 'Utilisation avancee',
        content: `**Le participe agent s'accorde en cas:**

| Cas | Exemple |
|-----|---------|
| Nominatif | Minun tekemäni työ on valmis |
| Partitif | Luen sinun kirjoittamaasi kirjaa |
| Inessiivi | Hänen rakentamassaan talossa |

**Avec suffixes possessifs:**
- Minun tekemäni = fait par moi
- Sinun sanomasi = dit par toi
- Hänen antamansa = donne par lui/elle

**Exemples dans des phrases:**
- Ymmärrätkö minun sanomani? = Comprends-tu ce que je dis?
- Pidän sinun tekemästäsi kakusta = J'aime le gateau que tu as fait

**Alternative avec "joka":**
- Kirja, jonka Tove Jansson kirjoitti = Tove Janssonin kirjoittama kirja`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "un livre ecrit par Tove Jansson"?',
        options: ['Tove Jansson kirjoittaa kirja', 'Tove Janssonin kirjoittama kirja', 'Tove Janssonin kirjoitettu kirja', 'Kirja Tove Jansson'],
        correct: 1,
        explanation: 'Tove Janssonin kirjoittama kirja = Agent (genitif) + participe (-ma) + nom.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Äidin ___ ruoka on hyvää. (La nourriture faite par maman est bonne)',
        answer: 'tekemä',
        hint: 'Participe agent de tehdä'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Pidän sinun antamastasi lahjasta.',
        answer: 'J\'aime le cadeau que tu m\'as donne.',
        alternatives: ['J\'aime le cadeau donne par toi.']
      }
    ],
    vocabulary: [
      { fi: 'kirjoittama', fr: 'ecrit par', puhekieli: 'kirjottama' },
      { fi: 'tekemä', fr: 'fait par', puhekieli: 'tekemä' },
      { fi: 'sanoma', fr: 'dit par', puhekieli: 'sanoma' },
      { fi: 'antama', fr: 'donne par', puhekieli: 'antama' },
      { fi: 'rakentama', fr: 'construit par', puhekieli: 'rakentama' },
      { fi: 'piirtämä', fr: 'dessine par', puhekieli: 'piirtämä' },
      { fi: 'laulama', fr: 'chante par', puhekieli: 'laulama' },
      { fi: 'kuva', fr: 'image', puhekieli: 'kuva' },
      { fi: 'lahja', fr: 'cadeau', puhekieli: 'lahja' },
      { fi: 'kakku', fr: 'gateau', puhekieli: 'kakku' }
    ]
  },
  {
    id: 'b2-2',
    level: 'B2',
    module: 'B2.1',
    title: 'Potentiaali - Le potentiel',
    description: 'Exprimer la probabilité',
    sections: [
      {
        type: 'theory',
        title: 'Formation du potentiel',
        content: `Le **potentiel** exprime la probabilité ou la possibilité. C'est un mode rare en finnois parle, mais courant à l'écrit.

**Formation:** radical + **-ne-** + terminaison

**Avec le verbe olla:**
| Pronom | Potentiel |
|--------|-----------|
| minä | lienen |
| sinä | lienet |
| hän | lienee |
| me | lienemme |
| he | lienevät |

**Avec d'autresverbes:**
| Infinitif | Hän (potentiel) |
|-----------|-----------------|
| tulla | tullee |
| mennä | mennee |
| tehdä | tehnee |
| puhua | puhunee |
| sanoa | sanonee |`
      },
      {
        type: 'theory',
        title: 'Utilisation du potentiel',
        content: `**Le potentiel exprime:**

**1. Probabilite/supposition:**
- Hän tullee huomenna = Il/elle viendra probablement demain
- Tämä lienee totta = Ceci est probablement vrai

**2. Incertitude polie:**
- En liene ainoa = Je ne suis probablement pas le/la seul(e)
- Sinä lienet oikeassa = Tu as probablement raison

**3. Dans le langage littéraire:**
- Tämä talo lienee vanha = Cette maison est probablement vieille

**Alternatives plus courantes (puhekieli):**
- Hän tulee varmaan = Il/elle viendra probablement
- Tämä on varmaan totta = C'est probablement vrai
- Kai hän tulee = Il/elle viendra surement

**Note:** Le potentiel est très rare en puhekieli. On utilise plutôt "varmaan", "kai", "luultavasti".`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Que signifie "Hän tullee huomenna"?',
        options: ['Il viendra', 'Il viendra probablement', 'Il viendrait', 'Il est venu'],
        correct: 1,
        explanation: 'Tullee = viendra probablement (potentiel de tulla).'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Tämä ___ totta. (Ceci est probablement vrai)',
        answer: 'lienee',
        hint: 'Potentiel de olla pour hän'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Sinä lienet väsynyt pitkän matkan jälkeen.',
        answer: 'Tu es probablement fatigué(e) après le long voyage.',
        alternatives: ['Tu dois être fatigué après le long voyage.']
      }
    ],
    vocabulary: [
      { fi: 'lienee', fr: 'est probablement', puhekieli: 'on varmaan' },
      { fi: 'tullee', fr: 'viendra probablement', puhekieli: 'tulee varmaan' },
      { fi: 'mennee', fr: 'ira probablement', puhekieli: 'menee varmaan' },
      { fi: 'varmaan', fr: 'probablement', puhekieli: 'varmaan' },
      { fi: 'kai', fr: 'surement/probablement', puhekieli: 'kai' },
      { fi: 'luultavasti', fr: 'vraisemblablement', puhekieli: 'luultavasti' },
      { fi: 'ehkä', fr: 'peut-etre', puhekieli: 'ehkä' },
      { fi: 'todennäköisesti', fr: 'probablement', puhekieli: 'todennäkösesti' },
      { fi: 'tuskin', fr: 'a peine/peu probable', puhekieli: 'tuskin' },
      { fi: 'oikeassa', fr: 'avoir raison', puhekieli: 'oikees' }
    ]
  },
  {
    id: 'b2-3',
    level: 'B2',
    module: 'B2.1',
    title: 'Lauseenvastikkeet - Propositions réduites',
    description: 'Structures participiales complexes',
    sections: [
      {
        type: 'theory',
        title: 'La proposition temporelle reduite',
        content: `Les **lauseenvastikkeet** permettent de remplacer des subordonnees par des constructions plus compactes.

**1. Temporel avec participe present (-essa/-essä):**
"En faisant", "pendant que"

| Infinitif | Construction |
|-----------|--------------|
| syödä | syödessäni (pendant que je mange) |
| lukea | lukiessani (pendant que je lis) |
| nukkua | nukkuessaan (pendant qu'il/elle dort) |

**Structure:** Radical + essa/essä + suffixe possessif

**Exemples:**
- Syödessäni luen lehteä = Pendant que je mange, je lis le journal
- Tullessani kotiin satoi = Quand je suis rentre, il pleuvait
- Nukkuessaan hän puhuu = Pendant qu'il dort, il parle`
      },
      {
        type: 'theory',
        title: 'Autrespropositions réduites',
        content: `**2. Cause avec participe passé (koska → partisiippi):**
- Koska olin väsynyt → Väsyneenä
- Väsyneenä menin nukkumaan = Étant fatigué, je suis allé dormir

**3. Concession avec participe:**
- Vaikka hän on sairas → Sairaanakin
- Sairaanakin hän tuli töihin = Même malade, il est venu au travail

**4. But avec 1er infinitif long (-akseen):**
- Oppiakseen suomea hän muutti Suomeen
- = Pour apprendre le finnois, il a demenage en Finlande

**5. Maniere avec 2eme infinitif (-en):**
- Hän tuli juosten = Il est venu en courant
- Istuin odottaen = J'etais assis a attendre

**Ces structures sont plus littéraires mais importantes a reconnaitre!**`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Que signifie "syödessäni"?',
        options: ['je mange', 'pour manger', 'pendant que je mange', 'apres avoir mange'],
        correct: 2,
        explanation: 'Syödessäni = pendant que je mange. C\'est une proposition temporelle reduite.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: '___ suomea hän muutti Helsinkiin. (Pour apprendre le finnois...)',
        answer: 'Oppiakseen',
        hint: '1er infinitif long de oppia'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Hän tuli juosten ja huutaen.',
        answer: 'Il est venu en courant et en criant.',
        alternatives: ['Elle est venue en courant et en criant.']
      }
    ],
    vocabulary: [
      { fi: '-essä/-essä', fr: 'pendant que', puhekieli: '-es' },
      { fi: '-akseen', fr: 'pour (but)', puhekieli: '-aksee' },
      { fi: 'juosten', fr: 'en courant', puhekieli: 'juosten' },
      { fi: 'istuen', fr: 'en étant assis', puhekieli: 'istuen' },
      { fi: 'väsyneenä', fr: 'étant fatigué', puhekieli: 'väsyneen' },
      { fi: 'sairaana', fr: 'etant malade', puhekieli: 'sairaana' },
      { fi: 'muuttaa', fr: 'demenager', puhekieli: 'muuttaa' },
      { fi: 'huutaa', fr: 'crier', puhekieli: 'huutaa' },
      { fi: 'odottaa', fr: 'attendre', puhekieli: 'odottaa' },
      { fi: 'lehti', fr: 'journal', puhekieli: 'lehti' }
    ]
  },
  {
    id: 'b2-4',
    level: 'B2',
    module: 'B2.2',
    title: 'Komitatiivi ja instruktiivi - Cas rares',
    description: 'Le comitatif et l\'instructif',
    sections: [
      {
        type: 'theory',
        title: 'Le comitatif (-ine-)',
        content: `Le **comitatif** exprime "avec" (accompagnement). Il est rare et plutôt littéraire.

**Formation:** radical + **-ine-** + suffixe possessif

**Toujours avec suffixe possessif!**

| Pronom | Suffixe | Exemple |
|--------|---------|---------|
| minä | -ni | lapsineni (avec mes enfants) |
| sinä | -si | vaimoinesi (avec ta femme) |
| hän | -nsa/-nsä | perheineen (avec sa famille) |
| me | -mme | ystävinemme (avec nos amis) |

**Exemples:**
- Tulin perheineni = Je suis venu avec ma famille
- Hän asuu vaimoineen = Il habite avec sa femme

**Alternative courante (puhekieli):**
- Tulin perheen kanssa = avec la famille
- "Kanssa" est beaucoup plus utilise!`
      },
      {
        type: 'theory',
        title: 'L\'instructif (-in)',
        content: `L'**instructif** indique le moyen ou la maniere. Il est fige dans des expressions.

**Formation:** Pluriel + **-in**

**Expressions courantes:**
| Expression | Sens |
|------------|------|
| omin silmin | de ses propres yeux |
| omin käsin | de ses propres mains |
| suurin piirtein | a peu pres |
| toisin sanoen | autrement dit |
| joka tapauksessa | en tout cas |
| kaikin puolin | a tous egards |

**Avec parties du corps:**
- Hän teki sen omin käsin = Il l'a fait de ses propres mains
- Näin sen omin silmin = Je l'ai vu de mes propres yeux

**Expressions temporelles:**
- joka päivin → joka päivä (tous les jours) - instructif archaique`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Que signifie "perheineen"?',
        options: ['pour la famille', 'dans la famille', 'avec sa famille', 'sans famille'],
        correct: 2,
        explanation: 'Perheineen = avec sa famille (comitatif avec suffixe possessif 3e pers.).'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Näin sen omin ___. (Je l\'ai vu de mes propres yeux)',
        answer: 'silmin',
        hint: 'Instructif de silmä (yeux)'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Hän teki kaiken omin käsin.',
        answer: 'Il/elle a tout fait de ses propres mains.',
        alternatives: ['Elle a tout fait de ses propres mains.']
      }
    ],
    vocabulary: [
      { fi: 'perheineen', fr: 'avec sa famille', puhekieli: 'perheen kans' },
      { fi: 'lapsineen', fr: 'avec ses enfants', puhekieli: 'lasten kans' },
      { fi: 'omin silmin', fr: 'de ses propres yeux', puhekieli: 'omil silmil' },
      { fi: 'omin käsin', fr: 'de ses propres mains', puhekieli: 'omil käsil' },
      { fi: 'suurin piirtein', fr: 'a peu pres', puhekieli: 'suunnilleen' },
      { fi: 'toisin sanoen', fr: 'autrement dit', puhekieli: 'toisin sanoen' },
      { fi: 'kanssa', fr: 'avec', puhekieli: 'kans/kaa' },
      { fi: 'joka tapauksessa', fr: 'en tout cas', puhekieli: 'joka tapauksessa' },
      { fi: 'silmä', fr: 'oeil', puhekieli: 'silmä' },
      { fi: 'käsi', fr: 'main', puhekieli: 'käsi' }
    ]
  },
  {
    id: 'b2-5',
    level: 'B2',
    module: 'B2.2',
    title: 'Refleksiiviverbit - Verbes pronominaux',
    description: 'Les verbes reflechis en finnois',
    sections: [
      {
        type: 'theory',
        title: 'Verbes reflechis avec -utua/-ytyä',
        content: `En finnois, certains verbes sont **reflechis** (l'action revient sur le sujet).

**Formation courante:** Verbe + **-utua/-ytyä**

| Verbe de base | Verbe reflechi |
|---------------|----------------|
| pestä (laver) | peseytyä (se laver) |
| pukea (habiller) | pukeutua (s'habiller) |
| herättää (réveiller) | herätä (se réveiller) |
| muuttaa (changer) | muuttua (se changer/devenir) |
| levittää (etendre) | levitä (s'etendre) |

**Exemples:**
- Peseydyin aamulla = Je me suis lave le matin
- Hän pukeutui nopeasti = Il/elle s'est habille(e) vite
- Tilanne muuttui = La situation a change`
      },
      {
        type: 'theory',
        title: 'Autresverbes pronominaux',
        content: `**Verbes reciproques (-tua/-tyä):**
Action mutuelle entre deux personnes

| Verbe | Sens |
|-------|------|
| tavata | rencontrer |
| rakastua | tomber amoureux |
| tutustua | faire connaissance |
| kiinnostua | s'interesser |

**Exemples:**
- He rakastuivat = Ils sont tombes amoureux
- Tutustuimme vuosi sitten = Nous avons fait connaissance il y a un an

**Verbes "passifs-reflechis" (-ntua/-ntyä):**
Changement d'etat spontane

| Verbe | Sens |
|-------|------|
| rikkoutua | se casser |
| avautua | s'ouvrir |
| sulkeutua | se fermer |
| sammua | s'eteindre |

**Exemples:**
- Ikkuna rikkoutui = La fenêtre s'est cassée
- Ovi avautui = La porte s'est ouverte`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "s\'habiller"?',
        options: ['pukea', 'pukeutua', 'pukeminen', 'pukeudun'],
        correct: 1,
        explanation: 'Pukeutua = s\'habiller (forme reflechie de pukea).'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'He ___ viime kesänä. (Ils sont tombes amoureux l\'ete dernier)',
        answer: 'rakastuivat',
        hint: 'Imparfait de rakastua pour he'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Tutustuimme toisiimme yliopistolla.',
        answer: 'Nous avons fait connaissance à l\'université.',
        alternatives: ['Nous nous sommes rencontrés à l\'université.']
      }
    ],
    vocabulary: [
      { fi: 'peseytyä', fr: 'se laver', puhekieli: 'peseytyy' },
      { fi: 'pukeutua', fr: 's\'habiller', puhekieli: 'pukeutuu' },
      { fi: 'rakastua', fr: 'tomber amoureux', puhekieli: 'rakastuu' },
      { fi: 'tutustua', fr: 'faire connaissance', puhekieli: 'tutustuu' },
      { fi: 'kiinnostua', fr: 's\'interesser', puhekieli: 'kiinnostuu' },
      { fi: 'muuttua', fr: 'changer/devenir', puhekieli: 'muuttuu' },
      { fi: 'avautua', fr: 's\'ouvrir', puhekieli: 'avautuu' },
      { fi: 'sulkeutua', fr: 'se fermer', puhekieli: 'sulkeutuu' },
      { fi: 'rikkoutua', fr: 'se casser', puhekieli: 'rikkoutuu' },
      { fi: 'herätä', fr: 'se réveiller', puhekieli: 'herää' }
    ]
  },
  {
    id: 'b2-6',
    level: 'B2',
    module: 'B2.2',
    title: 'Kirjakieli vs puhekieli - Registresde langue',
    description: 'Differences entre ecrit et parle',
    sections: [
      {
        type: 'theory',
        title: 'Les principales differences',
        content: `**Pronoms:**
| Kirjakieli | Puhekieli |
|------------|-----------|
| minä | mä/mie |
| sinä | sä/sie |
| hän | se |
| me | me |
| he | ne |

**Verbes "nous":**
| Kirjakieli | Puhekieli |
|------------|-----------|
| menemme | mennään |
| teemme | tehdään |
| olemme | ollaan |
| sanomme | sanotaan |

**Contractions:**
| Kirjakieli | Puhekieli |
|------------|-----------|
| minulla on | mulla on |
| sinulle | sulle |
| häneltä | siltä |
| tämä on | tää on |
| tuo on | toi on |`
      },
      {
        type: 'theory',
        title: 'Quand utiliser quel registre',
        content: `**Kirjakieli (ecrit/formel):**
- Documents officiels
- Litterature classique
- Actualites (souvent)
- Presentations formelles
- Courriels professionnels

**Puhekieli (parle/informel):**
- Conversations quotidiennes
- Messages entre amis
- Reseaux sociaux
- Dialogues de films/series modernes
- Musique pop

**Conseils pour l'apprenant:**
1. Apprends les DEUX des le debut
2. Reconnais le puhekieli meme si tu parles kirjakieli
3. Les Finlandais apprecient si tu utilises le puhekieli
4. Le kirjakieli peut sonner "robotique" à l'oral

**Exemples compares:**
- Kirjakieli: Minä menen kouluun
- Puhekieli: Mä meen kouluun

- Kirjakieli: Mitä sinulle kuuluu?
- Puhekieli: Mitä sulle kuuluu?`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "nous allons" en puhekieli?',
        options: ['menemme', 'mennään', 'menen', 'menevät'],
        correct: 1,
        explanation: 'Mennään = nous allons (puhekieli). Menemme est la forme kirjakieli.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: '___ menee kouluun. (Il/elle va a l\'ecole - puhekieli)',
        answer: 'Se',
        hint: 'Puhekieli pour hän'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Mä en ymmärrä mitä sä sanot.',
        answer: 'Je ne comprends pas ce que tu dis.',
        alternatives: ['Je comprends pas ce que tu dis.']
      }
    ],
    vocabulary: [
      { fi: 'mä', fr: 'je (puhekieli)', puhekieli: 'mä' },
      { fi: 'sä', fr: 'tu (puhekieli)', puhekieli: 'sä' },
      { fi: 'se', fr: 'il/elle (puhekieli)', puhekieli: 'se' },
      { fi: 'ne', fr: 'ils/elles (puhekieli)', puhekieli: 'ne' },
      { fi: 'tää', fr: 'ceci (puhekieli)', puhekieli: 'tää' },
      { fi: 'toi', fr: 'cela (puhekieli)', puhekieli: 'toi' },
      { fi: 'mulla', fr: 'j\'ai (puhekieli)', puhekieli: 'mulla' },
      { fi: 'sulla', fr: 'tu as (puhekieli)', puhekieli: 'sulla' },
      { fi: 'niinku', fr: 'comme/genre (puhekieli)', puhekieli: 'niinku' },
      { fi: 'sillee', fr: 'comme ca (puhekieli)', puhekieli: 'sillee' }
    ]
  },
  {
    id: 'b2-7',
    level: 'B2',
    module: 'B2.3',
    title: 'Argumentointi - Argumenter',
    description: 'Exprimer et defendre des opinions',
    sections: [
      {
        type: 'theory',
        title: 'Structurer un argument',
        content: `**Introduire son opinion:**
| Finnois | Francais |
|---------|----------|
| Mielestäni... | A mon avis... |
| Näkemykseni mukaan... | Selon mon point de vue... |
| Väitän, että... | Je soutiens que... |
| On selvää, että... | Il est clair que... |
| Tosiasia on, että... | Le fait est que... |

**Donner des raisons:**
| Finnois | Francais |
|---------|----------|
| Ensinnäkin... | Premierement... |
| Toiseksi... | Deuxiemement... |
| Lisäksi... | De plus... |
| Tämän vuoksi... | C'est pourquoi... |
| Sen takia... | A cause de cela... |

**Exemple d'argument structure:**
Mielestäni suomen kieli on kaunis. Ensinnäkin, se kuulostaa melodiselta. Toiseksi, sanat ovat loogisia.`
      },
      {
        type: 'theory',
        title: 'Contredire et nuancer',
        content: `**Exprimer un desaccord:**
| Finnois | Francais |
|---------|----------|
| Olen eri mieltä | Je ne suis pas d'accord |
| En ole samaa mieltä | Je ne suis pas d'accord |
| Toisaalta... | D'un autre cote... |
| Mutta... | Mais... |
| Kuitenkin... | Cependant... |

**Nuancer:**
| Finnois | Francais |
|---------|----------|
| Jossain määrin... | Dans une certaine mesure... |
| Osittain... | Partiellement... |
| Tietyssä mielessä... | Dans un certain sens... |
| Ehkä, mutta... | Peut-etre, mais... |

**Conclure:**
| Finnois | Francais |
|---------|----------|
| Lopuksi... | Pour conclure... |
| Yhteenvetona... | En resume... |
| Kaiken kaikkiaan... | Tout compte fait... |
| Loppujen lopuksi... | En fin de compte... |`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "Premierement" en finnois?',
        options: ['Toiseksi', 'Lisäksi', 'Ensinnäkin', 'Lopuksi'],
        correct: 2,
        explanation: 'Ensinnäkin = Premierement. Toiseksi = Deuxiemement, Lopuksi = Pour conclure.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Olen ___ mieltä sinun kanssasi. (Je suis d\'accord avec toi)',
        answer: 'samaa',
        hint: 'Meme opinion = samaa mieltä'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Mielestäni ilmastonmuutos on vakava ongelma. Tämän vuoksi meidän pitää toimia nyt.',
        answer: 'A mon avis, le changement climatique est un probleme grave. C\'est pourquoi nous devons agir maintenant.',
        alternatives: ['Selon moi, le changement climatique est un probleme serieux. C\'est pour cela que nous devons agir maintenant.']
      }
    ],
    vocabulary: [
      { fi: 'ensinnäkin', fr: 'premierement', puhekieli: 'ensinnäkin' },
      { fi: 'toiseksi', fr: 'deuxiemement', puhekieli: 'toiseks' },
      { fi: 'lisäksi', fr: 'de plus', puhekieli: 'lisäks' },
      { fi: 'kuitenkin', fr: 'cependant', puhekieli: 'kuitenkin' },
      { fi: 'toisaalta', fr: 'd\'un autre cote', puhekieli: 'toisaalt' },
      { fi: 'lopuksi', fr: 'pour conclure', puhekieli: 'lopuks' },
      { fi: 'väittää', fr: 'soutenir/affirmer', puhekieli: 'väittää' },
      { fi: 'todistaa', fr: 'prouver', puhekieli: 'todistaa' },
      { fi: 'ilmastonmuutos', fr: 'changement climatique', puhekieli: 'ilmastonmuutos' },
      { fi: 'vakava', fr: 'grave/serieux', puhekieli: 'vakava' }
    ]
  },
  {
    id: 'b2-8',
    level: 'B2',
    module: 'B2.3',
    title: 'Suomalainen kulttuuri - Culture finnoise',
    description: 'Comprendre la culture finlandaise',
    sections: [
      {
        type: 'theory',
        title: 'Valeurs et traditions',
        content: `**Valeurs finlandaises cles:**

| Concept | Explication |
|---------|-------------|
| Sisu | Persévérance, courage face à l'adversité |
| Tasa-arvo | Égalité (très importante!) |
| Rehellisyys | Honnetete |
| Luotettavuus | Fiabilite |
| Yksityisyys | Respect de la vie privee |

**Traditions importantes:**
- **Sauna**: Plus de 3 millions de saunas en Finlande!
- **Juhannus**: Fete de la Saint-Jean (21-22 juin)
- **Joulu**: Noël (très important, le "vrai" Père Noël vient de Laponie)
- **Vappu**: 1er mai, fete des etudiants

**A savoir:**
- Les Finlandais apprecient le silence (ce n'est pas impoli!)
- La ponctualité est très importante
- Le tutoiement (sinä) est courant meme en contexte professionnel`
      },
      {
        type: 'theory',
        title: 'Litterature et arts',
        content: `**Auteurs celebres:**

| Auteur | Oeuvre connue |
|--------|---------------|
| Tove Jansson | Les Moomins (Muumilaakso) |
| Aleksis Kivi | Seitsemän veljestä (Sept freres) |
| Väinö Linna | Tuntematon sotilas (Soldat inconnu) |
| Arto Paasilinna | Jäniksen vuosi |

**Musique:**
- Sibelius: compositeur national (Finlandia)
- Musique metal: La Finlande a le plus de groupes de metal par habitant!
- Eurovision: Les Finlandais adorent!

**Design finlandais:**
- Marimekko: Mode et textiles
- Iittala: Verrerie
- Arabia: Ceramique
- Nokia: Technologie (origine finlandaise)

**Expressions culturelles:**
- "Ei saa peittää" = Ne pas couvrir (sur les radiateurs)
- "Hyvää ruokahalua" = Bon appetit (litteralement: bonne faim de nourriture)`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Que signifie "sisu"?',
        options: ['Honnetete', 'Égalité', 'Persévérance', 'Silence'],
        correct: 2,
        explanation: 'Sisu = perseverance, courage face a l\'adversite. C\'est un concept central de la culture finnoise.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Tove Jansson on kirjoittanut ___. (Tove Jansson a ecrit les Moomins)',
        answer: 'Muumit',
        hint: 'Les Moomins en finnois'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Suomalaiset arvostavat rehellisyyttä ja täsmällisyyttä.',
        answer: 'Les Finlandais apprecient l\'honnetete et la ponctualité.',
        alternatives: ['Les Finlandais valorisent l\'honnetete et la ponctualité.']
      }
    ],
    vocabulary: [
      { fi: 'sisu', fr: 'perseverance', puhekieli: 'sisu' },
      { fi: 'tasa-arvo', fr: 'egalite', puhekieli: 'tasa-arvo' },
      { fi: 'rehellisyys', fr: 'honnetete', puhekieli: 'rehellisyys' },
      { fi: 'sauna', fr: 'sauna', puhekieli: 'sauna' },
      { fi: 'juhannus', fr: 'Saint-Jean', puhekieli: 'juhannus' },
      { fi: 'joulu', fr: 'Noël', puhekieli: 'joulu' },
      { fi: 'vappu', fr: '1er mai', puhekieli: 'vappu' },
      { fi: 'joulupukki', fr: 'Père Noël', puhekieli: 'joulupukki' },
      { fi: 'Muumit', fr: 'les Moomins', puhekieli: 'Muumit' },
      { fi: 'täsmällisyys', fr: 'ponctualité', puhekieli: 'täsmällisyys' }
    ]
  },
  {
    id: 'b2-9',
    level: 'B2',
    module: 'B2.3',
    title: 'Uutiset ja media - Actualites et medias',
    description: 'Comprendre les actualités en finnois',
    sections: [
      {
        type: 'theory',
        title: 'Vocabulaire des actualités',
        content: `**Types de nouvelles:**

| Finnois | Francais |
|---------|----------|
| uutiset | actualités |
| politiikka | politique |
| talous | economie |
| kulttuuri | culture |
| urheilu | sport |
| sää | meteo |
| kotimaa | national |
| ulkomaat | international |

**Verbes des actualités:**
| Finnois | Francais |
|---------|----------|
| tapahtua | se produire |
| ilmoittaa | annoncer |
| vahvistaa | confirmer |
| kieltää | nier |
| tutkia | enqueter |
| päättää | decider |

**Sources d'actualités:**
- Yle (radio-television publique)
- Helsingin Sanomat (quotidien)
- Iltalehti, Ilta-Sanomat (tabloïds)`
      },
      {
        type: 'theory',
        title: 'Lire un article',
        content: `**Structure typique d'un article:**

1. **Otsikko** (titre) - Resume en quelques mots
2. **Ingressi** (chapeau) - Resume de l'essentiel
3. **Leipäteksti** (corps) - Details de l'article

**Phrases types:**
- Hallitus päätti... = Le gouvernement a decide...
- Poliisin mukaan... = Selon la police...
- Asiantuntijat arvioivat... = Les experts estiment...
- Kyselyyn vastasi... = ...ont repondu au sondage

**Vocabulaire politique:**
| Finnois | Francais |
|---------|----------|
| eduskunta | parlement |
| hallitus | gouvernement |
| presidentti | president |
| ministeri | ministre |
| puolue | parti politique |
| vaalit | elections |
| äänestää | voter |

**Conseil:** Commence par Yle Selkouutiset (actualités en finnois simplifié)!`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Comment dit-on "actualités" en finnois?',
        options: ['urheilut', 'uutiset', 'sanomat', 'lehdet'],
        correct: 1,
        explanation: 'Uutiset = actualités. Urheilu = sport, Sanomat = journaux.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Hallitus ___ uudesta laista. (Le gouvernement a decide d\'une nouvelle loi)',
        answer: 'päätti',
        hint: 'Imparfait de päättää'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Poliisin mukaan onnettomuudessa loukkaantui kolme henkilöä.',
        answer: 'Selon la police, trois personnes ont été blessées dans l\'accident.',
        alternatives: ['D\'après la police, trois personnes ont été blessées dans l\'accident.']
      }
    ],
    vocabulary: [
      { fi: 'uutiset', fr: 'actualités', puhekieli: 'uutiset' },
      { fi: 'hallitus', fr: 'gouvernement', puhekieli: 'hallitus' },
      { fi: 'eduskunta', fr: 'parlement', puhekieli: 'eduskunta' },
      { fi: 'vaalit', fr: 'elections', puhekieli: 'vaalit' },
      { fi: 'äänestää', fr: 'voter', puhekieli: 'äänestää' },
      { fi: 'puolue', fr: 'parti politique', puhekieli: 'puolue' },
      { fi: 'tapahtua', fr: 'se produire', puhekieli: 'tapahtuu' },
      { fi: 'ilmoittaa', fr: 'annoncer', puhekieli: 'ilmottaa' },
      { fi: 'onnettomuus', fr: 'accident', puhekieli: 'onnettomuus' },
      { fi: 'loukkaantua', fr: 'être blessé', puhekieli: 'loukkaantuu' }
    ]
  },
  {
    id: 'b2-10',
    level: 'B2',
    module: 'B2.3',
    title: 'Suomi tulevaisuudessa - Prochaines etapes',
    description: 'Continuer a progresser en finnois',
    sections: [
      {
        type: 'theory',
        title: 'Felicitations et bilan',
        content: `**Onnittelut!** Tu as termine le niveau B2!

**Ce que tu as appris:**
- A1: Bases, presentations, verbe olla, famille
- A2: Temps du passe, conditionnel, cas, opinions
- B1: Passif, propositions, participes, travail
- B2: Structures avancees, registres, culture

**Tu peux maintenant:**
- Comprendre des textes complexes
- T'exprimer avec fluidite
- Participer a des discussions sur des sujets varies
- Comprendre les actualités
- Lire de la litterature adaptee

**Points forts a conserver:**
- Continue a distinguer kirjakieli/puhekieli
- Les 15 cas grammaticaux (tu les connais maintenant!)
- L'harmonie vocalique
- Le systeme verbal`
      },
      {
        type: 'theory',
        title: 'Pour continuer',
        content: `**Ressources pour progresser:**

**Lecture:**
- Yle Selkouutiset (actualités simplifiées)
- Livres pour enfants/ados (Harry Potter en finnois)
- Bandes dessinees (Aku Ankka = Donald Duck)

**Audio/Video:**
- Yle Areena (TV finlandaise en ligne)
- Podcasts: "Suomen mestari", "Finskan"
- Films finlandais avec sous-titres

**Pratique:**
- Trouvez un tandem linguistique
- Rejoignez des groupes Facebook en finnois
- Voyagez en Finlande!

**Examens officiels:**
- YKI (Yleinen kielitutkinto) - test officiel de finnois
- Niveau B2 = YKI keskitaso 4

**Dernier conseil:**
"Sisu" - N'abandonne jamais! Le finnois est difficile mais tu y arrives. Onnea matkaan! (Bonne chance pour la suite!)`
      },
      {
        type: 'exercise',
        exerciseType: 'qcm',
        question: 'Quel est le test officiel de finnois?',
        options: ['DELF', 'TOEFL', 'YKI', 'Goethe'],
        correct: 2,
        explanation: 'YKI (Yleinen kielitutkinto) est le test officiel de finnois.'
      },
      {
        type: 'exercise',
        exerciseType: 'fillBlank',
        question: 'Onnea ___! (Bonne chance pour la suite!)',
        answer: 'matkaan',
        hint: 'Littéralement: pour le voyage'
      },
      {
        type: 'exercise',
        exerciseType: 'translation',
        direction: 'fi-fr',
        question: 'Olet oppinut paljon. Ole ylpeä itsestäsi!',
        answer: 'Tu as beaucoup appris. Sois fier/fiere de toi!',
        alternatives: ['Tu as appris beaucoup. Sois fier de toi-meme!']
      }
    ],
    vocabulary: [
      { fi: 'onnittelut', fr: 'felicitations', puhekieli: 'onnittelut' },
      { fi: 'oppiminen', fr: 'apprentissage', puhekieli: 'oppiminen' },
      { fi: 'jatkaa', fr: 'continuer', puhekieli: 'jatkaa' },
      { fi: 'harjoitella', fr: 'pratiquer', puhekieli: 'harjotella' },
      { fi: 'lukea', fr: 'lire', puhekieli: 'lukee' },
      { fi: 'kuunnella', fr: 'ecouter', puhekieli: 'kuunnella' },
      { fi: 'matkustaa', fr: 'voyager', puhekieli: 'matkustaa' },
      { fi: 'ylpeä', fr: 'fier', puhekieli: 'ylpee' },
      { fi: 'onnea', fr: 'bonne chance', puhekieli: 'onnee' },
      { fi: 'matka', fr: 'voyage', puhekieli: 'matka' }
    ]
  }
];

// Obtenir toutes les lecons d'un niveau
export const getLessonsByLevel = (level) => {
  return lessons.filter(lesson => lesson.level === level);
};

// Obtenir une lecon par son ID
export const getLessonById = (id) => {
  return lessons.find(lesson => lesson.id === id);
};

// Verifier si un texte ressemble a du finnois (pas une vraie traduction francaise)
const looksLikeFinnish = (text) => {
  const lower = text.toLowerCase();

  // Contient des caracteres finnois
  if (/[äöå]/.test(lower)) return true;

  // Guide de prononciation (ex: "NEL-yä", "SEIT-se-män")
  if (/^[A-Z]{2,}-/.test(text)) return true;

  // Composition de mots (ex: "yksi + toista")
  if (/\+/.test(text)) return true;

  // Terminaisons finnoises typiques (conjugaisons, cas)
  const finnishEndings = /(n|t|mme|tte|vat|vät|in|it|imme|itte|ivat|ivät)$/;
  if (finnishEndings.test(lower) && text.length < 15 && !/\s/.test(text)) return true;

  // Mot seul sans espace qui finit par une voyelle double finnoise
  if (/^[a-zäöå]+(aa|ää|ee|ii|oo|öö|uu|yy)$/.test(lower)) return true;

  return false;
};

// Extraire le vocabulaire depuis les tableaux markdown des sections theoriques
const extractVocabularyFromMarkdown = (content) => {
  const vocabulary = [];

  // Regex pour trouver les lignes de tableau avec mot finnois en gras
  // Pattern: | **mot finnois** | traduction francaise | ...
  const tableRowRegex = /\|\s*\*\*([^*|]+)\*\*\s*\|\s*([^|]+)\|/g;

  let match;

  // Extraire les mots du pattern principal
  while ((match = tableRowRegex.exec(content)) !== null) {
    const fi = match[1].trim();
    let fr = match[2].trim();

    // Nettoyer la traduction (enlever les notes entre parentheses si trop longues)
    fr = fr.replace(/\s*\([^)]{50,}\)/g, '').trim();

    // Ignorer les en-tetes de tableau et les lignes non pertinentes
    if (fi && fr &&
        !fi.toLowerCase().includes('finnois') &&
        !fr.toLowerCase().includes('français') &&
        !fi.includes('---') &&
        fi.length > 1 &&
        // NOUVEAU: Ignorer si la "traduction" ressemble a du finnois
        !looksLikeFinnish(fr)) {

      vocabulary.push({
        fi: fi,
        fr: fr.replace(/\s*\(puhekieli\)/gi, '').trim(),
        puhekieli: fi // Par defaut, puhekieli = kirjakieli
      });
    }
  }

  return vocabulary;
};

// Obtenir tout le vocabulaire (extrait automatiquement des lecons)
export const getAllVocabulary = () => {
  const allVocab = new Map(); // Utiliser Map pour eviter les doublons

  lessons.forEach(lesson => {
    lesson.sections
      .filter(section => section.type === 'theory' && section.content)
      .forEach(section => {
        const vocab = extractVocabularyFromMarkdown(section.content);
        vocab.forEach(word => {
          // Cle unique basee sur le mot finnois
          const key = word.fi.toLowerCase();
          if (!allVocab.has(key)) {
            allVocab.set(key, {
              ...word,
              lessonId: lesson.id,
              level: lesson.level
            });
          }
        });
      });
  });

  return Array.from(allVocab.values());
};

// Niveaux disponibles
export const levels = ['A1', 'A2', 'B1', 'B2'];

// Statistiques
export const getLessonStats = () => {
  return {
    total: lessons.length,
    byLevel: levels.map(level => ({
      level,
      count: lessons.filter(l => l.level === level).length
    }))
  };
};
