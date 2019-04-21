var parseQueryString = function( queryString ) {
    var params = {}, queries, temp, i, l;
    queries = queryString.split("&");
    for (i = 0, l = queries.length; i < l; i++) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
    }
    return params;
};

$(document).ready(function(){
    $('#fav').click(function(){
        var btn = $('#fav');
        btn.parent().children().css("background-color", "#1C2644");
        btn.css("background-color", "#52709C");

        var value = localStorage.getItem("user");
        if (value == null) {
            var topbar = document.getElementById('topbar');
            topbar.innerHTML = '';

            var content = document.getElementById('content');
            content.innerHTML = '';
            content.innerHTML += '<div id="unauth">Вы не вошли<br><a id="a" target="_blank" href=""><button id="login">Вход</button></a></div>';

            var state = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < 256; i++){
                state += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            addr = 'https://api2.goodgame.ru/oauth/authorize?response_type=code&client_id=GoodGame-Reminder&redirect_uri=/oauth/receivecode&scope=user.favorites&state=' + state;
            var login = document.getElementById('a');
            login.setAttribute('href', addr);
        }
    });

    $('#fav').click();
});