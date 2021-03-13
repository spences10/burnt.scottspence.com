// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './legacy-commonjs/**/*.js'],
  theme: {},
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [
    // require("@tailwindcss/ui")
    require('@tailwindcss/custom-forms'),
  ],
}
