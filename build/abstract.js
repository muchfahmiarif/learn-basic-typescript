"use strict";
class Vehicle {
    start() {
        console.log(`bruummm`);
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
class Motor extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
let car = new Car();
car.start(); // bruummm
console.log(car.wheels); // 4
let motor = new Motor();
motor.start(); // bruummm
console.log(motor.wheels); // 2
