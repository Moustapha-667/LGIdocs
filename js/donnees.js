// ==========================================================
// UniDocs — les DONNÉES du site
// Source : maquette officielle de la Licence d'Informatique
// (UFR Sciences et Technologies, version 2018).
//
// C'est le seul fichier à modifier pour ajouter ou corriger
// des matières ou des sujets : la page bibliotheque.html
// s'adapte toute seule.
//
// Règles importantes :
//  - chaque "id" est en minuscules, sans accents ni espaces ;
//  - dans un même semestre, deux UE n'ont jamais le même id ;
//  - l'ORDRE des éléments dans une liste est l'ordre affiché ;
//  - chaque élément est séparé du suivant par une virgule ;
//  - une matière qui existe à plusieurs endroits (Anglais 5 dans
//    les deux options de L3) garde le MÊME id : ses sujets sont
//    alors partagés.
// ==========================================================

const niveaux = [

  // ========================= LICENCE 1 =========================
  {
    id: "l1", nom: "Licence 1", court: "L1",
    semestres: [
      {
        numero: 1,
        ues: [
          { id: "mathematiques", nom: "Mathématiques", matieres: [
            { id: "analyse-1", nom: "Analyse 1" },
            { id: "algebre-1", nom: "Algèbre 1" }
          ]},
          { id: "physique", nom: "Physique", matieres: [
            { id: "fondamentaux-physique", nom: "Fondamentaux de physique" },
            { id: "electricite", nom: "Électricité" }
          ]},
          { id: "informatique", nom: "Informatique", matieres: [
            { id: "algo-prog-1", nom: "Algorithmique et programmation 1" },
            { id: "intro-systemes-exploitation", nom: "Introduction aux systèmes d'exploitation" }
          ]},
          { id: "humanites-entreprises", nom: "Humanités et entreprises", matieres: [
            { id: "anglais-1", nom: "Anglais 1" },
            { id: "recherche-documentaire", nom: "Recherche documentaire" }
          ]}
        ]
      },
      {
        numero: 2,
        ues: [
          { id: "mathematiques", nom: "Mathématiques", matieres: [
            { id: "analyse-2", nom: "Analyse 2" },
            { id: "algebre-2", nom: "Algèbre 2" }
          ]},
          { id: "physique", nom: "Physique", matieres: [
            { id: "ondes-propagation", nom: "Ondes et propagation" },
            { id: "electronique", nom: "Électronique" }
          ]},
          { id: "informatique", nom: "Informatique", matieres: [
            { id: "algo-prog-2", nom: "Algorithmique et programmation 2" },
            { id: "architecture-ordinateurs", nom: "Architecture des ordinateurs" }
          ]},
          { id: "humanites-entreprises", nom: "Humanités et entreprises", matieres: [
            { id: "anglais-2", nom: "Anglais 2" },
            { id: "technique-communications", nom: "Technique de communications" }
          ]}
        ]
      }
    ]
  },

  // ========================= LICENCE 2 =========================
  {
    id: "l2", nom: "Licence 2", court: "L2",
    semestres: [
      {
        numero: 1,   // Semestre 3 de la maquette
        ues: [
          { id: "mathematiques", nom: "Mathématiques", matieres: [
            { id: "probabilites-statistiques", nom: "Probabilités et statistiques" },
            { id: "calcul-numerique", nom: "Calcul numérique" }
          ]},
          { id: "reseaux-systemes", nom: "Réseaux et systèmes", matieres: [
            { id: "systemes-exploitation", nom: "Systèmes d'exploitation" },
            { id: "intro-reseaux", nom: "Introduction aux réseaux" }
          ]},
          { id: "informatique", nom: "Informatique", matieres: [
            { id: "algo-structures-donnees", nom: "Algorithmique et structures de données" },
            { id: "developpement-web-1", nom: "Développement web 1" }
          ]},
          { id: "systemes-information", nom: "Systèmes d'information", matieres: [
            { id: "analyse-conception-si", nom: "Analyse et conception des systèmes d'information" },
            { id: "intro-bases-donnees", nom: "Introduction aux bases de données relationnelles" }
          ]},
          { id: "humanites-entreprises", nom: "Humanités et entreprises", matieres: [
            { id: "projet-personnel-professionnel", nom: "Projet personnel professionnel" },
            { id: "anglais-3", nom: "Anglais 3" }
          ]}
        ]
      },
      {
        numero: 2,   // Semestre 4 de la maquette
        ues: [
          { id: "reseaux-securite", nom: "Réseaux et sécurité", matieres: [
            { id: "intro-securite", nom: "Introduction à la sécurité" },
            { id: "reseaux-locaux", nom: "Réseaux locaux" }
          ]},
          { id: "programmation", nom: "Programmation", matieres: [
            { id: "poo-1", nom: "Programmation orientée objet 1" },
            { id: "conception-orientee-objet", nom: "Analyse et conception des systèmes orientés objet" }
          ]},
          { id: "informatique", nom: "Informatique", matieres: [
            { id: "technologies-xml", nom: "Technologies XML" },
            { id: "developpement-web-2", nom: "Développement web 2" }
          ]},
          { id: "humanites-entreprises", nom: "Humanités et entreprises", matieres: [
            { id: "gestion-projets", nom: "Gestion de projets" },
            { id: "leadership", nom: "Leadership et développement personnel" },
            { id: "anglais-4", nom: "Anglais 4" }
          ]}
        ]
      }
    ]
  },

  // ========================= LICENCE 3 =========================
  // En L3, l'étudiant choisit d'abord une OPTION : le semestre
  // contient alors "options" (chacune avec ses "ues") au lieu de "ues".
  {
    id: "l3", nom: "Licence 3", court: "L3",
    semestres: [
      {
        numero: 1,   // Semestre 5 de la maquette
        options: [
          {
            id: "genie-logiciel", nom: "Génie logiciel",
            ues: [
              { id: "programmation", nom: "Programmation", matieres: [
                { id: "programmation-mobiles", nom: "Programmation des mobiles" },
                { id: "poo-2", nom: "Programmation orientée objet 2" }
              ]},
              { id: "genie-logiciel", nom: "Génie logiciel", matieres: [
                { id: "developpement-web-avance", nom: "Développement web avancé" },
                { id: "intro-genies-logiciels", nom: "Introduction aux génies logiciels" }
              ]},
              { id: "informatique", nom: "Informatique", matieres: [
                { id: "bases-donnees-avancees", nom: "Bases de données avancées" },
                { id: "programmation-fonctionnelle", nom: "Programmation fonctionnelle" }
              ]},
              { id: "humanites-entreprises", nom: "Humanités et entreprises", matieres: [
                { id: "anglais-5", nom: "Anglais 5" },
                { id: "creation-entreprise", nom: "Création d'entreprise" }
              ]}
            ]
          },
          {
            id: "reseaux-telecoms", nom: "Réseaux et télécommunications",
            ues: [
              { id: "reseaux-telecoms", nom: "Réseaux et télécoms", matieres: [
                { id: "reseaux-sans-fil", nom: "Réseaux sans fil" },
                { id: "signaux-systemes-analogiques", nom: "Signaux et systèmes analogiques" }
              ]},
              { id: "informatique", nom: "Informatique", matieres: [
                { id: "programmation-mobiles", nom: "Programmation des mobiles" },
                { id: "intro-iot", nom: "Introduction à l'IoT" }
              ]},
              { id: "reseaux-systemes", nom: "Réseaux et systèmes", matieres: [
                { id: "administration-reseaux-systemes", nom: "Administration réseaux et systèmes" },
                { id: "securite-reseaux", nom: "Sécurité des réseaux" }
              ]},
              { id: "humanites-entreprises", nom: "Humanités et entreprises", matieres: [
                { id: "anglais-5", nom: "Anglais 5" },
                { id: "creation-entreprise", nom: "Création d'entreprise" }
              ]}
            ]
          }
        ]
      },
      {
        numero: 2,   // Semestre 6 de la maquette
        options: [
          {
            id: "genie-logiciel", nom: "Génie logiciel",
            ues: [
              { id: "informatique", nom: "Informatique", matieres: [
                { id: "applications-distribuees", nom: "Développement d'applications distribuées" },
                { id: "langage-automate-compilation", nom: "Langage, automate et compilation" },
                { id: "qualite-performance-logicielle", nom: "Mesure qualité et performance logicielle" }
              ]},
              { id: "humanites-entreprises", nom: "Humanités et entreprises", matieres: [
                { id: "recherche-documentaire-2", nom: "Recherche documentaire 2 et rédaction scientifique" },
                { id: "anglais-6", nom: "Anglais 6" }
              ]},
              { id: "stage", nom: "Stage", matieres: [
                { id: "stage-projet", nom: "Stage ou projet opérationnel" }
              ]}
            ]
          },
          {
            id: "reseaux-telecoms", nom: "Réseaux et télécommunications",
            ues: [
              { id: "reseaux-systemes", nom: "Réseaux et systèmes", matieres: [
                { id: "maintenance-informatique", nom: "Maintenance informatique" },
                { id: "services-reseaux", nom: "Services réseaux" },
                { id: "modules-complementaires", nom: "Modules complémentaires" }
              ]},
              { id: "humanites-entreprises", nom: "Humanités et entreprises", matieres: [
                { id: "recherche-documentaire-2", nom: "Recherche documentaire 2 et rédaction scientifique" },
                { id: "anglais-6", nom: "Anglais 6" }
              ]},
              { id: "stage", nom: "Stage", matieres: [
                { id: "stage-projet", nom: "Stage ou projet opérationnel" }
              ]}
            ]
          }
        ]
      }
    ]
  }
];

// ----------------------------------------------------------
// Les SUJETS. Chacun appartient à une matière grâce à son "id".
// Pour ajouter un sujet : ajouter UNE ligne ici, c'est tout
// (le titre affiché est fabriqué à partir de la matière).
//   matiere : l'id de la matière (voir plus haut)
//   annee   : "2023-2024"
//   type    : "Examen", "Devoir", "Rattrapage" ou "Projet"
//   note    : (facultatif) précision affichée à côté du titre
//   fichier : chemin du PDF dans le dossier pdf/
// ----------------------------------------------------------
const documents = [
  // ----- Analyse 1 (L1 S1) -----
  { matiere: "analyse-1", annee: "2017-2018", type: "Examen", note: "Photo 77", fichier: "pdf/analyse-1-examen-2017-2018.pdf" },  // photo scannée, classée par contenu
  { matiere: "analyse-1", annee: "2018-2019", type: "Examen", note: "Photo 8", fichier: "pdf/analyse-1-examen-2018-2019.pdf" },  // photo scannée, classée par contenu
  { matiere: "analyse-1", annee: "2019-2020", type: "Examen", note: "Photo 80", fichier: "pdf/analyse-1-examen-2019-2020.pdf" },  // photo scannée, classée par contenu
  { matiere: "analyse-1", annee: "2020-2021", type: "Examen", fichier: "pdf/analyse-1-examen-2020-2021.pdf" },
  { matiere: "analyse-1", annee: "2021-2022", type: "Examen", note: "Photo 5", fichier: "pdf/analyse-1-examen-2021-2022.pdf" },  // photo scannée, classée par contenu
  { matiere: "analyse-1", annee: "2023-2024", type: "Examen", fichier: "pdf/analyse-1-examen-2023-2024.pdf" },  // année déduite, à confirmer
  { matiere: "analyse-1", annee: "Non daté", type: "Devoir", note: "Photo 81", fichier: "pdf/analyse-1-devoir-Non daté.pdf" },  // photo scannée, classée par contenu
  { matiere: "analyse-1", annee: "Non daté", type: "Devoir", note: "Photo 9", fichier: "pdf/analyse-1-devoir-Non daté-2.pdf" },  // photo scannée, classée par contenu
  { matiere: "analyse-1", annee: "Non daté", type: "Examen", note: "Photo 24", fichier: "pdf/analyse-1-examen-Non daté.pdf" },  // photo scannée, classée par contenu
  { matiere: "analyse-1", annee: "Non daté", type: "Examen", note: "Photo 4", fichier: "pdf/analyse-1-examen-Non daté-2.pdf" },  // photo scannée, classée par contenu
  { matiere: "analyse-1", annee: "Non daté", type: "Examen", note: "Photo 41", fichier: "pdf/analyse-1-examen-Non daté-3.pdf" },  // photo scannée, classée par contenu
  { matiere: "analyse-1", annee: "Non daté", type: "Examen", note: "Photo 79", fichier: "pdf/analyse-1-examen-Non daté-4.pdf" },  // photo scannée, classée par contenu
  // ----- Algèbre 1 (L1 S1) -----
  { matiere: "algebre-1", annee: "2020-2021", type: "Examen", fichier: "pdf/algebre-1-examen-2020-2021.pdf" },
  { matiere: "algebre-1", annee: "2024-2025", type: "Examen", fichier: "pdf/algebre-1-examen-2024-2025.pdf" },
  { matiere: "algebre-1", annee: "Non daté", type: "Devoir", note: "Photo 1", fichier: "pdf/algebre-1-devoir-Non daté.pdf" },  // photo scannée, classée par contenu
  { matiere: "algebre-1", annee: "Non daté", type: "Devoir", note: "Photo 18", fichier: "pdf/algebre-1-devoir-Non daté-2.pdf" },  // photo scannée, classée par contenu
  { matiere: "algebre-1", annee: "Non daté", type: "Devoir", note: "Photo 2", fichier: "pdf/algebre-1-devoir-Non daté-3.pdf" },  // photo scannée, classée par contenu
  { matiere: "algebre-1", annee: "Non daté", type: "Examen", note: "Photo 17", fichier: "pdf/algebre-1-examen-Non daté.pdf" },  // photo scannée, classée par contenu
  { matiere: "algebre-1", annee: "Non daté", type: "Examen", note: "Photo 22", fichier: "pdf/algebre-1-examen-Non daté-2.pdf" },  // photo scannée, classée par contenu
  { matiere: "algebre-1", annee: "Non daté", type: "Examen", note: "Photo 42", fichier: "pdf/algebre-1-examen-Non daté-3.pdf" },  // photo scannée, classée par contenu
  { matiere: "algebre-1", annee: "Non daté", type: "Examen", note: "Photo 50", fichier: "pdf/algebre-1-examen-Non daté-4.pdf" },  // photo scannée, classée par contenu
  { matiere: "algebre-1", annee: "Non daté", type: "Examen", note: "Photo 71", fichier: "pdf/algebre-1-examen-Non daté-5.pdf" },  // photo scannée, classée par contenu
  // ----- Fondamentaux de physique (L1 S1) -----
  { matiere: "fondamentaux-physique", annee: "2015-2016", type: "Rattrapage", fichier: "pdf/fondamentaux-physique-rattrapage-2015-2016.pdf" },  // année déduite, à confirmer
  { matiere: "fondamentaux-physique", annee: "2016-2017", type: "Devoir", note: "Devoir n°1", fichier: "pdf/fondamentaux-physique-devoir-2016-2017.pdf" },
  { matiere: "fondamentaux-physique", annee: "2016-2017", type: "Devoir", note: "Devoir n°1, autre version", fichier: "pdf/fondamentaux-physique-devoir-2016-2017-2.pdf" },  // année déduite, à confirmer
  { matiere: "fondamentaux-physique", annee: "2017-2018", type: "Examen", fichier: "pdf/fondamentaux-physique-examen-2017-2018.pdf" },
  { matiere: "fondamentaux-physique", annee: "2018-2019", type: "Devoir", fichier: "pdf/fondamentaux-physique-devoir-2018-2019.pdf" },
  { matiere: "fondamentaux-physique", annee: "2018-2019", type: "Examen", fichier: "pdf/fondamentaux-physique-examen-2018-2019.pdf" },
  { matiere: "fondamentaux-physique", annee: "2018-2019", type: "Rattrapage", fichier: "pdf/fondamentaux-physique-rattrapage-2018-2019.pdf" },
  // ----- Électricité (L1 S1) -----
  { matiere: "electricite", annee: "2014-2015", type: "Devoir", note: "Électricité-Électronique, devoir n°1", fichier: "pdf/electricite-devoir-2014-2015.pdf" },  // année déduite, à confirmer
  { matiere: "electricite", annee: "2015-2016", type: "Examen", fichier: "pdf/electricite-examen-2015-2016.pdf" },  // année déduite, à confirmer
  { matiere: "electricite", annee: "2017-2018", type: "Devoir", note: "Électricité-Électronique", fichier: "pdf/electricite-devoir-2017-2018.pdf" },
  { matiere: "electricite", annee: "2018-2019", type: "Examen", note: "Électricité-Électronique", fichier: "pdf/electricite-examen-2018-2019.pdf" },  // limite : un seul mot « semi-conducteur », classé en Électricité
  { matiere: "electricite", annee: "2018-2019", type: "Rattrapage", note: "Électricité-Électronique", fichier: "pdf/electricite-rattrapage-2018-2019.pdf" },
  { matiere: "electricite", annee: "2019-2020", type: "Examen", note: "Électricité-Électronique (3 h)", fichier: "pdf/electricite-examen-2019-2020.pdf" },
  { matiere: "electricite", annee: "2021-2022", type: "Examen", fichier: "pdf/electricite-examen-2021-2022.pdf" },
  { matiere: "electricite", annee: "2022-2023", type: "Examen", fichier: "pdf/electricite-examen-2022-2023.pdf" },
  { matiere: "electricite", annee: "Non daté", type: "Examen", note: "Photo 23", fichier: "pdf/electricite-examen-Non daté.pdf" },  // photo scannée, classée par contenu
  // ----- Algorithmique et programmation 1 (L1 S1) -----
  { matiere: "algo-prog-1", annee: "Non daté", type: "Devoir", note: "Photo 25", fichier: "pdf/algo-prog-1-devoir-Non daté.pdf" },  // photo scannée, classée par contenu
  { matiere: "algo-prog-1", annee: "Non daté", type: "Devoir", note: "Photo 33", fichier: "pdf/algo-prog-1-devoir-Non daté-2.pdf" },  // photo scannée, classée par contenu
  { matiere: "algo-prog-1", annee: "Non daté", type: "Devoir", note: "Photo 65", fichier: "pdf/algo-prog-1-devoir-Non daté-3.pdf" },  // photo scannée, classée par contenu
  { matiere: "algo-prog-1", annee: "Non daté", type: "Examen", note: "Photo 60", fichier: "pdf/algo-prog-1-examen-Non daté.pdf" },  // photo scannée, classée par contenu
  { matiere: "algo-prog-1", annee: "Non daté", type: "Examen", note: "Photo 62", fichier: "pdf/algo-prog-1-examen-Non daté-2.pdf" },  // photo scannée, classée par contenu
  { matiere: "algo-prog-1", annee: "Non daté", type: "Examen", note: "Photo 66", fichier: "pdf/algo-prog-1-examen-Non daté-3.pdf" },  // photo scannée, classée par contenu
  { matiere: "algo-prog-1", annee: "Non daté", type: "Examen", note: "Photo 67", fichier: "pdf/algo-prog-1-examen-Non daté-4.pdf" },  // photo scannée, classée par contenu
  // ----- Anglais 1 (L1 S1) -----
  { matiere: "anglais-1", annee: "2025-2026", type: "Projet", note: "Consignes du projet final", fichier: "pdf/anglais-1-projet-2025-2026.pdf" },  // année déduite, à confirmer
  // ----- Analyse 2 (L1 S2) -----
  { matiere: "analyse-2", annee: "2020-2021", type: "Devoir", note: "Photo 7", fichier: "pdf/analyse-2-devoir-2020-2021.pdf" },  // photo scannée, classée par contenu
  // ----- Algèbre 2 (L1 S2) -----
  { matiere: "algebre-2", annee: "2021-2022", type: "Examen", note: "Photo 10", fichier: "pdf/algebre-2-examen-2021-2022.pdf" },  // photo scannée, classée par contenu
  { matiere: "algebre-2", annee: "2021-2022", type: "Examen", note: "Photo 11", fichier: "pdf/algebre-2-examen-2021-2022-2.pdf" },  // photo scannée, classée par contenu
  { matiere: "algebre-2", annee: "2021-2022", type: "Examen", note: "Photo 27", fichier: "pdf/algebre-2-examen-2021-2022-3.pdf" },  // photo scannée, classée par contenu
  { matiere: "algebre-2", annee: "2022-2023", type: "Examen", fichier: "pdf/algebre-2-examen-2022-2023.pdf" },
  { matiere: "algebre-2", annee: "Non daté", type: "Devoir", note: "Photo 12", fichier: "pdf/algebre-2-devoir-Non daté.pdf" },  // photo scannée, classée par contenu
  { matiere: "algebre-2", annee: "Non daté", type: "Devoir", note: "Photo 28", fichier: "pdf/algebre-2-devoir-Non daté-2.pdf" },  // photo scannée, classée par contenu
  { matiere: "algebre-2", annee: "Non daté", type: "Examen", note: "Photo 26", fichier: "pdf/algebre-2-examen-Non daté.pdf" },  // photo scannée, classée par contenu
  { matiere: "algebre-2", annee: "Non daté", type: "Examen", note: "Photo 29", fichier: "pdf/algebre-2-examen-Non daté-2.pdf" },  // photo scannée, classée par contenu
  { matiere: "algebre-2", annee: "Non daté", type: "Examen", note: "Photo 30", fichier: "pdf/algebre-2-examen-Non daté-3.pdf" },  // photo scannée, classée par contenu
  { matiere: "algebre-2", annee: "Non daté", type: "Examen", note: "Photo 31", fichier: "pdf/algebre-2-examen-Non daté-4.pdf" },  // photo scannée, classée par contenu
  // ----- Électronique (L1 S2) -----
  { matiere: "electronique", annee: "2014-2015", type: "Examen", note: "Électricité-Électronique", fichier: "pdf/electronique-examen-2014-2015.pdf" },  // année déduite, à confirmer
  { matiere: "electronique", annee: "2014-2015", type: "Examen", note: "Électronique", fichier: "pdf/electronique-examen-2014-2015-2.pdf" },  // année déduite, à confirmer
  { matiere: "electronique", annee: "2014-2015", type: "Rattrapage", note: "Électricité-Électronique, sujet 1", fichier: "pdf/electronique-rattrapage-2014-2015.pdf" },  // année déduite, à confirmer
  { matiere: "electronique", annee: "2014-2015", type: "Rattrapage", note: "Électricité-Électronique, sujet 2", fichier: "pdf/electronique-rattrapage-2014-2015-2.pdf" },  // année déduite, à confirmer
  { matiere: "electronique", annee: "2019-2020", type: "Examen", note: "Électronique, QCM (1 h 30)", fichier: "pdf/electronique-examen-2019-2020.pdf" },
  { matiere: "electronique", annee: "2020-2021", type: "Rattrapage", fichier: "pdf/electronique-rattrapage-2020-2021.pdf" },
  { matiere: "electronique", annee: "2023-2024", type: "Examen", fichier: "pdf/electronique-examen-2023-2024.pdf" },
  { matiere: "electronique", annee: "Non daté", type: "Examen", note: "Photo 16", fichier: "pdf/electronique-examen-Non daté.pdf" },  // photo scannée, classée par contenu
  // ----- Algorithmique et programmation 2 (L1 S2) -----
  { matiere: "algo-prog-2", annee: "Non daté", type: "Examen", note: "Photo 34", fichier: "pdf/algo-prog-2-examen-Non daté.pdf" },  // photo scannée, classée par contenu
  { matiere: "algo-prog-2", annee: "Non daté", type: "Examen", note: "Photo 38", fichier: "pdf/algo-prog-2-examen-Non daté-2.pdf" },  // photo scannée, classée par contenu
  // ----- Architecture des ordinateurs (L1 S2) -----
  { matiere: "architecture-ordinateurs", annee: "Non daté", type: "Examen", note: "Photo 14", fichier: "pdf/architecture-ordinateurs-examen-Non daté.pdf" },  // photo scannée, classée par contenu
  { matiere: "architecture-ordinateurs", annee: "Non daté", type: "Examen", note: "Photo 15", fichier: "pdf/architecture-ordinateurs-examen-Non daté-2.pdf" },  // photo scannée, classée par contenu
  { matiere: "architecture-ordinateurs", annee: "Non daté", type: "Examen", note: "Photo 19", fichier: "pdf/architecture-ordinateurs-examen-Non daté-3.pdf" },  // photo scannée, classée par contenu
  { matiere: "architecture-ordinateurs", annee: "Non daté", type: "Examen", note: "Photo 32", fichier: "pdf/architecture-ordinateurs-examen-Non daté-4.pdf" },  // photo scannée, classée par contenu
  { matiere: "architecture-ordinateurs", annee: "Non daté", type: "Examen", note: "Photo 35", fichier: "pdf/architecture-ordinateurs-examen-Non daté-5.pdf" },  // photo scannée, classée par contenu
  { matiere: "architecture-ordinateurs", annee: "Non daté", type: "Examen", note: "Photo 53", fichier: "pdf/architecture-ordinateurs-examen-Non daté-6.pdf" },  // photo scannée, classée par contenu
  { matiere: "architecture-ordinateurs", annee: "Non daté", type: "Examen", note: "Photo 83", fichier: "pdf/architecture-ordinateurs-examen-Non daté-7.pdf" },  // photo scannée, classée par contenu
  { matiere: "architecture-ordinateurs", annee: "Non daté", type: "Examen", note: "Photo 84", fichier: "pdf/architecture-ordinateurs-examen-Non daté-8.pdf" },  // photo scannée, classée par contenu
  { matiere: "architecture-ordinateurs", annee: "Non daté", type: "Examen", note: "Photo 85", fichier: "pdf/architecture-ordinateurs-examen-Non daté-9.pdf" }  // photo scannée, classée par contenu
];
