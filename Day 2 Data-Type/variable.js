Name = "Muhammad";
firstName = "Hamza";
console.log(Name + " " + firstName);
// js is dynamic language not like c or c++ becuse they have not the data type like that specific that you store in the number in int and name in string there is no decleration of data type in js
Name = '057';
console.log(Name)
// js variable or case sensitive variable name just like that the uppercase and lowercase have different 
name = "Hilal khan";
console.log(name); // js variable or case sensitive variable name just like that the uppercase and lower 

// there are 3 types let, const and var 
// let and const are ES6 and developed in 2015 and now a days these are most usable
// var are redefined and can be used to out of scope 
// let are not redefined and cannot be used in scope again if we need to use use we use it in another scope 
// const is same to same in c++ it fixed and not changable 

let fullName = "Programmer";
console.log(fullName);



// there are 7 premitive data type 
// string, number, boolean, undefined, Null, bigint, symbol 
// premitive means that they are fixed and non premitive means changable like objects

let year = "4th";
console.log(year);

// this is the way to create the object in the js 
const semester1 = {
  semester: "4th",
  course: "Computer Science",
  grade: "A+",
  cgpa: 3.5,
}

// if i print the variable value in the creen i have 2 ways two print it

console.log(semester1.course); // this is way two print it 
console.log(semester1["course"]); // this is way two print

// if i want to acess the object varibale and change it so we use these syntax
 semester1["cgpa"] = semester1["cgpa"] + 0.3;  // this way we acess and change the variable in the object
 console.log(semester1.cgpa);