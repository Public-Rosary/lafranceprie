const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Nunito'", ...defaultTheme.fontFamily.sans],
        nunitoSans: ["'Nunito Sans'", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'blue-pontmain': '#1E395F',
        'red-pontmain': '#C22121',
        'gold-pontmain': '#D8A619',
        'off-white': '#F7F3E2',
        black: '#010b11',
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
