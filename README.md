# LYNXX

A three-page portfolio site with a parallax-panning landing page and editorial-style inner pages. Built with Vite + React + Tailwind + GSAP.

## Project structure

```
lynxx-site/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
└── src/
    ├── main.jsx              # Vite entry
    ├── App.jsx               # Root component, page state
    ├── index.css             # Tailwind + global styles + watermark
    ├── components/
    │   ├── Cursor.jsx        # Custom GSAP cursor (homepage only)
    │   ├── EmailModal.jsx    # Optional email gate (not currently mounted)
    │   ├── Footer.jsx        # Shared footer for inner pages
    │   ├── Header.jsx        # Top nav + full-screen menu (adapts to dark/light)
    │   ├── ProjectGrid.jsx   # Homepage parallax-panning project tiles
    │   └── ProjectSection.jsx# One project's title row + 13-photo carousel
    ├── pages/
    │   ├── About.jsx         # Photo left, copy right
    │   ├── Portfolio.jsx     # 6 projects, each with a horizontal carousel
    │   └── Contact.jsx       # Email line + Instagram/Facebook icons
    ├── data/
    │   └── mock.js           # Project data, nav items, image builder
    └── utils/
        └── animations.js     # Reusable GSAP helpers
```

## Local setup

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

The build output goes to `dist/`.

## Deploy

### Vercel (easiest)
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com), sign in with GitHub
3. "Add New Project" → pick the repo → Vercel auto-detects Vite → Deploy
4. Every push to `main` redeploys automatically

### Netlify
1. Push to GitHub
2. [netlify.com](https://netlify.com) → "Add new site" → "Import existing project"
3. Build command: `npm run build`, publish directory: `dist`

### Custom domain
After deploying, add your domain in the host's project settings and point your DNS at their nameservers.

## Customizing

- **Project content** — edit `src/data/mock.js` (titles, tags, years, images)
- **Real photos in carousels** — replace the `buildImages()` helper in `mock.js` with arrays of your actual image URLs per project
- **About copy / portrait** — `src/pages/About.jsx`
- **Contact email + socials** — `src/pages/Contact.jsx`
- **Logo / brand color** — `src/components/Header.jsx` (the `lynxx` span uses `#ff3333`)
- **Watermark text** — `src/index.css` (`.lynxx-background`) + the JSX in `App.jsx`
- **Floating tile positions** — `baseProjects` array in `src/components/ProjectGrid.jsx`
