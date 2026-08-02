console.log("Hello, World!");

const h3 = document.querySelector("#id1");  /* querySelector() ka use karke hum kisi bhi element ko select kar sakte hai. main ne h3 ko select kiya hai jiska id "id1" hai. 
                                            id1 ko select kar ke id main kon si value hai yeh bhi dikhayega */

let res =h3.getAttribute("class");  /* getAttribute() method se hum kisi bhi element ke kisi bhi attribute ka value nikal sakte hai. main ne class attribute ka value nikala hai 
                                       or agar class ki jagh par id likh dte toh uska value dikhayega. getAttribute matlab ki maangna*/


h3.setAttribute("width","200px");  /* setAttribute() method se hum kisi bhi element ke kisi bhi attribute ka value set kar sakte hai. main ne width attribute ka value set kiya hai */
console.log(h3.getAttribute("width"));  /* getAttribute() method se humne width attribute ka value nikal ke console main dikhaya hai */

h3.removeAttribute("class");  /* removeAttribute() method se hum kisi bhi element ke kisi bhi attribute ko remove kar sakte hai. main ne class attribute ko remove kiya hai */

let res = h3.getAttribute("class");  /* getAttribute() method se hum kisi bhi element ke kisi bhi attribute ka value nikal sakte hai. main ne class attribute ka value nikala hai
                                       or agar class ki jagh par id likh dte toh uska value dikhayega. getAttribute matlab ki maangna*/
console.log(res); 







//input.value (property, current state) vs input.getAttribute("value") (attribute, initial state)



















// creating inserting and removing elements from dom
