import { Injectable } from '@nestjs/common';

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
