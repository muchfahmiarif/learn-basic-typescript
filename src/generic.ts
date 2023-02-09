function getData(value: any) {
  return value;
}

console.log(getData(`Fahmi`).length);
console.log(getData(123));\

// Generic
function myData<T>(value: T) {
  return value;
}

console.log(myData(`Fahmi`).length);
console.log(myData(123));

// Generic Arrow Function\
const arrowData = <T>(value: T) => {
  return value;
}

// Generic pada jsx
const jsx = <T extends {}>(value: T) => {
  return value;
}
