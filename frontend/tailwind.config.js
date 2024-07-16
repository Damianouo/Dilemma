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
        primary: colors.zinc,
        secondary: colors.slate,
        tertiary: colors.gray,
      },
      boxShadow: {
        around: "0 0 5px 2px ",
      },
    },
  },
  plugins: [],
};
