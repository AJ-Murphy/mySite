// in postcss.config.js

module.exports = () => ({
  plugins: [require(`tailwindcss`), require("autoprefixer"), require("precss")],
})
