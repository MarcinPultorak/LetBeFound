import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors');

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    fontFamily: {
      sans: ["Poppins", "Poppins"]
    },

    colors: {
      black: colors.black,
      slate: colors.slate,
      gray: colors.gray,
      white: colors.white,
      zinc: colors.zinc,
      sky: colors.sky,
      orange: colors.orange,
      red: colors.red,
      teal: colors.teal,
      neutral: colors.neutral,
      grayBlue: {
        DEFAULT: '#182132'
      },
      darkPurple: {
        DEFAULT: '#090D19'
      },
      blackPurple: {
        DEFAULT: '#050915'
      }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [], 
};

export default config;
