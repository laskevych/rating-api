import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { ProductController } from './product/product.controller';
import { ReviewController } from './review/review.controller';
import { TopPageController } from './top-page/top-page.controller';
import { PageController } from './page/page.controller';

@Module({
  imports: [],
  controllers: [AppController, AuthController, ProductController, ReviewController, TopPageController, PageController],
  providers: [AppService],
})
export class AppModule {}
