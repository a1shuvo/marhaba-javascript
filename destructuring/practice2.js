/* 
* Topic: Rest Operator
* Page: 204-205
* Practice: 1 to 6
*/


// #1
const product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell"
}
const { name, ...info } = product;
console.log(name, info);


// #2
const project = {
    id: 101,
    title: "WebApp",
    budget: 3000,
    client: "Tech Corp"
}
const { title, ...projectInfo } = project;
console.log(title, projectInfo);


// #3
const programmer = {
    name: "Sophia",
    language: "Javascript",
    experience: 5,
    speciality: "Frontend",
    tools: "React"
}
const { language, speciality, ...details } = programmer;
console.log(language, speciality, details);


// #4
const nums = [10, 20, 3, 30, 300, 3000];
const [first, second, ...rest] = nums;
console.log(first, second, rest);


// #5
function add(first, second, ...rest) {
    let sum = 0;
    for (const num of rest) {
        sum += num;
    }
    return sum;
}
console.log(add(10, 20, 3, 30, 300, 3000));


// #6
function average(...params) {
    let sum = 0;
    for (const num of params) {
        sum += num;
    }
    return sum / params.length;
}
console.log(average(10, 20, 30, 40, 50));