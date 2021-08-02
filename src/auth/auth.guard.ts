import { CanActivate, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  canActivate(): boolean | Promise<boolean> | Observable<boolean> {
    return this.authService.authenticated;
  }
}

@Injectable()
export class NotAuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  canActivate(): boolean | Promise<boolean> | Observable<boolean> {
    return !this.authService.authenticated;
  }
}
