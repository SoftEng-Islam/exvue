import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuePugPlugin from "vue-pug-plugin";
import { VitePluginNode } from "vite-plugin-node";


export default defineConfig(({ command }) => {
	return {
		plugins: [
			...VitePluginNode({
				adapter: "express",
				appPath: "./server/index.ts",
				exportName: "viteNodeApp",
				tsCompiler: "esbuild",
				swcOptions: {},
			}),
			vue({
				template: {
					preprocessOptions: {
						plugins: [vuePugPlugin],
					},
				},
			}),
		],
		server: {
			port: 8081,
			strictPort: true,
		}
	}
});
