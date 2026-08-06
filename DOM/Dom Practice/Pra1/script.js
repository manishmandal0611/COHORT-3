// Selection of an element

// only selects first tag
// const h1 = document.querySelector("h1");

// for selecting all tags
// const h1 = document.querySelectorAll("h1");

// const h1 = document.getElementsByTagName("h1");

// const h1 = document.getElementById('heading')

// const h1 = document.getElementsByClassName("hey");

// hamesha...

const h1 = document.querySelector(".Hey");

const box = document.querySelector("#box");

// changing of Html
h1.textContent = "polo";

// text change
// textContent
// innerText
// innerHtml
//innerHTML -> pura structure ud jaayega 

box.style.padding = "40px"
box.style.display = "flex"
box.style.alignItems = "center"
box.style.gap = "16px"

console.log(h1);