/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-text": "#02070d",
        "light-background": "#fbfcfe",
        "light-primary": "#3770d2",
        "light-secondary": "#e68ed5",
        "light-accent": "#da5d78",
        "dark-text": "#f2f7fd",
        "dark-background": "#010204",
        "dark-primary": "#2d66c8",
        "dark-secondary": "#71195f",
        "dark-accent": "#a22540",
        linearPrimaryAccent: "linear-gradient(#3770d2, #da5d78)",
      },
    },
  },
  plugins: [require("daisyui")],
};
