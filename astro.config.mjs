// @ts-check
import {defineConfig} from "astro/config";

// https://astro.build/config
export default defineConfig({
	vite: {
		server: {
			fs: {
				// Permet à Vite d'accéder aux fichiers en dehors du répertoire racine
				allow: [".."],
			},
		},
	},
});
