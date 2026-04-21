import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "vc-bg": "#0A0B07",
        "vc-fg": "#EDE8DC",
        "vc-gold": "#C9922A",
        "vc-green": "#2A6B4F",
        "vc-purple": "#5B3080",
        "bm-navy": "#2B4D87",
        "bm-amber": "#E9A825",
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "Georgia", "serif"],
        lora: ["'Lora'", "Georgia", "serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
