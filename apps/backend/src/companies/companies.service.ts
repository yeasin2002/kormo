import { Injectable } from '@nestjs/common';
import { DrizzleDatabase, InjectClient } from '@sixaphone/nestjs-drizzle';
import { eq } from 'drizzle-orm';
import { DBS } from '../database/constants';
import { companies } from '../database/schema/companies';
import type { Schema } from '../database/types';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectClient(DBS.PRIMARY)
    private readonly db: DrizzleDatabase<'postgres', Schema>,
  ) {}

  async findAll() {
    return await this.db.select().from(companies);
  }

  async findByName(name: string) {
    return await this.db
      .select()
      .from(companies)
      .where(eq(companies.company_name, name));
  }

  async create(companyData: typeof companies.$inferInsert) {
    return await this.db.insert(companies).values(companyData).returning();
  }

  async update(
    name: string,
    companyData: Partial<typeof companies.$inferInsert>,
  ) {
    return await this.db
      .update(companies)
      .set(companyData)
      .where(eq(companies.company_name, name))
      .returning();
  }

  async delete(name: string) {
    return await this.db
      .delete(companies)
      .where(eq(companies.company_name, name))
      .returning();
  }
}
