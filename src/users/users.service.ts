import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private id = 0;

  create(createUserDto: CreateUserDto) {
    this.users.push({ id: ++this.id, ...createUserDto, createdAt: new Date() });
    return this.users;
  }

  findAll() {
    return [...this.users];
  }

  findOne(id: number) {
    const found = this.users.find((user) => user.id === id);
    if (!found) throw new NotFoundException(`${id} user is not found!`);
    return found;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const found = this.findOne(id);
    this.remove(id);
    this.users.push({ ...found, ...updateUserDto, updatedAt: new Date() });
    return this.findOne(id);
  }

  remove(id: number) {
    this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
  }
}
