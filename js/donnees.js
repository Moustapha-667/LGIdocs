// ==========================================================
// LGIdocs — les DONNÉES du site
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
// Données fictives : le fichier PDF est un exemple.
// ----------------------------------------------------------
const documents = [
  { matiere: "analyse-1",             annee: "2023-2024", type: "Examen", fichier: "pdf/exemple.pdf" },
  { matiere: "analyse-1",             annee: "2023-2024", type: "Devoir", fichier: "pdf/exemple.pdf" },
  { matiere: "analyse-1",             annee: "2022-2023", type: "Examen", fichier: "pdf/exemple.pdf" },
  { matiere: "algebre-1",             annee: "2023-2024", type: "Examen", fichier: "pdf/exemple.pdf" },
  { matiere: "algo-prog-1",           annee: "2023-2024", type: "Examen", fichier: "pdf/exemple.pdf" },
  { matiere: "algo-prog-1",           annee: "2022-2023", type: "Devoir", fichier: "pdf/exemple.pdf" },
  { matiere: "anglais-1",             annee: "2023-2024", type: "Examen", fichier: "pdf/exemple.pdf" },
  { matiere: "analyse-2",             annee: "2023-2024", type: "Examen", fichier: "pdf/exemple.pdf" },
  { matiere: "algo-structures-donnees", annee: "2023-2024", type: "Examen", fichier: "pdf/exemple.pdf" },
  { matiere: "anglais-5",             annee: "2023-2024", type: "Examen", fichier: "pdf/exemple.pdf" }
];
