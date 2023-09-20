import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: [
        "bg-red-400",
        "bg-blue-400",
        "bg-emerald-400",
        "bg-teal-400",
        "bg-indigo-400",
        "border-red-400",
        "border-blue-400",
        "border-emerald-400",
        "border-teal-400",
        "border-indigo-400",
        "hover:bg-red-400",
        "hover:bg-blue-400",
        "hover:bg-emerald-400",
        "hover:bg-teal-400",
        "hover:bg-indigo-400",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
