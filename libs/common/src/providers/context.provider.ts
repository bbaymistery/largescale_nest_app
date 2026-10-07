import { Injectable } from '@nestjs/common';

/**
 * ContextProvider
 * Nə üçün lazımdır: Cari sorğu (request) çərçivəsində lazımi məlumatları (məsələn: Correlation ID,
 * istifadəçi session məlumatları və ya tenant parametri) saxlamaq və digər servislərdə rahatlıqla oxumaq üçün.
 */
@Injectable()
export class ContextProvider {
  private currentContext: Map<string, any> = new Map();

  set<T = any>(key: string, value: T): void {
    this.currentContext.set(key, value);
  }

  get<T = any>(key: string): T | undefined {
    return this.currentContext.get(key);
  }

  clear(): void {
    this.currentContext.clear();
  }
}

