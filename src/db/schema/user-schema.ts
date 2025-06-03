// src/schema/user-schema.ts
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
