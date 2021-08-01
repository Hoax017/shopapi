import { Controller, Get } from '@nestjs/common';
import {UsersService} from "./users.service";
import {User} from "./user.entity";

@Controller('users')
export class UsersController {
	constructor(private service: UsersService) {
	}

	@Get()
	index(): Promise<User[]> {
		return this.service.findAll();
	}
}
