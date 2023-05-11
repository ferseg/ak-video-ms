import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dtos/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  getUser(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  createUser(user: UserDto): Promise<User> {
    const userEntity = this.userRepository.create(user);
    return this.userRepository.save(userEntity);
  }
}
