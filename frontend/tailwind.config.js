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
        primary: colors.indigo,
      },
      boxShadow: {
        navbarLink: "0 2px 0px 0px",
        contestThumbnail: "0 0 5px 5px",
      },
    },
  },
  plugins: [],
};
