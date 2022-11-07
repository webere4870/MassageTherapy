import {nav, head} from './Partials.js'
$().ready(()=>
{
    $('head').prepend(head)
    $( "body" ).prepend(nav)
    
})