import type { Config } from "tailwindcss";

const config: Config = {
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
        "background-color": "#0e0e10",
        "border-primary": "rgb(28, 28, 33)",
        "border-secondary": "rgb(47, 47, 55)",
        "accent-color": "rgb(121,124,134)",
      },
      fontSize: {
        xs: "0.635rem", // 10rem
        sm: "0.75rem", // 12px
        base: "0.875rem", // 14px
      },
    },
  },
  plugins: [],
};
export default config;
