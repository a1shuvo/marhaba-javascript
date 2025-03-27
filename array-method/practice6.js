/* 
* Topic: Array Method (slice(), splice())
* Page: 236
* Practice: 1 to 4
*/


// #1
const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
const sliceFruits = fruits.slice(1, 3);
console.log(sliceFruits, fruits);


// #2
const cars = ['Tesla', 'BMW', 'Toyota', 'Ford'];
const sliceCars = cars.slice(0, 2);
console.log(sliceCars, cars);


// #3
const movieList = ['Inception', 'Titanic', 'Joker', 'Avatar', 'Interstellar'];
const spliceMovieList = movieList.splice(2, 2, 'Batman', 'Superman');
console.log(movieList, spliceMovieList);


// #4
const players = ['Messi', 'Ronaldo', 'Neymar', 'Mbappei'];
const splicePlayers = players.splice(2, 1, 'Halland');
console.log(players, splicePlayers);