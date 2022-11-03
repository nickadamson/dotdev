/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      serif: ["Source Serif 4", "SourceSerif4Variable", "serif"],
      mono: ["IBM Plex Mono", "monospace"],
    },
    extend: {
      backgroundImage: {
        bars: "url('/colorbars.svg')",
      },
      fontFamily: {},

      border: {},
      maxWidth: {
        unsafe: "4vw",
      },
      width: {
        "safe-action": "88vw",
        "safe-title": "76vw",
        "center-action": "72vw",
        "center-title": "68vw",
        card: "66vw",
      },
      height: {
        "6.5vh": "calc(6.5 * var(--mvh))",
        "safe-action": "calc(88 * var(--mvh))",
        card: "calc(44 * var(--mvh))",
        "card-mobile": "calc(66 * var(--mvh))",
        "center-action": "calc(76 * var(--mvh))",
        "2x-center-action": "calc(152 * var(--mvh))",
        screen: "calc(100 * var(--mvh))",
      },
      padding: {
        "88vw": "7vw",
        "88vh": "calc(0.5 * var(--mvh))",
      },
      margin: {
        "88vh": "calc(6.5 * var(--mvh))",
        "88vw": "7vw",
        "76vh": "calc(24 * var(--mvh))",
        "76vw": "24vw",
        "72vw": "28vw",
        "68vw": "32vw",
        "h-safe-action": "calc(12 * var(--mvh))",
      },
    },
  },
  plugins: [],
};
