$(document).ready(function(){
    var value = localStorage.getItem("ggnowstyle");
    if (value == null) {
        value = "twitchnow";
        localStorage.setItem("ggnowstyle", value);
    }
    if (value == "twitchnow") {
        $('#style[rel=stylesheet]').attr('href', '../css/twnow.css');
    } else if (value == "goodgame") {
        $('#style[rel=stylesheet]').attr('href', '../css/gg.css');
    }
});