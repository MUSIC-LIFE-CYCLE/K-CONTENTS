import { Module } from '@nestjs/common';
import { GoodsController } from './controllers/goods.controller';
import { GoodsService } from './services/goods.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoodsEntity } from './goods.entity';
@Module({
  imports: [TypeOrmModule.forFeature([GoodsEntity])],
  providers: [GoodsService],
  controllers: [GoodsController],
})
export class GoodsModule {}
