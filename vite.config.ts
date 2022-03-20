import { defineConfig } from 'vite';
import { ViteAngularPlugin } from '@nxext/angular-vite';

export default defineConfig({
	plugins: [
		ViteAngularPlugin({
			target: 'es2020',
		}),
	],
	test: {
		environment: 'jsdom',
		globals: true,
	},
});