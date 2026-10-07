import { Injectable } from '@nestjs/common';

@Injectable()
export class ContextProvider {
  private currentContext: Record<string, any> = {};

  set(key: string, value: any) {
    this.currentContext[key] = value;
  }

  get(key: string) {
    return this.currentContext[key];
  }
}
