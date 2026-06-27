
   const product = {
    title: "Ball pen",
    rating: 4.5,
    offer: 5,
    price: 270,
   };

   console.log(product); 


const instagram = {
    username: "Shradhakhapra",
    name: "Shradha Khapra",
    posts: 195,
    followers: 1000,
    following: 500,
    bio: "Apna College | Ex-Microsoft |",
};

console.log(instagram);






console.log("Hello, World!");

var a = 1
while(a<5){
    console.log('Hello');
    a++;
}

var a = 1

while(a<10){
    console.log(a);
    a++;
}

//reverse counting

var a = 10

while(a>0){
    console.log(a);
    a--;
}

//user se number lekar even number print  

var num = Number(prompt('Enter a number'))

var a = 1

while(a<=num){
    if(a%2 ==0){
        console.log(a);
    }
    a++
}

//user se number lekar odd number print

var num = Number(prompt('Enter a number'))

var a = 1

while(a<=num){
    if(a%2 !=0){
        console.log(a);
    }
    a++
}

//ask a user any number and print its table

var num = Number(prompt('Enter a number'))

var a = 1
while(a<=10){
    console.log(num + ' x ' + a + ' = ' + num*a);
    a++;
} 

// for loop
for(var a = 1; a<=10; a++){
    console.log('hihihi hahaha',a);
}

for(var a = 10; a>0; a--){
    console.log('hihihi hahaha',a);
}

 var a = 1;
 do{
    console.log('hello',a);
    a++;
 }while(a<=10);

 

 var num = '10';
 var a = 'manish';
 
 console.log(a+num);

 var age = 20;

 var name = 'manish';

 var gender = 'male';

 console.log("hero's name is",name,'his age is',age,'and his gender is',gender  );

 /* another method because problem faced in double quots and comma again and again used
   so i will used template literals */

 var age = 20;

 var name = 'manish';

 var gender = 'male';

 console.log(`hero's name is ${name}, his age is ${age}, and his gender is ${gender}`)
  
//break statement concept
 for(var a = 1; a<=10; a++){
    console.log(a);
    if(a==5){
        break;
    }
 }

 //break continue concept
 for(var a = 1; a<=10; a++){
    
    if(a == 5){
        continue;
    }

    console.log(a);
 }

 