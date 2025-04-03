/* 
* Topic: JSON Fetch Promise (JSON)
* Page: 317-318
* Practice: 1 to 8
*/


// #1
// Difference Between JSON and JavaScript Object:
/* 
* Property Name: JSON property name must be in double quotation mark. Where JS object property don't.
* No Function: JSON does not support functions as values like JS object; it only supports data types like strings, numbers, arrays, booleans, null, and nested objects.
* Single Quotation: Unlike JSON we can use single quotation mark for string in JS object.
*/

// #2
const user = {
    name: 'Shuvo Saha',
    email: 'shuvosaha@gmail.com',
    address: '59, West Raja Bazar, Dhaka, Bangladesh',
    orderHistory: [
        {
            productId: 101,
            productName: "Laptop",
            quantity: 1,
            price: 999.99,
            orderDate: "2023-08-15"
        },
        {
            productId: 102,
            productName: "Wireless Mouse",
            quantity: 2,
            price: 25.99,
            orderDate: "2023-09-10"
        },
        {
            productId: 103,
            productName: "Headphones",
            quantity: 1,
            price: 89.99,
            orderDate: "2023-10-05"
        }
    ]
};
console.log(JSON.stringify(user));


// #3
const shoppingCart = {
    userDetails: {
        name: "Shuvo Saha",
        id: "U12345",
        contact: "shuvosaha@gmail.com"
    },
    products: [
        {
            productId: 201,
            productName: "Smartphone",
            quantity: 1,
            price: 699.99
        },
        {
            productId: 202,
            productName: "Bluetooth Speaker",
            quantity: 2,
            price: 49.99
        },
        {
            productId: 203,
            productName: "Laptop Bag",
            quantity: 1,
            price: 45.00
        }
    ],
    totalPrice: function () {
        let total = 0;
        this.products.forEach(product => {
            total += product.price * product.quantity;
        });
        return total;
    }
};
console.log(JSON.stringify(shoppingCart));


// #4
const weather = {
    city: "Dhaka",
    temperature: 32,
    humidity: 75,
    forecast: [
        { day: "Monday", temperature: 33 },
        { day: "Tuesday", temperature: 34 },
        { day: "Wednesday", temperature: 31 },
        { day: "Thursday", temperature: 30 },
        { day: "Friday", temperature: 32 },
        { day: "Saturday", temperature: 35 },
        { day: "Sunday", temperature: 36 }
    ]
};
console.log(JSON.stringify(weather));


// #5
const movieDetails = {
    title: "Inception",
    releaseYear: 2010,
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy", "Ken Watanabe"],
    ratings: 8.8
};
const movieJSON = JSON.stringify(movieDetails);
const movieObject = JSON.parse(movieJSON);
console.log(movieJSON, movieDetails);


// #6
const projectManagementSystem = {
    projects: [
        {
            name: "Website Redesign",
            description: "Redesign the company website with a modern look and responsive design.",
            teamMembers: ["Alice Johnson", "Bob Smith", "Carol White"],
            deadlines: { startDate: "2025-05-01", endDate: "2025-07-30" },
            tasks: [
                { title: "Design Mockups", assignee: "Alice Johnson", status: "In Progress" },
                { title: "Develop Frontend", assignee: "Bob Smith", status: "Not Started" },
                { title: "Test Website", assignee: "Carol White", status: "Not Started" }
            ]
        },
        {
            name: "Mobile App Development",
            description: "Develop a mobile application for e-commerce platform.",
            teamMembers: ["David Brown", "Eva Green", "Frank Harris"],
            deadlines: { startDate: "2025-06-01", endDate: "2025-10-01" },
            tasks: [
                { title: "UI/UX Design", assignee: "David Brown", status: "Not Started" },
                { title: "API Integration", assignee: "Eva Green", status: "In Progress" },
                { title: "Testing & Debugging", assignee: "Frank Harris", status: "Not Started" }
            ]
        }
    ]
};
console.log(JSON.stringify(projectManagementSystem));


// #7
const coursesData = [
    {
        courseTitle: "JavaScript for Beginners",
        instructorName: "Jhankar Mahbub",
        duration: "4 weeks",
        lessons: [
            { lessonName: "Introduction to JavaScript", duration: "1 hour", difficultyLevel: "Beginner" },
            { lessonName: "Variables and Data Types", duration: "1.5 hours", difficultyLevel: "Beginner" },
            { lessonName: "Functions and Loops", duration: "2 hours", difficultyLevel: "Beginner" },
            { lessonName: "Objects and Arrays", duration: "2 hours", difficultyLevel: "Intermediate" }
        ]
    },
    {
        courseTitle: "Advanced Python Programming",
        instructorName: "Sarah Lee",
        duration: "6 weeks",
        lessons: [
            { lessonName: "Advanced Functions", duration: "2 hours", difficultyLevel: "Advanced" },
            { lessonName: "Object-Oriented Programming in Python", duration: "3 hours", difficultyLevel: "Advanced" },
            { lessonName: "Concurrency and Parallelism", duration: "2.5 hours", difficultyLevel: "Advanced" },
            { lessonName: "Data Science with Python", duration: "3 hours", difficultyLevel: "Intermediate" }
        ]
    },
    {
        courseTitle: "Web Development Bootcamp",
        instructorName: "Emily Clark",
        duration: "12 weeks",
        lessons: [
            { lessonName: "HTML and CSS Basics", duration: "2 hours", difficultyLevel: "Beginner" },
            { lessonName: "Responsive Web Design", duration: "2.5 hours", difficultyLevel: "Intermediate" },
            { lessonName: "JavaScript Basics", duration: "3 hours", difficultyLevel: "Beginner" },
            { lessonName: "Advanced JavaScript and DOM Manipulation", duration: "3.5 hours", difficultyLevel: "Advanced" },
            { lessonName: "Node.js and Express", duration: "4 hours", difficultyLevel: "Intermediate" }
        ]
    }
];
console.log(JSON.stringify(coursesData));


// #8
const productReviews = [
    {
        productName: "Wireless Earbuds",
        reviewer: { name: "Alice Johnson", email: "alice.johnson@example.com" },
        rating: 4.5,
        reviewText: "The sound quality is amazing, and they're very comfortable to wear. The battery life could be a bit better, but overall, great product!"
    },
    {
        productName: "Smartphone X",
        reviewer: { name: "Bob Smith", email: "bob.smith@example.com" },
        rating: 3.8,
        reviewText: "The phone has a sleek design and performs well, but the camera could use some improvements. Battery life is decent, but not as long as expected."
    },
    {
        productName: "Fitness Tracker",
        reviewer: { name: "Carol White", email: "carol.white@example.com" },
        rating: 5,
        reviewText: "Absolutely love this fitness tracker! It's very accurate, lightweight, and has a ton of features. Highly recommend it for anyone into fitness."
    }
];
const productReviewsJSON = JSON.stringify(productReviews);
const productReviewsArray = JSON.parse(productReviewsJSON);
console.log(productReviewsJSON, productReviewsArray);