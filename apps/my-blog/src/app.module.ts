import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module.js';
import { ConfigModule } from './config/config.module.js';
import { PostModule } from './post/post.module.js';
import { CommentModule } from './comment/comment.module.js';
import { ReactionModule } from './reaction/reaction.module.js';
import { MediaModule } from './media/media.module.js';
import { PaymentModule } from './payment/payment.module.js';
import { ContextProvider } from '@app/common';

/**
 * AppModule - `my-blog` tətbiqinin əsas (kök/root) modulu.
 * Bütün digər funksional modullar və ümumi servislər bu modulda bir araya gətirilir.
 */
@Module({
  imports: [
    CoreModule,      // Tətbiqin mərkəzi biznes məntiqi və verilənlər bazası bağlantıları
    ConfigModule,    // Ətraf mühit (environment) dəyişənlərinin konfiqurasiyası
    PostModule,      // Məqalə/Post idarəetmə modulu
    CommentModule,   // Şərh (comment) idarəetmə modulu
    ReactionModule,  // Reaksiya (bəyənmə/reaksiya) idarəetmə modulu
    MediaModule,     // Media (şəkil/fayl yükləmə) modulu
    PaymentModule,   // Ödəniş idarəetmə modulu
  ],
  // ContextProvider: Sorğu (request) çərçivəsində istifadəçi sessiyası, Correlation ID və s.
  // kimi kontekst məlumatlarını idarə etmək üçün kök səviyyədə təyin olunmuş servisdir.
  providers: [ContextProvider],
})
export class AppModule {}

