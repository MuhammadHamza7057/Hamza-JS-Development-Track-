// The collection of same and different item is called array. Its linear data types.
// This js is not strickly like c++ in array we add the other data-type items.
let arr = ["a", "b", "c", "d", "e", ];
console.log(arr);
//in the following array i insert the different item and than print it on screen.
let arr1 = ["a", "b", "c", "d", 7]; // i have insert the different data-type of int and print it on screen.
console.log(arr1);

// So from the loop concept we know that if we need the list of item and we print we have 2 choices one is object and than used it key to pront it and the 2nd choice is array and used the loop concept that we print it one by one.

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // we know that the index is start from 0.
for (let i = 0; i < arr3.length; i++){
  console.log(arr3[i]);
} // we print the array digits one by one.
// we can also change the index value like 
arr3[4] = 10;
console.log(arr3[4]); // they print the replaced number 10 with 5

for (let i = 0; i < arr3.length; i++){
  console.log(arr3[i]);
} 
// but the string are not change they are imutable and the array is mmutable

// we also use the for-of loop to print the value of the array

let citeis = ["MKD", "Mardan", "Chakdara", "Dargai", "Seri"];
for(let city of citeis){
  console.log(city);
}
// they print one by one the city name.

// add the numbers in array and find it average through loop
let arr5 = [12, 14, 18 , 20, 7, 9, 10, 11];
let sum = 0;
for(let val of arr5){
sum += val;
}
let average = sum / arr5.length;
console.log(average);
console.log(`Avrage of the following array is = ${average}`); // this string is called template literal string.
// 03191708806
