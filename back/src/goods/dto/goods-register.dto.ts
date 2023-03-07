import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { GoodsEntity } from '../goods.entity';

export class RegisterGoodsDTO {
  @IsString()
  @IsNotEmpty({ message: '아티스트의 이름을 입력해주세요.' })
  artis_name: string;

  @IsString()
  artist_agency: string;

  @IsString()
  @IsNotEmpty({ message: '상품의 이름을 작성해주세요.' })
  product_name: string;

  @IsDate({ message: '날짜 형식을 맞춰주세요.' })
  product_date: Date;

  @IsString()
  product_price: string;
}
