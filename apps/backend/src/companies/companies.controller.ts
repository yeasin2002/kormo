import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { companies } from '../database/schema/companies';
import { CompaniesService } from './companies.service';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  async findAll() {
    return this.companiesService.findAll();
  }

  @Get(':name')
  async findByName(@Param('name') name: string) {
    return this.companiesService.findByName(name);
  }

  @Post()
  async create(@Body() companyData: typeof companies.$inferInsert) {
    return this.companiesService.create(companyData);
  }

  @Put(':name')
  async update(
    @Param('name') name: string,
    @Body() companyData: Partial<typeof companies.$inferInsert>,
  ) {
    return this.companiesService.update(name, companyData);
  }

  @Delete(':name')
  async delete(@Param('name') name: string) {
    return this.companiesService.delete(name);
  }
}
