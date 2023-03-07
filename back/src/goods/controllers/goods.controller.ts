import { Controller, Get, Post } from '@nestjs/common';
import { RegisterGoodsDTO } from '../dto/goods-register.dto';
import { GoodsService } from '../services/goods.service';

@Controller('goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}

  @Get()
  async getAllgoods() {
    return await this.goodsService.getAllGoods();
  }
  @Post()
  async registerGoods(registerGoodsDTO: RegisterGoodsDTO) {
    return await this.goodsService.registerGoods(registerGoodsDTO);
  }
}
