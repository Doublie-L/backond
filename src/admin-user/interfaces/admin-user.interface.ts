import { Document } from 'mongoose';

export interface adminUserInterface extends Document {
  readonly username: string;
  readonly password:string;
  readonly age: number;
  readonly breed: string;
}
