/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    'src/components/**/*.{js,ts,jsx,tsx,mdx}',
    'src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: '1.25rem',
      base: '1.5rem',
      lg: '1.75rem',
      xl: '2rem',
      '2xl': '2.5rem',
      '3xl': '3.5rem',
      '4xl': '5.5rem',
      '5xl': '7.5rem',
      '6xl': '9.5rem',
      '7xl': '11rem',
      '8xl': '13.5rem',
      '9xl': '14rem',
    },
    extend: {
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
        'indigo-dye': '#254e70',
        'melon': '#ffa69e',
        'bright-pink': "#FD5277",
        'tiffany-blue': "#9ACEBC",
        'bistre': "#251605",
        'almond': "#f2e5d7",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
      spacing: {
        100: '35rem',
        125: '40rem',
      }
    },
    animation: {        
      fadeIn: 'fadeIn 1s ease-out',  
      scroll: 'scroll 20s linear infinite',    
    },      
    keyframes: {        
      fadeIn: {          
        '0%': { opacity: '0', transform: 'translateY(50px)' },          
        '100%': { opacity: '1', transform: 'translateY(0)' },        
      },  
      scroll: {          
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },        
      },    
    },
  },
  plugins: [],
};