import { Injectable } from '@nestjs/common';

/*
ReactionService
Nə üçün lazımdır: Reaksiyalarla (bəyənmə, sevgi və s.) bağlı biznes məntiqini emal etmək üçün.
`ReactionController` bu servisin metodlarından istifadə edərək reaksiyaları əldə edir.
*/
@Injectable()
export class ReactionService {
  private reactions = [
    { id: 1, postId: 1, type: 'LIKE' },
    { id: 2, postId: 1, type: 'LOVE' },
  ];

  findAll() {
    return this.reactions;
  }
}
