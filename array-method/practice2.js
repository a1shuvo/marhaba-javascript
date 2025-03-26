/* 
* Topic: Array Methods (some, every, flat)
* Page: 224
* Practice: 1 to 4
*/


// #1
const numbers = [20, 40, 60, 100, 150];
const hasGreaterThan100 = numbers.some(number => number > 100);
console.log(hasGreaterThan100);


// #2
const nums = [0, 15, 25, 45, 55];
const divisibleBy5 = nums.every(num => num % 5 === 0);
console.log(divisibleBy5);


// #3
const words = ["javascript", "hi", "hello", "world", "coding", "programming"];
const hasHello = words.some(word => word === "hello");
console.log(hasHello);


// #4
const ages = [15, 18, 21, 27, 31, 65];
const allAdult = ages.every(age => age > 18);
console.log(allAdult);