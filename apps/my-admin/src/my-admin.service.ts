import { Injectable } from '@nestjs/common';
/*
MyAdminService
Nə üçün lazımdır: Admin paneli ilə əlaqəli biznes məntiqini emal etmək üçün nəzərdə tutulub.
`MyAdminController` bu servisin metodlarından istifadə edərək admin panelinin funksiyalarını yerinə yetirir.
*/
@Injectable()
export class MyAdminService {
  getHello(): string {
    return 'Hello World!';
  }
}
