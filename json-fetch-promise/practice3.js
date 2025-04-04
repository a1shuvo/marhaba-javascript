/* 
* Topic: JSON Fetch Promise (fetch())
* Page: 326
* Practice: 1 to 5
*/


// #1
// Why use response.json() after return promise using fetch() function?
/* 
* The fetch() function makes a network request and returns a Promise that resolves to a Response object, which represents the raw HTTP response (status, headers, etc.).
* The body of the Response object is often JSON (especially with APIs), but it is returned as a stream (or a raw string). To work with it as a JavaScript object, we need to parse it using response.json().
* The reason we use response.json() after fetch() is to extract and parse the JSON data from the response.
*/


// #2
// Why use fetch()?
/* 
* The fetch() function is used in JavaScript to make network requests, allowing us to interact with web servers and retrieve or send data asynchronously. It is part of the Web API, which provides tools for accessing and interacting with resources over the internet.
*/


// #3
// Difference between fetch() and Promise?
/* 
* Promise is a JavaScript object for handling asynchronous operations, which allow us to handle success (.then()) and failure (.catch()).
* fetch() is a function for making network requests that returns a Promise. We can then chain .then() and .catch() on the Promise returned by fetch() to handle the response or any errors.
* In simple terms: fetch() uses Promises to handle asynchronous network requests and the responses, making it easy to handle operations like fetching data from an API.
*/


// #4
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data.map(user => user.name)))
    .catch(error => console.log(error));


// #5
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));