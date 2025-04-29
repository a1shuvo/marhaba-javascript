/*
* Topic: JS Tricky Concept (IIFE)
* Page: 409
* Practice: 1 to 4
*/


// #1
// What is IIFE? Why does it use?
/* 
* An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs immediately after it's defined. 

// Why Use an IIFE?
- Encapsulation / Scope Isolation: Variables declared inside an IIFE do not pollute the global scope. This avoids conflicts with other scripts.
- Avoid Global Variables: Keeps variables and functions local to the IIFE, helping prevent accidental overwrites.
- Execute Code Immediately: Useful for running setup code when a script loads (e.g., initializing a module or configuration) or one time execution.
*/


// #2
(function(){
    console.log('I am isolated from outer scope!');
})();


// #3
(()=>{
    console.log('borrow from arrow');
})();


// #4
((temperature)=>{
   const celsius = temperature - 273.15;
   console.log(celsius);
})(10);