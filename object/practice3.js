/* 
* Topic: Object Methods keys(), values(), entries(), hasOwnProperty() & For...in Loop
* Page: 137
* Practice: 1 to 9
*/


// #1
const book = {
    name: "Moner moto mon",
    author: "Somoresh Mozumder",
    price: 150
}
console.log(Object.keys(book));
console.log(Object.values(book));


// #2
const article = {
    title: "Learning JS",
    category: "Programming"
}
const articleKeys = Object.keys(article);
const hasAuthor = articleKeys.includes("author");
console.log(hasAuthor);


// #3
const laptop = {
    brand: "Dell",
    model: "Inspiron",
    price: 45000    
}
for (const key in laptop) {
    console.log(key, laptop[key]);
}


// #4
const phone = {
    brand: "Samsung",
    model: "Galaxy S21",
    price: 85000
}
const phoneKeys = Object.keys(phone);
for (const key of phoneKeys) {
    const value = phone[key];
    console.log(key, value);
}


// #5
const bike = {
    brand: "Hero",
    price: 120000,
    model: "Splendor"
}
console.log(Object.values(bike));


// #6
const books = {
    book1: "Harry Potter",
    book2: "The Hobbit",
    book3: "Game of Thrones"
}
for(const key in books){
    console.log(books[key]);
}


// #7
const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}
let sum = 0;
for(const key in numbers){
    sum += numbers[key];
}
console.log("Sum:", sum);


// #8
const player = {
    name: "Messi",
    team: "Argentina",
    goals: 91
}
console.log(Object.values(player));


// #9
const building = {
    floors: 10,
    address: {
        street: "Main Road",
        city: "Dhaka"
    },
    type: "Commercial"
}
for (const key in building) {
    console.log(key, building[key]);
}