import { Controller, Get, Post, UseGuards,Request} from "@nestjs/common";
import { AppService } from "./app.service";
import { AuthService } from "./auth/auth.service";
import { JwtAuthGuard } from "./auth/guards/jwt-auth.guard";
import { RbacGuard } from "./auth/guards/rbac.guard";
import { LocalAuthGuard } from "./auth/guards/local-auth.guard";
import { roleConstans } from "./auth/constants";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly authService: AuthService) {
  }

  // 登录
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login( @Request() req ) {
    return this.authService.login(req.user);
  }


  //获得用户简介
  @UseGuards(JwtAuthGuard,new RbacGuard(roleConstans.HUMAN))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
