import { Module } from '@nestjs/common';
import { AdminUserService } from './admin-user.service';
import { adminUserProviders } from './admin-user.providers';
import { DatabaseModule } from '../database/database.module';
import { AdminUserController } from './admin-user.controller';
@Module({
  imports: [DatabaseModule],
  controllers: [AdminUserController],
  providers: [AdminUserService, ...adminUserProviders],
  exports:[AdminUserService]

})
export class AdminUserModule {}
