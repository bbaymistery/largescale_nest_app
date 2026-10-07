import { Controller, Get } from '@nestjs/common';
import { ReactionService } from './reaction.service.js';

@Controller('reactions')
export class ReactionController {
  constructor(private readonly reactionService: ReactionService) {}

  @Get()
  getReactions() {
    return this.reactionService.findAll();
  }
}
