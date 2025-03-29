/* 
* Topic: JS Core Concept (undefined and null)
* Page: 262-263
* Practice: 1 to 5
*/


// #1
let variable;
console.log(variable);


// #2
function add(a, b) {
    a + b;
}
console.log(add(2, 3));


// #3
const nums = [10, 20, 30, 40, 50];
delete nums[2];
console.log(nums[2], nums);


// #4
function sum(a, b, c) {
    console.log(a, b, c);
}
sum(5, 10); // Parameter value c is not passing as argument. Result of c is undefined.


// #5
const student = {
    name:'serious sojib',
    roll: 1,
    masks: 99
}
console.log(student.marks); // Trying to access property 'marks' which is not present. Result of undefined.