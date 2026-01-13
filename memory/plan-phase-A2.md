# Phase A2 : Approfondissement et Immersion

*Cree le 8 janvier 2026*

---

## Vue d'ensemble

Cette phase vise a transformer l'apprentissage passif (reconnaissance) en apprentissage actif (production), tout en ajoutant des elements d'immersion et de gamification pour le niveau A2.

---

## A2.1 : Production Active (~40-60k tokens)

Objectif : Remplacer la reconnaissance passive par la production active.

### A2.1.1 Exercices de production ecrite
**Description :** Nouveaux types d'exercices ou l'utilisateur doit ecrire la reponse complete (pas de QCM).
**Tokens estimes :** ~15-20k
**Fichiers concernes :** `src/components/Exercise.jsx`, `src/data/lessons.js`
**Types d'exercices :**
- **Traduction FR→FI** : L'utilisateur tape la phrase finnoise complete
- **Completion de phrase** : Conjuguer un verbe, decliner un nom
- **Dictee** : Ecouter et ecrire (avec audio Phase 3)

### A2.1.2 Exercices de gradation consonantique
**Description :** Exercices dedies pour maitriser le KPT (pp→p, tt→t, kk→k, etc.).
**Tokens estimes :** ~15-20k
**Fichiers concernes :** Nouveau composant `GradationExercise.jsx`, `src/data/lessons.js`
**Fonctionnalites :**
- Tableau interactif des alternances (kauppa→kaupan, lukea→luen)
- Exercices de transformation : forme forte ↔ forme faible
- Quiz : identifier le type de gradation

### A2.1.3 Exercices sur l'objet (partitif vs total)
**Description :** Exercices cibles sur le choix de l'objet en finnois.
**Tokens estimes :** ~10-15k
**Fichiers concernes :** `src/components/Exercise.jsx`, `src/data/lessons.js`
**Exemples :**
- "Syön ___" (omena / omenan / omenaa) - expliquer pourquoi
- Regles visuelles : action incomplete → partitif, action complete → accusatif

**Total A2.1 : ~40-55k tokens**

---

## A2.2 : Chunks et Expressions (~35-50k tokens)

Objectif : Enseigner le finnois par blocs (chunks) plutot que par mots isoles.

### A2.2.1 Banque d'expressions figees
**Description :** Ajouter des expressions idiomatiques finnoises courantes classees par situation.
**Tokens estimes :** ~15-20k
**Fichiers concernes :** Nouveau fichier `src/data/expressions.js`
**Categories :**
- Opinions : "Minun mielestani...", "Mita mielta olet...?"
- Accord/desaccord : "Olen samaa mielta", "En ole varma"
- Temps : "Viime viikolla", "Ensi kuussa"
- Frequence : "Joka paiva", "Silloin talloin"
- Cause/consequence : "Sen takia", "Siksi"

### A2.2.2 Flashcards par expressions
**Description :** Etendre les flashcards pour inclure des expressions, pas seulement des mots.
**Tokens estimes :** ~10-15k
**Fichiers concernes :** `src/components/Flashcards.jsx`, `src/data/expressions.js`
**Fonctionnalites :**
- Mode "Expressions" separe du mode "Vocabulaire"
- Afficher le contexte d'utilisation
- Exemples audio (Phase 3)

### A2.2.3 Collocations finnoises
**Description :** Enseigner les combinaisons frequentes (verbe + cas, nom + adjectif).
**Tokens estimes :** ~10-15k
**Fichiers concernes :** `src/data/lessons.js`
**Exemples :**
- pitaa + elatiivi (Pidan kahvista)
- tykätä + elatiivi (Tykkaan musiikista)
- kayda + inessiivi (Kayn kaupassa)
- pelata + partitiivi (Pelaan jalkapalloa)

**Total A2.2 : ~35-50k tokens**

---

## A2.3 : Mini-histoires (~50-70k tokens)

Objectif : Immersion contextuelle via des recits courts et engageants.

### A2.3.1 Histoires graduees A2
**Description :** 10-15 mini-histoires de 150-300 mots chacune, adaptees au niveau A2.
**Tokens estimes :** ~25-35k
**Fichiers concernes :** Nouveau fichier `src/data/stories.js`, nouveau composant `StoryReader.jsx`
**Themes :**
- Une journee a Helsinki
- Faire les courses au Prisma
- Chez le medecin
- Un week-end a la mokki
- Premier jour de travail
- Rencontre avec des amis

**Fonctionnalites :**
- Mots cliquables avec traduction
- Version puhekieli / kirjakieli
- Questions de comprehension
- Vocabulaire cle mis en evidence

### A2.3.2 Dialogues etendus
**Description :** Dialogues plus longs et realistes (10-15 repliques) avec contexte.
**Tokens estimes :** ~15-20k
**Fichiers concernes :** `src/data/lessons.js`, `src/components/Exercise.jsx`
**Scenarios :**
- Commander au restaurant
- Acheter un billet de train
- Appeler pour prendre rendez-vous
- Demander son chemin

### A2.3.3 Exercices de comprehension
**Description :** Questions sur les histoires (vrai/faux, QCM, reponse courte).
**Tokens estimes :** ~10-15k
**Fichiers concernes :** `src/components/StoryReader.jsx`

**Total A2.3 : ~50-70k tokens**

---

## A2.4 : Badges (~12-18k tokens)

Objectif : Recompenser les accomplissements avec des badges.

### A2.4.1 Systeme de badges
**Description :** Debloquer des badges pour des accomplissements specifiques.
**Tokens estimes :** ~12-18k
**Fichiers concernes :** Nouveau composant `Achievements.jsx`, `src/hooks/useProgress.js`
**Exemples de badges :**
- "Premier pas" : Terminer la premiere lecon
- "Polyglotte" : Apprendre 100 mots
- "Grammairien" : Maitriser la gradation consonantique
- "Conteur" : Lire 5 mini-histoires
- "Perfectionniste" : 100% sur une lecon
- "Bilingue A2" : Terminer toutes les lecons A2

**Total A2.4 : ~12-18k tokens**

---

## A2.5 : Puhekieli Integre (~25-35k tokens)

Objectif : Maitriser le finnois parle, pas seulement ecrit.

### A2.5.1 Mode puhekieli dans les lecons
**Description :** Toggle pour voir les exemples en kirjakieli ou puhekieli.
**Tokens estimes :** ~10-15k
**Fichiers concernes :** `src/components/Lesson.jsx`, `src/data/lessons.js`
**Exemples :**
- minä olen → mä oon
- sinä olet → sä oot
- he menevat → ne menee
- eiko niin → eiks nii

### A2.5.2 Exercices de transformation
**Description :** Convertir du kirjakieli en puhekieli et vice-versa.
**Tokens estimes :** ~10-12k
**Fichiers concernes :** `src/components/Exercise.jsx`
**Format :**
- "Ecris en puhekieli : Mina haluan kahvia" → "Ma haluun kahvii"
- "Ecris en kirjakieli : Mä meen kotiin" → "Mina menen kotiin"

### A2.5.3 Dialogues 100% puhekieli
**Description :** Dialogues exclusivement en finnois parle avec sous-titres kirjakieli.
**Tokens estimes :** ~5-8k
**Fichiers concernes :** `src/data/lessons.js`

**Total A2.5 : ~25-35k tokens**

---

## Recapitulatif Phase A2

| Sous-phase | Description | Tokens estimes | Priorite |
|------------|-------------|----------------|----------|
| **A2.1** | Production active | 40-55k | Haute |
| **A2.2** | Chunks et expressions | 35-50k | Haute |
| **A2.3** | Mini-histoires | 50-70k | Moyenne |
| **A2.4** | Badges | 12-18k | Basse |
| **A2.5** | Puhekieli integre | 25-35k | Haute |

**Total Phase A2 : ~162-228k tokens (5-6 sessions)**

---

## Ordre suggere d'implementation

| Etape | Taches | Tokens | Justification |
|-------|--------|--------|---------------|
| 1 | A2.1.2 (Gradation) + A2.1.3 (Objet) | ~25-35k | Combler les lacunes grammaticales |
| 2 | A2.2.1 (Expressions) + A2.2.3 (Collocations) | ~25-35k | Apprendre par chunks |
| 3 | A2.5.1 + A2.5.2 (Puhekieli) | ~20-27k | Maitriser le parle |
| 4 | A2.1.1 (Production ecrite) | ~15-20k | Exercices de production |
| 5 | A2.3.1 + A2.3.2 (Mini-histoires) | ~40-55k | Immersion |
| 6 | A2.4.1 + A2.4.2 + A2.4.3 (Gamification) | ~30-45k | Motivation |

---

## Notes

- Chaque sous-phase peut etre implementee independamment
- Priorite donnee aux elements qui comblent les lacunes identifiees
- La gamification peut etre ajoutee a tout moment sans casser l'existant
- Les mini-histoires peuvent etre ajoutees progressivement

