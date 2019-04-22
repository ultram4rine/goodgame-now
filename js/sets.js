$(document).ready(function(){
    $("#sets").click(function(){
        var btn = $(this);
        btn.parent().children().css("background-color", "#1C2644");
        btn.css("background-color", "#52709C");

        var topbar = document.getElementById('topbar');
        topbar.innerHTML = '';

        var content = document.getElementById('content');
        content.innerHTML = '';
        var value = localStorage.getItem("ggnowstyle");
        if (value == "twitchnow") {
            content.innerHTML += '<div id="style"><input type="radio" id="twitchnow" name="style" value="twitchnow" checked><label for="twitchnow">Twitch Now style</label><br><input type="radio" id="goodgame" name="style" value="goodgame"><label for="goodgame">GoodGame style</label></div>'
        } else if (value == "goodgame") {
            content.innerHTML += '<div id="style"><input type="radio" id="twitchnow" name="style" value="twitchnow"><label for="twitchnow">Twitch Now style</label><br><input type="radio" id="goodgame" name="style" value="goodgame" checked><label for="goodgame">GoodGame style</label></div>'
        }

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