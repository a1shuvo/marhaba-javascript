/*
* Topic: Class (Inheritance)
* Page: 366
* Practice: 1 to 7
*/


// #1
// Define inheritance and why it is needed?
/*
* Inheritance in JavaScript is a mechanism that allows one object to access the properties and methods of another object. It is a core concept in object-oriented programming (OOP) that promotes code reuse, extensibility, and organization. JavaScript uses prototypal inheritance, meaning that objects can inherit directly from other objects.

* Code Reusability:
* Common properties and methods can be defined in a base object/class and reused across multiple derived objects/classes.

* DRY Principle (Don't Repeat Yourself):
* Prevents duplicating code by allowing shared logic to live in a common ancestor.

* Logical Hierarchy:
* Helps structure code in a clear, hierarchical way. E.g., Animal → Mammal → Dog.

* Extensibility:
* You can extend existing functionality without modifying the original code.

* Maintainability:
* Makes the codebase easier to manage and update.
*/


// #2
// How parent and child class relationships are made?
/* 
* In JavaScript, parent and child class relationships are created using the class and extends keywords. The child class uses the extends keyword to inherit from the parent class, allowing it to access and override the parent’s properties and methods.
*/


// #3
class Vehicle {
    constructor(brand, color, price) {
        this.brand = brand;
        this.color = color;
        this.price = price;
    }
}
class Bus extends Vehicle {
    constructor(brand, color, price, hasAC, route) {
        super(brand, color, price);
        this.hasAC = hasAC;
        this.route = route;
    }
}
class Truck extends Vehicle {
    constructor(brand, color, price, capacity, cargoType) {
        super(brand, color, price);
        this.capacity = capacity;
        this.cargoType = cargoType;
    }
}
class Bike extends Vehicle {
    constructor(brand, color, price, engineCC, hasABS) {
        super(brand, color, price);
        this.engineCC = engineCC;
        this.hasABS = hasABS;
    }
}
const cityBus = new Bus("Volvo", "Blue", 3000000, true, "Motijheel to Farmgate");
const freightTruck = new Truck("Tata", "Yellow", 2500000, 15, "Construction Materials");
const sportsBike = new Bike("Yamaha", "Red", 150000, 150, true);
console.log(cityBus, freightTruck, sportsBike);



// #4
class Creature {
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }
}
class Animal extends Creature {
    constructor(name, species, age, legs, isDomesticated) {
        super(name, species, age);
        this.legs = legs;
        this.isDomesticated = isDomesticated;
    }
}
class Bird extends Creature {
    constructor(name, species, age, color, canFly) {
        super(name, species, age);
        this.color = color;
        this.canFly = canFly;
    }
}
class Fish extends Creature {
    constructor(name, species, age, waterType, hasScales) {
        super(name, species, age);
        this.waterType = waterType;
        this.hasScales = hasScales;
    }
}
const dog = new Animal("Kalu", "Dog", 5, 4, true);
const eagle = new Bird("Mighty", "Golden Eagle", 3, 'Brown', true);
const goldfish = new Fish("Goldie", "Goldfish", 2, "Freshwater", true);
console.log(dog, eagle, goldfish);


// #5
class Furniture {
    constructor(material, color) {
        this.material = material;
        this.color = color;
    }
}
class Chair extends Furniture {
    constructor(material, color, legs, isCushioned) {
        super(material, color);
        this.legs = legs;
        this.isCushioned = isCushioned;
    }
    changeColor(colorName) {
        this.color = colorName;
    }
}
class Table extends Furniture {
    constructor(material, color, height, isFoldable) {
        super(material, color);
        this.height = height;
        this.isFoldable = isFoldable;
    }
    reduceHeight(height) {
        this.height -= height;
    }
}
const officeChair = new Chair('Leather', 'Black', 4, true);
const readingTable = new Table('Wood', 'Brown', 36, false);
officeChair.changeColor('Brown');
readingTable.reduceHeight(6);
console.log(officeChair, readingTable);


// #6
class Pet {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
}
class Dog extends Pet {
    constructor(name, age, color, breed, isTrained) {
        super(name, age, color);
        this.breed = breed;
        this.isTrained = isTrained;
    }
    bark(barkSound) {
        console.log(`${this.name} barks: ${barkSound}`);
    }
}
class Cat extends Pet {
    constructor(name, age, color, isIndoor, favoriteToy) {
        super(name, age, color);
        this.isIndoor = isIndoor;
        this.favoriteToy = favoriteToy;
    }
    meow() {
        console.log(`${this.name} meows softly and plays with ${this.favoriteToy}`);
    }
}
class Parrot extends Pet {
    constructor(name, age, color, canTalk) {
        super(name, age, color);
        this.canTalk = canTalk;
    }
    speak() {
        if (this.canTalk) {
            console.log(`${this.name} says: Hello! I'm ${this.name}!`);
        } else {
            console.log(`${this.name} chirps happily.`);
        }
    }
}
const myDog = new Dog("Kallu", 5, "Black", "Labrador", true);
const myCat = new Cat("Billu", 3, "White", true, "Ball");
const myParrot = new Parrot("Mithu", 2, "Green", true);
myDog.bark('Gheu Gheu');
myCat.meow();
myParrot.speak();
console.log(myDog, myCat, myParrot);


// #7
// Explain the DRY principle with an example.
/* 
* DRY stands for "Don't Repeat Yourself" — it’s a software development principle that encourages reducing repetition in code. Instead of duplicating logic in multiple places, we should write reusable code (like functions, classes, or modules) so it can be used wherever needed.
*/
class PetAnimal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Bunny extends PetAnimal {
    constructor(name, age) {
        super(name, age);
    }
}
class Turtle extends PetAnimal {
    constructor(name, age) {
        super(name, age);
    }
}
