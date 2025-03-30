/* 
* Topic: Built-in Object & Method (constructor)
* Page: 282
* Practice: 1 to 4
*/


// #1
const start = '786';
const startNum = Number(start);
console.log(typeof startNum, startNum);
// Before '+' will also convert a string to a number
// console.log(typeof +start);


// #2
const willAttend = 0;
const willAttendBool = Boolean(willAttend);
console.log(typeof willAttendBool, willAttendBool);


// #3
const address = new Object();
address.city = 'Dhaka';
address.country = 'Bangladesh';
console.log(typeof address, address);


// #4
const total = 1970;
const totalStr = String(total);
console.log(typeof totalStr, totalStr);
// Add empty string ('') with plus (+) operator will also convert a number to a string.
/* const totalS = total + '';
console.log(typeof totalS); */