/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans:['Inter', 'sans-serif']
      },
      colors: {
        primary:'#ffdede',
        secondary:'#006cfc',
      }
    },

  },
  plugins: [],
}