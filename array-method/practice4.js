/* 
* Topic: Array Method (sort())
* Page: 232-233
* Practice: 1 to 4
*/


// #1
const numbers = [50, 12, 25, 8, 15];
numbers.sort((a, b) => a - b);
console.log(numbers);

// #2
const arrayNumbers = [13, 2, 45, 9, 6];
arrayNumbers.sort((a, b) => b - a);
console.log(arrayNumbers);


// #3
const friends = [
    { name: "Ali", age: 29 },
    { name: "Sara", age: 22 },
    { name: "Tariq", age: 35 }
];
friends.sort((a, b) => a.age - b.age);
console.log(friends);


// #4
const names = ['nabil', 'zubayer', 'sarwar', 'delwar'];
names.sort();
console.log(names);