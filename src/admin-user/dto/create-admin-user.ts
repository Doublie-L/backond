import { IsNumber, IsString } from "class-validator";

export class CreateAdminUser {
  @IsString()
  readonly username: string;

  @IsNumber({},{
    message:'年龄必须是数字'
  })
  readonly age: number;

  @IsString()
  readonly breed: string;

  @IsString()
  readonly password: string;
}
