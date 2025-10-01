CREATE TYPE "public"."company_type" AS ENUM('onsite', 'hybrid', 'remote');--> statement-breakpoint
CREATE TABLE "companies" (
	"company_name" varchar(256) NOT NULL,
	"office_location" text NOT NULL,
	"technologies" json NOT NULL,
	"web_presence" json NOT NULL,
	"company_type" "company_type" DEFAULT 'onsite' NOT NULL,
	"is_top_choice" boolean DEFAULT false NOT NULL,
	"glassdoor_rating_score" integer,
	"established_year" integer DEFAULT 0 NOT NULL,
	"no_of_software_engineers" varchar(256)
);
