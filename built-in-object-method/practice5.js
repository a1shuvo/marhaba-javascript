/* 
* Topic: Built-in Object & Method (Set & Map)
* Page: 293
* Practice: 1 to 4
*/


// #1
const nums = [1, 2, 2, 3, 4, 4, 5];
const uniqueNums = new Set(nums);
console.log(uniqueNums);


// #2
const newSet = new Set();
newSet.add(10);
newSet.add(20);
newSet.add(10);
newSet.add(30);
console.log(newSet);


// #3
const numsSet = new Set([10, 20, 30]);
numsSet.delete(20);
console.log(numsSet);


// #4
const numbers = [1, 2, 3, 4, 2, 1, 5, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);