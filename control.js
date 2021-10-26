let slideShow = document.querySelectorAll('.homeSS > *');
let counter = 0;

window.addEventListener("DOMContentLoaded", function(e) {

    var stage = document.getElementById("stage");
    var fadeComplete = function(e) { stage.appendChild(arr[0]); };
    var arr = stage.getElementsByTagName("div");
    for(var i=0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
    }

  }, false);

/*
setInterval(()=>
{
    console.log(counter);
    if(counter === slideShow.length -1)
    {
        counter =0;
    }
    else
    {
        counter++;
    }

    if(counter === 0)
    {
        slideShow[slideShow.length -1].style.zIndex = '0'
    }
    else
    {
        slideShow[counter -1].style.zIndex = '1';
    }

    slideShow[counter].style.zIndex = '4';
    if(counter === slideShow.length -1)
    {
        slideShow[0].style.zIndex = '3';
    }
    else
    {
        slideShow[counter + 1].style.zIndex = '3';
    }

    slideShow[counter].style.animationPlayState = 'running';
    if(counter === slideShow.length -1)
    {
        slideShow[0].style.animationPlayState = 'paused';
    }
    else
    {
        slideShow[counter + 1].style.animationPlayState = 'paused';
    }
    
},3000)
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
