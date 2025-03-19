/* 
* Topic: Function Parameters & Arguments
* Page: 149
* Practice: 1 to 9
*/


// #1
function sum(num1, num2) {
    const sum = num1 + num2;
    console.log(`Sum of ${num1} & ${num2} is: ${sum}`);
}
const fatherAge = 54;
const sonAge = 31;
sum(fatherAge, sonAge);


// #2
function multiply(num1, num2) {
    const multi = num1 * num2;
    console.log(`Multiply of ${num1} & ${num2} is: ${multi}`);
}
multiply(20, 15);


// #3
function sumOf3Numbers(a, b, c) {
    const sum = a + b + c;
    console.log(`Sum of ${a}, ${b} & ${c} is: ${sum}`);
}
const mathMark = 85;
const englishMark = 80;
const physicsMark = 83;
sumOf3Numbers(mathMark, englishMark, physicsMark);


// #4
function calculateAge(birthYear) {
    const currentYear = 2025;
    const age = currentYear - birthYear;
    console.log("You are", age, "years old.");
}
calculateAge(1993);


// #5
function calculatePcs(amount) {
    const price = 35;
    const pcsCanBuy = amount / price;
    console.log("You can buy", pcsCanBuy, "Pieces");
}
calculatePcs(350);


// #6
function average(a, b, c, d) {
    const sum = a + b + c + d;
    const avg = sum / 4;
    console.log(`Average of ${a}, ${b}, ${c} and ${d} is: ${avg}`);
}
average(10, 5, 18, 27);


// #7
function sellingPrice(buyingPrice) {
    const profit = 250;
    const sellPrice = buyingPrice + profit;
    console.log("Selling price is:", sellPrice);
}
sellingPrice(750);


// #8
function yearOfAge100(birthYear) {
    const yearOf100 = birthYear + 100;
    console.log("You will be 100 years old in", yearOf100);
}
yearOfAge100(1993);


// #9
function monthlyPhoneUse(dailyPhoneUse) {
    const totalHours = dailyPhoneUse * 30;
    console.log("You use total", totalHours, "hours of mobile phone in a month.");
}
monthlyPhoneUse(2.5);