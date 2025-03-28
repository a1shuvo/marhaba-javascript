/* 
* Topic: String Method (toLowerCase(), toUpperCase())
* Page: 243
* Practice: 1 to 4
*/


// #1
const email = 'User@Example.Com';
const emailLowerCase = email.toLowerCase();
console.log(emailLowerCase);


// #2
const greeting = 'hELlo WoRLd';
const upperGreet = greeting.toUpperCase();
const lowerGreet = greeting.toLowerCase();
console.log(upperGreet, lowerGreet);


// #3
const language = 'JavaScript';
console.log(language.toLowerCase().includes('script'));


// #4
const text = 'NodeJs';
if (text[0] === text[0].toUpperCase()) {
    console.log('First Letter Upper Case');
} else {
    console.log('First Letter Lower Case');
}