/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.{html,js,njk}'],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        braincore: "#37517e",
        hoverBraincore: "#c7d7f2"
      },
    },
  },
  plugins: [],
};
