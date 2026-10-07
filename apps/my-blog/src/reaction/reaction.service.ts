import { Injectable } from '@nestjs/common';

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
