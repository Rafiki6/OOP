/* OBJECT ORIENTED PROGRAMMING: is a way of writing code that designs around the data in a system.
-Prior to OOP, we designed code around the functions of a system.
-They are collection of related data fiels grouped together into a single unit.
*/

// EXAMPLE of an object
let course ={
    title:"Introduction to JavaScript",
    instructor: "Lynn White",
    startDate: "July 10",
    numDays: 50
};

/*-OOP create a language structure called a Class.
-CLASS: Is a blueprint for all objects of a single type.
FOR EXAMPLE: the courses CLASS is used to create all courses objects.
-CLASSES defined the data members of the type, as well as a set of methods
that operate upon that data

-OOP is probably the most popular coding technique in morder days allows
    developers to create robust,maintainable, and extendable systems.

SOME DEFINITION
-CLASS: are the user-defined data types that acts as the blueprint for
        individual objects.
-PROPERTIES: are data members that help identify the state of the object.
OBJECTS: Are instances of a class create with specifically defined data,or properties.
METHODS: are function that are defined in class and operate on the datain on object.

OOP has more OOP such us INHERITANCES,POLYMORPHISM,INTERFACES, AND ABSTRACT
 */
// EXAMPLE OF CLASS
class Employee{
    // CONSTRUCTOR FUNCTION IS CALLED WHEN CREATE
    // EMPLOYEE OBJECTS USING THE NEW KEYWORD

    constructor(id,firstName,lastName,jobTitle,payRate){
        this.EmployeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
    // CREATE A METHODE ARE WRAPPED UP WITH THE OBJECTS AND OPERATE UPON THE DATA IN THAT OBJECT
   displayIntro(){
    console.log("Hi! I'm " + this.firstName +" "+this.lastName+
                "and I am a "+ this.jobTitle)
   }

}
// CREATING OBJECTS USING CLASS
// EXAMPLE
let employee1 =new Employee("1","Ezra","Aiden","Theater Teacher",38.46);
let employee2 = new Employee("2","Elisha","Aslan","Game Programmer",43.27);

// CALL THETHOD USING OBJECTS
employee1.displayIntro();
employee2.displayIntro();

/*CALLING ONE METHOD FROM ANOTHER
-one methods can call another method of the same object by 
prefacing it with "this"
*/ 
class Student{
    // CREATE A CONSTRUCTOR
    constructor(id,firstName,lastName,jobTitle,payRate){
        this.EmployeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate =payRate;

    }
    getFullName(){
        return this.firstName +""+this.lastName;
    }
    getIntro(){
        let intro = "Hi I'm "+this.getFullName()+" and I am " + this.jobTitle

        return console.log(intro);
    }

}
let student = new Student("1", "Ezra", "Aiden","Theater Teacher", 38.46);
student.getIntro();


