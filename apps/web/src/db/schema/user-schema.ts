// src/schema/user-schema.ts
import { boolean, pgTable, text, timestamp } from 'drizzle-orm/pg-core';
export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  image: text('image'),
  emailVerified: boolean('email_verified')
    .$defaultFn(() => false)
    .notNull(),
  createdAt: timestamp('created_at')
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: timestamp('updated_at')
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});
