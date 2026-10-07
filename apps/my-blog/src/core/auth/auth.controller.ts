import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';

/**
 * AuthController
 * Nə üçün lazımdır: İstifadəçilərin daxil olması (login) və sistemə daxil olmaq üçün
 * istifadə etdiyi tokenlərin/sessiyaların idarə olunması ilə əlaqəli HTTP sorğularını (`POST /auth/login`) emal etmək üçün.
 */
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  login(@Body('email') email: string) {
    return this.authService.login(email);
  }
}
