import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './db/db.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, DbModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
