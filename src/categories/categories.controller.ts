import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private service: CategoriesService) {}

  @Get('all')
  findAll(): Promise<Category[]> {
    return this.service.findAll();
  }

  @Get()
  findAllWithUserContext(): Promise<Category[]> {
    return this.service.findAllWithUserContext();
  }
}
