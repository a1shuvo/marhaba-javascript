/* 
* Topic: ES6 & Modern Javascript (Arrow function)
* Page: 195-196
* Practice: 1 to 6
*/


// #1
const firstElement = (array) => array[0];
const nums = [10, 20, 30, 40];
console.log(firstElement(nums));


// #2
const multiOfThree = (num1, num2, num3) => num1 * num2 * num3;
const a = 10;
const b = 3;
const c = 5;
const result = multiOfThree(a, b, c);
console.log(result);


// #3
const unknown = () => "unknown";
console.log(unknown());


// #4
const person = {
    name: "Kavees",
    moneyInPocket: 5000
}
const devideByFive = obj => obj.moneyInPocket / 5;
console.log(devideByFive(person));


// #5
const sumOfFirstAndLast = array => array[0] + array[array.length-1];
const numbers = [11, 17, 21, 31, 39];
console.log(sumOfFirstAndLast(numbers));


// #6
const sum = (num1 = 10, num2 = 5) => {
    const result = num1 + num2;
    return result;
}
console.log(sum());