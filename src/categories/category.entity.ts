import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../products/product.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  index: number;

  @Column()
  label: string;

  @Column()
  description: string;

  @OneToMany(() => Product, (product: Product) => product.category)
  products: Product[];
}
