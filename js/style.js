$(document).ready(function(){
    var value = localStorage.getItem("style");
    if (value == null) value = "twitchnow";
    if (value == "twitchnow") {
        $('#style[rel=stylesheet]').attr('href', '../css/twnow.css');
    } else if (value == "goodgame") {
        $('#style[rel=stylesheet]').attr('href', '../css/gg.css');
    }
});