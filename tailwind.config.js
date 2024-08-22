
const { Montserrat } = require("next/font/google");
const theme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mod: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...theme.fontFamily.sans],
        Montserrat: ['"Montserrat"', ...theme.fontFamily.sans],
      },
      colors: {
        "primary-light": "#f8f8f8",
        "primary-dark": "#191919",
        pinkish: {
          100: "#edb5f5",
          200: "#eb7ad4",
          300: "#e86ed0",
        },
        blueish: {
          100: "#e6f8f9",
          200: "#b1e8ed",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "#333",
            a: {
              color: "#e86ed0",
              "&:hover": {
                color: "#edb5f5",
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.100"),

            a: {
              color: theme("colors.blue.400"),
              "&:hover": {
                color: theme("colors.blue.300"),
              },
            },
          },
        },
      }),
    },
  },

  varients: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    
  ],
};
