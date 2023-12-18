// EXERICES 1
class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
    getFullName() {
        let fullName = this.firstName + " " + this.lastName;
        return fullName
    }
    getJobTitle() {
        return this.jobTitle;
        
    }
    getPay() {
       
        return this.payRate;
    }
    promote(newJobTitle, newPayRate) {
        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;
        return `Promoted to ${newJobTitle} with new pay rate $${newPayRate} per hour.`;
    }
    getIntro(){
        return `Hi I'm ${this.getFullName()} and I am ${this.jobTitle}`
    }
}
let employee1 = new Employee(
    1, "Ian", "Auston", "Graphic Artist", 42.50);

console.log(employee1.getFullName());
console.log(employee1.getJobTitle());
console.log(employee1.getPay());
console.log(employee1.promote("Senior Graphic Artist", 50.00));
console.log(employee1.getJobTitle());
console.log(employee1.getPay());
console.log(employee1.getIntro())

// class Employee {
//     constructor(id, firstName, lastName, jobTitle, payRate) {
//         this.employeeId = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.jobTitle = jobTitle;
//         this.payRate = payRate;
//     }

//     getFullName() {
//         return this.firstName + " " + this.lastName;
//     }

//     getJobTitle() {
//         return this.jobTitle;
//     }

//     getPay() {
//         return this.payRate;
//     }

//     promote(newJobTitle, newPayRate) {
//         this.jobTitle = newJobTitle;
//         this.payRate = newPayRate;
//         return `Promoted to ${newJobTitle} with new pay rate $${newPayRate} per hour.`;
//     }
// }

// let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.50);

// console.log(employee1.getFullName());
// console.log(employee1.getJobTitle());
// console.log(employee1.getPay());

// // Example of promoting the employee
// console.log(employee1.promote("Senior Graphic Artist", 50.00));
// console.log(employee1.getJobTitle()); // Output the updated job title
// console.log(employee1.getPay()); 