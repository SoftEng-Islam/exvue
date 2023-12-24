import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuePugPlugin from "vue-pug-plugin";
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { VitePluginNode } from "vite-plugin-node";


export default defineConfig(({ command }) => {
	return {
		plugins: [
			vue({
				template: {
					preprocessOptions: {
						plugins: [vuePugPlugin],
					},
				},
			}),
			viteTsconfigPaths(),
			...VitePluginNode({
				adapter: "express",
				appPath: "./src/app.ts",
				exportName: "viteNodeApp",
				tsCompiler: "esbuild",
				swcOptions: {},
			}),
		],
		server: {
			port: 1420,
			strictPort: true,
		}
	}
});
