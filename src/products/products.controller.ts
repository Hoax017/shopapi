import { Controller, Get } from '@nestjs/common';
import {ProductsService} from "./products.service";
import {Product} from "./product.entity";

@Controller('products')
export class ProductsController {
	constructor(private service: ProductsService) {
	}

	@Get()
	index(): Promise<Product[]> {
		return this.service.findAll();
	}
}
