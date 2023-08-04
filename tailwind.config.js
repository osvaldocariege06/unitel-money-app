/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './app/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        textDark: '#313234',
        textLight: '#CDCDCD',
        primary: '#F5CA48',
        secondary: '#F26C68',
        price: '#E4723C',
      },
    },
  },
  plugins: [],
}
