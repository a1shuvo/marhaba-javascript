/* 
* Topic: Built-in Object & Method (Date)
* Page: 287
* Practice: 1 to 5
*/


// #1
const now = new Date();
console.log(now);


// #2
const dateTime = new Date(2035, 6, 15, 14, 30, 30);
console.log(dateTime); // UTC time zone


// #3
const currentYear = new Date().getFullYear();
console.log(currentYear);


// #4
const yearDate = new Date();
yearDate.setFullYear(2040);
console.log(yearDate);


// #5
const day = new Date('2029-02-16');
const dayNumber = day.getDay();
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(`Week day number is ${dayNumber} & day name is ${weekDays[dayNumber]}`);