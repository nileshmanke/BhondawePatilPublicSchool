/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors:{
        primary:"#1e3a8a ",
        secondary:"#b91c1c "


      }
    },
  },
  plugins: [],
}

