abstract class Vehicle {
  abstract wheels: number;

  start(): void {
    console.log(`bruummm`);
  }
}

class Car extends Vehicle {
  wheels: number = 4;
}

class Motor extends Vehicle {
  wheels: number = 2;
}

let car = new Car();
car.start(); // bruummm
console.log(car.wheels); // 4

let motor = new Motor();
motor.start(); // bruummm
console.log(motor.wheels); // 2
