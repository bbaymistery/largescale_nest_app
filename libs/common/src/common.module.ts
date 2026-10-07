import { Module } from '@nestjs/common';
import { CommonService } from './common.service.js';
import { ContextProvider } from './providers/context.provider.js';

@Module({
  providers: [CommonService, ContextProvider],
  exports: [CommonService, ContextProvider],
})
export class CommonModule {}
