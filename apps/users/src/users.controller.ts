import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string): Promise<User> {
    return this.usersService.getUser(id);
  }

  @Post()
  createUser(@Body() user: UserDto): Promise<User> {
    return this.usersService.createUser(user);
  }
}
