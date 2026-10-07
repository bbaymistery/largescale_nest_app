import { Injectable } from '@nestjs/common';

/*
PostService
Nə üçün lazımdır: Məqalələrlə (Post) əlaqəli biznes məntiqini (məsələn: bütün məqalələri tapmaq)
əməl etmək və bu məntiqi müxtəlif kontrollerlərdən (məsələn: PostController, UserController)
istifadə üçün təqdim etmək üçün nəzərdə tutulub.
*/
@Injectable()
export class PostService {
  private posts = [
    { id: 1, title: 'NestJS Architecture', content: 'Building scalable applications.' },
    { id: 2, title: 'Monorepo Guide', content: 'Sharing code with apps and libs.' },
  ];

  findAll() {
    return this.posts;
  }
}
