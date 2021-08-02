import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { ProductsService } from '../products/products.service';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private repository: Repository<Category>,
    private productService: ProductsService,
  ) {}

  async findAll(): Promise<Category[]> {
    return await this.repository.find({
      relations: ['products'],
      order: { index: 'ASC' },
    });
  }

  async findAllWithUserContext(): Promise<Category[]> {
    const categories = await this.repository.find({ order: { index: 'ASC' } });
    for (const category of categories) {
      category.products = await this.productService.findAllWithUserContext(
        category.id,
      );
    }
    return categories;
  }
}
