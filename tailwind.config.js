module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "bookmark-blue": "#241A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#F7F7F7",
        "bookmark-dark": "#02080C",
        "bookmark-brown" : "#3c2c2c",
        "bookmark-toast": "#99651c",
      }
    },
    fontFamily: {
      Poppins: ['Poppins, sans-serif'],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
