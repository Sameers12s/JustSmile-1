/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans' : ["Montserrat",'sans-serif'],
      },
      colors: {
        "primary": {
          "100" : "#FFFFFF",
          "200" : "#E1E4EA",
          "300" : "#C4C9D4",
          "400" : "#A9AFBC",
          "500" : "#8D95A5",
          "600" : "#718096",
          "700" : "#454D5F",
          "800" : "#363E4E",
          "900" : "#29303D",
          "x900": "#212631",
          "blue": "#4D80E5",
          "red" : "#E54D66",
          "green":"#40BF95",
          "yellow":"#EEBD5E"
        }
      }
    },
  },
  plugins: [require("daisyui")],
}