/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/artikel.html',
    './templates/posting-artikel.html',
    './static/**/*.{html,js,ts,jsx,tsx}',  
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}