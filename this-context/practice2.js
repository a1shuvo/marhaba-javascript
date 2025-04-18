/*
* Topic: this context
* Page: 381
* Practice: 1 to 3
*/


// #1
const laptop = {
    brand: 'dell',
    getBrand () {
        console.log(this.brand);
    }
}
const mobile = {
    brand: 'Apple'
}
mobile.getBrand = laptop.getBrand;
mobile.getBrand();


// #2
// How is this determined? 
/* 
* It's not about where the function is defined, but about how the function is called (except arrow functions).
* Global Context - In browsers: window and In Node.js: global.
* Global Context with use strict - undefined
* Object Method Call - this refers to the object before the dot or that object
* Object Method Arrow function - Inherits this from surrounding scope
* Constructor Function / Class - When called with new, this refers to the newly created object.
* Inside Event Listeners - In regular functions, this refers to the element that received the event. In arrow functions, it inherits from the outer scope.
* Standalone function - window (or undefined in strict mode)
*/


// #3
const manager = {
    tasks : [],
    // Here this refers to the manager object
    assignWork(newTask){
        this.tasks.push(newTask);
    }
}
manager.assignWork('Read');
manager.assignWork('Write');
manager.assignWork('Code');
manager.assignWork('Refactor');
console.log(manager);