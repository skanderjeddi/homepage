# Skander Jeddi — Portfolio

Personal portfolio website built with Vue 3 + Vite, fully data-driven and bilingual (FR/EN).

## Live Site

- https://skanderjeddi.github.io/homepage/

## Tech Stack

- Vue 3 (Composition API, `<script setup>`)
- Vue Router
- Pinia
- Tailwind CSS v4
- TypeScript

## Features

- Bilingual UI with persistent language toggle (French / English)
- Dark mode with persistent preference
- Responsive navigation with mobile menu and smooth scrolling
- Data-driven sections (Hero, About, Projects, CV, Contact, Footer)
- CV download from `public/cv.pdf`
- SEO metadata updated dynamically based on selected language

## Quick Start

```sh
npm install
npm run dev
```

App runs at `http://localhost:5173` by default.

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Type-check + production build
- `npm run build-only` — Production build only
- `npm run preview` — Preview production build locally
- `npm run type-check` — Run Vue TypeScript checks
- `npm run lint` — Run linters

## Customize Content (Main Entry Point)

Most personalization is done in `src/data/`:

- `src/data/personal.js`
  - Name, tagline, bio, avatar, social links, CTA labels, skills, interests
  - Language-specific variants (`*En` fields)
  - `avatarPosition` to fine-tune image framing
- `src/data/projects.js`
  - Project cards and links
- `src/data/cv.js`
  - CV timeline entries (work/education)
- `src/data/i18n.js`
  - UI labels and section copy for EN/FR

## Assets

- Avatar image: `public/avatar.jpg`
- CV file: `public/cv.pdf`

## Project Structure

```text
src/
  components/
  data/
  router/
  stores/
  views/
```

## Notes

- If language toggle changes text but not metadata, ensure JavaScript is enabled (metadata updates at runtime).
- If CV download opens HTML, verify the file exists at `public/cv.pdf` and links use lowercase `/cv.pdf`.
