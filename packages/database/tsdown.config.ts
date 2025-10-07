import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["./src/**/*.ts"],
	outDir: "./dist",
	alias: {
		"@": "./src",
	},
	dts: true,
});