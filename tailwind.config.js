/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    darkMode: 'class',
    extend: {
      colors: {
        darkGray: '#2E2E2E',
        customBrown: '#A78976',
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
