import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Product} from "./product.entity";

@Injectable()
export class ProductsService {
	constructor(@InjectRepository(Product)
	            private repository: Repository<Product>) {
	}

	async  findAll(): Promise<Product[]> {
        return await this.repository.find();
    }
}
