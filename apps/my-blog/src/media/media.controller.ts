import { Body, Controller, Post } from '@nestjs/common';
import { MediaService } from './media.service.js';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post('upload')
  upload(@Body('filename') filename: string) {
    return this.mediaService.uploadFile(filename || 'default.png');
  }
}
