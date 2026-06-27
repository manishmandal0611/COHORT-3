// function walk(){
//     console.log("Walking....")
// }
// function sing(){
//     console.log("Singing....")
// }
// function dance(){
//     console.log("Dancing....")
// }

// walk()
// sing()
// dance()



// function greet(){
//     console.log('Good Evening');
// }

// greet()



// function greet(a){
//     console.log('Good Evening',a);
// }

// greet(50)



// function greet(a){
//     console.log('Good Evening',a);
// }

// greet(50)
// greet(1)





function greet(num){                     /* num yaha par receiver ka kaam karta hai */
    console.log('Good Evening', num);        // greet jitna value dena utna hi num store kare ga 
}

greet('sinjan') // string bhi store kar sakte hai
greet()         // undefine store ho ga kyu ki koi bhi value aapne store nhi kiya hai.
greet(100)
greet(89)       /* yaha se call kiya ja rha hai matlab send kiya ja rha hai 
                   matlab argument for example bus ja rahi hai. patna se delhi
                   patna hai greet aur num hai delhi yaha se jo bhi value denege 
                   num ke pass jaye ga */




 
                   

//  function add(a,b){
//     console.log(a+b);
//  }
 
//  add(10,20)  // a aur b li value ko hum ne call kar diya



// hum function ko bhaut baar call kar sakte hai chala sakte hai alag alag tarike se for example

function add(a,b){
    console.log(a+b);
}
function sub(a,b){
    console.log(a-b);
}
function mul(a,b){
    console.log(a*b);
}
function div(a,b){
    console.log(a/b);
}

add(80,75)
sub(15,5)
mul(30,12)
div(144,12)





function greet(user,age){
    console.log('Good morning.....', user);
    if(age>=18){
        console.log("you are welcome in party");
    }else{
        console.log('Not Allowed');
    }
}

greet('deepak',34)
greet('rohan',16)







//Types of function
                      // esko bolte hai function declaration
// function a1(){                   // normal function
//     console.log('hello guys 1');
// }

// a1()


// // aur esko bolte hai function Expression
// var b1 = function(){
//     console.log('Hello Guys 2');
// }

// b1()        


// // Arrow Function
// var c1 = ()=>{
//     console.log('hello guys 3')
// }

// c1()






//jitne bhi types ka function hai sab ko ek saath chalana hai toh aise chalega 
function a1(a){                     // normal functio or function declaration
    console.log('Hello Guys 1',a);
}


var b1 = function(a){                // function expression
    console.log('Hello guys 2',a);
}


var c1 = (a)=>{                      // Arrow function
    console.log('Hello guys 3',a);
}


a1('harsh')
b1('aman')
c1('sufia')

var c2 = (a,b) => console.log('Hello Gyus 4', a,b)  // esko bolte hai one line ka function aur 1,2,3 kitna bhi value ko call kar sakte hai

c2('jahnvi',30)


var c3 = a => console.log('hello Guys 5', a) // main esko aise bhi likh sakta hu kyu ki mere pass call kar ne ke liye ek hi value hai
c3('Ajay Kumar')
c3('Vijaypal choudhary')















// very very important question for interviewr
// IIFE --- Immidately Invoked function expression
// use case main kam use hota hai.
// code ki setmatic banane main kaam aata hai code ki maintability main kaam aa jaata hai
// immidiately call ho jaata hai chal jaata hai code matlab jo bhi value di ho gii aap ne


// (function(){                       // yeh IIFE ka code hai
//     console.log('This IIFE');
// })();


// (()=>console.log('hello'))()      // yeh bhi IFEE function hai. one line code







// function se return kaise le kuch bhi
function hero (){
    var a = 10
    var b = 20

    var c = a+b

    return c
}

console.log(hero());  // jitni baar bhi call kiya function hame return kar rha hai kuch na kuch de kar ja rha hai
console.log(hero());
console.log(hero());
console.log(hero());








// return ka matlab hai function ka apna khud ka value jo ki mujhe mil rha hai in the form of retun





function a() {

    return 10
}
 var b = function () {

    return 20
}
var c = () => {

    return 30
}
var d = () => {
    return 'hello'
};


console.log(a());
console.log(b());
console.log(c());
console.log(d());







// pure function and impure function
function sqrt(a){
    return a*a
}                        //this is pure function input dedo output aa jaye ga bss etna kaam hai eska
   
console.log(sqrt(5));
console.log(sqrt(10));
console.log(sqrt(12));

 

// impure function example
var a = 10
function abc(){
    a++
    return a
}

console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());


 
// value kab pass kare gii kab nhi
function greet(user = 'sir'){
    console.log('Welcom', user);
}

greet('Harsh')
greet('Rohan')
greet()           /* sir esliye mila hai output main kyu ki koi value hum ne pass kiya hi nhi
                      esliye us ne user ka default value ko liya */



                       




