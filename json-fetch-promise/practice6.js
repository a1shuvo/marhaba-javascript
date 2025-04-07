/* 
* Topic: JSON Fetch Promise (async-await)
* Page: 340
* Practice: 1 to 6
*/


// #1
// Why use async-await?
/* 
* Async await handle asynchronous code in JavaScript. It improves code readability and handle asynchronous code to look and behave like synchronous code. Also Async await improves code maintainability and prevent callback hell or excessive chaining of .then() and .catch() methods in Promises.
*/


// #2
async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchUser();


// #3
// What is Callback hell or Pyramid of Doom? when it happens and what is the solution?
/* 
* Callback hell refers to a situation where code is deeply nested in asynchronous code. This happens when callbacks are passed inside other callbacks, leading to a pyramid-like structure of code indentation.
* It happens when working with asynchronous operations in Javascript using traditional callbacks and one callback is dependent on another callback or asynchronous operation. Deep nesting of callbacks make pyramid of structure. Which is hard to maintain and error debugging.
* Using async-await to write code and handle asynchronous operations we can solve the problem. 
*/


// #4
const url = 'https://jsonplaceholder.typicode.com/posts?userId=1';
// Using callback
fetch(url)
.then(response => response.json())
.then(data => console.log(data))
.catch((error)=>console.log(error));

// Using async-await
const fetchUserPosts = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}
fetchUserPosts();


// #5
const fetchComments = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Request Completed!');
    }
}
fetchComments();


// #6
async function fetchPostsByUserId(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}
fetchPostsByUserId(5);