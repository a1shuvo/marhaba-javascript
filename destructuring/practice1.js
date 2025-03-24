/* 
* Topic: Destructuring
* Page: 202
* Practice: 1 to 8
*/


// #1
const product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell"
}
const { brand } = product;
console.log(brand);


// #2
const item = {
    name: "Mobile",
    price: 20000,
    phone: "Samsung"
}
const { phone, price } = item;
console.log(phone, price);


// #3
const colors = ["red", "blue", "green", "yellow"];
const [firstColor, secondColor] = colors;
console.log(firstColor, secondColor);


// #4
const numbers = [10, 20, 30];
const [, second] = numbers;
console.log(second);


// #5
const digits = [2, 4, 6, 8];
const [two, , , eight] = digits;
console.log(two, eight);


// #6
function multiply(a, b) {
    return [a * 3, b * 3];
}
const [firstValue, secondValue] = multiply(2, 3);
console.log(firstValue, secondValue);


// #7
const person = {
    name: "Rahim",
    city: "Dhaka"
}
const {name, city, mobile = "N/A"} = person;
console.log(name, city, mobile);


// #8
const teacher = {
    name: "Maria",
    profession: "Teacher"
}
const {name: teacherName, profession: job} = teacher;
console.log(teacherName, job);
