/*
* Topic: JS Tricky Concept (eval and with)
* Page: 403
* Practice: 1 to 2
*/


// #1
// What is with()? What does it do?
/* 
* In JavaScript, the with() statement is used to extend the scope chain within a block of code. When used, it allows to refer to properties or methods of an object directly without needing to prefix them with the object's name.
*/
const person = {
    name: 'John',
    age: 30
};

with (person) {
    console.log(name); // John
    console.log(age);  // 30
}

/* 
* In the code above, instead of writing person.name and person.age, we can just use name and age directly because the with(person) statement makes the person object available in the current scope.
*/


// #2
// What is eval()? Why should it not be used?
/* 
* In JavaScript, eval() is a global function that evaluates or executes a string of JavaScript code. It can take a string as an argument and execute it as if it were regular JavaScript code.
* It can execute any JavaScript code, including variable declarations, function definitions, and control structures like loops and conditionals.
* It can also access and modify variables in the surrounding scope (which can lead to security risks).

* Why should eval() not be used?
- Security risks: If the string passed to eval() is user-generated, it could execute malicious code, leading to code injection vulnerabilities. This is a major security concern in web applications.
- Performance issues: Modern JavaScript engines perform optimizations when they know the structure of the code, but eval() prevents such optimizations.
- Difficult to debug and maintain: Code executed via eval() is harder to debug because it's generated dynamically and can come from various sources, making the flow of execution difficult to follow.
- Confusion with scope: eval() can access and modify variables in the local scope, which can lead to unexpected side effects and bugs.
- Strict mode restrictions: In strict mode ('use strict';), eval() behaves more restrictively. It doesn't allow you to declare new variables in the surrounding scope, and trying to modify certain properties can result in errors.

* Avoid eval() whenever possible due to its potential for introducing security risks, performance issues, and hard-to-maintain code.
*/