"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(uname, pwd, fName, lName, phone, email, adm, rvw, act) {
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
    return User;
}());
exports.User = User;
