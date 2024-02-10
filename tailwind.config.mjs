/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                'black': '#191C1F',
                'gray': '#2D3338',
                'white': '#ECF0F1',
                'orange': {
                    '50': '#fdf6ef',
                    '100': '#fbead9',
                    '200': '#f5d3b3',
                    '300': '#efb582',
                    '400': '#e88d4f',
                    '500': '#e37435',
                    '600': '#d35723',
                    '700': '#af421f',
                    '800': '#8c3620',
                    '900': '#712e1d',
                    '950': '#3d150d',
                },
            },
        },
        fontFamily: {
            rubik: ['Rubik', 'sans-serif'],
        },
	},
	plugins: [],
}
