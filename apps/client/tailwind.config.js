/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "max-content 1fr max-content",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
