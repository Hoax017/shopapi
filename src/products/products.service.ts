import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ProductsService {
  constructor(
    private readonly authService: AuthService,
    @InjectRepository(Product)
    private repository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.repository.find();
  }

  async findAllWithUserContext(id?: number): Promise<Product[]> {
    const where: { [k: string]: any } = {};
    if (id) where.category_id = id;
    if (this.authService.authenticated) where.visible_authenticated = true;
    else where.visible_public = true;

    return await this.repository.find({ where });
  }

  async find(id: number) {
    return await this.repository.findOne(id);
  }
}
