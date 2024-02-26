const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "sf-black": "#1b1b1e",
        "sf-white": "#FFFAF0",
        "sf-cream": "#fefce1",
        "sf-beige": "#ebe1c3",
        "sf-egg": "#FFF5E0",
        "sf-green": "#228264",
        "sf-dblue": "#062841",
        "sf-lime": "#46dc8c",

        "g-red": "#ea4336",
        "g-green": "#34a853",
        "g-blue": "#4285f4",
        "g-yellow": "#fabd05",
        "g-white": "#f2f2f2",
      },
      fontSize: {
        display: "74px",
        heading: "56px",
        smallHeading: "40px",
      },
      borderRadius: {
        "3.5xl": "32px",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
