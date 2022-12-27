/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctorPortal: {
          primary: '#A56DC7',
          secondary: '#FFC73B',
          accent: '#FF6C99',

          'base-100': '#ffffff'
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
