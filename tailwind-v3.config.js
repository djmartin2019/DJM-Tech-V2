/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        dark: {
          bg: "#0a0a0a",
          surface: "#111111",
          card: "#1a1a1a",
          border: "#2a2a2a",
          text: "#e5e5e5",
          muted: "#a3a3a3",
        },
        // Blue neon colors
        neon: {
          blue: "#00d4ff",
          "blue-light": "#33dfff",
          "blue-dark": "#0099cc",
          glow: "#00d4ff",
        },
        // Light theme colors (for toggle)
        light: {
          bg: "#ffffff",
          surface: "#f8fafc",
          card: "#ffffff",
          border: "#e2e8f0",
          text: "#1e293b",
          muted: "#64748b",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%": {
            boxShadow: "0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff",
            textShadow: "0 0 5px #00d4ff",
          },
          "100%": {
            boxShadow: "0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff",
            textShadow: "0 0 10px #00d4ff",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
