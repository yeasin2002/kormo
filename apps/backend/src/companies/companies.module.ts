import { Module } from '@nestjs/common';
import { DrizzleModule } from '@sixaphone/nestjs-drizzle';
import { DBS } from '../database/constants';
import { companies } from '../database/schema/companies';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';

@Module({
  imports: [
    DrizzleModule.forFeature({
      entities: [companies],
      name: DBS.PRIMARY,
    }),
  ],
  controllers: [CompaniesController],
  providers: [CompaniesService],
  exports: [CompaniesService],
})
export class CompaniesModule {}
