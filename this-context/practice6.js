/*
* Topic: this context (Execution Context)
* Page: 395
* Practice: 1 to 2
*/


// #1
// What is the execution context? How does it work?
/* 
* An execution context is represents the environment in which JavaScript code is executed. It contains all the information necessary to execute the code, such as variable and function declarations, the scope chain, and the value of this.

* An execution context is a container that holds information about:
- Which code is currently running
- What variables are in scope
- The value of this
- The location in the call stack

* There are 2 phases in every execution context.  

1. Creation Phase: 
This phase occurs before any code is executed and sets up the environment.

- Variables, functions, and arguments are stored in memory.
- The scope chain and this are determined.
- Functions are hoisted.

2. Execution Phase:
This phase runs the code line by line.

- Code is executed line by line
- Variables are assigned values
- Functions are executed

* Types of Execution Contexts in JavaScript:

Global Execution Context (GEC):
- Created when your JS code first runs.
- Only one global context.
- It creates the global object (window in browsers, global in Node.js and after ES2020 globalThis for all environment).
- Sets up the this keyword to refer to that global object.

Function Execution Context (FEC):
- Created whenever a function is called.
- Each function call gets its own execution context.
- It has its own variables, scope, and value of this.

Eval Execution Context:
- Created when eval() is used (rarely used in modern code for security/performance reasons).

*/



// #2
// What is the Global context? How does it work? Why does it need?
/* 

// What:
* The Global Execution Context (GEC) is the default environment where JavaScript code starts executing. It is the first execution context created when a script runs and remains active until the program terminates.

// How:
* When the JavaScript engine starts executing a script.
1. Creation Phase: 
- The JavaScript engine creates the global execution context.
- Creates the global object (window, global, or globalThis).
- Sets this to point to the global object.
- Hoists all variable and function declarations to memory.
- It then starts executing the code line by line.

// Why:
- Starting Point: The GEC is where the JavaScript engine starts running the code.  It is the launchpad or base environment to execute scripts.
- Global Scope: It manages globally scoped variables and functions. Anything declared outside a function lives here.
- Call Stack Foundation: The global context is at the bottom of the call stack. All function contexts sit on top of it. The GEC is the first context pushed onto the call stack. When functions are called, their execution contexts are stacked on top of the GEC.
- Accessibility: We can access global stuff from anywhere in the code, unless shadowed by a local scope.

*/