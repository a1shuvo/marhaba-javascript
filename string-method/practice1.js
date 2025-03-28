/* 
* Topic: String Method (immutable string, includes(), indexOf())
* Page: 240
* Practice: 1 to 5
*/


// #1
const city = 'Chatoogram';
console.log(city.indexOf('g'));


// #2
const division = 'Sylhet';
console.log(division.includes('y'));


// #3
const name = 'Rifat';
console.log(name[name.length-1]);


// #4
const language = 'javascriptt';
console.log(language.indexOf('rip'));


// #5
const text ='Immutable';
text[0]='E'; // Check Immutability
console.log(text.length, text);