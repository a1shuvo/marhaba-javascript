/*
* Topic: Browser Debug (JS V8 Engine)
* Page: 431
* Practice: 1 to 3
*/


// #1
// How does JavaScript code run?
/* 
* The JavaScript engine, like the V8 engine used in Chrome and Node.js, is responsible for running JavaScript code. It first parses the code, turning it into tokens and then into an Abstract Syntax Tree (AST). The AST helps the engine understand the structure of the code and how to compile it into bytecode or machine code. This process is called compilation, and modern JavaScript engines use a JIT (Just-In-Time) compiler, which compiles the code during runtime (while the program is actually running). The JIT compiler optimizes the code to improve performance and run it faster. Finally, the compiled machine code is executed, and the result is returned.
*/


// #2
// How does the V8 engine work?
/* 
- Parsing: The V8 engine reads JavaScript code. It breaks the code into tokens and builds an Abstract Syntax Tree (AST) to understand its structure.

- Compilation: V8 uses an interpreter called Ignition to convert the AST into bytecode (an intermediate format). This bytecode is faster to execute than raw JS but not as fast as machine code. The bytecode is executed immediately by Ignition. As the program runs, V8 identifies frequently-used ("hot") code and sends it to the TurboFan compiler, which optimizes it into fast machine code. This Just-In-Time (JIT) compilation approach allows JavaScript to run quickly and efficiently. V8 also includes a garbage collector to manage memory by removing unused data.

- Execution: In the execution phase JavaScript code actually runs and produces results after parsing and compilation. V8 engine executes JavaScript by running bytecode (Ignition), optimizing hot code into machine code (TurboFan), executing that, and managing memory with garbage collection.

*/


// #3
// How does the JIT compiler work? 
/* 
The JIT (Just-In-Time) compiler works by compiling JavaScript code during runtime, instead of before execution like traditional compilers. 

JavaScript code is first converted into bytecode by the interpreter (e.g. Ignition in V8). This bytecode is executed immediately.

While running the bytecode, the engine monitors which parts of the code (like functions or loops) are used frequently — these are called "hot paths".

Once a piece of code becomes hot, the JIT compiler (e.g. TurboFan) kicks in. It compiles that hot bytecode into highly optimized machine code.

The optimized machine code replaces the interpreted version and runs much faster directly on the CPU.

If assumptions made during optimization (like variable types) turn out to be wrong, the engine de-optimizes the code and falls back to slower execution.

*/