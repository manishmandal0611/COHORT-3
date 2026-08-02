// var obj = {
//     username: "MANISH MANDAL",
//     Age: 25,
//     City: "New Delhi"
// }

// console.log(obj);
// console.log(obj.Age);
// console.log(obj.username);
// console.log(obj.City);

// var user = {
//     name: 'Virat Kohli',
//     age: 36,
//     team: 'india',
//     isMarried: true,
//     skills: ['Batting','Dancing','Fielding']
// }

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.team);
// console.log(user.skills);
// console.log(user.skills[0]);
// console.log(user.skills[1]);

// let person = {
// name: "Aman",
// age: 25,
// city: "Bhopal",
// isStudent: true
// };

// console.log(person.age);

// let person = { name: "Aman", age: 25 };
// person.city = "Bhopal";
// person.age = 78

// console.log(person);

////////////////// this keyword
//

////////////////////Nested objects

// let user = {
//     name: "Aman",
//     address: {
//         city: "Bhopal",
//         state: "MP",
//         pincode: 226022
//     },
//     hobbies: ["reading", "coading"]
// };

// console.log(user.address.city);
// console.log(user.hobbies[0]);

/////////////Object Destructuring

// let person = { name: "Aman", age: 25, city: "Bhopal" };
// let { name, age } = person;
// console.log(name, age);

// let { name: fullName, age: years } = person; ///Rename kiya gya hai
// console.log(fullName, years);

///// Nested object
// const user = {
//     name: "Rohan",
//     address: {
//         city: "Lucknow",
//         state: "UP"
//     }
// };
// const {
//     address: { city, state }
// } = user;

// console.log(city, state);

/// Spread with object

// const user = {
//     name: "Manish",
//     age: 24
// };
// const newUser = {...user };
// console.log(newUser);

//looping through object
// for....in loop

// const user = {
//     name: "Manish",
//     age: 24,
//     city: "Lucknow"
// };
// for(let key in user){
//     console.log(key);
// }

// const user2 = {
//   name: "Manish",
//   age: 24,
//   city: "Lucknow",
// };
// for (let key in user2) {
//   console.log(key, ":", user2[key]);
// }














// QUESTION PRACTICE
// 1. Create an Object

// Create an object for a student with:

// - name
// - age
// - course

// Then print all values.

let student = {
  name: "Manish",
  age: 24,
  course: "B.tech",
};

console.log(student);












//Given:
//Print:

// - brand
// - model

// using both:

// - dot notation
// - bracket notation

const car = {
  brand: "BMW",
  model: "M4",
  year: 2022,
};

console.log(car.brand);
console.log(car.model); // dot se print hua hai

console.log(car["brand"]);
console.log(car["model"]); // bracket print














// 3. Update Object Value
// Change the age of a user from 20 to 25.

const user = {
  name: "Anubhav",
  age: 20,
};

user.age = 25;

console.log(user);















// 4. Add New Property

// Add a new property:
// isAdmin: true

const user2 = {
  name: "manoj",
  age: 56,
};

user2.isAdmin = "true";

console.log(user2);















// 5. Delete Property
// Remove the `password` property from the object.
const account = {
  username: "john",
  password: "12345",
};

delete account.password;

console.log(account);











// Count Properties
// Write a function that returns how many properties an object has.
// Example: 

countProperties({a:1,b:2,c:3})

function countProperties(obj) {
    return Object.keys(obj).length;
}

console.log(countProperties({a:1,b:2,c:3}));











// 7. Loop Through Object
// Print all keys and values from this object.
// Hint: use
// for...in

const person = {
  name: "Rahul",
  age: 22,
  city: "Delhi"
}

for (let key in person) {
    console.log(key, ":" , person[key]);
}














// 8. Check Property Exists
// Check whether `"email"` exists inside an object or not.
// Hint:
// Use: in


const user3 = {
    name: "Manish",
    age: 24,
    email: "mainish@gmail.com"
}

console.log("email" in user3);











// Merge Two Objects
// Merge these two objects into one.
//Hint:
//Use:
//spread operator


const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }

const result = {
    ...obj1,
    ...obj2
};

console.log(result);











// 10. Convert Object to Array
// Convert this object into an array of key-value pairs.
//Hint:
// Use:
// Object.entries()

const user4 = {
  name: "Aman",
  age: 21
}

console.log(Object.entries(user4))











// 11. Find Highest Value
// Find the student with highest marks.

const marks = {
  Anubhav: 95,
  Rahul: 82,
  Aman: 90
};

let highestStudent = "";
let highestMarks = 0;

for(let student in marks) {
  if(marks[student] > highestMarks) {
    highestMarks = marks[student];
    higestStudent = student;
  }
}

console.log(highestStudent);
console.log(highestMarks);














//12. Sum of Object Values
// Find total salary.
//Expected Output: 4500

const salaries = {
  john: 1000,
  alex: 2000,
  bob: 1500
}

let total = 0;

for (let person in salaries) {
  total = total + salaries[person];
}

console.log(total);















// 13. Nested Object Access

// Print:

// - city
// - pincode

const user5 = {
  name: "Anubhav",
  address: {
    city: "Bhopal",
    pincode: 462001
  }
}

console.log(user5.address.city);
console.log(user5.address.pincode);














// 14. Object Method Practice
// Create an object with:

// - name
// - marks
// - method called `getResult`
// If marks > 40:
// "Pass"

// else:
// "Fail"

const student1 = {
  name: "Manish",
  marks: 75,

  getResult() {
    if (this.marks > 40) {
      return "Pass";
    }
    else {
      return "fail";
    }
  }
};

console.log(student1.getResult());














// let person2 = {
//     firstName: "Rahul",
//     lastName: "Sharma"
// };

// let { firstName , lastName } = person2

// console.log(firstName,lastName);









var obj = {
  firstName: 'Manish',
  lastName: 'Mandal',
  age: 33,
  getIntro:function(){
    console.log(this.firstName+" "+this.lastName);
  }
}

obj.getIntro()







 // function sharing ke liye yeh 3 methods use hota hai
 
 // Call
 // apply
 // bind




 //  var student5 = {
//   firstName:'Rahul',
//   lastName:'Singh',
//   getIntro:function(){
//     console.log(this.firstName+" "+this.lastName);
//   }
//  }


//  var student6 = {
//   firstName:'Soham',
//   lastName:'Rajput'
//  }

//  student5.getIntro()







/* get intro ka function eske ander bana hua hai student 5 ke ander. lekin main chahata hu ki student 6 ko call karu main
 toh main call karte time par getintro.call ke ander student 6 ko call kar dunga toh automatic jo student 5 ke ander ka jo function hai
 woh function var student 6 ke ander aa jaye ga*/

 var student5 = {
  firstName:'Rahul',
  lastName:'Singh',
  getIntro:function(){
    console.log(this.firstName+" "+this.lastName);
  }
 }


 var student6 = {
  firstName:'Soham',
  lastName:'Rajput'
 }

 student5.getIntro.call(student6)






 var student7 = {
  firstName:'Santosh',
  lastName:'Sharma',
  getIntro:function(city,state){
    console.log(`${this.firstName} ${this.lastName}, ${city} (${state})`);
  }
 }

 var student8 = {
  firstName:'Mohit',
  lastName:'Yadav'
 }

 student7.getIntro.call(student8, 'patna','Bihar')