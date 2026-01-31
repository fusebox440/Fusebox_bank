import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        fill: {
          1: "rgba(139, 92, 246, 0.08)",
        },
        bankGradient: "#7C3AED",
        indigo: {
          500: "#8B5CF6",
          700: "#6D28D9",
        },
        success: {
          25: "#FEF9F5",
          50: "#FEF3E7",
          100: "#FDE6CF",
          600: "#F59E0B",
          700: "#D97706",
          900: "#92400E",
        },
        pink: {
          25: "#FDF4FF",
          100: "#FAE8FF",
          500: "#D946EF",
          600: "#C026D3",
          700: "#A21CAF",
          900: "#701A75",
        },
        blue: {
          25: "#F8F9FC",
          100: "#E0E7FF",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          900: "#4C1D95",
        },
        sky: {
          1: "#0F172A",
        },
        black: {
          1: "#0F172A",
          2: "#1E293B",
        },
        gray: {
          25: "#FAFAFA",
          200: "#E2E8F0",
          300: "#CBD5E1",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          900: "#0F172A",
        },
      },
      backgroundImage: {
        "bank-gradient": "linear-gradient(135deg, #7C3AED 0%, #C026D3 100%)",
        "gradient-mesh": "url('/icons/gradient-mesh.svg')",
        "bank-green-gradient":
          "linear-gradient(135deg, #F59E0B 0%, #EA580C 100%)",
      },
      boxShadow: {
        form: "0px 4px 16px 0px rgba(124, 58, 237, 0.12)",
        chart:
          "0px 8px 24px -4px rgba(124, 58, 237, 0.15), 0px 4px 8px -2px rgba(124, 58, 237, 0.08)",
        profile:
          "0px 16px 32px -8px rgba(124, 58, 237, 0.2), 0px 8px 16px -4px rgba(124, 58, 237, 0.1)",
        creditCard: "0px 12px 32px 0px rgba(15, 23, 42, 0.15)",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        "ibm-plex-serif": "var(--font-ibm-plex-serif)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
