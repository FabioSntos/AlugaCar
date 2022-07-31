import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("users")
export class User {
	@PrimaryColumn()
	id: string;

	@Column()
	name: string;

	@Column()
	password: string;

	@Column()
	email: string;

	@Column()
	driver_license: string;

	@Column()
	isAdmin: boolean = false;

	@CreateDateColumn()
	created_at: Date = new Date();

	constructor() {
		if (!this.id) {
			this.id = uuidV4();
		}
	}
}
