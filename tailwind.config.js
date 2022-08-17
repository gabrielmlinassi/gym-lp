const defaultTheme = require('tailwindcss/defaultTheme');

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
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-radix')({
      variantPrefix: 'rdx',
    }),
  ],
};
