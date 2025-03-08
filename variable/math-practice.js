/* 
* Topic: Math Operation
* Page: 47-48
* Practice: 1 to 10
*/

// #1
const income = 100;
const expense = 40;
const remainingMoney = income - expense;
console.log("You have remaining: " + remainingMoney + " TK");

// #2
const totalPencil = 10;
const pencilUsedPer = 2;
const totalTimesPencilUsed = totalPencil / pencilUsedPer;
console.log("You can use total pencil: " + totalTimesPencilUsed + " times");

// #3
const totalMoney = 60;
const expensePerTimes = 15;
const totalTimesExpense = totalMoney / expensePerTimes;
const moneyLeft = totalMoney % expensePerTimes;
console.log("You can expense total: " + totalTimesExpense + " times.");
console.log("After expense you have remaining: " + moneyLeft + " TK");

// #4
const firstString = "Hello";
const secondString = "World";
console.log(firstString + secondString);

// #5
const riceInKG = 153;
const dalInKG = 261;
const totalInKG = riceInKG + dalInKG;
console.log("You have bought total: " + totalInKG + " KG");

// #6
const moneyHave = 500;
const expensePer = 75;
const moneyRemain = moneyHave % expensePer;
const expenseTimes = (moneyHave - moneyRemain) / expensePer;
console.log("You can expense total: " + expenseTimes + " times.");
console.log("After expense you have remaining: " + moneyRemain + " TK");

// #7
const number = 8;
const secondNumber = 3;
console.log("Result of 8 divided by 3 is: " + (number/secondNumber) + " and remainder is: " + (number%secondNumber));

// #8
const dividendNumber = 50;
const divisorNumber = 9;
const remainder = dividendNumber % divisorNumber;
console.log("The remainder of 50/9 is: " + remainder);

// #9
const string1 = "Bangla";
const string2 = "desh";
console.log(string1 + string2);

// #10
const eatRicePerdayInKG = 4;
const totalRiceInKG = 480;
const daysPerMonth = 30;
const resultInDays = totalRiceInKG / eatRicePerdayInKG;
const resultInMonths = resultInDays / daysPerMonth;
console.log("480 KG will cover: "+ resultInDays + " days or " + resultInMonths + " months.");

