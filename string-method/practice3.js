/* 
* Topic: String Method (trim(), split(), join(), concat(), slice(), substring())
* Page: 248
* Practice: 1 to 9
*/


// #1
const friends = 'Raju,Rana,Hasan,Kabir,Mahi';
const friendsArray = friends.split(',');
console.log(friendsArray);


// #2
const friendsList = ['Raju', 'Rana', 'Hasan', 'Kabir', 'Mahi'];
const friendNames = friendsList.join();
console.log(friendNames);


// #3
const keywords = 'function if else while';
const keywordsArray = keywords.split(' ');
console.log(keywordsArray);


// #4
const languages = ['JavaScript', 'Python', 'Java'];
const languagesStr = languages.join(';');
console.log(languagesStr);


// #5
const loops = 'for,while,for-in,for-of,do-while';
const loopsArray = loops.split(',');
console.log(loopsArray);


// #6
const string = ' console log debug ';
console.log(string.trim());


// #7
const str1 = 'push';
const str2 = 'pop';
const str3 = 'shift';
const str4 = 'unshift';
const newString = str1.concat(str2, str3, str4);
console.log(newString);


// #8
const text = 'Hello JavaScript Developers';
const txt = 'JavaScript';
const findTxt = text.slice(text.indexOf(txt), text.indexOf(txt) + txt.length);
console.log(findTxt);
// const newStr = text.split(' ')[1];
// console.log(newStr);


// #9
const sentence = 'Code more learn more';
const word = 'learn';
const findWord = sentence.substring(sentence.indexOf(word), sentence.indexOf(word) + word.length)
console.log(findWord);