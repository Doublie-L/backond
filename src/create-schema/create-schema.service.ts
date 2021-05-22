import { Inject, Injectable } from "@nestjs/common";
import { Model, Mongoose } from "mongoose";
import * as mongoose from 'mongoose';
import { AdminUserSchema } from "../admin-user/schemas/admin-user";

@Injectable()
export class CreateSchemaService {
  constructor(
    @Inject("DATABASE_CONNECTION")
    private readonly mongoose: Mongoose
  ) {
  }

  async create() {
    const createSchema = new mongoose.Schema({
      username: String

    });
    const Create_User_Model = mongoose.model("create_User", createSchema);
    const felyne = new Create_User_Model({ username: "2222" });
    return felyne.save();
  }

}
