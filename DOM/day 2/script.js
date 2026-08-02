// // // let h1 = document.querySelector("h1")
// // // // console.dir("h1")  esko use kar ke code main dhundna ki h1 main kya likha tha
// // // h1.innerText = "hello dost how are you are fine aur not bro"   // uske baad change kar ke kuch bhi likh dena




// // // // Text Content bolte hai
// // // let h2 = document.querySelector("h2")
// // // h2.innerHTML = "<i>Manish Mandal</i>" // pura html hi change kar diya 

// // // let h3 = document.querySelector("h3")
// // // h3.hidden = true    // hidden se text gayab ho gya hai





// // // // Attribute manipulation
// // // let a = document.querySelector("a")
// // // // a.href = "https://www.google.com"                                 // aise bhi kar sakte hai

// // // a.setAttribute("href", "https://www.google.com")

// // // let img = document.querySelector("img")
// // // img.setAttribute(
// // //     "src",
// // //     "c:\Users\manis\OneDrive\Pictures\pramod-tiwari-RH3iY2KFBjk-unsplash.jpg");

 





// // // // Dynamic DOM manipulation
// // // // html main h3 ka ek bhi element nhi hai usko add karna 
// // // // create element
// // // let h3 = document.createElement("h3");
// // // h3.textContent = "ghar par jao kahana khaaoo";
// // // document.querySelector("body").prepend(h3);   // ab h3 ka element deekh ne lage ga browser screen par




// // let h1 = document.querySelector("h1");
// // h1.style.color = "red";
// // h1.style.backgroundColor = "yellow";
// // h1.style.fontFamily = "Gilroy";
// // h1.style.textTransform = "Capitalize" 



// // const main = document.querySelector("main")
// // console.log(main.childNodes);
// // console.log(main.children);


// // const h1 = document.querySelector("h1");
// // console.log(h1);

// // h1.textContent = "hey main change ho gya hu by Js"   { // text content ka use kar ke text change hai h1 ka }


// // const h1 = document.querySelector("h1");
// // h1.innerText = "hey........my self manish kumar mandal"    { inner text ka use kar ke h1 ke tag ka content ko change karte hai



// // const h1 = document.querySelector('h1')
// // h1.innerHTML = "hey.....<i>my self manish kumar mandal</i>"    {inner html ka use kar ke pura ka pura HTML ko hi change kar sakte hai}



// // const h1 = document.querySelector("h1");
// // const body = document.body;

// // body.style.backgroundColor = "red";
// // h1.style.color = "blue";
// // h1.style.fontSize = "70px";
// // h1.style.fontStyle = "italic"; 



// const h1 = document.querySelector("#head1");        //{ Agar multiple h1 hoga toh Queryselector sabse first waala hi select kare ga }
// h1.textContent = "hey iam change"
// h1.style.color = "yellow" 

// // h1 is my new class
// // const isclass = h1.classList.contains("heading");

// // i have to change or replace my class

// // h1.classList.replace("heading", "newhead")

// // toggle class

// h1.classList.toggle("heading");

// console.log(isclass); 



const bulb = document.querySelector("bulb");
const btn = document.querySelector("button");

const flag = true;

btn.addEventListener("click", function () {
    if (flag) {
        bulb.style.backgroundColor = "yellow";
        btn.textContent = "off";
    }else{
        bulb.style.backgroundColor = "yellow";
        btn.textContent = "off";
    }
})