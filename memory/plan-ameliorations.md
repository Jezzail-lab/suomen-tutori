# Plan d'ameliorations - Suomen-Tutori

*Mis a jour le 7 janvier 2026*

---

## Vue d'ensemble

Trois phases d'amelioration, de la plus simple a la plus complexe.
Chaque fonctionnalite est independante et peut etre implementee separement.

---

## Phase 1 : Qualite et lisibilite (~60-100k tokens)

Objectif : Corriger les problemes existants et ameliorer l'aspect visuel des lecons.

### 1.1 Correction des phrases francaises
**Description :** Relire et reformuler les phrases en francais qui ne sonnent pas naturelles dans les lecons A1 et A2.
**Tokens estimes :** ~15-25k
**Fichiers concernes :** `src/data/lessons.js`
**Criteres :**
- Expressions idiomatiques francaises
- Tournures plus naturelles
- Coherence du vouvoiement/tutoiement

### 1.2 Correction des caracteres speciaux
**Description :** Remplacer les ligatures problematiques (oe, ae colles comme dans "coeur" ou "Caeser") par des formes correctes ou separees selon le contexte.
**Tokens estimes :** ~5-10k
**Fichiers concernes :** `src/data/lessons.js`
**Exemples :**
- oe colle → oe separe ou oe selon le mot
- ae colle → ae separe

### 1.3 Amelioration visuelle des sections theoriques
**Description :** Rendre les sections de theorie plus attrayantes et lisibles avec une meilleure hierarchie visuelle.
**Tokens estimes :** ~15-25k
**Fichiers concernes :** `src/components/Lesson.jsx`, `src/index.css`
**Inspirations (sources) :**
- [Duolingo shape language](https://blog.duolingo.com/shape-language-duolingos-art-style/) : formes arrondies, couleurs vives
- [Card-based UI](https://medium.com/design-bootcamp/spticard-based-ui-design-structure-advantages-and-best-practices-69042d1f0786) : contenu en cartes distinctes
- [Hierarchie typographique](https://medium.com/design-bootcamp/typography-hierarchy-improve-readability-in-design-c77e8a4ca486) : titres, sous-titres, corps de texte bien distincts

**Ameliorations prevues :**
- Cartes distinctes pour chaque bloc de contenu (regles, exemples, astuces)
- Meilleur espacement entre les sections
- Icones ou bordures de couleur pour distinguer les types de contenu
- Mise en evidence des mots-cles finnois
- Encadres "Astuce" plus visibles
- Tableaux plus lisibles avec alternance de couleurs

### 1.4 Amelioration du rendu Markdown
**Description :** Corriger et enrichir le rendu du contenu Markdown dans les lecons (titres, listes, citations, tableaux).
**Tokens estimes :** ~10-15k
**Fichiers concernes :** `src/components/Lesson.jsx`
**Elements a gerer :**
- Titres (### → h3)
- Listes a puces
- Citations/blockquotes (> texte)
- Separateurs (---)
- Gras et italique

### 1.5 Barre de progression par niveau
**Description :** Afficher visuellement l'avancement dans chaque niveau (A1, A2, B1, B2) sur la page d'accueil.
**Tokens estimes :** ~8-12k
**Fichiers concernes :** `src/components/Home.jsx`, `src/index.css`

### 1.6 Exercices de type "cloze" (texte a trous en contexte)
**Description :** Creer un nouveau type d'exercice ou l'utilisateur complete une phrase entiere, pas juste un mot isole.
**Tokens estimes :** ~20-30k
**Fichiers concernes :** `src/components/Exercise.jsx`, `src/data/lessons.js`

**Total Phase 1 : ~60-100k tokens (3-4 sessions)**

---

## Phase 2 : Engagement (~100-140k tokens)

Objectif : Ameliorer la retention et diversifier les exercices.

### 2.1 Repetition espacee (SRS) pour les flashcards
**Description :** Les mots difficiles reviennent plus souvent, les mots faciles sont espaces. Calcul automatique des intervalles de revision.
**Tokens estimes :** ~30-40k
**Fichiers concernes :** `src/hooks/useProgress.js`, `src/components/Flashcards.jsx`

### 2.2 Exercices de construction de phrases
**Description :** L'utilisateur remet les mots dans le bon ordre pour former une phrase correcte.
**Tokens estimes :** ~25-35k
**Fichiers concernes :** `src/components/Exercise.jsx`, `src/data/lessons.js`

### 2.3 Dialogues interactifs en puhekieli
**Description :** Mini-conversations ou l'utilisateur choisit la bonne reponse. Accent mis sur le finnois parle.
**Tokens estimes :** ~20-30k
**Fichiers concernes :** `src/components/Exercise.jsx`, `src/data/lessons.js`

### 2.4 Tableaux de grammaire interactifs
**Description :** Afficher les declinaisons et conjugaisons de maniere visuelle et cliquable.
**Tokens estimes :** ~20-30k
**Fichiers concernes :** Nouveau composant `GrammarTables.jsx`

**Total Phase 2 : ~100-140k tokens (3-4 sessions)**

### Statut Phase 2

| Etape | Taches | Statut |
|-------|--------|--------|
| 2.1 | SRS pour flashcards | ✅ Complete |
| 2.2 | Construction de phrases | ✅ Complete |
| 2.3 | Dialogues puhekieli | ✅ Complete |
| 2.4 | Tableaux grammaire | ✅ Complete |

**Phase 2 terminee le 7 janvier 2026.**

---

## Phase 3 : Immersion (~210-320k tokens)

Objectif : Ajouter l'audio et des fonctionnalites avancees.

### 3.1 Audio pour le vocabulaire
**Description :** Ajouter des fichiers audio ou utiliser la synthese vocale (Web Speech API) pour la prononciation des mots.
**Tokens estimes :** ~40-60k
**Fichiers concernes :** `src/components/Flashcards.jsx`, `src/components/Lesson.jsx`

### 3.2 Exercices d'ecoute et discrimination auditive
**Description :** L'utilisateur ecoute un mot et choisit parmi plusieurs options. Utile pour les paires minimales (kuka/kukka).
**Tokens estimes :** ~30-40k
**Fichiers concernes :** `src/components/Exercise.jsx`

### 3.3 Reconnaissance vocale
**Description :** L'utilisateur prononce un mot et recoit un retour sur sa prononciation via Web Speech API.
**Tokens estimes :** ~50-80k
**Fichiers concernes :** Nouveau composant, integration Web Speech API

### 3.4 Parcours adaptatif
**Description :** L'application detecte les points faibles et propose des exercices cibles. Recommandations personnalisees.
**Tokens estimes :** ~60-100k
**Fichiers concernes :** `src/hooks/useProgress.js`, `src/components/Home.jsx`

### 3.5 Test de placement initial
**Description :** Evaluation du niveau de l'utilisateur au premier lancement pour commencer au bon endroit.
**Tokens estimes :** ~30-40k
**Fichiers concernes :** Nouveau composant `PlacementTest.jsx`

**Total Phase 3 : ~210-320k tokens (4-6 sessions)**

---

## Recapitulatif

| Phase | Taches | Tokens estimes | Statut |
|-------|--------|----------------|--------|
| Phase 1 | 5 taches | 60-100k | ✅ Complete |
| Phase 2 | 4 taches | 100-140k | ✅ Complete |
| **Phase A2** | 5 sous-phases | 180-255k | A faire |
| Phase 3 | 5 taches | 210-320k | En attente |

**Nouveau** : Voir `plan-phase-A2.md` pour le detail de la Phase A2 (Approfondissement niveau A2).

---

## Ordre suggere pour Phase 1

| Etape | Taches | Tokens | Statut |
|-------|--------|--------|--------|
| 1 | 1.1 + 1.2 | ~20-35k | ✅ Complete |
| 2 | 1.3 + 1.4 | ~25-40k | ✅ Complete |
| 3 | ~~1.5~~ | ~~8-12k~~ | ❌ Retire (non necessaire) |
| 4 | 1.6 | ~20-30k | ✅ Complete |

**Phase 1 terminee le 7 janvier 2026.**

---

## Notes importantes

- Chaque tache peut etre faite independamment
- Je demanderai confirmation avant de commencer si la limite de tokens risque d'etre atteinte
- Sauvegarde effectuee : `app/src_backup_20260107/`
- Les estimations sont approximatives et peuvent varier
