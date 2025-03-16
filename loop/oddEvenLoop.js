/* 
* Topic: Odd Even Loop Condition & Divisible with Modulas Operator
* Page: 119
* Practice: 1 to 6
*/


// #1
for (let i = 20; i <= 50; i++) {
    if (i % 7 == 0) {
        console.log(i);
    }
}

// #2
for (let i = 40; i <= 80; i++) {
    if (i % 5 == 0 && i % 7 == 0) {
        console.log(i);
    }
}

// #3
let sum = 0;
for (let i = 1; i <= 40; i++) {
    if (i % 13 == 0) {
        sum += i;
    }
}
console.log("Sum:", sum);

// #4
for (let i = 1; i <= 50; i += 4) {
    console.log(i);
}

// #5
for (let i = 1; i <= 100; i++) {
    if (i % 6 == 0 && i % 9 == 0) {
        console.log(i);
    };
}

// #6
let sumOfNumbers = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 4 == 0) {
        sumOfNumbers += i;
    }
}
console.log("Sum of numbers divisible by both 3 & 4 from 1 to 50 is:", sumOfNumbers);
