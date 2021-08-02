import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { createHash } from 'crypto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}

  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  async findByEmail(email: string): Promise<User> {
    return await this.repository.findOne({ where: { email: email } });
  }

  hashPassword(userId: number, password: string): string {
    function md5(s: string): string {
      return createHash('md5').update(s).digest('hex');
    }

    return md5(userId + password);
  }
}
