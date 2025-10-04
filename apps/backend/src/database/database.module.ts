import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DrizzleModule } from '@sixaphone/nestjs-drizzle';
import { DBS } from './constants';
import * as schema from './schema';

@Module({
  imports: [
    DrizzleModule.forRootAsync({
      name: DBS.PRIMARY,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'),
        schema,
      }),
    }),
  ],
  exports: [DrizzleModule],
})
export class DatabaseModule {}
