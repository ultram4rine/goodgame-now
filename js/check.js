var time = localStorage.getItem("ggnowtimeupdate");
var itime = parseInt(time);
var interval = itime * 60 * 1000;

setInterval(function(){
    var x = new XMLHttpRequest();
    x.open("GET", "https://goodgame.ru/api/4/favorites/", true);
    x.send()
    x.onload = function (){
        if (x.status == 200) {
            var streams = '';
            var answer = JSON.parse(x.responseText);
            for (var i = 0; i < answer.length; i++) {
                if (answer[i].status == true) {
                    streams += answer[i].streamer.nickname;
                }
            }
            if (streams != '') {
                var notification = new Notification(
                    streams,
                    {icon: "../icons/64.png"}
                );  
            }
        }
    };
}, interval)