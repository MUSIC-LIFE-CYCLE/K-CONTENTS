import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RegisterGoodsDTO } from '../dto/goods-register.dto';
import { GoodsEntity } from '../goods.entity';

@Injectable()
export class GoodsService {
  constructor(private readonly goodsRepository: Repository<GoodsEntity>) {}
  async getAllGoods() {
    try {
      const goods = await this.goodsRepository.find();
      return goods;
    } catch (error) {
      throw new BadRequestException('');
    }
  }
  async registerGoods(good: RegisterGoodsDTO): Promise<void> {
    const { product_name } = good;
    const goods = await this.goodsRepository.findOne({
      where: { product_name },
    });
    if (goods) {
      throw new BadRequestException('해당 상품은 이미 가입되어있습니다.');
    }
    await this.goodsRepository.save(good);
  }
}
