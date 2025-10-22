# Shamil Akhmadyshev — Personal Portfolio

## About

A single-page portfolio for a frontend developer with support for three languages (en/cs/ru), responsive design, dark mode, and smooth section animations.

- **React + TypeScript**
- **Tailwind CSS**
- **i18n (en/cs/ru)**
- **SEO, sitemap, robots.txt**
- **Section reveal animation**
- **Sticky sidebar on desktop**
- **Modal windows for projects**

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Structure

- `src/App.tsx` — main component, all logic and layout.
- `src/components/Section.tsx` — sections, reveal animation.
- `src/data/` — data for experience, projects, languages, education.
- `src/i18n.ts` — translation system.
- `public/` — static files, images, sitemap, robots.txt.
- `index.html` — entry point.
- `tailwind.config.js`, `postcss.config.js` — style configs.
- `vite.config.ts` — build config.

## Translations

All texts are stored in JS objects, language is chosen automatically or manually.  
To add a new language, just extend the NAV, UI objects and data.

## Features

- Sticky sidebar only on desktop (`md:`).
- Section reveal animation via Intersection Observer.
- Modal windows without inner scroll.
- Projects, experience, education — editable in `/src/data/`.

## Deploy

The built project is in the `dist/` folder.  
You can deploy it to any static hosting (Vercel, Netlify, GitHub Pages, etc).
