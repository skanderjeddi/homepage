export const projects = [
  {
    id: 1,
    title: 'unbundle',
    titleEn: 'unbundle',
    titleFr: 'unbundle',
    description:
      'A clean, ergonomic Rust library for extracting video frames, audio tracks, and subtitles from media files via FFmpeg. Features a type-safe API, lazy streaming iterators, progress callbacks, cancellation tokens, and optional hardware-accelerated decoding. Published on crates.io.',
    descriptionFr:
      'Une librairie Rust claire et ergonomique pour extraire des images vidéo, pistes audio et sous-titres via FFmpeg. API type-safe, itérateurs lazy, callbacks de progression, tokens d’annulation et décodage accéléré optionnel. Publiée sur crates.io.',
    tags: ['Rust', 'FFmpeg', 'Systems Programming', 'Open Source', 'crates.io'],
    github: 'https://github.com/skanderjeddi/unbundle',
    demo: 'https://docs.rs/unbundle',
    demoLabel: 'docs.rs',
    featured: true,
  },
  {
    id: 2,
    title: 'Portfolio Personnel',
    titleEn: 'Personal Portfolio',
    titleFr: 'Portfolio Personnel',
    description:
      'Ce site — conçu avec Vue 3, Vite et Tailwind CSS. Architecture orientée données : tout le contenu est découplé des composants et éditable depuis /src/data. Dark mode, responsive, animations au scroll.',
    descriptionEn:
      'This website — built with Vue 3, Vite, and Tailwind CSS. Data-oriented architecture: all content is decoupled from components and editable from /src/data. Dark mode, responsive layout, and scroll animations.',
    tags: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/skanderjeddi/', // TODO: add repo URL once public
    demo: null,
    featured: true,
  },
]
