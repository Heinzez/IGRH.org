/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
        luminous: "#39FF14",
        border: "hsl(240, 5%, 84%)", // ✅ Add default border color used by ShadCN
        input: "hsl(240, 5%, 96%)",
        ring: "hsl(240, 5%, 65%)",
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(240, 10%, 4%)",
        primary: "#39FF14",
        secondary: "#0A0A0A",
        accent: "#00D1FF",
        muted: "#999999",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
