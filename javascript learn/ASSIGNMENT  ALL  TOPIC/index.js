// Print "Hello JavaScript" in the console.
console.log("Hello JavaScript");





// Print your name, age, and city using one console.log()
 var name = "Manish Mandal";
 //let age = 21;
 const country = "india";

 console.log(name);
 console.log(age);
 console.log(country);  
 console.log(name, age, country);  // single console.log() to print all three variables





 // Print a warning message using `console.warn()
console.warn("warning");



//Print an error message using console.error().
console.error("error");




//Use console.table() to display an array of 5 numbers.
var numbers = [1, 2, 3, 4, 5];
console.table(numbers);




                                             
                            // Variable Questions
//Create a variable called studentName and store your name in it.
var studentName = "Manish Mandal";
console.log(studentName);   




//Create a variable age and print it.
//var age = 21;
//console.log(age);




//Create two variables and swap their values.
var a = 10;
var b = 20;
var c;

// Swap the values
c = a;
a = b;
b = c;

console.log("a=",a, "b=",b);





//Create a constant variable for PI and print it.
const PI = 3.14159;
console.log(PI);




//Declare a variable without assigning a value and print it.
var e;
console.log(e);





//Create a variable score and increase it by 10.
var score = 80;
var user = score + 10;
console.log(user);






//Create three variables for first name, last name, and full name.
var firstName = "Manish";
var lastName = "Mandal";
var fullName = firstName +" " + lastName;
console.log(fullName);





                                         //Data Types Questions
//Create variables of type string, number, boolean, null, and undefined.
var name = "Manish";      // String
var age = 20;             // Number
var isStudent = true;     // Boolean
var data = null;          // Null
var city;                 // Undefined

console.log(name);
console.log(age);
console.log(isStudent);
console.log(data);
console.log(city);
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof data);
console.log(typeof city);





//Store your mobile number in a variable and check its type.
var mobileNumber = 9876543210;
console.log(typeof mobileNumber);





                                              //Type Conversion & Coercion
//Convert the string "50" into a number.
var str = "50";
var num = Number(str);
console.log(num);




//Convert the number 100 into a string.
var num = 100;
var str = String(num);
console.log(str);




                                //Operators Questions
//Add two numbers and print the result.
let num1 = 10;
let num2 = 20;
let sum  = num1 + num2;
console.log(sum);





//Find the remainder when 25 is divided by 4.
var num3 = 25;
var num4 = 4;
var divided = num3 % num4;
console.log(divided);




//Find the square of a number using exponent operator.
var num5 = 5;
var square = num5*num5;
console.log(square);




//Increment a variable using ++.
var a = 10;
a++;
console.log(a);




//Decrement a variable using -.
var b = 20;
b--;
console.log(b);




//Create two boolean variables and test &&, ||, and !.
var bool1 = true;
var bool2 = false;
console.log(bool1 && bool2);
console.log(bool1 || bool2);
console.log(!bool1);




                               //Part 1 — Functions Basics (1–20)
//Create a function named greet that prints "Hello World".
function greet(){
    console.log("Hello World");
}
greet();





//Create a function add(a, b) that returns the sum.
function add(a,b){
    console.log(a+b);
}
add(10,20);





//Write a function to calculate the square of a number.
function greet(num){
    console.log(num*num);
}
greet(5);




//Create a function that checks whether a number is even or odd.
// function number(num){
//     console.log(num%2==0?"even":"odd");
// }
// number(16);




//Create a function with default parameter "Guest".
function greet(name="Guest"){
    console.log("Hello " + name);
}
greet();
greet("Manish");




//Create a function to calculate area of rectangle.
function area(l,b){
    return l*b;
}
console.log(area(5,10));




//Write a function that returns "Adult" if age ≥ 18 else "Minor".
function ageCheck(age){
    if(age>=18){
        return "Adult";
    }
    else{
        return "Minor";
    }
}
console.log(ageCheck(20));
console.log(ageCheck(16));




//Create a function to reverse a string.
function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));




//Write a function expression for multiplication.
var b1 = function(a,b){
    console.log(a*b);
}

b1(5,10);




//Write a callback function example using setTimeout.
// setTimeout(function() {
//     console.log("Hello, World!");
// }, 1000);




//Create a function that returns the sum of two numbers.
function add(a,b){
    return a+b;
}
console.log(add(10,20));




//Create a function that returns the square of a number.
function area(a){
    return a*a;  
}
console.log(area(50));




//Create a function that checks whether a number is Even or Odd.
function number(num){
    console.log(num%2==0?"even":"odd");
}
number(16)
number(25)





//Create a function that checks if a person is eligible to vote.
function checkage(age){
    if(age>=18){
        return "you are eligible for vote"
    }
    else{
        return "you are not eligible for vote"
    }
}
console.log(checkage(18));
console.log(checkage(20));
console.log(checkage(17));




//Print numbers from 1 to 50 using a loop.
function printnumber(){
    for(let i = 1; i <= 50; i++){
        console.log(i)
    }
}
printnumber(25)





//Print all even numbers between 1 and 100.
function even(){
    for(let i = 1; i <= 100; i++){
        if(i%2===0){
            console.log(i)
        }
    }
}
even(100)




                                   ////////JavaScript Practice Task – Beginner Friendly ////
