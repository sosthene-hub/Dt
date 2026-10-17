# Phase 1 — Interface et navigation

## Réalisé
- Ajout d’un menu tiroir commandé par le hamburger, avec fond d’assombrissement et fermeture par bouton, clic à l’extérieur ou touche Échap.
- Navigation responsive en français, avec 9 sections : Accueil/Jouer, Créer une partie, Apprendre, Problèmes, Damier d’analyse, Éditeur de partie, Importer une partie, Générateur de positions et Recherche avancée.
- Chaque section est accessible et présente un écran d’accueil/placeholder décrivant les fonctionnalités prévues, conformément au périmètre Phase 1.
- Le prototype de jeu Scan 3.1 reste accessible depuis Accueil/Jouer.

## Vérifications effectuées
- `npm run build` : réussi.
- `npm run test:engine` : Scan s’initialise (`ready`) et répond à une position de test par `done move=18-23`.
- Contrôle statique : les neuf entrées de navigation sont présentes.
- Le serveur de développement est accessible via l’aperçu live.

## À valider
La navigation a été vérifiée au niveau du code/build. Aucun appareil Chrome Android n’est disponible ici ; la vérification tactile sur téléphone reste à faire. Les outils des pages placeholder ne sont pas encore fonctionnels : leur développement appartient aux phases suivantes.
