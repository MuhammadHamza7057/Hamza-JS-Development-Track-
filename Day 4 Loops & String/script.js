// in this i have learned the concept of loops from basic to advanced 
for(let i = 0; i < 10; i++) {

console.log("Muhammad Hamza Learning the js from basic to advanced");

}

// now i want that i add the digits from 1 to 9
let sum = 0 
for(let i = 0 ; i < 10; i++) {
  sum = sum + i;
}
console.log("sum = " + sum);
// so in this it have the same logic as the c++ 

// the while and do-while loop is same like the c++

let z = 1;
while(z <= 10) {
console.log("z = ", z);
z++;
}

// this is the simple while loop same logic as c++ and also it match the same syntax to c++ 
// it used for the condition which is given


// the do-while loop is the same as the c++

let x = 1;
do{
  console.log("I have master these loops concept becuase i have 2 years that i am using this");
  x++;
}
while(x <= 5);

// its run when the condition is false it excute the code inner the loop in once mostly used for menu-based program



// there re 2 new loops which are not in c++ 
// for-of loop & for-in loop 


// for-of is used for string and arrays 

let str = "javascript";
for(let i of str){
  console.log("i = ", i);
}
// they have increment by itself and store the character by character word in i 


// for-in loop used for objects

let student = {
  name: "Hamza",
  semester: 4,
  cgpa: 2.75
}

for(let key in student ){
  console.log("key = ", key, "Value = ", student[key]); // passing the key value and print it.
}


let fullName = "Muhammad Hamza";
console.log("lenght = ", fullName.length);
console.log("fullName = ", fullName); 


// the types of string in js is called template literal mostly used for object 

let object = {
  name: "pencil",
  price: 10
}

// so if i want that  i print the name and the price of the prn one method is that i simple make the small small string and print the object item and the other is to string template literals

console.log("The cost of ", object.name, "is ", object.price, "rupee"); // this the string method

// this is template litreals methods

let output = `The cost of ${object.name} is ${object.price} rupee`;
console.log(output);
// both have same work but the template luterals is good approach and good progreamming practice