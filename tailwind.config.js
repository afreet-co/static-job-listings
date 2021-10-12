const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Spartan", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "de-saturated-cyan": "hsl(180, 29%, 50%)",
        background: "hsl(180, 52%, 96%)",
        "filter-tablets": "hsl(180, 31%, 95%)",
        "grayish-cyan": "hsl(180, 8%, 52%)",
        "grayish-cyan-dark": "hsl(180, 14%, 20%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
