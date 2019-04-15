$(document).ready(function(){
    $("#top").click(function(){
        var btn = $(this);
        btn.parent().children().css("background-color", "#1C2644");
        btn.css("background-color", "#52709C");

        var x = new XMLHttpRequest();
        x.open("GET", "https://goodgame.ru/api/getggchannels", true);
        x.onload = function (){
            var content = document.getElementById('content');
            content.innerHTML = '';
            var answer = JSON.parse(x.responseText);
            var count = Object.keys(answer.channels);
            for (var i = 0; i < 30; i++){
                content.innerHTML += '<a target="_blank" rel="noopener noreferrer" href="https://goodgame.ru/channel/' + answer.channels[i].key + '/#autoplay"><div class="stream"><img src="' + answer.channels[i].thumb + '"><div class="text"><div class="channame">' + answer.channels[i].key + '</div><div title="' + answer.channels[i].games.title + ' - ' + answer.channels[i].viewers + ' зрителей" class="description">' + answer.channels[i].games.title + ' - ' + answer.channels[i].viewers + ' зрителей</div><div title="' + answer.channels[i].title + '" class="title">' + answer.channels[i].title + '</div></div></div></a>';
            }
        }
    x.send(null);
    });

    $("#sets").click(function(){
        var btn = $(this);
        btn.parent().children().css("background-color", "#1C2644");
        btn.css("background-color", "#52709C");

        var content = document.getElementById('content');
        content.innerHTML = '';
        content.innerHTML += '<div id="style"><input type="radio" id="twitchnow" name="style" value="twitchnow" checked><label for="twitchnow">Twitch Now style</label><br><input type="radio" id="goodgame" name="style" value="goodgame"><label for="goodgame">GoodGame style</label></div>'
    });
});