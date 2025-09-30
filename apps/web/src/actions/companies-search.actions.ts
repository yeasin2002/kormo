"use server";

import { and, ilike, or, sql } from "drizzle-orm";
import { db, schema } from "@/db";
import type { CompanySchema, PaginationMetaType } from "@/type";

type CompaniesSearchActions = {
	searchValue: string;
	techValue: string[];
	page: number;
	pageSize: number;
};

type Response = {
	data: CompanySchema[];
	metadata: PaginationMetaType;
};

/**
 * Fetches companies with pagination, search, and filtering.
 * This is a Next.js Server Action.
 *
 * @param {CompaniesSearchActions} params - The search, filter, and pagination parameters.
 * @returns {Promise<Response>} The paginated list of companies and metadata.
 */
export const filterCompaniesWithPagination = async ({
	page,
	pageSize,
	searchValue,
	techValue,
}: CompaniesSearchActions): Promise<Response> => {
	try {
		const offset = (page - 1) * pageSize;

		// We'll build the 'where' clause dynamically based on the inputs.
		// This is a clean and scalable pattern.
		const conditions = [];

		// 1. Add search condition (if searchValue is provided)
		if (searchValue) {
			// Searches for the value in company name or description, case-insensitive.
			conditions.push(
				or(
					ilike(schema.companies.company_name, `%${searchValue}%`),
					// Add other searchable fields here, e.g., description
					// ilike(schema.companies.description, `%${searchValue}%`),
				),
			);
		}

		// 2. Add technology filter condition (if techValue has items)
		// This assumes `technologies` is a `text[]` column in PostgreSQL.
		// The `@>` operator checks if the column array contains all elements of the provided array.
		if (techValue.length > 0) {
			conditions.push(sql`${schema.companies.technologies} @> ${techValue}`);
		}

		// Combine all conditions with `AND`
		const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

		// We run two queries concurrently for efficiency:
		//  a) One to get the paginated data.
		//  b) One to get the total count of items that match the filters.
		const [companies, totalCountResult] = await Promise.all([
			// Query to get the actual data for the current page
			db
				.select()
				.from(schema.companies)
				.where(whereClause)
				.orderBy(schema.companies.company_name)
				.limit(pageSize)
				.offset(offset),

			// Query to get the total count of records matching the filters
			db
				.select({ count: sql<number>`count(*)` })
				.from(schema.companies)
				.where(whereClause),
		]);

		const totalItems = totalCountResult[0].count;
		const totalPages = Math.ceil(totalItems / pageSize);

		const metadata = {
			currentPage: page,
			totalPages: totalPages,
			pageSize: pageSize,
			totalItems: totalItems,
			hasNextPage: page < totalPages,
			hasPreviousPage: page > 1,
		};

		return { data: companies, metadata };
	} catch (error) {
		console.error("Error in filterCompaniesWithPagination:", error);
		throw new Error("Failed to fetch companies");
	}
};
