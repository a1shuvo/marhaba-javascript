/* 
* Topic: JS Core Concept (callback function)
* Page: 273-274
* Practice: 1 to 4
*/


// #1
function mainFunc(callbackFunc) {
    return callbackFunc();
}
function anotherFunc() {
    console.log('I am from callback function');
}
mainFunc(anotherFunc);


// #2
function objKeys(obj, callback) {
    callback(obj);
}
function printKeys(obj) {
    console.log(Object.keys(obj));
}
const person = {
    name: 'Srija',
    age: 2
}
objKeys(person, printKeys);


// #3
function numberProcessor(number, callback) {
    const result = number / 5;
    callback(result);
}
function printResult(value) {
    console.log(value);
}
numberProcessor(500, printResult)


// #4
function myFunc(callback) {
    callback();
}
function love() {
    console.log('I Love Programming!');
}
myFunc(love);