import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors');


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: colors.black,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      sky: colors.sky,
      orange: colors.orange,
      red: colors.red,
      teal: colors.teal,
      grayBlue: {
        DEFAULT: '#182132'
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
