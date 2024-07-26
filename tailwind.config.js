/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.{html,js}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
  ],
}

