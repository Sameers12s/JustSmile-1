/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        neutrals: {
          100: "#FFFFFF",
          200: "#E1E4EA",
          300: "#C4C9D4",
          400: "#A9AFBC",
          500: "#8D95A5",
          600: "#718096",
          700: "#454D5F",
          800: "#363E4E",
          900: "#29303D",
          950: "#212631",
        },
        brand: {
          blue: "#4D80E5",
          red: "#E54D66",
          green: "#40BF95",
          yellow: "#EEBD5E",
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4D80E5",
          secondary: "#29303D",
          accent: "#363E4E",
          "base-100": "#29303D",
          "base-200": "#454D5F",
          info: "#4D80E5",
          success: "#40BF95",
          warning: "#EEBD5E",
          error: "#E54D66",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
