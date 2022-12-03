
import Album from "./albums.js";

//First album: Songs About Jane
const jane1 = new Album("", "Harder to Breathe", 2002);
const jane2 = new Album("", "This Love", 2004);
const jane3 = new Album("", "She Will Be Loved ", 2004);
const jane4 = new Album("", "Sunday Morning", 2004);
const jane5 = new Album("", "Must Get Out", 2005);

//Second album: It Won’t be Soon Before Long
const soonbeforelong1 = new Album("", "Makes Me Wonder", 2007);
const soonbeforelong2  = new Album("", "Wake Up Call", 2007);
const soonbeforelong3  = new Album("", "Won’t Go Home Without You", 2007);
const soonbeforelong4  = new Album("", "If I Never See Your Face Again (ft Rihanna)", 2008);

//Third album: Hands all over
const hands1  = new Album("", "Misery", 2010);
const hands2  = new Album("", "Give a Little More", 2010);
const hands3  = new Album("", "Never Gonna Leave This Bed", 2011);
const hands4  = new Album("", "Move Like Jagger (ft Christina Aguilera)", 2011);

//Fourth album: Overexposed
const overexposed1  = new Album("", "Payphone (ft Wiz Khalifa)", 2012);
const overexposed2  = new Album("", "One More Night", 2012);
const overexposed3  = new Album("", "Daylight", 2012);
const overexposed4  = new Album("", "Love Somebody", 2013);

//Fifth album: V
const v1  = new Album("", "Maps", 2014);
const v2  = new Album("", "Animals", 2014);
const v3  = new Album("", "Sugar", 2015);
const v4  = new Album("", "This Summer’s Gonna Hurt Like a M*****f*****", 2015);
const v5  = new Album("", "Feelings", 2015);

//Sixth album: Red Pill Blues
const red1  = new Album("", "Don’t Wanna Know (ft Kendrick Lamar)", 2016);
const red2  = new Album("", "Cold", 2017);
const red3  = new Album("", "What Lovers Do (ft SZA)", 2017);
const red4  = new Album("", "Wait", 2018);
const red5  = new Album("", "Girls Like You (ft Cardi B)", 2018);

//Seventh album: Jordi
const j1  = new Album("", "Memories",2019 );
const j2  = new Album("", "Nobody’s Love", 2020);
const j3  = new Album("", "Beautiful Mistakes (ft Megan Thee Stallion)", 2021);
const j4  = new Album("", "Lost", 2021);

console.log(jane1.albumName )

const content = `

<!--Albums Page-->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Albums released</title>
    <link href="normalize.css" rel="stylesheet" type="text/css">
    <link href="albums.css" rel="stylesheet" type="text/css" />
    <script type="module" src="albums.js"></script>
    <script type="module" src="albumslist.js"></script>
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
          <span style="color:#66CC66">l</span>
          <span style="color:#FF9966">b</span>
          <span style="color:#4033cf">u</span>
          <span style="color:#8dd9fa">m</span>
          <span style="color:#7715b8">s</span>
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
    </div>
      </div>
  <!-- <div class="lastest">
      <iframe width="560" height="315" src="https://www.youtube.com/watch?v=cBVGlBWQzuc" title="YouTube video player"
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
      </div> -->
  </body>
</html>


<article class="description" >
</figure>
<div class="alignment">
  <h1 class="albumsheadings"> Albums:</h1>
    <img src="./Photos/songsaboutjane.png" class="albums-img"  />

    <div class="albumsproperties">
      <p> First album: Songs About Jane<span> </p>
      <a href="https://en.wikipedia.org/wiki/Songs_About_Jane"> 1. ${jane1.albumName.songTitle} released in ${jane1.albumName.yearReleased}</a>
         

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
