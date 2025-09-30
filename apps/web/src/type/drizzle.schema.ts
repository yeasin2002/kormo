import { schema } from '@/db/schema';

export type UserSchema = typeof schema.user.$inferSelect;
export type CompanySchema = typeof schema.companies.$inferSelect;
