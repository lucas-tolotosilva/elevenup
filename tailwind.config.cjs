/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Bebas Neue, Poppins, sans-serif'
      },
      colors: {
        blue: {
          600: '#025ead',
          800: '#003868'
        }, 
        pink: {
          800: '#610950',
          500: '#ff0ed1'
        },
        black: {
          900: '#222222'
        },
        gray: {
          200: '#ececec'
        } 
      },
      screens: {
        'sm': '320px',
        // => @media (min-width: 640px) { ... }
  
        'md': '760px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
      }
    },
  },
  plugins: [],
}
