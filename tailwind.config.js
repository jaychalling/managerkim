/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#171a20",
          light: "#5c5e62",
          lighter: "#f4f4f4",
        },
        accent: {
          DEFAULT: "#3e6ae1",
          dark: "#2d5bd1",
          light: "#eef2fd",
        },
        base: "#FFFFFF",
        elevated: "#FFFFFF",
        subtle: "#f4f4f4",
        muted: "#e5e5e5",
        heading: "#171a20",
        body: "#393c41",
        caption: "#5c5e62",
        "border-subtle": "#e5e5e5",
        "border-default": "#d0d0d0",
      },
      fontFamily: {
        sans: ["Pretendard", "Noto Sans KR", "sans-serif"],
      },
      letterSpacing: {
        heading: "-0.04em",
        subheading: "-0.03em",
      },
      borderRadius: {
        card: "0.75rem",
        "card-sm": "0.5rem",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "word-reveal": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out both",
        marquee: "marquee 30s linear infinite",
        "word-reveal": "word-reveal 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};
