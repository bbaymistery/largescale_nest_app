import { Controller, Get } from '@nestjs/common';
import { PostService } from './post.service.js';

/*
PostController
Nə üçün lazımdır: Məqalələrlə (Post) əlaqəli HTTP sorğularını (`GET /posts`, `GET /posts/:id`)
emal etmək və bu əməliyyatları `PostService` vasitəsilə yerinə yetirmək üçün nəzərdə tutulub.
*/
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) { }

  @Get()
  getPosts() {
    return this.postService.findAll();
  }
}
