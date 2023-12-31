const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    './src/data/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'overpass': ['Overpass', ...defaultTheme.fontFamily.sans],
        'undotted': ['Undotted', 'Overpass', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'xxs': '360px',
        'xs': '400px',
        '2xs': '500px',
      },
      height: {
        'screen': '100svh',
      },
      borderRadius: {
        '4xl': '2rem', // 32px
        '5xl': '2.5rem', // 40px
        '6xl': '3rem', // 48px
        '7xl': '4rem', // 64px
        '8xl': '5rem', // 80px
      },
      maxWidth: {
        'xxs': '16rem', // 256px
        'custom': '18rem', // 288px
        '8xl': '90rem' // 1440px
      },
      flexGrow: {
        '9999': '9999',
      }
    },
    colors: {
      'transparent': 'transparent',
      'white': '#FAF9F6',
      'black': '#1F1F21',
      'green': {
        '500': '#417C5E',
        '800': '#335645',
      }
    },
    fontSize: {
      'sm': '0.875rem', // 14px
      'base': '1rem', // 16px
      'lg': '1.125rem', // 18px
      'xl': '1.5rem', // 24px
      '2xl': '2.25rem', // 36px
      '3xl': '3.375rem', // 54px
      '4xl': '5.063rem', // 81px
      '5xl': '7.594rem', // 121.50px
      '3xl-scaling': 'clamp(2.25rem, 8vw, 4.5rem)',
      'h1': 'clamp(3.375rem, 9.5vw, 7.594rem)',
      'h2': 'clamp(3.375rem, 10vw, 7.594rem)',
      'h3': 'clamp(1.75rem, 4.5vw, 3.375rem)',
      'h4': 'clamp(1.75rem, 5vw, 2.25rem)',
    },
  },
  plugins: [],
}
