import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { ProductController } from './product/product.controller';
import { ReviewController } from './review/review.controller';
import { PageController } from './page/page.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConfig } from './configs/mongo.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig
    })
  ],
  controllers: [
    AppController, 
    AuthController, 
    ProductController, 
    ReviewController, 
    PageController
  ],
  providers: [AppService],
})
export class AppModule {}
