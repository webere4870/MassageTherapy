

$(document).ready(()=>
{

    if(window.location.pathname == "/schedule.html" || window.location.pathname == "/about.html")
    {
        
        $('nav').attr("class", "sticky")
        console.log(document.querySelector('nav'))
    }
    else
    {
    
                
                $('nav').attr("class", "sticky")

    }
    

    $('.myAccordionBtn').click((evt)=>
    {
        $(evt.currentTarget).next(".accordionContent").slideToggle(300)
    }) 
    $('#form').submit((evt)=>
    {
        let email = $("#name").val()
        let name = $("#email").val()
        let message = $("#message").val()

        let nameRegex = /^[A-z ]+$/;
        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        console.log(emailRegex.test(email))

        if(nameRegex.test(name) == false)
        {
            evt.preventDefault();
            $("#nameSpan").text("***Invalid name***")
        }

        if(emailRegex.test(email) == false)
        {
            evt.preventDefault();
            $("#emailSpan").text("***Invalid email***")
        }
        
    })
    $('#lefty').click((evt)=>
    {
        let parent = document.querySelector("#overSlide")
        let copy = parent.lastElementChild
        parent.lastElementChild.remove()
        parent.insertBefore(copy, parent.firstElementChild)
    })
    $('#righty').click((evt)=>
    {
        let parent = document.querySelector("#overSlide")
        let copy = parent.firstElementChild
        parent.firstElementChild.remove()
        parent.appendChild(copy)
    })
    let data = $('.logoFont h2 span:nth-of-type(1)')
    let data2 = $('.logoFont h2 span:nth-of-type(2)')
    let data3 = $('.logoFont h2 span:nth-of-type(3)')
    data.animate({marginLeft: '0'},500)
    data2.delay(200).animate({marginLeft: '0'},500)
    data3.delay(400).animate({marginLeft: '0'},500)
    $('.cardBtn').click((evt)=>
    {
        let parentCard = $(evt.currentTarget)
        parentCard.parent().trigger('hover')
    })

    let body = document.body;
        let html = document.querySelector('#fakeBoi');
        let loader = document.getElementsByClassName('animationPage');
        body.style.overflowY = "inherit";
        html.style.overflowY = "inherit";
        for(let counter = 0; counter < loader.length; counter++)
        {
            loader[counter].style.display = 'none';
        }
    $('#sa1').click(()=>
    {
        slideShow2(1, '#innerContainer2', '.slider')
    })
    $('#sa2').click(()=>
    {
        slideShow2(12, '#innerContainer2', '.slider')
    })
    // window.addEventListener("DOMContentLoaded", function(e) {

    //     var stage = document.getElementById("stage");
    //     var fadeComplete = function(e) { stage.appendChild(arr[0]); };
    //     var arr = stage.getElementsByTagName("div");
    //     for(var i=0; i < arr.length; i++) {
    //       arr[i].addEventListener("animationend", fadeComplete, false);
    //     }

    // }, false);

    document.addEventListener('touchstart', handleTouchStart, false);        
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;                                                        
    var yDown = null;

    function getTouches(evt) {
    return evt.touches ||             // browser API
            evt.originalEvent.touches; // jQuery
    }                                                     

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };                                                

    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;                                    
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                /* left swipe */ 
                var path = window.location.pathname;
                var page = path.split("/").pop();
                if(page === "schedule.html")
                {
                    slideShow(12, '#innerContainer', '.slide')
                }
                if(page === "therapy.html")
                {
                    slideShow2(12, '#innerContainer2', '.slider')
                }
                
            } else {
                var path = window.location.pathname;
                var page = path.split("/").pop();
                if(page === "schedule.html")
                {
                    slideShow(1, '#innerContainer', '.slide')
                }
                if(page === "therapy.html")
                {
                    slideShow2(1, '#innerContainer2', '.slider')
                }
            }                       
        } else {
            if ( yDiff > 0 ) {
                /* up swipe */ 
            } else { 
                /* down swipe */
            }                                                                 
        }
        /* reset values */
        xDown = null;
        yDown = null;                                             
    }

    



    function slideShow(index, parent, slidesName)
    {
        let slides = document.querySelectorAll(slidesName);
        let parentNode = document.querySelector(parent);
        let tempNode;


        if(index === 1)
        {
            parentNode.insertBefore(slides[slides.length - 1], slides[0]);
        }
        else
        {
            tempNode = slides[0];
            slides[0].remove();
            parentNode.appendChild(tempNode);
        }
    }

    function slideShow2(index, parent, slidesName)
    {
        console.log("h1")
        let slides = document.querySelectorAll(slidesName);
        let parentNode = document.querySelector(parent);
        let tempNode;


        if(index === 1)
        {
            parentNode.insertBefore(slides[slides.length - 1], slides[0]);
        }
        else
        {
            tempNode = slides[0];
            slides[0].remove();
            parentNode.appendChild(tempNode);
        }
    }


    function uncoverBlock()
    {
        let block = document.getElementsByClassName('coverBlock');
        let twisty = document.getElementsByClassName('twisty');
        for(let counter = 0; counter < block.length; counter++)
        {
            block[counter].style.animationName = "removeBlock";
        }
    }



    $('.mobileNavigation').click(()=>
    {
        if($('.subNavigation2').attr("id") == "doesNothing")
        {
            $('.bigNavigation').toggle(700)
        }
        /*
        let arr = document.getElementsByClassName('bigNavigation');
        let navClose = document.getElementsByClassName('mobileNavigation');
        let navClose2 = document.getElementsByClassName('closeMobile');
        let animationLinks = document.getElementsByClassName('swipeInDude');

        for(let counter =0; counter < animationLinks.length; counter++)
        {
            animationLinks[counter].style.animationName = "flyingLink";
        }
            for(let counter = 0; counter < arr.length; counter++)
            {
                
                arr[counter].style.zIndex = 100;
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
        */
    })

    function quitAnimation(query, animationNames, zInd)
    {
        let arr = document.getElementsByClassName('bigNavigation');
        let navClose = document.getElementsByClassName('mobileNavigation');
        let navClose2 = document.getElementsByClassName('closeMobile');
        let animationLinks = document.getElementsByClassName('swipeInDude');
        for(let counter =0; counter < animationLinks.length; counter++)
        {
            animationLinks[counter].style.transform=" transform: translate(200px, 400px) scale(5%)";
            animationLinks[counter].style.animationName="none";
        }
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

    let slides = document.getElementsByClassName('tSlide');
    let circles = document.getElementsByClassName('innerBubble');

    function intermediate(pOrM)
    {
        let index = 0;
        for(let counter = 0; counter < slides.length; counter++)
        {
            if(slides[counter].style.display === "flex")
            {
                console.log(counter);
                index = counter;
            }
        }
        console.log(index);
        if(pOrM === "plus")
        {
            
            if(index === slides.length -1)
            {
                console.log("her");
                index = 0;
            }
            else{
                index += 1;
            }
        }
        else
        {
            if(index === 0)
            {
                index = slides.length -1;
            }
            else
            {
                index--;
            }
        }

        floatIn(index);
    }

    function floatIn(slideNumber)
    {
        for(let counter = 0; counter < slides.length; counter++)
        {
            slides[counter].style.display = "none";
            circles[counter].style.display = "none";
            slides[counter].style.opacity = "0";
            slides[counter].style.transform = "translateY(100px)";
        }
        slides[slideNumber].style.display = "flex";
        circles[slideNumber].style.display = "flex";
    }

    function growBall(index)
    {
        let balls = document.getElementsByClassName('innerCircle');
        let div = document.getElementsByClassName('textDiv');
        for(let counter = 0 ; counter < balls.length; counter++)
        {
            balls[counter].style.display = "none";
            div[counter].style.display = "none";
            div[counter].style.transform = "translateY(100px)";
            div[counter].style.opacity = "0";
        }
        balls[index].style.display = "inherit";
        div[index].style.animationName = "slideIn";
        div[index].style.display = "flex";
        
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
            let map = document.querySelector('#mapid2');
        map.style.zIndex = '6';
        }, 1000)
        
    }

    function coverMap()
    {
        let item1 = document.getElementById('mapOverlay');
        let item2 = document.getElementById('drawChevron');
        let item3 = document.getElementById('drawChevron2');
        let map = document.querySelector('#mapid2');
        map.style.zIndex = '3';
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
    let latitude = 41.036300;
    let longitude = -83.650450;
    let mymap = L.map('mapid', {tap: false}).setView([latitude, longitude], 13);
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">Open Street Map</a> contributors';
    const tileURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const tiles = L.tileLayer(tileURL, {attribution: attribution});
    tiles.addTo(mymap);
    var marker = L.marker([latitude, longitude]).addTo(mymap);
    marker.bindPopup("113 East Crawford Street, Findlay, OH 45840");
    marker.on("click", function (event) {
        event.target.openPopup();
     });
    mymap.invalidateSize();


   /* let mymap2 = L.map('mapid2').setView([latitude, longitude], 13);
    const attribution2 = '&copy; <a href="https://www.openstreetmap.org/copyright">Open Street Map</a> contributors';
    const tileURL2 = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const tiles2 = L.tileLayer(tileURL2, {attribution2});
    tiles2.addTo(mymap2);
    var marker2 = L.marker([latitude, longitude]).addTo(mymap2);
    marker2.bindPopup("Central Church of Christ<br>307 E Hardin St, Findlay, OH 45840<br>");
    mymap2.invalidateSize();

    let mymap3 = L.map('mapid3').setView([latitude, longitude], 13);
    const attribution3 = '&copy; <a href="https://www.openstreetmap.org/copyright">Open Street Map</a> contributors';
    const tileURL3 = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const tiles3 = L.tileLayer(tileURL3, {attribution3});
    tiles2.addTo(mymap3);
    var marker3 = L.marker([latitude, longitude]).addTo(mymap3);
    marker3.bindPopup("Central Church of Christ<br>307 E Hardin St, Findlay, OH 45840<br>");
    mymap3.invalidateSize();
*/


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
})