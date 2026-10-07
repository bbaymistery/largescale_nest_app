import { Module } from '@nestjs/common';
import { MyAdminController } from './my-admin.controller.js';
import { MyAdminService } from './my-admin.service.js';
import { CommonModule } from '@app/common';
import { RepositoryModule } from '@app/repository';

@Module({
  imports: [CommonModule, RepositoryModule],
  controllers: [MyAdminController],
  providers: [MyAdminService],
})
export class MyAdminModule {}
