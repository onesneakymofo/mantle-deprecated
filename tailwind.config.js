const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        flow: 'Flow',
      }
    },
    colors: {
      // Build your palette here
      transparent: 'transparent',
      amber: colors.amber,
      blue: colors.blue,
      black: colors.black,
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      cyan: colors.cyan,
      emerald: colors.emerald,
      indigo: colors.indigo,
      gray: colors.gray,
      green: colors.green,
      fuchsia: colors.fuchsia,
      lightBlue: colors.lightBlue,
      lime: colors.lime,
      red: colors.red,
      rose: colors.rose,
      orange: colors.orange,
      pink: colors.pink,
      purple: colors.purple,
      teal: colors.teal,
      trueGray: colors.trueGray,
      violet: colors.violet,
      warmGray: colors.warmGray,
      white: colors.white,
      yellow: colors.yellow
    }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"]
  },
  plugins: []
};
