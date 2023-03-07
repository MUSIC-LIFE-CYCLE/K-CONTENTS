import { IsInt, IsNotEmpty } from 'class-validator';
import { CommonEntity } from '../common/entities/common.entity'; // ormconfig.json에서 파싱 가능하도록 상대 경로로 지정
import { Column, Entity } from 'typeorm';

@Entity({
  name: 'CARTS',
}) // GOODS : 테이블 명
export class CartsEntity extends CommonEntity {
  @IsInt()
  @IsNotEmpty({ message: '수량을 입력해주세요.' })
  @Column({ type: 'number', nullable: false })
  product_counts: number;

  //* Relation *//
}

/*
const author = await User.findOne( { id: '...' } )
author.blogs.push(new BlogEntity(...))
await author.save()
*/
