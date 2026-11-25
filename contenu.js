/* ============================================================
   CONTENU DU SITE — la seule partie à modifier.
   Pour chaque classe :
     cours    : chapitres -> liste de PDF (nom affiché + chemin du fichier)
     capytale : chapitres -> liste de liens { nom, url, note (texte facultatif) }
   num : numéro du chapitre (null = rubrique sans numéro, ex. Automatismes)
   ============================================================ */
const CLASSES = [
 {
  "id": "seconde",
  "nom": "2nde",
  "couleur": "#2f6fd6",
  "cours": [
   {
    "num": 1,
    "titre": "Nombres entiers",
    "fichiers": [
     {
      "nom": "Cours Nombres entiers",
      "fichier": "pdf/2nde/ch01-nombres-entiers/cours-nombres-entiers.pdf"
     },
     {
      "nom": "Déroulement nombres entiers",
      "fichier": "pdf/2nde/ch01-nombres-entiers/deroulement-nombres-entiers.pdf"
     }
    ]
   },
   {
    "num": 2,
    "titre": "Intervalles et inégalités",
    "fichiers": [
     {
      "nom": "Cours Intervalles et inégalités",
      "fichier": "pdf/2nde/ch02-intervalles-et-inegalites/cours-intervalles-et-inegalites.pdf"
     },
     {
      "nom": "Déroulement intervalles et inégalités",
      "fichier": "pdf/2nde/ch02-intervalles-et-inegalites/deroulement-intervalles-et-inegalites.pdf"
     }
    ]
   },
   {
    "num": 3,
    "titre": "Fonctions de référence",
    "fichiers": [
     {
      "nom": "Cours fonctions de référence",
      "fichier": "pdf/2nde/ch03-fonctions-de-reference/cours-fonctions-de-reference.pdf"
     }
    ]
   },
   {
    "num": 4,
    "titre": "Vecteurs",
    "fichiers": [
     {
      "nom": "Cours Vecteurs",
      "fichier": "pdf/2nde/ch04-vecteurs/cours-vecteurs.pdf"
     },
     {
      "nom": "Exercices vecteurs",
      "fichier": "pdf/2nde/ch04-vecteurs/exercices-vecteurs.pdf"
     }
    ]
   },
   {
    "num": 5,
    "titre": "Probabilité",
    "fichiers": [
     {
      "nom": "Cours probabilités",
      "fichier": "pdf/2nde/ch05-probabilite/cours-probabilites.pdf"
     },
     {
      "nom": "Déroulement probabilité",
      "fichier": "pdf/2nde/ch05-probabilite/deroulement-probabilite.pdf"
     }
    ]
   },
   {
    "num": 6,
    "titre": "Calcul Littéral",
    "fichiers": [
     {
      "nom": "Cours calcul littéral",
      "fichier": "pdf/2nde/ch06-calcul-litteral/cours-calcul-litteral.pdf"
     },
     {
      "nom": "Déroulement calcul littéral",
      "fichier": "pdf/2nde/ch06-calcul-litteral/deroulement-calcul-litteral.pdf"
     }
    ]
   },
   {
    "num": 7,
    "titre": "Etude de fonctions",
    "fichiers": [
     {
      "nom": "Cours Etude de fonctions",
      "fichier": "pdf/2nde/ch07-etude-de-fonctions/cours-etude-de-fonctions.pdf"
     },
     {
      "nom": "Déroulement etude de fonctions",
      "fichier": "pdf/2nde/ch07-etude-de-fonctions/deroulement-etude-de-fonctions.pdf"
     }
    ]
   },
   {
    "num": 8,
    "titre": "Problème de géométrie",
    "fichiers": [
     {
      "nom": "Cours problème de géométrie",
      "fichier": "pdf/2nde/ch08-probleme-de-geometrie/cours-probleme-de-geometrie.pdf"
     },
     {
      "nom": "Déroulement prob de géométrie",
      "fichier": "pdf/2nde/ch08-probleme-de-geometrie/deroulement-prob-de-geometrie.pdf"
     }
    ]
   },
   {
    "num": 9,
    "titre": "Les droites du plan",
    "fichiers": [
     {
      "nom": "Cours les droites du plan",
      "fichier": "pdf/2nde/ch09-les-droites-du-plan/cours-les-droites-du-plan.pdf"
     },
     {
      "nom": "Déroulement droites du plan",
      "fichier": "pdf/2nde/ch09-les-droites-du-plan/deroulement-droites-du-plan.pdf"
     }
    ]
   }
  ],
  "capytale": [
   {
    "num": 3,
    "titre": "Fonctions de référence",
    "liens": [
     {
      "nom": "Révisions - Fonctions de référence",
      "url": "https://capytale2.ac-paris.fr/web/c/c06e-13122665/mln"
     }
    ]
   },
   {
    "num": null,
    "titre": "Automatismes",
    "liens": [
     {
      "nom": "Automatisme 1 - Puissance",
      "url": "https://capytale2.ac-paris.fr/web/c/6dc0-11778352/mln"
     },
     {
      "nom": "Automatisme 2 - Racine carrée",
      "url": "https://capytale2.ac-paris.fr/web/c/c5bf-11937338/mln"
     },
     {
      "nom": "Automatisme 3 - Calcul littéral",
      "url": "https://capytale2.ac-paris.fr/web/c/d00c-11937514/mln"
     },
     {
      "nom": "Automatisme 4 - Fractions",
      "url": "https://capytale2.ac-paris.fr/web/c/8ab3-11937802/mln"
     },
     {
      "nom": "Automatisme Expert 1",
      "url": "https://capytale2.ac-paris.fr/web/c/3474-11937927/mln"
     },
     {
      "nom": "Automatisme 5 - Équation",
      "url": "https://capytale2.ac-paris.fr/web/c/305f-12686269/mln"
     },
     {
      "nom": "Automatisme 6 - Inéquation",
      "url": "https://capytale2.ac-paris.fr/web/c/598b-12928438/mln"
     },
     {
      "nom": "Automatisme 7 - Équation et inéquation produit et quotient",
      "url": "https://capytale2.ac-paris.fr/web/c/3ffc-12928583/mln"
     },
     {
      "nom": "Automatisme Expert 2",
      "url": "https://capytale2.ac-paris.fr/web/c/9345-13122213/mln"
     }
    ]
   }
  ]
 },
 {
  "id": "premiere-spe",
  "nom": "1re Spé",
  "couleur": "#d6452f",
  "cours": [
   {
    "num": 1,
    "titre": "Second degré",
    "fichiers": [
     {
      "nom": "Cours second degré",
      "fichier": "pdf/1spe/ch01-second-degre/cours-second-degre.pdf"
     },
     {
      "nom": "Déroulement second degré",
      "fichier": "pdf/1spe/ch01-second-degre/deroulement-second-degre.pdf"
     }
    ]
   },
   {
    "num": 2,
    "titre": "Trigonométrie",
    "fichiers": [
     {
      "nom": "Cours trigonométrie",
      "fichier": "pdf/1spe/ch02-trigonometrie/cours-trigonometrie.pdf"
     },
     {
      "nom": "Déroulement trigonométrie",
      "fichier": "pdf/1spe/ch02-trigonometrie/deroulement-trigonometrie.pdf"
     }
    ]
   },
   {
    "num": 3,
    "titre": "Suite",
    "fichiers": [
     {
      "nom": "Cours suite",
      "fichier": "pdf/1spe/ch03-suite/cours-suite.pdf"
     },
     {
      "nom": "Exercice suite",
      "fichier": "pdf/1spe/ch03-suite/exercice-suite.pdf"
     }
    ]
   },
   {
    "num": 4,
    "titre": "Probabilité conditionnelle",
    "fichiers": [
     {
      "nom": "Cours probabilité conditionnelle",
      "fichier": "pdf/1spe/ch04-probabilite-conditionnelle/cours-probabilite-conditionnelle.pdf"
     },
     {
      "nom": "Exercice probabilité conditionnelle",
      "fichier": "pdf/1spe/ch04-probabilite-conditionnelle/exercice-probabilite-conditionnelle.pdf"
     }
    ]
   },
   {
    "num": 5,
    "titre": "Dérivation",
    "fichiers": [
     {
      "nom": "Cours Dérivation",
      "fichier": "pdf/1spe/ch05-derivation/cours-derivation.pdf"
     },
     {
      "nom": "Déroulement dérivation",
      "fichier": "pdf/1spe/ch05-derivation/deroulement-derivation.pdf"
     }
    ]
   },
   {
    "num": 6,
    "titre": "Fonction Exponentielle",
    "fichiers": [
     {
      "nom": "Cours Fonction Exponentielle",
      "fichier": "pdf/1spe/ch06-fonction-exponentielle/cours-fonction-exponentielle.pdf"
     },
     {
      "nom": "Déroulement fonction exponentielle",
      "fichier": "pdf/1spe/ch06-fonction-exponentielle/deroulement-fonction-exponentielle.pdf"
     }
    ]
   },
   {
    "num": 7,
    "titre": "Calcul vectoriel et produit scalaire",
    "fichiers": [
     {
      "nom": "Cours sur le calcul vectoriel et le produit scalaire",
      "fichier": "pdf/1spe/ch07-calcul-vectoriel-et-produit-vectoriel/cours-sur-le-calcul-vectoriel-et-le-produit-scalaire.pdf"
     },
     {
      "nom": "Déroulement - le calcul vectoriel et le produit scalaire",
      "fichier": "pdf/1spe/ch07-calcul-vectoriel-et-produit-vectoriel/deroulement-le-calcul-vectoriel-et-le-produit-scalaire.pdf"
     }
    ]
   },
   {
    "num": 8,
    "titre": "Vecteurs du plan et équations de droite",
    "fichiers": [
     {
      "nom": "Cours vecteur du plan et équations de droite",
      "fichier": "pdf/1spe/ch08-vecteurs-du-plan-et-equations-de-droite/cours-vecteur-du-plan-et-equations-de-droite.pdf"
     },
     {
      "nom": "Déroulement vecteur plan équation droite",
      "fichier": "pdf/1spe/ch08-vecteurs-du-plan-et-equations-de-droite/deroulement-vecteur-plan-equation-droite.pdf"
     }
    ]
   },
   {
    "num": 9,
    "titre": "Variables aléatoires réelles",
    "fichiers": [
     {
      "nom": "Cours Variables aléatoires réelles",
      "fichier": "pdf/1spe/ch09-variables-aleatoires-reelles/cours-variables-aleatoires-reelles.pdf"
     },
     {
      "nom": "Déroulement VA réelles",
      "fichier": "pdf/1spe/ch09-variables-aleatoires-reelles/deroulement-va-reelles.pdf"
     }
    ]
   }
  ],
  "capytale": [
   {
    "num": 1,
    "titre": "Second degré",
    "liens": [
     {
      "nom": "Les exercices de base",
      "url": "https://capytale2.ac-paris.fr/web/c/b811-11837943/mln"
     },
     {
      "nom": "Exercices sans interactivité",
      "url": "https://capytale2.ac-paris.fr/web/c/c243-11838035/mln",
      "note": "Les exercices sont triés par ordre de priorité : les premiers sont plus simples et essentiels, les derniers plus complets (ou difficiles) mais moins prioritaires."
     }
    ]
   },
   {
    "num": 3,
    "titre": "Suite",
    "liens": [
     {
      "nom": "Révisions - Suites",
      "url": "https://capytale2.ac-paris.fr/web/c/583e-13122993/mln"
     }
    ]
   }
  ]
 },
 {
  "id": "terminale-spe",
  "nom": "Tle Spé",
  "couleur": "#0f8a7a",
  "cours": [
   {
    "num": 1,
    "titre": "Suites et limites",
    "fichiers": [
     {
      "nom": "Cours - Suites et récurrence",
      "fichier": "pdf/tspe/ch01-suites-et-limites/cours-suites-et-recurrence.pdf"
     },
     {
      "nom": "Exercice - Limites et récurrences",
      "fichier": "pdf/tspe/ch01-suites-et-limites/exercice-limites-et-recurrences.pdf"
     }
    ]
   },
   {
    "num": 2,
    "titre": "Vecteurs, droites, et plans de l'espace",
    "fichiers": [
     {
      "nom": "Cours vec dr pl de l'espace",
      "fichier": "pdf/tspe/ch02-vecteurs-droites-et-plans-de-l-espace/cours-vec-dr-pl-de-l-espace.pdf"
     },
     {
      "nom": "Exercice vec dr pl de l'espace",
      "fichier": "pdf/tspe/ch02-vecteurs-droites-et-plans-de-l-espace/exercice-vec-dr-pl-de-l-espace.pdf"
     }
    ]
   },
   {
    "num": 3,
    "titre": "Limites de fonctions",
    "fichiers": [
     {
      "nom": "Cours - Limites de fonctions",
      "fichier": "pdf/tspe/ch03-limites-de-fonctions/cours-limites-de-fonctions.pdf"
     },
     {
      "nom": "Exercice limites de fonctions",
      "fichier": "pdf/tspe/ch03-limites-de-fonctions/exercice-limites-de-fonctions.pdf"
     }
    ]
   },
   {
    "num": 4,
    "titre": "Succession d'épreuves indépendantes",
    "fichiers": [
     {
      "nom": "Cours - Successions d'épreuves indépendantes",
      "fichier": "pdf/tspe/ch04-succession-d-epreuves-independantes/cours-successions-d-epreuves-independantes.pdf"
     },
     {
      "nom": "Déroulement - Successions d'épreuves ind",
      "fichier": "pdf/tspe/ch04-succession-d-epreuves-independantes/deroulement-successions-d-epreuves-ind.pdf"
     },
     {
      "nom": "Redaction loi binomiale",
      "fichier": "pdf/tspe/ch04-succession-d-epreuves-independantes/redaction-loi-binomiale.pdf"
     }
    ]
   },
   {
    "num": 5,
    "titre": "Compléments sur la dérivation",
    "fichiers": [
     {
      "nom": "Cours - Compléments sur la dérivation",
      "fichier": "pdf/tspe/ch05-complements-sur-la-derivation/cours-complements-sur-la-derivation.pdf"
     },
     {
      "nom": "Exercice - Compléments sur la dérivation",
      "fichier": "pdf/tspe/ch05-complements-sur-la-derivation/exercice-complements-sur-la-derivation.pdf"
     }
    ]
   },
   {
    "num": 6,
    "titre": "Continuité des fonctions",
    "fichiers": [
     {
      "nom": "Cours - Continuité sur les fonctions",
      "fichier": "pdf/tspe/ch06-continuite-des-fonctions/cours-continuite-sur-les-fonctions.pdf"
     },
     {
      "nom": "Exercice - continuité sur les fonctions",
      "fichier": "pdf/tspe/ch06-continuite-des-fonctions/exercice-continuite-sur-les-fonctions.pdf"
     },
     {
      "nom": "Exercice représenter les images sur une axe",
      "fichier": "pdf/tspe/ch06-continuite-des-fonctions/exercice-representer-les-images-sur-une-axe.pdf"
     }
    ]
   },
   {
    "num": 7,
    "titre": "Orthogonalité et distances dans l'espace",
    "fichiers": [
     {
      "nom": "Cours - Orthogonalité et distances dans l'espace",
      "fichier": "pdf/tspe/ch07-orthogonalite-et-distances-dans-l-espace/cours-orthogonalite-et-distances-dans-l-espace.pdf"
     },
     {
      "nom": "Exercice orthogonalité",
      "fichier": "pdf/tspe/ch07-orthogonalite-et-distances-dans-l-espace/exercice-orthogonalite.pdf"
     }
    ]
   },
   {
    "num": 8,
    "titre": "Fonction logarithme",
    "fichiers": [
     {
      "nom": "Cours - Fonction logarithme",
      "fichier": "pdf/tspe/ch08-fonction-logarithme/cours-fonction-logarithme.pdf"
     },
     {
      "nom": "Déroulement fonction log",
      "fichier": "pdf/tspe/ch08-fonction-logarithme/deroulement-fonction-log.pdf"
     }
    ]
   },
   {
    "num": 9,
    "titre": "Représentations paramétriques et équations cartésiennes",
    "fichiers": [
     {
      "nom": "Cours - Réprésentations paramétriques et équations cartésiennes",
      "fichier": "pdf/tspe/ch09-representations-parametriques-et-equations-cartesiennes/cours-representations-parametriques-et-equations-cartesiennes.pdf"
     },
     {
      "nom": "Exercice repr para et equa carté",
      "fichier": "pdf/tspe/ch09-representations-parametriques-et-equations-cartesiennes/exercice-repr-para-et-equa-carte.pdf"
     }
    ]
   },
   {
    "num": 10,
    "titre": "Primitives, équations différentielles",
    "fichiers": [
     {
      "nom": "Cours - primitives équa dif",
      "fichier": "pdf/tspe/ch10-primitives-equations-differentielles/cours-primitives-equa-dif.pdf"
     },
     {
      "nom": "Exercice primitives, équa dif",
      "fichier": "pdf/tspe/ch10-primitives-equations-differentielles/exercice-primitives-j-equa-dif.pdf"
     }
    ]
   },
   {
    "num": 11,
    "titre": "Fonctions trigonométriques",
    "fichiers": [
     {
      "nom": "Cours - fonctions trigonométriques",
      "fichier": "pdf/tspe/ch11-fonctions-trigonometriques/cours-fonctions-trigonometriques.pdf"
     },
     {
      "nom": "Exercice fonctions trigonométriques",
      "fichier": "pdf/tspe/ch11-fonctions-trigonometriques/exercice-fonctions-trigonometriques.pdf"
     }
    ]
   },
   {
    "num": 12,
    "titre": "Sommes de variables aléatoires",
    "fichiers": [
     {
      "nom": "Cours - Sommes de variables aléatoires",
      "fichier": "pdf/tspe/ch12-sommes-de-variables-aleatoires/cours-sommes-de-variables-aleatoires.pdf"
     },
     {
      "nom": "Exercice - Sommes de variables aléatoires",
      "fichier": "pdf/tspe/ch12-sommes-de-variables-aleatoires/exercice-sommes-de-variables-aleatoires.pdf"
     }
    ]
   },
   {
    "num": 13,
    "titre": "Calcul intégral",
    "fichiers": [
     {
      "nom": "Cours - Calcul intégral",
      "fichier": "pdf/tspe/ch13-calcul-integral/cours-calcul-integral.pdf"
     },
     {
      "nom": "Exercice 1 - Calcul intégral",
      "fichier": "pdf/tspe/ch13-calcul-integral/exercice-1-calcul-integral.pdf"
     },
     {
      "nom": "Exercice - Calcul intégral",
      "fichier": "pdf/tspe/ch13-calcul-integral/exercice-calcul-integral.pdf"
     },
     {
      "nom": "Rab d'exercices",
      "fichier": "pdf/tspe/ch13-calcul-integral/rab-d-exercices.pdf"
     }
    ]
   },
   {
    "num": 14,
    "titre": "Combinatoire et dénombrement",
    "fichiers": [
     {
      "nom": "Cours - Combinatoire et dénombrement",
      "fichier": "pdf/tspe/ch14-combinatoire-et-denombrement/cours-combinatoire-et-denombrement.pdf"
     },
     {
      "nom": "Exercice dénombrement",
      "fichier": "pdf/tspe/ch14-combinatoire-et-denombrement/exercice-denombrement.pdf"
     }
    ]
   },
   {
    "num": 15,
    "titre": "Concentration, loi des grands nombres",
    "fichiers": [
     {
      "nom": "Cours - Loi des grands nombres",
      "fichier": "pdf/tspe/ch15-concentration-loi-des-grands-nombres/cours-loi-des-grands-nombres.pdf"
     },
     {
      "nom": "Exercice Loi des grands nombres",
      "fichier": "pdf/tspe/ch15-concentration-loi-des-grands-nombres/exercice-loi-des-grands-nombres.pdf"
     }
    ]
   },
   {
    "num": null,
    "titre": "Annale bac",
    "fichiers": [
     {
      "nom": "Annale exercice hybride",
      "fichier": "pdf/tspe/annale-bac/annale-exercice-hybride.pdf"
     },
     {
      "nom": "Annale math Géométrie",
      "fichier": "pdf/tspe/annale-bac/annale-math-geometrie.pdf"
     },
     {
      "nom": "Annale math suite",
      "fichier": "pdf/tspe/annale-bac/annale-math-suite.pdf"
     },
     {
      "nom": "Annale proba condi",
      "fichier": "pdf/tspe/annale-bac/annale-proba-condi.pdf"
     },
     {
      "nom": "Annale proba fonction",
      "fichier": "pdf/tspe/annale-bac/annale-proba-fonction.pdf"
     }
    ]
   }
  ],
  "capytale": [
   {
    "num": 1,
    "titre": "Limite et récurrence",
    "liens": [
     {
      "nom": "Sur les récurrences",
      "url": "https://capytale2.ac-paris.fr/web/c/5529-11837126/mln"
     },
     {
      "nom": "Sur les limites",
      "url": "https://capytale2.ac-paris.fr/web/c/a1f7-11837145/mln"
     },
     {
      "nom": "Pour aller plus loin",
      "url": "https://capytale2.ac-paris.fr/web/c/4a78-11837159/mln",
      "note": "Dans l'ordre : des suites auxiliaires, un algorithme de seuil, puis des sujets type bac."
     }
    ]
   },
   {
    "num": 2,
    "titre": "Géométrie dans l'espace",
    "liens": [
     {
      "nom": "Exercices avec coordonnées",
      "url": "https://capytale2.ac-paris.fr/web/c/12f8-12622988",
      "note": "Il n'y a que des exercices avec coordonnées. L'exercice 7 n'est pas interactif."
     }
    ]
   },
   {
    "num": 3,
    "titre": "Limites de fonctions",
    "liens": [
     {
      "nom": "Exercices sur les limites de fonctions",
      "url": "https://capytale2.ac-paris.fr/web/c/d860-12114699/mln"
     }
    ]
   },
   {
    "num": 4,
    "titre": "Fonctions composées",
    "liens": [
     {
      "nom": "Exercices sur les fonctions composées",
      "url": "https://capytale2.ac-paris.fr/web/c/1b61-12623028/mln"
     }
    ]
   }
  ]
 },
 {
  "id": "premiere-stmg",
  "nom": "1re STMG",
  "couleur": "#c97c00",
  "cours": [
   {
    "num": null,
    "titre": "Suites numériques",
    "fichiers": [
     {
      "nom": "Suites numériques",
      "fichier": "pdf/1stmg/suites-numeriques/suites-numeriques.pdf"
     }
    ]
   }
  ],
  "capytale": [
   {
    "num": null,
    "titre": "Automatismes",
    "liens": [
     {
      "nom": "Automatisme 1 - Comparer des nombres",
      "url": "https://capytale2.ac-paris.fr/web/c/9c5e-11726469/mln"
     },
     {
      "nom": "Automatisme 2 - Augmentation en pourcentage",
      "url": "https://capytale2.ac-paris.fr/web/c/3b12-11889307/mln"
     },
     {
      "nom": "Automatisme 3 - Probabilité",
      "url": "https://capytale2.ac-paris.fr/web/c/c31f-12062849/mln"
     },
     {
      "nom": "Automatisme 4 - Proportion",
      "url": "https://capytale2.ac-paris.fr/web/c/711e-12242062/mln"
     },
     {
      "nom": "Automatisme 5 - Fonctions",
      "url": "https://capytale2.ac-paris.fr/web/c/17c0-12692858/mln"
     }
    ]
   }
  ]
 },
 {
  "id": "terminale-stmg",
  "nom": "Tle STMG",
  "couleur": "#c43d7a",
  "cours": [
   {
    "num": 1,
    "titre": "Les suites",
    "fichiers": [
     {
      "nom": "Cours Les suites",
      "fichier": "pdf/tstmg/ch01-les-suites/cours-les-suites.pdf"
     },
     {
      "nom": "Les suites déroulement",
      "fichier": "pdf/tstmg/ch01-les-suites/les-suites-deroulement.pdf"
     }
    ]
   },
   {
    "num": 2,
    "titre": "Statistiques à deux variables",
    "fichiers": [
     {
      "nom": "Cours Stat à deux variables",
      "fichier": "pdf/tstmg/ch02-statistiques-a-deux-variables/cours-stat-a-deux-variables.pdf"
     },
     {
      "nom": "Exercice stat à deux variables",
      "fichier": "pdf/tstmg/ch02-statistiques-a-deux-variables/exercice-stat-a-deux-variables.pdf"
     }
    ]
   },
   {
    "num": 3,
    "titre": "Fonction inverse",
    "fichiers": [
     {
      "nom": "Cours fonction inverse",
      "fichier": "pdf/tstmg/ch03-fonction-inverse/cours-fonction-inverse.pdf"
     },
     {
      "nom": "Exercice fonction inverse",
      "fichier": "pdf/tstmg/ch03-fonction-inverse/exercice-fonction-inverse.pdf"
     }
    ]
   },
   {
    "num": 4,
    "titre": "Probabilités conditionnelles",
    "fichiers": [
     {
      "nom": "Cours probabilité conditionnelle",
      "fichier": "pdf/tstmg/ch04-probabilites-conditionnelles/cours-probabilite-conditionnelle.pdf"
     },
     {
      "nom": "Déroulement probabilités conditionnelles",
      "fichier": "pdf/tstmg/ch04-probabilites-conditionnelles/deroulement-probabilites-conditionnelles.pdf"
     }
    ]
   },
   {
    "num": 5,
    "titre": "Fonctions exponentielles",
    "fichiers": [
     {
      "nom": "Cours fonctions exponentielles",
      "fichier": "pdf/tstmg/ch05-fonctions-exponentielles/cours-fonctions-exponentielles.pdf"
     },
     {
      "nom": "Déroulement fonctions exponentielles",
      "fichier": "pdf/tstmg/ch05-fonctions-exponentielles/deroulement-fonctions-exponentielles.pdf"
     }
    ]
   },
   {
    "num": 6,
    "titre": "Variables aléatoires discrètes finies",
    "fichiers": [
     {
      "nom": "Cours - VA discrètes finies",
      "fichier": "pdf/tstmg/ch06-variables-aleatoires-discretes-finies/cours-va-discretes-finies.pdf"
     },
     {
      "nom": "Déroulement VA dicètes finies",
      "fichier": "pdf/tstmg/ch06-variables-aleatoires-discretes-finies/deroulement-va-dicetes-finies.pdf"
     }
    ]
   },
   {
    "num": 7,
    "titre": "Fonction logarithme décimal",
    "fichiers": [
     {
      "nom": "Cours - fonction logarithme décimal",
      "fichier": "pdf/tstmg/ch07-fonction-logarithme-decimal/cours-fonction-logarithme-decimal.pdf"
     },
     {
      "nom": "Déroulement fonction log",
      "fichier": "pdf/tstmg/ch07-fonction-logarithme-decimal/deroulement-fonction-log.pdf"
     }
    ]
   }
  ],
  "capytale": []
 }
];
