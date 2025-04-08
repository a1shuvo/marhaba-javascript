/* 
* Topic: Data Access (Optional chaining & nullish coalescing)
* Page: 347
* Practice: 1 to 6
*/


// #1
let x = null;
x ??= 75;
console.log(x);


// #2
const product = {name: 'Marhaba JavaScript e maro thaba', price: 585};
const stock = product.stock ?? 0;
console.log(stock);


// #3
const productDetails = {name: 'Laptop', brand: 'Lenevo', price: 35000, discount: 0};
const discount = product.discount || 10;
console.log(discount);


// #4
const vehicle = {name: 'Bus', color: 'Red', brand: 'Volvo'};
const engine = vehicle?.engine ?? 'Engine info Missing';
console.log(engine);


// #5
const restaurant = {name: 'Seasonal Tastes', address: 'Gulshan Avenue, Dhaka'};
const menu = restaurant?.menu ?? 'Menu not available';
console.log(menu);


// #6
const profile = {name: 'Shuvo Saha', social: {facebook: 'shuvo.saha', linkedin: 'a1shuvo'}};
const twitter = profile?.social?.twitter ?? 'Twitter handle not available';
console.log(twitter);