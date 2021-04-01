module.exports = {
  plugins: [
    require('@tailwindcss/jit')(
      './legacy-commonjs/tailwind.config.js'
    ),
    require('autoprefixer'),
  ],
}
