/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
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
                "6.5vh": "6.5vh",
                "safe-action": "88vh",
                card: "44vh",
                "card-mobile": "66vh",
                "center-action": "76vh",
                "2x-center-action": "152vh",
            },
            padding: {
                "88vw": "7vw",
                "88vh": "0.5vh",
            },
            margin: {
                "88vh": "7vh",
                "88vw": "7vw",
                "76vh": "24vh",
                "76vw": "24vw",
                "72vw": "28vw",
                "68vw": "32vw",
                "h-safe-action": "12vh",
            },
        },
    },
    plugins: [],
};
