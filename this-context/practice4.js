/*
* Topic: this context (Closure)
* Page: 390-391
* Practice: 1 to 3
*/


// #1
/* 
# What is closure?

* A closure is a function that remembers the variables from its outer scope, even after that outer function has finished executing or when it's executed outside that scope.
*/


// #2
function fridgeTracker () {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }
}
const shuvo = fridgeTracker();
const rudra = fridgeTracker();
shuvo();
shuvo();
shuvo();
rudra();
rudra();


// #3
function taskTracker(name) {
    let count = 0;
    function taskCompleted() {
        count++;
        console.log(`${name} has completed ${count} tasks.`);
    }
    function taskCount() {
        return {name, task: count};
    }
    return {
        taskCompleted,  
        taskCount
    }
}
const user1 = taskTracker('Shuvo');
const user2 = taskTracker('Rudra');
user1.taskCompleted();
user1.taskCompleted();
user1.taskCompleted();
user2.taskCompleted();
user2.taskCompleted();
console.log(user1.taskCount(), user2.taskCount());
