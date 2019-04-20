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
            for (var i = 0; i < 30; i++) {
                content.innerHTML += '<a target="_blank" rel="noopener noreferrer" href="https://goodgame.ru/channel/' + answer.channels[i].key + '/#autoplay"><div id="' + i + '" class="stream"><img src="' + answer.channels[i].thumb + '"><div class="text"><div class="channame">' + answer.channels[i].key + '</div><div title="' + answer.channels[i].games.title + ' - ' + answer.channels[i].viewers + ' зрителей" class="description">' + answer.channels[i].games.title + ' - ' + answer.channels[i].viewers + ' зрителей</div><div title="' + answer.channels[i].title + '" class="title">' + answer.channels[i].title + '</div></div></div></a>';
            }
    
            var i = 30;
            var iStr = '' + i - 1;
            var lastRow = document.getElementById(iStr);
            var busy;
            content.addEventListener('scroll', function() {
                checkLoading();
            });
    
            function Loader(){
                if(busy) return;
                busy = true;
                content.classList.add("load");
                window.setTimeout(onSuccess, 100);
            }
    
            function onSuccess() {
                content.classList.remove("load");
                var Cont = "";
                for (var j = 0; j < 30; j++) {
                    if (i < count.length) {
                        var Row = '<a target="_blank" rel="noopener noreferrer" href="https://goodgame.ru/channel/' + answer.channels[i].key + '/#autoplay"><div id="' + i + '" class="stream"><img src="' + answer.channels[i].thumb + '"><div class="text"><div class="channame">' + answer.channels[i].key + '</div><div title="' + answer.channels[i].games.title + ' - ' + answer.channels[i].viewers + ' зрителей" class="description">' + answer.channels[i].games.title + ' - ' + answer.channels[i].viewers + ' зрителей</div><div title="' + answer.channels[i].title + '" class="title">' + answer.channels[i].title + '</div></div></div></a>';
                        Cont += Row;
                        i++;
                    }
                }
                lastRow.insertAdjacentHTML("afterEnd", Cont);
                lastRow = document.getElementById(iStr);
                busy = false;
            }
                
            function checkLoading() {
                var bottomCoord = lastRow.getBoundingClientRect().bottom;
                var sheight = document.getElementById('content').scrollHeight;
                var top = document.getElementById('content').scrollTop;
                var cheight = document.getElementById('content').clientHeight;
                if (sheight - top === cheight) {
                    Loader();
                }
            }
        }
    x.send(null);
    });
});