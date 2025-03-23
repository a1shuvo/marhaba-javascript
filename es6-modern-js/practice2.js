/* 
* Topic: ES6 & Modern Javascript (Template String)
* Page: 191
* Practice: 1 to 7
*/


// #1
const num1 = 100;
const num2 = 20;
const difference = `The difference between ${num1} and ${num2} is ${num1 - num2}.`;
console.log(difference);


// #2
const employee = {
    name: "Shuvo Saha",
    age: 31,
    salary: 100000
}
console.log(`Name: ${employee.name}
Age: ${employee.age}
Salary: ${employee.salary}`);


// #3
const fruits = ["Apple", "Banana", "Guava", "Grape", "Orange"];
console.log(`My favorite food is ${fruits[2]}.`);


// #4
const a = 50;
const b = 10;
console.log(`The division of ${a} and ${b} is ${a / b}.`);


// #5
const person = {
    firstName: "Amit",
    lastName: "Kumar"
}
console.log(`Full Name: ${person.firstName} ${person.lastName}`);


// #6
const animals = ["Cat", "Dog", "Elephant"];
console.log(`My favorite animals are ${animals.join(', ')}`);


// #7
const student = {
    name: "Shrija",
    age: 15,
    results: [89, 83, 92]
};
let sum = 0;
for (const result of student.results) {
    sum += result;
}
console.log(`The average result of ${student.name} is ${sum / student.results.length}.`);