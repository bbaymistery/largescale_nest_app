import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module.js';
import { ConfigModule } from './config/config.module.js';
import { PostModule } from './post/post.module.js';
import { CommentModule } from './comment/comment.module.js';
import { ReactionModule } from './reaction/reaction.module.js';
import { MediaModule } from './media/media.module.js';
import { PaymentModule } from './payment/payment.module.js';
import { ContextProvider } from '@app/common';

@Module({
  imports: [
    CoreModule,
    ConfigModule,
    PostModule,
    CommentModule,
    ReactionModule,
    MediaModule,
    PaymentModule,
  ],
  providers: [ContextProvider],
})
export class AppModule {}
