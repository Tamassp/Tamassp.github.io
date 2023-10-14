import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
//import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */

import { vitePreprocess } from '@sveltejs/kit/vite';

// const dev = process.argv.includes('dev');

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	//preprocess: preprocess(),
	preprocess: [vitePreprocess()],
	trailingSlash: 'always',
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		})
	}
	// kit: {
	// 	adapter: adapter(),
		
	// 	// path: {
	// 	// 	base: dev ? '' : process.env.BASE_PATH || '/band-portfolio'
	// 	// }
	// 	// path: {
	// 	// 	base: '/band-portfolio'
	// 	// }
	// }
	//preprocess: vitePreprocess()
};

export default config;
