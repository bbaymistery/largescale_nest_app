import { Controller, Get } from '@nestjs/common';
import { CommentService } from './comment.service.js';

/*
CommentController
Nə üçün lazımdır: Şərhlərlə (Comment) əlaqəli HTTP sorğularını (`GET /comments`) emal etmək
və bu əməliyyatları `CommentService` vasitəsilə yerinə yetirmək üçün nəzərdə tutulub.
*/
@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) { }

  @Get()
  getComments() {
    return this.commentService.findAll();
  }
}
