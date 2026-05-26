/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          brand: '#FF06C2',
        },
        cyan: {
          brand: '#00F5DF',
        },
        navy: '#000819',
      },
      fontFamily: {
        'lemon-milk': ['"LemonMilk"', 'sans-serif'],
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
