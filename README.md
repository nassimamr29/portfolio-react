# Portfolio — Nassim AMROUCHE

Portfolio professionnel construit en **React**, pensé pour un profil Master 2 Informatique (P2S) orienté systèmes, DevOps, Cloud et sécurité.

## Démarrer en local

Prérequis : Node.js récent (20 ou 22 recommandé) et npm.

```bash
npm ci
npm start
```

Le site s'ouvre sur `http://localhost:3000`.

Pour produire les fichiers à déployer :

```bash
npm run build
```

Sur Vercel : framework **Create React App**, build command `npm run build`, output directory `build`. Le site est entièrement statique : aucune clé API ni backend requis.

## Personnalisation

- **`src/data.js`** : nom, email, GitLab, LinkedIn, spécialisation, technologies, projets et URL du CV.
- **`src/components/`** : composants React (Accueil, Profil, Compétences, Projets, Parcours, Contact).
- **`src/App.css`** : palette, typographie, mise en page responsive, animations et états.
- **`public/images/`** : images compressées au format WebP.
- **`public/index.html`** : titre et métadonnées de référencement.

### 1. Ajouter ton CV récent

Les deux PDF d'alternance 2025 présents dans le ZIP d'origine ont été **supprimés**, car ils ne correspondent plus au Master 2 P2S / stage 2027.

1. Placer ton CV à jour dans `public/CV_Nassim_AMROUCHE_2027.pdf`.
2. Ouvrir `src/data.js`.
3. Modifier `cvUrl: ''` en `cvUrl: '/CV_Nassim_AMROUCHE_2027.pdf'`.

Le site affichera alors **Télécharger mon CV**, sans aucune URL cassée. En attendant, il affiche **Demander mon CV** (email de contact).

### 2. Vérifier / publier les dépôts des projets

- `MegaFlix` conserve son lien de dépôt GitHub déjà présent dans le portfolio original.
- Le projet **Infrastructure virtualisée avec Ansible** et le projet **API REST conteneurisée** proviennent des éléments de parcours déjà communiqués ; leurs URLs de dépôt ne sont pas publiques/confirmées. Le code laisse donc `link: ''` sans inventer de lien.
- Les cartes `ChatBot` et `2048` ont été retirées à la demande, ainsi que leurs images inutilisées.

Lorsque les dépôts sont accessibles, renseigner le champ `link` de chaque projet dans `src/data.js`. Le lien de profil GitLab est `https://gitlab.sorbonne-paris-nord.fr/12208737/mongit` et le lien LinkedIn est `https://www.linkedin.com/in/nassim-amrouche0/`. Ils sont cliquables via les icônes / liens du site. Si le dépôt GitLab est privé, certains visiteurs devront se connecter pour le consulter. Mettre à jour les descriptions si les détails réels diffèrent des résumés.

### 3. Affiner tes compétences

Les technologies sont présentées par catégorie, avec les niveaux "notions", "initiation" ou "formation" indiqués quand nécessaire. Vérifier leur formulation avant publication.

## Principaux changements

- Identité visuelle sobre, sombre, avec touches terminal/devtools.
- Navigation adaptée aux smartphones.
- Accueil explicite sur le stage de mars 2027.
- Sections structurées pour la lecture par des recruteurs.
- Pages projet en fenêtres accessibles (Échap, focus, navigation clavier) avec galerie.
- Suppression de la photo contenant des métadonnées GPS et des anciens CV.
- Compression de captures d'écran en WebP.
- Suppression des références HTML aux fichiers locaux.
- SEO de base, libellés accessibles et prise en charge de `prefers-reduced-motion`.

## À noter

Le projet reste sur **Create React App** pour conserver la compatibilité avec le projet fourni sans effectuer de migration risquée pendant la refonte. Une migration ultérieure vers Vite pourra être faite séparément. Le verrouillage des dépendances (`package-lock.json`) provient de la version originale.
