/* 
* Topic: If-Else Condition
* Page: 77
* Practice: 1 to 6
*/

// #1
const homeArrivalTime = 6;
if (homeArrivalTime < 6) {
    console.log("Nasta Khabo!");
} else {
    console.log("Jharur Bari Khabo!!!");
}

// #2
const isLoggedIn = true;
if (isLoggedIn) {
    console.log("Welcome!");
} else {
    console.log("Get Lost!");
}

// #3
const runInKM = 3;
if (runInKM === 5) {
    console.log("Get Chocolate!");
} else {
    console.log("Get Mota Vuri!");
}

// #4
const myScore = 85;
if (myScore > 80) {
    console.log("Get a Bike!");
} else {
    console.log("Don't Get a Bike!");
}

// #5
const movieShowTime = 10;
if (movieShowTime < 9) {
    console.log("Watch the Movie!");
} else {
    console.log("Sleep with oil in nose!");
}

// #6
const temperature = 30;
if (temperature >= 30) {
    console.log("Turn on the Air Conditioner!");
    
} else {
    console.log("Sleep with a Blanket!");
}




/* --------------------------------------------------------------------------------------------------- */



/* 
* Topic: If-Else Condition with Logical Operators
* Page: 80
* Practice: 1 to 9
*/

// #1
const age = 20;
const height = 58;
if (age > 18 && height > 60) {
    console.log("Gari Thelbe!");
} else {
    console.log("Garite Bose Thakbe!");
}

// #2
const mathScore = 90;
const englishScore = 80;
if (mathScore > 80 || englishScore > 85) {
    console.log("Eligible for Admission!");
} else {
    console.log("You will get married!");
}

// #3
const studentGPA = 5;
const familyMonthlyIncome = 9999;
if (studentGPA === 5 && familyMonthlyIncome < 10000) {
    console.log("You will get a scholarship!"); 
} else {
    console.log("You have to pay a fee to study!");
}

// #4
const candidateAge = 29;
const workExperience = 3;
if (candidateAge < 30 && workExperience > 2) {
    console.log("You are eligible for the job exam!");
} else {
    console.log("You are not eligible for the job exam!");
    
}

// #5
const eggCount = 8;
const haveChicken = false;
if (eggCount > 12 || !haveChicken) {
    console.log("Cook Egg Korma!");
} else {
    console.log("Eat Bread and Banana!");
}

// #6
const bodyTemperature= 90;
const haveCaugh = true;
if (bodyTemperature > 100 || haveCaugh) {
    console.log("Go to the doctor!");
} else {
    console.log("Lie down with a blanket!");
}

// #7
const presentPercentage = 80;
const submittedHomeWork = true;
if (presentPercentage > 80 && submittedHomeWork) {
    console.log("Eligible for Exam!");
} else {
    console.log("Auto Fail!!!");
}

// #8
const haveElectricity = false;
const haveChargeInMobile = false;
if (!haveElectricity && !haveChargeInMobile) {
    console.log("Study Books!");
} else {
    console.log("Play Video Games!");
}

// #9
const shirtPrice = 1500;
const haveCoupon = true;
if (shirtPrice > 1000 && haveCoupon) {
    console.log("You will get 20% Discount!");
} else {
    console.log("You will not get any Discount!");
}