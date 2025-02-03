/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["Open Sans", "serif"],
      },
      colors: {
        upfteagreen: "#C2E6C7ff",
        upforangecrayola: "#FE743Bff",
        upfmelon: "#FEAB91ff",
        upfwhite: "#FEFEFEff",
        upfhoneydew: "#DFF9EAff",
      },
    },
  },
  plugins: [],
};
