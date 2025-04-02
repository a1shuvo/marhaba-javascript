/* 
* Topic: Async JS (setTimeout() and setInterval())
* Page: 307
* Practice: 1 to 4
*/


// #1
setTimeout(() => {
    console.log('I wasted 3 seconds of my life by looking at screen and doing nothing');
}, 3000);


// #2
let num = 131;
setInterval(()=>{
    console.log(num);
    num += 2;
}, 2000);


// #3
let count = 0;
const intervalId = setInterval(()=>{
    console.log('I am learning javascript');
    count++;
    if (count === 6) {
        clearInterval(intervalId);
    }
}, 1000);


// #4
/* 
* The default time delay for setTimeout() in JavaScript is 0 milliseconds if we don't specify a second parameter or delay.
* It does not mean the function will execute immediately, but it means that the function will be added to the event queue and executed after the current execution context has finished.
*/