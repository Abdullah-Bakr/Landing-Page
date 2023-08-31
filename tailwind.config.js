/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgintro: "rgb(28 34 48)",
        bghome: "rgb(24 30 42)",
        bgcards: "rgb(33 41 60)",
        bgemail: "rgb(28 34 48)",
        bgfooter: "rgb(12 21 36)",
        accentcyan: "hsl(176, 68%, 64%)",
        accentblue: "hsl(198, 60%, 50%)",
        accentlightred: "hsl(0, 100%, 63%)",
      },
      keyframes: {
        moveRight: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
      animation: {
        moveRight: "moveRight 1s ease-in-out infinite",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
