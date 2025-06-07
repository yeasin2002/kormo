import { companies as companiesData } from '@/data/companies-data';
import { db } from '@/db';
import { companies } from '@/db/schema/companies';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Check if companies already exist
    const existingCompanies = await db.select().from(companies);
    if (existingCompanies.length > 0) {
      return NextResponse.json(
        {
          message: 'Companies already seeded',
          success: false,
        },
        { status: 400 },
      );
    }

    // Insert all companies
    await db.insert(companies).values(companiesData);

    return NextResponse.json({
      message: 'Companies seeded successfully',
      count: companiesData.length,
      success: true,
    });
  } catch (error) {
    console.error('Error seeding companies:', error);
    return NextResponse.json(
      {
        message: 'Error seeding companies',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
