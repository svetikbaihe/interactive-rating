/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-grey': 'hsl(217, 12%, 63%)',
        'dark-blue': 'hsl(213, 19%, 21%)',
        'very-dark-blue': 'hsl(219, 20%, 17%)',
        'orange': 'hsl(25, 97%, 53%)',
        'dark-void': 'hsl(216, 12%, 8%)'
      }
    },
  },
  plugins: [],
}

