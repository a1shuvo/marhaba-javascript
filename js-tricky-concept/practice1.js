/*
* Topic: JS Tricky Concept (do...while)
* Page: 397-398
* Practice: 1 to 3
*/


// #1
let items = 3;
do {
    console.log(items);
} while (items > 5);


// #2
let attempts = 12;
do {
    console.log(attempts);
    attempts++;
} while (attempts < 10)


// #3
let name = 'John';
do {
    name += 'n';
    console.log(name);
} while (name.length < 10);