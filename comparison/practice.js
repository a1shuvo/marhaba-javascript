/* 
* Topic: Comparison
* Page: 68
* Practice: 1 to 7
*/

// #1
const mySandwitch = 7;
const brotherSandwitch = 5;
console.log(mySandwitch > brotherSandwitch);

// #2
const myClassStudents = 45;
const nextClassStudents = 50;
console.log(myClassStudents > nextClassStudents);

// #3
const myScore = 75;
const friendScore = 75;
console.log(myScore == friendScore);

// #4
const targetMoney = 100;
const savedMoney = 95;
console.log(savedMoney >= targetMoney);

// #5
console.log(10 != 7);

// #6
console.log(20 <= 15);

// #7
const myResult = 45;
const friendResult = 97;
console.log(friendResult < myResult);



/* --------------------------------------------------------------------------------------------------- */


/* 
* Topic: Variable Comparison
* Page: 70-71
* Practice: 1 to 8
*/

// #1
const brotherAge = 10;
const myAge = 15;
console.log("My younger brother's age is less than or equal to mine:", brotherAge <= myAge);

// #2
const passMarks = 33;
const myMarks = 45;
console.log("I have passed:", myMarks > passMarks);

// #3
const jamburaPrice = 10;
const kodbelPrice = 40;
console.log("Jambura is cheaper than Kodbel:", jamburaPrice < kodbelPrice);

// #4
const myReadBooks = 10;
const friendReadBooks = 10;
console.log("My friend and I read the same number of books:", myReadBooks == friendReadBooks);

// #5
const myBiscuits = 15;
const friendBiscuits = 20;
console.log("My biscuits are fewer than my friend's biscuits:", myBiscuits < friendBiscuits);

// #6
const RealMadridGoals = 2;
const BarcelonaGoals = 3;
console.log("Real Madrid scored fewer goals than Barcelona:", RealMadridGoals < BarcelonaGoals);

// #7
const myName = "Rahim";
const friendName = "Karim";
console.log("My name and my friend's name are the same:", myName == friendName);

// #8
const didStudy = true;
const isFriendStudy = false;
console.log("My friend and I studied today:", didStudy && isFriendStudy);



/* --------------------------------------------------------------------------------------------------- */


/* 
* Topic: Double or Triple Equal ("==" or "===" )
* Page: 73
* Practice: 1 to 7
*/

// #1
const myMoney = 50;
const friendMoney = "50";
console.log(myMoney == friendMoney, myMoney === friendMoney);

// #2
const programmingLang = "JavaScript";
// They both output as 'true', because they have same value and data type.
console.log(programmingLang == 'JavaScript', programmingLang === 'JavaScript');

// #3
/* 
Double Equal (==) checks only values and triple equal (===) checks both values and data types.
That's why (==) output as 'true' and (===) output as 'false'.
*/ 
console.log(25 == "25", 25 === "25");

// #4
console.log("apple" == "apple", "apple" === "apple");

// #5
console.log("test" == "TEST", "test" === "TEST");

// #6
const variableX = 15;
const variableY = "20";
console.log(variableX != variableY, variableX !== variableY);

// #7
const variableA = "hello";
const variableB = "Hello";
console.log(variableA == variableB, variableA === variableB);
