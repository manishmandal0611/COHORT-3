// // const h1 = document.querySelector('h1')



// // selection of elements
// /* const h1 = documents.querySelector("h1"); ==> only selector first tag*/

// /* const h1 = document.querySelectorAll("h1"); ==> for selecting all tags*/

// // const h1 = document.getElementsByTagName("h1");


// // const h1 = documents.getElementById('heading');

// // const h1 = documents.getElementsByClassName('hey')


// // hamesha esko use karenge hum
// const h1 = documents.querySelector(".hey");
// const box = documents.querySelector("#hey");


// //changing of HTML
// // text change --->
// // textContent --->
// // innerText ---> 
// //innerHTML ---> pura sturcture ud jaye ga





// console.log('h1')
















// dom has 4 pillars

// 1.    selection of an element
// 2.    changing element
// 3.    changing CSS
// 4.    Event Listner









// selection of element
const b = document.querySelector("h1");   /* document.queryselector se kisi bhi element ko select kar sakte hai.
                                        uske baad kisi variable main store karwa sakte hai jaise kii const b main store kiya gya hai. */
console.log(b);                          // console.log(b) se screen par print karwa ke deekh sakte hai





// changing of element
b.innerHTML = "main ne h1 ke ander jo bhi likha tha sab change kar diya" // innerHTML ka use kar ke HTML ke element ke ander se saara kuch change kar sakte hai






// changing CSS
const a = document.querySelector("#hey");
a.style.color = "red";                     // a.style.color eska use kar ke css bhi change kar sakte hai.





// Event Listerner
const c = document.querySelector("#hihi")
c.addEventListener("click", function (){
    console.log("lovely boy")
})









// ab sab ko ek saath use kar ke deekh te hai oky

const e = document.querySelector("#pop");
e.addEventListener("click", function(){
    e.innerHTML = "Badal gya hu main ab teri yaadon main reh reh kar"
    e.style.color = "pink"
    e.style.backgroundColor = "black"
    console.log("yaad yaad yaad bss yaad reh jaati hai");
});







// mini project for bulb

const f = document.querySelector("#bulb");
const g = document.querySelector("button");

const flag = 0

g.addEventListener("click", function(){
     
    if(flag == 0) {
        f.style.backgroundColor = "yellow";
        console.log("on bulb");
        flag = 1
    }
    else{
        f.style.backgroundColor = "transparent";
        console.log("off");
        flag = 0
    }

    

})


const y = document.querySelectorAll("h1");  // jitne bhi h1 ka tag tha sab ko ek ssath select kar liya hoga query selector ALL ka yahii kaam hai
// console.log(y)


y.forEach(function(e){   // forEach laga ne se sab element alag alag deekhne lage ga
    console.log(e)
})



