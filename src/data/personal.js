const base = import.meta.env.BASE_URL

export const personal = {
  name: 'Skander Jeddi',
  tagline: 'Développeur orienté produit · Algorithmique, systèmes et interfaces web performantes',
  taglineEn: 'Product-minded developer · Algorithms, systems, and high-performance web interfaces',
  avatar: `${base}avatar.jpg`,
  avatarPosition: '50% 24%', // adjust to center your face better
  email: 'skanderjeddi@fastmail.com',
  location: 'Labruguière, France',
  bio: `Ingénieur logiciel avec un double master en mathématiques et informatique (cryptographie) à l’Université Paris Cité.
J’aime construire des produits utiles, en partant d’une base solide : architecture claire, performance mesurée et qualité de code durable.
Je navigue aussi bien entre le bas niveau (C++/Rust), l’algorithmique avancée et le développement front moderne avec Vue.js.`,
  bioEn: `Software engineer with a dual master’s degree in Mathematics and Computer Science (Cryptography) from Université Paris Cité.
I enjoy building useful products on top of solid foundations: clear architecture, measured performance, and maintainable code quality.
I’m comfortable across low-level systems (C++/Rust), advanced algorithms, and modern frontend development with Vue.js.`,
  interests: [
    'Développement open-source',
    'Algorithmique & optimisation',
    'Intelligence artificielle',
    'Compétitions de programmation',
    'Visualisation de données',
    'Outillage développeur',
  ],
  interestsEn: [
    'Open-source development',
    'Algorithms & optimization',
    'Artificial intelligence',
    'Programming competitions',
    'Data visualization',
    'Developer tooling',
  ],
  social: {
    github: 'https://github.com/skanderjeddi',
    linkedin: 'https://linkedin.com/in/skanderjeddi', // TODO: update if different
    website: 'https://skanderjeddi.dev', // TODO: update with real URL
  },
  cta: {
    projectsLabel: 'Voir mes projets',
    projectsLabelEn: 'View my projects',
    projectsTarget: '#projects',
    cvLabel: 'Télécharger mon CV',
    cvLabelEn: 'Download CV',
    cvHref: `${base}cv.pdf`,
    cvHrefEn: `${base}cv.pdf`,
  },
  skills: [
    // Languages
    'C/C++',
    'Rust',
    'Python',
    'Java',
    // Web
    'Vue 3',
    'TypeScript',
    'JavaScript',
    'D3.js',
    'Tailwind CSS',
    'HTML/CSS',
    // Systems & tooling
    'Git',
    'Make',
    'Linux',
    // CS
    'Algorithmique avancée',
    'Programmation concurrente',
    'Systèmes distribués',
    'Cryptographie',
  ],
  languages: ['Français', 'Anglais', 'Arabe', 'Espagnol'],
  languagesEn: ['French', 'English', 'Arabic', 'Spanish'],
}
