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
                    userbar.html('<img src=https://static.goodgame.ru' + user.avatar + '><div id="nickname">' + user.username + '</div>');
                }
                var answer = JSON.parse(x.responseText);
                for (var i = 0; i < answer.length; i++) {
                    if (answer[i].streamer.nickname == streams[i]) {
                        if (answer[i].viewers.toString().length == 2 && answer[i].viewers.toString().charAt(0) == "1") {
                            var views = " зрителей";
                        } else {
                            switch (answer[i].viewers.toString().slice(-1)) {
                                case "1": 
                                    var views = " зритель";
                                    break;
                                case "2":
                                case "3":
                                case "4": 
                                    var views = " зрителя";
                                    break;
                                default:
                                    var views = " зрителей";
                            }
                        }

                        active += '<a target="_blank" rel="noopener noreferrer" href="' + answer[i].link + '#autoplay"><div id="stream" name="' + answer[i].streamer.nickname + '"><img src="http:' + answer[i].preview + '"><div class="text"><div class="channame">' + answer[i].streamer.nickname + '</div><div class="description" title="' + answer[i].game + ' - ' + answer[i].viewers + views + '"><div class="name">' + answer[i].game + ' -&nbsp;</div><div class="viewers"><span class="icoviewers"></span>' + answer[i].viewers + '<span class="views">' + views + '</span></div></div><div title="' + answer[i].title + '" class="title">' + answer[i].title + '</div></div></div></a>'
                    } else if (answer[i].status == false) {
                        if (answer[i].broadcast == false) {
                            nonactive += '<a target="_blank" rel="noopener noreferrer" href="' + answer[i].link + '"><div id="' + i + '" name="' + answer[i].streamer.nickname + '" class="inactive"><img src="https://static.goodgame.ru' + answer[i].streamer.avatar + '"><div class="nickname">' + answer[i].streamer.nickname + '</div></div></a>'
                        } else {
                            var day = '';
                            var today = new Date();
                            var date = new Date(+answer[i].broadcast.start * 1000);
                            if (today.getDay() == date.getDay()) {
                                day = "Сегодня в ";
                            } else if (today.getDay() == date.getDay() + 1) {
                                day = "Завтра в ";
                            } else {
                                var d = date.getDate().toString();
                                if (d.length == 1) {
                                    d = "0" + d;
                                }
                                var m = date.getMonth() + 1;
                                var month = m.toString();
                                if (month.length == 1) {
                                    month = "0" + month;
                                }
                                day = d + "." + month + " в ";
                            }
                            var hour = date.getHours().toString();
                            if (hour.length == 1) {
                                hour = "0" + hour;
                            }
                            var minutes = date.getMinutes().toString();
                            if (minutes.length == 1) {
                                minutes = minutes + "0";
                            }
                            nonactive += '<a target="_blank" rel="noopener noreferrer" href="' + answer[i].link + '"><div id="' + i + '" name="' + answer[i].streamer.nickname + '" class="inactive"><img src="https://static.goodgame.ru' + answer[i].streamer.avatar + '"><div class="nickname">' + answer[i].streamer.nickname + '</div><div class="start">' + day + hour + ':' + minutes + '</div></div></a>'
                        }
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

                $("#online a").sort(function (a, b) {
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