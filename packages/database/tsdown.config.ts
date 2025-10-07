import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["./src/**/*.ts"],
	outDir: "./dist",
	alias: {
		"@": "./src",
	},
	dts: true,
	clean: true,
	target: "node",
	platform: "node",
	external: ["@neondatabase/serverless", "drizzle-orm", "dotenv", "ws"],
	tsconfig: "./tsconfig.json",
});