import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#00f",
        secondary: "#f00",
        dark: { DEFAULT: '#150B41', 50: '#2C1DA3', 100: '#2A1B98', 200: '#261782', 300: '#21136C', 400: '#1B0F57', 500: '#150B41', 600: '#130A38', 700: '#110830', 800: '#0E0727', 900: '#0B051E', 950: '#0A051A' },
      },
    },
  },
  plugins: [],
};
export default config;
