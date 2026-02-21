// Timeline entries — most recent first
export const cv = [
  {
    id: 1,
    type: 'work', // 'work' | 'education'
    title: "Stage de fin d'études — Développeur C++ & Web",
    titleEn: 'Final Internship — C++ & Web Developer',
    organization: '2SB',
    period: 'Juin 2025 – Décembre 2025',
    location: 'France',
    highlights: [
      "Conception d'un wrapper C++ autour de yyjson offrant une API sécurisée et performante, migration complète depuis un système basé sur des macros C.",
      'Intégration de D3.js avec un programme principal C++ pour la visualisation de données (graphiques, multi-datasets).',
      "Refonte et optimisation du système de build (Makefiles), résolution d'un bug de régression bloquant multi-plateforme.",
      "Correction d'une implémentation défectueuse de multidrawing pour l'affichage simultané de plusieurs datasets.",
    ],
    highlightsEn: [
      'Designed a C++ wrapper around yyjson with a safe and high-performance API, fully migrating from a macro-based C system.',
      'Integrated D3.js with a main C++ program for data visualization (charts, multi-datasets).',
      'Refactored and optimized the build system (Makefiles), fixing a blocking cross-platform regression bug.',
      'Fixed a broken multidrawing implementation for simultaneous multi-dataset rendering.',
    ],
    tags: ['C++', 'D3.js', 'Make', 'yyjson', 'Visualisation de données'],
  },
  {
    id: 2,
    type: 'education',
    title: 'Double Master — Mathématiques & Informatique (Cryptographie)',
    titleEn: 'Dual Master — Mathematics & Computer Science (Cryptography)',
    organization: 'Université Paris Cité',
    period: 'Septembre 2022 – Décembre 2025',
    location: 'Paris, France',
    highlights: [
      'Spécialisation en cryptographie, systèmes distribués et algorithmique avancée.',
      "Rédaction d'un article académique sur l'algorithme de Lenstra (factorisation) avec implémentation et analyse des améliorations, sous la direction de Pascal Molin.",
    ],
    highlightsEn: [
      'Specialization in cryptography, distributed systems, and advanced algorithms.',
      'Wrote an academic paper on Lenstra factorization algorithm with implementation and analysis of improvements under supervision of Pascal Molin.',
    ],
    tags: ['Cryptographie', 'Algorithmique', 'Systèmes distribués', 'Recherche'],
  },
  {
    id: 3,
    type: 'education',
    title: 'Double Licence — Mathématiques & Informatique',
    titleEn: 'Dual Bachelor — Mathematics & Computer Science',
    organization: 'Université Paris Cité',
    period: 'Septembre 2019 – Juin 2022',
    location: 'Paris, France',
    highlights: [
      'Mention Bien.',
      'Solides fondations en algorithmique, structures de données, programmation bas-niveau et mathématiques discrètes.',
    ],
    highlightsEn: [
      'Graduated with honors.',
      'Strong foundations in algorithms, data structures, low-level programming, and discrete mathematics.',
    ],
    tags: ['Algorithmique', 'C', 'Java', 'Python', 'Mathématiques'],
  },
]
