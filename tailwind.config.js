/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'button-outline': '#646cff',
        'kahn-orange': '#F89C15',
        'kahn-orange-dark': '#FAAA35',
        'kahn-orange-light': '#FFDCA9',
      }
    },
  },
  plugins: [],
}

