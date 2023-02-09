"use strict";
function getData(value) {
    return value;
}
console.log(getData(`Fahmi`).length);
console.log(getData(123));
// Generic
function myData(value) {
    return value;
}
console.log(myData(`Fahmi`).length);
console.log(myData(123));
// Generic Arrow Function\
const arrowData = (value) => {
    return value;
};
// Generic pada jsx
const jsx = (value) => {
    return value;
};
