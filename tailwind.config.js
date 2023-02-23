/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Carbon', ...fontFamily.sans],
      },
      colors: {
        'dao-black': '#111111',
        'dao-white': '#ffffffde',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
