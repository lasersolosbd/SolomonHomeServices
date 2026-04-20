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
        // Kept for accents and text, but no longer the main background
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
        // Lighter, warmer neutrals for the high-end feel
        stone: {
          50: "#faf9f7",
          100: "#f3f0ea",
          200: "#e6e1d6",
          300: "#d5cec0",
          800: "#3d352c",
          900: "#2a2420",
        },
        cream: "#ffffff",
      },
      backgroundImage: {
        "elegant-gradient": "linear-gradient(to right, #faf9f7, #ffffff)",
        "gold-accent": "linear-gradient(135deg, #c9a84c 0%, #b8865a 100%)",
      },
      boxShadow: {
        "editorial": "0 20px 40px -15px rgba(0,0,0,0.05)",
        "floating": "0 30px 60px -20px rgba(0,0,0,0.08)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "reveal": "reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        reveal: {
          "0%": { clipPath: "inset(100% 0 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
      },
    },
  },
  plugins: [],
};
