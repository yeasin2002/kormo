import { db, schemas as schema } from "@workspace/database";
import { and, ilike, or, sql } from "drizzle-orm";
import type { Request, Response } from "express";
import express from "express";
import type { CompanySchema, PaginationMetaType } from "./company.type";

const router = express.Router();

interface CompaniesSearchQuery {
	searchValue?: string;
	techValue?: string | string[];
	page?: string;
	pageSize?: string;
}

interface CompaniesResponse {
	data: CompanySchema[];
	metadata: PaginationMetaType;
}

/**
 * GET /api/companies
 * Fetches companies with pagination, search, and filtering.
 *
 * Query parameters:
 * - searchValue: string (optional) - Search term for company name
 * - techValue: string | string[] (optional) - Technology filters (can be multiple)
 * - page: string (optional, default: "1") - Current page number
 * - pageSize: string (optional, default: "10") - Items per page
 */
router.get(
	"/companies",
	async (req: Request<{}, {}, {}, CompaniesSearchQuery>, res: Response) => {
		try {
			// Parse and validate query parameters
			const searchValue = req.query.searchValue || "";
			const page = Number.parseInt(req.query.page || "1", 10);
			const pageSize = Number.parseInt(req.query.pageSize || "10", 10);

			// Handle techValue - can be a single string or array of strings
			let techValue: string[] = [];
			if (req.query.techValue) {
				techValue = Array.isArray(req.query.techValue)
					? req.query.techValue
					: [req.query.techValue];
			}

			// Validate inputs
			if (page < 1 || pageSize < 1) {
				return res.status(400).json({
					error:
						"Invalid pagination parameters. Page and pageSize must be greater than 0.",
				});
			}

			if (pageSize > 100) {
				return res.status(400).json({
					error: "pageSize cannot exceed 100.",
				});
			}

			const offset = (page - 1) * pageSize;

			// Build the 'where' clause dynamically based on the inputs
			const conditions = [];

			// 1. Add search condition (if searchValue is provided)
			if (searchValue) {
				conditions.push(
					or(
						ilike(schema.companies.company_name, `%${searchValue}%`),
						// Add other searchable fields here, e.g., description
						// ilike(schema.companies.description, `%${searchValue}%`),
					),
				);
			}

			// 2. Add technology filter condition (if techValue has items)
			if (techValue.length > 0) {
				conditions.push(sql`${schema.companies.technologies} @> ${techValue}`);
			}

			// Combine all conditions with `AND`
			const whereClause =
				conditions.length > 0 ? and(...conditions) : undefined;

			// Run two queries concurrently for efficiency
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

			const metadata: PaginationMetaType = {
				currentPage: page,
				totalPages: totalPages,
				pageSize: pageSize,
				totalItems: totalItems,
				hasNextPage: page < totalPages,
				hasPreviousPage: page > 1,
			};

			const response: CompaniesResponse = {
				data: companies,
				metadata,
			};

			return res.status(200).json(response);
		} catch (error) {
			console.error("Error in filterCompaniesWithPagination:", error);
			return res.status(500).json({
				error: "Failed to fetch companies",
				message: error instanceof Error ? error.message : "Unknown error",
			});
		}
	},
);

export default router;
