const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['"lato"', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}

