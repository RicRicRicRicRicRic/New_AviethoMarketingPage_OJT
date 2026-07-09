/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: 'var(--color-background)',
				'background-elevated': 'var(--color-background-elevated)',
				'background-overlay': 'var(--color-background-overlay)',
				'background-card': 'var(--color-background-card)',
				foreground: 'var(--color-foreground)',
				accent: 'var(--color-accent)',
				'accent-hover': 'var(--color-accent-hover)',
				muted: 'var(--color-muted)',
				'muted-hover': 'var(--color-muted-hover)',
			},
			fontFamily: {
				sans: ['var(--font-body)'],
				heading: ['var(--font-heading)'],
			},
		},
	},
	plugins: [
		function({ addUtilities }) {
			addUtilities({
				'.scrollbar-hide': {
					'-ms-overflow-style': 'none',
					'scrollbar-width': 'none',
					'&::-webkit-scrollbar': {
						display: 'none',
					},
				},
			});
		},
	],
};
