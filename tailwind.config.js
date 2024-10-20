/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#F3A939',
        green: '#165314',
        ash: '#F0FFE5',
      },
      borderWidth: {
        'bo-1' : '1.5px',
      }
    },
  },
  plugins: [],
}

