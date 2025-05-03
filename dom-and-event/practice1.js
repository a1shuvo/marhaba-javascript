/*
* Topic: DOM and Event (Web API, Browser API)
* Page: 426
* Practice: 1 to 5
*/


// #1
// Differences between local storage and session storage?
/* 
- Persistence: In local storage data persists even after the brwser is closed. Where in session storage data is cleared when browser or tab is closed.
- Scope: Local storage shared data scope across all tabs or windows. Where session storage data scope specific to a single tab or window.
- Lifespan: Data in local storage remains until explicitly deleted by code or user. Session storage data only availavle during the page session.
- Use Case: Local storage is useful for long-term data like theme preferences, auth tokens etc. Session storage best for temporary data like state form, one-time user actions etc. 
*/


// #2
// Need to console log in a browser
localStorage.setItem('mode', 'dark');
localStorage.setItem('mode', 'light');
localStorage.getItem('mode');


// #3
// Need to console log in a browser
sessionStorage.setItem('userToken', 'abcd1234');
sessionStorage.getItem('userToken');


// #4
// Need to console log in a browser
localStorage.setItem('userName', 'Alex');
localStorage.removeItem('userName');


// #5
// Only works when browser have two or more pages history stack
history.go(-2);