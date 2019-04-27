var time = localStorage.getItem("ggnowtimeupdate");
var itime = parseInt(time);
var interval = itime * 60 * 1000;
var streams = '';

var x = new XMLHttpRequest();
var streamsprev = streams;
x.open("GET", "https://goodgame.ru/api/4/favorites/", true);
x.send()
x.onload = function (){
    if (x.status == 200) {
        var answer = JSON.parse(x.responseText);
        var k = 0;
        for (var i = 0; i < answer.length; i++) {
            if (answer[i].status == true) {
                streams += answer[i].streamer.nickname;
                k++;
                chrome.browserAction.setBadgeText({text: "" + k});
            }
        }
        if (streams != '' && streams != streamsprev) {
            browser.notifications.create({
                "type": "basic",
                "iconUrl": browser.extension.getURL("../icons/64.png"),
                "title": "GoodGame Now",
                "message": streams
            })
        }
    }
};

setInterval(function notif(){
    var x = new XMLHttpRequest();
    var streamsprev = streams;
    streams = '';
    x.open("GET", "https://goodgame.ru/api/4/favorites/", true);
    x.send()
    x.onload = function (){
        if (x.status == 200) {
            var answer = JSON.parse(x.responseText);
            var k = 0;
            for (var i = 0; i < answer.length; i++) {
                if (answer[i].status == true) {
                    streams += answer[i].streamer.nickname;
                    k++;
                    chrome.browserAction.setBadgeText({text: "" + k});
                }
            }
            if (streams != '' && streams != streamsprev) {
                var notification = new Notification(
                    streams,
                    {icon: "../icons/64.png"}
                )
            }
        }
    };
}, interval);