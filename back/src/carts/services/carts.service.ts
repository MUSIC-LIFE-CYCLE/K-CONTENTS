import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CartsEntity } from '../carts.entity';
import { RegisterCartsDTO } from '../dto/carts-register.dto';

@Injectable()
export class CartsService {
  constructor(private readonly cartsRepository: Repository<CartsEntity>) {}
  async registerCarts(cart: RegisterCartsDTO): Promise<void> {
    await this.cartsRepository.save(cart);
  }
}
