module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#1A1A1A",
          dark: "#030511",
        },
        lime: {
          DEFAULT: "#32CD32",
        },
        blue: {
          DEFAULT: "#288BE5",
        },
        grey: {
          DEFAULT: "#9B9B9B",
          300: "#e0e0e0",
          500: "#BCBCBC",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
