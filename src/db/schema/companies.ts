import { boolean, integer, json, pgEnum, pgTable, text, varchar } from 'drizzle-orm/pg-core';

// Define the company type enum
export const companyTypeEnum = pgEnum('company_type', ['onsite', 'hybrid', 'remote']);

export const companies = pgTable('companies', {
  company_name: varchar('company_name', { length: 256 }).notNull(),
  office_location: text('office_location').notNull(),
  technologies: json('technologies').$type<string[]>().notNull(),
  web_presence: json('web_presence')
    .$type<{
      web: string;
      fb?: string;
      linkedin?: string;
      twitter?: string;
      insta?: string;
      youtube?: string;
      crunchbase?: string;
      github?: string;
    }>()
    .notNull(),
  company_type: companyTypeEnum('company_type').notNull().default('onsite'),
  isTopChoice: boolean('is_top_choice').notNull().default(false),
  glassdoor_rating_score: integer('glassdoor_rating_score'),
  established_year: integer('established_year').notNull().default(0),
  no_of_software_engineers: varchar('no_of_software_engineers', { length: 256 }),
});
