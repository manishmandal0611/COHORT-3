let hero = {
    fname: "manish",
    lname: "kumar",
    age: 22,
    getIntro: function () {                /* agar main normal function banata hu toh uska lexical hai
                                             aur agar main arrow function ko banata hu toh uska kuch lexical function contact nhi hota hai
                                             */
        console.log(this.fname);
    }
}

hero.getIntro();  













// (Before ES6) Constructor function


//oops  
function CreateBook(bookName, authorName, pages){  // constructor function bolte hai 
    this.bookName = bookName
    this.authorName = authorName
    this.pages = pages
    this.getfrontPage = function(){
        console.log('Book Name', this.bookName);
        console.log('Author Name', this.authorName);
        console.log('pages', this.pages);
    }
}

let book1 = new CreateBook('Hp - prisoner of Azkaban', 'JK Rowling' ,760)
let book2 = new CreateBook('rich Dad Poor Dad', 'robert kiyosaki' ,440)
let book3 = new CreateBook('Sapiens', 'Yuva Noah Harrari1' ,850)

console.log(book1);
console.log(book2);
console.log(book3);

book1.getfrontPage();
book2.getfrontPage();
book3.getfrontPage();


 function MakeStudents(fname, lname, contact, isVerified){ // constructor function
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
    this.isVerified = isVerified;
    this.showProfile = function (){
        if (this.isVerified){
            console.log(`Name: ${this.fname} ${this.lname}, Contact: ${this.contact}`);
        }else{
            console.log('User Not Verified');
        }

    }
 }

 let s1 = new MakeStudents('Abhishek', 'Singh', 1234567890, true)
 let s2 = new MakeStudents('Ram', 'Mishra', 0987654321, false)
 let s3 = new MakeStudents('Kunal', 'lal', 123456890, true)

//  console.log(s1);
//  console.log(s3);
//  console.log(s2);

s1.showProfile();
s2.showProfile();
s3.showProfile();














// (After ES6) Class

class MakeStudents1 {
    constructor(fname, lname, contact, isVerified){
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
        this.isVerified = isVerified;
        this.showProfile = function (){
            if (this.isVerified){
                console.log(`Name: ${this.fname} ${this.lname}, Contact: ${this.contact}`);
            }else{
                console.log('User Not Verified');
            }
    }
    }
}

let s5 = new MakeStudents1('Himanshu', 'Kumar', 567890, true)
let s6 = new MakeStudents1('Ramkala', 'Yadav', 7654321, true)
let s7 = new MakeStudents1('Surajrawat', 'lal', 89890, false)
    
s5.showProfile();
s6.showProfile();
s7.showProfile();   
 








// solve question practice

const user = {
  name: "Anubhav",

  greet() {
    console.log("hello", this.name);
  }
};

user.greet();





// make a regular function
const user1 = {
    name: "Rahul",

    regular(){
        console.log(this.name);
    }
}

user1.regular();





// Arrow method

const user3 = {
    name: "Kunal",

    arrow: () => {
        console.log(this.name);
    }
};
 user3.arrow();








 const user4 = {
    name: "Mohan Lal",
    hobbies: ['coading', 'Gaming', 'Reading'],

    showHobbies() {
        this.hobbies.forEach(function(hobby){
            console.log(this.name + " likes " + hobby);
        })
    }
 };

 user4.showHobbies();




// Arror function
 const user5 = {
  name: "Rahul",
  hobbies: ["Coding", "Gaming", "Reading"],

  showHobbies() {
    this.hobbies.forEach((hobby) => {
      console.log(this.name + " likes " + hobby);
    });
  }
};

user5.showHobbies();