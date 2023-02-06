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

  getRole(): { read: boolean; write: boolean } {
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
