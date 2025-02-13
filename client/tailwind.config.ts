/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        valentine: {
          red: "#ff4d6d",
          pink: "#ff8fa3",
          light: "#fff0f3",
          dark: "#590d22",
        },
      },
      animation: {
        fillHeart: "fillHeart 0.5s ease-out forwards",
        explodeHeart: "explodeHeart 0.5s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        heartbeat: "heartbeat 1s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fillHeart: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        explodeHeart: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(3)", opacity: "0" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};
