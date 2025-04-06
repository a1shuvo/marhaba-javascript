/* 
* Topic: JSON Fetch Promise (try-catch-finally)
* Page: 335-336
* Practice: 1 to 5
*/


// #1
const data = '{"product": "Date", "price": 450}';
try {
    console.log(JSON.parse(data));
    console.log(JSON.parse('Data corrupted'));
} catch (error) {
    console.log('An Error Occured!');
}


// #2
function validateInput(input) {
    try {
        if (!input.includes('@')) {
            throw new Error("Invalid email format!");
        } else {
            console.log('Valid Email:', input);
        }
    } catch (error) {
        if (error) {
            console.log('Custom Error:', error.message);
        } else {
            console.log('Unknown Error:', error.message);
        }
    }
}
validateInput('shuvo@gmail.com');
validateInput('shuvo');


// #3
// property_name "role" must be in Quotation mark
const newData = '{role: "CEO", "weeklyHours": 1000}';
try {
    console.log(JSON.parse(newData));
} catch (error) {
    console.log(error.message);
} finally {
    console.log('Week is Over!');
}


// #4
function stringOnlyParser(input) {
    try {
        if (input === null || input === '' || input === undefined) {
            throw new Error("Input must be a String!");
        }
        console.log('Valid String:', input);
    } catch (error) {
        console.log(error.message);
    }
}
stringOnlyParser();


// #5
try {
    console.log('Deleting account...');
} catch (error) {
    console.log('Failed to delete account!');
} finally {
    console.log('Account deletion attempt finished!');
}