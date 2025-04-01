/* 
* Topic: Error Validation (type validation)
* Page: 298
* Practice: 1 to 3
*/


// #1
function firstLetter(name) {
    if (typeof name !== 'string') {
        return 'Please input a string!'
    }
    return name[0];
}
console.log(firstLetter(9));


// #2
function lastElement(input) {
    if (!Array.isArray(input)) {
        return 'Input must be an array!';
    }
    return input[input.length - 1];
}
console.log(lastElement(9));


// #3
function getArea(length, width) {
    return typeof length !== 'number' ? 'Length must be a number!' :
        typeof width !== 'number' ? 'Width must be a number!' :
            length * width;
}
console.log(getArea(50, [60]));