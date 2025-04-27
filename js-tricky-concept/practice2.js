/*
* Topic: JS Tricky Concept (Switch case)
* Page: 400-401
* Practice: 1 to 6
*/


// #1
const brand = 'Apple';
switch (brand) {
    case 'Apple':
        console.log('USA');
        break;
    case 'Samsung':
        console.log('Korea');
        break;
    case 'Xiaomi':
        console.log('China');
        break;
    default:
        console.log('Unknown Source');
}


// #2
const browser = 'Chrome';
if (browser === 'Chrome') {
    console.log('Best for developers');
} else if (browser === 'Brave') {
    console.log('Privacy focused');
} else if (browser === 'Safari') {
    console.log('Apple users choice');
} else {
    console.log('Unsupported browser');
}

switch (browser) {
    case 'Chrome':
        console.log('Best for developers');
        break;
    case 'Brave':
        console.log('Privacy focused');
        break;
    case 'Safari':
        console.log('Apple users choice');
        break;
    default:
        console.log('Unsupported browser');
}


// #3
const paymentMethod = 'bKash';
switch (paymentMethod) {
    case 'cash':
        console.log('Pay with cash');
        break;
    case 'credit':
        console.log('Pay with credit card');
        break;
    case 'debit':
        console.log('Pay with debit card');
        break;
    default:
        console.log('Invalid payment method');
}


// #4
const membership = 'platinum';
if (membership === 'free') {
    console.log('Access limited content');
} else if (membership === 'sliver') {
    console.log('Access most content');
} else if (membership === 'gold') {
    console.log('Access premium content');
} else if (membership === 'platinum') {
    console.log('Full access');
}


// #5
const orderStatus = 'shipped';
switch (orderStatus) {
    case 'pending':
        console.log('Your order is being processed');
        break;
    case 'shipped':
        console.log('Your order is on the way');
        break;
    case 'delivered':
        console.log('Your order has been delivered');
        break;
    case 'cancelled':
        console.log('Your order was cancelled');
        break;
    default:
        break;
}


// #6
const grade = 'A';
switch (grade) {
    case 'A':
        console.log('Excellent');
        break;
    case 'B':
        console.log('Good');
        break;
    case 'C':
        console.log('Average');
        break;
    case 'D':
        console.log('Poor');
        break;
    case 'F':
        console.log('Fail');
        break;
    default:
        break;
}