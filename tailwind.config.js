/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#211710",
        "deep-brown": "#302116",
        amber: {
          DEFAULT: "#D99A45",
          soft: "#E6B97A",
          dark: "#B87A2E",
        },
        cream: "#F7F1E6",
        "cream-dark": "#EFE7D6",
        forest: "#284638",
        "forest-dark": "#1E3328",
        muted: {
          DEFAULT: "#A79A8C",
          dark: "#8A7E71",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.28em",
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "none" },
        },
        "scroll-bob": {
          "0%,100%": { transform: "translateY(0)", opacity: "0.7" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
      },
      animation: {
        "scroll-bob": "scroll-bob 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
