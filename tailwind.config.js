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
          gray: {
            title: '#77848C',
            primary: '#D0DEE7',
            second: '#E8EEF3'
          },
          yellow: {
            title: '#B8A136',
            primary: '#FFF1A0',
            second: '#FFF8D0'
          },
          blue: {
            title: '#0087EF',
            primary: '#A1D9FF',
            second: '#C2E6FF'
          },
          green: {
            title: '#00B58A',
            primary: '#9FEFDF',
            second: '#C2F4EA'
          },
        },

        video: {
          background: '#2D2D2D',
          slider: '#FF5549',
          icon: {
            background: '#737373'
          }
        }
      },
      fontFamily: {
        primary:['var(--font-plus-jakarta-sans)'] ,
      },

      screens: {
        'phone': '480px',         // For phones and smaller devices
        'tablet': '820px',        // For tablets and larger phones
        'desktop': '1124px',      // For desktops and larger tablets
        'monitor': '2440px',      // For large desktops and monitors
      },
    
    
    },
  },
  plugins: [],
}
