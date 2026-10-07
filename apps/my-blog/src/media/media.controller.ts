import { Body, Controller, Post } from '@nestjs/common';
import { MediaService } from './media.service.js';

/*
MediaController
Nə üçün lazımdır: Fayl yükləmə (upload) və media fayllarının idarə olunması ilə əlaqəli HTTP sorğularını
(`POST /media/upload`) emal etmək və bu əməliyyatları `MediaService` vasitəsilə idarə etmək üçün nəzərdə tutulub.
*/
@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) { }

  @Post('upload')
  upload(@Body('filename') filename: string) {
    return this.mediaService.uploadFile(filename || 'default.png');
  }
}
