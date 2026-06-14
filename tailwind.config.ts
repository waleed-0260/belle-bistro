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
        background: "#0D0D0D",
        surface: "#1A1A1A",
        accent: "#4CAF50",
        "accent-light": "#A8D5A2",
        cream: "#F5F0E8",
        muted: "#9E9E8E",
        gold: "#E8D5A3",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse at 20% 50%, rgba(76, 175, 80, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(232, 213, 163, 0.06) 0%, transparent 40%), linear-gradient(180deg, #0D0D0D 0%, #141414 50%, #0D0D0D 100%)",
        "card-gradient":
          "linear-gradient(135deg, #1A1A1A 0%, #222222 50%, #1A1A1A 100%)",
        "featured-gradient":
          "linear-gradient(135deg, rgba(76, 175, 80, 0.12) 0%, #1A1A1A 40%, #1A1A1A 100%)",
      },
      animation: {
        grain: "grain 8s steps(10) infinite",
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
