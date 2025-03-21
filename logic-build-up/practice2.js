/* 
* Topic: Logic Build Up Technique (function with multiple else if)
* Page: 169-170
* Practice: 1 to 3
*/


// #1
function taxPercentage(income) {
    if (income <= 50000) {
        return 10;
    } else if (income <= 100000) {
        return 20;
    } else if (income <= 200000) {
        return 30;
    } else {
        return 40;
    }
}
const incomeAmount = 200000;
console.log(taxPercentage(incomeAmount));


// #2
function deliveryPriceByWeight(weight) {
    if (weight < 10) {
        return 100;
    } else if (weight < 20) {
        return 300;
    } else if (weight < 50) {
        return 1000;
    } else {
        return weight * 100;
    }
}
const packageWeight = 49.8;
console.log(deliveryPriceByWeight(packageWeight));


// #3
function gradeByMark(mark) {
    if (mark >= 80) {
        return "A";
    } else if (mark >= 70) {
        return "B";
    } else if (mark >= 60) {
        return "C";
    } else if (mark >= 50) {
        return "D";
    } else {
        return "F";
    }
}
const inputMark = 85;
console.log(gradeByMark(inputMark));