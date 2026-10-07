import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service.js';

/**
 * UserController
 * Nə üçün lazımdır: İstifadəçi məlumatları ilə bağlı HTTP sorğularını (`GET /users`, `GET /users/:id`)
 * emal etmək və bu əməliyyatları `UserService` vasitəsilə yerinə yetirmək üçün nəzərdə tutulub.
 */
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  getAllUsers() {
    return this.userService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.findOne(Number(id));
  }
}
