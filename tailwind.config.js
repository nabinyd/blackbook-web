/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jet': '#333333',
        'dark-jet': '#222831',
        'background-color': '#121212',
      },
      height: {
        'screen-50': '50vh',
        'screen-75': '75vh',
        'screen-90': '90vh',
        'custom-300': '300px',
      },
      width: {
        'screen-50': '50vw',
        'screen-75': '75vw',
        'screen-90': '90vw',
        'custom-300': '300px',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      })
    }),
    require('tailwind-scrollbar')

  ],
}
