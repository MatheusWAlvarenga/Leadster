/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        blue: {
          default:'#1E8DFF',
          dark: '#007EFF',
          light: '#0094FF',
          standard: '#00B1F5',
        },

        base: {
          title:'#1C3C50',
          subtitle:'#71839E',
          locked:'#2C4859',

          icon:{
            default: '#F7F8FB',
            hover: '#1DB0EE',
            text: '#838EAB'
          },

        },

        line: {
          light: '#F2F4F8',
          dark: '#C8D4DD'
        },

        highlight: '#F0F8FF',
        detail: '#2C83FB',
        yellow: '#FFC400',
        
        btn: {
          border: '#718591'
        }
      },
      fontFamily: {
        primary:['var(--font-plus-jakarta-sans)'] ,
      },

      screens: {
        'phone': '480px',         // For phones and smaller devices
        'tablet': '820px',        // For tablets and larger phones
        'desktop': '1024px',      // For desktops and larger tablets
        'monitor': '2440px',      // For large desktops and monitors
      },
    
    
    },
  },
  plugins: [],
}
