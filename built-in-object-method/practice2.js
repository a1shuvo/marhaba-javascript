/* 
* Topic: Built-in Object & Method (Math min, max, PI, abs, round, floor, ceil, random)
* Page: 285
* Practice: 1 to 7
*/


// #1
const min = Math.min(45, 11, 89, 23, 56, -12, -56);
console.log(min);


// #2
const max = Math.max(21, 35, 67);
console.log(max);


// #3
console.log(Math.round(7.6));
console.log(Math.round(7.2));


// #4
console.log(Math.floor(9.8));
console.log(Math.floor(5.3));


// #5
console.log(Math.ceil(3.1));
console.log(Math.ceil(6.9));


// #6
console.log(Math.abs(-34));


// #7
function calculate(number) {
    console.log(Math.round(number));
    console.log(Math.floor(number));
    console.log(Math.ceil(number));
}
calculate(7.5);