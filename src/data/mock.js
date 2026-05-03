// Project data — used by the homepage floating grid AND the portfolio page.
// Each project has its own portfolio section (id matches section).
export const projects = [
  {
    id: 1,
    title: "Project 01",
    slug: "project-01",
    tag: "Editorial",
    year: "2024",
    image: "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/000d671b-a1d5-4b32-95b5-1c19b8577800/public",  // homepage tile
    images: [                              // ←: portfolio carousel
      "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/2257fdef-2aea-4426-914c-d30012476200/public",
      "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/4fab7a48-e9bb-4b84-b275-dae72d578c00/public",
      "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/812203a3-436c-44ef-6fda-d73ecf687c00/public",
      "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/66048a4a-d681-4a74-bd2f-c50fcba09900/public",
      "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/4e9a1368-5a76-476b-ee76-9341814f9400/public",
      "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/fa6c98b3-afd0-447d-9405-a8314490f300/public",
      "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/76c4b4f3-4a62-4eab-70c0-4ceca84ed000/public",
      "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/0e986a09-0f35-45b3-8f22-1f316a186e00/public",
      "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/b6e525f2-542e-46e7-0e9a-34722cbd4600/public",
      "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/cf5493d2-40d0-4e95-e7c3-37272317b000/public",
    ],
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
export const buildImages = (projectId) => {
  const project = projects.find((p) => p.id === projectId);
  return project?.images ?? [];
};
