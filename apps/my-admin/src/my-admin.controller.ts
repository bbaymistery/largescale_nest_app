import { Controller, Get } from '@nestjs/common';
import { MyAdminService } from './my-admin.service.js';
/*
MyAdminController
Nə üçün lazımdır: Admin panel ilə bağlı HTTP sorğularını (`GET /`) emal etmək və bu əməliyyatları
`MyAdminService` vasitəsilə yerinə yetirmək üçün nəzərdə tutulub.
*/
@Controller()
export class MyAdminController {

  @Get()
  getHello(): string {
    return this.myAdminService.getHello();
  }
}
