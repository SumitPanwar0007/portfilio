/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    
      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }
  
        'md': '960px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    
    extend: {
      boxShadow: {
        '3xl': '5px 5px 50px -5px rgba(90,0, 0, 0.3)',
      },
      colors: {
        'strike-purple':'#944E87',
      },
    },
    fontFamily:{
    
    jura:['Jura','sans-serif'],
      mulish:['Mulish','sans-serif']
    }
  },
  plugins: [],
}

