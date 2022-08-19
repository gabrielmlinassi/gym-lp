const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        industry: ['Industry', ...defaultTheme.fontFamily.sans],
        proximaNova: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '1.5xl': '1.375rem', // 22px
        '2.5xl': '1.75rem', // 28px
        '3xl': '2rem', // 32px
        '6.25xl': '4rem', // 64px
      },
      keyframes: {
        // Dialog
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        // Dialog
        'fade-in': 'fade-in 0.2s ease',
        'fade-out': 'fade-out 0.2s ease',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: {
        100: '#F8F8F9',
        200: '#CCD4E2',
        300: '#97A3B7',
        400: '#4A5465',
        450: '#343A47',
        475: '#373E4B',
        500: '#292E38',
        550: '#252932',
        600: '#1E2229',
      },
      yellow: {
        500: '#FAA806',
        550: '#EE9F04',
        600: '#BC7E03',
      },
      red: '#EF4100',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-radix')({
      variantPrefix: 'rdx',
    }),
  ],
};
