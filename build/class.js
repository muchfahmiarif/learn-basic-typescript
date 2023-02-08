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
    constructor(name, age, phone) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = ``;
        this.phone = phone;
    }
    static getNameRole() {
        return `Hei Admin`;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
    // setter (untuk validasi)
    set email(value) {
        if (value.length > 5) {
            this._email = value;
        }
        else {
            this._email = `Email salah`;
        }
    }
    // getter (untuk get value)
    get email() {
        return this._email;
    }
}
Admin.getRoleName = `Admin`;
// let admin = new Admin(`Fahmi`, 25, `08123456789`);
// admin.getName();
// admin.getRole();
// admin.setName(`Fahmi`);
// admin.phone;
// admin.email = `@.com`;
// console.log(admin.email);
let admin = Admin.getRoleName;
console.log(admin);
let role = Admin.getNameRole();
console.log(role);
