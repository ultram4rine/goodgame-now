$(document).ready(function(){
    $("#top").click(function(){
        var btn = $(this);
        btn.parent().children().css("background-color", "#1C2644");
        btn.css("background-color", "#52709C");
    
        var x = new XMLHttpRequest();
        x.open("GET", "https://goodgame.ru/api/getggchannels", true);
        x.onload = function (){
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
            var count = Object.keys(answer.channels);
            for (var i = 0; i < 30; i++) {
                content.innerHTML += '<a target="_blank" rel="noopener noreferrer" href="https://goodgame.ru/channel/' + answer.channels[i].key + '/#autoplay"><div id="' + i + '" name="' + answer.channels[i].key + '" class="stream"><img src="' + answer.channels[i].thumb + '"><div class="text"><div class="channame">' + answer.channels[i].key + '</div><div class="description" title="' + answer.channels[i].games.title + ' - ' + answer.channels[i].viewers + ' зрителей"><div class="name">' + answer.channels[i].games.title + ' -&nbsp;</div><div class="viewers">' + answer.channels[i].viewers + ' зрителей</div></div><div title="' + answer.channels[i].title + '" class="title">' + answer.channels[i].title + '</div></div></div></a>';

                var iStr = '' + i;

                if ($('link[href="../css/gg.css"]').attr('href') == '../css/gg.css') {
                    elem = $('#' + iStr + ' .viewers');
                    var str = elem.text();
                    if (str.search(' зрителей') != -1) {
                        elem.html(elem.html().replace(" зрителей", ""));
                    }
                }
            }
            i = 30;
            iStr = '' + i - 1;
            var lastRow = document.getElementById(iStr);
            var busy;
            content.addEventListener('scroll', function() {
                checkLoading();
            });
    
            function Loader(){
                if(busy) return;
                busy = true;
                content.classList.add("load");
                window.setTimeout(onSuccess, 300);
            }
    
            function onSuccess() {
                content.classList.remove("load");
                var Cont = "";
                for (var j = 0; j < 30; j++) {
                    if (i < count.length) {
                        content.innerHTML += '<a target="_blank" rel="noopener noreferrer" href="https://goodgame.ru/channel/' + answer.channels[i].key + '/#autoplay"><div id="' + i + '" name="' + answer.channels[i].key + '" class="stream"><img src="' + answer.channels[i].thumb + '"><div class="text"><div class="channame">' + answer.channels[i].key + '</div><div class="description" title="' + answer.channels[i].games.title + ' - ' + answer.channels[i].viewers + ' зрителей"><div class="name">' + answer.channels[i].games.title + ' -&nbsp;</div><div class="viewers">' + answer.channels[i].viewers + ' зрителей</div></div><div title="' + answer.channels[i].title + '" class="title">' + answer.channels[i].title + '</div></div></div></a>';
                        i++;
                        var iStr = '' + i - 1;
                        if ($('link[href="../css/gg.css"]').attr('href') == '../css/gg.css') {
                            elem = $('#' + iStr + ' .viewers');
                            var str = elem.text();
                            if (str.search(' зрителей') != -1) {
                                elem.html(elem.html().replace(" зрителей", ""));
                            }
                        }
                    } else {
                        break;
                    }
                }
                lastRow.insertAdjacentHTML("afterEnd", Cont);
                lastRow = document.getElementById(iStr);
                busy = false;
            }
                
            function checkLoading() {
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