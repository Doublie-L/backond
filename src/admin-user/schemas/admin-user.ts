import * as mongoose from 'mongoose';

export const AdminUserSchema = new mongoose.Schema({
  username: String,
  age: Number,
  breed: String,
  password:String,
});
