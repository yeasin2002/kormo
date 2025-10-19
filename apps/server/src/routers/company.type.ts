// types.ts or type.ts

/**
 * Pagination metadata type
 */
export interface PaginationMetaType {
	currentPage: number;
	totalPages: number;
	pageSize: number;
	totalItems: number;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
}

/**
 * Company schema type
 * This should match your database schema from Drizzle ORM
 */
export interface CompanySchema {
	id: string; // or number, depending on your DB
	company_name: string;
	description?: string | null;
	website?: string | null;
	technologies: string[]; // PostgreSQL text[] type
	industry?: string | null;
	company_size?: string | null;
	location?: string | null;
	logo_url?: string | null;
	founded_year?: number | null;
	created_at?: Date | string;
	updated_at?: Date | string;
}

/**
 * Alternative: If you want to be more precise based on typical company data
 */
export interface CompanySchemaDetailed {
	id: string;
	company_name: string;
	description: string | null;
	website: string | null;
	technologies: string[];
	industry: string | null;
	company_size: "startup" | "small" | "medium" | "large" | "enterprise" | null;
	location: string | null;
	logo_url: string | null;
	founded_year: number | null;
	email: string | null;
	phone: string | null;
	linkedin_url: string | null;
	twitter_url: string | null;
	employee_count: number | null;
	funding_stage: string | null;
	is_hiring: boolean;
	remote_friendly: boolean;
	created_at: Date;
	updated_at: Date;
}

/**
 * Request query types for the API
 */
export interface CompaniesSearchQuery {
	searchValue?: string;
	techValue?: string | string[];
	page?: string;
	pageSize?: string;
}

/**
 * Response type for the companies endpoint
 */
export interface CompaniesResponse {
	data: CompanySchema[];
	metadata: PaginationMetaType;
}

/**
 * Error response type
 */
export interface ErrorResponse {
	error: string;
	message?: string;
	details?: any;
}
