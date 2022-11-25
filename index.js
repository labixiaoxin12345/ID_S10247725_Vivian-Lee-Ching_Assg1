// Create a class for the Member object type.

 
 import Member from "./Members.js";

 const adam = new Member("Adam Levine","43");

 const james = new Member("James Burgon Valentine", "44");

 const pj = new Member("PJ Morton","41");

 const jesse = new Member("Jesse Carmichael", "43");

 const matt = new Member("Matt Flynn", "52");

 const sam = new Member("Sam Farrar", "44");
 

 console.log(adam.age, james.age, pj.age, jesse.age, matt.age, sam.age);

 //create a new element using javascript
let newDiv1 = document.createElement("div");
//add class to element through javascript
newDiv1.classList.add("mystyle")
// and give it some content
newDiv1.innerHTML = "Adam: <br>" +this.name;
//add the div to the body of the html
document.body.appendChild(newDiv1);

//create a new element using javascript
let newDiv2 = document.createElement("div");
//add class to element through javascript
newDiv2.classList.add("mystyle")
// and give it some content
newDiv2.innerHTML = "Minabae's Singer Profile: <br>" +minabae.singerProfile()+minabae.showHitpointsStatus();
//add the div to the body of the html
document.body.appendChild(newDiv2);