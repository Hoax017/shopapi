import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private service: ProductsService) {}

  @Get()
  findWithUserContext(): Promise<Product[]> {
    return this.service.findAllWithUserContext();
  }

  @Get('all')
  findAll(): Promise<Product[]> {
    return this.service.findAll();
  }
}
