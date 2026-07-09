import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Notion's signature palette
        ink: {
          DEFAULT: "#37352F", // primary text
          light: "#73726E", // secondary text
          faint: "#9B9A97", // tertiary / muted
        },
        cream: {
          DEFAULT: "#F7F6F3", // warm off-white sections
          soft: "#FBFBFA",
        },
        line: "rgba(55, 53, 47, 0.09)", // hairline borders
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
