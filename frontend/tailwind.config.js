/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: "300ms",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f7f7f8",
          100: "#ededf1",
          200: "#d8d9df",
          300: "#b6b7c3",
          400: "#8e90a2",
          500: "#717386",
          600: "#5b5d6e",
          700: "#4a4a5a",
          800: "#40414c",
          900: "#383842",
          950: "#28282f",
        },
        secondary: {
          50: "#f6f6f9",
          100: "#ecedf2",
          200: "#d6d7e1",
          300: "#b2b5c7",
          400: "#878da9",
          500: "#69708e",
          600: "#545975",
          700: "#494d66",
          800: "#3b3e51",
          900: "#353745",
          950: "#23242e",
        },
        tertiary: colors.gray,
      },
      boxShadow: {
        around: "0 0 5px 2px ",
      },
    },
  },
  plugins: [],
};
