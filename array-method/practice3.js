/* 
* Topic: Array Method (reduce())
* Page: 228-229
* Practice: 1 to 6
*/


// #1
const nums = [5, 10, 15, 20, 25];
const total = nums.reduce((sum, num) => sum + num, 0);
console.log(total);


// #2
const products = [
    { name: "shampoo", price: 100 },
    { name: "soap", price: 50 },
    { name: "toothpaste", price: 75 },
]
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log(totalPrice);


// #3
const productList = [
    { name: "Pen", price: 5 },
    { name: "Book", price: 50 },
    { name: "Bag", price: 100 }
]
const productsPrice = productList.reduce((sum, product) => sum + product.price, 0);
console.log(productsPrice);


// #4
const numbers = [1, 2, 3, 4, 5];
const multiple = numbers.reduce((multi, num) => multi * num, 1);
console.log(multiple);


// #5
const numsList = [10, 20, 30, 40, 50];
const highestNum = numsList.reduce((high, num) => {
    if (num > high) {
        high = num;
    }
    return high;
}, 0);
console.log(highestNum);



// #6
const numsArray = [100, 200, 300, 400];
const sumOfArray = numsArray.reduce((acc, num) => acc + num, 50);
console.log(sumOfArray);