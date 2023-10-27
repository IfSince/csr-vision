const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Overpass', ...defaultTheme.fontFamily.sans],
        'overpass': ['Overpass', ...defaultTheme.fontFamily.sans],
        'undotted': ['Undotted', 'Overpass', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      'white': '#FAF9F6',
      'black': '#1F1F21',
      'green': {
        '500': '#417C5E',
        '800': '#335645',
      }
    },
    fontSize: {
      'base': '1rem', // 16px
      'lg': '1.125rem', // 18px
      'xl': '1.5rem', // 24px
      '2xl': '2.25rem', // 36px
      '3xl': '3.375rem', // 54px
      '4xl': '5.063rem', // 81px
      '5xl': '7.594rem', // 121.50px
      'h1': 'clamp(3.375rem, 10vw, 7.594rem)',
      'h2': 'clamp(3.375rem, 10vw, 7.594rem)',
      'h3': 'clamp(2.25rem, 6vw, 3.375rem)',
      'h4': 'clamp(1.5rem, 4vw, 2.25rem)',
    },
  },
  plugins: [],
}
