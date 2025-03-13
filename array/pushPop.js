/* 
* Topic: Array Manipulation with (push, pop, shift, unshift) methods
* Page: 99-100
* Practice: 1 to 5
*/


// #1
const numbers = [10, 20, 30, 40, 50];
numbers.push(60);
console.log(numbers);

// #2
const names = ["Sojib", "Sagor", "Sakib", "Sohel"];
names.push("Sumon");
console.log(names);

// #3
const games = ["Free Fire", "PUBG", "Candy Crush", "Temple Run"];
games.pop();
console.log(games);

// #4
const numbersArray = [24, 36, 48, 60];
numbersArray.unshift(12);
console.log(numbersArray);

// #5
const books = ["Himu", "Tin Goyenda", "Psychology of Money", "The Richest Man in Babylon", "Satkahon"];
books.shift();
console.log(books);
