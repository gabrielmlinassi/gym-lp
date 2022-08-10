/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
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
  plugins: [
    require('tailwindcss-radix')({
      variantPrefix: 'rdx',
    }),
  ],
};
