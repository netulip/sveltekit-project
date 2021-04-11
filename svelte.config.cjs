const path = require('path')
const preprocess = require('svelte-preprocess')
const adapter = require('@sveltejs/adapter-static')
const { imagetools } = require('vite-imagetools')
const { dependencies } = require('./package.json')
const { preprocess: windicss } = require('svelte-windicss-preprocess')

module.exports = {
	preprocess: [
		preprocess({
			preserve: ['ld+json'],
			postcss: true
		}),
		windicss({
			config: 'windi.config.cjs',
			compile: true,
			prefix: 'w'
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
