import { User } from './user';
import { UserService } from './user.service';

export class UserCore {
	userSvc: UserService;

	constructor() {
		this.userSvc = new UserService();
		console.log("UserCore consructed");
	}
}

let uc: UserCore = new UserCore();
let users: User[] = uc.userSvc.list();
console.log(users);
let usrs: User[] = uc.userSvc.get(1);
let usr: User;
if (usrs.length>0) {
	usr = usrs[0];
	console.log(usr);
}
else {
	console.log("We have a serious error!");
}
// testing the add
let adduser: User = new User("user1", "pwd1", "fn1", "ln1", "p1", "e1", true, true, true);
let rc: string = uc.userSvc.add(adduser);
console.log(rc);
console.log(uc.userSvc.list());

// testing the change
let getuser: User = uc.userSvc.get(1)[0];
getuser.password="xxxxx";
let rc1: string = uc.userSvc.change(getuser);
console.log(rc1);
console.log(uc.userSvc.list());

// testing authenticate
let ausers: User[] = uc.userSvc.authenticate('user1', 'xxxxx');
if (ausers.length==0) {
	console.log("uname/pwd is not valid");
}
else {
	console.log("login success.")
}

// testing the remove
let rmuser: User = uc.userSvc.get(1)[0];
let rc2: string = uc.userSvc.remove(rmuser);
console.log(rc2);
console.log(uc.userSvc.list());