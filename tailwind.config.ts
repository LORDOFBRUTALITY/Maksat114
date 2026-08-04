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
          soft: "#FBF3F3", // hafif kırmızı alt tonlu, beyaz ağırlığını azaltan sıcak zemin
        },
        ink: {
          DEFAULT: "#17181C",
          soft: "#6B6D76",
          faint: "#A6A8B2",
        },
        accent: {
          light: "#C4303B", // hover / vurgu ara tonu
          DEFAULT: "#8A1620", // ana marka kırmızısı — koyu, karizmatik
          dark: "#5E0F17", // en koyu — CTA pressed / dark section zemin
          soft: "#F5DEE0", // beyaz üstünde rozet/etiket zemini
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
        accent: "0 10px 30px -8px rgba(138,22,32,0.4)",
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
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards",
        fadeIn: "fadeIn 0.25s ease-out",
        slideUp: "slideUp 0.35s cubic-bezier(0.22,1,0.36,1)",
        popIn: "popIn 0.3s cubic-bezier(0.22,1,0.36,1)",
      },
    },
  },
  plugins: [],
};

export default config;
