// concept is same is to c++ but it i lose language we can make class, constructor and methods
//  used them easily to prevent our program from resuse of code for that purpose we also using the inheritence.

class ToyotaCra{
  start(){
    console.log('Starting Toyota CRA...');
    
  }
  stop(){
    console.log('Stopping Toyota CRA...');
  }
}
// make object that will print the above 2 function

let cra = new ToyotaCra();
cra.start();
cra.stop();
// i create this object that i print the same properties for my this object also.
let audi = new ToyotaCra();

audi.start();
audi.stop();


// inheritence
class person{
 parent(){
  console.log("This is the parent class");
 }
 eat(){
  console.log("This is the parent eat method");
 }
}

// inherit the Engineer class from the person class.

class Engineer extends person{
  engineer(){
    console.log("This is the engineer class");
  }
  engineerEat(){
    console.log("This is the engineer eat method");
  }
}
let person1 = new person();
person1.parent();

let engineer1 = new Engineer();

engineer1.parent();
 engineer1.engineer();
 person1.eat();

 // if child & parent have same method the child method will be used. [This is called method overriding].
