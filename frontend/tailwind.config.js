/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    transitionDuration: {
      DEFAULT: "300ms",
    },
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: colors.zinc,
        secondary: colors.slate,
      },
      boxShadow: {
        contestThumbnail: "0 0 5px 5px",
      },
    },
  },
  plugins: [],
};
