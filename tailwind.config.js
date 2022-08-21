/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './Layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      mainColor: '#ff9f0d',
      primaryColor: '#484848',
      secondaryColor: '#717171',
    },
    extend: {},
  },
  plugins: [],
};
