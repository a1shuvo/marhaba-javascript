/*
* Topic: JS Tricky Concept (use strict)
* Page: 411
* Practice: 1
*/


// #1
// Why is strict mode used in JS?

/* 
* Strict mode is used in JavaScript to make your code more secure, reliable, and easier to debug by enforcing stricter parsing and error handling.

- Avoids silent errors: Strict mode converts silent errors into visible ones, making bugs easier to detect.
- Prevents the use of undeclared variables
"use strict";
x = 10; // ReferenceError: x is not defined
- Disallows duplicate parameter names: Helps avoid unexpected behavior in functions.
"use strict";
function foo(a, a) {} // SyntaxError
- Reserves future keywords: It blocks the use of keywords like implements, interface, let, package, private, protected, public, static, and yield, which may be used in future versions.
- Eliminates this coercion: In normal mode, this in functions defaults to the global object. In strict mode, this remains undefined if not explicitly set.
- Restricts dangerous features: For example, it blocks the use of with, which can make code unpredictable.
*/