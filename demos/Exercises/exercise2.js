class Person{

    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return this.firstName+" "+this.lastName;
    }
}
let person = new Person("Kagabo","Alex")
console.log(person.getFullName())

class Employee extends Person{

    constructor(firstName,lastName,id,jobTitle,payRate){
        super(firstName,lastName)
        this.id = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;

    }
    getIntro(){
        return`Employee name ${this.getFullName()} other Info ${this.id} ${this.jobTitle} ${this.payRate}`

    }
}
let employee = new Employee("Nancy","soldier",1,"serior developer",45.00)
console.log(employee.getIntro())