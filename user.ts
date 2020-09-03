export class User {
    id: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    admin: boolean;
    reviewer: boolean;
    active: boolean;

    constructor(uname: string, pwd: string, fName: string, 
                lName: string, phone: string, email: string,
                adm: boolean, rvw: boolean, act: boolean) {
        this.userName = uname;
        this.password = pwd;
        this.firstName = fName;
        this.lastName = lName;
        this.phone = phone;
        this.email = email;
        this.admin = adm;
        this.reviewer = rvw;
        this.active = act;
    }
}