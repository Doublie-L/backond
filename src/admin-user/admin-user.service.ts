import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";

import { adminUserInterface } from "./interfaces/admin-user.interface";
import { CreateAdminUser } from "./dto/create-admin-user";

@Injectable()
export class AdminUserService {
  private readonly users: any[];

  constructor(
    @Inject("AdminUserModel_MODEL")
    private readonly AdminUserModel: Model<adminUserInterface>
  ) {}

  async create(createAdminUserDto: CreateAdminUser): Promise<adminUserInterface> {
    const createdCat = new this.AdminUserModel(createAdminUserDto);
    return createdCat.save();
  }


  // 根据姓名查询
  async findOne(username: string): Promise<any | undefined> {
    return this.AdminUserModel.findOne({ username })
  }

  async findAll(): Promise<adminUserInterface[]> {
    return this.AdminUserModel.find().exec();
  }



}
