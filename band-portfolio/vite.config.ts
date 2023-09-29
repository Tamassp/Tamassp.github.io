import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	// 	server: {
	//     host: true
	//   }
	base: './',
};

export default config;
