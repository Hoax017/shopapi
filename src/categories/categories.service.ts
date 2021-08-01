import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Category} from "./category.entity";

@Injectable()
export class CategoriesService {
	constructor(@InjectRepository(Category)
	            private repository: Repository<Category>) {
	}

	async  findAll(): Promise<Category[]> {
        return await this.repository.find();
    }
}
