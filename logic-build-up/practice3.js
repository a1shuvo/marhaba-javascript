/* 
* Topic: Logic Build Up Technique (Odd Even)
* Page: 175
* Practice: 1 to 5
*/


// #1
function evenAverage(nums) {
    let evens = [];
    let sum = 0;
    for (const num of nums) {
        if (num % 2 === 0) {
            evens.push(num);
            sum += num;
        }
    }
    if (evens.length === 0) {
        return 0;
    }
    const avg = sum / evens.length;
    return avg;
}
console.log(evenAverage([1, 3, 5, 7]));


// 2
function oddDouble(nums) {
    let odds = [];
    for (const num of nums) {
        if (num % 2 !== 0) {
            odds.push(num * 2);
        }
    }
    return odds;
}
console.log(oddDouble([1, 2, 3, 4, 5]));


// 3
function oddInArray(nums) {
    for (const num of nums) {
        if (num % 2 !== 0) {
            return "Odd Numbers Found!";
        }
    }
    return "No Odd Numbers Found!";
}
console.log(oddInArray([2, 4, 6, 8]));


// 4
function oddAverage(nums) {
    let count = 0;
    let sum = 0;
    for (const num of nums) {
        if (num % 2 !== 0) {
            count++;
            sum += num;
        }
    }
    if (count === 0) {
        return 0;
    }
    const avg = sum / count;
    return avg.toFixed(2);
}
console.log(oddAverage([1, 2, 3, 4, 5]));


// 5
function newOddArray(nums) {
    let odds = [];
    for (const num of nums) {
        if (num % 2 !== 0) {
            odds.push(num -1);
        }
    }
    if (odds.length === 0) {
        return "No Odd Numbers Found!";
    }
    return odds;
}
console.log(newOddArray([1, 2, 3, 4, 5]));