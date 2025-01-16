/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      medievalGold: '#DAA520',
      medievalRed: '#8B0000',
      medievalBlue: '#000080',
      medievalGray: '#2F4F4F',
      medievalSepia: '#cda882',
      darkSepia: '#87634A',
      blackSepia: '#513B2C',
      grey: '#292524',
      darkBlue: '#232428',
    },
  },
  plugins: [],
}