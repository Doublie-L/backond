import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminUserService } from "../admin-user/admin-user.service";


@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: AdminUserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user._doc;
      return result;
    }
    return null;
  }

  async login(user: any) {
    return {
      access_token: this.jwtService.sign(user),
    };
  }
}
