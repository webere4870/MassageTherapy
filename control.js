window.addEventListener("DOMContentLoaded", function(e) {

    var stage = document.getElementById("stage");
    var fadeComplete = function(e) { stage.appendChild(arr[0]); };
    var arr = stage.getElementsByTagName("div");
    for(var i=0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
    }

}, false);

function uncoverBlock()
{
    let block = document.getElementsByClassName('coverBlock');
    let twisty = document.getElementsByClassName('twisty');
    for(let counter = 0; counter < block.length; counter++)
    {
        block[counter].style.animationName = "removeBlock";
    }
}

function startAnimation(query, animationNames, zInd)
{
    let arr = document.getElementsByClassName('bigNavigation');
    let navClose = document.getElementsByClassName('mobileNavigation');
    let navClose2 = document.getElementsByClassName('closeMobile');
        for(let counter = 0; counter < arr.length; counter++)
        {
            arr[counter].style.zIndex = zInd;
            setTimeout(()=>{
                navClose[counter].style.display = 'none';
                navClose2[counter].style.display = 'flex';
            }, 0)
            
        }
    let grabItem = document.querySelectorAll(query);

    for(let counter =0; counter < grabItem.length; counter++)
    {
        grabItem[counter].style.animationName = animationNames;
    }
}

function quitAnimation(query, animationNames, zInd)
{
    let arr = document.getElementsByClassName('bigNavigation');
    let navClose = document.getElementsByClassName('mobileNavigation');
    let navClose2 = document.getElementsByClassName('closeMobile');
        for(let counter = 0; counter < arr.length; counter++)
        {
            arr[counter].style.zIndex = zInd;
            setTimeout(()=>{
                navClose[counter].style.display = 'flex';
                navClose2[counter].style.display = 'none';
            }, 0)
            
        }
    let grabItem = document.querySelectorAll(query);

    for(let counter =0; counter < grabItem.length; counter++)
    {
        grabItem[counter].style.animationName = 'none';
        grabItem[counter].style.animationName = animationNames;
    }
}

let arrFloater = document.getElementsByClassName('floaterBox');
let bubble = document.querySelectorAll('.bubble p');
let bubbleI = document.querySelectorAll('.bubble i');
for(let counter = 0; counter < arrFloater.length; counter++)
{
    arrFloater[counter].addEventListener("click", ()=>
    {
        if(counter !== arrFloater.length -1 )
        {
            arrFloater[counter + 1].style.zIndex = 0;
        }
        for(let i = 0; i < arrFloater.length; i++)
        {
            arrFloater[i].style.animationName = "unfloater";
            bubble[i].style.color = "var(--mainColor)";
            bubbleI[i].style.color = "rgb(156, 156, 156)";
        }
        bubble[counter].style.color = 'white';
        bubbleI[counter].style.color = "white";
        arrFloater[counter].style.animationName = "floater";
        
    })
}

function growBall(index)
{
    let balls = document.getElementsByClassName('buttonStep');
    let div = document.getElementsByClassName('textDiv');
    for(let counter = 0 ; counter < balls.length; counter++)
    {
        balls[counter].style.animationName = "shrinkBall";
        div[counter].style.display = "none";
        div[counter].style.transform = "translateY(100px)";
        div[counter].style.opacity = "0";
    }
    div[index].style.animationName = "slideIn";
    div[index].style.display = "flex";
    balls[index].style.animationFillMode = "reverse";
    balls[index].style.animationName = "growBall";
}

function uncoverMap()
{
    let item1 = document.getElementById('mapOverlay');
    let item2 = document.getElementById('drawChevron');
    let item3 = document.getElementById('drawChevron2');
    item1.style.animationName = "uncoverMap";
    item2.style.animationName = "uncoverMap";
    item3.style.animationName = "uncoverMap";
    let btn = document.getElementsByClassName('xBtn');
    setTimeout(()=>
    {
        for(let counter = 0; counter < btn.length; counter++)
        {
            btn[counter].style.display = "inherit";
        }
    }, 1000)
}

function coverMap()
{
    let item1 = document.getElementById('mapOverlay');
    let item2 = document.getElementById('drawChevron');
    let item3 = document.getElementById('drawChevron2');
    item1.style.animationName = "coverMap";
    item2.style.animationName = "coverMap";
    item3.style.animationName = "coverMap";
    let btn = document.getElementsByClassName('xBtn');
        for(let counter = 0; counter < btn.length; counter++)
        {
            btn[counter].style.display = "none";
        }

}

let cardFlip = document.querySelectorAll('.card');

for(let counter =0; counter < cardFlip.length; counter++)
{
    cardFlip[counter].addEventListener("click",()=>
    {
        cardFlip[counter].style.animationName = "cardFade";
        for(let icounter = 0; icounter < cardFlip.length; icounter++)
        {
            if(icounter !== counter)
            {
                cardFlip[icounter].style.animationName = "fadeDown";     
            }
        }
    });
}


// Leaflet.js map resize tiles



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


let mymap2 = L.map('mapid2').setView([latitude, longitude], 13);
const attribution2 = '&copy; <a href="https://www.openstreetmap.org/copyright">Open Street Map</a> contributors';
const tileURL2 = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles2 = L.tileLayer(tileURL2, {attribution2});
tiles2.addTo(mymap2);
var marker2 = L.marker([latitude, longitude]).addTo(mymap2);
marker2.bindPopup("Central Church of Christ<br>307 E Hardin St, Findlay, OH 45840<br>");
mymap2.invalidateSize();




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
