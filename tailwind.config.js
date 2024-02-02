/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        "g-white": "#f2f2f2"
      },
      fontSize: {
        "display": "74px",
        "heading": "56px",
        "smallHeading": "40px"
      },
      borderRadius: {
        "3.5xl" : "32px",
      }
    },
  },
  plugins: [],
};
