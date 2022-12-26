/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default: 'Poppins, sans-serif',
        title: 'Bebas Neue, sans-serif'
      },
      fontSize: {
        lg: '11rem', 
        sm: '1rem'
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
        },
        white: {
          200: 'rgba(250, 250, 250, 0.5)'
        } 
      },
      screens: {
        'sm': '320px',
        // => @media (min-width: 640px) { ... }
  
        'md': '760px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
      },
      backgroundImage: {
        videoDesktop: "url('/videobg.mp4')",
        videoMobile:  "url('/videobg-mobile.mp4')",
      },
    },
    
  },
  plugins: [],
}
