import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                white: {
                    pure: "#FFFFFF",
                    off: "#FAFAFA",
                    cream: "#F5F5F0",
                    mist: "#F8F8F8",
                },
            },
            fontFamily: {
                serif: ["Playfair Display", "Georgia", "serif"],
                sans: ["Inter", "system-ui", "sans-serif"],
            },
            animation: {
                "fade-in": "fadeIn 1.5s ease-out forwards",
                "blur-in": "blurIn 2s ease-out forwards",
                "slow-zoom": "slowZoom 20s ease-in-out infinite alternate",
                "float": "float 8s ease-in-out infinite",
                "pulse-soft": "pulseSoft 4s ease-in-out infinite",
                "countdown-tick": "countdownTick 1s ease-out",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                blurIn: {
                    "0%": { filter: "blur(20px)", opacity: "0" },
                    "100%": { filter: "blur(0px)", opacity: "1" },
                },
                slowZoom: {
                    "0%": { transform: "scale(1)" },
                    "100%": { transform: "scale(1.1)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                pulseSoft: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.7" },
                },
                countdownTick: {
                    "0%": { transform: "scale(1.05)", opacity: "0.8" },
                    "100%": { transform: "scale(1)", opacity: "1" },
                },
            },
            backdropBlur: {
                xs: "2px",
            },
        },
    },
    plugins: [],
};

export default config;
