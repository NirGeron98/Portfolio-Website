/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050712",
        night: "#080d1d",
        panel: "rgba(13, 20, 38, 0.72)",
        line: "rgba(255, 255, 255, 0.12)",
        cyan: "#55e6ff",
        violet: "#9b6cff",
        mint: "#55f0b1",
        gold: "#f8c866"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 0 42px rgba(85, 230, 255, 0.18)",
        violet: "0 0 42px rgba(155, 108, 255, 0.18)"
      },
      backgroundImage: {
        "premium-gradient":
          "linear-gradient(135deg, #55e6ff 0%, #9b6cff 46%, #55f0b1 100%)"
      }
    }
  },
  plugins: []
};
