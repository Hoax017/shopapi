import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("categories")
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    index: number;

    @Column()
    label: string;

    @Column()
    description: string;
}
