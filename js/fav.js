$(document).ready(function(){
    (function favs(){
        var streams = [];
        chrome.runtime.sendMessage({
            msg: "get"
        }, function(response) {
            streams = response;
        });

        var x = new XMLHttpRequest();
        x.open("GET", "https://goodgame.ru/api/4/favorites/", true);
        x.send()
        x.onload = function (){
            if (x.status == 200) {
                var active = '';
                var nonactive = '';
                online = $('#online');
                offline = $('#offline');
                $("#userbar").css("display", "block");
                $("#online").css("display", "block");
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "https://goodgame.ru/api/4/user/", true);
                xhr.send()
                xhr.onload = function () {
                    var user = JSON.parse(xhr.responseText);
                    userbar = $('#userbar');
                    userbar.html('<img src=https://static.goodgame.ru' + user.avatar + '><divid="nickname">' + user.username + '</div>');
                }
                var answer = JSON.parse(x.responseText);
                for (var i = 0; i < answer.length; i++) {
                    if (answer[i].streamer.nickname == streams[i]) {
                        active += '<a target="_blank" rel="noopener noreferrer" href="' + answer[i].link + '#autoplay"><div id="' + i + '" name="' + answer[i].streamer.nickname + '" class="stream"><img src="http:' + answer[i].preview + '"><div class="text"><div class="channame">' + answer[i].streamer.nickname + '</div><div class="description" title="' + answer[i].game + ' - ' + answer[i].viewers + ' зрителей"><div class="name">' + answer[i].game + ' -&nbsp;</div><div class="viewers">' + answer[i].viewers + ' зрителей</div></div><div title="' + answer[i].title + '" class="title">' + answer[i].title + '</div></div></div></a>'
                    } else if (answer[i].status == false) {
                        nonactive += '<a target="_blank" rel="noopener noreferrer" href="' + answer[i].link + '"><div id="' + i + '" name="' + answer[i].streamer.nickname + '" class="inactive"><img src="https://static.goodgame.ru' + answer[i].streamer.avatar + '"><div class="nickname">' + answer[i].streamer.nickname + '</div></div></a>'
                    }
                }
                if (active == '') {
                    active = '<div id="nostreams">Нет активных каналов</div>'
                    $("#filter").css("display", "none");
                } else {
                    $("#filter").css("display", "block");
                }
                online.html(active);
                offline.html(nonactive);

                $(".stream").sort(function (a, b) {
                    var contentA = parseInt($(a).find(".viewers").text());
                    var contentB = parseInt($(b).find(".viewers").text());
                    return (contentA > contentB) ? -1 : (contentA < contentB) ? 1 : 0;
                }).appendTo('#online');
            } else if (x.status == 403) {
                $("#filter").css("display", "none");
                $("#userbar").css("display", "none");
                $("#online").css("display", "none");
                $("#offline").css("display", "none");
                $("#nonactive").css("display", "none");
                $("#unauth").css("display", "block");
                $("#unauth").click(function(){
                    window.open("https://goodgame.ru", "_blank");
                })
            }
        }
    })();
});