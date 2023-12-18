class Car{
    constructor(){
        // PROPERTIES -VARIABLES INSIDE THE OBJECT
        this.speed = 10;
        this.position =10;
    }
    // METHODS -FUNCTIONS INSIDE THE OBJECTS
    iterate(){
        this.position += this.speed
    }
}
// TESTS
// let c1 = new car(); //CREATE AN INSTANCE -GINGERBREAD MAN COOKIE

// console.log(c1.position) //SOLUTION WILL BE 10

// c1.iterate();
// c1.iterate();
// c1.iterate();
// c1.iterate();
// console.log(c1.position) //SOLUTION WILL BE (10 + 20+20+20+20) =90