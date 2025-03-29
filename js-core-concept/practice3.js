/* 
* Topic: JS Core Concept (truthy, falsy and double (!) not operator)
* Page: 266
* Practice: 1 to 4
*/


// #1
if('false') {
    console.log("'false' is a truthy value.");
} else {
    console.log("Falsy Value.");
}


// #2
if({}) {
    console.log("{} is a truthy value.");
} else {
    console.log("Falsy Value.");
}


// #3
if([]) {
    console.log("[] is a truthy value.");
} else {
    console.log("Falsy Value.");
}

// #4
console.log(!![]);