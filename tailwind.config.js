/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {},
  plugins: [
    require('flowbite/plugin')
  ],
}

