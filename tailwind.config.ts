/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   lg: "976px",
    //   xl: "1440px",
    // },

    extend: {
      fontFamily: {
        primary: ["var(--font-vazirmatn)"],
      },
      fontSize: {
        xxs: "10px",
      },
      direction: {
        rtl: "rtl",
      },
      flexGrow: {
        2: "2",
      },
      width: {
        61: "244px",
        68: "272px",
        72: "288px",
        76: "304px",
        80: "320px",
        160: "640px",
      },
      maxWidth: {
        1980: "1980px",
        "8xl": "1440px",
      },
      box: {
        boxShadow: {
          "xs": " 0px 1px 2px 0px #1018280D",
          "sm": " 0px 1px 3px 0px #1018281A",
          "md": " 0px 4px 8px -2px #1018281A",
          "lg": " 0px 12px 16px -4px #10182814",
          "xl": " 0px 20px 24px -4px #10182814",
          "2xl": " 0px 24px 48px -12px #1018282E",
          "3xl": " 0px 32px 64px -12px #10182824",
        },
      },
      gap: {
        "1/2": "2px",
      },
      spacing: {
        21: "96px",
      },
      borderWidth: {
        1: "1px",
      },
      borderRadius: {
        20: "20px",
      },
      colors: {
        primary: {
          25: "#FFFAF5",
          50: "#FFF6ED",
          100: "#FFEAD5",
          200: "#FDDCAB",
          300: "#FEB273",
          400: "#FD853A",
          500: "#FB6514",
          600: "#EC4A0A",
          700: "#C4320A",
          800: "#9C2A10",
          900: "#7E2410",
        },
        error: {
          25: "#FFFBFA",
          50: "#FEF3F2",
          100: "#FEE4E2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#F97066",
          500: "#F04438",
          600: "#D92D20",
          700: "#B42318",
          800: "#912018",
          900: "#7A271A",
        },
        warning: {
          25: "#FFFCF5",
          50: "#FFFAEB",
          100: "#FEF0C7",
          200: "#FEDF89",
          300: "#FEC84B",
          400: "#FDB022",
          500: "#F79009",
          600: "#DC6803",
          700: "#B54708",
          800: "#93370D",
          900: "#7A2E0E",
        },
        success: {
          25: "#F6FEF9",
          50: "#ECFDF3",
          100: "#D1FADF",
          200: "#A6F4C5",
          300: "#6CE9A6",
          400: "#32D583",
          500: "#12B76A",
          600: "#039855",
          700: "#027A48",
          800: "#05603A",
          900: "#054F31",
        },
        gray: {
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        },
        blue_gray: {
          25: "#FCFCFD",
          50: "#F8F9FC",
          300: "#AFB5D9",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
