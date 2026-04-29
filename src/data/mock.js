// Project data — used by the homepage floating grid AND the portfolio page.
// Each project has its own portfolio section (id matches section).
export const projects = [
  {
    id: 1,
    title: "Project 01",
    slug: "project-01",
    tag: "Editorial",
    year: "2024",
    image: "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/a308f451-8274-42ef-0263-6ed4708bf900/public",
  },
  {
    id: 2,
    title: "Project 02",
    slug: "project-02",
    tag: "Commercial",
    year: "2024",
    image: "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/81e7573e-2887-4f94-9d84-eccb16a05300/public",
  },
  {
    id: 3,
    title: "Project 03",
    slug: "project-03",
    tag: "Fashion",
    year: "2023",
    image: "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/f6134049-4925-41da-52e7-7f9db78df200/public",
  },
  {
    id: 4,
    title: "Project 04",
    slug: "project-04",
    tag: "Portrait",
    year: "2023",
    image: "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/e9442a45-9177-4f18-1836-e6934545c300/public",
  },
  {
    id: 5,
    title: "Project 05",
    slug: "project-05",
    tag: "Documentary",
    year: "2023",
    image: "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/a0b406fa-0f55-4c5d-d07c-d7a93a3a8d00/public",
  },
  {
    id: 6,
    title: "Project 06",
    slug: "project-06",
    tag: "Architecture",
    year: "2022",
    image: "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/16ccbb79-5684-461b-f192-595536519300/public",
  },
  // 7th tile — the index/CTA tile, points to the full portfolio page
  {
    id: 7,
    title: "All Work",
    slug: "all-work",
    tag: "Index",
    year: "—",
    image: "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/99993676-d0c4-4748-36a6-a891afe22f00/public",
  },
];

// Top-level nav — wired to internal pages
export const navItems = [
  { label: "ABOUT",     page: "about" },
  { label: "PORTFOLIO", page: "portfolio" },
  { label: "CONTACT",   page: "contact" },
  { label: "HOME",      page: "home" },
];

// Helper for portfolio carousels — 13 placeholder images per project, seeded for variety
export const buildImages = (seed) =>
  Array.from({ length: 13 }, (_, i) => `https://picsum.photos/seed/${seed}-${i}/1400/900`);
