import { defineConfig } from 'vite';
import { ViteAngularPlugin } from '@nxext/angular-vite';

export default defineConfig(({ command, mode }) => {
	return {
		plugins: [
			ViteAngularPlugin({
				target: 'es2020',
			}),
		],
		test: {
			globals: true,
			includeSource: ['src/**/*.{js,ts}'],
			setupFiles: './test.ts',
		},
		resolve: {
			mainFields: ['fesm2020', 'fesm2015', 'module'],
		},
		define: {
			'import.meta.vitest': mode !== 'production',
		},
	}
});