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
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { PageModule } from './page/page.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig
    }),
    AuthModule,
    ProductModule,
    PageModule,
    ReviewModule
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
