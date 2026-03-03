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
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        modern: {
          cyan: "#06b6d4",
          blue: "#3b82f6",
          purple: "#8b5cf6",
          green: "#10b981",
          orange: "#f59e0b",
          pink: "#ec4899",
        },
        hacker: {
          green: "#00ff41",
          cyan: "#00ffff",
          dark: "#050505",
          black: "#000000",
          glow: "rgba(0, 255, 65, 0.5)",
          red: "#ff003c"
        }
      },
      fontFamily: {
        sans: ["var(--font-share-tech-mono)", "system-ui", "sans-serif"],
        display: ["var(--font-share-tech-mono)", "system-ui", "sans-serif"],
        mono: ["var(--font-share-tech-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;

