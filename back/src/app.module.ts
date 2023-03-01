import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoodsModule } from './goods/goods.module';
import { UsersModule } from './users/users.module';
import { CartsModule } from './carts/carts.module';
import { ProductImagesModule } from './product-images/product-images.module';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [GoodsModule, UsersModule, CartsModule, ProductImagesModule, ImagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
