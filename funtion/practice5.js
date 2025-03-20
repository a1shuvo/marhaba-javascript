/* 
* Topic: Function Step by Step
* Page: 161-162
* Practice: 1 to 7
*/


// #1
function sumOfOddNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 1) {
            sum += numbers[i];
        }
    }
    return sum;
}
const numbers = [5, 15, 8, 7];
console.log(sumOfOddNumbers(numbers));


// #2
function smallNumber(array) {
    if (array[0] < array[1]) {
        return array[0];
    }
    return array[1];
}
const array = [20, 45, 78];
console.log(smallNumber(array));


// #3
function myAge(age) {
    if (age < 18) {
        return 18;
    } else if (age > 45) {
        return 45;
    } else {
        return age;
    }
}
console.log(myAge(16));


// #4
function sumOfDivisibleBy4(nums) {
    let sum = 0;
    for (const num of nums) {
        if (num % 4 === 0) {
            sum += num;
        }
    }
    return sum;
}
const nums = [2, 4, 5, 7, 8, 32, 45];
console.log(sumOfDivisibleBy4(nums));


// #5
function newResult(num) {
    if (num < 20) {
        return num * 2;
    } else {
        return num / 20;
    }
}
console.log(newResult(20));


// #6
function sumOfNegetives(nums) {
    let sum = 0;
    for (const num of nums) {
        if (num < 0) {
            sum += num;
        }
    }
    return sum;
}
const arr = [2, -2, -1, 3, -3, -4];
console.log(sumOfNegetives(arr));


// #7
function multiOfNums(nums) {
    let multi = 1;
    for (const num of nums) {
        if (num % 3 === 0) {
            multi *= num;
        }
    }
    return multi;
}
const newArr = [3, 2, 6, 9, 4];
console.log(multiOfNums(newArr));