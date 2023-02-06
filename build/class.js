"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.People = exports.User = void 0;
class User {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
}
exports.User = User;
let user = new User("Fahmi", 25);
console.log(user);
class People {
    constructor(name, age) {
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.name = name;
    }
    setName(name) {
        this.name = name;
    }
}
exports.People = People;
// public = bisa diakses dari luar class / di semua class
// private = hanya bisa diakses dari class itu sendiri
// protected = hanya bisa diakses dari class itu sendiri dan class turunannya
class Admin extends People {
    constructor() {
        super(...arguments);
        this.read = true;
        this.write = true;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
}
let admin = new Admin(`Fahmi`, 25);
admin.getName();
admin.getRole();
admin.setName(`Fahmi`);
