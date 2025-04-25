/*
* Topic: this context (Hoisting)
* Page: 393-394
* Practice: 1 to 7
*/


// #1
// Will give a ReferenceError. Can't access before initialization. 
// commentsCount + 1;
const commentsCount = 10;


// #2
// Will give a ReferenceError. Can't access before initialization. 
// views / 2;
const views = 100;


// #3
// What is Temporal Dead Zone and why it's important?
/*
* The Temporal Dead Zone (TDZ) refers to the time between the hoisting of a variable declaration (with let or const) and its initialization in the code. During this time, the variable is in a "dead zone" where it exists in memory but is not yet initialized with a value. If we try to access or reference the variable before it’s initialized, a ReferenceError will be thrown.

* Importance: The Temporal Dead Zone (TDZ) ensures that variables declared with let and const are not accessed before being initialized. This prevents bugs by enforcing a clear order of declaration and initialization, helping developers catch errors early. TDZ promotes better coding practices, making code more reliable and easier to debug.
*/


// #4
// Why is a function with a function expression hoisted but can't be called before initialization?
/* 
* A function expression is hoisted in a way that only the variable declaration is moved to the top, not the function definition. This is because in a function expression, the function is assigned to a variable, which is treated just like any other value assignment in JavaScript.
* When the variable is hoisted, it exists but is undefined until it’s assigned the function.
* If we try to call the function before the assignment, the variable holds undefined (or null for some cases), not a function reference, causing an error.
* Function declarations are fully hoisted (both the name and the function body).
* Function expressions only hoist the variable declaration (not the function body), so the function cannot be called before it's assigned a value.
*/
// Will give a ReferenceError. Can't access before initialization. 
// myFunc();
const myFunc = function () {
    console.log("Hello!");
};



// #5
// Hoisting behaviour of variables declared with var with examples.
/* 
* In JavaScript, variables declared with var are hoisted to the top of their scope during the compilation phase. This means the declaration is moved to the top, but not the initialization.
*/
console.log(x); // Output: undefined (not ReferenceError)
var x = 5;
console.log(x); // Output: 5


// #6
// Hoisting behavior of let vs var in JavaScript.
/* 
* Both let and var declarations are hoisted in JavaScript, but they behave very differently due to the Temporal Dead Zone (TDZ) for let and const.

- Hoisting: var hoisted declaration + initialized as undefined. let is hoisted but declaration only, no initialization.
- Temporal Dead Zone: var create no TDZ. let histed and is in TDZ (cannot access before declaration) until its declaration is encountered.
*/


// #7
/* 
* How bigNumber() executes before declaration?

* This behavior occurs due to function hoisting in JavaScript.

* Execution Process: 
* Compilation Phase (before any code executes):
- The JavaScript engine scans the code and finds the function declaration
- It "hoists" (lifts) the entire function declaration to the top of its containing scope
- The function is stored in memory with its full definition

* Execution Phase:
- When console.log(bigNumber(87, 12)) executes, the function already exists in memory
- The function call works normally, comparing 87 and 12
- Returns 87 (since 87 > 12)
- Outputs 87 to the console
*/
console.log(bigNumber(87, 12));
function bigNumber(a, b) {
    return a > b ? a : b;
}
