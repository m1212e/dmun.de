import preprocess from 'svelte-preprocess'
import path from 'path'
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],

	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		},

		vite: {
			resolve: {
				alias: {
					$i18n: path.resolve('./src/i18n'),
					$lib: path.resolve('./src/lib'),
					$assets: path.resolve('./src/assets'),
					$services: path.resolve('./src/services'),
				},
			},
		},
	},
}

export default config
