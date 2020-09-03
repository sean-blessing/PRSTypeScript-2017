import { User } from './user';

export class UserService {
	//implement list, get(id), create(User), change(User), remove(User), authenticate(username, pwd)
	nextId: number = 1;
	users: User[] = [
		//new User("user1", "pwd1", "fn1", "ln1", "p1", "e1", true, true, true),
		//new User("user2", "pwd2", "fn2", "ln2", "p2", "e2", true, true, true),
		//new User("user3", "pwd3", "fn3", "ln3", "p3", "e3", true, true, true)
	];

	list(): User[] {
		return this.users;
	}

	get(id: number): User[] {
		let usrs: User[] = [];
		for (let user of this.users) {
			if (user.id==id) {
				usrs.push(user);
				break;
			}
		}
		return usrs;
	}

	add(user: User): string {
		user.id = this.nextId++;
		this.users.push(user);
		return "User added.";
	}

	change(user: User): string {
		let dbusr: User = this.get(user.id)[0];
		dbusr.userName = user.userName;
		dbusr.password = user.password;
		return "User changed."
	}

	remove(user: User): string {
		let index: number = -1;
		for (let idx:number = 0; idx < this.users.length; idx++) {
			if (user.id==this.users[idx].id) {
				index = idx;
			}
		}
		this.users.splice(index,1);
		return "User removed.";
	}

	authenticate(username: string, password: string): User[] {
		let usrs: User[] = [];
		for (let user of this.users) {
			if (user.userName.toLowerCase() == username && user.password.toLowerCase() == password) {
				usrs.push(user);
				break;
			}
		}
		return usrs;
	}
}