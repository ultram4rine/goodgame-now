$(document).ready(function(){
    var style = localStorage.getItem("ggnowstyle");
    var time = localStorage.getItem("ggnowtimeupdate");
        
    if (time == null) {
        time = '5';
        localStorage.setItem("ggnowtimeupdate", time);
    }
    if (style == null) {
        style = "twitchnow";
        localStorage.setItem("ggnowstyle", style);
    }
    if (style == "twitchnow") {
        $('#style[rel=stylesheet]').attr('href', '../css/twnow.css');
    } else if (style == "goodgame") {
        $('#style[rel=stylesheet]').attr('href', '../css/gg.css');
    }
});