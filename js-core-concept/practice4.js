/* 
* Topic: JS Core Concept (Double equal (==) and triple equal (===), type coercion/conversion)
* Page: 270
* Practice: 1 to 7
*/


// #1
if (true == 1) {
    console.log('same');
} else {
    console.log('different');
}


// #2
const objectA = {name: 'shuvo'};
const objectB = {name: 'shuvo'};
if (objectA == objectB) {
    console.log('objectA & objectB are same.');
} else {
    console.log('objectA & objectB are not same. Since JS compares objects by reference.');
}


// #3
const a = [1, 2, 3, 4, 5];
const b = a;
if (a===b) {
    console.log('a and b are same. Because they are using same reference.');
} else {
    console.log('a and b are different.');
}


// #4
function compare(a, b) {
    return a == b;
}
console.log(compare(1, true));
console.log(compare(0, false));
// Because of type coercion they are resulting as same when compare with double equal.


// #5
if ('' == false) {
    console.log('Because of type coercion they are resulting as same when compare with double equal.'); 
} else {
    console.log('They are not same.');
}


// #6
if (null === undefined) {
    console.log('null and undefined are same.');
} else {
    console.log('null and undefined are not same. Because triple equal compare both values and types.');
}


// #7
if (1 == '1') {
    console.log(`
    When comparing with double equal, JS first checks both sides value's type is same or not.
    If types are same, then check values and return true or false based on values comparison.
    If types are not same, then JS do type coercion to match both sides type and compare with their values.
    In this 1=='1' example, JS first converts '1' type from string to number and then compare values.
    As 1=1 are same value, they with double equal comparison returns true.
    `);
}