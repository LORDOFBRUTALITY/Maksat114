import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      wide: "1536px", // masaüstü sinematik geniş yerleşim için
    },
    extend: {
      colors: {
        bg: {
          DEFAULT: "#FFFFFF",
          soft: "#FAFAFA",
        },
        ink: {
          DEFAULT: "#17181C",
          soft: "#6B6D76",
          faint: "#A6A8B2",
        },
        accent: {
          light: "#FF5C63",
          DEFAULT: "#F0323C",
          dark: "#C91F2B",
          soft: "#FFECEC",
        },
      },
      fontFamily: {
        display: ['"Clash Display"', "system-ui", "sans-serif"],
        body: ['"General Sans"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1440px",
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(23,24,28,0.12)",
        accent: "0 10px 30px -8px rgba(240,50,60,0.35)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards",
        fadeIn: "fadeIn 0.25s ease-out",
        slideUp: "slideUp 0.35s cubic-bezier(0.22,1,0.36,1)",
      },
    },
  },
  plugins: [],
};

export default config;
