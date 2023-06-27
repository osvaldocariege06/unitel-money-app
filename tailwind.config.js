/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './app/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: '#FDEEE9',
        main: '#E75525',
        mainDark: '#D24D0C',
        secondary: '#562583',

      }
    },
  },
  plugins: [],
}

