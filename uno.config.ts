import { defineConfig, presetWebFonts, presetWind4 } from 'unocss';

export default defineConfig({
	presets: [
		presetWind4(),
		presetWebFonts({
			provider: 'fontsource',
			fonts: {
				serif: ['Noto Serif TC:500'],
			},
		}),
	],
	theme: {
		fontFamily: {
			serif: '"Noto Serif TC", serif',
		},
	},
});
