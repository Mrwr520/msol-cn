/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#143D96",
        "primary-dark": "#143D96",
        "primary-mid": "#5673B3",
        accent: "#ff8440",
        ink: "#333333",
        line: "#e5e5e5",
      },
      fontFamily: {
        sans: ['"webfontSourceHanSansSC"', '"Microsoft YaHei"', "sans-serif"],
      },
      transitionTimingFunction: {
        msol: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      },
      transitionDuration: {
        250: "250ms",
        400: "400ms",
        850: "850ms",
      },
    },
  },
  plugins: [],
};
