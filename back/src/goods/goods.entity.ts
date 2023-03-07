import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { CommonEntity } from '../common/entities/common.entity'; // ormconfig.json에서 파싱 가능하도록 상대 경로로 지정
import { Column, Entity } from 'typeorm';

@Entity({
  name: 'GOODS',
}) // GOODS : 테이블 명
export class GoodsEntity extends CommonEntity {
  @IsString()
  @IsNotEmpty({ message: '아티스트의 이름을 입력해주세요.' })
  @Column({ type: 'varchar', unique: true, nullable: false })
  artis_name: string;

  @IsString()
  @Column({ type: 'varchar' })
  artist_agency: string;

  @IsString()
  @IsNotEmpty({ message: '상품의 이름을 작성해주세요.' })
  @Column({ type: 'varchar', nullable: false })
  product_name: string;

  @IsDate({ message: '날짜 형식을 맞춰주세요.' })
  @Column({ type: 'varchar', nullable: false })
  product_date: Date;

  @IsString()
  @Column({ type: 'varchar', default: false })
  product_price: string;

  //* Relation *//
}

/*
const author = await User.findOne( { id: '...' } )
author.blogs.push(new BlogEntity(...))
await author.save()
*/
