let nav
if(window.location.pathname == "/schedule.html" 
|| window.location.pathname == "/about.html")
{
nav=`
<nav class="sticky" style="background: white">
<a href="./index.html" class="swipeInDude"><img class="mainLogo" src="./images/MainLogo.png"/></a>
<a href="./index.html" class="swipeInDude">Home</a>
<a href="./schedule.html" class="swipeInDude">Schedule</a>
<a href="./about.html" class="swipeInDude">About</a>
<a href="./therapy.html" class="swipeInDude">Treatments</a>
</nav>

<input type="checkbox" id="active">
<label for="active" class="menu-btn"><i style="color: #0F1626" class="fas fa-bars"></i></label>
<div class="wrapper">
    <ul>
    <li><a href="./index.html" class="swipeInDude">Home</a><li/>
    <li><a href="./schedule.html" class="swipeInDude">Schedule</a><li/>
    <li><a href="./about.html" class="swipeInDude">About</a><li/>
    <li><a href="./therapy.html" class="swipeInDude">Treatments</a><li/>
    </ul>
</div> `
}
else{
    nav=`
<nav class="sticky">
<a href="./index.html" class="swipeInDude"><img class="mainLogo" src="./images/MainLogo.png"/></a>
<a href="./index.html" class="swipeInDude">Home</a>
<a href="./schedule.html" class="swipeInDude">Schedule</a>
<a href="./about.html" class="swipeInDude">About</a>
<a href="./therapy.html" class="swipeInDude">Treatments</a>
</nav>

<input type="checkbox" id="active">
<label for="active" class="menu-btn"><i style="color: #0F1626" class="fas fa-bars"></i></label>
<div class="wrapper">
    <ul>
    <li><a href="./index.html" class="swipeInDude">Home</a><li/>
    <li><a href="./schedule.html" class="swipeInDude">Schedule</a><li/>
    <li><a href="./about.html" class="swipeInDude">About</a><li/>
    <li><a href="./therapy.html" class="swipeInDude">Treatments</a><li/>
    </ul>
</div> `
}


let head = `
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>Home</title>
    <link rel="stylesheet" href="stylesheet.css">
    <link rel="stylesheet" type="text/css" href"./splide/dist/js/splide.min.js">
    <script src="./splide/dist/js/splide.min.js"></script>

    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Abel&family=Archivo+Black&family=Righteous&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Bowlby+One+SC&family=Poiret+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="stylesheet.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
    crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
    integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
    crossorigin=""></script>
    <script src="https://kit.fontawesome.com/dfda23e54c.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
    <script type="module" src="./GoogleStreetView.js"></script>
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAeeOYEcdaJ_Mbxw3QjA1jdwT5uhPnD25Q&callback=initialize&v=weekly"
      defer
    ></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap" rel="stylesheet">
    
    `

export {nav, head}