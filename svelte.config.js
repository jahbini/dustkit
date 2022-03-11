import coffee from 'vite-plugin-coffee';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			coffeescript: {
				bare: true
			}
		})
	],
	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
	
		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte', // install time error
	vite: {
		server: {
			hmr: {
				clientPort: process.env.HMR_HOST ? 443 : 24678,
				host: process.env.HMR_HOST
					? process.env.HMR_HOST.substring('https://'.length)
					: 'localhost'
			}
		},

		plugins: [
			coffee({
				jsx: false
			})
		]
	}}
};

export default config;
