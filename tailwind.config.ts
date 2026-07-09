import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic palette — driven by CSS variables so it flips in dark mode.
        // Channel form (R G B) keeps Tailwind opacity modifiers (/10, /80) working.
        page: "rgb(var(--page) / <alpha-value>)", // body background
        surface: "rgb(var(--surface) / <alpha-value>)", // cards, nav, popovers
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)", // primary text
          light: "rgb(var(--ink-light) / <alpha-value>)", // secondary text
          faint: "rgb(var(--ink-faint) / <alpha-value>)", // tertiary / muted
        },
        cream: {
          DEFAULT: "rgb(var(--cream) / <alpha-value>)", // tinted sections
          soft: "rgb(var(--cream-soft) / <alpha-value>)",
        },
        line: "var(--line)", // hairline borders
        notion: {
          blue: "#2383E2",
          red: "#EB5757",
          orange: "#D9730D",
          green: "#0F7B6C",
          purple: "#6940A5",
          pink: "#AD1A72",
          yellow: "#DFAB01",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1120px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 15, 15, 0.04), 0 4px 16px rgba(15, 15, 15, 0.08)",
        float:
          "0 8px 24px rgba(15, 15, 15, 0.10), 0 24px 60px rgba(15, 15, 15, 0.12)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
