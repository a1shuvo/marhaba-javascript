/* 
* Topic: Object Methods freeze(), seal() and delete property
* Page: 139-140
* Practice: 1 to 6
*/


// #1
const headphone = {
    brand: "Sony",
    price: 3000,
    color: "red"
}
Object.freeze(headphone);
headphone.model = "P30";
console.log(headphone);


// #2
const player = {
    name: "Messi",
    goals: 800,
    club: "Inter Miami"
}
Object.freeze(player);
player['age'] = 35;
console.log(player);


// #3
const book = {
    title: "Harry Potter",
    author: "JK Rowling",
    pages: 500
}
Object.seal(book);
book.author = "Jhankar Mahbub"
console.log(book);


// #4
const gadget = {
    name: "iPhone",
    price: 120000,
    color: "Black"
}
delete gadget.price;
console.log(gadget);


// #5
const animal = {
    name: "Tiger",
    location: "Sundarban"
}
Object.freeze(animal);
animal.location = "Bandarban"
console.log(animal);


// #6
const food = {
    name: "Pizza",
    price: 500,
    size: "Large"
}
Object.seal(food);
food.type = "Italian";
food.price = 1000;
console.log(food);