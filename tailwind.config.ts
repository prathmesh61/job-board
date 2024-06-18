import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "pro-sans": ["Product-sans", "system-ui", "ui-sans-serif"],
      },
      colors: {
        "primary-100": "#FEA730",
        "primary-50": "#FFDBAC",
        "base-100": "#234238",
        "base-75": "#589E84",
        "base-50": "#BCDBCE",
        "base-25": "#E4F0EC",
      },
    },
  },
  plugins: [],
};
export default config;
