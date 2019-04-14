function showtop() {
    var elem = document.getElementById('top');
    elem.style.backgroundColor = '#52709C';
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
}