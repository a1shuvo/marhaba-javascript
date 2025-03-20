/* 
* Topic: Function
* Page: 157
* Practice: 1 to 7
*/


// #1
function evenSizedArray(arr) {
    if (arr.length % 2 === 0) {
        return true;
    }
    return false;
}
const nums = [1, 2, 3, 4, 5]
console.log(evenSizedArray(nums));


// #2
function firstLetter(string) {
    return string[0];
}
console.log(firstLetter("Raju"));


// #3
function newResult(num) {
    if (num > 10) {
        const result = num / 10;
        return result
    } else {
        const result = num * 10;
        return result;
    }
}
console.log(newResult(11));


// #4
function sumOfFirstTwo(array) {
    return array[0] + array[1];
}
const numbers = [2, 3, 5, 7];
console.log(sumOfFirstTwo(numbers));


// #5
function doubleOrTriple(n) {
    if (n > 0) {
        return n * 2;
    } else {
        return n * 3;
    }
}
console.log(doubleOrTriple(10));


// #6
function largeFirstName(firstName, secondName) {
    if (firstName.length > secondName.length) {
        return true;
    }
    return false;
}
console.log(largeFirstName("Shuvo", "Saha"));


// #7
function multiOrHalfMulti(num1, num2) {
    const multi = num1 * num2;
    if (multi > 100) {
        return multi / 2;
    } else {
        return multi;
    }
}
console.log(multiOrHalfMulti(10, 11));