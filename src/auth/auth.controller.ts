import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { NotAuthGuard } from './auth.guard';
import { LoginReturnDto } from './dto/login-return.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}
  @UseGuards(NotAuthGuard)
  @Post('login')
  login(@Body() userInfos: LoginDto): Promise<LoginReturnDto> {
    return this.service.login(userInfos);
  }
}
