import preprocess from 'svelte-preprocess'
import path from 'path'
import node from '@sveltejs/adapter-node'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],

	kit: {
		adapter: node(),

		vite: {
			resolve: {
				alias: {
					$i18n: path.resolve('./src/i18n'),
					$lib: path.resolve('./src/lib'),
				},
			},
		},
	},
}

export default config
