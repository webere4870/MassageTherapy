window.addEventListener("DOMContentLoaded", function(e) {

    var stage = document.getElementById("stage");
    var fadeComplete = function(e) { stage.appendChild(arr[0]); };
    var arr = stage.getElementsByTagName("div");
    for(var i=0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
    }

}, false);


let cardFlip = document.querySelectorAll('.card');

for(let counter =0; counter < cardFlip.length; counter++)
{
    cardFlip[counter].addEventListener("click",()=>
    {
        cardFlip[counter].style.animationName = "cardFade";
    });
}


// Leaflet.js map resize tiles
setInterval(()=>
{
    $(window).trigger('resize');
},100);


// Leaflet.js map initialization and display
let latitude = 41.0355953;
let longitude = -83.646441;
let mymap = L.map('mapid').setView([latitude, longitude], 13);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">Open Street Map</a> contributors';
const tileURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileURL, {attribution});
tiles.addTo(mymap);
var marker = L.marker([latitude, longitude]).addTo(mymap);
marker.bindPopup("Central Church of Christ<br>307 E Hardin St, Findlay, OH 45840<br>");
mymap.invalidateSize();







function openItem(item)
{
    let openThis = document.body.getElementsByClassName(item);
    console.log(openThis);
    for(let counter = 0; counter < openThis.length; counter++)
    {
        openThis[counter].style.display = 'flex';
    }
}

function closeItem(item)
{
    let openThis = document.getElementsByClassName(item);
    for(let counter = 0; counter < openThis.length; counter++)
    {
        openThis[counter].style.display = 'none';
    }
}
