import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				custom: ['Arad', 'sans-serif'],
			},

			// Keyframes
			keyframes: {
				'infinite-rotation': {
					'0%': { transform: "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(0deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))" },
					'100%': { transform: "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(-360deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))" },
				},
			},
			// Animations
			animation: {
				'infinite-rotation': 'infinite-rotation 5s linear infinite',
			},
		},
	},

	plugins: []
} satisfies Config;
