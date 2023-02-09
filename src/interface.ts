interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Laptop {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  on() {
    console.log("Asus is on");
  }
  off() {
    console.log("Asus is off");
  }
}

class Dell implements Laptop {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  on() {
    console.log("Dell is on");
  }
  off() {
    console.log("Dell is off");
  }
}

let asus = new Asus("Asus");
console.log(asus.on());
console.log(asus.off());

let dell = new Dell("Dell");
console.log(dell.on());
console.log(dell.off());
