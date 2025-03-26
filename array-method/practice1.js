/* 
* Topic: Array Methods (map, forEach, filter, find, findIndex)
* Page: 221
* Practice: 1 to 9
*/


// #1
const items = [30, 45, 20, 60, 10];
const newItems = items.map(item => item + 13);
console.log(newItems);


// #2
const names = ["Messi", "Maradona", "Pele", "Zidane", "Ronaldo"];
const filteredNames = names.filter(name => name.length > 5);
console.log(filteredNames);


// #3
const numbers = [10, 15, 20, 25, 30, 35];
const findNumber = numbers.find(number => number > 20);
console.log(findNumber);


// #4
const heights = [65, 70, 68, 72, 68, 73];
const filteredHeights = heights.filter(height => height > 69);
console.log(filteredHeights);


// #5
const nums = [7, 10, 15, 20, 25, 30];
const newNums = nums.map(num => num / 3);
console.log(newNums);


// #6
const friends = ["Leonardo", "Brad Pitt", "Kate Winslet", "Audrey Hepburn", "Johnny Depp"];
const thirdLetter = friends.map(friend => friend[2]);
console.log(thirdLetter);


// #7
const namesArray = ["Tom", "Harry", "Sam", "Jack"];
const findName = namesArray.find(name => name[0]==="H");
console.log(findName);


// #8
const array = [1, 2, 3, 4, 5];
array.forEach(item => console.log(item));


// #9
const animals = ["cow", "goat", "sheep", "horse"];
animals.forEach(animal => console.log(animal));