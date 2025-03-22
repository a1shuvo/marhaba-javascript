/* 
* Topic: Logic Build Up Technique (Array duplicate element remove)
* Page: 177
* Practice: 1
*/


// #1
function noDuplicate(nums) {
    let uniqueNums = [];
    for (const num of nums) {
        if (uniqueNums.includes(num) !== true) {
            uniqueNums.push(num);
        }
    }
    return uniqueNums;
}
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];
console.log(noDuplicate(numbers));
