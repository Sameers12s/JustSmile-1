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
        "bluegray": {
          "300" : "hsl(220,20%,75%)",
          "500" : "hsl(220,20%,50%)",
          "700" : "hsl(220,20%,25%)",
        }
      }
    },
  },
  plugins: [require("daisyui")],
}