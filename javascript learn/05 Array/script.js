// Create an array with 3 fruits and print the second fruit.
let fruit = ["apple", "guava", "banana"]
console.log(fruit[1]);


// Add "mango" at the end and "pineapple" at the beginning of this array:
let fruit2 = ["apple", "banana"]
fruit2.push("Mango");
fruit2.unshift("pineapple");
console.log(fruit2);

// Replace "Banana" with "kiwi" in the array above.
let fruit3 = ["Apple", "Banana"]
fruit3.pop();
fruit3.push("Kiwi")
console.log(fruit3);

// remove the last item from this array using a method:
let number = [1,2,3,4,5]
number.pop();
console.log(number);

// Insert "Red" and "Blue" at index 1 in this array:
let color = ["green", "Yellow"]
color.splice(1,0,"Red", "Blue");
console.log(color);

// Extract only the middle 3 element from this array
let item = [1,2,3,4,5,6,]
let item2 = item.slice(1,4);
console.log(item2);

// Sort this array alaphabetically and then reverse it:
let name = ["Zara", "Arjun", "Mira", "Bhavya"]
name.sort();
name.reverse();
console.log(name);

// use map() to Square each number
let arr = [1,2,3,4,5]
let arr2 = arr.map(function(a){
    return a*a
});

console.log(arr2);

// Use Filter () to Keep number greter than 10;
let arr3 = [15,12,8,20,3]
arr3.filter(function(val){
    return val>10
});

console.log(arr3);

// Use reduce() to find the sum of this array:
// let arr4 = [10,20,30]
// let sum = arr4.reduce(function(a,b){
//     return a + b;
// },0);
//  console.log(sum);

 // use. find() to get the first number less than 10:
 let arr5 = [12, 15, 3, 8, 20]
 let ans = arr5.find(function(a){
    return a<10;
 });

 console.log(ans);

 // use some() to check if any student has scored below 35:
 let arr6 = [45, 60, 28, 90]
 let hoo = arr6.some(function(a){
    return a<35;
 })

 console.log(hoo);

 //use every() to check if all numbers are even
 let arr7 = [2, 4, 6, 8, 10]
 let hihihi = arr7.every(function(a){
    return a % 2===0
 });

 console.log(hihihi);

 // Destructure this array to get firstName and lastName:
 let fullName = ["Harsh", "Sharma"]

 console.log(fullName);
 let[firstName,lastName]=fullName;
 console.log(firstName);
 console.log(lastName);

 // Merge two array using spread operator:
 let a = [1, 2];
 let b = [3, 4];
 let c = [...a, ...b];

 console.log(c);

 // And "India" to the start of this array using spred:
 let countries = ["USA", "UK"]
 countries = ["india", ...countries]
 
 console.log(countries);

 // clone this array properly (not by reference):
 let arr8 = [1, 2, 3]
 let arr9 = [...arr]
 
 console.log(arr9);

 // Find the sum of numbers from 1 to 100 using a loop.

 let sum5 = 0;
 for(let i = 1; i < 100; i++){
    sum5 = sum5 + 1;
 }

 console.log(sum5);

 // Ask the user for a number and print wheather each number from 1 to that number is even or odd.
 // e.g,, "1 is odd ", "2 is even"

//  let val = prompt("give a number");

//  for(let i = 1; i <= val; i++){
//     if(i % 2 === 0){
//         console.log(`${i} is even`);
//     }
//     else{
//         console.log(`${i} is odd`);
//     }
//  }

//  Intermediate Question

// You are given an array of prices.

// Print each price with `"₹"` before it.

// ```jsx
// let prices = [100, 250, 399, 499];
// ```

// ### Hint

// - `forEach()` runs once for every element.
// - You don't return anything here.
// - Use `console.log()` inside it.

let prices = [100, 250, 399, 499];
prices.forEach(function(prices){
   console.log("₹"+ prices);
});


// // You are given an array of students.

// ```jsx
// let students = [
//   { name: "Anubhav", marks: 85 },
//   { name: "Rahul", marks: 42 },
//   { name: "Aman", marks: 90 },
// ];
// ```

// Print:

// - `"Pass"` if marks are greater than 50
// - `"Fail"` otherwise

let students = [
  { name: "Anubhav", marks: 85 },
  { name: "Rahul", marks: 42 },
  { name: "Aman", marks: 90 },
];

students.forEach(function(students){
   if(students.marks > 50){
      console.log(students.name, "PASS");
   }
   else{
      console.log(students.name,  "FAIL");
   }
});


// // Convert all names into uppercase.

// ```jsx
// let names = ["anubhav", "rahul", "aman"];
// ```

let names = ["anubhav", "rahul", "aman"];
let names2 = names.map(function(names){
   return names.toUpperCase()
});

console.log(names2);

//Filter all even numbers.

// ```jsx
// let nums = [1,2,3,4,5,6,7,8];
// ```

// Expected Output:

// ```jsx
// [2,4,6,8]
// ```

// ### Hint

// - `filter()` keeps elements when condition is `true`.

let numb1 = [1,2,3,4,5,6,7,8];
let numb2 = numb1.filter(function(numb1){
   return numb1 % 2 === 0;
});

console.log(numb2);

//Find total sum of array.

let numbe = [10,20,30,40];
let numbe2 = numbe.reduce(function(sum,numbe){
   return sum + numbe;
},0);

console.log(numbe2);
