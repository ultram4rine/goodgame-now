$(document).ready(function(){
    $("#sets").click(function(){
        var btn = $(this);
        btn.parent().children().css("background-color", "#1C2644");
        btn.css("background-color", "#52709C");

        var topbar = document.getElementById('topbar');
        topbar.innerHTML = '';

        var content = document.getElementById('content');
        content.innerHTML = '';
        var style = localStorage.getItem("ggnowstyle");
        var time = localStorage.getItem("ggnowtimeupdate");
        if (style == "twitchnow") {
            content.innerHTML += '<div id="style" class="sets">Стиль вкладок<br><input type="radio" id="twitchnow" name="style" value="twitchnow" checked><label for="twitchnow">Twitch Now style</label><input type="radio" id="goodgame" name="style" value="goodgame"><label for="goodgame">GoodGame style</label></div><div id="time" class="sets">Автообновление через<br><input type="range" id="slide" min="1" max="60" step="1" value="5""><span id="val"></span></div>'
        } else if (style == "goodgame") {
            content.innerHTML += '<div id="style" class="sets">Стиль вкладок<br><input type="radio" id="twitchnow" name="style" value="twitchnow"><label for="twitchnow">Twitch Now style</label><input type="radio" id="goodgame" name="style" value="goodgame" checked><label for="goodgame">GoodGame style</label></div><div id="time" class="sets">Автообновление через<br><input type="range" id="slide" min="1" max="60" step="1" value="5""><span id="val"></span></div>'
        }
        
        if (time == null) {
            time = '5';
        }
        $('#slide').val(time)
        $('#val').html(time + ' мин.');
        $(document).on('input', '#slide', function() {
            $('#val').html($(this).val() + ' мин.');
            localStorage.setItem("ggnowtimeupdate", $(this).val());
        });

        $('input[type=radio][name=style]').change(function() {
            if (this.value == 'twitchnow') {
                $('#style[rel=stylesheet]').attr('href', '../css/twnow.css');
            }
            else if (this.value == 'goodgame') {
                $('#style[rel=stylesheet]').attr('href', '../css/gg.css');
            }
            localStorage.setItem("ggnowstyle", this.value);
        });
    });
});