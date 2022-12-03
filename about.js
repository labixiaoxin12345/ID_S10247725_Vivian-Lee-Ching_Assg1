 
 import Member from "./Members.js";

 const adam = new Member("Adam Noah Levine", "Adam", 43, "Vocals, guitar", "Los Angeles, California");

 const james = new Member("James Burgon Valentine", "James", 44, "Guitar", "Lincoln, Nebraska");

 const pj = new Member("Paul Morton Jr", "PJ", 41, "Vocals, keyboards", "New Orleans, Lousiana");

 const jesse = new Member("Jesse Royal Carmichael", "Jesse", 43, "Keyboards, guitar", "Boulder, Colorado");

 const matt = new Member("Matthew Flynn", "Matt", 52, "Drums, percussion", "Woodstock, New York");

 const sam = new Member("Sam John Farrar", "Sam", 44, "Bass, keyboards, guitar, percussion, sampler", "Los Angeles, California");
 

 //console.log(adam.age, james.age, pj.age, jesse.age, matt.age, sam.age);
 //console.log("Name: ", adam.name, "Age:", adam.age);
 console.log(adam, james, pj, jesse, matt, sam);

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
  <div style="  background-color: #FDE2E7;">
  <h3 class="membersheadings">History</h3>
  <div class="history">
  <p>Maroon 5, known as Kara's Flowers (1994 - 2001), formed in 1995 </p>
  <p>First gig: Whisky a Go Go, a nightclub in West Hollywood, California</p>
  <p>First album released: August 1997 as Kara's Flowers, </p>

  </div>      
    </div>
      </div>
  </body>
</html>

<article class="description" >
</figure>
<div class="alignment">
  <h1 class="membersheadings"> Members:</h1>
    <img src="./Photos/Adam_Levine.jpeg" class="members-img1"  />

    <div class="membersproperties">
      <p> Name:<span> ${adam.name}</p>
      <p> Stagename:<span> ${adam.stagename}</p>
      <p> Age:<span> ${adam.age}</p>
      <p> Instrument:<span> ${adam.instrument}</p>
      <p> Born:<span> ${adam.bornIn}</p>
      </div>
      
      <img src="./Photos/James_Valentine.jpeg" class="members-img1"  />
      <div class="membersproperties" >
      <p> Name:<span> ${james.name}</p>
      <p> Stagename:<span> ${james.stagename}</p>
      <p> Age:<span> ${james.age}</p>
      <p> Instrument:<span> ${james.instrument}</p>
      <p> Born:<span> ${james.bornIn}</p>
      </div>

      <img src="./Photos/PJ_Morton.jpeg" class="members-img1"  />
      <div class="membersproperties">
      <p> Name:<span> ${pj.name}</p>
      <p> Stagename:<span> ${pj.stagename}</p>
      <p> Age:<span> ${pj.age}</p>
      <p> Instrument:<span> ${pj.instrument}</p>
      <p> Born:<span> ${pj.bornIn}</p>
      </div>

      <img src="./Photos/Jesse_Carmichael.jpeg" class="members-img2"  />
      <div class="membersproperties">
      <p> Name:<span> ${jesse.name}</p>
      <p> Stagename:<span> ${jesse.stagename}</p>
      <p> Age:<span> ${jesse.age}</p>
      <p> Instrument:<span> ${jesse.instrument}</p>
      <p> Born:<span> ${jesse.bornIn}</p>
      </div>
      
      <img src="./Photos/Sam_Farrar.jpeg" class="members-img2"  />
      <div class="membersproperties">
      <p> Name:<span> ${sam.name}</p>
      <p> Stagename:<span> ${sam.stagename}</p>
      <p> Age:<span> ${sam.age}</p>
      <p> Instrument:<span> ${sam.instrument}</p>
      <p> Born:<span> ${sam.bornIn}</p>
      <a href="https://www.instagram.com/samfarrar/?hl=en"><img src="/Photos/InstagramLogo.png" alt="Sam Farrar" class="instagram"></a>
      </div>

      <img src="./Photos/Matt_Flynn.jpg" class="members-img1"  />
      <div class="membersproperties">
      <p> Name:<span> ${matt.name}</p>
      <p> Stagename:<span> ${matt.stagename}</p>
      <p> Age:<span> ${matt.age}</p>
      <p> Instrument:<span> ${matt.instrument}</p>
      <p> Born:<span> ${matt.bornIn}</p>
      </div>
      </div>
      </div>
      

      <p class="sm">Follow Maroon 5's social media now!</p>
  <div class="socialmedia">
  <a href= "https://www.instagram.com/maroon5/?hl=en"><img src="/Photos/InstagramLogo.png" alt="Maroon5's Instagram" class="socialmedia"></a>  
  <a href= "https://open.spotify.com/artist/04gDigrS5kc9YWfZHwBETP"><img src="/Photos/SpotifyLogo.png" alt="Maroon5's Spotify" class="socialmedia"></a>  
  <a href= "https://twitter.com/maroon5?s=20&t=AzPG7aSlZu4GY9y1mgtCbQ"><img src="/Photos/TwitterLogo.png" alt="Maroon5's Twitter" class="socialmedia"></a>  
  <a href= "https://www.youtube.com/channel/UCBVjMGOIkavEAhyqpxJ73Dw"><img src="/Photos/Youtube.jpg" alt="Maroon5's Youtube channel" class="socialmedia"></a>  


  </div>
  


`;
document.body.innerHTML = content;
