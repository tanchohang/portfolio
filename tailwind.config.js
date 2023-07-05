const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      // => @media (min-width: 576px) { ... }

      md: '960px',
      // => @media (min-width: 960px) { ... }

      lg: '1740px',
      // => @media (min-width: 1440px) { ... }
    },
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
          '0%': { transform: 'translateX(20%)' },

          '100%': { transform: 'translateX(0)' },
        },
        shrink: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(.6)' },
          '75%': { transform: 'scale(.3)' },

          '100%': { transform: 'scale(0)' },
        },

        blend: {
          '0%': { backgroundBlendMode: 'exclusion' },
          // '25%': { transform: 'rotate(-4deg)' },
          // '50%': { transform: 'rotate(0deg)' },
          // '75%': { transform: 'rotate(4deg)' },
          '100%': {
            backgroundBlendMode: 'multiply',
          },
          draw: {
            '100%': { strokeDashoffset: 700 },
          },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        polaroid: 'wiggle 1s ease 2, blend 3s linear',
        blend: 'blend 3s ease-out',
        opacity: 'opacity 3s ease-in 10ms',
        slideLeft: 'slideLeft 1200ms ease 0ms',
        slideRight: 'slideRight 1200ms ease 0ms',
        draw: 'draw 3s ease',
        delayBounce: 'bounce 1s 3s ease-in-out infinite',
        shrink: 'shrink .7s 2s linear',
      },
      colors: {
        mydark: '#02103A',
        mydarkblue: '#001724',
        mylightblue: '#8DB7CE',
        mypink: '#EAC7C7',
        mylight: '#F7F5EB',
        myskin: '#EAE0DA',
        mydarkgreen: '#022E3A',
        mygreen: '#B5D5C5',
        mypurple: '#B08BBB',
        myblack: '#404040',
        mynavy: '#02103A',

        mypallate1: '#F4D99A',
        // mypallate2: '#84D2C5',
        mypallate3: '#C27664',
        mypallate4: '#B05A7A',
        mypallate4: '#F48484',
      },
    },
  },
  plugins: [],
};
