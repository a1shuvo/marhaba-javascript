/* 
* Topic: JSON Fetch Promise (Promise)
* Page: 322-323
* Practice: 1 to 3
*/


// #1
const getUsers = new Promise((resolve, reject) => {
    const usersAvailable = true;
    const users = ['Shuvo', 'Rudra', 'Shrija', 'Soro'];
    if (usersAvailable) {
        resolve(users)
    } else {
        reject('No user data available!')
    }
});
getUsers.then((users) => {
    console.log(users);
}).catch((error) => {
    console.log(error);
});


// #2
const processPayment = new Promise((res, rej) => {
    const amount = 1;
    if (amount > 0) {
        res(`BDT ${amount} Payment processed successfully!`);
    } else {
        rej('Payment processing rejected!')
    }
});
processPayment.then((message) => {
    console.log(message);
}).catch((e) => {
    console.log(e);
});


// #3
function sendEmail(email) {
    const validEmail = ['prince@gmail.com', 'royals@hotmail.com', 'rich@yahoo.com'];
    return new Promise((res, rej) => {
        if (validEmail.includes(email)) {
            res('Email from Nigerian prince!');
        } else {
            rej('Lets Dance in the spam folder!')
        }
    });
};
sendEmail('prince@gmail.com').then((message) => {
    console.log(message);
}).catch((e) => {
    console.log(e);
});