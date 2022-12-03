// Create a class for the Member object type.

 
 import Member from "./Members.js";

 const adam = new Member("Adam Levine", "43");

 const james = new Member("James Burgon Valentine", "44");

 const pj = new Member("PJ Morton", "41");

 const jesse = new Member("Jesse Carmichael", "43");

 const matt = new Member("Matt Flynn", "52");

 const sam = new Member("Sam Farrar", "44");
 

 //console.log(adam.age, james.age, pj.age, jesse.age, matt.age, sam.age);
 //console.log("Name: ", adam.name, "Age:", adam.age);
// console.log(adam, james, pj, jesse, matt, sam);
let a = adam;
let ja = james;
let p = pj;
let je = jesse;
let m = matt;
let s = sam;
 
//create a new element using javascript
let newDiv1 = document.createElement("div");
//add class to element through javascript
newDiv1.classList.add("description")
// and give it some content
let newContent = document.createTextNode("Adam:", a);

// add the text node to the newly created div
newDiv1.appendChild(newContent);
//add the div to the body of the html
document.body.appendChild(newDiv1);

const content = `
<!--About Page-->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About Page</title>
    <link href="normalize.css" rel="stylesheet" type="text/css">
    <link href="about.css" rel="stylesheet" type="text/css" />
    <script type="module" src="Members.js"></script>
    <script type="module" src="index.js"></script>
  </head>
  <body>
    <div>
      
      <div id="heading">
        <h1>
        <span style="color:#FF0000">M</span>
        <span style="color:#f0f014">A</span>
        <span style="color:#FF0000">R</span>
        <span style="color:#f0f014">O</span>
        <span style="color:#FF0000">O</span>
        <span style="color:#f0f014">N</span>
        &nbsp;
        <span style="color:#FF0000">5</span>
        </h1>
        <div class="subheading">
          <span style="color:#FF0000">A</span>
          <span style="color:#66CC66">b</span>
          <span style="color:#FF9966">o</span>
          <span style="color:#4033cf">u</span>
          <span style="color:#8dd9fa">t</span>
          </div>
        </div>
    <p id="belowheading" ></p>
    <div class="button-grp">
      <button onclick="document.location='/index.html'" class="thisbutton"> Home </button>
      <button onclick="document.location='/about.html'" class="thisbutton"> About </button>
      <button onclick="document.location='/albums.html'" class="thisbutton"> Albums </button>
      <button onclick="document.location='/merchandise.html'" class="thisbutton"> Merchandise </button>
      <button onclick="document.location='/ticket.html'" class="thisbutton"> Tickets </button>
    </div>
  <br>      
    <h1 class="headings"> About Maroon 5</h1>
    <div class="description">
  
    </div>
    </div>
      </div>
  </body>
</html>

<article class="description" id="kitchen">
</figure>
  <h1 class="membersheadings"> Members:</h1>
    <img src="./Photos/Adam_Levine.jpeg" class="members-img"  />

    <ul class="membersproperties">
      <li> Name:<span> ${adam.name}</li>
      <li> Age:<span> ${adam.age}</li>
      </ul>

      <img src="./Photos/James_Valentine.jpeg" class="members-img"  />
      <ul class="membersproperties" >
      <li> Name:<span> ${james.name}</li>
      <li> Age:<span>${james.age}</li>
      </ul>

      <img src="./Photos/PJ_Morton.jpeg" class="members-img"  />
      <ul class="membersproperties">
      <li> Name:<span> ${pj.name}</li>
      <li> Age:<span>${pj.age}</li>
      </ul>

      <img src="./Photos/Jesse_Carmichael.jpeg" class="members-img"  />
      <ul class="membersproperties">
      <li> Name:<span> ${jesse.name}</li>
      <li> Age:<span>${jesse.age}</li>
      </ul>

      <img src="./Photos/Sam_Farrar.jpeg" class="members-img"  />
      <ul class="membersproperties">
      <li> Name:<span> ${sam.name}</li>
      <li> Age:<span> ${sam.age}</li>
      </ul>

      <img src="./Photos/Matt_Flynn.jpg" class="members-img"  />
      <ul class="membersproperties">
      <li> Name:<span> ${matt.name}</li>
      <li> Age:<span>${matt.age}</li>
      </ul>


`;
document.body.innerHTML = content;
 console.log("The cabinet object:", adam.name);
 console.log("The brand name value:", cupboard.color);