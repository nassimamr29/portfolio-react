// Toutes les informations modifiables sont regroupées ici.
// Ne pas ajouter de compétences ou d'expériences sans les vérifier.
export const profile = {
  name: 'Nassim AMROUCHE',
  email: 'amrouche.nassim@icloud.com',
  gitlab: 'https://gitlab.sorbonne-paris-nord.fr/12208737/mongit',
  linkedin: 'https://www.linkedin.com/in/nassim-amrouche0/',
  school: 'Université Sorbonne Paris Nord',
  degree: 'Master Informatique · Parcours P2S',
  internship: 'Stage de fin d’études · 5 à 6 mois · dès mars 2027',
  // Ajoutez votre PDF RÉCENT dans public/ puis renseignez par exemple '/CV_Nassim_AMROUCHE_2027.pdf'.
  // Les anciens PDF datés de 2025 ont été retirés volontairement.
  cvUrl: '',
};

export const skills = [
  {
    number: '01',
    title: 'Systèmes & infrastructure',
    description: 'Comprendre, configurer et faire communiquer les environnements.',
    icon: 'server',
    tools: ['Linux', 'Administration système', 'Réseaux', 'Virtualisation', 'SSH'],
  },
  {
    number: '02',
    title: 'DevOps & automatisation',
    description: 'Des environnements reproductibles et des déploiements plus fiables.',
    icon: 'git',
    tools: ['Git / GitLab', 'Docker', 'Docker Compose', 'Ansible', 'CI/CD'],
  },
  {
    number: '03',
    title: 'Développement',
    description: 'Concevoir des applications et comprendre leur exécution de bout en bout.',
    icon: 'code',
    tools: ['Python', 'Java', 'JavaScript', 'Node.js', 'SQL / PostgreSQL'],
  },
  {
    number: '04',
    title: 'Sécurité & cloud',
    description: 'Des sujets approfondis dans le parcours P2S et en autoformation.',
    icon: 'shield',
    tools: ['Cybersécurité (formation)', 'Systèmes distribués', 'Azure (notions)', 'Terraform (initiation)', 'Détection d’intrusions (formation)'],
  },
];

export const projects = [
  {
    id: 'infra',
    number: '01',
    category: 'INFRASTRUCTURE · AUTOMATISATION',
    title: 'Infrastructure virtualisée avec Ansible',
    short: 'Provisionnement de machines virtuelles et automatisation de leur configuration dans un environnement Linux.',
    context: 'Projet d’infrastructure réalisé à partir de Vagrant, VirtualBox et Ansible.',
    highlights: [
      'Création d’un environnement virtualisé reproductible.',
      'Automatisation des tâches de configuration avec Ansible.',
      'Mise en pratique de l’administration Linux et des échanges entre machines.',
    ],
    stack: ['Linux', 'Vagrant', 'VirtualBox', 'Ansible'],
    kind: 'infra',
    images: [],
    link: '', // Renseigner l’URL du dépôt public lorsqu’il sera publié.
    featured: false,
  },
  {
    id: 'docker',
    number: '02',
    category: 'DEVOPS · CONTENEURISATION',
    title: 'API REST conteneurisée',
    short: 'Mise en place d’une application REST et d’une base de données avec Docker Compose.',
    context: 'Projet pratique sur l’isolation des services et leurs interactions réseau.',
    highlights: [
      'Conteneurisation de l’application et de sa base de données.',
      'Définition des services et de leur configuration dans Docker Compose.',
      'Expérimentation des communications entre composants.',
    ],
    stack: ['Docker', 'Docker Compose', 'API REST', 'Base de données'],
    kind: 'docker',
    images: [],
    link: '', // Ajouter le dépôt public vérifié.
    featured: false,
  },
  {
    id: 'megaflix',
    number: '03',
    category: 'DÉVELOPPEMENT · BASES DE DONNÉES',
    title: 'MegaFlix',
    short: 'Application de bureau de gestion de films et séries développée avec Python, PyQt5 et PostgreSQL.',
    context: 'Projet applicatif mobilisant une interface graphique et une base de données relationnelle.',
    highlights: [
      'Développement d’une interface graphique avec PyQt5.',
      'Utilisation de PostgreSQL pour la gestion des données.',
      'Structuration des interactions entre l’interface et la persistance.',
    ],
    stack: ['Python', 'PyQt5', 'PostgreSQL'],
    kind: 'image',
    images: ['/images/megaflix.webp', '/images/megaflix-2.webp', '/images/megaflix-3.webp'],
    link: 'https://github.com/nassimamr29/Projects/tree/main/MegaFlix',
    featured: false,
  },

];
