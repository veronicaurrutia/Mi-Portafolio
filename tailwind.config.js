/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    darkMode: 'class',
    extend: {
      colors: {
        darkGray: '#2E2E2E',
        customBrown: '#A78976',
         brownDrak:' rgb(46, 46, 46)',
         browWhite:'rgba(167, 137, 118, 1)',
         darkFond:'#292929',
         darkStill:'##1F1F1F',
      },
      animation: {
        typing: 'typing 4s steps(28, end) infinite alternate',
        blink: 'blink 0.7s step-end infinite',
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
    },
  },
  
  plugins: [],
};
