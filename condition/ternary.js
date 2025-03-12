/* 
* Topic: Ternary Operator
* Page: 90
* Practice: 1 to 7
*/


// #1
const price = 3001;
const cashback = price > 3000 ? 500 : 0;
console.log(cashback);

// #2
const age = 18;
console.log(age > 15 ? "Teenager" : "Child");

// #3
const isLoggedIn = true;
const message = isLoggedIn ? "Welcome back" : "Please login";
console.log(message);

// #4
const isOilTankFull = true;
console.log(isOilTankFull ? "Ready for a long drive" : "Fill the tank");

// #5
const isPassed = false;
console.log(isPassed ? "Party time" : "Next Semester e serious study korbo");

// #6
const sunny = false;
console.log(!sunny ? "Stay home" : "");

// #7
const Expensive = true;
console.log(!Expensive ? "I will buy this item" : "");
// Logical Operator approach which don't print empty String
!Expensive && console.log("I will buy this item!");