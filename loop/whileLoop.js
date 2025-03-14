/* 
* Topic: While Loop
* Page: 109
* Practice: 1 to 5
*/


// #1
let count = 0;
while (count < 10) {
    console.log("I will do 3 hours of programming practice every day");
    count++;
}

// #2
let num = 1;
while (num <= 20) {
    console.log(num);
    num++;
}

// #3
let number = 50;
while (number <= 100) {
    console.log(number);
    number++;
}

// #4
let i = 1;
while (i <= 10) {
    console.log("3 x", i, "=", i * 3);
    i++;
}

// #5
let x = 111;
while (x >= 110) {
    console.log(x / 2);
    x--;
}



/* --------------------------------------------------------------------------------------------------- */



/* 
* Topic: Sum with While Loop
* Page: 111-112
* Practice: 1 to 5
*/


// #1
let n = 50;
while (n <= 100) {
    console.log(n);
    n++;
}

// #2
let a = 5;
let sum = 0;
while (a <= 15) {
    sum += a;
    a++;
}
console.log("Sum of 5 to 15 is :", sum);

// #3
let rollCount = 1;
let sumOfRoll = 0;
while (rollCount <= 50) {
    sumOfRoll += rollCount;
    rollCount++;
}
console.log("Sum of 1 to 50 roll number is :", sumOfRoll);

// #4
let c = 21;
let sumOfNumbers = 0;
while (c <= 50) {
    sumOfNumbers += c;
    console.log(sumOfNumbers - c, "+", c, "=", sumOfNumbers);
    c++;
}
console.log("Sum of 21 to 50 is : ", sumOfNumbers);

// #5
let m = 20;
let sumOfNums = 0;
while (m <= 40) {
    sumOfNums += m;
    m++;
}
console.log(sumOfNums);
