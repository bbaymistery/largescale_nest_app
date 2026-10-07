import { Injectable } from '@nestjs/common';

@Injectable()
export class MyAdminService {
  getHello(): string {
    return 'Hello World!';
  }
}
