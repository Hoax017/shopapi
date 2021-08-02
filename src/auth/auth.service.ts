import { Inject, Injectable, BadRequestException, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { LoginReturnDto } from './dto/login-return-dto';
import { LoginDto } from './dto/login-dto';
import { UsersService } from '../users/users.service';

@Injectable({ scope: Scope.REQUEST })
export class AuthService {
  public authenticated: boolean;

  constructor(
    private userService: UsersService,
    @Inject(REQUEST) private readonly request: Request,
  ) {
    this.authenticated = !!request.headers.hasOwnProperty('user-token');
  }

  async login(userInfos: LoginDto): Promise<LoginReturnDto> {
    const user = await this.userService.findByEmail(userInfos.email);
    if (!user) throw new BadRequestException('User not found');
    const hashedPassword = this.userService.hashPassword(
      user.id,
      userInfos.password,
    );
    if (hashedPassword !== user.password_hash)
      throw new BadRequestException('Invalid password');
    return { token: `MySuperUserToken-${user.id}` };
  }
}
