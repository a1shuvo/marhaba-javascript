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




/* --------------------------------------------------------------------------------------------------- */



/* 
* Topic: Array includes() and indexOf()
* Page: 102
* Practice: 1 to 6
*/


// #1
const fruits = ["Apple", "Banana", "Mango", "Lichi"];
const output = fruits.includes("Mango") ? "Mango Ache!" : "Mango Nei, Gache Uth!";
console.log(output);

// #2
const nameList = ["Babul", "Alif", "Choton"];
const index = nameList.indexOf("Babul");
console.log(index);

// #3
const friendList = ["Rimon", "Rifat", "Rajib"];
console.log(friendList.indexOf("Rifat"));

// #4
const cities = ["Dhaka", "Chittagong", "Sylhet"];
cities.push("rajshahi");
console.log(cities.includes("Rajshahi"));

// #5
const namesArray = ["Dighi", "Megh", "Bristi", "Borsha"];
console.log(namesArray.includes("Bristi") ? "I need umberalla" : "No rain no pain");

// #6
const sports = ["Football", "Cricket", "Voleyball"];
console.log(sports.includes("Badminton"));
