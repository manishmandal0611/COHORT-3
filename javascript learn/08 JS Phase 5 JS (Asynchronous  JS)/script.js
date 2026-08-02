console.log("start");
setTimeout(()=>{
    console.log("3 second baad ye chala")
},3000);

console.log("END");



//SetTimeout

setTimeout(function(){
    console.log("Hello after 2 second");
},2000);




// arrow function ka use industries main jada hota hai

setTimeout(()=>console.log("Hi"),1000);







// setInterval

// setInterval(()=>{
//     console.log("Hello")
// },1000);


let count = 1;
let intervalId = setInterval(() => {
    console.log("Count: " + count);
    count++;

    if (count > 5) {
        clearInterval(intervalId);  // 5 second ke baad stop ho jaye ga
        console.log("Interval band ho gaya");
    }
}, 1000);