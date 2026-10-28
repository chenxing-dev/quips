// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from '@unocss/astro';

// https://astro.build/config
export default defineConfig({
	integrations: [UnoCSS()],
	output: 'static',
	site: 'https://chenxing-dev.github.io',
	// 仓库名为 quips，部署到 https://<user>.github.io/quips/
	base: '/quips/',
});
