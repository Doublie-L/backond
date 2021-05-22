import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateAdminUser } from './dto/create-admin-user';
import { adminUserInterface } from './interfaces/admin-user.interface';
import { AdminUserService } from './admin-user.service';

@Controller('admin-user')
export class AdminUserController {
  constructor(private readonly adminUserService: AdminUserService) {}

  @Post()
  async create(@Body() createAdminUserDto: CreateAdminUser) {
   return  this.adminUserService.create(createAdminUserDto);
  }

  @Get()
  async findAll(): Promise<adminUserInterface[]> {
    return this.adminUserService.findAll();
  }
}
