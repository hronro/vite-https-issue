import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		https: {
			key: './certs/cert.key',
			cert: './certs/cert.crt',
		},
	},
	plugins: [sveltekit()]
});
