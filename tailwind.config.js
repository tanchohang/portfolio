/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bungee: 'bungee',
      },
      keyframes: {
        opacity: {
          '0%': { opacity: 0 },

          '100%': { opacity: 1 },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-100%)' },

          '100%': { transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(200%)' },

          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        opacity: 'opacity 3s ease-in 10ms',
        slideLeft: 'slideLeft 1200ms ease 0ms',
        slideRight: 'slideRight 1200ms ease 0ms',
      },
      colors: {
        myblue: '#A0C3D2',
        mypink: '#EAC7C7',
        mylight: '#F7F5EB',
        myskin: '#EAE0DA',
        mygreen: '#B5D5C5',
        mypurple: '#B08BBB',
        myblack: '#404040',
      },
    },
  },
  plugins: [],
};
