function add(x, n){
  let r = x + n;
console.log("The addition is : ", r);
}

add(23, 20);

// we use the function to resuse the code and prevent from the resue of code means that not use the code which is required more and more.


// Arrow functions
// compact way of writting he fuction.
// its synatx is data-type function-name() => { we also store the function name in any data-type
  // do something }
// it is used in modern javascript.

// making the multiplication arrow function

const arrowMultiplication = () => {
  let a = 5;
  let b = 10;
  return a * b;
};

console.log("The multiplication is:", arrowMultiplication());


// making the const and simple function that count the vowel in the string 

const countVowels = (str) => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for(let i = 0; i < str.length; i++){
    if(vowels.includes(str[i].toLowerCase())){
      count++;
    }
  }

  return count;
};

console.log("The number of vowels in the string is:", countVowels("Hello World"));


// for-each loop in array
// for-each loop is actually a method which means it is the built in function and when ever we need then we invoked the function or call it.
// arrforEach(callbackFucntion)  callbackFucntion is function which is passed in the other function parameters.

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log("Number:", number);
});


// for-each in string 

let name = ["Hamza", "Hilal", "Shehzad", "Shehriyar"];

name.forEach((val) => {
  console.log("Name:", val.toUpperCase());
});

// for interview whhat is higher order function/method 

// higher order function is function that takes the other function as a parameter and returns the result is called the higher order function.
// for example the for-each function higher order function.


// practice question that print the square of the array element using for-each loop

const numbersArray = [1, 2, 3, 4, 5];

numbersArray.forEach((number) => {
  console.log("Square of number:", number * number);
});


// map object is like the for-each loop  but it have also the index and array

let num = [1, 2, 4, 5, 6];
let newArr = num.map((val) => {
  // console.log("Number:", val);
  return val;
});
console.log("New Array:", newArr);

// we use the map function if we need the new array from the previous array and need to make the new one array so we do this by its own we can easily multiply it and print it in new array which we required. It is also the higher order funtion / method becuase we can easliy pass the other function in arguments and return it.




// filter object is like the for-each loop but it returns only the elements that pass the test implemented by the provided function.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr2 = arr.filter((val) => {
  // console.log("Number:", val);
  return val % 2 === 0;
});

console.log("New Array:", newArr2);

// 🎯 Final Takeaway
// Use .map() when transforming data (creating a new array).
// Use .forEach() when executing logic on each element without modifying the array.
// Use .filter() when extracting specific elements that match a condition.
// Would you like me to explain a real-world project using these concepts? 🚀😊




// .reduce() is a powerful JavaScript array method that reduces an array to a single value. It is commonly used for calculations, aggregations, and data transformations.

let number = [1, 2, 3, 4, 5];

let sum = number.reduce((res, currentValue) => {
  return res + currentValue;
}, 0);

console.log("Sum:", sum);