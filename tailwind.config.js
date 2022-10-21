/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 575px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'primary': '#11175D',
        'secondary': '#64699D',
        'border': '#11175D',
        'btncolor': '#5F35F5',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
