import { Inject, Injectable, BadRequestException, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { LoginReturnDto } from './dto/login-return.dto';
import { LoginDto } from './dto/login.dto';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';

@Injectable({ scope: Scope.REQUEST })
export class AuthService {
  public authenticated: boolean;
  public currentUserId = 0;

  constructor(
    private userService: UsersService,
    @Inject(REQUEST) private readonly request: Request,
  ) {
    let token: string;
    if (request.headers['user-token'] instanceof Array) {
      token = request.headers['user-token'][0];
    } else {
      token = request.headers['user-token'];
    }
    this.authenticated = !!token;
    if (this.authenticated) {
      this.currentUserId = +token.split('-')[1];
    }
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
    this.currentUserId = user.id;
    return { token: `MySuperUserToken-${user.id}` };
  }

  async currentUser(): Promise<User> {
    if (!this.currentUserId) return null;
    return await this.userService.findById(this.currentUserId);
  }
}
