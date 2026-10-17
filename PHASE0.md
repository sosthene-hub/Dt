# Phase 0 — résultat provisoire

## Décision technique
- Approche retenue : webapp personnelle/PWA, conformément au brief `New projectwebapp dame.txt` (la demande APK du premier brief est remplacée par cette nouvelle approche).
- Frontend : HTML/CSS/JavaScript vanilla + Vite, pour garder le prototype léger.
- Moteur : `scan3.1.js` 1.1.0 dans un Web Worker local, via le protocole Hub.

## Vérification de Scan
Le paquet npm est bien publié, mais son archive ne contient pas le fichier de données `scan_normal.data` dont son wrapper a besoin. Le prototype embarque donc les données d’évaluation `eval` de la version amont RoepStoep/scan-3.1 et prépare l’enveloppe de données avec les petits fichiers de tables neutralisés. Le moteur est configuré avec `bb-size=0`, donc ces tables de finales ne sont pas utilisées.

Test effectué avec `npm run test:engine` : Scan annonce ses paramètres, passe par `wait`, reçoit `init`, répond `ready`, puis recherche à profondeur 5 depuis la position après `32-28` et rend `done move=18-23`. Le serveur sert aussi correctement le worker JS et l’asset des données (HTTP 200).

## Prototype
- Damier 10×10 responsive, placement initial standard et sélection des pions.
- Un déplacement simple d’ouverture (ex. 32–28) peut être joué puis transmis à Scan.
- Scan répond avec un coup légal dans le smoke test.
- L’interface sert le jeu uniquement en français et ne contacte pas d’API distante.

## Limites / non validé
- Ce prototype n’est pas encore un jeu complet : les prises, la validation complète des règles, l’historique, les niveaux, les sections de navigation et l’analyse ne sont pas implémentés.
- Le mode hors ligne/PWA, IndexedDB, import PDN et tables de finales sont hors de cette phase.
- Le test de moteur est automatisé dans un shim de Web Worker; aucun appareil Chrome Android n’est disponible ici pour un test physique. Il faudra confirmer l’affichage et les interactions sur téléphone avant de déclarer la phase 0 validée.
- Le code Scan amont est GPL-3.0. La redistribution publique devra respecter les obligations de cette licence, même si la fiche npm du paquet affiche MIT.

## Pour lancer
```sh
npm install
npm run dev
```
Puis ouvrir l’adresse affichée par Vite. Pour vérifier le moteur :
```sh
npm run test:engine
```
