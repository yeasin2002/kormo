import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema/**/*.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  // verbose: true,      // Uncomment to print SQL statements before running them
  // strict: true,       // Uncomment to prompt for confirmation before executing migrations
});
