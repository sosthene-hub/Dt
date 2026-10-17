# Dames internationales — prototype Phase 2

Webapp responsive en français pour l’entraînement aux dames internationales 10×10. Scan 3.1 (`scan3.1.js` 1.1.0) s’exécute dans un Web Worker local, sans API distante.

## Lancer et tester

```sh
npm install
npm run dev
```

Ouvrir l’adresse affichée par Vite. Build : `npm run build`. Tests automatisés complets : `npm test` (build, règles, moteur Scan et cache hors ligne simulé).

## Fonctions actuelles

- Jeu local contre Scan 3.1, avec profondeur Facile 3 / Normal 5 / Fort 7.
- Génération et validation des coups légaux : déplacements des pions, prises obligatoires, capture maximale, dames volantes, promotion, prises multiples et pièces capturées gardées comme obstacles jusqu’à la fin de la séquence.
- Détection de fin par absence de coup et de nulle après répétition triple.
- Annulation du dernier tour complet.
- Service worker en build de production : précache la page, les ressources frontend, le worker et le paquet de données Scan pour un usage hors ligne après premier chargement.
- Navigation de Phase 1 conservée ; les autres modules restent des écrans de préparation.

## Publication de test sur GitHub Pages

Le dépôt contient un workflow `/.github/workflows/deploy-pages.yml` prêt pour publier cette application sous un chemin de dépôt GitHub Pages. Pour l’utiliser : crée un dépôt GitHub public, téléverse le contenu de ce projet sur la branche `main`, puis dans **Settings → Pages**, choisis **GitHub Actions** comme source. Le workflow construit et teste le site avec son chemin de sous-répertoire. Après réussite de l’action, l’URL suit la forme `https://<utilisateur>.github.io/<nom-du-dépôt>/`.

L’intégration GitHub n’est pas disponible dans cette session ; la publication dans ton compte devra donc être déclenchée depuis ton dépôt.

## Périmètre non terminé

La PWA n’a pas encore de manifeste/installation sur l’écran d’accueil (Phase 6). Les tables de finales ne sont pas activées (`bb-size=0`). Analyse, puzzles, import PDN, éditeur et générateur ne sont pas implémentés. Les règles de nulle spécifiques des finales au-delà de la répétition ne sont pas encore intégrées.

Le moteur a un chemin spécial qui omet sa réponse Hub lorsqu’il n’a qu’un seul coup : l’application identifie donc un coup forcé avec son générateur légal et le joue directement. La recherche Scan est utilisée dès qu’il existe plusieurs choix.

## Licence

Le paquet npm affiche MIT, mais le code amont Scan 3.1 de Fabien Letouzey est publié sous GPL-3.0. Toute redistribution devra respecter les obligations de cette licence.
