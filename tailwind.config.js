/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path to match your project structure
    "./public/index.html", // If you have HTML files
  ],
  theme: {
    extend: {
      colors: {
        purplebg: "#2C1B4E",
      },
    },
  },
  plugins: [],
};
