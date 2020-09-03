"use strict";
exports.__esModule = true;
var UserService = /** @class */ (function () {
    function UserService() {
        //implement list, get(id), create(User), change(User), remove(User), authenticate(username, pwd)
        this.nextId = 1;
        this.users = [];
    }
    UserService.prototype.list = function () {
        return this.users;
    };
    UserService.prototype.get = function (id) {
        var usrs = [];
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.id == id) {
                usrs.push(user);
                break;
            }
        }
        return usrs;
    };
    UserService.prototype.add = function (user) {
        user.id = this.nextId++;
        this.users.push(user);
        return "User added.";
    };
    UserService.prototype.change = function (user) {
        var dbusr = this.get(user.id)[0];
        dbusr.userName = user.userName;
        dbusr.password = user.password;
        return "User changed.";
    };
    UserService.prototype.remove = function (user) {
        var index = -1;
        for (var idx = 0; idx < this.users.length; idx++) {
            if (user.id == this.users[idx].id) {
                index = idx;
            }
        }
        this.users.splice(index, 1);
        return "User removed.";
    };
    UserService.prototype.authenticate = function (username, password) {
        var usrs = [];
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.userName.toLowerCase() == username && user.password.toLowerCase() == password) {
                usrs.push(user);
                break;
            }
        }
        return usrs;
    };
    return UserService;
}());
exports.UserService = UserService;
