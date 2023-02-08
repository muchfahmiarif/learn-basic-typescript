export class User {
  public name: string;
  constructor(name: string, public age: number) {
    this.name = name;
  }
}
let user = new User("Fahmi", 25);
console.log(user);

export class People {
  name: string;

  constructor(name: string, public age: number) {
    this.name = name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getName = (): string => {
    return this.name;
  };
}

// public = bisa diakses dari luar class / di semua class
// private = hanya bisa diakses dari class itu sendiri
// protected = hanya bisa diakses dari class itu sendiri dan class turunannya

class Admin extends People {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = ``;
  static getRoleName: string = `Admin`;

  constructor(name: string, age: number, phone: string) {
    super(name, age);
    this.phone = phone;
  }

  static getNameRole(): string {
    return `Hei Admin`;
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }

  // setter (untuk validasi)
  set email(value: string) {
    if (value.length > 5) {
      this._email = value;
    } else {
      this._email = `Email salah`;
    }
  }

  // getter (untuk get value)
  get email(): string {
    return this._email;
  }
}

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
