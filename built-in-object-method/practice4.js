/* 
* Topic: Built-in Object & Method (Regular Expression)
* Page: 290
* Practice: 1 to 3
*/


// #1
const sentence = 'I bought an orange';
const newSentence = sentence.replace(/orange/, 'grape');
console.log(newSentence);


// #2
const line = 'I like to have apple and banana';
const pattern = /ana/;
console.log(pattern.test(line));


// #3
const text = 'I am eating apple. apple is good. apple helps me a lot.';
const newText = text.replace(/apple/g, 'Javascript');
console.log(newText);