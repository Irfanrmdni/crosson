const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        'darkBlue': '#001E6C',
        'blue': '#035397',
        'orange': '#E8630A',
        'yellow': '#FCD900',
        'grey': '#818181',
      },

    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.heading-1': {
          fontSize: '60px',
          fontWeight: '400',
          lineHeight: '70.31px'
        },
        '.heading-2': {
          fontSize: '48px',
          fontWeight: '400',
          lineHeight: '60px'
        },
        '.heading-3': {
          fontSize: '30px',
          fontWeight: '400',
          lineHeight: '38px'
        },
        '.heading-4': {
          fontSize: '24px',
          fontWeight: '400',
          lineHeight: '32px'
        },
        '.heading-5': {
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '28px'
        },
      })
    })
  ],
}
