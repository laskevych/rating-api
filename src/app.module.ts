import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { ProductController } from './product/product.controller';
import { ReviewController } from './review/review.controller';
import { PageController } from './page/page.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [],
  controllers: [
    ConfigModule,
    AppController, 
    AuthController, 
    ProductController, 
    ReviewController, 
    PageController
  ],
  providers: [AppService],
})
export class AppModule {}
