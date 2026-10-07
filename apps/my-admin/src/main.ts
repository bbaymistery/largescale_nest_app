import { NestFactory } from '@nestjs/core';
import { MyAdminModule } from './my-admin.module.js';

async function bootstrap() {
  const app = await NestFactory.create(MyAdminModule);
  await app.listen(process.env.port ?? 3000);
}
await bootstrap();
