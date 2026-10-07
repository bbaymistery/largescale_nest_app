import { Injectable } from '@nestjs/common';

/**
 * CommonService
 * Nə üçün lazımdır: Tətbiq üzrə ümumi (utility/helper) funksionallıqları
 * (məsələn: təsadüfi kod yaratmaq, tarix formatlamaq və s.) təmin edən mərkəzi servis.
 */
@Injectable()
export class CommonService {
  /**
   * Tətbiqin işlək olduğunu yoxlamaq üçün sadə sağlamlıq (health) mesajı
   */
  getHealthStatus(): string {
    return 'Common Service is operating normally';
  }

  /**
   * Unikal təsadüfi string generatoru
   */
  generateRandomString(length: number = 10): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}

