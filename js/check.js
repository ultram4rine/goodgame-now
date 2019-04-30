var streams = [];

(function notif() {
    var time = localStorage.getItem("ggnowtimeupdate");
    var itime = parseInt(time);
    var interval = itime * 60 * 1000;
    var k = 0;
    var x = new XMLHttpRequest();
    var streamsprev = streams;
    streams = [];

    x.open("GET", "https://goodgame.ru/api/4/favorites/", true);
    x.send()
    x.onload = function (){
        if (x.status == 200) {
            var answer = JSON.parse(x.responseText);
            for (var i = 0; i < answer.length; i++) {
                if (answer[i].status == true) {
                    streams[i] = answer[i].streamer.nickname;
                    k++;
                }
            }
            if (k > 0) {
                chrome.browserAction.setBadgeText({text: "" + k});
            } else {
                chrome.browserAction.setBadgeText({text: ""});
            }
            diffRes = diff(streams, streamsprev);
            chrome.runtime.onMessage.addListener(
                function(response, sender, sendResponse) {
                    if (response.msg == "get") {
                        sendResponse(streams);
                    }
                }
            );
            if (streams.length != 0 && !compare(streams, streamsprev) && !streamsprev.some(r=> diffRes.indexOf(r) >= 0)) {
                var newstreams = '';
                for (var i = 0; i < diffRes.length; i++) {
                    if (diffRes[i] != undefined) {
                        newstreams += diffRes[i] + '\n';
                    }
                }
                chrome.notifications.create({
                    "type": "basic",
                    "iconUrl": chrome.extension.getURL("../icons/64.png"),
                    "title": "GoodGame Now",
                    "message": newstreams
                })
            }
        }
    };
    setTimeout(notif, interval);
})();

diff = function (a1, a2) {
    return a1.filter(i=>!a2.includes(i)).concat(a2.filter(i=>!a1.includes(i)))
}
compare = function (a1, a2) {
    return a1.length == a2.length && a1.every((v,i)=>v === a2[i])
}
