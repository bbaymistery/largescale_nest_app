import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  private comments = [
    { id: 1, postId: 1, text: 'Harika bir makale!' },
    { id: 2, postId: 1, text: 'Çok faydalı rehber, teşekkürler.' },
  ];

  findAll() {
    return this.comments;
  }
}
