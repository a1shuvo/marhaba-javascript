/* 
* Topic: Function Return
* Page: 153-154
* Practice: 1 to 7
*/


// #1
function isGreaterThanTen(num) {
    if (num > 10) {
        return true;
    }
    return false;
}
console.log(isGreaterThanTen(10));


// #2
function divisibleBy13(num) {
    if (num % 13 === 0) {
        return true;
    }
    return false;
}
console.log(divisibleBy13(26));

// #3
function totalBill(rice, curry, drinks) {
    return (rice + curry + drinks);
}
console.log(totalBill(10, 20, 15));

// #4
function voter(age) {
    if (age > 18) {
        return "Eligible for Voting";
    }
    return "Not Eligible";
}
console.log(voter(19));


// #5
function stringLength(string) {
    return string.length;
}
const myName = "Shuvo";
console.log(stringLength(myName));


// #6
function average(num1, num2, num3) {
    const avg = (num1 + num2 + num3) / 3;
    return avg;
}
console.log(average(10, 20, 30));


// #7
function negetiveToPositive(num) {
    if (num < 0) {
        return num * (-1);
    }
    return num;
}
console.log(negetiveToPositive(-3));