module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Code", "sans-serif"],
        titillium: ["Titillium Web", "sans-serif"],
      },
      colors: {
        'background': "#232425",
        'primary': '#A9A9B3',
        'primary-hover': '#B3B9C9',
        'secondary': '#09D9BD',
        'highlight': '#C043BB',
        'highlight-hover': '#EB6AE6'
      },
      // spacing: {
      //   sm: '2.188rem'
      // },
    },
  },
  plugins: [],
}
