"use strict";
exports.__esModule = true;
var user_1 = require("./user");
var user_service_1 = require("./user.service");
var UserCore = /** @class */ (function () {
    function UserCore() {
        this.userSvc = new user_service_1.UserService();
        console.log("UserCore consructed");
    }
    return UserCore;
}());
exports.UserCore = UserCore;
var uc = new UserCore();
var users = uc.userSvc.list();
console.log(users);
var usrs = uc.userSvc.get(1);
var usr;
if (usrs.length > 0) {
    usr = usrs[0];
    console.log(usr);
}
else {
    console.log("We have a serious error!");
}
// testing the add
var adduser = new user_1.User("user1", "pwd1", "fn1", "ln1", "p1", "e1", true, true, true);
var rc = uc.userSvc.add(adduser);
console.log(rc);
console.log(uc.userSvc.list());
// testing the change
var getuser = uc.userSvc.get(1)[0];
getuser.password = "xxxxx";
var rc1 = uc.userSvc.change(getuser);
console.log(rc1);
console.log(uc.userSvc.list());
// testing authenticate
var ausers = uc.userSvc.authenticate('user1', 'xxxxx');
if (ausers.length == 0) {
    console.log("uname/pwd is not valid");
}
else {
    console.log("login success.");
}
// testing the remove
var rmuser = uc.userSvc.get(1)[0];
var rc2 = uc.userSvc.remove(rmuser);
console.log(rc2);
console.log(uc.userSvc.list());
