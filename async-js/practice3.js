/* 
* Topic: Async JS (Event Loop, Call Stack, Callback Queue)
* Page: 310
* Practice: 1 to 3
*/


// #1
/* 
* Event Loop Process Step-by-Step:

* Call Stack: The call stack is where JavaScript keeps track of all the currently executing functions. It is a Last In, First Out (LIFO) structure.
* When a function is invoked, it is pushed onto the call stack.
* When the function finishes executing, it is popped off the call stack.
* JavaScript starts executing: The code runs synchronously until the first asynchronous operation (like setTimeout() or fetch()) is encountered.

* Async Operation: The asynchronous operation is passed off to the Web APIs or Node APIs to be executed in the background.

* Callback Queue: Once the asynchronous operation completes (e.g., a timer finishes, a network request returns), the associated callback function is pushed into the callback queue.

* Event Loop: The event loop is constantly monitoring both the call stack and the callback queue. If the call stack is empty, it will push the next callback from the callback queue onto the call stack for execution. 

* Executing the Callback: Once the callback is on the call stack, it gets executed like any other function.

* This process allows JavaScript to handle multiple asynchronous operations without blocking the main thread.
*/


// #2
/* 
* Key Differences of Call Stack and Callback Queue are:

* Purpose: Call Stack stores synchronous function calls. Callback Queue stores asynchronous callback functions.

* Order of Execution: Call stack executes in LIFO (Last In, First Out) manner and Callback Queue follows FIFO (First In, First Out).

* Contains: Functions that are currently executing catains in Call Stack. Functions that are waiting to be executed (i.e., async tasks like setTimeout(), event handlers) contains in Callback Queue.

* Execution Process: In Call Stack functions are executed immediately as they are called. Callbacks are executed after the call stack is empty

* The call stack empties once the current function finishes execution. The Callback Queue empties when the event loop moves functions from it to the Call Stack

* Overflow/Limitations: If the call stack overflows (e.g., infinite recursion), a stack overflow error occurs. The Callback Queue has no direct limit, but the event loop can only execute one callback at a time when the call stack is empty
*/


// #3
/* 
* Even though JavaScript is single-threaded, it can handle asynchronous tasks (like network requests, timers, or user events) without blocking the main execution thread. This is achieved through the combination of the event loop, callback queue, and Web APIs (in the browser) or Node APIs (in Node.js).

* In JavaScript, asynchronous tasks do not block the main thread because they are handled by Web APIs (or Node APIs) and later executed via the callback queue once the call stack is empty. The event loop ensures that the asynchronous code is executed at the right time, allowing JavaScript to remain responsive while executing potentially long-running operations efficiently.
*/