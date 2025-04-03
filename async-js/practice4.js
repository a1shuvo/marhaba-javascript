/* 
* Topic: Async JS (JavaScript behind the scene)
* Page: 312
* Practice: 1 to 4
*/


// #1
// How does Javascript code run?
/* 
*1. JavaScript Code Execution starts with loading the script into the engine.

*2. Compilation: The code is parsed and compiled into machine code.

*3. Call Stack: The code is executed in the global context, with function calls being added to the call stack as they occur.

*4. Synchronous Execution: Code executes line by line, blocking further operations until completed.

*5. Asynchronous Execution: Operations like setTimeout or Promises are offloaded to the Web API and then moved to the message queue or callback queue once they are ready.

*6. The Event Loop ensures that JavaScript can handle asynchronous tasks without blocking the rest of the application.

By following this sequence, JavaScript is able to efficiently execute both synchronous and asynchronous code while maintaining a smooth user experience, especially in web applications.
*/


// #2
// What is JavaScript?
/* 
JavaScript is a high-level, interpreted programming language used to create dynamic and interactive content on websites. It enables features like form validation, animations, handling user interactions, and updating content without reloading the page. JS is a core technology of the web, alongside HTML and CSS. It can run in both the browser (client-side) and on the server (via Node.js).
*/


// #3
// One-Step Flowchart for JIT Compilation:
// JavaScript Code Runs --> JIT Compiler Compiles Hot/Repeated Code to Machine Code --> Executed Optimized Code
/* 
*1. JavaScript Code Runs: Initially, the JavaScript code is executed by the browser (or Node.js). At first, it is interpreted line-by-line.

*2. JIT Compiler Compiles Hot/Repeated Code: When the engine detects that some parts of the code are being executed repeatedly (frequent functions or "hot" code), it uses the JIT compiler to convert that code into highly efficient machine code during runtime.

*3.Executed Optimized Code: The optimized machine code is then executed, which is much faster than the interpreted JavaScript code.
*/


// #4
// How does the memory management and garbage collection process work in JavaScript? 
/* 
* Memory Management in JavaScript:
* Memory Allocation: When you create variables, functions, or objects, JavaScript allocates memory for them.
* Primitive values like numbers, strings, booleans, null, undefined, and symbol are allocated in a stack, which is a part of memory that stores data temporarily.
* Objects and arrays are stored in the heap, which is a larger and more flexible area of memory, since they can vary in size.
* Automatic Memory Management: JavaScript manages memory automatically. We don't need to manually allocate or deallocate memory (as in languages like C++). However, we must write our code in a way that allows the engine to free up memory when it's no longer needed.

* Garbage Collection in JavaScript:
* Mark-and-Sweep Algorithm: Modern JavaScript engines (like V8, used by Chrome and Node.js) typically use a mark-and-sweep garbage collection algorithm. This works in two main steps:
*1. Marking: The garbage collector first marks all the objects that are still in use by tracing references from roots (global objects, function scopes, etc.). These are called reachable objects.
*2. Sweeping: After marking the reachable objects, the garbage collector sweeps through the memory, reclaiming the memory used by objects that are no longer referenced. These are called unreachable objects, and their memory is freed.
*/