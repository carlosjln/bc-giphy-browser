import vue from '@vitejs/plugin-vue';
import mkcert from 'vite-plugin-mkcert';

import {fileURLToPath, URL} from 'node:url';
import {defineConfig} from 'vite';

import * as path from 'path';

const VITE_GIPHY_SEARCH_ENDPOINT = "https://api.giphy.com/v1/gifs/search";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		mkcert()
	],

	resolve: {
		alias: {
			"@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"),
		}
	},

	server: {
		port: 3001, // TODO: this needs to be configurable
		strictPort: true,

		proxy: {
			// Proxying API requests
			'/api': {
				target: VITE_GIPHY_SEARCH_ENDPOINT,
				secure: false,
				changeOrigin: true,
				rewrite: ( path ) => path.replace( /^\/api/, '' ), // Remove /api from the path
			},
		},
	}
})
