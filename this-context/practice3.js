/*
* Topic: this context (bind, call and apply)
* Page: 385-386
* Practice: 1 to 4
*/


// #1
const team = {
    name: 'Bangladesh',
    players: 15,
    play() {
        console.log(`${this.name} has ${this.players} players.`);
    }
}
team.play();
const tournament = {
    name: 'ICC T20',
    players: 150
}
const tournamentPlay = team.play.bind(tournament);
tournamentPlay();


// #2
const car = {
    speed: 250,
    price: 1000000,
    drive() {
        console.log(`Speed ${this.speed} km/h and price ${this.price} BDT.`);
    }
}
car.drive();
const bike = {
    speed: 150,
    price: 120000
}
const truck = {
    speed: 200,
    price: 1500000
}
car.drive.call(bike);
car.drive.call(truck);


// #3
const employee = {
    name: 'Shuvo Saha',
    role: 'Software Engineer',
    details() {
        console.log(`Mr. ${this.name} is the ${this.role}.`);
    }
}
employee.details();
const manager = {
    name: 'Elon Musk',
    role: 'Manager'
}
employee.details.apply(manager);


// #4
const classroom = {
    name: 'Computer Science',
    students: ['Shuvo', 'Rudra', 'Srija'],
    attendance() {
        console.log(`${this.name} class attendees: ${this.students.join(', ')}.`);
    }
}
classroom.attendance();
const lab = {
    name: 'AI Lab',
    students: ['Saha', 'Soro', 'Anjana']
}
const labAttendance = classroom.attendance.bind(lab);
labAttendance();