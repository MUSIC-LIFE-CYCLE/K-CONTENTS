import { Controller, Post } from '@nestjs/common';
import { RegisterCartsDTO } from '../dto/carts-register.dto';
import { CartsService } from '../services/carts.service';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}
  @Post()
  async registerCarts(registerCartsDTO: RegisterCartsDTO) {
    return await this.cartsService.registerCarts(registerCartsDTO);
  }
}
