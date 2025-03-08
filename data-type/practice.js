/* 
* Topic: Data Type
* Page: 50
* Practice: 1 to 6
*/

// #1
const price = 555;
console.log(typeof price);

// #2
const learning = true;
console.log(typeof learning);

// #3
const megaCity = "Dhaka";
console.log(typeof megaCity);

// #4
const temperature = 102.5;
console.log(typeof temperature);

// #5
const isHungry = true;
console.log(typeof isHungry);

// #6
const isRich = true;
console.log(typeof isRich);



/* --------------------------------------------------------------------------------------------------- */


/* 
* Topic: Let
* Page: 52-53
* Practice: 1 to 7
*/

// #1
let age = 31;
console.log(age);
age = 25;
console.log(age);

// #2
let pocketMoney = 500;
pocketMoney = 150;
console.log(pocketMoney);

// #3
let studyTime = 4;
studyTime = 6;
console.log(studyTime);

// #4
let friendsCount = 3;
friendsCount = 1;
console.log(friendsCount);

// #5
let phonePrice = 25000;
phonePrice = 12000;
console.log(phonePrice);

// #6
let chairsCount = 40;
chairsCount = chairsCount - 2;
chairsCount = chairsCount - 6;
console.log(chairsCount);

// #7
let playTime = 3;
playTime = 0;
console.log(playTime);




/* --------------------------------------------------------------------------------------------------- */


/* 
* Topic: Comment
* Page: 56
* Practice: 1 to 7
*/

// #1
// Last Exam Score
const score = 60;

// #2
// Radius of a circle
// Initially set to 0, because user hasn't given the value
// It will update when user input the value
const radius = 0;

// #3
/* My Favorite Dress Count */
const dress = 3;

// #4
// Because I scored 100% on my last exam, my father gave me gift money.
const giftMoney = 100;

// #5
/* 
* Programming Hero: 2 hours
* Marhaba Javascript: 1 hour
* FreeCodeCamp Practice: 2 hours
* Grokking Algorithms: 1 hour
* System Design: 1 hour
*/
const studyTime2 = 7;

// #6
/* 
* Ankur will get: 95 TK
* Service Charge: 5 TK
*/
const sendMoney = 100;

// #7
// Product price with delivery fee
const pay = 585;



/* --------------------------------------------------------------------------------------------------- */


/* 
* Topic: Variable Name
* Page: 59-60
* Practice: 1 to 7
*/

// #1
const favoriteFood = "Biryani";

// #2
const city = "Chittagong";
const City = "Dhaka";
console.log(city, City);

// #3
const userName = "Johan";
const username = "Jovan";
console.log(userName, username);

// #4
const homeAddress = "Phulpur, Mymensingh";

// #5
// Can't use reserved keyword for variable name
// const super = 10; 

// #6
// Can't use reserved keyword for variable name
// const class = 17; 


// #7
// Can't start variable name with a number. But after first letter we can use number.
// const 2ndPosition = "Soummya";



/* --------------------------------------------------------------------------------------------------- */


/* 
* Topic: NaN (Not a Number)
* Page: 64
* Practice: 1 to 7
*/

/* 
* parseInt() : Convert to integer. 
* parseFloat() : Convert to float. 
* toFixed() : Fix number of digits after period & convert to string.
*/


// #1
const x = '20';
const newX = parseInt(x) + 10;
console.log(newX);

// #2
const a = '3.14159';
const newA = parseInt(a);
console.log(newA);

// #3
const string = 'premikBoy';
const convertedString = parseInt(string);
console.log(convertedString);

// #4
const m = 3.456;
const n = 2.789;
const output = (m+n).toFixed(2);
console.log(output);

// #5
const y = '56.78';
const z = '12.34';
const floatAdd = parseFloat(y) + parseFloat(z);
console.log(floatAdd);

// #6
const s = '10.5678';
const t = '5.4321';
const newOutput = (parseFloat(s)+parseFloat(t)).toFixed(1);
console.log(newOutput);


// #7
const p = '42.45689754';
const newP = parseFloat(parseFloat(p).toFixed(3));
console.log(newP);
