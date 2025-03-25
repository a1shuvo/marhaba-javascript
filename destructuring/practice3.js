/* 
* Topic: Spread Operator
* Page: 209-210
* Practice: 1 to 6
*/


// #1
const technologies = ["Condition", "array", "loop"];
const programming = ["variable", ...technologies];
console.log(programming);


// #2
const fruits = ["Apple", "Banana", "Mango"];
const myFruits = [...fruits, "papaya", "orange"];
console.log(myFruits);


// #3
const frontEnd = ["JavaScript"];
const backEnd = ["Node.js"];
const database = ["MongoDB"];
const fullStack = [...frontEnd, ...backEnd, ...database];
console.log(fullStack);


// #4
const website = {
    name: "MySite",
    type: "e-commerce",
    status: "active"
}
const myWebsite = {...website, theme: "dark"};
console.log(myWebsite);


// #5
const young = {
    name: "Arif",
    age: 30,
    country: "B Baria"
}
const {country, ...newYoung} = young;
console.log(newYoung);


// #6
const car = {
    make:"Toyota",
    model: "Corolla",
    year: 2020
}
const newCar = {...car, year: 2032};
console.log(newCar);