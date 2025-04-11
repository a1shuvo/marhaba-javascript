/*
* Topic: Class
* Page: 356-37
* Practice: 1 to 8
*/


// #1
// Difference between class and object.
/*
* A class is like a blueprint for creating objects. It defines the structure and behavior (via properties and methods) that the objects created from it will have.
* An object is an instance of a class. It is created using the class and contains real values for the properties defined in the class.
* Definition: Class is blueprint/template and object is Instance of a class.
* Purpose: Class defines structure & behavior and object holds actual data and methods.
* Created using: Class created with class keyword and object created with new keyword with a class.
* Example: class Car { ... } and const myCar = new Car(...)
*/


// #2
// Class instance
/* 
* A class instance is a real object created from a class with its own unique data.
*/


// #3
class Vehicle {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
}
const bmwX5 = new Vehicle('BMW', 'X5', '30000');
const tesla = new Vehicle('Tesla', 'Model 3', '40000');
console.log(bmwX5);
console.log(tesla);


// #4
class Worker {
    constructor(id, name, hoursWorked) {
        this.id = id;
        this.name = name;
        this.hoursWorked = hoursWorked;
    }
}
const worker = new Worker(101, 'Tom Cruise', 40);
console.log(worker);


// #5
class Library {
    constructor(name, books, location) {
        this.name = name;
        this.books = books;
        this.location = location;
    }
}
const library = new Library('Central Library', 10000, 'Dhaka');
console.log(library instanceof Library);


// #6
class Classroom {
    constructor(section, teacher) {
        this.students = [];
        this.section = section;
        this.teacher = teacher;
    }
}
const classA = new Classroom('A', 'Mr. Plumber');
console.log(classA);


// #7
class Product {
    constructor(name, category, stock) {
        this.name = name;
        this.category = category;
        this.stock = stock;
    }
}
const mobile = new Product('Mobile', 'Electronics', 50);
console.log(mobile);


// #8
class NewProduct {
    constructor(name, category, stock = 0) {
        this.name = name;
        this.category = category;
        this.stock = stock;
    }
}
const newProduct = new NewProduct('Mobile', 'Electronics');
console.log(newProduct);