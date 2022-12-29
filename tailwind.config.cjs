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
        //lg: '11rem', 
        //sm: '1.5rem'
      },
      colors: {
        blue: {
          600: '#025ead',
          800: '#003868',
          900: '#012f57'
        }, 
        pink: {
          50: 'rgba(255, 14, 209, 0.25)',
          500: '#ff0ed1',
          600: '#C60CA2',
          800: '#610950'
          
        },
        black: {
          900: '#222222'
        },
        gray: {
          200: '#ececec'
        },
        white: {
          50: 'rgba(255, 255, 255, 0)',
          100: '#ffffff',
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
        //'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(circle, rgba(255,14,209,0.6) 5%, rgba(255,14,209,0.05)52%, rgba(250, 250, 250, 0.5) 90%)',
        'gradient-radial2': 'radial-gradient(circle, rgba(255,14,209,0.1) 5%, rgba(255,14,209,0.05)52%, rgba(250, 250, 250, 0.5) 90%)',
        'gradient-radial-blue': 'radial-gradient(circle, rgba(0,56,104,0.5) 5%, rgba(45,91,130,0.05) 52%, rgba(250,250,250,0.5) 100%)',
        'gradient-radial-blue2': 'radial-gradient(circle, rgba(0,56,104,0.1) 5%, rgba(45,91,130,0.05) 52%, rgba(250,250,250,0.5) 90%)',
        'white-gradient': 'linear-gradient(138deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15449929971988796) 64%, rgba(250,250,250,1) 100%)'
      },
    },
   },
  plugins: [],
}