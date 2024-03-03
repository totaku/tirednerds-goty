/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                white: "#ECF0F1",
                orange: {
                    50: "#fdf6ef",
                    100: "#fbead9",
                    200: "#f5d3b3",
                    300: "#efb582",
                    400: "#e88d4f",
                    500: "#e37435",
                    600: "#d35723",
                    700: "#af421f",
                    800: "#8c3620",
                    900: "#712e1d",
                    950: "#3d150d",
                },
                bunker: {
                    50: "#f4f6f7",
                    100: "#e3e7ea",
                    200: "#cbd3d6",
                    300: "#a6b4ba",
                    400: "#7a8c96",
                    500: "#5f717b",
                    600: "#515f69",
                    700: "#465058",
                    800: "#3e454c",
                    900: "#373d42",
                    950: "#191c1f",
                },
            },
        },
        fontFamily: {
            rubik: ["Rubik", "sans-serif"],
        },
    },
    plugins: [],
};
