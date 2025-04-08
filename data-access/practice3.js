/* 
* Topic: Data Access (Pre or Post increment or decrement, Assignment shortcut)
* Page: 350
* Practice: 1 to 9
*/


// #1
let a = 59;
const b = a++;
console.log(b);
console.log(a);
const c = ++a;
console.log(c);


// #2
let oranges = 100;
oranges /= 15;
console.log(oranges);


// #3
let mango = 20;
mango &&= 10;
console.log(mango);


// #4
let bananas = 50;
bananas *= 4;
console.log(bananas);


// #5
let grapes = 1;
grapes ||= 19;
console.log(grapes);
// Because of OR (||) operator and assigned truthy value on 'grapes' result will be the truthy value (1).


// #6
let apples = 10;
apples -= 10;
console.log(apples);


// #7
let price = undefined;
price ||= 90;
console.log(price);


// #8
let tomato = 0;
tomato &&= 5;
console.log(tomato);
// Because of AND (&&) operator and assigned falsy value on 'tomato' output will be the falsy value (0).


// #9
let apple = 15;
apple %= 6;
console.log(apple);
// Because of Modulas (%) operator which returns remainder after one number divided by another output will be 3 (15/6 = 3).