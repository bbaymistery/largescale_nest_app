import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  get(key: string): string {
    const config: Record<string, string> = {
      PORT: '3000',
      APP_NAME: 'My Blog Platform',
      ENV: 'development',
    };
    return config[key] || '';
  }
}
