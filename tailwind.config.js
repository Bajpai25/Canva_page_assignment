/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'navbar-gradient': 'linear-gradient(to right, #83aff0, #4779c4, #3c649f)',
      },
    },
  },
  
  plugins: [],
}