
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
const v4  = new Album("", "This Summer’s Gonna Hurt Like a Motherf****r", 2015);
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
      <button onclick="document.location='/ticket.html'" class="thisbutton"> Tickets </button>
      <button onclick="document.location='/newsletter.html'" class="thisbutton"> Newsletter </button>
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
    <br>
    <div class="albumsproperties">
      <p class="albumName">First album: Songs About Jane<span></p>
      <p></p>
      <a href="https://www.youtube.com/watch?v=rV8NHsmVMPE"> ${jane1.albumName.songTitle} released in ${jane1.albumName.yearReleased}</a>
      <p></p>
      <a href="https://www.youtube.com/watch?v=XPpTgCho5ZA"> ${jane2.albumName.songTitle} released in ${jane2.albumName.yearReleased}</a>
      <p></p>
      <a href="https://www.youtube.com/watch?v=nIjVuRTm-dc"> ${jane3.albumName.songTitle} released in ${jane3.albumName.yearReleased}</a>
      <p></p>
      <a href="https://www.youtube.com/watch?v=S2Cti12XBw4"> ${jane4.albumName.songTitle} released in ${jane4.albumName.yearReleased}</a>
      <p></p>
      <a href="https://www.youtube.com/watch?v=kSsFN8g9FBM"> ${jane5.albumName.songTitle} released in ${jane5.albumName.yearReleased}</a>

      </div>
      <img src="./Photos/itwon'tbesoonbeforelong.png" class="albums-img"  />
      <br>
      <div class="albumsproperties">
        <p class="albumName">Second album: It Won't Be Soon Before Long<span></p>
        <p></p>
        <a href="https://www.youtube.com/watch?v=sAebYQgy4n4"> ${soonbeforelong1.albumName.songTitle} released in ${soonbeforelong1.albumName.yearReleased}</a>
        <p></p>
        <a href="https://www.youtube.com/watch?v=dkQ0OJ5Byls"> ${soonbeforelong2.albumName.songTitle} released in ${soonbeforelong2.albumName.yearReleased}</a>
        <p></p>
        <a href="https://www.youtube.com/watch?v=VlMEGBsw6j8"> ${soonbeforelong3.albumName.songTitle} released in ${soonbeforelong3.albumName.yearReleased}</a>
        <p></p>
        <a href="https://www.youtube.com/watch?v=MbtajuiuLMU"> ${soonbeforelong4.albumName.songTitle} released in ${soonbeforelong4.albumName.yearReleased}</a>
  
        </div>

        <img src="./Photos/handsallover.png" class="albums-img"  />
        <br>
        <div class="albumsproperties">
          <p class="albumName">Third album: Hands All Over<span></p>
          <p></p>
          <a href="https://www.youtube.com/watch?v=6g6g2mvItp4"> ${hands1.albumName.songTitle} released in ${hands1.albumName.yearReleased}</a>
          <p></p>
          <a href="https://www.youtube.com/watch?v=BP1PsqBmbvM"> ${hands2.albumName.songTitle} released in ${hands2.albumName.yearReleased}</a>
          <p></p>
          <a href="https://www.youtube.com/watch?v=ADmCFmYLns4"> ${hands3.albumName.songTitle} released in ${hands3.albumName.yearReleased}</a>
          <p></p>
          <a href="https://www.youtube.com/watch?v=iEPTlhBmwRg"> ${hands4.albumName.songTitle} released in ${hands4.albumName.yearReleased}</a>
    
          </div>

          <img src="./Photos/overexposed.png" class="albums-img"  />
          <br>
          <div class="albumsproperties">
            <p class="albumName">Fourth album: Overexposed<span></p>
            <p></p>
            <a href="https://www.youtube.com/watch?v=KRaWnd3LJfs"> ${overexposed1.albumName.songTitle} released in ${overexposed1.albumName.yearReleased}</a>
            <p></p>
            <a href="https://www.youtube.com/watch?v=fwK7ggA3-bU"> ${overexposed2.albumName.songTitle} released in ${overexposed2.albumName.yearReleased}</a>
            <p></p>
            <a href="https://www.youtube.com/watch?v=N17FXwRWEZs"> ${overexposed3.albumName.songTitle} released in ${overexposed3.albumName.yearReleased}</a>
            <p></p>
            <a href="https://www.youtube.com/watch?v=MU8B4XDI3Uw"> ${overexposed4.albumName.songTitle} released in ${overexposed4.albumName.yearReleased}</a>
      
            </div>

            <img src="./Photos/v.png" class="albums-img"  />
            <br>
            <div class="albumsproperties">
              <p class="albumName">Fifth album: V<span></p>
              <p></p>
              <a href="https://www.youtube.com/watch?v=NmugSMBh_iI"> ${v1.albumName.songTitle} released in ${v1.albumName.yearReleased}</a>
              <p></p>
              <a href="https://www.youtube.com/watch?v=qpgTC9MDx1o"> ${v2.albumName.songTitle} released in ${v2.albumName.yearReleased}</a>
              <p></p>
              <a href="https://www.youtube.com/watch?v=09R8_2nJtjg"> ${v3.albumName.songTitle} released in ${v3.albumName.yearReleased}</a>
              <p></p>
              <a href="https://www.youtube.com/watch?v=Wa64gOwuIyE"> ${v4.albumName.songTitle} released in ${v4.albumName.yearReleased}</a>
              <p></p>
              <a href="https://www.youtube.com/watch?v=7NBtQ8x6sgo"> ${v5.albumName.songTitle} released in ${v5.albumName.yearReleased}</a>
        
              </div>

              <img src="./Photos/redpillblues.png" class="albums-img"  />
              <br>
              <div class="albumsproperties">
                <p class="albumName">Sixth album: Red Pill Blues<span></p>
                <p></p>
                <a href="https://www.youtube.com/watch?v=ANS9sSJA9Yc"> ${red1.albumName.songTitle} released in ${red1.albumName.yearReleased}</a>
                <p></p>
                <a href="https://www.youtube.com/watch?v=XatXy6ZhKZw"> ${red2.albumName.songTitle} released in ${red2.albumName.yearReleased}</a>
                <p></p>
                <a href="https://www.youtube.com/watch?v=5Wiio4KoGe8"> ${red3.albumName.songTitle} released in ${red3.albumName.yearReleased}</a>
                <p></p>
                <a href="https://www.youtube.com/watch?v=4uTNVumfm84"> ${red4.albumName.songTitle} released in ${red4.albumName.yearReleased}</a>
                <p></p>
                <a href="https://www.youtube.com/watch?v=aJOTlE1K90k"> ${red5.albumName.songTitle} released in ${red5.albumName.yearReleased}</a>
          
                </div>
            
                <img src="./Photos/jordi.png" class="albums-img"  />
                <br>
                <div class="albumsproperties">
                  <p class="albumName"> Seventh album: Jordi<span></p>
                  <p></p>
                  <a href="https://www.youtube.com/watch?v=SlPhMPnQ58k"> ${j1.albumName.songTitle} released in ${j1.albumName.yearReleased}</a>
                  <p></p>
                  <a href="https://www.youtube.com/watch?v=7ghhRHRP6t4"> ${j2.albumName.songTitle} released in ${j2.albumName.yearReleased}</a>
                  <p></p>
                  <a href="https://www.youtube.com/watch?v=BSzSn-PRdtI"> ${j3.albumName.songTitle} released in ${j3.albumName.yearReleased}</a>
                  <p></p>
                  <a href="https://www.youtube.com/watch?v=U05fwua9-D4"> ${j4.albumName.songTitle} released in ${j4.albumName.yearReleased}</a>
            
                  </div>
                  <a href="https://en.wikipedia.org/wiki/Maroon_5_discography" style="margin-left:22px;"> For more Maroon 5's albums, click here</a>

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
