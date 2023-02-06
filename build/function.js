"use strict";
// tipe data pada balikan function
function getName() {
    return "hello world ini function";
    // return 123
}
console.log(getName());
function getAge() {
    return 123;
}
console.log(getAge());
// function yang tidak mengembalikan nilai
function printName() {
    console.log("hello world ini function printName");
}
printName();
// argument pada function
function multiply(value1, value2) {
    return value1 * value2;
}
let hasil = multiply(10, 2);
console.log(hasil);
let age = 10;
let Add = (val1, val2) => {
    return val1 + val2;
};
// default parameter
const fullName = (first, last = "Fahmi") => {
    return `${first} ${last}`;
    // atau
    // return first + " " + last;
};
console.log(fullName("Muchammad", "Arif"));
// optional parameter
let getName2 = (first, last) => {
    return `${first} ${last}`;
    // atau
    // return first + " " + last;
};
console.log(getName2("Fahmi"));
