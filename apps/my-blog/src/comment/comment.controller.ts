import { Controller, Get } from '@nestjs/common';
import { CommentService } from './comment.service.js';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  getComments() {
    return this.commentService.findAll();
  }
}
