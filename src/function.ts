// tipe data pada balikan function

function getName(): string {
  return "hello world ini function";
  // return 123
}
console.log(getName());

function getAge(): number {
  return 123;
}
console.log(getAge());

// function yang tidak mengembalikan nilai
function printName(): void {
  console.log("hello world ini function printName");
}
printName();

// argument pada function
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
let hasil = multiply(10, 2);
console.log(hasil);

// function type
type Age = number;
let age: Age = 10;

type Tambah = (val1: number, val2: number) => number;
let Add: Tambah = (val1: number, val2: number): number => {
  return val1 + val2;
};

// default parameter
const fullName = (first: string, last: string = "Fahmi"): string => {
  return `${first} ${last}`;
  // atau
  // return first + " " + last;
};

console.log(fullName("Muchammad", "Arif"));

// optional parameter
let getName2 = (first: string, last?: string): string => {
  return `${first} ${last}`;
  // atau
  // return first + " " + last;
};
console.log(getName2("Fahmi"));
