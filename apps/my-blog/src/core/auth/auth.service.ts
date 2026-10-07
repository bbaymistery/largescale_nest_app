import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service.js';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  login(email: string) {
    const users = this.userService.findAll();
    const user = users.find((u) => u.email === email);

    if (!user) {
      return { success: false, message: 'Kullanıcı bulunamadı' };
    }

    return {
      success: true,
      token: 'fake-jwt-token-12345',
      user,
    };
  }
}
