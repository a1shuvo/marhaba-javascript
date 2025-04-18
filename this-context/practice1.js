/*
* Topic: this context
* Page: 379
* Practice: 1 to 3
*/


// #1
// What is the window object in the browser?
/* 
* The window object in a browser is the global object for JavaScript running in the browser environment. It represents the browser window or tab that represents a web page. All global variables, functions and objects (like document, console, localStorage rtc.) are properties of the window object.
*/


// #2
// What will be the value of this, if console.log(this) in browser?
/* 
* It will logs the window object, as this keyword in the global execution context point to the window.
*/


// #3
// Difference between a normal function and an arrow function as a method inside an object.
/* 
* The key difference is: this behavior.
* When use a normal function to declare a method inside an object, this refers to the object itself.
* Otherhand when use a arrow function to declare a method inside an object, this refers to the outer (lexical) scope.
*/