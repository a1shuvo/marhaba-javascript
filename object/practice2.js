/* 
* Topic: Object Property Access & Modify
* Page: 131-132
* Practice: 1 to 8
*/


// #1
const player = {
    name: "Shakib",
    age: 35,
    sports: "Cricket",
    team: "Bangladesh"    
}
console.log(player.team);

// #2
const laptop = {
    brand: "Lenevo",
    price: 35000,
    hardDisc: "500 GB",
    ram: "16 GB",
    screenSize: "15 Inch"
}
console.log(laptop.screenSize);

// #3
const favPlace = {
    name: "Cox's Bazar",
    distance: "400km",
    popularity: "high",
}
console.log(favPlace.popularity);

// #4
const phone = {
    brand: "Nokia",
    color: "black",
    price: 5000
}
console.log(phone.price);

// #5
const library = {
    name: "Public Library",
    location: "Dhaka",
    books: 5000
}
console.log(library.location);

// #6
const movie = {
    title: "Inception",
    director: "Nolan",
    rating: 9
}
console.log(movie.rating);

// #7
const college = {
    name: "ndc",
    established: 1949,
    groups: ["Science", "Arts", "Commerce"]
}
console.log(college.groups[1]);

// #8
const family = {
    father: {
        name: "Janto Saha",
        age: 54,
        profession: "Business"
    },
    mother: {
        name: "Anjana Saha",
        age: 49,
        profession: "Housewife"
    }
}
const fatherAge = family.father.age;
const motherAge = family.mother.age;
const sumOfAge = fatherAge + motherAge;
console.log("Sum of Father's and Mother's Age is:", sumOfAge);