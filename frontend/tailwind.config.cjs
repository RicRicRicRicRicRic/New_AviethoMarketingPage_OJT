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
		animation: {
			'nav-enter': 'nav-enter 0.5s ease both',
			'link-in': 'link-in 0.35s ease forwards',
			'reveal-up': 'reveal-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
		},
		keyframes: {
			'nav-enter': {
				from: {
					opacity: '0',
					transform: 'translateY(-10px)',
				},
				to: {
					opacity: '1',
					transform: 'translateY(0)',
				},
			},
			'link-in': {
				from: {
					opacity: '0',
					transform: 'translateY(-6px)',
				},
				to: {
					opacity: '1',
					transform: 'translateY(0)',
				},
			},
			'reveal-up': {
				from: {
					opacity: '0',
					transform: 'translateY(18px)',
				},
				to: {
					opacity: '1',
					transform: 'translateY(0)',
				},
			},
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
