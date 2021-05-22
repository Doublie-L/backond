import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AdminUserController } from './admin-user/admin-user.controller';
import { AdminUserModule } from "./admin-user/admin-user.module";
import { AuthModule } from './auth/auth.module';
import { CreateSchemaModule } from './create-schema/create-schema.module';

@Module({
  imports: [AdminUserModule, AuthModule, CreateSchemaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
