/* 
* Topic: JS Core Concept (Primitive/Non-Primitive Data type, Pass by Value/Reference)
* Page: 259
* Practice: 1 to 3
*/


// #1
const num = 15;
let copy = num;
copy = 25;
console.log(num, copy);


// #2
const arr = [1, 2, 3];
const arrCopy = arr;
arrCopy.push(88);
console.log(arr, arrCopy);


// #3
const language = {
    name: 'JS',
    age: 30
}
const newVersion = language;
newVersion.location = 'Browser';
console.log(language, newVersion);