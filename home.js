// let counter = 0;
// $('.linkImg').click((evt)=>
//         {
//             evt.preventDefault();
//             $('body').css("background", "linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(" + $(evt.currentTarget).attr("href") + ")")
//             $('body').css("background-position", "center")
//             $('body').css("background-size", "cover")
//             $("body").css("background-repeat", "no-repeat")
//             $("body").css("background-attachment", "scroll")
//         })

// setInterval(()=>
// {
//     setTimeout(()=>
//     {
//         $('body').css("background", "linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(" + $(`.linkImg:nth-of-type(${counter + 1})`).attr("href") + ")")
//     $('body').css("background-position", "center")
//     $('body').css("background-size", "cover")
//     $("body").css("background-repeat", "no-repeat")
//     $("body").css("background-attachment", "scroll")
//     counter = (counter + 1) % 4;
//     }, 1000)
// }, 3000)

$().ready(()=>
{
    let data = $('.logoFont h2 span:nth-of-type(1)')
    let data2 = $('.logoFont h2 span:nth-of-type(2)')
    let data3 = $('.logoFont h2 span:nth-of-type(3)')
    data.animate({marginLeft: '0'},500)
    data2.delay(200).animate({marginLeft: '0'},500)
    data3.delay(400).animate({marginLeft: '0'},500)
})