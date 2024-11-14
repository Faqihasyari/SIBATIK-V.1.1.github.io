/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./public/**/*.{html,js}',"./node_modules/flowbite/**/*.js"],

  theme: {
    extend: {
      fontFamily: { inter: ['Inter'] },
      colors: {
        ring: '#4D4D4D',
        kategori: '#F9F5FF',
        colorpagination: '#5603ad',
        pagination: '#757bc8',
        sibatik: '#2196f3',
        colordark: '#090D1F',
        fontdark: '#C0C5D0',
        custom: '#667085'
      },
      animation: {
        'slide-in-left': 'slideInLeft 1s ease-out forwards',
        'slide-in-right': 'slideInRight 1s ease-out forwards',
        'slide-in-home': 'slideInHome 1s ease-out forwards',
        
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInHome: {
          '0%': { transform: 'translateX(400%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        }
      },

      height: {
        'full': '100%',
        '200': '200px',
      },
      width: {
        '320': '320px',
      }
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        '*': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
        },
        '*::-webkit-scrollbar': {
          'display': 'none',
        },
      });
    },
    // require('tailwind-scrollbar-hide'),
    // require('daisyui')

  ],
}

