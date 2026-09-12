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
        bg: "#FAF7F2",
        "bg-soft": "#F2ECE3",
        surface: "#FFFFFF",
        primary: "#1E2A20",
        "primary-h": "#152017",
        accent: "#B78955",
        "accent-light": "#d4a96a",
        "text-pri": "#1C1B19",
        "text-sec": "#68645E",
        border: "#E5DED4",
        "border-light": "#EEE9E1",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        xs: "0 1px 4px rgba(30,42,32,.05)",
        sm: "0 2px 12px rgba(30,42,32,.07)",
        md: "0 8px 32px rgba(30,42,32,.10)",
        lg: "0 20px 60px rgba(30,42,32,.13)",
      },
      transitionTimingFunction: {
        ease: "cubic-bezier(.4,0,.2,1)",
      },
    },
  },
  plugins: [],
};
export default config;
