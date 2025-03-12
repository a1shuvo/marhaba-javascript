/* 
* Topic: Else If Condition
* Page: 83-84
* Practice: 1 to 7
*/


// #1
const price = 4500;
if (price >= 6000) {
    const discount = (price * 15) / 100;
    const pay = price - discount;
    console.log(pay);
} else if (price >= 3000) {
    const discount = (price * 5) / 100;
    const pay = price - discount;
    console.log(pay);
} else {
    console.log(price);
}

// #2
const age = 61;
const foodPrice = 2000;
if (age < 12) {
    const pay = 0;
    console.log(pay);
} else if (age > 60) {
    const pay = foodPrice / 2;
    console.log(pay);
} else {
    console.log(foodPrice);
}

// #3
const bankBalance = 6000;
if (bankBalance < 1000) {
    console.log("Deposit Kor!");
} else if (bankBalance <= 5000) {
    console.log("Bindas Life Enjoy Kor!");
} else {
    console.log("Tui Dhoni, Amake Biya Kor!");
}

// #4
const marks = 80;
if (marks < 50) {
    console.log("Fail!");
} else if (marks <= 80) {
    console.log("Pass!");
} else {
    console.log("A+");
}

// #5
const pageCount = 448;
if (pageCount < 100) {
    console.log("Small book");
} else if (pageCount <= 500) {
    console.log("Mid-size book");
} else {
    console.log("Heart-attack size book");
}

// #6
const temperature = 30;
if (temperature < 0) {
    console.log("Ice");
} else if (temperature <= 20) {
    console.log("Cool Cool");
} else {
    console.log("Hot Hot");
}

// #7
const playerLevel = 51;
if (playerLevel < 10) {
    console.log("novice");
} else if (playerLevel <= 50) {
    console.log("Expert");
} else {
    console.log("Pro Gamer");
}