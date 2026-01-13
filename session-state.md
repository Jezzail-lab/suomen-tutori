# Etat de la Session - Tuteur Finnois

*Derniere mise a jour: 13 janvier 2026*

---

## Travail accompli

### Recherches
- [x] Documentation complete sur la grammaire finnoise (uusikielemme.fi)
- [x] Differences puhekieli (parle) vs kirjakieli (ecrit)
- [x] Ressources authentiques : Yle, podcasts, YouTube
- [x] Progression CECRL A1 a B2 structuree

### Application developpee
- [x] Projet React + Vite initialise dans `app/`
- [x] Theme graphique Moomins (couleurs pastels, tons chauds)
- [x] 45 lecons completes (A1-B2) avec theorie + exercices
- [x] Systeme d'exercices : QCM, texte a trous, traduction
- [x] Flashcards avec filtre par niveau et puhekieli
- [x] Suivi de progression (localStorage)
- [x] Raccourci `Suomen-Tutori.command` cree

### Lecons creees
- **A1** : 15 lecons (salutations, nombres, olla, famille, verbes type 1, nourriture, cas locatifs, couleurs, maison, temps, possession, ville, modaux, partitif)
- **A2** : 10 lecons (imparfait, cas exterieurs, parfait, conditionnel, objet, postpositions, 3e infinitif, opinions, verbes types 2-3, comparaison)
- **B1** : 10 lecons (passif, verbes types 4-6, necessite, subordonnees, translatif/essif, passif passe, participes, travail, discours indirect, idiomes)
- **B2** : 10 lecons (participe agent, potentiel, propositions reduites, cas rares, verbes pronominaux, registres, argumentation, culture, actualites, conclusion)

### Lecons ameliorees (7 janvier 2026)
- [x] **A1 (1-15)** : 4 sections theoriques, 10-11 exercices, tableaux markdown, astuces, dialogues, accents francais
- [x] **A2 (1-10)** : 4 sections theoriques, 10-11 exercices, tableaux markdown, astuces, dialogues, accents francais

### Phase 1 completee (7 janvier 2026)
- [x] **1.1** : Correction des phrases francaises non naturelles
- [x] **1.2** : Correction des caracteres speciaux (ligatures oe, ae)
- [x] **1.3** : Amelioration visuelle des sections theoriques (CSS)
- [x] **1.4** : Amelioration du rendu Markdown (parser complet)
- [x] **1.6** : Ajout des exercices cloze (nouveau type d'exercice)

### Phase 2 completee (7 janvier 2026)
- [x] **2.1** : Systeme de repetition espacee (SRS) pour flashcards
  - 8 niveaux (0-7) avec intervalles croissants (0 jours a 6 mois)
  - Modes : Reviser, Apprendre, Parcourir
  - Boutons SRS : A revoir, Difficile, Bien, Facile
- [x] **2.2** : Exercices de construction de phrases (wordOrder)
  - Cliquer sur les mots pour former une phrase
  - Validation avec alternatives acceptees
- [x] **2.3** : Dialogues interactifs en puhekieli
  - Conversations avec bulles (style chat)
  - Choix de reponses avec traductions
- [x] **2.4** : Tableaux de grammaire interactifs
  - Nouveau composant GrammarTables.jsx
  - Onglet "Les 15 cas" : 11 cas avec exemples cliquables
  - Onglet "Conjugaison" : 4 verbes (puhua, olla, menna, syoda)
  - Toggle puhekieli pour les conjugaisons
  - Bouton "Grammaire" dans la navigation principale

### Phase A2.6 completee (13 janvier 2026) - Systeme de maitrise visuelle
- [x] **A2.6.1** : Modele SRS a 5 niveaux de maitrise
  - NEW (Nouveau), RECOGNIZED (Reconnu), WRITTEN (Ecrit), CONSOLIDATED (Consolide), MASTERED (Maitrise)
  - Progression basee sur mode flip et ecriture
  - Intervalles SRS : 0, 1, 2, 4, 7 jours
- [x] **A2.6.2** : Mode ecriture dans Flashcards
  - Taper la traduction finnoise
  - Accepte puhekieli comme reponse valide
- [x] **A2.6.3** : Dashboard vocabulaire sur la page Home
  - Barre de progression par niveau de maitrise
  - Grille visuelle des niveaux avec compteurs
  - Alerte pour mots a reviser
- [x] **A2.6.4** : Conjugaisons de verbes
  - Base de 25+ verbes finnois avec conjugaisons completes
  - Affichage sur les cartes de vocabulaire (verbes)
  - Indicateur "verbe" sur les flashcards
- [x] **A2.6.5** : Fiche recapitulative de lecon (LessonSummary)
  - Affichee apres completion d'une lecon
  - Statistiques, points cles, vocabulaire, verbes

### Decorations et ambiance (13 janvier 2026)
- [x] **Paysage finlandais decoratif** (SceneryBackground.jsx)
  - Ciel avec nuages animes
  - Collines a 3 niveaux de profondeur
  - Pins (manty) - silhouettes lointaines et proches
  - Bouleaux (koivu) avec troncs blancs et marques
  - Prairie fleurie avec herbes ondulantes
  - Fleurs finlandaises : marguerites, campanules, epilobes, pissenlits
  - Animations CSS subtiles (nuages, fleurs, arbres)

- [x] **Systeme de sons** (useSounds.js)
  - Web Audio API (pas de fichiers externes)
  - Son bonne reponse : carillon joyeux (arpege majeur)
  - Son mauvaise reponse : note douce descendante
  - Son fin de lecon : melodie style kantele
  - Son montee de niveau : accord harmonieux
  - Son flip de carte : petit "pop"
  - Bouton toggle sons dans la navigation

- [x] **Animations de feedback** (FeedbackEffects.jsx)
  - Particules etoiles dorees sur bonne reponse
  - Etincelles accompagnant les etoiles
  - Cascade de feuilles vertes et petales roses en fin de lecon
  - Systeme de particules avec physique (gravite, rotation)

### Fichiers crees/modifies
- `app/` - Application React complete
- `app/src/index.css` - Theme Moomins + styles SRS + grammaire + paysage
- `app/src/data/lessons.js` - 45 lecons completes
- `app/src/data/verbConjugations.js` - Base de conjugaisons (25+ verbes) **NOUVEAU**
- `app/src/components/GrammarTables.jsx` - Tableaux de grammaire
- `app/src/components/Exercise.jsx` - Types cloze, wordOrder, dialogue
- `app/src/components/Flashcards.jsx` - Systeme SRS complet + mode ecriture + sons
- `app/src/components/LessonSummary.jsx` - Fiche recapitulative **NOUVEAU**
- `app/src/components/SceneryBackground.jsx` - Paysage finlandais **NOUVEAU**
- `app/src/components/FeedbackEffects.jsx` - Animations particules **NOUVEAU**
- `app/src/hooks/useProgress.js` - Gestion SRS 5 niveaux
- `app/src/hooks/useSounds.js` - Systeme de sons **NOUVEAU**
- `finnish/grammaire/synthese-grammaire.md`
- `finnish/grammaire/progression-niveaux.md`
- `finnish/vocabulaire/finnois-quotidien.md`
- `Suomen-Tutori.command` - Raccourci de lancement

---

## Prochaines taches

Voir le document detaille : `memory/plan-ameliorations.md`

Suggestions pour la suite :
- Ajouter plus de verbes dans verbConjugations.js
- Creer un mode "revision quotidienne" base sur le SRS
- Ajouter des sons pour les exercices dans les lecons
- Mode sombre (dark mode) optionnel

### Sauvegarde effectuee
- `app/src_backup_20260107/` - Sauvegarde du 7 janvier 2026

---

## Pour reprendre

1. Lire ce fichier (session-state.md)
2. Lire memory/profil-apprenant.md
3. Lire memory/plan-ameliorations.md pour les prochaines etapes

---

## Commande pour lancer l'app

```bash
cd ~/Projects/tuteur-finnois/app
npm run dev
```
Ou double-cliquer sur `Suomen-Tutori.command`

---

## Serveur actuel

Le serveur de dev tourne sur **http://localhost:5174/**
