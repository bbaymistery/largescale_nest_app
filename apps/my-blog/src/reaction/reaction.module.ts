import { Module } from '@nestjs/common';
import { ReactionController } from './reaction.controller.js';
import { ReactionService } from './reaction.service.js';

@Module({
  controllers: [ReactionController],
  providers: [ReactionService],
  exports: [ReactionService],
})
export class ReactionModule {}
