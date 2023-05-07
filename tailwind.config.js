/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontaFamily: {
        notoSerifHebrew: ['Noto Serif Hebrew', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        
      },
      colors: {
        'bg-btn': '#1df504'
      }
    },
  },
  plugins: [],
}

