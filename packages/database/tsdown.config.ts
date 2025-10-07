import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["./src/index.ts", "./src/db.ts", "./src/schema/*.ts"],
	outDir: "./dist",
	alias: {
		"@": "./src",
	},
	dts: true,
});
