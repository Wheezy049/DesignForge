/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        jackFrost: ["JackFrost", "sans-serif"],
        darkerGrotesque: ["Darker Grotesque", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}