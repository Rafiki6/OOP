/*
EXTENDING CLASS
-The extends keyword is used to create a class that is a child of another class.
-The SUPER keyword is used to pass arguments to the parent class's constructor.
*/
// EXAMPLE
//THIS IS PARENT CLASS
class Person {
    // constructor with parameters
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

    }
    // METHODS TO CALL FULL NAME
    getFullName() {
        return this.firstName + " " + this.lastName
    }
    // METHOD FOR INTRODUCTION
    getIntro() {
        return `My name is ${this.getFullName()} !`

    }
}
// THIS IS EXTENDED CLASS
class Student extends Person {
    constructor(firstName, lastName, grade, major) {
        super(firstName, lastName);
        this.grade = grade;
        this.major = major;
    }
    // You can also use methods defined in the parent class
    // from the extended class
    getIntro() {
        return `My name is ${this.getFullName()} and I am ${this.grade}
         and I study ${this.major} !`
    }
}
// Use the parent class
let sallie = new Person("Sallie", "Sheppard");
console.log(sallie.getIntro());

let tim = new Student(
    "Tim", "Kellogg", "Sophomore", "Engineering");
console.log(tim.getIntro());