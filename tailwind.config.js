/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        bebas: ["'Bebas Neue'", "sans-serif"],
        caveat: ["'Caveat'", "cursive"],
        cormorant: ["'Cormorant Garamond'", "'Times New Roman'", "serif"],
      },
    },
  },
  plugins: [],
}
