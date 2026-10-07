import { Injectable } from '@nestjs/common';
/*
CommentService
Nə üçün lazımdır: Şərhlərlə (Comment) əlaqəli biznes məntiqini emal etmək üçün nəzərdə tutulub.
`CommentController` bu servisin metodlarından istifadə edərək şərhləri tapır və qaytarır.
*/
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
