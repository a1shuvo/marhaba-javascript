/* 
* Topic: Export Import
* Page: 214
* Practice: 1 to 5
*/


// #1
/* 
* Export & Import differences and uses:
* The 'export' keyword is used to expose functions, objects, or variables from one file so that other files can use them.
* The 'import' keyword is used to bring in the exported entities from another file. 
* In JavaScript, export and import are used to share and access code between different files, allowing for modular programming.
*/
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
// app.js
import { add, subtract } from './math.js';
console.log(add(5, 3));
console.log(subtract(5, 3));


// #2
/* 
* Default Export: 
* We can use 'export deafult' only once or a single entity in a file or module.
* The main advantags of default export is, we can freely choose exported entity name when imported in another file or module. Also exported entity need not destructured as an object.
*/
// math.js
export default function multiply(a, b) {
    return a * b
};
// app.js
import multiMath from '.math.js';
console.log(multiMath(3, 4));


// #3
/*
* Alias or 'as' keyword:
* With 'as' keyword we can rename exported entity name when importing.
*/
// math.js
export const sum = (a, b) => a + b;
export const division = (a, b) => a / b;
// app.js
import { sum as add, division as divide } from './math.js';
console.log(add(2, 3));
console.log(divide(50, 5));


// #4
/* 
* Difference between Named & Default Export:
* Multiple named exports can be used per file. But only one default export per file.
* Must import using the exact exported name(s) from named export. Can be any name when importing from default export.
*/


// #5
/* 
* No, multiple default exports are not allowed in a single file in JavaScript. A file can only have one default export. If we try to export multiple default exports from the same file, JavaScript will throw a syntax error.
* If we want to export multiple entities, we can use named exports or combine named and default exports.
*/