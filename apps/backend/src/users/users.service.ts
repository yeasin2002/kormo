import { Injectable } from '@nestjs/common';
import type { CreateUserDto } from "./dto/create-user.dto";
import type { UpdateUserDto } from "./dto/update-user.dto";
import type { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
		private users: User[] = [
			{
				id: 1,
				name: "John Doe",
				email: "john.doe@example.com",
			},
			{
				id: 2,
				name: "Yeasin",
				email: "yeasin@example.com",
			},
		];

		create(createUserDto: CreateUserDto) {
			return {
				id: createUserDto.id,
				name: createUserDto.name,
				email: createUserDto.email,
			};
		}

		findAll() {
			return this.users;
		}

		findOne(id: number) {
			return this.users.find((user) => user.id === id);
		}

		update(id: number, _updateUserDto: UpdateUserDto) {
			return this.users.find((user) => user.id === id);
		}

		remove(id: number) {
			return this.users.find((user) => user.id === id);
		}
	}
