/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#2a64a5',
          orange: '#ec6923',
          navy: '#02294f',
        },
        gray: {
          bg: '#f1f1f1',
          txt: '#818181',
          border: '#cdcdcd',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
