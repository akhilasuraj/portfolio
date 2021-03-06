const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ["'Roboto'", ...defaultTheme.fontFamily.serif],
        dm: "'DM Sans'",
        monument: "'Monument Extended'",
      },
      colors: {
        mainFontColour: "#b99e64",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
