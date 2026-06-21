//Create a function named greet that prints "Hello World".

function  greet(){
    console.log("Hello World");
}

greet();

//Create a function add(a, b) that returns the sum.

function add(a,b){
    console.log(a+b);
}

add(65,90);

//Write a function to calculate the square of a number.

function square(a){
    console.log(a*a);
}

square(5);

//Create a function that checks whether a number is even or odd.
function CheckEvenOdd(num){
    if(num % 2 === 0){
        console.log("Even");
    }else{
        console.log("odd");
    }
}

CheckEvenOdd(75);
CheckEvenOdd(80);

//Write a function that converts Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(0));  
console.log(celsiusToFahrenheit(25)); 
console.log(celsiusToFahrenheit(100)); 

//Create a function with default parameter "Guest".
function greet(name = "Guest"){
    console.log("Hello", name);
}

greet();
greet("Manish");

//Write a function that returns the greater of two numbers.
function greaterNumber(num1, num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}

console.log(greaterNumber(10, 20));
console.log(greaterNumber(185, 150));

//Create a function to calculate area of rectangle
function rectangleArea(length, breath){
    return length*breath;
}

let a = rectangleArea(10,20);
console.log(a)

//Write a function that returns "Adult" if age ≥ 18 else "Minor".
function Ad(age){
    if(age >= 18){
        console.log("Adult");
    }
   else {
    
    console.log("Minor");
    }

       
}
Ad(17);

// Create a function to reverse a string.
function tree(a){
    var b = parseFloat(a.toString.spilt('').reverse().join)
    console.log(b);
}
tree(45);