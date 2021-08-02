import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from '../categories/category.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  category_id: number;

  @Column('text', { nullable: true })
  thumbnail_url: string;

  @Column()
  visible_public: boolean;

  @Column()
  visible_authenticated: boolean;

  @ManyToOne('Category', (category: Category) => category.products)
  @JoinColumn({ name: 'category_id' })
  category: Category;
}
