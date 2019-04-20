$(document).ready(function(){
    var value = localStorage.getItem("style");
    if (value == null) value = "twitchnow";
    if (value == "twitchnow") {
        $('link[href=""]').attr('href', '../css/twnow.css');
    } else if (value == "goodgame") {
        $('link[href=""]').attr('href', '../css/gg.css');
    }
});