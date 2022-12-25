/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.neutral,
			linxt: {
				DEFAULT: '#2546FF',
				100: '#DBEBFF',
				200: '#BEDBFF',
				500: '#2546FF',
				600: '#2039E2',
			}
		}
	},
	plugins: [],
}
