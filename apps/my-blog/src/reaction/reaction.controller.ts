import { Controller, Get } from '@nestjs/common';
import { ReactionService } from './reaction.service.js';

/*
ReactionController
Nə üçün lazımdır: Məqalələrə/şərhlərə verilən bəyənmə və digər reaksiyalarla bağlı HTTP sorğularını
(`GET /reactions`) emal etmək və bu əməliyyatları `ReactionService` vasitəsilə yerinə yetirmək üçün nəzərdə tutulub.
*/
@Controller('reactions')
export class ReactionController {
  constructor(private readonly reactionService: ReactionService) { }

  @Get()
  getReactions() {
    return this.reactionService.findAll();
  }
}
