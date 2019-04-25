$(document).ready(function(){
    $('#fav').click(function(){
        var btn = $('#fav');
        btn.parent().children().css("background-color", "#1C2644");
        btn.css("background-color", "#52709C");

        var x = new XMLHttpRequest();
        x.open("GET", "https://goodgame.ru/api/4/favorites/", true);
        x.send()
        x.onload = function (){
            if (x.status == 403) {
                var topbar = document.getElementById('topbar');
                topbar.innerHTML = '';
    
                var content = document.getElementById('content');
                content.innerHTML = '';
                content.innerHTML += '<div id="unauth">Вы не вошли<br><button id="login">Вход</button></div>';
            } else {
                var topbar = document.getElementById('topbar');
                topbar.innerHTML = '';
                topbar.innerHTML += '<div id="filter"><span class="icosearch"></span><input id="search" type="text"></div>';

                $("#search").focusin(function(){
                    $("#filter").addClass("focused");
                })
                $("#search").focusout(function(){
                    $("#filter").removeClass("focused");
                })

                var content = document.getElementById('content');
                content.innerHTML = '';

                var answer = JSON.parse(x.responseText);
                for (var i = 0; i < answer.length; i++) {
                    if (answer[i].status == true) {
                        console.log(answer[i].title)
                        content.innerHTML += '<a target="_blank" rel="noopener noreferrer" href="' + answer[i].link + '#autoplay"><div id="' + i + '" name="' + answer[i].streamer.nickname + '" class="stream"><img src="http:' + answer[i].preview + '"><div class="text"><div class="channame">' + answer[i].streamer.nickname + '</div><div class="description" title="' + answer[i].game + ' - ' + answer[i].viewers + ' зрителей"><div class="name">' + answer[i].game + ' -&nbsp;</div><div class="viewers">' + answer[i].viewers + ' зрителей</div></div><div title="' + answer[i].title + '" class="title">' + answer[i].title + '</div></div></div></a>';
                    }
                }
            }
        }
    });

    $('#fav').click();
});