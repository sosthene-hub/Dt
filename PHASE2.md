# Phase 2 — Jeu contre Scan 3.1

## Réalisé
- Jeu local contre Scan en Web Worker, avec trois profondeurs configurables : Facile (3), Normal (5) et Fort (7).
- Règles internationales 10×10 implémentées dans `src/game-rules.js` : déplacements des pions vers l’avant, prises dans les deux sens, prises multiples, captures obligatoires, sélection des séquences qui prennent le maximum de pièces, dames volantes et promotion à la fin du coup.
- Les pièces capturées restent des obstacles jusqu’à la fin de la séquence, conformément aux règles FMJD (notamment les articles 4.8 et 4.11) ; les manœuvres de pions sur la rangée de promotion sont également couvertes par test.
- Application des coups Scan uniquement s’ils correspondent à une séquence légale calculée localement.
- Fin de partie par absence de coups légaux, répétition triple, nouvelle partie et annulation d’un tour complet.
- Service worker de production qui précache l’interface, les ressources Vite, le Worker Scan et le fichier de données du moteur. Le cache hors ligne est vérifié par un test automatisé simulant l’indisponibilité du réseau.
- Réduction de la table de transposition à 1 MiB pour le navigateur, bitbases désactivées (`bb-size=0`).

## Contournement Scan
Le build JS de Scan utilisé ici n’émet pas de réponse Hub `done` dans son chemin spécial lorsqu’un seul coup légal existe. Pour éviter de bloquer la partie, l’application joue le coup forcé calculé par son générateur de règles ; lorsqu’il existe plusieurs options, elle interroge Scan normalement.

## Vérifications
`npm test` passe :
1. build de production Vite ;
2. tests de règles : ouverture, coup 32–28, réponse 18–23, prises maximales, dame volante, capture d’obstacles, promotion et passage de la rangée de promotion ;
3. test Scan : initialisation Hub, réponse à une position issue d’une partie et prise obligatoire ;
4. test du service worker : précache et récupération hors ligne du shell et des données moteur.

Le serveur de production répond HTTP 200 pour le HTML, le Worker, les données Scan et `sw.js`.

## Limites / validation requise
- Aucun appareil Chrome Android n’est disponible ici ; le test tactile et le test hors ligne réel sur téléphone restent à effectuer.
- Le simulateur de cache valide les chemins précachés, mais ne remplace pas la vérification du Service Worker dans Chrome.
- La répétition triple est détectée ; les règles additionnelles de nulle des finales ne sont pas encore complètes.
- Les tables de finales restent désactivées et les autres sections de navigation sont encore des écrans placeholder.
