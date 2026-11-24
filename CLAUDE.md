# Site de cours de M. Berthier

Site statique publié par GitHub Pages sur https://m-berthier-math.github.io (branche `main`, publication automatique à chaque push).

## Structure
- `index.html` : la page (apparence, onglets). On ne la modifie que pour un changement d'apparence.
- `contenu.js` : tout le contenu, dans la constante `CLASSES`. C'est ici qu'on ajoute ou modifie.
- `pdf/<classe>/chNN-titre-du-chapitre/nom-du-fichier.pdf` : les PDF.
  Dossiers de classe : `2nde`, `1spe`, `tspe`, `1stmg`, `tstmg`.
- `.nojekyll` : à garder.

## Classes (`id` dans contenu.js → nom affiché)
seconde → 2nde · premiere-spe → 1re Spé · terminale-spe → Tle Spé · premiere-stmg → 1re STMG · terminale-stmg → Tle STMG

## Format des données
- Cours : `{ "num": 3, "titre": "Limites de fonctions", "fichiers": [ { "nom": "Cours - Limites de fonctions", "fichier": "pdf/tspe/ch03-limites-de-fonctions/cours-limites-de-fonctions.pdf" } ] }`
- Capytale : `{ "num": 1, "titre": "Second degré", "liens": [ { "nom": "Les exercices de base", "url": "https://capytale2.ac-paris.fr/web/c/xxxx-xxxxxxxx/mln", "note": "texte facultatif affiché sous le lien" } ] }`
- `num: null` = rubrique sans numéro (ex. « Annale bac », « Automatismes »), affichée après les chapitres.

## Règles
- Noms de fichiers et dossiers PDF : sans accents ni espaces, en minuscules avec tirets ; numéro de chapitre sur deux chiffres (`ch07-`).
- Dans un chapitre, le PDF « Cours » vient en premier.
- Ne pas afficher les codes Capytale (les élèves utilisent les liens).
- Pas de rubriques « Autres ressources » sauf « Annale bac » en Tle Spé, sauf demande contraire.
- Corriger les fautes de frappe évidentes dans les titres et le signaler.
- Avant de publier : vérifier que chaque chemin de `contenu.js` pointe vers un fichier existant et que la page s'affiche sans erreur.
- Message de commit en français, puis push sur `main`. Le site est à jour 1 à 2 minutes après.
