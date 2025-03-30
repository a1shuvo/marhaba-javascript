/* 
* Topic: JS Core Concept (scope)
* Page: 279
* Practice: 1 to 4
*/


// #1
const taxRate = 15;
function incomeTax(amount) {
    return amount * taxRate / 100;
}
console.log(incomeTax(100000));


// #2
function aFunction() {
    let insideSecret = 'internal secret hiding place';
}
/* 
* We can't access the variable 'insideSecret' outside of the function block.
* Next line of code will give a ReferenceError: 'insideSecret' is not defined.
*/
// console.log(insideSecret);


// #3
if (true) {
    let temperature = 26;
}
/* 
* We can't access the variable 'temperature' outside of the if block.
* Next line of code will give a ReferenceError: 'temperature' is not defined.
*/
// console.log(temperature);


// #4
function schoolDetails(params) {
    const schoolName = 'PPHS';
    function displaySchoolName() {
        console.log(schoolName);
    }
    displaySchoolName();
}
schoolDetails();