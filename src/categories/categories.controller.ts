import { Controller, Get } from '@nestjs/common';
import {CategoriesService} from "./categories.service";
import {Category} from "./category.entity";

@Controller('categories')
export class CategoriesController {
	constructor(private service: CategoriesService) {
	}

	@Get()
	index(): Promise<Category[]> {
		return this.service.findAll();
	}
}
