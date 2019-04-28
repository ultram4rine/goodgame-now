$(document).ready(function(){
    var style = localStorage.getItem("ggnowstyle");
    if (style == "twitchnow") {
        $('#style[rel=stylesheet]').attr('href', '../css/twnow.css');
    } else if (style == "goodgame") {
        $('#style[rel=stylesheet]').attr('href', '../css/gg.css');
    }
});