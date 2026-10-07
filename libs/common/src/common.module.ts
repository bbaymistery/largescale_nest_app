import { Module } from '@nestjs/common';
import { CommonService } from './common.service.js';
import { ContextProvider } from './providers/context.provider.js';
import { HttpExceptionFilter } from './filters/http-exception.filter.js';
import { RolesGuard } from './guards/roles.guard.js';

/**
 * CommonModule
 * Nə üçün lazımdır: `libs/common` kitabxanasındakı bütün ümumi servisləri,
 * filterləri, guard-ları və provider-ləri bir yerə toplayıb digər modullara export etmək üçün.
 */
@Module({
  providers: [CommonService, ContextProvider, HttpExceptionFilter, RolesGuard],
  exports: [CommonService, ContextProvider, HttpExceptionFilter, RolesGuard],
})
export class CommonModule {}

