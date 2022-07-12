/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '4%': '4%',
        '10%': '10%',
        '20%': '20%',
        '40%': '40%',
      }
    },
  },
  plugins: [],
}
