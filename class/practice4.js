/*
* Topic: Class (Prototype chain or inheritance)
* Page: 372
* Practice: 1 to 4
*/


// #1
// How inheritance works in JavaScript?
/* 
* In JavaScript, inheritance is achieved through prototypal inheritance.
* Every object in JavaScript has a hidden [[Prototype]] property (accessible via __proto__ in some environments or Object.getPrototypeOf()).
* When a property/method is accessed on an object, JavaScript first checks the object itself. If not found, it looks up the prototype chain until it reaches null.
* Constructor Functions & prototype
Functions in JavaScript have a prototype property (only relevant when used as constructors with new).
* When an object is created using ew, its [[Prototype]] is set to the constructor's prototype.
* Constructor Functions & prototype
*Functions in JavaScript have a prototype property (only relevant when used as constructors with new).
* When an object is created using new, its [[Prototype]] is set to the constructor's prototype.
* How Inheritance Works Under the Hood
* When using class or extends, the child's prototype is linked to the parent's prototype.
The super keyword calls the parent class's constructor/methods.
*/


// #2
// What is prototypical inheritance?
/* 
* Prototypal inheritance is JavaScript’s core mechanism for sharing properties and methods between objects.

* Every JavaScript object has a hidden [[Prototype]] property (accessible via __proto__ or Object.getPrototypeOf()), which points to another object (its prototype).

* When try to access a property or method on an object, JavaScript first checks the object itself. If it’s not found, it looks up the prototype chain (the prototype, its prototype, and so on) until it finds the property or reaches null.

* This allows objects to "inherit" properties and methods from their prototype dynamically.
*/


// #3
const person = {
    name: 'Shuvo Saha'
}
console.log(Object.getPrototypeOf(person));
console.log(person.toString());


// #4
// Can we Use toString() on a student object even if we didn't define it?
/* 
* Yes, Can use toString() method.
* Default Inheritance from Object.prototype:
* When we create an object in JavaScript (even a simple {}), it automatically inherits from Object.prototype. This includes built-in methods like: toString(), hasOwnProperty(), valueOf().
* When ywe call student.toString(), JavaScript:
- Checks if student has its own toString() → No.
- Looks up the prototype chain → Finds Object.prototype.toString().
- Executes the inherited method.
*/