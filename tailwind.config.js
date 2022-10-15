/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#11175D',
        'secondary': '#64699D',
        'border': '#11175D',
        'btncolor': '#5F35F5',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
