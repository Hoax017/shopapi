import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("products")
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

    @Column('text', {nullable: true})
    thumbnail_url: string;

    @Column()
    visible_public: number;

    @Column()
    visible_authenticated: number;
}
