import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {User} from "./user.entity";

@Injectable()
export class UsersService {
	constructor(@InjectRepository(User)
	            private repository: Repository<User>) {
	}

	async  findAll(): Promise<User[]> {
        return await this.repository.find();
    }
}
