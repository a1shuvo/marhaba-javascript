/*
* Topic: Class (Instance Method)
* Page: 361
* Practice: 1 to 4
*/


// #1
class Hotel {
    constructor(name, rooms, price) {
        this.name = name;
        this.rooms = rooms;
        this.price = price;
    }
    getName() {
        return this.name;
    }
}
const hotelSheraton = new Hotel('Sheraton', 50, 5000);
console.log(hotelSheraton.getName());


// #2
class Employee {
    constructor(name, designation, salary) {
        this.name = name;
        this.designation = designation;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
const employee1 = new Employee('Shuvo Saha', 'Software Engineer', 50000);
console.log(employee1.getSalary());


// #3
class Library {
    constructor() {
        this.books = [];
    }
    addBook(bookName) {
        this.books.push(bookName);
    }
    hasBook(bookName) {
        return this.books.includes(bookName);
    }
}
const newBook = new Library;
newBook.addBook('Clean Code');
console.log(newBook.hasBook('Clean Code'));


// #4
class ShoppingCart {
    constructor() {
        this.products = [];
        this.totalPrice = 0;
    }
    addToCart(productName, productPrice) {
        this.products.push(productName);
        this.totalPrice += productPrice;
    }
    getTotalPrice(){
        return this.totalPrice;
    }
}
const newCart = new ShoppingCart;
newCart.addToCart('Mobile', 25000);
newCart.addToCart('Laptop', 35000);
console.log(newCart.getTotalPrice());