import { db } from '@/db';
import { companies } from '@/db/schema/companies';
import { SQL, sql } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get('search') || '';
    const technologies = searchParams.get('technologies')?.split(',').filter(Boolean) || [];
    const page = Number(searchParams.get('page')) || 1;
    const limit = Number(searchParams.get('limit')) || 10;
    const offset = (page - 1) * limit;

    // Base query with proper typing

    // Assuming companies is a PgTable
    let query = db.select().from(companies);

    // Add search condition
    if (search) {
      const searchCondition: SQL = sql`
        company_name ILIKE ${`%${search}%`} OR 
        office_location ILIKE ${`%${search}%`}
      `;
      query = query.where(searchCondition);
    }

    // Add technologies filter
    if (technologies.length > 0) {
      const techCondition: SQL = sql`technologies ?& ${technologies}`;
      query = query.where(techCondition);
    }

    // Get total count for pagination
    const totalQuery = db.select({ count: sql<number>`count(*)` }).from(companies);

    // Apply same conditions to total query
    if (search) {
      const searchCondition: SQL = sql`
        company_name ILIKE ${`%${search}%`} OR 
        office_location ILIKE ${`%${search}%`}
      `;
      totalQuery.where(searchCondition);
    }
    if (technologies.length > 0) {
      const techCondition: SQL = sql`technologies ?& ${technologies}`;
      totalQuery.where(techCondition);
    }

    const [{ count }] = await totalQuery;

    // Add pagination and sorting
    const sortCondition: SQL = sql`company_name`;
    query = query.limit(limit).offset(offset).orderBy(sortCondition);

    // Execute query
    const results = await query;

    return NextResponse.json({
      companies: results,
      pagination: {
        total: count,
        page,
        limit,
        totalPages: Math.ceil(count / limit),
        hasMore: offset + limit < count,
      },
      success: true,
    });
  } catch (error) {
    console.error('Error fetching companies:', error);
    return NextResponse.json(
      {
        message: 'Error fetching companies',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
