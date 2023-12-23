import { rmSync } from "node:fs";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import pkg from "./package.json";
import { URL } from "node:url";
import vuePugPlugin from "vue-pug-plugin";
import viteTsconfigPaths from 'vite-tsconfig-paths';


export default defineConfig(({ command }) => {
	rmSync("dist-electron", { recursive: true, force: true });
	const isServe = command === "serve";
	const isBuild = command === "build";
	const sourcemap = isServe || !!process.env.VSCODE_DEBUG;
	return {
		plugins: [
			vue({
				template: {
					preprocessOptions: {
						plugins: [vuePugPlugin],
					},
				},
			}),
			viteTsconfigPaths()
		],
		server:
		process.env.VSCODE_DEBUG &&
		(() => {
			const url = new URL(pkg.debug.env.VITE_DEV_SERVER_URL);
			return {
				host: url.hostname,
				port: +url.port,
			};
		})(),
		clearScreen: false,
	}

});
