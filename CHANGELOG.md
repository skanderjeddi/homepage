# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Added full bilingual support (English/French) with a persistent language toggle and localized UI labels.
- Added locale-aware SEO metadata updates at runtime for title and Open Graph descriptions.
- Added EN/FR content variants in personal, projects, and CV data with backwards-compatible fallbacks.
- Added project repository metadata (status, language, stars, updated date) to project cards.

### Changed

- Refined dark theme palette to neutral zinc tones while preserving subtle accent parity for key elements.
- Improved avatar framing controls via data-driven `avatarPosition`.
- Updated README to reflect the actual portfolio architecture, scripts, and customization workflow.

## [0.1.0] - 2026-02-21

### Added
- Project audit completed for repository state, source structure, and installed dependencies.
- Added required dependencies for portfolio implementation: Vue Router, Pinia, and Tailwind CSS.
- Initialized project changelog using Keep a Changelog format.
- Added editable portfolio data sources in `src/data/personal.js`, `src/data/projects.js`, and `src/data/cv.js`.
- Added responsive navigation with hamburger menu, smooth section scrolling, and persisted dark mode toggle.
- Added Hero and About sections sourced from portfolio data, including avatar, CTAs, skills badges, and interests.
- Added dynamic Projects section with reusable project cards, tech badges, and GitHub/live demo links.
- Added CV section with a vertical timeline, work/education differentiation, and downloadable placeholder PDF support.
- Added Contact section and minimal footer using centralized social/email data.
- Added entrance transitions, SEO/OG metadata, and accessibility improvements (skip link and ARIA enhancements).
