import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // MerryQuery's product palette: a deep wine paired with warm paper tones.
        wine: {
          50: "#fbf4f7",
          100: "#f6e6ed",
          200: "#ecc8d7",
          300: "#dc9db8",
          400: "#c46b92",
          500: "#a84673",
          600: "#8b2e5b",
          700: "#7d1a4c",
          800: "#660033",
          900: "#470024",
          950: "#290016",
        },
        paper: {
          DEFAULT: "#faf7f2",
          50: "#fdfcfa",
          100: "#faf7f2",
          200: "#f3ede4",
          300: "#e8dfd2",
        },
        ink: {
          DEFAULT: "#1d1a1c",
          soft: "#4a4448",
          muted: "#726a6e",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(29, 26, 28, 0.04), 0 8px 24px -12px rgba(29, 26, 28, 0.12)",
        lift: "0 2px 4px rgba(29, 26, 28, 0.04), 0 24px 48px -20px rgba(63, 14, 41, 0.28)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both",
      },
    },
  },
  plugins: [],
};
export default config;
