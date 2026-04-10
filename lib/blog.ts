/**
 * Blog utilities — Types and data for blog posts
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  readingTime: number;
  category: string;
  locale: string;
}

export const blogPosts: BlogPost[] = [
  /* ---- FR articles ---- */
  {
    slug: "preparer-controle-technique-diesel-2026-guide",
    title: "Preparer le controle technique diesel 2026 : guide complet",
    description:
      "Seuils opacimetrie, FAP, AdBlue, fuites echappement : checklist complete en 14 jours pour eviter la contre-visite diesel en 2026. Couts reparation inclus.",
    date: "2026-04-15",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Guide pratique",
    locale: "fr",
  },
  {
    slug: "pannes-les-plus-cheres-2026-comment-eviter",
    title: "Les pannes automobiles les plus cheres en 2026 et comment les eviter",
    description:
      "Top 10 des pannes a 4 chiffres : turbo, FAP, DSG, EGR, distribution, catalyseur, joint culasse, batterie HV, ABS, clim. Fourchettes de prix et prevention.",
    date: "2026-04-15",
    author: "Reda Kaouani",
    readingTime: 11,
    category: "Couts reparation",
    locale: "fr",
  },
  {
    slug: "acheter-voiture-occasion-verifications-essentielles",
    title: "Acheter une voiture d'occasion : les verifications essentielles en 2026",
    description:
      "Checklist complete : historique VIN, inspection visuelle, scan OBD2, scan sonore, essai routier. 30 minutes qui evitent 80% des mauvaises affaires.",
    date: "2026-04-15",
    author: "Reda Kaouani",
    readingTime: 11,
    category: "Achat occasion",
    locale: "fr",
  },
  {
    slug: "voyant-esp-allume-causes-cout-reparation",
    title: "Voyant ESP allume : causes, diagnostic et cout de reparation",
    description:
      "Capteur vitesse roue, angle volant, lacet, contacteur stop, bloc hydraulique : les 5 causes d'un voyant ESP avec fourchettes de prix et codes OBD2.",
    date: "2026-04-15",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Diagnostic",
    locale: "fr",
  },
  {
    slug: "voyant-huile-allume-rouler-ou-arreter",
    title: "Voyant huile allume : rouler ou s'arreter immediatement ?",
    description:
      "Voyant rouge = arret immediat, voyant orange = rappel vidange. La regle qui sauve les moteurs. Procedure d'urgence en 5 etapes et causes typiques detaillees.",
    date: "2026-04-15",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Diagnostic",
    locale: "fr",
  },
  {
    slug: "consommation-excessive-carburant-causes-obd2",
    title: "Consommation excessive de carburant : causes et diagnostic OBD2",
    description:
      "Fuel trims, MAF, lambda, injecteurs, EGR, FAP, style de conduite : checklist complete pour identifier la cause d'une surconsommation en moins d'une heure.",
    date: "2026-04-15",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Diagnostic",
    locale: "fr",
  },
  {
    slug: "catalyseur-bouche-symptomes-diagnostic-solutions",
    title: "Catalyseur bouche : symptomes, diagnostic et solutions",
    description:
      "Catalyseur bouche vs inefficace, test de contre-pression, causes amont, nettoyage ou remplacement : guide complet pour distinguer et resoudre.",
    date: "2026-04-15",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Diagnostic",
    locale: "fr",
  },
  {
    slug: "batterie-voiture-signes-faiblesse-avant-panne",
    title: "Batterie de voiture : signes de faiblesse avant la panne totale",
    description:
      "Demarrage lent, Start/Stop HS, horloge qui saute, tension basse : 5 signes avant-coureurs et la methode pour tester votre batterie avec un simple multimetre.",
    date: "2026-04-15",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Diagnostic",
    locale: "fr",
  },
  {
    slug: "triple-diagnostic-son-vision-obd2-se-completent",
    title: "Triple diagnostic : comment le son, la vision et l'OBD2 se completent",
    description:
      "Le scan sonore entend ce que l'OBD2 ignore, la Vision IA voit ce que le son rate, le code defaut confirme ce que les deux autres suspectent. Trois sources, une verite.",
    date: "2026-04-14",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Technologie",
    locale: "fr",
  },
  {
    slug: "pourquoi-scanner-obd2-seul-ne-suffit-plus-2026",
    title: "Pourquoi un scanner OBD2 seul ne suffit plus en 2026",
    description:
      "35 a 45% des pannes mecaniques modernes ne declenchent aucun code defaut. Roulements, suspension, fuites turbo : tout ce que le calculateur ne voit pas.",
    date: "2026-04-14",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Strategie",
    locale: "fr",
  },
  {
    slug: "diagnostic-automobile-futur-dans-votre-poche",
    title: "Le futur du diagnostic automobile est deja dans votre poche",
    description:
      "Microphone, camera, accelerometre, GPS : six capteurs que votre smartphone possede deja et qui, avec les bons algorithmes, remplacent un outil de diagnostic professionnel.",
    date: "2026-04-14",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Technologie",
    locale: "fr",
  },
  {
    slug: "autodiag-eu-vs-outils-traditionnels-comparaison",
    title: "AutoDiag EU face aux outils traditionnels : comparaison honnete",
    description:
      "Torque Pro, Car Scanner, EOBD Facile, Bosch KTS, Launch X431 : ce que chacun fait bien et ce que seul AutoDiag EU propose (scan sonore SVM et Vision IA).",
    date: "2026-04-14",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Comparaison",
    locale: "fr",
  },
  {
    slug: "score-sante-vehicule-comment-calculer-note-100",
    title: "Score de sante vehicule : comment on calcule votre note sur 100",
    description:
      "100 points au depart, penalites pondereees par confiance et gravite, fusion OBD2 plus son plus vision, historisation dans le temps. Transparence totale sur l'algorithme.",
    date: "2026-04-14",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Technologie",
    locale: "fr",
  },
  {
    slug: "diagnostic-preventif-economiser-milliers-euros",
    title: "Diagnostic preventif : comment economiser plusieurs milliers d'euros par an",
    description:
      "5 cas reels chiffres : lambda, distribution, turbo, amortisseurs, injecteurs. Bilan annuel concret : 760 euros depenses, 3650 euros economises, marge 2890 euros.",
    date: "2026-04-14",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Economies",
    locale: "fr",
  },
  {
    slug: "vision-ia-detecter-fuites-sous-voiture-telephone",
    title: "Vision IA : detecter les fuites sous votre voiture avec un telephone",
    description:
      "Photographiez une tache au sol, la Vision IA identifie le liquide (huile, coolant, frein, ATF), mesure la gravite et vous dit si vous pouvez rouler ou non.",
    date: "2026-04-13",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Vision IA",
    locale: "fr",
  },
  {
    slug: "usure-prematuree-pneus-ia-voit-ce-que-vous-ne-remarquez-pas",
    title: "Usure prematuree des pneus : l'IA voit ce que vous ne remarquez pas",
    description:
      "Usure centrale, epaules, cupping, carrossage : 5 motifs d'usure et leur cause mecanique. La Vision IA mesure la profondeur residuelle via photo.",
    date: "2026-04-13",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Diagnostic visuel",
    locale: "fr",
  },
  {
    slug: "scanner-plaque-immatriculation-identification-instantanee",
    title: "Scanner une plaque d'immatriculation : identification instantanee du vehicule",
    description:
      "OCR plaque en 2 secondes : marque, modele, annee, carburant, Euro. Parfait pour verifier une annonce d'occasion avant de se deplacer.",
    date: "2026-04-13",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Achat occasion",
    locale: "fr",
  },
  {
    slug: "detecter-corrosion-rouille-vision-ia-avant-ct",
    title: "Detecter la corrosion avec la Vision IA avant le controle technique",
    description:
      "4 niveaux de rouille classes par l'IA : superficielle, active, perforation imminente, structurelle. Anticiper le CT 6 mois avant, economie jusqu'a 1200 euros.",
    date: "2026-04-13",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Prevention",
    locale: "fr",
  },
  {
    slug: "checkup-visuel-ia-5-points-vehicule-sain",
    title: "Checkup visuel IA en cinq points : garder votre vehicule en bonne sante",
    description:
      "Routine mensuelle de 5 minutes : sol, pneus, plaquettes, sous le capot, eclairage. La Vision IA guide chaque cliche et genere un rapport complet.",
    date: "2026-04-13",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Prevention",
    locale: "fr",
  },
  {
    slug: "fuite-huile-liquide-frein-coolant-couleur-revele-panne",
    title: "Fuite d'huile, de liquide de frein ou de coolant : la couleur revele la panne",
    description:
      "Catalogue chromatique complet des liquides auto : huile brune, coolant vert/rose/orange, frein transparent, ATF rouge. Chaque couleur, chaque panne.",
    date: "2026-04-13",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Diagnostic visuel",
    locale: "fr",
  },
  {
    slug: "scanner-vin-decoder-historique-complet-voiture",
    title: "Scanner le VIN : decoder l'historique complet d'une voiture",
    description:
      "OCR VIN 17 caracteres : constructeur, annee, motorisation, historique kilometrique, rappels constructeur, entretien. Detecter un compteur trafique en 3 secondes.",
    date: "2026-04-13",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Achat occasion",
    locale: "fr",
  },
  {
    slug: "usure-plaquettes-disques-vision-ia-detecte",
    title: "Usure des plaquettes et disques : ce que la Vision IA detecte a travers les rayons",
    description:
      "Mesure d'epaisseur de plaquette a travers les rayons, detection de disque scored, bleuissement et vitrification. Anticiper le changement pour 300 a 600 euros economises.",
    date: "2026-04-13",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Vision IA",
    locale: "fr",
  },
  {
    slug: "7-bruits-habitacle-jamais-ignorer",
    title: "7 bruits d'habitacle a ne jamais ignorer",
    description:
      "Grincement, claquement, grondement, sifflement : 7 bruits d'habitacle et ce qu'ils annoncent. Le SVM 7 classes 75.05% detecte ce que votre oreille ne percoit plus.",
    date: "2026-04-12",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Scan sonore habitacle",
    locale: "fr",
  },
  {
    slug: "grincement-freins-usure-normale-ou-danger",
    title: "Grincement de freins : usure normale ou vrai danger ?",
    description:
      "Temoin d'usure, vitrification, corrosion, etrier colle : 4 causes de grincement de frein. Comment le Scan Sonore les distingue et coupe l'effet cascade disque-etrier.",
    date: "2026-04-12",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Securite",
    locale: "fr",
  },
  {
    slug: "bruit-suspension-ia-identifie-amortisseur",
    title: "Bruit de suspension : comment l'IA identifie l'amortisseur fatigue",
    description:
      "Claquement, rebond, grincement : l'IA separe les 3 familles de bruits de suspension. Detection precoce d'amortisseur pour eviter la cascade pneu-geometrie-cremaillere.",
    date: "2026-04-12",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Diagnostic",
    locale: "fr",
  },
  {
    slug: "claquement-direction-rotule-cremaillere-cardan",
    title: "Claquement dans la direction : rotule, cremaillere ou cardan ?",
    description:
      "Cardan a basse vitesse, rotule sur bosse, cremaillere en ligne droite : identifier l'origine d'un claquement de direction avec le scan sonore habitacle.",
    date: "2026-04-12",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Securite",
    locale: "fr",
  },
  {
    slug: "bruit-roulement-roue-detecter-usure-avant-ct",
    title: "Bruit de roulement de roue : detecter l'usure avant le CT",
    description:
      "Grondement qui monte avec la vitesse, modulation en virage : les signes d'un roulement fatigue. Protocole de scan et detection preventive deux semaines avant le controle technique.",
    date: "2026-04-12",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Prevention",
    locale: "fr",
  },
  {
    slug: "sifflement-ventilation-diagnostic-climatisation",
    title: "Sifflement de ventilation : diagnostic des bruits de climatisation",
    description:
      "Filtre habitacle, roulement de soufflante, embrayage compresseur clim : 4 causes de sifflement de ventilation. Detection precoce et economie jusqu'a 900 euros.",
    date: "2026-04-12",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Scan sonore habitacle",
    locale: "fr",
  },
  {
    slug: "usure-invisible-composant-fatigue-endommage-autre",
    title: "Usure invisible : quand une piece fatiguee en endommage une autre",
    description:
      "Effet cascade mecanique explique : support moteur qui fissure le collecteur, amortisseur qui tue la cremaillere. Comment le scan sonore coupe la chaine a la racine.",
    date: "2026-04-12",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Prevention",
    locale: "fr",
  },
  {
    slug: "controle-preventif-son-eviter-facture-cascade",
    title: "Controle preventif sonore : eviter la facture en cascade avant le CT",
    description:
      "Protocole complet de scan sonore deux semaines avant le CT, TUV, MOT, ITV ou IPO. 5 enregistrements cibles, grille d'interpretation et economie moyenne de 150 euros par cycle.",
    date: "2026-04-12",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Prevention",
    locale: "fr",
  },
  {
    slug: "votre-moteur-parle-detection-pannes-par-son",
    title: "Votre moteur vous parle : comment l'IA traduit ses bruits en diagnostic",
    description:
      "Comment l'IA AutoDiag EU decode les sons de votre moteur. SVM 91.3%, 56 caracteristiques, 11 classes de pannes, pipeline en 7 couches explique simplement.",
    date: "2026-04-11",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Scan sonore",
    locale: "fr",
  },
  {
    slug: "11-pannes-detectables-analyse-sonore-moteur",
    title: "11 pannes moteur detectables par analyse sonore IA",
    description:
      "Liste complete des 11 classes de pannes detectees par scan sonore AutoDiag EU. Signatures, risques, couts de reparation et retour sur investissement preventif.",
    date: "2026-04-11",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Diagnostic",
    locale: "fr",
  },
  {
    slug: "sons-inaudibles-ia-detecte-ce-que-oreille-ne-peut-pas",
    title: "Les sons inaudibles : ce que l'IA detecte que votre oreille rate",
    description:
      "Pourquoi un micro de smartphone capte bien plus que votre oreille. Ultrasons, infrasons, harmoniques subtiles : l'IA voit ce que vous n'entendez pas.",
    date: "2026-04-11",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Technologie",
    locale: "fr",
  },
  {
    slug: "bruit-claquement-moteur-causes-diagnostic-ia",
    title: "Claquement moteur : causes, risques et diagnostic par IA",
    description:
      "Les trois familles de claquement moteur : knock, piston slap, rod knock. Signatures spectrales, risques et comment l'IA les distingue avec 91.3% de precision.",
    date: "2026-04-11",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Diagnostic",
    locale: "fr",
  },
  {
    slug: "prevenir-casse-moteur-diagnostic-sonore-preventif",
    title: "Prevenir la casse moteur grace au diagnostic sonore preventif",
    description:
      "70% des casses moteur donnent des signes detectables trois mois avant. Methode complete pour mettre en place un suivi sonore mensuel et eviter les grosses factures.",
    date: "2026-04-11",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Prevention",
    locale: "fr",
  },
  {
    slug: "courroie-distribution-usee-detecter-par-son",
    title: "Courroie de distribution usee : la detecter par le son",
    description:
      "Pourquoi une distribution qui casse coute 2000 a 8000 euros et comment le scan sonore detecte les signes d'usure avant la casse. Les 3 phases de degradation.",
    date: "2026-04-11",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Prevention",
    locale: "fr",
  },
  {
    slug: "roulement-moteur-fatigue-ia-entend",
    title: "Roulement moteur fatigue : ce que l'IA entend avant vous",
    description:
      "Coussinets de bielle, vilebrequin, arbre a cames : signatures spectrales et detection precoce. La difference entre 500 et 5000 euros de reparation.",
    date: "2026-04-11",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Diagnostic",
    locale: "fr",
  },
  {
    slug: "turbo-qui-siffle-panne-ou-normal",
    title: "Turbo qui siffle : panne imminente ou bruit normal ?",
    description:
      "Comment distinguer un sifflement turbo normal d'un signe de panne. Les 4 causes anormales, signatures spectrales et cout de detection precoce vs tardive.",
    date: "2026-04-11",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Diagnostic",
    locale: "fr",
  },
  {
    slug: "comment-fonctionne-svm-technologie-scan-sonore",
    title: "Comment fonctionne notre SVM : la technologie du scan sonore",
    description:
      "Plongee technique dans le pipeline AutoDiag EU : 7 couches, 56 caracteristiques, SVM kernel RBF, 91.3% de precision. Pourquoi un SVM et pas un reseau de neurones.",
    date: "2026-04-11",
    author: "Reda Kaouani",
    readingTime: 11,
    category: "Technologie",
    locale: "fr",
  },
  {
    slug: "diesel-vs-essence-diagnostic-sonore-ia",
    title: "Diesel vs essence : pourquoi leur diagnostic sonore est different",
    description:
      "Signatures spectrales opposees, pannes specifiques, codes OBD2 differents : comment l'IA adapte son analyse selon le type de carburant de votre moteur.",
    date: "2026-04-11",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Diagnostic",
    locale: "fr",
  },
  {
    slug: "cout-reparation-catalyseur-p0420",
    title: "Combien coute une reparation catalyseur P0420 ?",
    description:
      "Grille de prix reelle 2026 pour la reparation d'un code P0420 : sonde lambda, catalyseur adaptable, constructeur, main d'oeuvre et pieges a eviter.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Couts reparation",
    locale: "fr",
  },
  {
    slug: "lire-codes-obd2-telephone",
    title: "Comment lire les codes OBD2 avec son telephone",
    description:
      "Tutoriel complet pour lire les codes defaut OBD2 de votre voiture avec un smartphone et un dongle ELM327 a 25 euros. Etape par etape.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Tutoriel",
    locale: "fr",
  },
  {
    slug: "10-codes-defaut-frequents-europe",
    title: "Les 10 codes defaut OBD2 les plus frequents en Europe",
    description:
      "Top 10 des codes defaut OBD2 rencontres en Europe : P0420, P0171, P0300 et 7 autres. Causes, couts de reparation et solutions concretes.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 11,
    category: "Codes defaut",
    locale: "fr",
  },
  {
    slug: "preparer-controle-technique-2026",
    title: "Preparer son controle technique 2026 : guide complet",
    description:
      "Checklist 2026 pour reussir votre controle technique du premier coup : pre-diagnostic OBD, emissions diesel, freinage, eclairage et contre-visites.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Controle technique",
    locale: "fr",
  },
  {
    slug: "voyant-moteur-allume-que-faire",
    title: "Voyant moteur allume : que faire ?",
    description:
      "Guide complet pour reagir face a un voyant moteur allume : couleurs, codes defaut, reflexes immediats et cas ou aller au garage.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Guide pratique",
    locale: "fr",
  },
  {
    slug: "comment-lire-code-defaut-obd2",
    title: "Comment lire un code defaut OBD2 — guide complet",
    description:
      "Apprenez a lire et comprendre les codes defaut OBD2 de votre voiture. P, C, B, U : on vous explique tout simplement.",
    date: "2026-03-15",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Tutoriel",
    locale: "fr",
  },
  {
    slug: "preparer-controle-technique",
    title: "Preparer son controle technique : la checklist complete",
    description:
      "Checklist complete pour preparer votre CT, TUV ou MFK. Eclairage, freinage, emissions, pneus et plus encore.",
    date: "2026-03-10",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Guide pratique",
    locale: "fr",
  },
  {
    slug: "5-bruits-moteur-a-ne-pas-ignorer",
    title: "Les 5 bruits moteur a ne pas ignorer",
    description:
      "Cliquetis, grondement, sifflement, claquement, grincement : decouvrez ce que chaque bruit moteur signifie et quand agir.",
    date: "2026-03-05",
    author: "Reda Kaouani",
    readingTime: 7,
    category: "Diagnostic",
    locale: "fr",
  },
  {
    slug: "obd2-comprendre-en-5-minutes",
    title: "OBD2 : tout comprendre en 5 minutes",
    description:
      "L'OBD2 explique simplement : histoire, fonctionnement, protocoles, dongles ELM327 et ce que vous pouvez faire avec.",
    date: "2026-02-28",
    author: "Reda Kaouani",
    readingTime: 6,
    category: "Tutoriel",
    locale: "fr",
  },
  {
    slug: "autodiag-vs-garage-economies",
    title: "AutoDiag EU vs garage : combien vous economisez vraiment",
    description:
      "Comparaison detaillee des couts de diagnostic automobile entre AutoDiag EU et les garages en France, Allemagne et Suisse.",
    date: "2026-02-20",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Economies",
    locale: "fr",
  },
  /* ---- EN articles ---- */
  {
    slug: "triple-diagnosis-sound-vision-obd2-work-together",
    title: "Triple diagnosis: how sound, vision and OBD2 work together",
    description:
      "Sound scanning hears what OBD2 ignores, Vision AI sees what sound misses, fault codes confirm what the other two suspect. Three sources, one truth.",
    date: "2026-04-14",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Technology",
    locale: "en",
  },
  {
    slug: "why-obd2-scanner-alone-not-enough-2026",
    title: "Why an OBD2 scanner alone is not enough in 2026",
    description:
      "35 to 45% of modern mechanical faults never trigger a DTC. Bearings, suspension, turbo leaks: everything the ECU does not see.",
    date: "2026-04-14",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Strategy",
    locale: "en",
  },
  {
    slug: "future-car-diagnostics-already-in-your-pocket",
    title: "The future of car diagnostics is already in your pocket",
    description:
      "Microphone, camera, accelerometer, GPS: six sensors your smartphone already has and which, with the right algorithms, replace a professional diagnostic tool.",
    date: "2026-04-14",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Technology",
    locale: "en",
  },
  {
    slug: "autodiag-eu-vs-traditional-tools-comparison",
    title: "AutoDiag EU versus traditional tools: an honest comparison",
    description:
      "Torque Pro, Car Scanner, EOBD Facile, Bosch KTS, Launch X431: what each does well and what only AutoDiag EU offers (SVM sound scanning and Vision AI).",
    date: "2026-04-14",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Comparison",
    locale: "en",
  },
  {
    slug: "vehicle-health-score-how-we-calculate-rating",
    title: "Vehicle health score: how we calculate your rating out of 100",
    description:
      "Start at 100, confidence-weighted penalties, OBD2 plus sound plus vision fusion, timeline archived. Full transparency on the algorithm.",
    date: "2026-04-14",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Technology",
    locale: "en",
  },
  {
    slug: "preventive-diagnostics-save-thousands-per-year",
    title: "Preventive diagnostics: how to save thousands of pounds per year",
    description:
      "5 priced real cases: lambda, timing, turbo, shocks, injectors. Concrete yearly ledger: 650 GBP spent, 3220 GBP saved, net margin 2570 GBP.",
    date: "2026-04-14",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Savings",
    locale: "en",
  },
  {
    slug: "vision-ai-detect-leaks-under-car-with-phone",
    title: "Vision AI: spot the leak under your car with just a phone",
    description:
      "Photograph a stain on the ground, Vision AI identifies the fluid (oil, coolant, brake, ATF), grades severity and tells you whether it is safe to drive.",
    date: "2026-04-13",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Vision AI",
    locale: "en",
  },
  {
    slug: "premature-tyre-wear-ai-sees-what-you-dont-notice",
    title: "Premature tyre wear: AI sees what you do not notice",
    description:
      "Centre, shoulder, cupping, camber: 5 wear patterns and their mechanical root cause. Vision AI measures residual depth from a single photo.",
    date: "2026-04-13",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Visual Diagnostic",
    locale: "en",
  },
  {
    slug: "scan-number-plate-instant-vehicle-identification",
    title: "Scan a number plate: instant vehicle identification",
    description:
      "Plate OCR in 2 seconds: make, model, year, fuel, Euro standard. Perfect for vetting a used-car advert before you even drive there.",
    date: "2026-04-13",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Used Car Buying",
    locale: "en",
  },
  {
    slug: "detect-corrosion-rust-vision-ai-before-mot",
    title: "Detect corrosion with Vision AI before your MOT",
    description:
      "4 rust levels graded by AI: surface, active, imminent perforation, structural. Anticipate the MOT 6 months ahead and save up to 1000 GBP.",
    date: "2026-04-13",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Prevention",
    locale: "en",
  },
  {
    slug: "ai-visual-checkup-5-points-healthy-vehicle",
    title: "AI visual checkup in five points: keeping your vehicle healthy",
    description:
      "A 5-minute monthly routine: ground, tyres, pads, under the bonnet, lights. Vision AI guides every shot and generates a single report.",
    date: "2026-04-13",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Prevention",
    locale: "en",
  },
  {
    slug: "oil-brake-fluid-coolant-leak-colour-reveals-fault",
    title: "Oil, brake fluid or coolant leak: the colour reveals the fault",
    description:
      "Complete colour catalogue of car fluids: brown oil, green/pink/orange coolant, clear brake, red ATF. Each colour, each fault.",
    date: "2026-04-13",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Visual Diagnostic",
    locale: "en",
  },
  {
    slug: "scan-vin-decode-car-complete-history",
    title: "Scan the VIN: decode a car's complete history",
    description:
      "17-character VIN OCR: maker, year, engine, mileage history, manufacturer recalls, service. Spot a clocked odometer in 3 seconds.",
    date: "2026-04-13",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Used Car Buying",
    locale: "en",
  },
  {
    slug: "brake-pad-disc-wear-vision-ai-detects",
    title: "Brake pad and disc wear: what Vision AI detects through the spokes",
    description:
      "Pad thickness measurement through the spokes, detection of scored discs, blueing and glazing. Plan the change and save 250 to 500 GBP.",
    date: "2026-04-13",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Vision AI",
    locale: "en",
  },
  {
    slug: "7-cabin-noises-never-ignore",
    title: "7 cabin noises you should never ignore",
    description:
      "Squeal, clunk, drone, whistle: 7 cabin noises and what each one predicts. The 7-class SVM at 75.05% catches what your ear no longer notices.",
    date: "2026-04-12",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Cabin Sound Scan",
    locale: "en",
  },
  {
    slug: "brake-squealing-normal-wear-or-danger",
    title: "Brake squealing: normal wear or real danger?",
    description:
      "Wear indicator, glazing, corrosion, sticky caliper: 4 causes of brake squeal. How Cabin Sound Scan separates them and stops the disc-caliper cascade.",
    date: "2026-04-12",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Safety",
    locale: "en",
  },
  {
    slug: "suspension-noise-ai-identifies-failing-shock",
    title: "Suspension noise: how AI identifies a failing shock absorber",
    description:
      "Knock, rebound, creak: AI separates the 3 families of suspension noise. Early shock detection to stop the tyre-alignment-rack cascade.",
    date: "2026-04-12",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Diagnostic",
    locale: "en",
  },
  {
    slug: "steering-clunk-ball-joint-rack-cv-joint",
    title: "Steering clunk: ball joint, rack or CV joint?",
    description:
      "CV at low speed, ball joint over bumps, rack in a straight line: pinpointing the source of a steering clunk with cabin sound scan.",
    date: "2026-04-12",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Safety",
    locale: "en",
  },
  {
    slug: "wheel-bearing-noise-detect-wear-before-mot",
    title: "Wheel bearing noise: detect the wear before your MOT",
    description:
      "Drone that rises with speed, side-load modulation: the signs of a tired bearing. Scan protocol and preventive detection two weeks before your MOT.",
    date: "2026-04-12",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Prevention",
    locale: "en",
  },
  {
    slug: "hvac-whistling-diagnosing-ac-noises",
    title: "HVAC whistling: diagnosing the noises from your cabin AC",
    description:
      "Cabin filter, blower bearing, AC compressor clutch: 4 causes of HVAC whistling. Early catch and savings up to 800 pounds.",
    date: "2026-04-12",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Cabin Sound Scan",
    locale: "en",
  },
  {
    slug: "invisible-wear-tired-component-damages-another",
    title: "Invisible wear: when a tired component damages another",
    description:
      "The mechanical cascade effect explained: engine mount that cracks the manifold, shock that kills the rack. How sound scan cuts the chain at the root.",
    date: "2026-04-12",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Prevention",
    locale: "en",
  },
  {
    slug: "preventive-sound-check-avoid-cascade-repair-bill",
    title: "Preventive sound check: avoiding the cascade repair bill before the MOT",
    description:
      "Complete sound scan protocol two weeks before MOT, CT, TUV, ITV or IPO. 5 targeted recordings, interpretation grid and average 120-pound savings per cycle.",
    date: "2026-04-12",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Prevention",
    locale: "en",
  },
  {
    slug: "your-engine-speaks-ai-fault-detection-by-sound",
    title: "Your engine speaks: how AI translates its sounds into a diagnosis",
    description:
      "How AutoDiag EU's AI decodes the sounds your engine makes. 91.3% SVM accuracy, 56 features, 11 fault classes and a 7-layer pipeline explained simply.",
    date: "2026-04-11",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Sound Scan",
    locale: "en",
  },
  {
    slug: "11-engine-faults-detectable-by-sound-analysis",
    title: "11 engine faults detectable by AI sound analysis",
    description:
      "Complete list of the 11 fault classes detected by AutoDiag EU sound scan. Signatures, risks, repair costs and early-detection ROI.",
    date: "2026-04-11",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Diagnostic",
    locale: "en",
  },
  {
    slug: "inaudible-sounds-ai-catches-what-your-ear-misses",
    title: "Inaudible sounds: what AI catches that your ear misses",
    description:
      "Why a smartphone mic captures far more than your ear. Ultrasounds, infrasounds, subtle harmonics: AI sees what you cannot hear.",
    date: "2026-04-11",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Technology",
    locale: "en",
  },
  {
    slug: "engine-knocking-noise-causes-ai-diagnosis",
    title: "Engine knocking noise: causes, risks and AI diagnosis",
    description:
      "The three families of engine knock: combustion knock, piston slap, rod knock. Spectral signatures, risks and how AI distinguishes them with 91.3% precision.",
    date: "2026-04-11",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Diagnostic",
    locale: "en",
  },
  {
    slug: "prevent-engine-failure-preventive-sound-diagnosis",
    title: "Prevent engine failure with preventive sound diagnosis",
    description:
      "70% of engine failures show detectable signs three months before. Full method for monthly sound monitoring to avoid the expensive bills.",
    date: "2026-04-11",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Prevention",
    locale: "en",
  },
  {
    slug: "worn-timing-belt-detect-by-sound-before-it-snaps",
    title: "Worn timing belt: detect it by sound before it snaps",
    description:
      "Why a snapped timing belt costs GBP 1700-6500 and how sound scan detects wear before failure. The 3 detectable degradation phases explained.",
    date: "2026-04-11",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Prevention",
    locale: "en",
  },
  {
    slug: "worn-engine-bearing-ai-hears-what-you-cant",
    title: "Worn engine bearing: what AI hears before you can",
    description:
      "Rod, main and cam bearings: spectral signatures and early detection. The difference between a GBP 500 and a GBP 5000 repair.",
    date: "2026-04-11",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Diagnostic",
    locale: "en",
  },
  {
    slug: "turbo-whistle-imminent-failure-or-normal",
    title: "Turbo whistle: imminent failure or normal noise?",
    description:
      "How to tell a normal turbo whistle from a fault sign. The 4 abnormal causes, spectral fingerprints and early vs late detection cost.",
    date: "2026-04-11",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Diagnostic",
    locale: "en",
  },
  {
    slug: "how-our-svm-works-technology-behind-sound-scanning",
    title: "How our SVM works: the technology behind sound scanning",
    description:
      "Deep technical dive into the AutoDiag EU pipeline: 7 layers, 56 features, RBF-kernel SVM, 91.3% accuracy. Why an SVM and not a deep neural network.",
    date: "2026-04-11",
    author: "Reda Kaouani",
    readingTime: 11,
    category: "Technology",
    locale: "en",
  },
  {
    slug: "diesel-vs-petrol-sound-diagnosis-differences",
    title: "Diesel vs petrol: why their sound diagnosis is different",
    description:
      "Opposite spectral signatures, specific faults, different OBD2 codes: how the AI adapts its analysis to the fuel type of your engine.",
    date: "2026-04-11",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Diagnostic",
    locale: "en",
  },
  {
    slug: "p0420-catalytic-converter-cost",
    title: "P0420 catalytic converter repair cost",
    description:
      "Real 2026 UK price grid for a P0420 repair: lambda sensor, aftermarket catalyst, OEM, labour and traps to avoid when quoted.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Repair Costs",
    locale: "en",
  },
  {
    slug: "read-obd2-codes-phone",
    title: "How to read OBD2 codes with your phone",
    description:
      "Complete tutorial to read OBD2 fault codes with a smartphone and a GBP 22 ELM327 Bluetooth adapter. Step by step, no technical skill needed.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Tutorial",
    locale: "en",
  },
  {
    slug: "top-10-common-fault-codes-europe",
    title: "Top 10 most common OBD2 fault codes in Europe",
    description:
      "The top 10 OBD2 fault codes seen on European cars: P0420, P0171, P0300 and 7 more. Causes, repair costs and concrete solutions.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 11,
    category: "Fault Codes",
    locale: "en",
  },
  {
    slug: "mot-preparation-guide-2026",
    title: "MOT preparation guide 2026 — pass first time",
    description:
      "Step-by-step 2026 MOT preparation guide: OBD pre-scan, diesel emissions, brakes, lighting and how to avoid costly retests.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "MOT Guide",
    locale: "en",
  },
  {
    slug: "check-engine-light-what-to-do",
    title: "Check engine light on: what to do?",
    description:
      "Step-by-step guide to reacting to a check engine light: colours, fault codes, immediate checks, and when to visit a garage.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Practical Guide",
    locale: "en",
  },
  {
    slug: "top-10-mot-failure-reasons-2026",
    title: "Top 10 MOT Failure Reasons in 2026 — And How to Avoid Them",
    description:
      "The most common reasons cars fail their MOT in the UK, based on real DVSA statistics. Repair costs, prevention tips, and how AutoDiag EU helps.",
    date: "2026-04-01",
    author: "Reda Kaouani",
    readingTime: 12,
    category: "MOT Guide",
    locale: "en",
  },
  {
    slug: "how-to-prepare-car-for-mot",
    title: "How to Prepare Your Car for Its MOT — Complete Checklist",
    description:
      "A week-by-week MOT preparation guide with a complete checklist. Everything the tester checks and how to get it right first time.",
    date: "2026-03-28",
    author: "Reda Kaouani",
    readingTime: 11,
    category: "MOT Guide",
    locale: "en",
  },
  {
    slug: "best-obd2-app-uk-2026",
    title: "Best OBD2 Apps in the UK (2026) — Honest Comparison",
    description:
      "Comparing Torque Pro, Car Scanner, Carly, OBDeleven, and AutoDiag EU. Honest pros and cons for UK drivers in 2026.",
    date: "2026-03-20",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Comparison",
    locale: "en",
  },
  {
    slug: "obd2-fault-codes-explained-uk",
    title: "OBD2 Fault Codes Explained — A UK Driver's Guide",
    description:
      "What OBD2 fault codes mean, how they are structured, where to find your OBD2 port, and how to read them yourself. Includes MOT relevance.",
    date: "2026-03-15",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Tutorial",
    locale: "en",
  },
  {
    slug: "car-diagnostic-app-vs-garage-uk",
    title: "Car Diagnostic App vs Garage — What's Really Worth It in the UK?",
    description:
      "An honest cost comparison between using AutoDiag EU and visiting a garage for diagnostics. Annual savings breakdown in GBP.",
    date: "2026-03-10",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Savings",
    locale: "en",
  },
  /* ---- DE articles ---- */
  {
    slug: "motorkontrollleuchte-leuchtet-was-tun",
    title: "Motorkontrollleuchte leuchtet — was tun?",
    description:
      "Schritt-fuer-Schritt Anleitung bei leuchtender Motorkontrollleuchte: Farben, Fehlercodes, Sofortmassnahmen und wann Sie in die Werkstatt muessen.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Ratgeber",
    locale: "de",
  },
  {
    slug: "tuev-vorbereitung-2026",
    title: "TUeV-Vorbereitung 2026: Beim ersten Mal bestehen",
    description:
      "Checkliste 2026 fuer die Hauptuntersuchung: OBD-Vordiagnose, Abgasuntersuchung, Bremsen, Beleuchtung und wie Sie teure Nachpruefungen vermeiden.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "TUeV-Ratgeber",
    locale: "de",
  },
  {
    slug: "10-haeufigste-fehlercodes-europa",
    title: "Die 10 haeufigsten OBD2-Fehlercodes in Europa",
    description:
      "Top 10 OBD2-Fehlercodes auf europaeischen Fahrzeugen: P0420, P0171, P0300 und 7 weitere. Ursachen, Reparaturkosten und konkrete Loesungen.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 11,
    category: "Fehlercodes",
    locale: "de",
  },
  {
    slug: "obd2-codes-mit-handy-auslesen",
    title: "OBD2-Codes mit dem Handy auslesen",
    description:
      "Vollstaendige Anleitung zum Auslesen von OBD2-Fehlercodes mit einem Smartphone und einem ELM327-Bluetooth-Adapter fuer 25 Euro. Schritt fuer Schritt.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Anleitung",
    locale: "de",
  },
  {
    slug: "katalysator-reparatur-kosten-p0420",
    title: "Katalysator-Reparatur P0420: Was kostet es wirklich?",
    description:
      "Echte Preistabelle 2026 fuer eine P0420-Reparatur in Deutschland: Lambdasonde, Nachruest-Katalysator, Original, Arbeitszeit und Fallen beim Kostenvoranschlag.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Reparaturkosten",
    locale: "de",
  },
  {
    slug: "obd2-fehlercodes-lesen-anleitung",
    title: "OBD2-Fehlercodes lesen — vollstandige Anleitung",
    description:
      "Lernen Sie, OBD2-Fehlercodes Ihres Autos zu lesen und zu verstehen. P, C, B, U: Wir erklaren alles einfach und verstandlich.",
    date: "2026-03-15",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Anleitung",
    locale: "de",
  },
  {
    slug: "tuv-vorbereitung-checkliste",
    title: "TUV-Vorbereitung: Die vollstandige Checkliste",
    description:
      "Vollstandige Checkliste zur Vorbereitung auf die Hauptuntersuchung (HU/TUV). Beleuchtung, Bremsen, Abgase, Reifen und mehr.",
    date: "2026-03-10",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Ratgeber",
    locale: "de",
  },
  {
    slug: "5-motorgerausche-nicht-ignorieren",
    title: "Die 5 Motorgerausche, die Sie nicht ignorieren sollten",
    description:
      "Klappern, Brummen, Pfeifen, Klopfen, Schleifen: Erfahren Sie, was jedes Motorgerausch bedeutet und wann Sie handeln mussen.",
    date: "2026-03-05",
    author: "Reda Kaouani",
    readingTime: 7,
    category: "Diagnose",
    locale: "de",
  },
  {
    slug: "obd2-verstehen-in-5-minuten",
    title: "OBD2: Alles verstehen in 5 Minuten",
    description:
      "OBD2 einfach erklart: Geschichte, Funktionsweise, Protokolle, ELM327-Dongles und was Sie damit machen konnen.",
    date: "2026-02-28",
    author: "Reda Kaouani",
    readingTime: 6,
    category: "Anleitung",
    locale: "de",
  },
  {
    slug: "autodiag-vs-werkstatt-ersparnisse",
    title: "AutoDiag EU vs Werkstatt: Wie viel sparen Sie wirklich?",
    description:
      "Detaillierter Kostenvergleich zwischen AutoDiag EU und Werkstattdiagnose in Deutschland, Frankreich und der Schweiz.",
    date: "2026-02-20",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Ersparnisse",
    locale: "de",
  },
  /* ---- ES articles ---- */
  {
    slug: "testigo-motor-encendido-que-hacer",
    title: "Testigo del motor encendido: \u00bfque hacer?",
    description:
      "Guia paso a paso ante el testigo del motor encendido: colores, codigos de averia, reflejos inmediatos y cuando ir al taller.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Guia practica",
    locale: "es",
  },
  {
    slug: "preparar-itv-2026",
    title: "Preparar la ITV 2026: guia completa",
    description:
      "Checklist 2026 para pasar la ITV a la primera: pre-diagnostico OBD, emisiones diesel, frenado, iluminacion y contra-inspecciones.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Guia ITV",
    locale: "es",
  },
  {
    slug: "10-codigos-averia-frecuentes-europa",
    title: "Los 10 codigos de averia OBD2 mas frecuentes en Europa",
    description:
      "Top 10 de codigos de averia OBD2 en coches europeos: P0420, P0171, P0300 y 7 mas. Causas, costes de reparacion y soluciones concretas.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 11,
    category: "Codigos averia",
    locale: "es",
  },
  {
    slug: "leer-codigos-obd2-con-movil",
    title: "Como leer codigos OBD2 con tu movil",
    description:
      "Tutorial completo para leer los codigos de averia OBD2 de tu coche con un smartphone y un adaptador ELM327 de 25 euros. Paso a paso.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Tutorial",
    locale: "es",
  },
  {
    slug: "coste-reparacion-catalizador-p0420",
    title: "\u00bfCuanto cuesta reparar un catalizador P0420?",
    description:
      "Tabla de precios real 2026 para reparar un codigo P0420 en Espana: sonda lambda, catalizador adaptable, original, mano de obra y trampas a evitar.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Costes reparacion",
    locale: "es",
  },
  {
    slug: "como-leer-codigos-fallo-obd2",
    title: "Como leer un codigo de fallo OBD2 — guia completa",
    description:
      "Aprende a leer y entender los codigos de fallo OBD2 de tu coche. P, C, B, U: te lo explicamos todo de forma sencilla.",
    date: "2026-03-15",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Tutorial",
    locale: "es",
  },
  {
    slug: "preparar-itv-lista-completa",
    title: "Preparar la ITV: la lista de comprobacion completa",
    description:
      "Lista completa para preparar tu ITV. Iluminacion, frenado, emisiones, neumaticos y mucho mas.",
    date: "2026-03-10",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Guia practica",
    locale: "es",
  },
  {
    slug: "5-ruidos-motor-no-ignorar",
    title: "Los 5 ruidos del motor que no debes ignorar",
    description:
      "Traqueteo, zumbido, silbido, golpeteo, chirrido: descubre lo que cada ruido del motor significa y cuando actuar.",
    date: "2026-03-05",
    author: "Reda Kaouani",
    readingTime: 7,
    category: "Diagnostico",
    locale: "es",
  },
  {
    slug: "obd2-entender-en-5-minutos",
    title: "OBD2: todo lo que necesitas saber en 5 minutos",
    description:
      "El OBD2 explicado de forma sencilla: historia, funcionamiento, protocolos, dongles ELM327 y lo que puedes hacer con el.",
    date: "2026-02-28",
    author: "Reda Kaouani",
    readingTime: 6,
    category: "Tutorial",
    locale: "es",
  },
  {
    slug: "autodiag-vs-taller-ahorros",
    title: "AutoDiag EU vs taller: ¿cuanto ahorras realmente?",
    description:
      "Comparacion detallada de costes de diagnostico entre AutoDiag EU y talleres en Espana, Francia y Alemania.",
    date: "2026-02-20",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Ahorros",
    locale: "es",
  },
  /* ---- PT articles ---- */
  {
    slug: "luz-motor-acesa-o-que-fazer",
    title: "Luz do motor acesa: o que fazer?",
    description:
      "Guia passo a passo para a luz do motor acesa: cores, codigos de erro, reflexos imediatos e quando levar a oficina.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Guia pratico",
    locale: "pt",
  },
  {
    slug: "preparar-inspecao-2026",
    title: "Preparar a inspecao 2026: guia completo",
    description:
      "Checklist 2026 para passar a IPO a primeira: pre-diagnostico OBD, emissoes diesel, travagem, iluminacao e reinspeccoes.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Guia IPO",
    locale: "pt",
  },
  {
    slug: "10-codigos-erro-frequentes-europa",
    title: "Os 10 codigos de erro OBD2 mais frequentes na Europa",
    description:
      "Top 10 codigos de erro OBD2 em carros europeus: P0420, P0171, P0300 e mais 7. Causas, custos de reparacao e solucoes concretas.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 11,
    category: "Codigos erro",
    locale: "pt",
  },
  {
    slug: "ler-codigos-obd2-com-telemovel",
    title: "Como ler codigos OBD2 com o telemovel",
    description:
      "Tutorial completo para ler os codigos de erro OBD2 do seu carro com um smartphone e um adaptador ELM327 de 25 euros. Passo a passo.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Tutorial",
    locale: "pt",
  },
  {
    slug: "custo-reparacao-catalisador-p0420",
    title: "Custo de reparacao catalisador P0420",
    description:
      "Tabela de precos real 2026 para reparar um codigo P0420 em Portugal: sonda lambda, catalisador adaptavel, original, mao-de-obra e armadilhas a evitar.",
    date: "2026-04-10",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Custos reparacao",
    locale: "pt",
  },
  {
    slug: "como-ler-codigos-erro-obd2",
    title: "Como ler um codigo de erro OBD2 — guia completo",
    description:
      "Aprenda a ler e compreender os codigos de erro OBD2 do seu carro. P, C, B, U: explicamos tudo de forma simples.",
    date: "2026-03-15",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Tutorial",
    locale: "pt",
  },
  {
    slug: "preparar-ipo-lista-completa",
    title: "Preparar a IPO: a lista de verificacao completa",
    description:
      "Lista completa para preparar a sua IPO. Iluminacao, travagem, emissoes, pneus e muito mais.",
    date: "2026-03-10",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Guia pratico",
    locale: "pt",
  },
  {
    slug: "5-ruidos-motor-nao-ignorar",
    title: "Os 5 ruidos do motor que nao deve ignorar",
    description:
      "Estalido, ronco, assobio, pancada, rangido: descubra o que cada ruido do motor significa e quando agir.",
    date: "2026-03-05",
    author: "Reda Kaouani",
    readingTime: 7,
    category: "Diagnostico",
    locale: "pt",
  },
  {
    slug: "obd2-compreender-em-5-minutos",
    title: "OBD2: tudo o que precisa saber em 5 minutos",
    description:
      "O OBD2 explicado de forma simples: historia, funcionamento, protocolos, dongles ELM327 e o que pode fazer com ele.",
    date: "2026-02-28",
    author: "Reda Kaouani",
    readingTime: 6,
    category: "Tutorial",
    locale: "pt",
  },
  {
    slug: "autodiag-vs-oficina-poupancas",
    title: "AutoDiag EU vs oficina: quanto poupa realmente?",
    description:
      "Comparacao detalhada de custos de diagnostico entre AutoDiag EU e oficinas em Portugal, Franca e Alemanha.",
    date: "2026-02-20",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Poupancas",
    locale: "pt",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByLocale(locale: string): BlogPost[] {
  return blogPosts.filter((post) => post.locale === locale);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getAllBlogParams(): { locale: string; slug: string }[] {
  return blogPosts.map((post) => ({ locale: post.locale, slug: post.slug }));
}

/**
 * Blog translation groups — each inner array lists slugs that are
 * translations of the same article across locales.
 */
const blogTranslationGroups: Array<Record<string, string>> = [
  {
    fr: "preparer-controle-technique-diesel-2026-guide",
  },
  {
    fr: "pannes-les-plus-cheres-2026-comment-eviter",
  },
  {
    fr: "acheter-voiture-occasion-verifications-essentielles",
  },
  {
    fr: "voyant-esp-allume-causes-cout-reparation",
  },
  {
    fr: "voyant-huile-allume-rouler-ou-arreter",
  },
  {
    fr: "consommation-excessive-carburant-causes-obd2",
  },
  {
    fr: "catalyseur-bouche-symptomes-diagnostic-solutions",
  },
  {
    fr: "batterie-voiture-signes-faiblesse-avant-panne",
  },
  {
    fr: "triple-diagnostic-son-vision-obd2-se-completent",
    en: "triple-diagnosis-sound-vision-obd2-work-together",
  },
  {
    fr: "pourquoi-scanner-obd2-seul-ne-suffit-plus-2026",
    en: "why-obd2-scanner-alone-not-enough-2026",
  },
  {
    fr: "diagnostic-automobile-futur-dans-votre-poche",
    en: "future-car-diagnostics-already-in-your-pocket",
  },
  {
    fr: "autodiag-eu-vs-outils-traditionnels-comparaison",
    en: "autodiag-eu-vs-traditional-tools-comparison",
  },
  {
    fr: "score-sante-vehicule-comment-calculer-note-100",
    en: "vehicle-health-score-how-we-calculate-rating",
  },
  {
    fr: "diagnostic-preventif-economiser-milliers-euros",
    en: "preventive-diagnostics-save-thousands-per-year",
  },
  {
    fr: "vision-ia-detecter-fuites-sous-voiture-telephone",
    en: "vision-ai-detect-leaks-under-car-with-phone",
  },
  {
    fr: "usure-prematuree-pneus-ia-voit-ce-que-vous-ne-remarquez-pas",
    en: "premature-tyre-wear-ai-sees-what-you-dont-notice",
  },
  {
    fr: "scanner-plaque-immatriculation-identification-instantanee",
    en: "scan-number-plate-instant-vehicle-identification",
  },
  {
    fr: "detecter-corrosion-rouille-vision-ia-avant-ct",
    en: "detect-corrosion-rust-vision-ai-before-mot",
  },
  {
    fr: "checkup-visuel-ia-5-points-vehicule-sain",
    en: "ai-visual-checkup-5-points-healthy-vehicle",
  },
  {
    fr: "fuite-huile-liquide-frein-coolant-couleur-revele-panne",
    en: "oil-brake-fluid-coolant-leak-colour-reveals-fault",
  },
  {
    fr: "scanner-vin-decoder-historique-complet-voiture",
    en: "scan-vin-decode-car-complete-history",
  },
  {
    fr: "usure-plaquettes-disques-vision-ia-detecte",
    en: "brake-pad-disc-wear-vision-ai-detects",
  },
  {
    fr: "7-bruits-habitacle-jamais-ignorer",
    en: "7-cabin-noises-never-ignore",
  },
  {
    fr: "grincement-freins-usure-normale-ou-danger",
    en: "brake-squealing-normal-wear-or-danger",
  },
  {
    fr: "bruit-suspension-ia-identifie-amortisseur",
    en: "suspension-noise-ai-identifies-failing-shock",
  },
  {
    fr: "claquement-direction-rotule-cremaillere-cardan",
    en: "steering-clunk-ball-joint-rack-cv-joint",
  },
  {
    fr: "bruit-roulement-roue-detecter-usure-avant-ct",
    en: "wheel-bearing-noise-detect-wear-before-mot",
  },
  {
    fr: "sifflement-ventilation-diagnostic-climatisation",
    en: "hvac-whistling-diagnosing-ac-noises",
  },
  {
    fr: "usure-invisible-composant-fatigue-endommage-autre",
    en: "invisible-wear-tired-component-damages-another",
  },
  {
    fr: "controle-preventif-son-eviter-facture-cascade",
    en: "preventive-sound-check-avoid-cascade-repair-bill",
  },
  {
    fr: "votre-moteur-parle-detection-pannes-par-son",
    en: "your-engine-speaks-ai-fault-detection-by-sound",
  },
  {
    fr: "11-pannes-detectables-analyse-sonore-moteur",
    en: "11-engine-faults-detectable-by-sound-analysis",
  },
  {
    fr: "sons-inaudibles-ia-detecte-ce-que-oreille-ne-peut-pas",
    en: "inaudible-sounds-ai-catches-what-your-ear-misses",
  },
  {
    fr: "bruit-claquement-moteur-causes-diagnostic-ia",
    en: "engine-knocking-noise-causes-ai-diagnosis",
  },
  {
    fr: "prevenir-casse-moteur-diagnostic-sonore-preventif",
    en: "prevent-engine-failure-preventive-sound-diagnosis",
  },
  {
    fr: "courroie-distribution-usee-detecter-par-son",
    en: "worn-timing-belt-detect-by-sound-before-it-snaps",
  },
  {
    fr: "roulement-moteur-fatigue-ia-entend",
    en: "worn-engine-bearing-ai-hears-what-you-cant",
  },
  {
    fr: "turbo-qui-siffle-panne-ou-normal",
    en: "turbo-whistle-imminent-failure-or-normal",
  },
  {
    fr: "comment-fonctionne-svm-technologie-scan-sonore",
    en: "how-our-svm-works-technology-behind-sound-scanning",
  },
  {
    fr: "diesel-vs-essence-diagnostic-sonore-ia",
    en: "diesel-vs-petrol-sound-diagnosis-differences",
  },
  {
    fr: "voyant-moteur-allume-que-faire",
    en: "check-engine-light-what-to-do",
    de: "motorkontrollleuchte-leuchtet-was-tun",
    es: "testigo-motor-encendido-que-hacer",
    pt: "luz-motor-acesa-o-que-fazer",
  },
  {
    fr: "preparer-controle-technique-2026",
    en: "mot-preparation-guide-2026",
    de: "tuev-vorbereitung-2026",
    es: "preparar-itv-2026",
    pt: "preparar-inspecao-2026",
  },
  {
    fr: "10-codes-defaut-frequents-europe",
    en: "top-10-common-fault-codes-europe",
    de: "10-haeufigste-fehlercodes-europa",
    es: "10-codigos-averia-frecuentes-europa",
    pt: "10-codigos-erro-frequentes-europa",
  },
  {
    fr: "lire-codes-obd2-telephone",
    en: "read-obd2-codes-phone",
    de: "obd2-codes-mit-handy-auslesen",
    es: "leer-codigos-obd2-con-movil",
    pt: "ler-codigos-obd2-com-telemovel",
  },
  {
    fr: "cout-reparation-catalyseur-p0420",
    en: "p0420-catalytic-converter-cost",
    de: "katalysator-reparatur-kosten-p0420",
    es: "coste-reparacion-catalizador-p0420",
    pt: "custo-reparacao-catalisador-p0420",
  },
  {
    fr: "comment-lire-code-defaut-obd2",
    en: "obd2-fault-codes-explained-uk",
    de: "obd2-fehlercodes-lesen-anleitung",
    es: "como-leer-codigos-fallo-obd2",
    pt: "como-ler-codigos-erro-obd2",
  },
  {
    fr: "preparer-controle-technique",
    en: "how-to-prepare-car-for-mot",
    de: "tuv-vorbereitung-checkliste",
    es: "preparar-itv-lista-completa",
    pt: "preparar-ipo-lista-completa",
  },
  {
    fr: "5-bruits-moteur-a-ne-pas-ignorer",
    de: "5-motorgerausche-nicht-ignorieren",
    es: "5-ruidos-motor-no-ignorar",
    pt: "5-ruidos-motor-nao-ignorar",
  },
  {
    fr: "obd2-comprendre-en-5-minutes",
    de: "obd2-verstehen-in-5-minuten",
    es: "obd2-entender-en-5-minutos",
    pt: "obd2-compreender-em-5-minutos",
  },
  {
    fr: "autodiag-vs-garage-economies",
    en: "car-diagnostic-app-vs-garage-uk",
    de: "autodiag-vs-werkstatt-ersparnisse",
    es: "autodiag-vs-taller-ahorros",
    pt: "autodiag-vs-oficina-poupancas",
  },
];

/**
 * Return the per-locale alternate slugs for a given blog post, or
 * undefined if the post is a standalone article with no translations.
 */
export function getBlogAlternates(
  slug: string
): Record<string, string> | undefined {
  return blogTranslationGroups.find((group) =>
    Object.values(group).includes(slug)
  );
}
