/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                'black': '#191C1F',
                'gray': '#2D3338',
                'white': '#ECF0F1',
                'orange': '#E37435',
            },
        },
        fontFamily: {
            rubik: ['Rubik', 'sans-serif'],
        },
	},
	plugins: [],
}
