// ==========================================================
// UniDocs — la PAGE MODÈLE (une seule pour tout le site)
//
// Elle lit la fin de l'adresse (ce qui suit le #) et affiche
// l'étape correspondante, avec les données de donnees.js.
//
//   bibliotheque.html#/                         → choix du niveau
//   bibliotheque.html#/l1                       → choix du semestre
//   bibliotheque.html#/l1/1                     → liste des UE
//   bibliotheque.html#/l1/1/mathematiques       → liste des matières
//   bibliotheque.html#/l1/1/mathematiques/analyse-1 → les sujets
//
// En L3, il y a une étape en plus : le choix de l'OPTION
//   bibliotheque.html#/l3/1                     → choix de l'option
//   bibliotheque.html#/l3/1/genie-logiciel      → liste des UE
//
// Et la recherche :
//   bibliotheque.html#/recherche/analyse%202    → résultats de « analyse 2 »
// ==========================================================

const titre = document.getElementById("titre");
const filAriane = document.getElementById("fil-ariane");
const zone = document.getElementById("zone");
const formulaire = document.getElementById("formulaire-recherche");
const champ = document.getElementById("champ-recherche");

// ---------- Petits outils pour fabriquer du HTML ----------

// lien("l1", 1) donne "#/l1/1". Les valeurs absentes (undefined) sont ignorées.
function lien(...parties) {
  return "#/" + parties.filter(p => p !== undefined).join("/");
}

function carte(adresse, nom, texte) {
  return `<a class="carte carte-lien" href="${adresse}"><h3>${nom}</h3><p>${texte}</p></a>`;
}

function ligne(adresse, nom, detail) {
  return `<li><a class="ligne" href="${adresse}">
    <span class="ligne-texte">${nom} <small>${detail}</small></span>
    <span class="fleche">›</span>
  </a></li>`;
}

function compterSujets(idMatiere) {
  const n = documents.filter(d => d.matiere === idMatiere).length;
  if (n === 0) return "Aucun sujet pour le moment";
  return n + (n > 1 ? " sujets" : " sujet");
}

const racine = [
  { texte: "Accueil", lien: "index.html" },
  { texte: "Licence Informatique", lien: lien() }
];

// Construit le fil d'Ariane jusqu'à l'étage demandé.
// (Les étages non fournis sont simplement sautés.)
function construireChemin(niveau, semestre, option, ue, matiere) {
  const chemin = [...racine];
  if (niveau) chemin.push({ texte: niveau.nom, lien: lien(niveau.id) });
  if (semestre) chemin.push({ texte: "Semestre " + semestre.numero, lien: lien(niveau.id, semestre.numero) });
  if (option) chemin.push({ texte: option.nom, lien: lien(niveau.id, semestre.numero, option.id) });
  if (ue) chemin.push({ texte: ue.nom, lien: lien(niveau.id, semestre.numero, option && option.id, ue.id) });
  if (matiere) chemin.push({ texte: matiere.nom });
  return chemin;
}

// Affiche une étape : titre, fil d'Ariane et contenu.
function afficherEtape(nomPage, chemin, contenu) {
  titre.textContent = nomPage;
  document.title = nomPage + " — UniDocs";

  // Dans le fil d'Ariane, tout est un lien sauf le dernier élément.
  const morceaux = chemin.map((etape, i) =>
    i < chemin.length - 1
      ? `<a href="${etape.lien}">${etape.texte}</a>`
      : `<span>${etape.texte}</span>`
  );
  filAriane.innerHTML = morceaux.join(" &gt; ");
  zone.innerHTML = contenu;
}

// ---------- Les étapes ----------

function vueNiveaux() {
  const cartes = niveaux.map(n => {
    const numeros = n.semestres.map(s => s.numero).join(" et ");
    return carte(lien(n.id), n.nom, "Semestres " + numeros);
  });
  afficherEtape("Licence d'Informatique", racine,
    `<section class="section"><h2>Choisis ton niveau</h2>
       <div class="grille">${cartes.join("")}</div></section>`);
}

function vueSemestres(niveau) {
  const cartes = niveau.semestres.map(s => {
    const texte = s.options ? s.options.length + " options" : s.ues.length + " UE";
    return carte(lien(niveau.id, s.numero), "Semestre " + s.numero, texte);
  });
  afficherEtape(niveau.nom, construireChemin(niveau),
    `<section class="section"><h2>Choisis ton semestre</h2>
       <div class="grille grille-2">${cartes.join("")}</div></section>`);
}

// Seulement pour les semestres qui ont des options (L3)
function vueOptions(niveau, semestre) {
  const cartes = semestre.options.map(o =>
    carte(lien(niveau.id, semestre.numero, o.id), o.nom, o.ues.length + " UE"));
  afficherEtape(niveau.nom + " — Semestre " + semestre.numero,
    construireChemin(niveau, semestre),
    `<section class="section"><h2>Choisis ton option</h2>
       <div class="grille grille-2">${cartes.join("")}</div></section>`);
}

// "option" vaut undefined pour les semestres sans option
function vueUes(niveau, semestre, option) {
  const source = option || semestre;   // l'objet qui contient la liste des UE
  const nomPage = niveau.nom + " — Semestre " + semestre.numero + (option ? " — " + option.nom : "");
  const lignes = source.ues.map(u =>
    ligne(lien(niveau.id, semestre.numero, option && option.id, u.id),
          "UE " + u.nom,
          u.matieres.map(m => m.nom).join(" · ")));
  afficherEtape(nomPage, construireChemin(niveau, semestre, option),
    `<section class="section"><h2>Choisis une UE</h2>
       <ol class="liste-vertical">${lignes.join("")}</ol></section>`);
}

function vueMatieres(niveau, semestre, option, ue) {
  const lignes = ue.matieres.map(m =>
    ligne(lien(niveau.id, semestre.numero, option && option.id, ue.id, m.id),
          m.nom, compterSujets(m.id)));
  afficherEtape("UE " + ue.nom, construireChemin(niveau, semestre, option, ue),
    `<section class="section"><h2>Choisis une matière</h2>
       <ol class="liste-vertical">${lignes.join("")}</ol></section>`);
}

// Nom du fichier enregistré sur le téléphone : "Analyse 1 - Examen 2023-2024.pdf"
function nomDeFichier(matiere, d) {
  const extension = d.fichier.includes(".") ? d.fichier.split(".").pop() : "pdf";
  const note = d.note ? " (" + d.note + ")" : "";
  return (matiere.nom + " - " + d.type + " " + d.annee + note).replace(/[\\/:*?"<>|]/g, "-") + "." + extension;
}

// Le bouton « Télécharger » : on récupère le fichier nous-mêmes (fetch), puis on
// demande au navigateur de l'ENREGISTRER. L'attribut HTML "download" seul est
// ignoré par certains téléphones, qui se contentent alors d'afficher le PDF.
// Si quelque chose échoue, on retombe sur l'ouverture normale du fichier.
zone.addEventListener("click", async evenement => {
  const bouton = evenement.target.closest("a[data-telechargement]");
  if (!bouton) return;
  evenement.preventDefault();
  try {
    const reponse = await fetch(bouton.href);
    if (!reponse.ok) throw new Error("Fichier introuvable : " + reponse.status);
    const url = URL.createObjectURL(await reponse.blob());
    const lienTemporaire = document.createElement("a");
    lienTemporaire.href = url;
    lienTemporaire.download = bouton.dataset.nom;
    document.body.appendChild(lienTemporaire);
    lienTemporaire.click();
    lienTemporaire.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  } catch (erreur) {
    window.open(bouton.href, "_blank");
  }
});

function carteDocument(d, niveau, semestre, matiere) {
  return `<article class="document">
    <h3>${matiere.nom} — ${d.type}${d.note ? " <small>" + echapper(d.note) + "</small>" : ""}</h3>
    <p class="infos">
      <span class="etiquette">${niveau.court}</span>
      <span class="etiquette">Semestre ${semestre.numero}</span>
      <span class="etiquette">${d.annee}</span>
      <span class="etiquette etiquette-type">${d.type}</span>
    </p>
    <div class="actions">
      <a class="bouton" href="${d.fichier}" target="_blank" rel="noopener">Ouvrir</a>
      <a class="bouton bouton-clair" href="${d.fichier}" data-telechargement
         data-nom="${echapper(nomDeFichier(matiere, d))}">Télécharger</a>
    </div>
  </article>`;
}

function vueDocuments(niveau, semestre, option, ue, matiere) {
  const chemin = construireChemin(niveau, semestre, option, ue, matiere);

  // Les sujets de CETTE matière, les plus récents d'abord
  const docs = documents
    .filter(d => d.matiere === matiere.id)
    .sort((a, b) => b.annee.localeCompare(a.annee));

  if (docs.length === 0) {
    afficherEtape(matiere.nom, chemin,
      `<p class="vide">Aucun sujet pour cette matière pour le moment.</p>`);
    return;
  }

  // Les filtres proposent seulement les années et types qui existent vraiment
  const annees = [...new Set(docs.map(d => d.annee))];
  const types = [...new Set(docs.map(d => d.type))];
  const options = valeurs => valeurs.map(v => `<option>${v}</option>`).join("");

  afficherEtape(matiere.nom, chemin, `
    <div class="filtres">
      <label class="cache" for="filtre-annee">Année universitaire</label>
      <select id="filtre-annee"><option value="">Toutes les années</option>${options(annees)}</select>
      <label class="cache" for="filtre-type">Type de sujet</label>
      <select id="filtre-type"><option value="">Tous les types</option>${options(types)}</select>
    </div>
    <div class="liste" id="liste-documents"></div>`);

  const choixAnnee = document.getElementById("filtre-annee");
  const choixType = document.getElementById("filtre-type");
  const liste = document.getElementById("liste-documents");

  // Un sujet est affiché s'il respecte TOUS les filtres choisis (règle RG6 : ET)
  function mettreAJourListe() {
    const gardes = docs.filter(d =>
      (choixAnnee.value === "" || d.annee === choixAnnee.value) &&
      (choixType.value === "" || d.type === choixType.value));
    liste.innerHTML = gardes.length > 0
      ? gardes.map(d => carteDocument(d, niveau, semestre, matiere)).join("")
      : `<p class="vide">Aucun sujet ne correspond à ces filtres.</p>`;
  }
  choixAnnee.addEventListener("change", mettreAJourListe);
  choixType.addEventListener("change", mettreAJourListe);
  mettreAJourListe();
}

function pageIntrouvable() {
  afficherEtape("Page introuvable", racine,
    `<p class="vide">Cette page n'existe pas. <a href="#/">Retour au choix du niveau</a></p>`);
}

// ---------- La recherche ----------

// Met le texte en minuscules et enlève les accents :
// "Algèbre" devient "algebre". Ainsi « algebre » trouve « Algèbre 1 ».
function normaliser(texte) {
  return texte.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();
}

// Le texte tapé par l'étudiant ira dans du HTML : on neutralise les caractères
// spéciaux, sinon quelqu'un pourrait y glisser du code (faille « XSS »).
function echapper(texte) {
  return texte.replace(/&/g, "&amp;").replace(/</g, "&lt;")
              .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Décode le texte de l'adresse ("analyse%202" devient "analyse 2")
function decoder(texte) {
  try { return decodeURIComponent(texte); }
  catch { return texte; }   // adresse mal formée : on garde le texte tel quel
}

// Parcourt toute la structure et renvoie UNE ENTRÉE PAR MATIÈRE, avec son contexte.
function toutesLesMatieres() {
  const liste = [];
  for (const niveau of niveaux) {
    for (const semestre of niveau.semestres) {
      // Un semestre contient soit des options (L3), soit directement des UE
      const groupes = semestre.options || [semestre];
      for (const groupe of groupes) {
        const option = semestre.options ? groupe : undefined;
        for (const ue of groupe.ues) {
          for (const matiere of ue.matieres) {
            liste.push({ niveau, semestre, option, ue, matiere });
          }
        }
      }
    }
  }
  return liste;
}

function vueRecherche(texte) {
  champ.value = texte;   // le texte cherché reste visible dans la barre
  const chemin = [...racine, { texte: "Recherche" }];
  const mots = normaliser(texte).split(" ").filter(mot => mot !== "");

  if (mots.length === 0) {
    afficherEtape("Recherche", chemin,
      `<p class="vide">Écris le nom d'une matière, par exemple « analyse 2 ».</p>`);
    return;
  }

  // Une matière est trouvée si son nom contient TOUS les mots tapés
  const resultats = toutesLesMatieres().filter(r => {
    const nom = normaliser(r.matiere.nom);
    return mots.every(mot => nom.includes(mot));
  });

  if (resultats.length === 0) {
    afficherEtape("Recherche", chemin,
      `<p class="vide">Aucune matière ne correspond à « ${echapper(texte)} ».
         Essaie avec moins de mots, ou parcours la liste depuis <a href="#/">le choix du niveau</a>.</p>`);
    return;
  }

  const lignes = resultats.map(r => {
    const contexte = r.niveau.nom + " · Semestre " + r.semestre.numero +
      (r.option ? " · " + r.option.nom : "") + " · " + compterSujets(r.matiere.id);
    return ligne(
      lien(r.niveau.id, r.semestre.numero, r.option && r.option.id, r.ue.id, r.matiere.id),
      r.matiere.nom, contexte);
  });
  const mot = resultats.length > 1 ? " résultats" : " résultat";
  afficherEtape("Recherche", chemin,
    `<section class="section"><h2>${resultats.length + mot} pour « ${echapper(texte)} »</h2>
       <ol class="liste-vertical">${lignes.join("")}</ol></section>`);
}

// Quand l'étudiant valide la recherche, on change simplement l'adresse :
// c'est ensuite "hashchange" (en bas du fichier) qui affiche les résultats.
formulaire.addEventListener("submit", evenement => {
  evenement.preventDefault();   // empêche le navigateur de recharger la page
  const texte = champ.value.trim();
  if (texte !== "") location.hash = "#/recherche/" + encodeURIComponent(texte);
});

// ---------- Le chef d'orchestre ----------

function afficherPage() {
  // "#/l1/1/mathematiques" devient ["l1", "1", "mathematiques"]
  const morceaux = location.hash.slice(1).split("/").filter(m => m !== "");

  // Page de recherche : "#/recherche/analyse%202"
  if (morceaux[0] === "recherche") {
    vueRecherche(decoder(morceaux[1] || ""));
    window.scrollTo(0, 0);
    return;
  }
  champ.value = "";   // on quitte la recherche : on vide la barre

  const [idNiveau, numSemestre, ...reste] = morceaux;

  // On descend dans les données, étage par étage.
  // (Si un étage manque, tous les suivants valent undefined.)
  const niveau = niveaux.find(n => n.id === idNiveau);
  const semestre = niveau && niveau.semestres.find(s => String(s.numero) === numSemestre);

  // Certains semestres (L3) proposent d'abord un choix d'option.
  let option;
  let source = semestre;   // l'objet qui contient la liste "ues"
  if (semestre && semestre.options) {
    const idOption = reste.shift();   // le morceau suivant est alors l'option
    option = semestre.options.find(o => o.id === idOption);
    source = option;
    if (idOption && !option) { pageIntrouvable(); return; }
  }

  const [idUe, idMatiere] = reste;
  const ue = source && source.ues && source.ues.find(u => u.id === idUe);
  const matiere = ue && ue.matieres.find(m => m.id === idMatiere);

  // Un morceau est dans l'adresse mais n'existe pas dans les données
  if ((idNiveau && !niveau) || (numSemestre && !semestre) ||
      (idUe && !ue) || (idMatiere && !matiere)) {
    pageIntrouvable();
    return;
  }

  // On affiche l'étape la plus profonde trouvée
  if (matiere) vueDocuments(niveau, semestre, option, ue, matiere);
  else if (ue) vueMatieres(niveau, semestre, option, ue);
  else if (option) vueUes(niveau, semestre, option);
  else if (semestre && semestre.options) vueOptions(niveau, semestre);
  else if (semestre) vueUes(niveau, semestre);
  else if (niveau) vueSemestres(niveau);
  else vueNiveaux();

  window.scrollTo(0, 0);
}

// Quand l'adresse change (clic sur un lien, bouton « retour »), on réaffiche.
window.addEventListener("hashchange", afficherPage);
afficherPage();
