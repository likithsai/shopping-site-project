const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['"lato"', ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      'normal': 400,
      'bold': 700,
      'italic': 400,
    },
  },
  plugins: [],
}

