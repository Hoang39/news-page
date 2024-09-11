const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary_color: '#de8ebe',
        hover_primary_color: '#ca76aa'
      },
      fontFamily: {
        primary: ["Coiny", "cursive"]
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}