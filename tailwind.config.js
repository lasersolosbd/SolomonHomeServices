/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        forest: {
          DEFAULT: "#1e3a2f",
          mid: "#2d5a42",
          light: "#3d7a5a",
        },
        timber: {
          DEFAULT: "#b8865a",
          light: "#d4a574",
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e2c47a",
        },
        "slate-deep": "#1a2332",
        "slate-mid": "#2c3e50",
        stone: {
          50: "#f8f5f0",
          100: "#ede8e0",
          200: "#ddd7cb",
          300: "#c8bfb0",
          400: "#a89880",
          500: "#8c7a65",
          600: "#6e5f4e",
          700: "#564a3c",
          800: "#3d352c",
          900: "#2a2420",
        },
        cream: "#fdfaf5",
      },
      backgroundImage: {
        "mountain-gradient":
          "linear-gradient(135deg, #1a2332 0%, #1e3a2f 50%, #2c3e50 100%)",
        "gold-gradient": "linear-gradient(90deg, #c9a84c, #d4a574)",
        "hero-overlay":
          "linear-gradient(180deg, rgba(26,35,50,0.75) 0%, rgba(26,35,50,0.4) 50%, rgba(26,35,50,0.85) 100%)",
      },
      boxShadow: {
        "gold-glow": "0 0 30px rgba(201, 168, 76, 0.2)",
        "forest-glow": "0 0 30px rgba(30, 58, 47, 0.3)",
        "card-hover":
          "0 20px 60px rgba(26, 35, 50, 0.12), 0 4px 16px rgba(26, 35, 50, 0.08)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
