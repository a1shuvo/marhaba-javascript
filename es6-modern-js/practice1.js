/* 
* Topic: ES6 & Modern Javascript (Default Parameter)
* Page: 186
* Practice: 1 to 10
*/


// #1
function sumOf3Numbers(num1 = 0, num2 = 0, num3 = 0) {
    const sum = num1 + num2 + num3;
    return sum;
}
console.log(sumOf3Numbers(1, 2, 3));
console.log(sumOf3Numbers());


// #2
function depositMoney(amount = 50) {
    return amount;
}
console.log(depositMoney());


// #3
function nameAndIncome(name = "anonymous", income = 0) {
    return name + " monthly income " + income;
}
console.log(nameAndIncome());


// #4
function square(num = 1) {
    return num * num;
}
console.log(square());


// #5
function productNameAndPrice(productName = "Unknown product", productPrice = 1) {
    return "Price of " + productName + " is " + productPrice;
}
console.log(productNameAndPrice());


// #6
function myFavBooks(books = ["JS Book"]) {
    return books;
}
console.log(myFavBooks());


// #7
function totalPrice(product = { price: 10, quantity: 1 }) {
    const totalPrice = product.price * product.quantity;
    return totalPrice;
}
console.log(totalPrice());


// #8
function doubleArray(arr = [5, 10, 15]) {
    const newArr = [];
    for (const num of arr) {
        newArr.push(num * 2);
    }
    return newArr;
}
console.log(doubleArray());


// #9
function simpleInterest(obj = { principal: 1000, rate: 5 }) {
    const interest = (obj.principal * obj.rate / 100);
    return interest;
}
console.log(simpleInterest());


// #10
function salaryAfterTax(person = { salary: 50000, tax: 10 }) {
    const taxAmount = person.salary * person.tax / 100;
    const netSalary = person.salary - taxAmount;
    return netSalary;
}
console.log(incomeTax());
