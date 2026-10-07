import { Controller, Get } from '@nestjs/common';
import { MyAdminService } from './my-admin.service.js';

@Controller()
export class MyAdminController {
  constructor(private readonly myAdminService: MyAdminService) {}

  @Get()
  getHello(): string {
    return this.myAdminService.getHello();
  }
}
