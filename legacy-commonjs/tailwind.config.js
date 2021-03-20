// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // theme: { defaultTheme },
  darkMode: 'class',

  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './legacy-commonjs/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#aa7fd4',
          200: '#9966cc',
          300: '#884cc3',
          400: '#773bb2',
          500: '#663399',
          600: '#552b80',
          700: '#442266',
          800: '#331a4d',
          900: '#221133',
        },
        'code-bg': '#011627',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [
    // require("@tailwindcss/ui")
    require('@tailwindcss/forms'),
  ],
}
