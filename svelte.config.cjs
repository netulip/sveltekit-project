const path = require('path')
const preprocess = require('svelte-preprocess')
const adapter = require('@sveltejs/adapter-static')
const imagetools = require('vite-imagetools')
const { dependencies } = require('./package.json')

module.exports = {
	preprocess: [
		preprocess({
			preserve: ['ld+json'],
			postcss: true
		}),
		require('svelte-windicss-preprocess').preprocess({
			compile: true,
			prefix: '',
			verbosity: 1,
			debug: false,
			devTools: {
				completions: false
			}
		})
	],
	kit: {
		adapter: adapter(),

		vite: {
			resolve: {
				alias: {
					'@': path.resolve('src')
				}
			},
			ssr: {
				noExternal: Object.keys(dependencies || {})
			},
			plugins: [imagetools({ force: true })]
		}
	}
}
