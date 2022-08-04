import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

import { hash } from "bcryptjs";

@injectable()
export class CreateUserUseCase {
	constructor(
		@inject("UsersRepository")
		private usersRepository: IUsersRepository
	) {}

	async execute({
		name,
		email,
		driver_license,
		password,
	}: ICreateUserDTO): Promise<void> {
		const passwordHash = await hash(password, 8);
		const userAlreadyExists = await this.usersRepository.findByEmail(email);

		if (userAlreadyExists) {
			throw new Error("User already exists.");
		}

		await this.usersRepository.create({
			name,
			email,
			driver_license,
			password: passwordHash,
		});
	}
}
