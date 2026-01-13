# Lessons Learned - Projet Tuteur Finnois

*Derniere mise a jour: 7 janvier 2025*

---

## Decisions techniques

### Stack choisie
- **React + Vite** : Simple, rapide, gratuit
- **localStorage** : Sauvegarde progression sans backend
- **CSS pur** : Pas de dependances supplementaires

### Architecture
```
app/src/
├── components/   # Home, Lesson, Exercise, Flashcards
├── data/         # lessons.js (donnees des lecons)
├── hooks/        # useProgress.js (gestion progression)
└── index.css     # Styles globaux
```

---

## Points importants sur le finnois

### Puhekieli vs Kirjakieli
- Le finnois parle (puhekieli) est TRES different de l'ecrit
- 90% des interactions quotidiennes sont en puhekieli
- L'application doit enseigner LES DEUX des le debut

### Transformations cles
- mina → ma (je)
- sina → sa (tu)
- han → se (il/elle)
- me menemme → me mennaan (nous allons)

### Ressources de reference
- uusikielemme.fi : Grammaire complete
- Yle Selkouutiset : Actualites en finnois simple
- Finnish with Eemeli : Podcast intermediaire

---

## A ne pas oublier

1. Toujours inclure la forme puhekieli dans le vocabulaire
2. Les Finlandais utilisent "se" pour les personnes (pas impoli)
3. Harmonie vocalique : voyelles avant (a,o,u) vs arriere (a,o,y)
4. 15 cas grammaticaux - introduire progressivement

---

## Prochaine session

- Theme Moomins a implementer EN PREMIER
- Ajouter lecons A1.3 a A2
- Considerer l'audio (Web Speech API ou fichiers)
