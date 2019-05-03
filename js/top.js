$(document).ready(function(){
    var pagecount = 0;
    chrome.runtime.sendMessage({
        msg: "page"
    }, function(response) {
        pagecount = response;
        var i = 1;
        tops(i, pagecount);
    });
});

function tops(i, pagecount){
    prev = $('#prev');
    next = $('#next');
    if (i == 1) {
        prev.off("click");
        prev.css('cursor', 'default');
        prev.css('color', '#ACACAC');
        prev.css('background-color', '#2F323D');

        next.off("click");
        next.css('cursor', 'pointer');
        next.css('color', '#73ADFF');
        next.css('background-color', '#21273B');
        next.click(function(){
            i++;
            $('#topstreams').html('');
            tops(i, pagecount);
        });
    } else if (i == pagecount) {
        next.off("click");
        next.css('cursor', 'default');
        next.css('color', '#ACACAC');
        next.css('background-color', '#2F323D');

        prev.off("click");
        prev.css('cursor', 'pointer');
        prev.css('color', '#73ADFF');
        prev.css('background-color', '#21273B');
        prev.click(function(){
            i--;
            $('#topstreams').html('');
            tops(i, pagecount);
        });
    } else {
        next.off("click");
        next.css('cursor', 'pointer');
        next.css('color', '#73ADFF');
        next.css('background-color', '#21273B');
        next.click(function(){
            i++;
            $('#topstreams').html('');
            tops(i, pagecount);
        });

        prev.off("click");
        prev.css('cursor', 'pointer');
        prev.css('color', '#73ADFF');
        prev.css('background-color', '#21273B');
        prev.click(function(){
            i--;
            $('#topstreams').html('');
            tops(i, pagecount);
        });
    }
    var x = new XMLHttpRequest();
    x.open("GET", "https://goodgame.ru/api/4/stream?page=" + i + "/", true);
    x.send()
    x.onload = function (){
        if (x.status == 200) {
            var content = '';
            wrap = $('#topstreams');
            var answertop = JSON.parse(x.responseText);
            for (var i = 0; i < answertop.streams.length; i++) {
                if (answertop.streams[i].status != false) {
                    content += '<a target="_blank" rel="noopener noreferrer" href="' + answertop.streams[i].link + '#autoplay"><div id="' + i + '" name="' + answertop.streams[i].streamer + '" class="stream"><img src="http:' + answertop.streams[i].preview + '"><div class="text"><div class="channame">' + answertop.streams[i].streamer + '</div><div class="description"><div class="viewers">' + answertop.streams[i].viewers + ' зрителей</div></div><div title="' + answertop.streams[i].title + '" class="title">' + answertop.streams[i].title + '</div></div></div></a>'
                }
            }
            wrap.html(content)
        }
    }
}