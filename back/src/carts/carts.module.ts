import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartsEntity } from './carts.entity';
import { CartsController } from './controllers/carts.controller';
import { CartsService } from './services/carts.service';

@Module({
  imports: [TypeOrmModule.forFeature([CartsEntity])],
  controllers: [CartsController],
  providers: [CartsService],
})
export class CartsModule {}
